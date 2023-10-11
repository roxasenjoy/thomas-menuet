<script lang="ts">

    import Header from '@/components/Header.vue';
    import Separation from '@/components/Separation.vue';
    import Presentation from '@/components/Presentation.vue';
    import CarouselImage from '@/components/CarouselImage.vue';
    import Audio from '@/components/Audio.vue';
    import Enigme from '@/components/Enigme.vue';

    import image1 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_1.jpg';
    import image2 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_2.jpg';
    import image3 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_3.jpg';
    import image4 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_4.jpg';
    import image5 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_5.jpg';
    import image6 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_6.jpg';
    import image7 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_7.jpg';
    import image8 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_8.jpg';
    import image9 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_9.jpg';
    import image10 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_10.jpg';
    import image11 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_11.jpg';
    import image12 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_12.jpg';
    import image13 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_13.jpg';
    import image14 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_14.jpg';
    import image15 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_15.jpg';
    import image16 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_16.jpg';
    import image17 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_17.jpg';
    import image18 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_18.jpg';
    import image19 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_19.jpg';
    import image20 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_20.jpg';
    import image21 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_21.jpg';
    import image22 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_22.jpg';
    import image23 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_23.jpg';
    import image24 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_24.jpg';
    import image25 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_25.jpg';
    import image26 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_26.jpg';
    import image27 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_27.jpg';
    import image28 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_28.jpg';
    import image29 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_29.jpg';
    import image30 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_30.jpg';
    import image31 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_31.jpg';
    import image32 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_32.jpg';
    import image33 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_Rennes_1.jpg';
    import image34 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_Rennes_2.jpg';
    import image35 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_Rennes_3.jpg';
    import image36 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_Rennes_4.jpg';
    import image37 from '@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_Rennes_5.jpg';

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

            let images = [];
            const marcheDesBlessesImages = [
                image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
                image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
                image21, image22, image23, image24, image25, image26, image27, image28, image29, image30,
                image31, image32, image33, image34, image35, image36, image37,
            ];

            for (let i = 1; i <= 26; i++) {
                images.push({
                    id: i,
                    url: `url(${marcheDesBlessesImages[i-1]})`, // i-1 car les indices de tableau commencent à 0
                    description: 'description random'
                });
            }

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
        <Header>
            <template v-slot:video><iframe width="420" height="315" src="https://www.youtube.com/watch?v=sgZvdOusdVQ"  frameborder="0" showinfo="0" controls="0" loop="0"></iframe></template>
        </Header>
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
            url("@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_21.jpg");
    } 

    .sectionPresentation {
        background-image: 
            linear-gradient(rgba(000, 000, 000, 0.6), rgba(000, 000, 000, 0.6)),
            url("@/assets/img/marche-des-blesses-de-guerre/Marche_des_blessés_de_l_armée_de_Terre_création_9.jpg");

        background-position-y: inherit;
    } 


</style>
