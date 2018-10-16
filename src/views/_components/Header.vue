<template>
  <header class="header">
    <div class="header__logo">
      <h2>数据标注平台</h2>
      <p>DATA TAGGING PLATFORM</p>
    </div>
  </header>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {

}
</script>

<style lang="scss" scoped>
  .header {
    @include flex;
    justify-content: flex-start;
    height: $--header-height;
    padding: 0 $--container-padding;
    border-bottom: 1px solid $--border-color;
  }
</style>
