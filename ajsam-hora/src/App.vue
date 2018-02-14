<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div class="section columns">

      <div class="column is-1-tablet is-2-desktop is-one-fifth-widescreen is-3-fullhd reveal">i</div>

      <div class="column">

        <div class="columns is-multiline">
          
          <div class="column is-one-third reveal1">
            <figure class="image is-3by2 is-red level framed"></figure>
          </div>

          <div class="column is-one-third reveal2">
            <figure class="image is-3by2 is-blue level framed"></figure>
          </div>

          <div class="column is-one-third reveal1">
            <figure class="image is-3by2 is-orange level framed"></figure>
          </div>

          <div class="column is-one-third reveal2">
            <figure class="image is-3by2 level framed"></figure>
          </div>

          <div class="column is-one-third reveal1">
            <figure class="image is-3by2 level framed"></figure>
          </div>

          <div class="column is-one-third reveal2">
          </div>
        </div>


      </div>

      <div class="column is-1-tablet is-2-desktop is-one-fifth-widescreen is-3-fullhd reveal">i</div>

    </div>

    <div class="columns">

      <div class="column is-one-third">
        <project>Multicorps</project>
      </div>
      <div class="column is-one-third">
        <project>Vertikal</project>
      </div>
      <div class="column is-one-third">
        <project>NissiNila</project>
      </div>

    </div>

    
<!--
    <h3>{{ projectTitle }}</h3>
    <h4>{{ memberName }}</h4>
    <br>

    <h3>{{ projectTitle }}</h3>
    <h2>{{ memberName }}</h2>
    <br>

    <h5>{{ projectTitle }}</h5>
  -->

    <button class="button">test</button>
  </div>
</template>

<script>
import Project from './components/Project.vue';
export default {
  name: 'app',
  components: { Project },
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
