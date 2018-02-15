<template>
  <div>
    <div class="section columns"> <!--pour les marges de base -->
      <div class="column is-1-tablet is-2-desktop is-one-fifth-widescreen is-3-fullhd"></div><!--marges-->
      <div class="column">
        <div class="columns is-multiline">
        	<creation v-for="creation in creations" :key="creation.name" class="column is-one-third" @shwtxt="showText" @shwimg="showImage">
		        	<!-- insertion par la balise <slot> du composant <creation> -->	
					<img :src="creation.imgurl" class="is-overlay level-item" v-if="imageVisible">
					<h3 class="is-overlay has-text-centered level-item" v-if="textVisible">{{ creation.name }}</h3>
					<!--
						slots nommé ?
						pagination, 
						exemples de listes v-for avec un élément au comportement distinct
					-->
        	</creation>
        </div>
      </div>
      <div class="column is-1-tablet is-2-desktop is-one-fifth-widescreen is-3-fullhd"></div><!--marges-->
    </div>
  </div>
</template>

<script>
	import Creation from './Creation.vue'
	export default {
		components: { Creation },
		data() {
			return {
				imageVisible: true,
				textVisible: false,
				creations: [
					{ name: 'Floating In Red', imgurl: './src/img/floatinginred.jpg'},
					{ name: 'Nissi Nila', imgurl: './src/img/nissinila.jpg'},
					{ name: 'Banja Luka', imgurl: './src/img/banjaluka.jpg'},
					{ name: 'Multicorps', imgurl: './src/img/multicorps.jpg'}
				]
			};
		},
		computed: {

		},
		methods: {
			showText() {
				console.log('L\'image disparaît et le texte apparaît !')
				this.imageVisible = false
				this.textVisible = true
			},
			showImage() {
				console.log('Le texte disparaît et l\'image revient !')
				this.imageVisible = true
				this.textVisible = false
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

</style>