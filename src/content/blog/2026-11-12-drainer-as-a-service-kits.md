---
title: "Drainer-as-a-service: how phishing kits are rented out"
description: "Drainer-as-a-service lets criminals rent ready-made wallet-draining kits for a revenue cut. Here is how the model works and what it means for you."
pubDate: 2026-11-12
category: "explainer"
tags: ["drainers", "phishing", "scam economics"]
sources:
  - title: "BlockSec: Inside Ethereum's shadow economy, research on the drainer-as-a-service industry"
    url: "https://blocksec.com/blog/inside-ethereum-s-shadow-economy-new-research-unmasks-the-135-m-drainer-as-a-service-industry"
  - title: "The Hacker News: Crypto Wallet-Draining Attacks"
    url: "https://thehackernews.com/2023/12/beware-scam-as-service-aiding.html"
  - title: "SEAL Radar: Drainers, vol. 1"
    url: "https://radar.securityalliance.org/2025-10-drainers-vol-1/"
---

Drainer-as-a-service (DaaS) is a business model where one group builds a wallet-draining phishing kit and rents it to many "affiliates" in exchange for a share of whatever they steal. It means a scammer no longer needs programming skill, only a way to send victims to a fake site.

This post explains how the model works, why it makes scams look so alike, and which habits break the chain.

## What a drainer kit actually is

A drainer is a bundle of website code and smart contract logic. The website part imitates a real crypto service, such as a token claim page, an NFT mint or a wallet "verification" screen. When you connect a wallet, the script inspects what you hold, picks the most valuable assets, and asks you to sign something that gives the attacker access to them.

That request can take several forms: a token approval, an NFT `setApprovalForAll`, or an off-chain signature such as a Permit or Permit2 message. The kit chooses the form that fits the assets it finds. The contract side then moves the funds, often splitting the proceeds automatically between the operator and the affiliate.

## How the rental model works

Security researchers who have studied these operations describe a division of labor. The developers maintain the kit, update it to dodge wallet warnings, and often provide an admin panel and a Telegram bot. Affiliates handle the part that needs a human: registering domains, setting up the page, and driving traffic through fake social media accounts, hijacked profiles, paid ads, or direct messages.

Revenue is usually shared on a fixed split. Public research and reporting describe operators keeping roughly a fifth or a quarter of each theft, with the affiliate keeping the rest, though exact figures vary by kit and are hard to verify. Treat any single percentage as indicative, not audited.

The result is scale. One kit can sit behind thousands of separate phishing sites run by unrelated people. Academic and industry studies of the ecosystem have found that a small number of kit families account for most of the observed losses, which is a typical pattern when criminals can lease the same tool.

## Why this matters to an ordinary user

The rental model changes what a scam looks like from your side of the screen.

**The pages look professionally made.** The kit supplies polished templates, so poor design is no longer a reliable warning sign. A clean, convincing page tells you very little about whether a site is real.

**Domains are disposable.** Affiliates can register new lookalike domains cheaply and replace them as soon as one is flagged. A site that was not on any blocklist an hour ago can still be malicious.

**The prompts are tuned to your wallet.** Because the kit reads your balances, the request targets what you actually own. A prompt that appears right after you connect, asking for an approval you did not expect, is a strong signal.

**Kits keep adapting.** Developers update their code when wallets add new warnings. That means a wallet's built-in alert is a helpful layer but should not be your only one.

## Habits that break the chain

You cannot spot a kit by its code, but you can control the steps it depends on.

1. **Do not arrive through links you did not seek out.** Reach services via a bookmark you made yourself, not through a social post, a DM, or a search ad.
2. **Be suspicious of urgency and free money.** Claims, "eligibility checks" and "security verifications" are the classic triggers for a drainer page.
3. **Read what you are asked to sign.** Treat unlimited token approvals, `setApprovalForAll`, and permit-style signatures as permission to spend, not as a login step.
4. **Use a separate wallet for experiments.** Keep significant funds in a wallet that rarely connects to new sites. A drainer can only take what the connected wallet holds.
5. **Review and revoke approvals regularly.** If you suspect you signed something, revoke it promptly. Our guide on revoking token approvals walks through this.
6. **Pause before connecting to anything new.** If you only wanted to look at a page, you do not need to connect a wallet at all.

## What to do if you think you interacted with one

Stop signing anything on that site and disconnect the wallet. Move remaining assets to a fresh wallet if your seed phrase or key may be exposed. Revoke any approvals the site obtained, starting with the most valuable tokens. If you only signed an off-chain permit, note that it can remain usable until its expiry, so act quickly. Report the domain to your wallet provider and to a public phishing reporting service.

## How Signward helps

Signward checks the sites and requests you are about to approve and flags known phishing domains and risky approval or signature patterns before you sign, so a rented kit's page gets a second look. It is one layer, and it cannot catch every new domain, so it works best alongside the habits above.

*This article is for education only and is not financial or legal advice. No tool or habit removes all risk.*
