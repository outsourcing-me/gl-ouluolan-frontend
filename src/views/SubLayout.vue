<template>
  <section class="sublayout">
    <div class="head-content">
      <dt-header></dt-header>
      <div class="breadcrumbs__container" v-if="!crumbsDisabled">
        <h2>{{crumbs[crumbs.length - 1].name}}</h2>
        <el-breadcrumb v-if="crumbsVisible" class="breadcrumbs">
          <el-breadcrumb-item v-for="crumb in crumbs" :to="{name: crumb.routeName}" :key="crumb.routeName">{{crumb.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <main class="main-content">
      <router-view ref="routerView"></router-view>
    </main>
  </section>
</template>

<script>
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { globalBus } from '@/common/bus.js'
import DtHeader from '@/views/_components/Header.vue'

@Component({ components: { DtHeader } })
export default class SubLayout extends Vue {
  @Prop({ type: Boolean, default: false })
  crumbsDisabled

  mounted() {
    globalBus.$on('window-resize', e => {
      const childView = this.$refs.routerView || {}
      childView._initViewSize && childView._initViewSize()
      childView._initCardResize && childView._initCardResize()
    })
  }

  beforeDestroy() {
    globalBus.$off('window-resize')
  }

  _updateCrumbs() {
    if (this.$route.matched.length < 3) {
      this.crumbsVisible = false
    } else {
      this.crumbsVisible = true
      this.crumbs = this.$route.matched.slice(1).map(v => {
        return {
          name: v.meta.title.split('-')[0],
          routeName: v.name
        }
      })
    }
  }

  @Watch('$route', { immediate: true })
  _updateCrumbs

  data() {
    return {
      crumbsVisible: true,
      crumbs: []
    }
  }
}
</script>

<style lang="scss" scoped>
.head-content {
  position: fixed;
  top: 0;
  left: $--menu-width;
  right: 0;
}
.main-content {
  margin-top: $--crumbs-height + $--header-height;
  padding: $--container-padding;
  // height: calc(100% - #{$--crumbs-height + $--header-height});
  // overflow-y: auto;
}
.breadcrumbs__container {
  @include flex;
  align-items: flex-start;
  flex-direction: column;
  height: $--crumbs-height;
  border-bottom: 1px solid $--border-color;
  background-color: rgba(blue, 0.1);
  h2 {
    padding-left: $--container-padding;
  }
  // padding-bottom: 15px;
}
.breadcrumbs /deep/ {
  padding: 0 $--container-padding;
  line-height: 30px;
  // box-shadow: inset 0 1px 0 0 rgba(60, 60, 60, 0.5);
  // margin-bottom: 15px;
  .el-breadcrumb__inner {
    color: $--primary-font-color;
    font-size: 12px;
  }
  .el-breadcrumb__inner a,
  .el-breadcrumb__inner.is-link {
    color: $--minor-font-color;
    cursor: pointer;
    &:hover {
      color: $--primary-color;
    }
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: $--primary-font-color;
    font-size: 20px;
  }
}
</style>
