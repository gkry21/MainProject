var remit_vue = remit_vue || {}
remit_vue = {
	remit_first: () => {
		return '<div>' +
			'<nav class="themoin-header">' +
			'<div>' +
			'<a class="logo">' +
			'<img src="https://img.themoin.com/public/img/img-new-moin-logo.svg">' +
			'</a>' +
			'<ul class="">' +
			'<li class="mobile">' +
			'<div class="themoin-language-dropdown" tabindex="0">' +
			'<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">' +
			'<a>한국어</a>' +
			'<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">' +
			'<ul>' +
			'<li>' +
			'<div class="spacer">' +
			'</div>' +
			'<a><img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어</a>' +
			'</li>' +
			'<li>' +
			'<div class="spacer">' +
			'</div>' +
			'<a><img src="https://img.themoin.com/public/img/ic-flag-en.svg">English</a>' +
			'</li></ul></div></li></ul>' +
			'<div class="language">' +
			'<div class="themoin-language-dropdown" tabindex="0">' +
			'<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">' +
			'<a>한국어 </a>' +
			'<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">' +
			'<ul>' +
			'<li>' +
			'<div class="spacer">' +
			'</div>' +
			'<a><img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어</a>' +
			'</li>' +
			'<li>' +
			'<div class="spacer">' +
			'</div>' +
			'<a><img src="https://img.themoin.com/public/img/ic-flag-en.svg">English</a>' +
			'</li></ul></div></div></div></nav>' +
			'<div class="themoin-remit-extended-component">' +
			'<h2 class="title-amount">보내는 금액을 입력해주세요.</h2>' +
			'<div id="moin-event-amount" class="moin-event-amount" style="text-align: center;">' +
			'<p class="color-deepgrey"></p>' +
			'</div>' +
			'<div class="form-calculator">' +
			'<div class="amount-row">' +
			'<div class="">' +
			'<p>내가 보내는 금액 (수수료 포함)</p>' +
			'<input class="send-amount" type="text" tabindex="0" value="5,500,000">' +
			'</div>' +
			'<div class="unit-select disabled" tabindex="0">' +
			'<p>대한민국</p>' +
			'<h3>KRW</h3>' +
			'</div>' +
			'</div>' +
			'<div class="description">' +
			'<i class="empty"></i>' +
			'<p><span>-82,500</span> KRW (수수료)</p>' +
			'<div class="spacer">' +
			'</div>' +
			'<a tabindex="0">쿠폰 등록</a>' +
			'</div>' +
			'<div class="description">' +
			'<i class="empty">' +
			'</i>' +
			'<p>' +
			'<span>5,417,500</span>KRW (실제 환전 금액)</p>' +
			'</div>' +
			'<div class="description last">' +
			'<i><img src="https://img.themoin.com/public/img/exchange-rate.svg"></i>' +
			'<p><span>100</span>JPY = <span>1060.08</span>KRW (모인 환율)</p>' +
			'<div class="spacer">' +
			'</div>' +
			'<a tabindex="0">상세 보기</a>' +
			'</div>' +
			'<div class="amount-row">' +
			'<div class="">' +
			'<p>실제로 받는 금액 (직접입력 가능)</p>' +
			'<input class="receive-amount" type="text" tabindex="0" value="511,046">' +
			'</div>' +
			'<div class="unit-select receive" tabindex="0">' +
			'<p>일본</p>' +
			'<h3>JPY</h3>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'<button class="submit">송금하기</button>' +
			'</div>' +
			'<div style="display:none">' +
			'</div>' +
			'</div>'
	}
}