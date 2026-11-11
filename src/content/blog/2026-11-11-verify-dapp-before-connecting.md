---
title: "How to verify a dapp before you connect your wallet"
description: "Before connecting a wallet to a dapp, check the domain, the source of the link, the contract and the signing prompt. Here is a short routine."
pubDate: 2026-11-11
category: "guide"
tags: ["dapp", "wallet-safety", "phishing"]
sources:
  - title: "ethereum.org: Stay safe, protect yourself against scams"
    url: "https://ethereum.org/en/security/"
  - title: "EIP-712: Typed structured data hashing and signing"
    url: "https://eips.ethereum.org/EIPS/eip-712"
  - title: "Revoke.cash Learn: What is a token approval?"
    url: "https://revoke.cash/learn"
heroPrompt: "An abstract illustration of a hand holding a magnifying glass over a row of nearly identical doorways, one slightly different, no text, no logos."
---
To verify a dapp before connecting, confirm you reached the correct domain from a trusted source, check that the contract it talks to is the one the project publishes, and read the signing prompt before you approve anything. Connecting alone rarely moves funds, but it is the first step of most phishing flows.

## Why the connect step matters

Connecting a wallet shares your public address and lets the site request signatures. It does not hand over your keys. The damage usually comes next, when the site asks you to sign a token approval, a permit message or a transaction. A fake site that looks identical to a real one only needs one careless signature.

So the goal of verification is simple: decide whether this site deserves a signature request before you let it make one.

## Step 1: Check how you got there

Most victims do not mistype a domain. They click a link. Common sources of bad links include paid search ads, direct messages, replies under popular posts, and "official" announcements from hacked accounts.

A safer habit is to reach a dapp through a bookmark you saved earlier, or through the project's own documentation, and to treat any link from a message or a promoted result as untrusted. If a project announces a new site, confirm it in more than one independent place, such as its docs and its verified channels, not only in the post that sent you there.

## Step 2: Read the domain slowly

Look at the full address in the address bar, not the page title or the logo. Check for extra letters, swapped characters, unusual endings such as an unfamiliar top-level domain, and subdomains that put the real name in front of a different domain (for example, the real brand followed by a dot and then someone else's domain).

Lookalike characters from other alphabets can also make a domain appear identical. If the address is long, odd or hard to parse, do not connect. Compare it against the address in the project's documentation.

## Step 3: Check the contract, not just the website

A site is only a front end. The contract is where assets actually move. Before a large interaction, find the contract address in the project's official docs and compare it with the address shown in your wallet's prompt. A block explorer lets you see whether the contract is verified, how old it is, and how much activity it has.

A very new contract with no history, an unverified source, or an address that differs from the documented one is a reason to stop. This takes a minute and catches many cloned sites, because cloners often point the same interface at their own contract.

## Step 4: Read the signing prompt

When the wallet opens a request, treat it as a separate decision. Ask three questions:

- **What is being asked?** A transfer, an approval, a permit, or a message to sign.
- **Who is the spender or recipient?** An unfamiliar address receiving permission over your tokens is the classic drainer pattern.
- **How much and for how long?** An unlimited amount with no expiry deserves caution, especially for a simple action like claiming or minting.

If the prompt shows raw hex, a vague "unknown contract interaction", or a message you cannot understand, do not sign. Structured signing standards such as EIP-712 exist so wallets can show readable fields, but support varies. An unreadable request is a reason to pause, not to guess.

## Step 5: Limit the blast radius

Even careful people get fooled sometimes, so reduce what a mistake can cost. Use a separate wallet for experimenting with new dapps and keep only the funds you need in it. Keep long-term holdings in a different account that never connects to unknown sites.

Review and revoke old token approvals periodically, since an approval you granted long ago can still be used. Revoking costs a small network fee but removes the permission.

## Warning signs that should end the session

- You are told to act fast or lose a reward.
- The site asks for your recovery phrase for any reason. Real services never do.
- The page asks you to connect and sign immediately, with no way to browse first.
- The domain or contract does not match the official documentation.
- A "support" person you did not contact offers to help.

## How Signward helps

Signward is built to add a check at the moment of decision. It looks at the site and the request you are about to sign and flags known risky patterns, such as lookalike domains or approvals to suspicious spenders, so you have a second signal before you confirm. It is an aid to your own judgment, not a guarantee, and no tool catches everything.

## A short routine to remember

Arrive from a source you trust, read the domain, compare the contract, read the prompt, and keep risky experiments in a small wallet. None of these steps needs technical skill, and together they stop most of the common wallet-draining scams.

This article is for education only and is not financial advice.
