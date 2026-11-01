---
title: "setApprovalForAll: the NFT approval that hands over a whole collection"
description: "setApprovalForAll lets another address move every NFT you hold in a collection. Here is how scammers use it, how to spot it, and how to undo it."
pubDate: 2026-11-01
category: "explainer"
tags: ["setapprovalforall", "nft", "approvals", "ice phishing"]
heroPrompt: "Flat editorial illustration of a single master key being handed through a small window to a shadowy figure while a row of identical framed pictures hangs unprotected behind it, teal and deep navy palette, calm technical mood, no text, no logos"
sources:
  - title: "EIP-721: Non-Fungible Token Standard"
    url: "https://eips.ethereum.org/EIPS/eip-721"
  - title: "EIP-1155: Multi Token Standard"
    url: "https://eips.ethereum.org/EIPS/eip-1155"
  - title: "OpenZeppelin Contracts: ERC721 documentation"
    url: "https://docs.openzeppelin.com/contracts/5.x/erc721"
---

setApprovalForAll is a function in the NFT standards that gives one address permission to move every token you own in a single collection, now and in the future. Marketplaces use it legitimately. Scammers use it to trick you into signing one transaction that lets them empty the whole collection without asking again.

## What setApprovalForAll actually does

The ERC-721 standard, which most NFT collections follow, has two ways to grant permission. The first, approve, lets an address move one specific token. The second, setApprovalForAll, lets an "operator" address move all tokens you hold in that contract. The ERC-1155 standard, used for many game items and editions, has only the second kind.

The approval has no expiry and no limit. It covers tokens you own today and tokens you receive tomorrow. It stays active until you send another transaction that sets it back to false.

This is why marketplaces ask for it. To list items for sale without you signing every trade, the marketplace contract needs permission to transfer your tokens when a buyer shows up. That request is normal. The risk is that the same function works for anyone who convinces you to approve their address.

## How scammers use it

The attack is sometimes called ice phishing, because nothing is stolen at the moment you sign. You are only handing over permission. The theft happens afterward, when the attacker's address calls transferFrom on your tokens.

A typical flow looks like this:

1. You see a fake mint, airdrop, "claim" page or giveaway, often reached through a hacked social account, a paid search ad or a direct message.
2. You connect your wallet. Connecting alone does not move anything.
3. The site asks you to sign a transaction labelled "verify", "claim", "mint" or "list". Underneath, the transaction calls setApprovalForAll with the attacker's address as the operator.
4. Once confirmed, the attacker can transfer every token in that collection, often within minutes, and sometimes across several collections if the site asked for more than one approval.

Because the transaction looks like any other approval and costs little gas, it is easy to click through without reading.

## How to recognize it in your wallet

Wallets show setApprovalForAll in different ways, so look for these signs rather than one exact wording:

- Text such as "Approve all", "Allow access to all your NFTs", "Permission to withdraw all" or "Set approval for all".
- A spender or operator address you do not recognize and cannot connect to the site you thought you were using.
- A request that appears when you expected only a free mint, a login or a message signature.
- A simulation or preview that shows no tokens arriving but a permission being granted.

A mint or claim usually needs to send you something. If the transaction instead grants someone else control over what you already own, stop and ask why.

## What to do before you sign

A few habits catch most of these attacks.

- **Match the request to the action.** Buying an NFT does not require approving all of your other NFTs. A login does not require any transaction.
- **Check the operator address.** For a marketplace, compare the address to the one listed in the marketplace's own documentation, reached from its official site rather than a link in a message.
- **Verify the site first.** Go to the project through an address you typed or a bookmark you saved, not through an ad or a direct message.
- **Use a separate wallet for risky interactions.** Mint new or unfamiliar collections from a wallet that holds nothing valuable, and keep valuable NFTs in another wallet or on a hardware wallet that never connects to unknown sites.
- **Be careful with "free" and "urgent".** Pressure to act quickly is a common feature of these campaigns.

## If you already approved a bad operator

An approval is reversible until the attacker uses it. Move fast.

First, from a clean device if you can, send your most valuable tokens to a new wallet you control. Moving them removes the target regardless of the approval.

Second, revoke the approval. The same function is used in reverse: a transaction that calls setApprovalForAll with the operator and the value false. Approval-management tools let you view your active approvals per contract and send the revoke transaction for you. Check the tool's address carefully, because fake "revoke" sites are used to run the same trick again.

Third, if you signed on a site that also asked for your seed phrase, treat the whole wallet as compromised and move everything to a new one. A revoke does not help if the phrase is exposed.

Revoking costs a small gas fee and does not recover anything already taken, but it stops further losses from that approval.

## How Signward helps

Signward is a browser extension that reviews the sites you visit and the requests they send to your wallet. It can flag lookalike domains and show when a transaction grants broad permission, such as an approval over an entire collection, so you see that before you confirm. It cannot judge every legitimate marketplace operator or undo an approval you already signed, so the checks above still apply.

## Key takeaways

setApprovalForAll is a normal feature with a wide reach: one signature can expose an entire collection with no expiry. Treat any "approve all" prompt as a request to hand over control of a whole collection, read who the operator is, confirm the site through a trusted route, and keep valuable NFTs in a wallet that does not touch unfamiliar sites.

*This article is for education only and is not financial or legal advice.*
