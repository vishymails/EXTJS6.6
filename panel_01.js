//Chapter 03 - code 06
Ext.onReady(function(){
 	var MyPanel = Ext.create("Ext.panel.Panel",{
		renderTo: Ext.getBody(),
		title: 'My first panel...',
		width: 	300, 
		height: 220, 
		html:'<b>Here</b> goes some <i>content</i>..!'
	});
});
