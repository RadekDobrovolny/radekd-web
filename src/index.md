---
tags: page
layout: landing.njk
title: 'Home'
date: 2024-06-01

welcome:
    name: 'Radek Dobrovolný'
    title: 'Software Developer and Forest Keeper'
    desc: 'I like getting involved in projects that make life or work easier. Or just for fun. I like projects to have a beginning and an end. Small and local is beautiful.'
    greetings: 'Dobrý den'
    profile: 'assets/images/profile-bw-trans.png'
---

{% assign filteredPosts = collections.post | onlyDefaultLang %}
{% for post in filteredPosts reversed %}
{% include "partials/_item-list.njk" %}
{% endfor %}