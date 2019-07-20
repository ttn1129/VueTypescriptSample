import MyOption from "./MyOptionInterface";
export default class Prefecture implements MyOption {
  id: number;
  name: string;
  constructor(p__id: number, p__name: string) {
    this.id = p__id;
    this.name = p__name;
  }
}
