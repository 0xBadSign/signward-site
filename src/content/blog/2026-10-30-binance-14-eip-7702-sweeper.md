---
title: "Inside the contract that drained Binance 14: an EIP-7702 sweeper, read from its bytecode"
description: "We pulled the delegate contract behind the Binance 14 drain from the chain and read it from bytecode alone. Here is what it does, how to check it yourself, and what it means for your wallet."
pubDate: 2026-10-30
category: "incident"
tags: ["eip-7702", "account delegation", "incident", "bytecode", "binance"]
heroPrompt: "Flat editorial illustration of a large vault door that has been fitted with a small foreign mechanical device, a thin pipe leading from the vault into the dark, teal and deep navy palette, calm and technical mood, no text, no logos"
sources:
  - title: "banteg: Binance 14 delegated sweeper, bytecode-matching Solidity reconstruction"
    url: "https://gist.wavey.info/Ta3FgAxastgj42BEy4V64SYR"
  - title: "Etherscan: Binance 14 (0x28C6c062...21d60)"
    url: "https://etherscan.io/address/0x28C6c06298d514Db089934071355E5743bf21d60"
  - title: "Etherscan: delegate contract 0x63e842B0...c6fAe"
    url: "https://etherscan.io/address/0x63e842B054Bd624a465454D533C33F573e9c6fAe"
  - title: "EIP-7702: Set Code for EOAs"
    url: "https://eips.ethereum.org/EIPS/eip-7702"
  - title: "EIP-7702 Phishing Attack (arXiv 2512.12174)"
    url: "https://arxiv.org/abs/2512.12174"
  - title: "Openchain signature database"
    url: "https://openchain.xyz/signatures"
  - title: "CoinDesk: Wintermute on CrimeEnjoyor EIP-7702 sweeper contracts"
    url: "https://www.coindesk.com/tech/2025/06/02/post-pectra-upgrade-malicious-ethereum-contracts-are-trying-to-drain-wallets-but-to-no-avail-wintermute"
---

On October 29, on-chain analysts flagged a very large outflow from the Binance hot wallet that block explorers label **Binance 14**. The headline totals and the question of who is behind it are still being worked out, and this post does not depend on either. It looks at one thing that anyone can verify: the contract that took control of the wallet.

That contract was never published with source code. It still left everything we need on chain. We fetched its bytecode, decoded it with free tools, and reached the same picture as the independent reconstruction published by the researcher banteg. Here is what it does, how you can check it yourself, and what it means for an ordinary wallet.

## The short version

- Binance 14 is an ordinary account (an EOA), not a smart contract. Since the Pectra upgrade, an EOA can carry code through **EIP-7702**: one signed authorization points the account at a contract, and that contract's code then runs as the account.
- Binance 14 now points at a small contract, `0x63e842B054Bd624a465454D533C33F573e9c6fAe`. Its main function, `sweep(address,address[])`, sends every listed token, plus all ETH except 1, to a destination chosen by the caller.
- Only one hardcoded address can call it. The contract stores nothing, verifies no signatures, and does nothing except move funds out.
- For an individual wallet the lesson is concrete: an EIP-7702 authorization is not a routine signature. It hands the whole account to the code it names.

## Step 1: confirm the delegation yourself

You do not need to trust anyone's screenshot. Ask any Ethereum node for the code at the Binance 14 address with `eth_getCode`. At the time of writing it returns:

```
0xef010063e842b054bd624a465454d533c33f573e9c6fae
```

EIP-7702 defines that exact shape. The prefix `0xef0100` is the delegation designator, and the 20 bytes after it are the contract the account now delegates to. A normal EOA returns `0x`, meaning no code. So this one line proves that Binance 14, an account with more than 18.9 million transactions behind it, is now running `0x63e842B0...c6fAe` as its code. When we checked, it held under 1 ETH.

## Step 2: read the contract from bytecode

Every contract's runtime bytecode is public. The delegate is 1,674 bytes: 1,621 bytes of executable code followed by a 53-byte metadata trailer. The trailer is CBOR data written by the Solidity compiler, and its last field identifies the compiler version: **solc 0.8.28**.

Function names are not stored in bytecode, but their **selectors** are. A selector is the first 4 bytes of the keccak-256 hash of a function signature, and the contract's entry code compares the incoming call against each one. Pulling those values out and looking them up in the public Openchain signature database gave most of the names directly. For the rest, we hashed candidate signatures ourselves until they matched.

One detail is worth knowing if you try this. The compiler stores some selectors **halved**: it pushes a 4-byte value and then shifts it left by 225 bits instead of 224, which doubles it. The selector `0xb61d27f6`, for `execute(address,uint256,bytes)`, never appears in the bytecode as written. It appears as `0x5b0e93fb`, which is exactly half of it. Search the raw hex for a selector and you would miss it.

Everything we recovered:

| Selector | Name | Role |
|---|---|---|
| `0x8a179be4` | `sweep(address,address[])` | Empties the account |
| `0x01e33667` | `withdrawToken(address,address,uint256)` | Sends one token amount |
| `0x4782f779` | `withdrawETH(address,uint256)` | Sends an ETH amount |
| `0x043ff9d2` | `callExecute(address,address,uint256,bytes)` | Drives another account |
| `0x97dc97cb` | `authorizedCaller()` | Returns the only allowed caller |

It also defines the errors `NotAuthorized()`, `ETHTransferFailed()`, `TokenTransferFailed()`, `NoCodeAtExecutor(address)` and `ExecuteCallFailed(address,bytes)`, and one event, `SweepItemFailed(address,uint8)`. The only external calls it makes are the token functions `balanceOf` and `transfer`, plain ETH sends, and `execute(address,uint256,bytes)` on other accounts.

Every one of these names and roles matches the Solidity reconstruction banteg published. His version goes one step further: he recompiled it with the same compiler settings and showed that the result is byte-for-byte identical to the executable code on chain.

## What the contract does

**It sweeps everything to one destination.** `sweep(to, tokens)` loops over a list of token addresses. For each token it reads the balance and transfers all of it to `to`. When the list contains the zero address, which stands for ETH, it sends everything above 1 ETH and leaves exactly 1 ETH behind. Because the code runs as Binance 14 under EIP-7702, "this contract's balance" means Binance 14's balance.

**One failure does not stop the rest.** If a token behaves oddly or a transfer fails, the contract emits `SweepItemFailed` with a reason code and moves on to the next token. That is the design you want if you plan to empty dozens of tokens in a single transaction.

**Only one address can drive it.** The contract contains exactly one hardcoded address, `0x7C8601d4645b93cea45F71e118A729332e6b5CA0`, and every privileged function compares the caller against it. Anyone can see the delegation, but nobody else can trigger the sweep.

**It stores nothing.** The code has no storage reads or writes at all. Under EIP-7702 a delegate runs against the delegating account's own storage, so instead of keeping an owner in storage, the author baked the caller into the code.

**It can reach other delegated accounts.** `callExecute` calls `execute(address,uint256,bytes)` on another account, but only if that account has code. That fits a setup where several wallets point at contracts like this one and a single relayer operates all of them.

## Why this looks like a signature problem, not a stolen key

An EIP-7702 authorization is a signed message naming a chain, a contract and a nonce. Whoever holds a valid signed authorization can submit it, and pay the gas, without ever knowing the account's private key. With the private key itself, an attacker could simply sign ordinary transfers and would not need a delegate contract, a sweep function or a separate relayer.

So the shape of this contract fits an obtained authorization rather than a stolen key. Because anyone can submit a signed authorization, it can be collected first and activated later by someone else's sponsored transaction. The EIP-7702 phishing paper also reports that malicious authorizations on mainnet cluster around a small number of contract families, the pattern Wintermute described in 2025 when it named the reused "CrimeEnjoyor" sweepers.

## How to tell a drainer delegate from a real smart account

Wallets use EIP-7702 for legitimate reasons, such as batching calls or letting an app pay gas. Those delegate contracts look very different from this one:

- **They store state.** Real smart accounts keep owners, keys, nonces or modules in storage. This contract has no storage operations.
- **They check signatures.** Real accounts verify that a request was authorized by the owner. This one checks a single hardcoded caller and nothing else.
- **They do many things.** This contract does one thing: move value out.

Small, stateless, locked to one outside caller, and built around "send the whole balance" is the fingerprint of a sweeper.

## What this means for your wallet

Exchange hot wallets are run by internal signing systems, not by a browser and a wallet popup, so no browser extension sits in their signing path. The same technique is used against ordinary users every day, though, and there the defense is in your hands.

- **Treat an EIP-7702 authorization like handing over the account.** If a site asks you to "upgrade", "activate" or "enable" your account and the wallet shows an authorization or account-delegation request, stop unless you started that upgrade inside your own wallet.
- **Check whether your account is delegated.** Paste your address into a block explorer, or call `eth_getCode`. An answer that starts with `0xef0100` means your account runs someone's code. If you did not set that up yourself, move your funds to a fresh wallet.
- **Know how to undo it.** Under EIP-7702, an authorization that names the zero address clears the delegation. Wallets that support smart accounts usually offer a "switch back" option that does this for you.

Signward shows a dedicated account-delegation warning whenever a site asks you to sign an EIP-7702 authorization, along with the contract it would hand your account to. It cannot help once an authorization has already been signed. The point is to catch the request before you sign it.

Credit to banteg for the reconstruction, which made it possible to check every step of this analysis against an independent result.
