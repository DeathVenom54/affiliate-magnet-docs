---
title: New header option for Affiliate Magnet
description: The bot will now allow you to customise the text attached before a message
slug: new-header-option
authors:
- name: Deathvenom
  title: Creator of Affiliate Magnet
  url: https://github.com/DeathVenom54
  image_url: https://github.com/DeathVenom54.png
---

# New header option for Affiliate Magnet

Affiliate Magnet will not allow you to customize the text that is attached
before the message. Up till now, whenever the bot replaced any affiliate
link, "From @member" was added to the beginning. Now, you will be able to
customize that text.

You can set your own header using the slash command `/set header <your header text>`.

## Special characters {m} and {@m}

`{m}` and `{@m}` stand for member and mention member respectively. Whenever
the bot replaces a link, it will attach the header with the member's username
or nickname in place of `{m}` and a mention (@) in place of `{@m}`.

You can see examples [here](http://localhost:3000/docs/options/header#examples).