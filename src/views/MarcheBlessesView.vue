<script lang="ts">

    import Header from '@/components/Header.vue';
    import Separation from '@/components/Separation.vue';
    import Presentation from '@/components/Presentation.vue';
    import CarouselImage from '@/components/CarouselImage.vue';
    import Audio from '@/components/Audio.vue';
    import Enigme from '@/components/Enigme.vue';

    import image1 from '@/assets/img/marche/1.jpg';
    import image2 from '@/assets/img/marche/2.jpg';
    import image3 from '@/assets/img/marche/3.jpg';
    import image4 from '@/assets/img/marche/4.jpg';
    import image5 from '@/assets/img/marche/5.jpg';
    import image6 from '@/assets/img/marche/6.jpg';
    import image7 from '@/assets/img/marche/7.jpg';
    import image8 from '@/assets/img/marche/8.jpg';
    import image9 from '@/assets/img/marche/9.jpg';
    import image10 from '@/assets/img/marche/10.jpg';

    import Product from '@/components/Product.vue';

    export default({
        components: {
            Header,
            Separation,
            Presentation,
            CarouselImage,
            Product,
            Audio,
            Enigme
        },

        data() {
            return {
                nbImages: 5,
            }
        },

        setup() {
            const images = [
                {id: 1, url:'url(' + image10 + ')', description: 'description random'},
                {id: 2, url:'url(' + image1 + ')', description: 'description random'},
                {id: 3, url:'url(' + image2 + ')', description: 'description random'},
                {id: 4, url:'url(' + image3 + ')', description: 'description random'},
                {id: 5, url:'url(' + image4 + ')', description: 'description random'},
                {id: 6, url:'url(' + image5 + ')', description: 'description random'},
                {id: 7, url:'url(' + image6 + ')', description: 'description random'},
                {id: 8, url:'url(' + image7 + ')', description: 'description random'},
                {id: 9, url:'url(' + image8 + ')', description: 'description random'},
                {id: 10, url:'url(' + image9 + ')', description: 'description random'}
            ];

            const listElements: any = [];

            const details = [
                {
                    id: 1,
                    url:'url(' + image1 + ')', 
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis suscipit ornare. Morbi sed urna porttitor, bibendum est sit amet, commodo nulla. Nullam interdum sed nunc ac sollicitudin. Vivamus dictum ante vitae fringilla pellentesque. Ut sollicitudin, diam ut rhoncus venenatis, nibh enim aliquet odio, sed volutpat erat turpis sit amet eros.', 
                    title: 'MARCHE DES BLESSÉS DE GUERRE', 
                    price: 20, 
                    author:'Pour fanfare, Harmonie et Brassband', 
                    btnText: 'COMMANDER LA PARTITION',
                    mailText: 'Je suis le texte qui va se retrouver dans le mail en attendant d avoir quelque chose de fonctionnel',
                    hasAudio: true,
                    linkAudio: 'https://www.youtube.com/watch?v=S8TvXhLtLa0'
                },
                {
                    id: 2,
                    url:'url(' + image1 + ')', 
                    description: 'description random', 
                    title: 'MARCHE DES BLESSÉS DE GUERRE', 
                    price: 1400, 
                    author:'Pour fanfare, Harmonie et Brassband', 
                    btnText: 'COMMANDER LA PARTITION',
                    mailText: 'Je suis le texte qui va se retrouver dans le mail en attendant d avoir quelque chose de fonctionnel',
                    hasAudio: true,
                    linkAudio: 'https://www.youtube.com/watch?v=S8TvXhLtLa0'
                },
            ];

            const listAudios: any = [];

            const listImgEnigmes: never[] = [];

            const listElementsEnigme: never[] = [];

            return { images, listElements, details, listAudios, listImgEnigmes, listElementsEnigme};
        },
    });

       

</script>

<template>

    <div style="background-color: var(--black);">
        <Header></Header>
    </div>
    <Separation></Separation>
    <Presentation>

        <template v-slot:title>MARCHE DES BLESSÉS DE GUERRE</template>
        <template v-slot:description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis suscipit ornare. Morbi sed urna porttitor, bibendum est sit amet, commodo nulla. Nullam interdum sed nunc ac sollicitudin. Vivamus dictum ante vitae fringilla pellentesque. Ut sollicitudin, diam ut rhoncus venenatis, nibh enim aliquet odio, sed volutpat erat turpis sit amet eros.</template>
        <template v-slot:downloadPress>.</template>

    </Presentation>
    <CarouselImage :images="images" :nbImages=nbImages></CarouselImage>
    <Product  :listElements="listElements" :details="details"></Product>


</template>

<style scoped>

    /* Changement de la photo */
    .sectionShowMenu {
        background-image: 
            linear-gradient(rgba(000, 000, 000, 0.6), rgba(000, 000, 000, 0.6)),
            url("@/assets/img/marche/9.jpg");
    } 

    .sectionPresentation {
        background-image: 
            linear-gradient(rgba(000, 000, 000, 0.6), rgba(000, 000, 000, 0.6)),
            url("@/assets/img/marche/5.jpg");
    } 


</style>
