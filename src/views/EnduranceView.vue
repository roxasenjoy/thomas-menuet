<script lang="ts">

    import Header from '@/components/Header.vue';
    import Separation from '@/components/Separation.vue';
    import Presentation from '@/components/Presentation.vue';
    import CarouselImage from '@/components/CarouselImage.vue';
    import Audio from '@/components/Audio.vue';
    import Enigme from '@/components/Enigme.vue';

    import image1 from '@/assets/img/endurance/1.jpg';
    import image2 from '@/assets/img/endurance/2.jpg';
    import image3 from '@/assets/img/endurance/3.jpg';
    import image4 from '@/assets/img/endurance/4.jpg';
    import image5 from '@/assets/img/endurance/5.jpg';
    import image6 from '@/assets/img/endurance/6.jpg';
    import image7 from '@/assets/img/endurance/7.jpg';

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
                {id: 1, url:'url(' + image1 + ')', description: 'description random'},
                {id: 2, url:'url(' + image2 + ')', description: 'description random'},
                {id: 3, url:'url(' + image3 + ')', description: 'description random'},
                {id: 4, url:'url(' + image4 + ')', description: 'description random'},
                {id: 5, url:'url(' + image5 + ')', description: 'description random'},
                {id: 6, url:'url(' + image6 + ')', description: 'description random'},
                {id: 7, url:'url(' + image7 + ')', description: 'description random'}
            ];

            const listElements: never[] = [];

            const details = [
                {
                    id: 1,
                    url:'url(' + image1 + ')', 
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis suscipit ornare. Morbi sed urna porttitor, bibendum est sit amet, commodo nulla. Nullam interdum sed nunc ac sollicitudin. Vivamus dictum ante vitae fringilla pellentesque. Ut sollicitudin, diam ut rhoncus venenatis, nibh enim aliquet odio, sed volutpat erat turpis sit amet eros.', 
                    title: 'ENDURANCE', 
                    price: 20, 
                    author:'Quatuor', 
                    btnText: 'COMMANDER LA PARTITION',
                    mailText: 'Je suis le texte qui va se retrouver dans le mail en attendant d avoir quelque chose de fonctionnel',
                    hasAudio: true,
                    linkAudio: 'https://www.youtube.com/watch?v=S8TvXhLtLa0'
                }
            ];

            return { images, listElements, details};
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

        <template v-slot:title>ENDURANCE</template>
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
