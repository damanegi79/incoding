$(function () {
    "use strict";
    var masterTween = gsap.timeline()
    var intro = gsap.timeline({
        onStart: tweenStart,
        paused: true,
        onComplete: intoroComplete,
    });
    var logoTween = gsap.timeline({
        onStart: tweenStart,
//        paused: true,
        onComplete: logoComplete,
        onReverseComplete: reverseComplete,
    });

    function intoroComplete() {
        logoTween.play();
    }

    function tweenStart() {

    }

    function logoComplete() {
        $('.scrollDown .loader').addClass(' show-arrow')
        $('#wrap').addClass('scroll_use')
    }

    function tweenComplete() {

    }

    function reverseComplete() {

    }


    intro
        .to($(".intro h1"), 1, {
            height: '200vh',
            x: '50%',
            delay: '3.5',
            ease: "power2.inOut",
        })
        .to($(".intro h1"), 1, {
            x: '-50%',
            ease: "power2.inOut",
        })
        .to($(".intro h1"), 1, {
            x: '24.5%',
            ease: "power2.inOut",
        })
        .to($(".intro h1"), 1, {
            scale: '100',
            x: '24.5%',
            transformOrigin: '24.5% 50%',
            delay: '0.2',
            ease: "power4.in",
        })
        .to($(".intro"), 1, {
            opacity: '0',
            ease: "power2.inOut",
        })
        .to($(".intro"), 0, {
            display: 'none',
        })

    //function tweenPage01(tween){
    logoTween
        .to($(".logoBlock .logoLines .line-center"), 1, {y:'-60px',})
        .to($(".logoBlock .logoLines .line-center"), 1, {height: '120px',ease: "power2.inOut"})
        .to($(".logoBlock .logoLines .line-left"), 0, {
            y:'-13px',
            opacity: '1',
        }, "line")
        .to($(".logoBlock .logoLines .line-right"), 0, {
            y:'-25px',
            opacity: '1',
        }, "line")
        .to($(".logoBlock .logoLines .line-left"), 1.5, {
            x: '-108px',
            opacity: '1',
            ease: "power4.out",
        }, "side-line")
        
        .to($(".logoBlock .logoLines .line-right"), 1.5, {
            x: '165px',
            opacity: '1',
            ease: "power4.out",
        }, "side-line")
        .to($(".logoBlock .header"), 0, {
            x:"-50%",
            y:"-50%",
        })
        .to($(".logoBlock h1 span"), 0, {
            opacity: '1',
        })
        .to($(".logoBlock h1 span.left"), 1, {
            x: '0',
            ease: "power4.out",
        }, "title")
        .to($(".logoBlock h1 span.right"), 1, {
            x: '0',
            ease: "power4.out",
        }, "title")
        .to($(".logoBlock .summery"), 1, {
            opacity: '1',
            ease: "power4.out",
            onComplete: function () {
                $('.logoBlock .logoLines .line').addClass('hideAfter')
            },
        })


    $(function () {
//        video.pause();
        masterTween.add(logoTween).timeScale(5)
//        logoTween.play();
    })


    /* 로고트윈 */
    var duration = 100;
    var loadingTween = gsap.timeline({
        paused: true,
        onComplete: loadComple,
        onReverseComplete: loadReverseComple
    })
    loadingTween
        .to($("#loading"), 0, {
            display: 'flex',
            opacity: 1,
        })
        .to($("#loading .lt"), 0.3, {
            width: "50vw",
            ease: "power2.inOut",
        })
        .to($("#loading .rt"), 0.3, {
            height: "50vh",
            ease: "power2.inOut",
            delay: "-0.1"
        })
        .to($("#loading .rb"), 0.3, {
            width: "50vw",
            ease: "power2.inOut",
            delay: "-0.1"
        })
        .to($("#loading .lb"), 0.3, {
            height: "50vh",
            ease: "power2.inOut",
            delay: "-0.1",
            onComplete: function () {
                loadStart()
            }
        })
        .to($("#loading"), 0.3, {
            opacity: 0,
            ease: "power2.inOut",
            delay: "1.5",
        })

    $('.loading button.load').on("click", function () {
        wheelFlag = false;
        $('#loading').show();
        loadingTween.timeScale(1).play();
    })

    function loadingAni() {
        $('#loading').show();
        loadingTween.timeScale(1).play();
    }

    function loadComple() {
        $('#loading').hide();
        loadingTween.timeScale(50).reverse();
    }

    function loadReverseComple() {
        $("#loading").hide();
    }

    function loadStart() {
        setTimeout(function () {
            $('.quote-mask').append("<li>Let's do</li>");
        }, 1 * duration);
        setTimeout(function () {
            $('.quote-mask li:nth-child(1)').remove();
        }, 2 * duration);
        setTimeout(function () {
            $('.quote-mask').append('<li>something</li>');
        }, 3 * (duration));
        setTimeout(function () {
            $('.quote-mask li:nth-child(1)').remove();
        }, 4 * (duration));
        setTimeout(function () {
            $('.quote-mask').append('<li>awesome</li>');
        }, 5 * (duration));
        setTimeout(function () {
            $('.quote-mask li:nth-child(1)').remove();
        }, 6 * (duration));
        setTimeout(function () {
            $('.quote-mask').append('<li>and </li>');
        }, 7 * (duration));
        setTimeout(function () {
            $('.quote-mask li:nth-child(1)').remove();
        }, 8 * (duration));
        setTimeout(function () {
            $('.quote-mask').append('<li>Work Feels</li>');
        }, 9 * (duration));
        setTimeout(function () {
            $('.quote-mask li:nth-child(1)').remove();
        }, 10 * (duration));
        setTimeout(function () {
            $('.quote-mask').append('<li>Like Play!!</li>');
        }, 11 * (duration));
        setTimeout(function () {
            $('.quote-mask li:nth-child(1)').remove();
        }, 12 * (duration));
    }


    /* 컬러셀렉터 */
    $(function () {
        var myColor = new Array();
        var color1 = $(':root').css("--color-1");
        var color2 = $(':root').css("--color-2");
        var color3 = $(':root').css("--color-3");
        var color4 = $(':root').css("--color-4");
        var color5 = $(':root').css("--color-5");
        var color6 = $(':root').css("--color-6");


        var myColor_sub = new Array();
        var color1_sub = $(':root').css("--color-1_sub");
        var color2_sub = $(':root').css("--color-2_sub");
        var color3_sub = $(':root').css("--color-3_sub");
        var color4_sub = $(':root').css("--color-4_sub");
        var color5_sub = $(':root').css("--color-5_sub");
        var color6_sub = $(':root').css("--color-6_sub");

        myColor.push(color1, color2, color3, color4, color5, color6)
        myColor_sub.push(color1_sub, color2_sub, color3_sub, color4_sub, color5_sub, color6_sub)
        var random = Math.round(Math.random() * (myColor.length - 1));
        $(':root').css({
            "--color-1": myColor[random],
            "--color-1_sub": myColor_sub[random]
        });
        $('.colorSelector li button').on('click', function () {
            var indexNum = $('.colorSelector li button').index(this)
            gsap.to($('html'), 1, {
                '--color-1': myColor[indexNum],
                ease: "power2.inOut",
            }, 'color')
            gsap.to($('html'), 1, {
                '--color-1_sub': myColor_sub[indexNum],
                ease: "power2.inOut",
            }, 'color')
            $('.colorSelector').removeClass('active');
            colorCHG.timeScale(2).reverse();
        })
        var colorCHG = gsap.timeline({
            paused: true,
        });
        colorCHG.to($('.colorSelector li'), 0, {
            display: 'block'
        })
        colorCHG.from($('.colorSelector li'), 0.4, {
            x: "-40",
            opacity: "0",
            duration: 0.1,
            stagger: 0.05,
            ease: "power2.out",
        })
        $('.colorSelector dt button').on('click', function () {
            if ($('.colorSelector').hasClass('active')) {
                $('.colorSelector').removeClass('active');
                colorCHG.timeScale(2).reverse(1);
            } else {
                $('.colorSelector').addClass('active');
                colorCHG.timeScale(2).play();
            }
        })
        $('.indicator .navItem:eq(0), a.home').on('click', function () {
            var random = Math.round(Math.random() * (myColor.length - 1));
            $(':root').css({
                "--color-1": myColor[random],
                "--color-1_sub": myColor_sub[random]
            });
        })
    })

    $(function () {
        var figure = $(".video-preview").hover(hoverVideo, hideVideo);

        function hoverVideo(e) {
            $('video', this).get(0).play();
        }

        function hideVideo(e) {
            $('video', this).get(0).pause();
        }
    })


    var flagType = true;

    function typetext() {
        if (flagType == true) {
            flagType = false;
            setTimeout(function () {
                $('.type-text').each(function () {
                    var items = $(this).attr('title') + ';' + $(this).text();
                    $(this).empty().attr('title', '').teletype({
                        text: $.map(items.split(';'), $.trim),
                        typeDelay: 20,
                        backDelay: 10,
                        cursor: '|',
                        delay: 1000,
                        preserve: false,
                        prefix: 'We make something ',
                        loop: 0
                    });
                });
            }, 1000)
        }
    }
})

$(function () {
    var controller = new ScrollMagic.Controller();
    var tl = new TimelineMax();
    var initScreen = $('.initScreen').height()/2
    tl.to($(".header"), 5, {
        force3D: true,
        top:'0vh',
        scale:'0.4',
        x:'-43%',
    },'logo')
    .to($(".logoBlock .logoLines .lineBlock"), 5, {
        top:'0',
    },'logo')
     .to($(".logoBlock .logoLines .lineBlock .line-center"), 5, {
        x:'0',
        y:'0%',
        height:'100vh',
    },'logo')
    .to($(".logoBlock .logoLines .lineBlock .line-left"), 5, {
//        x:'0',
//        y:'0%',
//        width:'1px',
        left:'-1vw',
//        height:'100vh',
    },'logo')
    .to($(".logoBlock .logoLines .lineBlock .line-right"), 5, {
//        x:'-1px',
//        y:'0%',
//        width:'1px',
        left:'101vw',
//        height:'100vh',
    },'logo')
    .to($(".header"), 5, {
        force3D: true,
        y:'0%',
    })
    var scene = new ScrollMagic.Scene({
      triggerElement: ".initScreen",
      triggerHook: 0,
      offset:0,
      duration: initScreen,
    })
    .addIndicators()
    .setTween(tl)
    .addTo(controller);

    $('.initScreen').on('inview', function(event, isInView) {
      if (isInView) {
        console.log('initScreen in')
      } else {
        console.log('initScreen out')
      }
    });

    $('#section2').on('inview', function(event, isInView) {
      if (isInView) {
        console.log('section2 start')
      } else {
        console.log('section2 out')
      }
    });
})
