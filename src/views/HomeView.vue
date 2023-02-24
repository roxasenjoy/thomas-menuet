<script lang="ts">

    import Header from '@/components/Header.vue';
    import Separation from '@/components/Separation.vue';
    import Presentation from '@/components/Presentation.vue';
    import CarouselImage from '@/components/CarouselImage.vue';

    import image1 from '@/assets/img/IRMAR/IRMAR_1.jpg';
    import image2 from '@/assets/img/IRMAR/IRMAR_2.jpg';
    import image3 from '@/assets/img/IRMAR/IRMAR_3.jpg';
    import image4 from '@/assets/img/IRMAR/presentation.jpg';

    export default({
        components: {
            Header,
            Separation,
            Presentation,
            CarouselImage,
        },

        data() {
            return {
                nbImages: 5,
            }
        },

        setup() {
            const images = [
                {id: 1, url:'url(' + image1 + ')', description: 'description random'},
                {id: 2, url:'url(' + image2 + ')', description: 'description random'},
                {id: 3, url:'url(' + image3 + ')', description: 'description random'},
                {id: 4, url:'url(' + image4 + ')', description: 'description random'},
            ];

            return { images };
        },
    });

       

</script>

<template>

    <Header></Header>
    <Separation></Separation>
    <Presentation></Presentation>
    <CarouselImage :images="images" :nbImages=nbImages></CarouselImage>


</template>

<style>

    /* Changement de la photo */
    .sectionShowMenu {
        background-image: 
            linear-gradient(rgba(000, 000, 000, 0.6), rgba(000, 000, 000, 0.6)),
            url("@/assets/img/IRMAR/IRMAR_3.jpg");
    } 

    .sectionPresentation {
        background-image: 
            linear-gradient(rgba(000, 000, 000, 0.6), rgba(000, 000, 000, 0.6)),
            url("@/assets/img/IRMAR/presentation.jpg");
    } 


</style>
