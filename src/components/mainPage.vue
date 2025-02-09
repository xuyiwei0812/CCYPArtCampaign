<template>
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
    margin-top: -180px; /* 主动上移整个部分 */
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
      margin-top: 20px;
    }
  }
</style>
