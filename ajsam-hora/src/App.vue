<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div class="section">
      <creation-grid>
      </creation-grid>
    </div>
    <!--
    <div class="section columns">
      <div class="column is-4"></div>
      <div class="column is-4">
        <creation>
          <img src="./img/banjaluka.jpg" class="is-overlay">
          <h3 class="is-overlay has-text-centered level-item">Pouet Nila</h3>
        </creation>
      </div>
    </div>
    -->
  </div>
</template>

<script>
import Message from './components/Message.vue'
import Creation from './components/Creation.vue'
import CreationGrid from './components/CreationGrid.vue'
export default {
  name: 'app',
  components: { Message, Creation, CreationGrid },
  data () {
    return {
      msg: 'Hello World',
      title: 'Ajsam horA',
      projectTitle: 'Multicorps'
    }
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}

h1 {
  text-align: left;
  font-family: 'Cabin Sketch', Helvetica, Arial, sans-serif;
  font-size: 55px;
  letter-spacing: 3px;
  padding: 30px;
}

a {
  color: #42b983;
}

.reveal {background-color: grey;}
.reveal1 {background-color: lightblue;}
.reveal2 {background-color: yellow;}

.framed {border: 2px solid black;}

.is-white {background-color: #FAFAD2;}
.is-sky {background-color: #a0fefb;}
.is-blue {background-color: #a6b1f7;}
.is-green {background-color: #a6f7c3;}
.is-yellow {background-color: #fcfd9e;}
.is-orange {background-color: #fdd99e;}
.is-red {background-color: #f7bca6;}
</style>
