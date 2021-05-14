import { Item } from "./item";

export interface Order {
  id: string;
  time: Date;
  items: Item[];
}
