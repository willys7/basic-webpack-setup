// let a = x => x*x;
// console.log(a(9));

// var pares =[2, 4, 6];
// var impares = pares.map(function(v){
// 	return v + 1;
// });
// const sq = (x) =>{
// 	return x*x;
// }

// let impares = pares.map(v => v+1)
// let cuadrados = pares.map(sq)

// console.log(impares);
// console.log(cuadrados);

// let params = [1,2,3];
// let b = [4,5, ...params];

// const x = (a,b,c) => a+b+c;
// console.log(x(...params));

// let a = 5;
// let b = 6;
// let c = 7;

// let o = {a, b, c};
// console.log(o);

// let nombre = "William";
// let momento = "mañana";


// let datos = {
// 	nombre: "William",
// 	momento: "dia"
// }
// let saludo  = `Hola ${datos.nombre}, que pase feliz ${datos.momento}!`
// console.log(saludo); 

// var objeto = {
// 	nombre: "William"
// 	saludar(){
// 		console.log("hola");
// 	}
// };

// objeto.saludar();

// let miHermosoPuntoParaElEjemploDeHoy = {
// 	x:0.0,
// 	y:100.0
// }

// let {x, y} = miHermosoPuntoParaElEjemploDeHoy
// // console.log(miHermosoPuntoParaElEjemploDeHoy.x);
// console.log(y);

// function hola({a, b, c}){
// 	return a + b + c;
// }

// console.log(hola({a:1 , b:2 , c:3}));

// function* miGenerador(){
// 	yield 6;
// 	yield 3;
// 	yield 90;
// 	yield -100;
// }

// let generador = miGenerador();

// let resultado = [miGenerador()];

// console.log(generador.next());

/*


State: int representing actual value

Actions:
{
	type: 'INCREMENT'
}
{
	type: 'DECREMENT'
}

Test:
state = 0
counter(0,{type: 'INCREMENT'}) --> 1
counter(1,{type: 'INCREMENT'}) --> 0

// */
// import expect from "expect"

// //Reducer
// const counter = (state = 0, action) =>{
// 	switch (action.type){
// 		case 'INCREMENT':
// 			return state + 1;
// 		case 'DECREMENT':
// 			return state - 1;
// 		default:
// 			return state;

// 	}
// }

// expect(
// 	counter(undefined, {})
// ).toEqual(0);

// expect(
// 	counter(0,{type:'INCREMENT'})
// ).toEqual(1);

// expect(
// 	counter(1,{type:'DECREMENT'})
// ).toEqual(0);

// console.log("All tests passed!")


import ReactDOM from 'react-dom';
import Immutable from 'Immutable';

const Counter = ({value, incrementAction, decrementAction, removeAction}) => (
	<div>
		<h1>{value} </h1>
		<button onClick
		<button onClick ={incrementAction}>+</button>
		<button onClick ={decrementAction}>-</button>
		<button onClick ={removeAction}>&times;</button>
	</div>
	);

const render = ()=>{
	ReactDOM.render(
		<Counter
			value={999}
			incrementAction = {()=> {alert("hooola incremento")}}
			incrementAction = {()=> {alert("hooola decremeto")}}
			removeAction = {()=> {alert("hooola borrar")}} />,
			document.getElementById('root')
		);
}

render();