---
title: "Hacked Discord servers: why an official announcement can be fake"
description: "Attackers who take over a Discord server or admin account post fake mint or airdrop links. Verify any link through a second official channel first."
pubDate: 2026-11-19
category: "explainer"
tags: ["discord", "phishing", "community scams"]
sources:
  - title: "KrebsOnSecurity: Discord admins hacked by malicious bookmarks"
    url: "https://krebsonsecurity.com/2023/05/discord-admins-hacked-by-malicious-bookmarks/"
  - title: "Cointelegraph: Beeple's Discord URL hijacked, directing users to wallet drainer"
    url: "https://cointelegraph.com/news/beeple-s-discord-url-hijacked-directing-users-to-wallet-drainer"
  - title: "Cointelegraph: Polygon Discord scam hits Avalanche, zkSync hours later"
    url: "https://cointelegraph.com/news/polygon-discord-scam-hits-avalanche-zksync-hours-later"
heroPrompt: "An abstract illustration of a lit announcement board in a quiet hall where one panel is subtly replaced by a dark hollow copy, calm blue and amber palette, no text, no logos."
---

A post in a project's official Discord or Telegram can be fake. If an attacker takes over an admin account, a bot, or the server's invite link, they can publish a convincing "mint", "airdrop" or "verify your wallet" message from a trusted place. The safe rule is to treat every link in a chat as unverified, whoever posted it.

This post explains how these takeovers happen, why they work on careful people, and a short routine that keeps one hacked channel from becoming your loss.

## Why a trusted channel is not a trusted link

People trust a link because of where it appears. A pinned message from an admin in the announcements channel feels as official as the project's own website. Attackers know this, so they aim for the channel itself rather than for you.

Public reporting over the last few years describes this pattern repeatedly. Several NFT and blockchain communities have had announcement channels used to push wallet drainer links. The common thread is that the platform account was compromised, not that the project's smart contracts were broken.

## How servers and admins get taken over

There are a few well-established routes:

- **Admin account takeover.** A moderator or community manager is phished, or has a session token stolen by malware. The attacker then posts as them.
- **Malicious tools.** KrebsOnSecurity documented a case where Discord admins were compromised through a booby-trapped bookmark. A single compromised admin can be enough to reach the whole server.
- **Hijacked invite links.** If a project's custom invite link expires or is released, an attacker can register it. New members following the old link land in a copycat server. Cointelegraph reported this happening to a well-known NFT artist's community.
- **Compromised bots.** A bot with broad permissions can post messages or change roles if its token leaks.

In each case the victim never sees a warning. The message arrives in the usual place, in the usual format.

## What the fake announcement asks you to do

The goal is almost always the same: get you to connect a wallet to a lookalike site and sign something. Typical bait includes:

- A surprise mint or allowlist with a short countdown.
- An airdrop claim for holders.
- A "verification" step that supposedly proves you own a token to unlock a channel.
- A security notice telling you to "migrate" or "revalidate" your wallet.

The site then requests a token approval, a permit signature, or a setApprovalForAll call. The wallet prompt may look routine. Other posts on this blog cover how those approvals work in detail, because that step is where the loss actually happens.

## Why timing matters

These posts often appear at night or on weekends, when few moderators are online. They also rely on urgency. A real project rarely needs you to act within minutes. Reporting on one incident described a user losing a large amount after acting on what looked like an official message. Because attackers frequently hit several communities in quick succession, a scam in one server is a reason to be more careful in the others, not less.

## A routine that holds up

You do not need to leave the community. You only need to change what you trust.

1. **Never click wallet-related links from chat.** Reach the project through a bookmark you saved earlier or its address typed in by hand.
2. **Confirm through a second channel.** If an announcement matters, check the project's official site and its verified social account. If they do not mention it, treat the message as fake.
3. **Be suspicious of verification flows.** A legitimate role check should never ask you to approve spending or sign a message you cannot read.
4. **Pause on urgency.** Countdowns and "only 100 spots" are pressure, not proof.
5. **Keep a separate wallet for communities.** A low-balance hot wallet limits what one mistake can cost.
6. **Report and warn.** If you spot a fake post, tell the moderators through another route and do not interact with it.

If you already signed something on a suspicious site, move assets you can still move to a fresh wallet and revoke the approval. Doing it quickly matters more than doing it perfectly.

## For community admins

Admins can reduce the chance of a takeover with a few basics: two-factor authentication on every staff account, minimal bot permissions, a regular review of who holds admin roles, and a permanent invite link that is kept registered. A standing rule that announcements always point to the official website, never to a standalone minting page, also gives members something simple to check.

## How Signward helps

Signward is built to help you check a link or a transaction before you commit to it. When you paste a suspicious URL or a wallet prompt, it looks for signs such as lookalike domains and risky approval requests, and explains in plain language what you would be agreeing to. It is an extra check, not a guarantee, and it works best alongside the habits above.

This article is educational and is not financial advice. No security practice removes risk entirely.
