window.onload = function(){
///*/*/*/*/*/*/*/*/*/*/*左边图的转换*/*/*/*/*/*/*/*/*/*/*/*/*/*///
	var pp0 = document.getElementById('pp0');
	var chanpin1 = document.getElementById('chanpin1');
	var chanpin2 = document.getElementById('chanpin2');
	var Bimg = document.getElementById('Bimg');
	chanpin1.onmouseover = function(){
		pp0.setAttribute('src', "../img/pp0.jpeg");
		this.style.border = "2px solid rgb(255,144,3)";
		chanpin2.style.border = "2px solid white";
		Bimg.setAttribute('src', "../img/pp0.jpeg")
	}
	chanpin2.onmouseover = function(){
		pp0.setAttribute('src', "../img/pp1.jpeg");
		this.style.border = "2px solid rgb(255,144,3)";
		chanpin1.style.border = "2px solid white";
		Bimg.setAttribute('src', "../img/pp1.jpeg")
	}

///*/*/*/*/*/*/*/*放大镜效果*/*/*/*/*/**/*/*/*/*/*///
	var box = document.getElementById('box');
	var img1 = document.getElementById('img1');
	var slider = document.getElementById('slider');
	var img2 = document.getElementById('img2');	
	// var Bimg = document.getElementById('Bimg');//前面改变图片声明过了
	img1.onmouseover = function(){
		slider.style.display = 'block';
		img2.style.display = 'block';
	}
	img1.onmouseout = function(){
		slider.style.display = 'none';
		img2.style.display = 'none';
	}
	img1.onmousemove = function(ev){
		var ev = ev || window.event;
		var oL = ev.clientX - box.offsetLeft - slider.offsetWidth/2;
		var oT = ev.clientY - box.offsetTop - slider.offsetHeight/2 + document.documentElement.scrollTop;
		var oMaxw = img1.offsetWidth - slider.offsetWidth;
		var oMaxh = img1.offsetHeight - slider.offsetHeight;
		oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
		oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;
		slider.style.left = oL + 'px';
		slider.style.top = oT +'px';
		var scale = img2.offsetWidth / slider.offsetWidth;
		Bimg.style.left = -scale * oL + 'px';
		Bimg.style.top = -scale * oT + 'px';
	}

///*/*/*/*/*/*/*/*/*/*/*右侧各个选择框*/*/*/*/*/*/*/*/*/*/*/*/*/*///
	/***********净含量部分***********/
	var ml1 = document.getElementById('ml1');
	var ml2 = document.getElementById('ml2');
	var choice = document.getElementById("choice");
	ml1.onclick = function(){
		this.style.border="1px solid rgb(255,50,95)";
		this.style.background = "url(../img/duigou.png) 50px 16px no-repeat";
		ml2.style.border = "1px solid white";
		choice.innerHTML = '"150ml"';
		ml2.style.background = "none";
	}
	ml2.onclick = function(){
		this.style.border="1px solid rgb(255,50,90)";
		this.style.background = "url(../img/duigou.png) 50px 16px no-repeat";
		ml1.style.border = "1px solid white";
		choice.innerHTML = '"200ml"';
		ml1.style.background = "none";
	}

	/***********数量部分***********/
	var count = document.getElementById("count");
	var count1 = document.getElementById("count1");
	var count2 = document.getElementById("count2");
	count1.onmouseover = function(){
		if(count.value <= 1){
			this.style.cursor = "not-allowed";
		}else{
			this.style.cursor = "pointer";
		}
	}
	count2.onmouseover = function(){
		if(count.value >= 5){
			this.style.cursor = "not-allowed";
		}else{
			this.style.cursor = "pointer";
		}
	}
	count1.onclick = function(){
		if(count.value > 1){
			count.value --;
		}
	}
	count2.onclick = function(){
		if(count.value < 5){
			count.value ++;
		}
	}

///*/*/*/*/*/*/*/*/*/*/*右侧各个选择框*/*/*/*/*/*/*/*/*/*/*/*/*/*///
	var meng = document.getElementById("meng");
	var X = document.getElementById("XXX");
	var conti = document.getElementById("conti");
	var btn2 = document.getElementById("btn2");
	var shopcar = document.getElementById("shopcar");
	btn2.onclick = function(){
		meng.style.display = "block";
		shopcar.style.display = "block";
	}
	X.onclick = function(){
		meng.style.display = "none";
		shopcar.style.display = "none";
	}	
	conti.onclick = function(){
		meng.style.display = "none";
		shopcar.style.display = "none";
	}	

}