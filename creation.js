Vue.component('creations', {
	template: `
	    <div class="section columns"> 
	      <div class="column is-1-tablet is-2-desktop is-one-fifth-widescreen is-3-fullhd reveal"></div>
	      <div class="column">
	        <div class="columns is-multiline">
	        	<slot></slot>
	        </div>
	      </div>
	      <div class="column is-1-tablet is-2-desktop is-one-fifth-widescreen is-3-fullhd reveal"></div>
	    </div>
	`
});

Vue.component('creation', {
	template: `
	<div class="column is-one-third">
	    <figure class="image is-3by2 level framed">
			<img src="./ajsam-hora/src/img/nissinila.jpg" class="is-overlay level-item">
			<h3 class="is-overlay level-item">
			Blablabla
			</h3>
	    </figure>
	</div>
	`
});


/*
	data: {
		success: false
	},
	methods: {
		cls: function () {
			console.log('clsimg called')
			return this.invisible === true ? 'is-invisible' : 'is-overlay'
		}
	}
*/

new Vue({
	el: '#root',
	data () {
		return {
			nom: 'delatour',
			prenom: 'jean',
			isgreen: false,
			message: ''
		}
	},
	computed: {
		fullname: {
			get: function () {
				return this.prenom + ' ' + this.nom
			},
			set: function (value) {
				console.log(value)
				let parts = value.split(' ')
				this.prenom = parts[0]
				this.nom = parts[1]
			}
		},
		cls: function () {
			console.log('clsimg called')
			return this.isgreen === true ? 'is-green' : 'is-blue'
		}
	}
});

