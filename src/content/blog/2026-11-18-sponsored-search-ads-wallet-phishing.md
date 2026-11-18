---
title: "Sponsored search ads: how fake wallet sites reach the top"
description: "Scammers buy search ads that look like real wallet or DeFi sites. Typing the address or using a bookmark avoids the trap, because ads are not verified."
pubDate: 2026-11-18
category: "explainer"
tags: ["search ads", "phishing", "bookmarks"]
sources:
  - title: "BleepingComputer: Google ad impersonates Whales Market to push wallet drainer malware"
    url: "https://www.bleepingcomputer.com/news/security/google-ad-impersonates-whales-market-to-push-wallet-drainer-malware/"
  - title: "TechSpot: Scammers steal more than $500,000 using Google Ads for fake crypto wallets"
    url: "https://www.techspot.com/news/92080-scammers-steal-more-than-500000-using-google-ads.html"
  - title: "Cointelegraph Magazine: Fake Google ads and crypto wallet security"
    url: "https://cointelegraph.com/magazine/fake-google-ads-crypto-wallet-security"
heroPrompt: "An abstract illustration of a glowing signpost at the top of a road that quietly points toward a hollow mirror-image building, calm blue and amber palette, no text, no logos."
---

A sponsored search result can look exactly like the official site of a wallet or DeFi app, yet lead to a clone built to steal your seed phrase or your approvals. Ads are bought, not verified by you or by the project. The safest habit is to reach crypto sites from a bookmark or a typed address, never from a search result.

This post explains how the scam works, why the top result is not a trust signal, and a simple routine that removes most of the risk.

## Why a top search result is not a trust signal

Search engines show paid ads above organic results. On many screens the only difference is a small "Sponsored" label. Anyone with an ad account can bid on the words people type, such as a wallet name plus "download" or a protocol name plus "app".

Ad platforms review ads, but the review is automated and imperfect. Public reporting from security researchers and the press describes scammers repeatedly getting impersonating ads in front of crypto users. Because the ad sits first on the page, many people click it without thinking.

## How the scam is built

The pattern is consistent across the reports we reviewed.

First, the scammer registers a domain that resembles the real one, or uses a trusted-looking hosting domain. The ad's displayed address can be made to look correct, because what the ad shows and where the click lands are controlled separately.

Second, the landing page is a copy of the real site. It may be a fake wallet download page, a fake "restore wallet" form, or a fake dapp that asks you to connect and sign.

Third, the operator hides the trap from reviewers. BleepingComputer's coverage of a fake Whales Market ad describes redirecting visitors based on details such as IP address or browser, so automated checks may see a harmless page while real users see the malicious one. This is called cloaking, and it is one reason a scam can survive for a while even when the platform is trying to catch it.

## What the fake page tries to get

There are two common goals, and they have different fixes.

**Your recovery phrase.** A fake wallet page asks you to "import" or "restore" a wallet by typing the 12 or 24 words. Anyone who has those words controls the funds. No genuine wallet website needs your phrase. If you typed it, treat that wallet as compromised and move assets to a new wallet created on a clean device.

**A signature or approval.** A fake dapp asks you to connect, then presents a transaction or typed-data signature. This can grant a token allowance or sign an order that lets the attacker move assets. Our posts on Permit2 and on revoking approvals explain how to read and undo these.

## Why crypto users are a good target

Crypto has no bank to call and no chargeback. Transactions are final. Users also often search for a tool they use rarely, such as a bridge or a staking app, and cannot remember the exact address. That moment of uncertainty is what the ad is bought for.

Project names and wallet names are also short and generic, which makes lookalike domains easy to confuse. See our post on typosquats and homograph domains for how those are built.

## A routine that removes most of the risk

None of this requires special tools.

1. **Bookmark the real site once.** Get the address from a source you can trust, such as the project's verified social profile linked from its official documentation, or a reputable aggregator. Then open it only from the bookmark.
2. **Skip sponsored results.** If you must search, ignore anything labeled Sponsored or Ad. Organic results can also be poisoned through search engine optimization, so treat them as a lead to verify, not an answer.
3. **Read the address bar after the page loads.** Check the full domain, not just the start. Be careful with extra words, unusual endings and swapped characters.
4. **Download wallets from official sources.** Use the link in the project's documentation. For browser extensions, check the publisher and the install count, and compare with the official site.
5. **Never type a recovery phrase into a website.** The only normal moment you enter it is on a wallet's own recovery screen, on a device you trust, when you choose to restore.
6. **Use a separate hot wallet for new sites.** A small, disposable wallet limits what one mistake can cost.
7. **Read every signature prompt.** If the wallet cannot show what you are signing, stop.

## What to do if you clicked an ad

If you only loaded the page and did nothing, close it. If you connected a wallet but did not sign, disconnect it and review your active approvals. If you signed something or typed a phrase, act quickly: move remaining funds to a fresh wallet, revoke approvals from the old address, and stop using it. Do not trust unsolicited "recovery services" that contact you afterward, since those are a second scam aimed at the same victims.

## How Signward helps

Signward is a browser tool that checks the site you are on and the transaction you are about to sign. It can flag known phishing domains and show what a request would allow before you confirm, which helps when a convincing page has already gotten past your eyes. It does not replace good habits such as bookmarks, and no tool catches every new site.

## Key takeaways

- Search ads are paid placements, not endorsements.
- Cloaking lets scam pages look harmless to reviewers.
- Bookmarks and typed addresses beat searching every time.
- A website never needs your recovery phrase.

*This article is educational and is not financial or legal advice. No security measure is a guarantee, so verify important actions yourself.*
