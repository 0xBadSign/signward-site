---
title: "Seed phrase backups: where to store them and what to avoid"
description: "Store your seed phrase offline on paper or metal, in more than one place, and never as a photo, note or cloud file. Here is how to do it well."
pubDate: 2026-11-21
category: "guide"
tags: ["seed phrase", "backup", "self-custody"]
sources:
  - title: "BIP 39: Mnemonic code for generating deterministic keys"
    url: "https://bips.dev/39/"
  - title: "Coldcard: Bitcoin backup mistakes"
    url: "https://coldcard.com/learn/seed-phrases/bitcoin-backup-mistakes"
  - title: "BitBox: How to securely store recovery words"
    url: "https://support.bitbox.swiss/en_US/how-to-securely-store-recovery-words"
heroPrompt: "An abstract illustration of a small sealed vault split into two separate locations connected by a thin dotted line, calm blue and grey tones, no text, no logos."
---

The safest way to back up a seed phrase is to write it on paper or stamp it into metal, keep it offline, and store at least two copies in separate physical places. Never keep it as a photo, screenshot, note, email or cloud file, because anything online can be copied by someone else.

This guide explains why the phrase matters so much, what a good backup looks like, and the common mistakes that cost people their funds.

## Why the phrase is the whole wallet

A seed phrase, also called a recovery phrase, is a list of words that encodes the secret from which your wallet keys are derived. The BIP-39 standard describes how the words convert into a binary seed, and wallets then derive every account and address from that seed. Anyone holding the words can rebuild the wallet on their own device and move everything out. No password, device or approval step stands in the way.

That is also why the phrase is a backup and a master key at once. The goal is to make it hard to lose and hard for anyone else to find.

## What a good backup looks like

A solid backup has four properties.

**Offline.** The words never touch a connected device. Write them by hand. Typing them into a phone or computer exposes them to malware, keyloggers, clipboard readers and sync tools.

**Durable.** Paper is fine to start with, but it burns, fades and gets wet. If the amount matters to you, a metal backup survives fire and water far better. Choose a plate you can verify and that does not rely on a vendor's website or app.

**Redundant.** One copy is a single point of failure. Keep at least two copies in different places, for example a home safe and a safe deposit box or a trusted relative's home. Do not keep a hardware wallet and its recovery phrase in the same spot, since one theft would take both.

**Tested.** A backup you have never restored is a guess. Many wallet makers suggest verifying it, ideally with a small test amount or a reset device, so you find a missing word or a misread letter while it is still easy to fix.

## Mistakes that lead to theft

Most losses come from convenience, not from clever attacks.

- **Photos and screenshots.** A picture of the phrase gets copied to cloud backups, shared albums and other devices. A breach of any of them exposes it.
- **Notes apps, email and messaging.** "Saving it to myself" puts the words on servers and in search indexes.
- **Password managers.** Some people store the phrase there. This ties your wallet to the security of that account, and it is a decision to make deliberately, not casually.
- **Typing it into websites.** Any site or chat that asks for the phrase is a scam. No legitimate wallet, exchange or support team needs it. Our post on seed phrase phishing covers the common tricks.
- **Labelling the backup.** A note reading "crypto seed" taped to a safe invites attention. A neutral container is better.
- **Hiding it only in your memory.** Memory fails, and a single point of loss helps no one if you are unavailable.

## Passphrases and what happens if you are unavailable

Many wallets support an optional passphrase, sometimes called a 25th word, that creates a separate set of accounts from the same words. It adds protection if someone finds the paper, but it creates a second secret you can lose. If you use one, store it separately from the words and make sure it can be recovered. A forgotten passphrase is as final as a lost phrase.

Think too about the people who might need access. If something happens to you, family may not know a wallet exists. A sealed set of instructions held by someone you trust, without the secret itself in plain view, is worth considering. This is a personal risk decision, and the right balance differs for each person.

## A simple routine

1. Write the words by hand, in order, checking each against the wordlist spelling.
2. Verify by restoring or by comparing the written copy slowly against the device.
3. Make a second copy and store the two in different locations.
4. Delete anything digital, including photos, drafts and clipboard history.
5. Revisit once a year to confirm the copies are legible and still in place.

## How Signward helps

A good backup protects you from losing the wallet. It does not protect you from approving something harmful with the wallet. Signward is a browser extension that reviews signature requests and transactions before you sign them and flags risky approvals, which covers a different part of the problem from backup storage. It never needs your seed phrase, and no safe tool will ask for it.

*This post is for education only and is not financial advice. No backup method is risk free, so choose one that fits your situation.*
