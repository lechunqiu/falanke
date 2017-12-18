/**
 * 首页套餐排版
 */
$(function() {

	var tcwidth = $(".taochan_left").width();
	var tcheight1 = tcwidth * 100;
	tcheight2 = parseInt(tcheight1 / 66);
	$(".taochan_left").height(tcheight2);
	$(".taochan_right").height(tcheight2);
	var bigwidht = $(".taochan").width();
	fourwidht = bigwidht / 4;
	$(".taochan_right_top div.taochan_right_top_img").width(fourwidht)
	$(".taochan_right_top div.taochan_right_top_img + div").width(fourwidht * 2)
	$(".taochan_right_bottom div.taochan_right_top_img").width(fourwidht * 2);
	$(".taochan_right_bottom div.taochan_right_top_img + div").width(fourwidht);

})
/*
 * 导航二级菜单切换
 */
$(function() {
	$(".nav_erji ul li").click(function() {
		$(this).addClass("erji_selected").siblings().removeClass("erji_selected");
	})
})
/*
 * 全屋定制列表
 */

$(function() {
	$(".quanwu_list").children().addClass("quanwu_img_style");
	$(".quanwu_list").children(":odd").addClass("even_mr");
	$(".dzi_bottom").children("a").addClass("qw_read_more");
})
/*
 * 页码
 */
$(function() {
	$(".page ul li").click(function() {
		$(this).addClass("page_selected")
			.siblings().removeClass("page_selected");
		/*return false;*/
	})
})
/*
 * 首页锚点
 */
$(function() {
	$(".md_nav ul li").click(function() {
		$(this).addClass("md_selected").siblings().removeClass("md_selected");

	})
})
/*
 * 精品套餐详情分类
 */
$(function() {
	$(".jptc_xi_fenlei ul li").click(function() {
		$(this).addClass("jptcfl_selected").siblings().removeClass("jptcfl_selected");
	})
	$(".jptc_xi_fenlei ul li:last").addClass("last_sytle");
})
/*
 * 套餐详情定制流程优势文字颜色
 */
$(function() {
	$(".lzys_bottom ul li").eq(0).css("color", "#37d4df");
	$(".lzys_bottom ul li").eq(1).css("color", "#ffbd29");
	$(".lzys_bottom ul li").eq(2).css("color", "#6078b9");
	$(".lzys_bottom ul li").eq(3).css("color", "#ff6f28");
})
/*
 * 配套家具详情分类
 */
$(function() {
	$(".ptjj_xq_fenlei ul li ").click(function() {
		$(this).addClass("ptjjfl_selected").siblings().removeClass("ptjjfl_selected");
	})
	$(".ptjj_xq_fenlei ul li:last ").addClass("ptjjfl_last");
})
/*
 * 家具购买颜色款式切换
 */
$(function() {
	$(".cpyanse ul li").click(function() {
		$(this).addClass("cpys_selected").siblings().removeClass("cpys_selected");
	});
	$(".cpkuanxing ul li").click(function() {
		$(this).addClass("cpkx_selected").siblings().removeClass("cpkx_selected");
	})
})

/*
 * 购物数量加减
 */
$(function() {

	$(".paynum p").css({
		"position": "absolute",
		"top": "30px",
		"color": "red"
	})
	$(".paynum p").hide();
	$(".paynum span.spjian").click(function() {
		var paynum = $(this).siblings("div").children("input").val();
		if(paynum >= 2) {
			paynum--;
			$(this).siblings("div").children("input").val(paynum);
		} else {
			$(this).siblings("p").show();
		}
	})
	$(".paynum span.spjia").click(function() {
		var paynum = $(this).siblings("div").children("input").val();
		paynum++;
		$(this).siblings("div").children("input").val(paynum);
		$(this).siblings("p").hide();
	})

	$(".paynum div input").bind('input propertychange', function() {
		var paynum = $(this).siblings("div").children("input").val();
		/*		var danjia=$(this).parents(".spfldiv").siblings(".danjia").text();
					danjia=parseInt(danjia);
				$(this).parents(".spfldiv").siblings(".spgwxj").children("p").find("b").text();*/
		if(paynum != 0) {
			$(this).parent("div").siblings("p").hide();
		}

	});
	$(".paynum div input").blur(function() {
		if($(this).val() == "") {
			$(this).val(1)
		}
	})

})

/*
 * 资讯列表页限制字符个数
 */
$(document).ready(function() {
	$(".zxwdlist_title p").each(function() {
		var maxwidth = 112;
		if($(this).text().length > maxwidth) {
			$(this).text($(this).text().substring(0, maxwidth));
			$(this).html($(this).html() + "...");
		}
	});
});
$(document).ready(function() {
	$(".zxwdnr_tw p").each(function() {
		var maxwidth = 46;
		if($(this).text().length > maxwidth) {
			$(this).text($(this).text().substring(0, maxwidth));
			$(this).html($(this).html() + "...");
		}
	});
});
/*
 * 登录方式切换
 */
$(function() {
	$(".dlf_title ul li:first").addClass("dlftli_selected");
	$(".dlf_title ul li").click(function() {
		$(this).addClass("dlftli_selected")
			.siblings().removeClass("dlftli_selected");
	})
	$(".dlf_xq div.dengl_sr").hide()
	$(".dlf_title ul li:first-child").click(function() {
		$(".dlf_xq div.dengl_erwm").show().siblings().hide();
	})
	$(".dlf_title ul li:last-child").click(function() {
		$(".dlf_xq div.dengl_sr").show().siblings().hide();
	})
})
/*
 * 登录检验能容是否为空
 */
$(function() {
	$(".dl_input span").hide();

	$("#denglubtn").click(function() {
		var nameval = $("#name").val();
		var pswval = $("#password").val()
		if(nameval == "") {
			$("#name").nextAll("span").show();
			return false;
		}
		if(pswval == "") {
			$("#password").nextAll("span").show();
			return false;
		}
	})
	$("#name").blur(function() {
		var nameval = $("#name").val();
		if(nameval != null) {
			$(this).nextAll("span").hide();
		}

	})
	$("#password").blur(function() {
		var pswval = $("#password").val()
		if(pswval != null) {
			$(this).nextAll("span").hide();
		}
	})

})
/*
 * 注册信息验证
 */
$(function() {
	$(".zctishi").hide();
	$(".zc_input input.zdname").focus().next().text('请输入3-20位的用户名').show().removeClass("state2").addClass("state1");
	var ok1 = false;
	var ok2 = false;
	var ok3 = false;
	var ok4 = false;
	var ok5 = false;
	// 验证用户名
	$('input.zdname').focus(function() {
		$(this).next().text('用户名应该为3-20位之间').show().removeClass('state2').addClass('state1');;
	}).blur(function() {
		if($(this).val().length >= 3 && $(this).val().length <= 12 && $(this).val() != '') {
			$(this).next().text('输入成功').hide();
			ok1 = true;
		} else {
			$(this).next().text('用户名应该为3-20位之间').show().removeClass("state1").addClass("state2");
		}

	});

	//验证密码
	$('input.zcpassword').focus(function() {
		$(this).next().text('密码应该为6-20位之间').removeClass('state2').addClass('state1');
	}).blur(function() {
		if($(this).val().length >= 6 && $(this).val().length <= 20 && $(this).val() != '') {
			$(this).next().text('输入成功').hide();
			ok2 = true;
		} else {
			$(this).next().text('密码应该为6-20位之间').show().removeClass("state1").addClass("state2");
		}

	});

	//验证确认密码
	$('input.zcpasswordt').focus(function() {
		$(this).next().text('输入的确认密码要和上面的密码一致,规则也要相同').show().removeClass('state2').addClass('state1');
	}).blur(function() {
		if($(this).val().length >= 6 && $(this).val().length <= 20 && $(this).val() != '' && $(this).val() == $('input.zcpassword').val()) {
			$(this).next().text('输入成功').hide();
			ok3 = true;
		} else {
			$(this).next().text('输入的确认密码要和上面的密码一致,规则也要相同').show().removeClass("state1").addClass("state2");
		}

	});

	//验证手机号
	$('input.zcmobile').focus(function() {
		$(this).next().text('请输入11位手机号').show().removeClass('state2').addClass('state1');
	}).blur(function() {
		if($(this).val().match(/^(((13[0-9]{1})|159|153)+\d{8})$/) && $(this).val() != "") {
			$(this).next().text('输入成功').hide();
			ok4 = true;
		} else {
			$(this).next().text('请输入有效的手机号').show().removeClass("state1").addClass("state2");
		}

	});

	//验证验证码
	$("input.zcyanzm").focus(function() {
		$(this).next().text('请输入收到的验证码').show().removeClass('state2').addClass('state1');
	}).blur(function() {
		if($(this).val() != "") {
			$(this).next().text('输入成功').hide();
			ok5 = true;
		} else {
			$(this).next().text('请输入有效的验证码').show().removeClass("state1").addClass("state2");
		}

	});

	//提交按钮,所有验证通过方可提交

	$('.zc_bottom input[type="submit"]').click(function() {
		if(ok1 && ok2 && ok3 && ok4) {
			$('.zc_left form').submit();
		} else {
			return false;
		}
	});

})
/*
 * 找回密码验证用户
 */
$(function() {
	$(".sryhm_box form .zc_input .zctishi").hide();
	var yzok1 = false;
	var yzok2 = false;
	//验证手机号
	$('.sryhm_box form .zc_input input.zcmobile').focus(function() {
		$(this).next().text('请输入11位手机号').show().removeClass('state2').addClass('state1');
	}).blur(function() {
		if($(this).val().match(/^(((13[0-9]{1})|159|153)+\d{8})$/) && $(this).val() != "") {
			$(this).next().text('输入成功').hide();
			yzok1 = true;
		} else {
			$(this).next().text('请输入有效的手机号').show().removeClass("state1").addClass("state2");
		}

	});

	//验证验证码
	$(".sryhm_box form .zc_input input.zcyanzm").focus(function() {
		$(this).next().text('请输入收到的验证码').show().removeClass('state2').addClass('state1');
	}).blur(function() {
		if($(this).val() != "") {
			$(this).next().text('输入成功').hide();
			yzok2 = true;
		} else {
			$(this).next().text('请输入有效的验证码').show().removeClass("state1").addClass("state2");
		}

	});
	//提交按钮,所有验证通过方可提交

	$('.sryhm_box form .zc_bottom input[type="submit"]').click(function() {
		if(yzok1 && yzok2) {
			$('.zc_left form').submit();
		} else {
			return false;
		}
	});

})

/*
 * 找回密码重置密码验证
 */
$(function() {
	$(".sryhm_boxt form .zc_input .zctishi").hide();
	var yzmok1 = false;
	var yzmok2 = false;
	//验证密码

	$('.sryhm_boxt form .zc_input  input.zcpassword').focus(function() {
		$(this).next().text('密码应该为6-20位之间').removeClass('state2').addClass('state1');
	}).blur(function() {
		if($(this).val().length >= 6 && $(this).val().length <= 20 && $(this).val() != '') {
			$(this).next().text('输入成功').hide();
			yzmok1 = true;
		} else {
			$(this).next().text('密码应该为6-20位之间').show().removeClass("state1").addClass("state2");
		}

	});

	//验证确认密码
	$('.sryhm_boxt form .zc_input input.zcpasswordt').focus(function() {
		$(this).next().text('输入的确认密码要和上面的密码一致,规则也要相同').show().removeClass('state2').addClass('state1');
	}).blur(function() {
		if($(this).val().length >= 6 && $(this).val().length <= 20 && $(this).val() != '' && $(this).val() == $('.sryhm_boxt form .zc_input input.zcpassword').val()) {
			$(this).next().text('输入成功').hide();
			yzmok2 = true;
		} else {
			$(this).next().text('输入的确认密码要和上面的密码一致,规则也要相同').show().removeClass("state1").addClass("state2");
		}

	});

	//提交按钮,所有验证通过方可提交

	$('.sryhm_boxt form .zc_bottom input[type="submit"]').click(function() {
		if(yzmok1 && yzmok2) {
			$('.zc_left form').submit();
		} else {
			return false;
		}
	});

})

/*
 * 个人信息切换
 */
$(function() {
	$(".grmr_table ul li:first-child").addClass("frmrt_selected");
	$(".grmr_con ul li:first-child").siblings().hide();
	$(".grmr_table ul li").click(function() {
		$(this).addClass("frmrt_selected").siblings().removeClass("frmrt_selected");
		var shownum = $(this).index();
		$(".grmr_con ul li").eq(shownum).show().siblings().hide();
	})
})
/*
 * 版权
 */
$(function() {
	$(".copy p").
	text("出版物经营许可证 Copyright © 20015 - 2017 版权所有")
})
/*
 * 上传头像
 */
$(window).load(function() {
	var options = {
		thumbBox: '.thumbBox',
		spinner: '.spinner',
		imgSrc: 'img/subpage/upimg_de.png'
	}
	var cropper = $('.imageBox').cropbox(options);
	$('#upload-file').on('change', function() {
		fileLoadPic(this);
	});

	function fileLoadPic(file) {
		var maxPicSize = 4;
		var fileName = file.files[0].name;
		var typeName = fileName.substr(fileName.lastIndexOf('.') + 1);
		if(file.files && file.files[0]) {
			if(typeName == "jpg" || typeName == "bmp" || typeName == "gif" || typeName == "jpeg" || typeName == "png") {
				var fileSize = file.files[0].size;
				var size = fileSize / (1024 * 1024);
				if(size < maxPicSize) {
					var reader = new FileReader();
					reader.onload = function(evt) {
						options.imgSrc = evt.target.result;
						cropper = $('.imageBox').cropbox(options);
					}
					reader.readAsDataURL(file.files[0]);
					this.files = [];
				} else {
					alert('图片不能大于4M')
				}
			} else {
				alert('上传的文件不是图片格式')
			}
		}
	};

	$('#btnCrop').on('click', function() {
		var img = cropper.getDataURL();
		$('.cropped').html('');
		$('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:64px;margin-top:4px;border-radius:64px;box-shadow:0px 0px 12px #7E7E7E;" ><p>64px*64px</p>');
		$('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:128px;margin-top:4px;border-radius:128px;box-shadow:0px 0px 12px #7E7E7E;"><p>128px*128px</p>');
		$('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:180px;margin-top:4px;border-radius:180px;box-shadow:0px 0px 12px #7E7E7E;"><p>180px*180px</p>');
	})
	$('#btnZoomIn').on('click', function() {
		cropper.zoomIn();
	})
	$('#btnZoomOut').on('click', function() {
		cropper.zoomOut();
	})

	$(function() {
		$(".container").css({
			"position": "relative",
			"right": "100px"
		})
	})
});
/*
 * 购物车
 */
$(function() {
	$(".gwc").children("div").addClass("gwbox");
	$(".spsxfl").removeClass("gwbox");
	$(".splist ul li").children().css({
		"display": "inline-block",
		"vertical-align": "top"
	});
	$(".spsc").click(function() {
		if(confirm("确认删除此商品？")) {
			$(this).parents("li").remove();
		}

	})

	$(".gwc_bottom span.spallsc:first").click(function() {
		if(confirm("确认删除此商品？")) {
			$(".splist ul li input[type='checkbox']:checked").parent().remove();
		}
	})

	$(".gwc_top input[type='checkbox']").click(function() {
		if($(this).is(":checked")) {
			$(".splist ul li input[type='checkbox']").attr("checked", "true");
			$(".gwc_bottom input[type='checkbox']").attr("checked", "true");
		} else {
			$(".splist ul li input[type='checkbox']").removeAttr("checked");
			$(".gwc_bottom input[type='checkbox']").removeAttr("checked");
		}
	})
	$(".gwc_bottom input[type='checkbox']").click(function() {
		if($(this).is(":checked")) {
			$(".splist ul li input[type='checkbox']").attr("checked", "true");
			$(".gwc_top input[type='checkbox']").attr("checked", "true");
		} else {
			$(".splist ul li input[type='checkbox']").removeAttr("checked");
			$(".gwc_top input[type='checkbox']").removeAttr("checked");
		}
	})

})
/*
 * 提交订单收货人地址
 */
$(function() {
	$(".tjdd").children().addClass("tjdd_box");
	$(".ddqd").children().addClass("ddqd_box");
	$(".shrjtzds").mouseover(function() {
		$(this).attr("title", $(this).text());
	})

	$(".shrname").click(function() {
		$(this).addClass("shrdz_selected");
		$(this).parent(".shrads").siblings()
			.children(".shrname").removeClass("shrdz_selected");
		return false;
	})
	$(".shradssc").click(function() {
		if(confirm("确认删除此地址吗？")) {
			$(this).parent().remove();
		}
	})
})
/*
 * 支付方式
 */
$(function() {
	$(".zffs .shrname").click(function() {
		$(this).addClass("shrdz_selected").siblings().removeClass("shrdz_selected");
	})
})
/*
 * 送货清单
 */
$(function() {
	$(".shqd_left").children().addClass("shqd_left_box");
})
/*
 * 确认支付
 */
$(function() {
	$(".jtzffs p").hide();
	$(".jtzffs:first p").show();
	$(".jtzffs").click(function() {

		$(this).children("input:[type='checkbox']").attr("checked", "true");
		$(this).children("p").show();
		$(this).siblings().children("input:[type='checkbox']").removeAttr("checked");
		$(this).siblings().children("p").hide();
	})
})

/*
 * 首页导航鼠标浮上显示二级菜单
 */
$(function() {
	$(".erjinav .erjidaoh").hide();

	$(".nav ul").find("li").eq(1).mouseover(function() {

		$(".erjinav .erjidaoh").eq(1).show().siblings().hide();

	}).mouseout(function() {
		$(".erjinav .erjidaoh").eq(1).hide();
	})

	$(".erjinav .erjidaoh").eq(0).mouseover(function() {
		$(this).show();
	}).mouseout(function() {
		$(this).hide();
	})

	$(".nav ul").find("li").eq(2).mouseover(function() {
		$(".erjinav .erjidaoh").eq(2).show().siblings().hide();
	}).mouseout(function() {
		$(".erjinav .erjidaoh").eq(2).hide();
	})
	$(".erjinav .erjidaoh").eq(1).mouseover(function() {
		$(this).show();
	}).mouseout(function() {
		$(this).hide();
	})

	/*$(".nav ul").find("li").eq(3).mouseover(function() {
		$(".erjinav .erjidaoh").eq(2).show().siblings().hide();
	}).mouseout(function() {
		$(".erjinav .erjidaoh").eq(2).hide();
	})*/

	$(".erjinav .erjidaoh").eq(2).mouseover(function() {
		$(this).show();
	}).mouseout(function() {
		$(this).hide();
	})

})

/*
 * 首页锚点导航，返回顶端
 */
$(function() {
	$(".md_nav").hide();
	$(".back_top").hide();
	$(window).scroll(function() {
		navHide();
		backTop();
		indexFzgn();
		mdNavShow();
		mdNavLinkShow();
		quanwuDZ();
	})
	/*
	 * 概述页导航效果
	 */
	function navHide() {
		$(".jptc_xq_box").css({
			"transition": "top 1s",
			"-moz-transition": "top 1s",
			"-webkit-transition": "top 1s",
			"-o-transition": "top 1s"
		});
		var scrollTop = $(this).scrollTop();
		if(scrollTop > 90) {
			$(".jptc_xq_box").siblings(".top").fadeOut(1000);
			$('.jptc_xq_box').siblings('.gtop_header').fadeOut(1000);
			$(".jptc_xq_box").css("top", "0");
		}

		if(scrollTop <= 90) {
			$(".jptc_xq_box").siblings(".top").fadeIn(1000);
			$('.jptc_xq_box').siblings('.gtop_header').fadeIn(1000);
			$(".jptc_xq_box").css("top", "130px");
		}

	}

	/*
	 * 返回顶端显示
	 */
	function backTop() {
		var scrollTop = $(this).scrollTop();
		if(scrollTop >= 900) {

			$(".back_top").fadeIn(1000);

		} else {
			$(".back_top").fadeOut(1000);
		}
	}
	/*
	 * 首页辅助功能显示
	 */
	function indexFzgn() {
		var scrollTop = $(this).scrollTop();
		if(scrollTop >= 900) {

			$(".index_fzgn").fadeIn(1000);

		} else {
			$(".index_fzgn").fadeOut(1000);
		}
	}

	/*
	 * 锚点导航的显示
	 */
	function mdNavShow() {
		/*
		 * 获得厨房距离顶端的距离
		 */
		var chufangTop = $("#index_1").offset().top;
		var scrollTop = $(this).scrollTop();
		if(scrollTop >= chufangTop - 200) {
			$(".md_nav").fadeIn(1000);
		} else {
			$(".md_nav").fadeOut(1000);
		}
	}
	/*
	 * 描点导航显示效果随滚动距离变更
	 */
	function mdNavLinkShow() {

		var top1 = $("#index_1").offset().top;
		var top2 = $("#index_2").offset().top;
		var top3 = $("#index_3").offset().top;
		var top4 = $("#index_4").offset().top;
		var top5 = $("#index_5").offset().top;
		var top6 = $("#index_6").offset().top;
		var top7 = $("#index_7").offset().top;

		var scrollTop = $(this).scrollTop();

		if(scrollTop >= top1) {
			$(".md_nav ul li").eq(0).addClass("md_selected").siblings().removeClass("md_selected");

		}
		if(scrollTop >= top2 - 150) {
			$(".md_nav ul li").eq(1).addClass("md_selected").siblings().removeClass("md_selected");

		}
		if(scrollTop >= top3 - 150) {
			$(".md_nav ul li").eq(2).addClass("md_selected").siblings().removeClass("md_selected");

		}
		if(scrollTop >= top4 - 150) {
			$(".md_nav ul li").eq(3).addClass("md_selected").siblings().removeClass("md_selected");

		}
		if(scrollTop >= top5 - 150) {
			$(".md_nav ul li").eq(4).addClass("md_selected").siblings().removeClass("md_selected");

		}
		if(scrollTop >= top6 - 150) {
			$(".md_nav ul li").eq(5).addClass("md_selected").siblings().removeClass("md_selected");

		}
		if(scrollTop >= top7 - 150) {
			$(".md_nav ul li").eq(6).addClass("md_selected").siblings().removeClass("md_selected");
		}

		/*var qtop1 = $("#qunwu_1").offset().top;
		var qtop2 = $("#qunwu_2").offset().top;
		var qtop3 = $("#qunwu_3").offset().top;
		var qtop4 = $("#qunwu_4").offset().top;
		var qtop5 = $("#qunwu_5").offset().top;

		if(scrollTop >= qtop1) {
			$(".jptc_xi_fenlei ul li").eq(0).addClass("jptcfl_selected").siblings().removeClass("jptcfl_selected");
		}
		if(scrollTop >= qtop2 - 150) {
			$(".jptc_xi_fenlei ul li").eq(1).addClass("jptcfl_selected").siblings().removeClass("jptcfl_selected");
		}
		if(scrollTop >= qtop3 - 150) {
			$(".jptc_xi_fenlei ul li").eq(2).addClass("jptcfl_selected").siblings().removeClass("jptcfl_selected");
		}
		if(scrollTop >= qtop4 - 150) {
			$(".jptc_xi_fenlei ul li").eq(3).addClass("jptcfl_selected").siblings().removeClass("jptcfl_selected");
		}
		if(scrollTop >= qtop5 - 150) {
			$(".jptc_xi_fenlei ul li").eq(4).addClass("jptcfl_selected").siblings().removeClass("jptcfl_selected");
		}*/

	}
	/*
	 * 全屋定制概述页滚动锚点效果
	 */
	/*
	 * 返回顶端
	 */
	$(".back_top a:last-child").click(function() {
		$("html,body").animate({
			scrollTop: "0px"
		}, 800)
		return false;
	})
})
/*
 * 锚点导航点击效果
 */
$(function() {
	$(".md_nav ul li a").click(function(event) {
		var index = this.title;
		var id = "#" + "index_" + index;

		$("html,body").animate({
			scrollTop: $(id).offset().top - 90
		}, 1000);

	});
})
/*
 * 首页banner轮播
 */
$(function() {
	$(".lunbo_list li:first").show().siblings().hide();

	var i = 0;
	var j = $(".lunbo_list li").length;

	$(".bnleft_icon").click(function() {
		if(i == 0) {
			$(".lunbo_list li").eq(j - 1).show().siblings().hide();
			i = j - 1;
		} else {
			$(".lunbo_list li").eq(i - 1).show().siblings().hide();
			i--;
		}
	})

	$(".bnright_icon").click(function() {

		lunbo();

	})
	
	
	$(".gbnleft_icon").click(function() {
		if(i == 0) {
			$(".lunbo_list li").eq(j - 1).show().siblings().hide();
			i = j - 1;
		} else {
			$(".lunbo_list li").eq(i - 1).show().siblings().hide();
			i--;
		}
	})

	$(".gbnright_icon").click(function() {

		lunbo();

	})

	function lunbo() {

		if(i == j - 1) {
			$(".lunbo_list li").eq(0).show().siblings().hide();
			i = 0;
		} else {
			$(".lunbo_list li").eq(i + 1).show().siblings().hide();
			i++;
		}

	}

	setInterval(lunbo, 4000);

})

/*
 * 搜索框的显示
 */
$(function() {

	jQuery.showMenu = function(menubt, menubox, evt) {

		var menubt = $(menubt);
		var menubox = $(menubox);

		menubt.on(evt, function(e) {

			if(menubox.is(":hidden")) {
				menubox.fadeIn().siblings().hide();
			} else {
				menubox.fadeOut();
			}

			$(document).one(evt, function() {
				menubox.fadeOut();
			});

			e.stopPropagation();

		});

		menubox.on(evt, function(e) {
			e.stopPropagation();
		});

	}

	$.showMenu(".nav_icon_list ul li:eq(0)", ".erjinav .erjidaoh:last-child", "click");

})
/*
 * 首页个人中心菜单显示
 */
$(function() {
	$(".yonghu_menu").hide();
	$(".nav_icon_list ul li:eq(2)").mouseover(function() {
		$(".yonghu_menu").show();
	}).mouseout(function() {
		$(".yonghu_menu").hide();
	})
	$(".yonghu_menu").mouseover(function() {
		$(this).show();
	}).mouseout(function() {
		$(this).hide();
	})
})
/*
 * 订单中心
 */
/*$(function() {
	$(".ddzx_left ul li:eq(1)").addClass("ddzxl_seletecd");
	$(".ddzx_left ul li:not(:first)").click(function() {
		$(this).addClass("ddzxl_seletecd").siblings().removeClass("ddzxl_seletecd");
	})
})*/

$(function() {

	$(".ddzxth div:eq(0)").addClass("firstdd");
	$(".ddzxth div:eq(1)").addClass("firstddt");
	$(".ddzxth div:eq(2)").addClass("firstdds");
	$(".ddzxth div:eq(3)").addClass("firstdds");
	$(".ddzxth div:eq(4)").addClass("firstdds");
	$(".ddzxth div:eq(5)").addClass("firstdds");

	$(".ddzxth div span").mouseover(function() {
		$(this).siblings("ul").show();
	}).mouseout(function() {
		$(this).siblings("ul").hide();
	})
	$(".ddzxth div ul").mousemove(function() {
		$(this).show()
	}).mouseout(function() {
		$(this).hide();
	})
})

$(function() {
	var jtddnheight = $(".jtdd_bottom div:first-child").height();
	$(".jtdd_bottom div+div").height(jtddnheight + 48);

	$(".jtdd_bottom").each(function() {
		$(this).children().eq(3).addClass("ddztfl");

		var jtddxqwidth = $(this).children().eq(0).find("p")
		jtddxqwidth.attr("title", jtddxqwidth.text());
		var maxwidth = 80;
		if(jtddxqwidth.text().length > maxwidth) {
			jtddxqwidth.text(jtddxqwidth.text().substring(0, maxwidth));
			jtddxqwidth.html(jtddxqwidth.html() + "...");
		}

	})

})
/*
 * 全屋定制概述
 */
$(function() {

	$(".qwdz_title p").each(function() {
		var str = $(this).text().toUpperCase();
		$(this).text(str);
	});
})
$(function() {

	$(".qwdz_sppz h3 span").each(function() {
		var touppCon = $(this).text().toUpperCase();
		$(this).text(touppCon);
	})
	$(".qwdz_sppz ul li:even").addClass("pezlist");
	$(".qwdz_sppz ul li div").each(function() {
		var title = $(this).text();
		$(this).attr("title", title)
	})
})
$(function() {
	$(".qwdz_caizhi li h3").each(function() {
		var titleCon = $(this).text();
		$(this).attr("title", titleCon);
	})
	$(".qwdz_caizhi li p").each(function() {
		var titleCon = $(this).text();
		$(this).attr("title", titleCon);
	})
})

/*
 * 预约模态框
 */
$(function() {
	$(".yuyuec_title img").click(function() {
		$(this).parents().find(".yuyuebox").fadeOut(1000);
	})

	jQuery.showYybox = function(menubt, menubox, menucon, evt) {
		var menubt = $(menubt);
		var menubox = $(menubox);
		var menucon = $(menucon);
		menubt.on(evt, function(e) {

			if(menubox.is(":hidden")) {
				menubox.fadeIn();
			} else {
				menubox.fadeOut();
			}
			/*e.stopPropagation();*/

		});
		$(menucon).on(evt, function() {
			return false;
		})

		menubox.on(evt, function() {
			menubox.fadeOut();
		})

	}

	$.showYybox(".jptc_xi_fenlei ul li:last", ".yuyuebox", ".yuyue_con", "click");
	$.showYybox(".yydd", "#yuyuebox", ".yuyue_con", "click");
	$.showYybox(".yyzc", "#yuyuezc", ".yuyue_con", "click");
	$.showYybox(".shradsbj", "#ddzz_bjdz", ".yuyue_con", "click");
	$.showYybox(".ddqd_title", "#ddzz_bjdz", ".yuyue_con", "click");
	

})
/*
 * 二级页分类固定不动
 */
$(function() {
	$(".erjinav_show").next().css("margin-top", "215px")
	var marginSid = "margin-top";
	var marginJul = "90px";
	$(".erjinav_showt").css(marginSid, marginJul);
	$(".jpxq_bannert").css(marginSid, marginJul);

})
/*
 * 全屋定制概述锚点
 */
$(function() {
	$(".jptc_xi_fenlei ul li a").click(function(event) {
		var index = this.title;
		var id = "#" + "qunwu_" + index;

		$("html,body").animate({
			scrollTop: $(id).offset().top - 70
		}, 1000);

	});
})
/*
 * 首页视频
 */
$(function() {
	$(".sp_title a").click(function() {
		$(".index_video").show();
	})
	$(".index_video  video").click(function() {
		$(".index_video").show();
	})
	$(".index_video").click(function() {
		$(".index_video").hide();
	})
})
/*
 * 分类筛选
 */
$(function() {
	$(".paixu_menu a").click(function() {
		$(this).parent().siblings("a").text($(this).text());
	})
})
/*
 * 体验馆
 */
$(function() {
	$(".tygxqfl ul li:first-child").addClass("tygfl_ed");
	$(".tygxqgs .tyghd:gt(0)").hide();
	$(".tygxqfl ul li").mousemove(function() {
		$(this).addClass("tygfl_ed").siblings().removeClass("tygfl_ed");
		$(".tygxqgs .tyghd").eq($(this).index()).show().siblings().hide();
	})
})
/*
 * 我的
 */
$(function() {
	$(".yonghu_menu a").eq(2).text("个人中心")
	$(".yonghu_menu a:last-child").remove()
})
/*
 * 个人中心账户安全信息
 */
$(function() {
	$("#anquanzx").siblings().hide();
	$(".dlmima a").click(function() {
		$("#xiugaimima").show().siblings().hide();

	});
	$(".sjyanz a").click(function() {
		$("#xgsjnum").show().siblings().hide();
	})
	$(".abwt a").click(function() {
		$("#abwd").show().siblings().hide();
	})
})

/*
 * 导航栏首页隐藏
 */
$(function(){
	$('.gnav ul li:first-child').hide()
})
