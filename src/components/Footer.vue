<script lang="ts">

    export default {

        props: ['listAudios'],

    }
</script>

<template>

    <p>© {{ new Date().getFullYear() }} - Développé et désigné par <a href="https://andrewmahe.com/" target="_blank">Andrew Mahé️</a></p>

</template>


<style scoped>

    p{
        background-color: var(--black);
        color: var(--white);
        font-size: 16px;
        font-family: var(--nycd);
        text-align: center;
        padding: 10px;
        border-top: var(--gold) solid 1px;
    }

    a{
        text-decoration: underline;
        color: var(--gold);

    }
    
</style>