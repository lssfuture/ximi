/*
* @Author: 我的文档
* @Date:   2018-09-03 20:33:58
* @Last Modified by:   我的文档
* @Last Modified time: 2018-09-04 17:11:25
*/
 // 图书轮播
    // let imgss=document.querySelectorAll(".hui .content .list ul li .pics .pic");
    // let dotss=document.querySelectorAll(".hui .content .list ul li .dots .dot");
    // let leftbtns=document.querySelectorAll(".hui .content .list ul li .zuo")[0];
    // let rightbtns=document.querySelectorAll(".hui .content .list ul li .you")[0];
    
    // console.log(imgss,dotss,leftbtns,rightbtns);
    // imgs[0].style.left=0;
    // 
 function lb(imgss,dotss,leftbtns,rightbtns){
 	let widthss=parseInt(getComputedStyle(imgss[0],null).width);
 	dotss[0].classList.add("active");
    imgss[0].style.left="0";
    let nows=0;
    let nexts=0;
     function moves() {
        nexts++;
        if (nexts==imgss.length){
            nexts=0;
        }
        imgss[nexts].style.left=widthss+"px";
        animate(imgss[nows],{left:-widthss});
        animate(imgss[nexts],{left:0});
        dotss[nows].classList.remove("active");
        dotss[nexts].classList.add("active");
        nows=nexts;
    }
    function movesL() {
        nexts--;
        if (nexts<0){
            nexts=imgss.length-1;
        }
        imgss[nexts].style.left=-widthss+"px";
        animate(imgss[nows],{left:widthss});
        animate(imgss[nexts],{left:0});
        dotss[nows].classList.remove("active");
        dotss[nexts].classList.add("active");
        nows=nexts;
        console.log(next);
    }
    leftbtns.onclick=function () {
        movesL();
        if (next==0) {
            return;
        }
     }
    rightbtns.onclick=function () {
        moves();
        if (next==3) {
            return;
        }
        
    }
    for (let i=0;i<dotss.length;i++){
    	dotss[i].onmouseenter=function(){
    			for (var j = 0; j < dotss.length; j++) {
    				dotss[j].classList.remove("active");
    				imgss[j].style.left=widthss+"px";
    			}
    			dotss[i].classList.add("active");
    			imgss[i].style.left=0;
    		}
    	}
 }

    