---
id: affiliate_tag
title: affiliate_tag
---

# amazon affiliate_tag

## Overview

**Command** : `/set amazon affiliate_tag <your amazon affiliate tag>`

**Description** : Set your Amazon affiliate tag that the bot will append to Amazon links

**value** : A string (text) value without any spaces

## Description

`amazon affiliate_tag` stores the affiliate tag with which any Amazon links sent in your
server will be replaced with, if `amazon replace_mode` is set to `Replace`.

:::caution

You must set your amazon affiliate_tag beforehand, if you want to use the `Replace` mode. However, it's not required
for `Clear`.

:::