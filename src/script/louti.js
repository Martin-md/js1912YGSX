$('#loutinav li').on('click', function () {
    //$(this).index():当前操作的元素的索引
    $(this).addClass('active').siblings('li').removeClass('active');
    let $top = $('.louceng').eq($(this).index()).offset().top; //和楼梯对应的楼层的top值。
    $('html').animate({
        scrollTop: $top
    });
});
// //2.回调顶部
// $('.last').on('click', function () {
//     $('html').animate({
//         scrollTop: 0
//     });
// });


//3.触发滚轮，对应的楼梯背景样式发生改变。
$(window).on('scroll', function () {
    //显示隐藏楼梯
    let $top = $(window).scrollTop();
    if ($top >= 600) {
        $('#loutinav').show();
        //$('#loutinav').css('display', 'block');
    } else {
        $('#loutinav').hide();
        //$('#loutinav').css('display', 'none');
    }

    $('.louceng').each(function (index, element) { //触发滚轮，遍历一次。
        //每一个楼层的top值
        let $loucenttop = $('.louceng').eq(index).offset().top + $('.louceng').eq(index)
            .height() / 2;

        //每一次触发滚轮，用9个楼层的固有top和滚动条的top值进行比较
        //如果楼层的固有top>滚动条的top  添加active
        if ($loucenttop > $top) {
            $('#loutinav li').removeClass('active');
            $('#loutinav li').eq(index).addClass('active');
            return false;
        }
    });



});