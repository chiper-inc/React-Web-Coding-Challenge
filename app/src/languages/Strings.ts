import { StringsEnglish } from './us';
import { StringsSpanish } from './es';
import { StringsPortuguese } from './br';

export const locales = [`br`, `us`];
export const defaultLocale = `br`;

interface LangStringsProps {
  us: object;
  br: object;
  es: object;
}

export const LangStrings: LangStringsProps = {
  us: StringsEnglish,
  br: StringsPortuguese,
  es: StringsSpanish,
};
