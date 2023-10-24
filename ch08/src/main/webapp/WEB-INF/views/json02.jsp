<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script>
// DOM Load Event
// 1. load : DOM, CSSOM, Image 모두다 로딩.
// 2. DOMContentLoaded: DOM만 로딩. 

window.addEventListener('DOMContentLoaded',function(){
	document
		.getElementsByTagName('button')[0]
		.addEventListener('click',function(){
			var xhr = new XMLHttpRequest();
			
			xhr.addEventListener('readystatechange',function(){
				if(this.readyState === XMLHttpRequest.UNSENT){ // readyState: 0
					/* Request가 초기화 되기 전 */
					console.log('State:UNSENT');
				}else if(this.readyState === XMLHttpRequest.OPENED){ // readyState: 1
					/* 서버와 연결이 성공 */
					console.log('State:OPENED');
				}else if(this.readyState === XMLHttpRequest.HEADERS_RECEIVED){ // readyState: 2
					/* 서버가 request를 받음 */
					console.log('State:HEADERS_RECEIVED');
				}else if(this.readyState === XMLHttpRequest.LOADING){ // readyState: 3
					/* reponse를 처리 중 */	
					console.log('State:LOADING');
				}else if(this.readyState === XMLHttpRequest.DONE){ // readyState: 4
					/* reponse를 처리 끝 */
					console.log('State:DONE');
				
					if(this.status !== 200){
						console.error(this.status, this.state);
						return ;
					}
					
					console.log(this.responseText, typeof(this.responseText));
					
					var response = JSON.parse(this.responseText);
					console.log(response);
					
					if(response.result !== "success"){
						console.error(response.message);
						return;
					}
					
					var vo = response.data;
					var html = "";
					html += ("<h3>" + vo.no+ "</h3>");
					html += ("<h4>" + vo.name+ "</h4>");
					html += ("<h5>" + vo.contents+ "</h5>");
					
					document
					.getElementById("data")
					.innerHTML = html;
				}
			})
			
			xhr.open('get','${pageContext.request.contextPath}/api/json01',true/*async*/);
			xhr.send();
		})
});

</script>
</head>
<body>
	<h1>AJAX Test: JSON Format Data: XMLHttpRequest 직접 사용하기.</h1>
	<button>데이터 가져오기(GET)</button>
	<div id='data'></div>
</body>
</html>