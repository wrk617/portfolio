$(function() {
    
    
    // スムーズスクロール（ページトップ & ナビゲーション）「トップへ戻る」ボタンと、ヘッダーナビの「#」
    $('.gotop a, .nav a[href*="#"]').on('click', function(e) {
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

    $(document).ready(function() {
          $(window).on('load', function() {
        if ($('.hero.index').length) {
            $('.hero.index').addClass('is-visible');
        }
    });

   if ($('.hero.index').length) {
        $(window).on('scroll', function() {
            var heroHeight = $('.hero.index').outerHeight(); 
            
            if ($(this).scrollTop() > heroHeight) {
                $('.header').addClass('is-active'); 
            } else {
                $('.header').removeClass('is-active'); 
            }
        });
    }

});


   
    
       
});