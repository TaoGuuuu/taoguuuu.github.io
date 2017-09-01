var return_top = document.getElementById("return_top");
var sTop;
window.onscroll = function(){
  //sTop :滚动条距离顶部的距离数值
  sTop = document.body.scrollTop||document.documentElement.scrollTop;
  if(sTop<300 || /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)){
    return_top.className = "return-top";
  }else{
    return_top.className = "return-top active";
  }
}
return_top.onclick = function(){
  var termId = setInterval(function(){
    sTop-=50;
    if(sTop<=0){
      clearInterval(termId);
    }
    window.scrollTo(0,sTop);
  },1);       
}