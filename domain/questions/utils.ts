import {Colors} from '@/constants/Colors';

const alwaysShow = ():boolean => true;
const colors = Colors.light;

enum outputWeight {
    green = 'green',
    yellow = 'yellow',
    red = 'red',
    black = 'black',
}

enum outputColors {
    green = colors.green,
    yellow = colors.yellow,
    red = colors.red,
    black = colors.black,
}

const alwaysGreen = (message:string) => ({weight: outputWeight.green, message});

const redIfBoolean = (value:boolean, message:string, booleanValue:boolean) =>
    value === booleanValue
        ? {weight: outputWeight.red, message}
        : {weight: outputWeight.green};

const redIfTrue = (value:boolean, message:string) => redIfBoolean(value, message, true);
const redIfFalse = (value:boolean, message:string) => redIfBoolean(value, message, false);

const objectify = (weight, message?:string) => ({weight, message});

const isDefined = (item:any) => item !== undefined && item !== null;

export {
    alwaysShow,
    alwaysGreen,
    outputWeight,
    redIfTrue,
    redIfFalse,
    outputColors,
    isDefined,
    objectify,
};
