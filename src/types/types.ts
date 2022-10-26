export type DateString = string;
export type UrlString = string;

export type AlNumDashString = string;
export type AlNumString = AlNumDashString;

export type NumberString = AlNumString;
export type HexDashString = AlNumDashString;
export type HexString = HexDashString & AlNumString;

export type SHA256String = HexString;
export type UUID = HexDashString;

export type Milliseconds = number;
