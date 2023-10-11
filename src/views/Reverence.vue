<script lang="ts">

    import Header from '@/components/Header.vue';
    import Separation from '@/components/Separation.vue';
    import Presentation from '@/components/Presentation.vue';
    import CarouselImage from '@/components/CarouselImage.vue';
    import Product from '@/components/Product.vue';
    import Audio from '@/components/Audio.vue';
    import Enigme from '@/components/Enigme.vue';

    import cd from '@/assets/img/reverence/2.jpg';

    import image1 from '@/assets/img/reverence/Révérence_USP_Tauvrais_1.jpg';
    import image2 from '@/assets/img/reverence/Révérence_USP_Tauvrais_2.jpg';
    import image4 from '@/assets/img/reverence/Révérence_USP_Tauvrais_4.jpg';
    import image5 from '@/assets/img/reverence/Révérence_USP_Tauvrais_5.jpg';
    import image6 from '@/assets/img/reverence/Révérence_USP_Tauvrais_6.jpg';
    import image7 from '@/assets/img/reverence/Révérence_USP_Tauvrais_7.jpg';
    import image8 from '@/assets/img/reverence/Révérence_USP_Tauvrais_8.jpg';
    import image9 from '@/assets/img/reverence/Révérence_USP_Tauvrais_9.jpg';
    import image10 from '@/assets/img/reverence/Révérence_USP_Tauvrais_10.jpg';
    import image11 from '@/assets/img/reverence/Révérence_USP_Tauvrais_11.jpg';
    import image12 from '@/assets/img/reverence/Révérence_USP_Tauvrais_12.jpg';
    import image13 from '@/assets/img/reverence/Révérence_USP_Tauvrais_13.jpg';
    import image14 from '@/assets/img/reverence/Révérence_USP_Tauvrais_14.jpg';
    import image15 from '@/assets/img/reverence/Révérence_USP_Tauvrais_15.jpg';
    import image16 from '@/assets/img/reverence/Révérence_USP_Tauvrais_16.jpg';
    import image17 from '@/assets/img/reverence/Révérence_USP_Tauvrais_17.jpg';
    import image18 from '@/assets/img/reverence/Révérence_USP_Tauvrais_18.jpg';
    import image19 from '@/assets/img/reverence/Révérence_USP_Tauvrais_19.jpg';
    import image20 from '@/assets/img/reverence/Révérence_USP_Tauvrais_20.jpg';
    import image21 from '@/assets/img/reverence/Révérence_USP_Tauvrais_21.jpg';
    import image22 from '@/assets/img/reverence/Révérence_USP_Tauvrais_22.jpg';
    import image23 from '@/assets/img/reverence/Révérence_USP_Tauvrais_23.jpg';
    import image24 from '@/assets/img/reverence/Révérence_USP_Tauvrais_24.jpg';
    import image25 from '@/assets/img/reverence/Révérence_USP_Tauvrais_25_Allégence_des_soignants.jpg';
    import image26 from '@/assets/img/reverence/Révérence_USP_Tauvrais_26.jpeg';
    import image27 from '@/assets/img/reverence/Révérence_USP_Tauvrais_27.jpeg';
    import image28 from '@/assets/img/reverence/Révérence_USP_Tauvrais_28.jpeg';
    import image29 from '@/assets/img/reverence/Révérence_USP_Tauvrais_29_Hotel_Pasteur_1.jpg';
    import image30 from '@/assets/img/reverence/Révérence_USP_Tauvrais_30_Hotel_Pasteur_2.jpg';

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

            const reverenceImages = [
                image1, image2, image4, image5, image6, image7, image8, image9, image10,
                image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
                image21, image22, image23, image24, image25, image26, image27, image28, image29, image30,
            ];

            let images = [];
            for (let i = 1; i <= 26; i++) {
                images.push({
                    id: i,
                    url: `url(${reverenceImages[i-1]})`, // i-1 car les indices de tableau commencent à 0
                    description: 'description random'
                });
            }

            const listElements: never[] = [];

            const details = [
                {
                    id: 1,
                    url:'url(' + cd + ')', 
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis suscipit ornare. Morbi sed urna porttitor, bibendum est sit amet, commodo nulla. Nullam interdum sed nunc ac sollicitudin. Vivamus dictum ante vitae fringilla pellentesque. Ut sollicitudin, diam ut rhoncus venenatis, nibh enim aliquet odio, sed volutpat erat turpis sit amet eros.', 
                    title: 'Livre CD', 
                    price: 20, 
                    author:'Texte et musique par Thomas Menuet', 
                    btnText: 'COMMANDER LE LIVRE CD',
                    mailText: 'Je suis le texte qui va se retrouver dans le mail en attendant d avoir quelque chose de fonctionnel',
                    hasAudio: true,
                    linkAudio: 'https://www.youtube.com/watch?v=S8TvXhLtLa0'
                }
            ];

            const listAudios: never[] = [];

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
        <template v-slot:title>Résidence Révérences (USP Tauvrais)</template>
        <template v-slot:description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis suscipit ornare. Morbi sed urna porttitor, bibendum est sit amet, commodo nulla. Nullam interdum sed nunc ac sollicitudin. Vivamus dictum ante vitae fringilla pellentesque. Ut sollicitudin, diam ut rhoncus venenatis, nibh enim aliquet odio, sed volutpat erat turpis sit amet eros.</template>
        <template v-slot:downloadPress>.</template>
    </Presentation>

    <CarouselImage :images="images" :nbImages=nbImages></CarouselImage>
    <Product  :listElements="listElements" :details="details">
    
        <template v-slot:title>Résidence Révérences (USP Tauvrais)</template>
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
