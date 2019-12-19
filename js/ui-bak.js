//$(window).resize(resize);
//
//
//function resize() {
//    vw = $(window).width();
//    vh = $(window).height();
//}
vw = $(window).width();
vh = $(window).height();
var wheelFlag = true;
var target = null;
$(function () {
    "use strict";


    $("*[data-ui='wheel-section']").eq(0).addClass("active");
    $("body").on("mousewheel", function (e, delta) {
        if (!wheelFlag) return;
//        var target = null;
        var idx;
        $("*[data-ui='wheel-section']").each(function (i) {
            if ($(this).is(".active")) {
                idx = i;
            }
        });

        if (delta > 0) {
            if (idx > 0) {
                target = $("*[data-ui='wheel-section']").eq(idx - 1);
            }
        } else {
            if (idx < $("*[data-ui='wheel-section']").length - 1) {
                target = $("*[data-ui='wheel-section']").eq(idx + 1);
            }
        }
        if (target) {
            $("*[data-ui='wheel-section'].active").removeClass("active");
            target.addClass("active").trigger("start", [delta > 0 ? "up" : "down"]);
//            wheelFlag = false;

            console.log(delta, wheelFlag)
                //            setTimeout(function () {
                //                wheelFlag = true;
                //            }, delta > 0 ? target.data("up-time") : target.data("down-time"));
        }
        var activepage = $("*[data-ui='wheel-section'].active").index()-1
       
        
        $(".indicator nav .navItem").find('.point').removeClass('current')
        $(".indicator nav .navItem").eq(activepage).find('.point').addClass('current');
    });
    
    

    var masterTween = gsap.timeline()
    var intro = gsap.timeline({
        onStart: tweenStart,
        paused: true,
        onComplete: intoroComplete,
        clearProps:"all",
    });
    var logoTween = gsap.timeline({
        onStart: tweenStart,
        paused: true,
        onComplete: tweenComplete,
        onReverseComplete: reverseComplete,
        clearProps:"all",
    });
    var logoTween2 = gsap.timeline({
        onStart: tweenStart,
        paused: true,
        onComplete: tweenComplete,
        onReverseComplete: reverseComplete,
        clearProps:"all",
    });
    var logoTween3 = gsap.timeline({
        onStart: tweenStart,
        paused: true,
        onComplete: tweenComplete,
        onReverseComplete: reverseComplete
    });
    var logoTween4 = gsap.timeline({
        onStart: tweenStart,
        paused: true,
        onComplete: tweenComplete,
        onReverseComplete: reverseComplete,
    });
    var logoTween5 = gsap.timeline({
        onStart: tweenStart,
        paused: true,
        onComplete: tweenCompleteScroll,
        onReverseComplete: reverseCube,
        onReverseStart: tweenStart
    });
    var logoTween6 = gsap.timeline({
        onStart: tweenStart,
        paused: true,
        onComplete: tweenComplete,
        onReverseComplete: tweenCompleteScroll,
    });
    var tweenCubeRotate = gsap.timeline({
        paused: true,
        onComplete: cubeComplete
    });


    function intoroComplete() {
        logoTween.play();
    }

    function tweenStart() {
        wheelFlag = false;
        console.log(wheelFlag + " the tween is start");
    }

    function tweenCompleteHead() {
        wheelFlag = true;
        console.log(wheelFlag + " the tween is complete");
    }


    function tweenComplete() {
        wheelFlag = true;

        //        $('.logoBlock .header').css({left:"", top:""})
        //        $('.logoBlock .line').css({left:"", top:""})
        console.log(wheelFlag + " the tween is complete");
    }
    var scrollflag = false;

    function tweenCompleteScroll() {
        wheelFlag = false;
        console.log(wheelFlag + " Scroll tween is complete");
    }

    function showcase() {
        /* 마우스 오버 이미지 */
        if (scrollflag == false) {
            Array.from(document.querySelectorAll('.grid__item-img')).forEach((el) => {
                const imgs = Array.from(el.querySelectorAll('img'));
                new hoverEffect({
                    parent: el,
                    intensity: el.dataset.intensity || undefined,
                    image1: imgs[0].getAttribute('src'),
                    image2: imgs[1].getAttribute('src'),
                    displacementImage: el.dataset.displacement
                });
            });
            scrollbar();
            scrollflag = true;
        }
    }

    function reverseComplete() {
        wheelFlag = true;
        //    $('.section').scrollLock('disable');
        console.log(wheelFlag + " the reverse tween is complete");


    }

    function reverseCube() {
        wheelFlag = false;
        cubeRotate()
        console.log(wheelFlag + " the reverse tween is complete");


    }


    function cubeComplete() {
        cubeRotate()
        console.log(degCount + ' complete')
            //        tweenCubeRotate.pause();
    }

    var count = 0;
    var degCount = 0;

    function tweenCube() {
        tweenCubeRotate
            .to($('#section4 .cube'), 0.2, {
                scale: '0.9',
                ease: "power2.inOut",
            })
            .to($('#section4 .cube .side'), 0.2, {
                opacity: '0.7',
                ease: "power2.inOut",
            }, '-=0.2')
            .to($('#section4 .cube'), 0.4, {
                rotateY: degCount,
                ease: "power2.inOut",
            })
            .to($('#section4 .cube'), 0.2, {
                scale: '1',
                ease: "power2.inOut",
            })
            .to($('#section4 .cube .side'), 0.2, {
                opacity: '1',
                ease: "power2.inOut",
            }, '-=0.2')
        tweenCubeRotate.play();
    }

    function cubeRotateEnd() {
        $('#section4').unbind('mousewheel')
    }

    function scrollsection() {
        $('#section5').one('mousewheel', function (event, delta) {
            if (delta <= 0) {
                wheelFlag = false;
            }
            if (delta > 0) {
                wheelFlag = true;
            }
        });
    }
    $(function () {
        $('#section4 .paging li button').on('click', function () {
            var pagenum = $('#section4 .paging li button').index(this)
            count = pagenum
            degCount = count * 90;
            console.log(pagenum, count)
            tweenCube()
            cubePaging()
        })
    })

    function cubePaging() {
        $('#section4 .paging li').removeClass('active')
        setTimeout(function () {
            $('#section4 .paging li').eq(count).addClass('active');
            $('#section4 .desc-title li').removeClass('active')
            $('#section4 .desc-title li').eq(count).addClass('active');
        }, 400)
        gsap.to($('#section4 .pagingBlock .block'), 0.4, {
            x: count * 34,
            ease: "power2.inOut",
        })
    }

    function cubeRotate() {
        wheelFlag = false;

        $('#section4').bind('mousewheel', function (event, delta) {
            if (!tweenCubeRotate.isActive()) {
                if (delta <= 0) {
                    count++
                    if (count >= 4) {
                        count = 3;
                        wheelFlag = true;
                    } else {
                        video.pause();
                        wheelFlag = false;
                        degCount = count * 90;
                        console.log(degCount, count)
                        tweenCube()
                        cubePaging()
                    }

                }
                if (delta > 0) {
                    count--
                    if (count === 0) {
                        video.play();
                    }
                    if (count < 0) {
                        count = 0;
                        wheelFlag = true;
                    } else {
                        wheelFlag = false;
                        degCount = count * 90;
                        console.log(degCount, count)
                        tweenCube()
                        cubePaging()
                    }
                }
            }

        });

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
        .fromTo($(".logoBlock .header"), 0, {
            left: '50vw',
            x: '-55px',
            top: '50vh',
            y: "-50%",
            ease: "power4.out",
        }, "side-line")
        .to($(".logoBlock .logoLines .line-center"), 0.6, {
            scaleY: '1',
            //            opacity: '1',
            left: '50vw',
            top: '50%',
            y: '-50%',
            ease: "power4.out",
        })
        .addLabel("side-line")
        .to($(".logoBlock .logoLines .line-left"), 0, {
            left: '50vw',
            opacity: '1',
            y: '-50%'
        }, "side-line")
        .to($(".logoBlock .logoLines .line-left"), 0.6, {
            x: '-115',
            opacity: '1',
            ease: "power4.out",
        }, "side-line")
        .to($(".logoBlock .logoLines .line-right"), 0, {
            left: '50vw',
            opacity: '1',
            y: '-50%',
        }, "side-line")
        .to($(".logoBlock .logoLines .line-right"), 0.6, {
            x: '195',
            opacity: '1',
            ease: "power4.out",
        }, "side-line")
        .to($(".logoBlock .header"), 0, {
            opacity: '1',
        }, "side-line")
        .from($(".logoBlock h1 span.left"), 0.3, {
            x: '-130',
            opacity: '0',
            ease: "power4.out",
            delay: 0.6,
        }, "side-line")
        .from($(".logoBlock h1 span.right"), 0.3, {
            x: '130',
            opacity: '0',
            ease: "power4.out",
            delay: 0.6,
        }, "side-line")
        .from($(".logoBlock .summery"), 1, {
            opacity: '0',
            ease: "power4.out",
            delay: 1,
            onComplete: function () {
                $('.logoBlock .logoLines .line').addClass('hideAfter')
            },
        }, "side-line")
    var vh = $(window).height()
    logoTween2
        .to($("#section1"), 0, {
            display: 'none',
            zIndex: '-1',
        })
        .to($(".logoBlock .header"), 0.3, {
            top: "40px",
            //            yPercent:"-50",
            y: "-50%",
            ease: "power2.inOut",
            scale: '0.8',
            left: '50vw',
            x: '-29%',
        }, "side-line")
        .to($(".logoBlock .header h1"), 0.3, {
            width: '200',
            ease: "power2.inOut",

        }, "side-line")
        .to($(".logoBlock .header .summery"), 0.3, {
            left: '100',
            ease: "power2.inOut",
        }, "side-line")
        .to($(".logoBlock .logoLines .line-center"), 0.3, {
            y: '0%',
            left: '50vw',
            height: '90vh',
            top: '0',
            ease: "power2.inOut",
        }, "side-line")
        .to($(".logoBlock .logoLines .line-left"), 0.3, {
            x: '-1',
            left: '25vw',
            y: '-50%',
            height: '33vh',
            ease: "power2.inOut",
        }, "side-line")
        .to($(".logoBlock .logoLines .line-right"), 0.3, {
            x: '-1',
            y: '-50%',
            left: '75vw',
            height: '70vh',
            ease: "power2.inOut",
        }, "side-line")
        .to($("#section2"), 0, {
            zIndex: '10',
            display: 'flex',
        }, "side-line")
        .to($("#section2"), 0.4, {
            opacity: '1',
            ease: "power2.inOut",
        }, "side-line")
        .to($(".about .serviceCon"), 0.3, {
            x: '0',
            opacity: '1',
            ease: "power2.inOut",
        })

    logoTween3
        .to($(".about .serviceCon"), 0.3, {
            x: '-25vw',
            ease: "power2.inOut",
        })
        .to($("#section2"), 0, {
            display: 'none',
            zIndex: '-1',
        })
        .to($(".logoBlock .header"), 0.4, {
            left: '60vw',
            ease: "power2.inOut",
        }, "side-line")
        .to($(".logoBlock .header .summery"), 0.4, {
            left: '220',
            y: '-27',
            ease: "power2.inOut",
        }, "side-line")
        .to($(".logoBlock .logoLines .line-center"), 0.4, {
            left: '60vw',
            height: '100vh',
            ease: "power2.inOut",
        }, "side-line")
        .to($(".logoBlock .logoLines .line-left"), 0.4, {
            x: "0",
            left: '40vw',
            height: '100vh',
            ease: "power2.inOut",
        }, "side-line")
        .to($(".logoBlock .logoLines .line-right"), 0.4, {
            x: '2',
            left: '80vw',
            height: '100vh',
            ease: "power2.inOut",
        }, "side-line")
        .to($("#section3"), 0, {
            display: 'flex',
            zIndex: '10',
            opacity: '0',
        }, "side-line")
        .to($("#section3"), 0.4, {
            opacity: '1',
            ease: "power2.inOut",
        })

    logoTween4
        .to($('#section3'), 0.5, {
            opacity: '0',
        })
        .to($('#section3'), 0, {
            display: 'none',
            zIndex: '-1',
            delay: '0.4',
        })
        .to($(".logoBlock .header"), 0.4, {
            ease: "power2.inOut",
            left: '105vw',
        }, "side-line")
        .to($(".logoBlock .logoLines .line-center"), 0.4, {
            //            x:'-2px',
            left: '45vw',
            //            height: '100vh',
            ease: "power2.inOut",
        }, "side-line")
        .to($(".logoBlock .logoLines .line-left"), 0.4, {
            left: '0vw',
            ease: "power2.inOut",
        }, "side-line")
        .to($(".logoBlock .logoLines .line-right"), 0.4, {
            x: '-2px',
            left: '100vw',
            ease: "power2.inOut",
        }, "side-line")
        .to($("#section4"), 0, {
            zIndex: '10',
            display: 'flex',
        })
        .to($(".logoBlock .header"), 0, {
            left: '0px',
            x: '-100%',
        }, "logo")
        .to($(".logoBlock .header h1"), 0, {
            width: '160',
        }, "logo")
        .to($(".logoBlock .header h1 span:eq(1)"), 0, {
            x: '-15',
        }, "logo")
        .to($(".logoBlock .header .summery"), 0, {
            left: '200',
        }, "logo")
        .to($(".logoBlock .header"), 1, {
            left: '30px',
            x: '0%',
            decay: 0.5,
            ease: "power4.out",
        }, "section04")
        .to($("#section4"), 0.4, {
            opacity: '1',
            delay: 0.5,
            ease: "power2.inOut",
            onComplete:function(){
                cubeRotate();
                video.play();
                $('.home').show()
            }
        }, "section04")


    logoTween5
        .to($('#section4'), 0.5, {
        display: 'none',
            opacity: '0',
        })
        .to($('#section4'), 0, {
            display: 'none',
            zIndex: '-1',
        })
        .to($(".logoBlock .logoLines .line-left"), 0.8, {
            left: '0vw',
            rotateY: "135deg",
            //            opacity:'0.1',
            ease: "power2.inOut",
        }, "side-line1")
        .to($(".logoBlock .logoLines .line-center"), 0.8, {
            left: '100vw',
            ease: "power2.inOut",
        }, "side-line1")
        .to($(".logoBlock .logoLines .line-right"), 0.8, {
            x: '0',
            left: '100vw',
            rotateY: "135deg",
            //            opacity:'0.1',
            ease: "power2.inOut",
        }, "side-line1")
        .to($(".logoBlock .logoLines .line:eq(1),.logoBlock .logoLines .line:eq(2)"), 0.8, {
            delay:"0.3",
            width: "100vw",
            ease: "power2.inOut",
        }, "side-line2")
        //        .to($(".logoBlock .logoLines .line:eq(0)"), 0.8, {
        //                top:'100vh',
        //                x:"0",
        //                width:"100vw",
        //                height:"100vw",
        //                rotateX:"-90deg",
        //                transformOrigin:"0% 0%",
        //                opacity:'0.3',
        //        }, "side-line2")
        //        .to($(".logoBlock .logoLines .lineBlock"), 0.8, {
        //            rotateY:"35deg",
        //            z:'35vw',
        //            ease: "power2.inOut",
        //        })
        .to($("#section5"), 0, {
            zIndex: '10',
            display: 'flex',
            onComplete: function () {
                showcase();
                 switchClass(-1);
            },
        })
        .to($("#section5"), 0.4, {
            opacity: '1',
            ease: "power2.inOut",
        })
    logoTween6
        .to($(".logoBlock .logoLines .line-left"), 0, {
            rotateY: "45deg",
        }, "start")
        .to($('#section5'), 0.5, {
            opacity: '0',
        })
        
        .to($(".logoBlock .logoLines .line-left"), 0.8, {
            rotateY: "25deg",
            height: '50vh',
            left: '40vw',
            //            width:'2px',
            ease: "power2.inOut",
        }, "line")
        .to($(".logoBlock .logoLines .line-right"), 0, {
            display: 'none',
        }, "line")
        .to($(".logoBlock .logoLines .line-center"), 0, {
            display: 'none',
        }, "line")
        .to($("#section6"), 0, {
            zIndex: '10',
            display: 'flex',
        })
        .to($("#section6"), 0.4, {
            opacity: '1',
            delay: '0.5',
            ease: "power2.inOut",
        })
        .to($("#section5"), 0, {
            display: 'none',
            zIndex: '0'
        })
    $(function () {
        wheelFlag = false;
        //        intro.play();
        video.pause();
//        masterTween.add(logoTween.play())
        logoTween.play();
    })
    $("#section1").on("start", function (e, arrow) {
        $(".logoBlock .header").css({
            zIndex: "1"
        })
        if (arrow == "down") {
            
        } else {
            console.log('wheel up')
//            masterTween.add(logoTween2.reverse())
            logoTween2.reverse()
        }
        e.preventDefault();
        e.stopPropagation();
    });
    $("#section2").on("start", function (e, arrow) {
        if (arrow == "down") {
//            masterTween.add(logoTween2.play())
            logoTween2.play()

        } else {
            logoTween3.reverse()

        }
        e.preventDefault();
        e.stopPropagation();
    });
    const video = document.querySelector("#dev_video");
    $("#section3").on("start", function (e, arrow) {
        $(".logoBlock .header").css({
            zIndex: "10"
        })
        if (arrow == "down") {
            wheelFlag = false;
            logoTween3.play()

        } else {
            wheelFlag = false;
            logoTween4.reverse()
            cubeRotateEnd()
            video.pause();
            $('.home').hide()
        }
        e.preventDefault();
        e.stopPropagation();
    });
    $("#section4").on("start", function (e, arrow) {
        console.log("section4 start");
        wheelFlag = false;
        if (arrow == "down") {
            wheelFlag = false;
            logoTween4.play()
//            video.play();
            
        } else {
            wheelFlag = false;
            logoTween5.reverse()
//            cubeRotate()
        }
        e.preventDefault();
        e.stopPropagation();
    });
    $("#section5").on("start", function (e, arrow) {
        console.log("section5 start");
        wheelFlag = false;
        if (arrow == "down") {
            wheelFlag = false;
            logoTween5.play()
            cubeRotateEnd()
            $('.info-scroll').css({
                opacity: 0
            })

        } else {
            wheelFlag = false;
            logoTween6.reverse()
            $('.info-scroll').css({
                opacity: 0
            })
        }
        e.preventDefault();
        e.stopPropagation();
    });
    $("#section6").on("start", function (e, arrow) {
        console.log("section6 start");
        if (arrow == "down") {
            logoTween6.play()
        } else {
            //            tweenCube3.reverse()
        }
        e.preventDefault();
        e.stopPropagation();
    });

    $(".service .face-1").on("click", function () {
        wheelFlag = false;
        $(this).parents('.service').addClass('open');
        $('#section3 .serviceContents').addClass('serviceOpened');
        console.log(wheelFlag + " the tween is complete");
    });
    $("#section3 .serviceContents .closeArea, #section3 .serviceContents .service .closeService").on("click", function () {
        wheelFlag = true;
        $('#section3 .serviceContents').removeClass('serviceOpened');
        $('#section3 .serviceContents .service').removeClass('open');
        console.log(wheelFlag + " the tween is complete");
    });

    var scrollX = 0;
    var scrollMax = 0;

    function scrollbar() {
        var __extends = (this && this.__extends) || function (d, b) {
            for (var p in b)
                if (b.hasOwnProperty(p)) d[p] = b[p];

            function __() {
                this.constructor = d;
            }
            __.prototype = b.prototype;
            d.prototype = new __();
        };

        var HorizontalScrollPlugin = (function (_super) {
            __extends(HorizontalScrollPlugin, _super);

            function HorizontalScrollPlugin() {
                _super.apply(this, arguments);
            }
            HorizontalScrollPlugin.prototype.transformDelta = function (delta, fromEvent) {
                if (!/wheel/.test(fromEvent.type)) {
                    return delta;
                }
                // @see: https://github.com/idiotWu/smooth-scrollbar/issues/181
                var x = delta.x,
                    y = delta.y;
                return {
                    y: 0,
                    x: Math.abs(x) > Math.abs(y) ? x : y
                };
            };
            HorizontalScrollPlugin.pluginName = 'horizontalScroll';
            return HorizontalScrollPlugin;
        })(Scrollbar.ScrollbarPlugin);
        Scrollbar.use(HorizontalScrollPlugin /* you forgot this */ );


        /*--------------------
        Wheel Option
        -------------------*/
        let option = {
            x: 200,
            speed: 1.5,
            limit: 2,
            time: 0.5,
        };


        /*--------------------
        Init Scrollbar
        -------------------*/

        const scrollbar = Scrollbar.init(document.querySelector('#scrollbar'), {
            overscrollEffect: 'glow',
            glowColor: 'transparent',
            alwaysShowTracks: false,
            damping: 0.05,
            continuousScrolling: false,
            renderByPixels:true,
        });

        let scenes = [];
        let x = 0;
        let max = 0;
        // initial smooth-scrollbar
        let scroll = Scrollbar.init(
            document.querySelector(".scroll-slider"));
        // initiate ScrollMagic Controller
        let controller =
            new ScrollMagic.Controller({
                refreshInterval: 0,
                vertical: false
            });

        // update scrollY controller
        controller.scrollPos(function () {
            return x;
        });

        // initiate ScrollMagic Scene each section
        $(".scroll-slide").each(function () {

            let text = $(this).find(".item-container");
            let chiffre = $(this).find(".item-body");
            let image = $(this).find(".block");

            let tl = new TimelineMax();
            //            tl.from(text, 1, {
            //                xPercent:0,
            ////                rotate: "0deg"
            //            }, "start");
            tl.from(chiffre, 1, {
                x: "50%",
            }, "start");
            tl.from(image, 1, {
                x: "20%",
            }, "start");

            scenes.push(
                new ScrollMagic.Scene({
                    offset: 1,
                    triggerHook: "0.75",
                    triggerElement: $(this)[0],
                    duration: $(window).width(),
                    reverse: true
                }).setTween(tl)
                .on("leave", function () {
                    //console.log('leave scene');
                }).on("enter", function () {
                    //                    console.log('enter scene');
                }).on("progress", function (e) {
                    //                    console.log("progress => ", e.progress);
                })
                .addTo(controller)
            );

        });
        var tweenWidth = $('.scroll-slide').length * $('.scroll-slide').width() - vw
        let tl1 = new TimelineMax();
        tl1.to($("#section5 .title"), 1, {
            x: "40vw",
        }, "start");
        scenes.push(
            new ScrollMagic.Scene({
                offset: 0,
                triggerHook: "0",
                duration: tweenWidth,
                reverse: true
            }).setTween(tl1)
            .addTo(controller)
        );
        tl1.to($(".logoLines .lineBlock .line"), 1, {
            rotateY: "45deg",
        }, "start");
        scenes.push(
            new ScrollMagic.Scene({
                offset: 0,
                triggerHook: "0",
                duration: tweenWidth,
                reverse: true
            }).setTween(tl1)
            .addTo(controller)
        );



        // listener smooth-scrollbar, update controller
        scrollbar.addListener(function (status) {
            x = status.offset.x;
            max = status.limit.x;
            controller.update();
            if (x === 0) {
                gsap.to($('.info-scroll.left-side'), 0.2, {
                    opacity: 1,
                    ease: "power2.inOut",
                })
                setTimeout(function () {
                    wheelFlag = true;
                    console.log(wheelFlag)
                }, 200)
//                setTimeout(function () {
//                    wheelFlag = false;
//                    gsap.to($('.info.left-side'), 0.2, {
//                        opacity: 0,
//                        ease: "power2.inOut",
//                    })
//                    console.log(wheelFlag)
//                }, 1000)
                $('#section5').bind('mousewheel', function (event, delta) {
                    if (delta <= 0  && max/2 > x) {
                        gsap.to($('.info-scroll.left-side'), 0.2, {
                            opacity: 0,
                            ease: "power2.inOut",
                        })
                    }
                    if (x === 0 && delta <= 0) {
                        wheelFlag = false;
                        console.log(wheelFlag)
                    }
                });
            }
            if (x >= max) {
                gsap.to($('.info-scroll.right-side'), 0.2, {
                    opacity: 1,
                    ease: "power2.inOut",
                })
                setTimeout(function () {
                    wheelFlag = true;
                    console.log(wheelFlag)
                }, 200)
//                setTimeout(function () {
//                    wheelFlag = false;
//                    gsap.to($('.info.right-side'), 0.2, {
//                        opacity: 0,
//                        ease: "power2.inOut",
//                    })
//                    console.log(wheelFlag)
//                }, 1500)
                $('#section5').bind('mousewheel', function (event, delta) {
                    if(delta < 0){
                        $('#section5').unbind('mousewheel')
                    }
                    if (delta > 0 && max/2 < x) {
                        wheelFlag = false;
                        gsap.to($('.info-scroll.right-side'), 0.2, {
                            opacity: 0,
                            ease: "power2.inOut",
                        })
                    }
                    if (x === max && delta > 0) {
                        wheelFlag = false;
                        console.log(wheelFlag)
                    }
                });
            }
            if (x < max && x > 0) {
                wheelFlag = false;
            }
            var per = $('.scroll-slide').width();
            var perNum = $('.scroll-slide').length
            var xper = parseInt(x / (max) * 100)
            TweenMax.to($(".slideshow__progress"), 1, {
                width: xper + "%",
                ease: Power4.easeOut,
            })
            TweenMax.to($(".lineBlock"), 1, {
                ease: Power4.easeOut,
            })
        });

    }
    
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
            opacity:1,
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
    
    function loadComple() {
        wheelFlag = true;
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
    
    
    /* 네비 이동 */
    $(".indicator nav .navItem button").on('click',function(){
        var currentIndex = $("#wrap").find('.active').index()-1
        console.log(currentIndex + '현재')
        var navIndex = $(".indicator nav .navItem button").index(this);
        
        $(".indicator nav .navItem").find('.point').removeClass('current')
        $(".indicator nav .navItem").eq(navIndex).find('.point').addClass('current');
    
        target = $("*[data-ui='wheel-section']").eq(navIndex);
        $("*[data-ui='wheel-section'].active").removeClass("active");
        $("*[data-ui='wheel-section']").eq(navIndex).addClass("active");
        console.log(navIndex + '클릭')
        
        
        if(navIndex == 0){
             masterTween.remove(logoTween, logoTween2, logoTween3, logoTween4, logoTween5, logoTween6)
            
//            masterTween.remove(logoTween)
//            masterTween.invalidate()
//            masterTween.add(logoTween2.totalProgress(0)).add(logoTween.totalProgress(1))
            masterTween.remove(logoTween.totalProgress(0))
            masterTween.remove(logoTween2.totalProgress(0))
            masterTween.remove(logoTween3.totalProgress(0))
            masterTween.remove(logoTween4.totalProgress(0))
            masterTween.remove(logoTween5.totalProgress(0))
            masterTween.remove(logoTween6.totalProgress(0))
            masterTween.clear();
            masterTween.add(logoTween.timeScale(5).play())
        } else if(navIndex == 1){
            masterTween.remove(logoTween, logoTween2, logoTween3, logoTween4, logoTween5, logoTween6)
//            masterTween.invalidate()
            
            masterTween.remove(logoTween.totalProgress(0))
            masterTween.remove(logoTween2.totalProgress(0))
            masterTween.remove(logoTween3.totalProgress(0))
            masterTween.remove(logoTween4.totalProgress(0))
            masterTween.remove(logoTween5.totalProgress(0))
            masterTween.remove(logoTween6.totalProgress(0))
            masterTween.clear();
            masterTween.add(logoTween.timeScale(5).play()).add(logoTween2.timeScale(5).play())
        } else if(navIndex == 2){
            masterTween.remove(logoTween, logoTween2, logoTween3, logoTween4, logoTween5, logoTween6)
            masterTween.remove(logoTween.totalProgress(0))
            masterTween.remove(logoTween2.totalProgress(0))
            masterTween.remove(logoTween3.totalProgress(0))
            masterTween.remove(logoTween4.totalProgress(0))
            masterTween.remove(logoTween5.totalProgress(0))
            masterTween.remove(logoTween6.totalProgress(0))
            masterTween.clear();
            masterTween.add(logoTween.timeScale(5).play()).add(logoTween2.timeScale(5).play()).add(logoTween3.timeScale(5).play())
        } else if(navIndex == 3){
            masterTween.remove(logoTween, logoTween2, logoTween3, logoTween4, logoTween5, logoTween6)
            masterTween.remove(logoTween.totalProgress(0))
            masterTween.remove(logoTween2.totalProgress(0))
            masterTween.remove(logoTween3.totalProgress(0))
            masterTween.remove(logoTween4.totalProgress(0))
            masterTween.remove(logoTween5.totalProgress(0))
            masterTween.remove(logoTween6.totalProgress(0))
            masterTween.clear();            masterTween.add(logoTween.timeScale(5).play()).add(logoTween2.timeScale(5).play()).add(logoTween3.timeScale(5).play()).add(logoTween4.timeScale(5).play());
            
        } else if(navIndex == 4){
           masterTween.remove(logoTween, logoTween2, logoTween3, logoTween4, logoTween5, logoTween6)
            masterTween.remove(logoTween.totalProgress(0))
            masterTween.remove(logoTween2.totalProgress(0))
            masterTween.remove(logoTween3.totalProgress(0))
            masterTween.remove(logoTween4.totalProgress(0))
            masterTween.remove(logoTween5.totalProgress(0))
            masterTween.remove(logoTween6.totalProgress(0))
            masterTween.clear();            masterTween.add(logoTween.timeScale(5).play()).add(logoTween2.timeScale(5).play()).add(logoTween3.timeScale(5).play()).add(logoTween4.timeScale(5).play()).add(logoTween5.timeScale(5).play());
        } else if(navIndex == 5){
           masterTween.remove(logoTween, logoTween2, logoTween3, logoTween4, logoTween5, logoTween6)
            masterTween.remove(logoTween.totalProgress(0))
            masterTween.remove(logoTween2.totalProgress(0))
            masterTween.remove(logoTween3.totalProgress(0))
            masterTween.remove(logoTween4.totalProgress(0))
            masterTween.remove(logoTween5.totalProgress(0))
            masterTween.remove(logoTween6.totalProgress(0))
            masterTween.clear();            masterTween.add(logoTween.timeScale(5).play()).add(logoTween2.timeScale(5).play()).add(logoTween3.timeScale(5).play()).add(logoTween4.timeScale(5).play()).add(logoTween5.timeScale(5).play()).add(logoTween6.timeScale(5).play());
        }
    })
    
});
/* 커서변경 */
$(function () {
    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var mouseX = 0,
        mouseY = 0;

    $(document).on("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        gsap.to(cursor, 0, {
            force3D: true,
            x: mouseX,
            y: mouseY,
        });
    });
    var cursorOver = gsap.timeline({
        paused: true,
    });
    cursorOver.to(follower, 0.2, {
        width: "50px",
        height: "50px",
        ease: "power2.inOut",
        left: "-22px",
        top: "-22px"
    }, "over")
    $("a, button").on("mouseenter", function () {
        cursorOver.play();
        cursor.addClass("active");
        follower.addClass("active");
    });
    $("a, button").on("mouseleave", function () {
        cursorOver.reverse();
        cursor.removeClass("active");
        follower.removeClass("active");
    });
    //    $(':root').css({"--color-1":"#f00"});
})

/* 컬러셀렉터 */
$(function () {
    var myColor = new Array();
    var color1 = $(':root').css("--color-1");
    var color2 = $(':root').css("--color-2");
    var color3 = $(':root').css("--color-3");
    var color4 = $(':root').css("--color-4");
    var color5 = $(':root').css("--color-5");
    myColor.push(color1, color2, color3, color4, color5)
    var random = Math.round(Math.random() * (myColor.length - 1));
    $(':root').css({
        "--color-1": myColor[random]
    });
    $('.colorSelector li button').on('click', function () {
        var indexNum = $('.colorSelector li button').index(this)
        gsap.to($('html'), 1, {
            '--color-1': myColor[indexNum],
            ease: "power2.inOut",
        })
        $('.colorSelector').removeClass('active');
        colorCHG.timeScale(2).reverse();
        console.log(indexNum)
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
})

/* 로딩 */



$(function () {
    var figure = $(".video-preview").hover( hoverVideo, hideVideo );
    function hoverVideo(e) {  
        $('video', this).get(0).play(); 
    }

    function hideVideo(e) {
        $('video', this).get(0).pause(); 
    }
})


function switchClass(i) {
   var lis = $('#home-news > div');
   lis.eq(i).removeClass('home_header_on');
   lis.eq(i).removeClass('home_header_out');
    lis.eq(i = ++i % lis.length).addClass('home_header_on');
    lis.eq(i = ++i % lis.length).addClass('home_header_out');
    setTimeout(function() {
        switchClass(i);
    }, 3500);
}