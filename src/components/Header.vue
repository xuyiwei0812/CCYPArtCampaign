<template>
  <div>
    <!-- Top Bar -->
    <div id="top-bar">
      <div class="top-bar-left">
        <img src="@/assets/icon6.png" alt="Campaign Icon" class="campaign-icon" />
        <span class="campaign-title">Art Campaign: Poverty</span>
        <div class="hamburger-menu" @click="toggleMenu">
          <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="menu-icon"></i>
        </div>
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

    <!-- Header -->
    <div id="Header" :class="{ 'menu-open': isMenuOpen }">
    <nav class="middle">
        <router-link to="/" class="nav-link" @click.native="emitCloseMenu">Home</router-link>
        <router-link to="/artwork" class="nav-link" @click.native="emitCloseMenu">Artworks</router-link>
        <router-link to="/aboutCcyp" class="nav-link" @click.native="emitCloseMenu">About CCYP</router-link>
        <router-link to="/getInvolved" class="nav-link" @click.native="emitCloseMenu">Get Involved</router-link>
        <router-link to="/newsPage" class="nav-link" @click.native="emitCloseMenu">News & Events</router-link>
        <router-link to="/aboutUs" class="nav-link" @click.native="emitCloseMenu">About Us</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
  import { EventBus } from "@/eventBus";

  export default {
    name: "Header",
    methods: {
      openLink(url) {
        window.open(url, "_blank");
      },
      checkMobile() {
        this.isMobile = window.innerWidth <= 768;
      },
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        EventBus.$emit("toggleMenu", this.isMenuOpen);
      },
      closeMenu() {
        this.isMenuOpen = false;
      },
      emitCloseMenu() {
        EventBus.$emit("closeMenu");
      },
      setMenuState(state) {
        this.isMenuOpen = state;
      },
    },
    mounted() {
      this.checkMobile();
      window.addEventListener("resize", this.checkMobile);
      EventBus.$on("toggleMenu", this.setMenuState);
      EventBus.$on("closeMenu", this.closeMenu);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.checkMobile);
      EventBus.$on("toggleMenu", this.setMenuState);
      EventBus.$on("closeMenu", this.closeMenu);
    },
    data() {
      return {
        showDropdown: "",
        isMobile: false,
        isMenuOpen: false,
      };
    },
  };
</script>

<style scoped>
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

  .hamburger-menu {
    display: none;
    font-size: 28px;
    cursor: pointer;
    color: #5C3B1E;
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

  /* 响应式适配（小屏幕） */
  @media (max-width: 768px) {

    #top-bar {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1px 1px;
    }

    .top-bar-left {
      justify-content: center;
      width: 100%;
    }

    .top-bar-right {
      display: none;
    }

    .hamburger-menu {
      display: block;
      position: absolute;
      right: 20px;
      top: 25px;
    }

    .campaign-icon {
      width: 70px;
      height: 70px;
      margin-bottom: 5px;
    }

    .campaign-title {
      font-size: 22px;
      margin-right: 20%;
    }

    /* 让菜单变成竖向伸缩 */
    #Header {
      width: 100%;
      flex-direction: column;
      text-align: center;
      padding: 0;
      background-color: whitesmoke;
      position: absolute;
      top: 80px;
      left: 0;
      right: 0;
      transition: max-height 0.3s ease-in-out;
      max-height: 0;
      overflow: hidden;
    }

    #Header.menu-open {
      max-height: 300px;
    }

    .middle {
      flex-direction: column;
      text-align: center;
      width: 100%;
    }

    .nav-link {
      display: block;
      font-size: 14px;
      padding: 6px;
    }

    .nav-link:hover,
    .nav-link.active {
      background-color: lightgray;
      color: #8B4513;
    }
  }

</style>
