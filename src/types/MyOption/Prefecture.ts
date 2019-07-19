import MyOption from "./MyOption";
export default class Prefecture extends MyOption {
  id: number;
  name: string;
  constructor(p__id: number, p__name: string) {
    super(p__id, p__name);
    this.id = p__id;
    this.name = p__name;
  }
}
