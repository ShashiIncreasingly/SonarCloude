!function() {
    "use strict";
    let e = {
        bundles: !0,
        ENV: "prod",
        debug: 0,
        initStatus: "",
        initStatusCP: ""
    }
      , t = !1
      , c = window.crypto || window.msCrypto;
    function i(e) {
        return (c.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(e).substring(2, 15) + (c.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(e).substring(2, 15)
    }
    function o(e, t) {
        t.parentNode.insertBefore(e, t.nextSibling)
    }
    function r(e) {
        let t = e.split(" ");
        for (let e = 0; e < t.length; e++)
            t[e] = t[e].charAt(0).toUpperCase() + t[e].substring(1);
        return t.join(" ")
    }
    let d = !0
      , l = !1
      , n = !1
      , _ = [46, 8, 9, 27, 110, 190]
      , a = 100;
    e.clientConfig = {},
    e.clientConfig.statusVAT = "",
    e.clientConfig.offset = 0,
    e.clientConfig.offset_rec = 0,
    e.clientConfig.slidevalue = 0,
    e.clientConfig.slidevalue_rec = 0,
    e.config = {},
    e.config.deviceType = "",
    e.config.clientToken = "IY3whK",
    e.config.trackingURL = "https://optimizedby.increasingly.co/ImportData",
    e.config.addToBasketURL = "https://www.leekes.co.uk/checkout/cart/add/uenc/",
    e.clientConfig.checkoutLink = "https://www.leekes.co.uk/checkout/cart/",
    e.config.affiliateURL = "",
    e.config.pageType = "",
    e.config.ivid = "",
    e.config.pdpaddedProductList = [],
    e.config.inc_slideIndex = 1,
    e.config.bundle_tracking = [],
    e.config.Product_id = null,
    e.config.dupBasket = [],
    e.config.dupDataObjectProducts = [],
    e.config.onloadam = !1,
    e.clientConfig.OOS = [],
    e.config.disablebtn = !0,
    e.config.sidebarremovedprod = [],
    e.config.cartproductids = [],
    e.config.bundle_skuPushed = [],
    e.config.recommendationProduct = [],
    e.config.FBTTitle = "Frequently bought together",
    e.config.AddedText = "Added",
    e.config.addedtoBagText = "Added",
    e.config.BeforeYouChecktext = "Customers also bought",
    e.config.ajaxerr = "I'm sorry we've experienced an error. Please try again.",
    e.config.UpdateText = "UPDATE",
    e.config.sidebarFirstLoad = !1,
    e.config.noimage = "https://www.increasingly.co/Clients/IY3whK_NEW/images/no-image.png",
    e.config.recommendation = !1,
    e.config.bundledid = [],
    e.config.cldomain = "",
    e.config.checkoutpath = "/checkout/cart/",
    e.config.fabrictext = "Select Fabric",
    e.config.styleft = "left:0 !important;position: relative;",
    e.config.ctl_names = [],
    e.config.ctl_img_srcs = [],
    e.config.ctl_prices = [],
    e.config.qtyscross = [],
    e.config.datastoreprod = [],
    e.config.ddFlag = !1,
    e.config.catFlag = [];
    let s = [];
    function u(e) {
        let t = e + "="
          , c = document.cookie.split(";");
        for (let e in c)
            if (Object.prototype.hasOwnProperty.call(c, e)) {
                let i = c[e];
                for (; " " == i.charAt(0); )
                    i = i.substring(1, i.length);
                if (0 == i.indexOf(t))
                    return i.substring(t.length, i.length)
            }
        return null
    }
    function p(e, t) {
        let c = document.createElement(e);
        return null != t && c.classList.add(t),
        c
    }
    e.config.singleProd = !1,
    e.config.VariantProduct = !1,
    e.config.saveBadgeText = "Save ",
    "/checkout/cart/" == window.location.pathname && (e.config.addToBasketURL = "https://www.leekes.co.uk/cartpopup/cart/showPopup/"),
    e.checkProdUserCookie = function() {
        setTimeout((function() {
            e.init()
        }
        ), 500)
    }
    ,
    e.checkProdUserCookie();
    let m = new Intl.NumberFormat("en-GB",{
        style: "currency",
        currency: "GBP"
    });
    function b() {
        if (null != window.checkoutConfig && null != window.checkoutConfig.quoteItemData)
            for (var t = 0; t < window.checkoutConfig.quoteItemData.length; t++)
                window.checkoutConfig.quoteItemData.length > 0 && e.config.cartproductids.push(window.checkoutConfig.quoteItemData[t].product_id);
        return e.config.cartproductids
    }
    function y(t, c) {
        let i = t.parentNode.parentNode
          , o = e.methods.checkVariantSelection(i);
        "inc_product_desc_block" == t.parentNode.parentNode.className && (i = t.parentNode.parentNode.parentNode.parentNode),
        i.classList.contains("inc_product_block") == d && (i = i.parentNode.parentNode);
        let r = i.getAttribute("data-sku");
        r || (r = i.parentElement.parentElement.getAttribute("data-sku"));
        let l = new e.classes.FindObj({
            id: r
        })
          , n = i.querySelector(".inc_product_add_text")
          , _ = i.querySelector(".inc_product_add_text")
          , a = i.querySelectorAll(".inc_product_desc_add_img");
        if (1 == o && e.config.disablebtn == d && (e.config.disablebtn = !1,
        t.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("inc_product_showcase_block") == d || t.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("inc_product_modal_block") == d)) {
            let t = i.querySelector(".inc_product_modal_block .inc_product_desc_add_text");
            t.innerText = "Adding...",
            i.querySelector(".inc_product_add_text").innerText = "Adding...";
            let o = !1;
            "pdp" == e.config.pageType && null != document.querySelector(".inc_af_block") && null == document.querySelector(".sidebar_outer.sidebar_outer_active") && (o = !0),
            null != c && (c.innerText = "Adding...",
            _ = c),
            e.methods.addProductToCart(l, i, _, a, n, t, o)
        }
    }
    function v(t) {
        O(),
        t.classList.add("inc_loading"),
        e.clientConfig.offset = 0,
        e.clientConfig.slidevalue = 0;
        let c = 2;
        if (window.innerWidth >= 820 && (c = 3),
        document.querySelector(".inc_pdp_bundle_product_list_main_block").setAttribute("style", "margin-left: 0"),
        document.querySelectorAll(".inc_pdp_block .inc_product_module_block").length > c && (document.querySelector(".inc_pdp_bundle_product_left-btn_block").setAttribute("style", "pointer-events: none;opacity:0.5"),
        document.querySelector(".inc_pdp_bundle_product_left-btn_img").setAttribute("style", "opacity:0.5"),
        document.querySelector(".inc_pdp_bundle_product_right-btn_block").setAttribute("style", "pointer-events: auto;opacity:1"),
        document.querySelector(".inc_pdp_bundle_product_right-btn_img").setAttribute("style", "opacity:1")),
        e.config.disablebtn == d) {
            let c = t;
            e.config.disablebtn = !1,
            c.classList.add("inc_loading");
            let i = !1;
            e.methods.addBundleToCart(c, i)
        }
    }
    function g() {
        document.querySelector("html").classList.remove("inc_overlay"),
        e.methods.hideSidebar(),
        e.config.pdpaddedProductList = [],
        e.clientConfig.offset = 0,
        e.clientConfig.slidevalue = 0
    }
    function k(t) {
        let c = t.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        c.classList.contains("inc_product_module_block") == l && (c = t.parentNode.parentNode.parentNode.parentNode.parentNode);
        let i = e.methods.checkVariantSelection(c)
          , o = c.getAttribute("data-sku")
          , r = new e.classes.FindObj({
            id: o
        })
          , n = c.querySelector(".inc_product_desc_add_img");
        if (1 == i && (t.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("inc_product_showcase_block") == d || t.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("inc_product_modal_block") == d) && e.config.disablebtn == d) {
            e.config.disablebtn = !1;
            let t = c.querySelector(".inc_product_modal_block .inc_product_desc_add_text")
              , i = c.querySelector(".inc_product_add_text");
            "pdp" == e.config.pageType && e.config.recommendation == d && null != document.querySelector(".inc_af_block") && null == document.querySelector(".sidebar_outer.sidebar_outer_active") && (i = c.querySelector(".inc_product_variant_simple_text span"));
            let o = !1;
            t.innerText = "Adding...",
            i.innerText = "Adding...";
            let l = c.querySelector(".inc_product_variant_simple_text");
            l.innerText = "Adding...",
            e.methods.addProductToCart(r, c, i, n, l, t, o)
        }
    }
    function h(e, t) {
        e.setAttribute("data-id", t.id),
        e.setAttribute("data-sku", t.sku),
        e.setAttribute("data-main_id", t.mainId),
        e.setAttribute("data-bundle_id", t.bundleId),
        e.setAttribute("data_main_variant", t.mainProdVariant),
        e.setAttribute("data-category_name", t.categoryName),
        e.setAttribute("product_type", t.ProductType),
        e.classList.add(t.ProductType)
    }
    function f(e, t, c) {
        if (null != e.finish && "" != e.finish) {
            c = !0;
            let i = p("div", "inc_prod_finish_block");
            t.appendChild(i);
            let o = p("div", "inc_prod_finish_title");
            o.innerText = "Finish",
            i.appendChild(o);
            let r = p("div", "inc_prod_finish_text");
            r.innerText = e.finish,
            i.appendChild(r)
        }
        if (null != e.coverage && "" != e.coverage) {
            c = !0;
            let i = p("div", "inc_prod_coverage_block");
            t.appendChild(i);
            let o = p("div", "inc_prod_coverage_title");
            o.innerText = "Coverage",
            i.appendChild(o);
            let r = p("div", "inc_prod_coverage_text");
            r.innerText = e.coverage,
            i.appendChild(r)
        }
        if (null != e.wasPrice && "" != e.wasPrice) {
            c = !0;
            let i = p("div", "inc_prod_undertone_block");
            t.appendChild(i);
            let o = p("div", "inc_prod_undertone_title");
            o.innerText = "Undertone",
            i.appendChild(o);
            let r = p("div", "inc_prod_undertone_text");
            r.innerText = e.wasPrice,
            i.appendChild(r)
        }
        if (null != e.skinType && "" != e.skinType) {
            c = !0;
            let i = p("div", "inc_prod_skinType_block");
            t.appendChild(i);
            let o = p("div", "inc_prod_skinType_title");
            o.innerText = "Skin Type",
            i.appendChild(o);
            let r = p("div", "inc_prod_skinType_text");
            r.innerText = e.skinType,
            i.appendChild(r)
        }
        return c
    }
    function S(t, c, i) {
        let o = 0;
        c.otherImageList.slice().forEach((function(r) {
            let d = r
              , l = p("div", "inc_product_img_gallery_list_item_block")
              , n = '<div class="inc_product_img_gallery_list_item_img_block"><div class="inc_product_img_gallery_list_item_img"><img class="inc_lazy" data-src="' + d + '" src="' + d + '" role="img" aria-label="Image"  alt="' + c.name + '"></div></div><div class="inc_product_img_gallery_list_item_text_block"><div class="inc_product_img_gallery_list_item_text"></div></div>';
            l.innerHTML = n;
            let _ = l.querySelector(".inc_product_img_gallery_list_item_img")
              , a = l.querySelector(".inc_product_img_gallery_list_item_img img");
            a.src = d,
            a.setAttribute("alt", c.name),
            a.setAttribute("role", "img"),
            a.setAttribute("aria-label", "Image"),
            a.setAttribute("onerror", "this.src='" + e.config.noimage + "'"),
            c.otherImageList.length > 4 && _.classList.add("OthImg4"),
            l.setAttribute("index", o),
            l.addEventListener("click", (function() {
                Array.prototype.forEach.call(i.querySelectorAll(".inc_product_img_gallery_list_item_block"), (function(e) {
                    e.classList.remove("inc_active")
                }
                )),
                l.classList.add("inc_active");
                let t = this.querySelector("img").src
                  , c = i.querySelector(".inc_product_img_main_img");
                c.querySelector("img").src = t,
                c.querySelector("img").setAttribute("onerror", "this.src='" + e.config.noimage + "'")
            }
            )),
            t.appendChild(l),
            0 == o && l.classList.add("inc_active"),
            c.otherImageList.length > 5 && l.parentNode.classList.add("flex-start"),
            o++
        }
        ))
    }
    function q(t, c) {
        let i = t.querySelector(".inc_product_desc_add_text")
          , o = t.querySelector(".inc_product_qty_input_text")
          , r = t.querySelector(".inc_product_qty_block")
          , l = t.querySelector(".inc_product_qty_block")
          , n = t.querySelector(".inc_product_qty_down_block")
          , a = t.querySelector(".inc_product_qty_up_block")
          , s = p("input");
        function u(t, c, i) {
            0 == t.value.length && (t.value = 1),
            0 == t.value && (t.value = 1),
            t.value > 99 && (t.value = 99),
            99 == t.value && (a.classList.add("maxqty"),
            l.classList.remove("singleqty")),
            t.value < 99 && a.classList.remove("maxqty"),
            t.value > 1 && l.classList.remove("singleqty");
            let o = c.parentNode.parentNode
              , r = o.querySelector(".inc_product_showcase_block").querySelector(".inc_product_block")
              , d = o.querySelector(".inc_product_modal_block").querySelector(".inc_product_block");
            r.querySelector(".inc_product_qty_block").querySelector("input").value = parseInt(t.value),
            d.querySelector(".inc_product_qty_input_text input").value = parseInt(t.value);
            let n = c.getAttribute("data-id")
              , _ = parseInt(t.value)
              , s = c.getAttribute("data-main_id")
              , u = c.getAttribute("data-bundle_id")
              , p = c.querySelector(".inc_product_desc_title_text").textContent
              , m = c.querySelector(".inc_product_desc_ecirp_active_text").textContent.replace("£", "");
            "Added" != i.textContent && "Update" != i.textContent || e.methods.updateBundleCart({
                sku: n,
                qty: _
            }, "add", s, u, p, m),
            1 == t.value && l.classList.add("singleqty")
        }
        s.setAttribute("type", "number"),
        s.setAttribute("aria-label", "quantity"),
        s.setAttribute("min", 1),
        s.setAttribute("max", 99),
        s.setAttribute("maxlength", 99),
        s.value = 1,
        s.setAttribute("old_qty", "1"),
        s.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}"),
        s.setAttribute("onKeyPress", "if(this.value.length==3) return false;"),
        s.setAttribute("oninput", "validity.valid||(value='');"),
        s.addEventListener("keydown", (function(e) {
            let c = this
              , o = e.which || e.keyCode;
            if (13 === o)
                e.preventDefault();
            else if (-1 != window.jQuery.inArray(e.keyCode, _) || 65 === o && (e.ctrlKey || e.metaKey) || o >= 35 && o <= 40)
                return;
            setTimeout((function() {
                u(c, t, i)
            }
            ), 50)
        }
        )),
        s.addEventListener("focusout", (function() {
            let e = this;
            setTimeout((function() {
                u(e, t, i)
            }
            ), 50)
        }
        )),
        o.appendChild(s);
        let m = document.createElement("span");
        m.classList.add("inc_add_text"),
        o.appendChild(m),
        n.addEventListener("click", (function() {
            let o = this.parentNode.parentNode.parentNode.querySelector(".inc_product_qty_input_text input")
              , n = t.parentNode.parentNode
              , _ = n.querySelector(".inc_product_showcase_block").querySelector(".inc_product_block")
              , s = n.querySelector(".inc_product_modal_block").querySelector(".inc_product_block");
            "inc_product_modal_block inc_active" != o.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className && 1 == o.value && _.querySelector(".inc_product_desc_add_block").click(),
            o.value = o.value - 1 < 1 ? 1 : o.value - 1,
            parseInt(o.value) <= 99 && a.classList.remove("maxqty"),
            _.querySelector(".inc_product_qty_block").querySelector("input").value = parseInt(o.value),
            s.querySelector(".inc_product_qty_input_text input").value = parseInt(o.value);
            let u = t.getAttribute("data-id")
              , p = parseInt(o.value)
              , m = t.getAttribute("data-bundle_id")
              , b = t.getAttribute("data-main_id")
              , y = t.querySelector(".inc_product_desc_title_text").innerText
              , v = t.querySelector(".inc_product_desc_ecirp_active_text").innerText.replace("£", "");
            1 == parseInt(o.value) && r.classList.contains("singleqty") == d ? "Added" != i.textContent && "Update" != i.textContent && i.textContent != e.config.AddedText && i.textContent != e.config.UpdateText || "pdp" == e.config.pageType && "pdp" == c && e.methods.updateBundleCart({
                sku: u,
                qty: p
            }, "add", b, m, y, v) : "Added" != i.textContent && "Update" != i.textContent && i.textContent != e.config.AddedText && i.textContent != e.config.UpdateText || e.methods.updateBundleCart({
                sku: u,
                qty: p
            }, "add", b, m, y, v),
            1 == o.value && (l.classList.add("singleqty"),
            n.querySelector(".inc_product_showcase_block .inc_product_qty_block").classList.add("singleqty"),
            s.querySelector(".inc_product_qty_input_text input").parentNode.parentNode.parentNode.parentNode.classList.add("singleqty"))
        }
        )),
        a.addEventListener("click", (function() {
            let c = this.parentNode.parentNode.parentNode.querySelector(".inc_product_qty_input_text input");
            c.value = parseInt(c.value) + 1 > 99 ? 99 : parseInt(c.value) + 1,
            99 == parseInt(c.value) && a.classList.add("maxqty");
            let o = t.parentNode.parentNode
              , d = o.querySelector(".inc_product_showcase_block").querySelector(".inc_product_block")
              , l = o.querySelector(".inc_product_modal_block").querySelector(".inc_product_block");
            d.querySelector(".inc_product_qty_block").querySelector("input").value = parseInt(c.value),
            l.querySelector(".inc_product_qty_input_text input").value = parseInt(c.value),
            l.querySelector(".inc_product_qty_input_text input").parentNode.parentNode.parentNode.parentNode.classList.remove("singleqty"),
            r.classList.remove("singleqty"),
            o.querySelector(".inc_product_showcase_block .inc_product_qty_block").classList.remove("singleqty");
            let n = t.getAttribute("data-id")
              , _ = parseInt(c.value)
              , s = t.getAttribute("data-bundle_id")
              , u = t.getAttribute("data-main_id")
              , p = t.querySelector(".inc_product_desc_title_text").innerText
              , m = t.querySelector(".inc_product_desc_ecirp_active_text").innerText.replace("£", "");
            "Added" != i.textContent && "Update" != i.textContent && i.textContent != e.config.AddedText && i.textContent != e.config.UpdateText || e.methods.updateBundleCart({
                sku: n,
                qty: _
            }, "add", u, s, p, m)
        }
        ))
    }
    function x(e) {
        null != e.querySelector(".inc_product_variant_simple_text.simple") && (e.querySelector(".inc_product_variant_simple_text.simple").textContent = "Add to Bundle",
        e.querySelector(".inc_product_variant_simple_text").setAttribute("title", "Add to Bundle")),
        null != e.querySelector(".inc_product_variant_simple_block") && e.querySelector(".inc_product_variant_simple_block").classList.remove("added_inc"),
        e.querySelector(".inc_product_desc_qty_add_btn_block").classList.remove("added_inc"),
        e.querySelector(".inc_product_add_block").classList.remove("added_inc"),
        e.querySelector(".inc_product_modal_block .inc_product_add_block").classList.remove("added_inc"),
        e.querySelector(".inc_product_desc_att_variant_text").textContent = "Add to Bundle"
    }
    function L(t, c, i, o, r, d) {
        "inc_product_showcase_block" == d.parentNode.classList ? t.innerText = i.att0Array[0].label : t.innerText = i.att0Array[0].label + ": ",
        c.classList.add("inc_active"),
        c.classList.add("inc_total_" + i.att0Array.length),
        i.att0Array.forEach((function(c) {
            let d = p("div", "inc_product_desc_att_size_list_item_img_block")
              , l = p("div", "inc_product_desc_att_size_list_item_img");
            if (d.setAttribute("blocktype", r),
            d.setAttribute("varianttypes", "zero"),
            d.addEventListener("click", (function() {
                let t = this.getAttribute("blocktype")
                  , c = this.getAttribute("varianttypes");
                e.methods.mappvariants(this, t, c)
            }
            )),
            d.classList.add("avail"),
            c.imgSrc.length > 0 || "" != c.colorCode) {
                if ("" == c.colorCode || null == c.colorCode) {
                    let e = p("img");
                    e.setAttribute("alt", c.text),
                    e.src = c.imgSrc,
                    d.setAttribute("data-optionimge", c.imgSrc),
                    d.appendChild(e),
                    t.classList.add("img_tag_avail"),
                    t.style.display = "flex",
                    d.classList.add("img_avail")
                } else {
                    let e = p("span");
                    e.classList.add("color_code"),
                    e.setAttribute("alt", c.text),
                    e.style.backgroundColor = c.colorCode,
                    t.classList.add("img_tag_avail"),
                    d.appendChild(e)
                }
                o.classList.add("img_tag_avail")
            }
            l.innerText = c.text,
            d.setAttribute("data-size", c.text),
            d.setAttribute("datasize", c.text.toLocaleLowerCase()),
            d.setAttribute("data-option", "1"),
            d.setAttribute("data-cpid", c.cpid),
            d.setAttribute("data-optid", c.opt_id),
            d.setAttribute("data-attrid", c.att_id),
            d.setAttribute("title", c.text),
            d.setAttribute("data-child-price", c.prc),
            "size" == i.att0Array[0].code ? d.setAttribute("title", c.text.toUpperCase()) : "letter" == i.att0Array[0].code ? d.setAttribute("title", "Letter " + c.text.toUpperCase()) : "choose" == i.att0Array[0].code ? d.setAttribute("title", "Number " + c.text.toUpperCase()) : d.setAttribute("title", c.text.toUpperCase()),
            d.appendChild(l),
            o.appendChild(d)
        }
        ))
    }
    function A(e, t, c, i, o, r, d) {
        if (s = [],
        e.colorArray.length > 0 && (e.colorArray = e.colorArray.sort((function(e, t) {
            return e.attLebel < t.attLebel ? -1 : e.attLebel > t.attLebel ? 1 : 0
        }
        )),
        e.colorArray.length > 0)) {
            c.innerHTML = "",
            o.classList.add("inc_active"),
            "inc_product_showcase_block" == t.parentNode.classList ? r.innerText = e.colorArray[0].label : r.innerText = e.colorArray[0].label + ": ";
            let l = !1;
            1 == e.colorArray.length && (l = !0),
            e.colorArray.length > 6 && c.classList.add("greater6");
            let n = []
              , _ = 0;
            if (o.classList.add("inc_active"),
            "Select Fabric" == e.colorArray[0].label)
                for (let o = 0; o < e.colorArray[0].attrLength; o++)
                    e.colorArray.forEach((function(e) {
                        -1 == n.indexOf(e.attLebel) && n.push(e.attLebel),
                        n[o] == e.attLebel && (-1 == s.indexOf(e.attLebel) && s.push(e.attLebel),
                        w(e, c, _, i, t, l, d),
                        "Select Fabric" == e.label && (r.innerText = e.label + ": "),
                        _++)
                    }
                    ));
            else
                e.colorArray.forEach((function(e) {
                    w(e, c, _, i, t, l, d),
                    _++
                }
                ))
        }
    }
    function w(t, c, i, o, r, n, _) {
        let a = p("div", "inc_product_desc_att_color_list_item_block")
          , s = p("div", "inc_product_desc_att_color_list_item_img_block")
          , u = p("div", "inc_product_desc_att_color_list_item_img");
        s.setAttribute("blocktype", o),
        s.setAttribute("varianttypes", "color"),
        s.addEventListener("click", (function() {
            if (null != this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement && null != this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement && null != this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement && null != this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
                if ("inc_af_bundles_block" == this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className && "inc_product_showcase_block" == this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className)
                    e.config.onloadam == l && this.parentElement.parentElement.parentElement.click();
                else {
                    let t = this
                      , c = this.getAttribute("blocktype")
                      , i = this.getAttribute("varianttypes");
                    e.methods.mappvariants(t, c, i)
                }
        }
        )),
        C(t, u);
        let m = p("a");
        if (m.innerText = t.text,
        m.title = t.text.toUpperCase(),
        m.addEventListener("click", (function(e) {
            e.preventDefault()
        }
        )),
        u.appendChild(m),
        s.setAttribute("data-color", t.text),
        s.setAttribute("datacolor", t.text.toLocaleLowerCase()),
        null != t.opttext && null != t.opttext && s.setAttribute("datacolorfabric", t.opttext.split("_")[0].toLocaleLowerCase()),
        s.setAttribute("data-option", "0"),
        s.setAttribute("data-cpid", t.cpid),
        s.setAttribute("title", t.text),
        s.setAttribute("data-colorcode", t.colorCode),
        s.setAttribute("data-optionimge", t.imgSrc),
        s.setAttribute("data-optid", t.opt_id),
        s.setAttribute("data-attrid", t.att_id),
        s.setAttribute("data-child-price", t.prc),
        s.style.backgroundColor = t.colorCode,
        null != _ && i > 5 && "pdp" != o) {
            let e = p("a", "inc_more_color");
            return e.innerText = "+",
            e.addEventListener("click", (function(e) {
                e.preventDefault(),
                r.querySelector(".inc_product_desc_title_text").click()
            }
            )),
            void (null == c.querySelector(".inc_more_color") && c.appendChild(e))
        }
        s.appendChild(u),
        a.appendChild(s),
        c.appendChild(a),
        n == d && setTimeout((function() {
            s.click()
        }
        ), 0)
    }
    function N(t, c, i, o, r, d, l) {
        i.sizeArray.length > 0 && (c.parentNode.parentNode.parentNode.classList.add("dropdownstyle"),
        "Color" != i.sizeArray[0].code && (o.innerHTML = "",
        "inc_product_showcase_block" == l.parentNode.classList ? t.innerText = i.sizeArray[0].label : t.innerText = i.sizeArray[0].label + ": ",
        c.classList.add("inc_active"),
        i.sizeArray.forEach((function(c) {
            let l = p("div", "inc_product_desc_att_size_list_item_img_block")
              , n = p("div", "inc_product_desc_att_size_list_item_img");
            if (r.innerText = "- Please Select -",
            l.classList.add("avail"),
            l.setAttribute("blocktype", d),
            l.setAttribute("varianttypes", "size"),
            l.setAttribute("title", c.text),
            l.addEventListener("click", (function() {
                let t = this.getAttribute("blocktype")
                  , c = this.getAttribute("varianttypes");
                e.methods.mappvariants(this, t, c)
            }
            )),
            c.imgSrc.length > 0 || "" != c.colorCode) {
                if ("" == c.colorCode || null == c.colorCode) {
                    let e = p("img");
                    e.setAttribute("alt", c.text),
                    e.src = c.imgSrc,
                    l.setAttribute("data-optionimge", c.imgSrc),
                    l.appendChild(e),
                    t.classList.add("img_tag_avail"),
                    t.style.display = "flex",
                    l.classList.add("img_avail")
                } else {
                    let e = p("span");
                    e.classList.add("color_code"),
                    e.setAttribute("alt", c.text),
                    e.style.backgroundColor = c.colorCode,
                    t.classList.add("img_tag_avail"),
                    l.appendChild(e)
                }
                o.classList.add("img_tag_avail")
            }
            n.innerText = c.text,
            l.setAttribute("data-size", c.text),
            l.setAttribute("datasize", c.text.toLocaleLowerCase()),
            l.setAttribute("data-option", "2"),
            l.setAttribute("data-optid", c.opt_id),
            l.setAttribute("data-attrid", c.att_id),
            l.setAttribute("data-child-price", c.prc),
            "size" == i.sizeArray[0].code ? l.setAttribute("title", c.text.toUpperCase()) : "letter" == i.sizeArray[0].code ? l.setAttribute("title", "Letter " + c.text.toUpperCase()) : "choose" == i.sizeArray[0].code ? l.setAttribute("title", "Number " + c.text.toUpperCase()) : l.setAttribute("title", c.text.toUpperCase()),
            l.appendChild(n),
            o.appendChild(l)
        }
        ))))
    }
    function P(t, c, i, o, r, d) {
        t.att3Array.length > 0 && "Color" != t.att3Array[0].code && (o.innerHTML = "",
        d.innerText = "",
        t.att3Array.forEach((function(d) {
            c.innerText = t.att3Array[0].label,
            i.classList.add("inc_active");
            let l = p("div", "inc_product_desc_att_third_list_item_img_block")
              , n = p("div", "inc_product_desc_att_third_list_item_img");
            l.setAttribute("blocktype", r),
            l.setAttribute("varianttypes", "third"),
            l.addEventListener("click", (function() {
                let t = this.getAttribute("blocktype")
                  , c = this.getAttribute("varianttypes");
                e.methods.mappvariants(this, t, c)
            }
            )),
            l.classList.add("avail"),
            n.innerText = d.text,
            l.setAttribute("data-size", d.text),
            l.setAttribute("datasize", d.text.toLocaleLowerCase()),
            l.setAttribute("data-option", "3"),
            l.setAttribute("data-optid", d.opt_id),
            l.setAttribute("data-attrid", d.att_id),
            l.setAttribute("data-child-price", d.prc),
            l.appendChild(n),
            o.appendChild(l)
        }
        )))
    }
    function C(e, t) {
        let c = !1
          , i = !1;
        if ("" != e.colorCode && null != e.colorCode)
            c = !0;
        else if (e.imgSrc.length > 0)
            if ("" == e.colorCode && "#" != e.imgSrc.charAt(0)) {
                let c = p("img");
                c.setAttribute("alt", e.text),
                c.src = e.imgSrc,
                t.appendChild(c)
            } else
                i = !0;
        if (c == d || i == d) {
            let c = p("span");
            c.setAttribute("alt", e.text),
            c.style.backgroundColor = i == d ? e.imgSrc : e.colorCode,
            t.appendChild(c)
        }
    }
    function T(e) {
        let t = document.querySelectorAll(".inc_recommended_products_list_block .inc_product_module_block").length;
        if ((null == document.querySelector(".inc_recommended_products_list_block .inc_product_module_block") || 1 == t && null != document.querySelector(".sidebar_outer.sidebar_outer_active") || 1 == e) && null != document.querySelector(".inc_recommended_tabs_list_item_block.inc_active")) {
            let e = document.querySelector(".inc_recommended_tabs_list_item_block.inc_active");
            if (null != document.querySelector(".inc_recommended_tabs_list_item_block.inc_active")) {
                if (document.querySelector(".inc_recommended_tabs_list_item_block.inc_active").parentNode.removeChild(e),
                "" == document.querySelector(".inc_recommended_tabs_block").innerText)
                    return document.querySelector(".inc_recommended_products_block").innerHTML = "",
                    void window.location.replace("https://www.leekes.co.uk/checkout/cart/");
                null != document.querySelector(".inc_recommended_tabs_list_item_block") && document.querySelector(".inc_recommended_tabs_list_item_block").click()
            }
        }
    }
    function I(t, c) {
        e.clientConfig.OOS = [],
        e.clientConfig.OOS_MESG = [];
        let i = c;
        e.clientConfig.OOS.push(i),
        e.clientConfig.OOS_MESG.push(t)
    }
    function z(t, c) {
        e.config.disablebtn = !0,
        null != t && t.classList.remove("inc_loading"),
        null != document.querySelector(".inc_pdp_bundle_cart_summary_add_btn_block.inc_loading") && document.querySelector(".inc_pdp_bundle_cart_summary_add_btn_block.inc_loading").classList.remove("inc_loading"),
        e.config.recommendation == l && c == l && null == document.querySelector(".sidebar_outer.sidebar_outer_active") && (O(),
        e.methods.showSidebar(),
        e.methods.updateSidebarBlock())
    }
    function O() {
        let t = e.config.pdpaddedProductList
          , c = e.dataStore.bundleProductsArray
          , i = e.dataStore.methods().getUniqueCatergories();
        for (let o in i) {
            let r = 0;
            for (let d in c) {
                e.dataStore.methods().getFirstProductObjByMainId({
                    mainId: c[d]
                }).categoryName == i[o] && -1 == t.indexOf(c[d]) && r++
            }
            if (0 == r) {
                let e = i[o]
                  , t = document.querySelectorAll(".inc_recommended_tabs_list_item_block");
                if (null != t)
                    for (const c of t) {
                        c.getAttribute("title") == e && null != c && c.parentNode.removeChild(c)
                    }
            }
        }
        if (e.clientConfig.offset = 0,
        e.clientConfig.slidevalue = 0,
        null != c && c.indexOf(t) > 0 && null != document.querySelector(".sidebar_outer .inc_recommended_tabs_list_item_block")) {
            if (null == document.querySelector(".inc_recommended_products_list_block .inc_product_module_block")) {
                let e = document.querySelector(".sidebar_outer .inc_recommended_tabs_list_item_block.inc_active");
                null != e && e.parentNode.removeChild(e)
            }
            null == document.querySelector(".inc_recommended_tabs_list_item_block.inc_active") && null != document.querySelector(".inc_recommended_tabs_list_item_block") && document.querySelector(".inc_recommended_tabs_list_item_block").click()
        }
        null == document.querySelector(".inc_recommended_tabs_list_item_block.inc_active") && null != document.querySelector(".inc_recommended_tabs_list_item_block") && document.querySelector(".inc_recommended_tabs_list_item_block").click()
    }
    function M(e) {
        let t = new XMLHttpRequest;
        t.onreadystatechange = function() {
            if (4 === t.readyState && 200 === t.status && "" != t.responseText && null != t.responseText) {
                let e = t.responseText;
                console.log("track" + e)
            }
        }
        ,
        t.open("POST", "//optimizedby.increasingly.co/ImportData", !0),
        t.setRequestHeader("Content-Type", "application/json"),
        t.send(e)
    }
    function E() {
        let e = new Date;
        return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds() + "." + e.getMilliseconds()
    }
    function j(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    function B(t, c, i, o, r) {
        if ("left_arrow" == i.className || "left_arrow inc_active" == i.className || "left" == o) {
            let t = -1;
            H(e.config.inc_slideIndex += t, t, i, o, r)
        } else {
            let t = 1;
            H(e.config.inc_slideIndex += t, t, i, o, r)
        }
    }
    function H(t, c, i, o, r) {
        let d = i.querySelector(".inc_product_showcase_block .inc_product_img_main_img a")
          , l = i.querySelectorAll(".inc_product_showcase_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block")
          , n = i.querySelectorAll(".inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block")
          , _ = i.querySelector(".inc_product_showcase_block .inc_product_img_main_img a img")
          , a = i.querySelector(".inc_product_modal_block .inc_product_img_main_img a img")
          , s = [];
        s = d.getAttribute("otherImageList").split(",");
        let u = d.getAttribute("imageURL");
        t > s.length && (e.config.inc_slideIndex = 1),
        t < 1 && (e.config.inc_slideIndex = s.length);
        for (let e = 0; e < l.length; e++)
            l[e].classList.remove("inc_active"),
            null != n[e] && n[e].classList.remove("inc_active");
        let p = s[e.config.inc_slideIndex - 1].replace("160x90", "2000x1500");
        if ("null" != p) {
            _.setAttribute("src", p),
            a.setAttribute("src", p),
            _.setAttribute("onerror", "this.src='" + u + "'"),
            a.setAttribute("onerror", "this.src='" + u + "'");
            for (let e = 0; e < l.length; e++)
                l[e].classList.remove("inc_active"),
                n[e].classList.remove("inc_active");
            if (null != l[e.config.inc_slideIndex - 1] && l[e.config.inc_slideIndex - 1].classList.add("inc_active"),
            null != n[e.config.inc_slideIndex - 1] && n[e.config.inc_slideIndex - 1].classList.add("inc_active"),
            "arrow" == r && n.length > 5) {
                let e = i.querySelector(".inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block.inc_active");
                if (null != e) {
                    let t = e.getAttribute("index");
                    5 == t ? n.length >= 6 && n[0].setAttribute("style", "display: none !important;") : 6 == t ? n.length >= 7 && (n[0].setAttribute("style", "display: none !important;"),
                    n[1].setAttribute("style", "display: none !important;")) : 7 == t ? n.length >= 8 && (n[0].setAttribute("style", "display: none !important;"),
                    n[1].setAttribute("style", "display: none !important;"),
                    n[2].setAttribute("style", "display: none !important;")) : 8 == t ? n.length >= 9 && (n[0].setAttribute("style", "display: none !important;"),
                    n[1].setAttribute("style", "display: none !important;"),
                    n[2].setAttribute("style", "display: none !important;"),
                    n[3].setAttribute("style", "display: none !important;")) : 9 == t ? n.length >= 10 && (n[0].setAttribute("style", "display: none !important;"),
                    n[1].setAttribute("style", "display: none !important;"),
                    n[2].setAttribute("style", "display: none !important;"),
                    n[3].setAttribute("style", "display: none !important;"),
                    n[4].setAttribute("style", "display: none !important;")) : 10 == t ? n.length >= 11 && (n[0].setAttribute("style", "display: none !important;"),
                    n[1].setAttribute("style", "display: none !important;"),
                    n[2].setAttribute("style", "display: none !important;"),
                    n[3].setAttribute("style", "display: none !important;"),
                    n[4].setAttribute("style", "display: none !important;"),
                    n[5].setAttribute("style", "display: none !important;")) : 11 == t ? n.length >= 12 && (n[0].setAttribute("style", "display: none !important;"),
                    n[1].setAttribute("style", "display: none !important;"),
                    n[2].setAttribute("style", "display: none !important;"),
                    n[3].setAttribute("style", "display: none !important;"),
                    n[4].setAttribute("style", "display: none !important;"),
                    n[5].setAttribute("style", "display: none !important;"),
                    n[6].setAttribute("style", "display: none !important;")) : (n[0].style.display = "flex",
                    n[1].style.display = "flex",
                    n[2].style.display = "flex",
                    n[3].style.display = "flex",
                    null != n[4] && (n[4].style.display = "flex"),
                    null != n[5] && (n[5].style.display = "flex"),
                    null != n[6] && (n[6].style.display = "flex"))
                }
            }
        }
    }
    e.init = function() {
        switch (e.config.datastoreprod = [],
        e.config.dupDataObjectProducts = [],
        e.methods.addVisitorID(),
        e.config.pageType = e.methods.detectPageType(),
        e.methods.clear(),
        e.config.deviceType = window.innerWidth <= 768 ? "mobile" : "desktop",
        e.config.pageType) {
        case "pdp":
            let t = e.methods.getProductIdFromWebPage();
            null != document.querySelector(".stock.unavailable.outstock") ? (!function(t) {
                let c, i = t, o = 0;
                if (c = JSON.stringify({
                    token: e.config.clientToken,
                    product_id: i,
                    quantity: o
                }),
                null != i) {
                    let e = {
                        eventData: R.encode(c)
                    }
                      , t = "https://gather.increasingly.com/ProductInventoryUpdate"
                      , i = new XMLHttpRequest;
                    i.open("POST", t, !0),
                    i.onreadystatechange = function() {
                        i.readyState == XMLHttpRequest.DONE && i.status
                    }
                    ,
                    i.setRequestHeader("Content-Type", "application/json"),
                    i.send(JSON.stringify(e))
                }
            }(t),
            e.methods.irbReq(t, 5, "catalog_product_view")) : e.methods.irbReq(t, 5, "catalog_product_view");
            break;
        case "cartPage":
            b().length > 0 && setTimeout((()=>{
                e.methods.irbReq(e.config.cartproductids, 12, "checkout_cart_index")
            }
            ), 1e3)
        }
    }
    ,
    e.dataStore = {},
    e.dataStore.methods = function() {
        let t = e.dataStore;
        function c(e, t) {
            return e.sort((function(e, c) {
                let i = e[t]
                  , o = c[t];
                return "string" == typeof i && (i = i.toLowerCase(),
                o = o.toLowerCase(),
                isNaN(i) || isNaN(o) || (i = parseInt(i, 10),
                o = parseInt(o, 10))),
                i < o ? -1 : function(e, t) {
                    return e > t ? 1 : 0
                }(i, o)
            }
            ))
        }
        function i(e, t, c, i) {
            return e[t[c][i].option[0].text] = {},
            e[t[c][i].option[0].text].titleText = t[c][i].option[0].titleText,
            e[t[c][i].option[0].text].colorCode = t[c][i].option[0].colorCode,
            e[t[c][i].option[0].text].imgSrc = t[c][i].option[0].imgSrc,
            e[t[c][i].option[0].text].code = t[c][i].option[0].code,
            e[t[c][i].option[0].text].cpid = t[c][i].option[0].cpid,
            e[t[c][i].option[0].text].attLebel = t[c][i].option[0].att_lebel,
            e[t[c][i].option[0].text].label = t[c][i].option[0].label,
            e[t[c][i].option[0].text].attrLength = t[c][i].option[0].attrLength,
            e[t[c][i].option[0].text].opttext = t[c][i].option[0].opttext,
            e[t[c][i].option[0].text].field1 = t[c][i].option[0].field1,
            e[t[c][i].option[0].text].att_id = t[c][i].option[0].att_id,
            e[t[c][i].option[0].text].opt_id = t[c][i].option[0].opt_id,
            e[t[c][i].option[0].text].prc = t[c][i].option[0].activePriceChild,
            e
        }
        function o(e, t, c, i) {
            return e[t[c][i].option[1].text] = {},
            e[t[c][i].option[1].text].titleText = t[c][i].option[1].titleText,
            e[t[c][i].option[1].text].imgSrc = t[c][i].option[1].imgSrc,
            e[t[c][i].option[1].text].code = t[c][i].option[1].code,
            e[t[c][i].option[1].text].cpid = t[c][i].option[1].cpid,
            e[t[c][i].option[1].text].prc = t[c][i].option[1].activePriceChild,
            e[t[c][i].option[1].text].label = t[c][i].option[1].label,
            e[t[c][i].option[1].text].colorCode = t[c][i].option[1].colorCode,
            e[t[c][i].option[1].text].opt_id = t[c][i].option[1].opt_id,
            e[t[c][i].option[1].text].att_id = t[c][i].option[1].att_id,
            e
        }
        return {
            buildDataStoreObj: function(c) {
                e.config.dupDataObjectProducts = [],
                e.dataStore.clientProductDealsCategory = "";
                let i = [];
                i = e.config.recommendation == d ? c.CategoryRecommendations : c.Bundles,
                null != c.ProductDeals && c.ProductDeals.forEach((function(t) {
                    i.push({
                        BundleId: i[0].BundleId,
                        Products: [i[0].Products[0], t]
                    }),
                    e.dataStore.clientProductDealsCategory = t.CategoryId
                }
                ));
                let o = {}
                  , r = {}
                  , n = [];
                if (null != c.ProductsDetail)
                    for (let e in c.ProductsDetail)
                        Object.prototype.hasOwnProperty.call(c.ProductsDetail, e) && (r[c.ProductsDetail[e].ProductId] = c.ProductsDetail[e]);
                else if (null != c.CategoryRecommendations)
                    for (let e in c.CategoryRecommendations)
                        Object.prototype.hasOwnProperty.call(c.CategoryRecommendations, e) && (r[c.CategoryRecommendations[e].ProductId] = c.CategoryRecommendations[e]);
                let _ = "";
                for (let t in i)
                    if (Object.prototype.hasOwnProperty.call(i, t) && -1 == e.config.dupDataObjectProducts.indexOf(i[t].BundleId)) {
                        e.config.recommendation == l && e.config.dupDataObjectProducts.push(i[t].BundleId),
                        e.config.bundledid.push({
                            bundleids: i[t].BundleId,
                            productids: i[t].ProductIds
                        });
                        let c = i[t]
                          , a = {};
                        e.config.recommendation == l && (a.id = c.BundleId),
                        e.config.recommendation == l && (a.id = c.BundleId,
                        a.totalRegularPrice = c.TotalPrice,
                        a.totalActivePrice = c.TotalSpecialPrice,
                        a.totalBundlePrice = c.TotalBundlePrice,
                        a.totalBundleDiscountPrice = c.DiscountPrice,
                        a.productCount = c.ProductCount);
                        let s = "";
                        s = e.config.recommendation == d ? i : c.ProductIds,
                        e.config.recommendation == l && s && (window.location.pathname == e.config.checkoutpath || e.config.recommendation ? e.config.cartproductids.indexOf(s[0]) >= 0 ? (_ = s[0],
                        n.push(s[1])) : e.config.cartproductids.indexOf(s[1]) >= 0 && (_ = s[1],
                        n.push(s[0])) : (_ = s[0],
                        n.push(s[1]),
                        "cartPage" == e.config.pageType && n.push(s[0]))),
                        e.config.recommendation == d && n.push(i[t].ProductId);
                        for (let t in s)
                            if (Object.prototype.hasOwnProperty.call(s, t)) {
                                let i = r[s[t]] || s[t];
                                if (-1 == e.config.datastoreprod.indexOf(i.ProductId)) {
                                    e.config.datastoreprod.push(i.ProductId),
                                    e.config.recommendation == d && e.config.recommendationProduct.push(i.ProductId);
                                    let t = i.Attributes || "";
                                    if ("" != t && null != t) {
                                        for (let e of t)
                                            "color" != e.attributeCode && "Choose a Colour" != e.attributeCode && "COLOUR" != e.attributeCode && "Choose a Flavour" != e.attributeCode || (e.attributeCode = "Color"),
                                            "SIZE" == e.attributeCode && (e.attributeCode = "Size"),
                                            "size" != e.attributeCode && "Choose a Size" != e.attributeCode || (e.attributeCode = "Size"),
                                            "Choose a Finish" != e.attributeCode && "RETICULE" != e.attributeCode && "CALF" != e.attributeCode && "Choose a Weight" != e.attributeCode && "Choose a Pack Size" != e.attributeCode || (e.attributeCode = "Size_"),
                                            1 == t.length && ("color" == e.attributeCode || "Color" == e.attributeCode || "COLOUR" == e.attributeCode ? e.attributeCode = "Color" : e.attributeCode = "Size");
                                        t = F(t)
                                    }
                                    let r = {}
                                      , n = ""
                                      , s = 0;
                                    for (let e of t) {
                                        if (1 == t.length)
                                            if ("Color" == t[0].attributeCode || "color" == t[0].attributeCode) {
                                                t[0].attributeIdAd = 0,
                                                n = e.attributeValues;
                                                for (let e of n)
                                                    e.opId = 0,
                                                    e.optionId = 0
                                            } else {
                                                t[0].attributeIdAd = 1,
                                                n = e.attributeValues;
                                                for (let e of n)
                                                    e.opId = 1,
                                                    e.optionId = 1
                                            }
                                        else {
                                            null != t[1] && "Color" != t[0].attributeCode && "Color" != t[1].attributeCode && 0 == s && s++,
                                            e.attributeIdAd = s,
                                            n = e.attributeValues;
                                            for (let e of n)
                                                e.opId = e.optionId,
                                                e.optionId = s
                                        }
                                        s++
                                    }
                                    let u = "";
                                    if (t.length)
                                        for (let c in t)
                                            if (Object.prototype.hasOwnProperty.call(t, c)) {
                                                let d = t[c]
                                                  , l = d.attributeValues;
                                                for (let t in l)
                                                    if (Object.prototype.hasOwnProperty.call(l, t)) {
                                                        let c = l[t];
                                                        null == c.childProductId && (c.childProductId = i.ProductId,
                                                        c.childProductSku = i.ProductSku,
                                                        c.childProductName = i.ProductName,
                                                        c.childProductImageUrl = i.ImageURL,
                                                        c.childProductOtherImageUrl = i.OtherImageList,
                                                        c.childProductUrl = i.ProductUrl,
                                                        c.childProductPrice = i.Price,
                                                        c.childProductSpecialPrice = i.SpecialPrice,
                                                        c.childProductDescription = i.Description,
                                                        c.childInternalProductId = i.ProductId),
                                                        c.ProductType = i.ProductType,
                                                        c.mainSKU = i.ProductSku,
                                                        c.childProductIdmain = i.ProductId,
                                                        c.childProductImageUrlMain = i.ImageURL,
                                                        c.childProductPriceMain = i.Price,
                                                        c.childProductSpecialPriceMain = i.SpecialPrice,
                                                        c.PromotionalMessage = i.PromotionalMessage,
                                                        c.childProductNameMain = i.ProductName,
                                                        c.childProductUrlMain = i.ProductUrl,
                                                        c.childreviewsCount = i.RatingCount,
                                                        c.childRating = i.Rating,
                                                        c.childCategoryName = i.CategoryName,
                                                        c.childCategoryId = i.CategoryId,
                                                        c.childProductDescription = i.Description,
                                                        c.Manufacturer = i.Manufacturer,
                                                        u = new e.classes.ProductAttObj(c),
                                                        u.bundledProductId = _,
                                                        u.mainId = i.ProductId,
                                                        u.bundleId = a.id,
                                                        u.sku = u.id,
                                                        u.shortDescription = i.ShortDescription,
                                                        u.option[d.attributeIdAd].id = d.attributeId,
                                                        u.option[d.attributeIdAd].label = d.frontEndLabel,
                                                        u.option[d.attributeIdAd].code = d.attributeCode,
                                                        u.option[d.attributeIdAd].att_id = d.attributeId,
                                                        Object.prototype.hasOwnProperty.call(o, i.ProductId) || (o[i.ProductId] = {}),
                                                        Object.prototype.hasOwnProperty.call(o[i.ProductId], u.id) || (o[i.ProductId][u.id] = {}),
                                                        r = o[i.ProductId][u.id];
                                                        for (let e in u)
                                                            Object.prototype.hasOwnProperty.call(u, e) && ("option" == e ? (Object.prototype.hasOwnProperty.call(r, "option") || (r.option = {}),
                                                            Object.keys(u[e]).forEach((function(t) {
                                                                r[e][t] = u[e][t]
                                                            }
                                                            ))) : r[e] = u[e])
                                                    }
                                            }
                                    0 == t.length && (u = new e.classes.ProductObj(i),
                                    u.bundleId = c.BundleId,
                                    e.config.recommendation == l && (u.bundledProductId = _),
                                    u.sku = u.id,
                                    u.Filed3 = i.Field3 + " | " + i.Field4,
                                    Object.prototype.hasOwnProperty.call(o, u.mainId) || (o[u.mainId] = {}),
                                    o[u.mainId][u.id] = {},
                                    window.MSInputMethodContext && document.documentMode ? o[u.mainId][u.id] = JSON.parse(JSON.stringify(u)) : o[u.mainId][u.id] = Object.assign({}, u))
                                }
                            }
                    }
                t.dataStoreObj = o,
                t.bundleProductsArray = n,
                e.config.recommendation == l && (t.pdpProductId = _),
                t.bundleCartProducts = {}
            },
            getFirstProductObjByMainId: function(t) {
                let c = {}
                  , i = e.dataStore.dataStoreObj;
                try {
                    null != i && null != i[t.mainId] && (c = i[t.mainId][Object.keys(i[t.mainId])[0]])
                } catch (e) {
                    throw console.error("e", e.stack),
                    e
                }
                return c
            },
            getProductById: function(t) {
                let c = {}
                  , i = e.dataStore.dataStoreObj;
                if (Object.prototype.hasOwnProperty.call(t, "id"))
                    for (let e in i)
                        for (let o in i[e])
                            if (null != document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block")) {
                                if (i[e][o].id == t.id && null != i[e][o].bundleId) {
                                    c = i[e][o];
                                    break
                                }
                            } else if (i[e][o].id == t.id) {
                                c = i[e][o];
                                break
                            }
                if (0 == Object.keys(c).length && Object.prototype.hasOwnProperty.call(t, "id"))
                    for (let e in i)
                        for (let o in i[e])
                            if (null != document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block")) {
                                if (i[e][o].id == t.id && null != i[e][o].bundleId && i[e][o].id == t.id) {
                                    c = i[e][o];
                                    break
                                }
                            } else if (i[e][o].id == t.id) {
                                c = i[e][o];
                                break
                            }
                return c
            },
            getProductBySKU: function(t, c) {
                let i = {}
                  , o = e.dataStore.dataStoreObj;
                if (Object.prototype.hasOwnProperty.call(t, "sku"))
                    for (let e in o)
                        for (let r in o[e])
                            if ("sidebar" == c) {
                                if (o[e][r].sku == t.sku && null != o[e][r].bundleId && o[e][r].sku == t.sku) {
                                    i = o[e][r];
                                    break
                                }
                            } else if (o[e][r].sku == t.sku) {
                                i = o[e][r];
                                break
                            }
                return i
            },
            getUniqueCatergories: function() {
                let t = []
                  , c = e.dataStore.dataStoreObj
                  , i = e.dataStore.bundleProductsArray;
                return null != i && i.forEach((function(i) {
                    for (let o in c[i])
                        if (null != c[i][o].bundleId) {
                            -1 == t.indexOf(c[i][o].categoryId) && c[i][o].categoryId != e.dataStore.clientProductDealsCategory && t.push(c[i][o].categoryId)
                        }
                }
                )),
                t
            },
            getProductColorsObj: function(t, o) {
                let r = {}
                  , d = e.dataStore.dataStoreObj
                  , n = {}
                  , _ = [];
                if (Object.prototype.hasOwnProperty.call(t, "mainId"))
                    for (let e in d)
                        if (e == t.mainId)
                            for (let t in d[e])
                                if (null != d[e][t].option[0] && "Color" == d[e][t].option[0].code && null != d[e][t].option && null != d[e][t].option && null != d[e][t].option[0] && null != d[e][t].option[0])
                                    if (null != o) {
                                        let c = null;
                                        c = o.parentNode.parentNode.parentNode.classList.contains("inc_product_desc_att_block") == l ? o.parentNode.parentNode.parentNode.parentNode : o.parentNode.parentNode.parentNode;
                                        let r = ""
                                          , _ = "";
                                        null != o.parentNode ? (r = c.getAttribute("data-zero"),
                                        null != c.getAttribute("data-size") && (_ = c.getAttribute("data-size"))) : r = o.innerText,
                                        "" != r && "" != _ && null != d[e][t].option[1] && null != d[e][t].option[2] ? d[e][t].option[1].text == r && d[e][t].option[2].text == _ && i(n, d, e, t) : "" != r && null != d[e][t].option[1] ? d[e][t].option[1].text == r && i(n, d, e, t) : i(n, d, e, t)
                                    } else
                                        i(n, d, e, t);
                return Object.keys(n).forEach((function(e) {
                    let t = {};
                    t.text = e,
                    t.colorCode = n[e].colorCode,
                    t.imgSrc = n[e].imgSrc,
                    t.titleText = n[e].titleText,
                    t.code = n[e].code,
                    t.cpid = n[e].cpid,
                    t.attLebel = n[e].attLebel,
                    t.label = n[e].label,
                    t.attrLength = n[e].attrLength,
                    t.opttext = n[e].opttext,
                    t.field1 = n[e].field1,
                    t.att_id = n[e].att_id,
                    t.opt_id = n[e].opt_id,
                    t.prc = n[e].prc,
                    _.push(t)
                }
                )),
                "size" == o ? r.sizeArray = c(_, "colorText") : "zero" == o ? r.att0Array = c(_, "colorText") : "third" == o ? r.att3Array = c(_, "colorText") : r.colorArray = c(_, "colorText"),
                r
            },
            getProductSizesObj: function(t, c) {
                let i = {}
                  , o = e.dataStore.dataStoreObj
                  , r = {}
                  , d = []
                  , n = ""
                  , _ = ""
                  , a = ""
                  , s = ""
                  , u = "";
                if (Object.prototype.hasOwnProperty.call(t, "mainId"))
                    for (let e in o)
                        if (e == t.mainId)
                            for (let t in o[e]) {
                                let i = "";
                                if (null != o[e][t].option && null != o[e][t].option[2]) {
                                    if (null != c) {
                                        let d = null;
                                        d = c.parentNode.parentNode.parentNode.classList.contains("inc_product_desc_att_block") == l ? c.parentNode.parentNode.parentNode.parentNode : c.parentNode.parentNode.parentNode;
                                        let p = d.getAttribute("data-zero")
                                          , m = d.getAttribute("data-color");
                                        null == m && (m = ""),
                                        null == p && (p = ""),
                                        "" != p && null != o[e][t].option[1] ? "" != p && "" != m && o[e][t].option[0] ? o[e][t].option[1].text == p && o[e][t].option[0].text == m && (i = "fir_block") : o[e][t].option[1].text == p && (i = "sec_block",
                                        null != o[e][t].option && null != o[e][t].option[2] && (r[o[e][t].option[2].text] = {},
                                        r[o[e][t].option[2].text].titleText = o[e][t].option[2].text,
                                        n = o[e][t].option[2].code,
                                        _ = o[e][t].option[2].cpid,
                                        a = o[e][t].option[2].activePriceChild,
                                        s = o[e][t].option[2].label,
                                        u = o[e][t].option[2].att_id,
                                        r[o[e][t].option[2].text].opt_id = o[e][t].option[2].opt_id,
                                        r[o[e][t].option[2].text].colorCode = o[e][t].option[2].colorCode,
                                        r[o[e][t].option[2].text].imgSrc = o[e][t].option[2].imgSrc)) : null != o[e][t].option && null != o[e][t].option[2] && (i = "empty_")
                                    } else
                                        null != o[e][t].option && null != o[e][t].option[2] && (i = "empty");
                                    "fir_block" != i && "sec_block" != i && "empty" != i && "empty_" != i || null != o[e][t].option && null != o[e][t].option[2] && (r[o[e][t].option[2].text] = {},
                                    r[o[e][t].option[2].text].titleText = o[e][t].option[2].text,
                                    n = o[e][t].option[2].code,
                                    _ = o[e][t].option[2].cpid,
                                    a = o[e][t].option[2].activePriceChild,
                                    s = o[e][t].option[2].label,
                                    u = o[e][t].option[2].att_id,
                                    r[o[e][t].option[2].text].opt_id = o[e][t].option[2].opt_id,
                                    r[o[e][t].option[2].text].colorCode = o[e][t].option[2].colorCode,
                                    r[o[e][t].option[2].text].imgSrc = o[e][t].option[2].imgSrc)
                                }
                            }
                return Object.keys(r).forEach((function(e) {
                    let t = {};
                    t.text = r[e].titleText,
                    t.code = n,
                    t.cpid = _,
                    t.prc = a,
                    t.label = s,
                    t.opt_id = r[e].opt_id,
                    t.colorCode = r[e].colorCode,
                    t.imgSrc = r[e].imgSrc,
                    t.att_id = u,
                    d.push(t)
                }
                )),
                i.sizeArray = d,
                i
            },
            getProductopt3Obj: function(t, c) {
                let i = {}
                  , o = e.dataStore.dataStoreObj
                  , r = {}
                  , n = [];
                if (Object.prototype.hasOwnProperty.call(t, "mainId"))
                    for (let e in o)
                        if (e == t.mainId)
                            for (let t in o[e])
                                if (null != o[e][t].option && null != o[e][t].option && null != o[e][t].option[3] && null != o[e][t].option[3])
                                    if (null != c) {
                                        let i = null;
                                        i = null != c.parentNode.parentNode ? c.parentNode.parentNode.parentNode.classList.contains("inc_product_desc_att_block") == l ? c.parentNode.parentNode.parentNode.parentNode : c.parentNode.parentNode.parentNode : c.parentNode.parentNode,
                                        c.parentNode.parentNode.parentNode.classList.contains("inc_product_desc_att_block") == d && (i = c.parentNode.parentNode.parentNode),
                                        c.parentNode.parentNode.parentNode.parentNode.classList.contains("inc_product_desc_att_block") == d && (i = c.parentNode.parentNode.parentNode.parentNode);
                                        let n = i.getAttribute("data-zero")
                                          , _ = i.getAttribute("data-size")
                                          , a = i.getAttribute("data-color");
                                        null == _ && (_ = ""),
                                        null == a && (a = ""),
                                        "" != n && "" != _ && "" != a ? null != o[e][t].option[1] && null != o[e][t].option[2] && null != o[e][t].option[0] && o[e][t].option[1].text == n && o[e][t].option[2].text == _ && o[e][t].option[0].text == a && (r[o[e][t].option[3].text] = {},
                                        r[o[e][t].option[3].text].colorCode = "",
                                        r[o[e][t].option[3].text].titleText = o[e][t].option[3].titleText,
                                        r[o[e][t].option[3].text].imgSrc = o[e][t].option[3].imgSrc,
                                        r[o[e][t].option[3].text].code = o[e][t].option[3].code,
                                        r[o[e][t].option[3].text].cpid = o[e][t].option[3].cpid,
                                        r[o[e][t].option[3].text].prc = o[e][t].option[3].activePriceChild,
                                        r[o[e][t].option[3].text].label = o[e][t].option[3].label,
                                        r[o[e][t].option[3].text].opt_id = o[e][t].option[3].opt_id,
                                        r[o[e][t].option[3].text].att_id = o[e][t].option[3].att_id) : (r[o[e][t].option[3].text] = {},
                                        r[o[e][t].option[3].text].colorCode = "",
                                        r[o[e][t].option[3].text].titleText = o[e][t].option[3].titleText,
                                        r[o[e][t].option[3].text].imgSrc = o[e][t].option[3].imgSrc,
                                        r[o[e][t].option[3].text].code = o[e][t].option[3].code,
                                        r[o[e][t].option[3].text].cpid = o[e][t].option[3].cpid,
                                        r[o[e][t].option[3].text].prc = o[e][t].option[3].activePriceChild,
                                        r[o[e][t].option[3].text].label = o[e][t].option[3].label,
                                        r[o[e][t].option[3].text].opt_id = o[e][t].option[3].opt_id,
                                        r[o[e][t].option[3].text].att_id = o[e][t].option[3].att_id)
                                    } else
                                        r[o[e][t].option[3].text] = {},
                                        r[o[e][t].option[3].text].colorCode = "",
                                        r[o[e][t].option[3].text].titleText = o[e][t].option[3].titleText,
                                        r[o[e][t].option[3].text].imgSrc = o[e][t].option[3].imgSrc,
                                        r[o[e][t].option[3].text].code = o[e][t].option[3].code,
                                        r[o[e][t].option[3].text].cpid = o[e][t].option[3].cpid,
                                        r[o[e][t].option[3].text].prc = o[e][t].option[3].activePriceChild,
                                        r[o[e][t].option[3].text].label = o[e][t].option[3].label,
                                        r[o[e][t].option[3].text].opt_id = o[e][t].option[3].opt_id,
                                        r[o[e][t].option[3].text].att_id = o[e][t].option[3].att_id;
                return Object.keys(r).forEach((function(e) {
                    let t = {};
                    t.text = e,
                    t.imgSrc = r[e].imgSrc,
                    t.titleText = r[e].titleText,
                    t.code = r[e].code,
                    t.cpid = r[e].cpid,
                    t.prc = r[e].prc,
                    t.label = r[e].label,
                    t.opt_id = r[e].opt_id,
                    t.att_id = r[e].att_id,
                    n.push(t)
                }
                )),
                i.att3Array = n,
                i
            },
            getProductopt0Obj: function(t) {
                let i = {}
                  , r = e.dataStore.dataStoreObj
                  , l = {}
                  , n = [];
                if (Object.prototype.hasOwnProperty.call(t, "mainId"))
                    for (let e in r)
                        if (e == t.mainId)
                            for (let c in r[e])
                                if (null != r[e][c].option && null != r[e][c].option && null != r[e][c].option[1] && null != r[e][c].option[1]) {
                                    let i = !0
                                      , n = ["Connectivity", "Number of SIM", "Device"];
                                    null == r[e][c].option[0] && null == r[e][c].option[1].code || -1 == n.indexOf(r[e][c].option[0]) && -1 == n.indexOf(r[e][c].option[1].code) && (i = !1),
                                    i == d ? o(l, r, e, c) : null != t.colorText ? null != r[e][c].option[0] ? r[e][c].option[0].text.trim().toLocaleLowerCase() == t.colorText.trim().toLocaleLowerCase() && o(l, r, e, c) : r[e][c].option[1].text.trim().toLocaleLowerCase() == t.colorText.trim().toLocaleLowerCase() && o(l, r, e, c) : o(l, r, e, c)
                                }
                return Object.keys(l).forEach((function(e) {
                    let t = {};
                    t.text = e,
                    t.text1 = e.replace("g", "").replace("l", "").replace("k", ""),
                    t.imgSrc = l[e].imgSrc,
                    t.titleText = l[e].titleText,
                    t.code = l[e].code,
                    t.cpid = l[e].cpid,
                    t.prc = l[e].prc,
                    t.label = l[e].label,
                    t.colorCode = l[e].colorCode,
                    t.opt_id = l[e].opt_id,
                    t.att_id = l[e].att_id,
                    n.push(t)
                }
                )),
                i.att0Array = c(n, "colorText"),
                i
            },
            getProductByAtt: function(t) {
                let c = {}
                  , i = ""
                  , o = e.dataStore.dataStoreObj;
                null != t.mainId && null != o && (i = o[t.mainId]);
                for (let e in i)
                    if ("" != t.zeroText && "" != t.sizeText && "" != t.colorText && "" != t.thirdText && null != i[e].option[0] && null != i[e].option[1] && null != i[e].option[2] && null != i[e].option[3]) {
                        if (t.colorText == i[e].option[0].text && t.zeroText == i[e].option[1].text && t.sizeText == i[e].option[2].text && t.thirdText == i[e].option[3].text)
                            return c = i[e],
                            c
                    } else if ("" != t.zeroText && "" != t.sizeText && null != i[e].option[1] && null != i[e].option[2]) {
                        if (t.zeroText == i[e].option[1].text && t.sizeText == i[e].option[2].text)
                            return c = i[e],
                            c
                    } else if ("" != t.zeroText && "" != t.colorText && null != i[e].option[0] && null != i[e].option[1]) {
                        if (t.colorText == i[e].option[0].text && t.zeroText == i[e].option[1].text)
                            return c = i[e],
                            c
                    } else if ("" == t.zeroText && "" == t.sizeText && "" == t.thirdText && "" != t.colorText && null != i[e].option[0]) {
                        if (t.colorText == i[e].option[0].text)
                            return c = i[e],
                            c
                    } else if ("" != t.zeroText && "" == t.sizeText && "" == t.thirdText && "" == t.colorText && null != i[e].option[1]) {
                        if (t.zeroText == i[e].option[1].text)
                            return c = i[e],
                            c
                    } else if (null != i[e].option && null != i[e].option && null != i[e].option[0] && null != i[e].option[0] && t.colorText == i[e].option[0].text || null != i[e].option && null != i[e].option && null != i[e].option[1] && null != i[e].option[1] && t.sizeText == i[e].option[1].text)
                        return c = i[e],
                        c;
                return c
            }
        }
    }
    ,
    e.classes = {},
    e.classes.ProductObj = function(e) {
        this.bundleId = "",
        this.id = null != e && null != e ? e.ProductId : "",
        this.sku = null != e && null != e ? e.ProductSku : "",
        this.mainsku = null != e && null != e ? e.ProductSku : "",
        this.childsku = null != e && null != e ? e.ProductSku : "",
        this.name = null != e && null != e ? e.ProductName : "",
        this.url = e.ProductUrl,
        this.imageURL = e.ImageURL,
        this.regularPrice = e.Price,
        null != e.SpecialPrice && e.SpecialPrice != e.Price ? parseFloat(e.SpecialPrice) > parseFloat(e.Price) ? (this.regularPrice = e.SpecialPrice,
        this.activePrice = e.Price) : this.activePrice = e.SpecialPrice : this.activePrice = e.Price,
        null != e.OtherImageList && null != e.OtherImageList ? this.otherImageList = e.OtherImageList : this.otherImageList = [],
        null != e.Size && null != e.Size ? this.size = e.Size : this.size = "",
        this.option = {},
        this.mainId = null != e && null != e ? e.ProductId : "",
        this.categoryName = null != e && null != e ? e.CategoryName : "",
        this.categoryId = null != e && null != e ? e.CategoryId : "",
        this.description = null != e && null != e ? e.Description : "",
        this.shortDescription = null != e && null != e ? e.ShortDescription : "",
        this.ratingsCount = null != e && null != e ? e.Rating : "",
        this.reviewsCount = null != e && null != e ? e.RatingCount : "",
        null != e.PromotionalMessage ? this.PromotionalMessage = e.PromotionalMessage : this.PromotionalMessage = "",
        null != e.ProductLevelDiscountMessage ? this.ProductLevelDiscountMessage = e.ProductLevelDiscountMessage : this.ProductLevelDiscountMessage = "",
        this.manufacturer = null != e && null != e ? e.Manufacturer : "",
        this.skinType = null != e && null != e ? e.Field3 : "",
        this.wasPrice = null != e && null != e ? e.Field3 : "",
        this.rrpPrice = null != e && null != e ? e.Field4 : "",
        this.savePrice = null != e && null != e ? e.Field5 : "",
        this.coverage = null != e && null != e ? e.Field6 : "",
        this.ProductType = "",
        null != e.ProductType && null != e.ProductType && (this.ProductType = e.ProductType),
        this.regularPriceMain = e.Price,
        null != e.SpecialPrice && e.SpecialPrice != e.Price ? parseFloat(e.SpecialPrice) > parseFloat(e.Price) ? (this.regularPriceMain = e.SpecialPrice,
        this.activePriceMain = e.Price) : this.activePriceMain = e.SpecialPrice : this.activePriceMain = e.Price,
        null != e.ProductName ? this.nameMain = e.ProductName : this.nameMain = "",
        null != e.ImageURL ? this.imageURLMain = e.ImageURL : this.imageURLMain = "",
        this.urlMain = e.ProductUrl
    }
    ,
    e.classes.ProductAttObj = function(e) {
        this.bundleId = "",
        this.id = null != e && null != e ? e.childProductId : "",
        this.sku = null != e && null != e ? e.childProductSku : "",
        this.mainsku = null != e && null != e ? e.mainSKU : "",
        this.childsku = null != e && null != e ? e.childProductSku : "",
        null != e.childProductName ? this.name = e.childProductName : this.name = "",
        this.url = e.childProductUrl,
        this.imageURL = e.childProductImageUrl.replace("pngg", "png"),
        this.regularPrice = null != e && null != e ? e.childProductPrice : "",
        null != e.childProductSpecialPrice && e.childProductSpecialPrice != e.childProductPrice ? parseFloat(e.childProductSpecialPrice) > parseFloat(e.childProductPrice) ? (this.regularPrice = e.childProductSpecialPrice,
        this.activePrice = e.childProductPrice) : this.activePrice = e.childProductSpecialPrice : this.activePrice = e.childProductPrice,
        null != e.PromotionalMessage ? this.PromotionalMessage = e.PromotionalMessage : this.PromotionalMessage = "",
        null != e.productLevelDiscountMessage ? this.ProductLevelDiscountMessage = e.productLevelDiscountMessage : this.ProductLevelDiscountMessage = "",
        this.otherImageList = null != e && null != e ? e.childProductOtherImageUrl : [],
        this.size = "",
        this.option = {},
        this.pricingObj = null != e.childProductField2 ? e.childProductField2 : "",
        null != e && null != e && (this.option[e.optionId] = {},
        this.option[e.optionId].text = e.optionText,
        this.option[e.optionId].titleText = null != e.childProductField2 ? e.childProductField2 : "",
        this.option[e.optionId].imgSrc = null != e.optionImageUrl ? e.optionImageUrl : "",
        this.option[e.optionId].colorCode = null != e.colorCode ? e.colorCode : "",
        this.option[e.optionId].cpid = null != e.childProductId ? e.childProductId : "",
        this.option[e.optionId].opt_id = null != e.opId ? e.opId : "",
        this.option[e.optionId].opttext = e.optionText1,
        this.option[e.optionId].att_lebel = e.att_lebel,
        this.option[e.optionId].field1 = e.childProductField1,
        this.option[e.optionId].attrLength = e.attrLength,
        this.option[e.optionId].activePriceChild = e.attrLength,
        null != e.childProductSpecialPrice && e.childProductSpecialPrice != e.childProductPrice ? parseFloat(e.childProductSpecialPrice) > parseFloat(e.childProductPrice) ? (this.option[e.optionId].activePriceChild = e.childProductSpecialPrice,
        this.option[e.optionId].activePriceChild = e.childProductPrice) : this.option[e.optionId].activePriceChild = e.childProductSpecialPrice : this.option[e.optionId].activePriceChild = e.childProductPrice),
        this.categoryName = null != e && null != e ? e.childCategoryName : "",
        this.categoryId = null != e && null != e ? e.childCategoryId : "",
        this.description = null != e && null != e ? e.childProductDescription : "",
        null != e.ShortDescription ? this.shortDescription = e.ShortDescription : null != e.Field1 ? this.shortDescription = e.Field1 : this.shortDescription = "",
        this.manufacturer = null != e && null != e ? e.Manufacturer : "",
        this.ratingsCount = null != e && null != e ? e.childRating : "",
        this.reviewsCount = null != e && null != e ? e.childreviewsCount : "",
        this.skinType = null != e && null != e ? e.childProductField3 : "",
        this.wasPrice = null != e && null != e ? e.childProductField3 : "",
        this.rrpPrice = null != e && null != e ? e.childProductField4 : "",
        this.savePrice = null != e && null != e ? e.childProductField5 : "",
        this.coverage = null != e && null != e ? e.childProductField6 : "",
        this.ProductType = null != e && null != e ? e.ProductType : "",
        this.regularPriceMain = e.childProductPriceMain,
        this.activePriceMain = e.childProductPriceMain,
        null != e.childProductSpecialPriceMain && e.childProductSpecialPriceMain != e.childProductPriceMain && (parseFloat(e.childProductSpecialPriceMain) > parseFloat(e.childProductPriceMain) ? (this.regularPriceMain = e.childProductSpecialPriceMain,
        this.activePriceMain = e.childProductPrice) : this.activePriceMain = e.childProductSpecialPriceMain),
        this.nameMain = "",
        null != e.childProductNameMain && (this.nameMain = e.childProductNameMain),
        this.imageURLMain = "",
        null != e.childProductImageUrlMain && (this.imageURLMain = e.childProductImageUrlMain),
        this.urlMain = e.childProductUrlMain
    }
    ,
    e.classes.FindObj = function(e) {
        this.id = null != e && null != e ? e.id : "",
        this.sku = null != e && null != e ? e.sku : "",
        this.mainId = null != e && null != e ? e.mainId : "",
        this.colorText = null != e && null != e ? e.colorText : "",
        this.sizeText = null != e && null != e ? e.sizeText : ""
    }
    ,
    e.classes.NWConfig = function(e) {
        this.url = null != e && null != e ? e.url : "",
        this.method = null != e && null != e ? e.method : "GET",
        this.params = null != e && null != e ? e.params : ""
    }
    ,
    e.methods = {},
    e.methods.networkReq = function(t, c) {
        let i = new e.classes.NWConfig(t)
          , o = new XMLHttpRequest;
        o.open(i.method, i.url, !0),
        o.onreadystatechange = function() {
            if (4 === o.readyState && 200 === o.status)
                if ("" != o.response) {
                    if (c(o.response),
                    "pdp" == e.config.pageType) {
                        let t = e.methods.getProductIdFromWebPage();
                        JSON.parse(o.response);
                        e.methods.irbReq_is_tc(t, 10, "catalog_product_view")
                    }
                } else if ("productList" == e.config.pageType)
                    e.config.modal_called = !0;
                else {
                    if (e.config.VariantProduct)
                        return;
                    if (e.config.VariantProduct = !0,
                    "cartPage" == e.methods.detectPageType())
                        return
                }
        }
        ,
        o.send(JSON.stringify(i.params))
    }
    ,
    e.methods.irbReq = function(t, c, i) {
        let o = i || ""
          , r = t
          , d = e.config.clientToken
          , l = c || 5
          , n = "";
        n = "product_ids=" + r + "&category_id=&api_key=" + d + "&page_type=" + o + "&fr=1&client_visitor_id=" + e.config.ivid,
        "pdp" != e.config.pageType && "cartPage" != e.config.pageType && (n = n + "&is_tc=1&no_of_bundles=" + l),
        "https://www.leekes.co.uk/fine-bedding-company-luna-pillow" != window.location.href && "https://www.leekes.co.uk/the-fine-bedding-company-perfect-pair-pillows-white" != window.location.href && "https://www.leekes.co.uk/fine-bedding-company-spundown-firm-support-pillow" != window.location.href && "https://www.leekes.co.uk/lsa-metropolitan-wine-glass-set-of-4" != window.location.href || "productList" == e.config.pageType || "cartPage" == e.config.pageType || (n = "product_ids=&category_id=UGlsbG93cw==&api_key=" + d + "&page_type=" + o + "&set=1&npb=2&client_id=&client_visitor_id=" + e.config.ivid);
        let _ = decodeURI("//rapidload.increasingly.co/increasingly_bundles?irb/" + btoa(n))
          , a = new e.classes.NWConfig;
        return a.url = _,
        this.refreshBundles(a)
    }
    ,
    e.methods.refreshBundles = function(t) {
        let c = e.dataStore;
        e.methods.networkReq(t, (function(t) {
            if (0 == t.length)
                return;
            let i = "";
            i = "object" != typeof t ? JSON.parse(t) : t;
            let o = i;
            if (Object.prototype.hasOwnProperty.call(i, "Bundles") && null != i.Bundles) {
                if (e.config.recommendation = !1,
                i.timeStamp = Date.now(),
                e.dataStore.methods().buildDataStoreObj(o),
                null == c.dataStoreObj || null == c.dataStoreObj)
                    return;
                switch (e.config.pageType) {
                case "pdp":
                    e.methods.createPDPBlock();
                    break;
                case "cartPage":
                    e.methods.createAMBlock();
                    break;
                case "productList":
                    e.config.dupDataObjectProducts = [],
                    e.methods.createSidebarBlock();
                    let t = new e.classes.FindObj;
                    t.id = e.config.plpProductId;
                    let c = document.querySelector(".inc_sidebar_modal_block");
                    c.querySelector(".inc_sidebar_cart_added_block").style.visibilty = "hidden",
                    document.querySelector(".inc_sidebar_modal_block .inc_sidebar_cart_added_block").style.borderBottom = "0px",
                    c.querySelector(".inc_header_item_count_figure_text").innerText = "",
                    c.querySelector(".inc_cart_added_list_block").innerHTML = "",
                    0 == e.dataStore.plpProductQty && (e.dataStore.plpProductQty = 1),
                    e.methods.addProductToSidebarCart(t, "client_add_btn", e.dataStore.plpProductQty, null, null),
                    null != document.querySelector(".ic_popup_module_wrapper.active .inc_popup_close") && document.querySelector(".ic_popup_module_wrapper.active .inc_popup_close").click(),
                    e.methods.showSidebar();
                    let i = setInterval((function() {
                        let t = document.querySelector(".inc_cart_added_product_img img");
                        if (null != t) {
                            clearInterval(i);
                            let c = document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text")
                              , o = document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text")
                              , r = document.querySelector(".inc_just_added_save_pr");
                            if (null != e.config.empty_prod_details[0] && null != e.config.empty_prod_details[0].p_activePrice) {
                                if (null != c) {
                                    let t = +e.config.empty_prod_details[0].p_activePrice * e.dataStore.plpProductQty
                                      , i = +e.config.empty_prod_details[0].regularPrice * e.dataStore.plpProductQty;
                                    if (null != e.config.empty_prod_details[0].regularPrice) {
                                        c.setAttribute("subtotalactiveprice", t),
                                        o.setAttribute("subtotalregularprice", i);
                                        let e = D(t, i);
                                        c.innerHTML = m.format(t).replace(".00", ""),
                                        o.innerHTML = m.format(i).replace(".00", ""),
                                        0 != e && (r.innerHTML = "Save " + m.format(e).replace(".00", ""))
                                    } else {
                                        c.innerHTML = m.format(t).replace(".00", ""),
                                        c.setAttribute("subtotalactiveprice", t),
                                        c.setAttribute("subtotalactiveprice", t),
                                        document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text_block").setAttribute("subtotalregularprice", 0)
                                    }
                                }
                                let i = document.querySelector(".inc_cart_added_product_desc_title_text");
                                null != e.config.empty_prod_details[0].p_name && (i.innerHTML = e.config.empty_prod_details[0].p_name),
                                null != e.config.empty_prod_details[0].p_name && (t.src = e.config.empty_prod_details[0].p_img);
                                let d = document.querySelector(".inc_cart_added_product_desc_ecirp_active_text");
                                null != d && null != e.config.empty_prod_details[0].p_activePrice && (d.innerHTML = m.format(e.config.empty_prod_details[0].p_activePrice));
                                let l = document.querySelector(".inc_cart_added_product_desc_att_size_text");
                                "undefined" != e.config.empty_prod_details[0].size && "undefined" != e.config.empty_prod_details[0].color ? l.innerHTML = "colour: " + e.config.empty_prod_details[0].color.toLowerCase() + " , size: " + e.config.empty_prod_details[0].size.toLowerCase() : l.innerHTML = "size: " + e.config.empty_prod_details[0].size.toLowerCase()
                            }
                        }
                    }
                    ), 100)
                }
            } else if (null != i.CategoryRecommendations && Object.prototype.hasOwnProperty.call(i, "CategoryRecommendations") && i.CategoryRecommendations.length > 0) {
                if (i.timeStamp = Date.now(),
                e.config.recommendation = !0,
                e.dataStore.methods().buildDataStoreObj(o),
                null == c.dataStoreObj || null == c.dataStoreObj)
                    return;
                "pdp" == e.config.pageType && e.methods.createAMBlock("PDP")
            }
        }
        ))
    }
    ,
    e.methods.irbReq_is_tc = function(t, c, i) {
        let o = i || ""
          , r = t
          , d = e.config.clientToken
          , l = c || 5
          , n = e.config.ivid
          , _ = decodeURI("//rapidload.increasingly.co/increasingly_bundles?irb/" + btoa("product_ids=" + r + "&api_key=" + d + "&page_type=" + o + "&fr=1&client_visitor_id=" + n + "&is_tc=1&no_of_bundles=" + l))
          , a = new e.classes.NWConfig;
        a.url = _;
        let s = new XMLHttpRequest;
        s.open("GET", a.url, !0),
        s.onreadystatechange = function() {
            4 === s.readyState && 200 === s.status && "" != s.response && "pdp" == e.config.pageType && function(t, c) {
                let i = ""
                  , o = {}
                  , r = "";
                if (null != t.ProductsDetail)
                    for (let e in t.ProductsDetail)
                        o[t.ProductsDetail[e].ProductId] = t.ProductsDetail[e];
                else if (null == t.ProductsDetail || "null" == t.ProductsDetail)
                    for (let e in t.CategoryRecommendations)
                        o[t.CategoryRecommendations[e].ProductId] = t.CategoryRecommendations[e];
                i = "recommendation" == c ? t.CategoryRecommendations : t.Bundles;
                for (let t in i)
                    if (Object.prototype.hasOwnProperty.call(i, t) && -1 == e.config.dupDataObjectProducts.indexOf(i[t].BundleId)) {
                        "recommendation" != c && e.config.dupDataObjectProducts.push(i[t].BundleId),
                        e.config.bundledid.push({
                            bundleids: i[t].BundleId,
                            productids: i[t].ProductIds
                        });
                        let d = i[t]
                          , l = {};
                        "recommendation" != c && (l.id = d.BundleId,
                        l.totalRegularPrice = d.TotalPrice,
                        l.totalActivePrice = d.TotalSpecialPrice,
                        l.totalBundlePrice = d.TotalBundlePrice,
                        l.totalBundleDiscountPrice = d.DiscountPrice,
                        l.productCount = d.ProductCount);
                        let n = "";
                        n = "recommendation" == c ? i : d.ProductIds,
                        "recommendation" != c && n.length && null != e.dataStore.bundleProductsArray && (r = n[0],
                        e.dataStore.bundleProductsArray.push(n[1]));
                        for (let t in n)
                            if (Object.prototype.hasOwnProperty.call(n, t)) {
                                let i = o[n[t]] || n[t];
                                if ("recommendation" == c && (e.config.datastoreprod = []),
                                -1 == e.config.datastoreprod.indexOf(i.ProductId)) {
                                    "recommendation" == c && e.config.recommendationProduct.push(i.ProductId);
                                    let t = i.Attributes || "";
                                    if ("" != t && null != t) {
                                        for (let e of t)
                                            "color" != e.attributeCode && "Choose a Colour" != e.attributeCode && "COLOUR" != e.attributeCode && "Choose a Flavour" != e.attributeCode || (e.attributeCode = "Color"),
                                            "size" != e.attributeCode && "Choose a Size" != e.attributeCode || (e.attributeCode = "Size"),
                                            "SIZE" == e.attributeCode && (e.attributeCode = "Size"),
                                            "Choose a Finish" != e.attributeCode && "RETICULE" != e.attributeCode && "CALF" != e.attributeCode && "Choose a Weight" != e.attributeCode && "Choose a Pack Size" != e.attributeCode || (e.attributeCode = "Size_"),
                                            1 == t.length && ("color" == e.attributeCode || "Color" == e.attributeCode || "COLOUR" == e.attributeCode ? e.attributeCode = "Color" : e.attributeCode = "Size");
                                        t = F(t)
                                    }
                                    let o = {}
                                      , n = ""
                                      , _ = 0;
                                    for (let e of t) {
                                        if (1 == t.length)
                                            if ("Color" == t[0].attributeCode || "color" == t[0].attributeCode) {
                                                t[0].attributeIdAd = 0,
                                                n = e.attributeValues;
                                                for (let e of n)
                                                    e.opId = 0,
                                                    e.optionId = 0
                                            } else {
                                                t[0].attributeIdAd = 1,
                                                n = e.attributeValues;
                                                for (let e of n)
                                                    e.opId = 1,
                                                    e.optionId = 1
                                            }
                                        else {
                                            null != t[1] && "Color" != t[0].attributeCode && "Color" != t[1].attributeCode && 0 == _ && _++,
                                            e.attributeIdAd = _,
                                            n = e.attributeValues;
                                            for (let e of n)
                                                e.opId = _,
                                                e.optionId = _
                                        }
                                        _++
                                    }
                                    if (t.length)
                                        for (let c in t) {
                                            let d = t[c]
                                              , n = d.attributeValues;
                                            for (let t in n) {
                                                let c = n[t];
                                                null == c.childProductId && (c.childProductId = i.ProductId,
                                                c.childProductSku = i.ProductSku,
                                                c.childProductName = i.ProductName,
                                                c.childProductImageUrl = i.ImageURL,
                                                c.childProductOtherImageUrl = i.OtherImageList,
                                                c.childProductUrl = i.ProductUrl,
                                                c.childProductPrice = i.Price,
                                                c.childProductSpecialPrice = i.SpecialPrice,
                                                c.childProductDescription = i.Description,
                                                c.childInternalProductId = i.ProductId),
                                                c.ProductType = i.ProductType,
                                                c.mainSKU = i.ProductSku,
                                                c.childProductIdmain = i.ProductId,
                                                c.childProductImageUrlMain = i.ImageURL,
                                                c.childProductPriceMain = i.Price,
                                                c.childProductSpecialPriceMain = i.SpecialPrice,
                                                c.childProductNameMain = i.ProductName,
                                                c.PromotionalMessage = i.PromotionalMessage,
                                                c.childProductUrlMain = i.ProductUrl,
                                                c.Field1 = i.Field1,
                                                c.Manufacturer = i.Manufacturer,
                                                c.childreviewsCount = i.RatingCount,
                                                c.childRating = i.Rating,
                                                c.childCategoryName = i.CategoryName,
                                                c.childCategoryId = i.CategoryId,
                                                c.childProductDescription = i.Description;
                                                let _ = new e.classes.ProductAttObj(c);
                                                _.bundledProductId = r,
                                                _.mainId = i.ProductId,
                                                _.bundleId = l.id,
                                                _.sku = _.id,
                                                _.option[d.attributeIdAd].id = d.attributeId,
                                                _.option[d.attributeIdAd].label = d.frontEndLabel,
                                                _.option[d.attributeIdAd].code = d.attributeCode,
                                                _.option[d.attributeIdAd].att_id = d.attributeId,
                                                Object.prototype.hasOwnProperty.call(e.dataStore.dataStoreObj, i.ProductId) || (e.dataStore.dataStoreObj[i.ProductId] = {}),
                                                Object.prototype.hasOwnProperty.call(e.dataStore.dataStoreObj[i.ProductId], _.id) || (e.dataStore.dataStoreObj[i.ProductId][_.id] = {}),
                                                o = e.dataStore.dataStoreObj[i.ProductId][_.id];
                                                for (let e in _)
                                                    "option" == e ? (Object.prototype.hasOwnProperty.call(o, "option") || (o.option = {}),
                                                    Object.keys(_[e]).forEach((function(t) {
                                                        o[e][t] = _[e][t]
                                                    }
                                                    ))) : o[e] = _[e]
                                            }
                                        }
                                    if (0 == t.length) {
                                        let t = new e.classes.ProductObj(i);
                                        t.bundleId = d.BundleId,
                                        t.bundledProductId = r,
                                        t.sku = t.id,
                                        t.Filed3 = i.Field3 + " | " + i.Field4,
                                        null == e.dataStore.dataStoreObj || Object.prototype.hasOwnProperty.call(e.dataStore.dataStoreObj, t.mainId) || (e.dataStore.dataStoreObj[t.mainId] = {}),
                                        null != e.dataStore.dataStoreObj && (e.dataStore.dataStoreObj[t.mainId][t.id] = {},
                                        window.MSInputMethodContext && document.documentMode ? e.dataStore.dataStoreObj[t.mainId][t.id] = JSON.parse(JSON.stringify(t)) : e.dataStore.dataStoreObj[t.mainId][t.id] = Object.assign({}, t))
                                    }
                                }
                            }
                    }
                setTimeout((function() {
                    "recommendation" == c ? e.methods.createAMBlock("PDP") : e.methods.createPDPBlock("sidebar")
                }
                ), 200)
            }(JSON.parse(s.response))
        }
        ,
        s.send(JSON.stringify(a.params))
    }
    ,
    e.methods.get_product_ratings = function(e, t, c) {
        let i = document.createElement("span");
        i.classList.add("rating_count"),
        c.appendChild(i),
        document.createElement("span").classList.add("rating_avg"),
        null == t ? (i.textContent = "0 reviews",
        c.classList.add("inc_hide")) : i.textContent = 1 == t ? "(" + t + " Customer Review)" : "(" + t + " Customer Reviews)";
        let o = document.createElement("span");
        if (null != e && "" != e) {
            let t = e;
            "" != t && null != t && "NaN" != t && "norating" != t || (t = 0),
            t = parseFloat(t).toFixed(1),
            t = t.toString();
            let i = null;
            0 != t && 1 != t && 2 != t && 3 != t && 4 != t && 5 != t && (i = t.replace(".", "-")),
            0 == t && (t = "0-0"),
            1 == t && (t = "1-0"),
            2 == t && (t = "2-0"),
            3 == t && (t = "3-0"),
            4 == t && (t = "4-0"),
            5 == t && (t = "5-0"),
            "" == t && (t = 0),
            null != i && "NaN" != i ? c.classList.add("rating_" + i) : (isNaN(i),
            c.classList.add("rating_" + t)),
            o.classList.add("rating_stars"),
            c.appendChild(o)
        } else
            o.innerText = ".",
            o.style.color = "#fff",
            o.classList.add("rating_stars"),
            o.classList.add("noratings"),
            c.appendChild(o)
    }
    ,
    e.methods.getProductIdFromWebPage = function() {
        var t = "";
        return null != document.querySelector(".product-add-form") ? null != document.querySelector(".product-add-form form") && null != document.querySelector(".product-add-form form input[name=product]") && (t = document.querySelector(".product-add-form form input[name=product]").value) : document.querySelector(".product-info-main .product-info-price .price-box") && (t = document.querySelector(".product-info-main .product-info-price .price-box").getAttribute("data-product-id")),
        e.config.Product_id = t,
        t
    }
    ,
    e.methods.detectPageType = function() {
        return null != document.querySelector(".catalog-product-view") ? "pdp" : null != document.querySelector(".checkout-cart-index") ? "cartPage" : void 0
    }
    ,
    e.methods.showSidebar = function() {
        let t = document.querySelector(".inc_sidebar_modal_block");
        if (null != t) {
            if (null == document.querySelector(".inc_recommended_tabs_list_item_block") || e.config.sidebarFirstLoad == l)
                return void setTimeout((()=>{
                    window.location.replace("https://www.leekes.co.uk/checkout/cart/")
                }
                ), 1e3);
            let c = document.querySelectorAll(".inc_recommended_tabs_list_item_block");
            for (let e = 0; e < c.length; e++) {
                if (null != document.querySelector(".inc_recommended_tabs_list_item_block") && (c[e].click(),
                null == document.querySelector(".inc_recommended_products_list_block .inc_product_module_block"))) {
                    let e = document.querySelector(".inc_recommended_tabs_list_item_block.inc_active");
                    null != e && e.parentNode.removeChild(e)
                }
                null != document.querySelector(".inc_recommended_tabs_list_item_block") && document.querySelector(".inc_recommended_tabs_list_item_block").click()
            }
            if (null != document.querySelector(".inc_recommended_tabs_list_item_block")) {
                let e = document.querySelector(".sidebar_outer");
                if (null != e) {
                    document.querySelector("html").classList.add("inc_overlay");
                    let c = document.querySelector(".inc_sidebar_overlay_block");
                    null != c && (c.style.display = "block"),
                    e.style.display = "block",
                    t.style.display = "block",
                    t.classList.add("inc_active"),
                    e.classList.add("sidebar_outer_active")
                }
            }
        }
        null != document.querySelector(".inc_pdp_bundle_cart_summary_add_btn_block") && document.querySelector(".inc_pdp_bundle_cart_summary_add_btn_block").classList.remove("inc_loading")
    }
    ,
    e.methods.hideSidebar = function() {
        let t = document.querySelector(".inc_sidebar_modal_block");
        e.config.sidebarremovedprod = [],
        e.bundles = !0,
        document.querySelector("html").style = "",
        document.querySelector("html").classList.remove("inc_overlay"),
        document.querySelector("body").classList.remove("inc_popup_open");
        let c = document.querySelector(".sidebar_outer");
        null != c && (document.querySelector(".inc_sidebar_overlay_block").style.display = "none",
        t.style.display = "none",
        c.style.display = "none",
        c.classList.remove("sidebar_outer_active"),
        t.classList.remove("inc_active")),
        setTimeout((function() {
            null != document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block") && document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block").classList.remove("is_special_ecirp");
            let t = document.querySelectorAll(".inc_pdp_bundle_product_list_main_block .inc_product_module_block").length;
            t > 2 && null != t && (e.clientConfig.offset = 0,
            e.clientConfig.slidevalue = 0,
            null != document.querySelector(".inc_pdp_bundle_product_left-btn_img") && document.querySelector(".inc_pdp_bundle_product_left-btn_img").setAttribute("style", "opacity:0.5"),
            null != document.querySelector(".inc_pdp_bundle_product_left-btn_block") && document.querySelector(".inc_pdp_bundle_product_left-btn_block").setAttribute("style", "pointer-events: none;opacity:0.5"),
            null != document.querySelector(".inc_pdp_bundle_product_list_main_block") && document.querySelector(".inc_pdp_bundle_product_list_main_block").setAttribute("style", "margin-left: 0"),
            null != document.querySelector(".inc_pdp_bundle_product_right-btn_img") && document.querySelector(".inc_pdp_bundle_product_right-btn_img").setAttribute("style", "opacity:0.5"),
            null != document.querySelector(".inc_pdp_bundle_product_right-btn_block") && document.querySelector(".inc_pdp_bundle_product_right-btn_block").setAttribute("style", "pointer-events: auto;opacity:1"))
        }
        ), 30),
        null != document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_rrp_text") && (document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_rrp_text").setAttribute("subtotalrrpprice", 0),
        document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_rrp_text").innerHTML = ""),
        null != document.querySelector(".inc_just_added_save_pr") && (document.querySelector(".inc_just_added_save_pr").innerText = "")
    }
    ,
    e.methods.createAMBlock = function(t) {
        if (null == e.dataStore.dataStoreObj.undefined) {
            e.config.onloadam = !0,
            document.querySelector("html").classList.add("inc-prevent-hor-scroll");
            let c = p("div", "inc_af_block");
            c.classList.add("af_cart_page"),
            c.innerHTML = '<div class="inc_af_title_block" style="clear: both;"><div class="inc_af_title_text_block"><div class="inc_af_title_text"></div><div class="inc_af_modal_close"></div></div></div><div class="inc_af_bundles_block"><div class="inc_af_left_block"><div class="inc_af_left_btn_block"><div class="inc_af_left_btn_img_block"><div class="inc_af_left_btn_img"></div></div></div></div><div class="inc_af_product-list-main_block"><div class="inc_af_product-list_block"></div></div><div class="inc_af_right_block"><div class="inc_af_right_btn_block"><div class="inc_af_right_btn_img_block"><div class="inc_af_right_btn_img"></div></div></div></div></div>',
            c.querySelector(".inc_af_product-list_block").innerHTML = "";
            let i = c.querySelector(".inc_af_title_text_block")
              , r = c.querySelector(".inc_af_product-list_block")
              , d = e.dataStore.bundleProductsArray;
            "pdp" == e.config.pageType && (e.dataStore.bundleProductsArray.indexOf(e.config.Product_id),
            e.config.cartproductids = []);
            let l = [];
            if ("PDP" == t) {
                let t = 0;
                d.forEach((function(o) {
                    if (-1 == l.indexOf(o)) {
                        l.push(o);
                        let d = e.dataStore.methods().getFirstProductObjByMainId({
                            mainId: o
                        })
                          , n = e.methods.createProductModuleBlock(d.id, "am", !1, c, null, !0);
                        t += 1,
                        "undefined" != n.getAttribute("data-id") && r.appendChild(n),
                        i.innerText = "Best selling similar products"
                    }
                }
                ));
                let o = c.querySelector(".inc_af_product-list_block");
                window.innerWidth < 769 ? window.innerWidth > 600 && t <= 2 && o.classList.add("less_product") : 1 == t ? o.classList.add("inc_one_product") : t <= 3 ? o.classList.add("less_product") : 3 == t && o.classList.add("inc_three_products"),
                1 == t && o.classList.add("inc_one_product")
            } else {
                let t = 0;
                d.length > 0 && d.forEach((function(o) {
                    if (-1 == l.indexOf(o) && (l.push(o),
                    -1 == e.config.cartproductids.indexOf(o))) {
                        let d = e.dataStore.methods().getFirstProductObjByMainId({
                            mainId: o
                        })
                          , l = e.methods.createProductModuleBlock(d.id, "am", !1, c);
                        t += 1,
                        "undefined" != l.getAttribute("data-id") && (i.innerText = "Other customers also viewed",
                        r.appendChild(l),
                        i.innerText = e.config.BeforeYouChecktext)
                    }
                }
                ));
                let o = c.querySelector(".inc_af_product-list_block");
                window.innerWidth < 769 ? window.innerWidth > 600 ? t <= 2 && o.classList.add("less_product") : t <= 3 && o.classList.add("less_product") : 1 == t ? o.classList.add("inc_one_product") : t <= 3 ? o.classList.add("less_product") : 3 == t && o.classList.add("inc_three_products")
            }
            let n = c.querySelectorAll(".inc_product_block");
            Array.prototype.forEach.call(n, (function(e) {
                e.querySelector(".inc_product_desc_add_block").addEventListener("click", (function() {
                    y(this, this.parentNode.parentNode.querySelector(".inc_product_variant_simple_text"))
                }
                ))
            }
            ));
            let _ = 1;
            if (null != c && Array.prototype.forEach.call(document.querySelectorAll(".inc_af_block"), (function(e) {
                e.parentNode.removeChild(e)
            }
            )),
            null == c.querySelector(".inc_af_block .inc_product_showcase_block"))
                return;
            if (1 == c.querySelectorAll(".inc_af_product-list_block .inc_product_module_block").length && c.querySelector(".inc_af_product-list_block").classList.add("inc_one_product"),
            "PDP" == t && "cartPage" !== e.methods.detectPageType()) {
                let e = document.querySelector(".product.info.detailed");
                e.parentNode.insertBefore(c, e)
            } else if (d.length > 0) {
                let e = document.querySelector(".cart-container");
                e && o(c, e)
            }
            let a = c.querySelectorAll(".inc_af_product-list_block .inc_product_modal_block");
            for (let e in a)
                if (Object.prototype.hasOwnProperty.call(a, e)) {
                    let t = a[e].parentNode
                      , c = "";
                    null != t && (c = t.getAttribute("data-main_id")),
                    null != a[e].querySelector(".inc_product_desc_att_zero_block.inc_active") && (null != t.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[data-cpid="' + c + '"]') && null != t.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[data-cpid="' + c + '"] .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block') ? t.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[data-cpid="' + c + '"] .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block').click() : null != a[e].querySelector(".inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block") && a[e].querySelector(".inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block").click()),
                    null != a[e].querySelector(".inc_product_desc_att_color_block.inc_active") ? null != t.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + c + '"]') ? null != t.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + c + '"]') && t.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + c + '"]').click() : null != a[e].querySelector(".inc_product_desc_att_color_list_item_img_block") && a[e].querySelector(".inc_product_desc_att_color_list_item_img_block").click() : null != a[e].querySelector(".inc_product_desc_att_size_list_item_img_block") && a[e].querySelector(".inc_product_desc_att_size_list_item_img_block").click()
                }
            c.querySelector(".inc_af_right_btn_block").style.visibility = "hidden",
            c.querySelector(".inc_af_right_btn_img").style.visibility = "hidden",
            c.querySelector(".inc_af_left_btn_block").style.visibility = "hidden",
            c.querySelector(".inc_af_left_btn_img").style.visibility = "hidden";
            let s = r.querySelectorAll(".inc_product_module_block")
              , u = 0;
            s.length > _ && (c.querySelector(".inc_af_right_btn_block").style.visibility = "visible",
            c.querySelector(".inc_af_left_btn_block").style.visibility = "visible",
            c.querySelector(".inc_af_left_btn_block").setAttribute("style", "pointer-events: none;opacity:0.5"),
            c.querySelector(".inc_af_right_btn_img").style.visibility = "visible",
            c.querySelector(".inc_af_left_btn_img").style.visibility = "visible",
            c.querySelector(".inc_af_left_btn_img").setAttribute("style", "pointer-events: none;opacity:0.5"));
            let m = 0;
            m = window.innerWidth < 800 ? 2 : window.innerWidth < 1200 ? 3 : 5,
            s.length <= m && (c.querySelector(".inc_af_right_btn_block").style.visibility = "hidden",
            c.querySelector(".inc_af_right_btn_img").style.visibility = "hidden",
            c.querySelector(".inc_af_left_btn_block").style.visibility = "hidden",
            c.querySelector(".inc_af_left_btn_img").style.visibility = "hidden"),
            c.querySelector(".inc_af_right_btn_block").addEventListener("click", (function() {
                u++,
                u > s.length - 1 && u--;
                let t = document.querySelectorAll(".inc_af_product-list_block .inc_product_module_block").length
                  , i = 0;
                i = window.innerWidth < 800 ? 2 : window.innerWidth < 1200 ? 3 : 5;
                let o = "";
                if (o = document.querySelector(".inc_af_block .inc_product_module_block").clientWidth,
                e.clientConfig.slidevalue_rec + i < t) {
                    c.parentNode.parentNode.querySelector(".inc_af_left_btn_block").setAttribute("style", "pointer-events: auto;opacity:1"),
                    c.parentNode.parentNode.querySelector(".inc_af_left_btn_img").setAttribute("style", "pointer-events: auto;opacity:1"),
                    e.clientConfig.slidevalue_rec++;
                    let t = null;
                    e.clientConfig.offset_rec = parseInt(e.clientConfig.offset_rec) - o + "px",
                    t = c.parentNode.parentNode.querySelector(".inc_af_product-list_block"),
                    t.setAttribute("style", "left:" + e.clientConfig.offset_rec + ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;"),
                    null != document.querySelector(".inc_af_product-list-dots-main_block .inc_dots.inc_active") && document.querySelector(".inc_af_product-list-dots-main_block .inc_dots.inc_active").classList.remove("inc_active"),
                    null != document.querySelectorAll(".inc_af_product-list-dots-main_block .inc_dots")[+e.clientConfig.slidevalue_rec] && document.querySelectorAll(".inc_af_product-list-dots-main_block .inc_dots")[+e.clientConfig.slidevalue_rec].classList.add("inc_active")
                }
                +e.clientConfig.slidevalue_rec + +i == t && (c.parentNode.parentNode.querySelector(".inc_af_right_btn_block").setAttribute("style", "pointer-events: none;opacity:0.5"),
                c.parentNode.parentNode.querySelector(".inc_af_right_btn_img").setAttribute("style", "pointer-events: none;opacity:0.5"))
            }
            )),
            c.querySelector(".inc_af_left_btn_block").addEventListener("click", (function() {
                u--,
                -1 == u && (u = 0),
                -1 == e.clientConfig.slidevalue_rec && (e.clientConfig.slidevalue_rec = 0);
                let t = "";
                if (t = document.querySelector(".inc_af_block .inc_product_module_block").clientWidth,
                e.clientConfig.slidevalue_rec > 0) {
                    c.parentNode.parentNode.querySelector(".inc_af_right_btn_block").setAttribute("style", "pointer-events: auto;opacity:1"),
                    c.parentNode.parentNode.querySelector(".inc_af_right_btn_img").setAttribute("style", "pointer-events: auto;opacity:1"),
                    e.clientConfig.slidevalue_rec--,
                    e.clientConfig.offset_rec = parseInt(e.clientConfig.offset_rec) + t + "px";
                    let i = null;
                    i = c.parentNode.parentNode.querySelector(".inc_af_product-list_block"),
                    i.setAttribute("style", "left:" + e.clientConfig.offset_rec + ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;"),
                    null != document.querySelector(".inc_af_product-list-dots-main_block .inc_dots.inc_active") && document.querySelector(".inc_af_product-list-dots-main_block .inc_dots.inc_active").classList.remove("inc_active"),
                    null != document.querySelectorAll(".inc_af_product-list-dots-main_block .inc_dots")[+e.clientConfig.slidevalue_rec] && document.querySelectorAll(".inc_af_product-list-dots-main_block .inc_dots")[+e.clientConfig.slidevalue_rec].classList.add("inc_active")
                }
                0 == e.clientConfig.slidevalue_rec && (c.parentNode.parentNode.querySelector(".inc_af_left_btn_block").setAttribute("style", "pointer-events: none;opacity:0.5"),
                c.parentNode.parentNode.querySelector(".inc_af_left_btn_img").setAttribute("style", "pointer-events: none;opacity:0.5"))
            }
            )),
            setTimeout((function() {
                let t = document.querySelectorAll(".inc_product_img_main_img img");
                for (let c in t)
                    null != t[c] && Object.prototype.hasOwnProperty.call(t, c) && t[c].setAttribute("style", e.config.styleft)
            }
            ), 2e3)
        }
        let c = document.querySelectorAll(".checkout-button--remove")
          , i = b().length;
        if (c)
            for (let t = 0; t < c.length; t++)
                c[t].addEventListener("click", (function() {
                    setTimeout((()=>{
                        b().length !== i && e.init()
                    }
                    ), 1500)
                }
                ));
        null != document.querySelector(".inc_af_block") && ("cartPage" == e.config.pageType ? document.querySelector(".inc_af_block").classList.add("af_cart_page") : "pdp" == e.config.pageType && document.querySelector(".inc_af_block").classList.add("inc_recommendations")),
        setTimeout((()=>{
            e.config.onloadam = !1
        }
        ), 2e3)
    }
    ,
    e.methods.createPDPBlock = function(c) {
        document.querySelector("html").classList.add("inc_bundles"),
        document.querySelector("html").classList.add("inc-prevent-hor-scroll");
        let i = !1;
        if (null != e.dataStore.dataStoreObj[e.config.Product_id] && null != e.dataStore.dataStoreObj[e.config.Product_id][e.config.Product_id] && "12345679" == e.dataStore.dataStoreObj[e.config.Product_id][e.config.Product_id].bundleId && (i = !0),
        e.bundles != l || "sidebar" == c || "hidesidebar" == c) {
            if ("sidebar" != c && "hidesidebar" != c && (null != e.dataStore.dataStoreObj.undefined || i == l)) {
                let c = p("div", "inc_pdp_block");
                c.innerHTML = '<div class="inc_pdp_title_block"><div class="inc_pdp_title_text_block"><div class="inc_pdp_title_text">Frequently bought together</div></div></div><div class="inc_pdp_bundle_block"><div class="inc_pdp_product-main_block"><div class="mainprodtitletext">This item</div></div><div class="inc_pdp_icon-add_block"><div class="inc_pdp_icon-add_img_block"><div class="inc_pdp_icon-add_img"></div></div></div><div class="inc_pdp_bundle_product_block"><div class="inc_pdp_bundle_product_header_block"><div class="inc_pdp_bundle_product_header_text">Frequently bought with</div></div><div class="inc_pdp_bundle_product_left-btn_block"><div class="inc_pdp_bundle_product_left-btn_img_block"><div class="inc_pdp_bundle_product_left-btn_img" title="Scroll left"></div></div></div><div class="inc_pdp_bundle_product_list_block"><div class="inc_pdp_bundle_product_list_main_block"></div><div class="inc_pdp_bundle_product_list_left_block"><div class="inc_pdp_bundle_product_list_left_btn_block"><div class="inc_pdp_bundle_product_list_left_btn_img_block"><div class="inc_pdp_bundle_product_list_left_btn_img"></div></div></div></div><div class="inc_pdp_bundle_product_list_items_show_more_less_block"><div class="inc_pdp_bundle_product_list_items_show_more_less_text down_wrrow">Show more products</div></div><div class="inc_pdp_bundle_product_list_wrapper_items_block"><div class="inc_pdp_bundle_product_list_wrapper_header_block"><div class="inc_pdp_bundle_product_list_wrapper_header_text_block"></div><div class="inc_pdp_bundle_product_list_wrapper_header_close_block"></div></div><div class="inc_pdp_bundle_product_list_items_block"></div></div><div class="inc_pdp_bundle_product_list_right_block"><div class="inc_pdp_bundle_product_list_right_btn_block"><div class="inc_pdp_bundle_product_list_right_btn_img_block"><div class="inc_pdp_bundle_product_list_right_btn_img"></div></div></div></div></div><div class="inc_pdp_bundle_product_right-btn_block"><div class="inc_pdp_bundle_product_right-btn_img_block"><div class="inc_pdp_bundle_product_right-btn_img" title="Scroll right"></div></div></div></div><div class="inc_pdp_bundle_cart_overlay_block"></div><div class="inc_pdp_bundle_cart_block"><div class="inc_pdp_bundle_cart_title_block"><div class="inc_pdp_bundle_cart_title_text_block"><div class="inc_pdp_bundle_cart_title_text">Price summary</div></div></div><div class="inc_pdp_bundle-cart_ecirp_block"><div class="inc_pdp_bundle-cart_ecirp_main"><div class="inc_pdp_bundle-cart_ecirp_main_title_block"><div class="inc_pdp_bundle-cart_ecirp_main_title_text_block"><div class="inc_pdp_bundle-cart_ecirp_main_title_text">Main Product Price </div></div></div><div class="inc_pdp_bundle-cart_ecirp_main_figure_block"><div class="inc_pdp_bundle-cart_ecirp_main_figure_text_block"><div class="inc_pdp_bundle-cart_ecirp_main_figure_text">£00.00</div></div></div></div><div class="inc_pdp_bundle-cart_ecirp_addon_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_text_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_text">Add-on(s) Selected </div></div></div><div class="inc_pdp_bundle-cart_ecirp_addon_figure_block"><div class="inc_pdp_bundle-cart_ecirp_addon_figure_text_block"><div class="inc_pdp_bundle-cart_ecirp_addon_figure_text">£0.00</div></div></div></div></div><div class="inc_pdp_bundle_cart_added_block"></div><div class="inc_pdp_bundle_cart_summary_block"><div class="inc_pdp_bundle_cart_summary_main_prd"><div class="inc_pdp_bundle_cart_summary_main_prd_txt">Main product </div><div class="inc_pdp_bundle_cart_summary_main_prd_prc"></div></div><div class="inc_pdp_bundle_cart_summary_addon_prd"><div class="inc_pdp_bundle_cart_summary_addon_prd_txt">1 addon product selected </div><div class="inc_pdp_bundle_cart_summary_addon_prd_prc"></div></div><div class="inc_pdp_bundle_cart_summary_title_block"><div class="inc_pdp_bundle_cart_summary_title_text_block"><div class="inc_pdp_bundle_cart_summary_count_text"></div><div class="inc_pdp_bundle_cart_summary_title_text">Total bundle price</div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text">£60.00</div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_rrp_block"><div class="inc_pdp_bundle_cart_summary_ecirp_rrp_text"></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_save_block"><div class="inc_pdp_bundle_cart_summary_ecirp_save_text"></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_regular_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text"></div></div></div></div><div class="inc_pdp_bundle_cart_summary_view_block"><div class="inc_pdp_bundle_cart_summary_view_btn_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img"></div></div><div class="inc_pdp_bundle_cart_summary_view_btn_text_block"><div class="inc_pdp_bundle_cart_summary_view_btn_text">Added items</div></div><div class="inc_pdp_bundle_cart_summary_view_btn_count_block"><div class="inc_pdp_bundle_cart_summary_view_btn_count"></div></div></div></div><div class="inc_pdp_bundle_cart_summary_add_block"><div class="inc_pdp_bundle_cart_summary_add_btn_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text">Add To Cart</div><div class="inc_pdp_bundle_cart_summary_add_btn_span"></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_img_block"><div class="inc_pdp_bundle_cart_summary_add_btn_img"></div></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_collection_block" style="pointer-events: auto;opacity: 1;"><div class="inc_pdp_bundle_cart_summary_add_btn_collection_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_collection_text" style="text-transform: none;"></div></div></div></div></div></div></div>',
                c.querySelector(".inc_pdp_bundle_cart_summary_title_text").innerText = "Total bundle price ",
                c.setAttribute("style", "clear: both;"),
                c.querySelector(".inc_pdp_title_text").innerText = e.config.FBTTitle;
                let i = e.dataStore.methods().getFirstProductObjByMainId({
                    mainId: e.dataStore.pdpProductId
                }).id
                  , o = ""
                  , r = null
                  , d = this.createProductModuleBlock(i, "pdp", !1, c, "mainprod")
                  , l = e.dataStore.bundleProductsArray;
                c.querySelector(".inc_pdp_product-main_block").appendChild(d),
                r = c.querySelector(".inc_pdp_bundle_product_list_main_block"),
                r.innerHTML = "";
                let _ = c.querySelector(".inc_pdp_bundle_product_list_items_block");
                _.innerHTML = "";
                let a = "";
                a = window.innerWidth > 820 ? l.length > 5 ? 5 : l.length : l.length > 4 ? 4 : l.length;
                for (let t = 0; t < a; t++) {
                    o = e.dataStore.methods().getFirstProductObjByMainId({
                        mainId: l[t]
                    });
                    let i = this.createProductModuleBlock(o.id, "pdp", !0, c);
                    if (i.setAttribute("b-index", t + 1),
                    r.appendChild(i),
                    a > 1) {
                        let e = this.createProductListItemBlock(o, "pdp");
                        _.appendChild(e)
                    }
                }
                1 == a && (e.config.singleProd = !0);
                let s = c.querySelector(".inc_pdp_bundle_product_header_text");
                null != s && (s.innerText = "Frequently bought with",
                s.style.textTransform = "none");
                let u = document.querySelector(".product-slice.slice-large.slice-medium.slice-small.slice-tabs ");
                window.innerWidth < 769 && (u = document.querySelector(".product-slice.slice-large.slice-medium.slice-small.slice-tabs ")),
                e.methods.clear(),
                a > 1 && c.querySelector(".inc_pdp_bundle_product_list_items_block").classList.add("inc_active");
                let m = this.createPDPBundleCartBlock(c)
                  , b = c.querySelector(".inc_pdp_bundle_cart_block");
                b.parentNode.removeChild(b),
                c.querySelector(".inc_pdp_bundle_block").appendChild(m);
                let y = "";
                y = document.querySelector(".product.info.detailed");
                let v = document.querySelector(".main-widget.yotpo-display-wrapper");
                window.innerWidth < 768 && (y = document.querySelector(".product.info.detailed"),
                v = document.querySelector(".main-widget.yotpo-display-wrapper")),
                setTimeout((()=>{
                    let e = document.querySelectorAll(".inc_product_modal_block");
                    for (let t = 0; t < e.length && 6 != t; t++) {
                        let c = e[t].querySelector(".inc_product_desc_att_zero_list_block")
                          , i = e[t].querySelector(".inc_product_desc_att_size_list_block")
                          , o = e[t].querySelector(".inc_product_desc_att_third_list_block")
                          , r = e[t].querySelector(".inc_product_desc_att_color_list_block");
                        "" !== r.innerHTML && r.querySelector(".inc_product_desc_att_color_list_item_img_block").click(),
                        "" !== c.innerHTML && c.querySelector(".inc_product_desc_att_size_list_item_img_block").click(),
                        "" !== i.innerHTML && i.querySelector(".inc_product_desc_att_size_list_item_img_block").click(),
                        "" !== o.innerHTML && o.querySelector(".inc_product_desc_att_size_list_item_img_block").click()
                    }
                }
                ), 0),
                null != y && (window.innerWidth,
                y.parentNode.insertBefore(c, y)),
                window.innerWidth < 820 && null != document.querySelector(".inc_pdp_bundle_product_list_item_block") && document.querySelector(".inc_pdp_bundle_product_list_item_block").click();
                let g = c.querySelectorAll(".inc_product_desc_add_block")
                  , k = c.querySelector(".inc_pdp_bundle_product_list_block").querySelectorAll(".inc_product_module_block");
                null != document.querySelector(".inc_pdp_product-main_block .inc_product_desc_title_text_header") && (document.querySelector(".inc_pdp_product-main_block .inc_product_desc_title_text_header").innerHTML = "Selected Product",
                document.querySelector(".inc_pdp_product-main_block .inc_product_desc_title_text_header").style.textTransform = "none"),
                c.querySelector(".inc_pdp_bundle_product_left-btn_block").setAttribute("style", "pointer-events: none;opacity:0.5"),
                c.querySelector(".inc_pdp_bundle_product_left-btn_img").setAttribute("style", "opacity:0.5"),
                c.querySelector(".inc_pdp_bundle_product_left-btn_img").setAttribute("title", "Scroll left"),
                c.querySelector(".inc_pdp_bundle_product_right-btn_img").setAttribute("title", "Scroll right");
                let h = 0
                  , f = k.length + 1
                  , S = 1;
                window.innerWidth > 800 && (S = 2),
                k.length > S && (c.querySelector(".inc_pdp_bundle_product_right-btn_block").addEventListener("click", (function() {
                    let t = 1
                      , i = "";
                    if (window.innerWidth <= 820 ? i = 8 : window.innerWidth >= 1024 ? window.innerWidth > 1024 ? (i = 280,
                    t = 2) : i = 300 : i = 254,
                    e.clientConfig.slidevalue + t < k.length) {
                        c.querySelector(".inc_pdp_bundle_product_left-btn_block").setAttribute("style", "pointer-events: auto;opacity:1"),
                        c.querySelector(".inc_pdp_bundle_product_left-btn_img").setAttribute("style", "opacity:1"),
                        e.clientConfig.slidevalue++,
                        e.clientConfig.offset = parseInt(e.clientConfig.offset) - i + "px",
                        c.querySelector(".inc_pdp_bundle_product_list_main_block").setAttribute("style", "margin-left:" + e.clientConfig.offset + ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;")
                    }
                    e.clientConfig.slidevalue + t == k.length && (c.querySelector(".inc_pdp_bundle_product_right-btn_block").setAttribute("style", "pointer-events: none;opacity:0.5"),
                    c.querySelector(".inc_pdp_bundle_product_right-btn_img").setAttribute("style", "opacity:0.5")),
                    h++,
                    h > f - 3 && h--
                }
                )),
                c.querySelector(".inc_pdp_bundle_product_left-btn_block").addEventListener("click", (function() {
                    let t = "";
                    if (t = window.innerWidth <= 820 ? 300 : window.innerWidth >= 1024 ? window.innerWidth > 1024 ? 280 : 300 : 254,
                    -1 == e.clientConfig.slidevalue && (e.clientConfig.slidevalue = 0),
                    e.clientConfig.slidevalue > 0) {
                        c.querySelector(".inc_pdp_bundle_product_right-btn_block").setAttribute("style", "pointer-events: auto;opacity:1"),
                        c.querySelector(".inc_pdp_bundle_product_right-btn_img").setAttribute("style", "opacity:1"),
                        e.clientConfig.slidevalue--,
                        e.clientConfig.offset = parseInt(e.clientConfig.offset) + t + "px",
                        c.querySelector(".inc_pdp_bundle_product_list_main_block").setAttribute("style", "margin-left:" + e.clientConfig.offset + ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;")
                    }
                    0 == e.clientConfig.slidevalue && (c.querySelector(".inc_pdp_bundle_product_left-btn_block").setAttribute("style", "pointer-events: none;opacity:0.5"),
                    c.querySelector(".inc_pdp_bundle_product_left-btn_img").setAttribute("style", "opacity:0.5")),
                    h--,
                    -1 == h && (h = 0)
                }
                ))),
                k.length <= S && (c.querySelector(".inc_pdp_bundle_product_right-btn_block").style.visibility = "hidden",
                c.querySelector(".inc_pdp_bundle_product_left-btn_block").style.visibility = "hidden"),
                setTimeout((function() {
                    for (let e = 0; e < 8; e++)
                        void 0 !== g[e] && e % 2 != 0 && (1 != e && 3 != e && 5 != e || g[e].click())
                }
                ), 100),
                setTimeout((function() {
                    if (null != c.querySelector(".inc_pdp_product-main_block .inc_product_desc_ecirp_active_text")) {
                        let t = c.querySelector(".inc_pdp_product-main_block .inc_product_desc_ecirp_active_text").innerText.replace("£", "").replace(",", ".").trim()
                          , i = c.querySelector(".inc_pdp_product-main_block .inc_product_desc_ecirp_regular_text").innerText.replace("Was £", "").replace(",", ".").trim()
                          , o = null
                          , r = null;
                        "" == i ? o = t : (o = i,
                        r = t),
                        function(t, c, i) {
                            let o = {}
                              , r = {};
                            r.token = e.config.clientToken,
                            r.product_id = i || e.methods.getProductIdFromWebPage();
                            let d = null
                              , l = null;
                            null != document.querySelector(".product-info-price .normal-price") ? d = document.querySelector(".product-info-price .normal-price .price").innerText.replace("£", "").replace(",", ".").trim() : document.querySelector(".product-info-price .special-price") && document.querySelector(".product-info-price .special-price .price") && (d = document.querySelector(".product-info-price .special-price .price").innerText.replace("£", "").replace(",", ".").trim());
                            null != document.querySelector(".product-info-price .rrp-price #rrp-price") && (l = document.querySelector(".product-info-price .rrp-price #rrp-price").innerText.replace(/^\D+/g, "").replace("\n", "").replace(",", ".").trim());
                            let n = null;
                            l && (n = l);
                            let _ = null;
                            null != d && (_ = d);
                            let a = parseFloat(_)
                              , s = n
                              , u = null
                              , p = null;
                            null != c ? Number(t) > Number(c) ? (u = parseFloat(t),
                            p = 0 == parseFloat(c) ? null : parseFloat(c)) : (u = 0 == parseFloat(c) ? null : parseFloat(c),
                            p = parseFloat(t)) : (u = parseFloat(t),
                            p = 0 == c ? null : c);
                            r.product_price = null != a ? a.toString() : a;
                            r.special_price = s ? s.toString() : s,
                            r.old_product_price = u.toString(),
                            r.old_special_price = p ? p.toString() : null,
                            r.price_type = "IncVAT",
                            o = {
                                eventData: btoa(JSON.stringify(r))
                            };
                            let m = !1;
                            a !== u && (m = !0);
                            u === p && null == s && (m = !1);
                            return !!m && (window.jQuery.ajax({
                                type: "POST",
                                url: "https://gather.increasingly.com/ProductPriceDetails",
                                data: JSON.stringify(o),
                                dataType: "json",
                                headers: {
                                    "content-type": "application/json; charset=utf-8"
                                },
                                error: function(e) {
                                    console.log("priceMismatched error - " + e)
                                },
                                success: function(e) {
                                    console.log("priceMismatched - " + JSON.stringify(e))
                                }
                            }),
                            !0)
                        }(o, r, e.methods.getProductIdFromWebPage()) && document.querySelector(".inc_pdp_block") && (document.querySelector(".inc_pdp_block").style.display = "none")
                    }
                }
                ), 500),
                setTimeout((function() {
                    t = !0,
                    n = !0;
                    let c = document.querySelectorAll(".inc_product_img_main_img img");
                    for (let t in c)
                        null != c[t] && Object.prototype.hasOwnProperty.call(c, t) && c[t].setAttribute("style", e.config.styleft)
                }
                ), 2e3),
                e.config.singleProd && document.querySelector(".inc_pdp_bundle_block").classList.add("inc_pdp_single_prod"),
                null != document.querySelector(".stock.unavailable.outstock") && (document.querySelector(".inc_pdp_block").style.display = "none")
            }
            "sidebar" == c && this.createSidebarBlock()
        }
    }
    ,
    e.methods.createPDPBundleCartBlock = function(e) {
        let t = e.querySelector(".inc_pdp_bundle_cart_block")
          , c = e.querySelector(".inc_pdp_bundle_cart_title_text")
          , i = e.querySelector(".inc_pdp_bundle_cart_added_block")
          , o = e.querySelector(".inc_pdp_bundle_cart_summary_view_btn_text")
          , r = e.querySelector(".inc_pdp_bundle_cart_summary_add_btn_block")
          , d = e.querySelector(".inc_pdp_bundle_cart_summary_add_btn_collection_block");
        return c.innerText = "Total bundle price ",
        i.innerHTML = "",
        o.innerText = "Added items",
        null != r && r.addEventListener("click", (function() {
            v(this)
        }
        )),
        null != d && d.addEventListener("click", (function() {
            v(this)
        }
        )),
        t
    }
    ,
    e.methods.createSidebarBlock = function() {
        if (null == document.querySelector(".sidebar_outer")) {
            let t = e.dataStore
              , c = document.createElement("div");
            c.classList.add("sidebar_outer"),
            c.innerHTML = '<span class="close_modal_inc"></span><div class="inc_sidebar_modal_block"><div class="inc_sidebar_modal_cart_and_title_block"><div class="inc_header_title_block"><div class="inc_header_title_text_block"><div class="inc_header_title_text">Just Added to your Basket</div></div></div><div class="inc_sidebar_cart_added_block"><div class="inc_cart_added_list_block"></div><div class="inc_cart_product_count_block"></div></div><div class="inc_sidebar_header_block"><div class="inc_header_continue_block"><div class="inc_header_continue_img_block"><div class="inc_header_continue_img"></div></div><div class="inc_header_continue_text_block"><div class="inc_header_continue_text">Back</div></div></div><div class="inc_header_item_block"><div class="inc_header_item_count_block"><div class="inc_header_item_count_title_block"><div class="inc_header_item_count_title_text_block"><div class="inc_header_item_count_title_text">Subtotal (0 item)</div></div></div><div class="inc_header_item_count_figure_block"><div class="inc_header_item_count_figure_text_block"><div class="inc_header_item_count_figure_text"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_text" subtotalactiveprice="0.00">£0.00</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_rrp_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_rrp_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_rrp_text"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text" subtotalregularprice="0.00"></div></div></div><div class="inc_just_added_save_pr"></div></div></div></div></div></div><div class="inc_sidebar_checkout_block"><div class="inc_checkout_continue_block"><div class="inc_checkout_continue_btn_block"><div class="inc_checkout_continue_btn_img_block"><div class="inc_checkout_continue_btn_img"></div></div><div class="inc_checkout_continue_btn_text_block"><div class="inc_checkout_continue_btn_text">Continue Shopping</div><div class="inc_checkout_continue_btn_span"></div></div></div></div><div class="inc_checkout_basket_block"><div class="inc_checkout_basket_btn_block"><div class="inc_checkout_basket_btn_img_block"><div class="inc_checkout_basket_btn_img"></div></div><div class="inc_checkout_basket_btn_text_block"><div class="inc_checkout_basket_btn_span"></div><div class="inc_checkout_basket_btn_text"><a class="view_basket_checkout"><div draggable="false">View Basket</div></a></div></div></div></div></div><div class="inc_sidebar_recommended_block"><div class="inc_recommended_title_block"><div class="inc_recommended_title_text_block"><div class="inc_recommended_title_text">Customers also bought</div></div></div><div class="inc_recommended_tabs_block"><div class="inc_recommended_tabs_list_block" tabindex="0"></div></div><div class="inc_recommended_products_block"><div class="inc_recommended_products_left_block"><div class="inc_recommended_products_left_btn_block"><div class="inc_recommended_products_left_btn_img_block"><div class="inc_recommended_products_left_btn_img" title="Scroll left"></div></div></div></div><div class="inc_recommended_products_list_main_block"><div class="inc_recommended_products_list_block"></div></div><div class="inc_recommended_products_item_thumb_block"><div class="inc_recommended_products_list_item_thumb_block"></div></div><div class="inc_recommended_products_right_block"><div class="inc_recommeded_products_right_btn_block"><div class="inc_recommended_products_right_btn_img_block"><div class="inc_recommended_products_right_btn_img" title="Scroll right"></div></div></div></div></div></div></div>';
            let i = c.querySelector(".inc_sidebar_modal_block");
            i.querySelector(".inc_cart_added_list_block").innerHTML = "";
            let o = i.querySelector(".inc_header_continue_text")
              , r = i.querySelector(".inc_header_title_text")
              , l = i.querySelector(".inc_header_item_count_title_text")
              , n = i.querySelector(".inc_recommended_title_text")
              , _ = i.querySelector(".inc_recommended_tabs_list_block")
              , a = i.querySelector(".inc_recommended_products_list_block")
              , s = i.querySelector(".inc_checkout_continue_btn_text")
              , u = i.querySelector(".inc_checkout_basket_btn_text")
              , m = i.querySelector(".inc_header_item_block")
              , b = i.querySelector(".inc_header_title_block")
              , y = document.querySelector(".close_modal_inc");
            null != y && y.addEventListener("click", (function() {
                g()
            }
            )),
            m.addEventListener("click", (function() {
                if (document.querySelector(".inc_header_item_count_title_text").getAttribute("added_counts") >= 1)
                    if (document.querySelector(".inc_sidebar_cart_added_block").classList.contains("inc_active") == d) {
                        document.querySelector(".inc_sidebar_cart_added_block").classList.remove("inc_active");
                        let e = document.querySelectorAll(".inc_cart_added_product_block").length
                          , t = 2;
                        if (window.innerWidth <= 769 && (t = 1),
                        e > t) {
                            let c = e - t + " more item(s)";
                            document.querySelector(".inc_header_item_count_title_text").innerText = "+" + c,
                            document.querySelector(".inc_header_item_count_title_text").setAttribute("added_counts", e - t)
                        } else
                            document.querySelector(".inc_header_item_count_title_text").innerText = ""
                    } else
                        document.querySelector(".inc_header_item_count_title_text").innerText = "",
                        document.querySelector(".inc_sidebar_cart_added_block").classList.add("inc_active")
            }
            ));
            let v = p("span", "close_sisebar_icon");
            if (b.appendChild(v),
            a.setAttribute("role", "contentinfo"),
            a.setAttribute("tabindex", 0),
            o.innerText = "Back",
            r.innerText = "Just Added to your Basket",
            r.style.textTransform = "none",
            null != t.bundleCartProducts) {
                l.innerText = "Subtotal :",
                n.innerText = e.config.BeforeYouChecktext,
                n.style.textTransform = "none",
                s.innerText = "Continue Shopping",
                u.querySelector(".view_basket_checkout").setAttribute("href", e.clientConfig.checkoutLink);
                let o = t.methods().getUniqueCatergories();
                _.innerHTML = "",
                a.innerHTML = "";
                let r = 0;
                _.classList.add("inc_categ_" + Object.keys(o).length),
                o.forEach((function(t) {
                    if (r < 5 && null != t) {
                        r++;
                        let c = p("div", "inc_recommended_tabs_list_item_block")
                          , o = '<div class="inc_recommended_tabs_list_item_text_block"><div class="inc_recommended_tabs_list_item_text"></div></div>';
                        c.innerHTML = o;
                        let d = c.querySelector(".inc_recommended_tabs_list_item_text");
                        d.parentNode.parentNode.setAttribute("title", t),
                        d.innerText = t.toLocaleLowerCase(),
                        d.setAttribute("style", "text-transform:capitalize;"),
                        c.addEventListener("click", (function() {
                            let o = i.querySelector(".inc_recommended_products_list_block");
                            null != o && (o.innerHTML = ""),
                            Array.prototype.forEach.call(_.querySelectorAll(".inc_recommended_tabs_list_item_block"), (function(e) {
                                e.classList.remove("inc_active")
                            }
                            )),
                            c.classList.add("inc_active"),
                            e.methods.updateSidebarProductsList(o, t)
                        }
                        )),
                        _.setAttribute("tabindex", 0),
                        _.appendChild(c)
                    }
                }
                )),
                null != _.querySelector(".inc_recommended_tabs_list_item_block") ? _.querySelector(".inc_recommended_tabs_list_item_block").click() : n.style.display = "none",
                i.querySelector(".inc_header_continue_block").addEventListener("click", (function() {
                    g()
                }
                )),
                i.querySelector(".inc_checkout_continue_block").addEventListener("click", (function() {
                    g()
                }
                )),
                v.addEventListener("click", (function() {
                    g()
                }
                )),
                i.querySelector(".inc_checkout_basket_block").addEventListener("click", (function() {
                    this.querySelector(".inc_checkout_basket_btn_block").classList.add("inc_loading"),
                    window.location.replace("https://www.leekes.co.uk/checkout/cart/")
                }
                ));
                let d = document.querySelector("body");
                d.appendChild(c);
                let m = document.createElement("div");
                m.setAttribute("class", "inc_sidebar_overlay_block"),
                m.addEventListener("click", (function() {
                    g()
                }
                )),
                m.style.display = "none",
                d.appendChild(m),
                null != e.dataStore.dataStoreObj.undefined && null != document.querySelector(".inc_recommended_products_block") && (document.querySelector(".inc_recommended_products_block").style.display = "none")
            }
            setTimeout((function() {
                null != document.querySelector(".inc_recommended_products_list_block") && document.querySelector(".inc_recommended_products_list_block").setAttribute("role", "contentinfo");
                let t = document.querySelectorAll(".inc_product_img_main_img img");
                for (let c in t)
                    null != t[c] && Object.prototype.hasOwnProperty.call(t, c) && t[c].setAttribute("style", e.config.styleft)
            }
            ), 100)
        }
    }
    ,
    e.methods.updateSidebarBlock = function(t, c) {
        let i = 0
          , o = 0
          , r = 0
          , d = e.dataStore
          , l = ""
          , n = document.querySelector(".inc_sidebar_modal_block");
        if (null != n) {
            let _ = n.querySelector(".inc_header_item_count_title_text")
              , a = n.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text")
              , s = n.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text")
              , u = n.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_rrp_text")
              , b = n.querySelector(".inc_cart_added_list_block");
            n.querySelector(".inc_header_item_count_figure_text").innerText = "",
            b.innerHTML = "";
            let y = "";
            null != t && null != t ? (e.dataStore.bundleCartProducts = {},
            e.dataStore.bundleCartProducts[t] = 1,
            y = Object.keys(d.bundleCartProducts)) : y = Object.keys(d.bundleCartProducts),
            _.innerHTML = "Subtotal :";
            let v = 0;
            i = 0,
            o = 0,
            r = 0;
            let g = ""
              , k = []
              , h = []
              , f = document.querySelectorAll(".inc_justerror");
            for (let e in f)
                null != f[e] && Object.prototype.hasOwnProperty.call(f, e) && f[e].parentNode.removeChild(f[e]);
            y.forEach((function(_) {
                d.bundleCartProducts[_] < 1 && (d.bundleCartProducts[_] = 1);
                let a = new e.classes.FindObj({
                    sku: _
                });
                l = null != t && null != t ? c.querySelector("input").value : d.bundleCartProducts[_];
                let s = e.dataStore.methods().getProductBySKU(a);
                if (e.clientConfig.OOS.indexOf(s.id) >= 0) {
                    if (-1 == k.indexOf(s.name) && -1 == h.indexOf(s.id)) {
                        g = "",
                        h.push(s.mainId),
                        k.push(s.name),
                        g = "" == g ? "<span>" + s.name + "</span> - <span>The requested quantity is not available</span>" : g + " <br> <span>" + s.name + "</span> - <span>The requested quantity is not available</span>";
                        let e = n.querySelector(".inc_sidebar_modal_cart_and_title_block")
                          , t = p("div", "inc_justerror")
                          , c = p("img", "errorimg");
                        c.src = s.imageURL,
                        t.appendChild(c);
                        let i = p("span", "inc_justerror_text");
                        i.innerHTML = g,
                        t.appendChild(i),
                        e.parentNode.insertBefore(t, e),
                        setTimeout((function() {
                            let e = document.querySelectorAll(".inc_justerror");
                            for (let t in e)
                                null != e[t] && Object.prototype.hasOwnProperty.call(e, t) && e[t].parentNode.removeChild(e[t])
                        }
                        ), 5e3)
                    }
                } else {
                    v += parseInt(d.bundleCartProducts[_]);
                    let n = ""
                      , a = ""
                      , u = ""
                      , y = ""
                      , g = null;
                    g = "simple" != s.ProductType ? document.querySelector('.inc_pdp_block .inc_product_module_block[data-sku="' + s.sku + '"]') : document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + s.mainId + '"]'),
                    null != t && null != t && (g = c),
                    null != g && (null != g.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active div") && (a = g.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active div").innerText,
                    u = g.querySelector(".inc_product_desc_att_size_list_item_img_block").parentElement.parentElement.querySelector(".inc_product_desc_att_zero_title_text").innerText),
                    null != g.querySelector(".inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block") && (n = g.querySelector(".inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block").getAttribute("data-color"),
                    y = g.querySelector(".inc_product_desc_att_color_list_item_block").parentElement.parentElement.querySelector(".inc_product_desc_att_color_title_text").innerText));
                    let k = "";
                    "" != n && null != n && null != n && (k = y + ": " + +n),
                    "" != a && null != a && null != a && (k += "" !== k ? " , " + u + ": " + a : u + ": " + a),
                    k = "";
                    let h = /^[A-Za-z0-9]*$/;
                    for (let e in s.option)
                        "" == k ? k = (h.test(s.option[e].label),
                        j(s.option[e].label.split("Choose a ")[1]) + ": " + j(s.option[e].text)) : (h.test(s.option[e].label),
                        k += ", " + j(s.option[e].label.split("Choose a ")[1]) + ": " + j(s.option[e].text));
                    let f = parseFloat(s.activePrice).toFixed(2);
                    i = +i + +s.activePrice * l,
                    o = +o + +s.regularPrice * l,
                    r = 0 != s.rrpPrice && "" != s.rrpPrice && "0.00" != s.rrpPrice ? +r + +s.rrpPrice * l : +r + +s.activePrice * l;
                    let S = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' + s.imageURL + '" data-src="' + s.imageURL + '" alt="' + s.name + '"><div class="sidebar_product_quantity_label">' + l + '</div></div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset;"><span>' + l + "x</span>" + s.name + '</div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">' + m.format(f).replace(".00", "")
                      , q = p("div", "inc_cart_added_product_block");
                    q.innerHTML = S,
                    q.setAttribute("data-id", s.id),
                    q.setAttribute("data-sku", s.sku),
                    q.setAttribute("data-main_id", s.mainId),
                    q.setAttribute("data-bundle_id", s.bundleId),
                    q.setAttribute("data-childsku", s.childsku),
                    q.setAttribute("data-mainsku", s.mainsku),
                    q.querySelector(".inc_cart_added_product_img img").setAttribute("onerror", "this.src='" + e.config.noimage + "'"),
                    b.appendChild(q)
                }
            }
            ));
            let S = D(r, i);
            null != +i && +i < +o ? (a.setAttribute("subtotalActiveprice", i),
            s.setAttribute("subtotalRegularprice", o),
            a.innerHTML = m.format(i).replace(".00", ""),
            s.innerHTML = m.format(o).replace(".00", ""),
            0 == r ? u.setAttribute("subtotalrrpprice", i) : u.setAttribute("subtotalrrpprice", r),
            0 != r && r != i && (u.innerHTML = "<span>RRP </span>" + m.format(r).replace(".00", "")),
            null != document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block") && document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block").classList.add("is_special_ecirp"),
            0 != S && (null != document.querySelector(".inc_just_added_save_pr") ? document.querySelector(".inc_just_added_save_pr").innerText = "Save " + m.format(S).replace(".00", "") : document.querySelector(".inc_just_added_save_pr").innerText = ""),
            a.style.color = "#ee1c31") : (a.setAttribute("subtotalActiveprice", i),
            a.style.color = "#000",
            s.setAttribute("subtotalRegularprice", o),
            a.innerHTML = m.format(o).replace(".00", ""),
            s.innerHTML = "",
            0 != S && null != document.querySelector(".inc_just_added_save_pr") && (document.querySelector(".inc_just_added_save_pr").innerText = "Save " + m.format(S).replace(".00", "")),
            0 == r ? u.setAttribute("subtotalrrpprice", i) : u.setAttribute("subtotalrrpprice", r),
            r > 0 && r != i && (u.innerHTML = "<span>RRP </span>" + m.format(r).replace(".00", ""))),
            _.innerHTML = "Subtotal :",
            window.innerWidth > 767 ? document.querySelectorAll(".inc_sidebar_cart_added_block .inc_cart_added_product_block").length > 5 && document.querySelector(".inc_sidebar_cart_added_block").classList.add("flex-start") : document.querySelectorAll(".inc_sidebar_cart_added_block .inc_cart_added_product_block").length > 3 && document.querySelector(".inc_sidebar_cart_added_block").classList.add("flex-start");
            let q = document.querySelectorAll(".inc_sidebar_cart_added_block .inc_cart_added_product_block").length;
            document.querySelector(".inc_sidebar_cart_added_block").className.replace(/\binc_added_.+?/g, ""),
            document.querySelector(".inc_sidebar_cart_added_block").classList.add("inc_added_" + q),
            null == n.querySelector(".inc_cart_added_product_block") && n.classList.add("oos_prod_avail")
        }
    }
    ,
    e.methods.updateSidebarProductsList = function(t, c) {
        let i = e.dataStore.bundleProductsArray
          , o = []
          , r = e.config.pdpaddedProductList;
        for (let d in i) {
            let l = e.dataStore.methods().getFirstProductObjByMainId({
                mainId: i[d]
            });
            if (l.categoryId == c && null == e.dataStore.dataStoreObj.undefined && -1 == r.indexOf(i[d]) && -1 == e.config.sidebarremovedprod.indexOf(l.id) && -1 == o.indexOf(l.id)) {
                o.push(l.id);
                let c = e.methods.createProductModuleBlock(l.id, "sidebar", !1, t);
                c.querySelector(".inc_product_desc_add_block").addEventListener("click", (function() {
                    k(this)
                }
                )),
                c.querySelector(".inc_product_add_collection_block").addEventListener("click", (function() {
                    k(this)
                }
                )),
                "undefined" != c.getAttribute("data-bundle_id") && t.appendChild(c)
            }
        }
        e.clientConfig.offset = 0,
        e.clientConfig.slidevalue = 0,
        t.setAttribute("style", "margin-left: 0"),
        null == document.querySelector(".inc_recommended_tabs_list_item_block") && null == t.querySelector(".inc_product_module_block") && (t.parentNode.parentNode.parentNode.parentNode.style.display = "none"),
        t.childNodes.length <= 2 && (t.parentNode.parentNode.querySelector(".inc_recommended_products_right_block").style.visibility = "hidden",
        t.parentNode.parentNode.querySelector(".inc_recommended_products_left_block").style.visibility = "hidden",
        t.parentNode.parentNode.querySelector(".inc_recommended_products_left_block").setAttribute("style", "pointer-events: none;opacity:0.5;visibility: hidden;")),
        t.childNodes.length > 2 && (t.parentNode.parentNode.querySelector(".inc_recommended_products_right_block").style.visibility = "visible",
        t.parentNode.parentNode.querySelector(".inc_recommended_products_left_block").style.visibility = "visible",
        t.parentNode.parentNode.querySelector(".inc_recommended_products_left_block").setAttribute("style", "pointer-events: none;opacity:0.5")),
        t.parentNode.parentNode.querySelector(".inc_recommended_products_left_btn_img").setAttribute("style", "opacity:0.5");
        let d = 0;
        t.parentNode.parentNode.querySelector(".inc_recommended_products_left_btn_img").setAttribute("title", "Scroll left"),
        t.parentNode.parentNode.querySelector(".inc_recommended_products_right_btn_img").setAttribute("title", "Scroll right"),
        t.parentNode.parentNode.querySelector(".inc_recommeded_products_right_btn_block").addEventListener("click", (function() {
            let c = document.querySelectorAll(".inc_recommended_products_list_block .inc_product_module_block");
            if (e.clientConfig.slidevalue + 1 < c.length) {
                t.parentNode.parentNode.querySelector(".inc_recommended_products_left_btn_block").setAttribute("style", "pointer-events: auto;opacity:1"),
                t.parentNode.parentNode.querySelector(".inc_recommended_products_left_block").setAttribute("style", "pointer-events: auto;opacity:1"),
                t.parentNode.parentNode.querySelector(".inc_recommended_products_left_btn_img").setAttribute("style", "opacity:1"),
                e.clientConfig.slidevalue++;
                let c = 274;
                e.clientConfig.offset = parseInt(e.clientConfig.offset) - c + "px",
                t.parentNode.parentNode.querySelector(".inc_recommended_products_list_block").setAttribute("style", "margin-left:" + e.clientConfig.offset + ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;")
            }
            let i = 1;
            window.innerWidth > 820 && (i = 2),
            +e.clientConfig.slidevalue + +i == c.length && (t.parentNode.parentNode.querySelector(".inc_recommeded_products_right_btn_block").setAttribute("style", "pointer-events: none;opacity:0.5"),
            document.querySelector(".inc_recommended_products_right_btn_img").setAttribute("style", "pointer-events: none;opacity:0.5"),
            t.parentNode.parentNode.querySelector(".inc_recommended_products_right_btn_img").setAttribute("style", "opacity:0.5")),
            d++,
            d > c.length - i && d--
        }
        )),
        t.parentNode.parentNode.querySelector(".inc_recommended_products_left_btn_block").addEventListener("click", (function() {
            if (-1 == e.clientConfig.slidevalue && (e.clientConfig.slidevalue = 0),
            e.clientConfig.slidevalue > 0) {
                let c = 274;
                t.parentNode.parentNode.querySelector(".inc_recommeded_products_right_btn_block").setAttribute("style", "pointer-events: auto;opacity:1"),
                document.querySelector(".inc_recommended_products_right_btn_img").setAttribute("style", "pointer-events: auto;opacity:1"),
                t.parentNode.parentNode.querySelector(".inc_recommended_products_right_btn_img").setAttribute("style", "opacity:1"),
                e.clientConfig.slidevalue--,
                e.clientConfig.offset = parseInt(e.clientConfig.offset) + c + "px",
                t.parentNode.parentNode.querySelector(".inc_recommended_products_list_block").setAttribute("style", "margin-left:" + e.clientConfig.offset + ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;")
            }
            0 == e.clientConfig.slidevalue && (t.parentNode.parentNode.querySelector(".inc_recommended_products_left_btn_block").setAttribute("style", "pointer-events: none;opacity:0.5"),
            t.parentNode.parentNode.querySelector(".inc_recommended_products_left_block").setAttribute("style", "pointer-events: none;opacity:0.5"),
            t.parentNode.parentNode.querySelector(".inc_recommended_products_left_btn_img").setAttribute("style", "opacity:0.5")),
            d--,
            -1 == d && (d = 0)
        }
        )),
        setTimeout((function() {
            let t = document.querySelectorAll(".inc_recommended_products_list_block .inc_product_showcase_block");
            for (let e in t) {
                let c = t[e].parentNode
                  , i = "";
                null != c && (i = c.getAttribute("data-main_id")),
                null != t[e] && Object.prototype.hasOwnProperty.call(t, e) && (null != t[e].querySelector(".inc_product_desc_att_zero_block.inc_active") && (null != c.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + i + '"]') && null != c.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + i + '"] .inc_product_desc_att_size_list_item_img_block') ? c.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + i + '"] .inc_product_desc_att_size_list_item_img_block').click() : null != t[e].querySelector(".inc_product_desc_att_size_list_item_img_block") && t[e].querySelector(".inc_product_desc_att_size_list_item_img_block").click()),
                null != t[e].querySelector(".inc_product_desc_att_color_block.inc_active") && (null != c.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + i + '"]') ? null != c.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + i + '"] .inc_product_desc_att_color_list_item_img_block') && c.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + i + '"] .inc_product_desc_att_color_list_item_img_block').click() : null != t[e].querySelector(".inc_product_desc_att_color_list_item_img_block") && t[e].querySelector(".inc_product_desc_att_color_list_item_img_block").click()))
            }
            setTimeout((function() {
                let t = document.querySelectorAll(".inc_product_img_main_img img");
                for (let c in t)
                    null != t[c] && Object.prototype.hasOwnProperty.call(t, c) && t[c].setAttribute("style", e.config.styleft)
            }
            ), 2e3)
        }
        ), 10),
        e.config.sidebarFirstLoad = !0
    }
    ,
    e.methods.addProductToSidebarCart = function(t, c, i, o, r) {
        let l = 1;
        "client_add_btn" != c && null != i && ("pdp" == e.config.pageType && e.config.recommendation == d && null != i.querySelector(".inc_product_modal_block .inc_product_qty_block input") && (l = i.querySelector(".inc_product_modal_block .inc_product_qty_block input").value),
        null != i.querySelector(".inc_product_modal_block .inc_product_qty_block input") && (l = i.querySelector(".inc_product_modal_block .inc_product_qty_block input").value)),
        "client_add_btn" == c && "pdp" == e.config.pageType && (null != document.querySelector(".product-add-form .qty input") && (l = document.querySelector(".product-add-form .qty input").value),
        0 == l && (l = 1));
        let n = e.dataStore
          , _ = document.querySelector(".inc_sidebar_modal_block")
          , a = 0
          , s = 0
          , u = 0;
        if (null != document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_active_text") && (a = document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_active_text").getAttribute("subtotalactiveprice")),
        null != document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_regular_text") && (s = document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_regular_text").getAttribute("subtotalregularprice")),
        null != document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_rrp_text") && (u = document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_rrp_text").getAttribute("subtotalrrpprice")),
        null == a && (a = 0),
        null == s && (s = 0),
        "client_add_btn" == c && (a = 0,
        s = 0),
        null == u && (u = 0),
        "client_add_btn" == c && (a = 0,
        u = 0),
        null != document.querySelector(".inc_sidebar_cart_added_block.inc_active") && null != document.querySelector(".inc_header_item_count_title_block") && document.querySelector(".inc_header_item_count_title_block").click(),
        null != _) {
            let i = _.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text")
              , b = _.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text")
              , y = _.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_rrp_text")
              , v = _.querySelector(".inc_header_item_count_figure_text")
              , g = _.querySelector(".inc_header_item_count_title_text")
              , k = _.querySelector(".inc_cart_added_list_block");
            "client_add_btn" == c && (k.innerHTML = "");
            let h = n.methods().getProductById(t)
              , f = p("div", "inc_cart_added_product_block");
            if (e.clientConfig.OOS.indexOf(h.id) >= 0) {
                f.classList.add("cross");
                for (let t = 0; t < e.clientConfig.OOS.length; t++)
                    if (null != e.clientConfig.OOS_MESG[t]) {
                        let e = document.querySelector(".inc_justerror");
                        if (null != e && e.parentNode.removeChild(e),
                        null == document.querySelector(".inc_justerror")) {
                            let e = _.querySelector(".inc_sidebar_modal_cart_and_title_block")
                              , t = p("div", "inc_justerror")
                              , c = p("span", "inc_justerror_text");
                            c.innerHTML = "<span>" + h.name + "</span> - <span>The requested quantity is not available</span>",
                            t.appendChild(c),
                            e.parentNode.insertBefore(t, e),
                            setTimeout((function() {
                                let e = document.querySelector(".inc_justerror");
                                null != e && e.parentNode.removeChild(e)
                            }
                            ), 2e3)
                        }
                    }
            } else {
                let t = ""
                  , r = ""
                  , n = ""
                  , _ = ""
                  , p = "";
                if (_ = null != document.querySelector(".inc_sidebar_modal_block.inc_active") ? document.querySelector('.inc_sidebar_modal_block .inc_product_module_block[data-sku="' + h.sku + '"]') : document.querySelector('.inc_product_module_block[data-main_id="' + h.mainId + '"]'),
                null != _ && (null != _.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active div") && (r = _.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active div").innerText,
                n = _.querySelector(".inc_product_desc_att_size_list_item_img_block").parentElement.parentElement.querySelector(".inc_product_desc_att_zero_title_text").innerText),
                null != _.querySelector(".inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block") && (t = _.querySelector(".inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block").getAttribute("data-color"),
                p = _.querySelector(".inc_product_desc_att_color_list_item_block").parentElement.parentElement.querySelector(".inc_product_desc_att_color_title_text").innerText)),
                null != o && o.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("inc_product_module_block") == d) {
                    let e = o.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    if (null != e.querySelector(".inc_product_modal_block .inc_product_desc_att_block")) {
                        let c = e.querySelector(".inc_product_modal_block .inc_product_desc_att_block")
                          , i = c.getAttribute("data-zero")
                          , o = c.getAttribute("data-size")
                          , d = c.getAttribute("data-color")
                          , l = c.getAttribute("data-third");
                        r = "",
                        t = "",
                        null != d && (t = d),
                        null != i && (r = "" == r ? i : r + "|" + i),
                        null != o && (r = r + "|" + o),
                        null != l && (r = r + "|" + l)
                    }
                }
                let S = "";
                if ("" != t && null != t && null != t && (S = p + ": " + t.toLowerCase()),
                "" != r && null != r && null != r && (S += "" !== S ? ", " + n + ": " + r.toLowerCase() : "," + n + ": " + r),
                "client_add_btn" == c) {
                    S = "";
                    let e = document.querySelectorAll(".attributes__value.attributes__value--selected");
                    for (let t = 0; t < e.length; t++)
                        "" == S ? S = "\n" == e[t].innerText ? e[t].parentNode.parentNode.querySelector(".attribute-name-text").innerText.split("Choose a ")[1].split(":")[0] + ": " + j(e[t].querySelector("a").title) : e[t].parentNode.parentNode.querySelector(".attribute-name-text").innerText.split("Choose a ")[1].split(":")[0] + ": " + j(e[t].innerText) : "\n" == e[t].innerText ? S = j(e[t].querySelector("a").title) : S += ", " + e[t].parentNode.parentNode.querySelector(".attribute-name-text").innerText.split("Choose a ")[1].split(":")[0] + ": " + j(e[t].innerText)
                } else {
                    S = "";
                    for (let e in h.option)
                        "" == S ? S = j(h.option[e].code) + ": " + j(h.option[e].text) : S += ", " + j(h.option[e].code) + ": " + j(h.option[e].text)
                }
                let q = 0
                  , x = ""
                  , L = ""
                  , A = 0;
                "client_add_btn" == c ? (null != document.querySelector(".product-info-price .normal-price") ? q = document.querySelector(".product-info-price .normal-price .price").innerText.replace("£", "").replace(",", ".").trim() : document.querySelector(".product-info-price .special-price") && document.querySelector(".product-info-price .special-price .price") && (q = document.querySelector(".product-info-price .special-price .price").innerText.replace("£", "").replace(",", ".").trim()),
                null != document.querySelector(".product-info-price .rrp-price #rrp-price") && (L = document.querySelector(".product-info-price .rrp-price #rrp-price").innerText.replace(/^\D+/g, "").replace(",", "."))) : (q = Number(h.activePrice.replace("£", "").replace("£", "")).toString(),
                x = Number(h.regularPrice.replace("£", "").replace("£", "")).toString(),
                L = Number(h.rrpPrice.replace("£", "").replace("£", "")).toString());
                let w = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' + h.imageURL + '" data-src="' + h.imageURL + '" alt="' + h.name + '"><div class="sidebar_product_quantity_label">' + l + '</div></div></div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset;"><span>' + l + " x </span>" + h.name + '</div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">' + m.format(q).replace(".00", "");
                f.innerHTML = w,
                f.querySelector(".inc_cart_added_product_img img").setAttribute("onerror", "this.src='" + e.config.noimage + "'");
                let N = 0
                  , P = 0
                  , C = 0;
                "" == s && 0 != +x && "" != x ? (N = +a + +q * l,
                P = +a + +x * l) : (N = +a + +q * l,
                P = +s + +x * l),
                "" != u && 0 != +L ? (N = +a + +q * l,
                C = +u + +L * l) : (N = +a + +q * l,
                C = 0 != u ? +u + +q * l : 0 != L ? +u + +L * l : +a + +q * l),
                null != k && k.insertBefore(f, k.querySelector(".inc_cart_added_product_block")),
                null != v && (v.style.display = "none"),
                g.innerHTML = "Subtotal :",
                i.setAttribute("subtotalactiveprice", N),
                b.setAttribute("subtotalregularprice", P),
                0 == C ? y.setAttribute("subtotalrrpprice", N) : y.setAttribute("subtotalrrpprice", C);
                let T = 0;
                T = D(C, N),
                null != +N && +N < +P ? (i.innerHTML = m.format(N).replace(".00", ""),
                b.innerHTML = m.format(P).replace(".00", ""),
                null != document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block") && document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block").classList.add("is_special_ecirp"),
                i.style.color = "#ee1c31",
                null != document.querySelector(".inc_just_added_save_pr") && ("client_add_btn" == c ? null != document.querySelector("#js-product-saved") && ("none" != document.querySelector("#js-product-saved").style.display ? document.querySelector(".inc_just_added_save_pr").innerText = "Save " + m.format(A).replace(".00", "") : document.querySelector(".inc_just_added_save_pr").innerText = "") : document.querySelector(".inc_just_added_save_pr").innerText = T > 0 && 0 != C ? "Save " + m.format(T).replace(".00", "") : "")) : (i.style.color = "#000",
                i.innerHTML = m.format(N).replace(".00", ""),
                b.innerHTML = "",
                null != document.querySelector(".inc_just_added_save_pr") && (document.querySelector(".inc_just_added_save_pr").innerHTML = ""),
                0 != C && C != N && (y.innerHTML = "<span>RRP </span>" + m.format(C).replace(".00", "")),
                document.querySelector(".inc_just_added_save_pr").innerText = T > 0 && 0 != C ? "Save " + m.format(T).replace(".00", "") : ""),
                window.innerWidth > 767 ? document.querySelectorAll(".inc_sidebar_cart_added_block .inc_cart_added_product_block").length > 5 && document.querySelector(".inc_sidebar_cart_added_block").classList.add("flex-start") : document.querySelectorAll(".inc_sidebar_cart_added_block .inc_cart_added_product_block").length > 3 && document.querySelector(".inc_sidebar_cart_added_block").classList.add("flex-start"),
                document.querySelectorAll(".inc_sidebar_cart_added_block .inc_cart_added_product_block").length > 7 && document.querySelector(".inc_sidebar_cart_added_block").classList.add("more_than_seven");
                let I = document.querySelectorAll(".inc_sidebar_cart_added_block .inc_cart_added_product_block").length;
                document.querySelector(".inc_sidebar_cart_added_block").classList.remove("inc_added_" + I - 1),
                document.querySelector(".inc_sidebar_cart_added_block").classList.add("inc_added_" + I)
            }
            if ("pdp" == e.config.pageType && (0 == Object.keys(h).length || "client_add_btn" == c || "clientbtn" == c) && null != r) {
                let e = "";
                null != r.querySelector(".product__image__main img") && null != r.querySelector(".product__image__main img").src ? e = r.querySelector(".product__image__main img").src : null != document.querySelector(".inc_pdp_product-main_block .inc_product_img_main_img img") && null != document.querySelector(".inc_pdp_product-main_block .inc_product_img_main_img img") && (e = document.querySelector(".inc_pdp_product-main_block .inc_product_img_main_img img").src),
                null != f.querySelector(".inc_cart_added_product_img img") && "" != e && null != e && (f.querySelector(".inc_cart_added_product_img img").src = e)
            }
            null != document.querySelector(".inc_cart_added_product_block") ? _.classList.remove("oos_prod_avail") : _.classList.add("oos_prod_avail")
        }
    }
    ,
    e.methods.sendBundleClickTracking = function(t, c) {
        let i = "";
        switch (e.config.pageType) {
        case "pdp":
            i = "107";
            break;
        case "productList":
        case "other":
            i = "101";
            break;
        case "cartPage":
        case "ticket":
            i = "103"
        }
        null == document.querySelector(".inc_sidebar_modal_block.inc_active") && "pdp" == e.config.pageType && (i = "100"),
        null != document.querySelector(".inc_sidebar_modal_block.inc_active") && "productList" != e.config.pageType && (i = "107");
        let o = e.dataStore.pdpProductId;
        "pdp" == e.config.pageType && (o = e.config.Product_id),
        e.methods.trackingEvents("bundleProductClickTracking", {
            product_id: t,
            core_product_id: o.toString()
        }, i, c)
    }
    ,
    e.methods.createProductModuleBlock = function(t, c, i, o, r, d) {
        if (null == e.dataStore.dataStoreObj.undefined) {
            let l = p("div", "inc_product_module_block")
              , n = new e.classes.FindObj({
                id: t
            })
              , _ = e.dataStore.methods().getProductById(n);
            l.style.userSelect = "none",
            h(l, _);
            let a = p("div", "inc_product_showcase_block");
            a.innerHTML = '<div class="inc_product_block"><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_header_main_rating_block"></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text"></div></div></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_extension_block"></div><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="pc_promo_div"></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block"></div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">£0.00 - -£0.00</div><div class="inc_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_product_desc_ecirp_rrp_block"><div class="inc_product_desc_ecirp_rrp_text_block"><div class="inc_product_desc_ecirp_rrp_text"></div><div class="inc_product_desc_ecirp_rrp_text_msg"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_variant_error_text"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text"><span>Add To Cart</span></div></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected" ></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected" ></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected" ></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected" ></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected" ></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block"><label>qty</label><div class="inc_product_qty_block singleqty"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"><span class="inc_add_text"></span></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text">Add To Cart</div></div></div><div class="inc_product_add_collection_block"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">Add To Cart</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>';
            let s = p("div", "inc_product_modal_block");
            s.innerHTML = '<div class="inc_product_block"><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_extension_block"></div><div class="inc_product_header_main_rating_block"><div class="inc_product_desc_ratings_block"></div><span class="product_modal_sku">#</span></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text">Overview</div></div></div><div class="inc_product_header_title_block_1"><div class="inc_product_header_title_text_block_1"><div class="inc_product_header_title_text_1">Description</div></div></div><div class="inc_product_header_new_page"><a class="inc_product_header_new_page_text" href="" >Open in a new tab</a ></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block" title="Scroll left"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block" title="Scroll right"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="inc_product_desc_size_guide_block"></div><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block"></div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">£0.00 - -£0.00</div><div class="inc_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_product_desc_ecirp_rrp_block"><div class="inc_product_desc_ecirp_rrp_text_block"><div class="inc_product_desc_ecirp_rrp_text"></div><div class="inc_product_desc_ecirp_rrp_text_msg"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text"><span></span></div></div><div class="pc_promo_div"></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected" ></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected" ></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected" ></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected" ></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected" ></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block"><div class="inc_product_qty_block singleqty"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text"></div></div></div><div class="inc_product_add_collection_block"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">Add To Cart</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>',
            null != a && a.setAttribute("role", "contentinfo"),
            null != s && s.setAttribute("role", "contentinfo");
            let u = e.methods.createProductShowcaseBlock(t, c, i, o, a, r, d)
              , m = e.methods.createProductModalBlock(t, c, i, o, s, r, d);
            return a.appendChild(u),
            s.appendChild(m),
            l.appendChild(a),
            l.appendChild(s),
            l
        }
    }
    ,
    e.methods.createProductShowcaseBlock = function(c, i, o, _, s, u, b) {
        let v = s.querySelector(".inc_product_block")
          , g = new e.classes.FindObj({
            id: c
        })
          , k = e.dataStore.methods().getProductById(g);
        h(v, k);
        let w = v.querySelector(".inc_product_info_main_block")
          , C = v.querySelector(".inc_product_header_main_block")
          , T = v.querySelector(".inc_product_img_block")
          , I = v.querySelector(".inc_product_img_gallery_list_block")
          , z = v.querySelector(".inc_product_desc_title_text_block")
          , O = v.querySelector(".inc_product_desc_title_text")
          , M = v.querySelector(".pc_promo_div")
          , E = v.querySelector(".inc_product_ecirp_label_block")
          , j = v.querySelector(".inc_product_desc_ecirp_active_text")
          , B = v.querySelector(".inc_product_desc_ecirp_regular_text")
          , H = v.querySelector(".inc_product_desc_ecirp_rrp_text")
          , F = v.querySelector(".inc_product_desc_att_block")
          , R = v.querySelector(".inc_product_desc_att_color_block")
          , U = v.querySelector(".inc_product_desc_att_color_title_text")
          , W = v.querySelector(".inc_product_desc_att_color_list_block")
          , V = v.querySelector(".inc_product_desc_att_size_block")
          , J = v.querySelector(".inc_product_desc_att_size_title_text")
          , Q = v.querySelector(".inc_product_desc_att_size_title_text_selected")
          , G = v.querySelector(".inc_product_desc_att_size_list_block")
          , K = v.querySelector(".inc_product_desc_att_zero_list_block")
          , Y = v.querySelector(".inc_product_desc_att_third_list_block")
          , X = v.querySelector(".inc_product_desc_att_zero_block")
          , Z = v.querySelector(".inc_product_desc_att_third_block")
          , $ = v.querySelector(".inc_product_desc_att_zero_title_text")
          , ee = v.querySelector(".inc_product_desc_att_third_title_text_selected")
          , te = v.querySelector(".inc_product_desc_att_third_title_text")
          , ce = v.querySelector(".inc_product_desc_add_block")
          , ie = v.querySelector(".inc_product_desc_add_text")
          , oe = v.querySelector(".inc_product_desc_add_img")
          , re = v.querySelector(".inc_product_desc_ratings_block")
          , de = v.querySelector(".inc_product_desc_ecirp_worth_text")
          , le = v.querySelector(".inc_product_desc_att_details_block")
          , ne = v.querySelector(".inc_product_variant_simple_text")
          , _e = v.querySelector(".inc_product_desc_add_title_text_block")
          , ae = v.querySelector(".inc_product_desc_att_variant_add_block")
          , se = v.querySelector(".inc_product_desc_att_variant_text")
          , ue = v.querySelector(".inc_product_desc_variant_popup_close_block")
          , pe = v.querySelector(".inc_product_variant_simple_block")
          , me = v.querySelector(".inc_product_add_text");
        if (v.querySelector(".inc_product_desc_qty_add_btn_block").classList.add(k.ProductType),
        e.config.catFlag.length >= 2 && null != _.querySelector(".inc_pdp_title_text") && (_.querySelector(".inc_pdp_title_text").innerText = "Frequently bought together"),
        window.innerWidth < 769) {
            let e = !1
              , t = p("div", "inc_details_mobile_quick_view")
              , c = p("div", "inc_producttype_details_block")
              , i = p("div", "prod_quick_view_close");
            if (t.appendChild(i),
            i.addEventListener("click", (function() {
                document.querySelector("html").classList.remove("inc_overlay"),
                document.querySelector("body").classList.remove("quick_view_active_inc"),
                null != document.querySelector(".inc_details_mobile_quick_view.quick_view_active") && (document.querySelector(".inc_product_block.quick_view_open").classList.remove("quick_view_open"),
                document.querySelector(".inc_details_mobile_quick_view.quick_view_active").classList.remove("quick_view_active"))
            }
            )),
            t.appendChild(c),
            f(k, c, e),
            e == d) {
                let e = p("div", "prod_quick_view_btn");
                e.innerText = "More Info",
                e.addEventListener("click", (function() {
                    null != v.querySelector(".inc_details_mobile_quick_view.quick_view_active") ? (document.querySelector("html").classList.remove("inc_overlay"),
                    document.querySelector("body").classList.remove("quick_view_active_inc"),
                    v.classList.remove("quick_view_open"),
                    v.querySelector(".inc_details_mobile_quick_view.quick_view_active").classList.remove("quick_view_active")) : (document.querySelector("body").classList.add("quick_view_active_inc"),
                    document.querySelector("html").classList.add("inc_overlay"),
                    v.classList.add("quick_view_open"),
                    v.querySelector(".inc_details_mobile_quick_view").classList.add("quick_view_active"))
                }
                ));
                let c = v.querySelector(".inc_product_desc_block");
                null != c && (c.appendChild(e),
                c.appendChild(t))
            }
        }
        ue.addEventListener("click", (function() {
            null == document.querySelector(".inc_product_modal_block.inc_active") && null == document.querySelector(".inc_sidebar_modal_block.inc_active") && (document.querySelector("html").classList.remove("inc_overlay"),
            document.querySelector("body").style.position = "relative",
            document.querySelector("body").style.overflow = "auto"),
            this.parentNode.classList.remove("inc_active"),
            v.classList.remove("show_overlay")
        }
        )),
        w.setAttribute("data-id", k.id),
        w.setAttribute("data-sku", k.sku),
        w.setAttribute("data-main_id", k.mainId),
        w.setAttribute("data-bundle_id", k.bundleId),
        C.querySelector(".inc_product_header_img_block").addEventListener("click", (function() {
            v.parentNode.classList.remove("inc_active")
        }
        ));
        let be = T.querySelector(".inc_product_img_main_img")
          , ye = p("img");
        null != k.imageURLMain && (ye.src = k.imageURLMain),
        ye.setAttribute("data-src", k.imageURLMain),
        ye.setAttribute("onerror", "this.src='" + e.config.noimage + "'"),
        ye.setAttribute("role", "img"),
        ye.setAttribute("aria-label", "Image"),
        ye.setAttribute("alt", k.nameMain),
        ye.setAttribute("data-mouseover", k.imageURL + "," + k.otherImageList),
        ye.setAttribute("data-imageURL", k.imageURLMain);
        let ve = document.createElement("a");
        ve.setAttribute("rel", "noopener noreferrer"),
        ve.appendChild(ye),
        ve.setAttribute("otherImageList", k.imageURL + "," + k.otherImageList),
        ve.setAttribute("imageURL", k.imageURLMain),
        be.appendChild(ve),
        ve.addEventListener("click", (function(e) {
            e.preventDefault()
        }
        )),
        ve.setAttribute("href", k.url),
        be.addEventListener("click", (function(t) {
            if (t.preventDefault(),
            e.config.recommendation == l) {
                document.querySelector("html").classList.add("inc_overlay"),
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.add("inc_active"),
                null != document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block") && (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block").classList.add("overflow_visible"),
                document.querySelector("body").classList.add("inc_popup_open"));
                let e = !0;
                v.parentNode.parentNode.parentNode.classList.contains("inc_af_product-list_block") == e && document.querySelector("html").classList.add("inc_overlay"),
                v.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_info_main_block").classList.add("inc_active"),
                v.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_description_main_block").classList.remove("inc_active"),
                v.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.remove("mini_popup");
                let t = v.parentNode.parentNode.querySelector(".inc_product_modal_block").querySelector(".inc_product_header_img_block");
                console.log("POPUP OPENS FROM IMAGE"),
                window.innerWidth < 781 && t && v.parentNode.parentNode.querySelector(".inc_product_modal_block").querySelector(".inc_product_header_main_block").appendChild(t)
            } else {
                e.methods.sendBundleClickTracking(v.getAttribute("data-main_id"), b);
                let t = v.querySelector(".inc_product_img_main_img a").href;
                setTimeout((function() {
                    window.location.href = t
                }
                ), 2e3)
            }
        }
        )),
        I.innerHTML = "",
        null != k.otherImageList && k.otherImageList.length >= 1 && S(I, k, v),
        z.addEventListener("click", (function(t) {
            if (t.preventDefault(),
            e.config.recommendation == l) {
                document.querySelector("html").classList.add("inc_overlay"),
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.add("inc_active"),
                null != document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block") && (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block").classList.add("overflow_visible"),
                document.querySelector("body").classList.add("inc_popup_open"));
                let e = !0;
                v.parentNode.parentNode.parentNode.classList.contains("inc_af_product-list_block") == e && document.querySelector("html").classList.add("inc_overlay"),
                v.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_info_main_block").classList.add("inc_active"),
                v.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_description_main_block").classList.remove("inc_active"),
                v.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.remove("mini_popup")
            } else {
                e.methods.sendBundleClickTracking(v.getAttribute("data-main_id"), b);
                let t = v.querySelector(".inc_product_img_main_img a").href;
                setTimeout((function() {
                    window.location.href = t
                }
                ), 2e3)
            }
        }
        )),
        M.classList.add("empty");
        let ge = document.createElement("div");
        "mainprod" == u && "pdp" == e.config.pageType ? null != k.nameMain && (ge.innerHTML = "<strong>This Item: </strong>" + r(k.nameMain)) : null != k.nameMain && (ge.innerHTML = r(k.nameMain));
        let ke = k.ratingsCount
          , he = k.reviewsCount;
        e.methods.get_product_ratings(ke, he, re);
        let fe = document.createElement("a");
        fe.setAttribute("style", "cursor: default;text-decoration: none;"),
        fe.href = k.url,
        fe.addEventListener("click", (function(e) {
            e.preventDefault()
        }
        )),
        fe.setAttribute("style", "text-transform: unset;"),
        null != k.nameMain && fe.setAttribute("title", k.nameMain),
        fe.appendChild(ge),
        O.appendChild(fe);
        let Se = parseFloat(k.activePrice).toFixed(2).toString()
          , qe = parseFloat(k.regularPrice).toFixed(2).toString()
          , xe = parseFloat(k.rrpPrice).toFixed(2).toString()
          , Le = (parseFloat(k.wasPrice).toFixed(2).toString(),
        k.savePrice,
        D(k.rrpPrice, k.activePrice));
        if (B.innerText = "",
        H.innerText = "",
        Se != qe && "" != qe && null != qe && 0 != qe ? (j.parentNode.parentNode.parentNode.classList.add("is_special_ecirp"),
        j.innerHTML = m.format(Se).replace(".00", ""),
        B.innerHTML = m.format(qe).replace(".00", ""),
        H.innerHTML = "<span> RRP </span>" + m.format(xe).replace(".00", ""),
        E.innerHTML = e.config.saveBadgeText + m.format(Le).replace(".00", "")) : (j.innerHTML = m.format(Se).replace(".00", ""),
        H.innerHTML = xe > 0 ? "<span> RRP </span>" + m.format(xe).replace(".00", "") : ""),
        Le > 0 && xe > 0 ? de.innerHTML = e.config.saveBadgeText + m.format(Le).replace(".00", "") : (de.parentNode.parentNode.classList.add("empty"),
        de.innerHTML = ""),
        window.innerWidth < 769) {
            let e = p("div", "inc_empty_popup");
            le.appendChild(e)
        }
        me.innerText = "am" == i || "sidebar" == i ? "Add to Basket" : "Add to Bundle",
        me.addEventListener("click", (function() {
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_desc_add_block").click()
        }
        )),
        q(v, i),
        g = new e.classes.FindObj({
            mainId: k.mainId
        });
        let Ae = e.dataStore.methods().getProductColorsObj(g)
          , we = e.dataStore.methods().getProductopt0Obj(g)
          , Ne = e.dataStore.methods().getProductSizesObj(g)
          , Pe = e.dataStore.methods().getProductopt3Obj(g);
        K.innerHTML = "",
        G.innerHTML = "",
        W.innerHTML = "",
        Y.innerHTML = "",
        we.att0Array.length > 0 && "Color" != we.att0Array[0].code && (g = new e.classes.FindObj({
            mainId: k.mainId
        }),
        K.innerHTML = "",
        we.att0Array.length > 0 && L($, X, we, K, i, v)),
        N(J, V, Ne, G, Q, i, v),
        A(Ae, v, W, i, R, U, s),
        P(Pe, te, Z, Y, i, ee),
        Ne.sizeArray.length > 0 && we.att0Array.length > 0 && F.classList.add("moreThanOne"),
        Ae.colorArray.length > 0 && we.att0Array.length > 0 && F.classList.add("moreThanOne");
        let Ce = e.dataStore.methods().getProductopt0Obj(g);
        if (0 == Ae.colorArray.length && 0 == Ce.att0Array.length) {
            switch (F.classList.add("attributes_not_avail"),
            ne.textContent = "Add",
            i) {
            case "pdp":
                ne.textContent = "Add to Bundle";
                break;
            case "sidebar":
            case "am":
                ne.textContent = "Add to Basket"
            }
            ne.classList.add("simple")
        } else if (Ae.colorArray.length > 0) {
            switch (F.classList.add("attributes_avail"),
            J.textContent = "View colours",
            ne.textContent = "Choose Size",
            null == v.querySelector(".inc_product_add_block.added_inc") && pe.classList.add("inc_select"),
            ne.classList.add("config"),
            _e.textContent = "Please select a Color",
            i) {
            case "pdp":
                se.textContent = "Add to Bundle";
                break;
            case "sidebar":
            case "am":
                se.textContent = "Add to Basket"
            }
            ne.classList.remove("simple")
        } else if (Ce.att0Array.length > 0)
            switch (ne.classList.remove("simple"),
            ne.textContent = "Choose Size",
            pe.classList.add("inc_select"),
            ne.classList.add("config"),
            F.classList.add("attributes_avail"),
            null == J.textContent && (J.textContent = "View Sizes"),
            _e.textContent = "Please select your Size",
            i) {
            case "pdp":
                se.textContent = "Add to Bundle";
                break;
            case "sidebar":
            case "am":
                se.textContent = "Add to Basket"
            }
        switch (Ae.colorArray.length > 0 && Ce.att0Array.length > 0 && (U.innerText = Ae.colorArray[0].label + " & SIZE"),
        Ne.sizeArray.length > 0 && Ce.att0Array.length > 0 && (J.innerText = Ce.att0Array[0].label + " & SIZE",
        $.innerText = Ce.att0Array[0].label + " & SIZE"),
        ae.addEventListener("click", (function() {
            let t = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
              , c = e.methods.checkVariantSelection(t);
            "Update" != this.textContent.trim() && this.parentNode.classList.contains("config_avail") != d || "Add to Basket" == this.innerText.trim() ? "Add to Basket" == this.innerText.trim() || "SELECT" == this.innerText.trim() ? 1 == c || 3 == c ? (null == document.querySelector(".inc_product_modal_block.inc_active") && null == document.querySelector(".inc_sidebar_modal_block.inc_active") && document.querySelector("html").classList.remove("inc_overlay"),
            this.parentNode.parentNode.querySelector(".inc_product_desc_variant_popup_close_block").click(),
            this.parentNode.parentNode.querySelector(".inc_product_desc_variant_popup_close_block").click(),
            v.classList.remove("show_overlay"),
            "Add to Basket" != this.textContent.trim() && "SELECT" != this.textContent.trim() && "Add" != this.textContent.trim() || this.parentNode.parentNode.parentNode.querySelector(".inc_product_desc_add_block").click()) : 2 != c && 0 != c || (null != this.parentNode.querySelector(".inc_product_desc_add_title_text_block") && (null == this.parentNode.getAttribute("data-color") && null == this.parentNode.getAttribute("data-zero") && null == this.parentNode.getAttribute("data-size") ? this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select your Size and Color options" : null == this.parentNode.getAttribute("data-zero") ? this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select your Size" : null == this.parentNode.getAttribute("data-zero") && null == this.parentNode.getAttribute("data-size") || (this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select a Color"),
            this.parentNode.querySelector(".inc_product_desc_add_title_text_block").setAttribute("style", "display:block;")),
            0 == c && null != this.parentNode.querySelector(".inc_product_desc_add_title_text_block") && (this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select your size")) : 1 == c || 3 == c ? (this.parentNode.parentNode.parentNode.querySelector(".inc_product_desc_add_block").click(),
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_desc_variant_popup_close_block").click()) : 2 != c && 0 != c || (0 != c && null != this.parentNode.parentNode.querySelector(".inc_variant_tag") && (this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select a Color"),
            null != this.parentNode.querySelector(".inc_product_desc_add_title_text_block") && (null == this.parentNode.getAttribute("data-color") && null == this.parentNode.getAttribute("data-zero") && null == this.parentNode.getAttribute("data-size") ? this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select your Size and Color options" : null != this.parentNode.getAttribute("data-color") ? this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select your Size" : (null != this.parentNode.getAttribute("data-zero") || this.parentNode.getAttribute("data-size")) && (this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select a Color"),
            this.parentNode.querySelector(".inc_product_desc_add_title_text_block").setAttribute("style", "display:block;")),
            0 == c && null != this.parentNode.querySelector(".inc_product_desc_add_title_text_block") && (this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select your size")) : 1 == c || 3 == c ? (null == document.querySelector(".inc_product_modal_block.inc_active") && null == document.querySelector(".inc_sidebar_modal_block.inc_active") && document.querySelector("html").classList.remove("inc_overlay"),
            this.parentNode.parentNode.querySelector(".inc_product_desc_variant_popup_close_block").click(),
            this.parentNode.parentNode.querySelector(".inc_product_desc_variant_popup_close_block").click(),
            v.classList.remove("show_overlay"),
            "Add" == this.textContent.trim() && this.parentNode.parentNode.parentNode.querySelector(".inc_product_desc_add_block").click()) : 2 != c && 0 != c || (0 != c && null != this.parentNode.parentNode.querySelector(".inc_variant_tag") && (this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select a Color",
            this.parentNode.parentNode.querySelector(".inc_variant_tag").setAttribute("style", "border:1px solid #E52B45;")),
            null != this.parentNode.querySelector(".inc_product_desc_add_title_text_block") && (null == this.parentNode.getAttribute("data-color") && null != this.parentNode.getAttribute("data-zero") && null != this.parentNode.getAttribute("data-size") ? this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select your Size and Color options" : null != this.parentNode.getAttribute("data-color") && this.parentNode.querySelectorAll("inc_product_desc_att_color_list_item_block.inc_active").length > 0 ? this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select your Size" : null == this.parentNode.getAttribute("data-zero") && null == this.parentNode.getAttribute("data-size") || (this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select a Color"),
            this.parentNode.querySelector(".inc_product_desc_add_title_text_block").setAttribute("style", "display:block;")))
        }
        )),
        pe.addEventListener("click", (function() {
            if (e.config.recommendation && "simple" != k.ProductType) {
                document.querySelector("html").classList.add("inc_overlay"),
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.add("inc_active"),
                null != document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block") && (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block").classList.add("overflow_visible"),
                document.querySelector("body").classList.add("inc_popup_open"));
                let e = !0;
                v.parentNode.parentNode.parentNode.classList.contains("inc_af_product-list_block") == e && document.querySelector("html").classList.add("inc_overlay"),
                v.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_info_main_block").classList.add("inc_active"),
                v.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_description_main_block").classList.remove("inc_active")
            } else if ("sidebar" == i && "cartPage" == e.config.pageType && "simple" != k.ProductType)
                document.querySelector("html").classList.add("inc_overlay"),
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.add("inc_active"),
                null != document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block") && (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block").classList.add("overflow_visible"),
                document.querySelector("body").classList.add("inc_popup_open")),
                v.parentNode.parentNode.parentNode.classList.contains("inc_af_product-list_block") == d && document.querySelector("html").classList.add("inc_overlay"),
                v.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_info_main_block").classList.add("inc_active"),
                v.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_description_main_block").classList.remove("inc_active");
            else if (e.config.recommendation && "simple" == k.ProductType) {
                y(this, this.parentNode.parentNode.querySelector(".inc_product_variant_simple_text"))
            }
            if (null != document.querySelector(".inc_product_desc_att_block.inc_active") && document.querySelector(".inc_product_desc_att_block.inc_active").classList.remove("inc_active"),
            function(e) {
                let t = null;
                null != document.querySelector(".inc_pdp_block") ? (t = document.querySelector(".inc_pdp_block"),
                a = (window.scrollY || t.scrollTop) - (t.clientTop || 0)) : null != document.querySelector(".inc_af_block") && (t = document.querySelector(".inc_af_block"),
                a = (window.scrollY || t.scrollTop) - (t.clientTop || 0)),
                null != e && (null != e.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_header_block") && e.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_header_block").click(),
                Array.prototype.forEach.call(document.querySelectorAll(".inc_product_modal_block"), (function(e) {
                    e.classList.remove("inc_active")
                }
                )))
            }(null),
            null != this.querySelector(".inc_product_variant_simple_text.simple"))
                this.parentNode.parentNode.parentNode.querySelector(".inc_product_desc_add_block").click();
            else {
                document.querySelector("html").classList.add("inc_overlay"),
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.add("inc_active"),
                null != document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block") && (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block").classList.add("overflow_visible"),
                document.querySelector("body").classList.add("inc_popup_open")),
                v.parentNode.parentNode.parentNode.classList.contains("inc_af_product-list_block") == d && document.querySelector("html").classList.add("inc_overlay"),
                v.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_info_main_block").classList.add("inc_active"),
                v.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_description_main_block").classList.remove("inc_active"),
                window.innerWidth < 781 && "sidebar" != i && "am" != i && "inc_af_product-list_block" != v.parentElement.parentElement.parentElement.className && v.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.add("mini_popup");
                let e = v.parentNode.parentNode.querySelector(".inc_product_modal_block").querySelector(".inc_product_header_img_block");
                if (window.innerWidth < 820 && e) {
                    var t = v.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_header_main_block");
                    t.parentNode.insertBefore(e, t)
                }
                console.log("POPUP OPEN FROM BUTTON")
            }
        }
        )),
        i) {
        case "pdp":
            ie.textContent = "Add";
            break;
        case "sidebar":
        case "am":
            ie.textContent = "Add to Basket"
        }
        return ce.addEventListener("click", (function() {
            let c = v.parentNode.parentNode
              , o = c.querySelector(".inc_product_modal_block").querySelector(".inc_product_block")
              , r = e.methods.checkVariantSelection(c)
              , _ = v.getAttribute("data-sku")
              , s = v.getAttribute("data-main_id")
              , u = v.getAttribute("data-main_id")
              , m = v.getAttribute("data-bundle_id")
              , b = v.querySelector(".inc_product_desc_title_text").textContent
              , y = v.querySelector(".inc_product_desc_ecirp_active_text").textContent.replace("£", "")
              , g = c.querySelector(".inc_product_showcase_block .inc_product_qty_block input")
              , k = parseInt(g.value);
            k < 1 && (k = 1);
            let h = ie.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
              , f = !1;
            if (null == document.querySelector(".inc_sidebar_modal_block.inc_active")) {
                if (1 == r || t == l || n == l ? f = !0 : null == document.querySelector(".inc_product_modal_block.inc_active") && (null != document.querySelector(".inc_pdp_bundle_block.inc_active .inc_pdp_bundle_cart_title_img_block") && document.querySelector(".inc_pdp_bundle_block.inc_active .inc_pdp_bundle_cart_title_img_block").click(),
                window.innerWidth < 769 ? c.querySelector(".inc_product_variant_simple_text").click() : c.querySelector(".inc_product_variant_simple_block").click(),
                "Add" == ie.textContent && (null == document.querySelector(".inc_product_modal_block.inc_active") && (window.innerWidth < 769 ? c.querySelector(".inc_product_variant_simple_text").click() : c.querySelector(".inc_product_details_prod_block").click()),
                null != c.querySelector(".inc_product_variant_simple_text").getAttribute("title_") && (c.querySelector(".inc_product_variant_simple_text").textContent = c.querySelector(".inc_product_variant_simple_text").getAttribute("title_")))),
                "Add" == ie.textContent) {
                    if (f == d) {
                        ie.textContent = "Added",
                        ie.classList.add("added"),
                        me.textContent = "Added",
                        ie.parentNode.parentNode.parentNode.querySelector(".inc_product_desc_add_block").classList.add("Inc_checked");
                        let t = document.querySelector('.inc_pdp_bundle_product_list_item_block[data-main_id="' + s + '"]');
                        o.querySelector(".inc_product_desc_add_text").textContent = "Update",
                        null != t && (t.classList.add("product_added"),
                        t.querySelector(".inc_pdp_bundle_product_list_item_added_btn_img").classList.add("checked")),
                        oe.classList.add("checked"),
                        o.querySelector(".inc_product_desc_add_img").classList.add("checked"),
                        "pdp" == e.config.pageType && "pdp" == i && e.methods.updateBundleCart({
                            sku: _,
                            qty: k
                        }, "add", u, m, b, y),
                        null != h && null != h.querySelector(".inc_product_modal_block.inc_active") && (a > 100 && window.scrollTo(0, a),
                        h.querySelector(".inc_product_modal_block.inc_active").classList.remove("inc_active")),
                        c.querySelector(".inc_product_variant_simple_block").classList.add("added_inc"),
                        c.querySelector(".inc_product_desc_qty_add_btn_block").classList.add("added_inc"),
                        null != c.querySelector(".inc_product_desc_qty_add_btn_block .inc_add_text") && (c.querySelector(".inc_product_desc_qty_add_btn_block .inc_add_text").innerText = "Added to Bundle"),
                        c.querySelector(".inc_product_add_block").classList.add("added_inc"),
                        c.querySelector(".inc_product_modal_block .inc_product_add_block").classList.add("added_inc"),
                        c.querySelector(".inc_product_desc_att_variant_text").textContent = "Update";
                        let r = c.querySelector(".inc_product_variant_simple_text").getAttribute("title_");
                        if (c.querySelector(".inc_product_variant_simple_text").innerText = "",
                        null != h.querySelector(".inc_product_modal_block .inc_product_desc_att_color_list_item_block.inc_active")) {
                            let e = "";
                            h.querySelector(".inc_product_modal_block .inc_product_desc_att_color_list_item_block.inc_active div") && (e = h.querySelector(".inc_product_modal_block .inc_product_desc_att_color_list_item_block.inc_active div").getAttribute("data-colorcode"));
                            let t = p("div", "inc_colortile");
                            if (t.addEventListener("click", (function(e) {
                                e.preventDefault()
                            }
                            )),
                            e)
                                t.style.backgroundColor = e,
                                c.querySelector(".inc_product_variant_simple_text").innerHTML = "",
                                c.querySelector(".inc_product_variant_simple_text").appendChild(t),
                                c.querySelector(".inc_product_variant_simple_text").innerHTML = c.querySelector(".inc_product_variant_simple_text").innerHTML + "<span>" + r + "</span>",
                                t.classList.add("colorBox"),
                                null != c.querySelector(".inc_product_variant_simple_block.inc_select") && c.querySelector(".inc_product_variant_simple_block.inc_select").classList.remove("inc_select"),
                                c.querySelector(".inc_product_variant_simple_text").setAttribute("title", r);
                            else {
                                let e = p("span", "variant_span");
                                e.innerText = r,
                                c.querySelector(".inc_product_variant_simple_text").appendChild(e),
                                c.querySelector(".inc_product_variant_simple_text").setAttribute("title", r),
                                null != c.querySelector(".inc_product_variant_simple_block.inc_select") && c.querySelector(".inc_product_variant_simple_block.inc_select").classList.remove("inc_select"),
                                c.querySelector(".inc_product_variant_simple_text").setAttribute("title", r)
                            }
                        } else {
                            let e = p("span", "variant_span");
                            e.innerText = r,
                            c.querySelector(".inc_product_variant_simple_text").appendChild(e),
                            c.querySelector(".inc_product_variant_simple_text").setAttribute("title", r),
                            null != c.querySelector(".inc_product_variant_simple_block.inc_select") && c.querySelector(".inc_product_variant_simple_block.inc_select").classList.remove("inc_select")
                        }
                    }
                } else if ("Added" == ie.textContent) {
                    if ("Update" != o.querySelector(".inc_product_desc_add_text").textContent && null != h.querySelector(".inc_product_modal_block.inc_active")) {
                        ie.textContent = "Add",
                        me.textContent = "Add to Bundle",
                        ie.classList.remove("added"),
                        ie.parentNode.parentNode.classList.remove("Inc_checked"),
                        o.querySelector(".inc_product_desc_add_text").textContent = "Add to Bundle";
                        let t = document.querySelector('.inc_pdp_bundle_product_list_item_block[data-main_id="' + s + '"]');
                        null != t && (t.classList.remove("product_added"),
                        t.querySelector(".inc_pdp_bundle_product_list_item_added_btn_img").classList.remove("checked")),
                        oe.classList.remove("checked"),
                        o.querySelector(".inc_product_desc_add_img").classList.remove("checked"),
                        x(c),
                        "pdp" == e.config.pageType && "pdp" == i && e.methods.updateBundleCart({
                            sku: _,
                            qty: k
                        }, "sub", u, m, b, y)
                    } else if (null == h.querySelector(".inc_product_modal_block.inc_active")) {
                        ie.textContent = "Add",
                        me.textContent = "Add to Bundle",
                        ie.classList.remove("added"),
                        ie.parentNode.parentNode.classList.remove("Inc_checked"),
                        o.querySelector(".inc_product_desc_add_text").textContent = "Add to Bundle";
                        let t = document.querySelector('.inc_pdp_bundle_product_list_item_block[data-main_id="' + s + '"]');
                        null != t && (t.classList.remove("product_added"),
                        t.querySelector(".inc_pdp_bundle_product_list_item_added_btn_img").classList.remove("checked")),
                        x(c),
                        oe.classList.remove("checked"),
                        o.querySelector(".inc_product_desc_add_img").classList.remove("checked"),
                        "pdp" == e.config.pageType && "pdp" == i && e.methods.updateBundleCart({
                            sku: _,
                            qty: k
                        }, "sub", u, m, b, y)
                    }
                    null != h && null != h.querySelector(".inc_product_modal_block.inc_active") && (a > 100 && window.scrollTo(0, a),
                    h.querySelector(".inc_product_modal_block.inc_active").classList.remove("inc_active"))
                }
            } else
                1 == r ? (ie.textContent = "Adding...",
                ie.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;")) : null == document.querySelector(".inc_product_modal_block.inc_active") && c.querySelector(".inc_product_details_prod_block").click()
        }
        )),
        v
    }
    ,
    e.methods.createProductModalBlock = function(t, c, i, l, n, _, s) {
        let u = n.querySelector(".inc_product_block")
          , b = u
          , y = new e.classes.FindObj({
            id: t
        })
          , v = e.dataStore.methods().getProductById(y);
        h(u, v);
        let g = b.querySelector(".inc_product_header_main_block")
          , k = b.querySelector(".inc_product_img_block")
          , x = b.querySelector(".inc_product_img_gallery_list_block")
          , w = b.querySelector(".inc_product_desc_title_block")
          , C = b.querySelector(".inc_product_desc_title_text")
          , T = b.querySelector(".inc_product_desc_att_color_title_text")
          , I = b.querySelector(".inc_product_desc_ecirp_active_text")
          , z = b.querySelector(".inc_product_desc_ecirp_regular_text")
          , O = b.querySelector(".inc_product_desc_ecirp_rrp_text")
          , M = b.querySelector(".inc_product_desc_att_color_block")
          , E = b.querySelector(".inc_product_desc_att_color_list_block")
          , j = b.querySelector(".inc_product_desc_att_size_block")
          , H = b.querySelector(".inc_product_desc_att_size_title_text")
          , F = b.querySelector(".inc_product_desc_att_size_title_text_selected")
          , R = b.querySelector(".inc_product_desc_att_size_list_block")
          , W = b.querySelector(".inc_product_desc_att_zero_list_block")
          , V = b.querySelector(".inc_product_desc_att_third_list_block")
          , J = b.querySelector(".inc_product_desc_att_zero_block")
          , Q = b.querySelector(".inc_product_desc_att_third_block")
          , G = b.querySelector(".inc_product_desc_att_zero_title_text")
          , K = b.querySelector(".inc_product_desc_att_third_title_text_selected")
          , Y = b.querySelector(".inc_product_desc_att_third_title_text")
          , X = b.querySelector(".inc_product_desc_add_block")
          , Z = b.querySelector(".inc_product_desc_add_text")
          , $ = b.querySelectorAll(".inc_product_desc_ratings_block")
          , ee = b.querySelector(".inc_product_img_gallery_right_block")
          , te = b.querySelector(".inc_product_img_gallery_left_block")
          , ce = b.querySelector(".inc_product_description_main_block")
          , ie = b.querySelector(".inc_product_header_main_title_block")
          , oe = b.querySelector(".inc_product_header_main_rating_block")
          , re = b.querySelector(".inc_product_ecirp_label_block")
          , de = b.querySelector(".inc_product_desc_att_block")
          , le = b.querySelector(".inc_product_desc_block")
          , ne = b.querySelector(".inc_product_extension_block")
          , _e = b.querySelector(".inc_product_desc_ecirp_worth_text");
        if (window.innerWidth < 820) {
            let t = p("div", "inc_product_mobile_full_deatils");
            t.innerHTML = "<span></span>VIEW FULL DETAILS",
            le.appendChild(t),
            t.addEventListener("click", (function() {
                e.methods.sendBundleClickTracking(u.getAttribute("data-main_id"), s),
                U();
                let t = u.querySelector(".inc_product_img_main_img a").href;
                setTimeout((function() {
                    window.location.href = t
                }
                ), 2e3)
            }
            ))
        }
        if (v.manufacturer ? ne.innerText = v.manufacturer : ne.remove(),
        g.querySelector(".inc_product_header_img_block").addEventListener("click", (function() {
            null == document.querySelector(".inc_sidebar_modal_block.inc_active") && (document.querySelector("html").classList.remove("inc_overlay"),
            document.querySelector("body").classList.remove("inc_popup_open")),
            null != document.querySelector(".inc_sidebar_modal_block.inc_active") && document.querySelector(".inc_sidebar_modal_block.inc_active").classList.remove("overflow_visible"),
            null != u.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_desc_qty_input_text input") && null != u.parentNode.parentNode.querySelector(".inc_product_showcase_block .inc_product_desc_qty_input_text input") && u.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_desc_qty_input_text input").value != u.parentNode.parentNode.querySelector(".inc_product_showcase_block .inc_product_desc_qty_input_text input").value && (u.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_desc_qty_input_text input").value = u.parentNode.parentNode.querySelector(".inc_product_showcase_block .inc_product_desc_qty_input_text input").value),
            u.parentNode.classList.remove("inc_active"),
            u.parentNode.classList.remove("mini_popup"),
            u.parentNode.querySelector(".inc_product_header_title_block").classList.add("inc_active"),
            u.parentNode.querySelector(".inc_product_header_title_block_1").classList.remove("inc_active"),
            window.innerWidth < 768 ? window.scrollTo(0, 1e3) : a > 100 && window.scrollTo(0, a)
        }
        )),
        window.innerWidth > 820) {
            let e = !1
              , t = p("div", "inc_producttype_details_block");
            if (f(v, t, e),
            e == d) {
                let e = u.querySelector(".inc_product_desc_att_details_block");
                null != e && e.parentNode.insertBefore(t, e)
            }
        }
        let ae = k.querySelector(".inc_product_img_main_img")
          , se = p("img");
        null != v.imageURLMain && (se.src = v.imageURLMain,
        se.setAttribute("data-src", v.imageURLMain),
        se == d && (se.src = v.imageURLMain)),
        se.setAttribute("onerror", "this.src='" + e.config.noimage + "'"),
        se.setAttribute("role", "img"),
        se.setAttribute("aria-label", "Image"),
        se.setAttribute("alt", v.nameMain),
        window.innerWidth < 769 ? null != v.otherImageList && v.otherImageList.length < 2 && (ee.style.display = "none",
        te.style.display = "none") : null != v.otherImageList && v.otherImageList.length < 5 && (ee.style.display = "none",
        te.style.display = "none");
        let ue = document.createElement("a");
        ue.setAttribute("rel", "noopener noreferrer"),
        "mainprod" != _ && (ue.href = v.url,
        ue.style.cursor = "pointer"),
        ue.appendChild(se),
        ue.setAttribute("otherImageList", v.imageURL + "," + v.otherImageList),
        ue.setAttribute("imageURL", v.imageURLMain),
        ae.appendChild(ue),
        "mainprod" != _ && ae.addEventListener("click", (function(t) {
            t.preventDefault(),
            e.methods.sendBundleClickTracking(u.getAttribute("data-main_id"), s),
            U();
            let c = u.querySelector(".inc_product_img_main_img a").href;
            setTimeout((function() {
                window.location.href = c
            }
            ), 2e3)
        }
        )),
        x.innerHTML = "",
        null != v.otherImageList && v.otherImageList.length >= 1 ? S(x, v, u) : u.classList.add("inc_other_noimage"),
        "mainprod" != _ && w.addEventListener("click", (function(t) {
            t.preventDefault(),
            e.methods.sendBundleClickTracking(u.getAttribute("data-main_id"), s),
            U();
            let c = u.querySelector(".inc_product_img_main_img a").href;
            setTimeout((function() {
                window.location.href = c
            }
            ), 2e3)
        }
        ));
        let pe = document.createElement("div");
        null != v.nameMain && (pe.innerText = r(v.nameMain));
        let me = document.createElement("a");
        null != v.nameMain && me.setAttribute("title", v.nameMain),
        "mainprod" != _ && me.setAttribute("href", v.url),
        me.setAttribute("rel", "noopener noreferrer"),
        null != v.nameMain && (me.innerText = r(v.nameMain)),
        ie.appendChild(me),
        "mainprod" != _ && me.addEventListener("click", (function(t) {
            t.preventDefault(),
            e.methods.sendBundleClickTracking(u.getAttribute("data-main_id"), s),
            U();
            let c = u.querySelector(".inc_product_img_main_img a").href;
            window.innerWidth < 820 ? setTimeout((function() {
                window.location.href = c
            }
            ), 3e3) : setTimeout((function() {
                window.location.href = c
            }
            ), 2e3)
        }
        ));
        let be = v.ratingsCount
          , ye = v.reviewsCount;
        window.innerWidth < 781 ? (o($[1], w),
        e.methods.get_product_ratings(be, ye, $[1])) : e.methods.get_product_ratings(be, ye, $[0]);
        let ve = document.createElement("span");
        ve.classList.add("product_modal_sku"),
        ve.innerText = "#" + v.sku,
        oe.appendChild(ve);
        let ge = document.createElement("a");
        ge.href = v.url,
        ge.setAttribute("style", "text-transform: unset;"),
        ge.setAttribute("title", v.nameMain),
        ge.appendChild(pe),
        C.appendChild(ge);
        let ke = parseFloat(v.activePrice).toFixed(2).toString()
          , he = parseFloat(v.regularPrice).toFixed(2).toString()
          , fe = parseFloat(v.rrpPrice).toFixed(2).toString()
          , Se = D(v.rrpPrice, v.activePrice);
        z.innerText = "",
        O.innerText = "",
        ke != he && "" != he && null != he && 0 != he ? (I.parentNode.parentNode.parentNode.classList.add("is_special_ecirp"),
        I.innerHTML = m.format(ke).replace(".00", ""),
        z.innerHTML = m.format(he).replace(".00", ""),
        re.innerHTML = e.config.saveBadgeText + m.format(Se).replace(".00", ""),
        O.innerHTML = "<span> RRP </span>" + m.format(fe).replace(".00", "")) : (I.innerText = m.format(ke).replace(".00", ""),
        O.innerHTML = fe > 0 ? "<span> RRP </span>" + m.format(fe).replace(".00", "") : ""),
        Se > 0 && fe > 0 ? _e.innerHTML = e.config.saveBadgeText + m.format(Se).replace(".00", "") : (_e.parentNode.parentNode.classList.add("empty"),
        _e.innerHTML = ""),
        q(u, c),
        y = new e.classes.FindObj({
            mainId: v.mainId
        }),
        (0 == e.dataStore.methods().getProductColorsObj(y).colorArray.length && 0 == e.dataStore.methods().getProductopt0Obj(y).att0Array.length || e.dataStore.methods().getProductopt0Obj(y).att0Array.length > 0 || e.dataStore.methods().getProductColorsObj(y).colorArray.length > 0) && (g.querySelector(".inc_product_header_title_text").innerText = "Overview");
        let qe = u.querySelector(".inc_product_header_title_block_1");
        u.querySelector(".inc_product_header_title_text_1").innerText = "Description",
        window.innerWidth < 820 ? ce.innerHTML = "<span>Description</span>" + v.description : ce.innerHTML = v.description;
        let xe = qe.parentNode.querySelector(".inc_product_header_title_block")
          , Le = u.querySelector(".inc_product_header_new_page")
          , Ae = u.querySelector(".inc_product_header_new_page .inc_product_header_new_page_text");
        Ae.innerText = "Open in a new tab",
        Ae.setAttribute("href", v.url),
        Ae.setAttribute("target", "_blank"),
        Ae.setAttribute("rel", "noopener noreferrer"),
        Le.addEventListener("click", (function() {
            e.methods.sendBundleClickTracking(v.mainId, s),
            U()
        }
        )),
        qe.addEventListener("click", (function() {
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_description_main_block").classList.add("inc_active"),
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_info_main_block").classList.remove("inc_active"),
            this.parentNode.querySelector(".inc_product_header_title_block").classList.remove("inc_active"),
            this.classList.add("inc_active")
        }
        )),
        xe.classList.add("inc_active"),
        xe.addEventListener("click", (function() {
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_description_main_block").classList.remove("inc_active"),
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_info_main_block").classList.add("inc_active"),
            xe.classList.add("inc_active"),
            qe.classList.remove("inc_active")
        }
        ));
        let we = e.dataStore.methods().getProductopt0Obj(y)
          , Ne = e.dataStore.methods().getProductColorsObj(y)
          , Pe = e.dataStore.methods().getProductSizesObj(y)
          , Ce = e.dataStore.methods().getProductopt3Obj(y);
        switch (W.innerHTML = "",
        R.innerHTML = "",
        E.innerHTML = "",
        V.innerHTML = "",
        we.att0Array.length > 0 && ("Color" != we.att0Array[0].code && (W.innerHTML = "",
        we.att0Array.length > 0 && L(G, J, we, W, c, u)),
        de.classList.add("attributes_avail")),
        (Ne.colorArray.length > 0 || Pe.sizeArray.length > 0 || Ce.att3Array.length > 0) && (e.config.ddFlag = !0),
        A(Ne, u, E, c, M, T, null),
        N(H, j, Pe, R, F, c, u),
        P(Ce, Y, Q, V, c, K),
        we.att0Array.length > 0 && u.querySelector(".inc_product_desc_att_zero_title_block").addEventListener("click", (function() {
            null != document.querySelector(".inc_product_desc_att_color_block.show_dropdown") && document.querySelector(".inc_product_desc_att_color_block.show_dropdown").classList.remove("show_dropdown"),
            null != document.querySelector(".inc_product_desc_att_size_block.show_dropdown") && document.querySelector(".inc_product_desc_att_size_block.show_dropdown").classList.remove("show_dropdown"),
            null != document.querySelector(".inc_product_desc_att_third_block.show_dropdown") && document.querySelector(".inc_product_desc_att_third_block.show_dropdown").classList.remove("show_dropdown"),
            this.parentNode.classList.toggle("show_dropdown")
        }
        )),
        Ne.colorArray.length > 0 && u.querySelector(".inc_product_desc_att_color_title_block").addEventListener("click", (function() {
            null != document.querySelector(".inc_product_desc_att_zero_block.show_dropdown") && document.querySelector(".inc_product_desc_att_zero_block.show_dropdown").classList.remove("show_dropdown"),
            null != document.querySelector(".inc_product_desc_att_size_block.show_dropdown") && document.querySelector(".inc_product_desc_att_size_block.show_dropdown").classList.remove("show_dropdown"),
            null != document.querySelector(".inc_product_desc_att_third_block.show_dropdown") && document.querySelector(".inc_product_desc_att_third_block.show_dropdown").classList.remove("show_dropdown"),
            this.parentNode.classList.toggle("show_dropdown")
        }
        )),
        Pe.sizeArray.length > 0 && u.querySelector(".inc_product_desc_att_size_title_block").addEventListener("click", (function() {
            null != document.querySelector(".inc_product_desc_att_zero_block.show_dropdown") && document.querySelector(".inc_product_desc_att_zero_block.show_dropdown").classList.remove("show_dropdown"),
            null != document.querySelector(".inc_product_desc_att_third_block.show_dropdown") && document.querySelector(".inc_product_desc_att_third_block.show_dropdown").classList.remove("show_dropdown"),
            null != document.querySelector(".inc_product_desc_att_color_block.show_dropdown") && document.querySelector(".inc_product_desc_att_color_block.show_dropdown").classList.remove("show_dropdown"),
            this.parentNode.classList.toggle("show_dropdown")
        }
        )),
        Ce.att3Array.length > 0 && u.querySelector(".inc_product_desc_att_third_title_block").addEventListener("click", (function() {
            null != document.querySelector(".inc_product_desc_att_zero_block.show_dropdown") && document.querySelector(".inc_product_desc_att_zero_block.show_dropdown").classList.remove("show_dropdown"),
            null != document.querySelector(".inc_product_desc_att_size_block.show_dropdown") && document.querySelector(".inc_product_desc_att_size_block.show_dropdown").classList.remove("show_dropdown"),
            null != document.querySelector(".inc_product_desc_att_color_block.show_dropdown") && document.querySelector(".inc_product_desc_att_color_block.show_dropdown").classList.remove("show_dropdown"),
            this.parentNode.classList.toggle("show_dropdown")
        }
        )),
        te.setAttribute("title", "Scroll left"),
        ee.setAttribute("title", "Scroll right"),
        ee.addEventListener("click", (function() {
            let e = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            B(e.getAttribute("data-main_id"), 0, e, "right", "arrow")
        }
        )),
        te.addEventListener("click", (function() {
            let e = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            B(e.getAttribute("data-main_id"), 0, e, "left", "arrow")
        }
        )),
        (null == v.otherImageList || v.otherImageList.length < 2) && (ee.style.display = "none",
        te.style.display = "none"),
        c) {
        case "pdp":
            Z.innerText = "Add to Bundle";
            break;
        case "sidebar":
        case "am":
            Z.innerText = "Add to Basket"
        }
        return X.addEventListener("click", (function() {
            u.parentNode.querySelector(".inc_product_header_title_block").classList.add("inc_active"),
            u.parentNode.querySelector(".inc_product_header_title_block_1").classList.remove("inc_active"),
            u.parentNode.querySelector(".inc_product_description_main_block").classList.remove("inc_active");
            let t = u.parentNode.parentNode
              , c = e.methods.checkVariantSelection(t);
            null == document.querySelector(".sidebar_outer.sidebar_outer_active") && (document.querySelector("body").classList.remove("inc_popup_open"),
            document.querySelector("html").classList.remove("inc_overlay"));
            let i = t.querySelector(".inc_product_showcase_block").querySelector(".inc_product_block");
            if ("pdp" == e.config.pageType || "productList" == e.config.pageType ? "cartPage" != e.config.pageType && "ticket" != e.config.pageType && -1 == t.parentNode.className.indexOf("inc_af_product-list_block") && i.querySelector(".inc_product_desc_add_block").click() : "cartPage" != e.config.pageType && e.config.recommendation && "ticket" != e.config.pageType && -1 == t.parentNode.className.indexOf("inc_af_product-list_block") && i.querySelector(".inc_product_desc_add_block").click(),
            t.classList.contains("configurable") == d)
                if (1 == c)
                    setTimeout((function() {
                        null != document.querySelector(".sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active") && (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active").classList.remove("inc_active"),
                        document.querySelector("body").classList.remove("inc_popup_open"),
                        window.innerWidth < 768 ? window.scrollTo(0, 1e3) : a > 100 && window.scrollTo(0, a),
                        document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block").classList.remove("overflow_visible"))
                    }
                    ), 200);
                else {
                    t.querySelector(".inc_product_desc_add_title_text_block").setAttribute("style", "color:#E52B45"),
                    null != document.querySelector(".inc_product_modal_block.inc_active .inc_product_block .inc_product_desc_att_color_block") && (document.querySelector("html").classList.add("inc_popup_open"),
                    document.querySelector("html").classList.add("inc_overlay"))
                }
            else
                setTimeout((function() {
                    null != document.querySelector(".inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active") && (document.querySelector(".inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active").classList.remove("inc_active"),
                    document.querySelector("body").classList.remove("inc_popup_open"),
                    window.innerWidth < 768 ? window.scrollTo(0, 1e3) : a > 100 && window.scrollTo(0, a));
                    let e = document.querySelector(".inc_sidebar_modal_block");
                    null == document.querySelector(".inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active") && null != e && e.classList.remove("overflow_visible")
                }
                ), 100);
            setTimeout((function() {
                null != document.querySelector(".sidebar_outer.sidebar_outer_active") && null == document.querySelector(".inc_product_modal_block.inc_active") && document.querySelector(".inc_sidebar_modal_block.inc_active").classList.remove("overflow_visible")
            }
            ), 200)
        }
        )),
        u
    }
    ,
    e.methods.mappvariants = function(t, c, i) {
        if (null != t.parentNode) {
            let o = t.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            o.classList.contains("inc_product_showcase_block") != d && o.classList.contains("inc_product_modal_block") != d || (o = o.parentNode),
            o.classList.contains("inc_product_block") == d ? o = o.parentNode.parentNode : o.classList.contains("inc_product_info_main_block") == d && (o = o.parentNode.parentNode.parentNode);
            let r = o.querySelector(".inc_product_showcase_block .inc_product_block")
              , n = o.querySelector(".inc_product_modal_block .inc_product_block")
              , _ = r.getAttribute("data-main_id");
            if ("zero" == i) {
                let e = t.getAttribute("data-size");
                n.querySelector(".inc_product_desc_att_block").setAttribute("data-zero", e),
                r.querySelector(".inc_product_desc_att_block").setAttribute("data-zero", e)
            } else if ("color" == i) {
                let e = t.getAttribute("data-color");
                n.querySelector(".inc_product_desc_att_block").setAttribute("data-color", e),
                r.querySelector(".inc_product_desc_att_block").setAttribute("data-color", e)
            } else if ("size" == i) {
                let e = t.getAttribute("data-size");
                n.querySelector(".inc_product_desc_att_block").setAttribute("data-size", e),
                r.querySelector(".inc_product_desc_att_block").setAttribute("data-size", e)
            } else if ("third" == i) {
                let e = t.getAttribute("data-size");
                n.querySelector(".inc_product_desc_att_block").setAttribute("data-third", e),
                r.querySelector(".inc_product_desc_att_block").setAttribute("data-third", e)
            }
            n.querySelector(".inc_product_desc_att_block").setAttribute("data-module-id", _);
            let a = e.dataStore.methods().getFirstProductObjByMainId({
                mainId: _
            }).id
              , s = new e.classes.FindObj({
                id: a
            })
              , u = n.querySelector(".inc_product_desc_att_block").getAttribute("data-zero")
              , m = n.querySelector(".inc_product_desc_att_block").getAttribute("data-size")
              , b = n.querySelector(".inc_product_desc_att_block").getAttribute("data-color")
              , y = n.querySelector(".inc_product_desc_att_block").getAttribute("data-third");
            s.mainId = _,
            s.colorText = "",
            null != b && (s.colorText = b,
            n.querySelector(".inc_product_desc_att_color_title_text_selected").setAttribute("style", 'color:"#4D4D4F";'),
            n.querySelector(".inc_product_desc_att_color_title_text_selected").innerText = b,
            r.querySelector(".inc_product_desc_att_color_title_text_selected").setAttribute("style", 'color:"#4D4D4F";'),
            r.querySelector(".inc_product_desc_att_color_title_text_selected").innerText = b),
            null != u && (s.zeroText = u,
            r.querySelector(".inc_product_desc_att_zero_title_text_selected").innerText = u,
            r.querySelector(".inc_product_desc_att_zero_title_text_selected").setAttribute("style", 'color:"#4D4D4F";'),
            n.querySelector(".inc_product_desc_att_zero_title_text_selected").classList.add("inc_change_color"),
            n.querySelector(".inc_product_desc_att_zero_title_text_selected").innerText = u),
            null != m && (s.sizeText = m,
            r.querySelector(".inc_product_desc_att_size_title_text_selected").innerText = m,
            n.querySelector(".inc_product_desc_att_size_title_text_selected").innerText = m,
            r.querySelector(".inc_product_desc_att_size_title_text_selected").setAttribute("style", 'color:"#4D4D4F";'),
            n.querySelector(".inc_product_desc_att_size_title_text_selected").setAttribute("style", 'color:"#4D4D4F";')),
            null != y && (s.thirdText = y,
            n.querySelector(".inc_product_desc_att_third_title_text_selected").innerText = y,
            r.querySelector(".inc_product_desc_att_third_title_text_selected").innerText = y),
            n.querySelector(".inc_product_desc_add_err_text_block").innerHTML = "",
            r.querySelector(".inc_variant_error_text").innerHTML = "",
            r.querySelector(".inc_product_variant_simple_text").setAttribute("style", ""),
            r.querySelector(".inc_product_desc_add_title_text_block").setAttribute("style", "");
            let v = n.querySelector(".inc_product_desc_att_color_title_text_selected")
              , g = e.dataStore.methods().getProductSizesObj(s, t)
              , k = e.dataStore.methods().getProductColorsObj(s, t)
              , h = e.dataStore.methods().getProductopt3Obj(s, t)
              , f = e.dataStore.methods().getProductopt0Obj(s, t)
              , S = n.querySelector(".inc_product_desc_att_size_block")
              , q = n.querySelector(".inc_product_desc_att_color_block")
              , x = n.querySelector(".inc_product_desc_att_third_block")
              , L = n.querySelector(".inc_product_desc_att_size_list_block")
              , A = n.querySelector(".inc_product_desc_att_zero_list_block")
              , w = n.querySelector(".inc_product_desc_att_color_list_block")
              , N = n.querySelector(".inc_product_desc_att_third_list_block")
              , P = n.querySelector(".inc_product_desc_att_color_title_text")
              , T = r.querySelector(".inc_product_desc_att_size_list_block")
              , I = r.querySelector(".inc_product_desc_att_zero_list_block")
              , z = r.querySelector(".inc_product_desc_att_color_list_block")
              , O = r.querySelector(".inc_product_desc_att_third_list_block")
              , M = r.querySelector(".inc_product_desc_att_color_title_text_selected")
              , E = n.querySelector(".inc_product_desc_att_color_title_text")
              , j = !1;
            if (null != r.querySelector(".inc_product_desc_att_color_block.inc_active") && (A.innerHTML = "",
            I.innerHTML = "",
            f.att0Array.length > 0 && (f.att0Array.forEach((function(t) {
                let i = p("div", "inc_product_desc_att_size_list_item_img_block")
                  , o = p("div", "inc_product_desc_att_size_list_item_img");
                i.setAttribute("blocktype", c),
                i.setAttribute("varianttypes", "zero"),
                i.addEventListener("click", (function() {
                    let t = this.getAttribute("blocktype")
                      , c = this.getAttribute("varianttypes");
                    e.methods.mappvariants(this, t, c)
                }
                )),
                i.classList.add("avail"),
                o.innerText = t.text,
                i.setAttribute("data-size", t.text),
                i.setAttribute("datasize", t.text.toLocaleLowerCase()),
                i.setAttribute("data-option", "1"),
                i.setAttribute("data-title", t.text),
                i.setAttribute("title", t.text),
                i.setAttribute("data-cpid", t.cpid),
                i.setAttribute("data-optid", t.opt_id),
                i.setAttribute("data-attrid", t.att_id),
                i.setAttribute("data-child-price", t.prc);
                let r = i.cloneNode(i);
                r.addEventListener("click", (function() {
                    let t = this.getAttribute("blocktype")
                      , c = this.getAttribute("varianttypes");
                    e.methods.mappvariants(this, t, c)
                }
                )),
                i.appendChild(o),
                A.appendChild(i),
                I.appendChild(r),
                null != u && u.toLocaleLowerCase() == t.text.toLocaleLowerCase() && (j = !0,
                i.classList.add("inc_active"),
                r.classList.add("inc_active"))
            }
            )),
            j == l))) {
                let e = n.querySelector(".inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block").getAttribute("data-size");
                n.querySelector(".inc_product_desc_att_block").setAttribute("data-zero", e),
                r.querySelector(".inc_product_desc_att_block").setAttribute("data-zero", e),
                A.querySelector(".inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block").classList.add("inc_active"),
                I.querySelector(".inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block").classList.add("inc_active")
            }
            if ("zero" == i || "third" == i || "color" == i) {
                L.innerHTML = "";
                let t = !1;
                if (T.innerHTML = "",
                g.sizeArray.length > 0 && (S.classList.add("inc_active"),
                g.sizeArray.forEach((function(i) {
                    let o = p("div", "inc_product_desc_att_size_list_item_img_block")
                      , r = p("div", "inc_product_desc_att_size_list_item_img");
                    o.setAttribute("blocktype", c),
                    o.setAttribute("varianttypes", "size"),
                    o.addEventListener("click", (function() {
                        let t = this.getAttribute("blocktype")
                          , c = this.getAttribute("varianttypes");
                        e.methods.mappvariants(this, t, c)
                    }
                    )),
                    o.classList.add("avail"),
                    r.innerText = i.text,
                    o.setAttribute("data-size", i.text),
                    o.setAttribute("datasize", i.text.toLocaleLowerCase()),
                    o.setAttribute("title", i.text),
                    o.setAttribute("data-option", "2"),
                    o.appendChild(r);
                    let d = o.cloneNode(o);
                    d.addEventListener("click", (function() {
                        let t = this.getAttribute("blocktype")
                          , c = this.getAttribute("varianttypes");
                        e.methods.mappvariants(this, t, c)
                    }
                    )),
                    L.appendChild(o),
                    T.appendChild(d),
                    null != m && m.toLocaleLowerCase() == i.text.toLocaleLowerCase() && (t = !0,
                    o.classList.add("inc_active"),
                    d.classList.add("inc_active"))
                }
                )),
                t == l)) {
                    let e = n.querySelector(".inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block").getAttribute("data-size");
                    n.querySelector(".inc_product_desc_att_block").setAttribute("data-size", e),
                    r.querySelector(".inc_product_desc_att_block").setAttribute("data-size", e),
                    r.querySelector(".inc_product_desc_att_size_title_text_selected").innerText = e,
                    n.querySelector(".inc_product_desc_att_size_title_text_selected").innerText = e,
                    L.querySelector(".inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block").classList.add("inc_active"),
                    T.querySelector(".inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block").classList.add("inc_active")
                }
            } else {
                let e = m.toLocaleLowerCase();
                null != n.querySelector(".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active") && n.querySelector(".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active").classList.remove("inc_active"),
                null != r.querySelector(".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active") && r.querySelector(".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active").classList.remove("inc_active"),
                null != n.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + e.replace(/["\\]/g, "\\$&") + '"]') && (n.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + e.replace(/["\\]/g, "\\$&") + '"]').classList.add("inc_active"),
                r.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + e.replace(/["\\]/g, "\\$&") + '"]').classList.add("inc_active")),
                null != n.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + e.replace(/["\\]/g, "\\$&") + '"]') && (n.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + e.replace(/["\\]/g, "\\$&") + '"]').classList.add("inc_active"),
                r.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + e.replace(/["\\]/g, "\\$&") + '"]').classList.add("inc_active"))
            }
            if ("size" == i || "third" == i) {
                w.innerHTML = "",
                z.innerHTML = "",
                "" == o.querySelector(".inc_product_modal_block .inc_product_desc_att_color_title_text_selected").innerText && "" == o.querySelector(".inc_product_desc_att_color_title_text_selected").innerText && (o.querySelector(".inc_product_modal_block .inc_product_desc_att_color_title_text_selected").innerText = "",
                o.querySelector(".inc_product_desc_att_color_title_text_selected").innerText = "");
                let t = s.colorText;
                if (k.colorArray.length > 0) {
                    q.classList.add("inc_active");
                    let i = !1
                      , o = 0;
                    if (k.colorArray.forEach((function(d) {
                        t == d.text ? (s.colorText = d.text,
                        s.color_text = d.text) : (s.colorText = "",
                        s.color_text = "");
                        let l = p("div", "inc_product_desc_att_color_list_item_block")
                          , _ = p("div", "inc_product_desc_att_color_list_item_img_block")
                          , a = p("div", "inc_product_desc_att_color_list_item_img");
                        _.setAttribute("blocktype", c),
                        _.setAttribute("varianttypes", "color"),
                        _.addEventListener("click", (function() {
                            let t = this.getAttribute("blocktype")
                              , c = this.getAttribute("varianttypes");
                            e.methods.mappvariants(this, t, c)
                        }
                        )),
                        C(d, a);
                        let u = p("a");
                        u.innerText = d.text,
                        u.title = d.text,
                        u.addEventListener("click", (function(e) {
                            e.preventDefault()
                        }
                        )),
                        a.appendChild(u),
                        _.setAttribute("data-color", d.text),
                        _.setAttribute("datacolor", d.text.toLocaleLowerCase()),
                        _.setAttribute("data-option", "0"),
                        _.setAttribute("data-cpid", d.cpid),
                        _.setAttribute("data-colorcode", d.colorCode),
                        _.setAttribute("data-optionimge", d.imgSrc),
                        _.appendChild(a),
                        l.appendChild(_);
                        let m = l.cloneNode(l);
                        if (m.querySelector(".inc_product_desc_att_color_list_item_img_block").addEventListener("click", (function() {
                            let t = this.getAttribute("blocktype")
                              , c = this.getAttribute("varianttypes");
                            e.methods.mappvariants(this, t, c)
                        }
                        )),
                        (null != document.querySelector(".sidebar_outer.sidebar_outer_active") || "cartPage" == e.config.pageType) && o > 5) {
                            let t = p("a", "inc_more_color");
                            t.target = "_blank",
                            t.innerText = "+",
                            t.addEventListener("click", (function(t) {
                                window.innerWidth < 821 && t.preventDefault();
                                let c = r.querySelector(".inc_product_img_main_img a").href;
                                this.setAttribute("href", c),
                                e.methods.sendBundleClickTracking(r.getAttribute("data-main_id")),
                                U(),
                                window.innerWidth < 821 && setTimeout((function() {
                                    window.location.href = c
                                }
                                ), 2e3)
                            }
                            ));
                            let c = t.cloneNode(t);
                            if (null == w.querySelector(".inc_more_color")) {
                                w.appendChild(t),
                                z.appendChild(c),
                                z.querySelector(".inc_more_color").addEventListener("click", (function(t) {
                                    window.innerWidth < 821 && t.preventDefault();
                                    let c = r.querySelector(".inc_product_img_main_img a").href;
                                    this.setAttribute("href", c),
                                    e.methods.sendBundleClickTracking(r.getAttribute("data-main_id")),
                                    U(),
                                    window.innerWidth < 821 && setTimeout((function() {
                                        window.location.href = c
                                    }
                                    ), 2e3)
                                }
                                ))
                            }
                        } else
                            o++,
                            w.appendChild(l),
                            z.appendChild(m),
                            null != b && (b.toLocaleLowerCase() == d.text.toLocaleLowerCase() ? (i = !0,
                            l.classList.add("inc_active"),
                            m.classList.add("inc_active"),
                            M.innerText = d.text,
                            v.innerText = d.text + ":",
                            window.innerWidth < 821 && (P.style.backgroundColor = d.colorCode,
                            E.style.backgroundColor = d.colorCode)) : 1 == k.colorArray.length && (i = !0,
                            l.classList.add("inc_active"),
                            m.classList.add("inc_active"),
                            n.querySelector(".inc_product_desc_att_block").setAttribute("data-color", d.text),
                            r.querySelector(".inc_product_desc_att_block").setAttribute("data-color", d.text),
                            M.innerText = d.text,
                            v.innerText = d.text + ":",
                            window.innerWidth < 821 && (P.style.backgroundColor = d.colorCode,
                            E.style.backgroundColor = d.colorCode)))
                    }
                    )),
                    i == l) {
                        let e = n.querySelector(".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block").getAttribute("data-color")
                          , t = n.querySelector(".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block").getAttribute("data-colorcode");
                        n.querySelector(".inc_product_desc_att_block").setAttribute("data-color", e),
                        r.querySelector(".inc_product_desc_att_block").setAttribute("data-color", e),
                        w.querySelector(".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block").parentNode.classList.add("inc_active"),
                        z.querySelector(".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block").parentNode.classList.add("inc_active"),
                        M.innerText = e,
                        v.innerText = e,
                        window.innerWidth < 821 && (P.style.backgroundColor = t,
                        E.style.backgroundColor = t)
                    }
                }
            } else {
                let e = "";
                if (null != b && (e = b.toLocaleLowerCase()),
                null != n.querySelector(".inc_product_desc_att_color_list_item_block.inc_active") && n.querySelector(".inc_product_desc_att_color_list_item_block.inc_active").classList.remove("inc_active"),
                null != r.querySelector(".inc_product_desc_att_color_list_item_block.inc_active") && r.querySelector(".inc_product_desc_att_color_list_item_block.inc_active").classList.remove("inc_active"),
                null != n.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + e + '"]') && (n.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + e + '"]').parentNode.classList.add("inc_active"),
                null != r.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + e + '"]') && r.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + e + '"]').parentNode.classList.add("inc_active"),
                M.innerText = e,
                v.innerText = e,
                null != n.querySelector(".inc_product_desc_att_color_list_item_block.inc_active div"))) {
                    let e = n.querySelector(".inc_product_desc_att_color_list_item_block.inc_active div").getAttribute("data-colorcode");
                    window.innerWidth < 821 && (P.style.backgroundColor = e,
                    E.style.backgroundColor = e)
                }
            }
            if ("zero" == i || "size" == i || "color" == i)
                N.innerHTML = "",
                O.innerHTML = "",
                h.att3Array.length > 0 && (x.classList.add("inc_active"),
                h.att3Array.forEach((function(t) {
                    let i = p("div", "inc_product_desc_att_third_list_item_img_block")
                      , o = p("div", "inc_product_desc_att_third_list_item_img");
                    i.setAttribute("blocktype", c),
                    i.setAttribute("varianttypes", "third"),
                    i.addEventListener("click", (function() {
                        let t = this.getAttribute("blocktype")
                          , c = this.getAttribute("varianttypes");
                        e.methods.mappvariants(this, t, c)
                    }
                    )),
                    o.innerText = t.text,
                    i.setAttribute("data-size", t.text),
                    i.setAttribute("datasize", t.text.toLocaleLowerCase()),
                    i.setAttribute("data-option", "3"),
                    i.appendChild(o);
                    let r = i.cloneNode(i);
                    r.querySelector(".inc_product_desc_att_third_list_item_img_block").addEventListener("click", (function() {
                        let t = this.getAttribute("blocktype")
                          , c = this.getAttribute("varianttypes");
                        e.methods.mappvariants(this, t, c)
                    }
                    )),
                    N.appendChild(i),
                    O.appendChild(r),
                    null != y && y.toLocaleLowerCase() == t.text.toLocaleLowerCase() && (i.classList.add("inc_active"),
                    r.classList.add("inc_active"))
                }
                )));
            else {
                let e = y.toLocaleLowerCase();
                null != n.querySelector(".inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active") && n.querySelector(".inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active").classList.remove("inc_active"),
                null != r.querySelector(".inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active") && r.querySelector(".inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active").classList.remove("inc_active"),
                n.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + e + '"]').classList.add("inc_active"),
                r.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + e + '"]').classList.add("inc_active")
            }
            let B = !1;
            if (null == n.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active") && (B = !0),
            "zero" == i || B == d && "color" != i) {
                let e = "";
                u = "",
                B == d ? null != t ? (u = t.getAttribute("data-size"),
                e = u.toLocaleLowerCase()) : null != n.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block") && (u = n.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block").getAttribute("data-size"),
                e = u.toLocaleLowerCase()) : null != t && (u = t.getAttribute("data-size"),
                e = u.toLocaleLowerCase()),
                null != n.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active") && n.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active").classList.remove("inc_active"),
                null != r.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active") && r.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active").classList.remove("inc_active");
                try {
                    null != n.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + e + '"]') && (n.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + e + '"]').classList.add("inc_active"),
                    r.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + e + '"]').classList.add("inc_active"))
                } catch (t) {
                    null != n.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize='" + e + "']") && (n.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize='" + e + "']").classList.add("inc_active"),
                    r.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize='" + e + "']").classList.add("inc_active"))
                }
                null != n.querySelector(".inc_product_desc_att_zero_title_text_selected") && (n.querySelector(".inc_product_desc_att_zero_title_text_selected").innerText = u),
                null != r.querySelector(".inc_product_desc_att_zero_title_text_selected") && (r.querySelector(".inc_product_desc_att_zero_title_text_selected").innerText = u)
            }
            if (e.methods.updateProductBlock(r, s, c),
            e.methods.updateProductBlock(n, s, c),
            window.innerWidth < 821 && null != document.querySelector(".inc_product_block.show_overlay")) {
                let e = document.querySelectorAll(".inc_product_desc_att_block.inc_active");
                null == document.querySelector(".inc_product_modal_block.inc_active") && null == document.querySelector(".inc_sidebar_modal_block.inc_active") && (document.querySelector("html").classList.remove("inc_overlay"),
                document.querySelector("body").classList.remove("inc_popup_open"));
                for (let t in e)
                    null != e[t] && Object.prototype.hasOwnProperty.call(e, t) && e[t].classList.remove("inc_active");
                null != document.querySelector(".inc_product_block.show_overlay") && document.querySelector(".inc_product_block.show_overlay").classList.remove("show_overlay")
            }
        }
    }
    ,
    e.methods.checkVariantSelection = function(e) {
        let t = !1
          , c = !1
          , i = !1
          , o = !1
          , r = e.querySelector(".inc_product_desc_att_size_block.inc_active")
          , n = e.querySelector(".inc_product_modal_block .inc_product_desc_att_color_block.inc_active")
          , _ = e.querySelector(".inc_product_desc_att_zero_block.inc_active")
          , a = e.querySelector(".inc_product_desc_att_third_block.inc_active");
        return null != n && null != _ && null != a && null != r ? null != n.querySelector(".inc_product_desc_att_color_list_item_block.inc_active") && null != _.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active") && null != a.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active") && null != r.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active") && (t = !0,
        i = !0,
        o = !0,
        c = !0) : null != n && null != _ && null != r ? null != n.querySelector(".inc_product_desc_att_color_list_item_block.inc_active") && null != _.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active") && null != r.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active") && (t = !0,
        i = !0,
        o = !0,
        c = !0) : null != n && null != _ ? null != n.querySelector(".inc_product_desc_att_color_list_item_block.inc_active") && null != _.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active") && (t = !0,
        i = !0,
        c = !0,
        o = !0) : (null != n ? null != n.querySelector(".inc_product_desc_att_color_list_item_block.inc_active") && (t = !0) : t = !0,
        null != _ ? null != _.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active") && (i = !0) : i = !0,
        null != r ? null != r.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active") && (c = !0) : c = !0,
        null != a ? null != a.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active") && (o = !0) : o = !0),
        t == d && i == d && o == d ? 1 : c == l ? 2 : o == l ? 3 : 0
    }
    ,
    e.methods.updateProductBlock = function(t, c, i) {
        let o = e.dataStore
          , d = t
          , l = d.parentNode.parentNode
          , n = l.querySelector(".inc_product_modal_block")
          , _ = n.querySelector(".inc_product_desc_att_block").getAttribute("data-zero")
          , a = n.querySelector(".inc_product_desc_att_block").getAttribute("data-size")
          , s = n.querySelector(".inc_product_desc_att_block").getAttribute("data-color")
          , u = n.querySelector(".inc_product_desc_att_block").getAttribute("data-third")
          , b = d.querySelector(".inc_product_ecirp_label_block")
          , y = "";
        if (null != _ ? (c.zero_text = _,
        c.zeroText = _,
        y = _) : (c.zeroText = "",
        c.zero_text = ""),
        null != s ? (c.color_text = s,
        c.colorText = s,
        y = "" == y ? s.split("_")[0] : s.split("_")[0] + " / " + y) : c.color_text = "",
        null != a ? (c.sizeText = a,
        y = y + " / " + a) : c.sizeText = "",
        null != u ? (c.thirdText = u,
        y = y + " / " + u) : c.thirdText = "",
        null != d.querySelector(".inc_product_variant_simple_text")) {
            if ("sidebar" == i || "am" == i)
                d.querySelector(".inc_product_variant_simple_text").innerText = "Choose Size",
                d.querySelector(".inc_product_variant_simple_text").setAttribute("title", "Choose Size");
            else if (d.querySelector(".inc_product_variant_simple_text").innerText.indexOf("Choose") >= 0 ? (d.querySelector(".inc_product_variant_simple_text").setAttribute("title", "Choose Size"),
            d.querySelector(".inc_product_variant_simple_block").classList.add("inc_select")) : d.querySelector(".inc_product_variant_simple_text").setAttribute("title", "Choose Size"),
            d.querySelector(".Inc_checked") && d.querySelector(".inc_product_variant_simple_text").setAttribute("title", y),
            d.querySelector(".inc_product_variant_simple_text").setAttribute("title_", y),
            d.querySelector(".inc_product_variant_simple_block").classList.remove("inc_select"),
            null != l.querySelector(".inc_product_block .inc_product_add_block.added_inc")) {
                d.querySelector(".inc_product_variant_simple_text").innerText = "";
                let e = p("span", "variant_span");
                e.innerText = y,
                d.querySelector(".inc_product_variant_simple_text").appendChild(e)
            }
            if ("sidebar" != i && "am" != i) {
                if (null != s) {
                    let e = d.querySelector(".inc_product_variant_simple_text")
                      , t = "";
                    n.querySelector(".inc_product_desc_att_color_list_item_block.inc_active div") && (t = n.querySelector(".inc_product_desc_att_color_list_item_block.inc_active div").getAttribute("data-colorcode"));
                    let c = p("div", "inc_colortile");
                    c.addEventListener("click", (function(e) {
                        e.preventDefault()
                    }
                    )),
                    console.log(y),
                    t && (c.style.backgroundColor = t,
                    e.innerHTML = "",
                    e.appendChild(c),
                    e.innerHTML = e.innerHTML + "<span>" + y + "</span>",
                    c.classList.add("colorBox"),
                    e.setAttribute("title", y))
                }
                null == d.querySelector(".Inc_checked") && (d.querySelector(".inc_product_variant_simple_text").innerHTML = "Choose Size",
                d.querySelector(".inc_product_variant_simple_text").parentElement.classList.add("inc_select"))
            }
        }
        let v = e.dataStore.methods().getProductByAtt(c);
        if (0 != Object.keys(v).length) {
            let c = "";
            if (c = d.getAttribute("data-sku"),
            d.setAttribute("data-id", v.id),
            d.setAttribute("data-sku", v.sku),
            d.setAttribute("data-main_id", v.mainId),
            d.setAttribute("data-bundle_id", v.bundleId),
            l.setAttribute("data-id", v.id),
            l.setAttribute("data-sku", v.sku),
            l.setAttribute("data-main_id", v.mainId),
            l.setAttribute("data-bundle_id", v.bundleId),
            null != document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="' + v.mainId + '"]') && "" != y) {
                let e = document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="' + v.mainId + '"]');
                e.querySelector(".inc_pdp_bundle_cart_added_product_att_color_text_block").textContent = y,
                e.querySelector(".inc_pdp_bundle_cart_added_product_att_color_text_block").setAttribute("style", ""),
                e.querySelector(".inc_pdp_bundle_cart_added_product_att_block").setAttribute("title", y)
            }
            if (null != l.querySelector(".inc_product_desc_att_size_title_text") && "" != y && l.querySelector(".inc_product_desc_att_size_title_text").setAttribute("title", y),
            null != s) {
                let e = n.querySelector(".inc_product_desc_att_color_list_item_block.inc_active div").getAttribute("data-colorcode");
                l.querySelector(".inc_product_showcase_block .inc_product_desc_att_color_title_text").style.backgroundColor = e,
                window.innerWidth < 769 && (l.querySelector(".inc_product_modal_block .inc_product_desc_att_color_title_text").style.backgroundColor = e)
            }
            let _ = d.querySelector(".inc_product_img_block")
              , a = d.querySelector(".inc_product_img_gallery_list_block")
              , u = d.querySelector(".inc_product_desc_title_text")
              , p = d.querySelector(".inc_product_desc_ecirp_active_text")
              , k = d.querySelector(".inc_product_desc_ecirp_regular_text")
              , h = d.querySelector(".inc_product_desc_ecirp_rrp_text")
              , f = d.querySelector(".inc_product_desc_add_text")
              , q = d.querySelector(".inc_product_desc_ecirp_worth_text")
              , x = d.querySelector(".inc_product_img_gallery_right_block")
              , L = d.querySelector(".inc_product_img_gallery_left_block")
              , A = d.querySelector(".inc_product_desc_qty_add_btn_block");
            if ((t.parentNode.classList.contains("inc_product_modal_block") || "inc_product_modal_block inc_active" == t.parentNode.className) && null != d.querySelector(".inc_product_header_main_title_block"))
                var g = d.querySelector(".inc_product_header_main_title_block");
            d.parentNode.className.indexOf("inc_product_showcase_block") >= 0 && "pdp" != i && A.classList.add("inc_active");
            let w = _.querySelector(".inc_product_img_main_img");
            w.querySelectorAll("img")[0].setAttribute("src", v.imageURL),
            w.querySelector("a").setAttribute("otherImageList", v.imageURL + "," + v.otherImageList),
            w.querySelector("a").setAttribute("imageURL", v.imageURL),
            w.querySelectorAll("img")[0].setAttribute("data-mouseover", v.imageURL + "," + v.otherImageList),
            w.querySelectorAll("img")[0].setAttribute("data-imageURL", v.imageURL),
            w.querySelector("a").setAttribute("otherImageList", v.imageURL + "," + v.otherImageList),
            w.querySelector("a").setAttribute("imageURL", v.imageURL),
            w.querySelectorAll("img")[0].setAttribute("data-mouseover", v.imageURL + "," + v.otherImageList),
            w.querySelectorAll("img")[0].setAttribute("data-imageURL", v.imageURL);
            let N = l.getAttribute("data-main_id");
            if (null != document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="' + N + '"]')) {
                let e = document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="' + N + '"]');
                null != e.querySelector("img") && (e.querySelector("img").src = v.imageURL)
            }
            a.innerHTML = "",
            null != v.otherImageList && v.otherImageList.length >= 1 ? S(a, v, d) : d.classList.add("inc_other_noimage"),
            window.innerWidth > 820 ? null == v.otherImageList || v.otherImageList.length < 2 || 1 == v.otherImageList.length || "" == v.otherImageList ? (x.style.display = "none",
            L.style.display = "none") : (x.style.display = "block",
            L.style.display = "block") : null == v.otherImageList || v.otherImageList.length < 1 || 1 == v.otherImageList.length || "" == v.otherImageList ? (x.style.display = "none",
            L.style.display = "none") : (x.style.display = "block",
            L.style.display = "block"),
            null != u.querySelector("strong") && "pdp" == e.config.pageType ? u.querySelector("div").innerHTML = "<strong>This Item: </strong>" + r(v.name) : u.querySelector("div").textContent = r(v.name),
            u.querySelector("a").setAttribute("title", v.name),
            null != g && (g.querySelector("a").textContent = r(v.name),
            g.querySelector("a").setAttribute("title", r(v.name)));
            let P = parseFloat(v.activePrice).toFixed(2).toString()
              , C = parseFloat(v.regularPrice).toFixed(2).toString()
              , T = parseFloat(v.rrpPrice).toFixed(2).toString()
              , I = (parseFloat(v.wasPrice).toFixed(2).toString(),
            v.savePrice,
            D(v.rrpPrice, v.activePrice));
            p.parentNode.parentNode.parentNode.classList.remove("is_special_ecirp"),
            k.textContent = "",
            h.textContent = "",
            P != C && "" != C && null != C && 0 != C ? (p.parentNode.parentNode.parentNode.classList.add("is_special_ecirp"),
            p.innerHTML = m.format(P).replace(".00", ""),
            k.innerHTML = m.format(C).replace(".00", ""),
            h.innerHTML = "<span> RRP </span>" + m.format(T).replace(".00", "")) : (q.innerHTML = "",
            p.innerHTML = m.format(P).replace(".00", ""),
            b.innerHTML = "",
            h.innerHTML = T > 0 ? "<span> RRP </span>" + m.format(T).replace(".00", "") : ""),
            I > 0 && T > 0 ? q.innerHTML = e.config.saveBadgeText + m.format(I).replace(".00", "") : (q.parentNode.parentNode.classList.add("empty"),
            q.innerHTML = ""),
            "Added" != d.querySelector(".inc_product_desc_add_text").textContent && d.querySelector(".inc_product_desc_add_text").textContent != e.config.AddedText && d.parentNode.parentNode.querySelector(".inc_product_desc_add_text").textContent != e.config.AddedText || (Object.prototype.hasOwnProperty.call(o, "bundleCartProducts") || (o.bundleCartProducts = {},
            e.config.pdpaddedProductList = [],
            e.config.bundle_tracking = [],
            e.config.bundle_skuPushed = [],
            e.config.dupBasket = []),
            o.bundleCartProducts[v.sku] = o.bundleCartProducts[c],
            v.sku != c && delete o.bundleCartProducts[c]);
            let z = d.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_desc_qty_add_btn_block .inc_product_qty_block input")
              , O = d.getAttribute("data-sku")
              , M = d.getAttribute("data-bundle_id")
              , E = d.getAttribute("data-main_id")
              , j = parseInt(z.value)
              , B = d.querySelector(".inc_product_desc_title_text").textContent
              , H = d.querySelector(".inc_product_desc_ecirp_active_text").textContent.replace("£", "");
            null != f.parentNode.parentNode.querySelector(".inc_product_desc_add_img.checked") && e.methods.updateBundleCart({
                sku: O,
                qty: j
            }, "add", E, M, B, H),
            setTimeout((function() {
                360 == w.querySelectorAll("img")[0].naturalWidth && w.querySelectorAll("img")[0].setAttribute("src", v.imageURLMain)
            }
            ), 200)
        }
        "pdp" == i && null != l.querySelector(".inc_product_add_block.added_inc") && l.querySelector(".inc_product_variant_simple_block").classList.add("added_inc")
    }
    ,
    e.methods.createProductListItemBlock = function(t) {
        let c = p("div", "inc_pdp_bundle_product_list_item_block")
          , i = new e.classes.FindObj({
            id: t.id,
            mainId: t.mainId
        })
          , o = e.dataStore.methods().getProductById(i);
        c.style.userSelect = "none",
        c.setAttribute("data-id", o.id),
        c.setAttribute("data-sku", o.sku),
        c.setAttribute("data-main_id", o.mainId),
        c.setAttribute("data-bundle_id", o.bundleId);
        let r = '<div class="inc_pdp_bundle_product_list_item_added_block"><div class="inc_pdp_bundle_product_list_item_added_btn_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img"></div></div><div class="inc_pdp_bundle_product_list_item_added_btn_text_block"><div class="inc_pdp_bundle_product_list_item_added_btn_text"></div></div></div></div><div class="inc_pdp_bundle_product_list_item_img_block"><div class="inc_pdp_bundle_product_list_item_img"><img class="inc_lazy" data-src="' + o.imageURL + '" src="' + o.imageURL + '"></div></div><div class="inc_pdp_bundle_product_list_item_title_block"><div class="inc_pdp_bundle_product_list_item_title_text_block"><div class="inc_pdp_bundle_product_list_item_title_text"></div></div></div><div class="inc_pdp_bundle_product_list_item_ecirp_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_text_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_text"></div></div></div></div>';
        return c.innerHTML = r,
        c.querySelector(".inc_pdp_bundle_product_list_item_img img").setAttribute("onerror", "this.src='" + e.config.noimage + "'"),
        c.addEventListener("click", (function() {
            Array.prototype.forEach.call(document.querySelectorAll(".inc_product_desc_att_size_list_block"), (function(e) {
                e.classList.remove("inc_active")
            }
            ));
            let e = document.querySelector(".inc_pdp_bundle_product_list_main_block");
            Array.prototype.forEach.call(e.querySelectorAll(".inc_product_module_block"), (function(e) {
                e.setAttribute("style", "display: none!important")
            }
            )),
            e.querySelector('.inc_product_module_block[data-main_id="' + o.mainId + '"]').style.display = "block",
            Array.prototype.forEach.call(c.parentNode.querySelectorAll(".inc_pdp_bundle_product_list_item_block"), (function(e) {
                e.classList.remove("inc_active")
            }
            )),
            c.classList.add("inc_active")
        }
        )),
        c
    }
    ,
    e.methods.updateBundleCart = function(t, c, i, o, r, d) {
        let l = e.dataStore
          , n = [];
        switch (Object.prototype.hasOwnProperty.call(l, "bundleCartProducts") || (l.bundleCartProducts = {},
        e.config.pdpaddedProductList = [],
        e.config.bundle_tracking = [],
        e.config.bundle_skuPushed = [],
        e.config.dupBasket = []),
        c) {
        case "add":
            l.bundleCartProducts[t.sku] = t.qty,
            -1 == e.config.bundle_skuPushed.indexOf(t.sku) && e.config.bundle_skuPushed.push(t.sku),
            -1 == e.config.pdpaddedProductList.indexOf(i) && (e.config.pdpaddedProductList.push(i),
            e.config.bundle_tracking.push({
                id: i,
                bid: o,
                pname: r,
                prc: d,
                qty: t.qty
            }));
            break;
        case "sub":
            delete l.bundleCartProducts[t.sku],
            e.config.pdpaddedProductList.remove_prod_list = function() {
                let e, t, c = arguments, i = c.length;
                for (; i && this.length; )
                    for (e = c[--i]; -1 != (t = this.indexOf(e)); )
                        this.splice(t, 1);
                return this
            }
            ,
            n[0] = i;
            for (let t = 0; t < e.config.bundle_tracking.length; t++) {
                let c = e.config.bundle_tracking[t];
                null != c && -1 != n.indexOf(c.id) && e.config.bundle_tracking.splice(t, 1)
            }
            e.config.bundle_skuPushed.remove_prod_list = function() {
                let e, t, c = arguments, i = c.length;
                for (; i && this.length; )
                    for (e = c[--i]; -1 != (t = this.indexOf(e)); )
                        this.splice(t, 1);
                return this
            }
            ,
            e.config.pdpaddedProductList.remove_prod_list(i),
            e.config.bundle_skuPushed.remove_prod_list(t.sku)
        }
        "pdp" == e.config.pageType && this.calculateBundleTotal()
    }
    ,
    e.methods.calculateBundleTotal = function() {
        let t = e.dataStore
          , c = t.bundleCartProducts
          , i = t.dataStoreObj
          , o = []
          , r = 0
          , d = 0
          , l = 0
          , n = 0
          , _ = 0
          , a = 0
          , s = 0
          , u = 0
          , p = 0
          , m = e.methods.getProductIdFromWebPage();
        null != c && null != c && Object.keys(c).forEach((function(e) {
            for (let t in i)
                for (let b in i[t])
                    if (e == i[t][b].sku && -1 == o.indexOf(i[t][b].sku)) {
                        o.push(i[t][b].sku);
                        let y = i[t][b].regularPrice
                          , v = i[t][b].activePrice;
                        if (null != i[t][b].rrpPrice) {
                            let o = i[t][b].rrpPrice.replace("RRP|", "").replace("TVP|", "").trim();
                            "0.00" != o && "" != o && null != o || (o = v),
                            l += parseFloat(c[e]) * o
                        }
                        r += parseFloat(c[e]) * y,
                        d += parseFloat(c[e]) * v,
                        u += parseInt(c[e]),
                        "" != i[t][b].worthPrice && null != i[t][b].worthPrice && (p += +i[t][b].worthPrice * parseInt(c[e])),
                        i[t][b].mainId == m && (s++,
                        n += parseInt(c[e]) * v),
                        i[t][b].mainId != m && (s++,
                        a++,
                        _ += parseInt(c[e]) * v)
                    }
        }
        ));
        let b = {
            totalActivePrice: parseFloat(d).toFixed(2),
            totalRegularPrice: parseFloat(r).toFixed(2),
            totalMainProduct: n,
            totalAddonProducts: _,
            totalrrpPrice: parseFloat(l).toFixed(2),
            totalAddonProductsCount: a,
            totalProductCount: s,
            total_qty: u,
            total_collect_point: p
        };
        this.updateBundleCartBlock(b)
    }
    ,
    e.methods.updateBundleCartBlock = function(t) {
        let c = e.dataStore.bundleCartProducts
          , i = t.totalRegularPrice
          , o = t.totalActivePrice
          , r = t.totalMainProduct
          , d = t.totalAddonProducts
          , l = t.totalrrpPrice
          , _ = t.totalAddonProductsCount
          , a = t.totalProductCount
          , s = document.querySelector(".inc_pdp_bundle_cart_block");
        if (null != s) {
            let t = document.querySelector(".inc_pdp_bundle_cart_added_block")
              , y = document.querySelector(".inc_pdp_bundle_cart_summary_view_btn_count")
              , v = document.querySelector(".inc_pdp_bundle_cart_summary_ecirp_regular_text")
              , g = document.querySelector(".inc_pdp_bundle_cart_summary_ecirp_active_text")
              , k = document.querySelector(".inc_pdp_bundle_cart_title_text")
              , h = document.querySelector(".inc_pdp_bundle_cart_summary_ecirp_save_text")
              , f = document.querySelector(".inc_pdp_bundle_cart_summary_count_text")
              , S = document.querySelector(".inc_pdp_bundle_cart_summary_add_btn_text");
            var u = document.querySelector(".inc_pdp_bundle_cart_summary_main_prd_txt");
            let q = document.querySelector(".inc_pdp_bundle_cart_summary_main_prd_prc");
            var p = document.querySelector(".inc_pdp_bundle_cart_summary_addon_prd_txt")
              , b = document.querySelector(".inc_pdp_bundle_cart_summary_addon_prd_prc");
            let x = document.querySelector(".inc_pdp_bundle_cart_summary_ecirp_rrp_text");
            t.innerHTML = "";
            let L = Object.keys(c);
            y.textContent = L.length,
            window.innerWidth < 769 && (k.textContent = "Items you've added");
            for (let i in e.config.bundle_skuPushed) {
                let o = e.config.bundle_skuPushed[i];
                for (let i in L) {
                    let r = new e.classes.FindObj({
                        sku: L[i]
                    })
                      , d = e.dataStore.methods().getProductBySKU(r);
                    if (o == d.id) {
                        let e = d.id
                          , o = this.createBundleCartAddedProductBlock(e, c[L[i]], "pdp");
                        null != o && (null == t && null == t || t.insertBefore(o, t.childNodes[0]))
                    }
                }
            }
            v.style.display = "none",
            o != i && (v.style.display = "flex"),
            0 == L.length && setTimeout((function() {
                n = !1,
                document.querySelectorAll(".inc_pdp_block .inc_product_desc_add_block")[1].click(),
                n = !0
            }
            ), 5),
            g.innerHTML = m.format(o),
            v.parentNode.parentNode.parentNode.classList.remove("simple_ecirp"),
            v.parentNode.parentNode.parentNode.classList.remove("is_special_ecirp"),
            v.parentNode.parentNode.parentNode.parentNode.classList.remove("simple_ecirp"),
            v.parentNode.parentNode.parentNode.parentNode.classList.remove("is_special_ecirp");
            let A = D(i, o)
              , w = D(l, o);
            if ("0.00" != i && i != o && null != i && "" != i ? (v.innerHTML = m.format(i).replace(".00", ""),
            v.parentNode.parentNode.parentNode.parentNode.classList.add("is_special_ecirp"),
            v.parentNode.parentNode.parentNode.classList.add("is_special_ecirp"),
            h.innerHTML = "Save " + m.format(A).replace(".00", "")) : v.parentNode.parentNode.parentNode.classList.add("simple_ecirp"),
            h.innerHTML = w > 0 && l > 0 ? "Save " + m.format(w).replace(".00", "") : "",
            x.innerHTML = "0.00" != l && l != o && null != l && "" != l ? "<span> RRP </span>" + m.format(l).replace(".00", "") : "",
            window.innerWidth < 820 && (u.innerHTML = "Main product ",
            q.innerText = "",
            null != r && (q.innerText = m.format(r).replace(".00", "")),
            1 == L.length ? 0 == d || 0 == d ? (p.innerText = "No add-on product selected ",
            b.innerHTML = "") : (p.innerText = "1 add-on product selected ",
            b.innerHTML = b.innerText = m.format(d).replace(".00", "")) : L.length > 1 ? (0 == r || 0 == r ? p.innerText = L.length + " add-on products selected " : 2 == L.length ? p.innerText = L.length - 1 + " add-on product selected " : p.innerText = L.length - 1 + " add-on products selected ",
            b.innerText = m.format(d).replace(".00", "")) : (p.innerText = "No add-on product selected ",
            b.innerHTML = "$0.00")),
            null != s && null != s) {
                let t = document.querySelector(".inc_pdp_bundle_cart_title_text")
                  , c = document.querySelector(".inc_pdp_bundle_cart_summary_add_btn_text");
                c.style.textTransform = "none",
                t.textContent = "Price summary",
                c.textContent = "Add Bundle to Basket",
                a <= 1 ? (c.textContent = "Add Bundle to Basket",
                f.innerHTML = Object.keys(e.dataStore.bundleCartProducts).length + " ITEM") : (2 == a || 3 == a || 4 == a || 5 == a || 6 == a) && (c.textContent = "Add Bundle to Basket",
                f.innerHTML = Object.keys(e.dataStore.bundleCartProducts).length + " ITEMS")
            }
            let N = s.querySelector(".inc_pdp_bundle-cart_ecirp_main_title_text")
              , P = s.querySelector(".inc_pdp_bundle-cart_ecirp_main_figure_text")
              , C = s.querySelector(".inc_pdp_bundle-cart_ecirp_addon_title_text")
              , T = s.querySelector(".inc_pdp_bundle-cart_ecirp_addon_figure_text")
              , I = s.querySelector(".inc_pdp_bundle_cart_summary_ecirp_active_text");
            N.textContent = "Main Product Price ",
            C.textContent = "Add-on(s) Selected  " + (_ > 0 ? _ : ""),
            P.innerHTML = m.format(r).replace(".00", ""),
            T.innerHTML = m.format(d).replace(".00", ""),
            I.innerHTML = m.format(o).replace(".00", ""),
            setTimeout((function() {
                null != e.dataStore.bundleCartProducts && (0 == Object.keys(e.dataStore.bundleCartProducts).length ? (S.textContent = "Add to Basket",
                S.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;")) : S.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;"))
            }
            ), 100)
        }
    }
    ,
    e.methods.createBundleCartAddedProductBlock = function(t, c) {
        let i = p("div", "inc_pdp_bundle_cart_added_product_block")
          , o = new e.classes.FindObj({
            id: t
        })
          , r = e.dataStore.methods().getProductById(o);
        i.setAttribute("data-id", r.id),
        i.setAttribute("data-sku", r.sku),
        i.setAttribute("data-main_id", r.mainId),
        i.setAttribute("data-bundle_id", r.bundleId);
        let d = document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + r.mainId + '"]');
        if (null != d) {
            let t = d.querySelector(".inc_product_modal_block")
              , o = t.querySelector(".inc_product_desc_att_block").getAttribute("data-zero")
              , l = t.querySelector(".inc_product_desc_att_block").getAttribute("data-size")
              , n = t.querySelector(".inc_product_desc_att_block").getAttribute("data-color")
              , _ = t.querySelector(".inc_product_desc_att_block").getAttribute("data-third")
              , a = "";
            null != n && (a = n),
            null != o && (a = "" == a ? o : a + " / " + o),
            null != l && (a = a + " / " + l),
            null != _ && (a = a + " / " + _);
            let s = '<div class="inc_pdp_bundle_cart_added_product_img_block"><div class="inc_pdp_bundle_cart_added_product_img"><img src="' + r.imageURL + '" data-src="' + r.imageURL + '"></div></div><div class="inc_pdp_bundle_cart_added_product_title_block"><div class="inc_pdp_bundle_cart_added_product_title_text_block"><div class="inc_pdp_bundle_cart_added_product_title_text"><a title="' + r.name + '"><div style="text-transform: unset;">' + r.name + '</div></a></div></div></div><div class="inc_pdp_bundle_cart_added_product_qty_block"><div class="inc_pdp_bundle_cart_added_product_qty_text_block"><div class="inc_pdp_bundle_cart_addeed_product_qty_text">' + c + '</div></div></div><div class="inc_pdp_bundle_cart_added_product_ecirp_block"><div class="inc_pdp_bundle_cart_added_product_ecirp_text_block"><div class="inc_pdp_bundle_cart_added_product_ecirp_text">' + m.format(r.activePrice * c).replace(".00", "") + '</div></div></div><div class="inc_pdp_bundle_cart_added_product_att_block" title="' + a + '"><div class="inc_pdp_bundle_cart_added_product_att_color_block"><div class="inc_pdp_bundle_cart_added_product_att_color_text_block" style="text-transform: none;">' + a + '</div></div><div class="inc_pdp_bundle_cart_added_product_att_size_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text"></div></div></div></div><div class="inc_pdp_bundle_cart_added_product_edit_block"><div class="inc_pdp_bundle_cart_added_product_edit_text_block"><div class="inc_pdp_bundle_cart_added_product_edit_text"></div></div><div class="inc_pdp_bundle_cart_added_product_edit_img_block"><div class="inc_pdp_bundle_cart_added_product_edit_img"></div></div></div>';
            i.innerHTML = s,
            i.querySelector(".inc_pdp_bundle_cart_added_product_img img").setAttribute("onerror", "this.src='" + e.config.noimage + "'");
            let u = i.querySelector(".inc_pdp_bundle_cart_added_product_edit_text_block")
              , p = i.querySelector(".inc_pdp_bundle_cart_added_product_edit_img_block");
            return u.addEventListener("click", (function() {
                "mobile" == e.config.deviceType && null != document.querySelector('.inc_pdp_bundle_product_list_item_block[data-main_id="' + r.mainId + '"]') && document.querySelector('.inc_pdp_bundle_product_list_item_block[data-main_id="' + r.mainId + '"]').click(),
                setTimeout((function() {
                    document.querySelector('.inc_product_block[data-id="' + r.id + '"]').parentNode.parentNode.querySelector(".inc_product_modal_block").classList.add("inc_active"),
                    document.querySelector("html").classList.add("inc_overlay")
                }
                ), 50)
            }
            )),
            p.addEventListener("click", (function() {
                document.querySelector('.inc_product_block[data-id="' + r.id + '"]').querySelector(".inc_product_desc_add_block").click()
            }
            )),
            i
        }
    }
    ,
    e.methods.clear = function() {
        null != document.querySelector(".sidebar_outer") && (Array.prototype.forEach.call(document.querySelectorAll(".sidebar_outer"), (function(e) {
            e.parentNode.removeChild(e)
        }
        )),
        Array.prototype.forEach.call(document.querySelectorAll(".sidebar_outer"), (function(e) {
            e.parentNode.removeChild(e)
        }
        ))),
        null != document.querySelector(".inc_sidebar_modal_block") && (Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_modal_block"), (function(e) {
            e.parentNode.removeChild(e)
        }
        )),
        Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), (function(e) {
            e.parentNode.removeChild(e)
        }
        ))),
        null != document.querySelector(".inc_af_block") && Array.prototype.forEach.call(document.querySelectorAll(".inc_af_block"), (function(e) {
            e.parentNode.removeChild(e)
        }
        )),
        null != document.querySelector(".inc_pdp_block") && Array.prototype.forEach.call(document.querySelectorAll(".inc_pdp_block"), (function(e) {
            e.parentNode.removeChild(e)
        }
        ))
    }
    ,
    e.methods.addProductToCart = function(t, c, i, o, r, n, _) {
        if (null != document.querySelector(".product-add-form form input[name=form_key]"))
            var a = document.querySelector(".product-add-form form input[name=form_key]").value;
        try {
            var s = new e.classes.FindObj(t)
              , p = e.dataStore.methods().getProductById(s)
              , m = c.getAttribute("data-main_id")
              , b = c.querySelector("input").value;
            setTimeout((function() {
                null != document.querySelector(".inc_product_modal_block.inc_active") && (document.querySelector(".inc_product_modal_block.inc_active").classList.remove("inc_active"),
                document.querySelector("html").classList.remove("inc_overlay"))
            }
            ), 1500),
            p.ProductType,
            "pid=" + p.mainId + "&quantity=" + b + "&options=%5B%5D";
            var y = {};
            "/checkout/cart/" != window.location.pathname ? (y.product = p.mainId,
            y.selected_configurable_option = "",
            y.related_product = "",
            y.item = p.mainId,
            y.form_key = a,
            y.qty = b) : (a = document.querySelector(".form.form-cart input[name=form_key]").value,
            y.product = p.mainId,
            y.uenc = btoa("https://www.leekes.co.uk/checkout/cart/add/uenc/" + btoa(e.clientConfig.checkoutLink) + "/product/" + p.mainId + "/in_cart/" + b + "/"),
            y.form_key = a),
            _ == d && (e.config.pdpaddedProductList = [],
            e.config.pdpaddedProductList.push(e.config.Product_id.toString()),
            e.config.pdpaddedProductList.push(p.mainId.toString()),
            O());
            var v = "";
            function f(t, o, l, a, u) {
                e.config.disablebtn = !0,
                1 == u.error ? (i.innerText = "Not Added",
                r.innerText = "Not Added",
                null != n && (n.innerHTML = "Not Added")) : (null != o && (o.innerText = e.config.addedtoBagText),
                null != a && (a.innerText = e.config.addedtoBagText),
                t.innerText = e.config.addedtoBagText,
                null != n && (n.innerHTML = e.config.addedtoBagText)),
                "cartPage" == e.config.pageType && null != document.querySelector(".cart-item.product") && (e.clientConfig.offset = 0,
                e.clientConfig.slidevalue = 0,
                e.init());
                let m = !1;
                "cartPage" == e.config.pageType || e.config.recommendation || _ ? "cartPage" != e.config.pageType && null != document.querySelector(".sidebar_outer.sidebar_outer_active") && (m = !0) : m = !0,
                m == d && e.methods.addProductToSidebarCart(s, 1, c, null, r),
                "cartPage" == e.config.pageType && (null != document.querySelector(".inc_product_modal_block.inc_active") && document.querySelector(".inc_product_modal_block.inc_active").classList.remove("inc_active"),
                l.querySelector(".inc_product_desc_add_text").innerText = "Added",
                setTimeout((function() {
                    null != l && l.parentNode.removeChild(l)
                }
                ), 500),
                setTimeout((function() {
                    window.location.reload()
                }
                ), 2e3),
                null != document.querySelector(".inc_recommended_tabs_list_item_block") && document.querySelector(".inc_recommended_tabs_list_item_block").click(),
                document.querySelector("html").classList.remove("inc_overlay")),
                setTimeout((function() {
                    o.innerText = e.config.addToCartText,
                    Array.prototype.forEach.call(o, (function(e) {
                        e.innerText = "Add"
                    }
                    )),
                    null != t && null != t.parentNode.parentNode && t.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;"),
                    e.config.disablebtn = !0
                }
                ), 2e3),
                "cartPage" != e.config.pageType && setTimeout((function() {
                    z(null, _);
                    let t = l.querySelectorAll(".inc_recommended_products_list_block .inc_product_module_block").length;
                    if (null == document.querySelector(".inc_recommended_products_list_block .inc_product_module_block") || 1 == t && null != document.querySelector(".sidebar_outer.sidebar_outer_active")) {
                        if (null != document.querySelector(".inc_recommended_tabs_list_item_block.inc_active")) {
                            let e = document.querySelector(".inc_recommended_tabs_list_item_block.inc_active");
                            if (null != document.querySelector(".inc_recommended_tabs_list_item_block.inc_active")) {
                                if (document.querySelector(".inc_recommended_tabs_list_item_block.inc_active").parentNode.removeChild(e),
                                "" == document.querySelector(".inc_recommended_tabs_block").innerText)
                                    return document.querySelector(".inc_recommended_products_block").innerHTML = "",
                                    void window.location.replace("https://www.leekes.co.uk/checkout/cart/");
                                document.querySelectorAll(".inc_recommended_tabs_list_item_block").length > 1 ? (null != document.querySelector(".inc_recommended_tabs_list_item_block") && document.querySelector(".inc_recommended_tabs_list_item_block").click(),
                                T()) : (null != document.querySelector(".inc_recommended_tabs_list_item_block") && document.querySelector(".inc_recommended_tabs_list_item_block").click(),
                                T(),
                                document.querySelector(".inc_recommended_products_list_block").setAttribute("style", "margin-left:0;")),
                                window.innerWidth < 821 && document.querySelector(".inc_recommended_tabs_list_block").scroll({
                                    left: 0,
                                    top: 0,
                                    behavior: "smooth"
                                })
                            }
                        }
                    } else {
                        if (1 == l.parentNode.querySelectorAll(".inc_recommended_products_list_block .inc_product_module_block").length) {
                            T(l.parentNode.querySelectorAll(".inc_recommended_products_list_block .inc_product_module_block").length),
                            null != document.querySelector(".inc_recommended_tabs_list_item_block") && document.querySelector(".inc_recommended_tabs_list_item_block").click()
                        } else
                            T(),
                            null != l && l.parentNode.removeChild(l);
                        window.innerWidth < 821 && document.querySelector(".inc_recommended_tabs_list_block").scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                    "pdp" != e.config.pageType || e.config.recommendation != d && _ != d || (null != document.querySelector(".inc_sidebar_modal_block") ? null == document.querySelector(".sidebar_outer.sidebar_outer_active") && ("simple" != p.ProductType ? e.methods.updateSidebarBlock(p.id, c) : e.methods.updateSidebarBlock(p.mainId, c),
                    e.methods.showSidebar()) : null == document.querySelector(".inc_sidebar_modal_block") && (setTimeout((function() {
                        null != l && l.parentNode.removeChild(l)
                    }
                    ), 300),
                    setTimeout((()=>{
                        window.location.reload()
                    }
                    ), 800)))
                }
                ), 1e3)
            }
            v = "/checkout/cart/" != window.location.pathname ? "https://www.leekes.co.uk/checkout/cart/add/uenc/" + btoa(p.url) + "/product/" + p.mainId + "/" : e.config.addToBasketURL,
            U(),
            window.jQuery.ajax({
                type: "POST",
                url: v,
                data: y,
                dataType: "json",
                success: function(t) {
                    e.config.pdpaddedProductList.push(p.mainId),
                    e.config.sidebarremovedprod.push(m),
                    e.config.disablebtn = !0,
                    f(r, i, c, n, t)
                },
                error: function(t) {
                    i.innerText = "Not Added",
                    r.innerText = "Not Added",
                    null != n && (n.innerHTML = "Not Added"),
                    setTimeout((function() {
                        i.innerText = e.config.addtoBagText,
                        null != r && (r.innerText = e.config.addtoBagText),
                        null != n && (n.innerText = e.config.addtoBagText),
                        Array.prototype.forEach.call(r, (function(e) {
                            e.innerText = "Add"
                        }
                        )),
                        null != r && (r.innerText = e.config.addtoBagText,
                        null != r.parentNode.parentNode && r.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;"))
                    }
                    ), 1e3),
                    "cartPage" == e.config.pageType && null != c && null != c.parentNode && c.parentNode.removeChild(c),
                    window.innerWidth < 769 && (null != c && null != c.parentNode && c.parentNode.removeChild(c),
                    null != document.querySelector(".inc_recommended_tabs_list_item_block") && document.querySelector(".inc_recommended_tabs_list_item_block").click()),
                    "cartPage" != e.config.pageType && setTimeout((function() {
                        z(null, _)
                    }
                    ), 500)
                }
            })
        } catch (S) {
            null != r && (r.innerText = e.config.addtoBagText),
            null != n && (n.innerText = e.config.addtoBagText),
            Array.prototype.forEach.call(r, (function(e) {
                e.innerText = "Add"
            }
            )),
            null != r && (r.innerText = e.config.addtoBagText,
            null != r.parentNode.parentNode && r.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;"))
        }
        document.querySelector("body").classList.remove("inc_popup_open");
        var g = "";
        switch (e.config.pageType) {
        case "pdp":
            g = "107";
            break;
        case "productList":
        case "other":
            g = "101";
            break;
        case "cartPage":
            g = "103"
        }
        setTimeout((function() {
            null == document.querySelector(".inc_product_modal_block.inc_active") && null != document.querySelector(".minicart-container.minicart-container--active") && document.querySelector("html").classList.remove("inc_overlay"),
            null != document.querySelector(".inc_product_modal_block.inc_active") && (document.querySelector(".inc_product_modal_block.inc_active").classList.remove("inc_active"),
            document.querySelector("html").classList.remove("inc_overlay")),
            "cartPage" == e.config.pageType && ("Adding..." != r.innerText && "Tilføjelse..." != r.innerText || (i.innerText = e.config.addedtoBagText,
            r.innerText = e.config.addedtoBagText,
            null != n && (n.innerHTML = e.config.addedtoBagText)),
            null != document.querySelector(".inc_product_modal_block.inc_active") && (document.querySelector(".inc_product_modal_block.inc_active").classList.remove("inc_active"),
            document.querySelector("html").classList.remove("inc_overlay")),
            document.querySelector("html").classList.remove("inc_overlay"),
            window.location.reload())
        }
        ), 3e3);
        var k = {};
        if (null == document.querySelector(".inc_sidebar_modal_block.inc_active") && "pdp" == e.config.pageType && (g = "100"),
        null != document.querySelector(".minicart-container--active") && "pdp" == e.config.pageType && (g = "107"),
        null != document.querySelector(".minicart-container.minicart-container--active") && "pdp" == e.config.pageType && (g = "107"),
        e.config.recommendation == l && _ != d && "undefined" == p.bundleId || null == p.bundleId) {
            var h = {
                core_product_id: e.config.Product_id,
                product_id: p.mainId
            };
            let q = {};
            q = null != document.querySelector(".stock.unavailable.outstock") ? {
                eventData: btoa(JSON.stringify({
                    event_data: h,
                    page_type: g,
                    event_type: "bestseller_add_to_cart",
                    method: "track",
                    platform: "",
                    rt: "8",
                    rpt: "1",
                    token: e.config.clientToken
                })),
                vid: u("ivid"),
                time: E(),
                uri: document.location.href
            } : {
                eventData: btoa(JSON.stringify({
                    event_data: h,
                    page_type: g,
                    event_type: "bestseller_add_to_cart",
                    method: "track",
                    platform: "",
                    rt: "8",
                    rpt: "2",
                    token: e.config.clientToken
                })),
                vid: u("ivid"),
                time: E(),
                uri: document.location.href
            },
            M(JSON.stringify(q))
        } else
            "cartPage" == e.config.pageType ? k.bundle_data = {
                id: p.bundleId,
                product_ids: [p.bundledProductId, p.mainId],
                product_id: p.mainId
            } : k.bundle_data = {
                id: p.bundleId,
                product_ids: [p.bundledProductId, p.mainId],
                product_id: p.bundledProductId
            },
            e.methods.trackingEvents("bundleAddToCart", k, g)
    }
    ,
    e.methods.addBundleToCart = function(t, c) {
        e.clientConfig.OOS = [];
        var i = e.dataStore
          , o = document.querySelector(".inc_pdp_product-main_block .inc_product_module_block").getAttribute("data-main_id")
          , r = []
          , d = []
          , l = 0
          , n = {}
          , _ = {}
          , a = {}
          , s = {}
          , u = {}
          , p = {}
          , m = (r = [],
        Object.keys(i.bundleCartProducts));
        Object.keys(i.bundleCartProducts).forEach((function(o) {
            var b = new e.classes.FindObj({
                id: o
            });
            if (null != document.querySelector(".product-add-form form input[name=form_key]"))
                var y = document.querySelector(".product-add-form form input[name=form_key]").value;
            if (0 == l) {
                var v = e.dataStore.methods().getProductById(b)
                  , g = "https://www.leekes.co.uk/checkout/cart/add/uenc/" + btoa(v.url) + "/product/" + v.mainId + "/";
                console.log(v.option),
                v.ProductType,
                "pid=" + v.mainId + "&quantity=" + i.bundleCartProducts[o] + "&options=%5B%5D",
                null == i.bundleCartProducts[o] && (i.bundleCartProducts[o] = 1),
                n.product = v.mainId,
                n.selected_configurable_option = "",
                n.related_product = "",
                n.item = v.mainId,
                n.form_key = y,
                n.qty = i.bundleCartProducts[o],
                r.push(n),
                d.push(g)
            } else if (1 == l) {
                v = e.dataStore.methods().getProductById(b),
                g = "https://www.leekes.co.uk/checkout/cart/add/uenc/" + btoa(v.url) + "/product/" + v.mainId + "/";
                console.log(v.option),
                v.ProductType,
                "pid=" + v.mainId + "&quantity=" + i.bundleCartProducts[o] + "&options=%5B%5D",
                null == i.bundleCartProducts[o] && (i.bundleCartProducts[o] = 1),
                _.product = v.mainId,
                _.selected_configurable_option = "",
                _.related_product = "",
                _.item = v.mainId,
                _.form_key = y,
                _.qty = i.bundleCartProducts[o],
                r.push(_),
                d.push(g)
            } else if (2 == l) {
                v = e.dataStore.methods().getProductById(b),
                g = "https://www.leekes.co.uk/checkout/cart/add/uenc/" + btoa(v.url) + "/product/" + v.mainId + "/";
                console.log(v.option),
                v.ProductType,
                "pid=" + v.mainId + "&quantity=" + i.bundleCartProducts[o] + "&options=%5B%5D",
                null == i.bundleCartProducts[o] && (i.bundleCartProducts[o] = 1),
                a.product = v.mainId,
                a.selected_configurable_option = "",
                a.related_product = "",
                a.item = v.mainId,
                a.form_key = y,
                a.qty = i.bundleCartProducts[o],
                r.push(a),
                d.push(g)
            } else if (3 == l) {
                v = e.dataStore.methods().getProductById(b),
                g = "https://www.leekes.co.uk/checkout/cart/add/uenc/" + btoa(v.url) + "/product/" + v.mainId + "/";
                console.log(v.option),
                v.ProductType,
                "pid=" + v.mainId + "&quantity=" + i.bundleCartProducts[o] + "&options=%5B%5D",
                null == i.bundleCartProducts[o] && (i.bundleCartProducts[o] = 1),
                s.product = v.mainId,
                s.selected_configurable_option = "",
                s.related_product = "",
                s.item = v.mainId,
                s.form_key = y,
                s.qty = i.bundleCartProducts[o],
                r.push(s),
                d.push(g)
            } else if (4 == l) {
                v = e.dataStore.methods().getProductById(b),
                g = "https://www.leekes.co.uk/checkout/cart/add/uenc/" + btoa(v.url) + "/product/" + v.mainId + "/";
                console.log(v.option),
                v.ProductType,
                "pid=" + v.mainId + "&quantity=" + i.bundleCartProducts[o] + "&options=%5B%5D",
                null == i.bundleCartProducts[o] && (i.bundleCartProducts[o] = 1),
                u.product = v.mainId,
                u.selected_configurable_option = "",
                u.related_product = "",
                u.item = v.mainId,
                u.form_key = y,
                u.qty = i.bundleCartProducts[o],
                r.push(u),
                d.push(g)
            } else if (5 == l) {
                v = e.dataStore.methods().getProductById(b),
                g = "https://www.leekes.co.uk/checkout/cart/add/uenc/" + btoa(v.url) + "/product/" + v.mainId + "/";
                console.log(v.option),
                v.ProductType,
                "pid=" + v.mainId + "&quantity=" + i.bundleCartProducts[o] + "&options=%5B%5D",
                null == i.bundleCartProducts[o] && (i.bundleCartProducts[o] = 1),
                p.product = v.mainId,
                p.selected_configurable_option = "",
                p.related_product = "",
                p.item = v.mainId,
                p.form_key = y,
                p.qty = i.bundleCartProducts[o],
                r.push(p),
                d.push(g)
            }
            l++,
            m.length == l && function(t, c, i, o) {
                e.clientConfig.OOS = [],
                e.clientConfig.OOS_MESG = [];
                var r = c;
                function d(e, c) {
                    null == t[1] && z(e, o),
                    null != t[1] && u()
                }
                function l(e, c) {
                    null == t[2] && z(e, o),
                    null != t[2] && p()
                }
                function n(e, c) {
                    null == t[3] && z(e, o),
                    null != t[3] && m()
                }
                function _(e, c) {
                    null == t[4] && z(e, o),
                    null != t[4] && b()
                }
                function a(e, c) {
                    null == t[5] && z(e, o),
                    null != t[5] && y()
                }
                function s() {
                    window.jQuery.ajax({
                        url: r[0],
                        type: "POST",
                        data: t[0],
                        dataType: "json",
                        success: function(e) {
                            null != e.backUrl && I(t[0]),
                            d(i, e)
                        },
                        error: function(e) {
                            d(i, e)
                        }
                    })
                }
                function u() {
                    window.jQuery.ajax({
                        url: r[1],
                        type: "POST",
                        data: t[1],
                        dataType: "json",
                        success: function(e) {
                            null != e.backUrl && I(t[1]),
                            l(i, e)
                        },
                        error: function(e, t) {
                            l(i)
                        }
                    })
                }
                function p() {
                    window.jQuery.ajax({
                        url: r[2],
                        type: "POST",
                        data: t[2],
                        dataType: "json",
                        success: function(e) {
                            null != e.backUrl && I(t[2]),
                            n(i, e)
                        },
                        error: function(e) {
                            n(i, e)
                        }
                    })
                }
                function m() {
                    window.jQuery.ajax({
                        url: r[3],
                        type: "POST",
                        data: t[3],
                        dataType: "json",
                        success: function(e) {
                            null != e.backUrl && I(t[3]),
                            _(i, e)
                        },
                        error: function(e) {
                            _(i, e)
                        }
                    })
                }
                function b() {
                    window.jQuery.ajax({
                        url: r[4],
                        type: "POST",
                        data: t[4],
                        dataType: "json",
                        success: function(e) {
                            null != e.backUrl && I(t[4]),
                            a(i, e)
                        },
                        error: function(e) {
                            a(i, e)
                        }
                    })
                }
                function y() {
                    window.jQuery.ajax({
                        url: r[5],
                        type: "POST",
                        data: t[5],
                        dataType: "json",
                        success: function(e) {
                            null != e.backUrl && I(t[5]);
                            t[5].pid;
                            z(i, o)
                        },
                        error: function(e) {
                            z(i)
                        }
                    })
                }
                s()
            }(r, d, t, c)
        }
        )),
        function(t) {
            let c = "bundle_add_to_cart"
              , i = ""
              , o = [];
            i = t,
            U();
            let r = "100"
              , d = []
              , l = "";
            for (let c = 0; c < e.config.bundle_tracking.length; c++)
                (1 == e.config.bundle_tracking.length || t != e.config.bundle_tracking[c].id) && (o.push(t),
                o.push(e.config.bundle_tracking[c].id),
                null != document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + e.config.bundle_tracking[c].id + '"]') ? l = document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + e.config.bundle_tracking[c].id + '"]').getAttribute("b-index") : null != document.querySelector('.inc_pdp_block .inc_product_module_block[data-sku="' + e.config.bundle_tracking[c].id + '"]') && (l = document.querySelector('.inc_pdp_block .inc_product_module_block[data-sku="' + e.config.bundle_tracking[c].id + '"]').getAttribute("b-index")),
                d.push({
                    id: parseInt(e.config.bundle_tracking[c].bid),
                    product_ids: o,
                    product_id: i,
                    bundle_pos: l
                }),
                o = []);
            let n = document.querySelectorAll(".inc_pdp_bundle_product_list_main_block .inc_product_module_block").length
              , _ = {
                eventData: btoa(JSON.stringify({
                    event_data: {
                        bundle_data: d
                    },
                    page_type: r.toString(),
                    event_type: c,
                    method: "track",
                    platform: "",
                    token: e.config.clientToken,
                    db: n.toString(),
                    mb: "1"
                })),
                vid: e.config.ivid,
                time: E(),
                uri: document.location.href
            };
            M(JSON.stringify(_))
        }(o)
    }
    ,
    e.methods.trackingEvents = function(t, c, i, o) {
        let r = {}
          , l = {};
        switch (r.event_data = c,
        t) {
        case "productPageVisit":
            r.event_type = "product_page_visit",
            r.method = "track";
            break;
        case "catalogProductView":
            r.event_type = "catalog_product_view",
            r.page_type = "catalog_product_view",
            r.method = "track";
            break;
        case "bundleProductClickTracking":
            if (r.event_type = "bundle_product_click_tracking",
            r.page_type = i,
            o == d && "pdp" == e.config.pageType && (null != document.querySelector(".stock.unavailable.outstock") ? (r.rt = "8",
            r.rpt = "1") : (r.rt = "8",
            r.rpt = "2")),
            r.is_logged = "0",
            r.method = "track",
            o != d && "100" == i && null != document.querySelectorAll(".inc_pdp_block .inc_product_module_block")[0]) {
                let e = document.querySelectorAll(".inc_pdp_bundle_product_list_main_block .inc_product_module_block").length;
                r.db = e.toString()
            }
            break;
        case "bundleAddToCart":
            if (r.event_type = "bundle_add_to_cart",
            r.page_type = i,
            r.is_logged = "0",
            r.method = "track",
            "100" == i && null != document.querySelectorAll(".inc_pdp_block .inc_product_module_block")[0]) {
                let e = document.querySelectorAll(".inc_pdp_bundle_product_list_main_block .inc_product_module_block").length.toString();
                r.db = e
            }
        }
        r.platform = "",
        r.token = e.config.clientToken,
        l.eventData = btoa(JSON.stringify(r)),
        l.uri = window.location.href,
        l.vid = e.config.ivid,
        e.methods.sendTrackingEvents(l)
    }
    ,
    e.methods.sendTrackingEvents = function(t) {
        let c = new XMLHttpRequest
          , i = e.config.trackingURL;
        c.onreadystatechange = function() {
            4 === c.readyState && 200 === c.status && console.log(c.readyState)
        }
        ,
        c.open("POST", i, !0),
        c.setRequestHeader("Content-Type", "application/json"),
        c.send(JSON.stringify(t))
    }
    ,
    e.methods.addVisitorID = function() {
        let t = "";
        null != u("ivid") && (t = u("ivid"));
        let c = window.location.host
          , o = c.split(".")
          , r = new Date
          , d = "expires=" + r.toUTCString();
        return 0 == t.length ? (t = function(e, t) {
            let c, o = t || 36, r = "";
            for (; r.length < e; )
                c = i(o).toString().slice(2),
                r += c.slice(0, Math.min(c.length, e - r.length));
            return r
        }(42, 16),
        o.shift(),
        c = o.join("."),
        "com" == o && (c = window.location.host),
        r.setTime(r.getTime() + 31536e6),
        d = "expires=" + r.toUTCString(),
        document.cookie = "ivid=" + t + "; expires=" + d + "; domain=" + c + "; path=/; secure;") : (o.shift(),
        c = o.join("."),
        "com" == o && (c = window.location.host),
        r.setTime(r.getTime() + 31536e6),
        d = "expires=" + r.toUTCString(),
        document.cookie = "ivid=" + t + "; expires=" + d + "; domain=" + c + "; path=/; secure;"),
        e.config.ivid = t,
        console.log(t),
        t
    }
    ,
    e.methods.getSizeCategoryType = e=>{
        let t = null;
        return ["leather", "trousers", "gloves", "jackets", "hats", "wellington", "outers-and-midlayers", "bug-clothing", "socks"].map((c=>{
            e.categoryName.toLocaleLowerCase().includes(c) && (t = c)
        }
        )),
        t
    }
    ,
    document.onclick = function(t) {
        let c = t.target;
        if (null != c)
            try {
                if ("inc_product_modal_block inc_active" == c.className && (document.querySelector("body").classList.remove("inc_popup_open"),
                null == document.querySelector(".inc_sidebar_modal_block.inc_active") ? (document.querySelector("html").classList.remove("inc_overlay"),
                document.querySelector("html").classList.remove("inc_popup_open")) : document.querySelector("html").classList.remove("inc_popup_open"),
                a > 100 && window.scrollTo(0, a),
                c.querySelector(".inc_product_header_title_block").classList.add("inc_active"),
                c.querySelector(".inc_product_header_title_block_1").classList.remove("inc_active"),
                c.classList.remove("inc_active")),
                "inc_product_modal_block inc_active mini_popup" != c.className && "inc_product_modal_block mini_popup inc_active" != c.className || (document.querySelector("body").classList.remove("inc_popup_open"),
                null == document.querySelector(".inc_sidebar_modal_block.inc_active") ? (document.querySelector("html").classList.remove("inc_overlay"),
                document.querySelector("html").classList.remove("inc_popup_open")) : document.querySelector("html").classList.remove("inc_popup_open"),
                a > 100 && window.scrollTo(0, a),
                c.querySelector(".inc_product_header_title_block").classList.add("inc_active"),
                c.querySelector(".inc_product_header_title_block_1").classList.remove("inc_active"),
                c.classList.remove("inc_active"),
                c.classList.remove("mini_popup")),
                (c.classList.contains("inc_product_desc_att_size_block") || c.classList.contains("inc_product_desc_att_size_title_block") || c.classList.contains("inc_product_desc_att_size_title_text_block") || c.classList.contains("inc_product_desc_att_size_title_text") || c.classList.contains("inc_product_desc_att_zero_block") || c.classList.contains("inc_product_desc_att_zero_title_block") || c.classList.contains("inc_product_desc_att_zero_title_text_block") || c.classList.contains("inc_product_desc_att_zero_title_text") || c.classList.contains("inc_product_desc_att_color_block") || c.classList.contains("inc_product_desc_att_color_title_block") || c.classList.contains("inc_product_desc_att_color_title_text_block") || c.classList.contains("inc_product_desc_att_color_title_text")) && c.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement && c.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".inc_product_variant_simple_block").click(),
                c.classList.contains("quick_view_open") == d && null != document.querySelector(".inc_details_mobile_quick_view.quick_view_active") && document.querySelector(".inc_details_mobile_quick_view.quick_view_active .prod_quick_view_close").click(),
                "inc_empty_popup" == c.className && (null == document.querySelector(".inc_product_modal_block.inc_active") && null == document.querySelector(".inc_sidebar_modal_block.inc_active") && (document.querySelector("html").classList.remove("inc_overlay"),
                document.querySelector("html").classList.remove("inc_popup_open")),
                c.parentNode.querySelector(".inc_product_desc_att_block").classList.contains("inc_active") && c.parentNode.querySelector(".inc_product_desc_att_block").classList.remove("inc_active")),
                "inc_product_block configurable show_overlay" != c.className && "inc_product_block configurable inc_other_noimage show_overlay" != c.className || c.parentNode.querySelector(".inc_product_desc_att_block").classList.contains("inc_active") && (c.parentNode.querySelector(".inc_product_desc_att_block").classList.remove("inc_active"),
                document.querySelector("html").classList.remove("inc_overlay"),
                document.querySelector("body").style.position = "relative",
                document.querySelector("body").style.overflow = "auto",
                document.querySelector(".inc_product_block.configurable.show_overlay").classList.remove("show_overlay")),
                "productList" == e.config.pageType && (c.parentNode.classList.contains("button--add-to-cart") == d || c.classList.contains("button--add-to-cart") == d)) {
                    !function(t) {
                        let c = ""
                          , i = 0;
                        null != t.querySelector(".quick-shop__title.js-product-title") && (c = t.querySelector(".quick-shop__title.js-product-title").textContent.trim());
                        null != t.querySelector(".modal_price .current_price") && (i = t.querySelector(".modal_price .current_price").textContent.trim());
                        let o = i.split("£")[1].split("/")[0].replace(" ", "").replace(",", "").trim()
                          , r = "";
                        null != document.querySelector(".product-gallery__main .image__container img") && (r = document.querySelector(".product-gallery__main .image__container img").src);
                        let d = 0
                          , l = "";
                        document.querySelector(".fancybox-container").className.includes("product-") && (l = document.querySelector(".fancybox-container").className.split("product-")[1].split(" ")[0].trim());
                        null != t.querySelector(".modal_price .was-price").innerText && (d = t.querySelector(".modal_price .was-price").innerText.replace("£", "").replace(",", ""));
                        let n, _, a, s, u = 1;
                        if (document.querySelectorAll(".js-quick-shop .swatch_options .swatch").length > 1) {
                            n = document.querySelectorAll(".js-quick-shop .swatch_options .swatch .swatch__options")[0],
                            _ = document.querySelectorAll(".js-quick-shop .swatch_options .swatch .swatch__options")[1];
                            let e = n.querySelectorAll("input");
                            for (let t = 0; t < e.length; t++)
                                if (e[t].checked) {
                                    a = e[t].value;
                                    break
                                }
                            let t = _.querySelectorAll("input");
                            for (let e = 0; e < t.length; e++)
                                if (t[e].checked) {
                                    s = t[e].value;
                                    break
                                }
                        } else {
                            n = document.querySelectorAll(".js-quick-shop .swatch_options .swatch .swatch__options input");
                            for (let e = 0; e < n.length; e++)
                                if (n[e].checked) {
                                    a = n[e].value;
                                    break
                                }
                        }
                        let p = a + " , " + s;
                        null != t.querySelector(".quantity-wrapper .quantity-input") && (u = t.querySelector(".quantity-wrapper .quantity-input").value);
                        isNaN(u) && (u = 1);
                        if (u = Math.abs(u),
                        null != l) {
                            let t = l;
                            setTimeout((function() {
                                !function(t, c, i, o, r, d, l) {
                                    let n = d
                                      , _ = 1;
                                    "desktop" == e.config.deviceType && (_ = r);
                                    "mobile" == e.config.deviceType && (_ = r);
                                    _ = Math.abs(_),
                                    e.dataStore.plpProductQty = _,
                                    e.methods.clear();
                                    let a = i
                                      , s = t
                                      , u = o
                                      , p = null
                                      , m = 0
                                      , b = 0;
                                    0 != c && (p = o,
                                    u = c);
                                    null != p && p != u ? (m = p,
                                    b = u) : (m = u,
                                    b = u);
                                    e.config.empty_prod_details = [],
                                    e.config.empty_prod_details.push({
                                        p_id: n,
                                        p_name: s,
                                        p_img: a,
                                        p_activePrice: m,
                                        regularPrice: b,
                                        size: l.split(",")[0].trim(),
                                        color: l.split(",")[1].trim()
                                    }),
                                    setTimeout((function() {
                                        e.methods.irbReq(n, 5, "catalog_product_view")
                                    }
                                    ), 100)
                                }(c, d, r, o, u, t, p)
                            }
                            ), 200)
                        }
                    }(document.querySelector(".fancybox-container .js-quick-shop"))
                }
                if (null !== c && null != c.parentNode && ("product-addtocart-button" === c.id || c.parentNode.classList.contains("tocart") || c.classList.contains("tocart"))) {
                    console.log("CLICKED"),
                    console.log("ACTIVATED");
                    let t = new e.classes.FindObj
                      , c = e.methods.getProductIdFromWebPage();
                    t.id = e.dataStore.methods().getFirstProductObjByMainId({
                        mainId: c
                    }).id;
                    let i = document.querySelector(".product-info-main");
                    e.config.pdpaddedProductList = [],
                    e.config.pdpaddedProductList.push(e.config.Product_id),
                    e.clientConfig.OOS = [],
                    e.clientConfig.OOS_MESG = [],
                    null == document.querySelector(".inc_sidebar_modal_block .inc_product_module_block") && null != document.querySelector(".inc_recommended_tabs_list_item_block") && document.querySelector(".inc_recommended_tabs_list_item_block").click(),
                    setTimeout((function() {
                        O(),
                        e.methods.addProductToSidebarCart(t, "client_add_btn", null, null, i),
                        e.methods.showSidebar("clientBtn")
                    }
                    ), 100)
                }
                if (c.parentNode && ((c.parentNode.classList.contains("attributes__value") || null != c.parentNode.parentNode && null != c.parentNode.parentNode.classList && c.parentNode.parentNode.classList.contains("attributes__value")) && W(c, "label"),
                "attributes-select" == c.classList && W(c, "label")),
                null != c) {
                    if ("inc_product_desc_add_img" == c.classList && null != document.querySelector(".inc_product_modal_block .inc_product_desc_att_block .show_dropdown") && window.innerWidth > 2e3 && document.querySelector(".inc_product_modal_block .inc_product_desc_att_block .show_dropdown").classList.remove("show_dropdown"),
                    "inc_product_header_img" == c.className && (document.querySelector(".inc_product_header_title_block").classList.add("inc_active"),
                    document.querySelector(".inc_product_header_title_block_1").classList.remove("inc_active"),
                    document.querySelector("body").classList.remove("inc_popup_open")),
                    "sidebar_outer sidebar_outer_active" == c.className && null != document.querySelector(".inc_header_continue_img") && document.querySelector(".inc_header_continue_img").click(),
                    "close_modal_inc" == c.className && null != document.querySelector(".inc_header_continue_img") && document.querySelector(".inc_header_continue_img").click(),
                    "inc_pdp_bundle_cart_overlay_block active" == c.className && document.querySelector(".inc_pdp_bundle_cart_title_img_block").click(),
                    "inc_promo_popup inc_active" == c.className && (document.querySelector("html").classList.remove("inc_overlay_promo"),
                    c.classList.remove("inc_active"),
                    null != document.querySelector(".inc_sidebar_modal_block.inc_active") && document.querySelector(".inc_sidebar_modal_block.inc_active").classList.remove("overflow_visible")),
                    null != c.parentNode && ("inc_product_desc_att_color_title_text_block" != c.className && "inc_product_desc_att_color_title_text_selected" != c.className && "inc_product_desc_att_color_title_text_block" != c.parentNode.className && "inc_product_desc_att_zero_title_text" != c.className && "inc_product_desc_add_block" != c.className && "inc_product_desc_add_text" != c.className && "img_color_swatch" != c.className && "inc_product_desc_att_zero_title_text_selected" != c.className && c.classList.contains("inc_product_desc_att_color_list_item_img") != d && c.classList.contains("inc_product_desc_att_zero_title_text_selected") != d && c.classList.contains("inc_product_desc_att_size_title_text_selected") != d && "inc_product_desc_att_third_title_text_selected" != c.className && "inc_product_desc_att_size_title_text_selected" != c.className && "inc_product_desc_att_third_title_text_selected" != c.className && null != document.querySelector(".inc_product_desc_att_block .show_dropdown") && document.querySelector(".inc_product_desc_att_block .show_dropdown").classList.remove("show_dropdown"),
                    "inc_product_desc_color_list_mobile_overlay_block" != c.className && "inc_product_desc_color_list_header_img" != c.className && "inc_product_desc_colour_list_add_btn" != c.className && "inc_product_desc_att_zero_list_mobile_overlay_block" != c.className && "inc_product_desc_att_zero_list_header_img" != c.className && "inc_product_desc_att_zero_list_add_btn" != c.className || window.innerWidth < 769 && (document.querySelector(".inc_product_desc_att_block .show_dropdown").classList.remove("show_dropdown"),
                    document.querySelector("html").classList.remove("inc_overlay"),
                    document.querySelector("body").classList.remove("inc_popup_open"))),
                    null == document.querySelector(".sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active") ? null != document.querySelector(".inc_sidebar_modal_block.inc_active") && null == document.querySelector(".inc_cart_added_product_block.remove_product_conf_modal") && null == document.querySelector(".inc_promo_popup.inc_active") && document.querySelector(".inc_sidebar_modal_block.inc_active").classList.remove("overflow_visible") : null != document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block .inc_product_modal_block.inc_active") && (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block").classList.add("overflow_visible"),
                    document.querySelector("body").classList.add("inc_popup_open")),
                    "inc_product_block configurable inc_other_noimage show_overlay" != c.className && "inc_product_desc_att_zero_title_text_block" != c.className && "inc_product_details_prod_block" != c.className && "inc_product_variant_simple_block" != c.className && "inc_product_variant_simple_text config" != c.className && "inc_product_desc_variant_popup_close_block" != c.className && "inc_product_desc_add_title_text_block" != c.className && "SELECT" != c.tagName && "inc_product_header_block active" != c.className && "inc_product_desc_att_color_list_item_img_block active" != c.className && "inc_product_desc_att_block attributes_avail active" != c.className && "inc_product_qty_block active" != c.className && "LABEL" != c.tagName && "INPUT" != c.tagName && "inc_product_qty_block" != c.className && "inc_product_desc_att_color_list_item_img_block" != c.className && "inc_product_header_block" != c.className && "select_option_inc_title" != c.className && "inc_product_desc_att_color_list_item_img" != c.className && "inc_product_desc_att_color_title_text" != c.className && "inc_product_desc_att_color_list_block" != c.className && c.classList.contains("inc_product_desc_att_block") == l && "select_option_inc_block" != c.className && "inc_product_desc_att_color_title_text_block" != c.className && "inc_product_desc_att_variant_text" != c.className && "inc_product_desc_add_img" != c.className && "inc_product_qty_up_btn" != c.className && "inc_product_qty_down_btn" != c.className && "variant_span" != c.className && null != c.classList && c.classList.contains("variantoption") == l && c.classList.contains("inc_product_desc_att_size_list_item_img_block") == l && c.classList.contains("inc_product_desc_att_color_list_block") == l && "inc_product_desc_add_img checked" != c.className && c.classList.contains("inc_product_desc_add_block") == l && c.classList.contains("inc_pdp_bundle_cart_added_product_edit_img") == l && "inc_product_desc_att_color_title_block" != c.className && "inc_product_desc_qty_up_btn" != c.className && "inc_product_desc_qty_down_btn" != c.className && c.classList.contains("inc_product_desc_att_color_block") == l && c.classList.contains("inc_product_desc_att_color_list_item_block") == l && c.classList.contains("inc_product_desc_att_zero_title_text_selected") == l && c.classList.contains("inc_product_desc_att_zero_title_text") == l && c.classList.contains("inc_product_desc_att_size_list_item_img") == l && c.classList.contains("inc_product_desc_att_color_list_item_img") != d && "inc_product_desc_att_size_title_text_selected" != c.className && "inc_product_desc_att_third_title_text_selected" != c.className && null != document.querySelector(".inc_product_desc_att_block") && document.querySelector(".inc_product_desc_att_block").classList.contains("moreThanOne") == l) {
                        let e = document.querySelectorAll(".inc_product_desc_att_block.inc_active");
                        null == document.querySelector(".inc_product_modal_block.inc_active") && null == document.querySelector(".inc_sidebar_modal_block.inc_active") && (document.querySelector("html").classList.remove("inc_overlay"),
                        document.querySelector("body").classList.remove("inc_popup_open"));
                        for (let t in e)
                            null != e[t] && Object.prototype.hasOwnProperty.call(e, t) && e[t].classList.remove("inc_active");
                        null != document.querySelector(".inc_product_block.show_overlay") && document.querySelector(".inc_product_block.show_overlay").classList.remove("show_overlay")
                    }
                    if ("pdp" == e.config.pageType && null != c.parentNode && null != c.parentNode.classList && (c.parentNode.classList.contains("image-radio") == d || c.classList.contains("swatch-option") == d || c.classList.contains("image") == d || c.parentNode.classList.contains("image") == d || c.classList.contains("product-custom-option") || c.parentNode.classList.contains("soldout") == d || c.parentNode.classList.contains("swatch-element") == d)) {
                        let e = c.getAttribute("data-option-label");
                        c.classList.contains("image") != d && c.parentNode.classList.contains("image") != d || (e = c.parentNode.parentNode.innerText,
                        null != c.getAttribute("data-option-label") && (e = c.getAttribute("data-option-label"))),
                        c.parentNode.classList.contains("image-radio") != d && c.classList.contains("image-radio") != d || (e = c.innerText),
                        c.classList.contains("single-option-selector") != d || null != e && "" != e || "INPUT" == c.tagName && (e = c.value),
                        null != e && (e = e.trim().toLocaleLowerCase()),
                        i = e,
                        setTimeout((function() {
                            if (null == i && null != document.querySelector('select[name="options[33]"]')) {
                                let e = document.querySelector('select[name="options[33]"]');
                                i = e.options[e.selectedIndex].innerText.trim().toLocaleLowerCase()
                            }
                            let e = document.querySelectorAll(".inc_pdp_product-main_block .inc_product_showcase_block");
                            for (let t in e)
                                null != e[t] && Object.prototype.hasOwnProperty.call(e, t) && (null != e[t].querySelector(".inc_product_desc_att_zero_block.inc_active") && (null != e[t].querySelector('.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' + i + '"] div') ? e[t].querySelector('.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' + i + '"] div').click() : null != e[t].querySelector('.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' + i + '"]') && e[t].querySelector('.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' + i + '"]').click(),
                                null != e[t].querySelector(".inc_product_desc_att_color_block.inc_active") && null != e[t].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + i + '"] div') && e[t].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + i + '"]').click()),
                                null != i && (i.indexOf("sel_35") < 0 && null != e[t].querySelector(".inc_product_desc_att_size_block.inc_active") && (i = i.replace("sel_34", "").trim(),
                                null != e[t].querySelector('.inc_product_desc_att_size_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' + i + '"] div') && e[t].querySelector('.inc_product_desc_att_size_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' + i + '"] div').click(),
                                i += "sel_34"),
                                i.indexOf("sel_34") < 0 && null != e[t].querySelector(".inc_product_desc_att_third_block.inc_active") && (i = i.replace("sel_35", "").trim(),
                                null != e[t].querySelector('.inc_product_desc_att_third_block.inc_active .inc_product_desc_att_third_list_item_img_block[datasize="' + i + '"] div') && e[t].querySelector('.inc_product_desc_att_third_block.inc_active .inc_product_desc_att_third_list_item_img_block[datasize="' + i + '"] div').click())),
                                null != e[t].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolorfabric="' + i + '"] div') && e[t].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolorfabric="' + i + '"] div').click(),
                                null != e[t].querySelector(".inc_product_desc_att_color_block.inc_active") && null != e[t].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + i + '"] div') && e[t].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + i + '"]').click())
                        }
                        ), 500)
                    }
                    c.classList.contains("remove_link") == d && "cartPage" == e.config.pageType && setTimeout((function() {
                        null != document.querySelector(".cart-item.product") && (e.clientConfig.offset = 0,
                        e.clientConfig.slidevalue = 0,
                        e.init())
                    }
                    ), 2e3)
                }
                setTimeout((function() {
                    let t = document.querySelector(".inc_product_modal_block.inc_active .inc_product_img_main_img img");
                    t && t.setAttribute("style", e.config.styleft)
                }
                ), 2e3)
            } catch (e) {
                let t = new FormData;
                t.append("EmailId", "shashi@increasingly.com"),
                t.append("Subject", "JS Error on Conranshop"),
                t.append("Message", e + "Error Stack" + e.stack);
                let c = new XMLHttpRequest;
                throw c.open("POST", "//api.increasingly.co/SendEmail", d),
                c.send(t),
                e
            }
        var i
    }
    ,
    setTimeout((function() {
        window.innerWidth < 769 && (window.addEventListener("orientationchange", (function() {
            if (window.matchMedia("(orientation: portrait)").matches) {
                console.log("PORTRAIT"),
                e.config.deviceMode = "PORTRAIT";
                let c = document.querySelector(".inc_pdp_block");
                null != c && c.parentNode.removeChild(c),
                t = !1;
                let i = document.querySelector(".inc_sidebar_modal_block");
                null != i && i.parentNode.removeChild(i);
                let o = document.querySelector(".inc_sidebar_overlay_block");
                null != o && o.parentNode.removeChild(o),
                setTimeout((function() {
                    e.init()
                }
                ), 0)
            }
            if (window.matchMedia("(orientation: landscape)").matches) {
                console.log("LANSCAPE"),
                e.config.deviceMode = "LANSCAPE",
                t = !1;
                let c = document.querySelector(".inc_pdp_block");
                null != c && c.parentNode.removeChild(c);
                let i = document.querySelector(".inc_sidebar_modal_block");
                null != i && i.parentNode.removeChild(i);
                let o = document.querySelector(".inc_sidebar_overlay_block");
                null != o && o.parentNode.removeChild(o),
                setTimeout((function() {
                    e.init()
                }
                ), 10)
            }
        }
        ), {
            passive: !0
        }),
        document.addEventListener("touchmove", (function() {
            null != document.querySelector(".inc_pdp_block") && null != document.querySelectorAll(".elc-sticky-container.js-sticky-container")[1] && (document.querySelectorAll(".elc-sticky-container.js-sticky-container")[1].style.display = "block")
        }
        ), !1))
    }
    ), 3e3);
    function F(e) {
        let t = e
          , c = [];
        return ["Colour", "Color", "Size_", "Color_size", "Size", "Leather", "Length", "Size", "Leather_Size"].forEach((function(e) {
            let i = !1;
            t = t.filter((function(t) {
                return !(!i && t.attributeCode == e) || (c.push(t),
                i = !0,
                !1)
            }
            ))
        }
        )),
        c
    }
    let R = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(e) {
            let t, c, i, o, r, d, l, n = "", _ = 0;
            for (e = R._utf8_encode(e); _ < e.length; )
                t = e.charCodeAt(_++),
                c = e.charCodeAt(_++),
                i = e.charCodeAt(_++),
                o = t >> 2,
                r = (3 & t) << 4 | c >> 4,
                d = (15 & c) << 2 | i >> 6,
                l = 63 & i,
                isNaN(c) ? d = l = 64 : isNaN(i) && (l = 64),
                n = n + this._keyStr.charAt(o) + this._keyStr.charAt(r) + this._keyStr.charAt(d) + this._keyStr.charAt(l);
            return n
        },
        decode: function(e) {
            let t, c, i, o, r, d, l, n = "", _ = 0;
            for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); _ < e.length; )
                o = this._keyStr.indexOf(e.charAt(_++)),
                r = this._keyStr.indexOf(e.charAt(_++)),
                d = this._keyStr.indexOf(e.charAt(_++)),
                l = this._keyStr.indexOf(e.charAt(_++)),
                t = o << 2 | r >> 4,
                c = (15 & r) << 4 | d >> 2,
                i = (3 & d) << 6 | l,
                n += String.fromCharCode(t),
                64 != d && (n += String.fromCharCode(c)),
                64 != l && (n += String.fromCharCode(i));
            return n = R._utf8_decode(n),
            n
        },
        _utf8_encode: function(e) {
            e = e.replace(/rn/g, "n");
            let t = "";
            for (let c = 0; c < e.length; c++) {
                let i = e.charCodeAt(c);
                i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192),
                t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224),
                t += String.fromCharCode(i >> 6 & 63 | 128),
                t += String.fromCharCode(63 & i | 128))
            }
            return t
        },
        _utf8_decode: function(e) {
            let t = ""
              , c = 0
              , i = 0
              , o = 0;
            for (; c < e.length; )
                if (i = e.charCodeAt(c),
                i < 128)
                    t += String.fromCharCode(i),
                    c++;
                else if (i > 191 && i < 224)
                    o = e.charCodeAt(c + 1),
                    t += String.fromCharCode((31 & i) << 6 | 63 & o),
                    c += 2;
                else {
                    o = e.charCodeAt(c + 1);
                    let r = e.charCodeAt(c + 2);
                    t += String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & r),
                    c += 3
                }
            return t
        }
    };
    function U() {
        let e = "https://track.webgains.com/click.html?wgcampaignid=214459&wgprogramid=12491";
        {
            let t = document.createElement("img");
            t.setAttribute("id", "cstracking"),
            t.setAttribute("src", e),
            t.setAttribute("height", "1px"),
            t.setAttribute("width", "1px"),
            t.setAttribute("style", "display:none"),
            document.body.appendChild(t)
        }
    }
    function D(e, t) {
        return parseFloat(Math.abs(+e - +t))
    }
    function W(e, t) {
        if (!document.querySelector(".inc_pdp_block"))
            return;
        let c = null;
        if (c = "attributes-select" == e.classList ? e.options[e.selectedIndex].text.trim() : "" == e.classList ? e.parentElement.getAttribute("title") : e.getAttribute("title"),
        "" == c)
            return;
        let i = document.querySelector(".inc_pdp_product-main_block").querySelector(".inc_product_desc_block").querySelectorAll(".inc_product_desc_att_size_list_item_img_block.avail")
          , o = document.querySelector(".inc_pdp_product-main_block").querySelector(".inc_product_desc_block").querySelectorAll(".inc_product_desc_att_color_list_item_img_block");
        try {
            e.parentElement.parentElement.classList.contains("attributes__value--out-of-stock") ? null != document.querySelector(".inc_pdp_block") && (document.querySelector(".inc_pdp_block").style.display = "none") : (null != document.querySelector(".inc_pdp_block") && (document.querySelector(".inc_pdp_block").style.display = ""),
            i.forEach((e=>{
                void 0 !== e.dataset.size && (e.dataset.size.toLocaleLowerCase() == c.toLocaleLowerCase() || e.innerText.toLocaleLowerCase() == c.toLocaleLowerCase()) && e.click()
            }
            )))
        } catch {
            console.log("Catch")
        }
        try {
            e.parentElement.parentElement.classList.contains("attributes__value--out-of-stock") ? null != document.querySelector(".inc_pdp_block") && (document.querySelector(".inc_pdp_block").style.display = "none") : (null != document.querySelector(".inc_pdp_block") && (document.querySelector(".inc_pdp_block").style.display = ""),
            o.forEach((e=>{
                void 0 !== e.dataset.color && (console.log(e.innerText, c),
                (e.dataset.color.toLocaleLowerCase() == c.toLocaleLowerCase() || e.innerText.toLocaleLowerCase() == c.toLocaleLowerCase()) && e.click())
            }
            )))
        } catch {
            console.log("Catch")
        }
    }
    setTimeout((function() {
        null != document.querySelector(".inc_pdp_block") && document.querySelector(".inc_pdp_product-main_block .inc_product_module_block").classList.contains("simple") && document.querySelector(".inc_pdp_bundle_product_list_main_block .inc_product_module_block").classList.contains("simple") && document.querySelector(".inc_pdp_block").classList.add("bothSimple")
    }
    ), 2500);
    var V = 0;
    if (window.innerWidth < 980) {
        function G(t) {
            if (null != document.querySelector(".inc_pdp_block")) {
                document.querySelector(".inc_pdp_block");
                if (J(jQuery(".inc_pdp_block")) && V < 1) {
                    var c = {
                        eventData: String(btoa(JSON.stringify({
                            event_data: {
                                product_id: e.dataStore.pdpProductId
                            },
                            event_type: "catalog_product_view",
                            page_type: "catalog_product_view",
                            method: "track",
                            platform: "",
                            token: e.config.clientToken
                        }))),
                        vid: u("ivid"),
                        time: E(),
                        uri: document.location.href
                    };
                    M(JSON.stringify(c)),
                    V++
                }
            } else if (null != document.querySelector(".inc_af_block") && "pdp" == e.config.pageType) {
                document.querySelector(".inc_af_block");
                if (J(jQuery(".inc_af_block")) && V < 1) {
                    c = {
                        eventData: String(btoa(JSON.stringify({
                            event_data: {
                                product_id: e.dataStore.pdpProductId
                            },
                            event_type: "catalog_product_view",
                            page_type: "catalog_product_view",
                            method: "track",
                            platform: "",
                            token: e.config.clientToken
                        }))),
                        vid: u("ivid"),
                        time: E(),
                        uri: document.location.href
                    };
                    M(JSON.stringify(c)),
                    V++
                }
            }
        }
        document.body.addEventListener("wheel", G),
        document.addEventListener("touchmove", G, !1)
    } else
        window.onscroll = function() {
            !function() {
                if (null != document.querySelector(".inc_pdp_block") || null != document.querySelector(".inc_pdp_block"))
                    var t = Q(document.querySelector(".inc_pdp_block"));
                else if (null != document.querySelector(".inc_af_block") && "pdp" == e.config.pageType)
                    t = Q(document.querySelector(".inc_af_block"));
                if (1 == t && V < 1) {
                    var c = {
                        eventData: String(btoa(JSON.stringify({
                            event_data: {
                                product_id: e.config.Product_id
                            },
                            event_type: "catalog_product_view",
                            page_type: "catalog_product_view",
                            method: "track",
                            platform: "",
                            token: e.config.clientToken
                        }))),
                        vid: u("ivid"),
                        time: E(),
                        uri: document.location.href
                    };
                    M(JSON.stringify(c)),
                    V++
                }
            }()
        }
        ;
    function J(t) {
        if (!(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)) {
            if (0 == t.length)
                return;
            var c = jQuery(window)
              , i = c.scrollTop()
              , o = c.height()
              , r = i + o
              , d = jQuery(t)
              , l = (_ = d.offset().top) + (u = d.height());
            return _ >= i && _ < r || l > i && l <= r || u > o && _ <= i && l >= r
        }
        if (null != document.querySelector(".inc_pdp_block"))
            var n = document.querySelector(".inc_pdp_block");
        else if (null != document.querySelector(".inc_af_block") && "pdp" == e.config.pageType)
            n = document.querySelector(".inc_af_block");
        if (null != n) {
            for (var _ = n.offsetTop, a = n.offsetLeft, s = n.offsetWidth, u = n.offsetHeight; n.offsetParent; )
                _ += (n = n.offsetParent).offsetTop,
                a += n.offsetLeft;
            return _ < window.pageYOffset + window.innerHeight + 2e3 && a < window.pageXOffset + window.innerWidth && _ + u > window.pageYOffset && a + s > window.pageXOffset
        }
    }
    function Q(e) {
        for (var t = e.offsetTop, c = e.offsetLeft, i = e.offsetWidth, o = e.offsetHeight; e.offsetParent; )
            t += (e = e.offsetParent).offsetTop,
            c += e.offsetLeft;
        return t < window.pageYOffset + window.innerHeight && c < window.pageXOffset + window.innerWidth && t + o > window.pageYOffset && c + i > window.pageXOffset
    }
}();
