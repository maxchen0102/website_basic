<script setup>

</script>

<template>
    <div class="container py-5">
        <div class="row g-4">
            <!-- 品牌網站設計 -->
            <div class="col-md-6">
                <div class="service-card">
                    <h3 class="service-title">品牌網站設計</h3>
                    <p class="service-description">
                        量身訂製，專業實現，讓網站成為營收持續成長的力量、全球第一的形象。
                    </p>
                </div>
            </div>

            <!-- 軟體開發服務 -->
            <div class="col-md-6">
                <div class="service-card">
                    <h3 class="service-title">軟體開發服務</h3>
                    <p class="service-description">
                        大型多功能網站、數位轉型、ERP、CRM標準化，助力企業邁向數位未來
                    </p>
                </div>
            </div>

            <!-- 資訊安全服務 -->
            <div class="col-md-6">
                <div class="service-card">
                    <h3 class="service-title">資訊安全服務</h3>
                    <p class="service-description">
                        大型多功能網站，數位轉型、ERP、CRM標準化
                    </p>
                </div>
            </div>

            <!-- 主機託管與長期維護 -->
            <div class="col-md-6">
                <div class="service-card">
                    <h3 class="service-title">主機託管與長期維護</h3>
                    <p class="service-description">
                        穩定的主機託管與專業的長期維護，成為品牌與網站持續成功的堅實基石。
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
     .service-card {
            padding: 2rem;
            background-color: #fff;
            border-radius: 15px;
            height: 100%;
            transition: all 0.3s ease;
            border: 1px solid #eee;
        }
        .service-card:hover {
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transform: translateY(-5px);
        }
        .service-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #333;
        }
        .service-description {
            color: #666;
            line-height: 1.6;
            font-size: 1rem;
        }
</style>