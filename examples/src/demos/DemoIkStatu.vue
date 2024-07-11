<!--
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2024-04-19 14:47:04
 * @LastEditTime : 2024-04-19 15:36:50
-->
<template>
  <IkStatu title="123" type="success" />
  <IkStatu title="123" type="warning" />

  <div style="width: 300px;">
    <IkStatuOver list="权威地位erqweqweqweqwe, 的撒大, 3123, 312312, 5555, 6666" />
    <IkStatuOver :list="[{ title: '权威地位', type: 'success' }, { title: '123', type: 'warning' }, { title: '123', type: 'warning' }]" />
    <IkSelectTag v-model="selectItem" multiple :options="options" :tag-props="{closable: true}" />
  </div>


</template>
<script setup lang="ts">
import { ref } from 'vue'
import { IkStatu } from '@iking-ui/components'
import { IkStatuOver, IkSelectTag } from '@iking-ui/components'

const selectItem = ref(['1','2'])

const options = [
  {
    value: '1',
    label: 'Option1Option1',
  },
  {
    value: '2',
    label: 'Option2',
    disabled: true
  },
  {
    value: '3',
    label: 'Option3',
  },
  {
    value: '4',
    label: 'Option4',
  },
  {
    value: '5',
    label: 'Option5',
  },
]
</script>