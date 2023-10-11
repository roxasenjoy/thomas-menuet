<script lang="ts">
    import Citations from '@/components/Citations.vue';

    export default{
        components: {
            Citations
        },


        data() {
            return { 
                show: false,
                
            }
        },

        methods:{

            displayHeader(){
                this.show = true;
            },

           

            
        }
    }
</script>

<template>
    <section class="sectionShowMenu" id="headerHomepage">
        <slot name="content">
            <Citations @show="displayHeader"></Citations>

                <div class="name-container">
                    <div class="name">
                        <Transition name="logo">
                            <img class="logo" v-if="show" alt="Logo Thomas Menuet" src="@/assets/img/logos/logoTransparent.png"/>
                        </Transition>
                        <Transition name="name"> <h1  v-if="show">Thomas Menuet <br> présente</h1></Transition>
                    </div>
                </div>

                <div class="containerVideo">
                    <Transition name="video">
                        <slot name="video" v-if="show"></slot>
                    </Transition>
                </div>

                <div class="btn-container">
                    <div class="btn">
                        <Transition name="commandBtn"><router-link v-if="show" :to="{ name: 'commander'}" id="command">Commander</router-link></Transition>
                        <Transition name="biographie"><router-link v-if="show" :to="{ name: 'biographie'}" id="nameThomas"><h1>Thomas Menuet ?</h1></router-link></Transition>
                    </div>
                </div>
        </slot>

    </section>
    
</template>

<style>


    /* Logo */

    .logo{
        height: 125px;
    }

    .logo-enter-active{
        transition: all 1s ease-out;
    }

    .logo-enter-from,
    .logo-leave-to {
        transform: translateY(-20px);
        opacity: 0;
    }

    /* name */
    .name-enter-active{
        transition: all 2s ease-out;
    }

    .name-enter-from,
    .name-leave-to {
        transform: translateY(-30px);
        opacity: 0;
    }

    /* commandBtn */
    .commandBtn-enter-active{
        transition: all 5s ease-out;
    }

    .commandBtn-enter-from,
    .commandBtn-leave-to {
        transform: translateY(-50px);
        opacity: 0;
    }

    /* biographie */
    .biographie-enter-active{
        transition: all 6s ease-out;
    }

    .biographie-enter-from,
    .biographie-leave-to {
        transform: translateY(-40px);
        opacity: 0;
    }

    .containerVideo{
        position: absolute;
        top: 51%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
    }

    .containerVideo iframe{
        width: 100%;
        height: 500px;
        border: var(--gold) solid 1px;
    }

    .video-enter-active{
        transition: all 5s ease-out;
    }

    .video-enter-from,
    .video-leave-to {
        transform: translateY(-50px);
        opacity: 0;
    }

    
    /********* Fin animations *********/

    .sectionShowMenu {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        position:relative;  
    }   

    /* Bouton en bas */
    .btn-container{
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }

    .btn-container .btn{
        display: flex;
        justify-content: center;
        align-items: center;  
    }

    .btn-container .btn #command{
        font-size: 24px;
        font-family: var(--nycd);
        text-decoration: none;
        background-color: var(--gold);
        text-align: center;
        margin-right: 50px;
        padding: 4px 30px;
        border: var(--white) solid 1px;
        color: var(--white);
    }

    .btn-container .btn #nameThomas{
        font-size: 24px;
        font-family: var(--nycd);
        text-decoration: none;
        text-align: center;
        margin-right: 50px;
        padding: 4px 30px;
        color: var(--white);
    }
    
    .btn-container h1{
        font-size: 24px;
        color: var(--white);
        font-family: var(--nycd);
        text-align: center;
        margin-left: 50px;
        border-bottom: solid var(--white) 1px;
    }

    /* Name en haut */
    .name-container{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }

    .name-container .name{
        display: flex;
        justify-content: center;
        align-items: center;
       
    }

    .name-container .name p{
        font-size: 40px;
        font-family: var(--nycd);
        margin-right: 50px;
        color: var(--white);
    }
    
    .name-container h1{
        color: var(--white);
        font-family: var(--nycd);
        line-height: 150%;
        letter-spacing: 0.2em;
        text-align: center;
        margin-left: 50px;
    }

    @media screen and (max-width: 900px)  {

        .logo{
            height: 50px;
        }

        .btn-container .btn,
        .name-container .name{
            flex-direction: column;  
        }

        .btn-container .btn #nameThomas,
        .btn-container .btn #command,
        .btn-container h1,
        .name-container .name p,
        .name-container h1{
            margin-right: initial;
            margin-left: initial;
            text-align: center;
        }

        /* Bouton en bas */
        .btn-container{
            top: 85%;
        }

        .name-container{
            top: 15%;
        }

        .btn-container .btn #nameThomas,
        .btn-container .btn #command{
            margin-bottom: 25px;
            font-size: 18px;
        }

        .btn-container .btn #nameThomas{
            margin-bottom: 0%;
        }

        .btn-container h1{
            font-size: 18px;
        }

        .containerVideo{
            top: 50%;
            width: 75%;
        }

        .containerVideo iframe{
            height: 300px;
            border: var(--white) solid 1px;
        }
        
    }

    @media screen and (max-width: 500px)  {
        .containerVideo{
            width: 85%;
        }

    }


</style>
