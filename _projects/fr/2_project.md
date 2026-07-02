---
page_id: project_2
layout: page
title: UHF
description: Cadre d'historicisation unifié.
importance: 2
---

## Description

La modélisation des trajectoires des entités et le suivi de l’évolution des données qui les composent (trajectoires historicisées) nécessitent des données historicisées provenant de plusieurs sources de données ainsi que de méthodes d’analyse temporelle distribuée qui permettent de gérer tant l’hétérogénéité que les cloisonnements éthiques et légaux. L’historicisation est le processus de structuration d’un schéma de base de données visant la traçabilité et l’intégrité de l’évolution des données. Des règles de modélisation systématiques sont définies afin d’uniformiser la structure et les contraintes applicables selon plusieurs modèles temporels. Plusieurs modèles temporels existent, mais rares sont ceux qui ont été efficacement mis en œuvre directement à l’aide des systèmes de base de données relationnelles (SGBDR) et évalués en matière d’expressivité et de performance. 

## Objectifs

-	Élaborer un cadre unifié pour décrire les modèles temporels existants pour les bases de données relationnelles;
-	Élaborer les règles de construction d’un modèle de données relationnel historicisé selon plusieurs modèles temporels ;
- Élaborer les règles d’équivalences entre les composants du modèle temporel et les composants SQL pour plusieurs SGBDR ;
- Développer un banc d’essai ; 

## Software

[UHF-SQL](https://github.com/HORA-research/UHF-SQL) :
Générateur SQL pour le cadre d'historicisation unifié.

UHF-Bench : 
Banc d'essais pour les bases de données historicisées (À venir).

## Références

{% reference ceccarello_indexing_2025 %}

{% reference khnaisser_building_2024 %}

{% reference khnaisser_efficiently_2024 %}

{% reference chiusano_querying_2022 %}

{% reference khnaisser_past_2017 %}

{% reference barton_ambiguities_2017 %}

{% reference khnaisser_methode_2016 %}