<template>
  <header class="header clfix">
    <div class="header__logo">
      <h2>欧罗兰艺术漆</h2>
      <p>OU LUO LAN YI SHU QI</p>
    </div>
    <dt-menu class="menu"></dt-menu>
  </header>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import DtMenu from '@/views/_components/Menu.vue'

@Component({ components: { DtMenu } })
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header /deep/ {
  height: $--header-height;
  width: $--container-width;
  margin: 0 auto;
  .menu {
    float: right;
  }
}
.header__logo /deep/ {
  text-align: center;
  font-family: 'FZLTHJW';
  margin-top: 15px;
  color: $--primary-color;
  float: left;
  h2 {
    letter-spacing: 4px;
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
