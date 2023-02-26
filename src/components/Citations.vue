<script lang="ts">

    import { useRoute } from 'vue-router'

    export default {

        data() {
            return {
                show: false,
                citation: ''
            }
        },

        mounted(){

            const route = useRoute().path;

            if(route === '/'){
                const listCitations: string[] = ["l'éducation des femmes a bien changée : Avant, dès que l'on s'asseyait pour se reposer, on culpabilisait.","On aidait les gens et on aimait faire ça gratuitement. Pour rigoler, je disais qu’on ne faisait payer que le ticket modérateur !","L'écriture pour moi c'est une vrai passion, ça me fait du bien, ça m'aide à comprendre.","Cette femme, madame Rasquin, m'a donné le goût de l'écriture. Elle avait une patte plus courte que l'autre. ","Madame Rasquin était toujours très élégante. Elle portait des chapeaux un peu excentriques et colorés. Chapeautée et fière comme elle disait !","J'adore les papiers, et l'encre aussi !","C'est humiliant de demander quelque chose à quelqu'un vous savez.","Celui-là (un ouvrier) à force de parler, il aura la gueule usée et les bras tout neufs.","Par la fenêtre de ma chambre ici, à l’USP, je vois un ouvrier qui monte à la grue tous les matins. Je pense pas qu'il redescende dans la journée, car je ne le vois pas faire.","Qui je suis ? C’est très compliqué de se définir soi-même. Mais est-ce vraiment nécessaire ?","Cela fait partie des interrogations du moment d'essayer de savoir qui je suis ? Comment faire pour le savoir et combien il me reste de temps pour le savoir ?","J'écris pour comprendre qui je suis.","Je pense que je connais déjà la conclusion de mon histoire : En réalité, rien n'a d'importance.","Aujourd'hui très cher, c'est la journée de la joyeuse cueillette du superflu. Venez, discutons !","Pff, à votre jeune âge, on ne fait pas de ponction m'a-t-il dit (un médecin). Et bien il s'est bien trompé, et je lui en veux."," Ce qui est marrant avec le corps médical, c'est le nom qu'ils choisissent pour les traitements. Padawan par exemple est celui que j’ai eu, en référence à Star Wars... Ils se retrouvent à parler de choses très graves avec ce genre de vocabulaire.","T'aime la vie et tu chantonnes qu'on me disait, c'est toi qui nous donnera du bonheur dans la vie.", "Le manque d'amour ça tue. J'étais fêtarde, et j'ai donné du bonheur à tout le monde moi.","Qu'est-ce qu'un bon petit déjeuner ? Un petit déjeuner avec de bonnes questions. ", "J'ai besoin de maîtriser la situation dans laquelle je suis. Ne pas la subir.", "Je ne veux pas que mes amis et ma famille viennent voir un mourant. Je veux qu’ils me voient tel que je suis.","On récolte ce que l'on a semé dans la vie. Et moi, j'ai la chance d’avoir des amis et d'être très entouré.","J'ai géré toute la paperasse avant de mourir car c'est ma vie et c’est à moi de m’en occuper. C'est une plaie pour les autres quand ils doivent le faire.","Là où j'en suis il y a des hauts et des bas, mais je n'ai pas d'angoisses.", "Le pire dans un cancer c'est la souffrance, pas la mort.","Mourir, la belle affaire. Notre société n’est pas mature sur ce point. Il faut qu’elle apprenne, au travers de ses citoyens, à mieux accepter la mort.","J’espère vraiment être encore là quand vous aurez fini. Pour lire et écouter votre travail.", "J’ai combattu tout ce que j’ai pu, et là je ne peux plus. Ma maladie touche les os, je m’arrête de combattre. Les os, c’est la charpente du corps.", "Avoir une maladie incurable, c’est comme être dans un tourbillon.","J’ai fait les trois vaccins anti-Covid juste avant mon traitement anti-cancer. J’ai fait mon traitement anti-cancer en une semaine seulement, ça m’a achevé.", "Ce n’est pas évident pour vous de bosser avec des gens qui ne sont pas en super santé, non ?","L’une des quêtes de ma vie a été de retrouver le sentiment de l’enfance, cette bulle de bien-être sans responsabilités.","Il y avait des bombardements à Rennes pendant la guerre. J’étais petite et les sirènes retentissaient pour nous prévenir des bombardements. Plus elles étaient puissantes et plus cela signifiait que le bombardement allait être intense. On devait courir jusqu’à des tranchées installées place de Bretagne. Il y avait des grands arbres à l’époque, ce n’était pas comme aujourd’hui.","Un jour l’alarme a retenti et j’ai dû courir avec ma mère vers les tranchées pour nous protéger. Sur le chemin, j’ai perdu ma chaussure et ma mère m’a dit : « laisse la, ta chaussure. » J’étais petite et je me suis dit que si on pouvait abandonner une chaussure, cela voulait dire que c’était grave ce qui se passait. La première chose que j’ai fait en sortant de la tranchée a été de récupérer ma chaussure, et je l’ai retrouvée !","Devant l’inquiétude en ville, ma mère a décidé de partir en vélo pour trouver une maison en campagne. J’étais gardée à Rennes par ma grand-mère. Elle a trouvé un 1 pièce de 30 m2 dans lequel on vécut à six. La campagne a bien mieux nourri que la ville où nous étions tous rationnés. Il y avait du beurre, des œufs, de la viande. Je jouais là-bas avec mes frères et sœurs. On était ensemble et c’est tout ce qui comptait.", "Un jour la gestapo est venue à la maison pour attraper mon père, qui faisait partie de la résistance. Notre voisin, qui était également un collègue de mon père, a vu mon père au loin et ne lui a pas fait signe. Mon père a compris et est parti. Il n’est revenu qu’à la fin de la guerre en mai 44 à Rennes.","Je me souviens quand mon père est revenu de la guerre. C’était dans la pénombre. Par la fenêtre je l’ai vu arriver sur son vélo et je l’ai reconnu. Mais étrangement lorsqu’il est arrivé à la maison je ne l’ai pas reconnu. Je lui ai dit « bonjour monsieur ».", " Boulevard de la liberté il y avait des baraquements en guise d’école après la guerre. Je n’ai commencé l’école qu’à 6 ans, à l’école de la tour d’auvergne. ","Je n’ai jamais voulu être agricultrice, je voulais faire de l’espagnol. Cette langue est si belle, elle chante à mes oreilles. La vie c’est comme ça, on ne fait pas toujours ce que l’on souhaite.","J’adore mes petits poulets (enfants et petits-enfants), je suis complètement gaga. C’est un bonheur d’avoir des enfants et des petits-enfants.","J’adore mes petits-enfants, j’adore ma famille. Ca me bouffe de rester ici et de ne pas pouvoir les voir comme je le voudrais.","Je ne me suis pas nourri volontairement pour que le cancer ne se développe plus, mais il a continué son développement.", "Quand j’étais petite, je courais au coup de mes grands-parents quand je les voyais. Aujourd’hui la société est plus prude. Pourquoi, je me demande ? Cela me fait mal ce manque de tendresse.","Ma vie est finie, et ça ne me fait pas peur.","Mon père était un vrai bricoleur. Il a construit une petite maison de brique à mes six frères et sœurs quand nous étions petits. On se cachait toujours dedans et lui, il nous trouvait tout le temps."];
                this.citation = listCitations[Math.floor(Math.random()*listCitations.length)];
                this.show = true;

                // Effacer le message
                setTimeout(() => {
                    this.show = false;
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                    // Afficher tous les éléments
                    document.querySelector("body")?.classList.add('initialBody');
                    setTimeout(() => {
                        this.$emit('show');
                    }, 1500);
                }, 5000);
            } else {
                this.$emit('show');
                document.querySelector("body")?.classList.add('initialBody');
            }

            
        }
    }
</script>

<template>

    <div class="showCitations">
        <Transition name="citations">
            <p v-if="show"> {{ citation }}</p>
        </Transition>
    </div>

</template>

<style>

    .citations-enter-active {
        transition: all 1s ease-out;
    }

    .citations-leave-active {
        transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .citations-enter-from,
    .citations-leave-to {
        transform: translateY(20px);
        opacity: 0;
    }

    body{
        overflow: hidden;
    }

    .initialBody{
        overflow: initial !important;
    }

    .showCitations{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--white);
        font-size: 30px;
        width: 580px;
        text-align: center;
        font-family: var(--nycd);
        
    }

    @media screen and (max-width: 900px)  {
        .showCitations{
            width: 90%;
            text-align: center;
            font-size: 24px;
        }
    }
</style>
