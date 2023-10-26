<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%> 
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
<title>mysite</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-3.7.1.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>

// 무한 스크롤 처리는 scroll.html 참고.
// api url /api/guestbook?sno=0 : sno보다 작은 no의 row를 top-k(limit 0 ,k)
var render = function(vo, mode){
	var html = 
		"<li data-no='"+vo.no+"'>"+
		"<strong>"+vo.name+"</strong>"+
		"<p>"+vo.contents+"</p>"+
		"<strong></strong>"+
		"<a href='#' data-no=''>삭제</a>"+ 
		"</li>"
		
		
	$("#list-guestbook")[mode ? 'prepend':'append'](html);
}

$(function(){
	var dialogDelete = $("#dialog-delete-form").dialog({
		autoOpen: false,
		model: true,
		button:{
			'삭제': function(){
				var no = $("#hidden-no").val();
				var password = $("#password-delete").val();
				
				$(this).dialog("ajax 삭제.", no, password);
				
				// 후처리.
				// 1. response.data 가지고 있는 <li data+no='{no}' > 찾아서 삭제.
				// 2. dialogDelete.dialog('close');
				
				// 폼의 input value reset;
			},
			'취소': function(){
				$(this).dialog("close");
			}
		},
		close: function(){
			console.log("dialog close");
		}
	});
	
	
	// 메시지 삭제 버튼 click 이벤트 처리(Live Event)
	$(document).on('click','#list-guestbook li a',function(event){
		event.preventDefault();
		
		$("#hidden-no").val($(this).attr('data-no'));
		
		console.log($(this).attr('data-no'));
		dialogDelete.dialog('open');
	});
	
	//최초 리스트 가져오기.
	fetch();
	
});

var fetch = function(){
	$.ajax({
		url: "/ch08/api/guestbook",
		type: "get",
		dataType: "json",
		success: function(response){
			if(response.result === 'fail'){
				console.error(response.message);
				return;
			}
			
			response.data.forEach(function(vo){
				render(vo, false);
			})
		}
	})
	
}
$(function(){
	$(window).scroll(function(){
		
		// 조건(스크롤바가 바닥에 도착)이 되면 fetch() 호출	
	})
	
	fetch();
})

$(function(){
	$('#add-form').submit(function(event){
		event.preventDefault();
		
		var vo ={};
		vo.name = $("#input-name").val();
		vo.password = '1234';
		vo.message = '인사';
		
		$.ajax({
			url: '/ch08/api/guestbook',
			type: 'post',
			dataType: 'Json',
			contentType: 'application/json',
			data: JSON.stringify(vo),
			success: function(response){
				if(response.result === 'fail'){
					console.error(response.message);
					return;
				}
				render(response.data, true);
				console.log(response);
			}
			
		})	
	})

});
</script>
</head>
<body>
	<div id="container">
		
		<div id="content">
			<div id="guestbook">
				<h1>방명록</h1>
				<form id="add-form" action="" method="post">
					<input type="text" id="input-name" placeholder="이름">
					<input type="password" id="input-password" placeholder="비밀번호">
					<textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea>
					<input type="submit" value="보내기" />
				</form>
				<ul id="list-guestbook">
					<li data-no=''>
						<strong>지나가다가</strong>
						<p>
							별루입니다.<br>
							비번:1234 -,.-
						</p>
						<strong></strong>
						<a href='' data-no=''>삭제</a> 
					</li>
					
					<li data-no=''>
						<strong>둘리</strong>
						<p>
							안녕하세요<br>
							홈페이지가 개 굿 입니다.
						</p>
						<strong></strong>
						<a href='' data-no=''>삭제</a> 
					</li>
									
				</ul>
			</div>
			<div id="dialog-delete-form" title="메세지 삭제" style="display:none">
  				<p class="validateTips normal">작성시 입력했던 비밀번호를 입력하세요.</p>
  				<p class="validateTips error" style="display:none">비밀번호가 틀립니다.</p>
  				<form>
 					<input type="password" id="password-delete" value="" class="text ui-widget-content ui-corner-all">
					<input type="hidden" id="hidden-no" value="">
					<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
  				</form>
			</div>
			<div id="dialog-message" title="" style="display:none">
  				<p></p>
			</div>						
		</div>
	</div>
</body>
</html>