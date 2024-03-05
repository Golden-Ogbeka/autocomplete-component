export interface CountryType {
  name: {
    common: string;
    official: string;
    nativeName: UncertainObjectType;
  };
}

export interface UncertainObjectType {
  [key: string]: any;
}
