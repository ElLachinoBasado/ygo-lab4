<template>
    <div>
        <div id="main">
            <h1>Welcome to the Cyber Network!</h1>
            <img src = "Cyber Network.png">   
            <h2>What is this website?</h2>
            <p>This website is a fansite for Yu-Gi-Oh! Master Duel players who are interested in learning about the Cyber Dragon archetype. I am not interested in playing TCG or OCG currently, but Master Duel has really revitalized my interest in the game (it helps that it's F2P friendly!). On this website, you'll find information about Cyber Dragons and their strategies.</p>
            <h2>Why play Cyber Dragon?</h2>
            <p>I'll start by saying this: <em>Cyber Dragon is NOT a "meta" deck.</em> If you're looking for a top tier decklist, this is probably not the archetype for you. Cyber Dragon is, however, fun to me, and I personally recommend that you play them if you enjoy breaking boards and dealing lots of damage. Cyber Dragon has insane explosiveness, so matches with them always feel tense. It's never over until it's over with Cyber Dragons, and I find that to be really fun.</p>
            <h2>Why is it named Cyber Network?</h2>
            <p>Cyber Network, the trap card, is a very weak card that you shouldn't really play to win with. However, it's a super cool concept, and the name fits really well, so that's why I'm calling this website the Cyber Network. My vision is that this website will become a network for Cyber Dragon players to come together and learn, and who knows? Maybe one day, we'll win a world championship. It's about as likely as resolving the Cyber Network trap card, ha!</p>                     
        </div>
        <GithubFooter/>
    </div>
</template>

<script> 
import GithubFooter from "../components/FooterGithub.vue"
export default {
    name: 'HomeView',
    components: {
        GithubFooter
    }    
}
</script>

<style scoped>
    #main {
        align-items: center;
        background-color: black;
        display: flex;
        flex-direction: column;
        padding-bottom: 10%;
        margin-left: 3%;       
        margin-right: 3%; 
        max-width: 100%;
    }

    #main h1 {
        color: yellow;
        font-family: fantasy;
        font-size: 4vw;
    }

    #main h2 {
        color: yellow;
        font-size: 2vw;
        font-family:fantasy;
        padding-left: 8%;
        padding-right: 8%;
    }

    #main p {
        color: white;
        font-size: 2vw;
        font-family:fantasy;
        padding-left: 8%;
        padding-right: 8%;
    }

    #main img {
        max-width: 80%;
        height: auto;
    }
</style>