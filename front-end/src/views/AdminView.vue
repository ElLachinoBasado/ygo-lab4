<template>
    <div>
        <div id="main">
          <h1>Add new matchups</h1>
          <div class = "matchupupload">
            <div class = "newupload">
              <input v-model="mname" placeholder="Deck Name">
              <input v-model="tier" placeholder="Deck Tier">
              <input v-model="bombrating" placeholder="Bomb CyDra Rating">                                                                   
              <input v-model="traprating" placeholder="Trap CyDra Rating">    
              <textarea v-model="description" placeholder="Description"></textarea>    
              <input type="file" name="photo" @change="fileChanged" class = "fileselector">
              <button @click="upload">Upload</button>
            </div>
            <div class = "mostrecentupload" v-if="addMatchup">
              <div class = "mostrecentuploadimage">
                <img :src="addMatchup.path" />
              </div>
            </div>
          </div>
          <h1>Edit / Delete Matchups</h1>
          <div class = "matchupeditdelete">
            <div class="form">
              <input v-model="findName" placeholder="Search">
              <div class="suggestions" v-if="suggestions.length > 0">
                <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectMatchup(s)">{{s.name}}</div>
              </div>              
            </div>
            <div class="upload" v-if="findMatchup"> 
              <input v-model="findMatchup.name">
              <input v-model="findMatchup.tier">
              <input v-model="findMatchup.bombrating">
              <input v-model="findMatchup.traprating">
              <textarea v-model="findMatchup.description"></textarea>
              <img :src="findMatchup.path" />
            </div>            
            <div class="actions" v-if="findMatchup">
              <button @click="deleteMatchup(findMatchup)">Delete</button>
              <button @click="editMatchup(findMatchup)">Edit</button>        
            </div>            
          </div>
        </div>
        <GithubFooter/>
    </div>
</template>

<script>
import GithubFooter from "../components/FooterGithub.vue";
import axios from 'axios';
export default {
  name: 'AdminView',
  components: {
    GithubFooter
  },  
  data() {
    return {
      mname: "",
      file: null,
      tier: "",
      bombrating: "",
      traprating: "",
      description: "",
      addMatchup: null,
      matchups: [],
      findName: "",
      findTier: "",
      findBombRating: "",
      findTrapRating: "",
      findDescription: "",
      findMatchup: null,
    }
  },
  computed: {
    suggestions() {
      let matchups = this.matchups.filter(matchup => matchup.name.toLowerCase().startsWith(this.findName.toLowerCase()));
      return matchups.sort((a, b) => a.title > b.title);
    }
  },
  created() {
    this.getMatchups();
  },
  methods: {
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name);
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/matchups', {
          name: this.mname,
          path: r1.data.path,
          tier: this.tier,
          bombrating: this.bombrating,
          traprating: this.traprating,
          description: this.description
        });
        this.addMatchup = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getMatchups() {
      try {
        let response = await axios.get("/api/matchups");
        this.matchups = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    selectMatchup(matchup) {
      this.findName = "";
      this.findDescription = "";
      this.findMatchup = matchup;      
    },
    async deleteMatchup(matchup) {
      try {
        await axios.delete("/api/matchups/" + matchup._id);
        this.findMatchup = null;
        this.getMatchups();
        return true;
      } catch (error) {
        console.log(error);
      }
    },    
    async editMatchup(matchup) {
      try {
        await axios.put("/api/matchups/" + matchup._id, {
          name: this.findMatchup.name,
          path: matchup.path,
          tier: this.findMatchup.tier,
          bombrating: this.findMatchup.bombrating,
          traprating: this.findMatchup.traprating,
          description: this.findMatchup.description
        });
        this.findMatchup = null;
        this.getMatchups();
        return true;
      } catch (error) {
        console.log(error);
      }
    },    
  }
}
</script>

<style scoped>
    #main {
      align-items: flex-start;
      background-color: black;
      display: flex;
      flex-direction: column;
      padding-bottom: 10%;
      margin-left: 3%;       
      margin-right: 3%; 
      max-width: 100%;
    }

    #main h1 {
      margin-left: 5%;
      color: yellow;
      font-family: fantasy;
      font-size: 3vw;
    }

    .matchupupload {
      display: flex;
      flex-direction: row;
      margin-left: 6%; 
    }
      .newupload {
        display: flex;
        flex-direction: column;
      }
        .fileselector {
          color: yellow;
        }
        .newupload input, .newupload textarea {
          margin-bottom: 1.5%;
        }
      .mostrecentupload {
        display: flex;
        flex-direction: row;
        margin-left: 3%;
      }
        .mostrecentuploadimage {
          max-width: 200px;
        }

    .matchupeditdelete {
      margin-left: 6%;
    }

    .suggestion {
      color: white;
      background-color: gray;
      text-align: center;
    }
    .suggestion:hover {
      background-color: white;
      color: black;
    }

    .upload {
      margin-top: 1%;
      display: flex;
      flex-direction: column;
    }

    .upload img {
      max-width: 100px;
      align-self: center;
    }

    .actions {
      align-self: center;
    }
</style>