---
layout: blogs
title: Blog
tags: page
---

{% for post in collections.post %}
<a href="{{ post.url }}">
<div class="blog-item">
    <img src="{{ post.data.img | url }}">
    <h3>{{ post.data.title }}</h3>
    <p>{{ post.data.desc }}</p>
</div>
</a>
{% endfor %}