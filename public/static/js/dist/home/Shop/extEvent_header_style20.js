$(function(){Defaults={20:{page:{title:"商城首页"},PModules:[{id:20,type:"Header_style20",draggable:!1,sort:0,content:{bg:"/PublicMob/images/indexbg/20.jpg",title:"HOUSEHOLD",titleColor:"#597b26",subTitle:"光线堪称情调大师，光线的营造莫过……",subTitleColor:"#727272",button:{link:"/Item/lists",linkType:8,showtitle:"立即购买",title:"",top:"130"},dataset:[{link:"/Shop/index",linkType:6,showtitle:"首页",title:"商城主页",pic:"/PublicMob/images/ind3_1.png",bgColor:"#07a0e7"},{link:"/Shop/index",linkType:6,showtitle:"新品",title:"",pic:"/PublicMob/images/ind3_2.png",bgColor:"#07a0e7"},{link:"/Shop/index",linkType:6,showtitle:"热卖",title:"商城主页",pic:"/PublicMob/images/ind3_3.png",bgColor:"#07a0e7"},{link:"/Shop/index",linkType:6,showtitle:"推荐",title:"",pic:"/PublicMob/images/ind3_4.png",bgColor:"#07a0e7"}]}}]}},HYD.DIY.Unit.event_typeHeader_style20=function(a,b){var c=b.dom_conitem,d=a,e=$("#tpl_diy_con_typeHeader_style20").html(),f=$("#tpl_diy_ctrl_typeHeader_style20").html(),g=function(){var a=$(_.template(e,b));c.find(".Header_style20_panel").remove().end().append(a);var g=$(_.template(f,b));d.empty().append(g),HYD.DIY.Unit.event_typeHeader_style20(d,b)};d.find("#slider").slider({min:130,max:360,step:1,animate:"fast",value:b.content.button.top,slide:function(a,b){c.find(".homeCpay").css("top",b.value+"px"),d.find(".j-ctrl-showBtnTop").text(b.value+"px")},stop:function(a,c){b.content.button.top=parseInt(c.value)}}),d.find(".j-modify-bg").click(function(){HYD.popbox.ImgPicker(function(a){b.content.bg=a[0],g()})}),d.find("input[name='title'],input[name='subTitle']").change(function(){var a=$(this).attr("name"),c=$(this).val();b.content[a]=c,g()}),d.find("input[name='buttonTxt']").change(function(){var a=$(this).val();b.content.button.showtitle=a,g()}),d.find(".j-btnDplist li").click(function(){HYD.popbox.dplPickerColletion({linkType:$(this).data("val"),callback:function(a,c){b.content.button.title=a.title,b.content.button.link=a.link,b.content.button.linkType=c,g()}})}),d.find("input[name='btncustomlink']").change(function(){b.content.button.link=$(this).val()}),d.find(".j-titleClp").each(function(){var a=$(this).data("name"),c=$(this).data("color"),d="#j_clp_"+a;$(d).ColorPicker({color:c,onShow:function(a){return $(a).fadeIn(500),!1},onHide:function(a){return $(a).fadeOut(500),g(),!1},onChange:function(c,e,f){var e="#"+e;$(d).css("backgroundColor",e),b.content[a+"Color"]=e}})}),d.find(".j-moveup").click(function(){var a=$(this).parents("li.ctrl-item-list-li").index();if(0!=a){var c=b.content.dataset.slice(a,a+1)[0];b.content.dataset.splice(a,1),b.content.dataset.splice(a-1,0,c),g()}}),d.find(".j-movedown").click(function(){var a=$(this).parents("li.ctrl-item-list-li").index(),c=b.content.dataset.length;if(a!=c-1){var d=b.content.dataset.slice(a,a+1)[0];b.content.dataset.splice(a,1),b.content.dataset.splice(a+1,0,d),g()}}),d.find(".ctrl-item-list-add").click(function(){var a={link:"/Shop/index",linkType:6,showtitle:"首页",title:"链接到商城主页",pic:"/PublicMob/images/ind3_1.png",bgColor:"#07a0e7"};b.content.dataset.push(a),g()}),d.find(".j-del").click(function(){var a=$(this).parents("li.ctrl-item-list-li").index();b.content.dataset.splice(a,1),g()}),d.find("input[name='navtitle']").change(function(){var a=$(this).parents("li.ctrl-item-list-li").index(),c=$(this).val();b.content.dataset[a].showtitle=c,g()}),d.find(".j-navDplist li").click(function(){var a=$(this).parents("li.ctrl-item-list-li").index();HYD.popbox.dplPickerColletion({linkType:$(this).data("val"),callback:function(c,d){b.content.dataset[a].title=c.title,b.content.dataset[a].link=c.link,b.content.dataset[a].linkType=d,g()}})}),d.find("input[name='customlink']").change(function(){var a=$(this).parents("li.ctrl-item-list-li").index();b.content.dataset[a].link=$(this).val()}),d.find(".j-navModifyIcon").click(function(){var a=$(this).parents("li.ctrl-item-list-li").index();HYD.popbox.ImgPicker(function(c){b.content.dataset[a].pic=c[0],g()})}),d.find("select[name='navbgColor']").change(function(){var a=$(this).parents("li.ctrl-item-list-li").index(),c=$(this).val();b.content.dataset[a].bgColor=c,g()})}});