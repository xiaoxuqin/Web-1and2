window.onload = function(){
///*/*/*/*/*/*/*/*/*/*/*顶部悬浮*/*/*/*/*/*/*/*/*/*/*/*/*///
		var cover = document.getElementsByClassName('top')[0];
		window.onscroll = function(){
			var st = document.documentElement.scrollTop || document.body.scrollTop;
			if(st > 180){
				cover.style.position = 'fixed';
			}else{
				cover.style.position = 'static';
			} 
		}

///*/*/*/*/*/*/*/*/*/*/*右下话费充值*/*/*/*/*/*/*/*/*/*/*/*/*///
		var select = document.getElementById('select');
		var option = select.children;
		var money = document.getElementById('money');
		//点击选择要充钱数，后面跟着变
		select.onclick = function(){
			for(var i = 0; i < option.length; i++){
				if(option[i].selected===true){
					money.innerHTML = "￥" + option[i].innerHTML;
				}
			}
		}

///*/*/*/*/*/*/*/*/*/*/*中间的大的轮播图效果*/*/*/*/*/*/*/*/*/*/*/*/*/*///
		var box = document.getElementById('box');
		var oNavlist = document.getElementById('mnav').children;
		var slider = document.getElementById('slider');
		var mleft = document.getElementById('mleft');
		var mright = document.getElementById('mright');
		var index = 1;
		var timer;
		var isMoving = false;
		//轮播下一张
		function next(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index++;
			mnavChange();
			animate(slider,{left:-800*index},function(){
				if(index === 7){
					slider.style.left = "-800px";
					index = 1;
				}
				isMoving = false;
			});
		}
		//左箭头
		function prev(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index--;
			mnavChange();
			animate(slider,{left:-800*index},function(){
				if(index === 0){
					slider.style.left = "-4800px";
					index = 6;
				}
				isMoving = false;
			});
		}
		var timer = setInterval(next, 2000); 
		//鼠标划入清定时器
		box.onmouseover = function(){
			animate(mleft,{opacity:100})
			animate(mright,{opacity:100})
			clearInterval(timer)
		}
		//鼠标划出开定时器
		box.onmouseout = function(){
			animate(mleft,{opacity:0})
			animate(mright,{opacity:0})
			timer = setInterval(next,2000);
		}
		mright.onclick = next;
		mleft.onclick = prev;
		//按钮点击事件
		for(var i = 0; i < oNavlist.length; i++){
			oNavlist[i].idx = i;
			oNavlist[i].onclick = function(){
				index = this.idx + 1;
				mnavChange();
				animate(slider,{left:-800*index});
			}
		}
		//小按钮背景切换  
		function mnavChange(){
			for(var i = 0; i < oNavlist.length; i++){
				oNavlist[i].className = "";
			}
			if(index === 7){
				oNavlist[0].className = 'mactive';
			}else if(index === 0){
				oNavlist[5].className = 'mactive';
			}else{
				oNavlist[index - 1].className = 'mactive';
			}
		}	

///*/*/*/*/*/*/*/*/*/*/*右侧小的轮播图效果*/*/*/*/*/*/*/*/*/*/*/*/*/*///
		var ul =document.getElementById('ul');
        function show(){
        	var top = ul.offsetTop - 1;
        	ul.style.top = top + "px"; 
       		if (-1 * ul.offsetTop >= ul.offsetHeight / 2) {
                ul.style.top = 0;
        	}
		}
		var t = setInterval(show, 20);
		var li = document.getElementsByClassName("gonggaoli");
        for (var i = 0; i < li.length; i++) {
            //移出事件
            li[i].onmouseout = function () {
                //不能加 var
                t = setInterval(show, 20);
            };
            //移入事件
            li[i].onmouseover = function () {
                clearInterval(t);
            };
        }

///*/*/*/*/*/*/*/*/*右侧固定定位*/*/*/*/*/*/*/*/*/*/*/*///
 		var g1 = document.getElementById('g1');
		var g2 = document.getElementById('g2');
		var g3 = document.getElementById('g3');
		var g4 = document.getElementById('g4');
		var serwei = document.getElementById("serwei");
		var gu5 = document.getElementById("gu5");
 		g1.onmouseover = move1;
 		g1.onmouseout = move2;
 		g2.onmouseover = move1;
 		g2.onmouseout = move2;
 		g3.onmouseover = move11;
 		g3.onmouseout = move22;
 		g4.onmouseover = move1;
 		g4.onmouseout = move2;
 		function move1(){
 			animate(this,{right:0});
 		}
 		function move2(){
 			animate(this,{right:-80});
 		}
 		function move11(){
 			animate(this,{right:0});
 			serwei.style.display = "none";
 			gu5.style.display = "block";
 		}
 		function move22(){
 			animate(this,{right:-80});
 			gu5.style.display = "none";
 			serwei.style.display = "block";
 		}
}

		
