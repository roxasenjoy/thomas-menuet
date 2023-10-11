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
                {id: 4, color: "var(--grey)", active: 0}, // Indisponible (-1)
            ];

            const listArchivedProject = [
                {id: 1, color: "var(--gold)", active: 1}, // Actif
                {id: 2, color: "var(--white)", active: 0}, // Pas actif
                {id: 3, color: "var(--grey)", active: 0},
                {id: 4, color: "var(--grey)", active: 0}, 
                {id: 5, color: "var(--grey)", active: 0}, 
                {id: 6, color: "var(--grey)", active: 0}, 
                {id:7, color: "var(--grey)", active: 0}, 
                {id: 8, color: "var(--grey)", active: 0}, 
                {id: 9, color: "var(--grey)", active: 0}, 
                {id: 10, color: "var(--grey)", active: 0}, 
                {id: 11, color: "var(--grey)", active: 0}, 
                {id: 12, color: "var(--grey)", active: 0}, 
                {id: 13, color: "var(--grey)", active: 0}, 
            ];

            const details = [
                {
                    id: 1,
                    url:'url(' + image1 + ')', 
                    description: 'Cet album contient toutes les partitions et leur parties séparées, réalisées lors des deux années de résidence à l’institut de recherche mathématique de Rennes (IRMAR). Toutes ces partitions sont pour des effectifs variés allant du solo au quintet. L’album contient également quelques textes explicatifs et plusieurs photos sélectionnées. Le tout dans une édition de qualité. En pré-commande seulement ! Disponible à partir de septembre 2024.', 
                    title: 'Album de concert (8 partitions pour divers effectifs)', 
                    price: 160, 
                    author:'From Thomas MENUET', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Album de concert (8 partitions pour divers effectifs)',
                    hasAudio: false,
                    linkAudio: ''
                },
                {
                    id: 2,
                    url:'url(' + image1 + ')', 
                    description: 'Il vous est possible ici d’acheter les partitions au détail selon l’effectif souhaité. La partition est accompagnée du texte qui la concerne, avec une ou deux photos, selon la partition choisie. Lors de votre commande, n’oubliez pas de spécifier la partition souhaitée ! En pré-commande seulement ! Disponible à partir de septembre 2024.', 
                    title: 'Partition de l’album de concert, à l’unité', 
                    price: 30 , 
                    author:'From Thomas MENUET', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Partition de l’album de concert, à l’unité',
                    hasAudio: false,
                    linkAudio: ''
                },
                {
                    id: 3,
                    url:'url(' + image1 + ')', 
                    description: "Le livre des énigmes contient les 10 énigmes réalisées lors des deux années de résidence à l'institut de recherche mathématique de Rennes (IRMAR). Chacune de ces énigmes réalisées sous forme de dessin, fait état des différentes recherches mathématiques travaillées à l’IRMAR mais également nationalement. Vous y découvrirez des notions de cryptologie quantique, de relativité générale, de codage informatique, de fusion nucléaire, de télécommunication etc… Ce livre est accompagné d’images, de deux phrases indicatives pour chaque énigme de manière à vous mettre sur la bonne piste. Vous y trouverez également des explications quant au sujet mathématique traité. Cela bien entendu, sans vous donner la réponse des énigmes, c’est juste pour vous stimuler à chercher.En pré-commande seulement ! Disponible à partir de septembre 2024", 
                    title: 'Livre des énigmes mathématiques et musicales', 
                    price: 40, 
                    author:'From Thomas MENUET', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Livre des énigmes mathématiques et musicales',
                    hasAudio: false,
                    linkAudio: ''
                },

                {
                    id: 4,
                    url:'url(' + image1 + ')', 
                    description: "Dans ce livre vous trouverez les solutions de toutes les énigmes du livre des énigmes mathématiques et musicales. Ce livre contient le dessin de chaque énigme ainsi qu’une explication détaillée de sa solution point par point. Une fois la réponse en votre possession, chaque notion musicale et mathématique est ensuite prolongée de manière à vous faire découvrir ou redécouvrir les différentes applications sociales de chacune des notions en question. Ainsi au travers de ces 10 énigmes et de leurs solutions, côtoyez l’intime de ces deux merveilleuses disciplines que sont la musique et la mathématique.En pré-commande seulement ! Disponible à partir de septembre 2024.", 
                    title: 'Livre des solutions aux énigmes mathématiques et musicales', 
                    price: 40, 
                    author:'', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Livre des solutions aux énigmes mathématiques et musicales',
                    hasAudio: false,
                    linkAudio: ''
                },
            ];

            const projectArchived = [
                {
                    id: 1,
                    url:'url(' + image1 + ')', 
                    description: 'Cet album contient toutes les partitions et leur parties séparées, réalisées lors des deux années de résidence à l’institut de recherche mathématique de Rennes (IRMAR). Toutes ces partitions sont pour des effectifs variés allant du solo au quintet. L’album contient également quelques textes explicatifs et plusieurs photos sélectionnées. Le tout dans une édition de qualité. En pré-commande seulement ! Disponible à partir de septembre 2024.', 
                    title: 'Album de concert (8 partitions pour divers effectifs)', 
                    price: 500, 
                    author:'From Thomas MENUET', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Album de concert (8 partitions pour divers effectifs)',
                    hasAudio: false,
                    linkAudio: ''
                },
                {
                    id: 2,
                    url:'url(' + image1 + ')', 
                    description: 'Il vous est possible ici d’acheter les partitions au détail selon l’effectif souhaité. La partition est accompagnée du texte qui la concerne, avec une ou deux photos, selon la partition choisie. Lors de votre commande, n’oubliez pas de spécifier la partition souhaitée ! En pré-commande seulement ! Disponible à partir de septembre 2024.', 
                    title: 'Partition de l’album de concert, à l’unité', 
                    price: 30 , 
                    author:'From Thomas MENUET', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Partition de l’album de concert, à l’unité',
                    hasAudio: false,
                    linkAudio: ''
                },
                {
                    id: 3,
                    url:'url(' + image1 + ')', 
                    description: "Le livre des énigmes contient les 10 énigmes réalisées lors des deux années de résidence à l'institut de recherche mathématique de Rennes (IRMAR). Chacune de ces énigmes réalisées sous forme de dessin, fait état des différentes recherches mathématiques travaillées à l’IRMAR mais également nationalement. Vous y découvrirez des notions de cryptologie quantique, de relativité générale, de codage informatique, de fusion nucléaire, de télécommunication etc… Ce livre est accompagné d’images, de deux phrases indicatives pour chaque énigme de manière à vous mettre sur la bonne piste. Vous y trouverez également des explications quant au sujet mathématique traité. Cela bien entendu, sans vous donner la réponse des énigmes, c’est juste pour vous stimuler à chercher.En pré-commande seulement ! Disponible à partir de septembre 2024", 
                    title: 'Livre des énigmes mathématiques et musicales', 
                    price: 40, 
                    author:'From Thomas MENUET', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Livre des énigmes mathématiques et musicales',
                    hasAudio: false,
                    linkAudio: ''
                },

                {
                    id: 4,
                    url:'url(' + image1 + ')', 
                    description: "Dans ce livre vous trouverez les solutions de toutes les énigmes du livre des énigmes mathématiques et musicales. Ce livre contient le dessin de chaque énigme ainsi qu’une explication détaillée de sa solution point par point. Une fois la réponse en votre possession, chaque notion musicale et mathématique est ensuite prolongée de manière à vous faire découvrir ou redécouvrir les différentes applications sociales de chacune des notions en question. Ainsi au travers de ces 10 énigmes et de leurs solutions, côtoyez l’intime de ces deux merveilleuses disciplines que sont la musique et la mathématique.En pré-commande seulement ! Disponible à partir de septembre 2024.", 
                    title: 'Livre des solutions aux énigmes mathématiques et musicales', 
                    price: 40, 
                    author:'', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Livre des solutions aux énigmes mathématiques et musicales',
                    hasAudio: false,
                    linkAudio: ''
                },

                {
                    id: 5,
                    url:'url(' + image1 + ')', 
                    description: "Ce livre retrace une année de résidence à l’unité de soin palliatif de la Tauvrais à Rennes. Vous y découvrirez ce qu’est une unité de soin palliatif, l’importance de l’équipe et de son esprit, la manière dont elle se forme et se soutient pour tenir face à ce contexte difficile. Vous y découvrirez également les patients et leurs questionnement de manière anonyme, et bien entendu ce qu’au bout du compte je suis venu bien malgré moi, y chercher.Ce livre de résidence, très esthétique, est accompagné de 4 photos couleurs au début et à la fin. De nombreuses photos noir et blanc, ainsi que de dessins. Un CD accompagné de son QR code vous permettra également d'écouter l'œuvre des portraits (durée : 23 minutes). Ces portraits ont été réalisés suite aux discussions entretenues avec les patients, comme pour laisser une trace de son passage. Disponible dès maintenant !",
                    title: ' Livre de résidence', 
                    price: 40, 
                    author:'', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Livre de résidence',
                    hasAudio: false,
                    linkAudio: ''
                },

                {
                    id: 6,
                    url:'url(' + image1 + ')', 
                    description: "Le leporello est un livre “accordéon” qui se déplie pour former une grande frise de 19 mètres de long ! Chaque page est indépendante et équipée d'œillets permettant ainsi de former des tronçons de la taille qui vous convient pour exposer. Le livre est d'ailleurs envoyé en page séparées, vous permettant de réaliser les tronçons qui vous conviennent le mieux. Le recto est identique à l’intérieur du livre de résidence et vous permet ainsi d’exposer au public le texte uniquement avec des images, en totalité ou en tronçons. Le recto est entièrement en noir et blanc. Le verso lui est entièrement réalisé d’images en couleurs. À la différence du livre qui en contient 8, vous avez ici 75 images permettant de plonger le public dans un monde d’images chatoyantes ! (cf photos de la page Résidence Révérences (USP Tauvrais). Disponible dès maintenant !", 
                    title: 'Livre de résidence en version leporello', 
                    price: 180, 
                    author:'', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Livre de résidence en version leporello',
                    hasAudio: false,
                    linkAudio: ''
                },

                {
                    id: 7,
                    url:'url(' + image1 + ')', 
                    description: "Ce livre vous plonge dans une année de résidence réalisée à l’EHPAD des maisons de la Touche à Rennes. Vous y comprendrez comment fonctionne une équipe d’EHPAD, les actions qu’elle effectue des simples aux plus ardues. Vous serez en prise directe avec leurs questionnements de manière à partager leur quotidien. Ce livre est agrémenté de photos, de dessins réalisés lors de cette année de résidence.  Un CD accompagné de son QR code est également disponible à la fin du livre. Vous y entendrez plusieurs œuvres pour trio à cordes de 4 à 5 minutes chacune. Elles seront jouées par le musiciens de l’orchestre national de Bretagne (ONB). En pré-commande seulement ! Disponible à partir de janvier 2025 ", 
                    title: 'Livre de résidence Mondes intérieurs (EHPAD Maison de la touche)', 
                    price: 40, 
                    author:'', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Livre de résidence Mondes intérieurs (EHPAD Maison de la touche)',
                    hasAudio: false,
                    linkAudio: ''
                },

                {
                    id: 8,
                    url:'url(' + image1 + ')', 
                    description: "Cette marche a été réalisée pour trois orchestres distincts : brass band, fanfare et harmonie. Elle représente nationalement les blessés de guerre de l’armée de Terre. L'œuvre est proposée ici dans ses trois versions. Elle est agrémentée d’un dessin de Claude Ribouillault en dernière page. Comptez 30 euros supplémentaires pour chaque partie séparée.", 
                    title: 'Marche des blessés de guerre. Version pour trois orchestres.', 
                    price: 70, 
                    author:'+ 30 euros pour chaque parties séparées si besoin.', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Marche des blessés de guerre. Version pour trois orchestres.',
                    hasAudio: false,
                    linkAudio: ''
                },

                {
                    id: 9,
                    url:'url(' + image1 + ')', 
                    description: "La marche des blessés de guerre vous est proposée ici en version piano. Elle est jouable pour un étudiant en fin de premier cycle.", 
                    title: 'Marche des blessés de guerre. Version pour piano solo.', 
                    price: 30, 
                    author:'', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Marche des blessés de guerre. Version pour piano solo.',
                    hasAudio: false,
                    linkAudio: ''
                },

                {
                    id: 10,
                    url:'url(' + image1 + ')', 
                    description: "L'œuvre est proposée avec parties séparées et électronique (sons pré-enregistrés) incluses. Elle prend le parti d’expliquer la guerre aux enfants à travers le récit d’un poilu de 1914. Ce dernier rencontre une petite fille, et la voyant seule, décide de s’en occuper. Cette dernière apprendra beaucoup de l’expérience du vieil homme, son rapport à la musique, à la vie, à la gestion des sons et des images qui blessent.", 
                    title: 'Refuge. Version pour grand ensemble et électronique.', 
                    price: 130, 
                    author:'', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Refuge. Version pour grand ensemble et électronique.',
                    hasAudio: false,
                    linkAudio: ''
                },

                {
                    id: 11,
                    url:'url(' + image1 + ')', 
                    description: "Refuge vous est proposée en version quatuor (violon, alto, violoncelle et flûte). Cette version similaire dans son déroulé à la première version pour grand ensemble vous permet une plus grande flexibilité lors des concerts. Elle est vendu avec parties séparées et partie électronique.", 
                    title: 'Refuge. Version pour quatuor et électronique.', 
                    price: 130, 
                    author:'', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Refuge. Version pour quatuor et électronique.',
                    hasAudio: false,
                    linkAudio: ''
                },

                {
                    id: 12,
                    url:'url(' + image1 + ')', 
                    description: "Endurance est un quatuor à cordes commandé par l’armée de Terre à destination de sa jeunesse. C’est une œuvre qui, comme son titre l’indique, vient puiser une énergie sur le temps long, qui met en exergue une forme de résistance intérieure face à l’adversité et à soi-même. La partition contient les parties séparées en 1ère et 4ème de couverture.", 
                    title: 'Endurance.', 
                    price: 130, 
                    author:'', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Endurance.',
                    hasAudio: false,
                    linkAudio: ''
                },

                {
                    id: 13,
                    url:'url(' + image1 + ')', 
                    description: "Estampie fait référence à une danse ancienne du 16ème siècle du même nom. Ici, elle est vue comme une danse charnelle en lien avec la danse de manière très proche. L'œuvre est vendue avec ses parties séparées.", 
                    title: 'Estampie.', 
                    price: 75, 
                    author:'', 
                    btnText: 'PRÉCOMMANDER',
                    mailText: 'Bonjour, je souhaite commander : Estampie.',
                    hasAudio: false,
                    linkAudio: ''
                },
            ];

            return { listElements, details, colorBackground, colorText, projectArchived, listArchivedProject};
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

    <Product  :listElements="listArchivedProject" :details="projectArchived">
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
            linear-gradient(rgba(000, 000, 000, 0.4), rgba(000, 000, 000, 0.4)),
            url("@/assets/img/commander/bandeau.png");
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
