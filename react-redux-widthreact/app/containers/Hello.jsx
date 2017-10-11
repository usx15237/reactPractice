import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//创造一个userinfoActions对象，含login和updateCityName两个属性
import * as userinfoActions from '../actions/userinfo' 

import A from '../components/A'
import B from '../components/B'
import C from '../components/C' 

class Hello extends React.Component {
 componentDidMount() {
        // 模拟登陆
        this.props.userinfoActions.login({
            userid: 'abc',
            city: 'beijing'
        })
    }
    /*this.props.userinfoActions={
            type: actionTypes.USERINFO_LOGIN,
            userid: 'abc',
            city: 'beijing'
        }*/
        //Hello向C传递了userinfoActions属性值作为C的actions属性值

        //Hello为UI组件(接收数据，渲染视图)
        render() {  
            return (
                <div>
                <p>hello world</p>
                <hr/> 
                <A userinfoa={this.props.userinf}/>
                <hr/>
                <B userinfob={this.props.userinf}/> 
                <hr/>
                <C actions={this.props.userinfoActions}/>
                </div>
                ) 
        }
    }


//userinfor来自reducers/userinfo.js
const mapStateToProps=(state)=> {
    return { 
        userinf: state.userinfor
    }
}
/*上面代码中，mapStateToProps是一个函数，
**它接受state作为参数，返回一个对象。
**这个对象有一个userinf属性，代表UI组件Hello的同名props参数，
*/
//mapStateToProps为订阅者，它订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。


/*mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。
**也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。
*/
const mapDispatchToProps=(dispatch)=>{
    return {
        userinfoActions: bindActionCreators(userinfoActions,dispatch)
    }
}
/*mapDispatchToProps作为函数，应该返回一个对象.
**该对象的每个键值对都是一个映射，定义了 UI 组件的参数怎样发出 Action。
*/



/*把Hello经过connect封装后再吐出
**Hello由此从UI组件转化为容器组件
*/
export default connect(
    //输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
    mapStateToProps,
    //输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。
    mapDispatchToProps
    )(Hello)

    //bindActionCreators