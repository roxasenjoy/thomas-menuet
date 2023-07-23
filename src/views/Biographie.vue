<script lang="ts">
    import Navbar from '@/components/Navbar.vue';
    import Header from '@/components/Header.vue';


     export default({
        components: {
            Navbar,
            Header
        },

        setup(){
            
        },

        mounted(){
            document.querySelector("body")?.classList.add('initialBody');
        },
    });
</script>

<template>

    <div style="background-color: var(--black);">
        <Header>

            <template v-slot:content>

                <div class="command__content">
                    <p class="command__title">BIOGRAPHIE</p>
                    <hr class="command__separation">
                    <p class="command__texte">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a class="command__btn" :href="' mailto:hello@hello.com \
                                ?subject=Détaillez votre projet \
                                &body= '">DÉTAILLEZ VOTRE PROJET</a>
                </div>
                

            </template>

        </Header>
    </div>

    
    <section class="sectionImage separation transition">
        <div class="text rightText">
            <div class="text">
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id dui libero. Donec congue magna vitae libero imperdiet consectetur. Fusce at porttitor est. Pellentesque condimentum pretium risus, ut accumsan augue feugiat nec. Nulla luctus sodales dolor eu efficitur. Ut porttitor erat et est efficitur dapibus. Maecenas rutrum cursus condimentum. Proin elit justo, iaculis vel odio ac, mattis euismod quam. Proin congue, neque fringilla mattis facilisis, lorem nisi dapibus metus, id egestas risus mauris ac justo. Aenean maximus libero eget lectus scelerisque, ac aliquet augue placerat. </p>                
            </div>
        </div>

        <div class="image">
            <img src="@/assets/img/biographie/1.jpg" alt="Photo de Thomas MENUET">
        </div>
    </section>

    <br>   

    <section class="sectionImage separation transition second">
        <div class="image secondImage">
            <img src="@/assets/img/biographie/1.jpg" alt="Photo de Thomas MENUET">
        </div>

        <div class="text leftText">
            <div class="text">
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id dui libero. Donec congue magna vitae libero imperdiet consectetur. Fusce at porttitor est. Pellentesque condimentum pretium risus, ut accumsan augue feugiat nec. Nulla luctus sodales dolor eu efficitur. Ut porttitor erat et est efficitur dapibus. Maecenas rutrum cursus condimentum. Proin elit justo, iaculis vel odio ac, mattis euismod quam. Proin congue, neque fringilla mattis facilisis, lorem nisi dapibus metus, id egestas risus mauris ac justo. Aenean maximus libero eget lectus scelerisque, ac aliquet augue placerat. </p>                
                <div id="gouterBtn">
                    <a href="" class="btnContact transition">Lorem ipsum</a>
                </div>
                
            </div>

        </div>
    </section>


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


    .sectionImage{
        width: 65%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    .sectionImage .text{
        flex: 0 0 70%;
        text-align: left;
    }

    .sectionImage .image{
        flex: 0 0 30%;
        text-align: center;
    }

    .leftText{
        padding-left: 100px;
    }

    .rightText{
        padding-right: 100px;
    }

    .separation{
        margin: 50px auto;
    }

    .sectionImage .image img{
        width: 400px;
        border: solid var(--gold) 2px;
    }

    .btnContact{
        background: var(--gold);
        color: var(--white);
        padding: 10px 40px;
        font-family: var(--ms-regular);
        text-decoration: none;

    }

    .btnContact:hover{
        background: var(--gold);
    }

    .sectionImage .text{
        text-align: left;
        line-height: 200%;
        color: var(--black);
        letter-spacing: 1px;
        font-size: 24px;
    }

    .sectionImage .text p{
        font-family: var(--ms-regular);
    }

    .sectionImage .text h2{
        font-size: 50px;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: var(--nycd);
    }

    .askDevis{
        background: var(--gold);
        color: var(--gold);
        font-size: 25px;
        font-family: var(--ms-regular);
        border-radius: 10px;
        text-decoration: none;
        padding: 20px 35px;
        text-align: center;
        margin: auto;
        z-index: 999;
        position: relative;
    }

    .askDevis:hover{
        background: var(--gold);
        color: var(--white);
    }

    @media all and (max-width: 900px) {
       
        .sectionImage .text p{
            margin: 10px 0;
        }

        .sectionImage{
            width: 85%;
            flex-direction: column;
        }

        .sectionImage.second{
            flex-direction: column-reverse;
        }

        .sectionImage .image img{width: 200px;}

        .rightText{
            padding: initial;
        }

        .leftText{
            padding: initial;
        }

        .elements h2{
            font-size: 40px;
        }

        .sectionImage .text{
            font-size: 16px;
        }

        .sectionImage .text h2{
            font-size: 30px;
        }

        .secondImage{
            margin-top: 50px;
        }

        #gouterBtn{
            text-align: center;
        }
        .askDevis{
            padding: 10px 15px;
            font-size: 20px;
        }
    }
</style>
