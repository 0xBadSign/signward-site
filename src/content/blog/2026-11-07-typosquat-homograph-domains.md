---
title: "Lookalike domains: typosquats and homograph attacks"
description: "A lookalike domain imitates a real crypto site with a typo or a lookalike character. Here is how it works and how to verify a URL before connecting."
pubDate: 2026-11-07
category: "explainer"
tags: ["phishing", "domains", "typosquatting"]
sources:
  - title: "Unicode Technical Standard #39: Unicode Security Mechanisms"
    url: "https://www.unicode.org/reports/tr39/"
  - title: "RFC 3492: Punycode"
    url: "https://www.rfc-editor.org/rfc/rfc3492"
  - title: "Chromium documentation: IDN display policy"
    url: "https://chromium.googlesource.com/chromium/src/+/main/docs/idn.md"
heroPrompt: "An abstract illustration of two nearly identical keys side by side, one slightly warped, hovering over a glowing lock, no text, no logos."
---
A lookalike domain is a web address built to resemble a real crypto site, either through a small typo (typosquatting) or by swapping in a visually similar character from another alphabet (a homograph attack). The goal is to get you to connect a wallet or sign a transaction on a fake page that looks identical to the real one.

## Why lookalike domains work

People read addresses quickly and by shape, not letter by letter. If a page looks right, the brain fills in the rest. Attackers exploit this because the fake site can be a pixel-for-pixel copy of a real dapp, and a wallet connection prompt looks the same no matter which site triggered it.

The domain is the one part of the page the attacker cannot copy. Whatever is in the address bar is the only reliable statement of where you are. That is why most of the defense comes down to checking it carefully, or better, never relying on it by memory at all.

## Typosquatting: the simple version

Typosquatting registers names that differ from the real one by a small, plausible change. Common patterns include:

- A missing, doubled or transposed letter, such as a swapped pair of characters.
- A different top-level domain, such as `.io` replaced with `.co` or `.xyz`.
- Extra words, such as adding "app", "claim", "airdrop" or "secure" to a brand name.
- Hyphens, such as splitting a brand into two words.
- Look-alike letter combinations, such as `rn` standing in for `m`, or a capital `I` versus a lowercase `l` in some fonts.

None of these require any technical skill, and registration is cheap. Attackers often register many variants of a popular protocol and wait for traffic from ads, social posts or search results.

## Homograph attacks: when letters are not what they seem

Internationalized domain names let domains use characters from many scripts. Some of those characters look almost identical to Latin letters. The Cyrillic "а", for example, can be visually indistinguishable from the Latin "a" in many fonts, even though a computer treats them as different characters.

Under the hood, such a domain is encoded in ASCII using Punycode (see RFC 3492), and the encoded form starts with `xn--`. A browser decides whether to show you the readable form or the raw `xn--` form. Unicode's security guidance (UTS #39) describes how mixed-script and confusable characters can be detected, and Chromium documents its own policy for when it shows Punycode instead of the Unicode form. Browsers have tightened these rules over the years, so the worst cases are less common than they once were. Still, a rule that handles most cases is not a guarantee, and some lookalikes use only characters within a single script that happen to resemble others.

## How the attack usually reaches you

The fake domain is only half the scam. The other half is delivery:

- **Paid search ads** that appear above the real result for a protocol name.
- **Social replies and direct messages** that link to a "claim" or "migration" page.
- **Compromised or fake official-looking accounts** posting a new link.
- **Messages in community chats** that urge you to act quickly.

Once you land on the page, a connect prompt appears. Connecting alone usually reveals only your public address, but the next step is typically a signature request or a token approval that can give the attacker permission to move assets. If you want to understand that step, our posts on Permit2 and on revoking approvals cover it.

## How to verify a site before connecting

1. **Bookmark the real site once, from a trusted source,** and open it only from the bookmark. This removes the lookup step where lookalikes win.
2. **Be skeptical of search ads** for wallets and protocols. Scroll past sponsored results or navigate directly.
3. **Read the whole domain,** especially the part right before the first single slash. Anything before the final two labels (such as `brand.example.com`) is controlled by whoever owns the registered domain, not by the brand.
4. **Treat `xn--` as a warning.** If a crypto site shows up in Punycode form, do not connect.
5. **Cross-check the link** against the project's official documentation or a verified profile that you reached independently, not through the message that sent you.
6. **Pause on urgency.** Real projects rarely require you to connect within minutes.
7. **Read every signature and approval prompt,** even on sites you trust. A correct domain does not make a request safe if the site itself has been compromised.

## If you already connected or signed

Disconnect the site in your wallet's connected-sites list, then review your token approvals and revoke anything you do not recognize. If you signed something suspicious, move remaining assets to a fresh wallet created on a clean device. Never enter a seed phrase on any site, whatever the reason given.

## How Signward helps

Signward is built to check the page and the request you are about to approve, so a domain that does not match what you expect, or a transaction asking for broad permissions, is flagged before you sign. It is one layer of defense and does not replace careful checking of the address yourself.

Lookalike domains are cheap to make and easy to miss, but they all fail the same test: the address you typed or bookmarked yourself. Build that habit and most of this attack class disappears.

*This article is for educational purposes only and is not financial advice.*
