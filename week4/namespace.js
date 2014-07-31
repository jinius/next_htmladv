// Namespace 사용법
//	- 전역 함수나 전역 변수를 사용하지 않고,
//	- 전역 객체를 하나 만들어서 그 안에 모두 모아 넣는다.
//
// Namespace의 장점
//	- 라이브러리화 사용할 때 다른 코드와 이름 충돌 문제를 피한다.
//
// 예제 코드

var myNameSpace = (function() {

	var privateData;

	function privateMethod( data ) {
		this.privateData = data;
		return data;
	}

	function publicMethod( data ) {
		this.publicProperty = data;
		return privateMethod( data );
	}

	return {
		publicProperty : null,
		publicMethod : publicMethod
	};

}());

console.log( myNameSpace.publicMetohd( 3 ) );
console.log( myNameSpace.publicProperty );

