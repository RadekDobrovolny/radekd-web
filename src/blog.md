---
layout: posts
title: "Blog"
category: "blog"
permalink: "/blog/index.html"
---

{% assign posts = collections.post | onePerTranslation %}
{% for post in posts reversed %}
{% include "partials/_item-list.njk" %}
{% endfor %}
