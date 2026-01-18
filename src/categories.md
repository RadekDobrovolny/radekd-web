---
pagination:
  data: collections.categories
  size: 1
  alias: category
permalink: "/{{ category | slugify }}/index.html"
layout: posts
title: "Posts"
---

{% assign posts = collections.post | filterByCategory: category | onlyDefaultLang %}
{% for post in posts reversed %}
{% include "partials/_item-list.njk" %}
{% endfor %}