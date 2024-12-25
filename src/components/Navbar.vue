<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <!-- Logo/Brand -->
      <router-link class="navbar-brand" to="/">Logo</router-link>

      <!-- 漢堡選單按鈕 -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 導航項目 -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">關於</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/service">服務</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">聯絡我們</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// 監聽滾動事件
import { onMounted, onUnmounted } from 'vue'

const handleScroll = () => {
  const navbar = document.querySelector('.navbar')
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding: 0.8rem 2rem;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
}

.navbar-brand {
  font-weight: 600;
  font-size: 1.5rem;
  color: #333;
}

.nav-link {
  color: #555 !important;
  font-weight: 500;
  padding: 0.5rem 1.2rem !important;
  margin: 0 0.2rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #ff6b6b !important;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #ff6b6b;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 80%;
}

/* 響應式選單按鈕樣式 */
.navbar-toggler {
  border: none;
  padding: 0.5rem;
}

.navbar-toggler:focus {
  box-shadow: none;
}

/* 手機版樣式調整 */
@media (max-width: 991.98px) {
  .navbar-collapse {
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-link {
    padding: 0.8rem 1.2rem !important;
  }

  .nav-link::after {
    display: none;
  }
}
</style>