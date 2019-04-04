//Chapter 03 - code 02

Ext.Loader.setConfig({
    enabled: true
});

Ext.require([
	'Ext.Component'
]);

Ext.onReady(function(){
	
	var mycmp = Ext.create("Ext.Component",{
		width: 300,
		height: 150,
		data: {
			name:"Veronica", 
			lastName:"Sanchez" 
		},  
		tpl  : [
			"<h1>Content</h1><p>Hello {name} {lastName}!</p>"
		]
	});
	mycmp.render( Ext.getBody() );
	
});
