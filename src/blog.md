---
layout: blogs
title: Blog
tags: page
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