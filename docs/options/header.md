# header

## Overview

**Command** : `/set header <text>`

**Description** : The text that is attached before the message

**value** : Any text (string) value, less than 100 characters

**default** : "From {@m}:"

## Description

Header is the text which is attached before the message. Its
purpose is to let others know who sent the message. You can
set this header to any text of your choice. 

### {m} and {@m}

The header can contain 2 placeholders, which will be replaced
later.

`{m}`  will be replaced by the member's nickname or username
in the server.

`{@m}` will be replaced by a mention to the member.

## Examples

Original message:

![](/img/ss/header1.png)

Header set to `Original sender: {m}`

![](/img/ss/header2.png)

Header set to `*This post sponsored by {@m}*`

![](/img/ss/header4.png)