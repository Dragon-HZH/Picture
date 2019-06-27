
var id2 = null;
var i_2 = 0;
var images_2 = ["img/02.png","img/005.jpg","img/006.jpg","img/007.jpg"];
//轮流播放图片
function imgLb_2() {
		id2 = setInterval(function() {
		document.getElementById("image_2").src = images_2[i];
		i_2++;
		if(i_2 >= images_2.length) {
			i_2 = 0;
		}
	}, 11300);
}

//鼠标移动到图片上时，停止定时器
function closeDS_2() {
	clearInterval(id2);
	
}
function startLB_2() {
	imgLb_2();
}
imgLb_2();


var id12 = null;
var i_12 = 0;
var images_12 = ["img/19.png","img/3_7.jpg","img/3_8.jpg","img/3_9.jpg"];
//轮流播放图片
function imgLb_12() {
		id12 = setInterval(function() {
		document.getElementById("image_12").src = images_12[i];
		i_12++;
		if(i_12 >= images_12.length) {
			i_12 = 0;
		}
	}, 35360);
}

//鼠标移动到图片上时，停止定时器
function closeDS_12() {
	clearInterval(id12);
	
}
function startLB_12() {
	imgLb_12();
}

imgLb_12();


var id13 = null;
var i_13 = 0;
var images_13 = ["img/21.png","img/3_10.jpg","img/3_11.jpg","img/3_12.jpg"];
//轮流播放图片
function imgLb_13() {
		id13 = setInterval(function() {
		document.getElementById("image_13").src = images_13[i];
		i_13++;
		if(i_13 >= images_13.length) {
			i_13 = 0;
		}
	}, 33360);
}

//鼠标移动到图片上时，停止定时器
function closeDS_13() {
	clearInterval(id13);
	
}
function startLB_13() {
	imgLb_13();
}

imgLb_13();


