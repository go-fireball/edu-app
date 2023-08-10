import {Question} from "@/models/Question";

export interface Comprehension {
  title: string,
  passage: string[],
  questions: Question[]
}
