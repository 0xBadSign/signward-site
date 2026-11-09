---
title: "Airdrop claim scams: how fake token claims drain wallets"
description: "Fake airdrop claim pages trick you into signing approvals or sharing your seed phrase. Here is how they work and how to check a claim before connecting."
pubDate: 2026-11-09
category: "explainer"
tags: ["airdrop", "phishing", "wallet-drainers"]
sources:
  - title: "Blockaid: Unmasking Wallet Drainers, a step-by-step breakdown of a crypto heist"
    url: "https://blockaid.io/blog/unmasking-wallet-drainers-step-by-step-breakdown-of-a-crypto-heist"
  - title: "Blockaid: How wallet drainers use fake revoke sites and Twitter phishing to exploit victims"
    url: "https://blockaid.io/blog/how-wallet-drainers-use-fake-revoke-sites-and-twitter-phishing-to-exploit-victims"
  - title: "ethereum.org: Stay safe, protect yourself against scams"
    url: "https://ethereum.org/en/security/"
heroPrompt: "An abstract illustration of glowing coins drifting down toward an open hand, with a hidden hook woven into one of the falling coins, no text, no logos."
---
An airdrop claim scam is a fake "free token" page that asks you to connect your wallet and sign. The signature or transaction does not deliver tokens. It grants a scammer permission to move the assets you already hold, or it collects your seed phrase. The lure is free money, and the cost is your wallet.

## Why airdrop lures work

Real airdrops exist. Projects do reward early users with tokens, and people have received valuable ones. Scammers rely on that: you cannot tell at a glance whether a claim is real, and the fear of missing out pushes you to act fast.

The lures usually arrive through places you do not control: a reply under a real project's post, a direct message, a compromised or lookalike social account, a Discord or Telegram announcement, or a token that suddenly appears in your wallet with a link in its name. Security firms that study drainer campaigns describe fake revoke sites and social media phishing as common delivery channels for these kits.

## What the claim page actually does

Most fake claim pages follow the same pattern.

**1. Connect wallet.** Connecting alone does not move funds, but it tells the page which assets you hold, so a drainer can choose the most valuable target.

**2. A "claim" button.** Pressing it triggers a wallet prompt. This is the real attack. The prompt may be a token approval, a `setApprovalForAll` for NFTs, a Permit or Permit2 signature, or a plain transfer disguised by a friendly label.

**3. Drain.** Once the permission exists, the attacker's contract can pull your tokens, often immediately and sometimes days later. Some pages instead ask you to "verify" with your seed phrase, which hands over everything outright.

The page's wording is controlled by the attacker. Only the wallet's own prompt, and what it simulates, is trustworthy, and even that can be hard to read.

## Warning signs

- You never interacted with the project, yet you are told you qualify.
- The claim has a countdown or says supply is almost gone.
- The link came from a message, a reply, or a token's name rather than the project's official site.
- The domain is slightly off or uses an unusual ending.
- The wallet prompt asks to approve spending, set approval for all, or sign something you cannot read, when a claim should only receive tokens.
- Anyone asks for your seed phrase. No legitimate claim ever does.
- You are asked to send a small amount first to "unlock" or "verify" the claim.

## Unsolicited tokens in your wallet

Random tokens that appear without your action are a common bait. Their names often contain a URL or the words "claim" or "visit". Do not visit the site, and do not try to swap or sell the token through unfamiliar interfaces. Hiding the token in your wallet is enough. Interacting with the token contract can itself trigger a malicious approval.

## How to check a claim safely

1. **Start from an official source.** Find the project's website through a source you already trust, such as its verified profile linked from a block explorer or aggregator, not from the message that told you about the claim. Check whether the project itself announced the airdrop in more than one place.
2. **Read the wallet prompt.** If it is an approval or a signature request rather than a simple claim transaction, stop and find out exactly what it grants.
3. **Use a separate wallet.** Keep a low-balance wallet for claims and new sites, and keep your main holdings in a different one that never connects to unknown pages.
4. **Never enter a seed phrase.** A page that asks for it is a scam, full stop.
5. **Revoke if unsure.** If you signed something you now doubt, review and revoke the approval promptly using a tool you trust, and move assets to a fresh wallet if the seed phrase was exposed.

## What a hardware wallet does and does not do

A hardware wallet keeps your keys offline, which protects against malware stealing them. It does not stop you from approving a malicious request on its screen. If the prompt is an approval to a scammer, the device will sign it when you confirm. The defense is understanding what you are asked to approve.

## How Signward helps

Signward is built to make wallet requests easier to understand before you sign, so an approval that does not match a "claim" can stand out. It reduces risk but cannot guarantee that any transaction is safe, so the checks above still apply.

## The short version

A real claim gives you tokens. A scam claim asks for permission over tokens you already have. If the prompt grants access instead of receiving a reward, do not sign.

This article is for education only and is not financial or legal advice.
