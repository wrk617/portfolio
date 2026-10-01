$(function () {


    // スムーズスクロール（ページトップ & ナビゲーション）「トップへ戻る」ボタンと、ヘッダーナビの「#」
    $('.gotop a, .nav a[href*="#"]').on('click', function (e) {
        var href = $(this).attr('href');

        var targetId = href.substring(href.indexOf('#'));
        var target = $(targetId === '#' || targetId === '' ? 'html' : targetId);

        if (target.length) {
            e.preventDefault();


            var headerHeight = $('.header').outerHeight() || 0;
            var position = target.offset().top - headerHeight;

            $('html, body').animate({
                scrollTop: position
            }, 600);
        }
    });

    $(function(){
        var $hero = $(".hero.index");

        if($hero.length){

            if(!sessionStorage.getItem("visited")){
                $hero.addClass("first-visit");

                setTimeout(function(){
                    $hero.addClass("is-visible");

                }, 100);

                sessionStorage.setItem("visited", "true");
            }else{

            }
        }
    });




    if ($('.hero.index').length) {
        $(window).on('scroll', function () {
            var heroHeight = $('.hero.index').outerHeight();

            if ($(this).scrollTop() > heroHeight) {
                $('.header').addClass('is-active');
            } else {
                $('.header').removeClass('is-active');
            }
        });
    }

});


   
    
       