<template>
  <div class="main-page">
  <div class="main-content">
    <div class="hero">
      <img src="@/assets/banner.webp" alt="Art Campaign Banner" class="hero-image">
    </div>

    <div class="campaign-info">
      <div class="partner-header">
        <span class="our-partner">Our Partner:</span>
        <img src="@/assets/ccyp.png" alt="Partners" class="partners-logo">
      </div>
      <div class="text">
        <h2>About the Art Campaign</h2>
        <p>
          The Art Campaign: Poverty is an initiative empowering children and young people
          to highlight differences between poverty and neglect through storytelling art.
          It aims to reduce poverty stigma, raise awareness, and engage young people
          in social justice discussions.
        </p>
        <p>
          Understanding poverty is essential in distinguishing it from neglect.
          Through this campaign, we aim to educate the public on the true nature of poverty—its causes,
          challenges, and impacts—so that children and young people facing financial hardship are not
          unfairly judged or mischaracterized.
        </p>
      </div>
    </div>
  </div>

    <!-- 重点展示区域 -->
    <div class="focus-section">
      <h2 class="focus-title">Key Focus Areas</h2>
      <div class="focus-container">
        <div class="focus-box focus-green">
          <h3>Empowerment</h3>
          <p>Giving children and young people a voice through artistic expression.</p>
        </div>
        <div class="focus-box focus-yellow">
          <h3>Awareness</h3>
          <p>Educating the public on the realities of poverty and reducing stigma.</p>
        </div>
        <div class="focus-box focus-blue">
          <h3>Inclusivity</h3>
          <p>Ensuring participation from diverse backgrounds, including rural and metro areas.</p>
        </div>
        <div class="focus-box focus-red">
          <h3>Community Engagement</h3>
          <p>Encouraging collaboration between young people, artists, and advocacy groups.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mainPage",
    created() {
      // Emit events to ensure the header and footer are displayed on the main page
      this.$emit('header', true);
      this.$emit('footer', true);
    },
  };
</script>

<style scoped>
  /* 主内容区：左右两栏 */
  .main-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    max-width: 1400px;
    margin: 0 auto;
  }

  /* 左侧：大图片 */
  .hero {
    flex: 1;
  }

  .hero-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  /* 右侧：CCYP Logo + 介绍 */
  .campaign-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 40px;
  }

  .our-partner {
    color: #5C3B1E;
    font-size: 24px;
  }

  /* 让 Our Partner + CCYP Logo 在一行 */
  .partner-header {
    display: flex;
    align-items: center;
    gap: 10px; /* 调整文字和 Logo 之间的间距 */
    margin-bottom: 5px; /* 确保与下面的内容有间距 */
    margin-top: -10px; /* 主动上移整个部分 */
  }

  /* CCYP Logo 调整 */
  .partners-logo {
    width: 350px; /* 控制 Logo 大小 */
    height: auto;
  }

  /* 介绍文本 */
  .text h2 {
    font-size: 28px;
    color: #5C3B1E;
  }

  .text p {
    font-size: 18px;
    line-height: 1.6;
    color: #333;
  }

  /* 重点展示区域 */
  .focus-section {
    width: 100%;
    text-align: center;
    margin-top: 50px;
  }

  .focus-title {
    font-size: 28px;
    color: #5C3B1E;
    margin-bottom: 20px;
  }

  /* 横向色块容器 */
  .focus-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }

  /* 重点色块 */
  .focus-box {
    flex: 1;
    min-width: 220px;
    max-width: 297px;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    color: gray;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .focus-box h3 {
    font-size: 22px;
    margin-bottom: 8px;
  }

  /* 不同颜色的重点区域 */
  .focus-green {
    background-color: #d4edda; /* 绿色 */
  }

  .focus-yellow {
    background-color: #fff3cd; /* 黄色 */
  }

  .focus-blue {
    background-color: #e2d5f8; /* 蓝色 */
  }

  .focus-red {
    background-color: #f8d7da; /* 红色 */
  }

  /* 响应式适配（小屏幕改成上下布局） */
  @media (max-width: 768px) {
    .main-content {
      flex-direction: column;
      align-items: center;
    }

    .hero,
    .campaign-info {
      width: 100%;
      text-align: center;
    }

    .campaign-info {
      padding-left: 0;
      margin-top: 110px;
    }

    .focus-container {
      flex-direction: column;
      align-items: center;
    }

    .focus-box {
      max-width: 100%;
      width: 80%;
    }
  }
</style>
