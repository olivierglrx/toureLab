<template>
  <div class="container">
    <div class="title">{{ publi.acf.publication_title }}</div>
    <div class="authors" v-html="publi.acf.publication_authors"></div>
    <div class="flex">
      <span class="journal"> {{ publi.acf.publication_journal }}, </span> {{ publi.acf.publication_pages }}({{
        publi.acf.publication_dop
      }})<a :href="publi.acf.publication_arxiv_url">External Link</a>
      <span @click="visible = true"> Preview Abstract </span>

      <div class="card flex justify-content-center">
        <Dialog
          v-model:visible="visible"
          modal
          
          :style="{ width: '50vw' }"
        >
        <div class="title">{{ publi.acf.publication_title }}</div>
          <div v-html="publi.acf.publication_abstract"></div>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["publi"]);
const visible = ref(false);
</script>

<style scoped>
.container {
  width: 80%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
.title {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 600;
}
.authors {
  color: rgb(122, 122, 122);
  display: block;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 200;
}
.journal {
  text-decoration: underline;
  color: rgb(122, 122, 122);
  display: block;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 100;
}
</style>
