//Chapter 02 - code 05
// Base class Employee  using config
Ext.define('Myapp.sample.Employee',{
	config:{
		name:'Unkown',
		lastName:'Unkown',
		age:0,	
		isOld:false
	},
	constructor: function (config){
		this.initConfig(config); 
	},
	work: function( task ){
		console.log( this.getName() + ' is working on: ' + task);
	},
    applyAge: function(newAge) {
		this.setIsOld ( (newAge>=90) ); 
		return newAge;
    }
});

var patricia = Ext.create('Myapp.sample.Employee', {
	name:'Patricia', 
	lastName:'Diaz', 
	age:21, 
	isOld:false 
}); 

console.log( "employee Name = " + patricia.getName() ); 	
console.log( "employee Last name = " + patricia.getLastName() ); 		
console.log( "employee Age  = " + patricia.getLastName() );
patricia.work('Attending phone calls');

patricia.setName('Karla Patricia'); 
patricia.setLastName('Diaz de Leon'); 
patricia.setAge (25); 
console.log( "employee New Name = " + patricia.getName() ); 	
console.log( "employee New Last name = " + patricia.getLastName() ); 		
console.log( "employee New Age  = " + patricia.getAge() ); 	

patricia.work('Attending phone calls');

var is_old=''; 
is_old= (patricia.getIsOld()==true)?'yes':'no'; 
console.log( "is patricia old? : " + is_old ) ; 

patricia.setAge(92); 

is_old=''; 
is_old= (patricia.getIsOld()==true)?'yes':'no'; 
console.log( "is patricia old? : " + is_old ) ; 

//patricia.resetName(); 
//console.log( "employee Name reseted = " + patricia.getName() ); 
		