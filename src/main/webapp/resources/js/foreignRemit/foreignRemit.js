"use strict"
var foreignRemit = foreignRemit || {}
foreignRemit = (()=>{
	const WHEN_ERR = '레미트 js파일을 찾지 못했습니다.'
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
			$('#first_remit_btn').click(()=>{
				remit_sec()
			})
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView = ()=>{
		$('body')
		.html(remit_vue.remit_first())
		
	}
	let remit_sec =()=>{
		$('body')
		.html(remit_vue.remit_sec())
		$('#sec_remit_btn').click(()=>{
				remit_third()
			})
	}
	let remit_third = ()=>{
		$('body')
		.html(remit_vue.remit_third())
		$('#third_remit_btn').click(()=>{
			remit_review()
		})
	}
	let remit_review = ()=>{
		$('body')
		.html(remit_vue.remit_review())
		$('#complete_remit_btn').click(()=>{
			remit_complete()
		})
	}
	let remit_complete =()=>{
		$('body')
		.html(remit_vue.remit_complete())
		$('#main_user_btn').click(()=>{
			main_remit_user()
		})
	}
	let main_remit_user = ()=>{
		$('#form-calculator main')
		.appendTo('#user-remit-container')
		
	}
	return {onCreate}
})();