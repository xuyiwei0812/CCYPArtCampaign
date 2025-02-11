<template>
    <div class="container">
        <!-- 介绍部分 -->
        <section class="section">
            <h2>Who is CCYP?</h2>
            <p>
                The <strong>Commissioner for Children and Young People (CCYP)</strong> is an independent organization in Western Australia
                dedicated to advocating for the rights, well-being, and voices of children and young people. It ensures their needs
                are heard and considered in policies and decision-making processes.
            </p>
        </section>

        <!-- 主要工作内容 -->
        <section class="section section-blue">
            <h2>What Does CCYP Do?</h2>
            <ul>
                <p>Advocates for policies that prioritize the well-being of children and young people.</p>
                <p>Engages with young people to ensure their voices influence key decisions.</p>
                <p>Conducts research and provides reports on youth-related issues.</p>
                <p>Promotes awareness of children's rights and supports their development.</p>
            </ul>
        </section>

        <!-- 重点关注领域 -->
        <section class="section">
            <h2 class="center">Key Focus Areas</h2>
            <div class="grid">
                <div class="card card-green">
                    <h3>Children’s Rights</h3>
                    <p>Raising awareness and ensuring all children have opportunities to thrive.</p>
                </div>
                <div class="card card-yellow">
                    <h3>Mental Health & Well-being</h3>
                    <p>Improving access to mental health services and support systems for young people.</p>
                </div>
                <div class="card card-purple">
                    <h3>Education & Safety</h3>
                    <p>Creating safer environments that support learning, growth, and success.</p>
                </div>
                <div class="card card-red">
                    <h3>Youth Participation</h3>
                    <p>Encouraging children and young people to engage in shaping their future.</p>
                </div>
            </div>
        </section>

        <!-- 联系方式 -->
        <section class="section section-gray center">
            <h2>Want to Learn More?</h2>
            <p>
                Visit the official website for more details:
                <a href="https://www.ccyp.wa.gov.au/" class="link">ccyp.wa.gov.au</a>.
            </p>
        </section>
    </div>
</template>

<script>
    export default {
        name: "AboutCCYP",
    };
</script>

<style scoped>
    /* 全局容器 */
    .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    /* 标题部分 */
    .header {
        text-align: center;
        margin-bottom: 30px;
    }

    .header h1 {
        font-size: 32px;
        color: #5C3B1E;
    }

    .header p {
        font-size: 16px;
        color: #666;
    }

    /* 通用部分样式 */
    .section {
        background: white;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 8px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .section h2 {
        font-size: 24px;
        color: #5C3B1E;
        margin-bottom: 10px;
    }

    .section ul {
        list-style-type: disc;
        padding-left: 20px;
        color: #333;
    }

    .section li {
        margin-bottom: 8px;
    }

    /* 颜色背景 */
    .section-blue {
        background-color: #e8f0fe;
    }

    .section-gray {
        background-color: #f5f5f5;
    }

    /* 重点关注领域 - 网格 */
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
    }

    @media (min-width: 768px) {
        .grid {
            grid-template-columns: 1fr 1fr;
        }
    }

    /* 卡片样式 */
    .card {
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .card h3 {
        font-size: 18px;
        margin-bottom: 5px;
    }

    /* 重点关注领域 - 不同颜色的卡片 */
    .card-green {
        background-color: #d4edda;
        color: #155724;
    }

    .card-yellow {
        background-color: #fff3cd;
        color: #856404;
    }

    .card-purple {
        background-color: #e2d5f8;
        color: #512da8;
    }

    .card-red {
        background-color: #f8d7da;
        color: #721c24;
    }

    /* 其他样式 */
    .center {
        text-align: center;
    }

    .link {
        color: #004c97;
        text-decoration: none;
        font-weight: bold;
    }

    .link:hover {
        text-decoration: underline;
    }
</style>
