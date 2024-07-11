<script setup lang="ts">
import {IkAutoCard} from '@iking-ui/components'

</script>

<template>
  <h3>IkAutoCard</h3>
  <p>正常显示 - 悬浮时显示所有内容</p>
  <div style="width: 400px; border: 1px solid #eee;padding: 16px;">
    <IkAutoCard>
      超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本
    </IkAutoCard>
  </div>
  <br/>
  <br/>
  <p style="color: #ff003b">脱离文档流显示 - 悬浮时显示所有内容</p>
  <div style="position: relative;width: 100%;height: 80px;">
    <div style="width: 400px; border: 1px solid #eee;padding: 16px;position: absolute; background: #fff;">
      <IkAutoCard>
        超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本
      </IkAutoCard>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>