//登录框
var login = $('#login');
var screen = $('#screen');
login.resize(function(){
    if(login.css('display')=='block'){
        login.center(1,1);
        screen.lock();
    }
});

$('.per-info').click(function () {
    login.css('display', 'block').center(1,1);	
    screen.lock().animate({
        attr : 'o',
        target : 30,
        t : 50,
        step : 10
    });
});

$('#submit').click(function () {
    login.css('display', 'none');
    //先执行渐变动画，动画完毕后再执行关闭unlock
    screen.animate({
        attr : 'o',
        target : 0,
        t : 50,
        step : 10,
        fn : function () {
            screen.unlock();
        }
    });
});

//小球居中
let box_obj=$('#classify');

box_obj.center().css('top','42%').resize(function(){
    box_obj.center().css('top','42%');
});





// 小球运动
let box=$().getId('classify');
for(let i=0;i<6;i++){
    let div=document.createElement('div');
    div.className='classify_1';
    div.innerHTML="基础扎实";
    $().getId('header').insertBefore(div,box);
}

let boxs_move=$('.classify_1')

boxs_move.css('display','block').center().css('top','42%').resize(function(){
    boxs_move.center().css('top','42%');
});

let  lefts = parseFloat(getStyle(box,'left'));
let  tops = parseFloat(getStyle(box,'top'));

box_obj.resize(function(){
    lefts = parseFloat(getStyle(box,'left'));
    tops = parseFloat(getStyle(box,'top')); 
})

$('#header').hover(function(){
    let left_1=lefts;
    let top_1=tops*1/5;
    $('.classify_1').eq(0).animate({
        t:15,
        step:15,
        mul:{
            left:left_1,
            top:top_1,
            opacity:90 
        }
    });
    let left_2=tops*5/7+lefts;
    let top_2=tops*3/5;
    $().getClass('classify_1')[1].innerHTML="程序素养"
    $('.classify_1').eq(1).animate({
        t:15,
        step:15,
        mul:{
            left:left_2,
            top:top_2,
            opacity:100
        }
    })
    let left_3=tops*5/7+lefts;
    let top_3=tops+tops*2/5;
    $().getClass('classify_1')[2].innerHTML="架构能力"
    $('.classify_1').eq(2).animate({
        t:15,
        step:15,
        mul:{
            left:left_3,
            top:top_3,
            opacity:100
        }
    })
    let left_4=lefts;
    let top_4=tops+tops*4/5;
    $().getClass('classify_1')[3].innerHTML="学习能力"
    $('.classify_1').eq(3).animate({
        t:15,
        step:15,
        mul:{
            left:left_4,
            top:top_4,
            opacity:100
        }
    })
    
    let left_5=lefts-tops*5/7;
    let top_5=tops+tops*2/5;
    $().getClass('classify_1')[4].innerHTML="动手能力"
    $('.classify_1').eq(4).animate({
        t:15,
        step:15,
        mul:{
            left:left_5,
            top:top_5,
            opacity:100
        }
    })
    let left_6=lefts-tops*5/7;
    let top_6=tops*3/5;
    $().getClass('classify_1')[5].innerHTML="知识体系"
    $('.classify_1').eq(5).animate({
        t:15,
        step:15,
        mul:{
            left:left_6,
            top:top_6,
            opacity:100
        }
    })
},function(){
    for(i=0;i<6;i++){
        $('.classify_1').eq(i).animate({
            t:15,
            step:15,
            mul:{
                left:lefts,
                top:tops,
                opacity:100
            }
        }) 
    }      
})
//分类导航栏
$('.side_item').hover(function(){
    $(this).animate({
        t:15,
        step:7,
        mul:{
            opacity:100,
            width:137
        }
    });
},function(){
    $(this).animate({
        t:15,
        step:7,
        mul:{
            opacity:50,
            width:85
        }
    });
})
