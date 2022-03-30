<template>
    <div>
        <div id="main">
            <h1>Cyber Dragon Strategy</h1>
            <img src = "Cyber Dragon.jpg">
            <br>
            <p>Something that I must establish before anything else; <em>Cyber Dragons love going second.</em> Every version of CyDra prefers to go second. Competitively, two versions of Cyber Dragon have been successful: "Standard" Cyber Dragon, which I've nicknamed "Bomb" Cyber Dragon, and "Trap" Cyber Dragon. </p>            
            <h2>Bomb CyDra</h2>
            <p>The goal of the bomb strategy is straightforward - break your opponent's board with powerful removal tools such as <span class = "fusion">Chimeratech Megafleet Dragon</span> before setting up viscious game ending heavy hitters like <span class = "fusion">Chimeratech Rampage Dragon</span> or <span class = "fusion">Cyber Twin Dragon</span>. This is often the strategy that works best in Master Duel, thanks to the fast-paced metagame without sideboarding. Most of the lists you see for Cyber Dragon are in fact "Bomb" lists. </p>
            <h2>Trap CyDra</h2>
            <p>It might seem counterintuitive for such an aggressive archetype of monsters like Cyber Dragons to be running trap cards, but one of the archetype's most powerful extenders is in fact a trap card. <span class = "trap">Cybernetic Overflow</span> is an amazing interruption and playmaking card that, when paired with removal cards like <span class = "fusion">Destroy Phoenix Enforcer</span> or <span class = "trap">Unending Nightmare</span>, can generate advantage and keep the engine going. Master Duel's faster paced meta might make this weaker than Bomb CyDra currently, but there are definitely meta matchups that Trap Cyber Dragon excels at. </p>
        </div>
        <GithubFooter/>
    </div>
</template>

<script>
import GithubFooter from "../components/FooterGithub.vue"
export default {
    name: 'StrategyView',
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
</style>