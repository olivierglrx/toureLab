<template>
  <Icon name="mdi:hamburger-plus" color="red" />
  <TourelabNavbar class="sticky high" />

  <ToureHeader />
  <ToureResearchPresentation />
  <ToureResearchSection />
  <div  v-if="backgroundImg1" class="image-transition" :style="{ 'background-image': `url(${backgroundImg1})` }"/>
  
  <ToureMemberSection />
  <div  v-if="backgroundImg2" class="image-transition" :style="{ 'background-image': `url(${backgroundImg2})` }"/>
  <TourePublicationSection/>
  <div  v-if="backgroundImg3" class="image-transition" :style="{ 'background-image': `url(${backgroundImg3})` }"/>
  <ToureNewsSection/>
  <div  v-if="backgroundImg4" class="image-transition" :style="{ 'background-image': `url(${backgroundImg4})` }"/>
  <ToureFundingSection/>
  

</template>
<style scoped>
.high {
  z-index: 10000;
}
.sticky {
  position: -webkit-sticky; /* for browser compatibility */
  position: sticky;
  top: 0px;
}
.image-transition {
  width: 100%;
  height: 50vh;
  padding-top: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>

<style>
.flex {
  display: flex;
}

.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}
</style>

<script setup>
import axios from "axios";
const backgroundImg1 = ref();
const backgroundImg2 = ref();
const backgroundImg3 = ref();
const backgroundImg4 = ref();
axios.get("https://tourelab.fr/wp-json/options/all").then((response) => {
  backgroundImg1.value = response.data.pagecustom_member_banner.url;
  backgroundImg2.value = response.data.pagecustom_publication_banner.url;
  backgroundImg3.value = response.data.pagecustom_news_banner.url;
  backgroundImg4.value = response.data.pagecustom_collaboration_banner.url;
  
});
</script>
