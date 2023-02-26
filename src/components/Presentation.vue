<script lang="ts">

    export default{
        
    }
</script>

<template>
    <section class="sectionPresentation">
        <div class="presentation">
            <h2><slot name="title"></slot></h2>
            <p><slot name="description"></slot></p>
            <slot name="downloadPress"><a href="">TELECHARGER DOSSIER DE PRESSE</a></slot>
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
        display: inline-block;
    }

    a:hover{
        background-color: var(--goldHover);
    }


    @media screen and (max-width: 900px)  {

        .presentation{
            width: 75%;
        }

        h2{
            font-size: 40px;
        }

        p{
            font-size: 16px;
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
