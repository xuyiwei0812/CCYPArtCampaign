<template>
    <div class="about-container">
        <h1 class="title">About Us</h1>
        <p class="subtitle">
            We are a multidisciplinary team working together on this project.
            Our diverse backgrounds allow us to approach the issue from multiple perspectives.
        </p>

        <div class="team-grid">
            <div class="team-card" v-for="member in teamMembers" :key="member.name">
                <div class="name">{{ member.name }}</div>
                <div class="field">{{ member.field }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "aboutUs",
        data() {
            return {
                teamMembers: [
                    { name: "Amanda Chitty", field: "Public Health" },
                    { name: "Maanvik Arora", field: "Psychology & Finance" },
                    { name: "Kaitlyn Holden", field: "Law + Society & Political Science" },
                    { name: "Luna Xu", field: "Software Engineering" },
                    { name: "Sadee Wijewardena", field: "Public Policy" },
                ],
            };
        },
    };
</script>

<style scoped>
    /* 页面整体样式 */
    .about-container {
        max-width: 1300px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
        font-family: Arial, sans-serif;
    }

    /* 标题 */
    .title {
        font-size: 32px;
        color: #5C3B1E;
        font-weight: bold;
        margin-bottom: 10px;
    }

    /* 副标题 */
    .subtitle {
        font-size: 18px;
        color: #555;
        margin-bottom: 30px;
    }

    /* 团队成员卡片布局 */
    .team-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }

    @media (min-width: 768px) {
        .team-grid {
            grid-template-columns: 1fr 1fr;
        }
    }

    /* 每个成员的卡片 */
    .team-card {
        background: #f9f3e6;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: transform 0.3s ease;
    }

    .team-card:hover {
        transform: translateY(-5px);
    }

    /* 姓名样式 */
    .name {
        font-size: 22px;
        font-weight: bold;
        color: #5C3B1E;
        margin-bottom: 8px;
    }

    /* 研究领域样式 */
    .field {
        font-size: 16px;
        color: #333;
    }
</style>
