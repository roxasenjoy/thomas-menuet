
<script lang="ts">
  import { defineComponent } from 'vue';
  
    export default defineComponent({

        props: ['listElements', 'details', 'colorBackground', 'colorText'],

        data() {
            return {
                elements        : this.listElements, // Récupération props - HomeView
                detailsElements : this.details,
                previousElement : 0,
                colorBackground : this.colorBackground ? this.colorBackground : 'var(--black)',
                colorText       : this.colorText ? this.colorText : 'var(--white)',
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
                    this.detailsElements = this.details[index]
                }
            }

        }
    })
</script>

<template>
    <div class="productContainer" :style="{backgroundColor: colorBackground, color: colorText}">

        <h4 :style="{color: colorText}"> <slot slot name="title">PARTITIONS</slot></h4>

        <div class="contentContainer">
            <div class="imageProduct" :style="{ backgroundImage: detailsElements.url }"></div>

            <div class="informationsProduct">
                <!-- Informations principales -->
                <div class="product">
                    
                    <div class="product__content" :style="{color: colorText}">
                        <div class="product__audio__title">
                            <a class="product__audio" :href="detailsElements.linkAudio" v-if="detailsElements.hasAudio" target="_blank">
                                <i class="fa-solid fa-circle-play product__audio_icon"></i>
                            </a>
                            <h3 class="product__title">{{detailsElements.title}}</h3>
                        </div>
                        <p class="product__price">{{detailsElements.price }}€ </p>
                    </div>

                    <p class="product__author" :style="{color: colorText}">{{ detailsElements.author }}</p>
                </div>

                <!-- Description -->
                <p class="product__description" :style="{color: colorText}">{{ detailsElements.description }}</p>

                <a :href="' mailto:hello@hello.com \
                            ?subject=COMMANDE - ' + detailsElements.title + ' à ' + detailsElements.price +'€ \
                            &body=Un nouveau client souhaite commander :' + detailsElements.title + ' à ' + detailsElements.price +'€'" 
                    class="product__btn"> {{ detailsElements.btnText }}
                </a>
                
            </div>

        </div>

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

    
</template>
  
<style scoped>


    h4{
        font-size: 40px;
        color: white;
        font-family: var(--nycd);
        text-align: center;
        padding: 50px;
    }

    .contentContainer{
        width: 75%;
        margin: auto;
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        padding: 50px;
    }

    .imageProduct{
        width: 300px;
        height: 500px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        flex: 0.4;
        box-shadow: 0px 0px 10px var(--gold);
    }

    .informationsProduct{
        font-size: 18px;
        font-family:var(--ms-regular);
        color: var(--white);
        line-height: 150%;
        flex: 0.6;
        padding: 50px 50px 50px 100px;
    }

    .product{
        margin-bottom: 30px;
    }

    .product__content{
        display: flex;
        justify-content: space-between;
        align-items: CENTER;
        
    }

    /* Audio + Title + Price */
    .product__audio__title{
        display: flex;
        align-items: center;
    }

    .product__audio{
        margin-right: 20px;
    }

    

    .product__title,
    .product__price{
        font-size: 26px;
        font-family: var(--ms-regular);
        font-weight: 900;
    }

    .product__author{
        font-size: 16px;
        font-family: var(--ms-italic);
        color: var(--grey);
    }

    /*********************************/
    .product__description{
        font-size: 18px;
        line-height: 175%;
        font-family: var(--ms-regular);
        margin-bottom: 70px;
    }

    /*********************************/

    .product__btn{
        background: var(--gold);
        color: var(--white);
        font-size: 20px;
        text-decoration: none;
        padding: 15px 40px;
        font-weight: 500;
        transition: transform .2s; /* Animation */
        white-space: nowrap;
    }

    /*********************************/



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
        .contentContainer{
            width: 95%;
        }

        .informationsProduct{
            font-size: 16px;
            padding: 50px 0px 50px 50px;
        }
    }

    @media screen and (max-width: 900px)  {

        h4{
            font-size: 30px;
        }

        .contentContainer{
            flex-direction: column;   
            padding: 20px 0;
        }

        .informationsProduct{
            font-size: 16px;
            padding: 50px 0px 50px 0px;
        }

        .imageProduct{
            width: 100%;
            height: 400px;
            flex: initial;
        }



        .product__description{
            font-size: 16px;
        }

        .product__title,
        .product__price{
            font-size:20px;
        }

        .product__author{
            font-size: 14px;
        }

        .product__btn{
            font-size: 18px;
            white-space: initial;
            display: block;
            text-align: center;
        }

        .product__price{
            margin-left: 15px;
        }
    }


</style>

<style>

    .productContainer{
        padding: 175px 0 50px 0;
        background-color: var(--black);
        color: var(--white);
    }

    .product__audio_icon{
        font-size: 40px;
        color: var(--gold);
    }

    .product__audio_icon:hover{
        color: var(--goldHover);
    }

</style>