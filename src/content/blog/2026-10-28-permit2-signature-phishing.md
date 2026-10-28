---
title: "Permit2 phishing: how a signature can drain your tokens"
description: "Permit2 phishing tricks you into signing an off-chain message that lets an attacker move your tokens later. Here is how it works and how to spot it."
pubDate: 2026-10-28
category: "explainer"
tags: ["permit2", "signature phishing", "token approvals"]
sources:
  - title: "MetaMask Support: Signature phishing"
    url: "https://support.metamask.io/stay-safe/protect-yourself/wallet-and-hardware/signature-phishing"
  - title: "Uniswap Docs: Permit2 overview"
    url: "https://docs.uniswap.org/contracts/permit2/overview"
  - title: "Beosin: Those who have used Uniswap, please be careful"
    url: "https://beosin.com/resources/those-who-have-used-uniswap-please-be-careful-let-beosin-d"
---

Permit2 phishing is a scam where a fake site asks you to sign an off-chain message that looks harmless but authorizes someone else to spend your tokens. Because a signature costs no gas and creates no visible transaction, the theft can happen later, after you have closed the page and forgotten about it.

This post explains what Permit2 is for, how attackers abuse it, and the checks that catch most attempts.

## What Permit2 is meant to do

Normally, using a token on a decentralized exchange takes two steps. First you send an on-chain approval so the exchange contract may spend your token. Then you send the swap itself. Each step costs gas.

Permit2 is a shared contract, published by Uniswap, that moves this logic into one place. You approve the Permit2 contract once for a token. After that, apps ask you to sign a message saying who may spend how much, and until when. The app bundles your signature with the action, so you pay for fewer transactions. This is a real convenience and many legitimate apps use it.

The same design is what makes it attractive to criminals. A signed permit is a portable authorization. Whoever holds it can submit it on-chain.

## How the attack works

1. **You land on a fake page.** It might be a clone of a known app, a fake airdrop claim or a "verify your wallet" prompt, reached through a phishing link, a hijacked social account or a malicious ad.
2. **You connect your wallet.** Connecting alone does not move funds, but it tells the site which tokens you hold.
3. **You are asked to sign.** The site requests a typed-data signature. The wallet shows a structured message with fields like token, amount, spender and expiration. Many people click through because a signature does not look like spending.
4. **The attacker submits the permit.** Using your signature, they call Permit2 and transfer your approved tokens to themselves. This only works for tokens you have previously approved to the Permit2 contract, which is common for anyone who has used modern swap interfaces.

Security firms have documented permit-style signature attacks as a large share of drainer losses. Exact figures vary by report and period, so treat any single percentage with care. The mechanism is what matters.

## Why it is easy to miss

- **No gas, no transaction.** Nothing appears in your wallet history when you sign. The loss shows up later as a transfer you never approved on-chain.
- **Unreadable screens.** Typed-data requests can be dense. The contract named in the request may be the genuine Permit2 address, while the spender field inside the message is the attacker.
- **Large amounts and long expiry.** A permit can name a very large amount and an expiration far in the future, so a signature from today can still be used much later.
- **Innocent labels.** The page copy says "claim", "verify" or "sync", never "grant spending rights".

## What to check before you sign

Each of these is a quick habit you can apply on its own.

- **Read the request type.** If a site you expected to be simple asks for a permit or "permit2" signature, ask why. A claim page should not need to spend your tokens.
- **Check the spender.** The spender field should be an address you recognize as the app you meant to use. If you cannot verify it, do not sign.
- **Check the amount and expiry.** A swap needs the amount you are swapping and a short deadline. Near-maximum values and distant expirations are warning signs.
- **Check the domain.** Type the address yourself or use a bookmark. Look for lookalike spellings, extra words and unfamiliar endings.
- **Reject if unsure.** Declining costs you nothing. A wrongly signed permit can cost everything approved.

## Reducing the damage if you slip

- **Revoke old approvals.** Review which tokens are approved to Permit2 and to individual apps, and revoke the ones you no longer use. A permit cannot move tokens that have no approval behind it.
- **Use a separate wallet for experiments.** Keep a low-balance wallet for mints, claims and new apps, and keep long-term holdings in another wallet that rarely signs anything.
- **Act fast if you signed something odd.** Move remaining funds to a fresh wallet and revoke approvals. Some permits can also be invalidated on-chain by their owner, depending on how they were issued. Do this from a clean device.
- **Use a hardware wallet for key safety, not for judgment.** It protects your private key, but it will still sign a malicious message if you confirm it. You must read the screen.

## How Signward helps

Signward is built to make requests like these easier to read before you sign. It aims to flag risky signature and approval requests, such as unfamiliar spenders, very large amounts and suspicious domains, and to explain them in plain language. It cannot replace your own judgment, and no tool can promise to catch every scam.

## The short version

A Permit2 signature is real spending authority, even though it feels like a login. Treat every signature request as you would a transaction: verify the site, the spender, the amount and the expiry, and revoke approvals you do not need.

*This article is for education only and is not financial or security advice.*
