
$(window).ready(() => {
    //スクロール量
    let scroll_y = window.scrollY;

    //処理を1度のみ実行させるためのフラグ
    let cnt = 0;

    //止めたい位置までの距離を取得(offsetで値確認)
    const stopPosition = 750;

    //スクロール位置修正をスムーズに
    const scrollSpeed = 600;
    //topからintro-container終了までの距離
    const toIntroWidth = 1300;

    //スクロールする度に実行
    $(window).on("scroll", () => {
        scroll_y = window.scrollY;

        //止めたい位置をスクロールが超えた場合かつ、intro範囲内の場合
        if (scroll_y > stopPosition && scroll_y < toIntroWidth) {
            if (cnt == 0) {
                //if条件をスクロール次第では2度実行されてしまうのでインクリメントしておく
                cnt++;
                //スクロールオーバー時に修正するアニメーション
                $("html, body").animate({ scrollTop: stopPosition }, scrollSpeed);
                //画面を固定 
                $('body').css({ 'overflow': 'hidden' });
                stopScroll();
            }
        }
    });
});


//テキスト切り替えと固定解除のメソッド
function stopScroll() {
    
    $('.text-intro').on('click', () => {
        $('.text-intro h2').text('スキルを使って敵を一掃！');
        $('.text-intro').on('click', () => {
            $('.text-intro h2').text('装備を整えて強敵に挑め！');
            $('.text-intro').on('click', () => {
                $('.text-intro h2').text('ふくびき券でレア装備をゲット！');
                $('body').css({ 'overflow': '' });
            });
        });
    });
}

/**
 *
 *
 *
 *
 */