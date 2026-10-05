---
layout: resume
title: "Résumé"
desc: "Python & Django web developer: what I build, how I work with AI agents, and what I teach."
tags: page

date: 2026-10-05
---

# résumé

This page is the technical companion to my
[LinkedIn](https://www.linkedin.com/in/radekdobrovolny/): fewer job titles,
more about what I actually do and how.

I'm a Python web developer with production experience since 2018. Right now I
build Django tools for editors at [Muck Rack](https://muckrack.com/), a US
media-intelligence platform, working on both the backend and the frontend.

I also focus on AI-assisted development: I've been working with AI coding
agents almost every day since 2025.

**Availability:** I'm not looking for a full-time role at the moment.

I'm open to small projects (a few hours a month), and I'm happy to help
non-profits I find meaningful at about half my usual rate. I don't work for
gambling, predatory lending, or companies with a clearly harmful impact on
society.

*Last updated: October 2026*

# working with AI

Today almost nothing in my work happens without AI, but the responsibility for
the result stays with me: I review the agent's code like a colleague's and
shape it to the team's standards.

## a typical task

1. Clarify the scope with the product manager and agree on acceptance criteria in the team's task tracker.
2. Load the task into Claude Code (via MCP).
3. Let the agent analyse it, then agree on a plan together. For larger tasks, write a PRD first.
4. Implement, test, iterate.
5. Review: the agent does a first pass, I decide what's worth fixing.
6. Set up a QA environment and check that we've met the original goal.

## rules and limits

- The agent almost never runs commands that change anything. Commits, merges and pushes are mine.
- I watch for verbosity, unnecessary comments, agents getting lost in details that don't matter, and agents looping around one bug without changing their approach.
- Work data only goes through the company Claude account, and I make sure no sensitive data gets sent out.

I like how AI keeps me moving. I think that's its biggest benefit.

**Tools:** Claude Code with shared team skills, MCP integrations (Linear,
Datadog), ChatGPT, Codex.

Building *with* LLMs: so far one prototype on the Gemini API
([elpida](https://github.com/RadekDobrovolny/elpida)).

Currently preparing for the **Claude Certified Architect** certification by
Anthropic.

# selected projects

## Muck Rack, via Senvio · since February 2026

Full-stack (Django and Vue/TypeScript) in a small team building internal tools
that keep data about media outlets, journalists and podcasts accurate. Large
datasets across MySQL, PostgreSQL and OpenSearch; fully remote, in English.

- **Coverage Atlas V2**, a tool for reviewing media lists in bulk: XLSX import with validation, a new outlet health signal across the whole stack, a customer-ready export, and a UI refresh I designed and built
- **Data at scale:** unified 680+ podcast categories across ~93 million episodes, and removed 20,000 job entries with a reindex of ~43 million OpenSearch documents, all in safe batches on production with no downtime
- **Reliability and performance:** traced 20-second timeouts in the admin to an expensive subquery that ran even with nothing to update, fixed a stuck profile merge, and sped up slow admin queries
- **Led the technical side** of replacing the old paywall status with a new model, and of the podcast tooling

## Schwifty: work tracking & billing · freelance, solo

A system for an IT services company with a team of technicians. It works out
how much work each client received, what goes beyond the flat-rate contract
(including night and holiday surcharges), and the technicians' bonuses.

- **My part:** shaped the requirements with the owner, then designed, built and deployed everything myself
- **Stack:** Django, HTMX, Alpine.js, Bulma; SQLite, which is enough for a small team and needs no administration; Docker on the client's server
- **The hard parts:** turning the owner's rules into a clear model, a UI for a system with many functions, and PDF generation

## Showmax · 2022–2024

This is where I really learned Django: a production CMS for films, series and
sport, built as microservices. I worked on content management and on the API
serving subtitles to the streaming app. Some services ran on FastAPI.

## Stats Perform · 2024–2026

Data engineering: modifying ingestion pipelines and AWS Lambda scripts, with
Redshift as the main data store. Hands-on experience, not deep expertise.

## Seznam.cz · 2018–2022

Junior to mid-level full-stack developer on Flask services for products like
Počasí.cz, Garáž.cz and Seznam Wallet.

# skills

## daily

- Python, Django: ORM and query optimisation, forms, templates
- SQL (MySQL, PostgreSQL)
- unit and integration tests, code review, Docker, Git

## done in production

- Django REST Framework, admin, authentication and permissions, migrations, i18n
- Celery and RabbitMQ
- Flask, FastAPI, Kubernetes manifests, Datadog, Sentry

## frontend

- Vue.js in existing codebases, HTMX, Alpine.js, Bulma, Tailwind, hand-written CSS

## touched, not an expert

- AWS (Kinesis, Lambda, Redshift), Kafka, Snowflake, Redis caching

# teaching & facilitation

## Computational Thinking · Masaryk University · since 2020

A [course](https://is.muni.cz/predmet/phil/podzim2026/ISKB63) I designed from
scratch for non-technical students, from Scratch to p5.js and micro:bit.
Students finish by designing and running their own short course. I've been an
external lecturer at the Department of Information Studies (KISK) since 2015.

## Lead coordinator, KISK Summer School · 2017–2022

Six editions of a five-day off-site event with 100+ participants, run by a team
of 6+ that I led.

## Workshops

I also lead workshops where a group builds a shared digital artifact together, such as
[Crossing Boundaries](/post/crossing-boundaries.html).

# side projects

I enjoy coming up with small tools that I or people around me actually use.
Technically they're mostly simple; what I care about is the idea and the
design. The skill they show is taking a tool all the way: building it, hosting
it (GitHub Pages, Cloudflare or my own server) and keeping it running.

My [GitHub](https://github.com/RadekDobrovolny) looks a bit like a workshop
table, full of small tools. I go by *done is better than perfect*. These are
worth a look:

- [kraau3](https://github.com/RadekDobrovolny/kraau3): a competence framework for student teachers, turned from a PDF into a web app for self-assessment and teaching practice; Astro, Preact. Growing into a full project.
- [kyberbus](https://github.com/RadekDobrovolny/kyberbus): a private social network where members of an expedition share photos and messages; Nuxt, TypeScript, SQLite
- [knihobudka](https://github.com/RadekDobrovolny/knihobudka): generates building plans for a little free library box, printable to scale; vanilla JavaScript
- [radekd-web](https://github.com/RadekDobrovolny/radekd-web): this site; Eleventy and hand-written neobrutalist CSS

Smaller things: [Šuplík](/post/drawer.html), a public drawer for ideas;
[setkani](https://setkani.hippou.cz/), an events page for a community bench;
[balim](https://github.com/RadekDobrovolny/balim), a packing checklist; and an
[audiovisual artifact](https://github.com/RadekDobrovolny/zimni_skola_2025)
from a workshop I led.

**Homelab:** a home server running everything in Docker: backups, media,
PocketBase for Šuplík and Umami analytics for this site.

# background

Bachelor's degree in Applied Informatics, Masaryk University. Before Python I
worked in IT analysis and development roles (Java, SQL, VBA). The full history
is on [LinkedIn](https://www.linkedin.com/in/radekdobrovolny/).

# contact

[E-mail](mailto:radek.dobrovolny@gmail.com) ·
[LinkedIn](https://www.linkedin.com/in/radekdobrovolny/) ·
[GitHub](https://github.com/RadekDobrovolny)
