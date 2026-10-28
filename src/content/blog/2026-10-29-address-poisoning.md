---
title: "Address poisoning: what it is and how to avoid it"
description: "Address poisoning plants a lookalike wallet address in your history so you copy the wrong one. Learn how it works and the habits that stop it."
pubDate: 2026-10-29
category: "explainer"
tags: ["address poisoning", "wallet security", "phishing"]
sources:
  - title: "Etherscan Information Center: Address Poisoning Attacks Are Rising on Ethereum"
    url: "https://info.etherscan.com/address-poisoning-attacks-are-rising-on-ethereum"
  - title: "Shixuan Guan and Kai Li, Characterizing Ethereum Address Poisoning Attack (ACM CCS 2024)"
    url: "https://par.nsf.gov/servlets/purl/10580433"
  - title: "Scam Sniffer: Multiple Safe Wallets Lose $2 Million to Address Poisoning Attacks"
    url: "https://drops.scamsniffer.io/multiple-safe-wallets-lose-2-million-to-address-poisoning-attacks/"
---

Address poisoning, also called address spoofing, is a scam where an attacker sends you a tiny or fake transaction from a wallet address that looks almost identical to one you use. The goal is to get that lookalike into your transaction history, so that later you copy it by mistake and send real funds to the attacker.

Nothing about this attack hacks your wallet. No key is stolen and no contract is exploited. The attacker only needs you to make one copy and paste error, and the scam is designed to make that error easy.

## How the attack works

Blockchains are public. Anyone can see which addresses you send money to, and anyone can send something to you. Attackers use both facts.

1. **They watch for activity.** Automated tools monitor the chain for wallets that have just made a transfer, especially of stablecoins.
2. **They generate a lookalike address.** Wallet and explorer interfaces usually shorten addresses to the first and last few characters, for example `0x1a2b...9f8e`. An attacker generates a new address that matches those visible characters. The middle is different, but you rarely see the middle.
3. **They plant it in your history.** The attacker sends you a transfer from the lookalike address. It is often a zero-value token transfer, a fake token transfer that appears to come from your real counterparty, or a dust amount of a real token. Because it shows up in your history right next to your genuine transaction, it looks like part of the same relationship.
4. **They wait.** The next time you want to pay that person or exchange, you open your history, find what looks like the right address, copy it and send. The funds go to the attacker, and blockchain transfers cannot be reversed.

Etherscan's own security write-up describes how fast this has become: poison transfers can land within minutes of a legitimate transaction, and some wallets have received many of them around a single payment. Because token contracts can emit transfer events that name any sender, a fake transfer can appear in your history even though the "sender" never held your funds or signed anything. Block explorers have responded in part by hiding zero-value token transfers by default, which helps but does not remove the risk from dust transfers and fake tokens.

## How big is it?

Researchers Shixuan Guan and Kai Li studied the problem on Ethereum and presented their work at ACM CCS 2024. Looking at blocks from November 2022 to February 2024, they reported more than 1,800 victim addresses and potential losses of up to 144 million US dollars. They also found the activity was concentrated: the large majority of the phishing addresses they identified were controlled by just four entities. Those figures are the authors' estimates for that window on one chain, not a current total.

Security firms continue to document individual cases. Scam Sniffer, for example, has published a write-up of a cluster of Safe wallets drained through address poisoning. The pattern in these cases is consistent: the victims were careful enough to use real addresses most of the time, and a single poisoned copy was enough.

## How to protect yourself

These habits cost a few seconds and break the attack at its weak point, which is the copy step.

- **Check the whole address, not just the ends.** The first and last characters are exactly what the attacker matches. Compare the full string, or at minimum a long stretch of the middle, against a source you trust, such as the recipient's own message or invoice.
- **Never copy an address from your transaction history.** Your history is the place the attacker writes to. Treat it as untrusted, even for people you pay every week.
- **Use an address book or allowlist.** Save verified addresses once, with a label, in your wallet or in a block explorer's private name tags, and send only to saved entries. Where available, ENS names can also reduce reliance on raw addresses, though you should still confirm the name resolves to the address you expect.
- **Send a small test transaction first for large payments.** Confirm that the recipient received it before sending the rest. Be aware that this alone is not enough if you copy the address from history both times, so combine it with the habits above.
- **Ignore unexpected tiny transfers.** A zero-value or dust transfer you did not ask for is a warning sign, not a receipt. Do not interact with the token and do not reuse its sender address.
- **Slow down on large or unusual sends.** The scam depends on routine. Any pause before pasting an address is useful.

If you think you sent funds to a poisoned address, assume they cannot be recovered by the network itself. You can contact the exchange or service that holds the receiving address, if you can identify one, and report the address to a security firm or explorer. Do not trust anyone who contacts you offering to recover funds for a fee.

## How Signward helps

Signward is a browser extension that checks the addresses and requests involved when you use a wallet in Chrome. When a counterparty address is already known to be malicious, it can warn you before your wallet opens, and it explains risky requests in plain language. It is a safety net, not a replacement for the habits above. A brand new lookalike address may not be on any list yet, so verifying the full address before you send remains your most reliable defense.

## The short version

Address poisoning works because blockchains show everyone's activity and interfaces hide most of every address. You cannot stop attackers from sending you fake transfers, but you can stop copying from the place they write to. Verify the full address, keep a trusted address book, and treat your own history as untrusted.

*This article is educational and is not financial advice. No tool or habit makes crypto transfers completely risk free.*
