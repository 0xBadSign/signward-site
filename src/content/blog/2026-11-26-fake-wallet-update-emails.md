---
title: "Fake wallet update emails: the 'mandatory upgrade' trap"
description: "Emails claiming your wallet needs a mandatory update or verification are a common phishing lure. Here is how the trick works and how to check safely."
pubDate: 2026-11-26
category: "explainer"
tags: ["phishing", "email scams", "wallet security"]
sources:
  - title: "CryptoSlate: Hundreds of MetaMask wallets drained: What to check before you 'update'"
    url: "https://cryptoslate.com/hundreds-of-evm-wallets-drained-what-to-check-before-you-update/"
  - title: "Group-IB: Crypto wallet drainers"
    url: "https://www.group-ib.com/resources/knowledge-hub/crypto-wallet-drainers/"
  - title: "MetaMask Support: Signature phishing"
    url: "https://support.metamask.io/stay-safe/protect-yourself/wallet-and-hardware/signature-phishing"
---

A fake wallet update email is a phishing message that claims your wallet needs a mandatory upgrade, security check or verification, then sends you to a cloned site that asks for your seed phrase or a malicious signature. Real wallets do not require you to act through an email link.

This post explains why the lure works, what the fake pages ask for, and a short routine for checking any "update" notice without clicking it.

## Why the lure works

Wallet software does change. Networks upgrade, extensions release new versions and exchanges announce migrations. Attackers borrow that real background noise. An email saying "Your wallet must be upgraded by Friday or access will be suspended" feels plausible because upgrades are a normal part of the ecosystem.

The message also adds urgency and a threat of loss, which pushes people to act before thinking. The sender name, logo and layout are easy to copy, and the sending address can be spoofed or made to look close to the real one. Coverage of campaigns of this type, such as the CryptoSlate report linked above, describes the same pattern: a convincing email, a cloned page and a drainer behind it.

## What the fake page asks for

The destination is usually one of three things.

**A seed phrase form.** The page says it needs to "verify" or "sync" your wallet and asks for your 12 or 24 words. Anyone who types them in has handed over the wallet. No genuine update needs your recovery phrase.

**A wallet connection followed by a signature request.** The page asks you to connect, then presents a transaction or signed message framed as the upgrade. It may actually grant a token approval or authorize a transfer. Group-IB describes drainers as tools that get users to sign transactions that give the attacker control, and signed approvals are generally not reversible.

**A file download.** The "update" is an installer or browser extension. This is how fake wallet apps and malicious extensions reach people. Installing one can expose keys directly.

## Signs the notice is fake

None of these alone proves anything, but several together are a strong signal:

- It arrived by email, SMS or a direct message rather than inside the app you already use.
- It sets a short deadline or threatens suspension or loss of funds.
- The link domain is not the one you normally use, even by one character. See our post on lookalike domains.
- It asks for a seed phrase, private key or "wallet verification" at all.
- It asks you to connect your wallet to a page you reached from the message.
- The greeting is generic and the sender cannot say anything specific about you.

## A safe way to check

Treat any upgrade notice as unverified until you confirm it yourself, without using its links.

1. **Do not click.** Close the message. Do not open attachments.
2. **Go to the source yourself.** Type the official address from memory, use a bookmark you made earlier, or open the wallet app you already installed and look for update prompts there.
3. **Use official stores for software.** Update the extension or app from the official browser store or app store page, and check the publisher name.
4. **Look for an announcement on official channels.** If the project really requires something, it will usually appear on its website or documentation, not only in an email. Be aware that social accounts can be hacked, so confirm on more than one channel.
5. **Never enter your seed phrase.** If a page asks for it, leave. Our post on seed phrase phishing covers why no real service needs it.

## If you already clicked or signed

Speed matters, but stay calm and do things in order.

- If you typed a seed phrase anywhere, create a new wallet with a fresh phrase on a clean device and move assets across right away. The old wallet cannot be made safe again.
- If you connected and signed something, review your token approvals and revoke anything unfamiliar. Our guide to revoking approvals shows how.
- If you installed a file, disconnect from the network, scan the device and consider treating it as compromised before using any wallet on it.
- Be wary of anyone offering to recover your funds. Recovery scams often follow a first loss.

## How Signward helps

Signward is built to check the page and the request in front of you. It can flag lookalike or newly seen domains and explain what a connection or signature would authorize in plain language, so an "upgrade" that is really an approval stands out before you confirm. It is one layer, not a guarantee, and it does not replace the habit of going to official sources yourself.

## The short version

Wallets are not upgraded through links in unsolicited messages. If a notice demands urgent action, assume it is fake until you have verified it through a channel you opened yourself. Keep your seed phrase offline and never type it into a website.

*This article is for education only and is not financial or legal advice. No security practice removes all risk.*
