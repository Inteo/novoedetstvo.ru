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
})