import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

// 通用样式
import './static/css/common.less'

import fn from './Redux-demo.js'//引用Redux-demo.js
fn()//执行fn()
import Hello from './containers/Hello'

const store = configureStore()

render (
    <Provider store={store}>
    {/*如果没有store={store}
    Warning: Failed prop type: The prop `store` is marked as required in `Provider`, but its value is `undefined`.*/}
    	<Hello />
	</Provider>,
    document.getElementById('root')
)
