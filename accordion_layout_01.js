// JavaScript Document
Ext.onReady(function(){
	var win = Ext.create("Ext.window.Window",{
	  title: "My first window",
	  width: 300,
	  height: 200,
	  maximizable : true,
	  layout: "accordion",
	  defaults: {
		xtype: "panel", height: 60, border: false
	  },
	  items: [
	  	{title: "Menu",  html  : "The main menu" },
		{title  : "Content", html  : "The main content!" },
		{title: "3rd Panel", html  : "Content here...!"}
	  ]
	});
	win.show();
				
	setTimeout(function(){
	  win.getLayout().getLayoutItems()[1].expand(); // Sets the 2 Panel as expanded (active) 
	},3000);
}); 