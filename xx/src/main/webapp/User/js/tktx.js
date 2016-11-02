// JavaScript Document
$(document).ready(function(e) {
    $("#menu div").addClass("menu_bg_y");
	$("#menu div:eq(3)").addClass("menu_bg");
	
	$("#txtitle div").click(function(e) {
		
		if($("#"+ $(this).attr("t")).html() == ""){
			
			
			$("#txtitle div").removeClass("clicktitlebg");
			$(this).addClass("clicktitlebg");
			
			$(".tcontent").hide();
			
			$("#"+ $(this).attr("t")).show();
			
			$("#"+ $(this).attr("t")).html($("#"+ $(this).attr("s")).html());
			$("#"+ $(this).attr("s")).html("");
			$("#T").val($(this).attr("tj"));
			$("#tscontent").text($(this).children("span").text());
			
			if($("#money").val() != "" && parseInt(parseFloat($("#money").val()) / 100)*100 == parseFloat($("#money").val())){
				checkmoney();
				}
			
		}
		
    });
	
	$("#txtitle div:eq(0)").click();
	
	
	////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////
	
	
});

function clearNoNum(obj)
{
	//先把非数字的都替换掉，除了数字和.
	obj.value = obj.value.replace(/[^\d.]/g,"");
	//必须保证第一个为数字而不是.
	obj.value = obj.value.replace(/^\./g,"");
	//保证只有出现一个.而没有多个.
	obj.value = obj.value.replace(/\.{2,}/g,".");
	//保证.只出现一次，而不能出现两次以上
	obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
}

function checkmoney(){
	
	$("#sxf").text("");
	$("#sjdzjj").text("");
	
	
	if($("#money").val() == ""){
		
		alert("提款金额不能为空！");
		$("#money").focus();
		
		}else{
			
			if(parseFloat($("#money").val()) > parseFloat($("#kyye").val())){
				
				alert("余额不足！");
			    $("#money").focus();	
				
				}else{
					
					if(parseFloat($("#money").val()) < parseFloat($("#minmoney").val())){
						
						alert("提款金额不能少于"+$("#minmoney").val()+"元！");
						$("#money").focus();
						return false;
					}
					
					if(parseFloat($("#money").val()) > parseFloat($("#maxmoney").val())){
						
						alert("提款金额不能大于"+$("#maxmoney").val()+"元！");
						$("#money").focus();
						return false;
					}
					
					if(parseFloat($("#money").val())+ parseFloat($("#yqlmoney").val()) > parseFloat($("#mtsxmoney").val())){
						
						alert("每天申请提款的总金额不能超过 "+$("#mtsxmoney").val()+"！");
						$("#money").focus();
						return false;
					}
					
				/*	if(parseInt(parseFloat($("#money").val()) / 100)*100 != parseFloat($("#money").val())){
						
						alert("提款金额只能是100的整数倍！");
						$("#money").focus();
						return false;
					}*/
					
					
					//////////////////////////////////////////////////////////////
					//alert("tkmoney="+$("#money").val()+"&T="+$("#T").val());
					$.ajax({
					type:'POST',
					url:'/User_Index_tkjsfl.html',
					data:"tkmoney="+$("#money").val()+"&T="+$("#T").val(),
					dataType:'text',
					success:function(str){
						 str = str.split("|")
					     if(str[1] != "ok"){
							// alert(str[1]);
							 }else{
					         	$("#sxf").text(str[0]+" 元");
								$("#dgsxf").text(str[0]);
								$("#sjdzjj").text( parseFloat($("#money").val()) - parseFloat(str[0]));
								$("#hjsxf").html("(合计手续费：<span style='color:#F00'>"+parseFloat($("#dgsxf").text()) *  parseFloat($("#yhslid").val())+"</span> 元)");
								
								$("#hjsjje").html("(合计实际到账金额：<span style='color:#F00'>"+parseFloat($("#sjdzjj").text()) *  parseFloat($("#yhslid").val())+"</span> 元)");
							 }
						},
					error:function(){
						alert("处理失败！");
						}	
					});
					/////////////////////////////////////////////////////////////
					
					}
			
			}
	
	}
	
function xztkyh(){
	
	$("#mrbank").hide();
	$("#selecttkyh").show();
	$("#tkyhspan").hide();
	$("#xgspan").show();
	}	

function fhfh(){
	$("#mrbank").show();
	$("#selecttkyh").hide();
	$("#tkyhspan").show();
	$("#xgspan").hide();
	}	

function qrxgqrxg(){
	
	$.ajax({
	  type:'POST',
	  url:'/User_Index_tkyhajax.html',
	  data:"tkyh="+$("#tkyh").val(),
	  dataType:'text',
	  success:function(str){
		   str = str.split("|")
		   if(str[0] != "ok"){
			   alert(str[1]);
			   }else{
				  
				  $("#mrbank").html(str[1]);
				  $("#tkyhhidden").val(str[2]);
				  fhfh();
			   }
		  },
	  error:function(){
		  alert("处理失败！");
		  }	
	  });
  
	}	
	
function sqtk(){
	
	//alert($("#T").val());
	//////////////////////////////////////////////////////
	$("#sxf").text("");
	$("#sjdzjj").text("");
		if($("#money").val() == ""){
		
		alert("提款金额不能为空！");
		$("#money").focus();
		
		}else{
			
			if(parseFloat($("#money").val()) > parseFloat($("#kyye").val())){
				
				alert("余额不足！");
			    $("#money").focus();	
				
				}else{
					
					
					if(parseFloat($("#money").val()) < parseFloat($("#minmoney").val())){
						
						alert("提款金额不能少于"+$("#minmoney").val()+"元！");
						$("#money").focus();
						return false;
					}
					
					if(parseFloat($("#money").val()) > parseFloat($("#maxmoney").val())){
						
						alert("提款金额不能大于"+$("#maxmoney").val()+"元！");
						$("#money").focus();
						return false;
					}
					
					var a = 1;
					if(parseInt($("#wtwt").val()) == 1){
						if(parseInt($("#yhslid").val())==0){
							
							alert("委托提款银行数量不能为0");
							return false;
							
							}else{
								a = parseInt($("#yhslid").val());
								}
					}
					if(parseFloat($("#money").val()) * a + parseFloat($("#yqlmoney").val()) > parseFloat($("#mtsxmoney").val())){
						
						alert("每天申请提款的总金额不能超过 "+$("#mtsxmoney").val()+"！");
						$("#money").focus();
						return false;
					}
					
					/*if(parseInt(parseFloat($("#money").val()) / 100)*100 != parseFloat($("#money").val())){
						
						alert("提款金额只能是100的整数倍！");
						$("#money").focus();
						return false;
					}*/
					
					
					//////////////////////////////////////////////////////////////
					$.ajax({
					type:'POST',
					url:'/User_Index_tkjsfl.html',
					data:"tkmoney="+$("#money").val()+"&T="+$("#T").val(),
					dataType:'text',
					success:function(str){
						 str = str.split("|")
					     if(str[1] != "ok"){
							// alert(str[1]);
							 }else{
					         	$("#sxf").text(str[0]+" 元");
								$("#dgsxf").text(str[0]);
								$("#sjdzjj").text( parseFloat($("#money").val()) - parseFloat(str[0]));
								$("#hjsxf").html("(合计手续费：<span style='color:#F00'>"+parseFloat($("#dgsxf").text()) *  parseFloat($("#yhslid").val())+"</span> 元)");
								
								$("#hjsjje").html("(合计实际到账金额：<span style='color:#F00'>"+parseFloat($("#sjdzjj").text()) *  parseFloat($("#yhslid").val())+"</span> 元)");
								fhfh();
								//////////////////////////////支付密码//////////////////////////////////////////
								
								if($("#paypassword").val() == ""){
									 alert("支付密码不能为空！");
									 $("#paypassword").focus();
								}else{
									
									$.ajax({
									type:'POST',
									url:'/User_Index_yzzfmm.html',
									data:"paypassword="+$("#paypassword").val(),
									dataType:'text',
									success:function(str){
											
											if(str != "ok"){
												alert("支付密码错误！");
												$("#paypassword").focus();
											}else{
												if(confirm("您确认要申请提款吗？")){
													
													$("#txtitle div").hide();
													$(".tcontent table").hide();
													$(".tabts").show();
		////////////////////////////////////////////////////////////////////////////////////////////////////
		
														  $.ajax({
															  type:'POST',
															  url:'/User_Index_tkmoney.html',
											data:"money="+$("#money").val()+"&tkyhid="+$("#tkyhhidden").val()+"&paypassword="+$("#paypassword").val()+"&T="+$("#T").val()+"&wtwt="+$("#wtwt").val()+"&sl="+$("#yhslid").val()+"&wtbanklisttext="+$("#wtbanklisttext").val(),
															  dataType:'text',
															  success:function(str){
																  if(str == "ok"){
																	  $(".tabts tr td").html("申请提款成功！<br><br><img src='/Public/User/images/fh.gif' onclick='fhtk();'>");
																	  }else{
																		  $(".tabts tr td").html(str+"<br><img src='/Public/User/images/fh.gif' onclick='fhtk();'>");
																		  }
																  },
															  error:function(){
																  alert("处理失败！");
																  }	
															  });
														  
		///////////////////////////////////////////////////////////////////////////////////////////////////											
													
													}
											}
											
										},
									error:function(){
										alert("处理失败！");
										}	
									});	 
									
								}
															
								//////////////////////////////支付密码//////////////////////////////////////////
							 }
						},
					error:function(){
						alert("处理失败！");
						}	
					});
					/////////////////////////////////////////////////////////////
					
					}
			
			}
	/////////////////////////////////////////////////////
	
	}	
	
function fhtk(){
	
	if($("#wtwt").val() == 1){
		
		location.href = "/User_Index_wttk.html";
		
		}else{
			
			location.href = "/User_Index_tktx.html";
			
			}
	
	
	
	}	
	
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
