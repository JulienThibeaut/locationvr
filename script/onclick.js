/*
$('.whateWeOffer a').on('click', function(){
    $('.whateWeOffer span.selected-custom').removeClass('selected-custom');
    $(this).addClass('selected-custom');
});
*/
s
$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
