export type NgClassType = string | string[] | Set<string> | NgClassInterface;

export interface NgClassInterface {
  [klass: string]: any;
}

export interface NgStyleInterface {
  [klass: string]: any;
}