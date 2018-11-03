<template>
  <nav class="menus">
    <el-menu class="menu-container" :unique-opened="true" mode="horizontal" :default-openeds="defaultOpeneds" :default-active="defaultActive" :router="true" ref="menus">
      <template v-for="menu in menus">
        <el-menu-item :index="menu.index" :route="menu.route" v-show="!menu.hidden" :key="menu.index">
          {{menu.name}}
        </el-menu-item>
      </template>
    </el-menu>
    <div class="contact ml10">
      <i class="iconfont icon-contact mr5"></i>
      <a href="tel://4001515876">4001515876</a>
    </div>
  </nav>
</template>

<script>
import { Vue, Component, Watch } from 'vue-property-decorator'
import { each, merge, cloneDeep } from 'lodash'
import routes from '@/router/routes.js'

@Component
export default class Menu extends Vue {
  @Watch('$route', { immediate: true })
  onRouteUpdate() {
    this.getActive(this.menus)
  }

  data() {
    const mainRoute = routes.find(r => r.name === 'root')
    const menus = []
    // 构造路由数据
    each(mainRoute.children, (c1, i1) => {
      if (c1.meta.menu) {
        const menu = merge(cloneDeep(c1.meta.menu), {
          index: i1 + '',
          hidden: !this.$_dt_permit(c1.meta.permit),
        })

        if (c1.children && !c1.meta.noSubMenus) {
          menu.menus = []
          each(c1.children, (c2, i2) => {
            if (c2.meta.menu) {
              menu.menus.push(
                merge(cloneDeep(c2.meta.menu), {
                  index: `${i1}-${i2}`,
                  route: {
                    name: c2.meta?.menu.routeName || c2.name,
                  },
                  hidden: !this.$_dt_permit(c2.meta.permit),
                }),
              )
            }
          })
        } else {
          menu.route = {
            name: c1.meta?.menu.routeName || c1.name,
          }
        }
        menus.push(menu)
      }
    })

    const data = {
      defaultOpeneds: [],
      defaultActive: '',
      menus,
    }

    return data
  }

  /**
   * 获取活动菜单项
   * @param {Array} menus
   */
  getActive(menus) {
    menus.every(v => {
      // Logger.debug(v.route, v.route.name === this.$route.name)
      if (v.route && (v.route.name === this.$route.name || (v.activeIncludes || []).includes(this.$route.name))) {
        this.defaultActive = v.index
        if (v.index.includes('-')) {
          this.defaultOpeneds = [v.index.split('-')[0]]
        } else {
          this.defaultOpeneds = [v.index]
        }
        return false
      } else if (v.menus) {
        this.getActive(v.menus)
      }
      return true
    })
  }
}
</script>

<style lang="scss" scoped>
.menus /deep/ {
  .menu-container,
  .contact {
    display: inline-block;
    vertical-align: middle;
  }

  .contact {
    color: $--primary-color;
    font-family: 'tempsitc';
    font-size: 24px;
  }

  .el-menu {
    border-right: 0;
  }
  .el-menu--horizontal {
    border: none;
  }
  .el-menu-item {
    color: $--primary-color;
    cursor: pointer;
    padding: 0 18px !important;
    height: $--menu-height;
    line-height: $--menu-height;
    font-size: 16px;
    border-bottom: none;
    &:hover,
    &.is-active {
      &,
      &:focus {
        color: white;
        background: radial-gradient(circle, #2c9458, #146636);
      }
    }
    &:focus {
      background: none;
    }
  }
}
</style>
