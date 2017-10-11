import { combineReducers } from 'redux'

import userinfor from './userinfo'
//import collectinfo from './collectinfo'
//import cityinfo from './cityinfo'


//将多个单规则打包为一个总规则，userinfo此后将被<Provider>传递给子元素组件
const rootReducer = combineReducers({ 
	//es6简写,相当于userinfo:userinfo
    userinfor
    /*
    collectinfo
    cityinfo
    */
})

export default rootReducer 