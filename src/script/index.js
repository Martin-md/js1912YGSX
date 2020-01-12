//数据接口：http://10.31.152.53/martin/YGSX/php/YGSX.php
;
(function ($) {
    class render {
        constructor() {
            this.goodslist = $('.goodlist');
        }
        init() {
            $.ajax({
                url: 'http://10.31.152.53/martin/YGSX/php/YGSX.php',
                dataType: 'json'
            }).done((data) => {
                console.log(data)
                let $strhtml = '';
                $.each(data, function (index, value) {
                    $strhtml += `
                        <li>
                            <a href="details.html?sid=${value.sid}">
                                <img src="${value.url}">
                            </a>
                        </li>
                    `;
                });

                this.goodslist.html($strhtml);
            });
        }
    }
    new render().init();

})(jQuery);