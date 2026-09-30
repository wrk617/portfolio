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

   
    // 2. メインビジュアル＆コンセプトのフェードイン
    // 最初は少し下に下げて、透明にしておく
    $('.hero, .concept').css({
        'opacity': 0,
        'transform': 'translateY(30px)',
        'transition':'opacity 2.5s cubic-bezier(0.25, 1, 0.5, 1), transform 2.5s cubic-bezier(0.25, 1, 0.5, 1)'

    });

    // ページが完全に読み込まれたら、元の位置に戻して表示
    $(window).on('load', function() {
        $('.hero, .concept').css({
            'opacity': 1,
            'transform': 'translateY(0)'
        });
    });

   
    // 3. スクロールによるヘッダーの背景色変化
    
    $(window).on('scroll', function() {
        // ヒーローエリアの高さを基準にする（これを超えたら色を変える）
        var heroHeight = $('.hero').outerHeight() || 200; 
        
        if ($(this).scrollTop() > heroHeight) {
            $('.header').addClass('is-active'); // スクロールされたらクラスを追加
        } else {
            $('.header').removeClass('is-active'); // トップに戻ったらクラスを削除
        }
    });

});