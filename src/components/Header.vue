<script lang="ts">
    import Citations from '@/components/Citations.vue';

    export default{
        components: {Citations},
        data() {
            return { 
                show: false,
                
            }
        },

        methods:{
            displayHeader(){
                this.show = true;
            }
        }
    }
</script>

<template>
    <section class="sectionShowMenu">

        <slot name="content">
            <Citations @show="displayHeader"></Citations>

                <div class="name-container">
                    <Transition name="header">
                        <div class="name" v-if="show">
                            <p>LOGO</p>
                            <h1>Thomas Menuet <br> présente</h1>
                        </div>
                    </Transition>
                </div>

                <div class="btn-container">
                    <Transition name="headerBtn">
                        <div class="btn" v-if="show">
                            <a href="#">Commander</a>
                            <h1>Thomas Menuet ?</h1>
                        </div>
                    </Transition>
                </div>
            </slot>
        
    </section>
</template>

<style>

    /* Animation */
        .header-enter-active {
            transition: all 1s ease-out;
        }

        .header-enter-from,
        .header-leave-to {
            transform: translateY(20px);
            opacity: 0;
        }

        /* Btn */
        .headerBtn-enter-active {
            transition: all 2s ease-out;
        }

        .headerBtn-enter-from,
        .headerBtn-leave-to {
            transform: translateY(20px);
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

    .btn-container .btn a{
        font-size: 30px;
        font-family: var(--nycd);
        text-decoration: none;
        background-color: var(--gold);
        text-align: center;
        margin-right: 50px;
        padding: 4px 30px;
        border: var(--white) solid 1px;
        color: var(--white);
    }
    
    .btn-container h1{
        font-size: 30px;
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
        font-size: 50px;
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


        .btn-container .btn,
        .name-container .name{
            flex-direction: column;  
        }

        .btn-container .btn a,
        .btn-container h1,
        .name-container .name p,
        .name-container h1{
            margin-right: initial;
            margin-left: initial;
            text-align: center;
        }

        /* Bouton en bas */
        .btn-container{
            top: 80%;
        }

        .name-container{
            top: 15%;
        }

        .btn-container .btn a{
            margin-bottom: 10%;
            font-size: 24px;
        }

        .btn-container h1{
            font-size: 24px;
        }
        
    }


</style>
