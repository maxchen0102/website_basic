<template>
  <Navbar/>
  <router-view/>
  <Footer/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Carousel from "./components/Carousel.vue";
import Footer from "./components/Footer.vue";
import ThreeColumn from "./components/ThreeColumn.vue";
import FeaturePic from "./components/modules/FeaturePic.vue";
import HomePage from "./components/HomePage.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
    Carousel,
    Footer,
    ThreeColumn,
    FeaturePic,
    HomePage
  }
}
</script>

<style>
.three-col-context  {
  margin: 1.5rem 0.75rem;

}



</style>
