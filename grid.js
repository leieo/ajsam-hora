Vue.component('creations', {
	template: `
	    <div class="section columns"> 
	      <div class="column is-1-tablet is-2-desktop is-one-fifth-widescreen is-3-fullhd reveal"></div>
	      <div class="column">
	        <div class="columns is-multiline">
	        	<creation v-for="creation in creations" :key="creation.name" class="column is-one-third"></creation>
	        </div>
	      </div>
	      <div class="column is-1-tablet is-2-desktop is-one-fifth-widescreen is-3-fullhd reveal"></div>
	    </div>
	`,

	data () {
		return {
			creations: [
				{ id: 1, name: 'Banja Luka', imgurl: '../img/banjaluka.jpg'},
				{ id: 2, name: 'Nissi Nila', imgurl: '../img/nissinila.jpg'},
				{ id: 3, name: 'Vertikal', imgurl: '../img/vertikal.jpg'}
			]
		};
	}
});

Vue.component('creation', {
	template: `
	<div>
		    <figure class="image is-3by2 level framed"></figure>
	</div>
	`
});

new Vue({
	el: '#root'
});