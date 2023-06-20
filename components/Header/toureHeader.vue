<template>
  <div  v-if="title" class="container" :style="{ 'background-image': `url(${backgroundImg})` }">
    <div v-if="title" id="title-container">
      <h1>{{ title }}</h1>
    </div>
    <div v-if="subtitle" id="subtitle-container">
      <h2 v-html="subtitle"></h2>
    </div>
    
    <!-- <i class="arrow pi pi-arrow-circle-down"></i> -->
  

   <a href="#section-title-research"> <font-awesome-icon class='arrow' icon="fa-solid fa-circle-arrow-down" /></a> 
  </div>

</template>

<script setup>
import axios from "axios";

const title = ref();
const subtitle = ref();
const backgroundImg = ref();
axios.get("https://tourelab.fr/wp-json/options/all").then((response) => {
  title.value = response.data.siteinfo_lab_name;
  subtitle.value = response.data.siteinfo_projectname;
  backgroundImg.value = response.data.siteinfo_identity_image.url;
});
</script>
<style scoped>



.container {
  height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  
}

h1 {
  font-family: "Roboto", Sans-serif;
  font-size: 90px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #6ec1e4;
  padding: 0;
  margin: 0;
  line-height: 1;
}
h2{
    color: #414141;
font-family: "Lato", Sans-serif;
font-size: 45px;
font-weight: 400;
letter-spacing: 1px;
padding: 0;
margin: 0;
line-height: 1;
}

#title-container {
  margin: 15% 10% 8% 3%;
  padding: 20px 20px 20px 20px;
  background-color: #54595fc4;
}

#subtitle-container {
  margin: 10% 10% 0% 3%;
  padding: 10px 10px 10px 20px;
  background-color: #aaa7a7c7;
}


.arrow{width: 1em;
height: 1em;
position: relative;
display: block;
font-size: 3rem;
font-weight: 1000;
color:#6ec1e4;
margin-top:5%;
margin-left: auto;
margin-right: auto;
animation: 1s ease-out 0s 1 slideInFromLeft;
}

.arrow :hover{width: 1em;
height: 1em;
position: relative;
display: block;
font-size: 4rem;
/* font-weight: 900; */
color:#54595fc4;
margin-top:5%;
margin-left: auto;
margin-right: auto;
transition: transform .3s ease-out;
transform: translate(0, 100px);

}



@keyframes slideInFromLeft {
  0% {
    transform: translateY(-150px);
  }
  100% {
    transform: translateX(0);
  }
}


</style>
