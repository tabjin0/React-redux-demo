// import { createStore } from 'redux'

// export default function() {
// 	//1.定义计算规则，即reducer
// 	//state参数默认为0，state = 0也是es6的语法，相当于一个if自省
// 	function counter(state = 0,action) {
// 		switch(action.type) {//通过选取action.type产生分支
// 			case 'INCREMENT':
// 				return state + 1
// 			case 'DECREMENT':
// 				return state - 1
// 			default:
// 				return state
// 		}
// 	}//这边return的结果是和state没有关系的，尽管return了state+1之类的，return的结果都不会使state的结果变化
// 	//说白了state没有更新，不是state = state + 1，解决

// 	//2.根据计算规则生成store（store相当于状态或者数据的集成器），createStore是从redux里面引入的函数
// 	let store = createStore(counter)//counter上面定义的计算规则函数counter

// 	//3.定义数据state变化之后的派发规则（这个规则有点监听的意思）,store变量，这里面有个箭头函数（es6里面的）
// 	store.subscribe(() => {
// 		console.log('fn1 -> current state',store.getState())//store.getStore()来获取函数counter返回的结果
// 	})
// 	store.subscribe(() => {
// 		console.log('fn2 -> current state',store.getState())
// 	}) 

// 	//4.触发数据变化，这个数据的变化会直接影响上面的规则函数counter，对应着counter的参数action
// 	store.dispatch({type: 'INCREMENT'})
// 	store.dispatch({type: 'INCREMENT'})
// 	store.dispatch({type: 'DECREMENT'})
// }
// //redux能够监听到数据变化的任何时候的变化，上面的store.subscribe()完全可以定义若干，state变化之后监听结果立马会发生变化，这就涉及到共享信息的问题了，如用户信息
