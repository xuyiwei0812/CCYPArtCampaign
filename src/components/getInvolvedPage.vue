<template>
    <div class="get-involved-page">
        <div class="main-content">
            <img src="@/assets/kid.png" alt="Kid" class="main-image" />
            <div class="text-content">
                <div class="participate-section">
                    <h2>How to Participate?</h2>
                    <p>
                        Use your creativity! You can express your thoughts on <strong>"poverty"</strong> through:
                        <strong>painting</strong>, <strong>digital art</strong>, <strong>short videos</strong>, <strong>music</strong>, and more!
                    </p>
                </div>

                <div class="share-section">
                    <h2>Share Artwork</h2>
                    <p><strong>Post your creation on</strong> TikTok, Instagram, Twitter, or YouTube!</p>
                    <p><strong>Tag our official accounts:</strong></p>
                    <p class="official-tags">@CCYPWA<br/>@CCYPWAArtCampaign</p>
                    <p><strong>Use these hashtags to join the conversation:</strong></p>
                    <p class="hashtags">#Kidspovertyperspectives #CCYPWApostcards</p>
                </div>
            </div>
        </div>

        <div class="encouragement">
            <h2>Your Voice Matters!</h2>
            <p>
                Through your art, you can help people understand what poverty really means. Every drawing, video, and song can make a difference. 🌟
            </p>
            <p>
                Be creative. Be bold. Be YOU! We can’t wait to see your amazing work!
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GetInvolvedPage",
    };
</script>

<style scoped>
    .get-involved-page {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    .main-content {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        border-radius: 12px;
        padding: 5px;
        margin-bottom: 20px;
    }

    .main-image {
        width: 28%;
        height: auto;
        object-fit: cover;
        border-radius: 12px;
        margin-right: 30px;
    }

    .text-content {
        flex: 1;
        font-size: 16px;
    }

    h2 {
        font-size: 24px;
        color: #D27F36;
        margin-bottom: 10px;
    }

    p, ul {
        font-size: 16px;
        color: #333;
        line-height: 1.6;
    }

    ul {
        list-style-type: none;
    }

    .official-tags {
        font-weight: bold;
        color: #8B4513;
        list-style-type: none;
    }

    .hashtags {
        font-weight: bold;
        color: #8B4513;
        margin-top: 10px;
    }

    /* Your Voice Matters */
    .encouragement {
        text-align: center;
        padding: 20px;
        background-color: #FDF3D6;
        border-radius: 10px;
        font-size: 16px;
        font-weight: bold;
    }

    @media (max-width: 768px) {
        .main-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .main-image {
            display: block;
            margin: 0 auto;
            width: 80%;
            height: auto;
            margin-bottom: 20px;
        }

        .text-content {
            font-size: 14px;
        }

        h2 {
            font-size: 20px;
        }

        p, ul {
            font-size: 14px;
        }
    }
</style>
