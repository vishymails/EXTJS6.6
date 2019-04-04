//Chapter 02 - code 09
//EXT JS - LOADER 
Ext.Loader.setConfig({
    enabled: true, 
	paths:{
		MyApp:'appcode'	
	}
});
Ext.require([
    'MyApp.Constants',
	'MyApp.samples.demoClass'
]);

Ext.onReady(function(){ 

	console.log ("App title 	= " +  MyApp.Constants.title ); 
	console.log ("App version 	= " +  MyApp.Constants.getVersion() ); 
	var testClass = Ext.create('MyApp.samples.demoClass',{ initialValue:21}); 
	console.log ( testClass.getDescription() ); 

});
