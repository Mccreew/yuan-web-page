var bgImgContainer = document.getElementsByClassName('news-bg-img-container')[0]

function viewImg(index) {
    var imgList = bgImgContainer.children
    for (var i = 0; i < imgList.length; i++) {
        if (i == index) {
            imgList[i].style.display = ""
            continue
        }
        imgList[i].style.display = "none"
    }
}


//点击什么，就用getElementById获取那个被点击的元素
//再给它一个function()，让它每次被点击的时候，都去执行里面的代码。
document.getElementById("three-1").onclick = function () {
    viewImg(0)
}
document.getElementById("three-2").onclick = function () {
    viewImg(1)
}
document.getElementById("three-3").onclick = function () {
    viewImg(2)
}
document.getElementById("three-4").onclick = function () {
    viewImg(3)
}

var lastImgIndex = 0

setInterval(() => {
    viewImg(lastImgIndex++)
    if(lastImgIndex>=bgImgContainer.children.length - 1){
        lastImgIndex = 0
    }
}, 5000);



