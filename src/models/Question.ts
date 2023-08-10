import {Answer} from "@/models/Answer";

export interface Question {
  q: string;
  choices: Answer[];
}

