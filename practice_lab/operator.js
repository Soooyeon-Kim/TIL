/* 산술 연산자 */
document.write(20 + 10);  // 30
document.write("20" - "10");  // 10
document.write("20" * "10");  // 200
document.write("20" / "10");  // 2
document.write("20" + "21");  // 2021
document.write("20" % "10");  // 2
document.write("sooyeon " + "kim");  // sooyeon kim

/* 증감 연산자 */
var num = 20;

document.write(++num); //21
document.write(--num); //20
document.write(num++); //20
document.write(num);   //21
document.write(num--); //21
document.write(num);   //20
/* 연산자가 변수 뒤에 위치할 경우, 
값을 사용하고 난 이후 연산을 실행한다. */


/* 비교 연산자 */
document.write(10 == 10);  //true
document.write(10 === 10); //true
document.write(10 !== 10); //false
document.write(10 > 10);   //false
document.write(10 >= 10);  //ture

document.write(10 < 10);   //false
document.write(10 <= 10);  //true

/* 논리 연산자 */
document.write(10 === 10 && 20 === 30); //false
document.write(10 === 10 || 20 === 30); //true
