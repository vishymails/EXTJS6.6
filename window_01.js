// JavaScript Document
Ext.onReady(function(){
	Ext.create('Ext.container.Viewport',{		
		padding:'5px',
		layout:'auto',
		style : {
			'background-color': '#fc9',
			'color': '#000'
        }, 
		html:'This is application area'
	});
	
	var win = Ext.create("Ext.window.Window",{
	  title: "My first window",
	  width: 300,
	  height: 200,
	  maximizable:true,
	  html:'this is my first window'
	});
	win.show();
	
});