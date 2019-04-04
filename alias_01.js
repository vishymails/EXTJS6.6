//Chapter 02 - code 08
// using alias and alternateClassName

Ext.define('Myapp.sample.EmployeePanel',{
	extend : 'Ext.panel.Panel',
	alias  : 'widget.employeePanel',
	alternateClassName:'mycustomemployeepanel', //['employeepanel','customEmployeePanel'],
	title  : 'Employee Panel',
	html   : 'Employee content here..!'
});

Ext.onReady (function(){
	
	Ext.create('widget.employeePanel',{
		title: 'Employee Panel: Patricia Diaz...', 
		height:250, 
		width:450,
		renderTo: Ext.getBody()
	}); 
	
/*	
	Ext.widget('employeePanel',{  //Alternative
		title: 'Employee Panel: Patricia Diaz...', 
		height:250, 
		width:450,
		renderTo: Ext.getBody()
	}); 
*/	
/*	
	Ext.create('Myapp.sample.EmployeePanel',{ //Using direct class name 
		title: 'Employee Panel: Patricia Diaz...', 
		height:250, 
		width:450,
		renderTo: Ext.getBody()
	});
*/
/*
	Ext.create('mycustomemployeepanel',{ //Using alternateClassName 
		title: 'Employee Panel: Patricia Diaz...', 
		height:250, 
		width:450,
		renderTo: Ext.getBody()
	});
*/	

/* Other possible use */
/*	
  	var win = Ext.create("Ext.window.Window",{
    title  : "Window", width:350, height:250,
    items    : [{ xtype: "employeePanel" }]
  	});
  	win.show();
*/
	
});