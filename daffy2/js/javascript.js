$(function() {
    
   $('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    slidesToShow:3,
   arrows: false,
   });
    
    
 $('.accordion').on('click' , '.accordion-control', function(e){
    e.preventDefault();
     
     //現在のアイコンの状態で上にするか下にするか判定
     if($(this).children('i').is('.fa-arrow-circle-down')){
         
         //上アイコンに変更
         $(this).children('i')
         .removeClass()
         .addClass('fas fa-arrow-circle-up');
   
     }else{
         //下アイコンに変更
         $(this).children('i')
         .removeClass()
         .addClass('fas fa-arrow-circle-down');
     }

    // クリックしたリストの開閉
    $(this)
      .next('.accordion-panel')
      .slideToggle();

  });
    
    
});