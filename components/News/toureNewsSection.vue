<template>
    <div class="section" v-if="newsList">
        <ToureSectionTitle :id="'news'" :title="'NEWS & JOBS'"/>
        <div v-for="news in newsList">
          <ToureNewsCard :newsData="news"/>
        </div>
     
    </div>
</template>



<script setup>
import axios from "axios";
const newsList = ref(false);


axios
  .get("https://tourelab.fr/wp-json/wp/v2/news")
  .then((response) => {
    newsList.value = response.data;
   
  });
  
</script>

<style scoped>
    
.section{background-color:  #6ec1e462;}

</style>