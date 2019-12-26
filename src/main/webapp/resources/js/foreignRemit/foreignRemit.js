"use strict"
var foreignRemit = foreignRemit || {}
foreignRemit = (()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _,js,auth_js,main_vue_js,remit_vue_js,cookie_js

	let init = ()=>{
		_ = $.ctx()
		js = $.js()
		main_vue_js = js + '/vue/main_vue.js'
		auth_js = js + '/cmm/auth.js'
		cookie_js = js + '/cmm/cookie.js'
		remit_vue_js = js + '/vue/remit/remit_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(main_vue_js),
			$.getScript(auth_js),
			$.getScript(remit_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView = ()=>{
		$('body')
		.html(remit_vue.remit_first())
	}
	return {onCreate}
})();