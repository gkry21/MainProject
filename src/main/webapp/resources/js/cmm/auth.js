"use strict"
var auth = auth || {}
auth =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, auth_vue_js, cookie_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		auth_vue_js = js + '/vue/auth_vue.js'
		cookie_js = js + '/cmm/cookie.js'
	}
	let onCreate =x=>{
		init()
		$.when(
			$.getScript(auth_vue_js),
			$.getScript(cookie_js)
		)
		.done(()=>{
			setContentView(x)
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =x=>{
		$('head')
		.html(auth_vue.auth_head())
		if( x === 'join' ){
			join_1_page()
			join_2_page_btn()
			login_page_a()
		}
		else{
			login_page()
			login()
		}
	}
	let login_page =()=>{
		$('body')
		.html(auth_vue.login_body())
		
		$(auth_vue.login())
		.appendTo('.themoin-login')
		join_2_page_btn()
	}
	
	let login_page_a =()=>{
		$('<p style="margin: 33px auto 0px;"><a>이미 회원이신가요?</a></p>')
		.appendTo('.moin-login')
		.click(()=>{
			login_page()
			login()
		})
	}
	
	let login =()=>{
		$('<button/>')
		.text('로그인')
		.addClass('btn-submit')
		.appendTo('.moin-login form.login')
		.click(e=>{
			e.preventDefault()
			$.ajax({
				url : _ + '/customers/login',
				type : 'POST',
				data : JSON.stringify({
					cemail : $('#cemail').val(),
					cpwd : $('#cpwd').val()
				}),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					if(d.msg === 'SUCCESS'){
						alert('로그인 성공')
						alert(d.msg)
						alert(d.cus.cemail)
					}
					else{
						alert('로그인 실패')
					}
				},
				error : e=>{
					alert('login ajax 실패')
				}
			})
		})
	}
	
	let join_1_page =()=>{
		$('body')
		.html(auth_vue.login_body())
		
		$(auth_vue.join_1())
		.appendTo('.themoin-login')
	}
	
	let join_2_page_btn =()=>{
		$('<button>'+
		  '	<img src="https://img.themoin.com/public/img/login-email.svg">'+
		  '		<p class="newmoin-text-text-button">이메일로<br>시작하기</p>'+
		  '</button>')
		.prependTo('.buttons')
		.click(()=>{
			$('body')
			.html(auth_vue.join_body())
			
			$(auth_vue.join_2())
			.appendTo('.themoin-signup')
			
			join()
		})
	}
	
	let join =()=>{
		existId()
		// <button class="btn-submit" type="submit">가입완료</button>
		$('<button/>')
		.text('가입완료')
		.addClass('btn-submit')
		.appendTo('.moin-login form.signup')
		.click(e=>{
			e.preventDefault()
			let cntcd = $('#phone1').text().substr(1, $('#phone1').text().indexOf(' '))
			alert(cntcd)
			if($('#cpwd').val() === $('#cfm_cpwd').val() && $('#cpwd').val().length > 0 ){
				$.ajax({
					url : _+'/customers/',
					type : 'POST',
					data : JSON.stringify({
						cemail : $('#cemail').val(),
						cpwd : $('#cpwd').val(),
						cname : $('#lname').val() + $('#fname').val(),
						cntcd : cntcd,
						cphone : $('#cphone').val()
						// cemail, cpwd, cfm_cpwd, fname, lname, 
						// phone1(국가코드), cphone
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : d=>{
						if(d.msg === 'SUCCESS'){
							login_page()
							login()
						}else{
							alert('회원가입 실패')
						}
					},
					error : e=>{
						alert('join ajax 실패')
					}
				})
			}else{
				alert('비번 틀림')
			}
		})
	}
	
	let existId =()=>{
		$('<input id="cemail" class="fs-block"'+
				' placeholder="youremail@email.com" type="text" tabindex="0" value="">'+
				'<div style="height:20px; margin-top:10px"></div>')
			.appendTo('#moin-input-id')
			
		$('#cemail').keyup(()=>{
			if($('#cemail').val().length >= 1){
				$.getJSON(_+'/customers' + '/existid/' + $('#cemail').val(), d=>{
					if(d.msg === 'Y'){
						$('#moin-input-id div')
						.text('이미 있는 아이디입니다.')
						.css({
							color : 'red'
						})

					}else{
						$('#moin-input-id div')
						.text('사용 가능한 이메일입니다.')
						.css({
							color : 'blue'
						})
					}
				})
			}
			else{
				$('#moin-input-id div').empty()
			}
		})
	}
	return { onCreate }
})()