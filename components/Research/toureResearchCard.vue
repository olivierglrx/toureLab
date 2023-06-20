<template>
  <div class="container">
    <img :src="image" />

    <h3>{{ title }}</h3>
    <div>
      <p v-html="description"></p>
    </div>
    <div class="link-container">
      <NuxtLink style="margin: auto"> Read More</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["image", "title", "description"]);
</script>

<style scoped>
img {
  width: 350px;
  height: 250px;
  object-fit: cover;
}

h3 {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
    Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #333;
  margin-top: 50px;
  margin-bottom: 50px;
}
.container {
  background-color: #6ec1e49b;
  height: 600px;
  width: 350px;
  position: relative;
  box-shadow: 5px 5px  3px  #33333370;
}

p {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
    Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #33333380;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 5px;
  margin-right: 5px;
}

.link-container {
  position: absolute;
  bottom: 30px;
  width: 100%;
  display: flex;
  font-family: "Roboto", Sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #3333337d;
  transition-property: font-size;
  transition-duration: 4s;
}

.link-container :hover {
    font-size: 24px;

}
</style>
