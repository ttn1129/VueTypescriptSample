import MyOption from "./MyOption";
export default class MyOptionList {
  data: Array<MyOption>;
  constructor(d: Array<MyOption>) {
    this.data = d;
  }
}
