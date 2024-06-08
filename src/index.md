---
tags: page
layout: landing.njk
title: 'Home'
permalink: 'index.html'

welcome:
    name: 'Radek Dobrovolný'
    title: 'Software Developer and Forest Keeper'
    desc: 'I like getting involved in projects that make life or work easier. Or just for fun. I like projects to have a beginning and an end. Small and local is beautiful.'
    greetings: 'Dobrý den'
    profile: 'assets/images/profile-bw-trans.png'
---

{% for post in collections.post %}
<a href="{{ post.url }}">
<div class="blog-item">
    <img src="https://placehold.co/200x200">
    <h3>{{ post.data.title }}</h3>
    <p>{{ post.data.desc }}</p>
</div>
</a>
{% endfor %}