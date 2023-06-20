<template>
  <div v-if="teamLeader">
  <ToureSectionTitle :id="'team'" :title="'THE TEAM'"/>

    <div v-if="teamLeader" class="flex">
      <img :src="teamLeader.member_picture.url" />
      <div id="description-container">
        <h3>
          {{ teamLeader.member_first_name }} {{ teamLeader.member_last_name }},
          {{ teamLeader.member_status_tax.name }}
        </h3>
        <p v-html="teamLeader.member_short_description"></p>
        <div class="flex">
          <Button color=""> <a :href="teamLeader.member_cv"> Download CV</a></Button>
          <Button> <a :href="'mailto:' + teamLeader.member_email">Contact Me</a></Button>
        </div>
      </div>
    </div>
    <div class="flex grow">
      <div id="member-section-description">
        <p v-html="memberSectionDescription"></p>
      </div>
    </div>

    <div class="section-member-container">
      <div class="card-container" v-for="member in memberList">
        <ToureMemberCard :memberImg="member.acf.member_picture.url" />
      </div>
    </div>

    <ToureMemberAlumni></ToureMemberAlumni>
  </div>
</template>
<script setup>
import axios from "axios";
const teamLeader = ref(false);
const memberList = ref();
axios.get("https://tourelab.fr/wp-json/wp/v2/member?per_page=50").then((response) => {
  memberList.value = response.data;
  teamLeader.value = memberList.value.find(
    (x) => x.acf.member_status_tax.name == "PI"
  ).acf;

  memberList.value = memberList.value.filter(
    (x) => x.acf.member_status_tax.name != "PI" && x.acf.member_picture
  );
});

const memberSectionDescription = ref();
axios.get("https://tourelab.fr/wp-json/options/all").then((response) => {
  memberSectionDescription.value = response.data.pagecustom_member_general_text;
});
</script>

<style scoped>


img {
  margin: 5% 5% 5% 5%;

  object-fit: cover;
  width: 100%;
  height: 300px;
  filter: grayscale(1);
}

h3 {
  text-align: justify;
  font-family: "Inria Serif", Sans-serif;
  font-size: 30px;
  font-weight: 200;
  height: 30px;
  margin: 10px;
  letter-spacing: 0.2rem;
}

p {
  text-align: justify;
  font-family: "Inria Serif", Sans-serif;
  font-weight: 400;
  color: #666565;
  margin: 10px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  line-height: 24px;
  font-size: 16px;
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
#description-container {
  margin-right: 40px;
}
a {
  color: white;
  text-decoration: none;
}

#member-section-description {
  margin: auto;
  margin-bottom: 50px;
  width: 60%;
  box-shadow: 5px 5px 5px #54595fc4;
}

#member-section-description p {
  text-align: center;
  font-family: "Inria Serif", Sans-serif;
  font-weight: 400;
  color: #666565;
  margin: 10px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  line-height: 24px;
  font-size: 20px;
}
.grow {
  transition-duration: 1s;
}
.grow :hover {
  transform: scale(1.1);
}

.section-member-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card-container {
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
}
</style>
