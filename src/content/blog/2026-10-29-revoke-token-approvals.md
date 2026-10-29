---
title: "How to revoke token approvals and when you should"
description: "A token approval lets a contract spend your tokens until you cancel it. Here is how to review and revoke approvals, and which ones matter most."
pubDate: 2026-10-29
category: "guide"
tags: ["token approvals", "revoke", "setapprovalforall"]
sources:
  - title: "EIP-20: Token Standard (approve and allowance)"
    url: "https://eips.ethereum.org/EIPS/eip-20"
  - title: "EIP-721: Non-Fungible Token Standard (setApprovalForAll)"
    url: "https://eips.ethereum.org/EIPS/eip-721"
  - title: "Zerion: What is token allowance?"
    url: "https://zerion.io/blog/what-is-token-allowance/"
---

A token approval is a standing permission that lets a smart contract move your tokens without asking again. It stays active until you cancel it, even if you never use the app again. Revoking an approval sets that permission back to zero, which is one of the simplest ways to shrink your attack surface.

This guide explains the two kinds of approval, which ones are riskiest, and a routine for cleaning them up.

## Why approvals exist at all

Tokens on Ethereum-style chains do not move on their own. When you swap on a decentralized exchange, the exchange contract needs permission to pull your token from your wallet. You grant that permission with an `approve` transaction, then the swap itself runs. The standard that defines this for fungible tokens is ERC-20, which includes an `approve` function and an `allowance` view that reports how much a given spender may still take.

This design is useful, but it has a side effect: the permission outlives the task. If you approved a contract six months ago and it later turns out to be malicious, compromised, or upgraded to something you did not expect, the permission is still there.

## Two kinds of approval to know

**ERC-20 allowances** are numbers. An allowance names a spender and an amount. Many apps request an "unlimited" amount so you do not have to approve again, which means the cap is effectively your whole balance of that one token. It is still limited to a single token.

**setApprovalForAll** is used for NFTs (ERC-721 and ERC-1155). It is a yes or no switch, not a number. When set to true for an operator, that operator can move every NFT you hold in that collection, including ones you receive later. There is no per-item limit. Scams built on this call are often described as ice phishing.

Both are legitimate tools. The risk is in who holds the permission and how long you leave it open.

## Which approvals to review first

You do not need to treat all approvals equally. A practical priority order:

1. **Unknown or unrecognizable spenders.** If you cannot tell which app an approval belongs to, that is a reason to revoke it.
2. **Unlimited allowances on tokens with real value.** A stablecoin or large holding with an unlimited approval deserves attention.
3. **setApprovalForAll on valuable collections.** One switch covers everything in the collection.
4. **Old approvals for apps you no longer use.** Dormant permissions give you risk with no benefit.

Approvals to well-known protocols you use daily are lower risk, though not zero. A bug or compromise in a trusted contract can still affect you.

## How to revoke

Revoking is an ordinary on-chain transaction, so it costs gas on that network.

1. Open an approval checker such as Revoke.cash or the token approval tool built into a block explorer like Etherscan. Use the address you already know, and type the site address yourself or use your own bookmark rather than a link from a message.
2. Connect your wallet, or enter your address in read-only mode to view approvals without connecting.
3. Select the network, since approvals are per chain.
4. Find a risky entry and choose revoke. Your wallet will show a transaction that sets the allowance to zero, or setApprovalForAll to false.
5. Read the wallet prompt carefully and confirm only that single revoke action.

Some tools can also reduce an allowance to an exact amount rather than zero. Setting a small exact amount for an app you use often is a reasonable middle path.

## Limits of revoking

Revoking helps, but it has boundaries worth knowing.

- It does not undo a theft that already happened. It only closes the door for the future.
- It does not cover off-chain signatures. Permit-style messages authorize spending through a signature rather than a transaction, so they may not appear in a simple allowance list until used. Signing less, and reading what you sign, matters just as much.
- Approvals are per token, per spender, and per chain. A clean result on one network says nothing about another.
- If you suspect your seed phrase or private key is exposed, revoking is not enough. Move assets to a new wallet created on a clean device, because an attacker with the key can re-approve anything.

## A simple routine

Review approvals every month or after trying a new app. Prefer exact amounts over unlimited ones when the app allows it. Keep a separate wallet with a small balance for experimenting with new sites, and keep long-term holdings in a wallet that rarely approves anything. If a site asks for an approval you did not expect, stop and verify the site before continuing.

## How Signward helps

Signward is built to surface what a request would do before you confirm it, including approval and signature requests, so you can see whether a prompt grants spending rights and to whom. It does not replace reviewing your existing approvals with a checker, and no tool removes the need to read what you sign.

*This article is for education only and is not financial or security advice for your specific situation.*
