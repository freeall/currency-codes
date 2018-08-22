declare module "currency-codes" {
  export interface CurrencyCodeRecord {
    code: string;
    number: string;
    currency: string;
    countries: string[];
  }

  export function code(code: string): CurrencyCodeRecord;

  export function country(country: string): CurrencyCodeRecord[];

  export function number(number: string): CurrencyCodeRecord;

  export function codes(): string[];

  export function numbers(): number[];

  export function countries(): string[];
}
