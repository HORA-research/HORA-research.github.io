---
page_id: teaching
layout: page
permalink: /teaching/
title: Teaching
description: The list of courses taught by members of the group.
nav: true
nav_order: 6
---

<div class="projects">
  {% assign courses = site.courses %}
  <!-- Generate cards for each course -->
  <div class="container">
    <div class="row row-cols-1 row-cols-md-1">
      {% for course in courses %}
        {% include courses.liquid %}
      {% endfor %}
    </div>
  </div>
</div>