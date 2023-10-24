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
<script src="${pageContext.request.contextPath}/jquery/jquery-3.7.1.js"></script>
<script>
$(function(){
	var vo = {
		name:'둘리',
		password:'1234',
		contents:'호이 '
	};
	
	$('button').click(function(){
		console.log($.param(vo));
		$.ajax({
			url:'${pageContext.request.contextPath}/api/post01'	,	// 연결 fetch
			async: true, 											// 비동기 통신 
			type: 'post',
			dataType: 'json',										// 서버에서 해당데이터 타입으로 받음.
			contentType: 'application/x-www-form-urlencoded',
			data: $.param(vo),
			success: function(response){
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
				
				$('#data').html(html);
				
				
			},
			error: function(xhr, status, error){
				console.error(status, error);
			}
		});
	});
});
</script>
</head>
<body>
	<h1>AJAX Test: JSON Format Data: $.ajax({}) 함수 사용하기.</h1>
	<button>데이터 보내기(POST, PUT, DELETE).</button>
	<div id='data'></div>
</body>
</html>