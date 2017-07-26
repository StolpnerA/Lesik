$(document).ready(function () {
    $('html').removeClass('no-js');
    $('html').addClass('js');

    $('.navGallery').on("click", function () {
        $('#tab2').prop('checked', false);
        $('#tab1').prop('checked', true);
    });
    $('.navVideo').on("click", function () {
        $('#tab1').prop('checked', false);
        $('#tab2').prop('checked', true);
    });

    $('.nav, .pic').on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });


    var lang = 1;
    $(".lang").click(function () {
        if (lang === 0) {
            $(".rus").css("display", "block");
            $(".en").css("display", "none");
            $(".lang").text("English");
            lang = 1;
        }
        else {
            $(".en").css("display", "block");
            $(".rus").css("display", "none");
            $(".lang").text("Русский");
            lang = 0;
        }
    });
    $(function () {
        $("#dialog").dialog({
            position: {
                my: "center", at: "top+50%", of: window
            },
            maxHeight: 700,
            width: 350,
            autoOpen: false,
            show: {
                effect: "fadeIn",
                duration: 1000
            },
            hide: {
                effect: "fadeOut",
                duration: 1000
            }
        });

        $(".buttonPoems").on("click", function () {
            $("#dialog").dialog("open");
        });

        $(".closePoem").on("click", function () {
            $("#dialog").dialog("close");
        });
    });

    for (var i = 0; i < poems.length; i++) {
        $('.poemsName').append('<div>' + '<button class="buttonPoems">' + poems[i].name + '</button>' + '</div>');
    }
    $('.buttonPoems').click(function (name) {
            name = this.innerHTML;
            for (i = 0; i < poems.length; i++) {
                if (name === poems[i].name) {
                    $('.ui-dialog-titlebar').text(poems[i].name);
                    $('.scroll').text('');
                    $('.scroll').append('<plaintext>' + poems[i].text);
                }
            }
        }
    );

    var heigthWin = 0;
    var content = $('.poemsName');


    $('#scrollUp').click(function () {
        if (heigthWin > 0) {
            heigthWin -= 50;
        }

        content.animate({
            scrollTop: heigthWin
        }, 400);
        return false;
    });


    $('#scrollDown').click(function () {
        if (heigthWin <= document.getElementById("poemsName").scrollHeight - 250) {
            heigthWin += 50;
        }
        content.animate({
            scrollTop: heigthWin
        }, 200);
        return false;
    });

});