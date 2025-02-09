<template>
    <div class="artwork-container">
        <div class="artwork-grid">
            <div v-for="art in artworks" :key="art.title" class="art-card">
                <!-- 确保 `:src="getImageUrl(art.image)"` 正确解析路径 -->
                <img :src="getImageUrl(art.image)" :alt="art.title" class="art-image" v-if="art.image"/>
                <div class="art-info">
                    <h3>{{ art.title }}</h3>
                    <p>By: {{ art.artist }}</p>
                    <p>Group: {{ art.group }}</p>
                    <a :href="art.social_media_link" target="_blank" class="view-link">View Artwork Link</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { artworks: [] };
        },
        async created() {
            try {
                const baseURL = window.location.origin.includes("github.io")
                    ? "https://xuyiwei0812.github.io/CCYPArtCampaign"
                    : window.location.origin;

                const jsonPath = `${baseURL}/data/data.json`;
                console.log("Fetching data from:", jsonPath);

                const response = await fetch(jsonPath);
                if (!response.ok) throw new Error("Failed to load JSON");

                this.artworks = await response.json();
                console.log("Artworks loaded:", this.artworks);
            } catch (error) {
                console.error("Error loading artworks:", error);
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
    .artwork-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
    }

    .page-title {
        font-size: 32px;
        color: #333;
        margin-bottom: 20px;
    }

    .artwork-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }

    .art-card {
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        padding: 15px;
        text-align: center;
    }

    .art-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
    }

    .art-info {
        margin-top: 10px;
    }

    h3 {
        font-size: 18px;
        color: #222;
    }

    p {
        font-size: 14px;
        color: #666;
    }

    .view-link {
        display: inline-block;
        margin-top: 10px;
        color: #008CBA;
        text-decoration: none;
        font-size: small;
    }

    .view-link:hover {
        text-decoration: underline;
    }

    /* 响应式布局：小屏幕两列 */
    @media (max-width: 1024px) {
        .artwork-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    /* 手机端：单列布局 */
    @media (max-width: 600px) {
        .artwork-grid {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
