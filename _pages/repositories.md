---
layout: page
permalink: /repositories/
title: Repositories
description: I upload key code and results to my GitHub. You can find them here.
nav: true
nav_order: 3
---

## Code

{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}

---

## Data

{% if site.data.repositories.github_data %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_data %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}
