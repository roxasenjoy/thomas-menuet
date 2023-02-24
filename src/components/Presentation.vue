<script lang="ts">

    export default{
        
    }
</script>

<template>
    <section class="sectionPresentation">
        <div class="presentation">
            <h2>RÉSIDENCE À L’IRMAR</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis suscipit ornare. Morbi sed urna porttitor, bibendum est sit amet, commodo nulla. Nullam interdum sed nunc ac sollicitudin. Vivamus dictum ante vitae fringilla pellentesque. Ut sollicitudin, diam ut rhoncus venenatis, nibh enim aliquet odio, sed volutpat erat turpis sit amet eros.</p>
            <a href="">Dossier de presse </a>
        </div>
    </section>
</template>

<style>

    .sectionPresentation{
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 70vh;
        position: relative;
    }

    @media screen and (max-width: 900px)  {

        .sectionPresentation{
            height: 90vh;
        }

    }

</style>
<style scoped>

    .presentation{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 50%;
    }

    h2{
        font-family: var(--nycd);
        font-size: 54px;
        color: var(--white);
    }

    p{
        font-size: 24px;
        font-family: var(--ms-regular);
        color: var(--white);
        margin: 25px 0 50px 0;
      
    }

    a{
        color: var(--white);
        background: var(--gold);
        font-family: var(--ms-regular);
        padding: 10px 40px;
        font-size: 18px;
        margin-top: 15px;
        text-decoration: none;
        border: solid 1px var(--white);
    }


    @media screen and (max-width: 900px)  {

        .presentation{
            width: 75%;
        }

        h2{
            font-size: 40px;
        }

        p{
            font-size: 18px;
            margin: 15px 0 40px 0;
        }

        a{
            padding: 10px 40px;
            font-size: 18px;
            margin-top: 15px;
            text-decoration: none;
            border: solid 1px var(--white);
        }

    }
</style>
