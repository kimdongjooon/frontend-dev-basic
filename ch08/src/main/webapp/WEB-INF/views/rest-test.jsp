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
	$('#create').click(function(){
		var vo = {
			name : '둘리',
			email: 'dooly@gmail.com',
			password: '1234',
			gender: 'male'
		}
		$.ajax({
			url:'${pageContext.request.contextPath}/api/user'	,	// 연결 fetch
			type: 'post',
			dataType: 'json',										// 서버에서 해당데이터 타입으로 받음.
			contentType: 'application/json',
			data: JSON.stringify(vo),
			success: function(response){
				console.log(response)
			}
		});
	});
	
	$('#read').click(function(){
		$.ajax({
			url:'${pageContext.request.contextPath}/api/user',	// 연결 fetch
			type: 'get',
			dataType: 'json',										// 서버에서 해당데이터 타입으로 받음.
			success: function(response){
				console.log(response)
			}
		});
	});
	
	$('#update').click(function(){
		var vo = {
			name : '둘리',
			password: '123456789',
			gender: 'male'
		}
		$.ajax({
			url:'${pageContext.request.contextPath}/api/user/10'	,	// 연결 fetch
			type: 'put',
			dataType: 'json',										// 서버에서 해당데이터 타입으로 받음.
			contentType: 'application/json',
			data: JSON.stringify(vo),
			success: function(response){
				console.log(response)
			}
		});
	});
	
	$('#delete').click(function(){
		$.ajax({
			url:'${pageContext.request.contextPath}/api/user/10'	,	// 연결 fetch
			type: 'delete',
			dataType: 'json',										// 서버에서 해당데이터 타입으로 받음.
			contentType: 'application/x-www-form-urlencoded',
			data: "password=12345",
			success: function(response){
				console.log(response)
			}
		});
	});
});


</script>
</head>
<body>
	<h1>AJAX Test: Restful API</h1>
	
	<button id='create'>[C]reate(post)</button>
	<br><br>
	
	<button id='read'>[R]ead(get)</button>
	<br><br>
	
	<button id='update'>[U]pdate(put)</button>
	<br><br>
	
	<button id='delete'>[D]elete(delete)</button>
	<br><br>
	
	
	
	
</body>
</html>