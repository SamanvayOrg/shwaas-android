import {outputWeight} from "@/domain/questions/utils";
import {QuestionType} from "@/domain/questionTypes/QuestionType";

export interface Question {
    key: string,
    label: string,
    type: QuestionType,
    show: () => boolean,
    output: (message:string) => Output,
    optionImages?: object,
    commonImage?: object
}

export interface Output {
    weight: outputWeight,
    message?: string
}
