//change nav color
$(window).scroll(function(){
    if($(window).scrollTop()>150){
        $('nav').addClass('shadow');
        $('nav').css('transition','1s');
    }else{
        $('nav').removeClass('shadow');
        $('nav').css('transition','1s');
    }
})

//smooth scroll
$('nav a').click(function(){
    let currentId = $(this).attr('href');
    let sectionPos = $(currentId).offset().top;
    $('html, body').animate({scrollTop: sectionPos},1000);
})

//To top
$('.to-top').fadeOut();
$(window).scroll(function(){
    if($(window).scrollTop() > $('#arrivals').offset().top){
        $('.to-top').fadeIn(500);
    }else{
        $('.to-top').fadeOut(500);
    }      
})
$('.to-top').click(function(){
    $('html, body').animate({scrollTop: 0},1000);
})

//loading screen
$('body').css('overflow', 'hidden');
$(document).ready(function(){
    $('.loading').fadeOut(2000,function(){
        $('body').css('overflow', 'auto');
    });
})

//theme
$('.theme i').click(function(){
    let w = $('.options').outerWidth();
    let lft = $('.theme').offset().left;
    if(lft==0){
        $('.theme').animate({left:-w},1000);
    }else{
        $('.theme').animate({left:0},1000);
    }
})

// $('.options li').eq(0).css('backgroundColor','blue')
let colors = ["#FF003C","#E96479","#609EA2","#913175","#C27664"];
for(let i=0;i<colors.length;i++){
    $('.options li').eq(i).css('backgroundColor',colors[i]);
}

$('.options li').click(function(){
    let bg = $(this).css('backgroundColor');
    $('html').attr('style',`--main-color:${bg}`);


})