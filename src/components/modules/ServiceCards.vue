<script setup>

</script>

<template>
    <div class="container py-5">
        <div class="row g-4">
            <!-- 品牌網站設計 -->
            <div class="col-md-6 col-lg-3">
                <div class="service-card">
                    <i class="bi bi-gem fs-1 text-primary mb-4"></i>
                    <h3 class="h5 fw-bold">品牌網站設計</h3>
                    <div class="en-title">BRAND WEBSITE DESIGN</div>
                    <p class="service-description mt-3">企業級專屬 Web 網站策略，助您開拓無限可能。</p>
                </div>
            </div>

            <!-- 軟體開發服務 -->
            <div class="col-md-6 col-lg-3">
                <div class="service-card">
                    <i class="bi bi-braces fs-1 text-primary mb-4"></i>
                    <h3 class="h5 fw-bold">軟體開發服務</h3>
                    <div class="en-title">SOFTWARE DEVELOPMENT</div>
                    <p class="service-description mt-3">結合品牌發展與策略，驅動ESG數位化與高效率工作。</p>
                </div>
            </div>

            <!-- 資安積核與顧問 -->
            <div class="col-md-6 col-lg-3">
                <div class="service-card">
                    <i class="bi bi-shield-check fs-1 text-primary mb-4"></i>
                    <h3 class="h5 fw-bold">資安積核與顧問</h3>
                    <div class="en-title">INFORMATION SECURITY</div>
                    <p class="service-description mt-3">多次通過國家級單位資安驗證，完善全方位防護。</p>
                </div>
            </div>

            <!-- 主機托管與長期維運 -->
            <div class="col-md-6 col-lg-3">
                <div class="service-card">
                    <i class="bi bi-gear fs-1 text-primary mb-4"></i>
                    <h3 class="h5 fw-bold">主機托管與長期維運</h3>
                    <div class="en-title">HOSTING AND MAINTENANCE</div>
                    <p class="service-description mt-3">專業維運客服流程，讓企業專注於發展，高效無憂。</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
        .service-card {
            background-color: #fff;
            border-radius: 10px;
            transition: transform 0.3s ease;
            height: 100%;
            padding: 2rem;
        }
        .service-card:hover {
            transform: translateY(-5px);
        }
        .service-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 1.5rem;
        }
        .en-title {
            color: #666;
            font-size: 0.9rem;
            margin-top: 0.5rem;
            letter-spacing: 1px;
        }
        .service-description {
            color: #666;
            font-size: 0.95rem;
            line-height: 1.8;
        }
        body {
            background-color: #f8f9fa;
        }

</style>