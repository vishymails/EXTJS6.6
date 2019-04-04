//Chapter 02 - code 07
// Singleton Class
Ext.define('Myapp.CompanyConstants',{
	singleton: true, 	
	companyName: 'Extjs code developers Corp.',
	workingDays: 'Monday to Friday', 
	website: 'www.bvr.com',
	welcomeEmployee:function (employee){
		return "Hello " + employee.getName() + " you are now working for " + this.companyName; 		
	}
});
// Base class Employee  using config
Ext.define('Myapp.sample.Employee',{
	statics:{
		instanceCount: 0, 		
		payrollId: 1000,	
		nextId : function(){			
			return (this.payrollId + this.instanceCount);	
		}
	},
	config:{
		name: 'Unkown',
		lastName: 'Unkown',
		age: 0,	
		isOld: false, 
		payrollNumber: 0		
	},
	constructor: function (config){		
		this.initConfig(config); 
		this.setPayrollNumber(  this.statics().nextId() ); 
		this.self.instanceCount ++;
	},
	work: function( task ){
		console.log( this.getName() + ' is working on: ' + task);
	},
    applyAge: function(newAge) {
		this.setIsOld ( (newAge >= 90) ); 
		return newAge;
    }, 
	getTotalEmployees: function(){
		return this.statics().instanceCount;
	}
});

var patricia = Ext.create('Myapp.sample.Employee', {
	name:'Patricia', 
	lastName:'Diaz', 
	age:21, 
	isOld:false 
}); 
console.log( Myapp.CompanyConstants.welcomeEmployee(patricia)  ); 
//console.log( "patricia payrollId = " + patricia.getPayrollNumber() );
//console.log( "total employees = " + patricia.getTotalEmployees() );

var peter    = Ext.create('Myapp.sample.Employee', {
	name:'Peter', 
	lastName:'Pan', 
	age:16, 
	isOld:false 
}); 
console.log( Myapp.CompanyConstants.welcomeEmployee(peter)  ); 
//console.log( "Peter payrollId = " + peter.getPayrollNumber() );

//peter.college('Vegas University'); 
//console.log( "total employees = " + patricia.getTotalEmployees() );
//console.log( "instance(s) of employee class = " + Myapp.sample.Employee.instanceCount);

