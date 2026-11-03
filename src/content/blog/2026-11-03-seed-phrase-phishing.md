---
title: "Seed phrase phishing: why no real service asks for it"
description: "Seed phrase phishing tricks you into typing your recovery words into a fake site or chat. Here is how it works and the one rule that stops it."
pubDate: 2026-11-03
category: "explainer"
tags: ["seed phrase", "phishing", "wallet security"]
sources:
  - title: "ethereum.org: Staying safe in crypto"
    url: "https://ethereum.org/en/security/"
  - title: "CISA: Avoiding Social Engineering and Phishing Attacks"
    url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks"
  - title: "FTC: How to Recognize and Avoid Phishing Scams"
    url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams"
heroPrompt: "Abstract illustration of a glowing key being lured through a narrow doorway into a dark funnel, teal and deep navy palette, calm technical mood, no text, no logos"
---

Seed phrase phishing is a scam that gets you to type your wallet's recovery words (usually 12 or 24) into a fake website, app, or chat. Whoever holds those words controls the wallet and everything in it. The rule that stops it is simple: no legitimate wallet, exchange, or support team ever needs your seed phrase.

## Why the seed phrase is the target

A seed phrase is not a password for one service. It is the master secret from which your wallet's private keys are derived. Anyone who enters it into any compatible wallet can recreate your accounts and sign transactions as you. There is no reset, no fraud department, and no way to revoke it. Once it is exposed, the only safe response is to move funds to a new wallet created from a fresh phrase.

That is why attackers prefer it to almost every other trick. Other attacks need you to sign a specific transaction. A phished seed phrase hands over everything at once, including assets on every chain that wallet supports.

## How the scam usually reaches you

The delivery changes, but the shape is the same: create urgency, then ask you to "verify," "sync," or "restore" your wallet.

- **Fake support.** You post a problem in a community channel and a helpful stranger sends you a direct message. They send a link to a "validation" page.
- **Fake wallet or dapp pages.** A cloned site, often reached through a search ad or a social post, shows a message such as "Wallet error: re-import to continue."
- **Fake security alerts.** An email or text says your wallet is compromised or must be migrated, with a deadline.
- **Fake apps and extensions.** A lookalike app asks you to import an existing wallet right after install.
- **Fake airdrops and rewards.** A claim page says you must "connect with your recovery phrase" to receive tokens.

In every case the page may look polished. Visual quality is not evidence. Attackers copy logos and layouts easily.

## The rule that works

Legitimate software uses your seed phrase in exactly two situations: when you first create a wallet (it is shown to you), and when you deliberately restore a wallet inside the official app or on your hardware device. Nothing else needs it. Not support staff, not a website, not a "verification" form, not an airdrop.

So treat any request to type the phrase into a website, a chat, a form, or an unfamiliar app as a scam, regardless of who appears to be asking. Connecting a wallet to a dapp and signing a message does not require the phrase either. If a site asks for it, close the tab.

## What to check before you ever restore a wallet

If you really do need to restore, slow down and verify the basics.

1. Use the app you installed from the official source, or your hardware device. Do not follow links from messages.
2. Confirm the domain by typing it yourself or using a bookmark you made earlier.
3. Restore on a device you trust, not on a shared or work machine.
4. On a hardware wallet, enter the words on the device itself if it supports that, rather than on a computer screen.

## If you already typed it into a suspicious page

Act as though the phrase is public. Create a brand new wallet with a new phrase, ideally on a hardware device, and move your assets there as soon as you can, starting with the most valuable. Be aware that attackers often run sweeper bots that move incoming funds out of a compromised wallet quickly, so a few transfers may fail. Then revoke token approvals on the old wallet and stop using it. Reporting the site to the browser vendor and the hosting provider helps others.

## Storing the phrase safely

Do not photograph it, store it in notes apps, cloud drives, or email, and do not paste it into any chat, including with an AI tool. Write it on paper or metal and keep it somewhere private. Anyone claiming they need to "see" it to help you is, by definition, trying to take it.

## How Signward helps

Signward is built to give you a clearer view before you approve anything. It checks the sites you interact with and the requests your wallet shows against known phishing patterns, so a cloned page or a suspicious prompt is flagged before you commit. It cannot replace the habit above: never type your seed phrase anywhere except a trusted wallet or device.

This article is educational and not financial or security advice for your specific situation.
