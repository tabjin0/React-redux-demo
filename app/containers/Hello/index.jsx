import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../actions/userinfo' 

import A from '../components/A'
import B from '../components/B'
import C from '../components/C'


class Hello extends React.Component {
	render() {
		return (
				<div>
					<p>Hello</p>
					<hr/>
					<A userinfo={this.props.userinfo} />
					<hr/>
					<B userinfo={this.props.userinfo} />
					<hr>
					<C userinfo={thsi,props.userinfoActions} />
				</div>
			)
	}
}
//渲染完成的时候直接，直接调用this.props.userinfoActions.login
//这个login就是./app/actions/userinfo.js中login，传入对象，属性是userid和city
componentDidMount() {
	//login
	this.props.userinfoActions.login({
		userid: 'abc',
		city: 'beijing'
	})
}


function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}//usrinfo就是函数mapStateToProps返回的对象的属性值，也就是一个key值
//在上面的render中，就可以通过this.props.uerinfo来拿到state.userinfo的值
//state.userinfo的来源是定义规则的时候rootReducer通过combineReducers的封装，里面的

function mapDispatchToProps(dispath) {
	return {
		userinfoActions: bindActionCreators(userinfoActions,dispatch)
	}
}//这边的idspatch就是Redux-demo.js中的dispatch，通过dispatch来直接触发数据变化
//实际上给任意一个规则等它执行完判断之后，返回一个数据。
//这边将dispatch和actions结合在一起，赋值为属性userinfoActions，userinfoActions属性用于Hello组件的render
//这个bindActionCraetors是通过import * as userinfoActions from '../actions/userinfo' 引入的


// export default Hello

export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(Hello)

