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
// let box_obj=$('#classify');
// box_obj.css('display','block').center().css('top','42%').resize(function(){
//     box_obj.center().css('top','42%');
// });
// //小球运动
// let box=$().getId('classify');
// addEvent(box,'mouseover',function(){
//     box_obj.animate({
//         attr:'top',
//         target:10,
//         unit:'%'
//     })
// })

