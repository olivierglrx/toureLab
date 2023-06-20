<template>
  <div class="card">
    <Accordion>
      <AccordionTab v-for="(value, key) in memberByTax" :header="key">
      <div class="flex-wrap">
        <p  class='flex' v-for="member in value">
        <span class="name"><p>{{ member.name }}</p></span>
           <span v-html="member.date"></span>

        </p>
    </div>
      </AccordionTab>
    </Accordion>
  </div>
</template>
<style scoped>
.flex-wrap{
    justify-content: space-evenly;
    max-width: 80%;
    margin: auto;
}
.alumni-name{
    margin-left: 10px;
    margin-right: 10px;
}
p{
    margin:none;
}
span .name{
    margin-left: 10px;
    margin-right: 10px;
}

</style>

<script setup>
import axios from "axios";
function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}
const memberList = ref();
const memberByTax = ref({});
axios.get("https://tourelab.fr/wp-json/wp/v2/member?per_page=50").then((response) => {
  memberList.value = response.data.filter((x) => x.acf.member_alumni);
  memberList.value.forEach(function (x) {
    const tax = x.acf.member_status_tax.name;
    if (tax in memberByTax.value) {
      memberByTax.value[tax].push(        {
          "name": x.acf.member_first_name + x.acf.member_last_name,
          "date": x.acf.member_short_description,
        });
    } else {
      memberByTax.value[tax] = [
        {
          "name": x.acf.member_first_name + x.acf.member_last_name,
          "date": x.acf.member_short_description,
        },
      ];
    }
  });
});
</script>
