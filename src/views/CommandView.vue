<script lang="ts">
    import Navbar from '@/components/Navbar.vue';
    import Product from '@/components/Product.vue';
    import Header from '@/components/Header.vue';

    import image1 from '@/assets/img/IRMAR/IRMAR_1.jpg';
    import image2 from '@/assets/img/IRMAR/IRMAR_2.jpg';
    import image3 from '@/assets/img/IRMAR/IRMAR_3.jpg';

     export default({
        components: {
            Product,
            Navbar,
            Header
        },

        mounted(){
            document.querySelector("body")?.classList.add('initialBody');
        },

        setup() {

            const colorBackground = 'var(--white)';
            const colorText = 'var(--black)';

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

            return { listElements, details, colorBackground, colorText};
        },
    });
</script>

<template>


    <div style="background-color: var(--black);">

        <Header>

            <template v-slot:content>

                <div class="command__content">
                    <p class="command__title">COMMANDER</p>
                    <hr class="command__separation">
                    <p class="command__texte">Vous souhaitez commander un projet à Thomas MENUET ?</p>
                    <a class="command__btn" :href="' mailto:hello@hello.com \
                                ?subject=Détaillez votre projet \
                                &body= '">DÉTAILLEZ VOTRE PROJET</a>
                </div>
                

            </template>

        </Header>
    </div>
    <Product  
        :listElements="listElements" 
        :details="details" 
        :colorBackground="colorBackground"
        :colorText="colorText"
    >
        <template v-slot:title>PARTITIONS DE LA RÉSIDENCE À L’IRMAR</template>
    </Product>
    <Product  :listElements="listElements" :details="details">
        <template v-slot:title>PROJETS ARCHIVÉS</template>
    </Product>


</template>

<style scoped>

    .productContainer{
        padding: 0 0 50px 0;
    }

    /* Changement de la photo */
    .sectionShowMenu {
        background-image: 
            linear-gradient(rgba(000, 000, 000, 0.6), rgba(000, 000, 000, 0.6)),
            url("@/assets/img/IRMAR/IRMAR_3.jpg");
        height: 50vh;  
    } 

    .command__content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 95%;
        text-align: center;
        color: var(--white);
    }

    .command__title{
        font-size: 40px;
        font-family: var(--nycd);
    }

    .command__separation{
        width: 100px;
        margin: 25px auto;
        height: 2px;
        background-color: var(--white);
    }

    .command__texte{
        font-family: var(--ms-regular);
        font-size: 24px;
        margin-bottom: 50px;
    }

    .command__btn{
        background-color: var(--gold);
        color: var(--white);
        font-size: 18px;
        padding: 10px 40px;
        text-decoration: none;
        font-family: var(--ms-regular);
        border: solid var(--white) 1px;
        display: inline-block;
    }

    @media screen and (max-width: 900px)  {

        .sectionShowMenu {
            height: 75vh;  
        } 
        .command__title{
            font-size: 30px;
        }

        .command__texte{
            font-size: 20px;
        }

        .command__btn{
            font-size: 16px;
            padding: 10px 20px;
    
        }
    }
</style>
