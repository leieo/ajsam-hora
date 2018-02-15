Vue.component('creations', {
	template: `
	    <div class="section columns"> 
	      <div class="column is-1-tablet is-2-desktop is-one-fifth-widescreen is-3-fullhd reveal"></div>
	      <div class="column">
	        <div class="columns is-multiline">
	        	<creation v-for="creation in creations" :key="creation.name" class="column is-one-third" v-on:shwtxt="showText" v-on:shwimg="showImage">
	        		<img :src="creation.imgurl" class="is-overlay level-item" v-if="imageVisible">
					<h3 class="is-overlay has-text-centered level-item" v-if="textVisible">{{ creation.name }}</h3>
	        	</creation>
	        </div>
	      </div>
	      <div class="column is-1-tablet is-2-desktop is-one-fifth-widescreen is-3-fullhd reveal"></div>
	    </div>
	`,

	data () {
		return {
			imageVisible: true,
			textVisible: false,
			creations: [
				{ id: 1, name: 'Banja Luka', imgurl: './ajsam-hora/src/img/banjaluka.jpg'},
				{ id: 2, name: 'Nissi Nila', imgurl: './ajsam-hora/src/img/nissinila.jpg'},
				{ id: 2, name: 'Floating In Red', imgurl: './ajsam-hora/src/img/floatinginred.jpg'},
				{ id: 2, name: 'Multicorps', imgurl: './ajsam-hora/src/img/multicorps.jpg'},
			]
		};
	},

	methods: {
		showText () {
			console.log('Le texte apparaît')
			this.imageVisible = false
			this.textVisible = true
		},
		showImage () {
			console.log('L\'image apparaît')
			this.imageVisible = true
			this.textVisible = false
		}
	}
});

Vue.component('creation', {
	template: `
	<div>
		    <figure class="image is-3by2 level framed" @mouseover="shwtxt" @mouseout="shwimg">
		    	<slot></slot>
		    </figure>
	</div>
	`,
	methods: {
		shwtxt () {
			console.log('shwtxt directive')
			this.$emit('shwtxt')
		},
		shwimg () {
			console.log('shwimg directive')
			this.$emit('shwimg')
		}
	}
});

new Vue({
	el: '#root',
	data: {
		isgreen: false,
		message: '',
		imageVisible: true,
		textVisible: false
	},
	methods: {
		showText () {
			console.log('text')
			this.imageVisible = false
			this.textVisible = true
		},
		showImage () {
			console.log('image')
			this.imageVisible = true
			this.textVisible = false
		},
	},
	computed: {
		cls: function () {
			console.log('cls called')
			return this.isgreen === true ? 'is-green' : 'is-blue'
		}
	}
});