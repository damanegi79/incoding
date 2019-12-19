vw = $(window).width();
vh = $(window).height();
var wheelFlag = true;
var target = null;

$(function () {
    "use strict";
    
    var clipboard = new ClipboardJS('.btnMail');
    clipboard.on('success', function(e) {
        e.clearSelection();
        showTooltip(e.trigger);
        
    });
    
    function showTooltip(elem, msg) {
        elem.setAttribute('class', 'btnMail active');
        setTimeout (function(){
            elem.setAttribute('class', 'btnMail');    
        },1000)
    }
    $('body').imagesLoaded( function() {
    });
    function anyTweenIsActive() {
      var all = TweenMax.getAllTweens(false),
          i = all.length;
      while (--i > -1) {
        if (all[i].isActive()) {
          return true;
        }
      }
      return false;
    }

    $("*[data-ui='wheel-section']").eq(0).addClass("active");
    $("body").on("mousewheel", function (e, delta) {
        if (!wheelFlag) return;
        var idx;
        $("*[data-ui='wheel-section']").each(function (i) {
            if ($(this).is(".active")) {
                idx = i;
            }
        });

        if (delta > 0) {
            if(idx === 0){
                return idx;
            }
            if (idx > 0) {
                target = $("*[data-ui='wheel-section']").eq(idx - 1);
            }
        } else {
            if(idx === 5){
                return idx;
            }
            if (idx < $("*[data-ui='wheel-section']").length - 1) {
                target = $("*[data-ui='wheel-section']").eq(idx + 1);
            }
        }
        if (target) {
            $("*[data-ui='wheel-section'].active").removeClass("active");
            target.addClass("active").trigger("start", [delta > 0 ? "up" : "down"]);
        }
        var activepage = $("*[data-ui='wheel-section'].active").index()-1
        $(".indicator nav .navItem").find('.point').removeClass('current')
        $(".indicator nav .navItem").eq(activepage).find('.point').addClass('current');
    });


    // 스와이퍼 슬라이더 셋팅
    var interleaveOffset = 0.5;
    var mainSliderOptions = {
//        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000
        },
        loopAdditionalSlides: 10,
//        allowTouchMove: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
//        watchOverflow: 'true',
//        themeColor: '#007aff',
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: false,
        },
        on: {
            init: function init() {
                this.autoplay.stop();
            },
            imagesReady: function imagesReady() {
                this.el.classList.remove('loading');
                this.autoplay.start();
            },
            
            progress: function progress() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress,
                    innerOffset = swiper.width * interleaveOffset,
                    innerTranslate = slideProgress * innerOffset;

                swiper.slides[i].querySelector(".slide-bgimg").style.transform = "translateX(" + innerTranslate + "px)";
              }
            },
            setTransition: function setTransition(speed) {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-bgimg").style.transition = speed + "ms";
              }
            }
        }
    };
    var mySwiper  = new Swiper('.main-slider.swiper01', mainSliderOptions);
    var mySwiper1  = new Swiper('.main-slider.swiper02', mainSliderOptions);
    var mySwiper2  = new Swiper('.main-slider.swiper03', mainSliderOptions);
    
    // Navigation Slider
//    var navSliderOptions = {
//          loop: true,
//          loopAdditionalSlides: 5,
//          speed:600,
//          spaceBetween: 5,
//          slidesPerView: 4,
//          centeredSlides : false,
//          slideToClickedSlide: true,
//          direction: 'vertical',
//        allowTouchMove: false,
//          on: {
//            imagesReady: function(){
//              this.el.classList.remove('loading');
//            },
//            click: function(){
//              mySwiper.autoplay.stop();
//              mySwiper1.autoplay.stop();
//            }
//          }
//        };
//    var navSlider = new Swiper('.nav-slider.swiper01', navSliderOptions);
//    var navSlider1 = new Swiper('.nav-slider.swiper02', navSliderOptions);

    // Matching sliders
//    mySwiper.controller.control = navSlider;
//    navSlider.controller.control = mySwiper;
//    
//    mySwiper1.controller.control = navSlider1;
//    navSlider1.controller.control = mySwiper1;
    
    
    
    
    var masterTween = gsap.timeline()
    var intro = gsap.timeline({
        onStart: tweenStart,
        paused: true,
        onComplete: intoroComplete,
    });
    var logoTween = gsap.timeline({
        onStart: tweenStart,
        paused: true,
        onComplete: logoComplete,
        onReverseComplete: reverseComplete,
    });
    var logoTween2 = gsap.timeline({
        onStart: tweenStart,
        paused: true,
        onComplete: tween2Complete,
        onReverseComplete: reverseComplete,
    });
    var logoTween3 = gsap.timeline({
        onStart: tweenStart,
        paused: true,
        onComplete: tweenComplete,
        onReverseComplete: tween2Complete
    });
    var logoTween4 = gsap.timeline({
        onStart: tweenStart,
        paused: true,
        onComplete: tweenCompleteScroll,
        onReverseComplete: reverseCompleteTween4,
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

    
    function tween2Complete() {
        wheelFlag = true;
        typetext()
    }
    
    function intoroComplete() {
        logoTween.play();
    }
    function tweenStart() {
        wheelFlag = false;
    }
    function logoComplete() {
        wheelFlag = true;
        $('.scrollDown .loader').addClass(' show-arrow')
    }
    
    function tweenComplete() {
        wheelFlag = true;
    }
    function tweenCompleteScroll() {
        wheelFlag = false;
    }
    /* 마우스 오버 이미지 */
    var scrollflag = false;
    function showcase() {
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
    }

    function reverseCompleteTween4() {
        wheelFlag = true;
        cubeRotateEnd()
        video.pause();
        $('.home').hide()
    }


    function reverseCube() {
        wheelFlag = false;
        cubeRotate()
        mySwiper2.slideTo (0, 0);
        mySwiper2.update()
        mySwiper2.autoplay.start ()
//        navSlider1.update()
//        navSlider1.slideTo (0, 0);
    }


    function cubeComplete() {
        cubeRotate()
    }

    var count = 0;
    var degCount = 0;

    function tweenCube() {
        tweenCubeRotate
            .to($('#section4 .cube'), 0.2, {
                scale: '0.9',
                ease: "power2.inOut",
            })

            .to($('#section4 .cube'), 0.4, {
                rotateY: degCount,
                ease: "power2.inOut",
            })
            .to($('#section4 .cube'), 0.2, {
                scale: '1',
                ease: "power2.inOut",
            })
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
            tweenCube()
            cubePaging()
            console.log(count)
            if(count == 1){
                mySwiper.slideTo (0, 0);
                mySwiper.update()
                mySwiper.autoplay.start ()
                mySwiper.scrollbar.updateSize()                
                mySwiper1.autoplay.stop()
                mySwiper2.autoplay.stop()
            }else if(count==2){
                mySwiper1.slideTo (0, 0);
                mySwiper1.update()
                mySwiper1.autoplay.start ()
                mySwiper.autoplay.stop()
                mySwiper2.autoplay.stop()
            }
            else if(count==3){
                mySwiper2.slideTo (0, 0);
                mySwiper2.update()
                mySwiper2.autoplay.start ()
                mySwiper.autoplay.stop()
                mySwiper1.autoplay.stop()
            }
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


    /* setinterval timeer */
//    function Timer(fn, t) {
//        var timerObj = setInterval(fn, t);
//        this.stop = function() {
//            if (timerObj) {
//                clearInterval(timerObj);
//                timerObj = null;
//            }
//            return this;
//        }
//        // start timer using current settings (if it's not already running)
//        this.start = function() {
//            if (!timerObj) {
//                this.stop();
//                timerObj = setInterval(fn, t);
//            }
//            return this;
//        }
//        // start with new interval, stop current interval
//        this.reset = function(newT) {
//            t = newT;
//            return this.stop().start();
//        }
//    }
//    var timer = new Timer(function() {
//        addNewItem()
//        removeFirstItem()
//    }, 2000);

//    timer.stop();
    function cubeRotate() {
        wheelFlag = false;
        $('#section4').bind('mousewheel', function (event, delta) {
            if (!tweenCubeRotate.isActive()) {
                if (delta <= 0) {
                    count++
                    if (count >= 4) {
                        count = 3;
                        mySwiper.autoplay.stop()
                        mySwiper1.autoplay.stop()
                        mySwiper2.autoplay.stop()
                        wheelFlag = true;
                    }
                    else if (count === 1) {
                        wheelFlag = false;
                        mySwiper.slideTo (0, 0);
                        mySwiper.update()
                        mySwiper.autoplay.start ()
                        mySwiper1.autoplay.stop()
                        mySwiper2.autoplay.stop()
                        video.pause();
                        degCount = count * 90;
                        tweenCube()
                    }
                    else if(count === 2){
                        video.pause();
                        wheelFlag = false;
                        degCount = count * 90;
                        tweenCube()
//                        timer.stop();
                        mySwiper1.slideTo (0, 0);
                        mySwiper1.update()
                        mySwiper1.autoplay.start ()
                        mySwiper.autoplay.stop()
                        mySwiper2.autoplay.stop()
                        $('.contents_service').parallaxify('destroy')
                    }
                    else if(count === 3){
                        video.pause();
                        wheelFlag = false;
                        degCount = count * 90;
                        tweenCube()
//                        timer.start()
                        mySwiper2.slideTo (0, 0);
                        mySwiper2.update()
                        mySwiper2.autoplay.start ()
                        mySwiper.autoplay.stop()
                        mySwiper1.autoplay.stop()
                    }
                    else {
                        video.pause();
                        wheelFlag = false;
                        degCount = count * 90;
                        tweenCube()
                        mySwiper.autoplay.stop()
                        mySwiper1.autoplay.stop()
                        mySwiper2.autoplay.stop()
//                        timer.stop();
                    }

                }
                if (delta > 0) {
                    count--
                    if (count === 0) {
                        video.play();
//                        timer.stop();
                        wheelFlag = false;
                        degCount = count * 90;
                        tweenCube()
                    }
                    else if (count === 1) {
//                        timer.start()
                        wheelFlag = false;
                        degCount = count * 90;
                        tweenCube()
                        mySwiper.slideTo (0, 0);
                        mySwiper.update()
                        mySwiper.autoplay.start ()
                        mySwiper1.autoplay.stop();
                        mySwiper2.autoplay.stop();
                    }
                    else if (count === 2) {
                        wheelFlag = false;
                        degCount = count * 90;
                        tweenCube()
                        mySwiper1.slideTo (0, 0);
                        mySwiper1.update()
                        mySwiper1.autoplay.start ()
                        mySwiper.autoplay.stop()
                        mySwiper2.autoplay.stop()
                        
                    }
                    else if (count === 3) {
                        wheelFlag = false;
                        degCount = count * 90;
                        tweenCube()
//                        timer.start()
                        mySwiper2.slideTo (0, 0);
                        mySwiper2.update()
                        mySwiper2.autoplay.start ()
                        mySwiper.autoplay.stop()
                        mySwiper2.autoplay.stop()
                    }
                    else if (count < 0) {
                        count = 0;
                        wheelFlag = true;
                    }
                }
                cubePaging()

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
        .to($(".logoBlock .header"), 0,{
            left: '50vw',
            top: '50vh',
            opacity:1,
            x: '-55px',
            y: "-50%",
            ease: "power4.out",
        })
        .to($(".logoBlock .logoLines .line-center"), 0, {
            left: '50vw',
            top: '50vh',
            ease: "power4.out",
            y: '-50%',
        })
        .to($(".logoBlock .logoLines .line-center"), 1, {
            height:'120px',
            y: '-50%',
            ease: "power4.out",
        })
        .to($(".logoBlock .logoLines .line-left"), 0, {
            left: '50vw',
            opacity: '1',
            y: '-50%',
        }, "line")
        .to($(".logoBlock .logoLines .line-left"), 1, {
            x: '-115',
            opacity: '1',
            ease: "power4.out",
        }, "side-line")
        .to($(".logoBlock .logoLines .line-right"), 0, {
            left: '50vw',
            opacity: '1',
            y: '-50%',
        }, "line")
        .to($(".logoBlock .logoLines .line-right"), 1, {
            x: '195',
            opacity: '1',
            ease: "power4.out",
        }, "side-line")
        .to($(".logoBlock h1 span"), 0, {
            opacity: '1',
        })
        .from($(".logoBlock h1 span.left"), 0.5, {
            x: '-180',
            ease: "power4.out",
        }, "title")
        .from($(".logoBlock h1 span.right"), 0.5, {
            x: '180',
            ease: "power4.out",
        }, "title")
        .to($(".logoBlock .summery"), 1, {
            opacity: '1',
            ease: "power4.out",
            onComplete: function () {
                $('.logoBlock .logoLines .line').addClass('hideAfter')
            },
        })
    logoTween2
        .to($("#section1"), 0, {
            display: 'none',
            zIndex: '-1',
        })
        .to($('.scrollDown'), 0.4, {
            opacity:0,
            ease: "power2.inOut",
        }, "side-line")
        .to($(".logoBlock .header"), 0.4, {
            top: "0vh",
            y: "50%",
            ease: "power2.inOut",
            scale: '0.8',
            left: '50vw',
            x: '-29%',
        }, "side-line")
        .to($(".logoBlock .header h1"), 0.4, {
            minWidth: '220',
            ease: "power2.inOut",

        }, "side-line")
        .to($(".logoBlock .header .summery"), 0.4, {
            left: '250px',
            y:'-23px',
            ease: "power2.inOut",
        }, "side-line")
        .to($(".logoBlock .logoLines .line-center"), 0.4, {
            top: '0vh',
            y: '0%',
            height: '90vh',
            ease: "power2.inOut",
        }, "side-line")
        .to($(".logoBlock .logoLines .line-left"), 0.4, {
            x: '-1',
            left: '25vw',
            y: '-50%',
            height: '33vh',
            ease: "power2.inOut",
        }, "side-line")
        .to($(".logoBlock .logoLines .line-right"), 0.4, {
            x: '-1',
            y: '-50%',
            left: '75vw',
            height: '70vh',
            ease: "power2.inOut",
        }, "side-line")
        .to($("#section2"), 0, {
            zIndex: '10',
            display: 'flex',
        })
        .to($('.scrollDown'), 0, {
            display: 'none',
        })
        .to($(".logoBlock .header h1 .right"), 0.4, {
            x:'10px',
            text: "FEATURE",
            ease: "power2.inOut",
        },"text")
        .to($(".logoBlock .header .summery"), 0.4, {
            text: "by Incoding",
            ease: "power2.inOut",
        },"text")
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
        }, "side-line1")
        
        .to($(".logoBlock .logoLines .line-center"), 0.4, {
            left: '60vw',
            height: '100vh',
            ease: "power2.inOut",
        }, "side-line1")
        .to($(".logoBlock .logoLines .line-left"), 0.4, {
            x: "0",
            left: '40vw',
            height: '100vh',
            ease: "power2.inOut",
        }, "side-line1")
        .to($(".logoBlock .logoLines .line-right"), 0.4, {
            x: '2',
            left: '80vw',
            height: '100vh',
            ease: "power2.inOut",
        }, "side-line1")

        .to($("#section3"), 0, {
            display: 'flex',
            zIndex: '10',
            opacity: '0',
        })
        .to($(".logoBlock .header h1 .right"), 0.4, {
            text: "SERVICE",
            ease: "power2.inOut",
        })
        .to($(".logoBlock .header .summery"), 0.4, {
            left: '245px',
            ease: "power2.inOut",
        },"pageView")
        .to($("#section3"), 0.4, {
            opacity: '1',
            ease: "power2.inOut",
        },"pageView")

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
                        x:'-2px',
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
        .set($(".logoBlock .header h1 .right"), {
            text: "SOLUTIONS",
            ease: "power2.inOut",
        })
        .to($(".logoBlock .header"), 0, {
            left: '0px',
            x: '-200%',
        }, "logo")
        
        .to($(".logoBlock .header h1"), 0, {
//            width: '160',
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
        .to($(".logoBlock .header .summery"), 0.4, {
            left: '275px',
            ease: "power2.inOut",
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
        .to($(".copyright"), 1, {
            color:'#fff',
            ease: "power4.out",
        })


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
            left: '82vw',
            ease: "power2.inOut",
        }, "side-line1")
        .to($(".logoBlock .logoLines .line-center"), 0.8, {
            left: '85vw',
            ease: "power2.inOut",
        }, "side-line1")
        .to($(".logoBlock .logoLines .line-right"), 0.8, {
            x: '0',
            width:'25vw',
            left: '90vw',
            ease: "power2.inOut",
        }, "side-line1")
        .to($("#section5"), 0, {
            zIndex: '10',
            display: 'flex',
            opacity: '1',
            onComplete: function () {
                wheelFlag = false;
                showcase();
                cubeRotateEnd();
                $('.info-scroll').css({
                    opacity: 0
                })
            },
        })
        .to($(".logoBlock .header h1 .right"), 0.4, {
            text: "SHOW CASE",
            ease: "power2.inOut",
        }, "text")
        .to($(".logoBlock .header .summery"), 0.4, {
            left: '285px',
            ease: "power2.inOut",
        }, "title")
        .to($("#section5 h2.title em i"), 0.4, {
            width:'0px',
            ease: "power2.in",
        },'title')
        .to($(".logoBlock .logoLines .line-left"), 0.4, {
            ease: "power2.inOut",
        },'title')
        .to($(".logoBlock .logoLines .line-center"), 0.4, {
            ease: "power2.inOut",
        },'title')
        .to($(".logoBlock .logoLines .line-right"), 0.4, {
            ease: "power2.inOut",
        },'title')
        .to($("#section5 .scroll-slider"), 0.4, {
            opacity: '1',
            ease: "power2.inOut",
        },'title')
        .to($("#section5 .slideshow__progress-ctn"), 0.4, {
            opacity: '1',
            ease: "power2.inOut",
        },'title')
        .to($("#section5 .geometry"), 0.8, {
            opacity: '1',
            ease: "power2.inOut",
        })

    logoTween6
        .to($('#section5'), 0.5, {
            opacity: '0',
        })
        .to($("#section5"), 0, {
            display: 'none',
            zIndex: '0'
        })
        .to($(".logoBlock .logoLines .line-left"), 0.8, {
            height: '40vh',
            left: '40vw',
            top:'50vh',
            ease: "power2.inOut",
            y:'-50%',
        }, "line")
        .to($(".logoBlock .logoLines .line-left"), 0.4, {
            width:'70vw',
            rotateY:'20deg',
            ease: "power2.inOut",
        })
        .to($(".logoBlock .logoLines .line-right"), 0.4, {
            left:'100vw',
            ease: "power2.inOut",
        }, "line")
        .to($(".logoBlock .logoLines .line-center"), 0.4, {
            left:'100vw',
            ease: "power2.inOut",
        }, "line")
        .to($("#section6"), 0, {
            zIndex: '10',
            display: 'flex',
        })
        .to($(".logoBlock .header h1 .right"), 0.4, {
            text: "CONTACT US",
            ease: "power2.inOut",
        }, "text")
        .to($(".logoBlock .header .summery"), 0.4, {
            left: '290px',
            ease: "power2.inOut",
        }, "section06")
        .to($("#section6"), 0.4, {
            opacity: '1',
            ease: "power2.inOut",
        }, "section06")
        .to($(".copyright"), 1, {
            color:'#333',
            ease: "power4.out",
        })
        
        
    $(function () {
        wheelFlag = false;
        video.pause();
        logoTween.play();
    })
    $("#section1").on("start", function (e, arrow) {
        $(".logoBlock .header").css({
            zIndex: "1"
        })
        if (arrow == "down") {

        } else {
            wheelFlag = false;
            logoTween2.reverse()
        }
        e.preventDefault();
        e.stopPropagation();
    });
    $("#section2").on("start", function (e, arrow) {
        if (arrow == "down") {
            wheelFlag = false;
            logoTween2.play()
            
        } else {
            wheelFlag = false;
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
        }
        e.preventDefault();
        e.stopPropagation();
    });
    $("#section4").on("start", function (e, arrow) {
        wheelFlag = false;
        if (arrow == "down") {
            wheelFlag = false;
            logoTween4.play()
        } else {
            wheelFlag = false;
            logoTween5.reverse()
        }
        e.preventDefault();
        e.stopPropagation();
    });
    $("#section5").on("start", function (e, arrow) {
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
        if (arrow == "down") {
            wheelFlag = false;
            logoTween6.play()
        } else {
          
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
                var x = delta.x,
                    y = delta.y*2;
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
                x: "0%",
            }, "start");

            scenes.push(
                new ScrollMagic.Scene({
                    offset: 1,
                    triggerHook: "0.5",
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
        var tweenWidth = $('.scroll-slide').length * $('.scroll-slide').width()
        let tl1 = new TimelineMax();
        tl1.to($("#section5 .title em"), 1, {
            x: "10%",
        }, "start")
        .to($(".logoLines .lineBlock .line-left"), 1, {
            left:'55vw',
        }, "start")
        .to($(".logoLines .lineBlock .line-center"), 1, {
            left:'70vw',
        }, "start")
        .to($(".logoLines .lineBlock .line-right"), 1, {
            left:'85vw',
        }, "start")
        .to($(".geometry span.pos1"), 1, {
            rotate:+'640',
            x:'300%'
        }, "start")
        .to($(".geometry span.pos2"), 1, {
            rotate:+'640',
            x:'-300%'
        }, "start")
        .to($(".geometry span.pos3"), 1, {
            rotate:-'640',
            x:'-300%'
        }, "start")
        .to($(".geometry span.pos4"), 1, {
            rotate:+'640',
            x:'-300%',
            
        }, "start")
        .to($(".geometry span.pos5"), 1, {
            rotate:+'640',
            x:'-400%'
        }, "start")
        .to($(".geometry span.pos6"), 1, {
            rotate:+'640',
            x:'50%'
        }, "start")
        .to($(".geometry span.pos7"), 1, {
            rotate:+'640',
            x:'250%',
        }, "start")
        .to($(".geometry span.pos8"), 1, {
            rotate:-'540',
            x:'-50%',
        }, "start")
        .to($(".geometry span.pos9"), 1, {
            rotate:+'620',
            x:'-50%',
        }, "start")
         .to($(".geometry span.pos10"), 1, {
            rotate:-'620',
            x:'130%',
        }, "start")
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
                gsap.to($('.info-scroll.left-side'), 0.4, {
                    opacity: 1,
                    ease: "power2.inOut",
                })
                setTimeout(function () {
                    wheelFlag = true;
                },300)
                setTimeout(function () {
                    wheelFlag = false;
                    gsap.to($('.info-scroll.left-side'), 0.4, {
                        opacity: 0,
                        ease: "power2.inOut",
                    })
                }, 3000)
                $('#section5').bind('mousewheel', function (event, delta) {
                    if (delta <= 0  && max/2 > x) {
                        gsap.to($('.info-scroll.left-side'), 0.2, {
                            opacity: 0,
                            ease: "power2.inOut",
                        })
                    }
                    if (x === 0 && delta <= 0) {
                        wheelFlag = false;
                    }
                });
            }
            if (x >= max) {
                gsap.to($('.info-scroll.right-side'), 0.4, {
                    opacity: 1,
                    ease: "power2.inOut",
                })
                setTimeout(function () {
                    wheelFlag = true;
                },300)
                setTimeout(function () {
                    wheelFlag = false;
                    gsap.to($('.info-scroll.right-side'), 0.4, {
                        opacity: 0,
                        ease: "power2.inOut",
                    })
                }, 3000)
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
    function loadingAni(){
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


    /* 네비 이동 */
    $('a.home').on('click',function(){
        $(".indicator nav .navItem:eq(0) button").click();
    })
    $('a.btn_contact').on('click',function(){
        $('button.closeArea').click();
        $(".indicator nav .navItem:eq(5) button").click();
    })
    $(".indicator nav .navItem button").on('click',function(){
        var currentIndex = $("#wrap").find('.active').index()-1
        console.log(currentIndex + '현재')
        var navIndex = $(".indicator nav .navItem button").index(this);

        $(".indicator nav .navItem").find('.point').removeClass('current')
        $(".indicator nav .navItem").eq(navIndex).find('.point').addClass('current');

        target = $("*[data-ui='wheel-section']").eq(navIndex);
        $("*[data-ui='wheel-section'].active").removeClass("active");
        $("*[data-ui='wheel-section']").eq(navIndex).addClass("active");
        loadingAni()
        setTimeout(function(){
            if(navIndex == 0){
                logoTween6.reverse().totalProgress(0);
                logoTween5.reverse().totalProgress(0);
                logoTween4.reverse().totalProgress(0);
                logoTween3.reverse().totalProgress(0);
                logoTween2.reverse().totalProgress(0);
                logoTween.play();
            } else if(navIndex == 1){
                logoTween6.reverse().totalProgress(0);
                logoTween5.reverse().totalProgress(0);
                logoTween4.reverse().totalProgress(0);
                logoTween3.reverse().totalProgress(0);
                logoTween2.reverse().totalProgress(0);
                logoTween.totalProgress(1).play();
                logoTween2.play(2);
            } else if(navIndex == 2){
                logoTween6.reverse().totalProgress(0);
                logoTween5.reverse().totalProgress(0);
                logoTween4.reverse().totalProgress(0);
                logoTween3.reverse().totalProgress(0);
                logoTween2.reverse().totalProgress(0);
                logoTween.totalProgress(1).play()
                logoTween2.totalProgress(1).play();
                logoTween3.play(2);
                typetext()
            } else if(navIndex == 3){
                logoTween6.reverse().totalProgress(0);
                logoTween5.reverse().totalProgress(0);
                logoTween4.reverse().totalProgress(0);
                logoTween3.reverse().totalProgress(0);
                logoTween2.reverse().totalProgress(0);
                logoTween.totalProgress(1).play();
                logoTween2.totalProgress(1).play();
                logoTween3.totalProgress(1).play();
                logoTween4.play(1);
            } else if(navIndex == 4){
                logoTween6.reverse().totalProgress(0);
                logoTween5.reverse().totalProgress(0);
                logoTween4.reverse().totalProgress(0);
                logoTween3.reverse().totalProgress(0);
                logoTween2.reverse().totalProgress(0);
                logoTween.totalProgress(1).play();
                logoTween2.totalProgress(1).play();
                logoTween3.totalProgress(1).play();
                logoTween4.totalProgress(1).play();
                logoTween5.play(2);
                wheelFlag = false;
                showcase();
                cubeRotateEnd();
                $('.info-scroll').css({
                    opacity: 0
                })
            } else if(navIndex == 5){
                logoTween6.reverse().totalProgress(0);
                logoTween5.reverse().totalProgress(0);
                logoTween4.reverse().totalProgress(0);
                logoTween3.reverse().totalProgress(0);
                logoTween2.reverse().totalProgress(0);
                logoTween.totalProgress(1).play();
                logoTween2.totalProgress(1).play();
                logoTween3.totalProgress(1).play();
                logoTween4.totalProgress(1).play();
                logoTween5.totalProgress(1).play();
                logoTween6.play(2);
            }
        },1000)
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
    $("a, button, .swiper-container.nav-slider .swiper-slide").on("mouseenter", function () {
        cursorOver.play();
        cursor.addClass("active");
        follower.addClass("active");
    });
    $("a, button, .swiper-container.nav-slider .swiper-slide").on("mouseleave", function () {
        cursorOver.reverse();
        cursor.removeClass("active");
        follower.removeClass("active");
    });
})

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
        },'color')
        gsap.to($('html'), 1, {
            '--color-1_sub': myColor_sub[indexNum],
            ease: "power2.inOut",
        },'color')
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
    $('.indicator .navItem:eq(0), a.home').on('click',function(){
        var random = Math.round(Math.random() * (myColor.length - 1));
        $(':root').css({
            "--color-1": myColor[random],
            "--color-1_sub": myColor_sub[random]
        }); 
    })
})





$(function () {
    var figure = $(".video-preview").hover( hoverVideo, hideVideo );
    function hoverVideo(e) {
        $('video', this).get(0).play();
    }

    function hideVideo(e) {
        $('video', this).get(0).pause();
    }
})


/* Functions for the hero image part */
function removeFirstItem() {
    jQuery(".animation-parts-page.removing").remove();
    jQuery(".animation-parts-page").first().addClass("removing");
}
var portNum = 1
function addNewItem() {
    window.heroHeaderStarted = true;
    if(portNum < 4){
        portNum++
    } else if (portNum == 4){
        portNum = 1
    }
    // Build a "page" to add to the container
    var newPage = jQuery('<div class="animation-parts-page"><div class="box box' + portNum + '"></div></div>');
    var arrayHeights = randomHeights(),
        arrayWidths = randomWidths();
    jQuery(newPage).find(".box").each(function (index, item) {
        jQuery(item).css({
        })
    });
    jQuery(".animation-pages-container").append(newPage);
}

function randomHeights() {
    // Produce 4 numbers that add up to 90
    var heights = [],
        total = 0;
    for (var i = 0; i < 4; i++) {
        var randomHeight = rand_10(10, 50);
        if ((total + randomHeight) > (90 - i * 10)) {
            randomHeight = 10;
        }
        if (i === 0) {
            randomHeight = rand_10(10, 20);
        }
        if (i === 3) {
            randomHeight = 90 - total;
        }
        total += randomHeight;
        heights.push(randomHeight);
    }
    return heights;
}

function randomWidths() {
    var widths = [];
    for (var i = 0; i < 4; i++) {
        widths.push(rand_10(50, 90));
    }
    return widths;
}

function rand_10(min, max) {
    return Math.round((Math.random()*(max-min)+min)/10)*10;
}
var flagType = true;
function typetext(){
    if(flagType == true){
        flagType = false;
        setTimeout(function(){
            $('.type-text').each(function() {
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
        },1000)
    }
}

$(function () {
    
})
