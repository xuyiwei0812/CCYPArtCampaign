<template>
  <div>
    <!-- 顶部栏 -->
    <div id="top-bar">
      <div class="top-bar-left">
        <img src="@/assets/icon6.png" alt="Campaign Icon" class="campaign-icon" />
        <span class="campaign-title">Art Campaign: Poverty</span>
      </div>
      <div class="top-bar-right">
        <span class="follow-us">Follow Us:</span>
        <div class="social-icons">
          <i class="fab fa-instagram social-icon" @click="openLink('https://instagram.com')"></i>
          <i class="fab fa-twitter social-icon" @click="openLink('https://twitter.com')"></i>
          <i class="fab fa-facebook social-icon" @click="openLink('https://facebook.com')"></i>
        </div>
      </div>
    </div>

    <!-- 现有导航栏 -->
    <div id="Header">
      <nav class="middle">
        <router-link to="/" class="nav-link">Home</router-link>

        <router-link to="/artwork" class="nav-link">Artworks</router-link>

        <!-- About Us Dropdown -->
        <div class="dropdown"
             @mouseenter="!isMobile && (showDropdown = 'about')"
             @mouseleave="!isMobile && (showDropdown = '')"
             @click="toggleDropdown('about')">
  <span class="nav-link dropdown-toggle" :class="{ 'active': showDropdown === 'about' }">
    About Us
  </span>
          <div class="dropdown-menu" v-show="showDropdown === 'about'">
            <router-link to="/about/ccyp" class="dropdown-item">CCYP</router-link>
            <router-link to="/about/us" class="dropdown-item">Our Group</router-link>
          </div>
        </div>


        <router-link to="/get-involved" class="nav-link">Get Involved</router-link>
        <router-link to="/news-events" class="nav-link">News & Events</router-link>
        <router-link to="/contact" class="nav-link">Contact Us</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      openLink(url) {
        window.open(url, "_blank");
      },
      checkMobile() {
        this.isMobile = window.innerWidth <= 768;
      },
      toggleDropdown(menu) {
        if (this.isMobile) {
          this.showDropdown = this.showDropdown === menu ? "" : menu;
        }
      },
    },

    mounted() {
      this.checkMobile();
      window.addEventListener("resize", this.checkMobile);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.checkMobile);
    },

    data() {
      return {
        showDropdown: "",
        isMobile: false,
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
    flex-wrap: wrap;
  }

  /* 左侧：图标 + 文字 */
  .top-bar-left {
    display: flex;
    align-items: center;
  }

  .campaign-icon {
    width: 80px;
    height: 80px;
    margin-right: 30px;
  }

  .campaign-title {
    font-size: 28px;
    font-weight: bold;
    color: #5C3B1E;
  }

  /* 右侧：Follow Us + 图标 */
  .top-bar-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
  }

  .follow-us {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }

  .social-icons {
    display: flex;
    gap: 10px;
    margin-top: 5px;
  }

  .social-icon {
    font-size: 24px;
    cursor: pointer;
    color: #D27F36;
  }

  .social-icon:hover {
    color: #8B4513;
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
    margin: 0 45px;
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
    left: 20px;
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

  /* 响应式适配（小屏幕） */
  @media (max-width: 768px) {
    #top-bar {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .top-bar-left {
      justify-content: center;
      width: 100%;
    }

    .top-bar-right {
      align-items: center;
      width: 100%;
      margin-top: 5px;
    }

    .social-icons {
      justify-content: center;
    }

    #Header {
      flex-direction: column;
      text-align: center;
    }

    .middle {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .nav-link {
      display: block;
      margin: 5px 0;
    }

  }
</style>
