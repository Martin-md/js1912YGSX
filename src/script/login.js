! function ($) {
    $('.login').on('click', function () {
        $.ajax({
            type: 'post',
            url: 'http://10.31.152.53/martin/js1912YGSX/php/login.php',
            data: {
                user: $('.username').val(),
                pass: $('.password').val()
            }
        }).done(function (result) {
            if (result) { //匹配成功
                console.log(result)
                location.href = 'first.html';
                localStorage.setItem('username', $('.username').val());
            } else { //匹配失败
                $('.password').val('');
                alert('用户名或者密码错误');
            }
        });
    });
}(jQuery)