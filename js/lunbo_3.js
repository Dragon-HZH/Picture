var id3 = null;
var i_3 = 0;
var images_3 = ["img/03.png","img/008.jpg","img/009.jpg","img/010.jpg"];
//轮流播放图片
function imgLb_3() {
		id3 = setInterval(function() {
		document.getElementById("image_3").src = images_3[i];
		i_3++;
		if(i_3 >= images_3.length) {
			i_3 = 0;
		}
	}, 18700);
}

//鼠标移动到图片上时，停止定时器
function closeDS_3() {
	clearInterval(id3);
	
}
function startLB_3() {
	imgLb_3();
}

imgLb_3();


var id7 = null;
var i_7 = 0;
var images_7 = ["img/09.png","img/2_4.jpg","img/2_5.jpg","img/2_6.jpg"];
//轮流播放图片
function imgLb_7() {
		id7 = setInterval(function() {
		document.getElementById("image_7").src = images_7[i];
		i_7++;
		if(i_7 >= images_7.length) {
			i_7 = 0;
		}
	}, 27960);
}

//鼠标移动到图片上时，停止定时器
function closeDS_7() {
	clearInterval(id7);
	
}
function startLB_7() {
	imgLb_7();
}

imgLb_7();

var id8 = null;
var i_8 = 0;
var m_8 =0;
var images_8 = ["img/10.png","img/2_7.jpg","img/2_8.jpg","img/2_9.jpg"];
//轮流播放图片
function imgLb_8() {
		id8 = setInterval(function() {
		document.getElementById("image_8").src = images_8[i];
		i_8++;
		m_8+=600;
		if(i_8 >= images_8.length) {
			i_8 = 0;
		}
	}, 13360+m_8);
}

//鼠标移动到图片上时，停止定时器
function closeDS_8() {
	clearInterval(id8);
	
}
function startLB_8() {
	imgLb_8();
}

imgLb_8();


var id9 = null;
var i_9 = 0;
var m_9 = 0;
var images_9 = ["img/14.png","img/2_10.jpg","img/2_11.jpg","img/2_12.jpg"];
//轮流播放图片
function imgLb_9() {
		id9 = setInterval(function() {
		document.getElementById("image_9").src = images_9[i];
		i_9++;
		m_9+=400;
		if(i_9 >= images_9.length) {
			i_9 = 0;
		}
	}, 8360+m_9);
}

//鼠标移动到图片上时，停止定时器
function closeDS_9() {
	clearInterval(id9);
	
}
function startLB_9() {
	imgLb_9();
}

imgLb_9();



var id10 = null;
var i_10 = 0;
var images_10 = ["img/15.png","img/3_1.jpg","img/3_2.jpg","img/3_3.jpg"];
//轮流播放图片
function imgLb_10() {
		id10 = setInterval(function() {
		document.getElementById("image_10").src = images_10[i];
		i_10++;
		if(i_10 >= images_10.length) {
			i_10 = 0;
		}
	}, 20560);
}

//鼠标移动到图片上时，停止定时器
function closeDS_10() {
	clearInterval(id10);
	
}
function startLB_10() {
	imgLb_10();
}

imgLb_10();

var id11 = null;
var i_11 = 0;
var images_11 = ["img/17.png","img/3_4.jpg","img/3_5.jpg","img/3_6.jpg"];
//轮流播放图片
function imgLb_11() {
		id11 = setInterval(function() {
		document.getElementById("image_11").src = images_11[i];
		i_11++;
		if(i_11 >= images_11.length) {
			i_11 = 0;
		}
	}, 28860);
}

//鼠标移动到图片上时，停止定时器
function closeDS_11() {
	clearInterval(id11);
	
}
function startLB_11() {
	imgLb_11();
}

imgLb_11();

