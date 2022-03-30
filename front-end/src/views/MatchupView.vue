<template>
    <div>
        <div id="main">
            <h1>Matchups</h1>
            <p>The following information is meant to serve as a general guide to the metagame and how Cyber Dragons match up against them. I'm only one person, however, and there are new developments every day, so this list will change. It should go without saying, but I'm not the definitive voice or anything by any means, so don't just blindly believe me either.</p>
            <p>A +2 Matchup is a really good matchup. A -2 Matchup is an awful matchup. Everything else is inbetween.</p>
        </div>
        <MatchupList :matchups="matchups"/>
        <GithubFooter/>
    </div>
</template>

<script>
import GithubFooter from "../components/FooterGithub.vue"
import MatchupList from "../components/MatchupList.vue"
export default {
    name: 'MatchupView',
    components: {
        GithubFooter,
        MatchupList
    },
    computed: {
        matchups() {
            return this.$root.$data.matchups;
        }
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

    #main p {
        color: white;
        font-size: 2vw;
        font-family:fantasy;
        padding-left: 8%;
        padding-right: 8%;
    }      
</style>