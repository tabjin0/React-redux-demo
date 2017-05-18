//尽管reducers文件夹里面只定义了userinfo的规则，但是不意味着只可以定义一个规则

import { combineReducers } from 'redux'//combineReducers是redux里面的方法
 
import userinfo from './userinfo'
//也可以定义多个userinfo，实际上有多个规则的时候也是需要分割的，不可能写在一个规则里面
import userinfo1 from './userinfo1'
import userinfo2 from './userinfo2'



//定义一个rooeReducer,注意这边是es6的写法，这个rootReduce用来包装规则combineReducers
const rootReducer = combineReducers({
	userinfo: userinfo,
	userinfo1: userinfo1,
	userinfo2: userinfo2
})
//将rootRdeucer重新export出去，将在configStore.js中被引用
export default rootReducer