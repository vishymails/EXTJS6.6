// JavaScript Document
Ext.onReady(function(){

	var win = Ext.create("Ext.window.Window",{
	  title: "My first window",
	  width:  300,
	  height: 300,
	  maximizable : true,
	  layout: "anchor",
	  defaults: {
		xtype: "panel", height: 60, border: false
	  },
	  items: [
	  	{title: "Menu",  html: "panel at 100% - 10 px" , anchor:'-10' },
		{title  : "Content", html  : "panel at 70% of anchor" , anchor:'70%'  },
		{title: "3rd Panel", html  : "panel at 50% width and 40% height of anchor"  , anchor:'50% 40%', bodyStyle:'background-color:#fc3; '  }
	  ]
	});
	win.show();

	// Alternative 
	/*
	Ext.create("Ext.window.Window",{
	  title: "My first window",
	  width:  300,
	  height: 300,
	  maximizable : true,
	  layout: "anchor",
	  defaults: {
		xtype: "panel", height: 60, border: false
	  },
	  items: [
	  	{title: "Menu",  html: "panel at 100% - 10 px" , anchor:'-10' },
		{title  : "Content", html  : "panel at 70% of anchor" , anchor:'70%'  },
		{title: "3rd Panel", html  : "panel at 50% width and 40% height of anchor"  , anchor:'50% 40%', bodyStyle:'background-color:#fc3; '  }
	  ]
	}).show();
	*/
	
}); 