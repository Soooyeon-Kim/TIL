$.ajax({
  type: "GET", // GET 방식으로 요청
  url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
  data: {}, // 요청하면서 함께 줄 데이터 (GET 요청시, 비워둠)
  success: function(response){ // 서버에서 준 결과를 response라는 변수에 담음
    console.log(response) // 서버에서 준 결과를 이용해서 나머지 코드를 작성
  }
})

// 모든 구의 미세먼지 값을 출력
$.ajax({
  type: "GET",
  url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
  data: {},
  success: function(response){
    let rows = response['RealtimeCityAir']['row']
    // for 반복문 사용하기
     for (let i = 0; i < rows.length; i++) {
         let gu_name = rows[i]['MSRSTE_NM']
         let gu_mise = rows[i]['IDEX_MVL']
         console.log(gu_name, gu_mise)
    }

  }
})

$.ajax({
  type: "GET",
  url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
  data: {},
  success: function(response){
		// 값 중 도봉구의 미세먼지 값만 가져오기
		let dobong = response["RealtimeCityAir"]["row"][11];
		let gu_name = dobong['MSRSTE_NM'];
		let gu_mise = dobong['IDEX_MVL'];
		console.log(gu_name, gu_mise);
  }
})


// for 반목문 안에 if문 추가조건 입력하기
$.ajax({
  type: "GET",
  url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
  data: {},
  success: function(response){
    let rows = response['RealtimeCityAir']['row']
    for (let i = 0; i < rows.length; i++) {
         let gu_name = rows[i]['MSRSTE_NM']
         let gu_mise = rows[i]['IDEX_MVL']
         // 70미만인 지역구만 출력하라
         if (gu_mise < 70) {
             console.log(gu_name, gu_mise)
         }
    }

  }
})

