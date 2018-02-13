<template>
	<div>
		<div class="frame">
		    <h3>
		    	<slot></slot>
		    </h3>
		</div>
	    <h2>{{ memberName }}</h2>
	</div>
</template>

<script>
export default {
	data() {
		return {
			memberName: 'Sandie Brichler'
		}
	}
}
</script>

<style>
	
h2 {
  font-family: 'Nova Mono', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 4px;
}

h3 {
  font-family:'Waiting for the Sunrise', Helvetica, Arial, sans-serif;
  font-size: 32px;
  letter-spacing: 10px;
}

h4 {
  font-family: 'Bungee Hairline', Helvetica, Arial, sans-serif;
  word-spacing: 10px;
  font-size: 18px;
}

h5 {
  font-family: 'Special Elite', Helvetica, Arial, sans-serif;
  font-size: 25px;
  letter-spacing: 8px;
}

.frame  {
  border: 1px solid black;
  padding: 50px 50px;
  margin: 16px;
}
</style>

