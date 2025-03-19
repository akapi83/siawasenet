$(function(){
  $('.modal-open').on('click', function(){
    const targetId = $(this).data('target');
    const setId = '#' + targetId;
    $(setId).addClass('active');
  });

  $('.modal-close').on('click', function(){
    $('.modal').removeClass('active');
  });
});

// タブ切り替え
$(function(){
  $('.tab-btn').on('click',function(){
    $('.tab-btn').removeClass('current');
    $(this).addClass('current');
    $('.notice').removeClass('current');
    const tabId = $(this).data('tab');
    const setTabId = '#' + tabId;
    $(setTabId).addClass('current');
  });
});

// アコーディオン
$(function(){
  $('.faq dt').on('click',function(){
    $(this).next().slideToggle();
  });
});