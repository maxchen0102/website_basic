<script setup>

</script>

<template>
 <div class="container py-5">
        <div class="row g-4">
            <!-- 工作經驗卡片 -->
            <div class="col-md-6 col-lg-3">
                <div class="card stat-card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <div class="icon-circle">
                           <i class="bi bi-clock-history fs-2 text-primary"></i>
                          </div>
                        <h2 class="display-5 fw-bold mb-2">5+</h2>
                        <p class="text-muted mb-0">年工作經驗</p>
                    </div>
                </div>
            </div>

            <!-- 合作客戶卡片 -->
            <div class="col-md-6 col-lg-3">
                <div class="card stat-card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <div class="icon-circle">
                           <i class="bi bi-person-check-fill fs-2 text-primary"></i>
                        </div>
                        <h2 class="display-5 fw-bold mb-2">100+</h2>
                        <p class="text-muted mb-0">合作客戶數量</p>
                    </div>
                </div>
            </div>

            <!-- 好評數量卡片 -->
            <div class="col-md-6 col-lg-3">
                <div class="card stat-card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <div class="icon-circle">
                            <i class="bi bi-star-fill fs-2 text-primary"></i>
                        </div>
                        <h2 class="display-5 fw-bold mb-2">500+</h2>
                        <p class="text-muted mb-0">客戶好評數量</p>
                    </div>
                </div>
            </div>

            <!-- 專案數量卡片 -->
            <div class="col-md-6 col-lg-3">
                <div class="card stat-card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <div class="icon-circle">
                            <i class="bi bi-trophy fs-2 text-primary"></i> <!-- 獎盃/成就 -->
                        </div>
                        <h2 class="display-5 fw-bold mb-2">200+</h2>
                        <p class="text-muted mb-0">完成專案數量</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.ima-container{
  margin-top: 20px;
}

        .stat-card {
            transition: transform 0.3s ease-in-out;
        }
        .stat-card:hover {
            transform: translateY(-5px);
        }
        .icon-circle {
            width: 70px;
            height: 70px;
            background-color: #f8f9fa;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
        }
</style>