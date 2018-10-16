<template>
  <aside>
    <section class="info">
      <img class="info__avatar" src="~assets/images/men.png" alt="" />
    </section>
    <nav>
      <el-menu :unique-opened="true" :default-openeds="defaultOpeneds" :default-active="defaultActive" :router="true" ref="menus">
        <template v-for="menu in menus">
          <el-submenu v-if="menu.menus" :index="menu.index" v-show="!menu.hidden" :key="menu.index">
            <template slot="title"><i class="iconfont icon-color" :class="menu.icon"></i>{{menu.name}}</template>
            <el-menu-item v-for="item in menu.menus" :index="item.index" :route="item.route" :key="item.index" v-show="!item.hidden">{{item.name}}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="menu.index" :route="menu.route" v-show="!menu.hidden" :key="menu.index">
            <i class="iconfont icon-color" :class="menu.icon"></i>{{menu.name}}
          </el-menu-item>
        </template>
      </el-menu>
    </nav>
  </aside>
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
          hidden: !this.$_dt_permit(c1.meta.permit)
        })

        if (c1.children && c1.meta.hasSubMenus) {
          menu.menus = []
          each(c1.children, (c2, i2) => {
            if (c2.meta.menu) {
              menu.menus.push(
                merge(cloneDeep(c2.meta.menu), {
                  index: `${i1}-${i2}`,
                  route: {
                    name: c2.meta?.menu.routeName || c2.name
                  },
                  hidden: !this.$_dt_permit(c2.meta.permit)
                })
              )
            }
          })
        } else {
          menu.route = {
            name: c1.meta?.menu.routeName || c1.name
          }
        }
        menus.push(menu)
      }
    })

    const data = {
      defaultOpeneds: [],
      defaultActive: '',
      menus
    }

    return data
  }

  /**
   * 获取活动菜单项
   * @param {Array} menus
   */
  getActive(menus) {
    menus.every(v => {
      Logger.debug(v.route, v.route.name === this.$route.name)
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
.info {
  padding: 30px 10px 30px 15px;
}
.info__avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
}
</style>
