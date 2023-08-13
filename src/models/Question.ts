import {Answer} from "@/models/Answer";

export interface Question {
  q: string;
  t: string;
  choices: Answer[];
  a: string;
}

