import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import './static/css/common.less'

// 引用并执行 redux-demo 
// import fn from './redux-demo.js'
// fn()

import Hello from './containers/Hello'

//configureStore是已经封装好的createSore方法
const store = configureStore()

//Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了。
render(
	<Provider store={store}>
	<Hello/> 
	</Provider>,
	document.getElementById('root')
	)
