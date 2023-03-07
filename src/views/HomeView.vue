<script lang="ts">

    import Header from '@/components/Header.vue';
    import Separation from '@/components/Separation.vue';
    import Presentation from '@/components/Presentation.vue';
    import Product from '@/components/Product.vue';
    import CarouselImage from '@/components/CarouselImage.vue';
    import Audio from '@/components/Audio.vue';
    import Enigme from '@/components/Enigme.vue';

    import image1 from '@/assets/img/IRMAR/IRMAR_1.jpg';
    import image2 from '@/assets/img/IRMAR/IRMAR_2.jpg';
    import image3 from '@/assets/img/IRMAR/IRMAR_3.jpg';
    import image4 from '@/assets/img/IRMAR/presentation.jpg';
    import image5 from '@/assets/img/IRMAR/9.jpeg';
    import image6 from '@/assets/img/IRMAR/4.jpg';

    import enigme1 from '@/assets/img/enigmes/1.jpg';

   

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

        
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        unmounted () {
            window.removeEventListener('scroll', this.handleScroll);
        },

        methods: {
            handleScroll (event: any) {

                interface IScrolleffect {
                    scrollElm : Element | null | any;
                }

                const hero: IScrolleffect = { scrollElm: document.querySelector('#headerHomepage')};
                const scrollPosLimit: number = 600;

                window.addEventListener("scroll", function() {
                    
                    const scroll = window.pageYOffset;
                    const docHeight = document.body.scrollHeight;

                    const rateOpacityHero = 1.1 - Math.round((scroll/scrollPosLimit) * 10) / 10;

                    // hero
                    if(scroll < scrollPosLimit) {
                        hero.scrollElm.style.opacity = rateOpacityHero;
                    }
                });
            },
        },

        setup() {
            const images = [
                {id: 1, url:'url(' + image6 + ')', description: 'description random'},
                {id: 2, url:'url(' + image1 + ')', description: 'description random'},
                {id: 3, url:'url(' + image5 + ')', description: 'description random'},
                
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
                {url:'url(' + enigme1 + ')'}
            ];

            const listElementsEnigme = [
                {id: 1, color: "var(--gold)", active: 1}, // Actif
                {id: 2, color: "var(--white)", active: -1}, // Pas actif
                {id: 3, color: "var(--grey)", active: -1},
                {id: 4, color: "var(--grey)", active: -1}, // Indisponible
            ];

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
        <template v-slot:title>RÉSIDENCE DE L'IRMAR</template>
        <template v-slot:description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis suscipit ornare. Morbi sed urna porttitor, bibendum est sit amet, commodo nulla. Nullam interdum sed nunc ac sollicitudin. Vivamus dictum ante vitae fringilla pellentesque. Ut sollicitudin, diam ut rhoncus venenatis, nibh enim aliquet odio, sed volutpat erat turpis sit amet eros.</template>
    </Presentation>

    <CarouselImage :images="images" :nbImages=nbImages></CarouselImage>
    <Product  :listElements="listElements" :details="details"></Product>
    <Audio :listAudios="listAudios"></Audio>
    <Enigme :listImgEnigmes="listImgEnigmes" :listElementsEnigme="listElementsEnigme"></Enigme>


</template>

<style scoped>
    /* Changement de la photo */
    .sectionShowMenu {
        background-image: 
            linear-gradient(rgba(000, 000, 000, 0.8), rgba(000, 000, 000, 0.8)),
            url("@/assets/img/IRMAR/IRMAR_3.jpg");
        
    } 

    .disabledBackground{
        animation: change-color 0.5s forwards;
    }

    @keyframes change-color {
        0%{
            background-image: 
                linear-gradient(rgba(000, 000, 000, 0.8), rgba(000, 000, 000, 0.8)),
                url("@/assets/img/IRMAR/IRMAR_3.jpg");
        }

        10% {
            background-image: 
                linear-gradient(rgba(000, 000, 000, 0.78), rgba(000, 000, 000, 0.78)),
                url("@/assets/img/IRMAR/IRMAR_3.jpg");
        }

        20% {
            background-image: 
                linear-gradient(rgba(000, 000, 000, 0.76), rgba(000, 000, 000, 0.76)),
                url("@/assets/img/IRMAR/IRMAR_3.jpg");
        }

        30% {
            background-image: 
                linear-gradient(rgba(000, 000, 000, 0.74), rgba(000, 000, 000, 0.74)),
                url("@/assets/img/IRMAR/IRMAR_3.jpg");
        }

        40% {
            background-image: 
                linear-gradient(rgba(000, 000, 000, 0.72), rgba(000, 000, 000, 0.72)),
                url("@/assets/img/IRMAR/IRMAR_3.jpg");
        }

        50% {
            background-image: 
                linear-gradient(rgba(000, 000, 000, 0.70), rgba(000, 000, 000, 0.70)),
                url("@/assets/img/IRMAR/IRMAR_3.jpg");
        }

        60% {
            background-image: 
                linear-gradient(rgba(000, 000, 000, 0.68), rgba(000, 000, 000, 0.68)),
                url("@/assets/img/IRMAR/IRMAR_3.jpg");
        }

        70% {
            background-image: 
                linear-gradient(rgba(000, 000, 000, 0.66), rgba(000, 000, 000, 0.66)),
                url("@/assets/img/IRMAR/IRMAR_3.jpg");
        }

        80% {
            background-image: 
                linear-gradient(rgba(000, 000, 000, 0.64), rgba(000, 000, 000, 0.64)),
                url("@/assets/img/IRMAR/IRMAR_3.jpg");
        }

        90% {
            background-image: 
                linear-gradient(rgba(000, 000, 000, 0.62), rgba(000, 000, 000, 0.62)),
                url("@/assets/img/IRMAR/IRMAR_3.jpg");
        }

        100% {
            background-image: 
                linear-gradient(rgba(000, 000, 000, 0.6), rgba(000, 000, 000, 0.6)),
                url("@/assets/img/IRMAR/IRMAR_3.jpg");
        }
        
    }
</style>

<style>

    

    .sectionPresentation {
        background-image: 
            linear-gradient(rgba(000, 000, 000, 0.5), rgba(000, 000, 000, 0.5)),
            url("@/assets/img/IRMAR/presentation.jpg");
    } 


</style>
