var form = document.querySelector("form")
var input = document.querySelectorAll("input")
var span = document.querySelector("span")
var b1 = document.querySelector(".b1")
var b2 = document.querySelector(".b2")
var b3 = document.querySelector(".b3")
var flag1 = true
var flag2 = true
var flag3 = true
var flag4 = true
var flag5 = true
var flag6 = true

//一.用户姓名
//1.先获取焦点时，提示内容会弹出
input[0].onfocus = function () {
    input[0].placeholder = "中英文下划线都可，长度不能超过6位"
    input[0].style.cssText = "font-size:11px;color:#44444"
}
//2.失去焦点时，对输入input的内容进行验证
input[0].onblur = function () {
    var len = input[0].value.length
    if (this.value === "") {
        span.style.display = "block"
        flag1 = false
    }
    else {
        if (len <= 14) {
            flag1 = true
            span.style.display = "none"
        }
        else {
            span.style.display = "block"
            flag1 = false
        }
    }
}
//二.登陆密码（同理）
//1.先获取焦点时，提示内容会弹出
input[1].onfocus = function () {
    input[1].placeholder = "输入6-20位密码"
    input[1].style.cssText = "font-size:11px;color:#44444" 
}
//写入验证强度
input[1].oninput = function () {
    // if (this.value.length >= 6 && this.value.length <= 20) {
        var regnum = /\d+/; //数字
        var reglower = /[a-z]+/; //小写字母
        var regupper = /[A-Z]+/; //大写字母
        var other = /[\W\_]+/;  //特殊字符
        var count = 0;
        if (regnum.test(this.value)) {
            count++;
        }
        if (reglower.test(this.value)) {
            count++;
        }
        if (regupper.test(this.value)) {
            count++;
        }
        if (other.test(this.value)) {
            count++;
        }

        switch (count) {
            case 1:
                flag2 = false;
                break;
            case 2:
            case 3:
                flag2 = true;
                break;
            case 4:
                flag2 = true;
                break;
        }
    // };
    

   //失去焦点 进行验证
    input[1].onblur = function () {
       
        if (this.value !== '') {
            if (this.value.length <= 6 || this.value.length >= 20) {
                span.style.display = "block"
            }
            else {
                if (count == 1) {
                    b1.style.display = "block"
                }
                if (count == 2) {
                    b2.style.display = "block"
                    b1.style.display = "none"
                }
                if (count == 3) {
                    b2.style.display = "block"
                    b1.style.display = "none"
                }
                if (count == 4) {
                    b3.style.display = "block"
                    b1.style.display = "none"
                    b2.style.display = "none"
                }
                // else {
                //     flag2 = true
                //     span.style.display = "none"
                // }
            }
        }
        else {
            alert(1)
            span.style.display = "block"
        }
    }
};
//三.邮箱
//1.先获取焦点时，提示内容会弹出
input[2].onfocus = function () {
    input[2].placeholder = "输入你的电子邮箱"
    input[2].style.cssText = "font-size:11px;color:#44444"
}
//2.失去焦点时，对输入input的内容进行验证
input[2].onblur = function () {
    var reg = /^(\w+(\+\-\.)*\w+)\@(\w+(\+\-\.)*\w+).(\w+(\+\-\.)*\w+)$/
    if (this.value === "") {
        span.style.display = "block"
        flag3 = false
    }
    else {
        if (reg.test(this.value)) {
            flag3= true
            span.style.display = "none"
        }
        else {
            span.style.display = "block"
            flag3= false
        }
    }
}
//四.真实姓名
//1.先获取焦点时，提示内容会弹出
input[3].onfocus = function () {
    input[3].placeholder = "输入你的真实姓名"
    input[3].style.cssText = "font-size:11px;color:#44444"
}
//2.失去焦点时，对输入input的内容进行验证
input[3].onblur = function () {
    var reg = /[\u4e00-\u9fa5]{3}|[\u4e00-\u9fa5]{2}/
    if (this.value === "") {
        span.style.display = "block"
        flag4 = false
    }
    else {
        if (reg.test(this.value)) {
            flag4= true
            span.style.display = "none"
        }
        else {
            span.style.display = "block"
            flag4 = false
        }
    }
}

//五.手机号码
input[4].onfocus = function () {
    input[4].placeholder = "输入你的手机号"
    input[4].style.cssText = "font-size:11px;color:#44444"
}

input[4].onblur = function () {
    if (this.value !== '') {
        var reg = /^1[3578]\d{9}$/;
        if (reg.test(this.value)) {
            span.style.display = "none"
            flag5 = true;
        } else {
            span.style.display = "block"
            flag5 = false
        }
    } else {
        span.style.display = "block"
        flag5 = false
    }
}
//6.验证码
let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function rannum(min, max) {//随机数
    return parseInt(Math.random() * (max - min + 1) + min);
}
suiji.onclick = function (ev) {
    this.innerHTML = `${arr[rannum(0, 9)]}${arr[rannum(0, 9)]}${arr[rannum(0, 9)]}${arr[rannum(0, 9)]}`;
    this.style.cssText = `text-align:center;line-height:30px;`;
}
input[5].onblur = function () {

    if (this.value !== '') {
        if (this.value === suiji.innerHTML) {
            flag6 = true
            span.style.display = "none"
        } else {
            span.style.display = "block"
            flag6 = false
        }
    } else {
        flag6 = false;
        span.style.display = "block"
        flag6= false
    }
}

//整个表单提交
form.onsubmit = function () {
    if (input[0].value === "") {
        span.style.display = "block"
        flag1 = false
    }
    if (input[1].value === "") {
        span.style.display = "block"
        flag2 = false
    }
    if (input[3].value === "") {
        span.style.display = "block"
        flag3 = false
    }
    if (input[4].value === "") {
        span.style.display = "block"
        flag4 = false
    }
    if (input[5].value === "") {
        span.style.display = "block"
        flag5 = false
    }
    if (input[6].value === "") {
        span.style.display = "block"
        flag6 = false
    }
    if (flag1 == false || flag2 == false || flag3 == false || flag4 == false || flag5 == false|| flag6== false) {
        return false     //如果满足以上任何一个失败条件，就取消默认(return false)，也就是取消跳转
    }

}