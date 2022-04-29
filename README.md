# Fluent for Grammy.dev for Deno
We haven't had a module, that can work on Grammy without any problem. Now we have. I've remade every bridge inside of a code, so Deno can easily take that data.

To get Fluent work in your Grammy project on Deno, you simply need to import it in:

`import { Fluent } from "https://raw.githubusercontent.com/IsItHive/DenoFluently/main/src/index.ts"`

Then make a new Fluent with putting this app:

`const fluent = new Fluent()`

Also, don't forget, that you need to utilize Flavor Context for Fluent.

`import { FluentContextFlavor } from "https://raw.githubusercontent.com/IsItHive/DenoFluentlyForGrammy/main/index.ts"`
