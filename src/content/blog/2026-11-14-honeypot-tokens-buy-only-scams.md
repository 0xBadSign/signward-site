---
title: "Honeypot tokens: the buy-only trap and how to test it"
description: "A honeypot token lets anyone buy but blocks or cripples selling. Here is how the trap works, why charts hide it, and checks to run before you buy."
pubDate: 2026-11-14
category: "explainer"
tags: ["honeypot", "token scams", "due diligence"]
sources:
  - title: "Dedaub: Honeypot Tokens, What They Are & How to Detect Them"
    url: "https://tokin.dedaub.com/learn/honeypot"
  - title: "Cointelegraph: What is a honeypot crypto scam and how to spot it"
    url: "https://cointelegraph.com/news/what-is-a-honeypot-crypto-scam-and-how-to-spot-it"
  - title: "Webacy docs: Honeypots"
    url: "https://docs.webacy.com/glossary/honeypots"
heroPrompt: "An abstract illustration of a one-way funnel of glowing coins entering a sealed jar with no exit, in calm blue and amber tones."
---

A honeypot token is a crypto scam where you can buy the token but cannot sell it. The contract is written so that purchases succeed while sales fail, are blocked for your address, or are taxed so heavily that you get almost nothing back. The money you paid ends up with the creator.

This post explains how the trap is built, why the chart looks healthy, and what you can check before you buy.

## How a honeypot works

Every token on an EVM chain is a smart contract that decides what happens when tokens move. A honeypot contract adds hidden rules to the sell path. Common variants include:

- **Blacklists:** your address is flagged after you buy, and transfers from it revert.
- **Sell thresholds:** selling is technically allowed, but only above an amount or condition that ordinary buyers cannot meet.
- **Extreme sell taxes:** a sale goes through but a very large share is skimmed, or the owner can raise the tax after you buy.
- **Owner-only trading controls:** a switch the creator can flip to pause selling for everyone else.

Often the code is not obviously malicious. It may sit behind an upgradeable proxy, an owner role or a function with a harmless name. That is why reading a token page is not enough.

## Why the chart looks fine

You cannot judge a honeypot by price, volume or a rising candle. Buys keep succeeding, so the chart shows activity and growth. Sometimes the creator trades with their own wallets to fake demand, and social channels may be filled with automated accounts promoting the token.

Real buyers are the only ones who find out. When they try to sell and fail, the creator can drain the liquidity pool, and the token falls to nothing. Recovery is rare, because the transactions you made were valid on-chain.

## Honeypots versus rug pulls

The two are related but not identical. A rug pull usually means the creator removes liquidity or dumps a large holding, so the price collapses for everyone. A honeypot specifically traps buyers by stopping them from selling while the creator can still exit. Many scam tokens combine both, so it helps to look for either pattern.

## Checks to run before you buy

No single check is conclusive, but together they catch many traps.

1. **Simulate a sell.** Honeypot checkers try a sell of the token and flag it if the sale reverts or returns almost nothing. Treat a failing simulation as a hard stop.
2. **Do not treat a pass as a guarantee.** A token can pass today and still be changed later, for example by raising a sell tax or pulling liquidity.
3. **Look at holders and liquidity.** If a handful of wallets hold most of the supply, or the liquidity is tiny or unlocked, the creator has easy ways out.
4. **Check the contract's controls.** Look for owner functions that set taxes, pause trading or manage a blacklist. Be cautious if ownership has not been renounced and the code is unverified on the block explorer.
5. **Test with a very small amount.** If you decide to proceed, buy a tiny amount and try to sell it right away. Only an actual sell tells you for certain, and only at that moment.
6. **Be skeptical of how you found it.** Tokens pushed through unsolicited messages, "guaranteed" gain claims or urgent countdowns deserve extra suspicion.

## Honeypots and approvals

Many token sites ask you to approve a spending allowance before you can trade. With a honeypot, that approval is a second risk on top of the trapped purchase, because a malicious contract may hold permission over other tokens too. Use a separate wallet with a small balance for unknown tokens, and review and revoke approvals you no longer need.

## How Signward helps

Signward is built to help you read what a signature or transaction request will actually do before you approve it, including token approvals tied to a new contract. It cannot tell you whether a token will keep its value, and it cannot guarantee that any token is safe. Think of it as an extra look at the prompt alongside the checks above.

## What to do if you are trapped

If you cannot sell, stop sending more money to "unlock" it. Requests for extra fees to release funds are a common follow-up scam. Revoke any approval you granted to the token or its site, move your remaining assets to a fresh wallet if you suspect broader exposure, and report the token to the relevant explorer or scam trackers so others can see the warning.

*This post is for education only and is not financial or security advice. Always verify details yourself before acting.*
