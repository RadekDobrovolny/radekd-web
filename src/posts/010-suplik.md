---
title: "Šuplík"
layout: post
tags:
  - post
  - portfolio
  - web
  - fun
desc: 'Digital drawer for ideas'
date: 2026-02-07
permalink: '/post/drawer.html'
lang: en
alternateUrl: '/post/suplik.html'
alternateLang: cs

img: '/assets/images/posts/010-light.png'
---

<p>{{ date | postDate }}</p>

# Drawer: Digital drawer for ideas

## [suplik.hippou.cz](https://suplik.hippou.cz/)

It was just after eight in the evening and I felt like creating something. I fooled around with ChatGPT for a while, asking if it could suggest a topic for a two-hour project, but nothing seemed interesting. However, it led me to realize that I often come up with ideas, nice little things, and then forget about them.

So I thought of creating a digital [Drawer](https://suplik.hippou.cz/) where I could toss that idea (and probably never return to it). Sure, it would certainly be enough to create a page for it in Notion, notes on my phone, or a document on Drive. But I liked the idea that it would be hanging publicly and that anyone could toss an idea into the drawer. It's not about practicality, it's about the feeling.

It was a bit more diverse on the technical side, where I wanted to try new things. I wanted to solve it as a simple web app that stores data. I was looking for whether there are online hosted databases where you can store data for free for mini-projects. I then wanted to host the web app itself as usual on GitHub Pages.

## Supabase

I found [Supabase](https://supabase.com/), Postgres hosting for developers, where you get a database, API, and authentication and all this is available in the free tier. Cool. Registered and created a table for ideas. It actually had just one meaningful column with text and then only ID and creation time. Then it was necessary to set what operations could be done via the API (load records, add new).

Then I coded the web app with Claude: connection to the database, data loading, output to web, and CSS styles. I was surprised that the entire website was created practically with one prompt and then we just fine-tuned. In the configuration, it was necessary to set the URL of the remote database and API token.

Finally, I had a deploy manifest generated for GitHub and went live. The whole project was done in less than two hours, which was my intention. Joy.

## PocketBase

About two weeks later, however, the database in Supabase paused due to inactivity. Honestly, I don't really know what exactly that "inactivity" means – every other day I added some idea to the [Drawer](https://suplik.hippou.cz/) or at least viewed them, so there was some minimal traffic there. OK. The database could be unpaused and the free tier could continue without problems.

But at that time I was playing with my home server, so I decided to try to redo it. I came across the [PocketBase](https://pocketbase.io/) project, which is a really cute wrapper over SQLite that turns it into an instant backend. PocketBase is still very much in development, so I'm curious what features will be added. However, it doesn't have an official Docker image yet. Fortunately, the documentation describes how to write a Dockerfile and build the image yourself, which I did.

The installation wasn't completely smooth, but it worked and I got PocketBase running on my server.

Then it was easy. Export data from Supabase, upload it to PocketBase (actually, the import didn't work for me, so I copied those eight rows manually), set public access, adjust the database connection in the code (one prompt for Claude) and deploy. It works. Joy again.

## Enjoy

So if you ever get an idea that you want to put in a drawer, feel free to use [Drawer](https://suplik.hippou.cz/). And if you're bored and looking for inspiration, you can look into the [Drawer](https://suplik.hippou.cz/) and maybe start something.

You can find the project repository on [GitHub](https://github.com/RadekDobrovolny/suplik).

Happy creating!
