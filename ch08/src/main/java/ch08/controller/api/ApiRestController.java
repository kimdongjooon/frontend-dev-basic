package ch08.controller.api;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch08.dto.JsonResult;
import ch08.vo.UserVo;

@RestController // Controller와차이 : @ResponseBody를 안붙여도됨. 다 json으로 응답함.
@RequestMapping("/api/user")
public class ApiRestController {
	
	@PostMapping("")
	public JsonResult create(@RequestBody UserVo vo) {
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
}
