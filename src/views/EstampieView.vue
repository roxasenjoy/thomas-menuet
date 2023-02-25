<script lang="ts">

    import Header from '@/components/Header.vue';
    import Separation from '@/components/Separation.vue';
    import Presentation from '@/components/Presentation.vue';
    import CarouselImage from '@/components/CarouselImage.vue';
    import Audio from '@/components/Audio.vue';
    import Enigme from '@/components/Enigme.vue';

    import image1 from '@/assets/img/IRMAR/IRMAR_1.jpg';
    import image2 from '@/assets/img/IRMAR/IRMAR_2.jpg';
    import image3 from '@/assets/img/IRMAR/IRMAR_3.jpg';
    import image4 from '@/assets/img/IRMAR/presentation.jpg';

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
                {id: 4, url:'url(' + image4 + ')', description: 'description random'}
            ];

            const listElements = [
                {id: 1, color: "var(--gold)", active: 1}, // Actif
                {id: 2, color: "var(--white)", active: 0}, // Pas actif
                {id: 3, color: "var(--grey)", active: 0},
                {id: 4, color: "var(--grey)", active: -1}, // Indisponible
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

            const listAudios = [
                [
                    {title: 'Titre de la partition n°1', linkAudio: 'https://www.youtube.com/watch?v=S8TvXhLtLa0', time: "2:30", instruments: "Deux violons - Simulation"}, 
                    {title: 'Titre de la partition n°1', linkAudio: 'https://www.youtube.com/watch?v=S8TvXhLtLa0', time: "2:30", instruments: "Deux violons - Simulation"}, 
                    {title: 'Titre de la partition n°1', linkAudio: 'https://www.youtube.com/watch?v=S8TvXhLtLa0', time: "2:30", instruments: "Deux violons - Simulation"}, 
                    {title: 'Titre de la partition n°1', linkAudio: 'https://www.youtube.com/watch?v=S8TvXhLtLa0', time: "2:30", instruments: "Deux violons - Simulation"}, 
                ],
                true
            ];

            const listImgEnigmes = [
                {url:'url(' + image1 + ')'}, 
                {url:'url(' + image2 + ')'}, 
                {url:'url(' + image3 + ')'}, 
                {url:'url(' + image4 + ')'}
            ];

            const listElementsEnigme = [
                {id: 1, color: "var(--gold)", active: 1}, // Actif
                {id: 2, color: "var(--white)", active: 0}, // Pas actif
                {id: 3, color: "var(--grey)", active: 0},
                {id: 4, color: "var(--grey)", active: -1}, // Indisponible
            ];

            return { images, listElements, details, listAudios, listImgEnigmes, listElementsEnigme};
        },
    });

       

</script>

<template>

    <Header></Header>
    <Separation></Separation>
    <Presentation></Presentation>
    <CarouselImage :images="images" :nbImages=nbImages></CarouselImage>
    <Product  :listElements="listElements" :details="details"></Product>
    <Audio :listAudios="listAudios"></Audio>
    <Enigme :listImgEnigmes="listImgEnigmes" :listElementsEnigme="listElementsEnigme"></Enigme>


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
