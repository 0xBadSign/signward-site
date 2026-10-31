---
title: "Fake wallet apps: how to spot them before you install"
description: "Fake wallet apps copy a real wallet's name and icon, then ask for your seed phrase. Here is how they get into stores and how to check an app first."
pubDate: 2026-10-31
category: "explainer"
tags: ["fake wallet apps", "seed phrase", "app stores", "phishing"]
heroPrompt: "Flat editorial illustration of two nearly identical padlock-shaped app icons side by side, one with a faint crack and a thin thread leading away into the dark, teal and deep navy palette, calm technical mood, no text, no logos"
sources:
  - title: "Kaspersky: fake crypto wallet apps found on Apple's App Store"
    url: "https://www.kaspersky.com/about/press-releases/kaspersky-finds-26-fake-crypto-wallet-apps-on-apples-app-store-that-can-drain-digital-assets"
  - title: "Decrypt: There's a fake Trezor wallet in the Apple App Store draining crypto"
    url: "https://decrypt.co/145440/theres-a-fake-trezor-wallet-in-the-apple-app-store-draining-crypto"
  - title: "Bitdefender: Singer loses life savings to fake wallet downloaded from the Apple App Store"
    url: "https://www.bitdefender.com/en-us/blog/hotforsecurity/singer-loses-life-savings-fake-wallet"
---

A fake wallet app is a program that copies the name, icon and look of a real crypto wallet, then collects your seed phrase or sends you to a phishing page. The attacker never has to break any cryptography. You hand over the keys yourself, and the funds can be moved within minutes.

## Why a store listing is not proof of safety

It is natural to trust an app that appears in the Apple App Store or Google Play. Both stores review apps, but review is not a guarantee. Security researchers, including Kaspersky, have reported fake wallet apps that were listed in official stores while imitating well-known wallets. Some stayed available until reports forced their removal.

Attackers use several tricks to get through. A fake may behave harmlessly during review, then change behavior later by loading a web page or fetching new content. It may pose as a utility, a game or a generic "security check" rather than a wallet. Others use a near-identical name, a copied icon and invented reviews so that a search result looks right at a glance.

So treat the store as one signal, not the final one. The real check is whether you reached the app from the wallet's own official site.

## How fake wallets steal funds

Most fake wallet apps follow one of three patterns.

**Seed phrase collection.** The app shows a familiar "import wallet" screen and asks for your recovery phrase. Anyone who holds that phrase controls the wallet on every device, forever. Once you type it in, the attacker can sweep your assets and you cannot cancel it.

**Redirect to a phishing page.** The app is a thin shell around a web view. It opens a page that looks like the real wallet's portal, often with a fake "verification" or "security update" prompt, and asks you to connect or sign in.

**Fake hardware wallet companions.** Some fakes imitate the companion app of a hardware wallet. They tell you to enter your recovery phrase "to sync" or "to restore". A genuine hardware wallet app does not need your phrase, because the phrase is meant to stay on the device.

## The one rule that covers most cases

A legitimate wallet app will never ask you to type your seed phrase to prove who you are, to unlock a feature, to verify your account or to claim a reward. The only normal times you enter a phrase are when you restore your own wallet on software you installed from a trusted source, or on the hardware device itself during recovery.

If an app asks for the phrase for any other reason, close it. Do not assume it is a bug in a real app. Assume it is fake.

## How to check an app before you install it

You can lower the risk with a few habits that take about two minutes.

1. **Start from the official website.** Type the wallet's address yourself or use a bookmark you saved earlier. Follow its download links to the store. Do not search the store and pick the first result.
2. **Check the publisher.** The developer name on the store page should match the company named on the official site. A new developer account with a handful of reviews is a warning sign.
3. **Read the name and icon closely.** Look for added words, swapped letters and slightly different logos.
4. **Be skeptical of reviews.** Fake apps often have glowing reviews that say little, or complaints from people who lost funds. Sort by lowest rating and read them.
5. **Look at the update history and permissions.** An app that asks for permissions it has no reason to need deserves doubt.
6. **Prefer open-source or well-documented wallets** whose official site publishes checksums or signing information you can compare.

For desktop apps and browser extensions, apply the same logic: download only from the project's own domain, and verify the extension publisher before you add it.

## Reduce the damage if one slips through

Assume that at some point you may install something you should not have. A few setup choices limit the harm.

- Keep most of your funds in a hardware wallet or a wallet you set up on verified software, and use a separate hot wallet with a small balance for daily use.
- Never photograph or type your phrase into a phone, a cloud note or a chat.
- Test a new app with an empty wallet first. If it asks for a phrase you did not expect, you lose nothing.

If you suspect you entered your phrase into a fake app, act quickly. Create a new wallet with a fresh phrase on trusted software, then move your assets to it as soon as you can, starting with the most valuable. Delete the suspicious app. Reusing the old wallet is not safe, because the phrase is permanently exposed. Moving funds does not guarantee recovery of anything already taken, but it stops further losses.

## How Signward helps

Signward is a browser extension that checks the sites and requests you interact with. It can flag lookalike domains and risky signing requests before you approve them, which helps when a fake app sends you to a phishing page. It cannot inspect mobile app stores or stop you from typing a phrase into an app, so the install checks above still matter.

## Key takeaways

A fake wallet app works because it looks familiar and asks for something you would only give to the real thing. Reach apps through the official site, check the publisher, and never type your seed phrase into an app that asks for it unexpectedly.

*This article is for education only and is not financial or legal advice.*
