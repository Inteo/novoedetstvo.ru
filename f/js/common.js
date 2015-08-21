function activateSubmenu(row) {
  $(row).find(".catalog-submenu").css("display", "block");
  $(row).addClass("maintainHover");
}
function deactivateSubmenu(row) {
  $(row).find(".catalog-submenu").css("display", "none");
  $(row).removeClass("maintainHover");
}
$(function(){
 $('.catalog-search__input').each(function() {
   if ($(this).val() != '') {
     $(this).prev().addClass('hide');
     $(this).parent().find('.clear-text').addClass('ct-show');
   }
 });

 $('.catalog-search__input').blur(function() {
   if ($(this).val() == '') $(this).prev().removeClass('hide');
 });

 $('.catalog-search__input').focus(function() {
   $(this).prev().addClass('hide');
 });

 $('.catalog-search__input').mouseover(function() {
   if ($(this).val() != '') {
     $(this).prev().addClass('hide');
     $(this).parent().find('.clear-text').addClass('ct-show');
   }
 });

 $('.clear-text').click(function() {
   $(this).parent().find('.b-search__input').val('').focus();
   $(this).removeClass('ct-show');

 });

 $('.catalog-search__input').keyup(function() {
   if ($(this).val() != '') {
     $(this).parent().find('.clear-text').addClass('ct-show');
   } else {
     $(this).parent().find('.clear-text').removeClass('ct-show');
   }
 });
  var $menu = $(".catalog-menu__list");
  $menu.menuAim({
      activate: activateSubmenu,
      deactivate: deactivateSubmenu
  });
  $("input[type=number]").keydown(function(e) {
   // Allow: backspace, delete, tab, escape, enter and .
   if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
     // Allow: Ctrl+A
     (e.keyCode == 65 && e.ctrlKey === true) ||
     // Allow: home, end, left, right
     (e.keyCode >= 35 && e.keyCode <= 39)) {
     return;
   }
   if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
     e.preventDefault();
   }
 });
  $(function(){
    $(".goods-carou a").click(function(){
      $(this).closest(".goods-carou").find("a").removeClass("selected");
      $(this).addClass("selected");
      $(this).closest(".goods-carou").find(".goods-carou__holder img").attr("src", $(this).find("img").attr("src"));
      return false;
    });
    $('.rating_action .rating__item').hover(
      function() {
        $(this).prevAll().andSelf().addClass('rating__item_hover');
      },
      function() {
        $(this).prevAll().andSelf().removeClass('rating__item_hover');
      }
    );
    $('.rating_action .rating__item').click(function(){
      $(this).prevAll().andSelf().addClass('rating__item_active');
      $(this).nextAll().removeClass('rating__item_active');
      return false;
    });
  });
})
$(document).ready(function(){
  $(".modal-inline").fancybox({
    type: 'inline',
    fixed:false,
    maxWidth: "100%",
    title: '',
    padding: 0,
    autoResize: false,
    autoCenter: false,
    fitToView: false,
    helpers: {
      overlay: {
        fixed: false
      }
    }
  }); 
})
