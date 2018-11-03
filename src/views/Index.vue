<template>
  <section class="index">
    <div class="banner">
      <div class="banner__inner">
        <img class="banner__content" src="@/assets/images/home-banner.png" alt="home banner" />
      </div>
    </div>
  </section>
</template>

<script>
// import { State } from 'vuex-class'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {

}
</script>

<style lang="scss" scoped>
.banner {
  background: url(~assets/images/home-banner-bg.jpg) no-repeat;
  background-size: 100% 100%;
  background-position: center;
  height: 653px;
  @media screen and (min-width: 1921px) {
    background-size: cover;
  }
}
.banner__inner {
  width: $--container-width;
  margin:0 auto;
  position: relative;
  height: 100%;
}
.banner__content {
  position: absolute;
  right: 0;
  bottom: 30px;
}
</style>
