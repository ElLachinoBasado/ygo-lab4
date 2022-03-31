<template>
<div class="home">
  <section class="image-gallery">
    <div class="image" v-for="item in items" :key="item.id">
      <img :src="item.path" />
      <div class="text">
        <h2>{{item.title}}</h2>
        <p>{{item.description}}</p>
      </div>      
    </div>
  </section>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'ImageGallery',
  data() {
    return {
     items: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>

    .image {
        display: flex;
        flex-direction: row;
    }

    img {
        max-width: 300px;
    }

    .home {
        background-color: black;
        display: flex;
        flex-direction: column;
        margin-left: 3%;       
        margin-right: 3%; 
        padding-left: 5%;
        padding-bottom: 10%;
        max-width: 100%;
    }

    .text {
        margin-left: 3%;
    }
    h2 {
        color: yellow;
        font-family: fantasy;
        font-size: 3vw;
    }

    p {
        color: white;
        font-size: 1.5vw;
        font-family:fantasy;
    }
</style>