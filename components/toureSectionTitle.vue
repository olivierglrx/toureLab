<template>
    <div :id="id" class="section-title-container">
      <h2>{{title}}</h2>
    </div>
</template>

<script setup>
const props=defineProps(["id","title"]);

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