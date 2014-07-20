var obj = {
	strTexts: "은 정말 몸에 좋아요^^",
	registerEvents : function() {
		var elems = document.getElementsByClassName("food");
		for ( var i = 0; i < elems.length; i++ ) {
			elems[i].addEventListener( "click", function( e ) {
				console.log( e.target.innerText + this.strTexts );
			}.bind(this));
		}
	}
}

obj.registerEvents();
