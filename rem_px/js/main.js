(function() {
        "use strict";

        function i(i) { i.preventDefault() }

        function e(i) {
            this.canvas = i, this.ctx = this.canvas.getContext("2d"), this.audio = NE("#audio")[0], this.imgList = [{ link: "/img/WIRELESS/2017/07/263/images/2.jpg", imgW: "1900", imgH: "3207" }, { link: "/img/WIRELESS/2017/07/263/images/3.jpg", limitMax: 0.025, limitMin: 0.005, imgW: "1900", imgH: "3207", areaW: "29", areaH: "49", areaL: "408", areaT: "707" }, { link: "/img/WIRELESS/2017/07/263/images/4.jpg", limitMax: .25, limitMin: .1, imgW: "1900", imgH: "3207", areaW: "358", areaH: "607", areaL: "1420", areaT: "432" },
                { link: "/img/WIRELESS/2017/07/263/images/5.jpg", limitMax: .04, limitMin: .015, imgW: "1900", imgH: "3207", areaW: "35", areaH: "58.8", areaL: "190", areaT: "1060" },
                { link: "/img/WIRELESS/2017/07/263/images/6.jpg", limitMax: .15, limitMin: .1, imgW: "1900", imgH: "3207", areaW: "185", areaH: "315", areaL: "90", areaT: "1089" },
                { link: "/img/WIRELESS/2017/07/263/images/7.jpg", limitMax: .05, limitMin: .01, imgW: "1900", imgH: "3207", areaW: "65", areaH: "109", areaL: "1624", areaT: "480" },
                { link: "/img/WIRELESS/2017/07/263/images/8.jpg", limitMax: .15, limitMin: .1, imgW: "1900", imgH: "3207", areaW: "198", areaH: "334", areaL: "820", areaT: "438" },
                { link: "/img/WIRELESS/2017/07/263/images/9.jpg", limitMax: .05, limitMin: .01, imgW: "1900", imgH: "3207", areaW: "64", areaH: "108", areaL: "205", areaT: "1236" },
                { link: "/img/WIRELESS/2017/07/263/images/10.jpg", limitMax: .15, limitMin: .1, imgW: "1900", imgH: "3207", areaW: "141", areaH: "238", areaL: "694", areaT: "1948" },
                { link: "/img/WIRELESS/2017/07/263/images/11.jpg", limitMax: .15, limitMin: .1, imgW: "1900", imgH: "3207", areaW: "242", areaH: "408", areaL: "415", areaT: "573" },
                { link: "/img/WIRELESS/2017/07/263/images/12.jpg", limitMax: .05, limitMin: .01, imgW: "1900", imgH: "3207", areaW: "48", areaH: "81", areaL: "1400", areaT: "663" },
                { link: "/img/WIRELESS/2017/07/263/images/fd1.jpg", limitMax: .3, limitMin: .1, imgW: "1900", imgH: "3207", areaW: "416", areaH: "700", areaL: "700", areaT: "1200" },
            ], this.radio = 1, this.index = 0, this.fps = 60, this.scale = .985, this.scaleSlow = .995
        }

        function t(i) {
            var e = document.getElementById(i),
                t = function() { document.removeEventListener("WeixinJSBridgeReady", t), document.removeEventListener("YixinJSBridgeReady", t), e.play() };
            e.play(), window.WeixinJSBridge && e.play(), "undefined" == typeof WeixinJSBridge ? document.addEventListener("WeixinJSBridgeReady", t, !1) : (document.addEventListener("YixinJSBridgeReady", t, !1), e.play())
        }
        /micromessenger/.test(navigator.userAgent.toLocaleLowerCase()), document.addEventListener("touchmove", i, !1), document.addEventListener("touchstart", i, !1), NE(".reload").bind("touchstart", function() { window.location.reload() }), NE(".share_btn").bind("touchend", function() { h5Share() }), NE(".closeShareBtn").bind("touchend", function() { ShareClose() }), NE(".zan").bind("touchend", function() { zanA() }), NE(".tie").bind("touchend", function() { window.location.href = this.href }), NE(".review").bind("touchend", function() { window.location.href = this.href }), e.prototype.initCanvas = function() { this.w = window.innerWidth, this.h = window.innerHeight, this.w > this.h && (this.w = 725, this.h = 1206, NE("body").css({ width: "725px", height: "1206px", margin: "0 auto", position: "relative", overflow: "hidden" }), NE("html").css({ width: "100%", height: "100%" })), this.canvas.setAttribute("width", this.w), this.canvas.setAttribute("height", this.h) }, e.prototype.preload = function() {
            function i() { e++, e == n.length && a(t.imgList) }
            for (var e = 0, t = this, a = function() {}, n = this.imgList, m = 0; m < n.length; m++) this.imgList[m].image = new Image, this.imgList[m].image.src = n[m].link, this.imgList[m].image.i = m, this.imgList[m].image.name = m, this.imgList[m].image.className = "item", this.imgList[m].image.onload = function() { NE(".collection").append(t.imgList[this.i].image), i() }, this.imgList[m].image.onerror = function() { console.log("\u5931\u8d25" + this.i), i(), NE(".collection").append(t.imgList[this.i].image) };
            return { done: function(i) { a = i || a } }
        }, e.prototype.showend = function() {
            NE(".backcover").removeClass("hidden"), NE("#start").hide(), abcd();
            setTimeout(function() {
                NE(".backcover").addClass("active");


            }, 200)
        }, e.prototype.init = function() {
            t("audio"), NE(".music").removeClass("music_close");
            var i = this;
            this.initCanvas(), this.preload().done(function() { NE(".loading").hide(), NE(".fma").addClass('animated swing'), setTimeout(function() { NE(".cover").addClass("animated fadeOut"), reA(), NE("#start").show() }, 4500), i.domList = NE(".collection .item").sort(function(i, e) { return i.name - e.name }), i.img_oversize = i.domList[i.index + 1].image, i.img_minisize = i.domList[i.index].image, i.draw(), i.touchEvent() })
        }, e.prototype.draw = function() {
            if (this.index + 1 != this.imgList.length) {
                if (this.radio < this.imgList[this.index + 1].areaW / this.imgList[this.index + 1].imgW && (this.index++, this.radio = 1, !this.imgList[this.index + 1])) return void this.showend();
                this.imgNext = this.imgList[this.index + 1], this.imgCur = this.imgList[this.index], this.img_oversize = this.domList[this.index + 1], this.img_minisize = this.domList[this.index], this.drawImgOversize(this.img_oversize, this.imgNext.imgW, this.imgNext.imgH, this.imgNext.areaW, this.imgNext.areaH, this.imgNext.areaL, this.imgNext.areaT, this.radio), this.drawImgMinisize(this.img_minisize, this.imgCur.imgW, this.imgCur.imgH, this.imgNext.imgW, this.imgNext.imgH, this.imgNext.areaW, this.imgNext.areaH, this.imgNext.areaL, this.imgNext.areaT, this.radio)
            }
        }, e.prototype.touchEvent = function() {
            var i = this;
            NE("#start").bind("touchstart", function() {
                function e() {
                    var a = (new Date).getTime();
                    if (console.log(a - t, 1), i.index + 1 != i.imgList.length) {
                        if (a - t < 1e3 / i.fps) return void(i.timer = requestAnimationFrame(e));
                        t = a, i.imgList[i.index + 1].limitMax && i.imgList[i.index + 1].limitMin && i.radio < i.imgList[i.index + 1].limitMax && i.radio > i.imgList[i.index + 1].limitMin ? i.radio = i.scaleSlow * i.radio : i.radio = i.scale * i.radio, i.draw(), i.timer = requestAnimationFrame(e)
                    }
                }
                cancelAnimationFrame(i.timer), NE(".cover").length && NE(".cover")[0].remove();
                var t = (new Date).getTime();
                i.timer = requestAnimationFrame(e)
            }), NE("#start").bind("touchmove", function() {}), NE("#start").bind("touchend", function() { cancelAnimationFrame(i.timer) }), NE(".music").bind("touchend", function() { NE(".music").hasClass("music_close") ? (NE(".music").removeClass("music_close"), NE("#audio")[0].play()) : (NE(".music").addClass("music_close"), NE("#audio")[0].pause()) })
        }, e.prototype.drawImgOversize = function(i, e, t, a, n, m, s, g) { this.ctx.drawImage(i, m - (a / g - a) * (m / (e - a)), s - (n / g - n) * (s / (t - n)), a / g, n / g, 0, 0, 750, 1206) }, e.prototype.drawImgMinisize = function(i, e, t, a, n, m, s, g, r, o) { this.ctx.drawImage(i, 0, 0, e, t, (m / o - m) * (g / (a - m)) * o * 750 / m, (s / o - s) * (r / (n - s)) * o * 1206 / s, 750 * o, 1206 * o) };
        var a = new e(NE("#app")[0]);
        a.init()
    }(); 