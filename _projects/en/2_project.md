---
page_id: project_2
layout: page
title: UHF
description: Unified Historicization Framework.
importance: 2
related_publications: false
---

## Description

Modeling the trajectories of entities and tracking changes in the data that comprise them (historical trajectories) requires historical data from multiple sources, as well as distributed temporal analysis methods that can manage both heterogeneity and ethical and legal silos. Historicization is the process of structuring a database schema to ensure the traceability and integrity of data evolution. Systematic modeling rules are defined to standardize the structure and constraints applicable across multiple temporal models. Several temporal models exist, but few have been effectively implemented directly using relational database management systems (RDBMS) and evaluated in terms of expressiveness and performance. 

## Objectives

- Develop a unified framework for describing existing temporal models for relational databases;
- Develop rules for constructing a historicized relational data model based on multiple temporal models;
- Develop equivalence rules between the components of the temporal model and SQL components for several RDBMSs;
- Develop a test bench;

## Software

[UHF-SQL](https://github.com/HORA-research/UHF-SQL): 
SQL generator for the Unified Historicization Framework.

UHF-Bench: 
SQL benchmark for temporal relational databasess (Coming soon).

<!-- {% cite khnaisser_past_2017 %} -->

## References

{% reference ceccarello_indexing_2025 %}

{% reference khnaisser_building_2024 %}

{% reference khnaisser_efficiently_2024 %}

{% reference chiusano_querying_2022 %}

{% reference khnaisser_past_2017 %}

{% reference barton_ambiguities_2017 %}

{% reference khnaisser_methode_2016 %}