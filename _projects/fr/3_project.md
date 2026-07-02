---
page_id: project_3
layout: page
title: PSN-ÉLCV
description: Classification des produits de santé naturels
importance: 3
---

## Description

L’utilisation de produits de santé naturels (PSN) est répandue au Canada chez les ainés, les données de l’Étude longitudinale canadienne sur le vieillissement (ÉLCV) suggérant que 86 % des participants ont consommé au moins un PSN entre 2011 et 2015, avec une moyenne de 5 PSN par personne. Les informations sur les PSN sont dans de multiples sources de données, y compris les sites Web, les médias sociaux, les bases de données locales et les questionnaires. Ce projet d’études s’insère dans un projet plus large qui vise à classifier les PSN de façon structurée, afin de les rendre accessibles pour la recherche en lien avec les maladies chroniques. 
Dans un premier temps, nous allons nous intéresser à l’extraction des données de plusieurs sites web. Le Web Scraping est une solution alternative à la collecte manuelle de données qui consiste à rassembler les informations disponibles sur différents sites web. Par exemple, l’outil (ex. Scrapy, Octoparse, etc.) navigue sur chaque page du site web WebMD pour extraire les informations pertinentes sur les produits (par ex, « Acides gras oméga-3 — huile de poisson 300 mg - 1 000 mg capsule ») tels que : le nom (« Acides gras oméga-3 — huile de poisson »), le dosage (« 1000 mg »), l’utilisation (par exemple, « Prendre ce produit par voie orale »), la liste des ingrédients (« huile de poisson », « Acide eicospentaénoïque 300 mg », « Acide docosahexaénoïque 200 mg »). Ensuite, nous utiliserons des outils de traitement de langage naturel (ex. spaCy, BERT, etc.) combinés pour extraire des informations à partir de données non structurées. Après avoir recueilli les données des sources de données cibles, nous devons les structurer et les sauvegarder dans une base de données pour pouvoir les mettre à jour et les rendre disponibles aux analystes de données.

## Logiciel

Coming soon...

## Références

{% reference khnaisser_can_2025 %}