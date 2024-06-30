$(".container1").append(`
   <div class="black">
   <p class="cyan">Hello Amr</p>
</div> 
`);
$(".container1").prepend(
    `<div class="white">
   <p class="cyan">Hello Lotfi</p>
</div> `
);
$(".container1 .pink").prepend(
    `<p class="yellow">Hello Ezzat</p>`
);

$(".container2 p").each(function(){
    $(this).replaceWith(()=>{
        return `<a href="https://${this.innerText}">${this.innerText}</a>`
    });
});
$(".container3 img").wrap(
    `<figure>`
)
$(".container3").append(`<figuecaption>Coffee</figuecaption>`);

$(".container4 td.col-age").empty();
$(".container4 td").each(function(){
    console.log(this.innerText)
    if (this.innerText == 'Mohsen'){
        $(this).addClass('man');
    }
});
$(".container4 td").each(function () {
    if (this.classList.contains('your-email')){
        $(this).removeClass('your-email');
    }else{
        $(this).addClass('your-email');
    }
});

let container5ListItems =  $(".container5 li");
for (let i = 0; i < container5ListItems.length; i++) {
    if (i % 3 != 0){
        $(container5ListItems[i]).hide();
    }
}

$(".container6 input[name='username']").val("Your Name");
$(".container6 input[name='remember']").attr("checked", "checked");
