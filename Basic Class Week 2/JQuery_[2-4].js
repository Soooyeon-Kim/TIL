// JQuery
$('#article-url').val();
// id가 article-url인 텍스트 상자 내부에 입력된 값을 출력
$('#article-url').val('장영실');
// id가 article-url인 텍스트 상자 내부에 '장영실'을 입력
$('#post-box').hide()
// id가 post-box인 상자를 페이지에서 보이지 않도록 숨김
$('#post-box').show()
// id가 post-box인 상자를 페이지에서 다시 생겨남
$('#post-box').css('width')
// "500px"
$('#post-box').css('width', '700px')
// id가 post-box인 상자의 width가 700px로 커짐
// JQuery를 이용하여 동적으로 커지게 만들었음
$('#post-box').css('display')
// "block"
$('#post-box').hide()
// 다시 숨김
$('#post-box').css('display')
// "none"
$('#btn-posting-box').text('button')
// id가 btn-posting-box인 버튼의 내용이 '포스팅박스 열기' 에서 'button'으로 변경됨


// 백틱 (`)을 이용하여 동적으로 이어붙이는 방법
// 버튼 이어붙이기
let temp_html = `<button>버튼 이어붙이기</button>`
$('#cards-box').append(temp_html)
$('#cards-box').append(temp_html)
$('#cards-box').append(temp_html)
$('#cards-box').append(temp_html)
// ... 계속해서 버튼이 추가되어 붙음

// 사진 카드 이어붙이기
let temp_html = `<div class="card">
            <img class="card-img-top"
                 src="https://images.unsplash.com/photo-1623150882391-ed961cb0eb4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80"
                 alt="Card image cap">
            <div class="card-body">
                <a href="http://naver.com" class="card-title">여기 기사 제목이 들어가죠</a>
                <p class="card-text">기사의 요약 내용이 들어갑니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산...</p>
                <p class="card-text comment">여기에 코멘트가 들어갑니다.</p>
            </div>
        </div>`

        // 카드 전체 코드를 백틱 사이에 붙여넣기 한다
$('#cards-box').append(temp_html)
$('#cards-box').append(temp_html)
// ... 추가한 문장만큼 카드가 새로 생겨남


// 새롭게 추가할 카드에 제목을 변경하고 싶을 경우
let title = '새로운 제목'
// 제목 정의
let temp_html = `<div class="card">
            <img class="card-img-top"
                 src="https://images.unsplash.com/photo-1623150882391-ed961cb0eb4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80"
                 alt="Card image cap">
            <div class="card-body">
                <a href="http://naver.com" class="card-title">${title}</a>
                <p class="card-text">기사의 요약 내용이 들어갑니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산...</p>
                <p class="card-text comment">여기에 코멘트가 들어갑니다.</p>
            </div>
        </div>`
// 기존 코드에 있던 제목을 ${title} 로 수정
$('#cards-box').append(temp_html)
$('#cards-box').append(temp_html)
$('#cards-box').append(temp_html)
// 새롭게 정의된 제목의 카드들이 추가됨
