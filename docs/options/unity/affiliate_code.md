# affiliate_code

## Overview

**Command** : `/set unity affiliate_code <your unity affiliate code>`

**Description** : Set your Unity Asset Store affiliate code that the bot will append to asset store links

**value** : A string (text) value without any spaces

## Description

`unity affiliate_code` stores the affiliate code with which any Unity Asset Store asset links sent in your
server will be replaced with, if `unity replace_mode` is set to `Replace`.

:::caution

You must set your unity affiliate_code beforehand, if you want to use the `Replace` mode. However, it's not required
for `Clear`.

:::