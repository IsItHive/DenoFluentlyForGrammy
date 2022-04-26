import {LocaleId} from "https://raw.githubusercontent.com/dbaishev97/Fluent-try/master/src/index.ts"
import {Context} from "https://deno.land/x/grammy/mod.ts"

export type LocaleNegotiator<ContextType extends Context = Context> = (context: ContextType) => (
  | LocaleId
  | undefined
  | PromiseLike<LocaleId | undefined>
)
export const defaultLocaleNegotiator: LocaleNegotiator = (
    context => context.from?.language_code
)