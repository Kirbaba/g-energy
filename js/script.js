$(document).ready(function () {
    $(window).scroll(function () {/*функция появления стрелки вверх при прокрутке окна вниз*/

        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")/*показывать при прокрутке вниз показывать медленно #Go_Top*/

        var scrollDiv = $('#Go_Top');

        if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")/*при прокрутке ввверх медленно скрывать #Go_Top*/
        else $(scrollDiv).fadeIn("slow")

    });

    $('#Go_Top').click(function () {/*функция плавной прокрутки вверх при клике на стрелку "вверх"*/
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });
});

$(document).ready(function () {/*функция фиксированного меню*/

    var header = $('.header');
    var nav_top = $('.navbar');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {/*при прокрутке вниз более 50px*/
            header.addClass("header_top");/*элементам присваиваются класы с фиксированным положением*/
            nav_top.addClass("nav_top");
        } else if ($(this).scrollTop() <= 50) {/*при прокрутке в самый вверх*/
            header.removeClass("header_top");/*фиксированные класы сбрасываются*/
            nav_top.removeClass("nav_top");
        }
    });
});

$(document).ready(function () {/*функция раскрытия карты*/

    $('.section').click(function () {
        if ($('.buy__map').height() == 200) {/*при нажатии на ссылку с классом .section*/
            $(".buy__map").animate({height: "650px"}, "slow");/*блоку карты задается выота 650px*/
            $(this).text($(this).attr('data-close'));/*меняется текст кнопки*/
            $('.buy__map--markers').css('display', 'block');/*блоку дается видимость*/
        }
        else {/*при повторном нажатии на ссылку с классом .section все эффекты сбрасываются по умолчанию*/
            $(".buy__map").animate({height: "200px"}, "slow");
            $(this).text($(this).attr('data-open'));
            $('.buy__map--markers').css('display', 'none');
        }
        return false;
    });
});

$(document).ready(function () {/*функция выплывающего блока справа*/

    $('#city').click(function () {/*при клике на элемент #city*/
        $('.buy__map--block').animate({right: "0"}, "slow");/*блок смещается в право до 0px*/
        return false
    });

    $('#city').focusout(function () {/*при клике за элемент #city*/
        $('.buy__map--block').animate({right: "-330px"}, "slow");/*блок задается смещается в право по умолчанию*/
        return false
    });

});

/*-----Yandex map-----*/
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.763918, 37.606388],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'img/marker.png'
            //balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
        });

    myMap.geoObjects.add(myPlacemark);
});
/*-----Yandex map end-----*/


