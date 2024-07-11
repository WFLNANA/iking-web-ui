/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-08-14 11:18:34
 * @LastEditTime: 2023-08-14 11:19:57
 */

const opt = Object.prototype.toString;

/**
 * 判断参数是否为一个对象
 * @param {*} value 
 * @returns 布尔值
 */
const isObject = (value: any) => {
  return opt.call(value) === '[object Object]';
}


/**
 * 把 src 属性的值赋给 tar 的同名属性
 * @param {*} tar 目标对象
 * @param {*} src 源对象
 */
const copyValue = (tar: any, src: any): any => {
  if(!isObject(tar) || !isObject(src)){
    throw new Error('参数异常');
  }
  Object.keys(tar).forEach(key => {
    if(Reflect.has(src, key)){
      tar[key] = src[key];
    }
  });
  return tar;
}

export const ObjectUtils = {
  copyValue,
  isObject,
}
