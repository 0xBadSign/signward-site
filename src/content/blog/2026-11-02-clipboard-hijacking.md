---
title: "Clipboard hijacking: how copied crypto addresses get swapped"
description: "Clipboard hijackers silently replace a wallet address you copied with the attacker's. Here is how it works and how to check addresses before you send."
pubDate: 2026-11-02
category: "explainer"
tags: ["clipboard hijacking", "malware", "addresses"]
sources:
  - title: "MITRE ATT&CK: Clipboard Data (T1115)"
    url: "https://attack.mitre.org/techniques/T1115/"
  - title: "ethereum.org: Staying safe in crypto"
    url: "https://ethereum.org/en/security/"
  - title: "CISA: Avoiding Social Engineering and Phishing Attacks"
    url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks"
heroPrompt: "Abstract illustration of two identical-looking sealed envelopes on a desk, one quietly swapped by a shadowed hand, teal and deep navy palette, calm technical mood, no text, no logos"
---

Clipboard hijacking is malware that watches what you copy and, when it sees something that looks like a crypto address, replaces it with an address the attacker controls. You paste, glance at the first few characters, and send funds to the wrong place. The fix is to verify the full address, ideally on a trusted screen, before you confirm.

## How a clipboard hijacker works

Every operating system has a shared clipboard that any program can read and write. Malware that runs on your computer or phone can poll it every fraction of a second. It checks the contents against patterns: an Ethereum address starts with 0x and has 40 hexadecimal characters, a Bitcoin address has a recognizable prefix and length, and so on.

When there is a match, the malware overwrites the clipboard with an attacker's address of the same format. Nothing visible happens. The standard technique is documented by MITRE as clipboard data collection, and in crypto it is used for substitution rather than just theft of copied text.

Some variants go further and generate an attacker address that begins and ends with the same characters as the original, so the swap survives a quick visual check. This is the same weakness that address poisoning exploits.

## How it usually gets onto a device

The malware rarely arrives alone. Common routes include:

- Cracked software, game cheats and "free" tools downloaded from unofficial sites.
- Fake wallet or trading apps and browser extensions.
- Email or chat attachments, and links to fake installers.
- Fake "verification" prompts that tell you to paste a command into a terminal.

Once installed, a hijacker is small and easy to hide, which is why many victims never notice anything else wrong with the machine. The loss shows up only when a transfer lands at an unexpected address.

## Why the damage is hard to undo

Blockchain transfers are final. If you send funds to an attacker's address, no bank-style reversal exists. Exchanges can sometimes freeze deposits if you report quickly, but recovery is uncommon. Prevention is the realistic defense.

## What to check before every send

Treat the clipboard as untrusted. A few habits close most of the gap:

1. **Compare the whole address.** Check the first and last characters at minimum, and for large amounts check the middle too. Matching only the ends is exactly what lookalike addresses count on.
2. **Send a small test transaction first** when the amount is significant or the recipient is new. Confirm it arrived at the intended address, then send the rest.
3. **Use saved contacts or an address book** that you built from a verified source, instead of copying from chat or a web page each time.
4. **Read the address on your hardware wallet screen.** The device display is not controlled by your computer, so it shows what will actually be signed. Compare it with the address the recipient gave you through a separate channel.
5. **Scan the QR code** when the recipient offers one in person, rather than typing or pasting.
6. **Re-copy once and re-check** if anything about the pasted text looks different, such as a different length or unexpected characters.

## Reducing the chance of infection

Prevention of the malware itself matters as much as checking addresses. Install wallets and extensions only from the official site linked by the project, not from search ads or messages. Avoid cracked software. Keep the operating system and browser updated, and run a reputable endpoint protection tool. Never paste a command into a terminal or run dialog because a web page told you to. Consider keeping larger holdings on a hardware wallet used from a separate, clean device, and keep only spending amounts on a hot wallet.

If you suspect a hijacker, stop transacting from that device. Move funds using a clean device, and consider changing passwords and re-installing the operating system. Revoke any approvals the old wallet granted, since malware that watches the clipboard may do more than that.

## What this does not mean

Clipboard hijacking does not break your private keys or the wallet itself. The wallet signs exactly what you tell it to; the problem is that the destination was changed before you asked. That is why verification on a separate display is so effective: it checks the one thing the malware has altered.

## How Signward helps

Signward is built to help you check what you are about to approve or send before you confirm. When a destination address or a connected site looks unfamiliar or is flagged, it surfaces that in plain language so you can stop and verify through a separate channel. It does not replace checking the full address yourself and it cannot remove malware from a device.

*This article is for education only and is not financial or legal advice. Always verify addresses and transactions yourself before sending funds.*
