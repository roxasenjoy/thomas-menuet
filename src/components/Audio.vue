<script lang="ts">

    export default {

        props: ['listAudios'],

    }
</script>

<template>

    <section class="audio__container">

        <p class="audio__section_title">ÉCOUTER DÈS MAINTENANT</p>

        <div class="audio__list">
            <div class="audio__item" v-for="(item, index) in listAudios[0]">

                <div class="audio__title">
                    <a :href="item.linkAudio" class="audio_playBtn" target="_blank">
                        <i class="fa-solid fa-circle-play product__audio_icon"></i> <!-- Design dans Product -->
                    </a>
                    <div class="audio__details">
                        <p class="audio__title">{{ item.title }}</p>
                        <p class="audio_instrument">{{ item.instruments }}</p>
                    </div>
                   
                </div>

                <p class="audio__time">{{ item.time }}</p>
            </div>

            <!-- Message pour afficher si les musiques sont en cours de création ou pas -->
            <div class="" v-if="listAudios[1]">
                <p class="audio__inCreation">En cours de création</p>
            </div>

        </div>

    </section>

</template>

<style scoped>

    .audio__inCreation{
        text-align: center;
        padding: 20px 45px;
    }

    .audio_instrument{
        font-size: 16px;
        margin-top: 5px;
    }

    .audio__title{
        font-weight: 600;
    }

    .audio_playBtn{
        margin-right: 30px;
    }

    .audio__title{
        display: flex;
        align-items: center;
    }

    .audio__item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 45px;
        border-bottom: solid var(--white) 1px;
    }

    .audio__item:last-child{
        border-bottom: initial;
    }

    .audio__list{
        background-color: var(--black);
        width: 65%;
        color: var(--white);
        border: solid 2px var(--gold);
        font-family:var(--ms-regular);
        margin: 50px auto;
        font-size: 20px;
    }

    .audio__section_title{
        font-size:40px;
        font-family: var(--nycd);
        text-align: center;
        padding: 75px 0 0 0;
    }

    @media screen and (max-width: 900px)  {

        .audio__section_title{
            font-size: 30px;
        }
        
        .audio__item{
            padding: 20px
        }
        .audio__list{
            width: 95%;
            font-size: 16px;
        }
    }



</style>
