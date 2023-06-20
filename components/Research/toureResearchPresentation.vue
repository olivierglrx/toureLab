<template>
  <div v-if='siteinfoDescription'>
    <h2 id="section-title-research">
      {{ makeTitleAppear }}
    </h2>
    <div class="container">
      <div>
        <p v-html="siteinfoDescription"/> 
        <div style="display: flex">
          <Button><font-awesome-icon  class='icon' icon="fa-solid fa-circle-arrow-down" /> Research Topics </Button>
        </div>
      </div>
      <img :src="siteInfoImage" />
    </div>
  </div>
</template>

<script setup>
const title = "OUR RESEARCH   ";
const makeTitleAppear = ref("");

function AppendLetters() {
  var i = 0;
  const int = setInterval(() => {
    // time interval
    const n = title.length;

    if (i < n) {
      makeTitleAppear.value = makeTitleAppear.value + title.charAt(i);
      i++;
    } else {
      makeTitleAppear.value = "";
      i = 0;
      // clearInterval(int);
    }

    // makeTitleAppear.value=makeTitleAppear.value+title.value.char(i)
  }, 300);
}

onMounted(() => {
  AppendLetters();
});

import axios from "axios";
const siteinfoDescription=ref(false);
const siteInfoImage = ref();
axios.get("https://tourelab.fr/wp-json/options/all").then((response) => {
  siteInfoImage.value = response.data.siteinfo_identity_image2.url;
  siteinfoDescription.value=response.data.siteinfo_description;
});
</script>

<style scoped>
#research {
padding-top: 50px;
  min-height: 50vh;
  background-color: #6ec1e46d;
}

h2 {
  height: 50px;
  padding-top: 0px;
  padding-bottom: 50px;
  margin-top: 50px;
  margin-left: 50px;
  text-align: left;
  font-family: "Lato", Sans-serif;
  font-size: 50px;
  font-weight: 100;
  color: #6ec1e4;
}

.container {
  display: flex;
}
p {
  text-align: justify;
  color: #000000;
  font-family: "Roboto", Sans-serif;
  font-size: 26px;
  font-weight: 200;
  line-height: 1.2em;
  letter-spacing: -0.4px;
  margin: 0% 5% 5% 5%;
}
img {
  margin: 0% 5% 5% 5%;

  object-fit: cover;
  width: 100%;
  height: 200px;
}

button {
  background-color: #6ec1e4;
  border: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
}

button:hover {
  background-color: #54595fc4 !important;
}
.icon{
    margin-right: 10px;

}
</style>
