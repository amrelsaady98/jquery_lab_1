$(".container1 div").each(function(){
    $(this).css("background-color",this.className);
});

$(".container2 a").each(function(){
    if ($(this).attr('href').indexOf('google') != -1){
        this.innerText = "Google";
    } else if ($(this).attr('href').indexOf('org') != -1){
        this.innerText = "IEEE";
    } else if ($(this).attr('href').indexOf('https') != -1){
        this.innerText = "Facebook";
    }
    this.innerText += (" Official Website");
})

$(".container3 figure:nth-child(3)").children().each(function(){
    if($(this).tagName = 'img'){
        $(this).attr('src', "img/orange.png");
    }else{
        $(this).innerText = "fig.3 - Orange Juice";
    }
});
// $(".container3 figure:nth-child(3) img").attr('src', "img/orange.png");
// $(".container3 figure:nth-child(3) figcaption").innerText = "fig.3 - Orange Juice";

$(".container4 td").each(function(){
    if ($(this).attr("class").indexOf("my-name") !== -1){
        $(this).css('color','blue');
    }
});

$(".container4 td:odd").each(function(){
    $(this).css('color','pink');
})

$(".container4 tr:last-child td:nth-child(2)").css("font-weight","bold");

$(".container5 ul>li:nth-child(2)").css('font-style','italic');
$(".container5 ol>li:nth-child(2) + li").css('font-style','italic');