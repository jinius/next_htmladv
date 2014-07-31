function person( name ) {

	this.name = name;

	this.getName = function() {
		return this.name;
	}

	this.sayHello = function( other ) {
		return "Hello " + other.getName() + ", I'm " + this.name + ".";
	}

}

var jinwoo = new person( "JinWoo" );
var yongwoo = new person( "YongWoo" );
var monster = new person( "DoppelGanger" );

console.log( monster.getName.call( jinwoo ) );
console.log( monster.sayHello.apply( jinwoo, [ yongwoo ] ) );

// getName() 이나 sayHello() 에서 모두 this.name을 사용하였기 때문에,
// call이나 apply를 사용시 도플갱어의 메소드는 다른 객체를 this로 처리한다.
//
// 반면 this를 사용하지 않으면 name이 closure가 되므로
// call이나 apply를 사용하더라도 DoppelGanger가 나온다.
//
