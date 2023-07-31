
<script lang="ts">
    import { defineComponent } from 'vue';
    import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
    
  
    export default defineComponent({

        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
        },

        props: ['listImgEnigmes', 'listElementsEnigme'],

        data() {
            return {
                elements: this.listElementsEnigme,
                detailsElements: this.listImgEnigmes,
                previousElement: 0
            }
        },

        mounted(){
            this.detailsElements = this.detailsElements[0];
        },


        methods: {
            displayNewElement(index: number){
                if(this.elements[index].active === 0){
                    this.elements[index].active = 1;
                    this.elements[this.previousElement].active = 0;
                    this.previousElement = index;
                    this.detailsElements = this.listImgEnigmes[index];
                }

            }

        }

    })
</script>

<template>

   <section class="enigme__container">
        <div class="enigme__content">
            <div class="enigme__left">

                <div class="enigme__image" :style="{ backgroundImage: detailsElements.url }"></div>

                <div class="contentItems">
                    <div v-for="(element, index) in elements">
                        <div 
                            @click="displayNewElement(index)"
                            class="selectionPoint"       
                            :class="{ 
                                active: element.active === 1 ,
                                nonActive: element.active === 0,
                                disabled: element.active === -1
                            }"
                        >
                        </div>
                    </div>
                </div>
            </div>

            <div class="enigme__right">
                <p class="enigme__title">Les dix énigmes mathématico-musicales</p>
                <p class="enigme__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis suscipit ornare. Morbi sed urna porttitor, bibendum est sit amet, commodo nulla. Nullam interdum sed nunc ac sollicitudin. Vivamus dictum ante vitae fringilla pellentesque. Ut sollicitudin, diam ut rhoncus venenatis, nibh enim aliquet odio, sed volutpat erat turpis sit amet eros.</p>
                <a href="/enigmes.zip" download class="enigme__btn">TELECHARGER LES ÉNIGMES</a>
            </div>
        </div>
        
   </section>

    
</template>
  
<style scoped>

    .enigme__right{
        padding: 50px;
    }

    .enigme__btn{
        background: var(--gold);
        padding: 10px 45px;
        text-decoration: none;
        color: var(--white);
        white-space: nowrap;
    }

    .enigme__description{
        padding: 25px 0 50px 0;
        line-height: 150%;
    }

    .enigme__title{
        font-family: var(--nycd);
        font-size: 40px;
    }

    .enigme__image{
        width: 424px;
        margin: auto;
        height: 600px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        margin-bottom: 25px;
        box-shadow: 0px 0px 10px var(--gold);
    }

    .enigme__content{
        width: 75%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .enigme__container{
        background-color: var(--black);
        color: var(--white);
        padding: 100px 0;
        font-size: 20px;
        font-family: var(--ms-regular);
    }

    /* Pagination */
    .contentItems{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .selectionPoint{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin: 20px;
        cursor: pointer;
    }

    .active{background-color: var(--gold);}
    .nonActive{background-color: var(--black); border: solid 1px var(--gold)}
    .disabled{background-color: var(--grey); cursor: not-allowed;}

    .active:hover,
    .nonActive:hover,
    .product__btn:hover{
        background: var(--goldHover);
    }

    @media screen and (max-width: 1240px)  {
        .enigme__image{
            width: 350px;
            height: 400px;
        }

        .enigme__description{
            font-size: 18px;
        }
    }

    @media screen and (max-width: 900px)  {

        .enigme__content{
            width: 90%;
            flex-direction: column-reverse;
        }

        .enigme__left{
            width: 100%;
        }

        .enigme__right{
            padding: 0px 0 50px 0;
        }

        .enigme__title{
            font-size: 30px;
            text-align: center;
        }

        .enigme__description{
            font-size: 16px;
        }

        .enigme__btn{
            font-size: 16px;
            white-space: initial;
            display: block;
            text-align: center;
        }

        .enigme__image{
            width: 100%;
            height: 475px;
        }

        .contentItems{
            flex-wrap: wrap;
        }

    }

</style>
