---
title: "StepDrainer: real DeFi domains, cloned sites, one server"
description: "Over one night, a dozen DeFi sites started serving a wallet drainer from their own domains. We looked at what they were actually serving. Here is what we found, why most site checks miss it, and what to do."
pubDate: 2026-10-31
updatedDate: 2026-10-31
category: "incident"
tags: ["dns hijack", "frontend attack", "wallet drainer", "incident", "stepdrainer"]
heroPrompt: "Flat editorial illustration of a familiar storefront whose sign and window look perfect, but the door has been quietly rerouted by a cable to a single dark server box behind the building, teal and deep navy palette, calm and technical mood, no text, no logos"
sources:
  - title: "TokenPost: Blockaid warns of frontend attack on Kintsu, Flap and StonkBrokers"
    url: "https://www.tokenpost.com/news/technology/45297"
  - title: "TokenPost: Blockaid expands StepDrainer alert to ten more sites"
    url: "https://www.tokenpost.com/news/technology/45317"
  - title: "TechFlow: Kintsu says its domain was hijacked at the registrar level"
    url: "https://www.techflowpost.com/en-US/newsletter/142212"
  - title: "EconoTimes: Flap seeks help from Vercel and Name.com after website redirect"
    url: "https://econotimes.com/Flap-Seeks-Help-From-Vercel-and-Name-com-After-Website-Redirect-1767500"
  - title: "EconoTimes: Blockaid withdraws StonkBrokers warning"
    url: "https://econotimes.com/Blockaid-Withdraws-StonkBrokers-Warning-Founder-Says-Domain-Was-Unofficial-1767520"
  - title: "TokenPost: StonkFun restores its site on new infrastructure"
    url: "https://www.tokenpost.com/news/technology/45357"
  - title: "Blockaid: the Squarespace DeFi domain hijack (July 2024)"
    url: "https://blockaid.io/blog/squarespace-defi-domain-hijack-incident"
  - title: "Curve Finance: domain incident (May 2025)"
    url: "https://news.curve.finance/curve-domain-incident/"
  - title: "RDAP registry lookup (example: stakepoint.app)"
    url: "https://rdap.org/domain/stakepoint.app"
  - title: "disable-devtool on npm"
    url: "https://www.npmjs.com/package/disable-devtool"
  - title: "Revoke.cash"
    url: "https://revoke.cash"
---

Late on October 30, Blockaid warned that an active frontend attack, which it linked to a drainer toolkit called **StepDrainer**, had hit Kintsu and Flap. A few hours later it named ten more sites: StonkFun, Pickle Finance, Echelon, Origami, Fluxbeam, Stakepoint, SupSwap, Longbow, SHPRD and ApeX DeFi. Its advice was simple: do not connect a wallet to any of them for now. (A third name in the first alert, StonkBrokers, was later withdrawn as a false positive.)

These were not lookalike domains. People typing the correct address, or clicking a bookmark, landed on a page that looked exactly like the real one. That is what makes this kind of attack dangerous, and it is why we went and looked at what the sites were actually serving.

## The short version

- The sites were real projects on their real domains. The domains themselves were taken over and pointed somewhere else, which Kintsu described as a hijack "at the registrar level".
- On the morning of October 31, six of the named domains (pickle.finance, fluxbeam.xyz, stakepoint.app, supswap.xyz, shprd.finance and apexdefi.xyz) all pointed to **the same server**, `31.56.52.52`, a plain nginx box on Ubuntu instead of the hosting the projects normally use.
- Every one of them served a copy of the real site plus **the same 1.9 MB script**, byte for byte, loaded from the site's own address.
- No confirmed losses had been published at the time of writing. If you connected a wallet or signed anything on these sites since late October 30, review your approvals now.

## What we found when we looked

We fetched each homepage the way a browser would, without running any of its code, and checked where each domain pointed.

**One server behind six domains.** The six domains above all resolved to `31.56.52.52`, and all answered with the same server banner, `nginx/1.18.0 (Ubuntu)`. Their DNS was served by name.com nameservers. That fact alone does not tell you how the takeover happened, and the projects have not published a root cause yet. What it does tell you is that one operator was running all six fake copies from one machine.

**A cloned site with a telling layout.** Each fake page loaded a script from a path that starts with the site's own name, for example `/pickle.finance/assets/quiet-ember-one.js` on pickle.finance and `/fluxbeam.xyz/assets/quiet-ember-one.js` on fluxbeam.xyz. One page also loaded files from a `/_clone/` folder. Real web apps do not put their own domain name inside their asset paths. Website copying tools do, because they save each site into a folder named after it. It is a small detail, but it is a reliable fingerprint of a cloned page.

**The same drainer everywhere.** The script was identical on every site we compared (SHA-256 `81bd310c551bb6871fa217d92ea60e8a0bc6990838fc38807dadbf26ad86212b`). It is one 1.9 MB line of heavily obfuscated JavaScript. Its variable names are made of Chinese characters, its strings are compressed, and it builds its real code at runtime from a string table. Ordinary production bundles are minified, but they do not look like this. We did not run it, so we cannot say which signatures it asks for. Blockaid's description, malicious scripts inserted into the sites, matches what we saw.

**The other four were already back.** By the time we checked, StonkFun, Echelon, Origami and Longbow were served from their normal hosting again, as were Kintsu and Flap. StonkFun said it had rebuilt on new infrastructure and found no affected users. SupSwap moved back to its normal hosting while we were writing this. Pickle, Fluxbeam, Stakepoint, SHPRD and ApeX DeFi still pointed at `31.56.52.52` at 10:08 UTC on October 31.

## Update, October 31 afternoon: one registrar, one hold

**Every flagged domain shares one registrar.** Public registry (RDAP) records show that all ten domains in Blockaid's second alert are registered at Name.com, and Kintsu's domain is too. Independent researchers pointed this out first; we checked the records ourselves. A shared registrar is the common factor, but the records alone do not show how the nameservers were changed, and no root cause has been confirmed.

**The registrar suspended them within seconds.** The domains were placed on `clientHold`, the status a registrar uses to take a domain offline. The two that were still on hold when we checked, supswap.xyz and stakepoint.app, both show their last change at 12:32:44 and 12:32:46 UTC. While on hold, the domains did not resolve at all, which took the fake copies offline for everyone.

**Most are back under their owners' control.** By about 15:15 UTC, pickle.finance had been released and moved its DNS to Vercel, and fluxbeam.xyz, apexdefi.xyz and shprd.finance had been released and moved to NS1. SupSwap and Stakepoint were still on hold at that time. Wait for each project to confirm on its official channels before connecting a wallet again.

**A fixed domain can still send you to the clone for a while.** DNS answers are cached. Around 16:00 UTC, the new nameservers for shprd.finance already pointed to new servers, but the public resolvers of Cloudflare (1.1.1.1) and Google (8.8.8.8) still answered with the drainer's `31.56.52.52`, and that address still served the cloned page. Until those caches expire, some visitors keep landing on the fake copy even after the project has fixed its records. If a project says it has recovered, give it a few hours before you connect.

**What the drainer did to hide.** We opened one of the clones in an isolated browser with a fake, empty wallet. The page loaded an anti-debugging library, `disable-devtool`, from the esm.sh CDN; when it detected an automated browser it blanked the page to `about:blank`. It also looked up the visitor's IP address through `api.ipify.org`, and its 1 MB second-stage payload was not on the site at all: it was fetched from Irys, a permanent storage network. Even with the anti-debugging blocked, the page asked our wallet for nothing from a datacenter connection, which is consistent with a drainer that only fires for visitors who look like real users. Legitimate DeFi sites do not ship anti-debugging libraries, so this combination is itself a useful warning sign, and Signward now flags it.

## Why most site checks pass a hijacked site

Most phishing protection asks one question: does this page look like a fake? It checks for a misspelled or brand-new domain, a lookalike logo, a "claim your airdrop" banner, or a known drainer script loaded from a strange host.

A hijacked domain passes all of that. The domain is years old and spelled correctly. The page text is a perfect copy. There is no bait. And the drainer is served from the site's own address, so a check that only looks at third-party scripts never sees it. The signals that do survive are different ones: **where** the domain points, **whether the site changed** since you last used it, and **what the page does** when you connect and sign.

This is not new. In July 2024, dozens of DeFi domains moved from Google Domains to Squarespace were hijacked in the same way, hitting Compound, Celer and Pendle among others. In May 2025, Curve's domain was redirected at the registrar level. The pattern repeats because it works: users trust the address bar.

## What to do now

1. **Do not connect to the affected sites** until the project confirms on its official X account or Discord that the domain is back under its control. A site that looks normal is not proof.
2. **If you connected or signed since late October 30, revoke approvals.** Use [Revoke.cash](https://revoke.cash) or your wallet's own approval screen, and look for any approval or permit you do not recognize, especially unlimited ones. Kintsu asked users who connected or signed on its site after 00:00 UTC on October 31 to do this.
3. **If you signed something you did not understand, move your funds** to a fresh wallet. A signed permit can be used later, after you have closed the page.
4. **Treat the connect step as a decision.** A real dApp that suddenly asks for a signature the moment you connect, before you clicked anything, is a red flag.

## What we changed in Signward

Some of this is live today. The six domains are on Signward's block list for seven days, and Signward's AI deep scan now inspects a site's own scripts and where its domain points, so it flags these clones. The rest ships in Signward 0.5.0, which is on its way to the Chrome Web Store and Firefox Add-ons:

- **Known-bad hosting.** When you connect a wallet, Signward checks once per site per day whether the domain points to a server tied to a drainer, such as `31.56.52.52`, and blocks the site if it does.
- **Clone fingerprint.** Pages that load their own files from a path named after the site itself, or from a `/_clone/` folder, are flagged on load.
- **"This site changed since you last used it."** Signward remembers a small fingerprint of each site where you connect or sign, and warns you if it suddenly looks rebuilt from scratch.
- **Behaviour at signing time.** A signature request right after connecting without a click, or several approval requests in a row, gets a clear warning. The same hold-and-explain now covers Solana wallets too.

Behind the scenes, our own monitor now watches where hundreds of DeFi domains point, so the next time a group of them moves to the same unknown server we can react within minutes, not hours.

Credit to Blockaid for the alerts that started this, and to the affected teams for warning their users quickly.
