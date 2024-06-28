---
pagination:
  data: collections.categories
  size: 1
  alias: category
permalink: "/{{ category | slugify }}/index.html"
layout: posts
---

{% assign posts = collections.post | filterByCategory: category %}
{% for post in posts reversed %}
{% include "partials/_item-list.njk" %}
{% endfor %}