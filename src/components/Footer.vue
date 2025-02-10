<template>
  <div id="Footer">
    <!-- Displaying the footer message -->
    <p>{{ msg }}</p>
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
    height: 80px;
    margin: 20px auto;
    margin-top: 140px;
  }

  p {
    /* Styling for the text inside the footer */
    color: #36471f;
    text-align: center;
    margin: 30px auto;
    font-size: 1.1em;
  }
</style>
