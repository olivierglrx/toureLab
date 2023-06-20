<template>
  <div v-if="pubList">
    <ToureSectionTitle :id="'publications'" :title="'PUBLICATIONS'" />
    <span v-for="year in years" @click="filterPubByYear(year)"> {{ year }}/</span>
    <div v-for="pub in pubListYear">
      <TourePublicationCard :publi="pub" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const pubList = ref(false);
const pubListYear = ref();
const years = ref([]);

// axios
//   .get("https://tourelab.fr/wp-json/wp/v2/publication?per_page=100&page=1")
//   .then((response) => {
//     pubList.value = response.data;
//     response.data.forEach(e=> years.value.push(e.acf.publication_dop));
//   });

function getYears() {
  axios
    .get("https://tourelab.fr/wp-json/wp/v2/publication?per_page=100&page=1")
    .then((response) => {
      pubList.value = response.data.sort((a,b) => a.acf.publication_dop<= b.acf.publication_dop);
      pubListYear.value = response.data;
      var yearsArray = [];
      response.data.forEach(function (item) {
        if (!yearsArray.includes(item.acf.publication_dop)) {
          yearsArray.push(item.acf.publication_dop);
          yearsArray.sort();
        }
      });

      let premiereAnnee = 1995;
      let derniereAnnee = yearsArray[yearsArray.length - 1];
      let annee=premiereAnnee;

      while(annee+5<=Number(derniereAnnee)){
        years.value.push(annee+'-'+parseInt(Number(annee)+4));
        annee=annee+5;
      }
      years.value.push(annee+'-'+derniereAnnee)
      years.value.unshift('all');
    });
}
getYears();

function filterPubByYear(year) {

  var deb=year.substring(0,4);
  var fin =Number(deb)+5;
  console.log(deb,fin);
  
  pubListYear.value = pubList.value.filter((item) => (deb<=item.acf.publication_dop  && item.acf.publication_dop< fin)  );

  if (year == "all") {
    pubListYear.value = pubList.value;
  }
}
</script>

<style scoped>
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
  margin: 10px 30% 10px 3%;
  padding: 10px 10px 10px 20px;

  background-color: #666565;
}
</style>
