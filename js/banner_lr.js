// 双下标轮播函数/左右轮播函数
//     imgs:需要轮播的图片集合
//     dots:轮播点的集合
//     banner:放轮播图的盒子  元素
//     leftbtn:左箭头
//     rightbtn:右箭头
//     widths:轮播图的宽，整数
//     activeclass:轮播点选中时的类名
//     second:轮播时间
function banner_lr(imgs,dots,banner,leftbtn,rightbtn,widths,activeclass,second) {
    // 2.初始值
    imgs[0].style.left=0;
    dots[0].classList.add(activeclass);
    let now=0;
    let next=0;

    // 开关：控制快速点击时图片会快速轮播的现象
    // 默认开关是打开的，flag=true,
    let flag=true;


    let t=setInterval(move,second);
    function move() {
        next++;
        if (next==imgs.length){
            next=0;
        }
        //下一张图永远在最右侧
        imgs[next].style.left=widths+"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        dots[now].classList.remove(activeclass);
        dots[next].classList.add(activeclass);
        now=next;
    }
    function moveL() {
        next--;
        if (next<0){
            next=imgs.length-1;
        }
        imgs[next].style.left=-widths+"px";
        animate(imgs[now],{left:widths});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        dots[now].classList.remove(activeclass);
        dots[next].classList.add(activeclass);
        now=next;
    }
    leftbtn.onclick=function () {
        // 判断开关是否开启
        // 如果开关开启，则!flag=false,不执行return,执行flag=false和move,move执行完flag=true;
        // 开关关闭的时候，不要点击
        // flag=false      !flag=true;     执行return     结束函数
        if (!flag){
            return;
        }
        flag=false;
        moveL();
    }
    rightbtn.onclick=function () {
        if (!flag){
            return;
        }
        flag=false;
        move();
    }
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,second);
    }


    for (let i=0;i<dots.length;i++){
        dots[i].onmouseover=function () {
            if (flag){
                for (let j=0;j<dots.length;j++){
                    dots[j].classList.remove(activeclass);
                    imgs[j].style.left=widths+"px";
                }
                dots[i].classList.add(activeclass);
                imgs[i].style.left=0;
            }
            now=i;
            next=i;
        }
    }
    // 窗口失去焦点时，停止时间间隔函数
    window.onblur=function () {
        clearInterval(t);
    }
    // 窗口获得焦点时，继续时间间隔函数
    window.focus=function () {
        t=setInterval(move,second);
    }
}