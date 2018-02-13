<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div class="section columns">
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
  font-family: 'Cabin Sketch', Helvetica, Arial, sans-serif;
  font-size: 55px;
  letter-spacing: 5px;
  padding: 30px;
}


a {
  color: #42b983;
}
</style>
