<template>
  <div>
    <div class="section columns"> <!--pour les marges de base -->
      <div class="column is-1-tablet is-2-desktop is-one-fifth-widescreen is-3-fullhd"></div><!--marges-->
      <div class="column">
        <div class="columns is-multiline">
        	<creation v-for="creation in creations" :key="creation.name" class="column is-one-third"></creation>
        </div>
      </div>
      <div class="column is-1-tablet is-2-desktop is-one-fifth-widescreen is-3-fullhd"></div><!--marges-->
    </div>
  </div>
</template>

<script>
	import Creation from './Creation.vue'
	export default {
		name: 'creation-grid',
		components: { Creation },
		data() {
			return {
				creations: [
					{ name: 'Banja Luka', imgurl: '../img/banjaluka.jpg'},
					{ name: 'Nissi Nila', imgurl: '../img/nissinila.jpg'},
					{ name: 'Vertikal', imgurl: '../img/vertikal.jpg'},
					{ name: 'Multicorps', imgurl: '../img/multicorps.jpg'}
				]
			};
		}
	}
</script>
