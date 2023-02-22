<script lang="ts">
export default {

    methods: {

        displayMenu() {

            const hamburger = document.querySelector(".hamburger");
            const navLinks = document.querySelector(".nav-links");
            const links = document.querySelectorAll(".nav-links li");

            navLinks?.classList.toggle("open");
            links.forEach(link => {
                link.classList.toggle("fade");
            });

            //Hamburger Animation
            hamburger?.classList.toggle("toggle");
        },
    }

}
</script>

<template>
    <nav>

        <div class="hamburger" @click=" displayMenu()">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Projets archivés</a></li>
            <li><a href="#">Biographie</a></li>
            <li><a href="#">Commander</a></li> <!-- A changer avec un template -->
            <li><a></a></li>
        </ul>
    </nav>
</template>

<style scoped>

*{
    margin: 0;
    padding: 0;
    color: var(--white);
    font-family: var(--nycd);
    letter-spacing: 1px;
    font-weight: 300;
}

body{
    overflow-x: hidden;
}

nav{
    height: 4.5rem;
    width: 100vw;
    background-color: var(--black);
    box-shadow: 0 3px 20px var(--black);
    display: flex;
    position: fixed;
    z-index: 10;
    justify-content:center;
}

/*Styling Links*/
.nav-links{
    display: flex;
    list-style: none; 
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
}
.nav-links li a{
    text-decoration: none;
    margin: 0 50px;
}

.nav-links li a:hover {
    color: var(--gold);
}
.nav-links li {
    position: relative;
}
.nav-links li a::before {
    content: "";
    display: block;
    height: 1px;
    width: 0%;
    background-color: var(--gold);
    position: absolute;
    transition: all ease-in-out 250ms;
    margin-top: 20px;
    left: 0px;
}

.nav-links li a:after{
    content: "";
    display: block;
    height: 35px;
    width: 1px;
    background-color: var(--white);
    position: absolute;
    left: -50px;
    top: -7.5px;
}
.nav-links li a:hover::before{
    width: 100%;
}


/*Styling Hamburger Icon*/
.hamburger div{
    width: 30px;
    height:3px;
    background: var(--white);
    margin: 5px;
    transition: all 0.3s ease;
}
.hamburger{
    display: none;
}

/*Stying for small screens*/
@media screen and (max-width: 900px){
    nav{
        position: fixed;
        z-index: 3;
    }
    .hamburger{
        display:block;
        position: absolute;
        cursor: pointer;
        right: 5%;
        top: 50%;
        transform: translate(-5%, -50%);
        z-index: 2;
        transition: all 0.7s ease;
    }
    .nav-links{
        position: fixed;
        background: #131418;
        height: 100vh;
        width: 100%;
        flex-direction: column;
        clip-path: circle(50px at 90% -20%);
        -webkit-clip-path: circle(50px at 90% -10%);
        transition: all 1s ease-out;
        pointer-events: none;
    }
    .nav-links.open{
        clip-path: circle(1000px at 90% -10%);
        -webkit-clip-path: circle(1000px at 90% -10%);
        pointer-events: all;
    }
    .nav-links li{
        opacity: 0;
    }
    .nav-links li:nth-child(1){
        transition: all 0.5s ease 0.2s;
    }
    .nav-links li:nth-child(2){
        transition: all 0.5s ease 0.4s;
    }
    .nav-links li:nth-child(3){
        transition: all 0.5s ease 0.6s;
    }
    .nav-links li:nth-child(4){
        transition: all 0.5s ease 0.7s;
    }
    li.fade{
        opacity: 1;
        padding: 25px 0;
    }

    .nav-links li.fade a{
        text-decoration: none;
        margin: 0px;
        font-size: 26px;

    }

    /* Séparation des sections */
    .nav-links li.fade a:after{
        height: 0px;
    }

    .nav-links li a::before {
        margin-top: 35px;
    }
}



  

/*Animating Hamburger Icon on Click*/
.toggle .line1{
    transform: rotate(-45deg) translate(-5px,6px);
}
.toggle .line2{
    transition: all 0.7s ease;
    width:0;
}
.toggle .line3{
    transform: rotate(45deg) translate(-5px,-6px);
}

</style>