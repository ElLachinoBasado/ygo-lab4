<template>
    <div>
        <div id="main">
            <h1>Cyber Dragon Cards</h1>
        </div>
        <GithubFooter/>
    </div>
</template>

<script>
import GithubFooter from "../components/FooterGithub.vue"
export default {
    name: 'CardView',
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
</style>