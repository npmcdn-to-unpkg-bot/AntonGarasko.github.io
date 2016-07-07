$(document).ready(function(){
    $('.carousel').owlCarousel({
        loop:true,
        margin: 10,
        nav: true,
        navText: [],
        responsive:{
            0:{
                items:1
            }
        }
    });

    // $('.grid').masonry({
    //     itemSelector: '.grid-item',
    //     columnWidth: '.grid-sizer',
    //     percentPosition: true,
    //     gutter: 20
    // });

    function grid() {
        var $grid = $('.grid').imagesLoaded(function () {
            $grid.masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-sizer',
                percentPosition: true,
                gutter: 20
            });
        })
    }

    grid();



    // function search() {
    //     // $('.ideas').find('div').remove();
    //     // $('img').remove();
    //     var $searchKey = $('.search').val();
    //
    //     $.ajax({
    //         url: 'https://pixabay.com/api/?key=2874337-2f4149c7655f3148f045862c0&q=' + $searchKey + '&image_type=photo',
    //         dataType: 'jsonp',
    //         success: function (data) {
    //             var results = data.hits;
    //             for (var i = 0; i < results.length; i++) {
    //                 $('.grid-item').append('<img src="' + results[i].webformatURL + '">');
    //             }
    //             console.log(data);
    //             // var $html = $('#container').html();
    //             // var $content = tmpl($html, data);
    //             // $('.ideas').append($content);
    //             grid();
    //         },
    //         error: function () {
    //             alert('Error!');
    //         }
    //     });
    // }

    search();
    //
    // $('.search__button').on('click', function (e) {
    //     e.preventDefault();
    //     search();
    //     $('.search__field').val('');
    // })
});