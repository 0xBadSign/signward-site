---
title: "Dusting attacks and unsolicited tokens: what to do with them"
description: "Tiny or unexpected tokens in your wallet are usually tracking attempts or bait for a scam. Leave them alone, hide them, and never act on their links."
pubDate: 2026-11-25
category: "explainer"
tags: ["dusting attack", "scam tokens", "wallet privacy"]
sources:
  - title: "Coinbase Help: Dusting attacks"
    url: "https://help.coinbase.com/en-bm/coinbase/privacy-and-security/avoid-scams/dusting-attacks"
  - title: "Trezor Support: Dusting attacks & airdrop scam tokens"
    url: "https://trezor.io/support/a/dusting-attacks-airdrop-scam-tokens"
  - title: "Ledger Academy: Dusting attack"
    url: "https://www.ledger.com/academy/glossary/dusting-attack"
heroPrompt: "An abstract illustration of tiny glowing specks drifting toward a calm vault door while a few of them trail thin lines back to a hidden observer."
---

A dusting attack is when someone sends tiny amounts of crypto, or a worthless token, to many wallets at once. The goal is either to track who owns those wallets or to bait the owner into interacting with something harmful. The safe response is almost always the same: do nothing with it.

This post explains the two main versions of the trick, why they work, and a short routine for handling surprise tokens.

## What a dusting attack is

Dust is a very small balance, often worth a fraction of a cent. In the classic form, an attacker sends dust to thousands of addresses. Then they watch what happens next. If you later spend that dust together with your other funds, the transaction links addresses that you may have wanted to keep separate. With enough of these links, an analyst can try to work out which addresses belong to the same person or service.

Coinbase describes the real risk as arising when you move the dust, because that gives the attacker something to analyze. If you never touch it, there is nothing for them to learn from it. Ledger's glossary describes the same tactic as a blockchain-analysis technique. This version is most relevant on UTXO chains such as Bitcoin, Litecoin and Dogecoin, where a single payment can combine several inputs.

## The newer version: bait tokens

On account-based chains such as Ethereum, BNB Smart Chain and Solana, anyone can create a token and send it to any address without your consent. That makes a second kind of unsolicited transfer common. Instead of tracking you, the token is bait.

Trezor reports that malicious smart contracts and NFTs now dominate these incidents. Typical variations include:

- A token whose name contains a website or a message such as "claim your reward at ..." so the link appears right in your wallet.
- A fake token that imitates a stablecoin and displays a large balance, so it looks like someone sent you money by mistake.
- An NFT that points to a "mint" or "claim" page that asks for a signature or an approval.

In each case the transfer itself costs you nothing and does no harm. The harm comes from what you do next: visiting the site, connecting your wallet, and approving something.

## Why people fall for it

Surprise tokens work because they create curiosity and, sometimes, greed. A balance you did not expect feels like an opportunity or a mistake that needs fixing. Attackers rely on that. They also rely on the fact that a token appearing in your wallet looks, at a glance, like something your wallet vouched for. It did not. Wallets generally display whatever tokens the chain says you hold, and the chain does not check whether a token is legitimate.

A token that shows a high dollar value is not proof of value either. Fake tokens can copy a real token's name and symbol, and the price shown may be meaningless if the token has no real market.

## What to do when a token you did not buy shows up

A simple routine covers most cases:

1. **Do not click anything.** Ignore links in token names, descriptions, memos or the NFT metadata.
2. **Do not try to sell, swap or send it.** Interacting with the token contract can run code you did not intend, and on UTXO chains, spending the dust can link your addresses.
3. **Hide it instead.** Most wallets let you hide a token or mark it as spam. Hiding removes the visual temptation without any on-chain action.
4. **Check your approvals if you already interacted.** If you connected to a site or signed something because of a surprise token, review and revoke any approvals that look unfamiliar. Our guide on revoking token approvals covers how.
5. **On Bitcoin-style chains, avoid consolidating unknown dust** with your main funds. Wallets with coin control let you freeze specific outputs so they are never spent by accident.

If a "mistaken payment" arrives and someone then messages you asking you to send it back, treat that message as part of the scam. A real mistake does not require you to approve a contract or visit a link.

## What it does and does not tell you

Receiving dust does not mean your wallet was hacked. Your address is public on the chain, so anyone can send to it, and attackers often target addresses in bulk. It also does not mean you were singled out. In most cases you were one of thousands.

It can, however, signal that your address has been noticed. If privacy matters to you, this is a reasonable moment to review how you use that wallet. For example, keep a separate address for public activity such as ENS names or social profiles, and avoid mixing it with funds you want to keep private. Our post on separate hot wallets explains the idea.

## How Signward helps

Signward is built to flag risky interactions before you confirm them, such as approval requests tied to unfamiliar contracts or links to suspicious domains. If a surprise token leads you to a claim page, that kind of warning can give you a moment to stop. It does not replace the basic rule above, which is to leave unsolicited tokens alone, and it cannot catch everything.

## Quick summary

- Dust is tiny or worthless crypto sent to many wallets without your consent.
- The classic version tracks you if you spend it. The newer version baits you into clicking.
- Leave it untouched, hide it, and never follow links attached to it.
- If you already interacted, review your approvals.

This article is for education only and is not financial or legal advice.
