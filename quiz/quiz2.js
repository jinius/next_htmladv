function myList() {}

myList.prototype = {
	constructor : function() {
		this.list = [];
	},

	addName : function( name ) {
		var list = this.list;
		var index = list.indexOf( name );
		if ( index == -1 )
			list.push( name );

		return list;
	},

	removeName : function( name ) {
		var list = this.list;
		var index = list.indexOf( name );
		if ( index > -1 )
			list.splice( index, 1 );	// from index position, 1 element

		return list;
	},

	getAllNames : function()
	{
		return this.list;
	}
}


var oName = new myList();
oName.addName("henry");
oName.getAllNames();		// ["henry"];
oName.addName("john"); 
oName.getAllNames();		//["henry", "john"];
oName.removeName("john");	//["henry"]

