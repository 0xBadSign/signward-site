---
title: "WalletConnect QR phishing: what scanning a code approves"
description: "A phishing QR code can open a real WalletConnect session that lets an attacker send requests to your wallet. Here is how it works and how to stay safe."
pubDate: 2026-11-15
category: "explainer"
tags: ["walletconnect", "qr codes", "phishing"]
sources:
  - title: "Check Point Research: WalletConnect scam, a case study in crypto drainer tactics"
    url: "https://research.checkpoint.com/2024/walletconnect-scam-a-case-study-in-crypto-drainer-tactics/"
  - title: "DexTools: QR Code Deep Link Drainers, Hidden Crypto Approvals"
    url: "https://www.dextools.io/tutorials/qr-code-deep-link-drainers-hidden-crypto-approvals"
  - title: "CYFIRMA: Silent Crypto Wallet Takeover via Trust Wallet QR Code Phishing"
    url: "https://www.cyfirma.com/?p=55806"
heroPrompt: "An abstract illustration of a square pattern of dots bridging two glowing devices with a thin line, one end shadowed and unfamiliar, in calm blue and amber tones."
---

WalletConnect QR phishing tricks you into scanning a code that starts a real wallet session controlled by a scammer's website. The session itself is not a theft. The danger is that the site can then send transaction and signature requests to your wallet, and one careless approval can hand over your tokens.

This post explains what a WalletConnect session is, how scammers abuse it, and the habits that keep a scan from becoming a loss.

## What a WalletConnect session actually is

WalletConnect is a protocol that connects a website (a dapp) to a wallet that is not inside your browser, such as a mobile wallet. The dapp shows a QR code on desktop, or a deep link on mobile. When you scan or tap it, your wallet creates a session with that dapp.

A session does not move funds by itself. It lets the dapp ask your wallet to do things: show your address, sign a message, or send a transaction. You still have to approve each request. The risk lies in what the site asks for after pairing, and in how little the scan itself tells you.

## How the scam is built

Fake pages rarely say "approve unlimited spending". Instead they give a believable reason to scan: claim an airdrop, verify your wallet, fix a "sync error", or restore access. Some pages imitate a WalletConnect pop-up, and researchers have documented campaigns where the fake flow even links to the real WalletConnect site to look legitimate (see the Check Point write-up).

Once you pair, the attacker's page can push requests to your phone. Typical ones are a token approval, a Permit-style signature, or a plain transfer. If you approve a token approval, a drainer contract can later move the approved tokens with transferFrom. Many of these operations run on rented drainer kits, which is why the same patterns repeat across many sites.

A second variant skips the website entirely. Attackers place a malicious QR code in a fake support message, a manipulated screenshot of a wallet screen, or a printed flyer. Security researchers have described a campaign that used QR codes embedded in doctored wallet interface images to trigger approvals (see the CYFIRMA report).

## Why QR codes are a weak point

A URL can be read and compared against a domain you know. A QR code is opaque: you cannot tell where it leads or what it will request until your wallet has already reacted. On mobile, a deep link can open your wallet directly, which skips the browser safety checks and the address bar entirely.

The scan also feels harmless. People are used to scanning codes for menus and logins, so the habit of caution that applies to clicking an unknown link often does not apply to a code.

## What a safe approval looks like

The scan is only step one. The decision happens on the request screen. Before you approve anything that arrives after a pairing, check these points:

- **Who is asking.** Does the wallet show the dapp name and domain you meant to visit? A mismatch means stop.
- **What kind of request it is.** A connection request needs no spending permission. If a "verify" or "claim" flow asks for an approval or a signature over a typed data structure, treat that as a red flag.
- **Amount and spender.** An approval for an unlimited amount, or to an address you do not recognise, is far more than a login needs.
- **Whether you can read it.** If the wallet shows only a hex blob you cannot interpret, do not sign it.

If anything is unclear, reject the request and disconnect.

## Habits that reduce the risk

1. **Start from a bookmarked or typed address,** not from a message, ad or QR code someone sent you. Then connect from there.
2. **Never scan a code from a stranger, a support chat or an image in a message.** Real support teams do not need you to scan a code to fix your wallet.
3. **Treat "claim", "verify" and "sync" prompts as suspicious by default.** Check the project's official account independently.
4. **Review your active sessions.** Most WalletConnect-compatible wallets list connected dapps. Disconnect anything you do not recognise or no longer use.
5. **Review token approvals.** If you approved something you now doubt, revoke it. Our guide on revoking token approvals covers how, and it is worth doing without waiting.
6. **Keep a small hot wallet for new sites.** If one mistake happens, the loss is limited to what that wallet holds.

## If you already scanned and approved

Move quickly but calmly. Disconnect the session in your wallet, then check your token approvals and revoke anything unfamiliar. If you can, move remaining assets to a fresh wallet whose seed phrase was never exposed. Note that a scan alone does not reveal your seed phrase, so changing wallets matters mainly when you approved something or entered a phrase somewhere. Gas fees apply to revocations, so act before more value moves.

## How Signward helps

Signward is a browser extension that reads the request your wallet is about to sign and shows it in plain language, including the spender, the amount and whether the destination looks unfamiliar, before you confirm. It works on requests that appear in the browser, so it cannot inspect a request that reaches a separate mobile wallet through a QR code on its own. It is a second check, not a guarantee, and it does not replace the habits above.

*This article is for educational purposes only and is not financial or security advice.*
