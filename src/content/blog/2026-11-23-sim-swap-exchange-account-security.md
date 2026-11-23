---
title: "SIM swap attacks: securing your exchange account"
description: "A SIM swap moves your phone number to an attacker's SIM so SMS codes reach them. Use app or hardware-key 2FA and a carrier PIN to close that door."
pubDate: 2026-11-23
category: "guide"
tags: ["sim swap", "2fa", "exchange security"]
sources:
  - title: "FBI IC3: Criminals Increasing SIM Swap Schemes to Steal Millions of Dollars from US Public"
    url: "https://www.ic3.gov/PSA/2022/PSA220208"
  - title: "CISA: Implementing Phishing-Resistant MFA"
    url: "https://cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf"
  - title: "NIST SP 800-63B: Digital Identity Guidelines, Authentication and Lifecycle Management"
    url: "https://pages.nist.gov/800-63-3/sp800-63b.html"
heroPrompt: "An abstract illustration of a small chip card being swapped between two hands while a faint padlock dissolves behind it, calm blue and amber tones."
---

A SIM swap is an attack where a criminal persuades or bribes your mobile carrier to move your phone number onto a SIM card they control. Once they hold your number, every SMS code and password reset sent to it reaches them. If your exchange account relies on SMS, they can take it over without touching your wallet.

This guide explains how the attack works, why exchange accounts are a common target, and the specific settings that make it far harder.

## How a SIM swap works

Your phone number is not tied to your physical SIM card. It is a record at your carrier that points to a SIM. If someone can get the carrier to update that record, the number follows them.

Attackers do this in a few ways. They may call customer support and impersonate you using personal details gathered from data breaches or social media. They may visit a store with a fake ID. In some cases a dishonest or manipulated carrier employee makes the change. A related technique, port-out fraud, moves the number to a different carrier entirely.

The first sign for a victim is often sudden loss of mobile service, because their own SIM stops working. By then the attacker may already be requesting password resets.

## Why exchange accounts are the target

An exchange account is attractive because it holds funds that can be moved quickly and often cannot be reversed. Many people also set up their exchange login years ago with a phone number as the recovery or second factor.

The FBI has warned that criminals use SIM swapping to reach fiat and virtual currency accounts, and that they can abuse SMS-based two-factor authentication to log in, reset passwords and gain control of accounts linked to the victim's number. The mechanism is simple: the attacker needs your email address or username, then uses "forgot password" and receives the code on your number.

Note that a SIM swap does not give access to a self-custody wallet. Your seed phrase is not stored with your carrier. The risk is to anything that uses your phone number as proof of identity: exchanges, email recovery, and other accounts that chain together.

## Why SMS is the weak link

SMS codes depend on the phone network, which was not designed as a secure channel. The code travels in readable form, and whoever controls the number receives it. NIST's digital identity guidelines treat out-of-band authentication over the telephone network with extra caution for this reason, and they point toward stronger authenticators where possible.

Compare that with the options below, which do not rely on your phone number at all.

## What to use instead of SMS

Move your second factor off your phone number, in this order of preference:

- **A hardware security key (FIDO2/WebAuthn).** The key signs a challenge that is bound to the real website's domain, so a lookalike phishing page cannot reuse it. CISA describes FIDO-based authentication as phishing-resistant, and treats it as the stronger tier of multi-factor authentication.
- **Passkeys.** These use the same underlying standard and are stored on your device or in a password manager you control. Check how your recovery works, because a weak recovery path can undo the benefit.
- **An authenticator app (TOTP).** Codes are generated on your device and do not travel over the phone network. They stop SIM swapping, although a convincing phishing page can still trick you into typing the code.

If an exchange offers several methods, enable the strongest one and then remove SMS as an option, not only add a new factor beside it. An attacker will use whichever method remains.

## Lock down the phone number itself

Even with better 2FA, your number is still a recovery route for other services, so protect it too:

1. **Add a carrier account PIN or passcode** that must be given before any SIM change or port-out. Ask your carrier for a "port-out PIN" or "SIM lock" feature.
2. **Do not use your main number publicly.** A separate number for banks and exchanges, kept private, is harder to target than the one on your social media.
3. **Use a long, unique password on your carrier account** and enable app-based 2FA there if offered.
4. **Avoid answering identity questions from callers.** Your carrier will not ask you to read out a one-time code.

## Harden the rest of the chain

Attackers often get to the exchange through your email. Secure your email with a hardware key or authenticator app, since a takeover there makes any reset trivial.

On the exchange itself, turn on the following if available:

- **Withdrawal address allowlisting**, so funds can only go to addresses you pre-approved.
- **A withdrawal delay** after security changes, giving you time to notice.
- **Anti-phishing codes** in emails, so you can recognize genuine messages.
- **Login and withdrawal alerts** to an email address that is secured separately.

Keep only what you need for trading on an exchange. Long-term holdings are better in a wallet whose keys you control, as discussed in our posts on hardware wallets and separate hot wallets.

## If you suspect a SIM swap

Act in this order. Call your carrier from another phone and have the number restored and locked. Then, from a trusted device, change your email password and secure it, followed by the exchange password, and revoke active sessions and API keys. Contact the exchange support through the official site to freeze withdrawals. Finally, report it to your local authorities, such as the FBI's IC3 in the United States.

Speed matters, but do not click links in messages that claim to be from your carrier or exchange while you do this.

## How Signward helps

Signward focuses on wallet-side risks: it helps you check domains, approvals and signature requests before you act. It does not protect your carrier account or exchange login, so the settings above remain your own responsibility.

*This article is educational and not financial or legal advice. No setup makes an account completely immune to attack.*
