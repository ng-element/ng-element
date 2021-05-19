export interface ImageConfig {
  nelUrlList: string[];
  nelInitialIndex?: number;
  nelInfinite?: boolean;
  nelOnClose?: Function;
  nelOnSwitch?: Function;
}
