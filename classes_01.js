//Chapter 02 - code 01 
Ext.define('Myapp.sample.Employee',{	
	name:'Unkown',
	lastName:'Unkown',
	age:0, 
	constructor: function (config){
		Ext.apply(this, config || {});
		console.log('class created – fullname:' + this.name + ' ' + this.lastName); 
	},
	checkAge:function(){
		console.log( 'Age of ' + this.name + ' ' + this.lastName + ' is:' + this.age );
	},	
	work: function( task ){
		alert ( this.name + ' is working on: ' + task);
	}
});
var patricia = Ext.create('Myapp.sample.Employee', {name:'Patricia', lastName:'Diaz', age:21 } ); 
	patricia.checkAge();
	patricia.work('Attending phone calls'); //Alerts  " Patricia Diaz is working on: Attending phone calls