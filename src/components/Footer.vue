<template>
  <div id="Footer">
    <!-- Displaying the footer message -->
    <p>{{ msg }}</p>
    <div class="footer-follow-us">
      <span class="follow-us">Follow Us:</span>
      <div class="social-icons">
        <i class="fab fa-instagram social-icon" @click="openLink('https://instagram.com')"></i>
        <i class="fab fa-twitter social-icon" @click="openLink('https://twitter.com')"></i>
        <i class="fab fa-facebook social-icon" @click="openLink('https://facebook.com')"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        msg: "2025 Team 'CLASS PLANK'",  // The footer message to display
      };
    },
  };
</script>

<style scoped>
  #Footer {
    /* Footer styling */
    padding: 6px;
    border-radius: 5px;
    width: 80%;
    height: 50px;
    margin: 20px auto;
    margin-top: 40px;
  }

  p {
    /* Styling for the text inside the footer */
    color: #36471f;
    text-align: center;
    margin: 30px auto;
    font-size: 1.1em;
  }

  .footer-follow-us {
    display: flex;
    flex-direction: column;
    text-align: center;
    display: none;
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
    align-content: center;
    justify-content: center;
  }

  .social-icon {
    font-size: 24px;
    cursor: pointer;
    color: #D27F36;
  }

  .social-icon:hover {
    color: #8B4513;
  }

  @media (max-width: 768px) {
    .footer-follow-us {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
  }
</style>
