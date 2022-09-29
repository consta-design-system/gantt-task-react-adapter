export type MappingOptions<ITEM> = {
  readonly color?: string | string[] | ((item: ITEM) => string);
  readonly shape?: string | string[] | ((item: ITEM) => string);
  readonly size?: number | [number, number] | ((item: ITEM) => number);
  readonly style?: CSSStyleSheet;
  readonly tooltip?: (datum: ITEM) => {
    name: string;
    value: string | number;
  };
};
