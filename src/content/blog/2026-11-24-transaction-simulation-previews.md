---
title: "Transaction previews: what wallet simulations miss"
description: "A wallet's transaction preview shows the likely balance changes of a request, but it can miss approvals, later state changes and spoofed details."
pubDate: 2026-11-24
category: "explainer"
tags: ["transaction simulation", "wallet security", "signing"]
sources:
  - title: "MetaMask Support: Security alerts"
    url: "https://support.metamask.io/configure/wallet/security-alerts/"
  - title: "MetaMask Support: How to turn on security alerts"
    url: "https://support.metamask.io/configure/wallet/how-to-turn-on-security-alerts"
  - title: "Ledger Academy: Transaction simulation and the privacy tradeoff"
    url: "https://www.ledger.com/academy/series/n3xt/research-transaction-simulation-privacy-tradeoff"
heroPrompt: "An abstract illustration of a translucent glass pane held over a winding path, revealing only part of the route beyond it, soft teal and warm grey tones."
---

A transaction preview, also called a simulation, is a wallet feature that runs your pending request against a copy of the blockchain state and shows the likely result, such as which tokens leave or arrive. It is a useful early warning. It is not a guarantee, because it only predicts one moment and only what it is built to detect.

This article explains what previews do well, where they fall short, and how to use them as one check among several.

## What a transaction simulation does

When a dapp asks you to sign, the wallet can run the transaction in a sandbox before you confirm. The result is shown in plain terms: "you send 1 ETH, you receive 3,000 tokens." Some wallets also flag known malicious addresses or contracts and warn when a request looks like a drain.

This helps because raw transaction data is unreadable to most people. A preview turns hex into a sentence. When a swap that should cost you 100 dollars shows your whole balance leaving, the preview just saved you.

Wallets such as MetaMask describe these alerts as advisory. Their own documentation says the alerts inform your decision rather than block you, and that they cannot promise to detect every threat. Treat that wording as the honest limit of the feature.

## Why a preview can look safe and still be risky

Several gaps are well understood, and none of them need exotic skill from an attacker.

**State can change after the preview.** A simulation reflects the chain at the moment it ran. Between that moment and confirmation, on-chain conditions such as a contract's behavior, a price or a stored value can change. Security researchers call this a time-of-check versus time-of-use gap. A preview that was accurate when it ran may not describe what executes.

**Approvals do not move funds yet.** A token approval or a permit signature often changes no balance at all. The preview may show "no assets leave your wallet" while the request grants a spender permission to take them later. This is the core mechanism behind approval and signature phishing, and a balance-only view can undersell it. Read the approval line, including the spender and the amount.

**Off-chain signatures may not be simulated.** Some requests are signed messages rather than transactions. Orders, permits and logins are verified later by a contract or a server. A preview of a signed message depends on the wallet understanding its format, and unfamiliar formats may show little.

**Unknown or new contracts have no reputation.** Warning lists rely on what is already known. A freshly deployed drainer contract and a freshly registered domain have no history to flag, so a clean result can simply mean "not yet seen."

**Display data can be misleading.** Token names and symbols are chosen by whoever deploys the token. A scam token can imitate a familiar ticker, and a preview that lists names without addresses can be hard to read correctly.

## Sandbox results are only as good as the inputs

A simulation runs on a particular data source and a particular set of assumptions. If the simulating service differs from the chain you are about to use, or the contract behaves differently for your account than for the test account, the result can diverge. Some contracts are written specifically to behave differently when they detect a simulation. This is another reason a preview is evidence, not proof.

Privacy is a separate tradeoff. Depending on the wallet and settings, simulation may involve sending your request to a third-party service, and vendors describe this differently. Check your own wallet's documentation and settings for what it shares.

## How to use previews well

A preview is most useful as part of a short routine, not as the final word.

1. **Read the verbs, not just the balances.** Look for words like approve, permit, setApprovalForAll, delegate or authorize. These are the requests that matter when no balance changes.
2. **Check the spender and the amount.** An unlimited amount to an address you do not recognize deserves a pause. Many wallets let you set a custom limit.
3. **Compare the preview to your intent.** If you wanted to claim a small reward and the preview mentions your whole collection or all of one token, stop.
4. **Confirm the site separately.** The preview says nothing about whether you are on the real site. Verify the domain through a bookmark or an official source.
5. **Be wary of urgency.** Pressure to sign quickly is a pattern in scams, whatever the preview says.
6. **Rehearse the escape route.** Know how to review and revoke approvals so a mistake can be limited quickly.

If a request looks unreadable, or the wallet shows no preview at all, treat that as a reason to decline rather than a neutral state.

## How Signward helps

Signward gives you an independent check alongside your wallet's own preview, covering the domain, the approval type and the signature request before you confirm. Like any tool it can miss new threats, so it adds a second look rather than replacing your judgment.

*This article is educational and not financial advice. No preview or tool makes signing completely risk-free.*
