<template>
  <div class="index">
    <!-- banner -->
    <div class="banner">
      <div class="banner__inner">
        <!-- <img class="banner__content" src="@/assets/images/home-banner.png" alt="home banner" /> -->
        <img class="banner__content__flowerpot" src="@/assets/images/home-banner-flowerpot.png" alt="home banner" />
        <div class="banner__content">
          <h5>欧罗兰艺术漆</h5>
          <div class="slogan">
            <h2>遇见欧罗兰</h2>
            <p>绿色/环保/健康/艺术/时尚</p>
            <a href="tel://4001515876">4001515876</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 产品中心 -->
    <section class="index-content">
      <div class="index-content__inner">
        <h3>
          <div class="h3__content">
            <span>PRODUCTS</span>
            <small>产品中心</small>
          </div>
        </h3>
        <div class="section___content">
          <el-row :gutter="30">
            <el-col :span="6">
              <div class="grid-content">
                <figure class="grid-card">
                  <img src="~assets/images/product1.jpg" alt="" />
                  <figcaption>
                    产品名称产品名称
                  </figcaption>
                </figure>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <figure class="grid-card">
                  <img src="~assets/images/product2.jpg" alt="" />
                  <figcaption>
                    产品名称产品名称
                  </figcaption>
                </figure>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <figure class="grid-card">
                  <img src="~assets/images/product3.jpg" alt="" />
                  <figcaption>
                    产品名称产品名称
                  </figcaption>
                </figure>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <figure class="grid-card">
                  <img src="~assets/images/product4.jpg" alt="" />
                  <figcaption>
                    产品名称产品名称
                  </figcaption>
                </figure>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>
    <!-- 关于我们 -->
    <section class="index-content">
      <div class="index-content__inner">
        <h3>
          <div class="h3__content">
            <span>ABOUT US</span>
            <small>关于我们</small>
          </div>
        </h3>
        <div class="section___content">
          <el-row :gutter="40">
            <el-col :span="15">
              <div class="grid-content">
                <div class="section__title mb10">
                  <el-row :gutter="30">
                    <el-col :span="10">
                      <img src="~assets/images/aboutus-section-title.png" alt="abouts section title" />
                    </el-col>
                    <el-col :span="14">
                      <h4>欧罗兰</h4>
                      <el-tag class="active">专业</el-tag>
                      <el-tag class="active">环保</el-tag>
                      <el-tag class="active">绿色</el-tag>
                    </el-col>
                  </el-row>
                </div>
                <div class="section_detail">
                  欧罗兰艺术漆公司简介内容介绍欧罗兰艺术漆公司简介内容介绍欧罗兰艺术漆公司简介内容介
                  绍欧罗兰艺术漆公司简介内容介绍欧罗兰艺术漆公司简介内容介绍欧罗兰艺术漆公司简介内容
                  绍欧罗兰艺术漆公司简介内容介绍欧罗兰艺术漆公司简介内容介绍欧罗兰艺术漆公司简介内容
                  绍欧罗兰艺术漆公司简介内容介绍欧罗兰艺术漆公司简介......
                </div>
              </div>
            </el-col>
            <el-col :span="9">
              <div class="grid-content">
                <img class="fill-container" src="~assets/images/aboutus-section.jpg" alt="abouts section" />
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>
    <!-- 新闻中心 -->
    <section class="index-content">
      <div class="index-content__inner">
        <h3>
          <div class="h3__content">
            <span>NEWS</span>
            <small>新闻中心</small>
          </div>
        </h3>
        <div class="section___content news-section__content">
          <el-row :gutter="30">
            <el-col :span="8">
              <div class="grid-content">
                <div class="grid-card-content">
                  <img src="~assets/images/news1.jpg" alt="news1" />
                  <div class="grid-card-content__detail">
                    <h4>
                      <span>新闻标题</span>
                      <small>发布时间：2018-09-10</small>
                    </h4>
                    <p>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容......</p>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content">
                <div class="grid-card-content">
                  <img src="~assets/images/news2.jpg" alt="news2" />
                  <div class="grid-card-content__detail">
                    <h4>
                      <span>新闻标题</span>
                      <small>发布时间：2018-09-10</small>
                    </h4>
                    <p>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容......</p>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content">
                <div class="grid-card-content">
                  <img src="~assets/images/news3.jpg" alt="news3" />
                  <div class="grid-card-content__detail">
                    <h4>
                      <span>新闻标题</span>
                      <small>发布时间：2018-09-10</small>
                    </h4>
                    <p>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容......</p>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="30" class="mt30">
            <el-col :span="8">
              <div class="grid-content">
                <div class="grid-card-content">
                  <img src="~assets/images/news4.jpg" alt="news4" />
                  <div class="grid-card-content__detail">
                    <h4>
                      <span>新闻标题</span>
                      <small>发布时间：2018-09-10</small>
                    </h4>
                    <p>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容......</p>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content">
                <div class="grid-card-content">
                  <img src="~assets/images/news5.jpg" alt="news5" />
                  <div class="grid-card-content__detail">
                    <h4>
                      <span>新闻标题</span>
                      <small>发布时间：2018-09-10</small>
                    </h4>
                    <p>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容......</p>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content">
                <div class="grid-card-content">
                  <img src="~assets/images/news6.jpg" alt="news6" />
                  <div class="grid-card-content__detail">
                    <h4>
                      <span>新闻标题</span>
                      <small>发布时间：2018-09-10</small>
                    </h4>
                    <p>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容......</p>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>
    <!-- 案例展示 -->
    <section class="index-content">
      <div class="index-content__inner">
        <h3>
          <div class="h3__content">
            <span>CASE</span>
            <small>成功案例</small>
          </div>
        </h3>
        <div class="content-tabs">
          <el-tag @click.native="caseTabClick('work')" class="mr20" :class="{active: caseActiveTab === 'work'}">工装</el-tag>
          <el-tag @click.native="caseTabClick('home')" :class="{active: caseActiveTab === 'home'}">家装</el-tag>
        </div>
        <div class="section___content">
          <el-row :gutter="30" v-if="caseActiveTab === 'work'">
            <el-col :span="6">
              <div class="grid-content">
                <figure class="grid-card grid-card-simple">
                  <img src="~assets/images/product1.jpg" alt="" />
                  <figcaption>
                    产品名称产品名称
                  </figcaption>
                </figure>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <figure class="grid-card grid-card-simple">
                  <img src="~assets/images/product2.jpg" alt="" />
                  <figcaption>
                    产品名称产品名称
                  </figcaption>
                </figure>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <figure class="grid-card grid-card-simple">
                  <img src="~assets/images/product3.jpg" alt="" />
                  <figcaption>
                    产品名称产品名称
                  </figcaption>
                </figure>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <figure class="grid-card grid-card-simple">
                  <img src="~assets/images/product4.jpg" alt="" />
                  <figcaption>
                    产品名称产品名称
                  </figcaption>
                </figure>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="30" v-else>
            <el-col :span="6">
              <div class="grid-content">
                <figure class="grid-card grid-card-simple">
                  <img src="~assets/images/case1.jpg" alt="" />
                  <figcaption>
                    产品名称产品名称
                  </figcaption>
                </figure>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <figure class="grid-card grid-card-simple">
                  <img src="~assets/images/case2.jpg" alt="" />
                  <figcaption>
                    产品名称产品名称
                  </figcaption>
                </figure>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <figure class="grid-card grid-card-simple">
                  <img src="~assets/images/case3.jpg" alt="" />
                  <figcaption>
                    产品名称产品名称
                  </figcaption>
                </figure>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <figure class="grid-card grid-card-simple">
                  <img src="~assets/images/case4.jpg" alt="" />
                  <figcaption>
                    产品名称产品名称
                  </figcaption>
                </figure>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import { State } from 'vuex-class'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
  caseActiveTab = 'work'
  caseTabClick(tab) {
    this.caseActiveTab = tab
  }
}
</script>

<style lang="scss" scoped>
.index /deep/ {
  .el-tag {
    font-size: 16px;
    text-align: center;
    min-width: 90px;
    height: 30px;
    line-height: 30px;
    margin-right: 10px;
    color: white;
    border: 0;
    background: #bfbebe;
    color: black;

    &:hover,
    &.active {
      background: $--primary-color;
      color: white;
    }
  }
}

.banner {
  background: url(~assets/images/home-banner-bg.jpg) no-repeat;
  background-size: 100% 100%;
  background-position: ce7ter;
  height: 653px;

  @media screen and (min-width: 1921px) {
    background-size: cover;
  }
}

.index-content {
  background: white;

  &:nth-of-type(2n-1) {
    background: #f5f4f9;

    .index-content__inner {
      .h3__content {
        background: #f5f4f9;
      }
    }
  }
}

.index-content__inner {
  padding: 80px 0;
  width: $--container-width;
  margin: 0 auto;

  .h3__content {
    background: white;
    display: inline-block;
    z-index: 1;
    position: relative;
    padding: 0 20px;
  }

  h3 {
    font-family: 'kalinga';
    font-size: 36px;
    color: $--primary-color;
    text-align: center;
    margin-bottom: 60px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      height: 1px;
      z-index: 0;
      background: $--border-color;
    }

    small {
      display: block;
      font-size: 18px;
      color: $--primary-font-color;
    }
  }
}

.news-section___content {
  padding: 0 40px;
}

.section_detail {
  color: $--minor-font-color;
  line-height: 2;
  font-size: 14px;
}

.fill-container {
  width: 100%;
}

.section__title /deep/ {
  h4 {
    color: $--primary-color;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
  }
}

.grid-card {
  border: 1px solid $--border-color;
  padding: 8px;
  color: $--primary-color;
  background: white;
  text-align: center;

  &.grid-card-simple {
    border: 0;
    padding: 0;
    background: $--primary-color;
    color: white;

    &:hover {
      border: 0;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  figcaption {
    padding: 8px 0;
  }

  &:active,
  &:hover {
    border: 1px solid $--primary-color;
    color: white;
    background: $--primary-color;
  }
}

.grid-card-content {
  padding: 25px 12px;
  background: white;
  overflow: hidden;

  img {
    float: left;
    width: 80px;
    height: 90px;
  }

  h4 {
    color: $--primary-color;
  }

  p {
    color: $--minor-font-color;
    font-size: 12px;
  }

  &:hover,
  &.active {
    background: $--primary-color;
    color: white;

    h4,
    p,
    small {
      color: white;
    }
  }
}

.grid-card-content__detail {
  padding-left: 10px;
  overflow: hidden;
  line-height: 1.4em;

  h4 {
    line-height: 1.5em;
    border-bottom: 1px solid $--border-color;

    // padding: 5px 0;
    small {
      display: block;
      font-size: 12px;
    }
  }
}

.content-tabs /deep/ {
  text-align: center;
  padding-bottom: 50px;

  .el-tag {
    cursor: pointer;
  }
}

.banner__inner {
  width: $--container-width;
  margin: 0 auto;
  position: relative;
  height: 100%;
  color: white;
  h5 {
    font-size: 19px;
    color: #e4e4e4;
    letter-spacing: 0.8em;
    padding-bottom: 35px;
    margin-left: 1em;
    position: relative;
    &:after,
    &:before {
      border-bottom: dashed 1px $--border-color;
      content: '';
      position: absolute;
      width: 500px;
      left: 0;
      bottom: 0;
    }
    &:after {
      left: 1px;
      bottom: 1px;
    }
  }
  h2 {
    font-size: 118px;
  }
  .slogan {
    margin-top: 35px;
    p {
      padding-left: 116px;
      font-size: 15px;
      margin: 15px 0;
      letter-spacing: 0.8em;
    }
    a {
      padding-left: 116px;
      font-size: 48px;
      font-family: 'tempsitc';
      font-weight: bold;
    }
  }
}
.banner__content__flowerpot{
  position: absolute;
  right: 0;
  bottom: 0;
}
.banner__content {
  position: absolute;
  right: 0;
  top: 120px;
  left: 230px;
  // bottom: 30px;
}
</style>
