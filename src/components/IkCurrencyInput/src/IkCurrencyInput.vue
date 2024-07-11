<!--
 * @Author: zqf
 * @Date: 2024-05-29 15:16:34
 * @email: 13289847921@163.com
 * @LastEditors: zqf
 * @LastEditTime: 2024-06-03 12:01:10
 * @Description: 
-->
<script setup lang="ts" name="IkCurrencyInput">
const input = defineModel({
  type: String,
  default: "",
});
const props = defineProps({
  isShowDecimal: {
    type: Boolean,
    default: false,
  },
  maxLength:{
    type: Number,
    default: 20
  }
});
const monetaryRule = (val: string) => {
  let value = val;
  // 如果输入非数字，则替换为''
  value = value.replace(/[^\d\.]/g, "");
  // 必须保证第一个为数字而不是.
  value = value.replace(/^\./g, "");
  // 保证只有出现一个.而没有多个.
  value = value.replace(/\.{2,}/g, ".");
  // 保证.只出现一次，而不能出现两次以上
  value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  // 整数n位小数2位
  let maxLength=props.maxLength;
  let regexPattern = new RegExp(`^(\\d{${maxLength}})\\d+|((\\.\\d{2})\\d+)$`, 'g');
  value = value.replace(regexPattern, "$1$3");
  // // 整数20位小数2位
  // value = value.replace(/^(\d{20})\d+|((\.\d{2})\d+)$/g, "$1$3");
  // 小数点前添加千位符
  const re = /\d{1,3}(?=(\d{3})+$)/g;
  value = value.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) {
    return s1.replace(re, "$&,") + s2;
  });
  // 输入的是小数点，就保留前面的数值，加千位符
  if (value[value.length - 1] === ".") {
    let aa = value.substring(0, value.length - 1);
    const ad = /\d{1,3}(?=(\d{3})+$)/g;
    aa = aa.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) {
      return s1.replace(ad, "$&,") + s2;
    });
    value = aa + ".";
  }
  // 输入的第一位是0并且后面没有跟小数点，则删掉这个0
  if (value.length >= 2 && value[0] === "0" && value[1] !== ".") {
    value = value.slice(1);
  }
  input.value = value.replace(/\$\s?|(,*)/g, "");
  return value;
};
const blur = () => {
  if (props.isShowDecimal) {
    input.value = parseFloat(input.value).toFixed(2);
  }
};
</script>
<template>
  <el-input
    v-model="input"
    v-bind="$attrs"
    placeholder="请输入金额"
    :formatter="(value: string) => monetaryRule(value)"
    @blur="blur"
  />
</template>
<style lang="scss" scoped></style>
