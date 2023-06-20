<template>
  <div class="container flex">
    <div>
      <img :src="newsData.acf.news_image.url" />
    </div>
    <div style="margin-left:-100px border:1px solid red; width:100%; height:300px;">
      <h2 v-html="newsData.acf.news_title"></h2>
      <div class="description" v-html="newsData.acf.news_description"> </div>
    </div>
  </div>
</template>

<script setup>
const prop = defineProps(["newsData"]);
</script>

<style scoped>
img {
  width: 350px;
  height: 250px;
  object-fit: cover;
}
.container {
  width: 90%;
  margin: auto;
  position: relative;
  margin-bottom: 50px;
}
h2 {
  text-align: center;
  margin: auto;
  color: rgb(122, 122, 122);
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 32px;
  font-weight: 500;
  height: 32px;
}

.description {
  background-color: #6ec1e499;
  color: rgb(255, 255, 255);

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 200;
  height: auto;
  line-height: 24px;
  padding: 10px;
  margin-left:-50px;
  margin-top: 50px;
}

/* p{
    position: absolute;
  left: -100px;
  bottom:-150px;
} */
</style>
