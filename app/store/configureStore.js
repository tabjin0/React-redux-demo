import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialStore) {
	//createReducer()第一个参数就是规则rootReducer，第三个参数是Chrome里面的开发工具
	const store = createStore(rootReducer,initialState,
			window.devToolsExtension = window.devToolsExtension() : undef
		)
	return store
}