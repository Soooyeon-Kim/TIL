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

