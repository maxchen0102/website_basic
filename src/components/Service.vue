
<template>
      <div class="container">
        <div class="section-title">
            <h2 class="en-title">SERVICES</h2>
            <div class="ch-title">服務項目與流程</div>
        </div>
    </div>
  <ServiceCards/>
  <ServiceCardsGrid/>

</template>

<script setup>
import ServiceCards from "../components/modules/ServiceCards.vue";
import ServiceCardsGrid from "../components/modules/ServiceCardsGrid.vue";


</script>


<style scoped>
        .section-title {
            text-align: center;
            padding: 10px 0;
        }
        .en-title {
            font-size: 3.5rem;
            font-weight: 200;
            letter-spacing: 8px;
            color: #ff6b6b;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
        }
        .ch-title {
            font-size: 1.25rem;
            color: #666;
            letter-spacing: 3px;
        }

</style>