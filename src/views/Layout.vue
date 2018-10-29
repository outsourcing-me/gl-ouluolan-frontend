<template>
  <section class="layout">
    <dt-menu class="menu"></dt-menu>
    <router-view class="body"></router-view>
  </section>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import DtMenu from '@/views/_components/Menu.vue'

@Component({ components: { DtMenu } })
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
.body {
  margin-left: $--menu-width;
}
.menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  background: $--menu-bg-color;
  width: $--menu-width;
}
</style>
