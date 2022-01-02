# partner

## Overview

**Command** : `/set humblebundle partner <your humble bundler partner id>`

**Description** : Set your Humble Bundle partner ID that the bot will append to Humble Bundle links

**value** : A string (text) value without any spaces

## Description

`humblebundle partner` stores the partner id with which any Humble Bundle links sent in your
server will be replaced with, if `humblebundle replace_mode` is set to `Replace`.

:::caution

You must set your humblebundle partner beforehand, if you want to use the `Replace` mode. However, it's not required
for `Clear`.

:::