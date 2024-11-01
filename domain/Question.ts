import {outputWeight} from "@/domain/questions/utils";

export interface Question {
    key: string,
    label?: string,
    type?: object,
    show?: () => boolean,
    output?: (message:string) => {weight: outputWeight, message: string},
    optionImages?: object,
    commonImage?: object
}
