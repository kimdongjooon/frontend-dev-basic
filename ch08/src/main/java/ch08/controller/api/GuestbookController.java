package ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch08.dto.JsonResult;
import ch08.vo.GuestBookVo;

@RestController
@RequestMapping("/api/guestbook")
public class GuestbookController {
	
	@PostMapping
	public JsonResult ex01(@RequestBody GuestBookVo vo) {
		vo.setNo(1);
		vo.setPassword("");
		
		return JsonResult.success(vo);
		
		
	}
	
	@GetMapping
	public JsonResult ex02(Long sno) {
		List<GuestBookVo> list = new ArrayList<>();
		
		GuestBookVo vo1 = new GuestBookVo();
		vo1.setNo(10);
		vo1.setName("둘리1");
		vo1.setContents("호이1");
		list.add(vo1);
		
		GuestBookVo vo2 = new GuestBookVo();
		vo2.setNo(20);
		vo2.setName("둘리2");
		vo2.setContents("호이2");
		list.add(vo2);
		
		GuestBookVo vo3 = new GuestBookVo();
		vo3.setNo(30);
		vo3.setName("둘리3");
		vo3.setContents("호이3");
		list.add(vo3);
		
		return JsonResult.success(list);
	}
	
}
