<template>
  <section class="layout">
    <dt-header></dt-header>
    <router-view class="body"></router-view>
  </section>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import DtHeader from '@/views/_components/Header.vue'

@Component({ components: { DtHeader } })
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>

</style>
