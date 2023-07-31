<script lang="ts">

    import Header from '@/components/Header.vue';
    import Separation from '@/components/Separation.vue';
    import Presentation from '@/components/Presentation.vue';
    import CarouselImage from '@/components/CarouselImage.vue';
    import Product from '@/components/Product.vue';
    import Audio from '@/components/Audio.vue';
    import Enigme from '@/components/Enigme.vue';

    import image1 from '@/assets/img/reverence/1.jpg';
    import image2 from '@/assets/img/reverence/2.jpg';
    import image3 from '@/assets/img/reverence/3.jpg';
    import image4 from '@/assets/img/reverence/4.jpg';
    import image5 from '@/assets/img/reverence/5.jpg';


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
                {id: 1, url:'url(' + image1 + ')', description: 'description random'},
                {id: 2, url:'url(' + image2 + ')', description: 'description random'},
                {id: 3, url:'url(' + image3 + ')', description: 'description random'},
                {id: 4, url:'url(' + image4 + ')', description: 'description random'},
                {id: 5, url:'url(' + image5 + ')', description: 'description random'}
            ];

            const listElements: never[] = [];

            const details = [
                {
                    id: 1,
                    url:'url(' + image1 + ')', 
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis suscipit ornare. Morbi sed urna porttitor, bibendum est sit amet, commodo nulla. Nullam interdum sed nunc ac sollicitudin. Vivamus dictum ante vitae fringilla pellentesque. Ut sollicitudin, diam ut rhoncus venenatis, nibh enim aliquet odio, sed volutpat erat turpis sit amet eros.', 
                    title: 'Henle Album : Partition n°1', 
                    price: 20, 
                    author:'Piano Music from Thomas MENUET', 
                    btnText: 'COMMANDER SUR LE SITE LDLC',
                    mailText: 'Je suis le texte qui va se retrouver dans le mail en attendant d avoir quelque chose de fonctionnel',
                    hasAudio: true,
                    linkAudio: 'https://www.youtube.com/watch?v=S8TvXhLtLa0'
                },
            ];

            const listAudios:never[] =  [];

            const listImgEnigmes: never[] = [];

            const listElementsEnigme: never[] = [];

            return { images, listElements, details, listAudios, listImgEnigmes, listElementsEnigme};
        },
    });

       

</script>

<template>

    <div style="background-color: var(--black);">
        <Header>
            <template v-slot:video><iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"  frameborder="0" showinfo="0" controls="0" loop="0"></iframe></template>
        </Header>
    </div>
    <Separation></Separation>
    <Presentation>

        <template v-slot:title>SABRE LASER</template>
        <template v-slot:description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis suscipit ornare. Morbi sed urna porttitor, bibendum est sit amet, commodo nulla. Nullam interdum sed nunc ac sollicitudin. Vivamus dictum ante vitae fringilla pellentesque. Ut sollicitudin, diam ut rhoncus venenatis, nibh enim aliquet odio, sed volutpat erat turpis sit amet eros.</template>
        <template v-slot:downloadPress>.</template>

    </Presentation>
    <CarouselImage :images="images" :nbImages=nbImages></CarouselImage>
    <Product  :listElements="listElements" :details="details">
    
        <template v-slot:title>SABRE LASER</template>
    </Product>

    <!-- Aniamtion du CD -->


</template>

<style scoped>

    /* Changement de la photo */
    .sectionShowMenu {
        background-image: 
            linear-gradient(rgba(000, 000, 000, 0.6), rgba(000, 000, 000, 0.6)),
            url("@/assets/img/reverence/3.jpg");
    } 

    .sectionPresentation {
        background-image: 
            linear-gradient(rgba(000, 000, 000, 0.6), rgba(000, 000, 000, 0.6)),
            url("@/assets/img/reverence/2.jpg");
    } 


</style>
