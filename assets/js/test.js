+ function (a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;
        a(this).one(a.support.transition.end, function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b()
    })
}(jQuery), + function (a) {
    "use strict";
    var b = function (c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {
        toggle: !0
    }, b.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, b.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"), d || c.data("bs.collapse", null)
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                var f = function () {
                    this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return f.call(this);
                var g = a.camelCase(["scroll", e].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
            }
        }
    }, b.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function () {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }, b.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var c = a.fn.collapse;
    a.fn.collapse = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.collapse"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            !e && f.toggle && "show" == c && (c = !c), e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = c, this
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (b) {
        var c, d = a(this),
            e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
            f = a(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : d.data(),
            i = d.attr("data-parent"),
            j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
    })
}(jQuery), jQuery(".swipebox, .wp-caption a").swipebox(), jQuery(document).ready(function () {
    function a() {
        window.location = newLocation
    }
    var b = (jQuery(".jorgen-article-cover").height(), jQuery(window).height()),
        c = jQuery(".aesop-content-component"),
        d = jQuery(".jorgen-story-header"),
        e = jQuery(c).height(),
        f = (jQuery(".aesop-stacked-gallery-wrap"), jQuery("#wpadminbar").outerHeight()),
        g = jQuery(".jorgen-index-header").height(),
        h = jQuery("body");
    jQuery(h).addClass(700 > b ? "less-1400" : "over-1400"), jQuery(h).css("display", "none"), jQuery(h).fadeIn(500), jQuery(".aesop-fader, .aesop-story-chapters a, .jorgen-fader, .jorgen-site-nav a").click(function (b) {
        b.preventDefault(), newLocation = this.href, jQuery(h).fadeOut(400, a)
    }), jQuery(".aesop-image-component, .aesop-audio-component").addClass("aesop-component-invisible"), jQuery(".aesop-component-invisible").waypoint(function () {
        jQuery(this).toggleClass("aesop-component-visible")
    }, {
        offset: "80%"
    }), jQuery(".aesop-stacked-img").css({
        height: jQuery(window).height() + "px",
        width: jQuery(window).width() + "px"
    }), jQuery(".jorgen-article-cover, .aesop-article-chapter").css({
        height: jQuery(window).height() + "px"
    }), console.log('in'), jQuery(c).css({
        "margin-top": jQuery(window).height() + "px"
    }), jQuery(window).resize(function () {
        jQuery(".jorgen-article-cover, .aesop-chapter-cover").css({
            height: jQuery(window).height() + "px",
            width: jQuery(window).width() + "px"
        }), jQuery(c).css({
            "margin-top": jQuery(window).height() + "px"
        })
    });
    var i = jQuery(".jorgen-cover-title").height(),
        j = b / 2 - i / 2;
    jQuery(".jorgen-cover-title").css({
        "margin-top": j
    }), jQuery(d).css({
        "margin-top": f
    }), jQuery(c).waypoint(function () {
        jQuery(".jorgen-article-cover-wrap .jorgen-cover-title").fadeToggle(), jQuery(".jorgen-article-cover-wrap").toggleClass("covered")
    }, {
        offset: "98%"
    }), jQuery(c).waypoint(function () {
        jQuery(".jorgen-cover-meta").fadeToggle()
    }, {
        offset: "35%"
    }), e > b ? jQuery(c).waypoint(function () {
        jQuery(d).toggleClass("fixed")
    }) : jQuery(c).waypoint(function () {
        jQuery(d).toggleClass("fixed")
    }, {
        offset: "100%"
    });
    var k = jQuery(".jorgen-collection-item"),
        l = jQuery(".jorgen-load-more-posts").outerHeight(),
        m = f + l + g;
    jQuery(k).css({
        height: (b - m) / 2
    }), jQuery(".jorgen-menu-toggle").click(function (a) {
        a.preventDefault(), jQuery(h).toggleClass("menu-open"), jQuery(this).html('<i class="jorgencon jorgencon-bars"></i>' == jQuery(this).html() ? "&#10006;" : '<i class="jorgencon jorgencon-bars"></i>'), jQuery(".jorgen-index-header .jorgen-menu-toggle").hide().fadeIn(1e3)
    }), jQuery("main").click(function () {
        jQuery(h).removeClass("menu-open")
    })
}), jQuery(window).load(function () {
    jQuery("#jorgen-loading").fadeOut(function () {
        jQuery(this).hide()
    })
});
//# sourceMappingURL=jorgen.js.map