

<template>

     <div class="container py-3 ">
        <!-- 標題區域 -->
        <div class="text-center mb-5">
            <p class="mb-2">MULTIPLE ADVANTAGES</p>
            <h2 class="display-5 fw-bold mb-3">我們的六大特色</h2>
            <p class="text-muted fs-4">大哥數位為您著想，盡力給您更好的體驗！</p>
        </div>

        <!-- 特色卡片區域 -->
        <div class="row g-4">
            <!-- 職人設計精神 -->
            <div class="col-md-6 col-lg-4">
                <div class="feature-card p-4 yellow-highlight">
                    <i class="bi bi-brush feature-icon fs-1"></i>
                    <h3 class="feature-title h4">職人設計精神</h3>
                    <p class="mb-0">專業設計師操刀，經手過多種不同風格案件，整沖做好設計，讓您的品牌行銷力，更上一層樓！</p>
                </div>
            </div>

            <!-- 100%後台權限 -->
            <div class="col-md-6 col-lg-4">
                <div class="feature-card p-4 bg-dark text-white">
                    <i class="bi bi-shield-lock feature-icon fs-1"></i>
                    <h3 class="feature-title h4">100% 後台權限</h3>
                    <p class="mb-0">不規範您 WordPress 使用權限，讓您能自由安裝主題、外掛、享受自由的空氣、不受規範的自我。</p>
                </div>
            </div>

            <!-- SEO 網站優化 -->
            <div class="col-md-6 col-lg-4">
                <div class="feature-card p-4 bg-dark text-white">
                    <i class="bi bi-graph-up-arrow feature-icon fs-1"></i>
                    <h3 class="feature-title h4">SEO 網站優化</h3>
                    <p class="mb-0">全面實行基礎 SEO 優化，這是贏在起跑點的訣竅，想海放你的對手，請交給大哥服務！</p>
                </div>
            </div>

            <!-- 專業客服團隊 -->
            <div class="col-md-6 col-lg-4">
                <div class="feature-card p-4 bg-dark text-white">
                    <i class="bi bi-people feature-icon fs-1"></i>
                    <h3 class="feature-title h4">專業客服團隊</h3>
                    <p class="mb-0">各司其職的團隊成員，從企劃設計、程式開發、軟體測試，一群專業後盾任您差遣。</p>
                </div>
            </div>

            <!-- 線上教學資源 -->
            <div class="col-md-6 col-lg-4">
                <div class="feature-card p-4 bg-dark text-white">
                    <i class="bi bi-book feature-icon fs-1"></i>
                    <h3 class="feature-title h4">線上教學資源</h3>
                    <p class="mb-0">除了幫您架站，我們也分享各種架站、行銷知識，幫助您比現在更強大，我們也會一路陪伴您！</p>
                </div>
            </div>

            <!-- 行銷工具配置 -->
            <div class="col-md-6 col-lg-4">
                <div class="feature-card p-4 bg-dark text-white">
                    <i class="bi bi-tools feature-icon fs-1"></i>
                    <h3 class="feature-title h4">行銷工具配置</h3>
                    <p class="mb-0">我們整合重要行銷工具，像是 GA、GSC、電子報等...，讓您體驗營收狂飆的感覺！</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

</script>
<style scoped>

        .feature-card {
            height: 100%;
            transition: transform 0.3s ease;
            border: none;
        }
        .feature-card:hover {
            transform: translateY(-5px);
        }
        .feature-icon {
            width: 60px;
            height: 60px;
            color: #ffd43b;
            margin-bottom: 1rem;
        }
        .yellow-highlight {
            background-color: #ffd43b;
        }
        .feature-title {
            font-weight: 700;
            margin-bottom: 1rem;
        }
        .text-muted{
            color: #6c757d;
        }

</style>