import { Types } from "../enums/types.enum";
import { List } from "./list.model";
import { Word } from "./word.model";

export interface ModalDatas {
  userId: string | null;
  type: Types | null;
  data: List | Word | null;
}