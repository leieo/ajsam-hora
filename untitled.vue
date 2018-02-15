//TESTS CREATION
<template>
	<div>
	    <figure class="image is-3by2 level framed">
			<!-- add class "is-invisible" on image <img> or title <p> -->
			<!-- change title aspect (use h3, h4, ... ?) -->
			<!-- :src="src" / props / v-bind / communication entre composants ...-->
			<img src="../img/nissinila.jpg" class="is-overlay level-item" v-model="image">
			<h3 class="is-overlay has-text-centered level-item" :class"clstxt()">{{ name }}</h3>
	    </figure>
	</div>
</template>

<script>
export default {
	// props: src {type: String, default: ...}
	data() {
		return {
			name: 'Nissi Nila'
		};
	},
  methods: {
    toggleImgTxt() {
      this.class
    }
  }
}
</script>

<style>

h3 {
  color: black;
  font-family:'Waiting for the Sunrise', Helvetica, Arial, sans-serif;
  font-size: 24px;
  letter-spacing: 7px;
}

.framed {border: 2px solid black;}
</style>