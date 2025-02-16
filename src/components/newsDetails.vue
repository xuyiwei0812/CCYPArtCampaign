<template>
    <div class="news-details">
        <router-link to="/newsPage" class="back-link">← Back</router-link>

        <h1 class="news-title">{{ news.title }}</h1>
        <p class="news-date">Published on: {{ news.date }}</p>
        <img :src="getImageUrl(news.image)" alt="News Image" class="news-image" v-if="news.image" />
        <p class="news-content">{{ news.details }}</p>
    </div>
</template>

<script>
    export default {
        name: "NewsDetails",
        data() {
            return {
                news: {}
            };
        },
        async created() {
            try {
                const baseURL = window.location.origin.includes("github.io")
                    ? "https://xuyiwei0812.github.io/CCYPArtCampaign"
                    : window.location.origin;

                const jsonPath = `${baseURL}/data/news.json`;
                const response = await fetch(jsonPath);
                if (!response.ok) throw new Error("Failed to load news JSON");

                const allNews = await response.json();
                const newsId = this.$route.query.id;
                const currentNews = allNews.find(news => String(news.id) === String(newsId));

                if (currentNews) {
                    this.news = currentNews;
                } else {
                    console.error("News not found");
                }
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
    .news-details {
        max-width: 1300px;
        margin: 50px auto;
        padding: 20px;
        background-color: #fdfdfd;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
        position: relative;
    }

    .back-link {
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 16px;
        color: #3498db;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s;
    }

    .back-link:hover {
        color: #2980b9;
        text-decoration: underline;
    }

    .news-title {
        font-size: 32px;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 10px;
        text-align: center;
    }

    .news-date {
        font-size: 14px;
        color: #7f8c8d;
        margin-bottom: 20px;
        text-align: center;
    }

    .news-image {
        width: 50%;
        height: auto;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    .news-content {
        font-size: 18px;
        color: #444;
        line-height: 1.8;
        text-align: justify;
    }

    @media (max-width: 768px) {
        .news-details {
            padding: 15px;
        }

        .news-title {
            font-size: 26px;
        }

        .news-content {
            font-size: 16px;
        }

        .back-link {
            font-size: 14px;
            top: 10px;
            left: 10px;
        }

        .news-image {
            width: 90%;
            height: auto;
        }
    }
</style>
