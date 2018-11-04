<template>
  <section class="layout">
    <dt-header></dt-header>
    <router-view class="body"></router-view>
    <dt-footer></dt-footer>
  </section>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import DtHeader from '@/views/_components/Header.vue'
import DtFooter from '@/views/_components/Footer.vue'

@Component({ components: { DtHeader, DtFooter } })
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
.body {
  margin-top: $--header-height;
}
</style>
