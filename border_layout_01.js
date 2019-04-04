// JavaScript Document
Ext.onReady(function(){
	Ext.create('Ext.panel.Panel', {
		width: 650,  height: 350,
		title:  'Border Layout',
		layout: 'border',
		items: [{
			xtype: 'panel',
			title: 'South Region is resizable',
			region: 'south',     // position - region			
			height: 100,
			split: true,         // enable resizing
		},{
			xtype: 'panel',			
			title: 'West Region',
			region:'west',		 // position - region	
			width: 200,
			collapsible: true,   // make collapsible 
			layout: 'fit',
			split: true
		},{
			title: 'Center Region',
			region: 'center', 	// position - region	
			layout: 'fit',
			margin: '5 5 0 0',
			html:'<b>Main content</b> goes here'
		}],
		renderTo: Ext.getBody()
	});	
}); 