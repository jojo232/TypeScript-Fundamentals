/* eslint-disable @typescript-eslint/no-unused-vars */

//** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple(配列の型)
let tuple: [number, string] = [0, "A"];

// any(なんでも屋)、基本的に使わない
let any1: any = false;

// void(関数に紐づく型)、何も返却値がないことを表す型
// : voidを記載しなくても大丈夫
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined(未定義)
let nudefind1: undefined = undefined;

// object(あんまり使う機会がない)
let obj1: object = {};
let obj2: object = ({ id: number, name: string } = { id: 0, name: "AAA" });
