<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="./assets/CyDra Core.jpg">
          <h1>Home</h1>
        </router-link> 
      </div>
      <div id="side">
        <div class = "side-link">
          <router-link to="/strategy">
            <h2>Strategy</h2>
          </router-link>
        </div>
        <div class = "side-link">
          <router-link to="/matchups">
            <h2>Matchups</h2>      
          </router-link>
        </div>
        <div class = "side-link">
          <router-link to="/admin">
            <h2>Admin</h2>      
          </router-link>
        </div>
      </div>     
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
  background-color: gray;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "brand side";
  margin-right: 3%;
  margin-left: 3%;
  background-color: black;
}

#menu a {
  color: white;  
  font-family: fantasy;
  font-size: 1.2vw; 
  text-align: center;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: flex-start;
  margin-left: 12%;
  margin-top: 8%;  
}

img {
  max-width: 80%;
  height: auto;  
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

.side-link {
  margin-right: 5%;
}
</style>
