<script setup>

</script>

<template>
    <div class="container">
    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 d-flex align-items-center justify-content-center">
        <div>
         <h2 class="featurette-heading fw-normal lh-1">First featurette heading. </h2>
         <h2 class="text-muted">It'll blow your mind.</h2>
        <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        </div>
      </div>
      <div class="col-md-5">
        <img src="https://fakeimg.pl/500x500/000000/" class="d-block w-100" alt="...">
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 order-md-2 d-flex align-items-center justify-content-center">
        <div>
          <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. </h2>
          <h2 class="text-muted">It'll blow your mind.</h2>
          <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
        </div>
      </div>
      <div class="col-md-5 order-md-1">
        <img src="https://fakeimg.pl/500x500/000000/" class="d-block w-100" alt="...">
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 d-flex align-items-center justify-content-center">
        <div>
          <h2 class="featurette-heading fw-normal lh-1">And lastly, this one.</h2>
          <h2 class="text-muted">It'll blow your mind.</h2>
          <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
        </div>
      </div>
      <div class="col-md-5">
         <img src="https://fakeimg.pl/500x500/000000/" class="d-block w-100" alt="...">
      </div>
    </div>

    <hr class="featurette-divider">
</div>
</template>

<style scoped>

.featurette {
  padding: 2rem 0; /* 上下間距 */
}

.featurette-heading {
  font-size: 3rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -.05rem;
}

/* 副標題的灰色文字 */
.text-muted {
  color: #6c757d;
}

/* 內文樣式 */
.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

</style>