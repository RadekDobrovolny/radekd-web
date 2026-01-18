---
title: "Crossing Boundaries"
layout: post
tags: 
  - post
  - portfolio
  - workshop
  - web
  - fun
desc: 'Digital Artifact: Workshop at KISK Winter School'
date: 2025-03-24
permalink: '/post/crossing-boundaries.html'
lang: en
alternateUrl: '/post/prekracovani-hranic.html'
alternateLang: cs

img: '/assets/images/posts/konev.png'
---

<p>{{ date | postDate }}</p>

# Digital Artifact: Workshop at KISK Winter School

*At the KISK Winter School, I led a workshop where we attempted to create a shared digital artifact – a memory that would survive both physical time and space. Did it work? And what happened during one intense hour and a half at Nová Cvernovka?*

## Ideation

In mid-February 2025, I attended an event organized by KISK students – the first Winter School, a community event entirely realized by students, with content brought by participants themselves.

{% polaroid "left", "/assets/images/posts/zs-prostor.jpg", "main hall" %}

The event took place in Bratislava at the creative and cultural center [Nová Cvernovka](https://novacvernovka.eu/). I was eager to soak up the atmosphere of this environment, take a trip, meet new people, and get a glimpse into the current mood and topics of students. And in the end, it was really great.

During registration, you had to immediately say what you wanted to contribute to the program. The options were lectures, workshops, and similar formats. I wrote a somewhat general answer because I didn't know what the initial conditions would be – mainly time and number of people. Eventually, we agreed that I would do a workshop. Specifically: we would try to create a digital artifact together.

We ended up agreeing on quite challenging parameters. Time allocation of an hour and a half, about 15 participants. *Phew.* My ideal scenario was half the number of people and more than two hours. Oh well – it would be a challenge and it would be intense.

## Theme and Anchoring

I really liked the claim of the whole event: *crossing boundaries*. My goal was to create some digital work during the workshop – a memory of this event – that all participants would contribute to.

{% polaroid "right", "/assets/images/posts/zs-prezijeme.jpg", "Physical artifact" %}

But first, a bit of theory. I tried to introduce what digital artifacts actually are and show a few examples. We talked about how we're operating at the intersection of digital creation, art, programming, and generative art – and that the boundaries between these areas are often quite blurred. I didn't want to get bogged down in debates about whether it's art or not. That wasn't important to me at that moment. I perceive digital artifacts as a tool for self-expression.

I mentioned the [Genuary](https://genuary.art) challenge, the aggregator [The Useless Web](https://theuselessweb.com/), and introduced some creators on Instagram. We had about 15 minutes for the theoretical introduction – I tried to convey as much as possible, but in this time it might have seemed a bit convoluted.

## Roles and Division

Then I presented what we could try to create. I wanted to work with the p5.js library, which I briefly introduced: we have a canvas on which we can create, and then place the output on the web. The goal was to try to express the atmosphere of the winter school and preserve it in the digital world – something that might evoke a feeling even in five years.

{% polaroid "left", "/assets/images/posts/zs-rajcata.jpg", "vegetables" %}

I had prepared small subgroups that participants divided into.

The first group was tasked with collecting visual impressions – walking around the space and taking some photos.

The second group collected sounds – noises, phrases, or even short messages.

The third focused on texts – excerpts from lectures, materials, inscriptions, and other text fragments that affected them somehow.

The penultimate group was in charge of visual style – fonts, colors, graphic elements.

The last group were interaction designers – their task was to come up with how the page would behave, what would be displayed, how the interaction would look.

{% polaroid "right", "/assets/images/posts/zs-koule.jpg", "Disco" %}

Participants chose their own group and went off to collect. We had about half an hour for data collection. I sat down with the designers' group and helped determine the boundaries between what we were capable of implementing and what would be too demanding.

## Let Them Cook

The main idea was working with the theme of "*crossing boundaries*". Two contrasting text messages should be displayed in the middle of the screen. The screen is divided by a fluid vertical boundary. And graphic objects move around the screen, which change when crossing the boundary. On touch, they stop and play a random sound. Ok, we had ideas. On paper, it looked feasible – although I honestly had no idea how quickly it could be put together.

Half an hour passed, participants returned, and we started presenting the collected materials. Each group added context about why they chose this particular thing. It was rich, diverse. There was enough material – but not so much that it overwhelmed us. I was pleased.

At this stage, we still fine-tuned the interaction plan and overall concept. And with that, we reached the end of the workshop's time frame.

## Implementation

I then collected all the materials and went to dinner. And in the evening, I started the implementation. I had a web template with a p5.js canvas prepared. I inserted the background, created a panel for displaying texts, wrote a function for random selection and display. I added movement to the images. I was a bit worried about the "fluid boundary" in the middle of the screen. I heavily used ChatGPT to generate code, and then I put it together like a puzzle and fine-tuned the details. Finally, I added sounds and touch interaction. In about an hour and a half, the result was ready – and I could present it to others.

{% polaroid "left", "/assets/images/posts/zs-valentin.jpg", "Valentín" %}

Then I just fine-tuned the display on mobile phones and fixed sound playback. I was really pleased with the result. I liked how quickly such an artifact can be created – when you have materials, vision, and help from AI.

## Cooked

I uploaded the result to a [GitHub repository](https://github.com/RadekDobrovolny/zimni_skola_2025), where I also use GitHub Pages for hosting. You can view the digital artifact here: [radekdobrovolny.github.io/zimni_skola_2025](https://radekdobrovolny.github.io/zimni_skola_2025/).

I was glad that the workshop's goal was fulfilled. That everyone contributed their part to the shared, community result. And now we'll see – whether someone will return to that artifact in a few years, or it will fall into oblivion.

I would like to repeat this workshop sometime. Ideally in a less wild form, when there will be more time, with a smaller group and greater participant involvement in creating with p5.js. To show how to transform ideas into code with ChatGPT's help and animate them in digital space.
