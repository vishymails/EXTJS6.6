//Chapter 03 - code 01

Ext.Loader.setConfig({
    enabled: true
});

Ext.require([
	'Ext.Component',
    'Ext.panel.*',
]);

Ext.onReady(function(){
	
	/*
	Ext.create("Ext.Component",{
	  width: 300,
	  height: 150,
	  renderTo: Ext.getBody(),
	  html: "<h1>Hello!</h1><p>This is an <strong>example</strong> of content</p>"
	});
	*/
	
	//Using an existing DOM element with an ID content
	/*
	Ext.create("Ext.Component",{
	  width: 300,
	  height: 150,
	  renderTo: Ext.getBody(),
	  contentEl: "sampleElement"
	});
	*/
	
	Ext.create("Ext.Component",{
	  width: 300,
	  height: 150,
	  renderTo: Ext.getBody(),
	  data: {
		  name:"John"
	  },  
	  tpl: ["<h1>Content</h1><p>Hello {name}!</p>"]
	});
	/**/
	
	
});


