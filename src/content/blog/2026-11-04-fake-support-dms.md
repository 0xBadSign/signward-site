---
title: "Fake wallet support DMs: how the scam works and how to dodge it"
description: "Fake support scams reply to your public help request within seconds and steer you to a form or call that steals access. Here is how to spot and avoid them."
pubDate: 2026-11-04
category: "guide"
tags: ["social engineering", "fake support", "phishing"]
sources:
  - title: "MetaMask Support: Spoofing scams"
    url: "https://support.metamask.io/stay-safe/protect-yourself/social-engineering/spoofing-scams"
  - title: "FTC: What to know about cryptocurrency and scams"
    url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams"
  - title: "Singapore CSA: Joint advisory on protecting yourself from crypto drainers"
    url: "https://www.csa.gov.sg/docs/default-source/publications/singcert/2024/joint-advisory---protecting-yourself-from-crypto-drainers.pdf"
---

A fake support scam is when someone pretending to work for a wallet or exchange contacts you, usually in a direct message, and walks you into giving up your recovery phrase, installing remote-access software, or signing a malicious transaction. Real wallet support does not start conversations with you, and it never needs your secrets.

This guide explains how these scams are staged, what the common variants look like, and a short set of rules that defeats nearly all of them.

## Why the scam works

Self-custody has no help desk that can reverse a mistake, so users who hit a problem go looking for help in public. They post in Discord servers, Telegram groups, Reddit threads or on X. Scammers watch those places and reply quickly, often within seconds, because speed makes a stranger look like the official answer.

The scammer relies on three pressures: you are already worried, you want a fast fix, and the person appears to know the product. None of these require technical skill from the attacker. They only require patience and a script.

## The common variants

**The helpful stranger.** You post a question and someone replies in the thread or sends a DM. They offer to "escalate" your ticket and share a link to a support form. The form asks for your recovery phrase to "verify your wallet." Once you type it in, the attacker can import your wallet and move everything.

**The fake moderator.** In a community chat, an account with an admin-looking name and avatar offers private help. Impersonators copy profile pictures and use near-identical names, with swapped letters, extra underscores or added numbers.

**The remote-access request.** Instead of asking for a phrase, the scammer asks you to install a screen-sharing or remote-control tool so they can "fix" your wallet. With control of your computer they can read your screen, open your wallet and approve transfers, or install other malware.

**The "wallet validation" prompt.** A page claims your wallet is out of sync, flagged, or needs revalidation. It asks you to connect and sign. The signature or approval is actually a drainer request. This overlaps with the approval and signature scams covered elsewhere on this blog.

**The phone call or email.** A message says there was suspicious activity and gives a number to call or a button to click. The destination is a lookalike page or a scripted caller who repeats the same requests.

## Red flags that show up every time

- **They contacted you first.** Official support teams answer tickets you opened inside their own app or website. They do not DM you after a public post.
- **They ask for a recovery phrase, private key, or password.** No legitimate service needs these. MetaMask states on its support site that it will not email, call or message you to ask for such details.
- **They want to move you to a new channel.** Shifting from a public thread to a private chat removes witnesses and moderators.
- **They create urgency.** Phrases like "your funds are at risk" or "fix this in ten minutes" are designed to stop you from checking.
- **They ask for remote access.** There is rarely a reason for a wallet issue to require someone else controlling your device.
- **The link is slightly off.** Check the domain letter by letter. Look-alike addresses are a standard tactic.

## What to do instead

1. **Use the help inside the official app or the official site you typed in yourself.** Do not follow links from replies or DMs.
2. **Treat every unsolicited helper as hostile,** even if the account looks verified or has many followers. Profiles can be copied or bought.
3. **Ask for public help, but never act on private offers.** If a community has a verified support channel, use only that, and confirm it from the project's own website.
4. **Never type your recovery phrase into any website, form or chat.** It belongs only on the device or backup you control, and only during a restore you started.
5. **Never install remote-access tools at a stranger's request.**
6. **Pause before signing.** If a "fix" involves connecting your wallet and approving something, stop and read what you are approving.

## If you already shared something

Act fast, in this order. If you gave out a recovery phrase or private key, create a new wallet on a clean device and move your assets there immediately, because the old wallet is permanently compromised. If you installed remote-access software, disconnect from the internet, remove it, and treat the computer as untrusted before using any wallet on it. If you signed an approval, revoke it with a reputable approval checker and move the affected assets. Then report the account to the platform where the contact happened.

## How Signward helps

Signward is built around checking before you sign. It can flag known malicious sites and show what a transaction or signature would actually do, so a fake "wallet validation" prompt is easier to recognize. It cannot stop you from handing your recovery phrase to someone, so the rules above still matter most.

*This article is for education only and is not financial or legal advice.*
