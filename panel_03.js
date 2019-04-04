//Chapter 03 - code 06
Ext.onReady(function(){
	
	var filterPanel = Ext.create('Ext.panel.Panel', {
		bodyPadding: 5,  // Don't want content to crunch against the borders
		width: 300,
		title: 'Filters',
		tools  : [
			{type  : "help"},
			{type  : "search"},
			{type  : "print"}
		], 		
		items: [{
			xtype: 'datefield',
			fieldLabel: 'Start date'
		}, {
			xtype: 'datefield',
			fieldLabel: 'End date'
		}],
		dockedItems: [
			{
				xtype: 'toolbar',
				dock: 'bottom',
				items: [
					{
						xtype: 'button',
						text: 'Click me'
					}
				]
			}
        ],		
		renderTo: Ext.getBody()
	});

});
