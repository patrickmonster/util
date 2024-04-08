import { useEffect, useState } from "react";
import styled from "styled-components";

const contnet = `
<!DOCTYPE html>
<html class="route-index route-default">
  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">

  <title>웹 프로그래밍 튜토리얼 | PoiemaWeb</title>

  <meta name="author" content="Ung-mo Lee">
  
  <meta name="description" content="Front-end Development Tutorial">
  <meta name="keywords" content="Front-end Development Tutorial">
  

  <meta property="og:type" content="website">
  <meta property="og:url" content="https://poiemaweb.com/">
  <meta property="og:title" content="웹 프로그래밍 튜토리얼 | PoiemaWeb">
  <meta property="og:description" content="Front-end Development Tutorial">
  <meta property="og:site_name" content="PoiemaWeb">
  <meta property="og:image" content="https://poiemaweb.com/img/poiemaweb.jpg">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="fb:app_id" content="1777080295904196">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@ungmo2">
  <meta name="twitter:creator" content="@ungmo2">
  <meta name="twitter:title" content="PoiemaWeb">
  <meta name="twitter:image" content="https://poiemaweb.com/img/poiemaweb.jpg">
  <meta name="twitter:description" content="웹 프로그래밍 튜토리얼">

  <link rel="icon" href="https://poiemaweb.com/img/poiemaweb.jpg">
  <link rel="stylesheet" href="/assets/vendor/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="/assets/vendor/devicon/devicon.min.css">
  <link rel="stylesheet" href="/assets/vendor/codemirror/codemirror.css">
  <link rel="stylesheet" href="/assets/vendor/codemirror/theme/dracula.css">
  <link rel="stylesheet" href="/assets/vendor/cssans/cssans.min.css">

  <link rel="stylesheet" href="/css/main.css?1697537965135915782">
  <!--[if IE]>
    <link rel="stylesheet" type="text/css" href="/css/ie.css" />
  <![endif]-->
  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-1746076505848957",
      enable_page_level_ads: true
    });
  </script>
</head>

  <body>
    <div class="page-hero"></div>
    <div class="page-body">
      <header class="page-header">
  <div class="container">
    <!-- <a class="logo" href="https://poiemaweb.com">PoiemaWeb</a> -->
    <div class="cssans">
      <a class="logo cssans__accessible" href="https://poiemaweb.com"></a>
      <a class="logo cssans__word" href="https://poiemaweb.com">
          <b class="cssans:P"></b>
          <b class="cssans:o"></b>
          <b class="cssans:i"></b>
          <b class="cssans:e"></b>
          <b class="cssans:m"></b>
          <b class="cssans:a"></b>
          <b class="cssans:W"></b>
          <b class="cssans:e"></b>
          <b class="cssans:b"></b>
      </a>
    </div>
  </div>
</header>

      <section class="index-hello">
  <div class="hello">
    <!--<h1>Beginner’s Guide to Web Development</h1>-->
    <!-- <h1>Become a Full-Stack Web Developer</h1> -->
    <h1>Web Development Tutorial</h1>
    <div class="type-wrap">
      Learn to code
      <span id="typed" style="white-space: pre"></span>
    </div>
  </div>
  <div id="scroll-icon"><i class="fa fa-angle-double-down"></i></div>

  <div class="social-icons">
    <a href="https://twitter.com/ungmo2" target="_blank">
      <i class="fa fa-twitter"></i>
    </a>
    <a href="https://github.com/ungmo2" target="_blank">
      <i class="fa fa-github"></i>
    </a>
    <a href="mailto:ungmo2@gmail.com" target="_blank">
      <i class="fa fa-envelope"></i>
    </a>
  </div>
</section>

<div class="book">
  <!-- <a href="http://www.yes24.com/24/Goods/62063090" target="_blank" rel="noopener">
    <img src="img/angular-essentials.png" border="0">
  </a> -->
  <!-- <a href="http://www.yes24.com/Product/Goods/92742567" target="_blank" rel="noopener">
    <img src="img/mjs.png" border="0">
  </a> -->
  <a
    href="http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&linkClass=331405&barcode=9791158392239"
    target="_blank"
    rel="noopener"
  >
    <img src="img/mjs.png" border="0" />
  </a>
</div>

<!-- <div class="index-title">Learning Paths</div> -->
<div class="index-title"></div>

<section class="toc-head">
  <div class="container">
    <p class="toc-column--sections"><strong>17</strong> sections</p>
    <p class="toc-column--lessons"><strong>202</strong> lessons</p>
  </div>
</section>

<section class="toc-component">
  <div class="container">
    <article class="toc-section toc-section--html">
      <div class="toc-heading">
        <i class="devicon-html5-plain"></i>
        <h3>HTML5</h3>
        <small><span>10</span> lessons</small>
      </div>
      <ol class="toc-content">
          
        <li class="toc-month">
          <a href="/Front-end"><em>1</em> 프런트엔드 개발자 학습 방향</a>
        </li>
         
        <li class="toc-month">
          <a href="/html5-syntax"><em>2</em> HTML5 기본 문법</a>
        </li>
         
        <li class="toc-month">
          <a href="/html5-semantic-web"><em>3</em> 시맨틱 요소와 검색 엔진</a>
        </li>
         
        <li class="toc-month">
          <a href="/html5-tag-basic"><em>4</em> 웹페이지의 구성하는 기본 태그</a>
        </li>
         
        <li class="toc-month">
          <a href="/html5-tag-text"><em>5</em> 텍스트 관련 태그</a>
        </li>
         
        <li class="toc-month">
          <a href="/html5-tag-link"><em>6</em> HTML의 핵심 개념인 Hyperlink</a>
        </li>
         
        <li class="toc-month">
          <a href="/html5-tag-list-table"><em>7</em> 목록(List)와 표(Table) 형식 표현을 위한 태그</a>
        </li>
         
        <li class="toc-month">
          <a href="/html5-tag-image-multimedia"><em>8</em> 이미지의 표현과 동영상, 음악 등 멀티미디어를 지원하는 태그</a>
        </li>
         
        <li class="toc-month">
          <a href="/html5-tag-forms"><em>9</em> 사용자와의 커뮤니케이션을 위한 폼 태그</a>
        </li>
         
        <li class="toc-month">
          <a href="/html5-tag-structure"><em>10</em> 웹페이지의 레이아웃을 구성하기 위해 공간을 분할하는 태그</a>
        </li>
        
      </ol>
    </article>

    <article class="toc-section toc-section--css">
      <div class="toc-heading">
        <i class="devicon-css3-plain"></i>
        <h3>CSS3</h3>
        <small><span>22</span> lessons</small>
      </div>
      <ol class="toc-content">
          
        <li class="toc-month">
          <a href="/css3-syntax"><em>1</em> CSS 기본 문법</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-selector"><em>2</em> 셀렉터</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-units"><em>3</em> CSS 프로퍼티 값의 단위</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-box-model"><em>4</em> 박스 모델</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-display"><em>5</em> display, visibility, opacity 프로퍼티</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-background"><em>6</em> 백그라운드</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-font-text"><em>7</em> 폰트와 텍스트</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-position"><em>8</em> 요소의 위치 정의</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-float"><em>9</em> 요소 정렬</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-inheritance-cascading"><em>10</em> 스타일의 상속과 적용 우선 순위</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-vendor-prefix"><em>11</em> 벤더 프리픽스</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-shadow"><em>12</em> 그림자</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-gradient"><em>13</em> 그레이디언트</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-transition"><em>14</em> 트랜지션</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-animation"><em>15</em> 애니메이션</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-transform"><em>16</em> 트랜스폼</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-webfont"><em>17</em> 웹디자인 타이포그래피(Typography)</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-layout"><em>18</em> 레이아웃</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-responsive-web-design"><em>19</em> 반응형 레이아웃</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-flexbox"><em>20</em> 플렉스 박스 레이아웃</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-centering"><em>21</em> 수평/수직 중앙 정렬</a>
        </li>
         
        <li class="toc-month">
          <a href="/css3-removing-white-space-image-element"><em>22</em> image 요소 아래에 패딩된 여분의 공간 제거하기</a>
        </li>
        
      </ol>
    </article>

    <article class="toc-section toc-section--bootstrap">
      <div class="toc-heading">
        <i class="devicon-bootstrap-plain"></i>
        <h3>Bootstrap</h3>
        <small><span>2</span> lessons</small>
      </div>
      <ol class="toc-content">
          
        <li class="toc-month">
          <a href="/bootstrap-basics"><em>1</em> Bootstrap 소개와 설치</a>
        </li>
         
        <li class="toc-month">
          <a href="/bootstrap-grid-system"><em>2</em> Bootstrap 그리드 시스템</a>
        </li>
        
      </ol>
    </article>

    <article class="toc-section toc-section--sass">
      <div class="toc-heading">
        <i class="devicon-sass-plain"></i>
        <h3>Sass</h3>
        <small><span>5</span> lessons</small>
      </div>
      <ol class="toc-content">
          
        <li class="toc-month">
          <a href="/sass-basics"><em>1</em> Sass의 소개, 설치와 간단한 명령어 사용법</a>
        </li>
         
        <li class="toc-month">
          <a href="/sass-script"><em>2</em> CSS를 프로그래밍 언어와 같이 작성할 수 있게 확장한 SassScript</a>
        </li>
         
        <li class="toc-month">
          <a href="/sass-css-extention"><em>3</em> Nesting, import, extend, 조건과 반복, Mixin, Function</a>
        </li>
         
        <li class="toc-month">
          <a href="/sass-built-in-function"><em>4</em> Sass가 제공하는 기본 내장 함수</a>
        </li>
         
        <li class="toc-month">
          <a href="/sass-webpack"><em>5</em> Webpack 개발 환경에서 Sass 사용하기</a>
        </li>
        
      </ol>
    </article>

    <article class="toc-section toc-section--javascript">
      <div class="toc-heading">
        <i class="devicon-javascript-plain"></i>
        <h3>JavaScript</h3>
        <small><span>36</span> lessons</small>
      </div>
      <ol class="toc-content">
          
        <li class="toc-month">
          <a href="/coding"><em>1</em> 기본 개념과 동작 원리 이해의 중요성</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-introduction"><em>2</em> 자바스크립트란?</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-hello-world"><em>3</em> 자바스크립트 개발 환경과 실행 방법</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-browser"><em>4</em> 브라우저 동작 원리</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-syntax-basics"><em>5</em> 자바스크립트의 기본 문법</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-data-type-variable"><em>6</em> 데이터 타입과 변수</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-operator"><em>7</em> 연산자</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-control-flow"><em>8</em> 제어문</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-type-coercion"><em>9</em> 타입 변환과 단축 평가</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-object"><em>10</em> 객체</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-immutability"><em>11</em> 객체와 변경불가성(Immutability)</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-function"><em>12</em> 함수</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-type-check"><em>13</em> 타입 체크</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-prototype"><em>14</em> 프로토타입</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-scope"><em>15</em> 스코프</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-strict-mode"><em>16</em> 보다 안정적인 자바스크립트 개발 환경을 위한 Strict mode</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-this"><em>17</em> 함수 호출 방식에 의해 결정되는 this</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-closure"><em>18</em> 클로저</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-object-oriented-programming"><em>19</em> 자바스크립트 객체지향 프로그래밍</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-built-in-object"><em>20</em> 빌트인 객체</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-global-object"><em>21</em> 전역 객체</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-number"><em>22</em> Number 레퍼 객체</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-math"><em>23</em> 수학 상수와 함수를 위한 Math 객체</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-date"><em>24</em> 날짜와 시간을 위한 Date 객체</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-regexp"><em>25</em> 정규표현식</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-string"><em>26</em> String 레퍼 객체</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-array"><em>27</em> 배열</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-array-is-not-arrray"><em>28</em> 자바스크립트 배열은 배열이 아니다</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-array-higher-order-function"><em>29</em> 배열 고차 함수</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-dom"><em>30</em> 문서 객체 모델(Document Object Model)</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-async"><em>31</em> 동기식 처리 모델 vs 비동기식 처리 모델</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-event"><em>32</em> 이벤트</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-event-device-orientation"><em>33</em> 디바이스의 방향 정보를 다루는 자바스크립트 이벤트</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-ajax"><em>34</em> 비동기식 처리 모델과 Ajax</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-rest-api"><em>35</em> REST(Representational State Transfer) API</a>
        </li>
         
        <li class="toc-month">
          <a href="/js-spa"><em>36</em> Single Page Application & Routing</a>
        </li>
        
      </ol>
    </article>
    <!-- es6 -->
    <article class="toc-section toc-section--es6">
      <div class="toc-heading">
        <i class="devicon-javascript-plain"></i>
        <h3>ECMAScript6</h3>
        <small><span>14</span> lessons</small>
      </div>
      <ol class="toc-content">
          
        <li class="toc-month">
          <a href="/es6-block-scope"><em>1</em> let, const와 블록 레벨 스코프</a>
        </li>
         
        <li class="toc-month">
          <a href="/es6-template-literals"><em>2</em> 템플릿 리터럴</a>
        </li>
         
        <li class="toc-month">
          <a href="/es6-arrow-function"><em>3</em> 화살표 함수</a>
        </li>
         
        <li class="toc-month">
          <a href="/es6-extended-parameter-handling"><em>4</em> 매개변수 기본값, Rest 파라미터, Spread 문법, Rest/Spread 프로퍼티</a>
        </li>
         
        <li class="toc-month">
          <a href="/es6-enhanced-object-property"><em>5</em> 객체 리터럴 프로퍼티 기능 확장</a>
        </li>
         
        <li class="toc-month">
          <a href="/es6-destructuring"><em>6</em> 디스트럭처링</a>
        </li>
         
        <li class="toc-month">
          <a href="/es6-class"><em>7</em> 클래스</a>
        </li>
         
        <li class="toc-month">
          <a href="/es6-module"><em>8</em> 모듈</a>
        </li>
         
        <li class="toc-month">
          <a href="/es6-promise"><em>9</em> 프로미스</a>
        </li>
         
        <li class="toc-month">
          <a href="/es6-symbol"><em>10</em> 7번째 타입 심볼(Symbol)</a>
        </li>
         
        <li class="toc-month">
          <a href="/es6-iteration-for-of"><em>11</em> 이터레이션과 for...of 문</a>
        </li>
         
        <li class="toc-month">
          <a href="/es6-generator"><em>12</em> 제너레이터와 async/await</a>
        </li>
         
        <li class="toc-month">
          <a href="/es6-babel-webpack-1"><em>13</em> Babel과 Webpack을 이용한 ES6 환경 구축 ①</a>
        </li>
         
        <li class="toc-month">
          <a href="/es6-babel-webpack-2"><em>14</em> Babel과 Webpack을 이용한 ES6 환경 구축 ②</a>
        </li>
        
      </ol>
    </article>
    <article class="toc-section toc-section--jquery">
      <div class="toc-heading">
        <i class="devicon-jquery-plain"></i>
        <h3>jQuery</h3>
        <small><span>4</span> lessons</small>
      </div>
      <ol class="toc-content">
          
        <li class="toc-month">
          <a href="/jquery-basics"><em>1</em> jQuery Basics</a>
        </li>
         
        <li class="toc-month">
          <a href="/jquery-ajax-json"><em>2</em> jQuery Ajax & JSON</a>
        </li>
         
        <li class="toc-month">
          <a href="/jquery-deferred"><em>3</em> jQuery Deferred Object</a>
        </li>
         
        <li class="toc-month">
          <a href="/jquery-plugin"><em>4</em> jQuery Plugin</a>
        </li>
        
      </ol>
    </article>

    <!-- <article class="toc-section toc-section--snippet">
      <div class="toc-heading">
        <i class="devicon-nodewebkit-plain"></i>
        <h3>Snippet</h3>
        <small><span>12</span> lessons</small>
      </div>
      <ol class="toc-content">
      
      
        
          <li class="toc-month">
            <a href="/snippet-resets"><em>1</em> Snippet - Resets</a>
          </li>
      
        
          <li class="toc-month">
            <a href="/snippet-shape"><em>2</em> Snippet - Shape</a>
          </li>
      
        
          <li class="toc-month">
            <a href="/snippet-navigation"><em>3</em> Snippet - Navigation</a>
          </li>
      
        
          <li class="toc-month">
            <a href="/snippet-preloader"><em>4</em> Snippet - Preloader</a>
          </li>
      
        
          <li class="toc-month">
            <a href="/snippet-slider"><em>5</em> Snippet - Slider</a>
          </li>
      
        
          <li class="toc-month">
            <a href="/snippet-menu"><em>6</em> Snippet - Menu</a>
          </li>
      
        
          <li class="toc-month">
            <a href="/snippet-gallery"><em>7</em> Snippet - Gallery</a>
          </li>
      
        
          <li class="toc-month">
            <a href="/snippet-jquery"><em>8</em> Snippet - jQuery</a>
          </li>
      
        
          <li class="toc-month">
            <a href="/snippet-scroll"><em>9</em> Snippet - Scroll</a>
          </li>
      
        
          <li class="toc-month">
            <a href="/snippet-hover-effect"><em>10</em> Snippet - Hover Effect</a>
          </li>
      
        
          <li class="toc-month">
            <a href="/snippet-text"><em>11</em> Snippet - Text</a>
          </li>
      
        
          <li class="toc-month">
            <a href="/snippet-misc"><em>12</em> Snippet - Misc</a>
          </li>
      
      </ol>
    </article> -->

    <article class="toc-section toc-section--nodejs">
      <div class="toc-heading">
        <i class="devicon-nodejs-plain"></i>
        <h3>Node.js</h3>
        <small><span>5</span> lessons</small>
      </div>
      <ol class="toc-content">
          
        <li class="toc-month">
          <a href="/nodejs-basics"><em>1</em> Node.js Basics</a>
        </li>
         
        <li class="toc-month">
          <a href="/nodejs-npm"><em>2</em> Node.js & npm</a>
        </li>
         
        <li class="toc-month">
          <a href="/nodejs-module"><em>3</em> Node.js module</a>
        </li>
         
        <li class="toc-month">
          <a href="/nodejs-file-upload-example"><em>4</em> Node.js file upload example</a>
        </li>
         
        <li class="toc-month">
          <a href="/nodejs-keeping-secrets"><em>5</em> Node.js에서 비밀 설정 정보(Secrets) 관리</a>
        </li>
        
      </ol>
    </article>

    <article class="toc-section toc-section--express">
      <div class="toc-heading">
        <i class="devicon-nodejs-plain"></i>
        <h3>Express</h3>
        <small><span>6</span> lessons</small>
      </div>
      <ol class="toc-content">
          
        <li class="toc-month">
          <a href="/express-basics"><em>1</em> Routing, Middleware, Static file, Template engine</a>
        </li>
         
        <li class="toc-month">
          <a href="/express-error-handling"><em>2</em> Express의 기본적인 에러 처리 방식</a>
        </li>
         
        <li class="toc-month">
          <a href="/express-session-handling"><em>3</em> MemoryStore를 사용한 Session 관리와 Redis를 사용한 영속적 Session 관리</a>
        </li>
         
        <li class="toc-month">
          <a href="/nodejs-mysql"><em>4</em> Node.js(Express)와 MySQL 연동</a>
        </li>
         
        <li class="toc-month">
          <a href="/nodejs-socketio"><em>5</em> Socket.io를 사용한 실시간 채팅 애플리케이션</a>
        </li>
         
        <li class="toc-month">
          <a href="/nodejs-heroku"><em>6</em> Heroku에서의 Node.js와 MongoDB 설치</a>
        </li>
        
      </ol>
    </article>

    <article class="toc-section toc-section--mongodb">
      <div class="toc-heading">
        <i class="devicon-mongodb-plain"></i>
        <h3>MongoDB</h3>
        <small><span>3</span> lessons</small>
      </div>
      <ol class="toc-content">
          
        <li class="toc-month">
          <a href="/mongdb-basics"><em>1</em> MongoDB의 기본 개념과 설치</a>
        </li>
         
        <li class="toc-month">
          <a href="/mongdb-basics-shell-crud"><em>2</em> MongoDB Shell method를 사용한 CRUD의 기본</a>
        </li>
         
        <li class="toc-month">
          <a href="/mongoose"><em>3</em> Mongoose</a>
        </li>
        
      </ol>
    </article>

    <article class="toc-section toc-section--typescript">
      <div class="toc-heading">
        <i class="devicon-typescript-plain"></i>
        <h3>TypeScript</h3>
        <small><span>7</span> lessons</small>
      </div>
      <ol class="toc-content">
          
        <li class="toc-month">
          <a href="/typescript-introduction"><em>1</em> TypeScript의 소개와 개발 환경 구축</a>
        </li>
         
        <li class="toc-month">
          <a href="/typescript-vscode"><em>2</em> Visual Studio Code에서의 TypeScript 개발 환경 구축</a>
        </li>
         
        <li class="toc-month">
          <a href="/typescript-typing"><em>3</em> 정적 타이핑</a>
        </li>
         
        <li class="toc-month">
          <a href="/typescript-class"><em>4</em> 클래스</a>
        </li>
         
        <li class="toc-month">
          <a href="/typescript-interface"><em>5</em> 인터페이스</a>
        </li>
         
        <li class="toc-month">
          <a href="/typescript-alias"><em>6</em> 타입 앨리어스</a>
        </li>
         
        <li class="toc-month">
          <a href="/typescript-generic"><em>7</em> 제네릭</a>
        </li>
        
      </ol>
    </article>

    <!-- angular2 -->
    <article class="toc-section toc-section--angular">
      <div class="toc-heading">
        <i class="devicon-angularjs-plain"></i>
        <h3>Angular</h3>
        <small><span>13</span> lessons</small>
      </div>
      <ol class="toc-content">
          
        <li class="toc-month">
          <a href="/angular-basics"><em>1</em> Angular의 소개와 특징</a>
        </li>
         
        <li class="toc-month">
          <a href="/angular-cli"><em>2</em> Angular CLI를 사용한 프로젝트의 생성, 구성요소 추가와 빌드</a>
        </li>
         
        <li class="toc-month">
          <a href="/angular-component-basics"><em>3</em> 컴포넌트 소개와 기본 구조</a>
        </li>
         
        <li class="toc-month">
          <a href="/angular-component-template"><em>4</em> 템플릿과 템플릿 문법</a>
        </li>
         
        <li class="toc-month">
          <a href="/angular-component-data-binding"><em>5</em> 데이터 바인딩</a>
        </li>
         
        <li class="toc-month">
          <a href="/angular-component-built-in-directive"><em>6</em> 빌트인 디렉티브</a>
        </li>
         
        <li class="toc-month">
          <a href="/angular-service"><em>7</em> 서비스와 의존성 주입</a>
        </li>
         
        <li class="toc-month">
          <a href="/angular-rxjs"><em>8</em> Reactive Programming과 RxJS</a>
        </li>
         
        <li class="toc-month">
          <a href="/angular-rxjs-observable"><em>9</em> Cold observable과 Hot observable</a>
        </li>
         
        <li class="toc-month">
          <a href="/angular-jwt-authentication"><em>10</em> Token 기반 인증</a>
        </li>
         
        <li class="toc-month">
          <a href="/angular-integrate-jquery-plugin"><em>11</em> Angular CLI 환경에서 jQuery 플러그인 사용하기</a>
        </li>
         
        <li class="toc-month">
          <a href="/angular-file-upload"><em>12</em> Angular 파일 업로드</a>
        </li>
         
        <li class="toc-month">
          <a href="/angular-firebase"><em>13</em> Firebase를 사용한 Angular 애플리케이션 배포</a>
        </li>
        
      </ol>
    </article>

    <article class="toc-section toc-section--tools">
      <div class="toc-heading">
        <i class="devicon-webpack-plain"></i>
        <h3>Tools</h3>
        <small><span>12</span> lessons</small>
      </div>
      <ol class="toc-content">
          
        <li class="toc-month">
          <a href="/eslint"><em>1</em> ESLint</a>
        </li>
         
        <li class="toc-month">
          <a href="/jekyll-basics"><em>2</em> Jekyll와 GitHub Pages를 사용한 Static WebSite 구축</a>
        </li>
         
        <li class="toc-month">
          <a href="/json-server"><em>3</em> JSON Server</a>
        </li>
         
        <li class="toc-month">
          <a href="/docker-mysql"><em>4</em> Docker를 사용하여 MySQL 설치하고 접속하기</a>
        </li>
         
        <li class="toc-month">
          <a href="/docker-mongodb"><em>5</em> Docker를 사용하여 MongoDB 설치하고 접속하기</a>
        </li>
         
        <li class="toc-month">
          <a href="/parcel"><em>6</em> Parcel</a>
        </li>
         
        <li class="toc-month">
          <a href="/storybook"><em>7</em> Storybook</a>
        </li>
         
        <li class="toc-month">
          <a href="/jest-esm"><em>8</em> Jest에서 import/export를 사용하기</a>
        </li>
         
        <li class="toc-month">
          <a href="/jsdoc-type-hint"><em>9</em> JSDoc을 사용하여 자바스크립트에 타입 힌트 제공하기</a>
        </li>
         
        <li class="toc-month">
          <a href="/babel-polyfill"><em>10</em> 폐지된 @babel/polyfill 대신 @babel/plugin-transform-runtime을 사용해 폴리필 추가하기</a>
        </li>
         
        <li class="toc-month">
          <a href="/devServer"><em>11</em> Webpack DevServer</a>
        </li>
         
        <li class="toc-month">
          <a href="/tailwind"><em>12</em> tailwindcss + PostCSS + Webpack</a>
        </li>
        
      </ol>
    </article>
  </div>
</section>


    </div>
    <footer>
  <div class="container">
    <p class="social-icons">
      <a href="https://twitter.com/ungmo2" target="_blank">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="https://github.com/ungmo2" target="_blank">
        <i class="fa fa-github"></i>
      </a>
      <a href="mailto:ungmo2@gmail.com" target="_blank">
        <i class="fa fa-envelope"></i>
      </a>
    </p>
    <!-- facebook like button -->
    <iframe
      src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fpoiemaweb%2F&width=130&layout=button_count&action=like&size=small&show_faces=true&share=true&height=46&appId=1777080295904196"
      width="170"
      height="30"
      style="border: none; overflow: hidden"
      scrolling="no"
      frameborder="0"
      allowTransparency="true"
    ></iframe>

    <p class="copyright">© 2021&nbsp;&nbsp;Ung-mo Lee</p>
    <p class="theme-by">
      Hosted on
      <a href="https://pages.github.com/"
        >GitHub Pages&nbsp;
        <i class="fa fa-github"></i>
      </a>
      &nbsp;&nbsp;Using <a href="https://marksheet.io">MarkSheet</a>
    </p>
    <p class="theme-by">In his heart a man plans his course, but the LORD determines his steps.</p>
  </div>
</footer>

    
    <script src="/assets/vendor/jquery/dist/jquery.min.js"></script>
<script src="/assets/vendor/typed.min.js"></script>
<script src="/javascript/main.js"></script>



<!-- Google Analytics -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-72992114-1', 'auto');
  ga('send', 'pageview');
</script>
<!-- End Google Analytics -->

  </body>
</html>
`;

const Line = styled.li`
  ::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
  }
`;

const domparser = new DOMParser();

export const htmlParser = (html: string) =>
  domparser.parseFromString(html, "text/html");

type TypeMatchCallbackReturn = {
  tag: string;
  content?: string;
  end?: boolean;
  attr?: {
    [key: string]: string;
  };
};
type TypeMatchCallback = (line: string) => TypeMatchCallbackReturn;
const attrReg = / ([^"]*)=\"([^"]*)\"/gi;

const tapCalculate = (node: string) => {
  const tagName = (node.match(/[a-zA-Z0-9]+/gi)?.[0] || "").trimEnd();
  const s = node.startsWith(`/${tagName}`);
  const e = node.endsWith(`/${tagName}`);
  return s && e ? 0 : s ? -1 : e ? 1 : 0;
};

const getAttr = (line: string) => {
  const match = line.match(attrReg);
  const attr: {
    [key: string]: string;
  } = {};
  match?.forEach((m) => {
    const [key, value] = m.split("=");
    attr[key.trim()] = value.replace(/"/g, "");
  });

  return attr;
};

/**
 * 태그별로 매칭되는 함수를 정의
 */
const typeMatch: {
  [key in string]: TypeMatchCallback;
} = {
  meta: (line: string) => {
    return {
      tag: "meta",
      end: true,
      attr: getAttr(line),
    };
  },
  link: (line: string) => {
    return {
      tag: "meta",
      end: true,
      attr: getAttr(line),
    };
  },
  "!--[if IE]": (line: string) => {
    return {
      tag: "!--[if IE]",
      end: true,
    };
  },
  "![endif]--": (line: string) => {
    return {
      tag: "![endif]--",
      end: true,
    };
  },
  img: (line: string) => {
    return {
      tag: "img",
      end: true,
    };
  },
};

const getTag = (node: string) => {
  // if (["!--[if", "![endif]--"].includes(node.split(" ")[0])) {
  //   return node.split(" ")[0];
  // }

  if (node.startsWith("!--[if") || node.startsWith("![endif]--")) {
  }
  return (node.match(/^<?\/?[a-zA-Z0-9]+/gi)?.[0] || "").trimEnd();
};

export default () => {
  const [html, setHtml] = useState<string>();
  const [error, setError] = useState<Element>();
  const [origin, setOrigin] = useState<Document>();
  const [line, setLine] = useState<JSX.Element[]>();
  useEffect(() => {
    setHtml(contnet);
  }, []);

  useEffect(() => {
    if (!html) return;

    const doc = htmlParser(html);

    const parsererror = doc.querySelector("parsererror");
    if (parsererror) {
      setError(parsererror);
      parsererror.remove();
    }
    setOrigin(doc);
  }, [html]);

  useEffect(() => {
    if (!origin) return;

    let lineTap = 0;
    // let data = origin.documentElement.outerHTML;
    // const readLine = [];
    // do {
    //   if (/<[a-zA-Z0-9]+/gim.test(data)) {
    //     readLine

    //   }else return
    // } while (true);

    const splitLine = origin.documentElement.outerHTML
      .split("<")
      .reduce((acc, node) => {
        const tag = getTag(node);
        if (tag) {
          const old = getTag(acc[acc.length - 1] || "");
          if (`/${old}` === tag) {
            acc[acc.length - 1] += `<${node}`;
          } else acc.push(`${node}`);
        } else {
          // if (acc[acc.length - 1].endsWith("/>")) {
          // acc[acc.length - 1] += node;
          // } else

          acc[acc.length - 1] += node;
        }

        return acc;
      }, [] as string[])
      .map((node) => `<${node}`);

    // const splitLine = origin.documentElement.outerHTML
    //   .split(/[<>]/gim)
    //   .filter((node) => node.trim() !== "")
    //   .reduce((acc, node) => {
    //     const tag = getTag(node);
    //     const lastTag = getTag(acc[acc.length - 1] || "");
    //     if (lastTag && tag.startsWith(`/${lastTag}`) && tag.length) {
    //       console.log(tag);

    //       acc[acc.length - 1] += `<${node}>`
    //       return acc;
    //     } else {
    //       if (typeMatch[tag]) {
    //         const { end } = typeMatch[tag](node);

    //         if (end) {
    //         } else lineTap += 1;
    //       } else lineTap += 1;
    //     }

    //     if (lineTap < 0) lineTap = 0;

    //     if (tag) {
    //       acc.push(`<${node}>`);
    //     } else {
    //       acc[acc.length - 1] += `${node}`;
    //     }

    //     // acc.push(
    //     //   `${Array.from({ length: lineTap })
    //     //     .map(() => "  ")
    //     //     .join("")} <${node}>`
    //     // );
    //     return acc;
    //   }, [] as string[]);

    lineTap = 0;
    const line = splitLine.map((node, index) => {
      const line = node;

      return (
        <Line key={index} id={"l" + index} className="text-left">
          {/* <span className="text-gray-500 mr-2 w-[20px] inline-block float-left">
            {index}
          </span> */}
          <code
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {line}
          </code>
        </Line>
      );
    });

    setLine(line);

    console.log(line.length);
  }, [origin]);

  return (
    <div className="w-full">
      <div className="text-2xl font-bold">HTML parser</div>
      {/* <textarea
        className="w-full h-96 bg-darkmode-100/20"
        value={html}
        onChange={(e) =>
          setHtml(e.target.value.replace(/>[\s\n ]*</gi, ">\n<"))
        }
      /> */}
      {error && (
        <div className="overflow-auto w-full bg-darkmode-100/20">
          <div>error</div>
          <div dangerouslySetInnerHTML={{ __html: error.innerHTML }} />
        </div>
      )}
      <div className="overflow-auto w-full h-[90vh] bg-darkmode-100/20">
        {line && <ul>{line}</ul>}
      </div>
    </div>
  );
};
