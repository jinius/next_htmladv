var obj = {
	strTexts: "은 정말 몸에 좋아요^^",
	registerEvents : function() {
		var elems = document.getElementsByClassName("food");
		for ( var i = 0; i < elems.length; i++ ) {
			elems[i].addEventListener( "click", function( e ) {
				console.log( e.target.innerText + this.strTexts );
			}.bind(this));

                        //잘했고요 아래처럼 bind할 함수를() 로 감싸주는 게 일반적입니다.
			elems[i].addEventListener( "click", (function( e ) {
				console.log( e.target.innerText + this.strTexts );
			}).bind(this));

		}
	}
}

obj.registerEvents();
