<template>
  <div class="main-page">
  <div class="main-content">
    <div class="hero">
      <img src="@/assets/banner.webp" alt="Art Campaign Banner" class="hero-image">
    </div>

    <div class="campaign-info">
      <div class="partner-header">
        <span class="our-partner">Our Partners</span>
        <img src="@/assets/ccyp.png" alt="Partners1" class="partners-logo">
        <img src="@/assets/mcs.png" alt="Partners2" class="partners-logo">
      </div>
      <div class="text">
        <h2>About the Art Campaign</h2>
        <p>
          Our art campaign is an initiative empowering children and young people
          to highlight differences between poverty and neglect through storytelling art.
          It aims to reduce poverty stigma, raise awareness, and engage young people
          in social justice discussions.
        </p>
        <p>
          Understanding poverty is essential in distinguishing it from neglect.
          Through this campaign, we aim to educate the public on the true nature
          of poverty——what it really looks like, the daily struggles it entails,
          and the systemic barriers that keep families in financial hardship—so
          that children and young people are not unfairly judged or mischaracterized.
        </p>
      </div>
    </div>
  </div>

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
  .main-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    max-width: 1400px;
    margin: 0 auto;
  }

  /* left: big pic */
  .hero {
    flex: 1;
  }

  .hero-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  /* right：CCYP Logo + intro */
  .campaign-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 40px;
  }

  .our-partner {
    color: #5C3B1E;
    font-size: 18px;
  }

  .partner-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
    margin-top: -10px;
  }

  .partners-logo {
    width: 260px;
    height: auto;
  }

  .text h2 {
    font-size: 28px;
    color: #5C3B1E;
  }

  .text p {
    font-size: 18px;
    line-height: 1.6;
    color: #333;
  }

  .focus-section {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }

  .focus-title {
    font-size: 28px;
    color: #5C3B1E;
    margin-bottom: 20px;
  }

  .focus-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }

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

  .focus-green {
    background-color: #d4edda;
  }

  .focus-yellow {
    background-color: #fff3cd;
  }

  .focus-blue {
    background-color: #e2d5f8;
  }

  .focus-red {
    background-color: #f8d7da;
  }

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
      margin-top: 30px;
    }

    .text p{
      text-align: justify;
    }

    .partner-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .partners-logo {
      width: 300px;
      margin-bottom: 10px;
    }

    .focus-container {
      flex-direction: column;
      align-items: center;
      max-width: 100%;
    }

    .focus-box {
      max-width: 100%;
      width: 80%;
    }
  }
</style>
