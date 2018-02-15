<template>
	<div>
	    <figure class="image is-3by2 level framed" @mouseover="shwtxt" @mouseout="shwimg">
			<slot></slot>
	    </figure>
	</div>
</template>

<script>
export default {
  methods: {
    shwtxt () {
    	console.log('directive "shwtxt" envoyée')
    	this.$emit('shwtxt')
    },
    shwimg () {
    	console.log('directive "shwimg" envoyée')
    	this.$emit('shwimg')
    }
  }
}
</script>

<style>

.framed {border: 2px solid black;}

</style>