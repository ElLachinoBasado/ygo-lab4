<template>
    <div class = "main">
        <div class="matchups" v-for="matchup in matchups" :key="matchup.id">            
            <div class = "image">
                <img :src="'/Matchup/'+matchup.image">
            </div>
            <div class = "information">
                <h2>{{matchup.name}}</h2>
                <h3>Tier: {{matchup.tier}}</h3>
                <h3>Bomb CyDra: {{matchup.matchupbomb}}</h3>
                <h3>Trap CyDra: {{matchup.matchuptrap}}</h3>
            </div>
            <div class = "description">
                <p>Lachino's Comments: {{matchup.description}}</p>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    name: 'MatchupList',
    props: {
        matchups: Array
    },
}
</script>

<style scoped>
    .main {        
        display: flex;
        background-color: black;
        flex-direction: column;
        padding-bottom: 10%;
        margin-left: 3%;       
        margin-right: 3%; 
        max-width: 100%;
    }

    .matchups {
        display: flex;
        margin-left: 3%;
        margin-bottom: 3%;
    }

    .information{
        width: 30%;
    }

    .description{
        width: 35%;
        margin-left: 3%;
    }

    h2 {
        color: yellow;
        font-family: fantasy;
        font-size: 3vw;
    }

    h3 {
        color: white;
        font-size: 2vw;
        font-family:fantasy;
    }

    p {
        color: white;
        font-size: 1.5vw;
        font-family:fantasy;
    }
</style>