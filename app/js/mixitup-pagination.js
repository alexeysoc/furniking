/**!
 * MixItUp Pagination v3.3.0
 * Client-side pagination for filtered and sorted content
 * Build 875b7d31-63d1-4040-ac6f-b1c814027891
 *
 * Requires mixitup.js >= v^3.1.8
 *
 * @copyright Copyright 2014-2017 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup-pagination/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup-pagination/licenses/
 *
 *            Non-commercial use permitted under same terms as  license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */



! function(a) {
	"use strict";
	var t = function(a) {
		var i = a.h;
		if(!a.CORE_VERSION || !i.compareVersions(t.REQUIRE_CORE_VERSION, a.CORE_VERSION)) throw new Error("[MixItUp Pagination] MixItUp Pagination " + t.EXTENSION_VERSION + " requires at least MixItUp " + t.REQUIRE_CORE_VERSION);
		a.ConfigCallbacks.registerAction("afterConstruct", "pagination", function() {
			this.onPaginateStart = null, this.onPaginateEnd = null
		}), 
		a.ConfigClassNames.registerAction("afterConstruct", "pagination", function() {
			this.elementPager = "control", this.elementPageList = "page-list", this.elementPageStats = "page-stats", this.modifierFirst = "first", this.modifierLast = "last", this.modifierPrev = "prev", this.modifierNext = "next", this.modifierTruncationMarker = "truncation-marker"
		}), 
		a.ConfigLoad.registerAction("afterConstruct", "pagination", function() {
			this.page = 1
		}), 
		a.ConfigPagination = function() {
			this.generatePageList = !0, this.generatePageStats = !0, this.maintainActivePage = !0, this.loop = !1, this.hidePageListIfSinglePage = !1, this.hidePageStatsIfSinglePage = !1, this.limit = -1, this.maxPagers = 5, i.seal(this)
		}, 
		a.ConfigRender.registerAction("afterConstruct", "pagination", function() {
			this.pager = null, this.pageStats = null
		}), 
		a.ConfigSelectors.registerAction("afterConstruct", "pagination", function() {
			this.pageList = ".mixitup-page-list", this.pageStats = ".mixitup-page-stats"
		}),
		 a.ConfigTemplates.registerAction("afterConstruct", "pagination", function() {
			// this.pager = '<button type="button" class="${classNames}" data-page="${pageNumber}">${pageNumber}</button>', this.pagerPrev = '<button type="button" class="${classNames}" data-page="prev">&laquo;</button>', this.pagerNext = '<button type="button" class="${classNames}" data-page="next">&raquo;</button>', this.pagerTruncationMarker = '<span class="${classNames}">&hellip;</span>', this.pageStats = "${startPageAt} to ${endPageAt} of ${totalTargets}", this.pageStatsSingle = "${startPageAt} of ${totalTargets}", this.pageStatsFail = "None found"
			// var curentPage = "{$endPageAt}";
			// var totalPage = "{$totalTargets}";


			this.pager = '<button type="button" class="${classNames}" data-page="${pageNumber}"></button>', this.pagerPrev = '<button type="button" class="${classNames}" data-page="prev">&laquo;</button>', this.pagerNext = '<button type="button" class="${classNames}" data-page="next">&raquo;</button>', this.pagerTruncationMarker = '<span class="${classNames}">&hellip;</span>', this.pageStats = "<span class='page_text'>Page</span><input class='page__number' type='number' value=${endPageAt}> of ${totalTargets}", this.pageStatsSingle = "${startPageAt} of ${totalTargets}", this.pageStatsFail = "None found"
			//console.log("${startPageAt}");
			// console.log(totalPage);

		}), 
		a.Config.registerAction("beforeConstruct", "pagination", function() {
			this.pagination = new a.ConfigPagination
		}), 
		a.ModelPager = function() {
			this.pageNumber = -1, this.classNames = "", this.classList = [], this.isDisabled = !1, this.isPrev = !1, this.isNext = !1, this.isPageLink = !1, this.isTruncationMarker = !1, i.seal(this)
		}, 
		a.ModelPageStats = function() {
			this.startPageAt = -1, this.endPageAt = -1, this.totalTargets = -1, i.seal(this)
		}, 
		a.UiClassNames.registerAction("afterConstruct", "pagination", function() {
			this.first = "", this.last = "", this.prev = "", this.next = "", this.first = "", this.last = "", this.truncated = "", this.truncationMarker = ""
		}),
		 a.controlDefinitions.push(new a.ControlDefinition("pager", "[data-page]", (!0), "pageListEls")), a.Control.registerFilter("commandsHandleClick", "pagination", function(a, t) {
			var e = this,
				n = {},
				s = "",
				o = -1,
				g = null,
				r = null,
				l = -1;
			if(!e.selector || "[data-page]" !== e.selector) return a;
			for(r = i.closestParent(t.target, e.selector, !0, e.bound[0].dom.document), l = 0; g = e.bound[l]; l++) 
			n = a[l], 
			!g.config.pagination || g.config.pagination.limit < 0 || g.config.pagination.limit === 1 / 0 
			? a[l] = null : !r || i.hasClass(r, g.classNamesPager.active) || i.hasClass(r, g.classNamesPager.disabled) 
			? a[l] = null : (s = r.getAttribute("data-page"), "prev" === s ? n.paginate = "prev" : "next" === s 
			? n.paginate = "next" : o && (n.paginate = parseInt(s)), g.lastClicked && (g.lastClicked = r));
			return a
		}), 
		a.CommandMultimix.registerAction("afterConstruct", "pagination", function() {
			this.paginate = null
		}), 
		a.CommandPaginate = function() {
			this.page = -1, this.limit = -1, this.action = "", this.anchor = null, i.seal(this)
		}, 
		a.Events.registerAction("afterConstruct", "pagination", function() {
			this.paginateStart = null, this.paginateEnd = null
		}), 
		a.events = new a.Events, a.Operation.registerAction("afterConstruct", "pagination", function() {
			this.startPagination = null, this.newPagination = null, this.startTotalPages = -1, this.newTotalPages = -1
		}), 
		a.State.registerAction("afterConstruct", "pagination", function() {
			this.activePagination = null, this.totalPages = -1
		}), 
		a.MixerDom.registerAction("afterConstruct", "pagination", function() {
			this.pageListEls = [], this.pageStatsEls = []
		}), 
		a.Mixer.registerAction("afterConstruct", "pagination", function() {
			this.classNamesPager = new a.UiClassNames, this.classNamesPageList = new a.UiClassNames, this.classNamesPageStats = new a.UiClassNames
		}), 
		a.Mixer.registerAction("afterAttach", "pagination", function() {
			var a = this,
				t = null,
				e = -1;
			if(!(a.config.pagination.limit < 0)) {
				if(a.classNamesPager.base = i.getClassname(a.config.classNames, "pager"), a.classNamesPager.active = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierActive), a.classNamesPager.disabled = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierDisabled), a.classNamesPager.first = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierFirst), a.classNamesPager.last = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierLast), a.classNamesPager.prev = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierPrev), a.classNamesPager.next = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierNext), a.classNamesPager.truncationMarker = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierTruncationMarker), a.classNamesPageList.base = i.getClassname(a.config.classNames, "page-list"), a.classNamesPageList.disabled = i.getClassname(a.config.classNames, "page-list", a.config.classNames.modifierDisabled), a.classNamesPageStats.base = i.getClassname(a.config.classNames, "page-stats"), a.classNamesPageStats.disabled = i.getClassname(a.config.classNames, "page-stats", a.config.classNames.modifierDisabled), a.config.pagination.generatePageList && a.dom.pageListEls.length > 0)
					for(e = 0; t = a.dom.pageListEls[e]; e++) a.renderPageListEl(t, a.lastOperation);
				if(a.config.pagination.generatePageStats && a.dom.pageStatsEls.length > 0)
					for(e = 0; t = a.dom.pageStatsEls[e]; e++) a.renderPageStatsEl(t, a.lastOperation)
			}
		}), 
		a.Mixer.registerAction("afterSanitizeConfig", "pagination", function() {
			var t = this,
				i = t.config.callbacks.onMixStart,
				e = t.config.callbacks.onMixEnd,
				n = t.config.callbacks.onPaginateStart,
				s = t.config.callbacks.onPaginateEnd,
				o = !1;
			t.config.pagination.limit < 0 || (t.classNamesPager = new a.UiClassNames, t.classNamesPageList = new a.UiClassNames, t.classNamesPageStats = new a.UiClassNames, t.config.callbacks.onMixStart = function(e, s) {
				e.activePagination.limit === s.activePagination.limit && e.activePagination.page === s.activePagination.page || (o = !0), "function" == typeof i && i.apply(t.dom.container, arguments), o && (a.events.fire("paginateStart", t.dom.container, {
					state: e,
					futureState: s,
					instance: t
				}, t.dom.document), "function" == typeof n && n.apply(t.dom.container, arguments))
			}, t.config.callbacks.onMixEnd = function(i) {
				"function" == typeof e && e.apply(t.dom.container, arguments), o && (o = !1, a.events.fire("paginateEnd", t.dom.container, {
					state: i,
					instance: t
				}, t.dom.document), "function" == typeof s && s.apply(t.dom.container, arguments))
			})
		}), 
		a.Mixer.registerFilter("operationGetInitialState", "pagination", function(a, t) {
			var i = this;
			return i.config.pagination.limit < 0 ? a : (a.newPagination = t.activePagination, a)
		}), 
		a.Mixer.registerFilter("stateGetInitialState", "pagination", function(t) {
			var i = this;
			return i.config.pagination.limit < 0 ? t : (t.activePagination = new a.CommandPaginate, t.activePagination.page = i.config.load.page, t.activePagination.limit = i.config.pagination.limit, t)
		}), 
		a.Mixer.registerAction("afterGetFinalMixData", "pagination", function() {
			var a = this;
			a.config.pagination.limit < 0 || "number" == typeof a.config.pagination.maxPagers && (a.config.pagination.maxPagers = Math.max(5, a.config.pagination.maxPagers))
		}), 
		a.Mixer.registerAction("afterCacheDom", "pagination", function() {
			var t = this,
				i = null;
			if(!(t.config.pagination.limit < 0) && t.config.pagination.generatePageList) {
				switch(t.config.controls.scope) {
					case "local":
						i = t.dom.container;
						break;
					case "global":
						i = t.dom.document;
						break;
					default:
						throw new Error(a.messages.ERROR_CONFIG_INVALID_CONTROLS_SCOPE)
				}
				t.dom.pageListEls = i.querySelectorAll(t.config.selectors.pageList), t.dom.pageStatsEls = i.querySelectorAll(t.config.selectors.pageStats)
			}
		}), 
		a.Mixer.registerFilter("stateBuildState", "pagination", function(a, t) {
			var i = this;
			return i.config.pagination.limit < 0 ? a : (a.activePagination = t.newPagination, a.totalPages = t.newTotalPages, a)
		}), 
		a.Mixer.registerFilter("instructionParseMultimixArgs", "pagination", function(t) {
			var i = this;
			return i.config.pagination.limit < 0 ? t : (!t.command.paginate || t.command.paginate instanceof a.CommandPaginate || (t.command.paginate = i.parsePaginateArgs([t.command.paginate]).command), t)
		}), 
		a.Mixer.registerAction("afterFilterOperation", "pagination", function(a) {
			var t = this,
				i = -1,
				e = -1,
				n = [],
				s = [],
				o = null,
				g = -1,
				r = -1;
			if(!(t.config.pagination.limit < 0)) {
				if(a.newTotalPages = a.newPagination.limit ? Math.max(Math.ceil(a.matching.length / a.newPagination.limit), 1) : 1, t.config.pagination.maintainActivePage && (a.newPagination.page = a.newPagination.page > a.newTotalPages ? a.newTotalPages : a.newPagination.page), t.config.pagination.limit = a.newPagination.limit, a.newPagination.anchor) {
					for(r = 0;
						(o = a.matching[r]) && o.dom.el !== a.newPagination.anchor; r++);
					i = r, e = r + a.newPagination.limit - 1
				} else i = a.newPagination.limit * (a.newPagination.page - 1), e = a.newPagination.limit * a.newPagination.page - 1, isNaN(i) && (i = 0);
				if(!(a.newPagination.limit < 0)) {
					for(r = 0; o = a.show[r]; r++) r >= i && r <= e ? n.push(o) : s.push(o);
					for(a.show = n, r = 0; o = a.toHide[r]; r++) o.isShown || (a.toHide.splice(r, 1), o.isShown = !1, r--);
					for(r = 0; o = s[r]; r++) a.hide.push(o), (g = a.toShow.indexOf(o)) > -1 && a.toShow.splice(g, 1), o.isShown && a.toHide.push(o)
				}
			}
		}), 
		a.Mixer.registerFilter("operationUnmappedGetOperation", "pagination", function(t, e) {
			var n = this;
			return n.config.pagination.limit < 0 ? t : (t.startState = n.state, t.startPagination = n.state.activePagination, t.startTotalPages = n.state.totalPages, t.newPagination = new a.CommandPaginate, t.newPagination.limit = t.startPagination.limit, t.newPagination.page = t.startPagination.page, e.paginate ? n.parsePaginateCommand(e.paginate, t) : (e.filter || e.sort) && (i.extend(t.newPagination, t.startPagination), n.config.pagination.maintainActivePage ? t.newPagination.page = n.state.activePagination.page : t.newPagination.page = 1), t)
		}), 
		a.Mixer.registerFilter("operationMappedGetOperation", "pagination", function(a, t, i) {
			var e = this,
				n = null,
				s = -1;
			if(e.config.pagination.limit < 0) return a;
			if(i) return a;
			if(e.config.pagination.generatePageList && e.dom.pageListEls.length > 0)
				for(s = 0; n = e.dom.pageListEls[s]; s++) e.renderPageListEl(n, a);
			if(e.config.pagination.generatePageStats && e.dom.pageStatsEls.length > 0)
				for(s = 0; n = e.dom.pageStatsEls[s]; s++) e.renderPageStatsEl(n, a);
			return a
		}), 
		a.Mixer.extend({
			parsePaginateCommand: function(t, i) {
				var e = this;
				if(t.page > -1) {
					if(0 === t.page) throw new Error(a.messages.ERROR_PAGINATE_INDEX_RANGE);
					i.newPagination.page = Math.max(1, Math.min(1 / 0, t.page))
				} else "next" === t.action ? i.newPagination.page = e.getNextPage() : "prev" === t.action ? i.newPagination.page = e.getPrevPage() : t.anchor && (i.newPagination.anchor = t.anchor);
				t.limit > -1 && (i.newPagination.limit = t.limit), i.newPagination.limit !== i.startPagination.limit && (i.newTotalPages = i.newPagination.limit ? Math.max(Math.ceil(i.startState.matching.length / i.newPagination.limit), 1) : 1), (i.newPagination.limit <= 0 || i.newPagination.limit === 1 / 0) && (i.newPagination.page = 1)
			},
			getNextPage: function() {
				var a = this,
					t = -1;
				return t = a.state.activePagination.page + 1, t > a.state.totalPages && (t = a.config.pagination.loop ? 1 : a.state.activePagination.page), t
			},
			getPrevPage: function() {
				var a = this,
					t = -1;
				return t = a.state.activePagination.page - 1, t < 1 && (t = a.config.pagination.loop ? a.state.totalPages : a.state.activePagination.page), t
			},
			renderPageListEl: function(t, e) {
				var n = this,
					s = -1,
					o = "",
					g = [],
					r = null,
					l = null,
					c = [],
					p = !1,
					m = !1,
					f = null,
					P = null,
					u = "",
					d = -1;
				if(e.newPagination.limit < 0 || e.newPagination.limit === 1 / 0 || e.newTotalPages < 2 && n.config.pagination.hidePageListIfSinglePage) return t.innerHTML = "", void i.addClass(t, n.classNamesPageList.disabled);
				for(s = e.newPagination.page - 1, l = "function" == typeof(l = n.config.render.pager) ? l : null, n.config.pagination.maxPagers < 1 / 0 && e.newTotalPages > n.config.pagination.maxPagers && (c = n.getAllowedIndices(e)), r = new a.ModelPager, r.isPrev = !0, r.classList.push(n.classNamesPager.base, n.classNamesPager.prev), 1 !== e.newPagination.page || n.config.pagination.loop || (r.classList.push(n.classNamesPager.disabled), r.isDisabled = !0), r.classNames = r.classList.join(" "), o = l ? l(r) : i.template(n.config.templates.pagerPrev)(r), g.push(o), d = 0; d < e.newTotalPages; d++) o = n.renderPager(d, e, c), o || d < s && p || d > s && m ? o && g.push(o) : (r = new a.ModelPager, r.isTruncationMarker = !0, r.classList.push(n.classNamesPager.base, n.classNamesPager.truncationMarker), r.classNames = r.classList.join(" "), o = l ? l(r) : i.template(n.config.templates.pagerTruncationMarker)(r), g.push(o), d < s && (p = !0), d > s && (m = !0));
				for(r = new a.ModelPager, r.isNext = !0, r.classList.push(n.classNamesPager.base, n.classNamesPager.next), e.newPagination.page !== e.newTotalPages || n.config.pagination.loop || r.classList.push(n.classNamesPager.disabled), r.classNames = r.classList.join(" "), o = l ? l(r) : i.template(n.config.templates.pagerNext)(r), g.push(o), u = g.join(" "), t.innerHTML = u, f = t.querySelectorAll("." + n.classNamesPager.disabled), d = 0; P = f[d]; d++) "boolean" == typeof P.disabled && (P.disabled = !0);
				p || m ? i.addClass(t, n.classNamesPageList.truncated) : i.removeClass(t, n.classNamesPageList.truncated), e.newTotalPages > 1 ? i.removeClass(t, n.classNamesPageList.disabled) : i.addClass(t, n.classNamesPageList.disabled)
			},
			getAllowedIndices: function(a) {
				var t = this,
					i = a.newPagination.page - 1,
					e = a.newTotalPages - 1,
					n = [],
					s = -1,
					o = -1,
					g = -1,
					r = -1,
					l = -1,
					c = -1,
					p = -1;
				for(n.push(0), s = t.config.pagination.maxPagers - 2, o = Math.ceil((s - 1) / 2), g = Math.floor((s - 1) / 2), r = i - o, l = i + g, c = 0, r < 1 && (c = 1 - r), l > e - 1 && (c = e - 1 - l), p = r + c; s;) n.push(p), p++, s--;
				return n.push(e), n
			},
			renderPager: function(t, e, n) {
				var s = this,
					o = null,
					g = e.newPagination.page - 1,
					r = new a.ModelPager,
					l = "";
				return s.config.pagination.maxPagers < 1 / 0 && n.length && n.indexOf(t) < 0 ? "" : (o = "function" == typeof(o = s.config.render.pager) ? o : null, r.isPageLink = !0, r.classList.push(s.classNamesPager.base), 0 === t && r.classList.push(s.classNamesPager.first), t === e.newTotalPages - 1 && r.classList.push(s.classNamesPager.last), t === g && r.classList.push(s.classNamesPager.active), r.classNames = r.classList.join(" "), r.pageNumber = t + 1, l = o ? o(r) : i.template(s.config.templates.pager)(r))
			},
			renderPageStatsEl: function(t, e) {
				var n = this,
					s = new a.ModelPageStats,
					o = null,
					g = "",
					r = "";
				return e.newPagination.limit < 0 || e.newPagination.limit === 1 / 0 || e.newTotalPages < 2 && n.config.pagination.hidePageStatsIfSinglePage ? (t.innerHTML = "", void i.addClass(t, n.classNamesPageStats.disabled)) : (o = "function" == typeof(o = n.config.render.pageStats) ? o : null, s.totalTargets = Math.ceil(e.matching.length/(e.newPagination.limit )), r = s.totalTargets ? 1 === e.newPagination.limit ? n.config.templates.pageStatsSingle : n.config.templates.pageStats : n.config.templates.pageStatsFail, s.totalTargets && e.newPagination.limit > 0 ? (s.startPageAt = (e.newPagination.page - 1) * e.newPagination.limit + 1, s.endPageAt = Math.min(s.startPageAt + e.newPagination.limit - 1)/(e.newPagination.limit )) : s.startPageAt = s.endPageAt = 0, g = o ? o(s) : i.template(r)(s), t.innerHTML = g, void(s.totalTargets ? i.removeClass(t, n.classNamesPageStats.disabled) : i.addClass(t, n.classNamesPageStats.disabled)))
				// return e.newPagination.limit < 0 || e.newPagination.limit === 1 / 0 || e.newTotalPages < 2 && n.config.pagination.hidePageStatsIfSinglePage ? (t.innerHTML = "", void i.addClass(t, n.classNamesPageStats.disabled)) : (o = "function" == typeof(o = n.config.render.pageStats) ? o : null, s.totalTargets = e.matching.length, r = s.totalTargets ? 1 === e.newPagination.limit ? n.config.templates.pageStatsSingle : n.config.templates.pageStats : n.config.templates.pageStatsFail, s.totalTargets && e.newPagination.limit > 0 ? (s.startPageAt = (e.newPagination.page - 1) * e.newPagination.limit + 1, s.endPageAt = Math.min(s.startPageAt + e.newPagination.limit - 1, s.totalTargets)) : s.startPageAt = s.endPageAt = 0, g = o ? o(s) : i.template(r)(s), t.innerHTML = g, void(s.totalTargets ? i.removeClass(t, n.classNamesPageStats.disabled) : i.addClass(t, n.classNamesPageStats.disabled)))


			},
			parsePaginateArgs: function(t) {
				var e = this,
					n = new a.UserInstruction,
					s = null,
					o = -1;
				for(n.animate = e.config.animation.enable, n.command = new a.CommandPaginate, o = 0; o < t.length; o++) s = t[o], null !== s && ("object" == typeof s && i.isElement(s, e.dom.document) ? n.command.anchor = s : s instanceof a.CommandPaginate || "object" == typeof s ? i.extend(n.command, s) : "number" == typeof s ? n.command.page = s : "string" != typeof s || isNaN(parseInt(s)) ? "string" == typeof s ? n.command.action = s : "boolean" == typeof s ? n.animate = s : "function" == typeof s && (n.callback = s) : n.command.page = parseInt(s));
				return i.freeze(n), n
			},
			paginate: function() {
				var a = this,
					t = a.parsePaginateArgs(arguments);
				return a.multimix({
					paginate: t.command
				}, t.animate, t.callback)
			},
			nextPage: function() {
				var a = this,
					t = a.parsePaginateArgs(arguments);
				return a.multimix({
					paginate: {
						action: "next"
					}
				}, t.animate, t.callback)
			},
			prevPage: function() {
				var a = this,
					t = a.parsePaginateArgs(arguments);
				return a.multimix({
					paginate: {
						action: "prev"
					}
				}, t.animate, t.callback)
			}
		}), a.Facade.registerAction("afterConstruct", "pagination", function(a) {
			this.paginate = a.paginate.bind(a), this.nextPage = a.nextPage.bind(a), this.prevPage = a.prevPage.bind(a)
		})
	};
	if(t.TYPE = "mixitup-extension", t.NAME = "mixitup-pagination", t.EXTENSION_VERSION = "3.3.0", t.REQUIRE_CORE_VERSION = "^3.1.8", "object" == typeof exports && "object" == typeof module) module.exports = t;
	else if("function" == typeof define && define.amd) define(function() {
		return t
	});
	else {
		if(!a.mixitup || "function" != typeof a.mixitup) throw new Error("[MixItUp Pagination] MixItUp core not found");
		t(a.mixitup)
	}
	// const PageNumber = document.querySelector(".our_product_list");
	// const PageNumber2=PageNumber.childNodes[2];
	//if (PageNumber) {
	//PageNumber.addEventListener("click", function (e) {
	//PageNumber.classList.toggle("active");
	//console.log(PageNumber2);
	// });
	//}
	
}(window);
