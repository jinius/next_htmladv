function ranger( name ) {
	this.name = name;
}

function healer( name ) {
	this.name = name;
	this.heal = function( point ) {
		console.log( this.name + " healed " + point + " point" );
		// ----------^^^^---------------------------------------
	}
}

var player1 = new ranger( "caitlyn" );
var player2 = new healer( "soraka" ); 

player2.heal( 30 );	// heal()에서의 this는 player2
player2.heal.call( player1, 30 ); // heal()에서의 this는 player1, 인자는 30
player2.heal.apply( player1, [ 30 ] ); // heal()에서의 this는 player1, 인자는 30

