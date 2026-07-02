---
page_id: project_3
layout: page
title: CLSA-NHP
description: Classification of natural health products.
importance: 3
---

## Description

The use of natural health products (NHPs) is widespread among older adults in Canada; data from the Canadian Longitudinal Study on Aging (CLSA) suggest that 86% of participants used at least one NHP between 2011 and 2015, with an average of 5 NHPs per person. Information on NHPs is available from multiple data sources, including websites, social media, local databases, and questionnaires. This research project is part of a larger initiative aimed at classifying NHPs in a structured manner to make them accessible for research related to chronic diseases. 
First, we’ll focus on extracting data from multiple websites. Web scraping is an alternative to manual data collection that involves gathering information available on various websites. For example, a tool (e.g., Scrapy, Octoparse, etc.) navigates through each page of the WebMD website to extract relevant product information (e.g., “Omega-3 Fatty Acids — Fish Oil 300 mg - 1,000 mg capsule”) such as: the name (“Omega-3 Fatty Acids — Fish Oil”), the dosage (“1,000 mg”), the usage (e.g., “Take this product orally”), and the list of ingredients (“fish oil,” “eicosapentaenoic acid 300 mg,” “docosahexaenoic acid 200 mg”). Next, we will use a combination of natural language processing tools (e.g., spaCy, BERT, etc.) to extract information from unstructured data. After collecting data from the target data sources, we must structure it and store it in a database so that it can be updated and made available to data analysts.

## Software

Coming soon...

## References

{% reference khnaisser_can_2025 %}