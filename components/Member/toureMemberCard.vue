<template>
    <div class="container">
    
        <img :src="memberImg"/>
    </div>
</template>

<script setup>
const props = defineProps(["memberImg", "title", "description"]);

</script>

<style scoped>
img{
    width: 100%;
    height: 400px;
    object-fit: cover;
    filter: grayscale(1);

}
.container{
    width: 300px;
    
}

</style>