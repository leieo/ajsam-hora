<template>
	<div class="box is-info">
		<p>
			<slot></slot>
		</p>
	</div>
	
</template>

<script>
export default {
}
</script>

<style>
.box {
	background-color: grey;
	padding: 10px;
	border: 1px solid black;
	margin-top: 20px;
}
.is-info {
	background-color: lightblue;
}
	
</style>