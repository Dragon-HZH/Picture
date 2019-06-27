var id1 = null;
var i = 0;
var m =0;
var images = ["img/01.png","img/002.jpg","img/003.jpg","img/004.jpg"];
//轮流播放图片
function imgLb() {
		id1 = setInterval(function() {
		document.getElementById("image").src = images[i];
		i++;
		m+=500;
		if(i >= images.length) {
			i = 0;
		}
	}, 6500+m);
}

//鼠标移动到图片上时，停止定时器
function closeDS() {
	clearInterval(id1);
	
}

function startLB() {
	imgLb();
}
imgLb();