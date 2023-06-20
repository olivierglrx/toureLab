<template>
    <div class="container">
        <img :src="fundingLogo"/>
        <div>  {{fundingName}}</div>
      <div>{{fundingYears }}</div> 
      <div>{{ fundingCoordinator }}</div>
    </div>
</template>

<script setup>
const props = defineProps(["fundingLogo",'fundingName','fundingCoordinator', 'fundingYears']);

</script>

<style scoped>
img{
    width: 100px;
    height: 100px;
    object-fit: cover;
    

}
.container{
    width: 300px;
    margin: 20px;
    
}

</style>