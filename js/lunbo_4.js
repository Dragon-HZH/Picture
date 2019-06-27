var id4 = null;
var i_4 = 0;
var images_4 = ["img/05.png","img/011.jpg","img/012.jpg","img/013.jpg"];
//轮流播放图片
function imgLb_4() {
		id4 = setInterval(function() {
		document.getElementById("image_4").src = images_4[i];
		i_4++;
		if(i_4 >= images_4.length) {
			i_4 = 0;
		}
	}, 16500);
}

//鼠标移动到图片上时，停止定时器
function closeDS_4() {
	clearInterval(id4);
	
}
function startLB_4() {
	imgLb_4();
}

imgLb_4();


var id5 = null;
var i_5 = 0;
var images_5 = ["img/05.png","img/014.jpg","img/015.jpg","img/016.jpg"];
//轮流播放图片
function imgLb_5() {
		id5 = setInterval(function() {
		document.getElementById("image_5").src = images_5[i];
		i_5++;
		if(i_5 >= images_5.length) {
			i_5 = 0;
		}
	}, 15500);
}

//鼠标移动到图片上时，停止定时器
function closeDS_5() {
	clearInterval(id5);
	
}
function startLB_5() {
	imgLb_5();
}

imgLb_5();


var id6 = null;
var i_6 = 0;
var images_6 = ["img/06.png","img/2_1.jpg","img/2_2.jpg","img/2_3.jpg"];
//轮流播放图片
function imgLb_6() {
		id6 = setInterval(function() {
		document.getElementById("image_6").src = images_6[i];
		i_6++;
		if(i_6 >= images_6.length) {
			i_6 = 0;
		}
	}, 24000);
}

//鼠标移动到图片上时，停止定时器
function closeDS_6() {
	clearInterval(id6);
	
}
function startLB_6() {
	imgLb_6();
}

imgLb_6();

