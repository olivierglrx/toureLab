<template>
  <div v-if="fundingList">
    <ToureSectionTitle :id="'funding'" :title="'FUNDING & COLLABORATIONS'" />

    <h3>Funding</h3>
    <div class="flex-wrap logo-container">
      <ToureFundingCard
        v-for="funding in fundingList"
        :fundingLogo="funding.siteinfo_funding_logo.url"
        :fundingCoordinator="funding.siteinfo_funding_coordinator"
        :fundingName="funding.siteinfo_funding_name"
        :fundingYears="funding.siteinfo_funding_years"
      />
    </div>
    <h3>Core Facilities</h3>
    <div class="flex-wrap logo-container">
      <ToureFundingCard
        v-for="facilities in coreFacilitiesList"
        :fundingLogo="facilities.siteinfo_core_facilities_logo.url"
        :fundingCoordinator="facilities.siteinfo_core_facilities_institut"
      />
    </div>
    <h3>National and international Collaborations</h3>
    <div class="flex-wrap logo-container">
      <ToureFundingCard
        v-for="collaborator in collaboratorsList"
        :fundingLogo="collaborator.siteinfo_collaborations_logo.url"
        :fundingCoordinator="collaborator.siteinfo_collaborations_people"
        :fundingName="
          collaborator.siteinfo_collaborations_institut +
          ', ' +
          collaborator.siteinfo_collaborations_city_country
        "
      />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const fundingList = ref(false);
const coreFacilitiesList = ref([]);
const collaboratorsList = ref([]);
axios.get("https://tourelab.fr/wp-json/options/all").then((response) => {
  fundingList.value = response.data.siteinfo_funding;
  coreFacilitiesList.value = response.data.siteinfo_core_facilities;
  collaboratorsList.value = response.data.siteinfo_collaborations;
});
</script>
<style scoped>
.logo-container {
  justify-content: space-evenly;
  margin: auto;
  width: 95%;
  margin: 40px;
}
h3{
    color: rgb(51, 51, 51);
display: block;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
font-size: 32px;
font-weight: 500;
height: 32px;
margin:30px;
}
</style>

