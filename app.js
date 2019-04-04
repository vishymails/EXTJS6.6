/*
Ext.onReady(function(){
	//alert("This is my first Extjs app !");
	//Ext.Msg.alert("Alert","This is my first Ext JS app !");
	Ext.Msg.confirm("Confirm","Do you like Ext JS 6.6 ?",
	function(btn){
	   if(btn === "yes"){
	   Ext.Msg.alert("Great!","This is great!");
		  }else{
			 Ext.Msg.alert("Really?","That's too bad.");
		  }
	});
	
});
*/

/*
 Alternative Code 
*/

Ext.application({
    name : 'MyFirstApplication',
    launch : function() {
        Ext.Msg.alert("Alert","Hello world");
    }
});
