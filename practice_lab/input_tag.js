<!DOCTYPE html>
<html>
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>엘리스 | Q&A</title>

    <link rel="stylesheet" href="css/style.css">

</head>
<body>

<header id="header">
    <div class="left"></div>
    <h1 class="logo">
        <a href="main.html">
            <img src="img/main/logo.png" alt="">
        </a>
    </h1>
</header>

<nav id="side_nav">

    <div class="close">
        <span class="close_btn">X</span>
    </div>

    <div class="clearfix"></div>

    <ul>
        <li><a href="#">NEWS</a></li>
        <li><a href="#">PLAYERS</a></li>
        <li><a href="#">GAME</a></li>
        <li><a href="#">TICKETS</a></li>
        <li><a href="#">Q & A</a></li>
    </ul>
</nav>

<main id="main" role="main">

    <article class="main_intro">
        <div class="text_wrap">
            <h2>Q & A</h2>
            <p>안녕하세요. 엘리스 Q&A입니다.<br>
                질문내용과 연락처를 함께 남겨주시면<br>
                3일이내에 답변을 받을 수 있습니다.<br>
            </p>
        </div>
    </article>

    <section id="question">
        <form id="question_form">
          
          <!-- input 알아보기 (1) -->
          <label for="topic">제목</label>
          <input type="text" id="topic" name="topic">

          <label for="email">이메일 주소</label>
          <input type="email" id="email" name="email">

          <label for="pw">비밀번호</label>
          <input type="password" id="pw" name="pw">
          
          <!-- input 알아보기 (2) -->
          <label for="apple">
              <input type="checkbox" id="apple" name="apple">사과
          </label>

          <label for="banana">
              <input type="checkbox" id="banana" name="banana">바나나
          </label>
          
          <label for="male">
              <input type="radio" id="male" name="gender">남자
          </label>

          <label for="female">
              <input type="radio" id="female" name="gender">여자
          </label>

          <!-- 라디오의 경우는 name을 카테고리 형식으로 작성해주는 것이 좋다. -->

        </form>
    </section>

</main>

<script src="js/jquery-3.3.1.js"></script>
<script src="js/nav.js"></script>


</body>
</html>