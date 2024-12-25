

<template>
  <!-- 輪播區域 -->
<div id="carouselExample" class="carousel slide">
   <!-- 頁面指示器 -->
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <!-- 輪播內容 -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://fakeimg.pl/1200x400/000000/" class="d-block w-100" alt="...">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p class="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
    </div>
    <div class="carousel-item">
      <img src="https://fakeimg.pl/1200x400/000000/" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://fakeimg.pl/1200x400/000000/" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>

  <!-- 上/下一頁控制按鈕 -->
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>
</template>

<script setup>

</script>

<style scoped>


</style>