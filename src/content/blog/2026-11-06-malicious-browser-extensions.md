---
title: "Malicious browser extensions: how fake wallets steal funds"
description: "A malicious browser extension can read pages, capture what you type and swap addresses. Here is how fake wallet add-ons work and how to vet one."
pubDate: 2026-11-06
category: "explainer"
tags: ["browser extensions", "fake wallets", "seed phrase"]
sources:
  - title: "The Hacker News: Fake Chrome Extension Safery Steals Ethereum Wallet Seed Phrases"
    url: "https://thehackernews.com/2025/11/fake-chrome-extension-safery-steals.html"
  - title: "Bitdefender: Malicious Firefox add-ons stealing cryptowallet seed phrases and browser credentials"
    url: "https://www.bitdefender.com/en-au/blog/hotforsecurity/malicious-firefox-add-ons-stealing-cryptowallet-seed-phrases-browser-credentials"
  - title: "Cybernews: Malicious Firefox extensions steal your crypto wallet seed phrases"
    url: "https://cybernews.com/security/malicious-firefox-extensions-crypto-wallets/"
---

A malicious browser extension is an add-on that looks like a useful crypto wallet or tool but runs code that steals your seed phrase, reads the pages you visit, or changes what you sign. Extensions run inside your browser with broad permissions, so one bad install can undo every other safety habit you have.

This post explains how these extensions work, what has been reported publicly, and how to check an add-on before you trust it.

## Why extensions are such a strong attack surface

Your browser wallet is itself an extension, and that is the point. Extensions can read and modify the pages you open, which is how a wallet injects its connect button into a dapp. An extension that asks for permission to "read and change all your data on all websites" can do the same things a wallet can: see addresses on screen, watch form fields, and alter what a page displays.

Attackers rely on this. A fake wallet does not need to break any cryptography. It only needs you to type your seed phrase into it, or to install it next to your real wallet and quietly tamper with what you see.

## What fake wallet extensions actually do

Reporting from security researchers describes several patterns.

**Seed phrase capture.** Researchers at Socket described a Chrome extension called Safery that posed as an Ethereum wallet and was built to steal seed phrases, reportedly hiding them in ordinary-looking blockchain transactions so it needed no obvious server. Separate research covered dozens of Firefox add-ons that impersonated well-known wallets and exchanges, some using lookalike names such as a zero in place of the letter O. The common thread is a "wallet setup" screen that asks you to import or create a phrase, then sends it to the attacker.

**Capture while you type.** Some malicious add-ons were reported to send the phrase as it is typed, then show a misleading error like "invalid phrase" so you assume you made a typo. Even if you stop and close the tab, the data has already left.

**Silent tampering.** An extension with page access can replace a destination address after you paste it, or change the text of a transaction summary. This is the browser-level cousin of clipboard hijacking.

**Trusted extensions that change.** An extension can be legitimate for years and then be sold or compromised, and an update can add harmful code. A good reputation today is not a guarantee about next month's update.

## Warning signs before you install

None of these proves an extension is malicious, but several together should stop you.

- **You found it through an ad, a search result, or a message.** Wallets should be installed from links on the project's official site, which you reached by typing the address or from a bookmark you made earlier.
- **The name is a near match.** Compare the publisher name, the website link on the store page, and the spelling. Lookalike characters are common.
- **Few reviews, new listing, or reviews that read alike.** Fake reviews are cheap to buy.
- **It asks for your seed phrase in a normal install flow.** A wallet may ask you to import a phrase on setup, so this alone is not proof. But if you only wanted to use a site, no extension needs your phrase for that.
- **Permissions that do not fit the purpose.** A price-tracker asking to read every site is a bad sign.

## How to vet an extension

1. **Start from the official source.** Open the project's real website by typing it, then follow its link to the browser store. Check that the store page links back to the same site.
2. **Check the publisher and the install count together.** A well-known wallet has a long history and a very large user base. A new listing with a famous name is suspect.
3. **Read the permissions prompt.** Ask whether each permission is needed for the stated job.
4. **Keep the list short.** Every extension is extra code with access to your browser. Remove ones you no longer use.
5. **Use a separate browser profile for crypto.** A dedicated profile with only your wallet installed limits the damage from a random add-on you installed for something else.
6. **Be careful with auto-update on wallets you do not actively follow.** If a project announces a sale or change of ownership, treat it as a reason to review the extension again.

## If you entered a seed phrase into a suspect extension

Treat that wallet as compromised. Changing a password does not help, because the seed phrase itself is what controls the funds. Create a brand new wallet, ideally on a clean device or a hardware wallet, and move assets over, starting with the most valuable. Do this from a device you trust, and expect that anyone holding the old phrase may be watching for activity. Then remove the extension. Also review and revoke old token approvals from the old address if you keep using it for anything.

## How Signward helps

Signward is a tool that reviews transactions and signature requests before you approve them, so you can see what a request would do in plain language. It does not replace careful extension hygiene, and it cannot protect a seed phrase that you have already typed into a malicious add-on. It is one extra check, used alongside the habits above.

## The short version

Install wallets only from the project's official site, keep your extension list small, use a separate profile for crypto, and never type a seed phrase anywhere you did not deliberately choose. If something feels off after an install, move funds to a fresh wallet first and investigate afterward.

*This article is for education only and is not financial or legal advice. No security practice removes all risk.*
