---
page_id: teaching
layout: page
permalink: /teaching/
title: Enseignement
description: La liste des cours enseignés par les membres du groupe.
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