//Chapter 02 - code 02
Ext.define('Myapp.sample.Employee',{		
	name:'Unkown',
	lastName:'Unkown',
	age:0, 
	constructor: function (config){
		Ext.apply(this, config || {});
		console.log('class A created – fullname:' + this.name + ' ' + this.lastName); 
	},
	checkAge:function(){
		console.log( 'Age of ' + this.name + ' ' + this.lastName + ' is:' + this.age );
	},	
	work: function( task ){
		console.log( this.name + ' is working on: ' + task);
	}
});

Ext.define('Myapp.sample.Supervisor',{
	extend:'Myapp.sample.Employee', 
	constructor: function (config){
		Ext.apply(this, config || {});
		console.log('class B created – fullname:' + this.name + ' ' + this.lastName); 
	},	
	supervise:function(employee){
		var employeefullname = employee.name + ' ' + employee.lastname; 
		console.log( this.name + ' is supervising the work of ' + employeefullname );	
	}	
}); 

var patricia = Ext.create('Myapp.sample.Employee', {name:'Patricia', lastName:'Diaz', age:21 } ); 
	patricia.checkAge(); 					
	patricia.work('Attending phone calls'); //Alerts  " Patricia Diaz is working on: Attending phone calls
	
var robert =  Ext.create('Myapp.sample.Supervisor', {name:'Robert', lastName:'Smith', age:34 } ); 
	robert.checkAge(); 
	robert.work('Administration of the office');
	robert.supervise(patricia); 	