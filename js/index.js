! function (o) {
    var n = {};

    function s(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return o[e].call(t.exports, t, t.exports, s), t.l = !0, t.exports
    }
    s.m = o, s.c = n, s.i = function (e) {
        return e
    }, s.d = function (e, t, o) {
        s.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "", s(s.s = 36)
}([function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return document.querySelector(e)
    }
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    i(o(11));
    var n = i(o(0)),
        s = (i(o(14)), i(o(6)));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = (0, n.default)(".contactUsButton"),
        l = {
            toggleVisible: function (e) {
                "show" == e && a.classList.add("show"), "hide" == e && a.classList.remove("show")
            },
            setListeners: function () {
                a.addEventListener("click", l.goToContacts)
            },
            goToContacts: function () {
                document.body.classList.add("showCaseEffect"), setTimeout(function () {
                    s.default.goToSection(5)
                }, 320), setTimeout(function () {
                    document.body.classList.remove("showCaseEffect")
                }, 1200)
            },
            disableButton: function () {
                a.classList.add("disable")
            },
            enableButton: function () {
                a.classList.remove("disable")
            },
            init: function () {
                l.setListeners()
            }
        };
    t.default = l
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(o(3)),
        a = n(o(6)),
        l = n(o(16)),
        d = n(o(17)),
        r = n(o(18)),
        u = n(o(19)),
        c = n(o(20)),
        f = n(o(23)),
        v = n(o(8)),
        h = n(o(10)),
        m = n(o(5));

    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var L, s = document.querySelector(".indicator"),
        w = document.querySelectorAll(".indicator .point"),
        g = document.querySelectorAll(".menu .navigation ul li a"),
        p = {
            highlight: function (e) {
                for (var t = 0; t < w.length; t++) w[t].classList.remove("current");
                w[e].classList.add("current")
            },
            goToSection: function (e) {
                e.preventDefault();
                var t = e.target.dataset.goto,
                    o = v.default.state.currentSection,
                    n = parseInt(t, 10) + 1;
                if (o - t != 1 || o == document.querySelectorAll(".section").length - 1) {
                    if (t != o && o - t != 2 || 5 == o && 4 == n) {
                        if (document.body.classList.add("showCaseEffect"), 0 != t) return setTimeout(function () {
                            a.default.goToSection(--n)
                        }, 300), setTimeout(function () {
                            document.body.classList.remove("showCaseEffect")
                        }, 1500), void v.default.pageInAction();
                        for (var s = 0; s < g.length; s++) g[s].classList.remove("currentSection");
                        return g[0].classList.add("currentSection"), setTimeout(function () {
                            var e = new i.default;
                            d.default.clear(), r.default.clear(), u.default.clear(), c.default.clear(), l.default.set(), h.default.resetState(), v.default.state.currentSection = 1, e.animateScroll(document.querySelector(".initScreen"))
                        }, 300), setTimeout(function () {
                            document.body.classList.remove("showCaseEffect")
                        }, 1500), void v.default.pageInAction()
                    }
                    if (!L) {
                        if (p.inActionState(), o < n ? f.default.section(++t, "down") : f.default.section(++t, "up"), n == w.length - 1 && n < o) return h.default.resetState(), h.default.showWork(), m.default.state.onContacts = !1, v.default.state.currentSection = t, void v.default.pageInAction();
                        n == w.length && (h.default.hideWork(), m.default.state.onContacts = !0, a.default.goToSection(w.length - 1, !0)), v.default.state.currentSection = t, v.default.pageInAction()
                    }
                }
            },
            inActionState: function () {
                L = !0, setTimeout(function () {
                    L = !1
                }, 1500)
            },
            setListeners: function () {
                for (var e = 0; e < w.length; e++) w[e].addEventListener("click", function (e) {
                    p.goToSection(e)
                })
            },
            show: function () {
                s.classList.add("show")
            },
            hide: function () {
                s.classList.remove("show")
            },
            disable: function () {
                s.classList.add("disable")
            },
            enable: function () {
                s.classList.remove("disable")
            },
            init: function () {
                p.setListeners(), p.show()
            }
        };
    t.default = p
}, function (s, i, e) {
    "use strict";
    (function (e) {
        var t, o, n;
        "function" == typeof Symbol && Symbol.iterator;
        o = void 0 !== e ? e : "undefined" != typeof window ? window : void 0, n = function (S) {
            var c = "querySelector" in document && "addEventListener" in S && "requestAnimationFrame" in S && "closest" in S.Element.prototype,
                y = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    speed: 500,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    before: function () {},
                    after: function () {}
                },
                b = function () {
                    for (var o = {}, e = 0, t = arguments.length; e < t; e++) {
                        var n = arguments[e];
                        ! function (e) {
                            for (var t in e) e.hasOwnProperty(t) && (o[t] = e[t])
                        }(n)
                    }
                    return o
                },
                f = function (e) {
                    "#" === e.charAt(0) && (e = e.substr(1));
                    for (var t, o = String(e), n = o.length, s = -1, i = "", a = o.charCodeAt(0); ++s < n;) {
                        if (0 === (t = o.charCodeAt(s))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        i += 1 <= t && t <= 31 || 127 == t || 0 === s && 48 <= t && t <= 57 || 1 === s && 48 <= t && t <= 57 && 45 === a ? "\\" + t.toString(16) + " " : 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? o.charAt(s) : "\\" + o.charAt(s)
                    }
                    return "#" + i
                },
                A = function (e) {
                    return e ? (t = e, parseInt(S.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
                    var t
                };
            return function (n, e) {
                var s, i, a, o, g, t, l, p = {
                    cancelScroll: function () {
                        cancelAnimationFrame(l)
                    }
                };
                p.animateScroll = function (i, a, e) {
                    var l = b(s || y, e || {}),
                        d = "[object Number]" === Object.prototype.toString.call(i),
                        t = d || !i.tagName ? null : i;
                    if (d || t) {
                        var r = S.pageYOffset;
                        l.header && !o && (o = document.querySelector(l.header)), g || (g = A(o));
                        var u, c, f, v = d ? i : function (e, t, o) {
                                var n = 0;
                                if (e.offsetParent)
                                    for (; n += e.offsetTop, e = e.offsetParent;);
                                return Math.max(n - t - o, 0)
                            }(t, g, parseInt("function" == typeof l.offset ? l.offset() : l.offset, 10)),
                            h = v - r,
                            m = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
                            L = 0,
                            w = function (e, t) {
                                var o, n, s = S.pageYOffset;
                                if (e == t || s == t || (r < t && S.innerHeight + s) >= m) return p.cancelScroll(), o = i, n = t, d || (o.focus(), document.activeElement.id !== o.id && (o.setAttribute("tabindex", "-1"), o.focus(), o.style.outline = "none"), S.scrollTo(0, n)), l.after(i, a), !(u = null)
                            };
                        0 === S.pageYOffset && S.scrollTo(0, 0), l.before(i, a), p.cancelScroll(), S.requestAnimationFrame(function e(t) {
                            var o, n, s;
                            u || (u = t), c = (L += t - u) / parseInt(l.speed, 10), f = r + h * (n = c = 1 < c ? 1 : c, "easeInQuad" === (o = l).easing && (s = n * n), "easeOutQuad" === o.easing && (s = n * (2 - n)), "easeInOutQuad" === o.easing && (s = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), "easeInCubic" === o.easing && (s = n * n * n), "easeOutCubic" === o.easing && (s = --n * n * n + 1), "easeInOutCubic" === o.easing && (s = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), "easeInQuart" === o.easing && (s = n * n * n * n), "easeOutQuart" === o.easing && (s = 1 - --n * n * n * n), "easeInOutQuart" === o.easing && (s = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), "easeInQuint" === o.easing && (s = n * n * n * n * n), "easeOutQuint" === o.easing && (s = 1 + --n * n * n * n * n), "easeInOutQuint" === o.easing && (s = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), o.customEasing && (s = o.customEasing(n)), s || n), S.scrollTo(0, Math.floor(f)), w(f, v) || (S.requestAnimationFrame(e), u = t)
                        })
                    }
                };
                var d = function (e) {
                        i && (i.id = i.getAttribute("data-scroll-id"), p.animateScroll(i, a), a = i = null)
                    },
                    r = function (e) {
                        if (!("matchMedia" in S && S.matchMedia("(prefers-reduced-motion)").matches) && 0 === e.button && !e.metaKey && !e.ctrlKey && (a = e.target.closest(n)) && "a" === a.tagName.toLowerCase() && !e.target.closest(s.ignore) && a.hostname === S.location.hostname && a.pathname === S.location.pathname && /#/.test(a.href)) {
                            var t;
                            try {
                                t = f(decodeURIComponent(a.hash))
                            } catch (e) {
                                t = f(a.hash)
                            }
                            if ("#" === t) {
                                e.preventDefault();
                                var o = (i = document.body).id ? i.id : "smooth-scroll-top";
                                return i.setAttribute("data-scroll-id", o), i.id = "", void(S.location.hash.substring(1) === o ? d() : S.location.hash = o)
                            }(i = document.querySelector(t)) && (i.setAttribute("data-scroll-id", i.id), i.id = "", a.hash === S.location.hash && (e.preventDefault(), d()))
                        }
                    },
                    u = function (e) {
                        t || (t = setTimeout(function () {
                            t = null, g = A(o)
                        }, 66))
                    };
                return p.destroy = function () {
                    s && (document.removeEventListener("click", r, !1), S.removeEventListener("resize", u, !1), p.cancelScroll(), l = t = g = o = a = i = s = null)
                }, p.init = function (e) {
                    c && (p.destroy(), s = b(y, e || {}), o = s.header ? document.querySelector(s.header) : null, g = A(o), document.addEventListener("click", r, !1), S.addEventListener("hashchange", d, !1), o && S.addEventListener("resize", u, !1))
                }, p.init(e), p
            }
        }, void 0 === (t = function () {
            return n(o)
        }.apply(i, [])) || (s.exports = t)
    }).call(i, e(33))
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(o(11)),
        s = u(o(0)),
        i = u(o(12)),
        a = u(o(15)),
        l = u(o(24)),
        d = u(o(14)),
        r = u(o(8));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c, f, v, h = (0, s.default)(".logoAndLines"),
        m = ((0, s.default)(".line-1"), (0, s.default)(".line-2"), (0, s.default)(".line-3"), window.innerHeight);
    window.addEventListener("resize", function (e) {
        m = window.innerHeight
    });
    var L = {
        showAfterLoad: function () {
            (0, n.default)(function () {
                var e = (0, s.default)(".logoAndLines");
                (0, d.default)(function () {
                    e.classList.add("load"), setTimeout(function () {
                        e.classList.add("removeTransitionDelay")
                    }, 2e3)
                })
            })
        },
        onAboutSolution: function () {
            var e = (0, l.default)(f, .8 * m);
            (0, i.default)(h, "line-2-scale", e)
        },
        onServices: function () {
            var e = (0, l.default)(c, m),
                t = (0, l.default)(f, m),
                o = (0, l.default)(v, m);
            (0, i.default)(h, "line-1-scale", e), (0, i.default)(h, "line-2-scale", t), (0, i.default)(h, "line-3-scale", o)
        },
        setCssVariables: function () {
            var e = parseInt(.7 * document.body.clientWidth, 10),
                t = parseInt(.5 * document.body.clientWidth, 10),
                o = parseInt(e / 3, 10);
            (0, i.default)(document.body, "doc-center", t + "px"), (0, i.default)(document.body, "grid-width", e + "px"), (0, i.default)(document.body, "grid-column-width", o + "px")
        },
        setLinesHeight: function () {
            c = parseInt((0, a.default)(h, "line-1-height"), 10), f = parseInt((0, a.default)(h, "line-2-height"), 10), v = parseInt((0, a.default)(h, "line-3-height"), 10)
        },
        init: function () {
            L.setLinesHeight(), window.addEventListener("resize", function (e) {
                document.body.classList.add("removeTransitions"), L.setLinesHeight(), L.setCssVariables(), 3 == r.default.state.currentSection && L.onServices(), setTimeout(function () {
                    document.body.classList.remove("removeTransitions")
                }, 200)
            })
        },
        setInitValues: function () {}
    };
    document.addEventListener("DOMContentLoaded", function () {
        L.setCssVariables()
    }), t.default = L
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(o(0)),
        s = i(o(12));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = (0, n.default)(".contacts"),
        a = (0, n.default)("#submit"),
        d = document.querySelectorAll(".checkValidation"),
        r = document.querySelector(".contacts .year"),
        u = {
            state: {
                onContacts: !1
            },
            show: function () {
                l.classList.add("setDeep"), l.classList.add("show"), l.classList.add("animate"), setTimeout(function () {
                    l.classList.add("hideUnnecessaryElements")
                }, 510), u.state.onContacts = !0
            },
            hide: function () {
                l.classList.remove("show"), l.classList.remove("animate"), l.classList.remove("hideUnnecessaryElements"), u.state.onContacts = !1
            },
            scale: function () {
                l.classList.add("scale")
            },
            removeScale: function () {
                l.classList.remove("scale")
            },
            sendData: function (e) {
                if (u.checkValidation()) {
                    if (console.log("Send data: \n"), setTimeout(function () {
                            console.log(i)
                        }, 500), 0 == navigator.onLine) return l.classList.add("offline"), void setTimeout(function () {
                        l.classList.remove("offline")
                    }, 5e3);
                    var t = document.getElementById("name").value,
                        o = document.getElementById("email").value,
                        n = document.getElementById("message").value;
                    if ("" != n && "" != o && "" != n) {
                        var s = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
                            i = "Name: " + t + "\n\nContacts: " + o + "\n\nMessage: " + n,
                            a = "message=" + i;
                        s.open("POST", "../mailer.php", !0), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), s.send(a), e.preventDefault(), document.getElementById("name").value = "", document.getElementById("email").value = "", document.getElementById("message").value = "", l.classList.add("success"), setTimeout(function () {
                            l.classList.remove("success")
                        }, 5e3)
                    }
                }
            },
            checkValidation: function () {
                for (var e = 0; e < d.length; e++) return !!d[d.length - 1].checkValidity()
            },
            setListeners: function () {
                a.addEventListener("click", function (e) {
                    u.sendData(e)
                })
            },
            resetState: function () {
                (0, s.default)(l, "moveShift", "0px")
            },
            setYear: function () {
                var e = (new Date).getFullYear();
                r.innerHTML = e
            },
            init: function () {
                u.setListeners(), u.setYear()
            }
        };
    t.default = u
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = g(o(8)),
        s = function (e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t.default = e, t
            }
        }(o(7)),
        i = g(o(3)),
        a = g(o(13)),
        l = g(o(5)),
        d = g(o(10)),
        r = g(o(12)),
        u = g(o(24)),
        c = g(o(0)),
        f = g(o(9)),
        v = (g(o(16)), g(o(17))),
        h = g(o(18)),
        m = g(o(19)),
        L = g(o(20)),
        w = g(o(34));

    function g(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var p = (0, c.default)(".menu"),
        S = ((0, c.default)(".menu .blur"), (0, c.default)(".menuButton")),
        y = (0, c.default)(".closeMenuButton"),
        b = document.querySelectorAll(".menu .navigation ul li a"),
        A = {
            state: {
                opened: !1,
                lastSlide: 0,
                selectedItem: ""
            },
            toggle: function () {
                0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                A.state.opened ? (p.classList.remove("show"), setTimeout(function () {
                    p.classList.remove("display"), S.classList.remove("hideButton"), S.classList.remove("openedState")
                }, 700), A.state.opened = !1) : (S.classList.add("openedState"), setTimeout(function () {
                    S.classList.add("hideButton"), p.classList.add("display"), p.classList.add("show")
                }, 200), A.state.opened = !0)
            },
            init: function () {
                A.setListeners(), A.detectMenuScale(), f.default.setListeners(), p.classList.add("enable")
            },
            setListeners: function () {
                window.addEventListener("keydown", function (e) {
                    27 == e.keyCode && A.state.opened && A.toggle()
                }), y.addEventListener("click", A.toggle), window.addEventListener("resize", A.detectMenuScale);
                for (var e = 0; e < b.length; e++) b[e].addEventListener("mousedown", function (e) {
                    A.state.selectedItem = e.target;
                    var t = e.target.dataset.goTo;
                    A.state.selectedItem.parentNode.classList.add("select"), A.goToSection(t, !1, !0)
                })
            },
            goToSection: function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                (p.classList.add("hide-other"), S.classList.add("hide-other"), d.default.resetState(), setTimeout(function () {
                    p.classList.add("hide"), S.classList.remove("hideButton"), S.classList.remove("openedState"), setTimeout(function () {
                        o && A.toggle(!0)
                    }, 510)
                }, 510), setTimeout(function () {
                    for (var e = 0; e < b.length; e++) b[e].classList.remove("currentSection");
                    b[t - 1].classList.add("currentSection"), setTimeout(function () {
                        p.classList.remove("hide"), o && A.state.selectedItem.parentNode.classList.remove("select"), setTimeout(function () {
                            p.classList.remove("hide-other"), S.classList.remove("hide-other")
                        }, 520)
                    }, 510)
                }, 1510), 1 == t) && (n.default.state.currentSection = 2, e ? v.default.down(!0) : v.default.down(), h.default.clear(), m.default.clear(), L.default.clear(), s.logoAndLinesNode.classList.add("onAboutSolution"), s.scrollDownNode.classList.add("show"), (e = new i.default).animateScroll(s.aboutSolutionNode));
                if (2 == t) {
                    n.default.state.currentSection = 3;
                    e = new i.default;
                    s.logoAndLinesNode.classList.add("onAboutSolution"), s.scrollDownNode.classList.add("show"), v.default.down(), e ? h.default.down(!0) : h.default.down(), m.default.clear(), L.default.clear(), e.animateScroll(s.servicesNode)
                }
                if (3 == t) {
                    n.default.state.currentSection = 4;
                    e = new i.default;
                    s.logoAndLinesNode.classList.add("onAboutSolution"), s.scrollDownNode.classList.add("show"), v.default.down(), h.default.down(), e ? m.default.down(!0) : m.default.down(), L.default.clear(), a.default.state.currentFace = 0, a.default.state.currentAngle = 0, a.default.setAngle(), a.default.setMin(), e.animateScroll(s.solutionsOverviewNode)
                }
                if (4 == t) {
                    l.default.state.onContacts && d.default.resetState(), n.default.state.currentSection = 5;
                    e = new i.default;
                    s.logoAndLinesNode.classList.add("onAboutSolution"), s.scrollDownNode.classList.add("show"), v.default.down(), h.default.down(), m.default.down(), L.default.set(), a.default.state.currentFace = 3, a.default.state.currentAngle = 270, a.default.setAngle(), a.default.setMax(), e.animateScroll(s.workNode)
                }
                if (5 == t) {
                    n.default.state.currentSection = 5;
                    e = new i.default;
                    s.logoAndLinesNode.classList.add("onAboutSolution"), s.scrollDownNode.classList.add("show"), v.default.down(), h.default.down(), m.default.down(), L.default.set(), a.default.state.currentFace = 3, a.default.state.currentAngle = 270, a.default.setAngle(), a.default.setMax(), e.animateScroll(s.workNode), w.default.set()
                }
            },
            detectMenuScale: function () {
                var e = (0, u.default)(77, document.documentElement.clientWidth),
                    t = (0, u.default)(34, document.documentElement.clientHeight);
                (0, r.default)(document.body, "menuScaleX", 1 / e), (0, r.default)(document.body, "menuScaleY", 1 / t)
            }
        };
    t.default = A
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.creatorNode = t.logoAndLinesNode = t.workNode = t.solutionsOverviewNode = t.scrollDownNode = t.servicesNode = t.aboutSolutionNode = t.initScreen = void 0;
    var n, s = o(0),
        i = (n = s) && n.__esModule ? n : {
            default: n
        };
    t.initScreen = (0, i.default)(".initScreen"), t.aboutSolutionNode = (0, i.default)(".aboutSolution"), t.servicesNode = (0, i.default)(".services"), t.scrollDownNode = (0, i.default)(".scrollDown"), t.solutionsOverviewNode = (0, i.default)(".solutionsOverview"), t.workNode = (0, i.default)(".work"), t.logoAndLinesNode = (0, i.default)(".logoAndLines"), t.creatorNode = (0, i.default)(".creator")
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    f(o(3));
    var n = f(o(21)),
        s = (f(o(11)), f(o(23))),
        i = f(o(22)),
        a = f(o(13)),
        l = f(o(10)),
        d = f(o(6)),
        r = (f(o(9)), f(o(5))),
        u = f(o(2)),
        c = f(o(25));

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var v = document.querySelectorAll(".workItems .item").length,
        h = document.querySelectorAll(".menu .navigation ul li a"),
        m = {
            state: {
                currentSection: 1,
                inAction: !1
            },
            init: function () {
                s.default.init(), l.default.setBlur(), this.setListener()
            },
            maxSlidesCount: function () {
                return document.querySelectorAll("body > .section").length
            },
            get currentSectionValue() {
                return this.state.currentSection
            },
            set setSectionValue(e) {
                this.state.currentSection = e
            },
            get actionValue() {
                return this.state.inAction
            },
            set setActionValue(e) {
                this.state.inAction = e
            },
            setListener: function () {
                window.addEventListener("wheel", this.forward, {
                    passive: !0
                }), window.addEventListener("keyup", this.forward), window.addEventListener("resize", function () {
                    var e = document.querySelectorAll(".section")[m.state.currentSection - 1].offsetTop;
                    window.scrollTo(0, e)
                })
            },
            forward: function (e) {
                var t;
                if (!(m.actionValue || i.default.isAnyOpened || d.default.state.opened)) {
                    if (4 == m.currentSectionValue && !(0 == a.default.currentFace && "up" == (0, n.default)(e) || 4 == a.default.currentFace && "down" == (0, n.default)(e))) return m.pageInAction(!0), void a.default.rotateCube(e);
                    if (5 == m.currentSectionValue) {
                        if (l.default.state.currentWork == v - 2 && "down" == (0, n.default)(e)) {
                            if ("show" == l.default.state.details) return;
                            l.default.hideWork(), r.default.state.onContacts = !0, u.default.highlight(5);
                            for (var o = 0; o < h.length; o++) h[o].classList.remove("currentSection");
                            h[4].classList.add("currentSection")
                        }
                        if (l.default.state.currentWork == v - 1 && "down" == (0, n.default)(e)) return;
                        if (l.default.state.currentWork == v - 1 && "up" == (0, n.default)(e)) {
                            l.default.showWork(), u.default.highlight(4), r.default.state.onContacts = !1;
                            for (o = 0; o < h.length; o++) h[o].classList.remove("currentSection");
                            h[3].classList.add("currentSection")
                        }
                        if ("show" == l.default.state.details) return;
                        if (!(0 == l.default.state.currentWork && "up" == (0, n.default)(e) || l.default.state.currentWork == v - 1 && "down" == (0, n.default)(e))) return m.pageInAction(!0), void l.default.setDeep(e)
                    }
                    if ("down" == (0, n.default)(e) || "downButtonEvent" == e) {
                        if (m.currentSectionValue >= m.maxSlidesCount()) return;
                        m.setSectionValue = ++m.state.currentSection, t = "down"
                    }
                    if ("up" == (0, n.default)(e)) {
                        if (m.currentSectionValue <= 1) return;
                        m.setSectionValue = --m.state.currentSection, t = "up"
                    }
                    m.pageInAction(), s.default.section(m.state.currentSection, t)
                }
            },
            pageInAction: function (e) {
                this.setActionValue = !0, u.default.inActionState(), e ? "macos" == (0, c.default)() ? setTimeout(function () {
                    m.setActionValue = !1
                }, 1200) : setTimeout(function () {
                    m.setActionValue = !1
                }, 600) : setTimeout(function () {
                    m.setActionValue = !1
                }, 1200)
            }
        };
    t.default = m
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = s(o(6));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = (0, s(o(0)).default)(".menuButton"),
        a = {
            state: {
                disable: !1
            },
            init: function () {
                a.showWhenLoad()
            },
            showWhenLoad: function () {
                i.classList.add("showWhenLoad")
            },
            showButton: function () {
                i.classList.remove("hide")
            },
            hideButton: function () {
                i.classList.add("hide")
            },
            disableButton: function () {
                i.classList.add("disable")
            },
            enableButton: function () {
                i.classList.remove("disable")
            },
            setListeners: function () {
                i.addEventListener("click", function () {
                    a.state.disable || (n.default.toggle(), a.state.disable = !0, setTimeout(function () {
                        a.state.disable = !1
                    }, 1300))
                })
            }
        };
    t.default = a
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = d(o(21)),
        s = d(o(0)),
        r = d(o(15)),
        u = d(o(12)),
        i = d(o(9)),
        c = d(o(5)),
        a = d(o(1)),
        l = d(o(2));

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = (0, s.default)(".work"),
        v = (0, s.default)(".logoAndLines"),
        h = (0, s.default)(".contactUsButton"),
        m = (0, s.default)(".scaleWrapper"),
        L = document.querySelectorAll(".workItems .item"),
        w = (0, s.default)(".detailsView"),
        g = (0, s.default)(".detailsView .content"),
        p = (0, s.default)(".detailsView .close"),
        S = (document.querySelectorAll(".work-1 .photos"), (0, s.default)(".contacts")),
        y = !1,
        b = 900,
        A = L.length - 1,
        O = null,
        N = null,
        _ = null,
        M = [],
        T = null,
        k = [],
        C = {
            state: {
                currentWork: 0,
                details: "hide"
            },
            setDeep: function (e) {
                "up" == (0, n.default)(e) && 0 != C.state.currentWork && (--C.state.currentWork, C.move(C.state.currentWork, !0, !1)), "down" == (0, n.default)(e) && C.state.currentWork != A && (++C.state.currentWork, C.move(C.state.currentWork, !1, !0))
            },
            resetState: function () {
                C.state.currentWork = 0, C.showWork(), c.default.hide();
                for (var e = 0; e < L.length - 1; e++) L[e].classList.remove("show"), L[e].classList.remove("hide"), (0, u.default)(L[e], "work-" + (e + 1) + "-deep", b * -e + "px");
                L[0].classList.add("show"), (0, u.default)(m, "moveShift", "0px")
            },
            move: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                    n = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
                    s = b * e + "px";
                if (n) {
                    for (var i = 0; i < L.length; i++) L[i].classList.remove("show"), L[i].classList.add("hide"), (0, u.default)(L[i], "work-" + (i + 1) + "-deep", A * b - b * (i + 1) + b + "px");
                    return L[A].classList.remove("hide"), L[A].classList.add("show"), void(0, u.default)(m, "moveShift", b * A + "px")
                }
                for (i = 0; i < L.length; i++) {
                    L[i].classList.remove("show");
                    var a, l = (0, r.default)(L[i], "work-" + (i + 1) + "-deep"),
                        d = parseInt(l, 10);
                    t && (a = d - b), o && (a = d + b), (0, u.default)(L[i], "work-" + (i + 1) + "-deep", a + "px")
                }
                o && (L[e].classList.add("show"), 0 != e && L[e - 1].classList.add("hide"), e == A && c.default.show()), t && (0 == e && L[e].classList.add("show"), e != L.length && (L[e].classList.remove("hide"), L[e + 1].classList.remove("hide")), L[e].classList.add("show"), e == A - 1 && c.default.hide()), (0, u.default)(m, "moveShift", s), (0, u.default)(S, "moveShift", s), C.setBlur(e)
            },
            setBlur: function () {
                for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, t = (L.length, 0); t < L.length; t++) {
                    if (L[t] == L[e] && (L[t].style.filter = "none"), e < t) 0 != e && (o = t / e * 2), (0, u.default)(L[t], "work-brightness", .1 * o + .3);
                    if (0 == e) {
                        var o = 2 * t;
                        (0, u.default)(L[t], "work-brightness", .1 * o + .3)
                    }
                }
            },
            initListeners: function () {
                for (var e = 0; e < L.length; e++) L[e].addEventListener("click", function (e) {
                    C.showDetails(e)
                });
                p.addEventListener("click", function () {
                    C.hideDetails()
                }), window.addEventListener("keydown", function (e) {
                    27 == e.keyCode && "show" == C.state.details && C.hideDetails()
                })
            },
            showDetails: function (e) {
                C.state.details = "show", a.default.toggleVisible("hide"), l.default.hide(), C.getDetails(e, L), C.details(M, k, N), C.setVideoListeners(), w.classList.add("showDetails"), f.classList.add("detailsState"), v.classList.add("onDetails"), h.classList.add("onDetails"), i.default.hideButton()
            },
            hideDetails: function () {
                C.state.details = "hide", a.default.toggleVisible("show"), l.default.show(), w.classList.remove("showDetails"), f.classList.remove("detailsState"), v.classList.remove("onDetails"), h.classList.remove("onDetails"), i.default.showButton()
            },
            getDetails: function (e, t) {
                var o = e.target;
                M = [], T = _ = N = O = null, k = [];
                for (var n = 0; n < o.children.length; n++)
                    if ("details" == o.children[n].className) {
                        O = o.children[n];
                        break
                    } for (var s = 0; s < O.children.length; s++)
                    if ("description" == O.children[s].className) {
                        N = O.children[s].innerHTML;
                        break
                    } for (var i = 0; i < O.children.length; i++)
                    if ("photos" == O.children[i].className) {
                        _ = O.children[i];
                        break
                    } for (var a = 0; a < _.children.length; a++) M.push(_.children[a].dataset.src);
                for (var l = 0; l < O.children.length; l++)
                    if ("videos" == O.children[l].className) {
                        T = O.children[l];
                        break
                    } for (var d = 0; d < T.children.length; d++) k.push(T.children[d].dataset.src)
            },
            details: function (e, t, o) {
                var n = C.buildGallery(e, t);
                g.innerHTML = '\n                                    <div class=" galleryWrapper"> ' + n + ' </div>\n                                    <div class="description"> ' + o + " </div>\n                                    ";
                new Swiper(".swiper-container", {
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: !0,
                        speed: 1500,
                        paginationType: "custom",
                        renderBullet: function (e, t) {
                            return '<span class="' + t + '">' + (e + 1) + "</span>"
                        }
                    },
                    on: {
                        slideChange: function () {
                            C.pauseAllVideos()
                        }
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    },
                    effect: "cube",
                    grabCursor: !0,
                    cubeEffect: {
                        shadow: !1
                    },
                    loop: !0
                }), document.querySelectorAll(".swiper-slide")
            },
            buildGallery: function (e, t) {
                return '\n                          <div class="swiper-container">\n                            <div class="swiper-wrapper">\n                                ' + C.galleryTemplate(e) + "\n                                " + C.videosTemplate(t) + '\n                            </div>\n\n                            <div class="controls">\n                              <div class="swiper-button-prev">\n                                <svg width="16px" height="23px" viewBox="0 0 16 23">\n                                  <path stroke-width="2px" \n                                        stroke-linecap="butt" \n                                        stroke-linejoin="miter" \n                                        fill="none"\n                                        d="M2.427,1.997 L12.005,11.000 L2.427,20.003 "/>\n                                </svg>\n                              </div>\n                              <div class="swiper-pagination"></div>\n                              <div class="swiper-button-next">\n                                <svg width="16px" height="23px" viewBox="0 0 16 23">\n                                  <path stroke-width="2px" \n                                        stroke-linecap="butt" \n                                        stroke-linejoin="miter" \n                                        fill="none"\n                                        d="M2.427,1.997 L12.005,11.000 L2.427,20.003 "/>\n                                </svg>\n                              </div>\n                            </div>\n                          </div>\n                        '
            },
            galleryTemplate: function (e) {
                for (var t = "", o = 0; o < e.length; o++) {
                    t += '\n                <div class="swiper-slide"> \n                  <img src="' + e[o] + '"> \n                </div>\n                '
                }
                return t
            },
            videosTemplate: function (e) {
                for (var t = "", o = 0; o < e.length; o++) {
                    t += '\n                <div class="swiper-slide">\n                  <div class="videoWrapper">\n                    <div class="playpause">\n                      <button class="switch"></button>\n                    </div>\n\n                    <div class="videoWrapper">\n                      <video class="video">\n                        <source src="videos/' + e[o] + '.mp4" type="video/mp4">\n                      </video>\n                    </div>\n                  </div>\n                </div>\n                '
                }
                return t
            },
            setVideoListeners: function () {
                for (var e = document.querySelectorAll(".playpause"), t = 0; t < e.length; t++) e[t].addEventListener("click", function (e) {
                    y || C.playVideos(e), y && C.pauseVideos(e), y = !y
                })
            },
            playVideos: function (e) {
                var t = e.currentTarget,
                    o = t.nextElementSibling.children[0];
                t.classList.add("playState"), o.play()
            },
            pauseVideos: function (e) {
                var t = e.currentTarget,
                    o = t.nextElementSibling.children[0];
                t.classList.remove("playState"), o.pause()
            },
            pauseAllVideos: function () {
                for (var e = document.querySelectorAll("video"), t = 0; t < e.length; t++) e[t].pause();
                var o = document.querySelectorAll(".playpause");
                for (t = 0; t < o.length; t++) o[t].classList.remove("playState");
                y = !1
            },
            hideWork: function () {
                c.default.scale(), c.default.state.onContacts = !1, f.classList.add("hide"), setTimeout(function () {
                    f.classList.add("hideOverflow")
                }, 500)
            },
            showWork: function () {
                c.default.removeScale(), c.default.state.onContacts = !0, f.classList.remove("hide"), setTimeout(function () {
                    f.classList.remove("hideOverflow")
                }, 500)
            },
            init: function () {
                L[0].classList.add("show"), C.initListeners()
            }
        };
    t.default = C
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        document.addEventListener("DOMContentLoaded", function () {
            e()
        })
    }
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t, o) {
        return e.style.setProperty("--" + t, o)
    }
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = n(o(21));

    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = (0, n(o(0)).default)(".solutionsOverview .cube"),
        a = document.querySelectorAll(".solutionsOverview .currentFaceDesc"),
        l = document.querySelectorAll(".solutionsOverview .currentFace"),
        d = {
            angleShift: 90,
            state: {
                currentFace: 0,
                currentAngle: 0
            },
            rotateCube: function (e) {
                var t, o;
                "up" != (0, s.default)(e) && "down" != (0, s.default)(e) || ("up" == (0, s.default)(e) && 0 != d.currentFace && (o = --d.currentFace, d.state.currentAngle = d.state.currentAngle - d.angleShift, d.currentFace = o), "down" == (0, s.default)(e) && 4 != d.currentFace && (t = ++d.currentFace, d.state.currentAngle = d.state.currentAngle + d.angleShift, d.currentFace = t)), 1 < d.currentFace && i.classList.add("showPseudo5Face"), d.currentFace <= 1 && i.classList.remove("showPseudo5Face"), d.setAngle();
                for (var n = 0; n < a.length; n++) a[n].classList.remove("selectFace"), l[n].classList.remove("selectFace"), a[d.currentFace].classList.add("selectFace"), l[d.currentFace].classList.add("selectFace")
            },
            setAngle: function () {
                i.style.transform = "rotateY(" + d.state.currentAngle + "deg)";
                for (var e = 0; e < a.length; e++) a[e].classList.remove("selectFace"), l[e].classList.remove("selectFace");
                a[d.currentFace].classList.add("selectFace"), l[d.currentFace].classList.add("selectFace")
            },
            setMin: function () {
                for (var e = 0; e < a.length; e++) a[e].classList.remove("selectFace");
                a[0].classList.add("selectFace")
            },
            setMax: function () {
                for (var e = 0; e < a.length; e++) a[e].classList.remove("selectFace"), l[e].classList.remove("selectFace");
                a[4].classList.add("selectFace"), l[4].classList.add("selectFace")
            },
            init: function () {},
            set currentFace(e) {
                d.state.currentFace = e
            },
            get currentFace() {
                return d.state.currentFace
            }
        };
    t.default = d
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return setTimeout(function () {
            e()
        }, 1)
    }
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return getComputedStyle(e).getPropertyValue("--" + t).trim()
    }
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function (e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t.default = e, t
            }
        }(o(7)),
        s = (a(o(3)), a(o(1))),
        i = (a(o(4)), a(o(2)));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = {
        set: function () {
            0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            n.aboutSolutionNode.classList.remove("showContent"), l.setIndicatorState(), scroll ? setTimeout(function () {
                n.logoAndLinesNode.classList.remove("onAboutSolution"), s.default.toggleVisible("hide")
            }, 300) : (n.logoAndLinesNode.classList.remove("onAboutSolution"), s.default.toggleVisible("hide"))
        },
        setIndicatorState: function () {
            i.default.highlight(0)
        }
    };
    t.default = l
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function (e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t.default = e, t
            }
        }(o(7)),
        s = (l(o(3)), l(o(1))),
        i = l(o(4)),
        a = l(o(2));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var d = {
        up: function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            n.servicesNode.classList.remove("showContent"), d.setIndicatorState(), e ? setTimeout(function () {
                n.aboutSolutionNode.classList.remove("hideContent"), n.aboutSolutionNode.classList.remove("hide"), n.logoAndLinesNode.classList.remove("onServices"), n.scrollDownNode.classList.remove("hide"), i.default.onAboutSolution(), setTimeout(function () {
                    n.aboutSolutionNode.classList.add("showContent")
                }, 510)
            }, 510) : (n.aboutSolutionNode.classList.remove("hideContent"), n.aboutSolutionNode.classList.remove("hide"), n.logoAndLinesNode.classList.remove("onServices"), n.scrollDownNode.classList.remove("hide"), i.default.onAboutSolution(), n.aboutSolutionNode.classList.add("showContent"))
        },
        down: function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            n.aboutSolutionNode.classList.remove("hideContent"), n.aboutSolutionNode.classList.remove("hide"), n.logoAndLinesNode.classList.remove("onServices"), n.scrollDownNode.classList.remove("hide"), d.setIndicatorState(), i.default.onAboutSolution(), e ? setTimeout(function () {
                s.default.toggleVisible("show"), n.aboutSolutionNode.classList.add("showContent")
            }, 450) : (s.default.toggleVisible("show"), n.aboutSolutionNode.classList.add("showContent"))
        },
        clear: function () {
            s.default.toggleVisible("hide"), n.aboutSolutionNode.classList.remove("showContent")
        },
        setIndicatorState: function () {
            a.default.highlight(1)
        }
    };
    t.default = d
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function (e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t.default = e, t
            }
        }(o(7)),
        s = (a(o(3)), a(o(1)), a(o(4))),
        i = a(o(2));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = {
        up: function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            n.logoAndLinesNode.classList.add("hide"), l.setIndicatorState(), e ? setTimeout(function () {
                n.servicesNode.classList.add("showContent"), n.aboutSolutionNode.classList.remove("showContent")
            }, 1020) : (n.servicesNode.classList.add("showContent"), n.aboutSolutionNode.classList.remove("showContent")), e ? setTimeout(function () {
                n.logoAndLinesNode.classList.add("onServices"), n.scrollDownNode.classList.add("hide"), s.default.onServices(), n.logoAndLinesNode.classList.remove("onSolutionsOverview"), n.solutionsOverviewNode.classList.remove("onServices"), n.logoAndLinesNode.classList.remove("onSolutionsOverview"), n.creatorNode.classList.remove("onSolutionsOverview"), n.logoAndLinesNode.classList.remove("onSolutionsOverview-logo"), n.solutionsOverviewNode.classList.remove("showContent"), n.logoAndLinesNode.classList.remove("hide"), n.solutionsOverviewNode.classList.remove("showDesctiption"), n.solutionsOverviewNode.classList.remove("showContent")
            }, 510) : (n.logoAndLinesNode.classList.add("onServices"), n.scrollDownNode.classList.add("hide"), s.default.onServices(), n.logoAndLinesNode.classList.remove("onSolutionsOverview"), n.solutionsOverviewNode.classList.remove("onServices"), n.logoAndLinesNode.classList.remove("onSolutionsOverview"), n.creatorNode.classList.remove("onSolutionsOverview"), n.logoAndLinesNode.classList.remove("onSolutionsOverview-logo"), n.solutionsOverviewNode.classList.remove("showContent"), n.logoAndLinesNode.classList.remove("hide"), n.solutionsOverviewNode.classList.remove("showDesctiption"), n.solutionsOverviewNode.classList.remove("showContent"))
        },
        down: function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            n.aboutSolutionNode.classList.remove("showContent"), l.setIndicatorState(), e ? setTimeout(function () {
                n.servicesNode.classList.add("showContent"), n.aboutSolutionNode.classList.remove("showContent")
            }, 1020) : (n.servicesNode.classList.add("showContent"), n.aboutSolutionNode.classList.remove("showContent")), e ? setTimeout(function () {
                n.logoAndLinesNode.classList.add("onServices"), n.scrollDownNode.classList.add("hide"), s.default.onServices()
            }, 510) : (n.logoAndLinesNode.classList.add("onServices"), n.scrollDownNode.classList.add("hide"), s.default.onServices()), n.logoAndLinesNode.classList.remove("onSolutionsOverview"), n.solutionsOverviewNode.classList.remove("onServices"), n.logoAndLinesNode.classList.remove("onSolutionsOverview"), n.creatorNode.classList.remove("onSolutionsOverview"), n.logoAndLinesNode.classList.remove("onSolutionsOverview-logo"), n.solutionsOverviewNode.classList.remove("showContent"), n.logoAndLinesNode.classList.remove("hide"), n.solutionsOverviewNode.classList.remove("showDesctiption")
        },
        clear: function () {
            n.logoAndLinesNode.classList.remove("hide"), n.servicesNode.classList.remove("showContent"), n.logoAndLinesNode.classList.remove("onServices"), n.scrollDownNode.classList.remove("hide")
        },
        setIndicatorState: function () {
            i.default.highlight(2)
        }
    };
    t.default = l
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function (e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t.default = e, t
            }
        }(o(7)),
        s = (a(o(3)), a(o(1)), a(o(4)), a(o(2))),
        i = a(o(13));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = document.querySelector(".work"),
        d = {
            up: function () {
                0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                l.classList.remove("show"), setTimeout(function () {
                    n.servicesNode.classList.remove("showContent"), d.setIndicatorState(), n.logoAndLinesNode.classList.add("onSolutionsOverview"), n.aboutSolutionNode.classList.remove("hide"), n.solutionsOverviewNode.classList.remove("hide"), n.logoAndLinesNode.classList.remove("onWorks"), n.creatorNode.classList.remove("onWorks"), n.solutionsOverviewNode.classList.add("showDesctiption"), n.solutionsOverviewNode.classList.add("showContent"), n.logoAndLinesNode.classList.add("onSolutionsOverview-logo"), n.logoAndLinesNode.classList.add("hide"), n.creatorNode.classList.add("onSolutionsOverview")
                }, 210), i.default.setMax()
            },
            down: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                n.servicesNode.classList.remove("showContent"), d.setIndicatorState(), e ? setTimeout(function () {
                    n.logoAndLinesNode.classList.add("onSolutionsOverview"), n.aboutSolutionNode.classList.remove("hide"), n.solutionsOverviewNode.classList.remove("hide"), n.logoAndLinesNode.classList.remove("onWorks"), n.creatorNode.classList.remove("onWorks")
                }, 510) : (n.logoAndLinesNode.classList.add("onSolutionsOverview"), n.aboutSolutionNode.classList.remove("hide"), n.solutionsOverviewNode.classList.remove("hide"), n.logoAndLinesNode.classList.remove("onWorks"), n.creatorNode.classList.remove("onWorks")), e ? setTimeout(function () {
                    n.solutionsOverviewNode.classList.add("showDesctiption")
                }, 1010) : n.solutionsOverviewNode.classList.add("showDesctiption"), e ? setTimeout(function () {
                    n.solutionsOverviewNode.classList.add("showContent"), n.logoAndLinesNode.classList.add("onSolutionsOverview-logo"), n.logoAndLinesNode.classList.add("hide"), n.creatorNode.classList.add("onSolutionsOverview")
                }, 1020) : (n.solutionsOverviewNode.classList.add("showContent"), n.logoAndLinesNode.classList.add("onSolutionsOverview-logo"), n.logoAndLinesNode.classList.add("hide"), n.creatorNode.classList.add("onSolutionsOverview")), i.default.setMin()
            },
            clear: function () {
                n.logoAndLinesNode.classList.remove("onSolutionsOverview"), n.solutionsOverviewNode.classList.remove("showDesctiption"), n.solutionsOverviewNode.classList.remove("showContent"), n.logoAndLinesNode.classList.remove("onSolutionsOverview-logo"), n.logoAndLinesNode.classList.remove("hide"), n.creatorNode.classList.remove("onSolutionsOverview"), i.default.setMin()
            },
            setIndicatorState: function () {
                s.default.highlight(3)
            }
        };
    t.default = d
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function (e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t.default = e, t
            }
        }(o(7)),
        s = (a(o(3)), a(o(1)), a(o(4)), a(o(2))),
        i = a(o(5));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    document.querySelector(".contacts");
    var l = document.querySelector(".work"),
        d = document.querySelector(".indicator"),
        r = {
            set: function () {
                n.solutionsOverviewNode.classList.add("hide"), d.classList.add("hideBg"), r.setIndicatorState(), i.default.resetState(), setTimeout(function () {
                    n.logoAndLinesNode.classList.add("onWorks"), n.creatorNode.classList.add("onWorks"), l.classList.add("show")
                }, 210)
            },
            clear: function () {
                n.solutionsOverviewNode.classList.remove("hide"), n.logoAndLinesNode.classList.remove("onWorks"), n.creatorNode.classList.remove("onWorks"), l.classList.remove("show"), d.classList.remove("hideBg")
            },
            setIndicatorState: function () {
                s.default.highlight(4)
            }
        };
    t.default = r
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        if ("wheel" == e.type) {
            if (e.deltaY < 0) return "up";
            if (0 < e.deltaY) return "down"
        }
        if ("keyup" == e.type) {
            if (40 == e.keyCode) return "down";
            if (38 == e.keyCode) return "up"
        }
    }
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(o(1)),
        s = (r(o(5)), r(o(0))),
        i = r(o(12)),
        a = r(o(9)),
        l = r(o(6)),
        d = r(o(2));

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = (0, s.default)(".services"),
        c = (0, s.default)(".closeArea"),
        f = document.querySelectorAll(".service"),
        v = document.querySelectorAll(".closeService"),
        h = document.querySelectorAll(".showCase"),
        m = document.querySelectorAll(".services .contact"),
        L = {
            state: {
                openedService: "",
                isAnyOpened: !1,
                isAnyOpenedAndFinished: !1
            },
            init: function () {
                L.setListeners();
                var e = Math.round(-.55 * window.innerWidth) + "px",
                    t = Math.round(.05 * window.innerHeight) + "px";
                (0, i.default)(u, "translateX", e), (0, i.default)(u, "translateY", t)
            },
            set setOpenedService(e) {
                L.state.openedService = e
            },
            get getOpenedService() {
                return L.state.openedService
            },
            set isAnyOpened(e) {
                L.state.isAnyOpened = e
            },
            get isAnyOpened() {
                return L.state.isAnyOpened
            },
            openService: function (e) {
                L.state.isAnyOpened || (L.isAnyOpened = !0, L.setOpenedService = e, d.default.disable(), setTimeout(function () {
                    L.state.isAnyOpenedAndFinished = !0
                }, 1e3), setTimeout(function () {
                    u.classList.add("otherEasing")
                }, 700), u.classList.contains("serviceOpened") || (e.classList.add("open"), u.classList.add("serviceOpened"), e.classList.add("opacityToFace"), setTimeout(function () {
                    u.classList.add("toggleShadow")
                }, 200)), a.default.disableButton(), n.default.disableButton())
            },
            closeService: function (e, t) {
                L.state.isAnyOpened && (L.isAnyOpened = !1, L.state.isAnyOpenedAndFinished = !1, setTimeout(function () {
                    u.classList.remove("otherEasing")
                }, 700), d.default.enable(), e && e.stopImmediatePropagation(), (t = L.getOpenedService) && t.classList.remove("open"), u.classList.remove("serviceOpened"), u.classList.remove("toggleShadow"), setTimeout(function () {
                    t && t.classList.remove("opacityToFace")
                }, 300), a.default.enableButton(), n.default.enableButton(), L.state.openedService = "")
            },
            goToContacts: function () {
                document.body.classList.add("showCaseEffect"), setTimeout(function () {
                    l.default.goToSection(5)
                }, 320), setTimeout(function () {
                    document.body.classList.remove("showCaseEffect"), L.closeService(!1, L.state.openedService)
                }, 1200)
            },
            setListeners: function () {
                for (var e = 0; e < f.length; e++) f[e].addEventListener("click", function (e) {
                    L.state.isAnyOpened || u.classList.contains("serviceOpened") || L.openService(e.target)
                });
                for (e = 0; e < h.length; e++) h[e].addEventListener("click", function (e) {
                    document.body.classList.add("showCaseEffect"), setTimeout(function () {
                        l.default.goToSection(4), work.resetState()
                    }, 320), setTimeout(function () {
                        L.closeService(!1, L.state.openedService), document.body.classList.remove("showCaseEffect")
                    }, 1e3)
                });
                for (e = 0; e < v.length; e++) v[e].addEventListener("click", function (e) {
                    L.closeService(e)
                });
                c.addEventListener("click", function (e) {
                    L.closeService(e)
                }), window.addEventListener("keydown", function (e) {
                    27 == e.keyCode && L.closeService(!1, L.state.openedService)
                });
                for (e = 0; e < f.length; e++) m[e].addEventListener("click", L.goToContacts)
            }
        };
    t.default = L
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = u(o(3)),
        n = u(o(0)),
        i = (u(o(1)), u(o(4)), u(o(16))),
        a = u(o(17)),
        l = u(o(18)),
        d = u(o(19)),
        r = u(o(20));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = (0, n.default)(".initScreen"),
        f = (0, n.default)(".aboutSolution"),
        v = (0, n.default)(".services"),
        h = (0, n.default)(".scrollDown"),
        m = (0, n.default)(".solutionsOverview"),
        L = ((0, n.default)(".work"), (0, n.default)(".logoAndLines")),
        w = ((0, n.default)(".creator"), document.querySelectorAll(".menu .navigation ul li a")),
        g = {
            windowHeight: window.innerHeight,
            init: function () {
                g.setListeners()
            },
            setListeners: function () {
                window.addEventListener("resize", function () {
                    g.windowHeight = window.innerHeight
                })
            },
            section: function (e, t) {
                for (var o = 0; o < w.length; o++) w[o].classList.remove("currentSection");
                if (0 != e && 1 != e && w[e - 2].classList.add("currentSection"), 0 != e && 1 != e || w[0].classList.add("currentSection"), 1 == e) {
                    var n = new s.default;
                    i.default.set(!0), setTimeout(function () {
                        n.animateScroll(c)
                    }, 510)
                }
                if (2 == e) {
                    n = new s.default;
                    L.classList.add("onAboutSolution"), h.classList.add("show"), "up" == t && (a.default.up(!0), setTimeout(function () {
                        n.animateScroll(f)
                    }, 510)), "down" == t && (a.default.down(!0), n.animateScroll(f))
                }
                if (3 == e) {
                    n = new s.default;
                    "down" == t && (l.default.down(!0), setTimeout(function () {
                        n.animateScroll(v)
                    }, 510)), "up" == t && (l.default.up(!0), n.init({
                        speed: 1
                    }), setTimeout(function () {
                        n.animateScroll(v)
                    }, 1020))
                }
                if (4 == e) {
                    n = new s.default;
                    "down" == t && (d.default.down(!0), n.init({
                        speed: 1
                    }), setTimeout(function () {
                        n.animateScroll(m)
                    }, 510)), "up" == t && (d.default.up(!0), setTimeout(function () {
                        r.default.clear()
                    }, 410), n.animateScroll(m))
                }
                if (5 == e) {
                    n = new s.default;
                    r.default.set()
                }
            }
        };
    t.default = g
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return t / e
    }
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function () {
        var e = window.navigator.userAgent,
            t = window.navigator.platform,
            o = null; - 1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(t) ? o = "macos" : -1 !== ["iPhone", "iPad", "iPod"].indexOf(t) ? o = "ios" : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(t) ? o = "windows" : /Android/.test(e) ? o = "android" : !o && /Linux/.test(t) && (o = "linux");
        return o
    }
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, s = o(6),
        i = (n = s) && n.__esModule ? n : {
            default: n
        };
    var a = {
        detectHash: function () {
            switch (window.location.hash) {
                case "#vrinsales":
                    i.default.goToSection(2), a.hidePreloader();
                    break;
                case "#cases":
                    i.default.goToSection(4), a.hidePreloader();
                    break;
                case "#contacts":
                    i.default.goToSection(5), a.hidePreloader()
            }
        },
        hidePreloader: function () {
            setTimeout(function () {
                document.querySelector(".routePreloader").classList.add("hide")
            }, 1e3)
        },
        init: function () {
            a.detectHash()
        }
    };
    t.default = a
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        console: function (e) {
            function t() {
                return e.apply(this, arguments)
            }
            return t.toString = function () {
                return e.toString()
            }, t
        }(function () {
            var e = ["background: #3452E8", "border: 2px solid white", "margin: auto auto", "color: white", "display: block", "line-height: 1.5", "padding: 20px 30px", "text-align: center", "font-weight: bold"].join(";");
            console.log("%c Website created by Jazz Pixels", e), console.log("https://jazzpixels.com")
        })
    };
    t.default = n
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = a(o(25)),
        s = a(o(38)),
        i = a(o(37));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = {
        init: function () {
            document.body.classList.add((0, n.default)()), s.default.detect() && document.body.classList.add("safari"), i.default.detect() && document.body.classList.add("ff")
        }
    };
    t.default = l
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    document.querySelector(".aboutSolution");
    var n = document.querySelectorAll(".aboutSolution .about"),
        s = {
            setListeners: function () {
                for (var e = 0; e < n.length; e++) n[e].addEventListener("mouseout", function () {
                    for (var e = 0; e < n.length; e++) n[e].classList.remove("secondary"), n[e].classList.remove("accent")
                });
                for (e = 0; e < n.length; e++) n[e].addEventListener("mouseover", function (e) {
                    for (var t = 0; t < n.length; t++) n[t].classList.add("secondary"), n[t].classList.remove("accent");
                    e.target.classList.remove("secondary"), e.target.classList.add("accent")
                })
            },
            init: function () {}
        };
    t.default = s
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    a(o(11));
    var n = a(o(0)),
        s = a(o(14)),
        i = a(o(8));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = (0, n.default)(".scrollDown"),
        d = {
            showAfterLoad: function () {
                var e = (0, n.default)(".scrollDown");
                (0, s.default)(function () {
                    e.classList.add("load")
                }), setTimeout(function () {
                    e.classList.add("enableEvents")
                }, 2500)
            },
            init: function () {
                l.addEventListener("click", function () {
                    i.default.forward("downButtonEvent")
                })
            }
        };
    t.default = d
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function () {
        n.default.showAfterLoad(), s.default.showAfterLoad();
        var e = "not finished",
            t = !1;

        function o() {
            var e = document.querySelector(".loader");
            document.querySelector(".scrollDown");
            e.classList.add("show-arrow")
        }
        setTimeout(function () {
            t && o(), e = "finished"
        }, 2500), window.addEventListener("load", function () {
            t = !0, "finished" == e && o()
        })
    };
    var n = i(o(4)),
        s = i(o(35));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function () {
        window.scrollTo(0, 0)
    }
}, function (e, t, o) {
    "use strict";
    var n, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : s(window)) && (n = window)
    }
    e.exports = n
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function (e) {
        {
            if (e && e.__esModule) return;
            var t = {};
            if (null != e)
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            t.default = e
        }
    })(o(7)), a(o(3)), a(o(0)), a(o(1)), a(o(4));
    var n = a(o(10)),
        s = a(o(5)),
        i = a(o(2));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = document.querySelectorAll(".workItems .item").length - 1,
        d = document.querySelector(".indicator"),
        r = {
            set: function () {
                n.default.state.currentWork = l, n.default.move(n.default.state.currentWork, !1, !1, !0), n.default.hideWork(), r.setIndicatorState(), d.classList.remove("hideBg"), s.default.show()
            },
            setIndicatorState: function () {
                i.default.highlight(5)
            }
        };
    t.default = r
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = a(o(11)),
        s = a(o(0)),
        i = a(o(14));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = {
        showAfterLoad: function () {
            (0, n.default)(function () {
                var e = (0, s.default)(".creator");
                (0, i.default)(function () {
                    e.classList.add("load")
                })
            })
        }
    };
    t.default = l
}, function (e, t, o) {
    "use strict";
    var n = S(o(31)),
        s = S(o(28)),
        i = S(o(8)),
        a = S(o(32)),
        l = S(o(26)),
        d = S(o(27)),
        r = S(o(30)),
        u = S(o(29)),
        c = S(o(2)),
        f = S(o(4)),
        v = S(o(22)),
        h = S(o(13)),
        m = S(o(10)),
        L = S(o(6)),
        w = S(o(9)),
        g = S(o(5)),
        p = S(o(1));
    S(o(15));

    function S(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(0, n.default)();
    var y = "not finished",
        b = !1;

    function A() {
        i.default.init(), r.default.init(), w.default.init(), L.default.init(), c.default.init(), l.default.init()
    }
    setTimeout(function () {
        b && A(), y = "finished"
    }, 2500), window.addEventListener("load", function () {
        b = !0, "finished" == y && A()
    }), s.default.init(), f.default.init(), u.default.init(), v.default.init(), h.default.init(), r.default.showAfterLoad(), m.default.init(), g.default.init(), p.default.init(), d.default.console(), window.addEventListener("beforeunload", function () {
        (0, a.default)()
    }), (0, a.default)(), window.addEventListener("load", function () {
        [].forEach.call(document.querySelectorAll("source[data-srcset]"), function (e) {
            e.setAttribute("srcset", e.getAttribute("data-srcset")), e.onload = function () {
                e.removeAttribute("data-srcset")
            }
        }), [].forEach.call(document.querySelectorAll("img[data-src-img]"), function (e) {
            e.setAttribute("src", e.getAttribute("data-src-img")), e.onload = function () {
                e.removeAttribute("data-src-img")
            }
        })
    });
    for (var O = 0; O < document.querySelectorAll("button, input, a, textarea").length; O++) document.querySelectorAll("button, input, a, textarea")[O].setAttribute("tabindex", "-1")
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        detect: function () {
            return -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
        }
    };
    t.default = n
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        detect: function () {
            return !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && void 0 !== document.body.style.webkitFilter
        }
    };
    t.default = n
}]);