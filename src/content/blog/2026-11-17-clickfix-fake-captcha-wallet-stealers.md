---
title: "ClickFix fake CAPTCHAs: the paste-and-run trap for wallets"
description: "ClickFix pages fake a CAPTCHA and ask you to paste a command into Windows. That one paste can install a stealer that targets wallet extensions."
pubDate: 2026-11-17
category: "explainer"
tags: ["clickfix", "infostealer", "fake captcha"]
sources:
  - title: "Group-IB: ClickFix, the social engineering technique hackers use to manipulate victims"
    url: "https://www.group-ib.com/blog/clickfix-the-social-engineering-technique-hackers-use-to-manipulate-victims/"
  - title: "eSecurity Planet: ClickFix campaign uses fake CAPTCHA pages to deliver StealC malware on Windows"
    url: "https://www.esecurityplanet.com/threats/clickfix-campaign-uses-fake-captcha-pages-to-deliver-stealc-malware-on-windows/"
  - title: "Expel: ClearFake gets more evasive with new living off the land techniques"
    url: "https://expel.com/blog/clearfake-new-lotl-techniques/"
heroPrompt: "An abstract illustration of a hand pressing keys that open a hidden trapdoor beneath a friendly checkbox, calm blue and amber palette, no text, no logos."
---

ClickFix is a social engineering trick where a web page pretends to be a CAPTCHA or browser error, then asks you to press a few keys and paste a command into Windows. The command is already copied to your clipboard by the page. Running it installs malware, often an infostealer that goes after wallet extensions and saved passwords.

This post explains how the trick works, why it fits crypto users so well, and what to do if you have already pasted something.

## How the trick works

You visit a page, perhaps through a search result, an ad or a link in a chat. A box appears that looks like a "Verify you are human" check. After you click it, the page says verification failed and gives steps: press Win+R, press Ctrl+V, press Enter.

What you cannot see is that the page silently wrote a command into your clipboard when you clicked. The Run dialog executes it. Typically it is a PowerShell command that downloads and runs a second-stage program straight from the attacker's server.

This is different from a normal malware download. You are not opening a file your browser flagged. You are launching the command yourself, from a trusted system tool, which is why the browser's download protections never get a chance to help. Security firms have documented the technique across many campaigns, and researchers describe variants that imitate well-known verification screens.

## Why it matters for wallet users

The payloads reported in these campaigns are usually infostealers, such as StealC, Lumma and similar families. Stealers copy data from browsers: saved passwords, cookies, session tokens and the local storage used by browser wallet extensions. Some stealers also look for desktop wallet files.

If a stealer reads your extension data, the attacker can try to crack a weak wallet password offline. If you ever typed a seed phrase into a note or a file, the stealer may find that too. Stolen session cookies can also let someone into exchange or email accounts without a password.

So the loss does not need a bad signature or a fake dapp. One paste on the machine that holds your wallet is enough to put the whole profile at risk.

## Warning signs to recognize

- A CAPTCHA that asks you to do anything outside the page. Real CAPTCHAs never ask you to open the Run dialog, a terminal or the Windows search box.
- Instructions that mention Win+R, PowerShell, Terminal or "paste this to fix the error".
- A verification step on a page that has nothing to do with a bot check, such as a docs site, a video page or a token claim page.
- Any prompt to run something "to continue" or "to repair the browser".
- Pressure language such as "your session expires" or "complete verification now".

The same pattern also shows up on the Mac, using the Terminal app instead of the Run dialog. The rule is the same on every system: a website should never need you to execute a command.

## What to do instead

1. **Close the page.** Do not try the steps "just to see". Nothing you need is behind that check.
2. **Never run a command you did not write or understand.** If a site tells you to paste something into a system tool, treat it as an attack.
3. **Check your clipboard if you are curious.** Paste into a plain text editor, not into Run or a terminal, and read what it says. A long line with `powershell`, `mshta`, `curl` or an encoded string is a bad sign.
4. **Keep wallets and browsing separate.** Using a dedicated browser profile or a separate device for holding funds shrinks what a stealer on your everyday profile can reach.
5. **Use a hardware wallet for meaningful balances.** A stealer cannot extract keys that never leave the device, although it can still try to trick you into approving things, so read each prompt.

## If you already pasted a command

Act quickly and assume the machine is compromised.

1. Disconnect from the network.
2. From a different, clean device, move funds to a new wallet created with a fresh seed phrase. Do not reuse the old seed, because it may have been copied.
3. Change passwords and sign out of all sessions for email, exchanges and social accounts, starting with email.
4. Revoke approvals from the old wallet if you cannot move everything at once.
5. Scan the original machine with a reputable security tool, and consider a clean reinstall of the operating system. Removing a stealer by hand is unreliable.

## How Signward helps

Signward focuses on what happens at the wallet: it flags risky approvals and signature requests so you can read them before you confirm. It does not stop malware that already runs on your computer, so it works alongside, not instead of, keeping command-line tricks like ClickFix off your machine.

## Key takeaway

A real website verifies you inside the page. If a page asks you to leave the browser and run a command, the check is the attack. Close it and move on.

*This article is for education only and is not financial or legal advice. No tool or habit makes you completely safe, so verify before you act.*
