/*
* @Author: 我的文档
* @Date:   2018-09-03 17:37:13
* @Last Modified by:   我的文档
* @Last Modified time: 2018-09-04 21:41:27
*/
window.onload=function () {

// 轮播图
     let imgs=document.querySelectorAll(".banner .lunbotu img");               /*获取元素*/
    let dots=document.querySelectorAll(".banner li");
    let banner=document.querySelectorAll(".banner .lunbotu")[0];
    let leftbtn=document.querySelectorAll(".leftbnt")[0];
    let rightbtn=document.querySelectorAll(".rightbnt")[0];
    imgs[0].style.opacity=1;
    dots[0].classList.add("active");
    let t;
    let num=0;
    setInterval(move,2000);
    function move() {
        num++;
        if (num==5){
            num=0;
        }
        for (let j=0;j<dots.length;j++){
            imgs[j].style.opacity=0;
            dots[j].classList.remove("active");
        }
        imgs[num].style.opacity=1;
        dots[num].classList.add("active");
    }
    function moveL() {
        num--;
        if (num<=0){
            num=4;
        }
        for (let j=0;j<dots.length;j++){
            imgs[j].style.opacity=0;
            dots[j].classList.remove("active");
        }
        imgs[num].style.opacity=1;
        dots[num].classList.add("active");
    }
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,2000);
    }
    leftbtn.onclick=function(){
    	
    	moveL();
    }
    rightbtn.onclick=function(){
    	
    	move();
    }
    for (let i=0;i<dots.length;i++){
        dots[i].onmouseover=function(){
            for (let j = 0; j < dots.length; j++) {
                imgs[j].style.opacity = 0;
                dots[j].classList.remove("active");
            }
            imgs[i].style.opacity=1;
            dots[i].classList.add("active");
        }
    
    }
    
    // 自动轮播






    // 选项卡
    let lis=document.querySelectorAll(".banner .fl .list ");
    let son=document.querySelectorAll(".banner .fl .list .son img");
    // console.log(lis,son);
    for (let i = 0; i < lis.length; i++) {
    	lis[i].onmouseenter=function(){
    		for (let j= 0; j < son.length; j++) {
    			son[j].style.display="none";
    		}
    		son[i].style.display="block";
    	}
    	lis[i].onmouseleave=function(){
    		son[i].style.display="none";
    	}
    }



    // // 图书轮播
    let imgss=document.querySelectorAll(".hui .content .list ul li:nth-child(1) .pics .pic");
    let dotss=document.querySelectorAll(".hui .content .list ul li:nth-child(1) .dots .dot");
    let leftbtns=document.querySelectorAll(".hui .content .list ul li:nth-child(1) .zuo")[0];
    let rightbtns=document.querySelectorAll(".hui .content .list ul li:nth-child(1) .you")[0];
    lb(imgss,dotss,leftbtns,rightbtns);


    let img2=document.querySelectorAll(".hui .content .list ul li:nth-child(2) .pics .pic");
    let dot2=document.querySelectorAll(".hui .content .list ul li:nth-child(2) .dots .dot");
    let leftbtn2=document.querySelectorAll(".hui .content .list ul li:nth-child(2) .zuo")[0];
    let rightbtn2=document.querySelectorAll(".hui .content .list ul li:nth-child(2) .you")[0];
    lb(img2,dot2,leftbtn2,rightbtn2);


    let img3=document.querySelectorAll(".hui .content .list ul li:nth-child(3) .pics .pic");
    let dot3=document.querySelectorAll(".hui .content .list ul li:nth-child(3) .dots .dot");
    let leftbtn3=document.querySelectorAll(".hui .content .list ul li:nth-child(3) .zuo")[0];
    let rightbtn3=document.querySelectorAll(".hui .content .list ul li:nth-child(3) .you")[0];
    lb(img3,dot3,leftbtn3,rightbtn3);


    let img4=document.querySelectorAll(".hui .content .list ul li:nth-child(4) .pics .pic");
    let dot4=document.querySelectorAll(".hui .content .list ul li:nth-child(4) .dots .dot");
    let leftbtn4=document.querySelectorAll(".hui .content .list ul li:nth-child(4) .zuo")[0];
    let rightbtn4=document.querySelectorAll(".hui .content .list ul li:nth-child(4) .you")[0];
    lb(img4,dot4,leftbtn4,rightbtn4);




    // 返回顶部
    let back=document.querySelectorAll(".sort ul li")[3];
    // console.log(back);
    back.onclick=function(){
        animate(document.documentElement,{scrollTop:0},600);
    }



    // 选项卡
     let lis1=document.querySelectorAll(".box-pj .top .lis1 a");
    let son1=document.querySelectorAll(".box-pj .list");
    // console.log(lis1,son1);
    for (let i = 0; i < lis1.length; i++) {
        lis1[i].onmouseenter=function(){
            for (let j= 0; j < son1.length; j++) {
                son1[j].style.display="none";
            }
            son1[i].style.display="block";
        }
      
    }

 // 平移效果
    let button=document.querySelectorAll(".box-tj .top .jt .zuo ");
    let milist=document.querySelectorAll(".box-tj .list")[0];
    // console.log(button,milist);
    let w=parseInt(getComputedStyle(milist,null).width)/2;
    // console.log(w);
    let times=0;

    button[0].onclick=function(){
         times++;
        if (times==2) {
            times=1;
        }
        milist.style.transform=`translate(${(-w*times)}px)`;
    }

    button[1].onclick=function(){
    times--;
    if (times==-1) {
        times=0;
    }
    milist.style.transform=`translate(${(-w*times)}px)`;
    }

    // 小米闪购平移效果
    let buttom1=document.querySelectorAll(".xiaomishangou .jt .zuo");
    let milist1=document.querySelectorAll(".neirong .lists")[0];
    // console.log(buttom1,milist1);
    let w1=parseInt(getComputedStyle(milist1,null).width)/2;
    // console.log(w1);
    let times1=0;
    buttom1[0].onclick=function(){
        times1++;
        if (times1==2) {
            times1=1;
        }
        milist1.style.transform=`translate(${(-w1*times1)}px)`;
    }
     buttom1[1].onclick=function(){
        times1--;
        if (times1==-1) {
            times1=0;
        }
        milist1.style.transform=`translate(${(-w1*times1)}px)`;
    }

}



   

	
	