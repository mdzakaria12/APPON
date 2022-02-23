$('.banner_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  dots:true
});


$('.screenshots').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  dots:false,
  centerMode: true,
  centerPadding: '0px',
});


$('.one_big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.multi_small'
});
$('.multi_small').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.one_big',
  dots: true,
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true
});
	