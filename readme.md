# Deno Module for Fluent to work on Grammy bot framework
> You can use this module to experiment with localization of your bot.

To make it extremely easy, just import this file into your bot, and see the magic.

To make it work use this code:
`import {useFluent,Fluent,FluentContextFlavor} from "https://deno.land/x/grammyfluent/mod.ts"`

Then, to make it work with your bot.
Simply code:
`const fluent new Fluent()`

Use it with your bot via
`bot.use(useFluent({fluent}))`

Don't forget to make an ftl file.