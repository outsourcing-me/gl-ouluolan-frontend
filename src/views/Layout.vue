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
.menu /deep/ {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  background: $--menu-bg-color;
  width: $--menu-width;
  .el-menu {
    border-right: 0;
  }
  .el-menu-item {
    color: white;
    cursor: pointer;
    padding: 0 15px!important;
    height: $--menu-height;
    line-height: $--menu-height;
    &:hover,
    &.is-active {
      &, &:focus {
        background: $--menu-active-color;
      }
    }
    &:focus {
      background: none;
    }
  }
  .el-dropdown-menu__item--divided:before,
  .el-menu,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background: none;
  }
}
</style>
