<template>
  <div>
    <!-- 顶部栏 -->
    <div id="top-bar">
      <div class="left">
        <img src="@/assets/icon6.png" alt="Campaign Icon" class="campaign-icon" />
        <span class="campaign-title">Art Campaign: Poverty</span>
      </div>
      <div class="social-icons">
        <span>Follow Us:</span>
        <i class="fab fa-instagram social-icon" @click="openLink('https://instagram.com')"></i>
        <i class="fab fa-twitter social-icon" @click="openLink('https://twitter.com')"></i>
        <i class="fab fa-facebook social-icon" @click="openLink('https://facebook.com')"></i>
      </div>
    </div>

    <!-- 现有导航栏 -->
    <div id="Header">
      <nav class="middle">
        <router-link to="/" class="nav-link">Home</router-link>

        <!-- Artworks Dropdown -->
        <div class="dropdown" @mouseenter="showDropdown = 'artworks'" @mouseleave="showDropdown = ''">
          <span class="nav-link dropdown-toggle" :class="{ 'active': showDropdown === 'artworks' }">Artworks</span>
          <div class="dropdown-menu" v-show="showDropdown === 'artworks'">
            <router-link to="/artwork/adult" class="dropdown-item">Adult Group</router-link>
            <router-link to="/artwork/teenage" class="dropdown-item">Teenage Group</router-link>
            <router-link to="/artwork/children" class="dropdown-item">Children Group</router-link>
          </div>
        </div>

        <!-- About Us Dropdown -->
        <div class="dropdown" @mouseenter="showDropdown = 'about'" @mouseleave="showDropdown = ''">
          <span class="nav-link dropdown-toggle" :class="{ 'active': showDropdown === 'about' }">About Us</span>
          <div class="dropdown-menu" v-show="showDropdown === 'about'">
            <router-link to="/about/ccyp" class="dropdown-item">CCYP</router-link>
            <router-link to="/about/ourgroup" class="dropdown-item">Our Group</router-link>
          </div>
        </div>

        <router-link to="/get-involved" class="nav-link">Get Involved</router-link>
        <router-link to="/news-events" class="nav-link">News & Events</router-link>
        <router-link to="/contact" class="nav-link">Contact Us</router-link>
      </nav>
    </div>

    <!-- 主内容区：图片左，CCYP + 介绍右 -->
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
  </div>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      openLink(url) {
        window.open(url, "_blank");
      }
    },
    data() {
      return {
        showDropdown: "",
      };
    },
  };
</script>

<style scoped>
  /* 顶部栏 */
  #top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 8px 40px;
    width: 94%;
    margin-bottom: -10px;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .campaign-icon {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }

  .campaign-title {
    font-size: 28px;
    font-weight: bold;
    color: #5C3B1E;
  }

  .right {
    display: flex;
    gap: 15px;
  }

  .social-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  /* Header */
  #Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    width: 90%;
    margin: 10px auto;
    background-color: #FDF3D6;
    color: #D27F36;
  }

  /* Navigation links */
  .nav-link {
    margin: 0 15px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: #D27F36;
    padding: 12px 15px;
    display: inline-block;
    position: relative;
  }

  /* Hover 状态 */
  .nav-link:hover,
  .nav-link.active {
    background-color: #E6CFA3;
    color: #8B4513;
  }

  /* Dropdown */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown menu */
  .dropdown-menu {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #FDF3D6;
    min-width: 170px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 0px 0;
    z-index: 1000;
  }

  /* 下拉菜单项 */
  .dropdown-item {
    display: block;
    padding: 12px 20px;
    color: #5C3B1E;
    text-decoration: none;
    font-weight: bold;
    border-bottom: 2px solid #E6CFA3;
    text-align: left;
  }

  .dropdown-item:last-child {
    border-bottom: none;
  }

  .dropdown-item:hover {
    background-color: #E6CFA3;
    color: #8B4513;
  }

  .social-icons {
    display: flex;
    gap: 15px;
  }

  .social-icon {
    font-size: 24px;
    cursor: pointer;
    color: #D27F36;
  }

  .social-icon:hover {
    color: #8B4513;
  }

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
    }
  }

</style>
