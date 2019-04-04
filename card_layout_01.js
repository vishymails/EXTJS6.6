// JavaScript Document
Ext.onReady(function(){
	var win = Ext.create("Ext.window.Window",{
	  title: "My first window",
	  width: 300,
	  height: 200,
	  maximizable : true,
	  layout: "card",
	  defaults: {
		xtype: "panel", 
		height: 60, 
		border: false
	  },
	  items: [{
		  	title: "Menu",  
			html: "The main menu" 
		},{
			title: "Content", 
			html: "The main content!" 
		}
	  ]
	});
	win.show();
				
	setTimeout(function(){
	  win.getLayout().setActiveItem(1);
	},3000);
}); 