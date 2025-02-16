<template>
    <div class="news-page">
        <div class="news-list">
            <div class="news-item" v-for="news in newsList" :key="news.id">
                <img :src="getImageUrl(news.image)" alt="news image" class="news-image" v-if="news.image"/>
                <div class="news-content">
                    <router-link :to="{ path: '/newsDetails', query: { id: news.id } }" class="news-title">
                        {{ news.title }}
                    </router-link>
                    <p class="news-date">{{ news.date }}</p>
                    <p class="news-summary">{{ news.summary }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { newsList: [] };
        },
        async created() {
            try {
                const baseURL = window.location.origin.includes("github.io")
                    ? "https://xuyiwei0812.github.io/CCYPArtCampaign"
                    : window.location.origin;

                const jsonPath = `${baseURL}/data/news.json`;
                console.log("Fetching news from:", jsonPath);

                const response = await fetch(jsonPath);
                if (!response.ok) throw new Error("Failed to load news JSON");

                this.newsList = await response.json();
                console.log("News loaded:", this.newsList);
            } catch (error) {
                console.error("Error loading news:", error);
            }
        },
        methods: {
            getImageUrl(imagePath) {
                const baseURL = window.location.origin.includes("github.io")
                    ? "https://xuyiwei0812.github.io/CCYPArtCampaign"
                    : "";
                return `${baseURL}${imagePath}`;
            }
        }
    };
</script>

<style scoped>
    .news-page {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    .page-title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #5C3B1E;
        text-align: center;
    }

    .news-list {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .news-item {
        display: flex;
        border: 1px solid #e0e0e0;
        border-radius: 12px;
        overflow: hidden;
        background-color: #f9f9f9;
        transition: transform 0.3s;
    }

    .news-item:hover {
        transform: translateY(-5px);
    }

    .news-image {
        width: 250px;
        height: 180px;
        object-fit: cover;
        border-radius: 12px 0 0 12px;
    }

    .news-content {
        padding: 20px;
        flex: 1;
    }

    .news-title {
        font-size: 22px;
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
        transition: color 0.3s;
    }

    .news-title:hover {
        color: #3498db;
    }

    .news-date {
        font-size: 14px;
        color: #7f8c8d;
        margin-bottom: 8px;
    }

    .news-summary {
        font-size: 16px;
        color: #444;
        line-height: 1.5;
    }

    @media (max-width: 768px) {
        .news-item {
            flex-direction: column;
        }

        .news-image {
            width: 100%;
            height: 200px;
            border-radius: 12px 12px 0 0;
        }
    }
</style>
