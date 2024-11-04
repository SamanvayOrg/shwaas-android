import {Colors} from '@/constants/Colors';
import {Output} from "@/domain/Question";

const alwaysShow = ():boolean => true;
const colors = Colors.light;

enum outputWeight {
    green = 'green',
    yellow = 'yellow',
    red = 'red',
    black = 'black',
}

enum outputColor {
    green = colors.green,
    yellow = colors.yellow,
    red = colors.red,
    black = colors.black,
}

const alwaysGreen = (message:string):Output => ({weight: outputWeight.green, message});

const redIfBoolean = (value:boolean, message:string, booleanValue:boolean):Output =>
    value === booleanValue
        ? {weight: outputWeight.red, message}
        : ({weight: outputWeight.green});

const redIfTrue = (value:boolean, message:string = undefined):Output => redIfBoolean(value, message, true);
const redIfFalse = (value:boolean, message:string = undefined):Output => redIfBoolean(value, message, false);

const objectify = (weight, message?:string) => ({weight, message});

const isDefined = (item:any) => item !== undefined && item !== null;

export {
    alwaysShow,
    alwaysGreen,
    outputWeight,
    redIfTrue,
    redIfFalse,
    outputColor,
    isDefined,
    objectify,
};
