//获取轮播图片框
var bgImgContainer = document.getElementsByClassName('news-bg-img-container')[0]

function viewImg(index) {
    //获取轮播图片框下的img标签数组
    var imgList = bgImgContainer.children


    for (var i = 0; i < imgList.length; i++) {
        //循环拿出Img标签元素
        if (i == index) {
            //如果当前img标签的顺序和传入的index相同
            //比如传入的index参数的值为0，在当前循环中，从0开始，
            //就是说第一个img标签的顺序为0，与index值相等
            //于是执行下面的代码， 将display置为""，这样就可以让该img标签在网页中显示
            imgList[i].style.display = ""
            continue
        }
        //如果当前img顺序不是index指定的值，则将当前img标签display属性置为none，
        //这样就可以让该img标签在网页中不可见
        imgList[i].style.display = "none"
    }
}


//点击什么，就用getElementById获取那个被点击的元素
//再给它一个function()，让它每次被点击的时候，都去执行里面的代码。
$("#three-1").on("click", function () {
    viewImg(0)
})
$("#three-2").on("click", function () {
    viewImg(1)
})
$("#three-3").on("click", function () {
    viewImg(2)
})
$("#three-4").on("click", function () {
    viewImg(3)
})

var lastImgIndex = 0


function autoRefreshImg(){
    setInterval(function () {
        viewImg(lastImgIndex++)
        if (lastImgIndex >= bgImgContainer.children.length - 1) {
            lastImgIndex = 0
        }
    }, 5000);
}




