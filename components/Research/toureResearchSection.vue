<template>
  <div v-if="sciencePosts" id="science-post-container">
    <ToureSectionTitle :id="'research'" :title="'RESEARCH TOPICS'"/>
    <div style="display:flex;">
      <div style='margin:20px;'  v-for="post in sciencePosts">
        <ToureResearchCard :image="post.acf.science_image.url" :title="post.acf.science_title" :description="post.acf.science_paragraph"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const sciencePosts = ref(false);
axios.get("http://tourelab.fr/wp-json/wp/v2/science").then((response) => {
  sciencePosts.value = response.data;
});
</script>

<style scoped>
#science-post-container{
  background-color: #6ec1e43d;
  padding-bottom: 50px;
  margin-top:50px;
  
}
h2 {
  font-family: "Lato", Sans-serif;
  font-size: 45px;
  font-weight: 100;
  letter-spacing: 1px;
  margin: 0;
  line-height: 1;
  color: white;
}
.section-title-container {
  margin: 10% 10% 10% 3%;
  padding: 10px 10px 10px 20px;
  
  background-color: #aaa7a7c7;
}
</style>
