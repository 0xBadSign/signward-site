---
title: "Blind signing: why eth_sign and unreadable prompts are risky"
description: "Blind signing means approving data your wallet cannot explain; eth_sign is the riskiest form, and refusing unreadable requests is the simplest defense."
pubDate: 2026-11-05
category: explainer
tags: ["signatures", "blind-signing", "phishing"]
sources:
  - title: "MetaMask Docs: Signing methods"
    url: "https://docs.metamask.io/wallet/concepts/signing-methods/"
  - title: "SlowMist: Blank check eth_sign phishing analysis"
    url: "https://slowmist.medium.com/slow-mist-blank-check-eth-sign-phishing-analysis-741115bd0b1f"
  - title: "Cointelegraph: Ledger CTO warns crypto users about the dangers of blind signing"
    url: "https://www.cointelegraph.com/news/ledger-cto-warns-crypto-users-about-the-dangers-of-blind-signing"
heroPrompt: "An abstract illustration of a hand signing a sealed, opaque envelope while a faint translucent shape hides inside it, in calm blue tones, no text, no logos."
---

Blind signing means approving a request your wallet cannot translate into plain language. The most dangerous version is `eth_sign`, which signs a raw hash with no context. If an attacker prepares that hash from a harmful action, your signature can authorize it without you ever seeing what it was.

This post explains the main signing methods, where the risk sits in each, and a few habits that keep you out of trouble.

## What a signature actually does

A wallet signature is proof that your private key approved a specific piece of data. Nothing leaves your device except that proof. The danger is not the key being stolen. The danger is you approving data that means something other than what you think it means.

Some signatures are harmless, such as proving you own an address to log in. Others act like a signed cheque: a website or contract can later submit them on-chain to move tokens or NFTs. The prompt you see decides whether you can tell the difference.

## eth_sign: the blank cheque

`eth_sign` asks the wallet to sign an arbitrary 32-byte hash. A hash is unreadable by design, so the wallet cannot show you what it came from. An attacker can build a transaction or an approval, hash it, and present only the hash. If you sign, they hold a valid authorization for something you never saw.

MetaMask documents this risk and has deprecated the method, disabling it by default. Security firm SlowMist has written up real phishing cases where a signed `eth_sign` hash was reused to approve actions such as an NFT `setApprovalForAll`. No modern, legitimate app needs raw hash signing from ordinary users. If a site asks you to turn on `eth_sign` in advanced settings, treat that as a strong warning sign and leave.

## personal_sign: safer, not automatically safe

`personal_sign` adds a fixed prefix to the message before hashing. That prefix means the result cannot also be a valid transaction, which closes the worst trick available to `eth_sign`. It is the method used for most sign-in messages.

It still has limits. A message can be written to look friendly while a contract elsewhere treats the signature as authorization. And a perfectly honest-looking login message is still worthless as protection if you are signing it on a cloned site. So `personal_sign` is a lower-risk format, not a verdict on the website asking.

## Typed data: readable by design

`eth_signTypedData_v4` shows structured fields, such as who is the spender, which token, how much, and when it expires. This is better for users because a wallet can display the fields. But structured does not mean harmless. Permit-style messages are typed data, and they can grant spending rights. Our earlier Permit2 post covers that case. The rule is the same: readable fields only help if you read them.

## Where blind signing happens in practice

Blind signing is not limited to `eth_sign`. It also shows up when:

- A hardware wallet shows only a hash or "contract data" because it cannot decode a complex call.
- A browser wallet displays a long hex blob instead of a decoded action.
- A prompt looks routine, such as a zero-value "purchase", but the underlying fields authorize a sale or transfer.

Ledger's CTO has warned publicly that signing what you cannot understand is a core weakness across the industry, and that users should verify what they sign. The point holds for any wallet brand: a clear prompt is a security feature, and an unclear one is a reason to stop.

## A short checklist before you sign

1. **Name the request.** Is it a login, a transaction, an approval, or a permit? If you cannot say which, do not sign.
2. **Reject raw hashes.** Any `eth_sign` or "sign this hash" request from a website should be declined.
3. **Check the site first.** Confirm the domain by typing it yourself or using a bookmark, not a link from a message or ad.
4. **Read the spender and the amount.** An unexpected spender address or an unlimited amount is a stop sign.
5. **Use a separate wallet for new apps.** Keep significant funds in an address that never signs experimental requests.
6. **If you slip, act fast.** Move remaining assets to a fresh wallet and revoke token approvals from the affected address.

## Why hardware wallets do not remove the problem

A hardware wallet protects your key from malware, but it signs whatever you confirm. If the screen shows only a hash, confirming it is blind signing with extra steps. Prefer devices and apps that decode the action on the device screen, and decline anything that cannot be displayed clearly.

## How Signward helps

Signward is built to flag risky signature and approval requests before you confirm them, for example raw hash signing, broad approvals, and unfamiliar spenders. It adds a plain-language check next to your wallet prompt. It cannot replace reading the request yourself, and no tool can guarantee a signature is safe.

## The simple takeaway

If your wallet cannot tell you what a signature does, assume it can do something you would not agree to. Declining costs you a minute. A signed blank cheque can cost you the wallet.

*This article is for education only and is not financial or security advice.*
