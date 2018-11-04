<template>
  <footer class="footer">
    <div class="links">
      <router-link :to="{name: 'index'}">首页</router-link>
      <router-link :to="{name: 'aboutUs'}">关于我们</router-link>
      <router-link :to="{name: 'product'}">产品展示</router-link>
      <router-link :to="{name: 'case'}">成功案列</router-link>
      <router-link :to="{name: 'investment'}">招商加盟</router-link>
      <router-link :to="{name: 'news'}">新闻中心</router-link>
      <router-link :to="{name: 'contactUs'}">联系我们</router-link>
    </div>
    <div class="note">
      <span>欧罗兰艺术漆</span>
      <span>地址：吉林省长春市农安县</span>
      <span>电话：<a href="tel://0431-8888888">0431-8888888</a></span>
      <span>吉ICP备18005482号-1</span>
    </div>
  </footer>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
.footer /deep/ {
  padding: 40px 0 20px;
  background: $--primary-color;
  color: white;
  font-size: 12px;
  text-align: center;

  .links /deep/ {
    a {
      padding: 0 10px;
      position: relative;

      &:hover {
        text-decoration: underline;
      }

      &:after {
        content: '|';
        position: absolute;
        right: 0;
        top: 0px;
        transform: scale(0.8);
      }

      &:last-of-type {
        &:after {
          display: none;
        }
      }
    }
  }

  .note {
    margin-top: 15px;

    span {
      padding: 0 15px;
    }
  }

}
</style>
