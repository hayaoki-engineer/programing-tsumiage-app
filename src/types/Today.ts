import { Kirokus } from "./Kirokus";

export class Today {
  constructor(
    public id: string,
    public date: string,
    public memories: Kirokus[]
  ) {}
}
