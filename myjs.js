var x = 0;

//点击什么，就用getElementById获取那个被点击的元素
//再给它一个function()，让它每次被点击的时候，都去执行里面的代码。
document.getElementById("three-1").onclick = function () {
    console.log("第一个div点击了")
    document.getElementById("news-bg-container").style.backgroundImage="url('imgs/1.jpeg')"
}
document.getElementById("three-2").onclick = function () {
    console.log("第二个div点击了")
    document.getElementById("news-bg-container").style.backgroundImage="url('imgs/2.jpeg')"
}
document.getElementById("three-3").onclick = function () {
    console.log("第三个div点击了")
    document.getElementById("news-bg-container").style.backgroundImage="url('imgs/3.jpeg')"

}
document.getElementById("three-4").onclick = function () {
    console.log("第四个div点击了")
    document.getElementById("news-bg-container").style.backgroundImage="url('imgs/4.jpeg')"
}


