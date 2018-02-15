Vue.component('creations', {
	template: `
	    <div class="section columns"> 
	      <div class="column is-1-tablet is-2-desktop is-one-fifth-widescreen is-3-fullhd reveal">
			<input type="checkbox" v-model="ishidden">
		  </div>
	      <div class="column">
	        <div class="columns is-multiline">
	        	<creation v-for="creation in creations" :key="creation.name" class="column is-one-third">
	        		<img :src="creation.imgurl" class="is-overlay level-item" :class="clstoto">
					<h3 class="is-overlay level-item">{{ creation.name }}</h3>
	        	</creation>
	        </div>
	      </div>
	      <div class="column is-1-tablet is-2-desktop is-one-fifth-widescreen is-3-fullhd reveal"></div>
	    </div>
	`,

	data () {
		return {
			ishidden: false,
			creations: [
				{ id: 1, name: 'Banja Luka', imgurl: './ajsam-hora/src/img/banjaluka.jpg'},
				{ id: 2, name: 'Nissi Nila', imgurl: './ajsam-hora/src/img/nissinila.jpg'},
			]
		};
	},
	computed: {
		clstoto: function () {
			console.log('clstoto called')
			return this.ishidden === true ? 'is-invisible' : 'is-blue'
		}
	}
});

Vue.component('creation', {
	template: `
	<div>
		    <figure class="image is-3by2 level framed">
		    	<slot></slot>
		    </figure>
	</div>
	`
});

new Vue({
	el: '#root',
	data: {
		isgreen: false,
		isinvisible: false,
		isvisible: true,
		message: ''
	},
	methods: {
		show () {
			this.$emit('show')
			console.log('show')
			this.isvisible = false
		},
		hide () {
			this.$emit('hide')
			console.log('hide')
			this.isvisible = true
		},
	},
	computed: {
		cls: function () {
			console.log('cls called')
			return this.isgreen === true ? 'is-green' : 'is-blue'
		},
		clsimg: function () {
			console.log('clsimg called')
			return this.isinvisible === true ? 'is-invisible' : 'is-blue'
		}
	}
});