---
title: "Compromised front ends: when the real website is the trap"
description: "A genuine dapp site can be hijacked through its code supply chain. Here is how that works, what past cases show, and how to limit the damage."
pubDate: 2026-11-27
category: "explainer"
tags: ["supply chain", "front end", "wallet security"]
sources:
  - title: "BleepingComputer: Lazarus hacked Bybit via a breached Safe{Wallet} developer machine"
    url: "https://www.bleepingcomputer.com/news/security/lazarus-hacked-bybit-via-a-breached-safe-wallet-developer-machine/"
  - title: "The Hacker News: Bybit hack traced to Safe{Wallet} supply chain attack"
    url: "https://thehackernews.com/2025/02/bybit-hack-traced-to-safewallet-supply.html"
  - title: "The Hacker News: Ledger's supply chain breach and the Connect Kit drainer"
    url: "https://thehackernews.com/2023/12/crypto-hardware-wallet-ledgers-supply.html"
  - title: "Socket: Ledger Connect Kit supply chain attack"
    url: "https://socket.dev/blog/ledger-connect-kit-supply-chain-attack-wallet-drainer"
heroPrompt: "An abstract illustration of a clean glass building whose hidden foundation pipes carry a dark thread into one room, symbolizing a trusted site compromised through its supply chain."
---

A compromised front end is a legitimate website or library that has been tampered with at its source, so the page at the correct address shows or does something different from what its owners intended. Checking the URL does not catch it, because the URL is genuine.

This post explains how these attacks work, what two well-documented cases show, and which habits reduce the damage when a trusted site is the weak point.

## Why a correct URL is not enough

Most wallet safety advice is about spotting fakes: lookalike domains, cloned pages, fake support accounts. Those rules still matter. A compromised front end is a different problem. The domain is real, the certificate is valid and the page loads normally, yet some of its code has been altered.

A modern dapp is rarely one file written by one team. It pulls in libraries from package registries, loads scripts from content delivery networks, and is built and deployed through cloud accounts and developer laptops. Each of those links is a place where an attacker can insert code. If the change lands in what users download, every visitor gets the altered version.

## What the altered code usually does

The code runs in your browser with the same access as the site itself. It can change the destination address in a transaction, swap a token amount, request an approval you did not expect, or route a wallet connection through an attacker-controlled project. The wallet still shows a prompt, and the prompt is signed by you. That is why the loss looks like a normal user action to the chain.

The attacker needs you to approve something. So the final defence is almost always the same: what the wallet or signing device actually shows before you confirm.

## Case one: Ledger Connect Kit, December 2023

In December 2023, malicious versions of the @ledgerhq/connect-kit npm package were published. Ledger's incident report, summarised by the coverage linked below, says a former employee was phished and their package registry account was used to publish the bad releases. Any dapp that loaded the library could then show visitors a drainer prompt, using a rogue WalletConnect project to redirect funds.

Reporting at the time put losses in the hundreds of thousands of dollars, with estimates differing between sources. Ledger said a clean version was released quickly, and that its devices and main app were not affected. The lesson is about reach: many unrelated sites were exposed at once because they shared one dependency.

## Case two: Bybit and Safe{Wallet}, February 2025

In February 2025, roughly $1.5 billion in Ether was stolen from an exchange cold wallet. Per the FBI and the forensic reports covered in the linked articles, attackers compromised a Safe{Wallet} developer machine, and malicious JavaScript was served through Safe's web interface. The signers used the real interface, which displayed a normal-looking transaction, while the transaction actually being signed did something else.

Some technical details of the first breach remain unclear in public reporting, so this post does not speculate on them. What is well documented is the pattern: the people signing trusted the screen, and the screen was the part that had been altered.

## What a normal user can do

You cannot audit a site's build pipeline, but you can reduce exposure.

- **Read the prompt in the wallet, not on the site.** If the site says "claim" and the wallet says "approve unlimited spending" or "setApprovalForAll", stop.
- **Use transaction simulation, but know its limit.** A preview helps, though it can also be fed by the same compromised page, so treat it as one signal.
- **Prefer exact approvals.** Approve only the amount you need, and revoke approvals when finished.
- **Use a separate wallet for activity.** Keep long-term holdings away from wallets that connect to many dapps.
- **Verify on the device for large amounts.** With a hardware wallet, check the recipient and details on its own screen. Understand that for complex contract calls, the screen may show data that is hard to interpret.
- **Pause after announced incidents.** When a wallet provider or protocol warns of a front-end problem, stop connecting until they confirm it is resolved.
- **Check official channels.** Confirm status notices on the project's verified site or social account, not in a reply or a direct message.

Teams that run larger funds can add controls such as independent verification of transaction data through a second tool, and signing policies that flag unexpected contract calls. These are process changes, not magic fixes.

## How Signward helps

Signward is built to examine what a transaction or signature request will actually do and to flag risky patterns such as unexpected approvals, so you have a second view that does not rely on the page you are on. It reduces risk and does not remove it, and it cannot guarantee that a compromised site will always be caught.

## The takeaway

A trusted address means the site is the one its owners run, not that every line of code it serves is safe. Treat each signature as the real decision point, keep exposure small, and read what your wallet says before you confirm.

*This article is for education only and is not financial or security advice for your specific situation.*
