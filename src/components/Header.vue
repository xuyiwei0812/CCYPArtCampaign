<!--
This is the header component for the DPIRD AgriVision frontend.
It provides user options like navigating to the "Upload" and "TimeCapsule" pages, and it includes a dropdown for user-specific actions such as changing the password or exiting the platform.
The header displays a welcome message and offers navigation functionality using Vue Router.
Element-UI components are used for dropdowns, icons, and styling.
-->

<template>
  <div id="Header">
    <!-- Top-left section with user information and dropdown menu -->

    <!-- Middle section with navigation links -->
    <nav class="middle">
      <router-link to="/artworkPage" class="nav-link">Artworks</router-link>
      <router-link to="/aboutPage" class="nav-link">About Us</router-link>
    </nav>

    <!-- Right section with the project name and home button -->
    <div id="word">
      <h1>{{ msg }}</h1>
      <i class="el-icon-s-home home-icon" v-on:click="goMainPage"></i> <!-- Home icon to navigate to the main page -->
    </div>
  </div>
</template>

<script>

  export default {
    name: "Header",
    data() {
      return {
        msg: "Art Campaign: Poverty",  // The header message
        activeIndex: "2",  // Default active menu index
      };
    },
    methods: {
      // Navigate to the main page
      goMainPage() {
        this.$router.push('/mainPage');
      },
    },
  };
</script>

<style scoped>
  /* Main header styling */
  #Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px;
    width: 90%;
    margin: 10px auto;
    background-color: #36471f;
    color: white;
  }

  /* Right section with project name and home button */
  #word {
    display: flex;
    align-items: center;
    margin: 0;
  }

  h1 {
    color: white;
    letter-spacing: 1px;
    font-size: 1.8em;
    margin-right: 10px;
  }

  /* Navigation links styling */
  .nav-link {
    margin: 0 15px;
    text-decoration: none;
    font-size: 20px;
    color: white;
  }

  .nav-link:hover {
    color: #d9f0ea;  /* Change color on hover */
  }

  /* Home icon styling */
  .home-icon {
    font-size: 30px;
    cursor: pointer;
    color: white;
  }

  .home-icon:hover {
    color: #d9f0ea;  /* Change color on hover */
  }

  /* Custom styles for dropdown menu */
  .custom-dropdown-menu {
    margin-left: 50px;
  }

  .custom-dropdown-item {
    color: black;
    font-family: "Helvetica Neue";
  }
</style>
