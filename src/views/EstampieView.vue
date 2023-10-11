<script lang="ts">

    import Header from '@/components/Header.vue';
    import Separation from '@/components/Separation.vue';
    import Presentation from '@/components/Presentation.vue'; 
    import Product from '@/components/Product.vue';
    import CarouselImage from '@/components/CarouselImage.vue';
    import Audio from '@/components/Audio.vue';
    import Enigme from '@/components/Enigme.vue';

    import image1 from '@/assets/img/estampie/Estampie_1.jpg';
    import image2 from '@/assets/img/estampie/Estampie_2.jpg';
    import image3 from '@/assets/img/estampie/Estampie_3.jpg';
    import image4 from '@/assets/img/estampie/Estampie_4.jpg';
    import image5 from '@/assets/img/estampie/Estampie_5.jpg';
    import image6 from '@/assets/img/estampie/Estampie_6.jpg';
    import image7 from '@/assets/img/estampie/Estampie_7.jpg';
    import image8 from '@/assets/img/estampie/Estampie_8.jpg';
    import image9 from '@/assets/img/estampie/Estampie_9.jpg';
    import image10 from '@/assets/img/estampie/Estampie_10.jpg';
    import image11 from '@/assets/img/estampie/Estampie_11.jpg';
    import image12 from '@/assets/img/estampie/Estampie_12.jpg';
    import image13 from '@/assets/img/estampie/Estampie_13.jpg';
    import image14 from '@/assets/img/estampie/Estampie_14.jpg';
    import image15 from '@/assets/img/estampie/Estampie_15.jpg';
    import image16 from '@/assets/img/estampie/Estampie_16.jpg';
    import image17 from '@/assets/img/estampie/Estampie_17.jpg';
    import image18 from '@/assets/img/estampie/Estampie_18.jpg';
    import image19 from '@/assets/img/estampie/Estampie_19.jpg';
    import image20 from '@/assets/img/estampie/Estampie_20.jpg';
    import image21 from '@/assets/img/estampie/Estampie_21.jpg';
    import image22 from '@/assets/img/estampie/Estampie_22.jpg';
    import image23 from '@/assets/img/estampie/Estampie_23.jpg';
    import image24 from '@/assets/img/estampie/Estampie_24.jpg';
    import image25 from '@/assets/img/estampie/Estampie_25.jpg';
    import image26 from '@/assets/img/estampie/Estampie_26.jpg';

   

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
            const estampieImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26];

            for (let i = 1; i <= 26; i++) {
                images.push({
                    id: i,
                    url: `url(${estampieImages[i-1]})`, // i-1 car les indices de tableau commencent à 0
                    description: 'description random'
                });
            }

            const listElements: any = [

            ];

            const details = [
                {
                    id: 1,
                    url:'url(' + image1 + ')', 
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis suscipit ornare. Morbi sed urna porttitor, bibendum est sit amet, commodo nulla. Nullam interdum sed nunc ac sollicitudin. Vivamus dictum ante vitae fringilla pellentesque. Ut sollicitudin, diam ut rhoncus venenatis, nibh enim aliquet odio, sed volutpat erat turpis sit amet eros.', 
                    title: 'Henle Album : Partition n°1', 
                    price: 20, 
                    author:'Piano Music from Thomas MENUET', 
                    btnText: 'PRÉCOMMANDER LA PARTITION',
                    mailText: 'Je suis le texte qui va se retrouver dans le mail en attendant d avoir quelque chose de fonctionnel',
                    hasAudio: true,
                    linkAudio: 'https://www.youtube.com/watch?v=S8TvXhLtLa0'
                },
                {
                    id: 2,
                    url:'url(' + image1 + ')', 
                    description: 'description random', 
                    title: 'Titre de l album', 
                    price: 1400, 
                    author:'', 
                    btnText: 'Commander la partition',
                    mailText: 'Je suis le texte qui va se retrouver dans le mail en attendant d avoir quelque chose de fonctionnel',
                    hasAudio: true,
                    linkAudio: 'https://www.youtube.com/watch?v=S8TvXhLtLa0'
                },
                {
                    id: 3,
                    url:'url(' + image1 + ')', 
                    description: 'description random', 
                    title: 'Titre de l album', 
                    price: 150, 
                    author:'', 
                    btnText: 'Commander la partition',
                    mailText: 'Je suis le texte qui va se retrouver dans le mail en attendant d avoir quelque chose de fonctionnel',
                    hasAudio: true,
                    linkAudio: 'https://www.youtube.com/watch?v=S8TvXhLtLa0'
                },
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
            <template v-slot:video><iframe width="420" height="315" src="https://www.youtube.com/watch?v=bTA24Kx784s"  frameborder="0" showinfo="0" controls="0" loop="0"></iframe></template>
        </Header>
    </div>
    <Separation></Separation>
    <Presentation>

        <template v-slot:title>ESTAMPIE</template>
        <template v-slot:description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis suscipit ornare. Morbi sed urna porttitor, bibendum est sit amet, commodo nulla. Nullam interdum sed nunc ac sollicitudin. Vivamus dictum ante vitae fringilla pellentesque. Ut sollicitudin, diam ut rhoncus venenatis, nibh enim aliquet odio, sed volutpat erat turpis sit amet eros.</template>
        <template v-slot:downloadPress>.</template>

    </Presentation>
    <CarouselImage :images="images" :nbImages=nbImages></CarouselImage>
    <Product  :listElements="listElements" :details="details"></Product>


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
