var INC = (typeof (INC) == "undefined") ? {} : INC;

INC.ENV = "prod";
INC.debug = 0;
INC.initStatus = "";
INC.initStatusCP = "";
var prefix = "inc_";
var postfix = "_block";
var onloadpdp = false;
if(window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0){
    onloadpdp = true
}
INC.checkDevUserCookie = function () {
    INC.debug = 0;
    INC.config.pageType = INC.methods.detectPageType();
    if (INC.debug) console.log(INC.config.pageType);
    setTimeout(function () {
        INC.init()
    }, 200)
}

INC.clientConfig = {};
INC.clientConfig.currencySymbol = "£";
INC.clientConfig.productPage = {};
INC.clientConfig.productListPage = {};
INC.clientConfig.cartPage = {};
INC.clientConfig.statusVAT = "";
INC.clientConfig.regularPricePrefix = "";
INC.clientConfig.checkoutLink = "https://avon.uk.com/cart";
INC.clientConfig.loggedInUser = "";
INC.clientConfig.offset = 0;
INC.clientConfig.slidevalue = 0;
INC.config = {};
INC.config.deviceType = "";
INC.config.clientToken = "aV0oNSy";
INC.config.trackingURL = "https://optimizedby.increasingly.co/ImportData";
INC.config.addToBasketURL = "https://avon.uk.com/cart/add.js";
INC.config.affiliateURL = "";
INC.config.crawlDataObj = {};
INC.config.pageType = "";
INC.config.ivid = "";
INC.config.language = "en";
INC.config.deviceMode = "";
INC.config.pdpaddedProductList = []
INC.config.bundle_tracking = []
INC.config.modal_called = true
INC.config.prod_json_respons = []
INC.config.dupDataObjectProducts = [];
INC.config.EditText = "Edit";
INC.config.noimage = "https://www.increasingly.co/Implementation/aV0oNSpmR/images/AvonNoimage.png"
INC.config.srcImgeLazy = "https://www.increasingly.co/Implementation/aV0oNSy/images/img_placeholder.gif";
INC.config.sidebarremovedprod = []
var prdIdBFP = []

var ressponse_data = JSON.stringify({

    "BundleCount": 1,
    "Bundles": [
        {
            "BundleId": 12345679,
            "Products": [
                {
                    "ProductId": "9517B002",
                    "ProductSku": "180309",
                    "ProductName": "",
                    "ImageURL": "",
                    "ProductUrl": "",
                    "Price": "469.9900",
                    "SpecialPrice": "469.9900",
                    "ExclusiveVATPrice": null,
                    "ExclusiveVATSpecialPrice": null,
                    "Description": "",
                    "ShortDescription": "",
                    "Quantity": 1000,
                    "Manufacturer": "",
                    "OtherImageList": null,
                    "QuantityBasedBundle": null,
                    "ProductType": "simple",
                    "Color": "",
                    "Size": null,
                    "Weight": null,
                    "Attributes": null,
                },
                {
                    "ProductId": "8267B001",
                    "ProductSku": "178181",
                    "ProductName": "Lens Hood EW-60E",
                    "ImageURL": "",
                    "ProductUrl": "",
                    "Price": "39.9900",
                    "SpecialPrice": "39.9900",
                    "ExclusiveVATPrice": null,
                    "ExclusiveVATSpecialPrice": null,
                    "Description": "",
                    "ShortDescription": "",
                    "Quantity": 1000,
                    "Manufacturer": "Avon",
                    "OtherImageList": null,
                    "QuantityBasedBundle": null,
                    "ProductType": "simple",
                    "Color": "",
                    "Size": null,
                    "Weight": null,
                    "Attributes": null,
                }],
            "ProductIds": []
        }],
    "ProductsDetail":[]
})
INC.init = function () {
    // INC.addCSSFile();
    INC.methods.addVisitorID();
    INC.config.deviceType = INC.methods.detectDeviceType();
    INC.config.pageType = INC.methods.detectPageType();
    INC.config.language = INC.methods.detectLanguage();
    INC.clientConfig.statusVAT = INC.methods.checkStatusVAT();
    INC.clientConfig.statusLoggedIn = INC.methods.checkStatusLoggedIn();
    if (INC.debug) console.log(INC.config.pageType);
    if (INC.debug) console.log(INC.clientConfig.statusVAT);
    INC.methods.clear();

    switch (INC.config.pageType) {
        case "pdp":
            if (INC.debug) console.log("on pdp page");
            setTimeout(function () {
                if((window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
                    var productId = INC.methods.getProductIdFromWebPage();
                    if (INC.debug) console.log(productId);

                    INC.methods.irbReq(productId, 5, "catalog_product_view");
                }else if(document.querySelector('.product-key-actions button').innerText.trim() != "Out of Stock" && (document.querySelector('#btn-basket') != null && document.querySelector('#btn-basket').innerText.toUpperCase().trim() != "OUT OF STOCK")){
                    var productId = INC.methods.getProductIdFromWebPage();
                    if (INC.debug) console.log(productId);

                    INC.methods.irbReq(productId, 5, "catalog_product_view");
                
                }
            }, 0);

            break;
        case "cartPage":
            if (INC.debug) console.log("on cart page");
            setTimeout(function () {
                //INC.methods.getSessionHash();
                var productIds = [];
                // if (document.querySelectorAll('#shopify-section-cart #basket-main .basket-item .basket-item-image a picture img')[0] != null) {
                //     Array.prototype.forEach.call(document.querySelectorAll('#shopify-section-cart #basket-main .basket-item .basket-item-image a picture img'), function (elProductCode) {
                //         var productId = elProductCode.getAttribute('src').split('products')[1].split('_')[1]
                //         productIds.push(productId);
                //     });
                //     if (INC.debug) console.log(productIds);
                //     INC.methods.irbReq(productIds, 10, "checkout_cart_index");
                // }
                if (MAKEBECOOL_BUNDLES.cart.items.length > 0) {
                    var cartLength = MAKEBECOOL_BUNDLES.cart.items.length;
                    for(var i = 0; i < cartLength; i++){
                        var productId = MAKEBECOOL_BUNDLES.cart.items[i].sku
                        productIds.push(productId);
                    }
                    if (INC.debug) console.log(productIds);
                    INC.methods.irbReq(productIds, 10, "checkout_cart_index");
                }
            }, 0);

            break;
        case "productList":
            if (INC.debug) console.log("on plp page");
            Array.prototype.forEach.call(document.querySelectorAll('.product-listing button'), function (elBtn) {
                $(elBtn).on('click', function (e) {
                    //debugger
                    // elBtn.addEventListener("click", function () {
                    var productWrapper = elBtn.parentNode.parentNode.parentNode.parentNode;
                    //var productId = productWrapper.querySelector('.ProductImage').href.split('/')[4];
                    // var productId = "10953";
                    var qty = 1
                    if (productWrapper.querySelector('.product-quantity-container input') != null) {
                        qty = productWrapper.querySelector('.product-quantity-container input').value
                    }
                    // if (INC.config.deviceType == "mobile") {
                    //     qty = elBtn.parentNode.parentNode.parentNode.parentNode.querySelector('.Quantity button[data-id="Quantity"] span').innerText;
                    // }
                    INC.dataStore.plpProductQty = qty;

                    INC.methods.clear();
                    // setTimeout(function () {
                    //     if (document.querySelector('#QuickViewDialog') != null) {
                    //         if (document.querySelector('button[id="add-to-cart"]') == null) {
                    //             // console.log("display: " + document.querySelector('.Modal__ModalContainer-sc-6twluf-0.djtiDp').style.display);
                    //             document.querySelector('#QuickViewDialog').style.visibility = "hidden";
                    //             // Array.prototype.forEach.call(document.querySelectorAll('button[data-test-id="cancel-button"]'), function (el) {
                    //             //     el.click();
                    //             // });
                    //         }
                    //     }
                    // }, 50);

                    //setTimeout(function () {
                        //     if (document.querySelector('button[id="add-to-cart"]') == null) {
                        // INC.methods.irbReq(productId, 30, "catalog_product_view");
                        //     }
                    //}, 500);
                });
            });
            break;
    }

    if (INC.debug) {
        // setInterval(function () {
        if (INC.debug) console.log(INC.dataStore.bundleCartProducts);
        // }, 5000);
    }
}

function generate_html_tag(element, className) {
    var generateEl = document.createElement(element);
    className ? generateEl.classList.add(className) : null;
    return generateEl;
}


INC.dataStore = {};
INC.dataStore.methods = function () {
    var incDataStore = INC.dataStore;
    // var dataStoreObj = INC.dataStore.dataStoreObj;
    var dataStoreObj = {};

    function buildDataStoreObj(bundleResponse) {
        INC.config.dupDataObjectProducts = []
        // var incDataStore = {};
        INC.dataStore.clientProductDealsCategory = "";
        var bundles = bundleResponse.Bundles;
        var productDealCount = 0;
        var bundleProductsArray = [];
        var dataStoreObj = {};
        // if (bundleResponse.ProductDeals != null) {
        //     bundleResponse.ProductDeals.forEach(function (productDealObj) {

        //         bundles.push({
        //             BundleId: bundles[0]["BundleId"],
        //             Products: [bundles[0].Products[0], productDealObj]
        //         });

        //         INC.dataStore.clientProductDealsCategory = productDealObj.CategoryId;
        //     });
        // }
        var dealc = 0
        if (bundleResponse.ProductDeals != null) {
            bundleResponse.ProductDeals.forEach(function (productDealObj) {
                // debugger
                if (window.location.pathname == "/cart" || window.location.pathname == "/cart/") {
                    // if(dealc == 0 && productDealObj.ProductId == bundles[0].Products[0], productDealObj){
                    bundleProductsArray.push(productDealObj.ProductId);
                    // productDealObj.bundledProductId = bundles[0].Products[0]["ProductId"]
                    bundles.unshift({
                        BundleId: 1234500679 + dealc,
                        Products: [ProductsDetail[0], productDealObj]
                    });
                    dealc++
                    // }

                }
            });
        }

        // if (INC.debug) console.log(bundles);
        // if (inc.pageType == "cartPage") {
        //     bundles = JSON.parse(window.sessionStorage.getItem("bundleJSON")).Bundles;
        // }


        // var bundleProductsArray = [];
        var pdpProductId = '';
        if (window.location.pathname == "/cart" || window.location.pathname == "/cart/") {
            var productIds_d = [];
           
            // if (document.querySelectorAll('#shopify-section-cart #basket-main .basket-item .basket-item-image a picture img')[0] != null) {
            //     Array.prototype.forEach.call(document.querySelectorAll('#shopify-section-cart #basket-main .basket-item .basket-item-image a picture img'), function (elProductCode) {
            //         var productId = elProductCode.getAttribute('src').split('products')[1].split('_')[1]
            //         productIds_d.push(productId);
            //     });
            // }
            if (MAKEBECOOL_BUNDLES.cart.items.length > 0) {
                var cartLength = MAKEBECOOL_BUNDLES.cart.items.length;
                for(var i = 0; i < cartLength; i++){
                    var productId = MAKEBECOOL_BUNDLES.cart.items[i].sku
                    productIds_d.push(productId);
                }
            }
        }
        var bundleproductarray={}
        if(bundleResponse.ProductsDetail != null){
            for (var ib = 0; ib < bundleResponse.ProductsDetail.length; ib++) {
                bundleproductarray[bundleResponse.ProductsDetail[ib].ProductId] = bundleResponse.ProductsDetail[ib]
            }
        }
        // for (var i = 0; i < 3; i++) {
        INC.config.prod_json_respons = bundleResponse.ProductsDetail
        for (var i = 0; i < bundles.length; i++) {
            if (INC.config.dupDataObjectProducts.indexOf(bundles[i].BundleId) == -1) {
                var irbBundleObj = bundles[i];
                var bundleObj = {};
                bundleObj.id = irbBundleObj["BundleId"];
                bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                bundleObj.productCount = irbBundleObj["ProductCount"];


                var irbProductsArray = irbBundleObj["ProductIds"];
                if (irbProductsArray.length) {
                    if (window.location.pathname == "/cart") {
                        if (productIds_d.indexOf(irbProductsArray[0]) >= 0) {
                            pdpProductId = irbProductsArray[0];
                            if (irbProductsArray[1].Attributes == null && INC.clientConfig.statusLoggedIn == true) {
                                bundleProductsArray.push(irbProductsArray[1]);
                            }

                            if (INC.clientConfig.statusLoggedIn == false) {
                                bundleProductsArray.push(irbProductsArray[1]);
                            }
                        } else if (productIds_d.indexOf(irbProductsArray[1]) >= 0) {
                            pdpProductId = irbProductsArray[1];
                            if (irbProductsArray[0].Attributes == null && INC.clientConfig.statusLoggedIn == true) {
                                bundleProductsArray.push(irbProductsArray[0]);
                            }

                            if (INC.clientConfig.statusLoggedIn == false) {
                                bundleProductsArray.push(irbProductsArray[0]);
                            }
                        }
                    } else {
                        pdpProductId = irbProductsArray[0];
                        bundleProductsArray.push(irbProductsArray[1]);
                    }
                }

                for (var j = 0; j < irbProductsArray.length; j++) {
                    var product = bundleproductarray[irbProductsArray[j]];
                    var pAttributes = product["Attributes"] || "";
                    if (pAttributes != "" && pAttributes != null) {
                        for (var h = 0; h < pAttributes.length; h++) {
                            if (pAttributes[h].frontEndLabel == "Shade") {
                                pAttributes[h].frontEndLabel = "Color"
                            }

                            if (pAttributes[h].attributeCode == "Size") {
                                pAttributes[h].attributeCode = "Size"
                            }
                            if (pAttributes[h].attributeCode == "color-size") {
                                pAttributes[h].attributeCode = "Size"
                            }
                            pAttributes[h].attributeCode = pAttributes[h].frontEndLabel;
                        }
                        pAttributes = attribute_listing(pAttributes)
                    }
                    var pAttObj = {};
                    for (t = 0; t < pAttributes.length; t++) {
                        pAttributes[t].attributeId = t
                        var attr_values = pAttributes[t].attributeValues;
                        for (v = 0; v < attr_values.length; v++) {
                            attr_values[v].optionId = t;
                        }
                    }
                    for (t = 0; t < pAttributes.length; t++) {
                        pAttributes[t].attributeId = t
                        var attr_values = pAttributes[t].attributeValues;
                        for (v = 0; v < attr_values.length; v++) {
                            attr_values[v].optionId = t;
                        }
                    }

                    if (pAttributes.length) {
                        for (var k = 0; k < pAttributes.length; k++) {
                            var pAttributesObj = pAttributes[k];
                            var pAttributesValues = pAttributesObj["attributeValues"];
                            for (var l = 0; l < pAttributesValues.length; l++) {
                                var childProduct = pAttributesValues[l];
                                if (childProduct["childProductId"] == null) {
                                    childProduct["childProductId"] = product["ProductId"];
                                    childProduct["childProductSku"] = product["ProductSku"];
                                    childProduct["childProductName"] = (pAttributesValues[l]["childProductName"] != null) ? pAttributesValues[l]["childProductName"] : product["ProductName"];
                                    childProduct["childProductImageUrl"] = product["ImageURL"];
                                    // childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                    childProduct["childProductOtherImageUrl"] = [];
                                    childProduct["childProductUrl"] = product["ProductUrl"];
                                    childProduct["childProductPrice"] = product["Price"];
                                    childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                                    childProduct["childProductDescription"] = product["Description"];
                                    childProduct["childInternalProductId"] = product["ProductId"]
                                }
                                childProduct["childProductName"] = (pAttributesValues[l]["childProductName"] != null) ? pAttributesValues[l]["childProductName"] : product["ProductName"];
                                childProduct["childProductImageUrl"] = product["ImageURL"];
                                // childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                childProduct["childProductOtherImageUrl"] = [];
                                childProduct["childProductUrl"] = product["ProductUrl"];
                                childProduct["childProductPrice"] = product["Price"];
                                childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                                childProduct["ProductType"] = product["ProductType"];
                                childProduct["childCategoryName"] = product["CategoryName"];
                                childProduct["childCategoryId"] = product["CategoryId"];
                                childProduct["childProductDescription"] = product["Description"];
                                childProduct["ShortDescription"] = product["ShortDescription"];
                                childProduct["Field3"] = product["Field5"];
                                childProduct["promoMsg"] = product["PromotionalMessage"];
                                // if (childProduct["promoMsg"] == null || childProduct["promoMsg"] == "") {
                                //     childProduct["promoMsg"] = product["Field6"];
                                // }
                                childProduct["ProductLevelDiscountMessage"] = product["ProductLevelDiscountMessage"];

                                var productObj = new INC.classes.ProductAttObj(childProduct);

                                productObj["bundledProductId"] = pdpProductId;
                                productObj.mainId = product["ProductId"];
                                productObj.bundleId = bundleObj.id;
                                productObj.sku = productObj.id;
                                productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                productObj.Field3 = product["Field5"]
                                productObj.reviewCount = product["Field5"]
                                productObj.ratingsCount = product["Field6"]
                                //productObj.Field3 = product["Field1"] + "|" + product["Field2"]
                                if (!dataStoreObj.hasOwnProperty(product['ProductId'])) {
                                    dataStoreObj[product['ProductId']] = {};
                                }
                                if (!dataStoreObj[product['ProductId']].hasOwnProperty(productObj['id'])) {
                                    dataStoreObj[product['ProductId']][productObj['id']] = {}
                                }
                                pAttObj = dataStoreObj[product['ProductId']][productObj['id']];


                                for (pAtt in productObj) {
                                    if (pAtt == "option") {
                                        if (!pAttObj.hasOwnProperty('option')) {
                                            pAttObj["option"] = {}
                                        }

                                        Object.keys(productObj[pAtt]).forEach(function (key) {
                                            pAttObj[pAtt][key] = productObj[pAtt][key];
                                        });
                                        // }
                                    } else {
                                        pAttObj[pAtt] = productObj[pAtt];
                                    }
                                }
                            }
                        }
                    }

                    if (pAttributes.length == 0) {
                        var productObj = new INC.classes.ProductObj(product);
                        productObj["bundleId"] = irbBundleObj["BundleId"];
                        productObj["bundledProductId"] = pdpProductId;
                        productObj.sku = productObj.sku;
                        productObj.Field3 = product["Field5"];
                        productObj.reviewCount = product["Field5"]
                        productObj.ratingsCount = product["Field6"]
                        if (!dataStoreObj.hasOwnProperty(productObj['mainId'])) {
                            dataStoreObj[productObj['mainId']] = {};
                        }

                        dataStoreObj[productObj['mainId']][productObj['id']] = {};
                        if (!!window.MSInputMethodContext && !!document.documentMode) {
                            dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                        } else {
                            dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                        }
                    }
                }
            }
        }

        incDataStore.dataStoreObj = dataStoreObj;
        incDataStore.bundleProductsArray = bundleProductsArray;
        incDataStore.pdpProductId = pdpProductId;
        if (INC.debug) console.log("DataStore");
        if (INC.debug) console.log(incDataStore)
        // if(INC.debug) console.log(incDataStore);
        incDataStore.bundleCartProducts = {};
    }

    function getFirstProductObjByMainId(findObj) {
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;

        if (productListObj != undefined && Object.keys(productListObj).length > 0) childProductObj = productListObj[findObj["mainId"]][Object.keys(productListObj[findObj["mainId"]])[0]];

        return childProductObj;
    }

    function getProductById(findObj) {
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        // if (INC.debug) console.log(findObj);
        if (findObj.hasOwnProperty("id")) {
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    // if (INC.debug) console.log(childProductId == findObj["id"]);
                    if (productListObj[mainProductId][childProductId]["id"] == findObj["id"]) {
                        childProductObj = productListObj[mainProductId][childProductId];
                    }
                }
            }
        }
        // if (INC.debug) console.log(childProductObj);
        return childProductObj;
    }

    function getProductBySKU(findObj) {
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;

        if (findObj.hasOwnProperty('sku')) {
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    if (productListObj[mainProductId][childProductId]["sku"] == findObj['sku']) {
                        childProductObj = productListObj[mainProductId][childProductId];
                    }
                }
            }
        }
        // if (INC.debug) console.log(childProductObj);
        return childProductObj;
    }

    function getUniqueCatergories() {
        // debugger;
        var catergoriesArray = [];

        var productListObj = INC.dataStore.dataStoreObj;
        var bundleProductsArray = INC.dataStore.bundleProductsArray;

        bundleProductsArray.forEach(function (productId) {

            for (childProductId in productListObj[productId]) {
                var indexOfCategoryId = catergoriesArray.indexOf(productListObj[productId][childProductId]["categoryId"]);

                if (indexOfCategoryId == -1 && productListObj[productId][childProductId]["categoryId"] != INC.dataStore.clientProductDealsCategory) {
                    catergoriesArray.push(productListObj[productId][childProductId]["categoryId"]);
                }
            }
        });


        return catergoriesArray;
    }

    function sorting_data(json_object, key_to_sort_by) {
        function sortByKey(a, b) {
            var x = a[key_to_sort_by];
            var y = b[key_to_sort_by];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        json_object.sort(sortByKey);
    }
    function sortByKey(array, key) {
        return array.sort(function (a, b) {
            var x = a[key],
                y = b[key];
            if (typeof x === 'string') {
                x = x.toLowerCase();
                y = y.toLowerCase();
                if (!isNaN(x) && !isNaN(y)) {
                    x = parseInt(x, 10);
                    y = parseInt(y, 10);
                }
            }
            return (x < y ? -1 : (x > y ? 1 : 0));
        });
    }
    function getProductColorsObj(findObj, type_of) {
        var productColorObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var productColorArrayObj = {}
        var productColorObjArray = [];
        var option_ids = ""
        var sizesArray = ["S", "M", "L", "XL", "XX", "XXL", "Small 3-4", "Medium 5-6", "Large 7-8"];

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {

                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["0"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = "";
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = "";
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["child_img"] = productListObj[mainProductId][childProductId]["option"]["0"]["child_img"];
                        }
                    }
                }
            }
        }

        Object.keys(productColorArrayObj).forEach(function (colorText) {
            var colorObj = {}
            colorObj["text"] = colorText;
            // colorObj["imgSrc"] = productColorArrayObj[colorText];
            colorObj["colorCode"] = productColorArrayObj[colorText]["colorCode"];
            colorObj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            colorObj["titleText"] = productColorArrayObj[colorText]["titleText"];
            colorObj["code"] = productColorArrayObj[colorText]["code"];
            colorObj["child_img"] = productColorArrayObj[colorText]["child_img"];
            productColorObjArray.push(colorObj);
        });
        if (type_of == "Size") {
            productColorObj["sizeArray"] = sortByKey(productColorObjArray, 'text');
        } else if (type_of == "zero") {
            productColorObj["att0Array"] = sortByKey(productColorObjArray, 'text');
        } else if (type_of == "third") {
            productColorObj["att3Array"] = sortByKey(productColorObjArray, 'text');
        } else {
            productColorObj["colorArray"] = sortByKey(productColorObjArray, 'text');
        }
        productColorObj["colorArray"] = productColorObjArray.sort();
        productColorObj["colorArray"] = productColorObjArray.sort(function(a, b) {
            return sizesArray.indexOf(a["text"]) - sizesArray.indexOf(b["text"])
        });

        return productColorObj;

    }

    function getProductSizesObj(findObj, type_of) {
        var productSizeObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var productSizesArrayObj = {};
        var productSizesObjArray = [];
        var sizesArray = ["S", "M", "L", "XL", "XX", "XXL"];
        var attr_code = "";

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                        if (type_of != undefined) {
                            var attr_block = null;
                            if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false) {
                                attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                            } else {
                                attr_block = type_of.parentNode.parentNode.parentNode
                            }
                            var opt_text = attr_block.getAttribute('data-color');
                            var opt_size_text = attr_block.getAttribute('data-size');
                            var opt_zero_text = attr_block.getAttribute('data-zero');
                            // var opt_color_text=attr_block.getAttribute('data-color');
                            if (opt_zero_text == undefined) {
                                var opt_zero_text = ""
                            }
                            if (opt_size_text == undefined) {
                                var opt_size_text = ""
                            }
                            if (opt_text == undefined) {
                                var opt_text = ""
                            }
                            if (opt_color_text == undefined) {
                                var opt_color_text = ""
                            }


                            if (opt_text != "" && opt_zero_text != "") {
                                if (productListObj[mainProductId][childProductId].option[0].text == opt_text && productListObj[mainProductId][childProductId].option[1].text == opt_zero_text) {
                                    if (productListObj[mainProductId][childProductId]["option"] != null &&
                                        productListObj[mainProductId][childProductId]["option"] != undefined &&
                                        productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                                        productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                        attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                    }
                                }
                            } else if (productListObj[mainProductId][childProductId]["option"] != null &&
                                productListObj[mainProductId][childProductId]["option"] != undefined &&
                                productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                                productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                                productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                            }
                        } else if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                            productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                            attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                        }
                    }

                }
            }
        }

        Object.keys(productSizesArrayObj).forEach(function (sizeText) {
            var sizeObj = {};
            sizeObj["text"] = sizeText;
            sizeObj["code"] = attr_code;
            productSizesObjArray.push(sizeObj);
            // productSizesObjArray.push(code);
        });
        productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) { return a["text"].split("-")[0].trim() - b["text"].split("-")[0].trim() });
        // productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) { return a["text"].split(" ")[1].trim() - b["text"].split(" ")[1].trim() });
        productSizeObj["sizeArray"] = productSizesObjArray.sort();
        productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) { return sizesArray.indexOf(a["text"]) - sizesArray.indexOf(b["text"]) });

        return productSizeObj;
    }
    function getProductopt0Obj(findObj, type_of) {
        var product0Obj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var product0ArrayObj = {}
        var product0ObjArray = [];
        var sizesArray0 = ["S", "M", "L", "XL", "XX", "XXL"];
        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {

                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["1"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {
                            if (type_of != undefined) {
                                var attr_block = null;
                                if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false) {
                                    attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                } else {
                                    attr_block = type_of.parentNode.parentNode.parentNode
                                }
                                var opt_text = attr_block.getAttribute('data-color');
                                var opt_size_text = attr_block.getAttribute('data-size');
                                var opt_zero_text = attr_block.getAttribute('data-zero');
                                // var opt_color_text=attr_block.getAttribute('data-color');
                                if (opt_zero_text == undefined) {
                                    var opt_zero_text = ""
                                }
                                if (opt_size_text == undefined) {
                                    var opt_size_text = ""
                                }
                                if (opt_text == undefined) {
                                    var opt_text = ""
                                }
                                if (opt_color_text == undefined) {
                                    var opt_color_text = ""
                                }
                                if (opt_text != "") {
                                    if(productListObj[mainProductId][childProductId].option[0] != null || productListObj[mainProductId][childProductId].option[0] != undefined) {
                                        if (productListObj[mainProductId][childProductId].option[0].text == opt_text) {
                                            if (productListObj[mainProductId][childProductId]["option"] != null &&
                                                productListObj[mainProductId][childProductId]["option"] != undefined &&
                                                productListObj[mainProductId][childProductId]["option"]["1"] != null &&
                                                productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];

                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                            }
                                        }
                                    }
                                } else if (productListObj[mainProductId][childProductId]["option"] != null &&
                                    productListObj[mainProductId][childProductId]["option"] != undefined &&
                                    productListObj[mainProductId][childProductId]["option"]["1"] != null &&
                                    productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];

                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                }
                            } else {
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];

                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                            }
                        }

                        // colorObj["text"] = productListObj[mainProductId][childProductId]["option"]["1"]["text"];
                        // colorObj["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                        // product0ObjArray.push(colorObj)
                    }
                }
            }
        }

        Object.keys(product0ArrayObj).forEach(function (colorText) {
            var attr0Obj = {}
            attr0Obj["text"] = colorText;
            attr0Obj["imgSrc"] = product0ArrayObj[colorText]["imgSrc"];
            attr0Obj["titleText"] = product0ArrayObj[colorText]["titleText"];
            attr0Obj["code"] = product0ArrayObj[colorText]["code"];
            product0ObjArray.push(attr0Obj);
        });

        product0Obj["att0Array"] = sortByKey(product0ObjArray, 'text');

        return product0Obj;
    }
    function getProductopt3Obj(findObj, type_of) {
        var product3Obj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var productColorArrayObj = {}
        var product3ObjArray = [];

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {

                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["3"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["3"] != undefined) {
                            if (type_of != undefined) {
                                var attr_block = null;
                                if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false) {
                                    attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                } else {
                                    attr_block = type_of.parentNode.parentNode.parentNode
                                }
                                var opt_text = attr_block.getAttribute('data-zero');
                                var opt_size_text = attr_block.getAttribute('data-size');
                                var opt_color_text = attr_block.getAttribute('data-color');

                                if (opt_size_text == undefined) {
                                    var opt_size_text = ""
                                }
                                if (opt_color_text == undefined) {
                                    var opt_color_text = ""
                                }
                                // if(type_of.getAttribute('data-option') == "2"){
                                //     var opt_text=type_of.parentNode.parentNode.parentNode.getAttribute('data-zero');
                                //     var opt_size_text=type_of.parentNode.parentNode.parentNode.getAttribute('data-size');
                                //     var opt_color_text=type_of.parentNode.parentNode.parentNode.getAttribute('data-color');
                                // }else{
                                //     var opt_text=type_of.textContent;
                                //     var opt_size_text=""
                                //     var opt_color_text=""
                                // }
                                if (opt_text != "" && opt_size_text != "" && opt_color_text != "") {
                                    if (productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined && productListObj[mainProductId][childProductId].option[0] != undefined) {
                                        if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text && productListObj[mainProductId][childProductId].option[0].text == opt_color_text) {
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];

                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                        }
                                    }
                                } else {
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];

                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                }
                            } else {
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];

                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                            }


                        }

                        // colorObj["text"] = productListObj[mainProductId][childProductId]["option"]["1"]["text"];
                        // colorObj["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                        // product3ObjArray.push(colorObj)
                    }
                }
            }
        }

        Object.keys(productColorArrayObj).forEach(function (colorText) {
            var attr3Obj = {}
            attr3Obj["text"] = colorText;
            attr3Obj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            attr3Obj["titleText"] = productColorArrayObj[colorText]["titleText"];
            attr3Obj["code"] = productColorArrayObj[colorText]["code"];
            product3ObjArray.push(attr3Obj);
        });

        product3Obj["att3Array"] = product3ObjArray;

        return product3Obj;
    }
    function getProductopt4Obj(findObj) {
        var product4Obj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var productColorArrayObj = {}
        var product4ObjArray = [];

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["4"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["4"] != undefined) {

                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]] = {};
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["colorCode"] = "";
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["imgSrc"] = "";
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["4"]["titleText"];

                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["4"]["imgSrc"];
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["4"]["code"];


                        }
                    }
                }
            }
        }

        Object.keys(productColorArrayObj).forEach(function (colorText) {
            var attr4Obj = {}
            attr4Obj["text"] = colorText;
            attr4Obj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            attr4Obj["titleText"] = productColorArrayObj[colorText]["titleText"];
            attr4Obj["code"] = productColorArrayObj[colorText]["code"];
            product4ObjArray.push(attr4Obj);
        });

        product4Obj["att4Array"] = product4ObjArray;
        return product4Obj;
    }

    function getProductByAtt(findObj) {

        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        if (findObj.mainId != undefined && productListObj != undefined) {
            var mainProductListObj = productListObj[findObj.mainId];
        } else {
            var mainProductListObj = ""
        }
        for (childProductId in mainProductListObj) {

            if (findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && findObj.thirdText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined && mainProductListObj[childProductId]["option"]["3"] != undefined) {
                if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text && findObj.thirdText == mainProductListObj[childProductId]["option"]["3"].text) {
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if (findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined) {
                if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text) {
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if (findObj.zeroText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"] != undefined && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text) {
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"] != undefined &&
                mainProductListObj[childProductId]["option"]["0"] != null &&
                mainProductListObj[childProductId]["option"]["0"] != undefined &&
                (findObj.zeroText == mainProductListObj[childProductId]["option"]["0"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];

            } else if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"] != undefined &&
                mainProductListObj[childProductId]["option"]["0"] != null &&
                mainProductListObj[childProductId]["option"]["0"] != undefined &&
                (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];

            } else if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"] != undefined &&
                mainProductListObj[childProductId]["option"]["1"] != null &&
                mainProductListObj[childProductId]["option"]["1"] != undefined &&
                (findObj.sizeText == mainProductListObj[childProductId]["option"]["1"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];

            } else if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"]["1"] != null &&
                (findObj.sizeText == mainProductListObj[childProductId]["option"]["1"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];

            } else if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"]["1"] != null &&
                (findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];

            }
            // else if(findObj.zeroText != "" && findObj.colorText == "" && mainProductListObj[childProductId]["option"]["1"] != undefined){
            //     if(findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text){
            //         childProductObj = mainProductListObj[childProductId];
            //     }
            // } 
        }

        // if (INC.debug) console.log(childProductObj);
        return childProductObj;
    }

    return {
        buildDataStoreObj: buildDataStoreObj,
        getFirstProductObjByMainId: getFirstProductObjByMainId,
        getProductById: getProductById,
        getProductBySKU: getProductBySKU,
        getUniqueCatergories: getUniqueCatergories,
        getProductColorsObj: getProductColorsObj,
        getProductSizesObj: getProductSizesObj,
        getProductopt3Obj: getProductopt3Obj,
        getProductopt4Obj: getProductopt4Obj,
        getProductopt0Obj: getProductopt0Obj,
        getProductByAtt: getProductByAtt
    }
}

INC.bundleVars = {
    frequentlyBoughtTogether: "Frequently bought together",
    frequentlyBoughtWith: "Frequently bought with",
    thisItem: "This item",
    edit: "Edit",
    update: "Update",
    add: "Add",
    added: "Added",
    selectOptions: "Select options",
    totalKitPrice: "Total kit price",
    addItemsToBag: "Add products to basket",
    addItemToBag: "Add 1 product to basket",
    addToBasket: "Add to basket",
    justAdded: "Just added",
    item: "Item",
    items: "Item(S)",
    otherCustomers: "Other customers also bought",
    viewDetails: "View details",
    continueShopping: "Continue shopping",
    viewBag: "View basket",
    pleaseSelectShades: "Select option",
    pdpTitle: "Frequently Bought Together",
    shades: "Shades",
    selectShades: "Select shades",
    youMayAlsoLike: "You may also like",
    readMore: "Read more",
    showMoreProducts: "Show more products",
    showLessProducts: "Show less products"
}

INC.classes = {};
INC.classes.ProductObj = function (product) {
    this.bundleId = "";
    this.id = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.sku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
    this.skuChild = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
    this.name = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["ProductName"] : product["Field4"]) : "";
    this.url = ((product != null) && (product != undefined)) ? product["ProductUrl"] : "";
    this.imageURL = ((product != null) && (product != undefined)) ? product["ImageURL"] : "";
    this.regularPrice = ((product != null) && (product != undefined)) ? product["Price"] : "";
    this.activePrice = ((product != null) && (product != undefined)) ? ((product["SpecialPrice"] != null) ? product["SpecialPrice"] : product["Price"]) : "";
    this.activePriceMsg = ((product != null) && (product != undefined)) ? ((product["Field3"] != "") ? ((INC.config.language == "en") ? product["Field3"] : product["Field6"]) : "") : "";

    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
    // this.otherImageList = ((product != null) && (product != undefined)) ? product["OtherImageList"] : [];
    this.otherImageList = [];
    this.size = ((product != null) && (product != undefined)) ? ((product["Size"] != null) ? product["Size"] : "") : "";
    this.option = {};
    this.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"];
    this.ProductType = product["ProductType"];
    this.internalId = ((product != null) && (product != undefined)) ? product["InternalId"] : "";
    this.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.categoryName = ((product != null) && (product != undefined)) ? product["CategoryName"] : "";
    this.categoryId = ((product != null) && (product != undefined)) ? product["CategoryId"] : "";
    this.description = ((product != null) && (product != undefined)) ? product["Description"] : "";
    this.shortDescription = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["ShortDescription"] : product["Field5"]) : "";
    this.ratingsCount = ((product != null) && (product != undefined)) ? product["Field6"] : "";
    this.reviewCount = ((product != null) && (product != undefined)) ? product["Field5"] : "";
    this.promoMsg = ((product != null) && (product != undefined)) ? product["PromotionalMessage"] : "";
    // if (this.promoMsg == null || this.promoMsg == "") {
    //     this.promoMsg = ((product != null) && (product != undefined)) ? product["Field6"] : "";
    // }
    this.worthPrice = ((product != null) && (product != undefined)) ? product["Field3"] : "";
}
INC.classes.ProductAttObj = function (product) {
    this.bundleId = "";
    this.id = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
    this.sku = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
    this.skuChild = ((product != null) && (product != undefined)) ? product["childProductSku"] : "";
    this.name = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["childProductName"] : product["Field4"]) : "";
    this.url = ((product != null) && (product != undefined)) ? product["childProductUrl"] : "";
    this.imageURL = ((product != null) && (product != undefined)) ? product["childProductImageUrl"] : "";
    this.regularPrice = ((product != null) && (product != undefined)) ? product["childProductPrice"] : "";
    this.activePrice = ((product != null) && (product != undefined)) ? ((product["childProductSpecialPrice"] != null) ? product["childProductSpecialPrice"] : product["childProductPrice"]) : "";
    this.activePriceMsg = ((product != null) && (product != undefined)) ? ((product["Field3"] != "") ? ((INC.config.language == "en") ? product["Field3"] : product["Field6"]) : "") : "";

    this.ProductType = product["ProductType"];
    this.promoMsg = product["promoMsg"];
    this.ratingsCount = product["Field6"]
    this.reviewCount = product["Field5"]
    this.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"];
    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
    // this.otherImageList = ((product != null) && (product != undefined)) ? product["childProductOtherImageUrl"] : [];
    this.otherImageList = [];
    this.size = "";
    this.option = {};
    if (((product != null) && (product != undefined))) {
        this.option[product["optionId"]] = {};
        this.option[product["optionId"]].text = product["optionText"];
        this.option[product["optionId"]].ImgURLC = product["childProductImageUrl"];
        this.option[product["optionId"]].titleText = (product["childProductName"] != null) ? product["childProductName"] : "";
        this.option[product["optionId"]].imgSrc = (product["optionImageUrl"] != null) ? product["optionImageUrl"] : "";
        this.option[product["optionId"]].colorCode = (product["colorCode"] != null) ? product["colorCode"] : "";
    }
    this.internalId = ((product != null) && (product != undefined)) ? product["childInternalProductId"] : "";
    this.categoryName = ((product != null) && (product != undefined)) ? product["childCategoryName"] : "";
    this.categoryId = ((product != null) && (product != undefined)) ? product["childCategoryId"] : "";
    this.description = ((product != null) && (product != undefined)) ? product["childProductDescription"] : "";

    this.worthPrice = ((product != null) && (product != undefined)) ? product["Field3"] : "";
    this.promoMsg = ((product != null) && (product != undefined)) ? product["promoMsg"] : "";
    // if (this.promoMsg == "") {
    //     this.promoMsg = ((product != null) && (product != undefined)) ? product["Field6"] : "";
    // }
    this.ProductLevelDiscountMessage = ((product != null) && (product != undefined)) ? product["ProductLevelDiscountMessage"] : "";
}
INC.classes.FindObj = function (findObj) {
    this.id = (findObj != null && findObj != undefined) ? findObj.id : "";
    this.sku = (findObj != null && findObj != undefined) ? findObj.sku : "";
    this.mainId = (findObj != null && findObj != undefined) ? findObj.mainId : "";
    this.colorText = (findObj != null && findObj != undefined) ? findObj.colorText : "";
    this.sizeText = (findObj != null && findObj != undefined) ? findObj.sizeText : "";
}

INC.classes.NWConfig = function (nwConfigObj) {
    this.url = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.url : "";
    this.method = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.method : "GET";
    this.params = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.params : "";
}

INC.uiConfig = {
    pdp: {
        className: {
            pdpModalBlock: prefix + "pdp" + postfix,
            pdpModalTitleBlock: prefix + "pdp_title" + postfix,
            pdpModalTitleTextBlock: prefix + "pdp_title_text" + postfix,
            pdpModalTitleText: prefix + "pdp_title_text",
            pdpModalTitleImgBlock: prefix + "pdp_title_img" + postfix,
            pdpModalTitleImg: prefix + "pdp_title_img",

            pdpModalBundleBlock: prefix + "pdp_bundle" + postfix,
            pdpModalMainProductBlock: prefix + "pdp_product-main" + postfix,
            pdpModalAddIconBlock: prefix + "pdp_icon-add" + postfix,
            pdpModalBundleProductBlock: prefix + "pdp_bundle_product" + postfix,
            pdpModalBundleCartBlock: prefix + "pdp_bundle_cart" + postfix,
            pdpModalBundleCartOverlay: prefix + "pdp_bundle_cart_overlay" + postfix,

            pdpAddIconImgBlock: prefix + "pdp_icon-add_img" + postfix,
            pdpAddIconImg: prefix + "pdp_icon-add_img",
            pdpBundleProductLeftBtnBlock: prefix + "pdp_bundle_product_left-btn" + postfix,
            pdpBundleProductLeftBtnImgBlock: prefix + "pdp_bundle_product_left-btn_img" + postfix,
            pdpBundleProductLeftBtnImg: prefix + "pdp_bundle_product_left-btn_img",
            pdpBundleProductRightBtnBlock: prefix + "pdp_bundle_product_right-btn" + postfix,
            pdpBundleProductRightBtnImgBlock: prefix + "pdp_bundle_product_right-btn_img" + postfix,
            pdpBundleProductRightBtnImg: prefix + "pdp_bundle_product_right-btn_img",

            pdpBundleProductListBlock: prefix + "pdp_bundle_product_list" + postfix,
            pdpBundleProductListMainBlock: prefix + "pdp_bundle_product_list_main" + postfix,
            pdpBundleProductListMainLeftBlock: prefix + "pdp_bundle_product_list_main_left" + postfix,
            pdpBundleProductListMainLeftBtnBlock: prefix + "pdp_bundle_product_list_main_left_btn" + postfix,
            pdpBundleProductListMainLeftBtnImgBlock: prefix + "pdp_bundle_product_list_main_left_btn_img" + postfix,
            pdpBundleProductListMainLeftBtnImg: prefix + "pdp_bundle_product_list_main_left_btn_img",
            pdpBundleProductListMainLeftBtnTextBlock: prefix + "pdp_bundle_product_list_main_left_btn_text" + postfix,
            pdpBundleProductListMainLeftBtnText: prefix + "pdp_bundle_product_list_main_left_btn_text",
            pdpBundleProductListMainListBlock: prefix + "pdp_bundle_product_list_main_list" + postfix,
            pdpBundleProductListMainRightBlock: prefix + "pdp_bundle_product_list_main_right" + postfix,
            pdpBundleProductListMainRightBtnBlock: prefix + "pdp_bundle_product_list_main_right_btn" + postfix,
            pdpBundleProductListMainRightBtnImgBlock: prefix + "pdp_bundle_product_list_main_right_btn_img" + postfix,
            pdpBundleProductListMainRightBtnImg: prefix + "pdp_bundle_product_list_main_right_btn_img",
            pdpBundleProductListMainRightBtnTextBlock: prefix + "pdp_bundle_product_list_main_right_btn_text" + postfix,
            pdpBundleProductListMainRightBtnText: prefix + "pdp_bundle_product_list_main_right_btn_text",
            pdpBundleProductListLeftBlock: prefix + "pdp_bundle_product_list_left" + postfix,
            pdpBundleProductListLeftBtnBlock: prefix + "pdp_bundle_product_list_left_btn" + postfix,
            pdpBundleProductListLeftBtnImgBlock: prefix + "pdp_bundle_product_list_left_btn_img" + postfix,
            pdpBundleProductListLeftBtnImg: prefix + "pdp_bundle_product_list_left_btn_img",
            pdpBundleProductListRightBlock: prefix + "pdp_bundle_product_list_right" + postfix,
            pdpBundleProductListRightBtnBlock: prefix + "pdp_bundle_product_list_right_btn" + postfix,
            pdpBundleProductListRightBtnImgBlock: prefix + "pdp_bundle_product_list_right_btn_img" + postfix,
            pdpBundleProductListRightBtnImg: prefix + "pdp_bundle_product_list_right_btn_img",
            pdpBundleProductListItemsBlockShowMoreLess: prefix + "pdp_bundle_product_list_items_show_more_less" + postfix,
            pdpBundleProductListItemsBlockShowMoreLessText: prefix + "pdp_bundle_product_list_items_show_more_less_text",
            pdpBundleProductListItemsBlock: prefix + "pdp_bundle_product_list_items" + postfix,
            pdpBundleProductListItemBlock: prefix + "pdp_bundle_product_list_item" + postfix,
            pdpBundleProductListItemImgBlock: prefix + "pdp_bundle_product_list_item_img" + postfix,
            pdpBundleProductListItemImg: prefix + "pdp_bundle_product_list_item_img",
            pdpBundleProductListItemTitleBlock: prefix + "pdp_bundle_product_list_item_title" + postfix,
            pdpBundleProductListItemTitleTextBlock: prefix + "pdp_bundle_product_list_item_title_text" + postfix,
            pdpBundleProductListItemTitleText: prefix + "pdp_bundle_product_list_item_title_text",
            pdpBundleProductListItemPriceBlock: prefix + "pdp_bundle_product_list_item_price" + postfix,
            pdpBundleProductListItemPriceActiveBlock: prefix + "pdp_bundle_product_list_item_price_active" + postfix,
            pdpBundleProductListItemPriceActiveTextBlock: prefix + "pdp_bundle_product_list_item_price_active_text" + postfix,
            pdpBundleProductListItemPriceActiveText: prefix + "pdp_bundle_product_list_item_price_active_text",
            pdpBundleProductListItemAddedBlock: prefix + "pdp_bundle_product_list_item_added" + postfix,
            pdpBundleProductListItemAddedBtnBlock: prefix + "pdp_bundle_product_list_item_added_btn" + postfix,
            pdpBundleProductListItemAddedBtnImgBlock: prefix + "pdp_bundle_product_list_item_added_btn_img" + postfix,
            pdpBundleProductListItemAddedBtnImg: prefix + "pdp_bundle_product_list_item_added_btn_img",
            pdpBundleProductListItemAddedBtnTextBlock: prefix + "pdp_bundle_product_list_item_added_btn_text" + postfix,
            pdpBundleProductListItemAddedBtnText: prefix + "pdp_bundle_product_list_item_added_btn_text",

            pdpBundleCartTitleBlock: prefix + "pdp_bundle_cart_title" + postfix,
            pdpBundleCartTitleTextBlock: prefix + "pdp_bundle_cart_title_text" + postfix,
            pdpBundleCartTitleText: prefix + "pdp_bundle_cart_title_text",
            pdpBundleCartTitleImgBlock: prefix + "pdp_bundle_cart_title_img" + postfix,
            pdpBundleCartTitleImg: prefix + "pdp_bundle_cart_title_img",
            pdpBundleCartPriceBlock: prefix + "pdp_bundle-cart_price" + postfix,
            pdpBundleCartPriceMainBlock: prefix + "pdp_bundle-cart_price_main",
            pdpBundleCartPriceMainTitleBlock: prefix + "pdp_bundle-cart_price_main_title" + postfix,
            pdpBundleCartPriceMainTitleTextBlock: prefix + "pdp_bundle-cart_price_main_title_text" + postfix,
            pdpBundleCartPriceMainTitleText: prefix + "pdp_bundle-cart_price_main_title_text",
            pdpBundleCartPriceMainFigureBlock: prefix + "pdp_bundle-cart_price_main_figure" + postfix,
            pdpBundleCartPriceMainFigureTextBlock: prefix + "pdp_bundle-cart_price_main_figure_text" + postfix,
            pdpBundleCartPriceMainFigureText: prefix + "pdp_bundle-cart_price_main_figure_text",
            pdpBundleCartPriceAddonBlock: prefix + "pdp_bundle-cart_price_addon" + postfix,
            pdpBundleCartPriceAddonTitleBlock: prefix + "pdp_bundle-cart_price_addon_title" + postfix,
            pdpBundleCartPriceAddonTitleTextBlock: prefix + "pdp_bundle-cart_price_addon_title_text" + postfix,
            pdpBundleCartPriceAddonTitleText: prefix + "pdp_bundle-cart_price_addon_title_text",
            pdpBundleCartPriceAddonFigureBlock: prefix + "pdp_bundle-cart_price_addon_figure" + postfix,
            pdpBundleCartPriceAddonFigureTextBlock: prefix + "pdp_bundle-cart_price_addon_figure_text" + postfix,
            pdpBundleCartPriceAddonFigureText: prefix + "pdp_bundle-cart_price_addon_figure_text",
            pdpBundleCartAddedBlock: prefix + "pdp_bundle_cart_added" + postfix,
            pdpBundleCartAddedProductBlock: prefix + "pdp_bundle_cart_added_product" + postfix,
            pdpBundleCartAddedProductImgBlock: prefix + "pdp_bundle_cart_added_product_img" + postfix,
            pdpBundleCartAddedProductImg: prefix + "pdp_bundle_cart_added_product_img",
            pdpBundleCartAddedProductTitleBlock: prefix + "pdp_bundle_cart_added_product_title" + postfix,
            pdpBundleCartAddedProductTitleTextBlock: prefix + "pdp_bundle_cart_added_product_title_text" + postfix,
            pdpBundleCartAddedProductTitleText: prefix + "pdp_bundle_cart_added_product_title_text",
            pdpBundleCartAddedProductPriceBlock: prefix + "pdp_bundle_cart_added_product_price" + postfix,
            pdpBundleCartAddedProductPriceTextBlock: prefix + "pdp_bundle_cart_added_product_price_text" + postfix,
            pdpBundleCartAddedProductPriceText: prefix + "pdp_bundle_cart_added_product_price_text",
            pdpBundleCartAddedProductAttBlock: prefix + "pdp_bundle_cart_added_product_att" + postfix,
            pdpBundleCartAddedProductAttColorBlock: prefix + "pdp_bundle_cart_added_product_att_color" + postfix,
            pdpBundleCartAddedProductAttColorTextBlock: prefix + "pdp_bundle_cart_added_product_att_color_text" + postfix,
            pdpBundleCartAddedProductAttColorText: prefix + "pdp_bundle_cart_added_product_att_color_text",
            pdpBundleCartAddedProductAttSizeBlock: prefix + "pdp_bundle_cart_added_product_att_size" + postfix,
            pdpBundleCartAddedProductAttSizeTextBlock: prefix + "pdp_bundle_cart_added_product_att_size_text",
            pdpBundleCartAddedProductAttSizeText: prefix + "pdp_bundle_cart_added_product_att_size_text",
            pdpBundleCartAddedProductQtyBlock: prefix + "pdp_bundle_cart_added_product_qty" + postfix,
            pdpBundleCartAddedProductQtyTextBlock: prefix + "pdp_bundle_cart_added_product_qty_text" + postfix,
            pdpBundleCartAddedProductQtyText: prefix + "pdp_bundle_cart_addeed_product_qty_text",
            pdpBundleCartAddedProductEditBlock: prefix + "pdp_bundle_cart_added_product_edit" + postfix,
            pdpBundleCartAddedProductEditTextBlock: prefix + "pdp_bundle_cart_added_product_edit_text" + postfix,
            pdpBundleCartAddedProductEditText: prefix + "pdp_bundle_cart_added_product_edit_text",
            pdpBundleCartAddedProductEditImgBlock: prefix + "pdp_bundle_cart_added_product_edit_img" + postfix,
            pdpBundleCartAddedProductEditImg: prefix + "pdp_bundle_cart_added_product_edit_img",
            pdpBundleCartSummaryBlock: prefix + "pdp_bundle_cart_summary" + postfix,
            pdpBundleCartSummaryTitleBlock: prefix + "pdp_bundle_cart_summary_title" + postfix,
            pdpBundleCartSummaryTitleTextBlock: prefix + "pdp_bundle_cart_summary_title_text" + postfix,
            pdpBundleCartSummaryTitleText: prefix + "pdp_bundle_cart_summary_title_text",
            pdpBundleCartSummaryPriceBlock: prefix + "pdp_bundle_cart_summary_price" + postfix,
            pdpBundleCartSummaryPriceRegularBlock: prefix + "pdp_bundle_cart_summary_price_regular" + postfix,
            pdpBundleCartSummaryPriceRegularTextBlock: prefix + "pdp_bundle_cart_summary_price_regular_text" + postfix,
            pdpBundleCartSummaryPriceRegularText: prefix + "pdp_bundle_cart_summary_price_regular_text",
            pdpBundleCartSummaryPriceActiveBlock: prefix + "pdp_bundle_cart_summary_price_active" + postfix,
            pdpBundleCartSummaryPriceActiveTextBlock: prefix + "pdp_bundle_cart_summary_price_active_text" + postfix,
            pdpBundleCartSummaryPriceActiveText: prefix + "pdp_bundle_cart_summary_price_active_text",
            pdpBundleCartSummaryViewBlock: prefix + "pdp_bundle_cart_summary_view" + postfix,
            pdpBundleCartSummaryViewBtnBlock: prefix + "pdp_bundle_cart_summary_view_btn" + postfix,
            pdpBundleCartSummaryViewBtnImgBlock: prefix + "pdp_bundle_cart_summary_view_btn_img" + postfix,
            pdpBundleCartSummaryViewBtnImg: prefix + "pdp_bundle_cart_summary_view_btn_img",
            pdpBundleCartSummaryViewBtnTextBlock: prefix + "pdp_bundle_cart_summary_view_btn_text" + postfix,
            pdpBundleCartSummaryViewBtnText: prefix + "pdp_bundle_cart_summary_view_btn_text",
            pdpBundleCartSummaryViewBtnCountBlock: prefix + "pdp_bundle_cart_summary_view_btn_count" + postfix,
            pdpBundleCartSummaryViewBtnCount: prefix + "pdp_bundle_cart_summary_view_btn_count",
            pdpBundleCartSummaryAddBlock: prefix + "pdp_bundle_cart_summary_add" + postfix,
            pdpBundleCartSummaryAddBtnBlock: prefix + "pdp_bundle_cart_summary_add_btn" + postfix,
            pdpBundleCartSummaryAddBtnTextBlock: prefix + "pdp_bundle_cart_summary_add_btn_text" + postfix,
            pdpBundleCartSummaryAddBtnText: prefix + "pdp_bundle_cart_summary_add_btn_text",
            pdpBundleCartSummaryAddBtnImgBlock: prefix + "pdp_bundle_cart_summary_add_btn_img" + postfix,
            pdpBundleCartSummaryAddBtnImg: prefix + "pdp_bundle_cart_summary_add_btn_img",

            productModuleBlock: prefix + "product_module" + postfix,
            productModalBlock: prefix + "product_modal" + postfix,
            productShowcaseBlock: prefix + "product_showcase" + postfix,
            productBlock: prefix + "product" + postfix,
            productHeaderBlock: prefix + "product_header" + postfix,
            productHeaderTitleBlock: prefix + "product_header_title" + postfix,
            productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
            productHeaderTitleText: prefix + "product_header_title_text",
            productHeaderImgBlock: prefix + "product_header_img" + postfix,
            productHeaderImg: prefix + "product_header_img",
            productPromoBlock: prefix + "product_promo" + postfix,
            productPromoMsgBlock: prefix + "product_promo_msg" + postfix,
            productPromoMsgText: prefix + "product_promo_msg_text",
            productImgBlock: prefix + "product_img" + postfix,
            productImgMainBlock: prefix + "product_img_main" + postfix,
            productImgMainImgBlock: prefix + "product_img_main_img" + postfix,
            productImgMainImg: prefix + "product_img_main_img",
            productImgMainZoomBlock: prefix + "product_img_main_zoom" + postfix,
            productImgMainZoomBtnBlock: prefix + "product_img_main_zoom_btn" + postfix,
            productImgMainZoomBtnImgBlock: prefix + "product_img_main_zoom_btn_img" + postfix,
            productImgMainZoomBtnImg: prefix + "product_img_main_zoom_btn_img",
            productImgMainZoomBtnTextBlock: prefix + "product_img_main_zoom_btn_text" + postfix,
            productImgMainZoomBtnText: prefix + "product_img_main_zoom_btn_text",
            productImgGalleryBlock: prefix + "product_img_gallery" + postfix,
            productImgGalleryHeaderBlock: prefix + "producy_img_gallery_header" + postfix,
            productImgGalleryHeaderTitleBlock: prefix + "product_img_gallery_header_title" + postfix,
            productImgGalleryHeaderTitleImgBlock: prefix + "product_img_gallery_header_title_img" + postfix,
            productImgGalleryHeaderTitleImg: prefix + "product_img_gallery_header_title_img",
            productImgGalleryHeaderTitleTextBlock: prefix + "product_img_gallery_header_title_text" + postfix,
            productImgGalleryHeaderTitleText: prefix + "product_img_gallery_header_title_text",
            productImgGalleryHeaderToggleBlock: prefix + "product_img_gallery_header_toggle" + postfix,
            productImgGalleryHeaderToggleImgBlock: prefix + "product_img_gallery_header_toggle_img" + postfix,
            productImgGalleryHeaderToggleImg: prefix + "product_img_gallery_header_toggle_img",
            productImgGalleryHeaderToggleTextBlock: prefix + "product_img_gallery_header_toggle_text" + postfix,
            productImgGalleryHeaderToggleText: prefix + "product_img_gallery_header_toggle_text",
            productImgGalleryLeftBlock: prefix + "product_img_gallery_left" + postfix,
            productImgGalleryLeftBtnBlock: prefix + "product_img_gallery_left_btn" + postfix,
            productImgGalleryLeftBtnImgBlock: prefix + "product_img_gallery_left_btn_img" + postfix,
            productImgGalleryLeftBtnImg: prefix + "product_img_gallery_left_btn_img",
            productImgGalleryLeftBtnTextBlock: prefix + "product_img_gallery_left_btn_text" + postfix,
            productImgGalleryLeftBtnText: prefix + "product_img_gallery_left_btn_text",
            productImgGalleryListBlock: prefix + "product_img_gallery_list" + postfix,
            productImgGalleryListItemBlock: prefix + "product_img_gallery_list_item" + postfix,
            productImgGalleryListItemImgBlock: prefix + "product_img_gallery_list_item_img" + postfix,
            productImgGalleryListItemImg: prefix + "product_img_gallery_list_item_img",
            productImgGalleryListItemTextBlock: prefix + "product_img_gallery_list_item_text" + postfix,
            productImgGalleryListItemText: prefix + "product_img_gallery_list_item_text",
            productImgGalleryRightBlock: prefix + "product_img_gallery_right" + postfix,
            productImgGalleryRightBtnBlock: prefix + "product_img_gallery_right_btn" + postfix,
            productImgGalleryRightBtnImgBlock: prefix + "product_img_gallery_right_btn_img" + postfix,
            productImgGalleryRightBtnImg: prefix + "product_img_gallery_right_btn_img",
            productImgGalleryRightBtnTextBlock: prefix + "product_img_gallery_right_btn_text" + postfix,
            productImgGalleryRightBtnText: prefix + "product_img_gallery_right_btn_text",
            productDescBlock: prefix + "product_desc" + postfix,
            productTitleBlock: prefix + "product_desc_title" + postfix,
            productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
            productTitleText: prefix + "product_desc_title_text",
            productTitleTextHeader: prefix + "product_desc_title_text_header",
            productRatingsBlock: prefix + "product_desc_ratings" + postfix,
            productDescParentBlock: prefix + "product_desc_parent" + postfix,
            productInfoBlock: prefix + "product_desc_info" + postfix,
            productInfoImgBlock: prefix + "product_desc_info_img" + postfix,
            productInfoImg: prefix + "product_desc_info_img",
            productInfoFullDescBlock: prefix + "product_Info_Full_desc_info" + postfix,
            productInfoFullDescText: prefix + "product_Info_Full_desc_info_text",
            productInfoTextBlock: prefix + "product_desc_info_text" + postfix,
            productInfoText: prefix + "product_desc_info_text",
            productPriceBlock: prefix + "product_desc_price" + postfix,
            productPriceActiveBlock: prefix + "product_desc_price_active" + postfix,
            productPriceActiveTextBlock: prefix + "product_desc_price_active_text" + postfix,
            productPriceActiveText: prefix + "product_desc_price_active_text",
            productPriceActiveTextMsg: prefix + "product_desc_price_active_text_msg",
            productPriceRegularBlock: prefix + "product_desc_price_regular" + postfix,
            productPriceRegularTextBlock: prefix + "product_desc_price_regular_text" + postfix,
            productPriceRegularText: prefix + "product_desc_price_regular_text",
            productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
            productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
            productPriceWorthText: prefix + "product_desc_price_worth_text",
            productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
            productAttWrapperBlock: prefix + "product_desc_att_wrapper" + postfix,
            productAttWrapperInnerBlock: prefix + "product_desc_att_wrapper_inner" + postfix,
            productAttBlock: prefix + "product_desc_att" + postfix,
            productAttColorBlock: prefix + "product_desc_att_color" + postfix,
            productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
            productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
            productAttColorTitleText: prefix + "product_desc_att_color_title_text",
            productAttColorTitleTextSelected: prefix + "product_desc_att_color_title_text_selected",
            productAttColorListBlock: prefix + "product_desc_att_color_list" + postfix,
            productAttColorListItemBlock: prefix + "product_desc_att_color_list_item" + postfix,
            productAttColorListItemImgBlock: prefix + "product_desc_att_color_list_item_img" + postfix,
            productAttColorListItemImg: prefix + "product_desc_att_color_list_item_img",
            productAttColorListItemTextBlock: prefix + "product_desc_att_color_list_item_text" + postfix,
            productAttColorListItemText: prefix + "product_desc_att_color_list_item_text",
            productAttColorListItemImgHoverBlock: prefix + "product_desc_att_color_list_item_img_hover" + postfix,
            productAttColorListItemImgHover: prefix + "product_desc_att_color_list_item_img_hover",
            productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
            productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
            productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
            productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
            productAttSizeTitleTextSelected: prefix + "product_desc_att_size_title_text_selected",
            productAttSizeListBlock: prefix + "product_desc_att_size_list" + postfix,
            productAttSizeListItemBlock: prefix + "product_desc_att_size_list_item" + postfix,
            productAttSizeListItemImgBlock: prefix + "product_desc_att_size_list_item_img" + postfix,
            productAttSizeListItemImg: prefix + "product_desc_att_size_list_item_img",
            productAttSizeListItemTextBlock: prefix + "product_desc_att_size_list_item_text" + postfix,
            productAttSizeListItemText: prefix + "product_desc_att_size_list_item_text",
            productAttzeroBlock: prefix + "product_desc_att_zero" + postfix,
            productAttzeroTitleBlock: prefix + "product_desc_att_zero_title" + postfix,
            productAttzeroTitleTextBlock: prefix + "product_desc_att_zero_title_text" + postfix,
            productAttzeroTitleText: prefix + "product_desc_att_zero_title_text",
            productAttzeroTitleTextSelected: prefix + "product_desc_att_zero_title_text_selected",
            productAttzeroListBlock: prefix + "product_desc_att_zero_list" + postfix,
            productAttzeroListItemBlock: prefix + "product_desc_att_zero_list_item" + postfix,
            productAttzeroListItemImgBlock: prefix + "product_desc_att_zero_list_item_img" + postfix,
            productAttzeroListItemImg: prefix + "product_desc_att_zero_list_item_img",
            productAttzeroListItemTextBlock: prefix + "product_desc_att_zero_list_item_text" + postfix,
            productAttzeroListItemText: prefix + "product_desc_att_zero_list_item_text",
            productAttthirdBlock: prefix + "product_desc_att_third" + postfix,
            productAttthirdTitleBlock: prefix + "product_desc_att_third_title" + postfix,
            productAttthirdTitleTextBlock: prefix + "product_desc_att_third_title_text" + postfix,
            productAttthirdTitleText: prefix + "product_desc_att_third_title_text",
            productAttthirdTitleTextSelected: prefix + "product_desc_att_third_title_text_selected",
            productAttthirdListBlock: prefix + "product_desc_att_third_list" + postfix,
            productAttthirdListItemBlock: prefix + "product_desc_att_third_list_item" + postfix,
            productAttthirdListItemImgBlock: prefix + "product_desc_att_third_list_item_img" + postfix,
            productAttthirdListItemImg: prefix + "product_desc_att_third_list_item_img",
            productAttthirdListItemTextBlock: prefix + "product_desc_att_third_list_item_text" + postfix,
            productAttthirdListItemText: prefix + "product_desc_att_third_list_item_text",
            productAttfourthBlock: prefix + "product_desc_att_fourth" + postfix,
            productAttfourthTitleBlock: prefix + "product_desc_att_fourth_title" + postfix,
            productAttfourthTitleTextBlock: prefix + "product_desc_att_fourth_title_text" + postfix,
            productAttfourthTitleText: prefix + "product_desc_att_fourth_title_text",
            productAttfourthTitleTextSelected: prefix + "product_desc_att_fourth_title_text_selected",
            productAttfourthListBlock: prefix + "product_desc_att_fourth_list" + postfix,
            productAttfourthListItemBlock: prefix + "product_desc_att_fourth_list_item" + postfix,
            productAttfourthListItemImgBlock: prefix + "product_desc_att_fourth_list_item_img" + postfix,
            productAttfourthListItemImg: prefix + "product_desc_att_fourth_list_item_img",
            productAttfourthListItemTextBlock: prefix + "product_desc_att_fourth_list_item_text" + postfix,
            productAttfourthListItemText: prefix + "product_desc_att_fourth_list_item_text",
            productAttEditText: prefix + "product_desc_att_edit_text",
            productAttEditBlock: prefix + "product_desc_att_edit" + postfix,
            productShadeMobileBlock: prefix + "product_shade_mobile" + postfix,
            productSelectedBlock: prefix + "selected_prod_color_list" + postfix,
            productSelecteTitleBlock: prefix + "selected_prod_color_title" + postfix,
            productSelectedTitleText: prefix + "selected_prod_color_title_text",
            selectedColorWrapperBlock: prefix + "selected_color_wrapper" + postfix,
            selectedColorBlock: prefix + "selected_color" + postfix,
            selectedColorDescBlock: prefix + "selected_color_desc" + postfix,
            selectedColorImgBlock: prefix + "selected_color_img" + postfix,
            selectedColorNameBlock: prefix + "selected_color_name" + postfix,
            selectedColorNameText: prefix + "selected_color_name_text",
            selectedColorQtyBlock: prefix + "selected_color_qty" + postfix,
            selectedColorQtyDownBlock: prefix + "selected_color_qty_down" + postfix,
            selectedColorQtyDownBtn: prefix + "selected_color_qty_down_btn",
            selectedColorQtyInputTextBlock: prefix + "selected_color_qty_input_text" + postfix,
            selectedColorQtyUpBlock: prefix + "selected_color_qty_up" + postfix,
            selectedColorQtyUpBtn: prefix + "selected_color_qty_up_btn",
            selectedColorRemoveBlock: prefix + "selected_color_remove" + postfix,
            selectedColorQtyRemoveBtn: prefix + "selected_color_remove_btn",
            productPackOfBlock: prefix + "product_desc_pack_of" + postfix,
            productPackOfLeftBlock: prefix + "product_desc_pack_of_left" + postfix,
            productPackOfListBlock: prefix + "product_desc_pack_of_list" + postfix,
            productPackOfRightBlock: prefix + "product_desc_pack_of_right" + postfix,
            productPackOfLeftBtnBlock: prefix + "product_desc_pack_of_left_btn" + postfix,
            productPackOfLeftBtnImgBlock: prefix + "product_desc_pack_of_left_btn_img" + postfix,
            productPackOfLeftBtnImg: prefix + "product_desc_pack_of_left_btn_img",
            productPackOfRightBtnBlock: prefix + "product_desc_pack_of_right_btn" + postfix,
            productPackOfRightBtnImgBlock: prefix + "product_desc_pack_of_right_btn_img" + postfix,
            productPackOfRightBtnImg: prefix + "product_desc_pack_of_right_btn_img",
            productPackOfItemBlock: prefix + "product_desc_pack_of_item" + postfix,
            productPackOfItemTitleBlock: prefix + "product_desc_pack_of_item_title" + postfix,
            productPackOfItemTitleTextBlock: prefix + "product_desc_pack_of_item_title_text" + postfix,
            productPackOfItemTitleText: prefix + "product_desc_pack_of_item_title_text",
            productPackOfItemImgBlock: prefix + "product_desc_pack_of_item_img" + postfix,
            productPackOfItemImg: prefix + "product_desc_pack_of_item_img",
            productPackOfItemQuantityBlock: prefix + "product_desc_pack_of_item_quantity" + postfix,
            productPackOfItemQuantityTextBlock: prefix + "product_desc_pack_of_item_quantity_text" + postfix,
            productPackOfItemQuantityText: prefix + "product_desc_pack_of_item_quantity_text",
            productPackOfItemPriceBlock: prefix + "product_desc_pack_of_item_price" + postfix,
            productPackOfItemPriceRegularBlock: prefix + "product_desc_pack_of_item_price_regular" + postfix,
            productPackOfItemPriceRegularTextBlock: prefix + "product_desc_pack_of_item_price_regular_text" + postfix,
            productPackOfItemPriceRegularText: prefix + "product_desc_pack_of_item_price_regular_text",
            productPackOfItemPriceActiveBlock: prefix + "product_desc_pack_of_item_price_active" + postfix,
            productPackOfItemPriceActiveTextBlock: prefix + "product_desc_pack_of_item_price_active_text" + postfix,
            productPackOfItemPriceActiveText: prefix + "product_desc_pack_of_item_price_active_text",
            productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
            productQtyBlock: prefix + "product_desc_qty" + postfix,
            productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
            productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
            productQtyDownBtn: prefix + "product_desc_qty_down_btn",
            productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
            productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
            productQtyInputText: prefix + "product_desc_qty_input_text",
            productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
            productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
            productQtyUpBtn: prefix + "product_desc_qty_up_btn",
            productTotalBlock: prefix + "product_total" + postfix,
            productTotalInputText: prefix + "product_total_input_text",
            productAddBlock: prefix + "product_desc_add" + postfix,
            productAddTextBlock: prefix + "product_desc_add_text" + postfix,
            productAddText: prefix + "product_desc_add_text",
            productAddImgBlock: prefix + "product_desc_add_img" + postfix,
            productAddImg: prefix + "product_desc_add_img",
            productAddErrText: prefix + "product_desc_add_err_text" + postfix,
        },
        dom: {
            pdpModalBlock: ["pdpModalTitleBlock", "pdpModalBundleBlock"],
            pdpModalTitleBlock: ["pdpModalTitleTextBlock", "pdpModalTitleImgBlock"],
            pdpModalTitleTextBlock: ["pdpModalTitleText"],
            pdpModalTitleImgBlock: ["pdpModalTitleImg"],
            pdpModalBundleBlock: ["pdpModalMainProductBlock", "pdpModalAddIconBlock", "pdpModalBundleProductBlock", "pdpModalBundleCartOverlay", "pdpModalBundleCartBlock"],


            pdpModalMainProductBlock: ["productModuleBlock"],
            pdpModalAddIconBlock: ["pdpAddIconImgBlock"],
            pdpAddIconImgBlock: ["pdpAddIconImg"],

            pdpModalBundleProductBlock: ["pdpBundleProductLeftBtnBlock", "pdpBundleProductListBlock", "pdpBundleProductRightBtnBlock"],
            pdpBundleProductLeftBtnBlock: ["pdpBundleProductLeftBtnImgBlock"],
            pdpBundleProductLeftBtnImgBlock: ["pdpBundleProductLeftBtnImg"],
            pdpBundleProductRightBtnBlock: ["pdpBundleProductRightBtnImgBlock"],
            pdpBundleProductRightBtnImgBlock: ["pdpBundleProductRightBtnImg"],
            pdpBundleProductListBlock: ["pdpBundleProductListMainBlock", "pdpBundleProductListLeftBlock", "pdpBundleProductListItemsBlockShowMoreLess", "pdpBundleProductListItemsBlock", "pdpBundleProductListRightBlock"],
            pdpBundleProductListMainBlock: ["pdpBundleProductListMainLeftBlock", "pdpBundleProductListMainListBlock", "pdpBundleProductListMainRightBlock"],
            pdpBundleProductListMainLeftBlock: ["pdpBundleProductListMainLeftBtnBlock"],
            pdpBundleProductListMainLeftBtnBlock: ["pdpBundleProductListMainLeftBtnImgBlock", "pdpBundleProductListMainLeftBtnTextBlock"],
            pdpBundleProductListMainLeftBtnImgBlock: ["pdpBundleProductListMainLeftBtnImg"],
            pdpBundleProductListMainLeftBtnTextBlock: ["pdpBundleProductListMainLeftBtnText"],
            pdpBundleProductListMainListBlock: ["productModuleBlock"],
            pdpBundleProductListMainRightBlock: ["pdpBundleProductListMainRightBtnBlock"],
            pdpBundleProductListMainRightBtnBlock: ["pdpBundleProductListMainRightBtnImgBlock", "pdpBundleProductListMainRightBtnTextBlock"],
            pdpBundleProductListMainRightBtnImgBlock: ["pdpBundleProductListMainRightBtnImg"],
            pdpBundleProductListMainRightBtnTextBlock: ["pdpBundleProductListMainRightBtnText"],
            pdpBundleProductListLeftBlock: ["pdpBundleProductListLeftBtnBlock"],
            pdpBundleProductListLeftBtnBlock: ["pdpBundleProductListLeftBtnImgBlock"],
            pdpBundleProductListLeftBtnImgBlock: ["pdpBundleProductListLeftBtnImg"],
            pdpBundleProductListRightBlock: ["pdpBundleProductListRightBtnBlock"],
            pdpBundleProductListRightBtnBlock: ["pdpBundleProductListRightBtnImgBlock"],
            pdpBundleProductListRightBtnImgBlock: ["pdpBundleProductListRightBtnImg"],
            pdpBundleProductListItemsBlockShowMoreLess: ["pdpBundleProductListItemsBlockShowMoreLessText"],
            pdpBundleProductListItemsBlock: ["pdpBundleProductListItemBlock"],
            pdpBundleProductListItemBlock: ["pdpBundleProductListItemAddedBlock", "pdpBundleProductListItemImgBlock", "pdpBundleProductListItemTitleBlock", "pdpBundleProductListItemPriceBlock"],
            pdpBundleProductListItemAddedBlock: ["pdpBundleProductListItemAddedBtnBlock"],
            pdpBundleProductListItemAddedBtnBlock: ["pdpBundleProductListItemAddedBtnImgBlock", "pdpBundleProductListItemAddedBtnTextBlock"],
            pdpBundleProductListItemAddedBtnImgBlock: ["pdpBundleProductListItemAddedBtnImg"],
            pdpBundleProductListItemAddedBtnTextBlock: ["pdpBundleProductListItemAddedBtnText"],
            pdpBundleProductListItemImgBlock: ["pdpBundleProductListItemImg"],
            pdpBundleProductListItemTitleBlock: ["pdpBundleProductListItemTitleTextBlock"],
            pdpBundleProductListItemTitleTextBlock: ["pdpBundleProductListItemTitleText"],
            pdpBundleProductListItemPriceBlock: ["pdpBundleProductListItemPriceActiveBlock"],
            pdpBundleProductListItemPriceActiveBlock: ["pdpBundleProductListItemPriceActiveTextBlock"],
            pdpBundleProductListItemPriceActiveTextBlock: ["pdpBundleProductListItemPriceActiveText"],

            pdpModalBundleCartBlock: ["pdpBundleCartTitleBlock", "pdpBundleCartPriceBlock", "pdpBundleCartAddedBlock", "pdpBundleCartSummaryBlock"],
            pdpBundleCartTitleBlock: ["pdpBundleCartTitleTextBlock", "pdpBundleCartTitleImgBlock"],
            pdpBundleCartTitleTextBlock: ["pdpBundleCartTitleText"],
            pdpBundleCartTitleImgBlock: ["pdpBundleCartTitleImg"],
            pdpBundleCartPriceBlock: ["pdpBundleCartPriceMainBlock", "pdpBundleCartPriceAddonBlock"],
            pdpBundleCartPriceMainBlock: ["pdpBundleCartPriceMainTitleBlock", "pdpBundleCartPriceMainFigureBlock"],
            pdpBundleCartPriceMainTitleBlock: ["pdpBundleCartPriceMainTitleTextBlock"],
            pdpBundleCartPriceMainTitleTextBlock: ["pdpBundleCartPriceMainTitleText"],
            pdpBundleCartPriceMainFigureBlock: ["pdpBundleCartPriceMainFigureTextBlock"],
            pdpBundleCartPriceMainFigureTextBlock: ["pdpBundleCartPriceMainFigureText"],
            pdpBundleCartPriceAddonBlock: ["pdpBundleCartPriceAddonTitleBlock", "pdpBundleCartPriceAddonFigureBlock"],
            pdpBundleCartPriceAddonTitleBlock: ["pdpBundleCartPriceAddonTitleTextBlock"],
            pdpBundleCartPriceAddonTitleTextBlock: ["pdpBundleCartPriceAddonTitleText"],
            pdpBundleCartPriceAddonFigureBlock: ["pdpBundleCartPriceAddonFigureTextBlock"],
            pdpBundleCartPriceAddonFigureTextBlock: ["pdpBundleCartPriceAddonFigureText"],
            pdpBundleCartAddedBlock: ["pdpBundleCartAddedProductBlock"],
            pdpBundleCartAddedProductBlock: ["pdpBundleCartAddedProductImgBlock", "pdpBundleCartAddedProductTitleBlock", "pdpBundleCartAddedProductAttBlock", "pdpBundleCartAddedProductQtyBlock", "pdpBundleCartAddedProductPriceBlock", "pdpBundleCartAddedProductEditBlock"],
            pdpBundleCartAddedProductImgBlock: ["pdpBundleCartAddedProductImg"],
            pdpBundleCartAddedProductTitleBlock: ["pdpBundleCartAddedProductTitleTextBlock"],
            pdpBundleCartAddedProductTitleTextBlock: ["pdpBundleCartAddedProductTitleText"],
            pdpBundleCartAddedProductPriceBlock: ["pdpBundleCartAddedProductPriceTextBlock"],
            pdpBundleCartAddedProductPriceTextBlock: ["pdpBundleCartAddedProductPriceText"],
            pdpBundleCartAddedProductAttBlock: ["pdpBundleCartAddedProductAttColorBlock", "pdpBundleCartAddedProductAttSizeBlock"],
            pdpBundleCartAddedProductAttColorBlock: ["pdpBundleCartAddedProductAttColorTextBlock"],
            pdpBundleCartAddedProductAttColorTextBlock: ["pdpBundleCartAddedProductAttColorText"],
            pdpBundleCartAddedProductAttSizeBlock: ["pdpBundleCartAddedProductAttSizeTextBlock"],
            pdpBundleCartAddedProductAttSizeTextBlock: ["pdpBundleCartAddedProductAttSizeText"],
            pdpBundleCartAddedProductQtyBlock: ["pdpBundleCartAddedProductQtyTextBlock"],
            pdpBundleCartAddedProductQtyTextBlock: ["pdpBundleCartAddedProductQtyText"],
            pdpBundleCartAddedProductEditBlock: ["pdpBundleCartAddedProductEditTextBlock", "pdpBundleCartAddedProductEditImgBlock"],
            pdpBundleCartAddedProductEditTextBlock: ["pdpBundleCartAddedProductEditText"],
            pdpBundleCartAddedProductEditImgBlock: ["pdpBundleCartAddedProductEditImg"],
            pdpBundleCartSummaryBlock: ["pdpBundleCartSummaryTitleBlock", "pdpBundleCartSummaryPriceBlock", "pdpBundleCartSummaryViewBlock", "pdpBundleCartSummaryAddBlock"],
            pdpBundleCartSummaryTitleBlock: ["pdpBundleCartSummaryTitleTextBlock"],
            pdpBundleCartSummaryTitleTextBlock: ["pdpBundleCartSummaryTitleText"],
            pdpBundleCartSummaryViewBlock: ["pdpBundleCartSummaryViewBtnBlock"],
            pdpBundleCartSummaryViewBtnBlock: ["pdpBundleCartSummaryViewBtnImgBlock", "pdpBundleCartSummaryViewBtnTextBlock", "pdpBundleCartSummaryViewBtnCountBlock"],
            pdpBundleCartSummaryViewBtnImgBlock: ["pdpBundleCartSummaryViewBtnImg"],
            pdpBundleCartSummaryViewBtnTextBlock: ["pdpBundleCartSummaryViewBtnText"],
            pdpBundleCartSummaryViewBtnCountBlock: ["pdpBundleCartSummaryViewBtnCount"],
            pdpBundleCartSummaryPriceBlock: ["pdpBundleCartSummaryPriceActiveBlock", "pdpBundleCartSummaryPriceRegularBlock"],
            pdpBundleCartSummaryPriceRegularBlock: ["pdpBundleCartSummaryPriceRegularTextBlock"],
            pdpBundleCartSummaryPriceRegularTextBlock: ["pdpBundleCartSummaryPriceRegularText"],
            pdpBundleCartSummaryPriceActiveBlock: ["pdpBundleCartSummaryPriceActiveTextBlock"],
            pdpBundleCartSummaryPriceActiveTextBlock: ["pdpBundleCartSummaryPriceActiveText"],
            pdpBundleCartSummaryAddBlock: ["pdpBundleCartSummaryAddBtnBlock"],
            pdpBundleCartSummaryAddBtnBlock: ["pdpBundleCartSummaryAddBtnTextBlock", "pdpBundleCartSummaryAddBtnImgBlock"],
            pdpBundleCartSummaryAddBtnTextBlock: ["pdpBundleCartSummaryAddBtnText"],
            pdpBundleCartSummaryAddBtnImgBlock: ["pdpBundleCartSummaryAddBtnImg"],

            productModuleBlock: ["productShowcaseBlock", "productModalBlock"],
            productShowcaseBlock: ["productBlock"],
            productModalBlock: ["productBlock"],
            productBlock: ["productHeaderBlock", "productImgBlock", "productDescBlock"],
            productHeaderBlock: ["productHeaderTitleBlock", "productHeaderImgBlock"],
            productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
            productHeaderTitleTextBlock: ["productHeaderTitleText"],
            productHeaderImgBlock: ["productHeaderImg"],
            productPromoBlock: ["productPromoMsgBlock"],
            productPromoMsgBlock: ["productPromoMsgText"],
            productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
            productImgMainBlock: ["productImgMainImgBlock", "productImgMainZoomBlock"],
            productImgMainImgBlock: ["productImgMainImg"],
            productImgMainZoomBlock: ["productImgMainZoomBtnBlock"],
            productImgMainZoomBtnBlock: ["productImgMainZoomBtnImgBlock", "productImgMainZoomBtnTextBlock"],
            productImgMainZoomBtnImgBlock: ["productImgMainZoomBtnImg"],
            productImgMainZoomBtnTextBlock: ["productImgMainZoomBtnText"],
            productImgGalleryBlock: ["productImgGalleryHeaderBlock", "productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryHeaderBlock: ["productImgGalleryHeaderTitleBlock", "productImgGalleryHeaderToggleBlock"],
            productImgGalleryHeaderTitleBlock: ["productImgGalleryHeaderTitleImgBlock", "productImgGalleryHeaderTitleTextBlock"],
            productImgGalleryHeaderTitleImgBlock: ["productImgGalleryHeaderTitleImg"],
            productImgGalleryHeaderTitleTextBlock: ["productImgGalleryHeaderTitleText"],
            productImgGalleryHeaderToggleBlock: ["productImgGalleryHeaderToggleImgBlock", "productImgGalleryHeaderToggleTextBlock"],
            productImgGalleryHeaderToggleImgBlock: ["productImgGalleryHeaderToggleImg"],
            productImgGalleryHeaderToggleTextBlock: ["productImgGalleryHeaderToggleText"],
            productImgGalleryLeftBlock: ["productImgGalleryLeftBtnBlock"],
            productImgGalleryLeftBtnBlock: ["productImgGalleryLeftBtnImgBlock", "productImgGalleryLeftBtnTextBlock"],
            productImgGalleryLeftBtnImgBlock: ["productImgGalleryLeftBtnImg"],
            productImgGalleryLeftBtnTextBlock: ["productImgGalleryLeftBtnText"],
            productImgGalleryListBlock: ["productImgGalleryListItemBlock"],
            productImgGalleryListItemBlock: ["productImgGalleryListItemImgBlock", "productImgGalleryListItemTextBlock"],
            productImgGalleryListItemImgBlock: ["productImgGalleryListItemImg"],
            productImgGalleryListItemTextBlock: ["productImgGalleryListItemText"],
            productImgGalleryRightBlock: ["productImgGalleryRightBtnBlock"],
            productImgGalleryRightBtnBlock: ["productImgGalleryRightBtnImgBlock", "productImgGalleryRightBtnTextBlock"],
            productImgGalleryRightBtnImgBlock: ["productImgGalleryRightBtnImg"],
            productImgGalleryRightBtnTextBlock: ["productImgGalleryRightBtnText"],
            productDescBlock: ["productTitleBlock", "productRatingsBlock", "productPriceBlock", "productTotalBlock", "productDescParentBlock", "productShadeMobileBlock", "productPackOfBlock", "productQtyAddBtnBlock"],
            productTitleBlock: ["productTitleTextBlock"],
            productTitleTextBlock: ["productTitleText"],
            productDescParentBlock: ["productInfoBlock", "productAttWrapperBlock",],
            productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock", "productInfoFullDescBlock"],
            productInfoImgBlock: ["productInfoImg"],
            productInfoTextBlock: ["productInfoText"],
            productInfoFullDescBlock: ["productInfoFullDescText"],
            productPriceBlock: ["productPriceRegularBlock", "productPriceActiveBlock", "productPriceWorthBlock"],
            productPriceActiveBlock: ["productPriceActiveTextBlock"],
            productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
            productTotalBlock: ["productTotalInputText"],
            productPriceRegularBlock: ["productPriceRegularTextBlock"],
            productPriceRegularTextBlock: ["productPriceRegularText"],
            productPriceWorthBlock: ["productPriceWorthTextBlock"],
            productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],
            productAttWrapperBlock: ["productAttWrapperInnerBlock"],
            productAttWrapperInnerBlock: ["productAttBlock", "productSelectedBlock"],
            productAttBlock: ["productAddErrText", "productAttzeroBlock", "productAttSizeBlock", "productAttColorBlock", "productAttthirdBlock", "productAttfourthBlock", "productAttEditBlock"],
            productAttColorBlock: ["productAttColorTitleBlock", "productAttColorListBlock"],
            productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
            productAttColorTitleTextBlock: ["productAttColorTitleText", "productAttColorTitleTextSelected"],
            productAttColorListBlock: ["productAttColorListItemBlock"],
            productAttColorListItemBlock: ["productAttColorListItemImgBlock", "productAttColorListItemTextBlock", "productAttColorListItemImgHoverBlock"],
            productAttColorListItemImgBlock: ["productAttColorListItemImg"],
            productAttColorListItemTextBlock: ["productAttColorListItemText"],
            productAttColorListItemImgHoverBlock: ["productAttColorListItemImgHover"],

            productAttzeroBlock: ["productAttzeroTitleBlock", "productAttzeroListBlock"],
            productAttzeroTitleBlock: ["productAttzeroTitleTextBlock"],
            productAttzeroTitleTextBlock: ["productAttzeroTitleText", "productAttzeroTitleTextSelected"],
            productAttzeroListBlock: ["productAttzeroListItemBlock"],
            productAttzeroListItemBlock: ["productAttzeroListItemImgBlock", "productAttzeroListItemTextBlock"],
            productAttzeroListItemImgBlock: ["productAttzeroListItemImg"],
            productAttzeroListItemTextBlock: ["productAttzeroListItemText"],

            productAttthirdBlock: ["productAttthirdTitleBlock", "productAttthirdListBlock"],
            productAttthirdTitleBlock: ["productAttthirdTitleTextBlock"],
            productAttthirdTitleTextBlock: ["productAttthirdTitleText", "productAttthirdTitleTextSelected"],
            productAttthirdListBlock: ["productAttthirdListItemBlock"],
            productAttthirdListItemBlock: ["productAttthirdListItemImgBlock", "productAttthirdListItemTextBlock"],
            productAttthirdListItemImgBlock: ["productAttthirdListItemImg"],
            productAttthirdListItemTextBlock: ["productAttthirdListItemText"],

            productAttfourthBlock: ["productAttfourthTitleBlock", "productAttfourthListBlock"],
            productAttfourthTitleBlock: ["productAttfourthTitleTextBlock"],
            productAttfourthTitleTextBlock: ["productAttfourthTitleText", "productAttfourthTitleTextSelected"],
            productAttfourthListBlock: ["productAttfourthListItemBlock"],
            productAttfourthListItemBlock: ["productAttfourthListItemImgBlock", "productAttfourthListItemTextBlock"],
            productAttfourthListItemImgBlock: ["productAttfourthListItemImg"],
            productAttfourthListItemTextBlock: ["productAttfourthListItemText"],

            productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeListBlock"],
            productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
            productAttSizeTitleTextBlock: ["productAttSizeTitleText", "productAttSizeTitleTextSelected"],
            productAttSizeListBlock: ["productAttSizeListItemBlock"],
            productAttSizeListItemBlock: ["productAttSizeListItemImgBlock", "productAttSizeListItemTextBlock"],
            productAttSizeListItemImgBlock: ["productAttSizeListItemImg"],
            productAttSizeListItemTextBlock: ["productAttSizeListItemText"],
            productAttEditBlock: ["productAttEditText"],
            productSelectedBlock: ["productSelecteTitleBlock", "selectedColorWrapperBlock"],
            productSelecteTitleBlock: ["productSelectedTitleText"],
            // selectedColorWrapperBlock: ["selectedColorBlock"],
            selectedColorBlock: ["selectedColorDescBlock", "selectedColorQtyBlock", "selectedColorRemoveBlock"],
            selectedColorDescBlock: ["selectedColorImgBlock", "selectedColorNameBlock"],
            selectedColorNameBlock: ["selectedColorNameText"],
            selectedColorQtyBlock: ["selectedColorQtyDownBlock", "selectedColorQtyInputTextBlock", "selectedColorQtyUpBlock"],
            selectedColorQtyDownBlock: ["selectedColorQtyDownBtn"],
            selectedColorQtyUpBlock: ["selectedColorQtyUpBtn"],
            selectedColorRemoveBlock: ["selectedColorQtyRemoveBtn"],
            productPackOfBlock: ["productPackOfLeftBlock", "productPackOfListBlock", "productPackOfRightBlock"],
            productPackOfLeftBlock: ["productPackOfLeftBtnBlock"],
            productPackOfLeftBtnBlock: ["productPackOfLeftBtnImgBlock"],
            productPackOfLeftBtnImgBlock: ["productPackOfLeftBtnImg"],
            productPackOfRightBlock: ["productPackOfRightBtnBlock"],
            productPackOfRightBtnBlock: ["productPackOfRightBtnImgBlock"],
            productPackOfRightBtnImgBlock: ["productPackOfRightBtnImg"],
            productPackOfListBlock: ["productPackOfItemBlock"],
            productPackOfItemBlock: ["productPackOfItemImgBlock", "productPackOfItemTitleBlock", "productPackOfItemQuantityBlock", "productPackOfItemPriceBlock"],
            productPackOfItemImgBlock: ["productPackOfItemImg"],
            productPackOfItemTitleBlock: ["productPackOfItemTitleTextBlock"],
            productPackOfItemTitleTextBlock: ["productPackOfItemTitleText"],
            productPackOfItemQuantityBlock: ["productPackOfItemQuantityTextBlock"],
            productPackOfItemQuantityTextBlock: ["productPackOfItemQuantityText"],
            productPackOfItemPriceBlock: ["productPackOfItemPriceActiveBlock", "productPackOfItemPriceRegularBlock"],
            productPackOfItemPriceActiveBlock: ["productPackOfItemPriceActiveTextBlock"],
            productPackOfItemPriceActiveTextBlock: ["productPackOfItemPriceActiveText"],
            productPackOfItemPriceRegularBlock: ["productPackOfItemPriceRegularTextBlock"],
            productPackOfItemPriceRegularTextBlock: ["productPackOfItemPriceRegularText"],
            productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock"],
            productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
            productQtyDownBlock: ["productQtyDownBtnBlock"],
            productQtyDownBtnBlock: ["productQtyDownBtn"],
            productQtyUpBlock: ["productQtyUpBtnBlock"],
            productQtyUpBtnBlock: ["productQtyUpBtn"],
            productQtyInputBlock: ["productQtyInputTextBlock"],
            productQtyInputTextBlock: ["productQtyInputText"],
            productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
            productAddTextBlock: ["productAddText"],
            productAddImgBlock: ["productAddImg"],
        }
    },
    sidebar: {
        className: {
            sidebarOuterBlock: "sidebar_outer",
            sidebarModalBlock: prefix + "sidebar_modal" + postfix,
            sidebarHeaderBlock: prefix + "sidebar_header" + postfix,
            sidebarCartAddedBlock: prefix + "sidebar_cart_added" + postfix,
            sidebarRecommendedBlock: prefix + "sidebar_recommended" + postfix,
            sidebarCheckoutBlock: prefix + "sidebar_checkout" + postfix,
            sidebarHeaderContinueBlock: prefix + "header_continue" + postfix,
            sidebarHeaderContinueImgBlock: prefix + "header_continue_img" + postfix,
            sidebarHeaderContinueImg: prefix + "header_continue_img",
            sidebarHeaderContinueTextBlock: prefix + "header_continue_text" + postfix,
            sidebarHeaderContinueText: prefix + "header_continue_text",
            sidebarHeaderTitleBlock: prefix + "header_title" + postfix,
            sidebarHeaderTitleTextBlock: prefix + "header_title_text" + postfix,
            sidebarHeaderTitleText: prefix + "header_title_text",
            sidebarHeaderItemBlock: prefix + "header_item" + postfix,
            sidebarHeaderItemCountBlock: prefix + "header_item_count" + postfix,
            sidebarHeaderItemCountTitleBlock: prefix + "header_item_count_title" + postfix,
            sidebarHeaderItemCountTitleTextBlock: prefix + "header_item_count_title_text" + postfix,
            sidebarHeaderItemCountTitleText: prefix + "header_item_count_title_text",
            sidebarHeaderItemCountFigureBlock: prefix + "header_item_count_figure" + postfix,
            sidebarHeaderItemCountFigureTextBlock: prefix + "header_item_count_figure_text" + postfix,
            sidebarHeaderItemCountFigureText: prefix + "header_item_count_figure_text",
            sidebarCartAddedProductDescSubTotalPriceBlock: prefix + "cart_added_product_desc_subtotal_price" + postfix,
            sidebarCartAddedProductDescSubTotalPriceRegularBlock: prefix + "cart_added_product_desc_subtotal_price_regular" + postfix,
            sidebarCartAddedProductDescSubTotalRegularTextBlock: prefix + "cart_added_product_desc_subtotal_price_regular_text" + postfix,
            sidebarCartAddedProductDescSubTotalRegularText: prefix + "cart_added_product_desc_subtotal_price_regular_text",
            sidebarCartAddedProductDescSubTotalActiveBlock: prefix + "cart_added_product_desc_subtotal_price_active" + postfix,
            sidebarCartAddedProductDescSubTotalActiveTextBlock: prefix + "cart_added_product_desc_subtotal_price_active_text" + postfix,
            sidebarCartAddedProductDescSubTotalActiveText: prefix + "cart_added_product_desc_subtotal_price_active_text",
            sidebarCartAddedProductDescSubTotalActiveTextMsg: prefix + "cart_added_product_desc_subtotal_price_active_text_msg",

            sidebarCartAddedLeftBlock: prefix + "cart_added_left" + postfix,
            sidebarCartAddedLeftBtnBlock: prefix + "cart_added_left_btn" + postfix,
            sidebarCartAddedLeftBtnImgBlock: prefix + "cart_added_left_btn_img" + postfix,
            sidebarCartAddedLeftBtnImg: prefix + "cart_added_left_btn_img",
            sidebarCartAddedRightBlock: prefix + "cart_added_right" + postfix,
            sidebarCartAddedRightBtnBlock: prefix + "cart_added_right_btn" + postfix,
            sidebarCartAddedRightBtnImgBlock: prefix + "cart_added_right_btn_img" + postfix,
            sidebarCartAddedRightBtnImg: prefix + "cart_added_right_btn_img",
            sidebarCartAddedListBlock: prefix + "cart_added_list" + postfix,
            sidebarCartAddedProductBlock: prefix + "cart_added_product" + postfix,
            sidebarCartAddedProductImgBlock: prefix + "cart_added_product_img" + postfix,
            sidebarCartAddedProductImg: prefix + "cart_added_product_img",
            sidebarCartAddedProductDescBlock: prefix + "cart_added_product_desc" + postfix,
            sidebarCartAddedProductDescTitleBlock: prefix + "cart_added_product_desc_title" + postfix,
            sidebarCartAddedProductDescTitleTextBlock: prefix + "cart_added_product_desc_title_text" + postfix,
            sidebarCartAddedProductDescTitleText: prefix + "cart_added_product_desc_title_text",
            sidebarCartAddedProductDescPriceBlock: prefix + "cart_added_product_desc_price" + postfix,
            sidebarCartAddedProductDescPriceRegularBlock: prefix + "cart_added_product_desc_price_regular" + postfix,
            sidebarCartAddedProductDescPriceRegularTextBlock: prefix + "cart_added_product_desc_price_regular_text" + postfix,
            sidebarCartAddedProductDescPriceRegularText: prefix + "cart_added_product_desc_price_regular_text",
            sidebarCartAddedProductDescPriceActiveBlock: prefix + "cart_added_product_desc_price_active" + postfix,
            sidebarCartAddedProductDescPriceActiveTextBlock: prefix + "cart_added_product_desc_price_active_text" + postfix,
            sidebarCartAddedProductDescPriceActiveText: prefix + "cart_added_product_desc_price_active_text",
            sidebarCartAddedProductDescPriceActiveTextMsg: prefix + "cart_added_product_desc_price_active_text_msg",
            sidebarCartAddedProductDescAttBlock: prefix + "cart_added_product_desc_att" + postfix,
            sidebarCartAddedProductDescAttColorBlock: prefix + "cart_added_product_desc_att_color" + postfix,
            sidebarCartAddedProductDescAttColorTextBlock: prefix + "cart_added_product_desc_att_color_text" + postfix,
            sidebarCartAddedProductDescAttColorText: prefix + "cart_added_product_desc_att_color_text" + postfix,
            sidebarCartAddedProductDescAttSizeBlock: prefix + "cart_added_product_desc_att_size" + postfix,
            sidebarCartAddedProductDescAttSizeTextBlock: prefix + "cart_added_product_desc_att_size_text" + postfix,
            sidebarCartAddedProductDescAttSizeText: prefix + "cart_added_product_desc_att_size_text",


            sidebarRecommendedTitleBlock: prefix + "recommended_title" + postfix,
            sidebarRecommendedTitleTextBlock: prefix + "recommended_title_text" + postfix,
            sidebarRecommendedTitleText: prefix + "recommended_title_text",
            sidebarRecommendedTitleImgBlock: prefix + "recommended_title_img" + postfix,
            sidebarRecommendedTitleImg: prefix + "recommended_title_img",
            sidebarRecommendedTabsBlock: prefix + "recommended_tabs" + postfix,
            sidebarRecommendedTabsTitleBlock: prefix + "recommended_tabs_title" + postfix,
            sidebarRecommendedTabsTitleTextBlock: prefix + "recommended_tabs_title_text" + postfix,
            sidebarRecommendedTabsTitleText: prefix + "recommended_tabs_title_text",
            sidebarRecommendedTabsLeftBlock: prefix + "recommended_tabs_left" + postfix,
            sidebarRecommendedTabsListBlock: prefix + "recommended_tabs_list" + postfix,
            sidebarRecommendedTabsRightBlock: prefix + "recommended_tabs_right" + postfix,
            sidebarRecommendedTabsLeftBtnBlock: prefix + "recommended_tabs_left_btn" + postfix,
            sidebarRecommendedTabsLeftBtnImgBlock: prefix + "recommended_tabs_left_btn_img" + postfix,
            sidebarRecommendedTabsLeftBtnImg: prefix + "recommended_tabs_left_btn_img",
            sidebarRecommendedTabsRightBtnBlock: prefix + "recommended_tabs_right_btn" + postfix,
            sidebarRecommendedTabsRightBtnImgBlock: prefix + "recommended_tabs_right_btn_img" + postfix,
            sidebarRecommendedTabsRightBtnImg: prefix + "recommended_tabs_right_btn_img",
            sidebarRecommendedTabsListItemBlock: prefix + "recommended_tabs_list_item" + postfix,
            sidebarRecommendedTabsListItemTextBlock: prefix + "recommended_tabs_list_item_text" + postfix,
            sidebarRecommendedTabsListItemText: prefix + "recommended_tabs_list_item_text",
            sidebarRecommendedProductsBlock: prefix + "recommended_products" + postfix,
            sidebarRecommendedProductsLeftBlock: prefix + "recommended_products_left" + postfix,
            sidebarRecommendedProductsListBlock: prefix + "recommended_products_list" + postfix,
            sidebarRecommendedProductsListMainBlock: prefix + "recommended_products_list_main" + postfix,
            sidebarRecommendedProductsRightBlock: prefix + "recommended_products_right" + postfix,
            sidebarRecommendedProductsLeftBtnBlock: prefix + "recommended_products_left_btn" + postfix,
            sidebarRecommendedProductsLeftBtnImgBlock: prefix + "recommended_products_left_btn_img" + postfix,
            sidebarRecommendedProductsLeftBtnImg: prefix + "recommended_products_left_btn_img",
            sidebarRecommendedProductsRightBtnBlock: prefix + "recommeded_products_right_btn" + postfix,
            sidebarRecommendedProductsRightBtnImgBlock: prefix + "recommended_products_right_btn_img" + postfix,
            sidebarRecommendedProductsRightBtnImg: prefix + "recommended_products_right_btn_img",
            sidebarCheckoutContinueBlock: prefix + "checkout_continue" + postfix,
            sidebarCheckoutContinueBtnBlock: prefix + "checkout_continue_btn" + postfix,
            sidebarCheckoutContinueBtnTextBlock: prefix + "checkout_continue_btn_text" + postfix,
            sidebarCheckoutContinueBtnText: prefix + "checkout_continue_btn_text",
            sidebarCheckoutContinueBtnImgBlock: prefix + "checkout_continue_btn_img" + postfix,
            sidebarCheckoutContinueBtnImg: prefix + "checkout_continue_btn_img",
            sidebarCheckoutBasketBlock: prefix + "checkout_basket" + postfix,
            sidebarCheckoutBasketBtnBlock: prefix + "checkout_basket_btn" + postfix,
            sidebarCheckoutBasketBtnTextBlock: prefix + "checkout_basket_btn_text" + postfix,
            sidebarCheckoutBasketBtnText: prefix + "checkout_basket_btn_text",
            sidebarCheckoutBasketBtnImgBlock: prefix + "checkout_basket_btn_img" + postfix,
            sidebarCheckoutBasketBtnImg: prefix + "checkout_basket_btn_img",

            productModuleBlock: prefix + "product_module" + postfix,
            productModalBlock: prefix + "product_modal" + postfix,
            productShowcaseBlock: prefix + "product_showcase" + postfix,
            productBlock: prefix + "product" + postfix,
            productHeaderBlock: prefix + "product_header" + postfix,
            productHeaderTitleBlock: prefix + "product_header_title" + postfix,
            productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
            productHeaderTitleText: prefix + "product_header_title_text",
            productHeaderImgBlock: prefix + "product_header_img" + postfix,
            productHeaderImg: prefix + "product_header_img",
            productPromoBlock: prefix + "product_promo" + postfix,
            productPromoMsgBlock: prefix + "product_promo_msg" + postfix,
            productPromoMsgText: prefix + "product_promo_msg_text",
            productImgBlock: prefix + "product_img" + postfix,
            productImgMainBlock: prefix + "product_img_main" + postfix,
            productImgMainImgBlock: prefix + "product_img_main_img" + postfix,
            productImgMainImg: prefix + "product_img_main_img",
            productImgMainZoomBlock: prefix + "product_img_main_zoom" + postfix,
            productImgMainZoomBtnBlock: prefix + "product_img_main_zoom_btn" + postfix,
            productImgMainZoomBtnImgBlock: prefix + "product_img_main_zoom_btn_img" + postfix,
            productImgMainZoomBtnImg: prefix + "product_img_main_zoom_btn_img",
            productImgMainZoomBtnTextBlock: prefix + "product_img_main_zoom_btn_text" + postfix,
            productImgMainZoomBtnText: prefix + "product_img_main_zoom_btn_text",
            productImgGalleryBlock: prefix + "product_img_gallery" + postfix,
            productImgGalleryHeaderBlock: prefix + "producy_img_gallery_header" + postfix,
            productImgGalleryHeaderTitleBlock: prefix + "product_img_gallery_header_title" + postfix,
            productImgGalleryHeaderTitleImgBlock: prefix + "product_img_gallery_header_title_img" + postfix,
            productImgGalleryHeaderTitleImg: prefix + "product_img_gallery_header_title_img",
            productImgGalleryHeaderTitleTextBlock: prefix + "product_img_gallery_header_title_text" + postfix,
            productImgGalleryHeaderTitleText: prefix + "product_img_gallery_header_title_text",
            productImgGalleryHeaderToggleBlock: prefix + "product_img_gallery_header_toggle" + postfix,
            productImgGalleryHeaderToggleImgBlock: prefix + "product_img_gallery_header_toggle_img" + postfix,
            productImgGalleryHeaderToggleImg: prefix + "product_img_gallery_header_toggle_img",
            productImgGalleryHeaderToggleTextBlock: prefix + "product_img_gallery_header_toggle_text" + postfix,
            productImgGalleryHeaderToggleText: prefix + "product_img_gallery_header_toggle_text",
            productImgGalleryLeftBlock: prefix + "product_img_gallery_left" + postfix,
            productImgGalleryLeftBtnBlock: prefix + "product_img_gallery_left_btn" + postfix,
            productImgGalleryLeftBtnImgBlock: prefix + "product_img_gallery_left_btn_img" + postfix,
            productImgGalleryLeftBtnImg: prefix + "product_img_gallery_left_btn_img",
            productImgGalleryLeftBtnTextBlock: prefix + "product_img_gallery_left_btn_text" + postfix,
            productImgGalleryLeftBtnText: prefix + "product_img_gallery_left_btn_text",
            productImgGalleryListBlock: prefix + "product_img_gallery_list" + postfix,
            productImgGalleryListItemBlock: prefix + "product_img_gallery_list_item" + postfix,
            productImgGalleryListItemImgBlock: prefix + "product_img_gallery_list_item_img" + postfix,
            productImgGalleryListItemImg: prefix + "product_img_gallery_list_item_img",
            productImgGalleryListItemTextBlock: prefix + "product_img_gallery_list_item_text" + postfix,
            productImgGalleryListItemText: prefix + "product_img_gallery_list_item_text",
            productImgGalleryRightBlock: prefix + "product_img_gallery_right" + postfix,
            productImgGalleryRightBtnBlock: prefix + "product_img_gallery_right_btn" + postfix,
            productImgGalleryRightBtnImgBlock: prefix + "product_img_gallery_right_btn_img" + postfix,
            productImgGalleryRightBtnImg: prefix + "product_img_gallery_right_btn_img",
            productImgGalleryRightBtnTextBlock: prefix + "product_img_gallery_right_btn_text" + postfix,
            productImgGalleryRightBtnText: prefix + "product_img_gallery_right_btn_text",
            productDescBlock: prefix + "product_desc" + postfix,
            productTitleBlock: prefix + "product_desc_title" + postfix,
            productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
            productTitleText: prefix + "product_desc_title_text",
            productRatingsBlock: prefix + "product_desc_ratings" + postfix,
            productInfoBlock: prefix + "product_desc_info" + postfix,
            productInfoImgBlock: prefix + "product_desc_info_img" + postfix,
            productInfoImg: prefix + "product_desc_info_img",
            productInfoTextBlock: prefix + "product_desc_info_text" + postfix,
            productInfoText: prefix + "product_desc_info_text",
            productInfoFullDescBlock: prefix + "product_Info_Full_desc_info" + postfix,
            productInfoFullDescText: prefix + "product_Info_Full_desc_info_text",
            productPriceBlock: prefix + "product_desc_price" + postfix,
            productPriceActiveBlock: prefix + "product_desc_price_active" + postfix,
            productPriceActiveTextBlock: prefix + "product_desc_price_active_text" + postfix,
            productPriceActiveText: prefix + "product_desc_price_active_text",
            productPriceActiveTextMsg: prefix + "product_desc_price_active_text_msg",
            productPriceRegularBlock: prefix + "product_desc_price_regular" + postfix,
            productPriceRegularTextBlock: prefix + "product_desc_price_regular_text" + postfix,
            productPriceRegularText: prefix + "product_desc_price_regular_text",
            productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
            productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
            productPriceWorthText: prefix + "product_desc_price_worth_text",
            productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
            productAttWrapperBlock: prefix + "product_desc_att_wrapper" + postfix,
            productAttWrapperInnerBlock: prefix + "product_desc_att_wrapper_inner" + postfix,
            productAttBlock: prefix + "product_desc_att" + postfix,
            productAttColorBlock: prefix + "product_desc_att_color" + postfix,
            productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
            productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
            productAttColorTitleText: prefix + "product_desc_att_color_title_text",
            productAttColorTitleTextSelected: prefix + "product_desc_att_color_title_text_selected",
            productAttColorListBlock: prefix + "product_desc_att_color_list" + postfix,
            productAttColorListItemBlock: prefix + "product_desc_att_color_list_item" + postfix,
            productAttColorListItemImgBlock: prefix + "product_desc_att_color_list_item_img" + postfix,
            productAttColorListItemImg: prefix + "product_desc_att_color_list_item_img",
            productAttColorListItemTextBlock: prefix + "product_desc_att_color_list_item_text" + postfix,
            productAttColorListItemText: prefix + "product_desc_att_color_list_item_text",
            productAttColorListItemImgHoverBlock: prefix + "product_desc_att_color_list_item_img_hover" + postfix,
            productAttColorListItemImgHover: prefix + "product_desc_att_color_list_item_img_hover",
            productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
            productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
            productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
            productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
            productAttSizeTitleTextSelected: prefix + "product_desc_att_size_title_text_selected",
            productAttSizeListBlock: prefix + "product_desc_att_size_list" + postfix,
            productAttSizeListItemBlock: prefix + "product_desc_att_size_list_item" + postfix,
            productAttSizeListItemImgBlock: prefix + "product_desc_att_size_list_item_img" + postfix,
            productAttSizeListItemImg: prefix + "product_desc_att_size_list_item_img",
            productAttSizeListItemTextBlock: prefix + "product_desc_att_size_list_item_text" + postfix,
            productAttSizeListItemText: prefix + "product_desc_att_size_list_item_text",
            productAttzeroBlock: prefix + "product_desc_att_zero" + postfix,
            productAttzeroTitleBlock: prefix + "product_desc_att_zero_title" + postfix,
            productAttzeroTitleTextBlock: prefix + "product_desc_att_zero_title_text" + postfix,
            productAttzeroTitleText: prefix + "product_desc_att_zero_title_text",
            productAttzeroTitleTextSelected: prefix + "product_desc_att_zero_title_text_selected",
            productAttzeroListBlock: prefix + "product_desc_att_zero_list" + postfix,
            productAttzeroListItemBlock: prefix + "product_desc_att_zero_list_item" + postfix,
            productAttzeroListItemImgBlock: prefix + "product_desc_att_zero_list_item_img" + postfix,
            productAttzeroListItemImg: prefix + "product_desc_att_zero_list_item_img",
            productAttzeroListItemTextBlock: prefix + "product_desc_att_zero_list_item_text" + postfix,
            productAttzeroListItemText: prefix + "product_desc_att_zero_list_item_text",
            productAttthirdBlock: prefix + "product_desc_att_third" + postfix,
            productAttthirdTitleBlock: prefix + "product_desc_att_third_title" + postfix,
            productAttthirdTitleTextBlock: prefix + "product_desc_att_third_title_text" + postfix,
            productAttthirdTitleText: prefix + "product_desc_att_third_title_text",
            productAttthirdTitleTextSelected: prefix + "product_desc_att_third_title_text_selected",
            productAttthirdListBlock: prefix + "product_desc_att_third_list" + postfix,
            productAttthirdListItemBlock: prefix + "product_desc_att_third_list_item" + postfix,
            productAttthirdListItemImgBlock: prefix + "product_desc_att_third_list_item_img" + postfix,
            productAttthirdListItemImg: prefix + "product_desc_att_third_list_item_img",
            productAttthirdListItemTextBlock: prefix + "product_desc_att_third_list_item_text" + postfix,
            productAttthirdListItemText: prefix + "product_desc_att_third_list_item_text",
            productAttfourthBlock: prefix + "product_desc_att_fourth" + postfix,
            productAttfourthTitleBlock: prefix + "product_desc_att_fourth_title" + postfix,
            productAttfourthTitleTextBlock: prefix + "product_desc_att_fourth_title_text" + postfix,
            productAttfourthTitleText: prefix + "product_desc_att_fourth_title_text",
            productAttfourthTitleTextSelected: prefix + "product_desc_att_fourth_title_text_selected",
            productAttfourthListBlock: prefix + "product_desc_att_fourth_list" + postfix,
            productAttfourthListItemBlock: prefix + "product_desc_att_fourth_list_item" + postfix,
            productAttfourthListItemImgBlock: prefix + "product_desc_att_fourth_list_item_img" + postfix,
            productAttfourthListItemImg: prefix + "product_desc_att_fourth_list_item_img",
            productAttfourthListItemTextBlock: prefix + "product_desc_att_fourth_list_item_text" + postfix,
            productAttfourthListItemText: prefix + "product_desc_att_fourth_list_item_text",
            productAttEditBlock: prefix + "product_desc_att_edit" + postfix,
            productAttEditTextBlock: prefix + "product_desc_att_edit_text" + postfix,
            productAttEditText: prefix + "product_desc_att_edit_text",
            productAttEditImgBlock: prefix + "product_desc_att_edit_img" + postfix,
            productAttEditImg: prefix + "product_desc_att_edit_img",
            productShadeMobileBlock: prefix + "product_shade_mobile" + postfix,
            productSelectedBlock: prefix + "selected_prod_color_list" + postfix,
            productSelecteTitleBlock: prefix + "selected_prod_color_title" + postfix,
            productSelectedTitleText: prefix + "selected_prod_color_title_text",
            selectedColorWrapperBlock: prefix + "selected_color_wrapper" + postfix,
            selectedColorBlock: prefix + "selected_color" + postfix,
            selectedColorDescBlock: prefix + "selected_color_desc" + postfix,
            selectedColorImgBlock: prefix + "selected_color_img" + postfix,
            selectedColorNameBlock: prefix + "selected_color_name" + postfix,
            selectedColorNameText: prefix + "selected_color_name_text",
            selectedColorQtyBlock: prefix + "selected_color_qty" + postfix,
            selectedColorQtyDownBlock: prefix + "selected_color_qty_down" + postfix,
            selectedColorQtyDownBtn: prefix + "selected_color_qty_down_btn",
            selectedColorQtyInputTextBlock: prefix + "selected_color_qty_input_text" + postfix,
            selectedColorQtyUpBlock: prefix + "selected_color_qty_up" + postfix,
            selectedColorQtyUpBtn: prefix + "selected_color_qty_up_btn",
            selectedColorRemoveBlock: prefix + "selected_color_remove" + postfix,
            selectedColorQtyRemoveBtn: prefix + "selected_color_remove_btn",
            productPackOfBlock: prefix + "product_desc_pack_of" + postfix,
            productPackOfLeftBlock: prefix + "product_desc_pack_of_left" + postfix,
            productPackOfListBlock: prefix + "product_desc_pack_of_list" + postfix,
            productPackOfRightBlock: prefix + "product_desc_pack_of_right" + postfix,
            productPackOfLeftBtnBlock: prefix + "product_desc_pack_of_left_btn" + postfix,
            productPackOfLeftBtnImgBlock: prefix + "product_desc_pack_of_left_btn_img" + postfix,
            productPackOfLeftBtnImg: prefix + "product_desc_pack_of_left_btn_img",
            productPackOfRightBtnBlock: prefix + "product_desc_pack_of_right_btn" + postfix,
            productPackOfRightBtnImgBlock: prefix + "product_desc_pack_of_right_btn_img" + postfix,
            productPackOfRightBtnImg: prefix + "product_desc_pack_of_right_btn_img",
            productPackOfItemBlock: prefix + "product_desc_pack_of_item" + postfix,
            productPackOfItemTitleBlock: prefix + "product_desc_pack_of_item_title" + postfix,
            productPackOfItemTitleTextBlock: prefix + "product_desc_pack_of_item_title_text" + postfix,
            productPackOfItemTitleText: prefix + "product_desc_pack_of_item_title_text",
            productPackOfItemImgBlock: prefix + "product_desc_pack_of_item_img" + postfix,
            productPackOfItemImg: prefix + "product_desc_pack_of_item_img",
            productPackOfItemQuantityBlock: prefix + "product_desc_pack_of_item_quantity" + postfix,
            productPackOfItemQuantityTextBlock: prefix + "product_desc_pack_of_item_quantity_text" + postfix,
            productPackOfItemQuantityText: prefix + "product_desc_pack_of_item_quantity_text",
            productPackOfItemPriceBlock: prefix + "product_desc_pack_of_item_price" + postfix,
            productPackOfItemPriceRegularBlock: prefix + "product_desc_pack_of_item_price_regular" + postfix,
            productPackOfItemPriceRegularTextBlock: prefix + "product_desc_pack_of_item_price_regular_text" + postfix,
            productPackOfItemPriceRegularText: prefix + "product_desc_pack_of_item_price_regular_text",
            productPackOfItemPriceActiveBlock: prefix + "product_desc_pack_of_item_price_active" + postfix,
            productPackOfItemPriceActiveTextBlock: prefix + "product_desc_pack_of_item_price_active_text" + postfix,
            productPackOfItemPriceActiveText: prefix + "product_desc_pack_of_item_price_active_text",
            productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
            productQtyBlock: prefix + "product_desc_qty" + postfix,
            productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
            productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
            productQtyDownBtn: prefix + "product_desc_qty_down_btn",
            productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
            productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
            productQtyInputText: prefix + "product_desc_qty_input_text",
            productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
            productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
            productQtyUpBtn: prefix + "product_desc_qty_up_btn",
            productAddBlock: prefix + "product_desc_add" + postfix,
            productAddTextBlock: prefix + "product_desc_add_text" + postfix,
            productAddText: prefix + "product_desc_add_text",
            productAddImgBlock: prefix + "product_desc_add_img" + postfix,
            productAddImg: prefix + "product_desc_add_img",
            productAddErrText: prefix + "product_desc_add_err_text" + postfix,
        },
        dom: {
            sidebarOuterBlock: ["sidebarModalBlock"],
            sidebarModalBlock: ["sidebarCartAddedBlock", "sidebarHeaderBlock", "sidebarRecommendedBlock", "sidebarCheckoutBlock"],
            sidebarHeaderBlock: ["sidebarHeaderContinueBlock", "sidebarHeaderTitleBlock", "sidebarHeaderItemBlock"],
            sidebarHeaderContinueBlock: ["sidebarHeaderContinueImgBlock", "sidebarHeaderContinueTextBlock"],
            sidebarHeaderContinueImgBlock: ["sidebarHeaderContinueImg"],
            sidebarHeaderContinueTextBlock: ["sidebarHeaderContinueText"],
            sidebarHeaderTitleBlock: ["sidebarHeaderTitleTextBlock"],
            sidebarHeaderTitleTextBlock: ["sidebarHeaderTitleText"],
            sidebarHeaderItemBlock: ["sidebarHeaderItemCountBlock"],
            sidebarHeaderItemCountBlock: ["sidebarHeaderItemCountTitleBlock", "sidebarHeaderItemCountFigureBlock", "sidebarCartAddedProductDescSubTotalPriceBlock"],
            sidebarHeaderItemCountTitleBlock: ["sidebarHeaderItemCountTitleTextBlock"],
            sidebarHeaderItemCountTitleTextBlock: ["sidebarHeaderItemCountTitleText"],
            sidebarHeaderItemCountFigureBlock: ["sidebarHeaderItemCountFigureTextBlock"],
            sidebarHeaderItemCountFigureTextBlock: ["sidebarHeaderItemCountFigureText"],

            sidebarCartAddedProductDescSubTotalPriceBlock: ["sidebarCartAddedProductDescSubTotalPriceRegularBlock", "sidebarCartAddedProductDescSubTotalActiveBlock"],
            sidebarCartAddedProductDescSubTotalActiveBlock: ["sidebarCartAddedProductDescSubTotalActiveTextBlock"],
            sidebarCartAddedProductDescSubTotalActiveTextBlock: ["sidebarCartAddedProductDescSubTotalActiveText", "sidebarCartAddedProductDescPriceActiveTextMsg"],
            sidebarCartAddedProductDescSubTotalPriceRegularBlock: ["sidebarCartAddedProductDescSubTotalRegularTextBlock"],
            sidebarCartAddedProductDescSubTotalRegularTextBlock: ["sidebarCartAddedProductDescSubTotalRegularText"],

            sidebarCartAddedBlock: ["sidebarCartAddedLeftBlock", "sidebarCartAddedListBlock", "sidebarCartAddedRightBlock"],
            sidebarCartAddedLeftBlock: ["sidebarCartAddedLeftBtnBlock"],
            sidebarCartAddedLeftBtnBlock: ["sidebarCartAddedLeftBtnImgBlock"],
            sidebarCartAddedLeftBtnImgBlock: ["sidebarCartAddedLeftBtnImg"],
            sidebarCartAddedRightBlock: ["sidebarCartAddedRightBtnBlock"],
            sidebarCartAddedRightBtnBlock: ["sidebarCartAddedRightBtnImgBlock"],
            sidebarCartAddedRightBtnImgBlock: ["sidebarCartAddedRightBtnImg"],
            sidebarCartAddedListBlock: ["sidebarCartAddedProductBlock"],
            sidebarCartAddedProductBlock: ["sidebarCartAddedProductImgBlock", "sidebarCartAddedProductDescBlock"],
            sidebarCartAddedProductImgBlock: ["sidebarCartAddedProductImg"],
            sidebarCartAddedProductDescBlock: ["sidebarCartAddedProductDescTitleBlock", "sidebarCartAddedProductDescAttBlock", "sidebarCartAddedProductDescPriceBlock"],
            sidebarCartAddedProductDescTitleBlock: ["sidebarCartAddedProductDescTitleTextBlock"],
            sidebarCartAddedProductDescTitleTextBlock: ["sidebarCartAddedProductDescTitleText"],
            sidebarCartAddedProductDescPriceBlock: ["sidebarCartAddedProductDescPriceActiveBlock", "sidebarCartAddedProductDescPriceRegularBlock"],
            sidebarCartAddedProductDescPriceActiveBlock: ["sidebarCartAddedProductDescPriceActiveTextBlock"],
            sidebarCartAddedProductDescPriceActiveTextBlock: ["sidebarCartAddedProductDescPriceActiveText", "sidebarCartAddedProductDescPriceActiveTextMsg"],
            sidebarCartAddedProductDescPriceRegularBlock: ["sidebarCartAddedProductDescPriceRegularTextBlock"],
            sidebarCartAddedProductDescPriceRegularTextBlock: ["sidebarCartAddedProductDescPriceRegularText"],

            sidebarCartAddedProductDescAttBlock: ["sidebarCartAddedProductDescAttColorBlock", "sidebarCartAddedProductDescAttSizeBlock"],
            sidebarCartAddedProductDescAttColorBlock: ["sidebarCartAddedProductDescAttColorTextBlock"],
            sidebarCartAddedProductDescAttColorTextBlock: ["sidebarCartAddedProductDescAttColorText"],
            sidebarCartAddedProductDescAttSizeBlock: ["sidebarCartAddedProductDescAttSizeTextBlock"],
            sidebarCartAddedProductDescAttSizeTextBlock: ["sidebarCartAddedProductDescAttSizeText"],

            sidebarRecommendedBlock: ["sidebarRecommendedTitleBlock", "sidebarRecommendedTabsBlock", "sidebarRecommendedProductsBlock"],
            sidebarRecommendedTitleBlock: ["sidebarRecommendedTitleTextBlock", "sidebarRecommendedTitleImgBlock"],
            sidebarRecommendedTitleTextBlock: ["sidebarRecommendedTitleText"],
            sidebarRecommendedTitleImgBlock: ["sidebarRecommendedTitleImg"],
            sidebarRecommendedTabsBlock: ["sidebarRecommendedTabsTitleBlock", "sidebarRecommendedTabsLeftBlock", "sidebarRecommendedTabsListBlock", "sidebarRecommendedTabsRightBlock"],
            sidebarRecommendedTabsTitleBlock: ["sidebarRecommendedTabsTitleTextBlock"],
            sidebarRecommendedTabsTitleTextBlock: ["sidebarRecommendedTabsTitleText"],
            sidebarRecommendedTabsLeftBlock: ["sidebarRecommendedTabsLeftBtnBlock"],
            sidebarRecommendedTabsLeftBtnBlock: ["sidebarRecommendedTabsLeftBtnImgBlock"],
            sidebarRecommendedTabsLeftBtnImgBlock: ["sidebarRecommendedTabsLeftBtnImg"],
            sidebarRecommendedTabsRightBlock: ["sidebarRecommendedTabsRightBtnBlock"],
            sidebarRecommendedTabsRightBtnBlock: ["sidebarRecommendedTabsRightBtnImgBlock"],
            sidebarRecommendedTabsRightBtnImgBlock: ["sidebarRecommendedTabsRightBtnImg"],
            sidebarRecommendedTabsListBlock: ["sidebarRecommendedTabsListItemBlock"],
            sidebarRecommendedTabsListItemBlock: ["sidebarRecommendedTabsListItemTextBlock"],
            sidebarRecommendedTabsListItemTextBlock: ["sidebarRecommendedTabsListItemText"],
            sidebarRecommendedProductsBlock: ["sidebarRecommendedProductsLeftBlock", "sidebarRecommendedProductsListMainBlock", "sidebarRecommendedProductsRightBlock"],
            sidebarRecommendedProductsLeftBlock: ["sidebarRecommendedProductsLeftBtnBlock"],
            sidebarRecommendedProductsLeftBtnBlock: ["sidebarRecommendedProductsLeftBtnImgBlock"],
            sidebarRecommendedProductsLeftBtnImgBlock: ["sidebarRecommendedProductsLeftBtnImg"],
            sidebarRecommendedProductsRightBlock: ["sidebarRecommendedProductsRightBtnBlock"],
            sidebarRecommendedProductsRightBtnBlock: ["sidebarRecommendedProductsRightBtnImgBlock"],
            sidebarRecommendedProductsRightBtnImgBlock: ["sidebarRecommendedProductsRightBtnImg"],
            sidebarRecommendedProductsListMainBlock: ["sidebarRecommendedProductsListBlock"],
            sidebarRecommendedProductsListBlock: ["productModuleBlock"],
            sidebarCheckoutBlock: ["sidebarCheckoutContinueBlock", "sidebarCheckoutBasketBlock"],
            sidebarCheckoutContinueBlock: ["sidebarCheckoutContinueBtnBlock"],
            sidebarCheckoutContinueBtnBlock: ["sidebarCheckoutContinueBtnImgBlock", "sidebarCheckoutContinueBtnTextBlock"],
            sidebarCheckoutContinueBtnImgBlock: ["sidebarCheckoutContinueBtnImg"],
            sidebarCheckoutContinueBtnTextBlock: ["sidebarCheckoutContinueBtnText"],
            sidebarCheckoutBasketBlock: ["sidebarCheckoutBasketBtnBlock"],
            sidebarCheckoutBasketBtnBlock: ["sidebarCheckoutBasketBtnImgBlock", "sidebarCheckoutBasketBtnTextBlock"],
            sidebarCheckoutBasketBtnImgBlock: ["sidebarCheckoutBasketBtnImg"],
            sidebarCheckoutBasketBtnTextBlock: ["sidebarCheckoutBasketBtnText"],

            productModuleBlock: ["productShowcaseBlock", "productModalBlock"],
            productShowcaseBlock: ["productBlock"],
            productModalBlock: ["productBlock"],
            productBlock: ["productHeaderBlock", "productImgBlock", "productDescBlock"],
            productHeaderBlock: ["productHeaderTitleBlock", "productHeaderImgBlock"],
            productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
            productHeaderTitleTextBlock: ["productHeaderTitleText"],
            productHeaderImgBlock: ["productHeaderImg"],
            productPromoBlock: prefix + "product_promo" + postfix,
            productPromoMsgBlock: prefix + "product_promo_msg" + postfix,
            productPromoMsgText: prefix + "product_promo_msg_text",
            productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
            productImgMainBlock: ["productImgMainImgBlock", "productImgMainZoomBlock"],
            productImgMainImgBlock: ["productImgMainImg"],
            productImgMainZoomBlock: ["productImgMainZoomBtnBlock"],
            productImgMainZoomBtnBlock: ["productImgMainZoomBtnImgBlock", "productImgMainZoomBtnTextBlock"],
            productImgMainZoomBtnImgBlock: ["productImgMainZoomBtnImg"],
            productImgMainZoomBtnTextBlock: ["productImgMainZoomBtnText"],
            productImgGalleryBlock: ["productImgGalleryHeaderBlock", "productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryHeaderBlock: ["productImgGalleryHeaderTitleBlock", "productImgGalleryHeaderToggleBlock"],
            productImgGalleryHeaderTitleBlock: ["productImgGalleryHeaderTitleImgBlock", "productImgGalleryHeaderTitleTextBlock"],
            productImgGalleryHeaderTitleImgBlock: ["productImgGalleryHeaderTitleImg"],
            productImgGalleryHeaderTitleTextBlock: ["productImgGalleryHeaderTitleText"],
            productImgGalleryHeaderToggleBlock: ["productImgGalleryHeaderToggleImgBlock", "productImgGalleryHeaderToggleTextBlock"],
            productImgGalleryHeaderToggleImgBlock: ["productImgGalleryHeaderToggleImg"],
            productImgGalleryHeaderToggleTextBlock: ["productImgGalleryHeaderToggleText"],
            productImgGalleryBlock: ["productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryLeftBlock: ["productImgGalleryLeftBtnBlock"],
            productImgGalleryLeftBtnBlock: ["productImgGalleryLeftBtnImgBlock", "productImgGalleryLeftBtnTextBlock"],
            productImgGalleryLeftBtnImgBlock: ["productImgGalleryLeftBtnImg"],
            productImgGalleryLeftBtnTextBlock: ["productImgGalleryLeftBtnText"],
            productImgGalleryListBlock: ["productImgGalleryListItemBlock"],
            productImgGalleryListItemBlock: ["productImgGalleryListItemImgBlock", "productImgGalleryListItemTextBlock"],
            productImgGalleryListItemImgBlock: ["productImgGalleryListItemImg"],
            productImgGalleryListItemTextBlock: ["productImgGalleryListItemText"],
            productImgGalleryRightBlock: ["productImgGalleryRightBtnBlock"],
            productImgGalleryRightBtnBlock: ["productImgGalleryRightBtnImgBlock", "productImgGalleryRightBtnTextBlock"],
            productImgGalleryRightBtnImgBlock: ["productImgGalleryRightBtnImg"],
            productImgGalleryRightBtnTextBlock: ["productImgGalleryRightBtnText"],
            productDescBlock: ["productTitleBlock", "productRatingsBlock", "productPriceBlock", "productInfoBlock", "productAttWrapperBlock", "productShadeMobileBlock", "productPackOfBlock", "productQtyAddBtnBlock"],
            productTitleBlock: ["productTitleTextBlock"],
            productTitleTextBlock: ["productTitleText"],
            productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock", "productInfoFullDescBlock"],
            productInfoImgBlock: ["productInfoImg"],
            productInfoTextBlock: ["productInfoText"],
            productInfoFullDescBlock: ["productInfoFullDescText"],
            productPriceBlock: ["productPriceRegularBlock", "productPriceActiveBlock", "productPriceWorthBlock"],
            productPriceActiveBlock: ["productPriceActiveTextBlock"],
            productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
            productPriceRegularBlock: ["productPriceRegularTextBlock"],
            productPriceRegularTextBlock: ["productPriceRegularText"],
            productPriceWorthBlock: ["productPriceWorthTextBlock"],
            productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],
            productAttWrapperBlock: ["productAttWrapperInnerBlock"],
            productAttWrapperInnerBlock: ["productAttBlock", "productSelectedBlock"],
            productAttBlock: ["productAddErrText", "productAttzeroBlock", "productAttSizeBlock", "productAttColorBlock", "productAttthirdBlock", "productAttfourthBlock", "productAttEditBlock"],
            productAttColorBlock: ["productAttColorTitleBlock", "productAttColorListBlock"],
            productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
            productAttColorTitleTextBlock: ["productAttColorTitleText", "productAttColorTitleTextSelected"],
            productAttColorListBlock: ["productAttColorListItemBlock"],
            productAttColorListItemBlock: ["productAttColorListItemImgBlock", "productAttColorListItemTextBlock", "productAttColorListItemImgHoverBlock"],
            productAttColorListItemImgBlock: ["productAttColorListItemImg"],
            productAttColorListItemTextBlock: ["productAttColorListItemText"],
            productAttColorListItemImgHoverBlock: ["productAttColorListItemImgHover"],

            productAttzeroBlock: ["productAttzeroTitleBlock", "productAttzeroListBlock"],
            productAttzeroTitleBlock: ["productAttzeroTitleTextBlock"],
            productAttzeroTitleTextBlock: ["productAttzeroTitleText", "productAttzeroTitleTextSelected"],
            productAttzeroListBlock: ["productAttzeroListItemBlock"],
            productAttzeroListItemBlock: ["productAttzeroListItemImgBlock", "productAttzeroListItemTextBlock"],
            productAttzeroListItemImgBlock: ["productAttzeroListItemImg"],
            productAttzeroListItemTextBlock: ["productAttzeroListItemText"],

            productAttthirdBlock: ["productAttthirdTitleBlock", "productAttthirdListBlock"],
            productAttthirdTitleBlock: ["productAttthirdTitleTextBlock"],
            productAttthirdTitleTextBlock: ["productAttthirdTitleText", "productAttthirdTitleTextSelected"],
            productAttthirdListBlock: ["productAttthirdListItemBlock"],
            productAttthirdListItemBlock: ["productAttthirdListItemImgBlock", "productAttthirdListItemTextBlock"],
            productAttthirdListItemImgBlock: ["productAttthirdListItemImg"],
            productAttthirdListItemTextBlock: ["productAttthirdListItemText"],

            productAttfourthBlock: ["productAttfourthTitleBlock", "productAttfourthListBlock"],
            productAttfourthTitleBlock: ["productAttfourthTitleTextBlock"],
            productAttfourthTitleTextBlock: ["productAttfourthTitleText", "productAttfourthTitleTextSelected"],
            productAttfourthListBlock: ["productAttfourthListItemBlock"],
            productAttfourthListItemBlock: ["productAttfourthListItemImgBlock", "productAttfourthListItemTextBlock"],
            productAttfourthListItemImgBlock: ["productAttfourthListItemImg"],
            productAttfourthListItemTextBlock: ["productAttfourthListItemText"],

            productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeListBlock"],
            productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
            productAttSizeTitleTextBlock: ["productAttSizeTitleText", "productAttSizeTitleTextSelected"],
            productAttSizeListBlock: ["productAttSizeListItemBlock"],
            productAttSizeListItemBlock: ["productAttSizeListItemImgBlock", "productAttSizeListItemTextBlock"],
            productAttSizeListItemImgBlock: ["productAttSizeListItemImg"],
            productAttSizeListItemTextBlock: ["productAttSizeListItemText"],
            productAttEditBlock: ["productAttEditText"],
            productSelectedBlock: ["productSelecteTitleBlock", "selectedColorWrapperBlock"],
            productSelecteTitleBlock: ["productSelectedTitleText"],
            // selectedColorWrapperBlock: ["selectedColorBlock"],
            selectedColorBlock: ["selectedColorDescBlock", "selectedColorQtyBlock", "selectedColorRemoveBlock"],
            selectedColorDescBlock: ["selectedColorImgBlock", "selectedColorNameBlock"],
            selectedColorNameBlock: ["selectedColorNameText"],
            selectedColorQtyBlock: ["selectedColorQtyDownBlock", "selectedColorQtyInputTextBlock", "selectedColorQtyUpBlock"],
            selectedColorQtyDownBlock: ["selectedColorQtyDownBtn"],
            selectedColorQtyUpBlock: ["selectedColorQtyUpBtn"],
            selectedColorRemoveBlock: ["selectedColorQtyRemoveBtn"],
            productPackOfBlock: ["productPackOfLeftBlock", "productPackOfListBlock", "productPackOfRightBlock"],
            productPackOfLeftBlock: ["productPackOfLeftBtnBlock"],
            productPackOfLeftBtnBlock: ["productPackOfLeftBtnImgBlock"],
            productPackOfLeftBtnImgBlock: ["productPackOfLeftBtnImg"],
            productPackOfRightBlock: ["productPackOfRightBtnBlock"],
            productPackOfRightBtnBlock: ["productPackOfRightBtnImgBlock"],
            productPackOfRightBtnImgBlock: ["productPackOfRightBtnImg"],
            productPackOfListBlock: ["productPackOfItemBlock"],
            productPackOfItemBlock: ["productPackOfItemImgBlock", "productPackOfItemTitleBlock", "productPackOfItemQuantityBlock", "productPackOfItemPriceBlock"],
            productPackOfItemImgBlock: ["productPackOfItemImg"],
            productPackOfItemTitleBlock: ["productPackOfItemTitleTextBlock"],
            productPackOfItemTitleTextBlock: ["productPackOfItemTitleText"],
            productPackOfItemQuantityBlock: ["productPackOfItemQuantityTextBlock"],
            productPackOfItemQuantityTextBlock: ["productPackOfItemQuantityText"],
            productPackOfItemPriceBlock: ["productPackOfItemPriceActiveBlock", "productPackOfItemPriceRegularBlock"],
            productPackOfItemPriceActiveBlock: ["productPackOfItemPriceActiveTextBlock"],
            productPackOfItemPriceActiveTextBlock: ["productPackOfItemPriceActiveText"],
            productPackOfItemPriceRegularBlock: ["productPackOfItemPriceRegularTextBlock"],
            productPackOfItemPriceRegularTextBlock: ["productPackOfItemPriceRegularText"],
            productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock"],
            productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
            productQtyDownBlock: ["productQtyDownBtnBlock"],
            productQtyDownBtnBlock: ["productQtyDownBtn"],
            productQtyUpBlock: ["productQtyUpBtnBlock"],
            productQtyUpBtnBlock: ["productQtyUpBtn"],
            productQtyInputBlock: ["productQtyInputTextBlock"],
            productQtyInputTextBlock: ["productQtyInputText"],
            productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
            productAddTextBlock: ["productAddText"],
            productAddImgBlock: ["productAddImg"],
        }
    },
    am: {
        className: {
            afModalBlock: prefix + "af" + postfix,
            afModalTitleBlock: prefix + "af_title" + postfix,
            afModalTitleTextBlock: prefix + "af_title_text" + postfix,
            afModalTitleText: prefix + "af_title_text",
            afModalBundlesBlock: prefix + "af_bundles" + postfix,
            afLeftBlock: prefix + "af_left" + postfix,
            afLeftBtnBlock: prefix + "af_left_btn" + postfix,
            afLeftBtnImgBlock: prefix + "af_left_btn_img" + postfix,
            afLeftBtnImg: prefix + "af_left_btn_img",
            afProductListMainBlock: prefix + "af_product-list-main" + postfix,
            afProductListBlock: prefix + "af_product-list" + postfix,
            afRightBlock: prefix + "af_right" + postfix,
            afRightBtnBlock: prefix + "af_right_btn" + postfix,
            afRightBtnImgBlock: prefix + "af_right_btn_img" + postfix,
            afRightBtnImg: prefix + "af_right_btn_img",

            productModuleBlock: prefix + "product_module" + postfix,
            productModalBlock: prefix + "product_modal" + postfix,
            productShowcaseBlock: prefix + "product_showcase" + postfix,
            productBlock: prefix + "product" + postfix,
            productHeaderBlock: prefix + "product_header" + postfix,
            productHeaderTitleBlock: prefix + "product_header_title" + postfix,
            productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
            productHeaderTitleText: prefix + "product_header_title_text",
            productHeaderImgBlock: prefix + "product_header_img" + postfix,
            productHeaderImg: prefix + "product_header_img",
            productPromoBlock: prefix + "product_promo" + postfix,
            productPromoMsgBlock: prefix + "product_promo_msg" + postfix,
            productPromoMsgText: prefix + "product_promo_msg_text",
            productImgBlock: prefix + "product_img" + postfix,
            productImgMainBlock: prefix + "product_img_main" + postfix,
            productImgMainImgBlock: prefix + "product_img_main_img" + postfix,
            productImgMainImg: prefix + "product_img_main_img",
            productImgMainZoomBlock: prefix + "product_img_main_zoom" + postfix,
            productImgMainZoomBtnBlock: prefix + "product_img_main_zoom_btn" + postfix,
            productImgMainZoomBtnImgBlock: prefix + "product_img_main_zoom_btn_img" + postfix,
            productImgMainZoomBtnImg: prefix + "product_img_main_zoom_btn_img",
            productImgMainZoomBtnTextBlock: prefix + "product_img_main_zoom_btn_text" + postfix,
            productImgMainZoomBtnText: prefix + "product_img_main_zoom_btn_text",
            productImgGalleryBlock: prefix + "product_img_gallery" + postfix,
            productImgGalleryHeaderBlock: prefix + "producy_img_gallery_header" + postfix,
            productImgGalleryHeaderTitleBlock: prefix + "product_img_gallery_header_title" + postfix,
            productImgGalleryHeaderTitleImgBlock: prefix + "product_img_gallery_header_title_img" + postfix,
            productImgGalleryHeaderTitleImg: prefix + "product_img_gallery_header_title_img",
            productImgGalleryHeaderTitleTextBlock: prefix + "product_img_gallery_header_title_text" + postfix,
            productImgGalleryHeaderTitleText: prefix + "product_img_gallery_header_title_text",
            productImgGalleryHeaderToggleBlock: prefix + "product_img_gallery_header_toggle" + postfix,
            productImgGalleryHeaderToggleImgBlock: prefix + "product_img_gallery_header_toggle_img" + postfix,
            productImgGalleryHeaderToggleImg: prefix + "product_img_gallery_header_toggle_img",
            productImgGalleryHeaderToggleTextBlock: prefix + "product_img_gallery_header_toggle_text" + postfix,
            productImgGalleryHeaderToggleText: prefix + "product_img_gallery_header_toggle_text",
            productImgGalleryLeftBlock: prefix + "product_img_gallery_left" + postfix,
            productImgGalleryLeftBtnBlock: prefix + "product_img_gallery_left_btn" + postfix,
            productImgGalleryLeftBtnImgBlock: prefix + "product_img_gallery_left_btn_img" + postfix,
            productImgGalleryLeftBtnImg: prefix + "product_img_gallery_left_btn_img",
            productImgGalleryLeftBtnTextBlock: prefix + "product_img_gallery_left_btn_text" + postfix,
            productImgGalleryLeftBtnText: prefix + "product_img_gallery_left_btn_text",
            productImgGalleryListBlock: prefix + "product_img_gallery_list" + postfix,
            productImgGalleryListItemBlock: prefix + "product_img_gallery_list_item" + postfix,
            productImgGalleryListItemImgBlock: prefix + "product_img_gallery_list_item_img" + postfix,
            productImgGalleryListItemImg: prefix + "product_img_gallery_list_item_img",
            productImgGalleryListItemTextBlock: prefix + "product_img_gallery_list_item_text" + postfix,
            productImgGalleryListItemText: prefix + "product_img_gallery_list_item_text",
            productImgGalleryRightBlock: prefix + "product_img_gallery_right" + postfix,
            productImgGalleryRightBtnBlock: prefix + "product_img_gallery_right_btn" + postfix,
            productImgGalleryRightBtnImgBlock: prefix + "product_img_gallery_right_btn_img" + postfix,
            productImgGalleryRightBtnImg: prefix + "product_img_gallery_right_btn_img",
            productImgGalleryRightBtnTextBlock: prefix + "product_img_gallery_right_btn_text" + postfix,
            productImgGalleryRightBtnText: prefix + "product_img_gallery_right_btn_text",
            productDescBlock: prefix + "product_desc" + postfix,
            productTitleBlock: prefix + "product_desc_title" + postfix,
            productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
            productTitleText: prefix + "product_desc_title_text",
            productRatingsBlock: prefix + "product_desc_ratings" + postfix,
            productInfoBlock: prefix + "product_desc_info" + postfix,
            productInfoImgBlock: prefix + "product_desc_info_img" + postfix,
            productInfoImg: prefix + "product_desc_info_img",
            productInfoTextBlock: prefix + "product_desc_info_text" + postfix,
            productInfoText: prefix + "product_desc_info_text",
            productInfoFullDescBlock: prefix + "product_Info_Full_desc_info" + postfix,
            productInfoFullDescText: prefix + "product_Info_Full_desc_info_text",
            productPriceBlock: prefix + "product_desc_price" + postfix,
            productPriceActiveBlock: prefix + "product_desc_price_active" + postfix,
            productPriceActiveTextBlock: prefix + "product_desc_price_active_text" + postfix,
            productPriceActiveText: prefix + "product_desc_price_active_text",
            productPriceActiveTextMsg: prefix + "product_desc_price_active_text_msg",
            productPriceRegularBlock: prefix + "product_desc_price_regular" + postfix,
            productPriceRegularTextBlock: prefix + "product_desc_price_regular_text" + postfix,
            productPriceRegularText: prefix + "product_desc_price_regular_text",
            productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
            productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
            productPriceWorthText: prefix + "product_desc_price_worth_text",
            productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
            productAttWrapperBlock: prefix + "product_desc_att_wrapper" + postfix,
            productAttWrapperInnerBlock: prefix + "product_desc_att_wrapper_inner" + postfix,
            productAttBlock: prefix + "product_desc_att" + postfix,
            productAttColorBlock: prefix + "product_desc_att_color" + postfix,
            productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
            productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
            productAttColorTitleText: prefix + "product_desc_att_color_title_text",
            productAttColorTitleTextSelected: prefix + "product_desc_att_color_title_text_selected",
            productAttColorListBlock: prefix + "product_desc_att_color_list" + postfix,
            productAttColorListItemBlock: prefix + "product_desc_att_color_list_item" + postfix,
            productAttColorListItemImgBlock: prefix + "product_desc_att_color_list_item_img" + postfix,
            productAttColorListItemImg: prefix + "product_desc_att_color_list_item_img",
            productAttColorListItemTextBlock: prefix + "product_desc_att_color_list_item_text" + postfix,
            productAttColorListItemText: prefix + "product_desc_att_color_list_item_text",
            productAttColorListItemImgHoverBlock: prefix + "product_desc_att_color_list_item_img_hover" + postfix,
            productAttColorListItemImgHover: prefix + "product_desc_att_color_list_item_img_hover",
            productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
            productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
            productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
            productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
            productAttSizeTitleTextSelected: prefix + "product_desc_att_size_title_text_selected",
            productAttSizeListBlock: prefix + "product_desc_att_size_list" + postfix,
            productAttSizeListItemBlock: prefix + "product_desc_att_size_list_item" + postfix,
            productAttSizeListItemImgBlock: prefix + "product_desc_att_size_list_item_img" + postfix,
            productAttSizeListItemImg: prefix + "product_desc_att_size_list_item_img",
            productAttSizeListItemTextBlock: prefix + "product_desc_att_size_list_item_text" + postfix,
            productAttSizeListItemText: prefix + "product_desc_att_size_list_item_text",
            productAttzeroBlock: prefix + "product_desc_att_zero" + postfix,
            productAttzeroTitleBlock: prefix + "product_desc_att_zero_title" + postfix,
            productAttzeroTitleTextBlock: prefix + "product_desc_att_zero_title_text" + postfix,
            productAttzeroTitleText: prefix + "product_desc_att_zero_title_text",
            productAttzeroTitleTextSelected: prefix + "product_desc_att_zero_title_text_selected",
            productAttzeroListBlock: prefix + "product_desc_att_zero_list" + postfix,
            productAttzeroListItemBlock: prefix + "product_desc_att_zero_list_item" + postfix,
            productAttzeroListItemImgBlock: prefix + "product_desc_att_zero_list_item_img" + postfix,
            productAttzeroListItemImg: prefix + "product_desc_att_zero_list_item_img",
            productAttzeroListItemTextBlock: prefix + "product_desc_att_zero_list_item_text" + postfix,
            productAttzeroListItemText: prefix + "product_desc_att_zero_list_item_text",
            productAttthirdBlock: prefix + "product_desc_att_third" + postfix,
            productAttthirdTitleBlock: prefix + "product_desc_att_third_title" + postfix,
            productAttthirdTitleTextBlock: prefix + "product_desc_att_third_title_text" + postfix,
            productAttthirdTitleText: prefix + "product_desc_att_third_title_text",
            productAttthirdTitleTextSelected: prefix + "product_desc_att_third_title_text_selected",
            productAttthirdListBlock: prefix + "product_desc_att_third_list" + postfix,
            productAttthirdListItemBlock: prefix + "product_desc_att_third_list_item" + postfix,
            productAttthirdListItemImgBlock: prefix + "product_desc_att_third_list_item_img" + postfix,
            productAttthirdListItemImg: prefix + "product_desc_att_third_list_item_img",
            productAttthirdListItemTextBlock: prefix + "product_desc_att_third_list_item_text" + postfix,
            productAttthirdListItemText: prefix + "product_desc_att_third_list_item_text",
            productAttfourthBlock: prefix + "product_desc_att_fourth" + postfix,
            productAttfourthTitleBlock: prefix + "product_desc_att_fourth_title" + postfix,
            productAttfourthTitleTextBlock: prefix + "product_desc_att_fourth_title_text" + postfix,
            productAttfourthTitleText: prefix + "product_desc_att_fourth_title_text",
            productAttfourthTitleTextSelected: prefix + "product_desc_att_fourth_title_text_selected",
            productAttfourthListBlock: prefix + "product_desc_att_fourth_list" + postfix,
            productAttfourthListItemBlock: prefix + "product_desc_att_fourth_list_item" + postfix,
            productAttfourthListItemImgBlock: prefix + "product_desc_att_fourth_list_item_img" + postfix,
            productAttfourthListItemImg: prefix + "product_desc_att_fourth_list_item_img",
            productAttfourthListItemTextBlock: prefix + "product_desc_att_fourth_list_item_text" + postfix,
            productAttfourthListItemText: prefix + "product_desc_att_fourth_list_item_text",
            productAttEditText: prefix + "product_desc_att_edit_text",
            productAttEditBlock: prefix + "product_desc_att_edit" + postfix,
            productShadeMobileBlock: prefix + "product_shade_mobile" + postfix,
            productSelectedBlock: prefix + "selected_prod_color_list" + postfix,
            productSelecteTitleBlock: prefix + "selected_prod_color_title" + postfix,
            productSelectedTitleText: prefix + "selected_prod_color_title_text",
            selectedColorWrapperBlock: prefix + "selected_color_wrapper" + postfix,
            selectedColorBlock: prefix + "selected_color" + postfix,
            selectedColorDescBlock: prefix + "selected_color_desc" + postfix,
            selectedColorImgBlock: prefix + "selected_color_img" + postfix,
            selectedColorNameBlock: prefix + "selected_color_name" + postfix,
            selectedColorNameText: prefix + "selected_color_name_text",
            selectedColorQtyBlock: prefix + "selected_color_qty" + postfix,
            selectedColorQtyDownBlock: prefix + "selected_color_qty_down" + postfix,
            selectedColorQtyDownBtn: prefix + "selected_color_qty_down_btn",
            selectedColorQtyInputTextBlock: prefix + "selected_color_qty_input_text" + postfix,
            selectedColorQtyUpBlock: prefix + "selected_color_qty_up" + postfix,
            selectedColorQtyUpBtn: prefix + "selected_color_qty_up_btn",
            selectedColorRemoveBlock: prefix + "selected_color_remove" + postfix,
            selectedColorQtyRemoveBtn: prefix + "selected_color_remove_btn",
            productPackOfBlock: prefix + "product_desc_pack_of" + postfix,
            productPackOfLeftBlock: prefix + "product_desc_pack_of_left" + postfix,
            productPackOfListBlock: prefix + "product_desc_pack_of_list" + postfix,
            productPackOfRightBlock: prefix + "product_desc_pack_of_right" + postfix,
            productPackOfLeftBtnBlock: prefix + "product_desc_pack_of_left_btn" + postfix,
            productPackOfLeftBtnImgBlock: prefix + "product_desc_pack_of_left_btn_img" + postfix,
            productPackOfLeftBtnImg: prefix + "product_desc_pack_of_left_btn_img",
            productPackOfRightBtnBlock: prefix + "product_desc_pack_of_right_btn" + postfix,
            productPackOfRightBtnImgBlock: prefix + "product_desc_pack_of_right_btn_img" + postfix,
            productPackOfRightBtnImg: prefix + "product_desc_pack_of_right_btn_img",
            productPackOfItemBlock: prefix + "product_desc_pack_of_item" + postfix,
            productPackOfItemTitleBlock: prefix + "product_desc_pack_of_item_title" + postfix,
            productPackOfItemTitleTextBlock: prefix + "product_desc_pack_of_item_title_text" + postfix,
            productPackOfItemTitleText: prefix + "product_desc_pack_of_item_title_text",
            productPackOfItemImgBlock: prefix + "product_desc_pack_of_item_img" + postfix,
            productPackOfItemImg: prefix + "product_desc_pack_of_item_img",
            productPackOfItemQuantityBlock: prefix + "product_desc_pack_of_item_quantity" + postfix,
            productPackOfItemQuantityTextBlock: prefix + "product_desc_pack_of_item_quantity_text" + postfix,
            productPackOfItemQuantityText: prefix + "product_desc_pack_of_item_quantity_text",
            productPackOfItemPriceBlock: prefix + "product_desc_pack_of_item_price" + postfix,
            productPackOfItemPriceRegularBlock: prefix + "product_desc_pack_of_item_price_regular" + postfix,
            productPackOfItemPriceRegularTextBlock: prefix + "product_desc_pack_of_item_price_regular_text" + postfix,
            productPackOfItemPriceRegularText: prefix + "product_desc_pack_of_item_price_regular_text",
            productPackOfItemPriceActiveBlock: prefix + "product_desc_pack_of_item_price_active" + postfix,
            productPackOfItemPriceActiveTextBlock: prefix + "product_desc_pack_of_item_price_active_text" + postfix,
            productPackOfItemPriceActiveText: prefix + "product_desc_pack_of_item_price_active_text",
            productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
            productQtyBlock: prefix + "product_desc_qty" + postfix,
            productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
            productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
            productQtyDownBtn: prefix + "product_desc_qty_down_btn",
            productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
            productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
            productQtyInputText: prefix + "product_desc_qty_input_text",
            productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
            productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
            productQtyUpBtn: prefix + "product_desc_qty_up_btn",
            productAddBlock: prefix + "product_desc_add" + postfix,
            productAddTextBlock: prefix + "product_desc_add_text" + postfix,
            productAddText: prefix + "product_desc_add_text",
            productAddImgBlock: prefix + "product_desc_add_img" + postfix,
            productAddImg: prefix + "product_desc_add_img",
            productAddErrText: prefix + "product_desc_add_err_text" + postfix,
        },
        dom: {
            afModalBlock: ["afModalTitleBlock", "afModalBundlesBlock"],
            afModalTitleBlock: ["afModalTitleTextBlock"],
            afModalTitleTextBlock: ["afModalTitleText"],
            afModalBundlesBlock: ["afLeftBlock", "afProductListMainBlock", "afRightBlock"],
            afLeftBlock: ["afLeftBtnBlock"],
            afLeftBtnBlock: ["afLeftBtnImgBlock"],
            afLeftBtnImgBlock: ["afLeftBtnImg"],
            afProductListMainBlock: ["afProductListBlock"],
            afProductListBlock: ["productModuleBlock", "productModuleBlock", "productModuleBlock"],
            afRightBlock: ["afRightBtnBlock"],
            afRightBtnBlock: ["afRightBtnImgBlock"],
            afRightBtnImgBlock: ["afRightBtnImg"],

            productModuleBlock: ["productShowcaseBlock", "productModalBlock"],
            productShowcaseBlock: ["productBlock"],
            productModalBlock: ["productBlock"],
            productBlock: ["productHeaderBlock", "productImgBlock", "productDescBlock"],
            productHeaderBlock: ["productHeaderTitleBlock", "productHeaderImgBlock"],
            productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
            productHeaderTitleTextBlock: ["productHeaderTitleText"],
            productHeaderImgBlock: ["productHeaderImg"],
            productPromoBlock: ["productPromoMsgBlock"],
            productPromoMsgBlock: ["productPromoMsgText"],
            productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
            productImgMainBlock: ["productImgMainImgBlock", "productImgMainZoomBlock"],
            productImgMainImgBlock: ["productImgMainImg"],
            productImgMainZoomBlock: ["productImgMainZoomBtnBlock"],
            productImgMainZoomBtnBlock: ["productImgMainZoomBtnImgBlock", "productImgMainZoomBtnTextBlock"],
            productImgMainZoomBtnImgBlock: ["productImgMainZoomBtnImg"],
            productImgMainZoomBtnTextBlock: ["productImgMainZoomBtnText"],
            productImgGalleryBlock: ["productImgGalleryHeaderBlock", "productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryHeaderBlock: ["productImgGalleryHeaderTitleBlock", "productImgGalleryHeaderToggleBlock"],
            productImgGalleryHeaderTitleBlock: ["productImgGalleryHeaderTitleImgBlock", "productImgGalleryHeaderTitleTextBlock"],
            productImgGalleryHeaderTitleImgBlock: ["productImgGalleryHeaderTitleImg"],
            productImgGalleryHeaderTitleTextBlock: ["productImgGalleryHeaderTitleText"],
            productImgGalleryHeaderToggleBlock: ["productImgGalleryHeaderToggleImgBlock", "productImgGalleryHeaderToggleTextBlock"],
            productImgGalleryHeaderToggleImgBlock: ["productImgGalleryHeaderToggleImg"],
            productImgGalleryHeaderToggleTextBlock: ["productImgGalleryHeaderToggleText"],
            productImgGalleryBlock: ["productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryLeftBlock: ["productImgGalleryLeftBtnBlock"],
            productImgGalleryLeftBtnBlock: ["productImgGalleryLeftBtnImgBlock", "productImgGalleryLeftBtnTextBlock"],
            productImgGalleryLeftBtnImgBlock: ["productImgGalleryLeftBtnImg"],
            productImgGalleryLeftBtnTextBlock: ["productImgGalleryLeftBtnText"],
            productImgGalleryListBlock: ["productImgGalleryListItemBlock"],
            productImgGalleryListItemBlock: ["productImgGalleryListItemImgBlock", "productImgGalleryListItemTextBlock"],
            productImgGalleryListItemImgBlock: ["productImgGalleryListItemImg"],
            productImgGalleryListItemTextBlock: ["productImgGalleryListItemText"],
            productImgGalleryRightBlock: ["productImgGalleryRightBtnBlock"],
            productImgGalleryRightBtnBlock: ["productImgGalleryRightBtnImgBlock", "productImgGalleryRightBtnTextBlock"],
            productImgGalleryRightBtnImgBlock: ["productImgGalleryRightBtnImg"],
            productImgGalleryRightBtnTextBlock: ["productImgGalleryRightBtnText"],
            productDescBlock: ["productTitleBlock", "productRatingsBlock", "productPriceBlock", "productInfoBlock", "productAttWrapperBlock", "productShadeMobileBlock", "productPackOfBlock", "productQtyAddBtnBlock"],
            productTitleBlock: ["productTitleTextBlock"],
            productTitleTextBlock: ["productTitleText"],
            productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock", "productInfoFullDescBlock"],
            productInfoImgBlock: ["productInfoImg"],
            productInfoTextBlock: ["productInfoText"],
            productInfoFullDescBlock: ["productInfoFullDescText"],
            productPriceBlock: ["productPriceRegularBlock", "productPriceActiveBlock", "productPriceWorthBlock"],
            productPriceActiveBlock: ["productPriceActiveTextBlock"],
            productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
            productPriceRegularBlock: ["productPriceRegularTextBlock"],
            productPriceRegularTextBlock: ["productPriceRegularText"],
            productPriceWorthBlock: ["productPriceWorthTextBlock"],
            productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],
            productAttWrapperBlock: ["productAttWrapperInnerBlock"],
            productAttWrapperInnerBlock: ["productAttBlock", "productSelectedBlock"],
            productAttBlock: ["productAddErrText", "productAttzeroBlock", "productAttSizeBlock", "productAttColorBlock", "productAttthirdBlock", "productAttfourthBlock", "productAttEditBlock"],
            productAttColorBlock: ["productAttColorTitleBlock", "productAttColorListBlock"],
            productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
            productAttColorTitleTextBlock: ["productAttColorTitleText", "productAttColorTitleTextSelected"],
            productAttColorListBlock: ["productAttColorListItemBlock"],
            productAttColorListItemBlock: ["productAttColorListItemImgBlock", "productAttColorListItemTextBlock", "productAttColorListItemImgHoverBlock"],
            productAttColorListItemImgBlock: ["productAttColorListItemImg"],
            productAttColorListItemTextBlock: ["productAttColorListItemText"],
            productAttColorListItemImgHoverBlock: ["productAttColorListItemImgHover"],

            productAttzeroBlock: ["productAttzeroTitleBlock", "productAttzeroListBlock"],
            productAttzeroTitleBlock: ["productAttzeroTitleTextBlock"],
            productAttzeroTitleTextBlock: ["productAttzeroTitleText", "productAttzeroTitleTextSelected"],
            productAttzeroListBlock: ["productAttzeroListItemBlock"],
            productAttzeroListItemBlock: ["productAttzeroListItemImgBlock", "productAttzeroListItemTextBlock"],
            productAttzeroListItemImgBlock: ["productAttzeroListItemImg"],
            productAttzeroListItemTextBlock: ["productAttzeroListItemText"],

            productAttthirdBlock: ["productAttthirdTitleBlock", "productAttthirdListBlock"],
            productAttthirdTitleBlock: ["productAttthirdTitleTextBlock"],
            productAttthirdTitleTextBlock: ["productAttthirdTitleText", "productAttthirdTitleTextSelected"],
            productAttthirdListBlock: ["productAttthirdListItemBlock"],
            productAttthirdListItemBlock: ["productAttthirdListItemImgBlock", "productAttthirdListItemTextBlock"],
            productAttthirdListItemImgBlock: ["productAttthirdListItemImg"],
            productAttthirdListItemTextBlock: ["productAttthirdListItemText"],

            productAttfourthBlock: ["productAttfourthTitleBlock", "productAttfourthListBlock"],
            productAttfourthTitleBlock: ["productAttfourthTitleTextBlock"],
            productAttfourthTitleTextBlock: ["productAttfourthTitleText", "productAttfourthTitleTextSelected"],
            productAttfourthListBlock: ["productAttfourthListItemBlock"],
            productAttfourthListItemBlock: ["productAttfourthListItemImgBlock", "productAttfourthListItemTextBlock"],
            productAttfourthListItemImgBlock: ["productAttfourthListItemImg"],
            productAttfourthListItemTextBlock: ["productAttfourthListItemText"],

            productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeListBlock"],
            productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
            productAttSizeTitleTextBlock: ["productAttSizeTitleText", "productAttSizeTitleTextSelected"],
            productAttSizeListBlock: ["productAttSizeListItemBlock"],
            productAttSizeListItemBlock: ["productAttSizeListItemImgBlock", "productAttSizeListItemTextBlock"],
            productAttSizeListItemImgBlock: ["productAttSizeListItemImg"],
            productAttSizeListItemTextBlock: ["productAttSizeListItemText"],
            productAttEditBlock: ["productAttEditText"],
            productSelectedBlock: ["productSelecteTitleBlock", "selectedColorWrapperBlock"],
            productSelecteTitleBlock: ["productSelectedTitleText"],
            // selectedColorWrapperBlock: ["selectedColorBlock"],
            selectedColorBlock: ["selectedColorDescBlock", "selectedColorQtyBlock", "selectedColorRemoveBlock"],
            selectedColorDescBlock: ["selectedColorImgBlock", "selectedColorNameBlock"],
            selectedColorNameBlock: ["selectedColorNameText"],
            selectedColorQtyBlock: ["selectedColorQtyDownBlock", "selectedColorQtyInputTextBlock", "selectedColorQtyUpBlock"],
            selectedColorQtyDownBlock: ["selectedColorQtyDownBtn"],
            selectedColorQtyUpBlock: ["selectedColorQtyUpBtn"],
            selectedColorRemoveBlock: ["selectedColorQtyRemoveBtn"],
            productPackOfBlock: ["productPackOfLeftBlock", "productPackOfListBlock", "productPackOfRightBlock"],
            productPackOfLeftBlock: ["productPackOfLeftBtnBlock"],
            productPackOfLeftBtnBlock: ["productPackOfLeftBtnImgBlock"],
            productPackOfLeftBtnImgBlock: ["productPackOfLeftBtnImg"],
            productPackOfRightBlock: ["productPackOfRightBtnBlock"],
            productPackOfRightBtnBlock: ["productPackOfRightBtnImgBlock"],
            productPackOfRightBtnImgBlock: ["productPackOfRightBtnImg"],
            productPackOfListBlock: ["productPackOfItemBlock"],
            productPackOfItemBlock: ["productPackOfItemImgBlock", "productPackOfItemTitleBlock", "productPackOfItemQuantityBlock", "productPackOfItemPriceBlock"],
            productPackOfItemImgBlock: ["productPackOfItemImg"],
            productPackOfItemTitleBlock: ["productPackOfItemTitleTextBlock"],
            productPackOfItemTitleTextBlock: ["productPackOfItemTitleText"],
            productPackOfItemQuantityBlock: ["productPackOfItemQuantityTextBlock"],
            productPackOfItemQuantityTextBlock: ["productPackOfItemQuantityText"],
            productPackOfItemPriceBlock: ["productPackOfItemPriceActiveBlock", "productPackOfItemPriceRegularBlock"],
            productPackOfItemPriceActiveBlock: ["productPackOfItemPriceActiveTextBlock"],
            productPackOfItemPriceActiveTextBlock: ["productPackOfItemPriceActiveText"],
            productPackOfItemPriceRegularBlock: ["productPackOfItemPriceRegularTextBlock"],
            productPackOfItemPriceRegularTextBlock: ["productPackOfItemPriceRegularText"],
            productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock"],
            productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
            productQtyDownBlock: ["productQtyDownBtnBlock"],
            productQtyDownBtnBlock: ["productQtyDownBtn"],
            productQtyUpBlock: ["productQtyUpBtnBlock"],
            productQtyUpBtnBlock: ["productQtyUpBtn"],
            productQtyInputBlock: ["productQtyInputTextBlock"],
            productQtyInputTextBlock: ["productQtyInputText"],
            productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
            productAddTextBlock: ["productAddText"],
            productAddImgBlock: ["productAddImg"],
        }
    },
}

INC.methods = {};
INC.methods.networkReq = function (nwConfigObj, cb) {

    var nwConfigObj = new INC.classes.NWConfig(nwConfigObj);
    // if(INC.debug) console.log(nwConfigObj);
    var xhr = new XMLHttpRequest();
    xhr.open(nwConfigObj.method, nwConfigObj.url, true);

    xhr.onload = function () { }
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // cb(xhr.response);
            if (xhr.response != "") {
                if (INC.config.pageType == "pdp" && document.querySelector('.add-to-customize') == null) {
                    cb(xhr.response);
                } else {
                    cb(xhr.response);
                }
                if (INC.config.pageType == "pdp") {
                    var p_ids = INC.methods.getProductIdFromWebPage()
                    INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view");
                }
                sessionStorage.setItem('bundleJSON', xhr.response)
            } else {
                if (INC.config.pageType == "pdp") {
                    var p_ids = INC.methods.getProductIdFromWebPage()
                    INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view");
                }
                if (INC.config.pageType == "pdp") {
                    var delay = 2500
                } else {
                    var delay = 1000
                }
                // setTimeout(function () {
                //     if (INC.config.pageType == "productList") {
                //         INC.config.modal_called = true
                //     }

                    // if (INC.config.pageType == "pdp") {
                    //     INC.config.empty_prod_details = []
                    //     var product_wrap = document.querySelector('#product-detail');
                    //     var pdpprd_id = INC.methods.getProductIdFromWebPage();
                    //     var Pid = INC.methods.getProductIdFromWebPage();
                    //     if(product_wrap != null){
                    //         var elProductName = document.querySelector('.product-title.main-product-title').innerText;
                    //     }
                    //     else{
                    //         var elProductName = document.querySelector('.product-title.main-product-title').innerText;
                    //     }
                    //     if(product_wrap != null){
                    //         //var prc = product_wrap.querySelector('.SalePrice').innerText.replace(/[^\d\.\,\s]+/g, '');
                    //         var prc = product_wrap.querySelector('.product-price span.money').innerText.replace(/[^\d\.\,\s]+/g, '');
                    //     }
                    //     else{
                    //         var prc =document.querySelector('#product-detail .product-price span.money').innerText.replace(/[^\d\.\,\s]+/g, '');
                    //     }
                    //     //var elActivePrice = document.querySelector('.SalePrice');
                    //    // var elRegularPrice = document.querySelector('.ListPrice p');
                    //     var p_id = Pid
                    //     var p_name = elProductName
                    //     var p_img = ""
                    //     if(product_wrap != null){
                    //         var p_img = document.querySelector('#product-images-container img').src;
                    //     }
                    //     else{
                    //         var p_img = document.querySelector('#product-large-images .large-image picture img').src
                    //     }
                    //     var regularPrice = "";
                    //     var s_prc = null;

                    //     if (product_wrap != null) { //orig-price
                    //         var s_prc = product_wrap.querySelector('.product-price span.money').innerText.replace(/[^\d\.\,\s]+/g, '');
                    //     }
                    //     var regularPrice = parseFloat(prc);
                    //     if (s_prc != null) {
                    //         var p_activePrice = parseFloat(s_prc);
                    //     } else {
                    //         var p_activePrice = parseFloat(prc);
                    //     }

                    //     var size = ""
                    //     // if (document.querySelector('.m_variant-swatches li.active a') != null) {
                    //     //     size = document.querySelector('.m_variant-swatches li.active a').getAttribute('title')
                    //     // }
                    //     INC.config.empty_prod_details.push({
                    //         p_id: p_id,
                    //         p_name: p_name,
                    //         p_img: p_img,
                    //         p_activePrice: p_activePrice,
                    //         regularPrice: regularPrice,
                    //         size: size
                    //     })
                    // }
                    // if (INC.config.empty_prod_details != undefined && INC.config.empty_prod_details[0] != undefined) {
                    //     INC.config.pdpaddedProductList.push(INC.config.empty_prod_details[0].p_id)
                    // }
                    // INC.config.pdpaddedProductList.push("9517B002")
                    // INC.config.pdpaddedProductList.push("8267B001")
                    // if (typeof (response) != "object") {
                    //     var ress = JSON.parse(ressponse_data);
                    // } else {
                    //     var ress = ressponse_data;
                    // }
                    // if (INC.config.empty_prod_details != undefined && INC.config.empty_prod_details[0] != undefined) {
                    //     ress.Bundles[0].Products[0].ProductId = INC.config.empty_prod_details[0].p_id;
                    //     ress.Bundles[0].Products[0].ProductName = INC.config.empty_prod_details[0].p_name;
                    //     ress.Bundles[0].Products[0].Price = INC.config.empty_prod_details[0].p_activePrice;
                    //     ress.Bundles[0].Products[0].SpecialPrice = INC.config.empty_prod_details[0].regularPrice;
                    //     ress.Bundles[0].Products[0].ImageURL = INC.config.empty_prod_details[0].p_img;
                    //     ress.Bundles[0].Products[0].size = INC.config.empty_prod_details[0].size;

                    //     ress.Bundles[0].Products[1].ProductId = INC.config.empty_prod_details[0].p_id;
                    //     ress.Bundles[0].Products[1].ProductName = INC.config.empty_prod_details[0].p_name;
                    //     ress.Bundles[0].Products[1].Price = INC.config.empty_prod_details[0].p_activePrice;;
                    //     ress.Bundles[0].Products[1].SpecialPrice = INC.config.empty_prod_details[0].regularPrice;
                    //     ress.Bundles[0].Products[1].ImageURL = INC.config.empty_prod_details[0].p_img
                    //     ress.Bundles[0].Products[0].size = INC.config.empty_prod_details[0].size;
                    // }
                    //cb(ress);
                // }, delay)

            }
        }
    }

    xhr.send(JSON.stringify(nwConfigObj.params));
}

INC.methods.irbReq = function (productId, bundleCount, elementName, prd_name, old_prc, prd_img_url, prd_prc ,sel_v) {

    var elementName = elementName || "";
    var productId = productId;
    var apiKey = INC.config.clientToken;
    var bundleReqCount = bundleCount || 5;
    var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
    // if (INC.clientConfig.statusLoggedIn) {
    //     irbPATH = "//www.travisperkins.co.uk/bundles/increasingly_bundles?irb/"
    // }
    if (INC.config.pageType == "pdp" || INC.config.pageType == "cartPage" || INC.config.pageType == "productList") {
        var irbReqParams =
            "product_ids=" + productId +
            "&category_id=" +
            "&api_key=" + apiKey +
            "&client_id=" +
            "&page_type=" + elementName +
            "&fr=" + "1" + 
            "&client_visitor_id=" + INC.config.ivid +
            "&npb=" + "2" //+
            // "&is_tc=" + "1" +
            // "&no_of_bundles=" + bundleReqCount
            ;
    } else {
        var irbReqParams =
            "product_ids=" + productId +
            "&category_id=" +
            "&api_key=" + apiKey +
            "&client_id=" +
            "&page_type=" + elementName +
            "&client_visitor_id=" + INC.config.ivid +
            "&is_tc=" + "1" +
            "&fr=" + "1" + 
            "&no_of_bundles=" + bundleReqCount
            ;
    }

    if (INC.debug) console.log(irbReqParams);
    var irbReqURL = decodeURI(irbPATH + btoa(irbReqParams));
    var networkConfigObj = new INC.classes.NWConfig();
    networkConfigObj["url"] = irbReqURL;

    return this.refreshBundles(networkConfigObj, prd_name, old_prc, prd_img_url, prd_prc, sel_v);
}

INC.methods.refreshBundles = function (nwConfigObj, prd_name, old_prc, prd_img_url, prd_prc, sel_v) {
    var incDataStore = INC.dataStore;

    INC.methods.networkReq(nwConfigObj, function (response) {
        
        // if (document.querySelector('.Modal__ModalContainer-sc-6twluf-0.djtiDp') != null) {
        //     if (document.querySelector('button[data-test-id="add-variant-button"]') == null) {
        //         document.querySelector('.Modal__ModalContainer-sc-6twluf-0.djtiDp').style.visibility = "visible";
        //         // console.log("sidebar visible");
        //         // Array.prototype.forEach.call(document.querySelectorAll('button[data-test-id="cancel-button"]'), function (el) {
        //         //     el.click();
        //         // });
        //     }
        // }

        if (INC.debug) console.log(response.length);
        if (response == undefined || response.length == 0) return;

        if (response.BundleCount != undefined) {
            var responseJSON = response;
        } else {
            var responseJSON = JSON.parse(response);
        }
        if (responseJSON.hasOwnProperty('Bundles') && (responseJSON.Bundles.length > 0)) {
            responseJSON.timeStamp = Date.now();
            var bundleResponse = responseJSON;
            if (INC.debug) console.log(bundleResponse);
            INC.dataStore.methods().buildDataStoreObj(bundleResponse);

            if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) return;
            switch (INC.config.pageType) {
                case "pdp":
                    if (bundleResponse.ProductsDetail[0] != undefined && bundleResponse.ProductsDetail[0].ProductType == "simple" && bundleResponse.ProductsDetail[0].ProductSku != "") {
                        if(window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0){
                            //INC.methods.createPDPBlock();
                        }else{
                            INC.methods.createPDPBlock();
                        }
                    }
                    else if (bundleResponse.ProductsDetail[0] != undefined && bundleResponse.ProductsDetail[0].ProductType == "configurable") {
                        if(window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0){
                            // INC.methods.createPDPBlock();
                        }else{
                            INC.methods.createPDPBlock();
                        } 
                    }
                    break;
                case "cartPage": INC.methods.createAMBlock();
                    onloadpdp = true
                    break;
                case "productList":
                    console.log("entered")
                    // setTimeout(function () {
                        onloadpdp = true
                    // }, 400)
                    INC.methods.createSidebarBlock();
                    var findObj = new INC.classes.FindObj();
                    findObj["id"] = INC.dataStore.pdpProductId;
                    findObj["sku"] = INC.dataStore.pdpProductId;
                    var sbBlock = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarOuterBlock"));
                    sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedBlock")).style.visibilty = "hidden";
                    document.querySelector(".inc_sidebar_modal_block .inc_sidebar_cart_added_block").style.borderBottom = "0px";
                    // sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarHeaderItemCountFigureText")).innerText = 0;
                    // sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarHeaderItemCountFigureText")).style.display = "none";
                    sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedListBlock")).innerHTML = "";
                    INC.methods.addProductToSidebarCart(findObj, INC.dataStore.plpProductQty, null, "client_add_btn", prd_name, old_prc, prd_img_url, prd_prc);
                    INC.methods.showSidebar();
                    if(sel_v != ""){
                        document.querySelector('.inc_cart_added_product_desc_att_color_text_block').innerHTML = sel_v + " |"
                    }else{
                        document.querySelector('.inc_cart_added_product_desc_att_color_text_block').innerHTML = ""
                    }
                    // console.log(sel_v)
                    break;
            }

            // setInterval(function () {
            // if (document.querySelector('.Modal__ModalContainer-sc-6twluf-0.djtiDp') != null) {
            //     if (document.querySelector('button[data-test-id="add-variant-button"]') == null) {
            //         document.querySelector('.Modal__ModalContainer-sc-6twluf-0.djtiDp').style.display = "none";
            //         // Array.prototype.forEach.call(document.querySelectorAll('button[data-test-id="cancel-button"]'), function (el) {
            //         //     el.click();
            //         // });
            //     }
            // }
            // }, 50);
        }
        if (INC.debug) console.log(responseJSON.hasOwnProperty('Bundles') && INC.config.pageType == "productList");

        // if(!(responseJSON.hasOwnProperty('Bundles') && INC.config.pageType == "productList")){
        //     if (document.querySelector('.Modal__ModalContainer-sc-6twluf-0.djtiDp') != null) {
        //         if (document.querySelector('button[data-test-id="add-variant-button"]') == null) {
        //             document.querySelector('.Modal__ModalContainer-sc-6twluf-0.djtiDp').style.visibility = "visible";
        //             console.log("sidebar visible");
        //             // Array.prototype.forEach.call(document.querySelectorAll('button[data-test-id="cancel-button"]'), function (el) {
        //             //     el.click();
        //             // });
        //         }
        //     }
        // }
    });
}
INC.methods.irbReq_is_tc = function (productId, bundleCount, elementName) {
    // debugger;
    var elementName = elementName || "";
    var productId = productId;
    var apiKey = INC.config.clientToken;
    var bundleReqCount = bundleCount || 5;
    var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
    // if (INC.clientConfig.statusLoggedIn) {
    //     irbPATH = "//www.travisperkins.co.uk/bundles/increasingly_bundles?irb/"
    // }
    var irbReqParams =
        "product_ids=" + productId +
        "&category_id=" +
        "&api_key=" + apiKey +
        "&client_id=" +
        "&page_type=" + elementName +
        "&client_visitor_id=" + INC.config.ivid +
        "&is_tc=" + "1" +
        "&fr=" + "1" + 
        "&no_of_bundles=" + bundleReqCount +
        "&npb=" + "2"
        ;

    if (INC.debug) console.log(irbReqParams);
    var irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
    var networkConfigObj = new INC.classes.NWConfig();
    networkConfigObj["url"] = irbReqURL1;

    // var param = networkConfigObj[params];
    // var nwConfigObj = new INC.classes.NWConfig(nwConfigObj);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", networkConfigObj["url"], true);

    xhr.onload = function () { }
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            if (xhr.response != "") {
                if (INC.config.pageType == "pdp" && document.querySelector('.add-to-customize') == null) {
                    cb_tc(JSON.parse(xhr.response));
                }
                // sessionStorage.setItem('bundleJSON',xhr.response)
            } else {
                // if (INC.config.pageType == "pdp") {
                //     var delay = 2500
                // } else {
                //     var delay = 1000
                // }
                // setTimeout(function () {

                //     if (INC.config.pageType == "pdp") {

                //         INC.config.empty_prod_details = []
                //         var product_wrap = document.getElementsByClassName("TopPanel")[0];
                //         var pdpprd_id = INC.methods.getProductIdFromWebPage();
                //         var Pid = INC.methods.getProductIdFromWebPage();
                //         var elProductName = ""
                //         if (document.querySelector('#ProductNameAndRating') != null) {
                //             elProductName = document.querySelector('#ProductNameAndRating').innerText;
                //         }
                //         else if (document.querySelector('.ProductDetail h1') != null) {
                //             elProductName = document.querySelector('.ProductDetail h1').innerText;
                //         }
                //         else if(product_wrap != null && product_wrap.querySelector('.TopPanel h1') != null){
                //             elProductName = product_wrap.querySelector('.TopPanel h1').innerText;
                //         }
                //         var prc = "";
                //         var elActivePrice = "";
                //         var elRegularPrice = "";
                //         if (document.querySelector('#ProductDetails .Prices .Price') != null) {
                //             prc = document.querySelector('#ProductDetails .Prices .Price').innerText;
                //             elActivePrice = document.querySelector('#ProductDetails .Prices .Price').innerText;
                //         }
                //         else if (document.querySelector('.Details .SalePrice') != null) {
                //             prc = document.querySelector('.Details .SalePrice').innerText;
                //             elActivePrice = document.querySelector('.Details .SalePrice').innerText;
                //         }
                //         if (document.querySelector('#ProductDetails .Prices .ListPrice') != null) {
                //             elRegularPrice = document.querySelector('#ProductDetails .Prices .ListPrice').innerText.split(' ')[0]
                //         }
                //         else if (document.querySelector('.Details .ListPrice p') != null) {
                //             elRegularPrice = document.querySelector('.Details .ListPrice p').innerText;
                //         }
                //         var p_id = Pid
                //         var p_name = elProductName
                //         var p_img = ""
                //         if (document.querySelector('.ImageWrapper.Loaded img') != null) {
                //             p_img = document.querySelector('.ImageWrapper.Loaded img').src
                //         }
                //         var regularPrice = "";
                //         var s_prc = elActivePrice.split('£')[1];

                //         if (product_wrap != null && product_wrap.querySelector('.strong.font-color-red') != null && product_wrap.querySelector('.price-container span.orig-price') != null) { //orig-price
                //             var s_prc = product_wrap.querySelector('.price-container span.orig-price').innerText.replace(/[^\d\.\,\s]+/g, '');
                //         }
                //         var regularPrice = parseFloat(prc);
                //         if (s_prc != null) {
                //             var p_activePrice = parseFloat(s_prc);
                //         } else {
                //             var p_activePrice = parseFloat(prc);
                //         }

                //         var size = ""
                //         if (document.querySelector('.m_variant-swatches li.active a') != null) {
                //             size = document.querySelector('.m_variant-swatches li.active a').getAttribute('title')
                //         }
                //         INC.config.empty_prod_details.push({
                //             p_id: p_id,
                //             p_name: p_name,
                //             p_img: p_img,
                //             p_activePrice: p_activePrice,
                //             regularPrice: regularPrice,
                //             size: size
                //         })
                //     }
                //     INC.config.pdpaddedProductList.push(INC.config.empty_prod_details[0].p_id)
                //     INC.config.pdpaddedProductList.push("9517B002")
                //     INC.config.pdpaddedProductList.push("8267B001")
                //     if (typeof (response) != "object") {
                //         var ress = JSON.parse(ressponse_data);
                //     } else {
                //         var ress = ressponse_data;
                //     }
                //     ress.Bundles[0].Products[0].ProductId = INC.config.empty_prod_details[0].p_id;
                //     ress.Bundles[0].Products[0].ProductName = INC.config.empty_prod_details[0].p_name;
                //     ress.Bundles[0].Products[0].Price = INC.config.empty_prod_details[0].p_activePrice;
                //     ress.Bundles[0].Products[0].SpecialPrice = INC.config.empty_prod_details[0].regularPrice;
                //     ress.Bundles[0].Products[0].ImageURL = INC.config.empty_prod_details[0].p_img;
                //     ress.Bundles[0].Products[0].size = INC.config.empty_prod_details[0].size;

                //     ress.Bundles[0].Products[1].ProductId = INC.config.empty_prod_details[0].p_id;
                //     ress.Bundles[0].Products[1].ProductName = INC.config.empty_prod_details[0].p_name;
                //     ress.Bundles[0].Products[1].Price = INC.config.empty_prod_details[0].p_activePrice;;
                //     ress.Bundles[0].Products[1].SpecialPrice = INC.config.empty_prod_details[0].regularPrice;
                //     ress.Bundles[0].Products[1].ImageURL = INC.config.empty_prod_details[0].p_img
                //     ress.Bundles[0].Products[0].size = INC.config.empty_prod_details[0].size;
                //     cb_tc(ress);
                // }, delay)

            }
        }
    }

    xhr.send(JSON.stringify(networkConfigObj["params"]));
}
INC.methods.getSelectorClassName = function (classNames, className) {
    return "." + classNames[className];
}

INC.methods.get_product_ratings = function(filed3, field2,rating_containers) {
    //&& filed3 != 0 && filed3.split('|')[0] != "0.0" && filed3.split('|')[0] != "0"
    var reviewc = field2
    var count = document.createElement('span');
        count.classList.add('rating_count')
        rating_containers.appendChild(count);
        var avg = document.createElement('span');
        avg.classList.add('rating_avg')
        if (reviewc == undefined) {
            count.textContent = "(0)";
        } else {
            if(reviewc.replace('-', '.').trim() != ""){
                //count.textContent = "(" + reviewc.replace('-', '.').trim() + ")"
                if(reviewc > 1){
                    count.textContent = reviewc.replace('-', '.').trim() + " Reviews"
                }else{
                    count.textContent = reviewc.replace('-', '.').trim() + " Review"
                }
            }
        }
    if(filed3 != undefined && filed3 != ""){
        var rating = filed3.split('|')[0];
        var reviewc = field2
        // filed3.split('|')[1];
        if (rating == "" || rating == undefined || rating == "NaN" || rating == "norating") {
            rating = 0
        }
        // var gave_rat = filed4;
        var ratingAvg = filed3
        // rating = Math.round(rating * 2) / 2;
        rating = parseFloat(rating).toFixed(1)
        rating = rating.toString();
        var rating_m = null;
        //if (rating != 0 && rating != "" && rating != null) {
        var rating_container = rating_containers;
        if (rating != 0 && rating != 1 && rating != 2 && rating != 3 && rating != 4 && rating != 5) {
            rating_m = rating.replace(".", "-");
        }
        if (rating == 0) {
            rating = "0-0"
        }
        if (rating == 1) {
            rating = "1-0"
        }
        if (rating == 2) {
            rating = "2-0"
        }
        if (rating == 3) {
            rating = "3-0"
        }
        if (rating == 4) {
            rating = "4-0"
        }
        if (rating == 5) {
            rating = "5-0"
        }
        if (rating == "") {
            rating = 0;
        }
        if ((rating_m != null && rating_m != "NaN")) {
            rating_containers.classList.add("rating_" + rating_m);
        } else if(isNaN(rating_m)) {
            rating_containers.classList.add("rating_" + rating);
        } else {
            rating_containers.classList.add("rating_" + rating);
        }

        var stars = document.createElement('span');
        stars.classList.add('rating_stars');
        rating_containers.appendChild(stars);
    }else{
        var stars = document.createElement('span');
        stars.innerText="."
        stars.style.color="#fff"
        stars.classList.add('rating_stars');
        stars.classList.add('noratings');
        rating_containers.appendChild(stars);
    }
}
INC.methods.getProductIdFromWebPage = function () {
    var productId = ""
    var pids = ""
    if (dataLayer != undefined || dataLayer != null) {
            if (dataLayer[0].product_sku != undefined && dataLayer[0].product_sku != null) {
                productId = dataLayer[0].product_sku
            }
    }else if(meta || meta != undefined){
        if(meta.product != null || meta.product != undefined){
            if(meta.product.variants[0].sku != null || meta.product.variants[0].sku != undefined){
                productId = meta.product.variants[0].sku
            }
        }
    }
    if((window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
        var href_split =  window.location.href.split('?')[1];
        var total_split_href=href_split.split('&');
        if(href_split != undefined){
            for(h=0;h<total_split_href.length;h++){
                if(total_split_href[h].indexOf('pid') >= 0){
                    productId = total_split_href[h].split('=')[1].split('#')[0]
                }
            }
        }
    }
    if(productId == "Bundle"){
        productId = meta.product.variants[0].sku
    }
    if(productId == ""){
        productId = meta.product.variants[0].sku
    }
    // if(document.querySelector('#product-images-container #product-large-images img').src != null || document.querySelector('#product-images-container #product-large-images img').src != undefined){
    //     var imgSrc = document.querySelector('#product-images-container #product-large-images img').src;
    //     productId = imgSrc.split('products')[1].split('_')[1]
    // }else if(document.querySelector('#product-images-container .img-wrap picture img').src != null || document.querySelector('#product-images-container .img-wrap picture img').src != undefined){
    //     var imgSrc = document.querySelector('#product-images-container .img-wrap picture img').src;
    //     productId = imgSrc.split('products')[1].split('_')[1]
    // }

    INC.config.Product_id = productId;
    return productId;
    // else {
    //     return "14051";
    // }
}
INC.methods.detectPageType = function () {
    //if (document.querySelector('#CategoryLeftNav')) return "productList";
    if (document.querySelector('body.template-collection')) return "productList";
    if (document.querySelector('body.template-product')) return "pdp";
    if (document.querySelector('#template-page-order')) return "pdp";
    //if (document.querySelector('.ProductDescription')) return "pdp";
    //if (document.querySelector(".Controller_Product.Mobile")) return "pdp";
    //if (document.querySelector('#productDescriptions')) return "pdp";
    if (document.querySelector("body.template-cart")) return "cartPage";
    // return "pdp";
}
INC.methods.detectDeviceType = function () {
    if (window.innerWidth > 820) {
        return "desktop";
    } else {
        return "mobile";
    }
}
INC.methods.detectLanguage = function detectLanguage() { return "en"; }
INC.methods.showSidebar = function () {
    if (document.querySelector('.inc_cart_added_product_desc_title_text') != null && document.querySelector('.inc_cart_added_product_desc_title_text').innerText == "undefined") return;
    productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
    if(INC.methods.detectPageType() == "productList"){
        if(document.querySelector('.inc_recommended_products_list_block .inc_product_module_block[data-main_id="' + INC.dataStore.pdpProductId + '"]') != null){
            document.querySelector('.inc_recommended_products_list_block .inc_product_module_block[data-main_id="' + INC.dataStore.pdpProductId + '"]').parentElement.removeChild(document.querySelector('.inc_recommended_products_list_block .inc_product_module_block[data-main_id="' + INC.dataStore.pdpProductId + '"]'))
        }
    }
    var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
    elSidebarOverlay.style.display = "block";
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = INC.methods.getSelectorClassName;
    // document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock")).style.display = "block";
    document.querySelector(getSelectorClassName(classNames, "sidebarOuterBlock")).classList.add("sidebar_outer_active");
    document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock")).classList.add("inc_active");
    // document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock")).setProperty('display', 'flex', 'important')
    document.querySelector('html').classList.add('inc_prevent_scroll');
    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
        document.querySelector('body').style.position = "fixed"
    }
    document.querySelector('html').style.overflow = "hidden";
    
    if (INC.methods.detectPageType() == "pdp" && document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block') == 0) {
        document.querySelector('.inc_sidebar_modal_block').classList.add('inc_empty_sidebar');
    }
    else if (INC.methods.detectPageType() == "pdp" && document.querySelectorAll('.inc_recommended_tabs_list_block .inc_recommended_tabs_list_item_block').length <= 0) {
        document.querySelector('.inc_sidebar_modal_block').classList.add('inc_empty_sidebar');
    }
    else if (INC.methods.detectPageType() == "productList" && document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length == 0) {
        document.querySelector('.inc_sidebar_modal_block').classList.add('inc_empty_sidebar');
    }
    else {
        document.querySelector('.inc_sidebar_modal_block').classList.remove('inc_empty_sidebar');
    }
    // document.querySelector('body').style.overflowY = "hidden";
    setTimeout(function(){
    if (document.querySelector('.inc_sidebar_modal_block.inc_active .inc_recommended_tabs_list_item_block.inc_active') == null && document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
        document.querySelector('.inc_sidebar_modal_block.inc_active .inc_recommended_tabs_list_item_block').click()
    }
    }, 200)
    setTimeout(function(){
        if(document.querySelector('.inc_recommended_tabs_list_block .inc_recommended_tabs_list_item_text') != null){
            document.querySelector('.inc_recommended_tabs_list_block .inc_recommended_tabs_list_item_text').click()
        }
    }, 400)
    setTimeout(function(){
        if (document.querySelector('.inc_sidebar_modal_block.inc_active .inc_recommended_tabs_list_item_block.inc_active') == null && document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
            document.querySelector('.inc_sidebar_modal_block.inc_active .inc_recommended_tabs_list_item_block').click()
        }
        }, 800)
    
}
INC.methods.hideSidebar = function () {
    INC.config.sidebarremovedprod=[]
    var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
    elSidebarOverlay.style.display = "none";
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = INC.methods.getSelectorClassName;
    INC.config.pdpaddedProductList = []
    // document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock")).style.display = "none";
    document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock")).classList.remove("inc_active");
    document.querySelector(getSelectorClassName(classNames, "sidebarOuterBlock")).classList.remove("sidebar_outer_active");

    // document.querySelector('body').style.overflowY = "";
    // INC.methods.clear();
    document.querySelector('html').classList.remove('inc_prevent_scroll');
    document.querySelector('html').style.overflow = "auto";
    window.location.reload();
}
INC.methods.addProductToSidebarCart = function (findObj, qty, productBlock, client_add_btn, prd_name, old_prc, prd_img_url, prd_prc) {
    //debugger
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = this.getSelectorClassName;

    var sbBlock = document.querySelector(getSelectorClassName(classNames, "sidebarOuterBlock"));

    function getViewElement(className) {
        return sbBlock.querySelector(getSelectorClassName(classNames, className));
    }
    // var subtotal_activeprice = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text').innerText.replace('zł','').trim();
    // var subtotal_regular = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text').innerText.replace('zł','').trim();
    var subtotal_activeprice = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text').getAttribute('subtotalactiveprice')
    var subtotal_regular = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text').getAttribute('subtotalregularprice')
    if (subtotal_activeprice == null) {
        subtotal_activeprice = 0
    }
    if (subtotal_regular == null) {
        subtotal_regular = 0
    }
    var elHeadersubtotalactivetext = getViewElement("sidebarCartAddedProductDescSubTotalActiveText");
    var elHeadersubtotalregulartext = getViewElement("sidebarCartAddedProductDescSubTotalRegularText");
    var elHeaderItemCountFigureText = getViewElement("sidebarHeaderItemCountFigureText");
    var sidebarHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
    var sbCartBlock = getViewElement("sidebarCartAddedListBlock");

    var productObj = dataStore.methods().getProductBySKU(findObj);
    if (findObj.hasOwnProperty("colorText") && findObj["colorText"] != "" && findObj["colorText"] != undefined) {
        productObj = dataStore.methods().getProductByAtt(findObj)
    }
    if (Object.keys(productObj).length == 0) {
        var productObj = dataStore.methods().getProductById(findObj);
    }
    if (Object.keys(productObj).length == 0) {
        productObj = dataStore.methods().getProductBySKU(findObj)
    }
    if (client_add_btn == "client_add_btn" && (productObj.id == "9517B002" || productObj.id == "8267B001" || Object.keys(productObj).length == 0)) {
        if (Object.keys(productObj).length == 0) {
            productObj = {}
        }
        productObj.name = prd_name;
        if (old_prc != null && old_prc != 0 && old_prc < prd_prc) {
            productObj.activePrice = prd_prc
            productObj.regularPrice = old_prc
        }
        else if (old_prc != null && old_prc != 0 && old_prc > prd_prc) {
            productObj.activePrice = prd_prc
            productObj.regularPrice = old_prc
        }
        else {
            productObj.activePrice = prd_prc
            productObj.regularPrice = old_prc
        }
        productObj.imageURL = prd_img_url

    }

    var productBlock = INC.methods.getElementChilds("sidebarCartAddedProductBlock", "sidebar");

    var elImg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductImg"));
    var elTitleText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescTitleText"));
    var elPriceActiveText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveText"));
    var elPriceRegularText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularText"));
    var elAttsizeText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttSizeText"));
    var elAttColorText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttColorText"));

    var prd_img = productObj.imageURL
    if(client_add_btn == "client_add_btn" && document.querySelector('.GalleryImages img.ThumbGalleryItems') != null) prd_img = document.querySelector('.GalleryImages img.ThumbGalleryItems').src
    var elImgTag = INC.methods.generateHTMLTags('img');
    if(onloadpdp == true){
        elImgTag.src = prd_img
    }
    elImgTag.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" )
    elImg.appendChild(elImgTag);

    elTitleText.innerHTML = qty + "<small>x </small>" + productObj.name;

    //current  active prod
    var color = "";
    var size = "";
    if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
        var just_check_prod_block = document.querySelector('.inc_sidebar_modal_block .inc_product_module_block[data-id="' + productObj.id + '"]')
    } else {
        var just_check_prod_block = document.querySelector('.inc_product_module_block[data-id="' + productObj.id + '"]')
    }
    if (just_check_prod_block != null) {
        if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div') != null) {
            size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div').innerText
        }
        if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null) {
            color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
        }
        if (productObj.option[0] != undefined && productObj.option[0].text != undefined && productObj.option[0].text != "") {
            color = productObj.option[0].text;
        }
    }
    if (client_add_btn == "client_add_btn" && productObj.id != "9517B002" && productObj.id != "8267B001") {
        if (document.querySelector('.AV023_SelectedShadeName') != null) {
            color = document.querySelector('.AV023_SelectedShadeName').innerText
        }
        else if (document.querySelector('.SizeDropdown .select2-chosen span') != null) {
            color = document.querySelector('.SizeDropdown .select2-chosen span').innerText.trim()
        }
        else if (document.querySelector('.Shades span.Dark') != null) {
            color = document.querySelector('.Shades span.Dark').innerText.trim()
        }
        else if (document.querySelector('.Shades .Dark') != null) {
            color = document.querySelector('.Shades .Dark').innerText.trim()
        }
    }
    if (INC.debug) console.log("size " + size)
    if (INC.debug) console.log("color " + color)
    //end
    // var sel_v = ""
    // elAttColorText.innerText = ""
    // if(document.querySelector('.product-swatch-container') != null || document.querySelector('.product-swatch-container') != undefined){
    //     if(document.querySelector('.product-swatch-container .current-swatch') != null || document.querySelector('.product-swatch-container .current-swatch') != undefined){
    //         if(document.querySelector('.product-swatch-container .current-swatch .swatch-title') != null || document.querySelector('.product-swatch-container .current-swatch .swatch-title') != undefined){
    //             var sel_v = document.querySelector('.product-swatch-container .current-swatch .swatch-title').innerText.trim()
    //             elAttColorText.innerText = sel_v + " | ";
    //         }
    //     }
    // }
    if (color != "") {
        elAttColorText.innerText = color + " | ";
    }
    else if(size != ""){
        elAttsizeText.innerText = size;
    }
    var activePrice = "";
    var regularPrice = "";
    if(productObj.activePrice != null) activePrice = parseFloat(productObj.activePrice).toFixed(2);
    if(productObj.regularPrice != null) regularPrice = parseFloat(productObj.regularPrice).toFixed(2);

    elPriceActiveText.innerText = "Price: " + INC.clientConfig.currencySymbol + (activePrice * qty).toFixed(2);
    elPriceActiveText.innerText = elPriceActiveText.innerText;
    if (client_add_btn == "client_add_btn") {
        var subtotalactiveprice = parseFloat(activePrice) * parseInt(qty).toFixed(2);
        var subtotalregukarprice = parseFloat(regularPrice) * parseInt(qty).toFixed(2);
    } else {
        if (subtotal_regular == "" && +regularPrice != 0 && regularPrice != "") {
            if (subtotal_activeprice != "") {
                var subtotalactiveprice = parseFloat(subtotal_activeprice) + parseFloat(activePrice).toFixed(2)
                var subtotalregukarprice = parseFloat(subtotal_activeprice) + parseFloat(regularPrice).toFixed(2)
            }
            else {
                var subtotalactiveprice = parseFloat(activePrice).toFixed(2)
                var subtotalregukarprice = parseFloat(regularPrice).toFixed(2)
            }
        } else {
            var subtotalactiveprice = (parseFloat(subtotal_activeprice) + parseFloat(activePrice)).toFixed(2)
            var subtotalregukarprice = parseFloat(subtotal_regular) + parseFloat(regularPrice)
            // if (just_check_prod_block.querySelector('.inc_product_modal_block').classList.contains('simple')) {
            // qty = just_check_prod_block.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value;
            var subtotalactiveprice = parseFloat(subtotal_activeprice) + parseFloat(activePrice) * parseInt(qty).toFixed(2);
            var subtotalregukarprice = parseFloat(subtotal_regular) + parseFloat(regularPrice) * parseInt(qty).toFixed(2);
            elPriceActiveText.innerText = "Price: " + INC.clientConfig.currencySymbol + (parseFloat(activePrice) * parseInt(qty)).toFixed(2);
            elPriceActiveText.innerText = elPriceActiveText.innerText;
            // }

        }
    }

    // if (productObj.activePrice != productObj.regularPrice) {
    //     elPriceRegularText.innerText = INC.clientConfig.currencySymbol + regularPrice + " " + ((INC.clientConfig.statusVAT == "true") ? "(Inc. VAT)" : "(Ex. VAT)");
    // }
    var old_qty = document.querySelector('.inc_header_item_count_title_text').innerText.split(INC.bundleVars.items)[0].replace('(', '').trim()
    sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
    // elHeaderItemCountFigureText.innerText = parseInt(elHeaderItemCountFigureText.innerText) + parseInt(qty);
    elHeaderItemCountFigureText.style.display = "none";
    if (client_add_btn == "client_add_btn") {
        sidebarHeaderItemCountTitleText.innerHTML = (parseInt(qty)) + " " + INC.bundleVars.items + "  |  ";
    } else {
        sidebarHeaderItemCountTitleText.innerHTML = (parseInt(qty) + parseInt(old_qty)) + " " + INC.bundleVars.items + "  |  ";
    }


    if (sbCartBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")).length > 2) {
        getViewElement("sidebarCartAddedRightBtnImgBlock").style.visibility = "visible";
        getViewElement("sidebarCartAddedLeftBtnImgBlock").style.visibility = "visible";
    }
    elHeadersubtotalactivetext.setAttribute('subtotalactiveprice', subtotalactiveprice)
    elHeadersubtotalregulartext.setAttribute('subtotalregularprice', subtotalregukarprice)
    if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
        elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + parseFloat(subtotalactiveprice).toFixed(2);
        elHeadersubtotalregulartext.innerHTML = INC.clientConfig.currencySymbol + parseFloat(subtotalregukarprice).toFixed(2);
    } else {
        elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + parseFloat(subtotalactiveprice).toFixed(2);
        elHeadersubtotalregulartext.innerHTML = ""
    }
    if (window.innerWidth > 767) {
        if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 6) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
        }
    } else {
        if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
        }
    }

}
INC.methods.createAMBlock = function () {
    var classNames = INC.uiConfig.am.className;
    var amBlock = this.getElementChilds("afModalBlock", "am");
    var getSelectorClassName = INC.methods.getSelectorClassName;
    document.querySelector('body').classList.add('inc_bundles_available');
    function getViewElement(className) {
        return amBlock.querySelector(getSelectorClassName(classNames, className));
    }

    getViewElement("afProductListBlock").innerHTML = "";

    var elAmTitleText = getViewElement("afModalTitleText");
    // elAmTitleText.innerText = INC.bundleVars.youMayAlsoLike;

    var productListObj = INC.dataStore.dataStoreObj;
    var productListArray = Object.keys(productListObj);

    var amProductListBlock = getViewElement("afProductListBlock");

    var productIds = [];
    // if (document.querySelectorAll('#shopify-section-cart #basket-main .basket-item .basket-item-image a picture img')[0] != null) {
    //     Array.prototype.forEach.call(document.querySelectorAll('#shopify-section-cart #basket-main .basket-item .basket-item-image a picture img'), function (elProductCode) {
    //         var productId = elProductCode.getAttribute('src').split('products')[1].split('_')[1]
    //         productIds.push(productId);
    //     });
    // }
    if (MAKEBECOOL_BUNDLES.cart.items.length > 0) {
        var cartLength = MAKEBECOOL_BUNDLES.cart.items.length;
        for(var i = 0; i < cartLength; i++){
            var productId = MAKEBECOOL_BUNDLES.cart.items[i].sku
            productIds.push(productId);
        }
    }
    
    var bundleProductsArray = INC.dataStore.bundleProductsArray;
    var duplicatecartprod = []
    // productListArray.forEach(function (mainProductId) {
        if (bundleProductsArray[0] != "8267B001" && bundleProductsArray[0] != "9517B002") {
            bundleProductsArray.forEach(function (mainProductId) {
                if (productIds.indexOf(mainProductId) == -1) {
                    if (duplicatecartprod.indexOf(mainProductId) == -1) {
                        duplicatecartprod.push(mainProductId)
                        var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: mainProductId });
                        var am_list = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false)
                        if (am_list != undefined) {
                            elAmTitleText.innerText = INC.bundleVars.youMayAlsoLike;
                            amProductListBlock.appendChild(am_list);
                        }
                    }
                }
            });
        }
    var amProductBlocks = amBlock.querySelectorAll(getSelectorClassName(classNames, "productBlock"));
    Array.prototype.forEach.call(amProductBlocks, function (productBlock) {
        productBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).addEventListener("click", function (e) {
            var productBlockNode = this.parentNode.parentNode;
            if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
            }
            var sku = productBlockNode.getAttribute('data-sku');
            var id = productBlockNode.getAttribute('data-id');
            var findObj = new INC.classes.FindObj({ id: id, mainId: id, sku: sku });
            var qty = productBlockNode.querySelector('input').value;

            var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')
            var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
            var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));
            if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block') != null || productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.select_option_inc_block') != null) {
                if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_selected_color_wrapper_block .inc_selected_color_block') != null) {
                    qty = productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_selected_color_wrapper_block .inc_selected_color_block .inc_selected_color_qty_input_text_block').innerText;
                    INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im);
                } else {
                    if(productBlockNode.querySelector('.img_color_swatch') != null) productBlockNode.querySelector('.img_color_swatch').click()
                }
            } else {
                INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im);
            }
        });
    });

    //var elAMPosition = document.querySelector('.ContentBottom') || document.querySelector('.specialOffersContainer');
    // Array.prototype.forEach.call(document.querySelectorAll('div'), function (el) {
    //     if (el.className.indexOf('MainLayout__PageBody') == 0) elAMPosition = el;
    //     if (el.className.indexOf('Basket__PageWrapper') == 0) elAMPosition = el;
    // });
    INC.methods.clear();
    // debugger;
    //var amBlockSelector = elAMPosition || document.querySelector('#PreFooter') || document.querySelector('footer') || document.querySelector('#FooterColumns') || document.querySelector('body');
    //var amBlockSelector = document.querySelector('#shopify-section-cart #site-usps')
    // if(amBlockSelector == null || amBlockSelector == undefined){
    //     amBlockSelector = elAMPosition || document.querySelector('#PreFooter') || document.querySelector('footer') || document.querySelector('#FooterColumns') || document.querySelector('body');
    // }
    // amBlockSelector.parentNode.parentNode.insertBefore(amBlock, amBlockSelector.parentNode.previousSibling);
    //amBlockSelector.parentNode.insertBefore(amBlock, amBlockSelector);

    if (INC.methods.detectDeviceType() == "mobile") {
        
        if(document.querySelector('#shopify-section-cart #basket-sidebar .basket-sidebar-background') != null){
            var amBlockSelector = document.querySelector('#shopify-section-cart #basket-sidebar .basket-sidebar-background')
            amBlockSelector.parentNode.insertBefore(amBlock, amBlockSelector.nextSibling);
        }else{
            var amBlockSelector = document.querySelector('#shopify-section-cart #site-usps')
            if(amBlockSelector != null || amBlockSelector != undefined){
                amBlockSelector.parentNode.parentNode.insertBefore(amBlock, amBlockSelector.parentNode.previousSibling);
            } else{
                var elAMPosition = document.querySelector('.ContentBottom') || document.querySelector('.specialOffersContainer');
                var amBlockSelector = elAMPosition || document.querySelector('#PreFooter') || document.querySelector('footer') || document.querySelector('#FooterColumns') || document.querySelector('body');
                amBlockSelector.parentNode.insertBefore(amBlock, amBlockSelector);
            }
        }
   
    }else{
        var amBlockSelector = document.querySelector('#shopify-section-cart #site-usps')
        if(amBlockSelector != null || amBlockSelector != undefined){
            amBlockSelector.parentNode.parentNode.insertBefore(amBlock, amBlockSelector.parentNode.previousSibling);
        } else{
            var elAMPosition = document.querySelector('.ContentBottom') || document.querySelector('.specialOffersContainer');
            var amBlockSelector = elAMPosition || document.querySelector('#PreFooter') || document.querySelector('footer') || document.querySelector('#FooterColumns') || document.querySelector('body');
            amBlockSelector.parentNode.insertBefore(amBlock, amBlockSelector);
        }
    }
    


    amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnImgBlock")).style.visibility = "hidden";
    amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnImgBlock")).setAttribute("style", "pointer-events: none;opacity:0.5;visibility: hidden");;


    var productBlocks = amProductListBlock.querySelectorAll(getSelectorClassName(classNames, "productBlock"));
    var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length;
    var sliderBtnCounter = 0;

    if (all_p_length > 4) {
        amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnImgBlock")).style.visibility = "visible";
        // amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).style.visibility = "visible";
    }
    amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnImgBlock")).addEventListener("click", function () {
        sliderBtnCounter++;
        if (sliderBtnCounter > productBlocks.length - 3) {
            sliderBtnCounter--;
        }
        var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
        // productBlocks[sliderBtnCounter - 1].style.display = "none";
        var cc_ount = 1;
        if (window.innerWidth > 1024) {
            cc_ount = 4
        }
        if (+INC.clientConfig.slidevalue + +cc_ount < all_p_length) {
            amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnImgBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            INC.clientConfig.slidevalue++
            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - 240) + 'px';
            var menu = amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afProductListBlock"));
            menu.style['transitionDuration'] = '0.5s'
            menu.style['marginLeft'] = INC.clientConfig.offset
        }

        if (+INC.clientConfig.slidevalue + +cc_ount == all_p_length) {
            amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnImgBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
        }
    });

    amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).addEventListener("click", function () {
        sliderBtnCounter--;
        if (sliderBtnCounter == -1) sliderBtnCounter = 0;
        // productBlocks[sliderBtnCounter].style.display = "flex";
        var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
        if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
        if (INC.clientConfig.slidevalue > 0) {
            amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnImgBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            INC.clientConfig.slidevalue--
            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + 240) + 'px';
            var menu = amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afProductListBlock"));
            menu.style['transitionDuration'] = '0.5s'
            menu.style['marginLeft'] = INC.clientConfig.offset
        }
        if (INC.clientConfig.slidevalue == 0) {
            amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnImgBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
        }
    });
    setTimeout(function () {
        if (jQuery('.Cart-ProductRemove') != null) {
            jQuery('.Cart-ProductRemove').click(function (e) {
                //setTimeout(function () {
                    var af_block = document.querySelector('.inc_af_block');
                    if (af_block != null) {
                        af_block.parentNode.removeChild(af_block);
                    }
                    INC.init();
                //}, 6000)
            });
        }


        setTimeout(function () {
            if (document.querySelector('.inc_af_block .inc_product_module_block') == null) {
                var remamblock = document.querySelector('.inc_af_block')
                if (remamblock != null) {
                    remamblock.parentNode.removeChild(remamblock);
                }
            }
        }, 100)

    }, 2000)
    if (document.querySelectorAll('.inc_af_block .inc_product_module_block').length < 4) {
        if (document.querySelectorAll('.inc_af_block .inc_product_module_block').length == 1) {
            document.querySelector('.inc_af_block').classList.add('oneProduct');
        } else {
            document.querySelector('.inc_af_block').classList.add('lessthanfour');
        }
    }
    setTimeout(function () {
        onloadpdp = true
    }, 400)

}
INC.methods.createPDPBlock = function (sidebar) {
    var productListObj = INC.dataStore.dataStoreObj;
    // var pdpProductId = INC.dataStore.pdpProductId;
    var pdpProductId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: INC.dataStore.pdpProductId }).id;
    var empty_sidebarflag = false
    INC.config.Product_id = INC.methods.getProductIdFromWebPage();
    if (INC.dataStore.dataStoreObj != undefined && INC.dataStore.dataStoreObj[INC.config.Product_id] != undefined && INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id] != undefined) {
        if (INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id].bundleId == "12345679") {
            empty_sidebarflag = true
        }
    }
    if (sidebar != "sidebar") {
        if (INC.dataStore.dataStoreObj.undefined != undefined || empty_sidebarflag == false) {
            if ((INC.config.prod_json_respons[0].ProductType == "simple" && INC.config.prod_json_respons[0].ProductSku != null) || INC.config.prod_json_respons[0].ProductType == "configurable") {
                document.querySelector('body').classList.add('inc_bundles_available');
                var classNames = INC.uiConfig.pdp.className;
                var pdpBlock = this.getElementChilds("pdpModalBlock", "pdp");

                var getSelectorClassName = INC.methods.getSelectorClassName;
                Array.prototype.forEach.call(pdpBlock.querySelectorAll(getSelectorClassName(classNames, "productBlock")), function (block) {
                    block.parentNode.removeChild(block);
                });

                function getViewElement(className) {
                    return pdpBlock.querySelector(getSelectorClassName(classNames, className));
                }

                var modalTitle = getViewElement("pdpModalTitleText");
                modalTitle.innerText = INC.bundleVars.pdpTitle;
                var mainProductBlock = this.createProductModuleBlock(pdpProductId, "pdp", false);
                var bundleProductsArray = INC.dataStore.bundleProductsArray;
                var elPdpMainProductBlock = getViewElement("pdpModalMainProductBlock");
                elPdpMainProductBlock.innerHTML = "";
                if (mainProductBlock != undefined) {
                    elPdpMainProductBlock.appendChild(mainProductBlock);
                }

                var mainProductHeader = getViewElement("productHeaderTitleText");
                // if (mainProductHeader != null) {
                //     mainProductHeader.innerText = INC.bundleVars.thisItem;
                // }
                var titleBlock = getViewElement('productTitleTextBlock');
                var titleText = getViewElement('productTitleText');
                var secondaryText = INC.methods.generateHTMLTags('div');
                secondaryText.classList.add('inc_secondary_title_text');
                // secondaryText.innerText = INC.bundleVars.thisItem;
                if (titleText != null) {
                    titleText.parentNode.insertBefore(secondaryText, titleText);
                }

                var pdpBundleProductListMainBlock = getViewElement("pdpBundleProductListMainBlock");
                pdpBundleProductListMainBlock.innerHTML = "";

                var pdpBundleProductListItemsBlock = getViewElement("pdpBundleProductListItemsBlock");
                pdpBundleProductListItemsBlock.innerHTML = "";

                var productVisibleCount = (bundleProductsArray.length > 5) ? 5 : bundleProductsArray.length;

                // if (INC.config.deviceType == "mobile") productVisibleCount = (bundleProductsArray.length > 3) ? 3 : bundleProductsArray.length;

                for (var i = 0; i < productVisibleCount; i++) {
                    // var productBlock = this.createProductBlock(bundleProductsArray[i], "pdp");
                    var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: bundleProductsArray[i] });
                    var productBlock = this.createProductModuleBlock(firstProductObjByMainId.id, "pdp", true);
                    if (productBlock != undefined) {
                        if (INC.config.deviceType == "mobile") productBlock.style.display = "none";

                        pdpBundleProductListMainBlock.appendChild(productBlock);
                    }
                    if (productBlock != undefined) {
                        if (INC.config.deviceType == "mobile") {
                            var productListItemBlock = this.createProductListItemBlock(firstProductObjByMainId, "pdp");
                            pdpBundleProductListItemsBlock.appendChild(productListItemBlock);
                        }
                        var item_title_head = productBlock.querySelector('.inc_product_desc_title_text_header')
                        if (item_title_head != null) {
                            // item_title_head.innerHTML = INC.bundleVars.frequentlyBoughtWith + ":"
                        }
                        var titleBlock = productBlock.querySelector('.inc_product_desc_title_text_block');
                        var titleText = productBlock.querySelector('.inc_product_desc_title_text');
                        var secondaryText = INC.methods.generateHTMLTags('div');
                        secondaryText.classList.add('inc_secondary_title_text');
                        // secondaryText.innerText = INC.bundleVars.frequentlyBoughtWith;
                        titleText.parentNode.insertBefore(secondaryText, titleText);
                        // titleBlock.appendChild(secondaryText);
                    }
                }

                if (INC.config.deviceType == "mobile") pdpBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock")).classList.add("inc_active");
                pdpBundleProductListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock")).style.display = "block";

                var pdpBundleCartBlock = this.createPDPBundleCartBlock();
                var rpdpBundleCartBlock = pdpBlock.querySelector(getSelectorClassName(classNames, "pdpModalBundleCartBlock"));
                rpdpBundleCartBlock.parentNode.removeChild(rpdpBundleCartBlock);
                pdpBlock.querySelector(getSelectorClassName(classNames, "pdpModalBundleBlock")).appendChild(pdpBundleCartBlock);


                INC.methods.clear();


               
                //var pdpBlockSibling = document.querySelector('#product-detail-page #product-images-container #product-tabs-desktop');
                //template-page-order
                //page-container
                if((window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
                    var sibl = document.querySelector('#template-page-order')
                    if(sibl != null){
                        sibl.appendChild(pdpBlock)
                    }else{
                        var sibl = document.querySelector('#product-detail-page')
                        sibl.appendChild(pdpBlock)
                    }
                    
                }else{
                    if (INC.methods.detectDeviceType() == "mobile") {
                        if(document.querySelector('#product-detail .product-custom-block-container') != null){
                            var pdpBlockSibling = document.querySelector('#product-detail .product-custom-block-container')
                            pdpBlockSibling.parentNode.insertBefore(pdpBlock, pdpBlockSibling.previousSibling);
                        }else if(document.querySelector('#product-detail #mbcBundleItemsWidget') != null){
                            var pdpBlockSibling = document.querySelector('#product-detail #mbcBundleItemsWidget')
                            pdpBlockSibling.parentNode.insertBefore(pdpBlock, pdpBlockSibling.previousSibling);
                        }else{
                            var pdpBlockSibling = document.querySelector('#product-detail-page #product-detail');
                            pdpBlockSibling.parentNode.insertBefore(pdpBlock, pdpBlockSibling.nextSibling);
                        }
                   }else {
                        var pdpBlockSibling = document.querySelectorAll('#product-detail-page .container-fluid .row')[1];
                        pdpBlockSibling.parentNode.insertBefore(pdpBlock, pdpBlockSibling.nextSibling);
                        //pdpBlockSibling.parentNode.insertBefore(pdpBlock, pdpBlockSibling);
                    }
                }
                

                var elProductAddBlock = document.querySelectorAll(getSelectorClassName(classNames, "productAddBlock"));



                var productBlocks = getViewElement("pdpBundleProductListBlock").querySelectorAll(getSelectorClassName(classNames, "productModuleBlock"));
                var show_more_less_block = getViewElement("pdpBundleProductListItemsBlockShowMoreLess")
                var show_more_less_text = getViewElement("pdpBundleProductListItemsBlockShowMoreLessText");
                show_more_less_text.innerHTML = INC.bundleVars.showMoreProducts;
                show_more_less_text.classList.add('down_wrrow');

                if (document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header') != null) {
                    // document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header').innerHTML = INC.bundleVars.thisItem + ":"
                }
                // getViewElement("pdpBundleProductListMainBlock").classList.add('inc_active')pdpBundleProductListMainBlock
                getViewElement("pdpBundleProductListItemsBlockShowMoreLess").addEventListener("click", function (ev) {
                    var show_more_less_text = getViewElement("pdpBundleProductListItemsBlockShowMoreLessText");
                    var clickshowmore = ev.target.parentNode;
                    if (clickshowmore.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_text') != null && clickshowmore.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_text').classList.contains('down_wrrow') == true) {
                        show_more_less_text.innerHTML = INC.bundleVars.showLessProducts;
                        show_more_less_text.classList.remove('down_wrrow');
                        show_more_less_text.classList.add('up_wrrow');
                        document.querySelector('.inc_pdp_bundle_product_list_items_block').classList.add('inc_active');
                    } else {
                        show_more_less_text.innerHTML = INC.bundleVars.showMoreProducts;
                        show_more_less_text.classList.remove('up_wrrow');
                        show_more_less_text.classList.add('down_wrrow');
                        document.querySelector('.inc_pdp_bundle_product_list_items_block').classList.remove('inc_active');
                    }
                });
                getViewElement("pdpBundleProductLeftBtnImgBlock").setAttribute("style", "pointer-events: none; z-index:99");
                getViewElement("pdpBundleProductLeftBtnImgBlock").setAttribute("style", "opacity: 0.5; z-index: 9");
                getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity: 0.5; z-index: 9");
                var sliderBtnCounter = 0;
                if (INC.debug) console.log("pdp product blocks count:" + productBlocks.length);
                var lengthCount = productBlocks.length + 1;
                if (productBlocks.length > 2) {
                    getViewElement("pdpBundleProductRightBtnBlock").addEventListener("click", function () {
                        var prod_c = 1;
                        var width_prod = 262;
                        if (window.innerWidth > 1139) {
                            prod_c = 2
                            width_prod = 259;
                            if (inc_isIE()) {
                                width_prod = 270
                            }
                        }
                        if (INC.clientConfig.slidevalue + prod_c < productBlocks.length) {
                            getViewElement("pdpBundleProductLeftBtnImgBlock").setAttribute("style", "pointer-events: auto;");
                            getViewElement("pdpBundleProductLeftBtnImgBlock").setAttribute("style", "opacity: 1; z-index: 9");
                            getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity: 1; z-index: 9");
                            INC.clientConfig.slidevalue++
                            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - width_prod) + 'px';
                            var menu = getViewElement("pdpBundleProductListMainBlock");
                            menu.style['transitionDuration'] = '0.5s'
                            menu.style['marginLeft'] = INC.clientConfig.offset;
                        }
                        if (INC.clientConfig.slidevalue + prod_c == productBlocks.length) {
                            getViewElement("pdpBundleProductRightBtnImgBlock").setAttribute("style", "pointer-events: none;opacity:0.5");
                            getViewElement("pdpBundleProductRightBtnImg").setAttribute("style", "pointer-events: none;opacity:0.5");
                        }
                        sliderBtnCounter++;

                        if (sliderBtnCounter > lengthCount - 3) {
                            sliderBtnCounter--;
                        }
                        // productBlocks[sliderBtnCounter - 1].style.display = "none";
                        if (INC.debug) console.log(sliderBtnCounter);
                        if (INC.debug) console.log("pdp product blocks count:" + productBlocks.length);
                    });

                    getViewElement("pdpBundleProductLeftBtnBlock").addEventListener("click", function () {
                        // INC.clientConfig.slidevalue--
                        var prod_c = 1;
                        var width_prod = 262;
                        if (window.innerWidth > 1139) {
                            prod_c = 2
                            width_prod = 259;
                            if (inc_isIE()) {
                                width_prod = 270
                            }
                        }
                        if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
                        if (INC.clientConfig.slidevalue > 0) {
                            getViewElement("pdpBundleProductRightBtnImgBlock").setAttribute("style", "pointer-events: auto;opacity:1");
                            getViewElement("pdpBundleProductRightBtnImg").setAttribute("style", "pointer-events: auto;opacity:1");
                            INC.clientConfig.slidevalue--
                            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + width_prod) + 'px';
                            var menu = getViewElement("pdpBundleProductListMainBlock");
                            menu.style['transitionDuration'] = '0.5s'
                            menu.style['marginLeft'] = INC.clientConfig.offset
                        }
                        if (INC.clientConfig.slidevalue == 0) {
                            getViewElement("pdpBundleProductLeftBtnImgBlock").setAttribute("style", "pointer-events: none;");
                            getViewElement("pdpBundleProductLeftBtnImgBlock").setAttribute("style", "opacity: 0.5; z-index: 9");
                            getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity: 0.5; z-index: 9");
                        }
                        sliderBtnCounter--;
                        if (sliderBtnCounter == -1) sliderBtnCounter = 0;
                        // productBlocks[sliderBtnCounter].style.display = "block";
                        if (INC.debug) console.log(sliderBtnCounter);
                    });
                }
                if((window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
                    if (document.querySelector('.inc_pdp_block') != null) {
                        document.querySelector('.inc_pdp_block').style.display = "block";
                    }
                }else{
                    if (document.querySelector('.ProductActions .Button') != null) {
                        if (document.querySelector('.ProductActions .Button').getAttribute('disabled') == "disabled") {
                            if (document.querySelector('.inc_pdp_block') != null) {
                                document.querySelector('.inc_pdp_block').style.display = "none";
                            }
                        }
                    } else {
                        if (document.querySelector('.inc_pdp_block') != null) {
                            // document.querySelector('.inc_pdp_block').style.display="none";
                        }
                    }
                }
                
                if (!(productBlocks.length > 2)) {
                    if (INC.debug) console.log(productBlocks.length);
                    getViewElement("pdpBundleProductRightBtnImgBlock").style.visibility = "hidden";
                    getViewElement("pdpBundleProductLeftBtnImgBlock").style.visibility = "hidden";
                }

                setTimeout(function () {

                    for (var i = 0; i < 8; i++) {
                        if (typeof (elProductAddBlock[i]) != "undefined" && i % 2 != 0) {
                            //debugger
                            //console.log(elProductAddBlock[i])
                            var productBlockNode = elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                            if (window.innerWidth > 820) {
                                if (i == 1 || i == 3 || i == 5) {
                                    var module_block = elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode;
                                    if (module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img') != null) {
                                        module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img').click()
                                    }
                                    if (module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img') != null) {
                                        module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img').click()
                                    }
                                    
                                    //productBlockNode.querySelector('.inc_product_modal_block .inc_product_desc_add_block').click();
                                    //productBlockNode.querySelector('.inc_product_showcase_block .inc_product_desc_add_block').click();
                                    elProductAddBlock[i].click();
                                }
                            } else if (i == 1 || i == 3) {
                                var module_block = elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode;
                                if (module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img') != null) {
                                    module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img').click()
                                }
                                if (module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img') != null) {
                                    module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img').click()
                                }
                                elProductAddBlock[i].click();

                            }
                            if(productBlockNode.querySelector('.inc_product_modal_block .inc_product_desc_att_zero_block.active .inc_product_desc_att_size_list_item_img_block.active') != null){
                                var selvar = productBlockNode.querySelector('.inc_product_modal_block .inc_product_desc_att_zero_block.active .inc_product_desc_att_size_list_item_img_block.active');
                                if(selvar.getAttribute('data-size') != "" || selvar.getAttribute('data-size') != null){
                                    if(selvar.getAttribute('data-size') != null){
                                        var textsel = selvar.getAttribute('data-size')
                                        var sel_variant = productBlockNode.querySelector('.inc_product_modal_block .inc_variant_tag')
                                        if(sel_variant != null){
                                            var alloptionss = sel_variant.querySelectorAll('option')
                                            for(j=0;j<alloptionss.length;j++){
                                                if(alloptionss[j].getAttribute('data-size').indexOf(textsel) >= 0){
                                                    alloptionss[j].selected = 'selected'
                                                    inc_onchange_variant(sel_variant)
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    // if(document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_zero_block.active .inc_product_desc_att_size_list_item_img_block.active') != null){
                    //     var selvar = document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_zero_block.active .inc_product_desc_att_size_list_item_img_block.active');
                    //     if(selvar.getAttribute('data-size') != "" || selvar.getAttribute('data-size') != null){
                    //         if(selvar.getAttribute('data-size') != null){
                    //             var textsel = selvar.getAttribute('data-size')
                    //             var sel_variant = document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_variant_tag')
                    //             if(sel_variant != null){
                    //                 var alloptionss = sel_variant.querySelectorAll('option')
                    //                 for(j=0;j<alloptionss.length;j++){
                    //                     if(alloptionss[j].getAttribute('data-size').indexOf(textsel) >= 0){
                    //                         alloptionss[j].selected = 'selected'
                    //                         inc_onchange_variant(sel_variant)
                    //                         break;
                    //                     }
                    //                 }
                    //             }
                    //         }
                    //     }
                    // }
                    setTimeout(function(){
                        onloadpdp = true
                    },3000)
                }, 100)
            }
        }
    }
    if (sidebar == "sidebar") {
            this.createSidebarBlock();
    }
    // this.trackingEvents("productPageVisit", { "product_id": INC.dataStore.pdpProductId });
    // this.trackingEvents("catalogProductView", { "product_id": INC.dataStore.pdpProductId });
    INC.methods.updateBundleCart();
}

INC.methods.createPDPBundleCartBlock = function () {
    var classNames = INC.uiConfig.pdp.className;
    var pdpBundleCartBlock = this.getElementChilds("pdpModalBundleCartBlock", "pdp");
    var getSelectorClassName = INC.methods.getSelectorClassName;
    function getViewElement(className) {
        return pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elBundleCartTitleBlock = getViewElement("pdpBundleCartTitleBlock");
    var elBundleCartTitleText = getViewElement("pdpBundleCartTitleText");
    var elBundleCartAddedBlock = getViewElement("pdpBundleCartAddedBlock");
    var elBundleCartSummaryViewBlock = getViewElement("pdpBundleCartSummaryViewBlock");
    var elBundleCartSummaryViewBtnText = getViewElement("pdpBundleCartSummaryViewBtnText");
    var elBundleCartAddBtnBlock = getViewElement("pdpBundleCartSummaryAddBtnBlock");
    // var elBundleCartAddBtnOverlay = getViewElement("pdpModalBundleCartOverlay");
    elBundleCartTitleText.innerText = "Price summary";

    var elBundleCartTitleImgBlock = getViewElement("pdpBundleCartTitleImgBlock");
    elBundleCartTitleImgBlock.addEventListener('click', function () {
        elBundleCartTitleBlock.classList.toggle('inc_active');
        elBundleCartAddedBlock.classList.toggle('inc_active');
        elBundleCartSummaryViewBlock.classList.toggle('inc_active');
        pdpBundleCartBlock.classList.toggle('inc_active');
        document.querySelector('body').classList.toggle('inc_mobile_overlay');
        document.querySelector('.inc_pdp_bundle_cart_overlay_block').classList.toggle('inc_active');
        document.querySelector('html').classList.remove('price_section_active')
        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
            if (INC.methods.detectPageType() == "pdp") {
                document.querySelector('body').style.position = "";
                if(document.querySelector('.inc_pdp_block') != null){
                    jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 10}, 0);
                }
            }
            else if (INC.methods.detectPageType() == "cartPage") {
                jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
            }
        }
    });

    elBundleCartSummaryViewBtnText.innerText = INC.bundleVars.added + " items";
    elBundleCartSummaryViewBlock.addEventListener('click', function () {
        if (INC.debug) console.log("ok");
        document.querySelector('body').classList.toggle('inc_mobile_overlay');
        elBundleCartTitleBlock.classList.toggle('inc_active');
        elBundleCartAddedBlock.classList.toggle('inc_active');
        elBundleCartSummaryViewBlock.classList.toggle('inc_active');
        pdpBundleCartBlock.classList.toggle('inc_active');
        document.querySelector('.inc_pdp_bundle_cart_overlay_block').classList.toggle('inc_active');
        document.querySelector('html').classList.toggle('price_section_active')
        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
            if (document.querySelector('.inc_pdp_bundle_cart_overlay_block').classList.contains('inc_active')) {
                document.querySelector('body').style.position = "fixed";
            } else {
                document.querySelector('body').style.position = "";
                if (INC.methods.detectPageType() == "pdp") {
                    if(document.querySelector('.inc_pdp_block') != null){
                         jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 10}, 0);
                    }
                }
                else if (INC.methods.detectPageType() == "cartPage") {
                    jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
                }
            }
        }
    });

    elBundleCartAddBtnBlock.addEventListener("click", function (e) {
       // debugger
        var addCheckCategory = INC.config.pdpaddedProductList;
        var productListArrayprod = INC.dataStore.bundleProductsArray;
        var categoryList = INC.dataStore.methods().getUniqueCatergories();
        var count=0;
        
        for(ct=0;ct<categoryList.length;ct++){
            for (var ij = 0; ij < productListArrayprod.length; ij++) {
                if(ij == 0){
                    count=0;
                }
                var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: productListArrayprod[ij] });
                if (firstProductObjByMainId["categoryName"] == categoryList[ct]) {
                    if(addCheckCategory.indexOf(productListArrayprod[ij]) == -1){
                        count++
                    }
                }
            }
            
            if(count == 0){
                if(document.querySelector('.inc_recommended_tabs_list_item_block[title="'+categoryList[ct]+'"]') != null){
                    var categrem = document.querySelector('.inc_recommended_tabs_list_item_block[title="'+categoryList[ct]+'"]')
                    if(categrem != null){
                        categrem.parentNode.removeChild(categrem)
                    }
                }
            }
        }
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;

        if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
            document.querySelector('.inc_recommended_tabs_list_item_block').click()
            if(document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null){
                var remcateg = document.querySelector('.inc_recommended_tabs_list_item_block.inc_active')
                if(remcateg != null){
                    remcateg.parentNode.removeChild(remcateg)
                }
            }
        }
        
        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
        document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
        document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', '')
        if (INC.debug) console.log("Bundle Cart Add Btn Clicked");
        document.querySelector('body').classList.add('inc_overlay');
        document.querySelector('html').classList.add('inc_prevent_scroll')
        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
            document.querySelector('body').style.position = "fixed"
        }
        
        document.querySelector('html').style.overflow = "hidden";
        var btn_cart = e.target
        //INC.config.disablebtn = false
        btn_cart.classList.add('inc_loading')
        INC.methods.addBundleToCart(btn_cart);
        // INC.methods.showSidebar();
        // INC.methods.updateSidebarBlock();
    });

    return pdpBundleCartBlock;
}
INC.methods.createSidebarBlock = function () {
    if(document.querySelector('.sidebar_outer') != null) document.querySelector('.sidebar_outer').parentNode.removeChild(document.querySelector('.sidebar_outer'))
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var sbBlock = this.getElementChilds("sidebarOuterBlock", "sidebar");
    var getSelectorClassName = INC.methods.getSelectorClassName;

    // sbBlock.style.display = "none";

    function getViewElement(className) {
        return sbBlock.querySelector(getSelectorClassName(classNames, className));
    }
    // if(INC.debug) console.log(sbBlock);
    getViewElement("sidebarCartAddedListBlock").innerHTML = "";

    var elHeaderContinueText = getViewElement("sidebarHeaderContinueText");
    var elHeaderTitleText = getViewElement("sidebarHeaderTitleText");
    var elHeaderItemCountBlock = getViewElement("sidebarHeaderItemCountBlock");
    var elHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
    var elHeaderItemCountFigureText = getViewElement("sidebarHeaderItemCountFigureText");
    var elRecommendedTitleText = getViewElement("sidebarRecommendedTitleText");
    var elRecommendedTabsListBlock = getViewElement("sidebarRecommendedTabsListBlock");
    var elRecommendedProductsBlock = getViewElement("sidebarRecommendedProductsBlock");
    // var elRecommendedProductsListBlock = getViewElement("sidebarRecommendedProductsListBlock");
    var elCheckoutContinueBtnText = getViewElement("sidebarCheckoutContinueBtnText");
    var elCheckoutBasketBtnText = getViewElement("sidebarCheckoutBasketBtnText");

    elHeaderContinueText.innerText = "Back";
    elHeaderTitleText.innerText = INC.bundleVars.justAdded;
    elHeaderItemCountTitleText.innerText = Object.keys(dataStore.bundleCartProducts).length + " " + INC.bundleVars.items;
    // elHeaderItemCountFigureText.innerText = Object.keys(dataStore.bundleCartProducts).length;
    elRecommendedTitleText.innerText = INC.bundleVars.otherCustomers;
    elCheckoutContinueBtnText.innerText = INC.bundleVars.continueShopping;

    var elCheckoutLink = document.createElement('a');
    elCheckoutLink.href = INC.clientConfig.checkoutLink;
    var elCheckoutTextDiv = document.createElement('div');

    elCheckoutTextDiv.innerText = INC.bundleVars.viewBag;
    elCheckoutLink.appendChild(elCheckoutTextDiv);
    elCheckoutBasketBtnText.appendChild(elCheckoutLink);
    elCheckoutTextDiv.addEventListener("click", function () {
        window.location = INC.clientConfig.checkoutLink;
    })
    // elCheckoutBasketBtnText.innerText = INC.methods.getTranslation("VIEW BASKET");

    // elCheckoutBasketBtnText.addEventListener("click", function () {
    //     // document.cookie = "openCartSlider=1; path=/";
    //     window.location.href = INC.clientConfig.checkoutLink;
    // });

    elHeaderItemCountBlock.addEventListener("click", function () {
        // document.cookie = "openCartSlider=1; path=/";
        // window.location.href = INC.clientConfig.checkoutLink;
    });

    // elRecommendedProductsListBlock.innerHTML = "";

    var productCategoriesArray = INC.dataStore.methods().getUniqueCatergories();
    

    elRecommendedTabsListBlock.innerHTML = "";
    var category_count = 0
    if (INC.config.pageType != "productList") {
        productCategoriesArray.forEach(function (productCategory) {
            if (category_count < productCategoriesArray.length && productCategory != undefined) {
                category_count++
                var sidebarTabsListItemBlock = INC.methods.getElementChilds("sidebarRecommendedTabsListItemBlock", "sidebar");
                var sidebarTabsListItemText = sidebarTabsListItemBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemText"));
                // var anchor = document.createElement('a');
                sidebarTabsListItemText.setAttribute("title", productCategory);
                sidebarTabsListItemBlock.setAttribute("title", productCategory);
                if (INC.config.pageType != "productList") {
                    sidebarTabsListItemText.innerText = productCategory.toLowerCase();
                }
                // sidebarTabsListItemBlock.appendChild(anchor);
                // if(INC.config.pageType != "productList"){
                //     sidebarTabsListItemText.innerText = productCategory.toLocaleLowerCase();
                // }

                sidebarTabsListItemBlock.addEventListener("click", function () {
                    if (INC.debug) console.log(this.innerText);
                    var elm = this
                    elRecommendedProductsBlock.innerHTML = "";
                    elRecommendedProductsBlock.innerHTML = INC.methods.getElementChilds("sidebarRecommendedProductsBlock", "sidebar").innerHTML;
                    // console.log(elRecommendedProductsBlock);
                    var elRecommendedProductsListBlock = elRecommendedProductsBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
                    elRecommendedProductsListBlock.innerHTML = "";
                    // console.log(elRecommendedProductsListBlock);
                    // console.log(elRecommendedTabsListBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")));
                    Array.prototype.forEach.call(elRecommendedTabsListBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")), function (elTabsItemBlock) {
                        // if (INC.debug) console.log(elTabsItemBlock);
                        elTabsItemBlock.classList.remove("inc_active");
                    });
                    sidebarTabsListItemBlock.classList.add("inc_active");
                    INC.methods.updateSidebarProductsList(elRecommendedProductsListBlock, productCategory);
                    setTimeout(function () {
                        if (document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null) {
                            console.log("elm " + elm)
                            if (elm.parentNode != null) {
                                elm.parentNode.querySelector('.inc_recommended_tabs_list_item_text').click();
                            }
                            if (elm != null) {
                                if (elm.parentNode != null) {
                                    elm.parentNode.removeChild(elm);
                                }
                            }
                        }
                        if (document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length < 4) {
                            if (document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length == 1) {
                                document.querySelector('.inc_recommended_products_list_block').classList.add('oneProduct');
                            } else {
                                if (document.querySelector('.inc_recommended_products_list_block') != null) {
                                    document.querySelector('.inc_recommended_products_list_block').classList.add('lessthanfour');
                                }
                            }
                        }
                    }, 500)
                });

                elRecommendedTabsListBlock.appendChild(sidebarTabsListItemBlock);
            }
        });
        if (elRecommendedTabsListBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")) != null) elRecommendedTabsListBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")).click();
    }
    else {
        var elRecommendedProductsListBlock = elRecommendedProductsBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
        elRecommendedProductsListBlock.innerHTML = "";
        INC.methods.updateSidebarProductsList(elRecommendedProductsListBlock, "all");
    }



    getViewElement("sidebarHeaderContinueBlock").addEventListener("click", function () {
        document.querySelector('body').classList.remove('inc_overlay');
        document.querySelector('html').classList.remove('inc_prevent_scroll')
        document.querySelector('html').style.overflow = "auto";
        INC.methods.hideSidebar();
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        INC.config.pdpaddedProductList = []
    });

    getViewElement("sidebarCheckoutContinueBlock").addEventListener("click", function () {
        document.querySelector('body').classList.remove('inc_overlay');
        document.querySelector('html').classList.remove('inc_prevent_scroll')
        document.querySelector('html').style.overflow = "auto";
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = []
    });

    getViewElement("sidebarCheckoutBasketBlock").addEventListener("click", function () {
        window.location = INC.clientConfig.checkoutLink;
        // document.cookie = "openCartSlider=1; path=/";
        // window.location.reload();
    });

    var addedProductBlocks = "";
    var addedSliderBtnCounter = 0;

    getViewElement("sidebarCartAddedRightBtnBlock").addEventListener("click", function () {
        addedProductBlocks = getViewElement("sidebarCartAddedListBlock").querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock"));
        if (INC.debug) console.log("right click");
        if (INC.debug) console.log(addedProductBlocks);
        if (INC.debug) console.log(getViewElement("sidebarCartAddedListBlock"));
        // if (addedSliderBtnCounter > addedProductBlocks.length - 2) {
        //     addedSliderBtnCounter--;
        //     return;
        // }

        // if (addedProductBlocks[addedSliderBtnCounter] != null) {
        //     addedProductBlocks[addedSliderBtnCounter].style.display = "none";
        //     addedSliderBtnCounter++;
        // }
        addedSliderBtnCounter++;
        if (addedSliderBtnCounter > addedProductBlocks.length - 2) {
            addedSliderBtnCounter--;
        }
        if (addedProductBlocks.length > 2) {
            addedProductBlocks[addedSliderBtnCounter - 1].style.display = "none";
        }
    });

    getViewElement("sidebarCartAddedLeftBtnBlock").addEventListener("click", function () {
        addedProductBlocks = getViewElement("sidebarCartAddedListBlock").querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock"));
        if (INC.debug) console.log("left click");
        if (INC.debug) console.log(addedProductBlocks);
        // if (addedProductBlocks[addedSliderBtnCounter] != null) {
        //     addedProductBlocks[addedSliderBtnCounter].style.display = "flex";
        //     (addedSliderBtnCounter <= 0) ? 0 : addedSliderBtnCounter--;
        //     // logger("clicked");
        // }
        addedSliderBtnCounter--;
        if (addedSliderBtnCounter == -1) addedSliderBtnCounter = 0;
        addedProductBlocks[addedSliderBtnCounter].style.display = "flex";
    });

    getViewElement("sidebarCartAddedRightBtnImgBlock").style.visibility = "hidden";
    getViewElement("sidebarCartAddedLeftBtnImgBlock").style.visibility = "hidden";

    var body = document.querySelector('body');
    body.appendChild(sbBlock);
    var elSideBarOverlayBlock = document.createElement('div');
    elSideBarOverlayBlock.setAttribute("class", "inc_sidebar_overlay_block");
    elSideBarOverlayBlock.addEventListener("click", function () {
        document.querySelector('body').classList.remove('inc_overlay');
        document.querySelector('html').classList.remove('inc_prevent_scroll')
        document.querySelector('html').style.overflow = "auto";
        INC.methods.hideSidebar();
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    });
    elSideBarOverlayBlock.style.display = "none";
    body.appendChild(elSideBarOverlayBlock);
}
INC.methods.updateSidebarBlock = function () {
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = this.getSelectorClassName;
    var sbBlock = document.querySelector(getSelectorClassName(classNames, "sidebarOuterBlock"));
    var subtotalactiveprice = 0
    var subtotalregukarprice = 0
    function getViewElement(className) {
        return sbBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var sidebarHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
    var elHeaderItemCountFigureText = getViewElement("sidebarHeaderItemCountFigureText");
    var elHeadersubtotalactivetext = getViewElement("sidebarCartAddedProductDescSubTotalActiveText");
    var elHeadersubtotalregulartext = getViewElement("sidebarCartAddedProductDescSubTotalRegularText");
    var sbCartBlock = getViewElement("sidebarCartAddedListBlock");
    sbCartBlock.innerHTML = "";

    var bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
    sidebarHeaderItemCountTitleText.innerHTML = Object.keys(dataStore.bundleCartProducts).length + " " + INC.bundleVars.items + "  |  ";

    var headerItemCountFigureText = 0;
    var subtotalactiveprice = 0
    var subtotalregukarprice = 0
    bundleCartProductsArray.forEach(function (productSKU) {

        headerItemCountFigureText = headerItemCountFigureText + parseInt(dataStore.bundleCartProducts[productSKU]);
        // hearsubtotaprice = hearsubtotaprice+ +

        var findObj = new INC.classes.FindObj({ sku: productSKU });
        var productObj = INC.dataStore.methods().getProductBySKU(findObj);
        var productBlock = INC.methods.getElementChilds("sidebarCartAddedProductBlock", "sidebar");
        //current  active prod
        var color = "";
        var size = "";
        var just_check_prod_block = document.querySelector('.inc_product_module_block[data-id="' + mainProductId + '"]')
        if (just_check_prod_block != null) {
            if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div') != null) {
                size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div').innerText
            }
            if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null) {
                color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
            }
        }
        if (INC.debug) console.log("size " + size)
        if (INC.debug) console.log("color " + color)
        //end
        productBlock.style.userSelect = "none";

        var elImg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductImg"));
        var elTitleText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescTitleText"));
        var elPriceActiveText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveText"));
        var elPriceRegularText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularText"));
        var elAttColorText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttColorText"));
        var elAttsizeText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttSizeText"));
        var elImgTag = INC.methods.generateHTMLTags('img');
        if(onloadpdp == true){
            elImgTag.src = productObj.imageURL
        }
        elImgTag.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" )
        elImg.appendChild(elImgTag);

        elTitleText.innerHTML = dataStore.bundleCartProducts[productSKU] + "<small>x</small>" + productObj.name;
        // if (color == "" && productObj.option[1] != undefined) {
        //     color = productObj.option[1].text;
        // }
        if (color != "") {
            elAttColorText.innerText = color + " | ";//(Object.keys(productObj.option).length > 1) ? ((typeof (productObj.option[2]) != "undefined") ? productObj.option[2].text : "") : "";
        }
        else if(size != ""){
            elAttsizeText.innerText = size;
        }
        else if (productObj.option[0] != undefined){
            elAttsizeText.innerText = productObj.option[0].text + " | "
        }
        var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
        var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
        subtotalactiveprice = (+subtotalactiveprice + +productObj.activePrice * dataStore.bundleCartProducts[productSKU]);
        subtotalregukarprice = (+subtotalregukarprice + +productObj.regularPrice * dataStore.bundleCartProducts[productSKU]);
        elPriceActiveText.innerText = "Price: " + INC.methods.formatPrice(activePrice * dataStore.bundleCartProducts[productSKU]);
        elPriceActiveText.innerText = elPriceActiveText.innerText;// + " | Quantity: " + dataStore.bundleCartProducts[productSKU];
        // if (productObj.activePrice != productObj.regularPrice) {
        //     elPriceRegularText.innerText = "Price: " + INC.clientConfig.currencySymbol + regularPrice + " " + ((INC.clientConfig.statusVAT == "true") ? "(Inc. VAT)" : "(Ex. VAT)");
        // }

        sbCartBlock.appendChild(productBlock);

    });
    if (INC.debug) console.log("subtotalactiveprice " + subtotalactiveprice)
    if (INC.debug) console.log("subtotalregukarprice " + subtotalregukarprice)
    // elHeaderItemCountFigureText.innerText = headerItemCountFigureText;
    if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
        elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
        elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
        elHeadersubtotalactivetext.innerHTML = INC.methods.formatPrice(subtotalactiveprice);
        elHeadersubtotalregulartext.innerHTML = INC.methods.formatPrice(subtotalregukarprice);
    } else {
        elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
        elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
        elHeadersubtotalactivetext.innerHTML = INC.methods.formatPrice(subtotalregukarprice);
        elHeadersubtotalregulartext.innerHTML = ""
    }
    sidebarHeaderItemCountTitleText.innerHTML = headerItemCountFigureText + " " + INC.bundleVars.items + "  |  ";
    if (bundleCartProductsArray.length > 2) {
        getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "visible";
        getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "visible";
    }

    if (!(bundleCartProductsArray.length > 2)) {
        getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "hidden";
        getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "hidden";
    }
    if (INC.methods.detectDeviceType() == "mobile") {
        if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
        }
    }
}

INC.methods.updateSidebarColBlock = function (COL_dataStore) {
    var dataStore = COL_dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = this.getSelectorClassName;
    var sbBlock = document.querySelector(getSelectorClassName(classNames, "sidebarOuterBlock"));
    var subtotalactiveprice = 0
    var subtotalregukarprice = 0
    function getViewElement(className) {
        return sbBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var sidebarHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
    var elHeaderItemCountFigureText = getViewElement("sidebarHeaderItemCountFigureText");
    var elHeadersubtotalactivetext = getViewElement("sidebarCartAddedProductDescSubTotalActiveText");
    var elHeadersubtotalregulartext = getViewElement("sidebarCartAddedProductDescSubTotalRegularText");
    var sbCartBlock = getViewElement("sidebarCartAddedListBlock");
    sbCartBlock.innerHTML = "";

    var bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
    sidebarHeaderItemCountTitleText.innerHTML = Object.keys(dataStore.bundleCartProducts).length + " " + INC.bundleVars.items + "  |  ";

    var headerItemCountFigureText = 0;
    var subtotalactiveprice = 0
    var subtotalregukarprice = 0
    bundleCartProductsArray.forEach(function (productSKU) {

        headerItemCountFigureText = headerItemCountFigureText + parseInt(dataStore.bundleCartProducts[productSKU]);
        // hearsubtotaprice = hearsubtotaprice+ +

        var findObj = new INC.classes.FindObj({ sku: productSKU });
        var productObj = dataStore.methods().getProductBySKU(findObj);
        var productBlock = INC.methods.getElementChilds("sidebarCartAddedProductBlock", "sidebar");
        //current  active prod
        var color = "";
        var size = "";
        var just_check_prod_block = document.querySelector('.inc_product_module_block[data-id="' + mainProductId + '"]')
        if (just_check_prod_block != null) {
            if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div') != null) {
                size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div').innerText
            }
            if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null) {
                color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
            }
        }
        if (INC.debug) console.log("size " + size)
        if (INC.debug) console.log("color " + color)
        //end
        productBlock.style.userSelect = "none";

        var elImg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductImg"));
        var elTitleText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescTitleText"));
        var elPriceActiveText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveText"));
        var elPriceRegularText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularText"));
        var elAttColorText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttColorText"));
        var elAttsizeText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttSizeText"));
        var elImgTag = INC.methods.generateHTMLTags('img');
        if(onloadpdp == true){
            elImgTag.src = productObj.imageURL
        }
        elImgTag.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" )
        elImg.appendChild(elImgTag);

        elTitleText.innerHTML = dataStore.bundleCartProducts[productSKU] + "<small>x</small>" + productObj.name;
        // if (color == "" && productObj.option[1] != undefined) {
        //     color = productObj.option[1].text;
        // }
        if (color != "") {
            elAttColorText.innerText = color + " | ";//(Object.keys(productObj.option).length > 1) ? ((typeof (productObj.option[2]) != "undefined") ? productObj.option[2].text : "") : "";
        }
        else if(size != ""){
            elAttsizeText.innerText = size;
        }
        else if (productObj.option[0] != undefined){
            elAttsizeText.innerText = productObj.option[0].text + " | "
        }
        var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
        var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
        subtotalactiveprice = (+subtotalactiveprice + +productObj.activePrice * dataStore.bundleCartProducts[productSKU]);
        subtotalregukarprice = (+subtotalregukarprice + +productObj.regularPrice * dataStore.bundleCartProducts[productSKU]);
        elPriceActiveText.innerText = "Price: " + INC.methods.formatPrice(activePrice * dataStore.bundleCartProducts[productSKU]);
        elPriceActiveText.innerText = elPriceActiveText.innerText;// + " | Quantity: " + dataStore.bundleCartProducts[productSKU];
        // if (productObj.activePrice != productObj.regularPrice) {
        //     elPriceRegularText.innerText = "Price: " + INC.clientConfig.currencySymbol + regularPrice + " " + ((INC.clientConfig.statusVAT == "true") ? "(Inc. VAT)" : "(Ex. VAT)");
        // }

        sbCartBlock.appendChild(productBlock);

    });
    if (INC.debug) console.log("subtotalactiveprice " + subtotalactiveprice)
    if (INC.debug) console.log("subtotalregukarprice " + subtotalregukarprice)
    // elHeaderItemCountFigureText.innerText = headerItemCountFigureText;
    if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
        elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
        elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
        elHeadersubtotalactivetext.innerHTML = INC.methods.formatPrice(subtotalactiveprice);
        elHeadersubtotalregulartext.innerHTML = INC.methods.formatPrice(subtotalregukarprice);
    } else {
        elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
        elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
        elHeadersubtotalactivetext.innerHTML = INC.methods.formatPrice(subtotalregukarprice);
        elHeadersubtotalregulartext.innerHTML = ""
    }
    sidebarHeaderItemCountTitleText.innerHTML = headerItemCountFigureText + " " + INC.bundleVars.items + "  |  ";
    if (bundleCartProductsArray.length > 2) {
        getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "visible";
        getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "visible";
    }

    if (!(bundleCartProductsArray.length > 2)) {
        getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "hidden";
        getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "hidden";
    }
    if (INC.methods.detectDeviceType() == "mobile") {
        if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
        }
    }
}

INC.methods.updateSidebarProductsList = function (elRecommendedProductsListBlock, productCategory) {

    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = INC.methods.getSelectorClassName;
    var dupl_sidebar_prod=[]
    var productListArray = Object.keys(INC.dataStore.dataStoreObj);
    var addCheck = INC.config.pdpaddedProductList;
    if(document.querySelector('body').classList.contains('en_collection') || document.querySelector('body').classList.contains('fr_collection')) addCheck = INC_COL.config.pdpaddedProductList
    if (productListArray != undefined && (productListArray[0] != "9517B002" && productListArray[1] != "9517B002")) {
        for (var i = 0; i < productListArray.length; i++) {
            // var findObj = new INC.classes.FindObj({ id: productListArray[i] });
            var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: productListArray[i] });
            // var productBlock = this.createProductBlock(firstProductObjByMainId.id, "pdp", true);
            // if (INC.config.pdpaddedProductList.indexOf(productListArray[i]) == -1) {
            if(addCheck.indexOf(productListArray[i]) == -1 && onloadpdp == true){
                if(INC.config.sidebarremovedprod.indexOf(firstProductObjByMainId.id) == -1){
                    if(dupl_sidebar_prod.indexOf(firstProductObjByMainId.id) == -1){
                        dupl_sidebar_prod.push(firstProductObjByMainId.id)
                        if (productCategory == "all" && INC.config.pageType == "productList") {
                            // if (firstProductObjByMainId["categoryId"] == productCategory) {
                            var productBlock = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "sidebar", false);
                            if (productBlock != undefined) {
                                productBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).addEventListener("click", function (e) {
                                    if (INC.debug) console.log("clicked");

                                    var productBlockNode = this.parentNode.parentNode;
                                    if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                                        productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                                    }
                                    // var productQtyInputText = productBlockNode.querySelector(getSelectorClassName(classNames, "productQtyInputText"));
                                    var sku = productBlockNode.getAttribute('data-sku');
                                    var id = productBlockNode.getAttribute('data-id');
                                    var findObj = new INC.classes.FindObj({ id: id, mainId: id, sku: sku });
                                    var qty = productBlockNode.querySelector('.inc_product_modal_block input').value;
                                    // var qty = productBlockNode.querySelector('input').value;
                                    productBlockNode.querySelector('.inc_product_modal_block input').value = 1;
                                    var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                                    var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));
                                    // productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "ADDED";

                                    setTimeout(function () {
                                        // var elAddImg = getViewElement("productAddImg");
                                        Array.prototype.forEach.call(productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg")), function (el) {
                                            el.classList.remove("checked");
                                        });
                                        if(document.querySelector('.inc_recommended_products_list_block').childElementCount == 0 && document.querySelector('.inc_sidebar_modal_block') != null) document.querySelector('.inc_sidebar_modal_block').classList.add("inc_empty_sidebar")
                                    }, 2000);
                                    if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block') != null) {
                                        if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_selected_color_wrapper_block .inc_selected_color_block') != null) {
                                            if (productBlockNode.querySelector('.inc_product_modal_block').classList.contains('configurable')) {
                                                var userSelection = productBlockNode.querySelector('.inc_product_modal_block .inc_selected_color_wrapper_block');
                                                for (var i = 0; i < userSelection.children.length; i++) {
                                                    var shade = userSelection.children[i];
                                                    var sku = shade.getAttribute('data-sku');
                                                    findObj.sku = sku;
                                                    var qty = shade.querySelector('.inc_selected_color_qty_input_text_block').innerText;
                                                    INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im);
                                                }
                                            }
                                            else {
                                                INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im);
                                            }
                                            productBlockNode.querySelector('.inc_product_modal_block .inc_selected_color_wrapper_block').innerHTML = "";
                                            if (productBlockNode.querySelector('.inc_product_modal_block.inc_active .inc_empty_text') != null) {
                                                productBlockNode.querySelector('.inc_product_modal_block.inc_active .inc_empty_text').classList.add('inc_active')
                                            }
                                            if(productBlockNode.querySelector('.inc_product_modal_block.inc_active .inc_product_header_img_block') != null) productBlockNode.querySelector('.inc_product_modal_block.inc_active .inc_product_header_img_block').click();
                                        } else {
                                            productBlockNode.querySelector('.img_color_swatch').click()
                                        }
                                    } else {
                                        INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im);
                                    }
                                });
                                if(INC.methods.detectDeviceType() == "mobile"){
                                    var attBlock = productBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_wrapper_block')
                                    var descBlock = productBlock.querySelector('.inc_product_modal_block .inc_product_desc_info_block')
                                    if(descBlock != null && attBlock != null){
                                        descBlock.parentNode.insertBefore(attBlock, descBlock)
                                    }
                                }
                                elRecommendedProductsListBlock.appendChild(productBlock);
                            }
                            // };
                        } else {
                            if (firstProductObjByMainId["categoryId"] == productCategory && firstProductObjByMainId.mainId != INC.dataStore.pdpProductId) {
                                var productBlock = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "sidebar", false);
                                if (productBlock != undefined) {
                                    productBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).addEventListener("click", function (e) {
                                        if (INC.debug) console.log("clicked");

                                        var productBlockNode = this.parentNode.parentNode;
                                        if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                                            productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                                        }
                                        // var productQtyInputText = productBlockNode.querySelector(getSelectorClassName(classNames, "productQtyInputText"));
                                        var sku = productBlockNode.getAttribute('data-sku');
                                        var id = productBlockNode.getAttribute('data-id');
                                        var findObj = new INC.classes.FindObj({ id: id, mainId: id, sku: sku });
                                        var qty = productBlockNode.querySelector('.inc_product_modal_block input').value;
                                        // var qty = productBlockNode.querySelector('input').value;
                                        productBlockNode.querySelector('.inc_product_modal_block input').value = 1;
                                        var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                                        var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));
                                        // productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "ADDED";

                                        setTimeout(function () {
                                            // var elAddImg = getViewElement("productAddImg");
                                            Array.prototype.forEach.call(productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg")), function (el) {
                                                el.classList.remove("checked");
                                            });

                                        }, 2000);
                                        if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block') != null || (!productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.contains('simple') && productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block') != null)) {
                                            if ((productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_selected_color_wrapper_block .inc_selected_color_block') != null || (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_block select') != null && productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_block select').value != "Select size"))) {
                                                if (productBlockNode.querySelector('.inc_product_modal_block').classList.contains('configurable')) {
                                                    var userSelection = productBlockNode.querySelector('.inc_product_modal_block .inc_selected_color_wrapper_block');
                                                    for (var i = 0; i < userSelection.children.length; i++) {
                                                        var shade = userSelection.children[i];
                                                        var sku = shade.getAttribute('data-sku');
                                                        findObj.sku = sku;
                                                        var qty = shade.querySelector('.inc_selected_color_qty_input_text_block').innerText;
                                                        INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im);
                                                    }
                                                }
                                                else {
                                                    INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im);
                                                }
                                                productBlockNode.querySelector('.inc_product_modal_block .inc_selected_color_wrapper_block').innerHTML = "";
                                                if (productBlockNode.querySelector('.inc_product_modal_block.inc_active .inc_empty_text') != null) {
                                                    productBlockNode.querySelector('.inc_product_modal_block.inc_active .inc_empty_text').classList.add('inc_active')
                                                }
                                                if(productBlockNode.querySelector('.inc_product_modal_block.inc_active .inc_product_header_img_block') != null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) productBlockNode.querySelector('.inc_product_modal_block.inc_active .inc_product_header_img_block').click();
                                            } else {
                                                if(productBlockNode != null && productBlockNode.querySelector('.img_color_swatch') != null) productBlockNode.querySelector('.img_color_swatch').click()
                                            }
                                        } else {
                                            INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im);
                                        }
                                    });
                                    if(INC.methods.detectDeviceType() == "mobile"){
                                        var attBlock = productBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_wrapper_block')
                                        var descBlock = productBlock.querySelector('.inc_product_modal_block .inc_product_desc_info_block')
                                        if(descBlock != null && attBlock != null){
                                            descBlock.parentNode.insertBefore(attBlock, descBlock)
                                        }
                                    }
                                    elRecommendedProductsListBlock.appendChild(productBlock);
                                }
                            };
                        }
                    }
                }
            }
            // }
        }
    }

    if (INC.debug) console.log(elRecommendedProductsListBlock.parentNode);
    if (INC.debug) console.log(elRecommendedProductsListBlock.childNodes.length);
    if (INC.debug) console.log(elRecommendedProductsListBlock.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")));
    // INC.clientConfig.offset = 0;
    // INC.clientConfig.slidevalue = 0;
    elRecommendedProductsListBlock.setAttribute('style', 'margin-left: 0')
    if (!(elRecommendedProductsListBlock.childNodes.length >= 3)) {
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBlock")).style.visibility = "hidden";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).style.visibility = "hidden";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: none;opacity:0.5;visibility: hidden;");
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5;visibility: hidden;");
    }

    if (elRecommendedProductsListBlock.childNodes.length >= 3) {
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBlock")).style.visibility = "visible";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).style.visibility = "visible";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5");
    }

    var sliderBtnCounter = 0;

    var productBlocks = elRecommendedProductsListBlock.querySelectorAll(getSelectorClassName(classNames, "productModuleBlock"));
    if(productBlocks.length == 0 && document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block') != undefined) var productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
    if (!(productBlocks.length >= 2)) {
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBlock")).style.visibility = "hidden";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).style.visibility = "hidden";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: none;opacity:0.5;visibility: hidden;");
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5;visibility: hidden;");
    }
    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).addEventListener("click", function () {
        var productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
        if (INC.clientConfig.slidevalue + 1 < elRecommendedProductsListBlock.childElementCount - 1) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1;visibility:visible");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).parentNode.setAttribute("style", "pointer-events: auto;opacity:1;visibility:visible");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "pointer-events: auto;opacity:1;visibility:visible");
            INC.clientConfig.slidevalue++
            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - 282) + 'px';
            var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
            menu.style['transitionDuration'] = '0.5s'
            menu.style['marginLeft'] = INC.clientConfig.offset
        }
        var cc_ount = 1;
        if (window.innerWidth > 1239) {
            cc_ount = 2
        }
        if (+INC.clientConfig.slidevalue + +cc_ount == elRecommendedProductsListBlock.childElementCount) {
            // elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5");
        }
        sliderBtnCounter++;
        if (sliderBtnCounter > elRecommendedProductsListBlock.childElementCount - 3) {
            sliderBtnCounter--;
        }
        if (INC.debug) console.log(sliderBtnCounter);
        if (INC.debug) console.log(productBlocks);
        // productBlocks[sliderBtnCounter - 1].style.display = "none";
        if (INC.debug) console.log(sliderBtnCounter);
        if (INC.debug) console.log("pdp product blocks count:" + productBlocks.length);

    });

    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).addEventListener("click", function () {
        var productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
        if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
        if (INC.clientConfig.slidevalue > 0) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnImg")).setAttribute("style", "pointer-events: auto;opacity:1");
            INC.clientConfig.slidevalue--
            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + 282) + 'px';
            var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
            menu.style['transitionDuration'] = '0.5s'
            menu.style['marginLeft'] = INC.clientConfig.offset
        }
        if (INC.clientConfig.slidevalue == 0) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5");
        }
        sliderBtnCounter--;
        if (sliderBtnCounter == -1) sliderBtnCounter = 0;
        // productBlocks[sliderBtnCounter].style.display = "block";

        if (INC.debug) console.log(sliderBtnCounter);
    });
    // if (!(elRecommendedProductsListBlock.childNodes.length > 3)) {
    //     elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBlock")).style.visibility = "hidden";
    //     elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).style.visibility = "hidden";
    // }

    // if (elRecommendedProductsListBlock.childNodes.length > 3) {
    //     elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBlock")).style.visibility = "visible";
    //     elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).style.visibility = "visible";
    // }

    // var sliderBtnCounter = 0;

    // var productBlocks = elRecommendedProductsListBlock.querySelectorAll(getSelectorClassName(classNames, "productModuleBlock"));
    // elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).addEventListener("click", function () {
    //     if(INC.clientConfig.slidevalue+1 < productBlocks.length){
    //         elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
    //         INC.clientConfig.slidevalue++
    //         INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - 283) + 'px';
    //         var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
    //         menu.style['transitionDuration'] = '0.5s'
    //         menu.style['marginLeft'] = INC.clientConfig.offset
    //     }
    //     if(INC.clientConfig.slidevalue+1 == productBlocks.length){
    //         elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
    //     }
    //     sliderBtnCounter++;
    //     if (sliderBtnCounter > productBlocks.length - 3) {
    //         sliderBtnCounter--;
    //     }
    //     if (INC.debug) console.log(sliderBtnCounter);
    //     if (INC.debug) console.log(productBlocks);
    //     // productBlocks[sliderBtnCounter - 1].style.display = "none";
    //     if (INC.debug) console.log(sliderBtnCounter);
    //     if (INC.debug) console.log("pdp product blocks count:" + productBlocks.length);

    // });

    // elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).addEventListener("click", function () {
    //     if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
    //     if(INC.clientConfig.slidevalue > 0){
    //         elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
    //         INC.clientConfig.slidevalue--
    //         INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + 283) + 'px';
    //         var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
    //         menu.style['transitionDuration'] = '0.5s'
    //         menu.style['marginLeft'] = INC.clientConfig.offset
    //     }
    //     if(INC.clientConfig.slidevalue == 0){
    //         elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
    //     }
    //     sliderBtnCounter--;
    //     if (sliderBtnCounter == -1) sliderBtnCounter = 0;
    //     // productBlocks[sliderBtnCounter].style.display = "block";

    //     if (INC.debug) console.log(sliderBtnCounter);
    // });
}
INC.methods.sendBundleClickTracking = function (productId) {

    var pageType = "";
    var getSelectorClassName = INC.methods.getSelectorClassName;

    switch (INC.config.pageType) {
        case "pdp": pageType = "107"; break;
        case "productList": pageType = "101"; break;
        case "cartPage": pageType = "103"; break;
        case "other": pageType = "101";
    }

    if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
        pageType = "100";
    }
    if (INC.config.pageType == "cartPage") {
        pageType = "103"
    }

    INC.methods.trackingEvents("bundleProductClickTracking", { "product_id": productId, "core_product_id": INC.dataStore.pdpProductId }, pageType);

}

INC.methods.createProductModuleBlock = function (pdpProductId, blockType, bundleProductListCheck) {

    var classNames = INC.uiConfig[blockType].className;
    var findObj = new INC.classes.FindObj({ id: pdpProductId });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    var getSelectorClassName = this.getSelectorClassName;

    var productModuleBlock = this.getElementChilds("productModuleBlock", blockType);
    productModuleBlock.style.userSelect = "none";
    productModuleBlock.setAttribute('data-id', productObj.id);
    productModuleBlock.setAttribute('data-sku', productObj.sku);
    productModuleBlock.setAttribute('data-main_id', productObj.mainId);
    productModuleBlock.setAttribute('data-bundle_id', productObj.bundleId);
    if ((productObj.sku != "" && productObj.ProductType == "simple") || productObj.ProductType == "configurable") {
        function getViewElement(className) {
            return productModuleBlock.querySelector(getSelectorClassName(classNames, className));
        }

        var elProductShowcaseBlock = getViewElement("productShowcaseBlock");
        var elProductModalBlock = getViewElement("productModalBlock");

        elProductShowcaseBlock.innerHTML = "";
        elProductModalBlock.innerHTML = "";

        var productShowcaseBlock = INC.methods.createProductShowcaseBlock(pdpProductId, blockType, bundleProductListCheck);
        // var productShowcaseBlock = INC.methods.createProductModalBlock(pdpProductId, blockType, bundleProductListCheck);
        var productModalBlock = INC.methods.createProductModalBlock(pdpProductId, blockType, bundleProductListCheck);
        elProductModalBlock.classList.add(productObj.ProductType);

        elProductShowcaseBlock.appendChild(productShowcaseBlock);
        elProductModalBlock.appendChild(productModalBlock);

        // console.log(elProductShowcaseBlock);
        // console.log(elProductModalBlock);
        var elImgGalleryListBlock = elProductModalBlock.querySelector('.inc_product_img_gallery_list_block');
        if (elImgGalleryListBlock.children.length > 1) {
            var rightArrow = elProductModalBlock.querySelector(".inc_product_img_gallery_right_btn_img_block");
            var leftArrow = elProductModalBlock.querySelector(".inc_product_img_gallery_left_btn_img_block");
            rightArrow.style.visibility = "visible";
            leftArrow.style.visibility = "visible";
            rightArrow.addEventListener("click", function () {
                var i = 0;
                var nav = Array.prototype.slice.call(elImgGalleryListBlock.children)
                nav.forEach(function (e) {
                    if (e.classList.contains('inc_active')) {
                        if (nav.indexOf(e) == nav.length - 1) {
                            // rightArrow.style.visibility = "hidden";
                        }
                        if (nav.indexOf(e) < nav.length - 1) {
                            if (i == 0) {
                                nav[nav.indexOf(e) + 1].click();
                                i++;
                            }

                            leftArrow.style.visibility = "visible";
                        }
                        if (nav.indexOf(e) == nav.length - 1) {
                            // rightArrow.style.visibility = "hidden";
                            if (i == 0) {
                                nav[0].click();
                                i++;
                            }
                        }
                    }
                })
            })
            leftArrow.addEventListener("click", function () {
                var nav = Array.prototype.slice.call(elImgGalleryListBlock.children)
                if (nav[0].classList.contains('inc_active')) {
                    nav[nav.length - 1].click();
                }
                else {
                    nav.forEach(function (e) {
                        if (e.classList.contains('inc_active')) {
                            if (nav.indexOf(e) > 1) {
                                nav[nav.indexOf(e) - 1].click();
                                rightArrow.style.visibility = "visible";
                            }
                            else if (nav.indexOf(e) == 1) {
                                nav[0].click();
                                rightArrow.style.visibility = "visible";
                            }
                            else if (nav.indexOf(e) == 0) {
                                // leftArrow.style.visibility = "hidden";
                            }
                        }
                    })
                }
            })
        }

        return productModuleBlock;
    }
}

INC.methods.createProductShowcaseBlock = function (pdpProductId, blockType, bundleProductListCheck) {
    var classNames = INC.uiConfig[blockType].className;
    var productBlock = this.getElementChilds("productBlock", blockType);
    var findObj = new INC.classes.FindObj({ id: pdpProductId });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    // var productColorText = productObj["option"]["2"].text;
    var getSelectorClassName = this.getSelectorClassName;
    //console.log(productObj)
    productBlock.setAttribute('data-id', productObj.id);
    productBlock.setAttribute('data-sku', productObj.sku);
    productBlock.setAttribute('data-main_id', productObj.mainId);
    productBlock.setAttribute('data-bundle_id', productObj.bundleId);

    function getViewElement(className) {
        return productBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elHeader = getViewElement("productHeaderBlock");
    var elInfoText = getViewElement("productInfoText");
    var elImgBlock = getViewElement("productImgBlock");
    var elImgGalleryListBlock = getViewElement("productImgGalleryListBlock");
    var elTitleBlock = getViewElement("productTitleBlock");
    var elTitleTextBlock = getViewElement("productTitleTextBlock");
    var elTitleText = getViewElement("productTitleText");
    var elPriceActiveText = getViewElement("productPriceActiveText");
    var elPriceActiveMsg = getViewElement("productPriceActiveTextMsg");
    var elDescPriceBlock = getViewElement("productPriceBlock");
    var elPriceRegularText = getViewElement("productPriceRegularText");
    var elAttBlock = getViewElement("productAttBlock");
    var elAttColorBlock = getViewElement("productAttColorBlock");
    var elAttColorTitleText = getViewElement("productAttColorTitleText");
    var elAttColorTitleTextSelected = getViewElement("productAttColorTitleTextSelected");
    var elAttColorListBlock = getViewElement("productAttColorListBlock");
    var elMobAttColorListBlock = getViewElement("productShadeMobileBlock");
    var elAttSizeBlock = getViewElement("productAttSizeBlock");
    var elAttSizeTitleBlock = getViewElement("productAttSizeTitleBlock");
    var elAttSizeTitleText = getViewElement("productAttSizeTitleText");
    var elAttSizeTitleTextSelected = getViewElement("productAttSizeTitleTextSelected");
    var elAttSizeListBlock = getViewElement("productAttSizeListBlock");
    var elPackOfListBlock = getViewElement("productPackOfListBlock");
    var elQtyBlock = getViewElement("productQtyBlock");
    var elQtyInputText = getViewElement("productQtyInputText");

    var elTotalBlock = getViewElement("productTotalBlock");
    var elTotalInputText = getViewElement("productTotalInputText");
    var elQtyDownBlock = getViewElement("productQtyDownBlock");
    var elQtyUpBlock = getViewElement("productQtyUpBlock");
    var elAddBlock = getViewElement("productAddBlock");
    var elAddText = getViewElement("productAddText");
    var elAddImg = getViewElement("productAddImg");
    var elratingsBlock = getViewElement("productRatingsBlock");
    var elFullDesctext = getViewElement("productInfoFullDescText");
    var elworthPrice = getViewElement("productPriceWorthText");
    var elPromoText = getViewElement("productPromoMsgText");
    var productAddErrText = getViewElement("productAddErrText");
    var elAtt0ListBlock = getViewElement("productAttzeroListBlock");
    var elAtt3ListBlock = getViewElement("productAttthirdListBlock");
    var elAtt4ListBlock = getViewElement("productAttfourthListBlock");
    var elAtt0Block = getViewElement("productAttzeroBlock");
    var elAtt3Block = getViewElement("productAttthirdBlock");
    var elAtt4Block = getViewElement("productAttfourthBlock");
    var elAtt0TitleTextSelected = getViewElement("productAttzeroTitleTextSelected");
    var elAtt0TitleText = getViewElement("productAttzeroTitleText");
    var elAtt3TitleTextSelected = getViewElement("productAttthirdTitleTextSelected");
    var elAtt3TitleText = getViewElement("productAttthirdTitleText");
    var elAtt4TitleTextSelected = getViewElement("productAttfourthTitleTextSelected");
    var elAtt4TitleText = getViewElement("productAttfourthTitleText");
    // if (INC.debug) console.log(productObj);

    elHeader.querySelector(getSelectorClassName(classNames, "productHeaderImgBlock")).addEventListener("click", function () {

        productBlock.parentNode.classList.remove("inc_active");
    });

    var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));
    var elImgTag1 = this.generateHTMLTags('img', {src: productObj.imageURL});
    if(onloadpdp == true) {
        elImgTag1.src = productObj.imageURL
    }
    elImgTag1.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" )
    // elImgTag1.setAttribute('data-mouseover',productObj["otherImageList"])
    elImgTag1.setAttribute('data-imageURL',productObj["imageURLMain"])
    if(window.innerWidth > 820){
        // elImgTag1.onmouseover = function(event) {
        //     if (this != event.currentTarget) { return false; }
        //     if(event.currentTarget.getAttribute('data-mouseover') != "" && event.currentTarget.getAttribute('data-mouseover') != null && event.currentTarget.getAttribute('data-mouseover')  != "null"){
        //         var self = event.currentTarget,
        //         i = 1,
        //         images = event.currentTarget.getAttribute('data-mouseover').split(',');
        //         (function nextImage() {
        //             var dotsel=null
        //             var next = images[i++ % images.length].split('#');
        //             self.timeout = setTimeout(function(){
        //             // $(self).data('timeout', setTimeout(function() {
        //                 self.src = next[0];
        //                 if(self != undefined){
        //                     if(self.parentNode != undefined){
        //                         var dotsel=self.parentNode.parentNode.parentNode.parentNode.parentNode
        //                     }
        //                 }
        //                 if(dotsel != null){
        //                     if(dotsel.querySelector('.inc_product_img_gallery_list_item_block.inc_active') != null){
        //                         if(dotsel.querySelector('.inc_product_img_gallery_list_item_block.inc_active').nextElementSibling != null){
        //                             dotsel.querySelector('.inc_product_img_gallery_list_item_block.inc_active').nextElementSibling.classList.add('inc_active')
        //                             dotsel.querySelector('.inc_product_img_gallery_list_item_block.inc_active').classList.remove('inc_active')
        //                         }else if(dotsel.querySelector('.inc_product_img_gallery_list_item_block.inc_active') != null){
        //                             dotsel.querySelector('.inc_product_img_gallery_list_item_block.inc_active').classList.remove('inc_active')
        //                             dotsel.querySelector('.inc_product_img_gallery_list_item_block').classList.add('inc_active')
        //                         }
        //                     }
        //                 }
        //                 nextImage();
        //             },800 );
        //         })();
        //     }
        // }
        // elImgTag1.onmouseout = function(event) {
        //     if (this != event.currentTarget) { return false; }
        //     if(typeof(event.currentTarget.timeout) != "undefined"){
        //         clearTimeout(event.currentTarget.timeout);
        //     }
        //     var thiselm=event.currentTarget
        //     thiselm.src = thiselm.getAttribute('data-imageurl');
        //     var dotsel = null
        //     if(thiselm != undefined){
        //         if(thiselm.parentNode != undefined){
        //             var dotsel=thiselm.parentNode.parentNode.parentNode.parentNode.parentNode
        //             if(dotsel != null){
        //                 if(dotsel.querySelector('.inc_product_img_gallery_list_item_block.active') != null){
        //                     dotsel.querySelector('.inc_product_img_gallery_list_item_block.active').classList.remove('active')
        //                 }
        //                 if(dotsel.querySelector('.inc_product_img_gallery_list_item_block') != null){
        //                     dotsel.querySelector('.inc_product_img_gallery_list_item_block').classList.add('active')
        //                 }
        //             }
        //         }
        //     }
        // }
    }

    var productLink = document.createElement('a');

    // productLink.href = productObj.url;
    productLink.addEventListener("click", function (e) {
        productBlock.querySelector('.inc_product_img_main_zoom_btn_img').click()
    })
    productLink.appendChild(elImgTag1);
    productLink.setAttribute('otherImageList',productObj["otherImageList"])
    productLink.setAttribute('imageURL',productObj["imageURLMain"])
    if (elPromoText != null || elPromoText != undefined) {
        elPromoText.innerText = productObj.promoMsg;
    }
    var parent_cont = productBlock.parentNode

    if ((productObj.otherImageList != null) && productObj.otherImageList.indexOf(productObj.imageURL) == -1) {
        var lengthCheck = 0;
        // var navCheck = productObj.otherImageList.length + 1;
    }
    else {
        var lengthCheck = 1;
        // var navCheck = productObj.otherImageList.length;
    }
    

    elImgMainImg.appendChild(productLink);
    //opened
    elImgMainImg.addEventListener("click", function () {
        INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
    });

    var elImgMainZoomImgBlock = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainZoomBtnImgBlock"));

    elImgMainZoomImgBlock.addEventListener('click', function () {
        if (blockType == "sidebar" || document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
            document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add("inc_popup_open") //overflow_visible
            document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add("overflow_visible")
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add("inc_popup_open") //overflow_visible
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add("overflow_visible")
            }
        }
        // console.log(productObj.name);
        // console.log("============ clicked ====================");
        if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
            document.querySelector('body').classList.remove('inc_overlay');
            document.querySelector('html').classList.remove('inc_prevent_scroll')
            document.querySelector('html').style.overflow = "auto";
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                document.querySelector('body').style.position = ""
                if (INC.methods.detectPageType() == "pdp") {
                    if(document.querySelector('.inc_pdp_block') != null){
                         jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 10}, 0);
                    }
                }
                else if (INC.methods.detectPageType() == "cartPage") {
                    jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
                }
            }
        }
        if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
            //document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
        }
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
            el.classList.remove("inc_active");
        });
        // console.log(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
        if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
            // document.querySelector('body').classList.add('inc_overlay');
            document.querySelector('html').classList.add('inc_prevent_scroll')
            document.querySelector('html').style.overflow = "hidden";
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                document.querySelector('body').style.position = "fixed"
            }
        }
        if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
            document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add('overflow_visible')
            document.querySelector('body').classList.add('inc_overlay');
        }
        if (this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")) != null && this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")) != undefined) this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("inc_active");
        if (this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_img_gallery_list_item_block') != null && this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_img_gallery_list_item_block.inc_active') == null) {
            this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_img_gallery_list_item_block').classList.add('inc_active')
        }
        document.querySelector('body').classList.add('inc_overlay');
        if(productBlock.parentNode.parentNode != null && productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_desc_att_color_title_text") != null) productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_desc_att_color_title_text").innerText = "Selected shade: "
    });

    var elImgMainZoomTextBlock = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainZoomBtnTextBlock"));

    elImgMainZoomTextBlock.style.display = "none";
    elImgMainZoomTextBlock.addEventListener('click', function () {
        if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
            document.querySelector('body').classList.remove('inc_overlay');
            // document.querySelector('html').classList.remove('inc_prevent_scroll')
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            //document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible');
            document.querySelector('html').classList.remove('inc_prevent_scroll');
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                document.querySelector('body').style.position = "";
                if (INC.methods.detectPageType() == "pdp") {
                    if(document.querySelector('.inc_pdp_block') != null){
                          jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 10}, 0);
                    }
                }
                else if (INC.methods.detectPageType() == "cartPage") {
                    jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
                }
            }
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                document.querySelector('body').style.position = "";
                if (INC.methods.detectPageType() == "pdp") {
                    if(document.querySelector('.inc_pdp_block') != null){
                       jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 10}, 0);
                    }
                }
                else if (INC.methods.detectPageType() == "cartPage") {
                    jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
                }
            }
            document.querySelector('html').style.overflow = "auto";
        }
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
            el.classList.remove("inc_active");
        });
        if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
            document.querySelector('body').classList.add('inc_overlay');
            document.querySelector('html').classList.add('inc_prevent_scroll')
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                document.querySelector('body').style.position = "fixed"
            }
            document.querySelector('html').style.overflow = "hidden";
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible');
            document.querySelector('html').classList.add('inc_prevent_scroll');
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                document.querySelector('body').style.position = "fixed"
            }
            document.querySelector('html').style.overflow = "hidden";
        }
        if (INC.debug) console.log(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
        this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("inc_active");
        if (blockType == "sidebar" || document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
            document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add("inc_popup_open") //overflow_visible
            document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add("overflow_visible")
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add("inc_popup_open") //overflow_visible
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add("overflow_visible")
            }
        }
    });

    var elImgMainZoomText = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainZoomBtnText"));

    elImgGalleryListBlock.innerHTML = "";
    if ((productObj.otherImageList != null) && productObj.otherImageList.indexOf(productObj.imageURL) == -1) {
        var lengthCheck = 0;
        // var navCheck = productObj.otherImageList.length + 1;
    }
    else {
        var lengthCheck = 1;
        // var navCheck = productObj.otherImageList.length;
    }
    if ((productObj.otherImageList != null) && productObj.otherImageList.length > lengthCheck) {
        var otimg = 0;
        productObj.otherImageList.forEach(function (otherImgURL) {
            var elOtherImgTag = INC.methods.generateHTMLTags('img');
            if(onloadpdp == true){
                elOtherImgTag.src = otherImgURL
            }
            elOtherImgTag.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" )
            var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));

            elImgGalleryListItemImg.appendChild(elOtherImgTag);

            elImgGalleryListItemBlock.addEventListener("click", function () {

                Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function (galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("inc_active");
                });

                elImgGalleryListItemBlock.classList.add("inc_active");

                // if ((productObj.otherImageList != null) && productObj.otherImageList.indexOf(productObj.imageURL) == -1) {
                elImgMainImg.querySelector('img').src = otherImgURL;
                // }
            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if (otimg == 0) {
                elImgGalleryListItemBlock.classList.add('inc_active')
            }
            otimg++;
            if (productObj.otherImageList.length > 5) {
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }
        });

        // elImgGalleryListBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemBlock")).click();
    }
    //opened
    elTitleBlock.addEventListener("click", function () {
        INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
    });
    
    if(INC.config.pageType == "pdp"){
        elTitleTextBlock.addEventListener("click", function (e) {
            e.preventDefault();
            
            if (blockType == "sidebar" || document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add("inc_popup_open") //overflow_visible
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add("overflow_visible")
            }
            // console.log(productObj.name);
            // console.log("============ clicked ====================");
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                document.querySelector('body').classList.remove('inc_overlay');
                document.querySelector('html').classList.remove('inc_prevent_scroll')
                document.querySelector('html').style.overflow = "auto";
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                    document.querySelector('body').style.position = ""
                    if (INC.methods.detectPageType() == "pdp") {
                        if(document.querySelector('.inc_pdp_block') != null){
                            jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 10}, 0);
                        }
                    }
                    else if (INC.methods.detectPageType() == "cartPage") {
                        jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
                    }
                }
            }
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
            }
            Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
                el.classList.remove("inc_active");
            });
            // console.log(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                // document.querySelector('body').classList.add('inc_overlay');
                document.querySelector('html').classList.add('inc_prevent_scroll')
                document.querySelector('html').style.overflow = "hidden";
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                    document.querySelector('body').style.position = "fixed"
                }
            }
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add('overflow_visible')
                document.querySelector('body').classList.add('inc_overlay');
            }
            //debugger
            productBlock.querySelector('.inc_product_img_main_zoom_btn_img').click()
            document.querySelector('body').classList.add('inc_overlay');
            if(productBlock.parentNode.parentNode != null && productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_desc_att_color_title_text") != null) productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_desc_att_color_title_text").innerText = "Selected shade: "
        });
    }

    var pTitleDiv = document.createElement('div');
    pTitleDiv.innerText = productObj.name;
    //elratingsBlock
    var field1 = productObj.ratingsCount;
    var field2 = productObj.reviewCount;

    //if (field1 != "") {
        INC.methods.get_product_ratings(field1, field2, elratingsBlock);
    //}
    var pLink = document.createElement('a');
    // pLink.href = productObj.url;
    // pLink.addEventListener("click", function (e) {
    //    INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'));
    // })
    //console.log(productObj)
    //debugger
    //if(window.innerWidth < 820){
        if(blockType == "pdp" &&  INC.config.Product_id ==  productObj.mainId) {
            pLink.setAttribute('style','cursor: default;text-decoration: none;')
        }else{
            if(INC.config.pageType == "cartPage"){
                pLink.addEventListener("click", function (e) {
                    productBlock.querySelector('.inc_product_img_main_zoom_btn_img').click()
                })
                //pLink.href = "";
            }else if(INC.config.pageType == "productList"){
                pLink.addEventListener("click", function (e) {
                    productBlock.querySelector('.inc_product_img_main_zoom_btn_img').click()
                })
            }else{
                pLink.href = productObj.url;
            }
           
        }
    //}
   
    pLink.setAttribute("title", productObj.name);
    pLink.setAttribute('style','text-transform: unset;')
    // if(INC.config.pageType == "pdp"){
    //     pLink.setAttribute('href', productObj.url)
    // }
    pLink.appendChild(pTitleDiv);
    elTitleText.appendChild(pLink);

    elInfoText.innerHTML = productObj.description;
    if (elInfoText.querySelector('.see-more') != null) {
        elInfoText.removeChild(elInfoText.querySelector('.see-more'))
    }
    var shortDescriptionVar = INC.methods.generateHTMLTags('div');
    shortDescriptionVar.innerText.innerText = elInfoText.innerText;
    if (productObj.description != "") {
        if (elInfoText.querySelector('p span') != null && elInfoText.querySelector('p').innerText == "About me: ") {
            elInfoText.querySelector('p').parentElement.removeChild(elInfoText.querySelector('p'));
            elInfoText.innerHTML = shortDescriptionVar.innerText.substring(0, 100) + "<a class='inc_readMore'>" + INC.bundleVars.readMore + "</a>";
        } else {

            if (productObj.ProductType == "simple") {
                elInfoText.innerHTML = shortDescriptionVar.innerText.substring(0, 200) + "<a class='inc_readMore'>" + INC.bundleVars.readMore + "</a>";
            } else {
                elInfoText.innerHTML = shortDescriptionVar.innerText.substring(0, 100) + "<a class='inc_readMore'>" + INC.bundleVars.readMore + "</a>";
            }
        }
        elFullDesctext.innerHTML = productObj.description;
        if (elFullDesctext.querySelector('.see-more') != null) {
            elFullDesctext.removeChild(elFullDesctext.querySelector('.see-more'))
        }
        if (elInfoText.querySelector('.inc_readMore') != null) {
            elInfoText.querySelector('.inc_readMore').addEventListener("click", function (e) {
                productBlock.querySelector('.inc_product_Info_Full_desc_info_block').classList.toggle('show_full_desc')
            })
        }
    }


    //elratingsBlock
    var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
    // var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();

    elPriceActiveText.innerText = INC.clientConfig.currencySymbol + activePrice;
    // elPriceActiveMsg.innerText = " + VAT"
    elPriceRegularText.innerText = "";
    elDescPriceBlock.classList.remove('inc_single_price_only')
    if (activePrice != regularPrice) {
        elPriceRegularText.innerText = INC.clientConfig.currencySymbol + INC.clientConfig.regularPricePrefix + regularPrice;
        elDescPriceBlock.classList.remove('inc_single_price_only')
        elPriceActiveText.classList.add('special_price')
    }
    //debugger
    if (prdIdBFP.indexOf(productObj.mainId) >= 0) {
        if (productBlock.querySelector('.pc_promo_div') == null && productObj.ProductLevelDiscountMessage != null && productObj.ProductLevelDiscountMessage != "") {
            var ec_promo_wrapper_div = document.createElement('div');
            ec_promo_wrapper_div.classList.add('pc_promo_header_div');
            ec_promo_wrapper_div.classList.add('inc_dual_promo');
            var ec_promo_header_div = document.createElement('div');
            ec_promo_header_div.classList.add('pc_promo_header_div');
            var ec_title_span = document.createElement('span');
            ec_title_span.classList.add('pc_title_span');
            ec_title_span.innerText = "Black friday offer";
            var ec_promo_div = document.createElement('div');
            ec_promo_div.classList.add('pc_promo_div')
            ec_promo_div.classList.add('inc_active')
            var ec_promo_span = document.createElement('span');
            ec_promo_span.classList.add('pc_promo_span')

            ec_promo_span.classList.add('red_promo')
            ec_promo_span.innerHTML = productObj.ProductLevelDiscountMessage.replace("_", " ");
            ec_promo_header_div.appendChild(ec_title_span);
            // ec_promo_header_div.appendChild(ec_promo_header_div);
            ec_promo_div.appendChild(ec_promo_span);
            ec_promo_wrapper_div.appendChild(ec_promo_header_div);
            ec_promo_wrapper_div.appendChild(ec_promo_div)
            var elPrice_blck = getViewElement("productInfoBlock");
            var view = elPrice_blck//productPriceBlock
            if (view != null || view != undefined) {
                // view.insertBefore(ec_promo_div, view.childNodes[0]);
                view.parentNode.insertBefore(ec_promo_wrapper_div, view);
            }
        }
        else if (productBlock.querySelector('.pc_promo_div') == null && productObj.promoMsg != null && productObj.promoMsg != "") {
            // var ec_promo_div = document.createElement('div');
            // ec_promo_div.classList.add('pc_promo_div')
            // ec_promo_div.classList.add('inc_active')
            // var ec_promo_span = document.createElement('span');
            // ec_promo_span.classList.add('pc_promo_span')

            // ec_promo_span.classList.add('red_promo')
            // ec_promo_span.innerHTML = productObj.promoMsg.replace("_", " ")
            // ec_promo_div.appendChild(ec_promo_span);

            // var elPrice_blck = getViewElement("productInfoBlock");
            // var view = elPrice_blck//productPriceBlock
            // if (view != null || view != undefined) {
            //     // view.insertBefore(ec_promo_div, view.childNodes[0]);
            //     view.parentNode.insertBefore(ec_promo_div, view);
            // }
            var ec_promo_wrapper_div = document.createElement('div');
            ec_promo_wrapper_div.classList.add('pc_promo_header_div');
            ec_promo_wrapper_div.classList.add('inc_dual_promo');
            var ec_promo_header_div = document.createElement('div');
            ec_promo_header_div.classList.add('pc_promo_header_div');
            var ec_title_span = document.createElement('span');
            ec_title_span.classList.add('pc_title_span');
            ec_title_span.innerText = "Black friday offer";
            var ec_promo_div = document.createElement('div');
            ec_promo_div.classList.add('pc_promo_div')
            ec_promo_div.classList.add('inc_active')
            var ec_promo_span = document.createElement('span');
            ec_promo_span.classList.add('pc_promo_span')

            ec_promo_span.classList.add('red_promo')
            ec_promo_span.innerHTML = productObj.promoMsg.replace("_", " ");
            ec_promo_header_div.appendChild(ec_title_span);
            // ec_promo_header_div.appendChild(ec_promo_header_div);
            ec_promo_div.appendChild(ec_promo_span);
            ec_promo_wrapper_div.appendChild(ec_promo_header_div);
            ec_promo_wrapper_div.appendChild(ec_promo_div)
            var elPrice_blck = getViewElement("productInfoBlock");
            var view = elPrice_blck//productPriceBlock
            if (view != null || view != undefined) {
                // view.insertBefore(ec_promo_div, view.childNodes[0]);
                view.parentNode.insertBefore(ec_promo_wrapper_div, view);
            }
        }
        else {
            var ec_promo_div = document.createElement('div');
            ec_promo_div.classList.add('pc_promo_div')
            ec_promo_div.classList.add('empty');
            var elPrice_blck = getViewElement("productInfoBlock");
            var view = elPrice_blck//productPriceBlock
            if (view != null || view != undefined) {
                // view.insertBefore(ec_promo_div, view.childNodes[0]);
                view.parentNode.insertBefore(ec_promo_div, view);
            }
        }
        // if(worthPrice != "NaN"){
        //     elworthPrice.innerText = "Worth " + worthPrice.replace('.', ',') + INC.clientConfig.currencySymbol;
        // }
    } else {
        if (productBlock.querySelector('.pc_promo_div') == null && productObj.ProductLevelDiscountMessage != null && productObj.ProductLevelDiscountMessage != "") {
            var ec_promo_wrapper_div = document.createElement('div');
            ec_promo_wrapper_div.classList.add('pc_promo_header_div');
            ec_promo_wrapper_div.classList.add('inc_dual_promo');
            ec_promo_wrapper_div.classList.add('excl_offer');
            var ec_promo_header_div = document.createElement('div');
            ec_promo_header_div.classList.add('pc_promo_header_div');
            var ec_title_span = document.createElement('span');
            ec_title_span.classList.add('pc_title_span');
            ec_title_span.innerText = "Exclusive offer";
            var ec_promo_div = document.createElement('div');
            ec_promo_div.classList.add('pc_promo_div')
            ec_promo_div.classList.add('inc_active')
            var ec_promo_span = document.createElement('span');
            ec_promo_span.classList.add('pc_promo_span')

            ec_promo_span.classList.add('red_promo')
            var promomsg = productObj.ProductLevelDiscountMessage //+ "<br>" + "Free Moisturizing Hand Gel with every order!"
            ec_promo_span.innerHTML = promomsg.replace("_", " ");
            ec_promo_header_div.appendChild(ec_title_span);
            // ec_promo_header_div.appendChild(ec_promo_header_div);
            ec_promo_div.appendChild(ec_promo_span);
            ec_promo_wrapper_div.appendChild(ec_promo_header_div);
            ec_promo_wrapper_div.appendChild(ec_promo_div)
            var elPrice_blck = getViewElement("productInfoBlock");
            var view = elPrice_blck//productPriceBlock
            if (view != null || view != undefined) {
                // view.insertBefore(ec_promo_div, view.childNodes[0]);
                view.parentNode.insertBefore(ec_promo_wrapper_div, view);
            }
        }
        else if (productBlock.querySelector('.pc_promo_div') == null && productObj.promoMsg != null && productObj.promoMsg != "") {
            // var ec_promo_div = document.createElement('div');
            // ec_promo_div.classList.add('pc_promo_div')
            // ec_promo_div.classList.add('inc_active')
            // var ec_promo_span = document.createElement('span');
            // ec_promo_span.classList.add('pc_promo_span')

            // ec_promo_span.classList.add('red_promo')
            // ec_promo_span.innerHTML = productObj.promoMsg.replace("_", " ")
            // ec_promo_div.appendChild(ec_promo_span);

            // var elPrice_blck = getViewElement("productInfoBlock");
            // var view = elPrice_blck//productPriceBlock
            // if (view != null || view != undefined) {
            //     // view.insertBefore(ec_promo_div, view.childNodes[0]);
            //     view.parentNode.insertBefore(ec_promo_div, view);
            // }
            var ec_promo_wrapper_div = document.createElement('div');
            ec_promo_wrapper_div.classList.add('pc_promo_header_div');
            ec_promo_wrapper_div.classList.add('inc_dual_promo');
            ec_promo_wrapper_div.classList.add('excl_offer');
            var ec_promo_header_div = document.createElement('div');
            ec_promo_header_div.classList.add('pc_promo_header_div');
            var ec_title_span = document.createElement('span');
            ec_title_span.classList.add('pc_title_span');
            ec_title_span.innerText = "Exclusive offer";
            var ec_promo_div = document.createElement('div');
            ec_promo_div.classList.add('pc_promo_div')
            ec_promo_div.classList.add('inc_active')
            var ec_promo_span = document.createElement('span');
            ec_promo_span.classList.add('pc_promo_span')

            ec_promo_span.classList.add('red_promo')
            var promomsg = productObj.promoMsg //+ "<br>" + "Free Moisturizing Hand Gel with every order!"
            ec_promo_span.innerHTML = promomsg.replace("_", " ");
            ec_promo_header_div.appendChild(ec_title_span);
            // ec_promo_header_div.appendChild(ec_promo_header_div);
            ec_promo_div.appendChild(ec_promo_span);
            ec_promo_wrapper_div.appendChild(ec_promo_header_div);
            ec_promo_wrapper_div.appendChild(ec_promo_div)
            var elPrice_blck = getViewElement("productInfoBlock");
            var view = elPrice_blck//productPriceBlock
            if (view != null || view != undefined) {
                // view.insertBefore(ec_promo_div, view.childNodes[0]);
                view.parentNode.insertBefore(ec_promo_wrapper_div, view);
            }
        }
        // else if (productObj.promoMsg == null && productObj.ProductLevelDiscountMessage == null){
        //     // var ec_promo_div = document.createElement('div');
        //     // ec_promo_div.classList.add('pc_promo_div')
        //     // ec_promo_div.classList.add('inc_active')
        //     // var ec_promo_span = document.createElement('span');
        //     // ec_promo_span.classList.add('pc_promo_span')

        //     // ec_promo_span.classList.add('red_promo')
        //     // ec_promo_span.innerHTML = productObj.promoMsg.replace("_", " ")
        //     // ec_promo_div.appendChild(ec_promo_span);

        //     // var elPrice_blck = getViewElement("productInfoBlock");
        //     // var view = elPrice_blck//productPriceBlock
        //     // if (view != null || view != undefined) {
        //     //     // view.insertBefore(ec_promo_div, view.childNodes[0]);
        //     //     view.parentNode.insertBefore(ec_promo_div, view);
        //     // }
        //     var ec_promo_wrapper_div = document.createElement('div');
        //     ec_promo_wrapper_div.classList.add('pc_promo_header_div');
        //     ec_promo_wrapper_div.classList.add('inc_dual_promo');
        //     ec_promo_wrapper_div.classList.add('excl_offer');
        //     var ec_promo_header_div = document.createElement('div');
        //     ec_promo_header_div.classList.add('pc_promo_header_div');
        //     var ec_title_span = document.createElement('span');
        //     ec_title_span.classList.add('pc_title_span');
        //     ec_title_span.innerText = "Exclusive offer";
        //     var ec_promo_div = document.createElement('div');
        //     ec_promo_div.classList.add('pc_promo_div')
        //     ec_promo_div.classList.add('inc_active')
        //     var ec_promo_span = document.createElement('span');
        //     ec_promo_span.classList.add('pc_promo_span')

        //     ec_promo_span.classList.add('red_promo')
        //     ec_promo_span.innerHTML = "Free Moisturizing Hand Gel with every order!"
        //     ec_promo_header_div.appendChild(ec_title_span);
        //     // ec_promo_header_div.appendChild(ec_promo_header_div);
        //     ec_promo_div.appendChild(ec_promo_span);
        //     ec_promo_wrapper_div.appendChild(ec_promo_header_div);
        //     ec_promo_wrapper_div.appendChild(ec_promo_div)
        //     var elPrice_blck = getViewElement("productInfoBlock");
        //     var view = elPrice_blck//productPriceBlock
        //     if (view != null || view != undefined) {
        //         // view.insertBefore(ec_promo_div, view.childNodes[0]);
        //         view.parentNode.insertBefore(ec_promo_wrapper_div, view);
        //     }
        // }
        else {
            var ec_promo_div = document.createElement('div');
            ec_promo_div.classList.add('pc_promo_div')
            ec_promo_div.classList.add('empty');
            var elPrice_blck = getViewElement("productInfoBlock");
            var view = elPrice_blck//productPriceBlock
            if (view != null || view != undefined) {
                // view.insertBefore(ec_promo_div, view.childNodes[0]);
                view.parentNode.insertBefore(ec_promo_div, view);
            }
        }
    }

    elAttBlock.addEventListener("click", function () {
        if(onloadpdp == true){
            if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
                document.querySelector('body').classList.remove('inc_overlay');
                document.querySelector('html').classList.remove('inc_prevent_scroll')
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                    document.querySelector('body').style.position = "";
                    if (INC.methods.detectPageType() == "pdp") {
                        if(document.querySelector('.inc_pdp_block') != null){
                            jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 10}, 0);
                        }
                    }
                    else if (INC.methods.detectPageType() == "cartPage") {
                        jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
                    }
                }
                document.querySelector('html').style.overflow = "auto";
            }
            if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
                document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible');
                document.querySelector('html').classList.remove('inc_prevent_scroll');
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                    document.querySelector('body').style.position = "";
                    if (INC.methods.detectPageType() == "pdp") {
                        if(document.querySelector('.inc_pdp_block') != null){
                            jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 10}, 0);
                        }
                    }
                    else if (INC.methods.detectPageType() == "cartPage") {
                        jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
                    }
                }
            }
            Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
                el.classList.remove("inc_active");
            });
            if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
                document.querySelector('body').classList.add('inc_overlay');
                document.querySelector('html').classList.add('inc_prevent_scroll')
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                    document.querySelector('body').style.position = "fixed"
                }
            }
            if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
                document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible');
                // document.querySelector('html').classList.add('inc_prevent_scroll');
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                    document.querySelector('body').style.position = "fixed"
                }
            }
            
            // this.parentNode.classList.add('inc_active');
            if (this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') && this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")) != null) {
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("inc_active");
            }
            else if (this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') && this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")) != null) {
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("inc_active");
            }
            if (this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') &&this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_img_gallery_list_item_block') != null && this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_img_gallery_list_item_block.inc_active') == null) {
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_img_gallery_list_item_block').classList.add('inc_active')
            }
            else if (this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') &&this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_img_gallery_list_item_block') != null && this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_img_gallery_list_item_block.inc_active') == null) {
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_img_gallery_list_item_block').classList.add('inc_active')
            }
            // if(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.select_option_inc_block select') != null){
            //     this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.select_option_inc_block select').value = this.getAttribute('data-color')
            // }
            document.querySelector('html').classList.add('inc_prevent_scroll')
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                document.querySelector('body').style.position = "fixed"
            }
            document.querySelector('html').style.overflow = "auto";
        }
    });

    // elAttBlock.addEventListener("click", function () {
    //     if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
    //         document.querySelector('body').classList.remove('inc_overlay');
    //         document.querySelector('html').classList.remove('inc_prevent_scroll')
    //         if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
    //             document.querySelector('body').style.position = "";
    //             if (INC.methods.detectPageType() == "pdp") {
    //                 jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 10}, 0);
    //             }
    //             else if (INC.methods.detectPageType() == "cartPage") {
    //                 jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
    //             }
    //         }
    //         document.querySelector('html').style.overflow = "auto";
    //     }
    //     if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
    //         document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible');
    //         document.querySelector('html').classList.remove('inc_prevent_scroll');
    //         if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
    //             document.querySelector('body').style.position = "";
    //             if (INC.methods.detectPageType() == "pdp") {
    //                 jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 10}, 0);
    //             }
    //             else if (INC.methods.detectPageType() == "cartPage") {
    //                 jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
    //             }
    //         }

    //     }
    //     Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
    //         el.classList.remove("inc_active");
    //     });
    //     if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
    //         document.querySelector('body').classList.add('inc_overlay');
    //         document.querySelector('html').classList.add('inc_prevent_scroll')
    //         if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
    //             document.querySelector('body').style.position = "fixed"
    //         }
    //     }
    //     if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
    //         document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible');
    //         // document.querySelector('html').classList.add('inc_prevent_scroll');
    //         if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
    //             document.querySelector('body').style.position = "fixed"
    //         }
    //     }
    //     // this.parentNode.classList.add('inc_active');
    //     if (this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') && this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")) != null) {
    //         this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("inc_active");
    //     }
    //     else if (this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') && this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")) != null) {
    //         this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("inc_active");
    //     }
    //     if (this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') &&this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_img_gallery_list_item_block') != null && this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_img_gallery_list_item_block.inc_active') == null) {
    //         this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_img_gallery_list_item_block').classList.add('inc_active')
    //     }
    //     else if (this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') &&this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_img_gallery_list_item_block') != null && this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_img_gallery_list_item_block.inc_active') == null) {
    //         this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_img_gallery_list_item_block').classList.add('inc_active')
    //     }
    //     // if(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.select_option_inc_block select') != null){
    //     //     this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.select_option_inc_block select').value = this.getAttribute('data-color')
    //     // }
    //     document.querySelector('html').classList.add('inc_prevent_scroll')
    //     if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
    //         document.querySelector('body').style.position = "fixed"
    //     }
    //     document.querySelector('html').style.overflow = "auto";
    // });

    var elQtyInput = this.generateHTMLTags('input');
    elQtyInput.setAttribute("disabled", "");
    elQtyInput.setAttribute('type', 'number');
    elQtyInput.setAttribute('min', 1);
    elQtyInput.value = 1;

    // elQtyInput.addEventListener("keydown", function(e){
    //     if(e.key != "Backspace"){
    //         e.preventDefault();
    //         if(e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9" || e.key == "0" ){
    //             elQtyInput.value = elQtyInput.value + e.key;
    //         }
    //     }
    //     console.log(elQtyInput.value.length);
    //     if(elQtyInput.value.length == 0) elQtyInput.value = 1;
    //     if(elQtyInput.value == 0) elQtyInput.value = 1;
    //     // console.log(e);
    // });
    // elQtyBlock.style.display = "block";
    elQtyBlock.addEventListener("click", function () {
        // console.log("clicked");
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productPackOfListBlock")), function (el) {
            el.classList.remove("inc_active");
        });
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productAttSizeListBlock")), function (attSizeListBlock) {
            attSizeListBlock.classList.remove("inc_active");
        });
        // console.log(elPackOfListBlock.className);
        elPackOfListBlock.classList.toggle("inc_active");
    });

    // elQtyInput.addEventListener("click", function () {
    //     Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productPackOfListBlock")), function (el) {
    //         el.classList.remove("inc_active");
    //     });
    //     Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productAttSizeListBlock")), function (attSizeListBlock) {
    //         attSizeListBlock.classList.remove("inc_active");
    //     });
    //     elPackOfListBlock.classList.toggle("inc_active");
    // });

    elQtyInput.addEventListener("keydown", function () {
        // elQtyInput.value = (elQtyInput.value - 1 < 1) ? 1 : elQtyInput.value - 1;

        elPackOfListBlock.classList.remove("inc_active");
        setTimeout(function () {
            if (elQtyInput.value.length == 0) elQtyInput.value = 1;
            if (elQtyInput.value == 0) elQtyInput.value = 1;
            if (elQtyInput.value > 99999) elQtyInput.value = 99999;

            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elQtyInput.value);
            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            if (elAddText.innerText.toUpperCase() == INC.bundleVars.added.toUpperCase() || elAddText.innerText.toLowerCase() == "update") {
                INC.methods.updateBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id);
            }
        }, 50);

    });

    elQtyInputText.appendChild(elQtyInput);


    elQtyDownBlock.addEventListener('click', function () {

        elQtyInput.value = (elQtyInput.value - 1 < 1) ? 1 : elQtyInput.value - 1;
        // productModuleBlock.querySelector('.inc_product_desc_qty_input_text_block').classList.add('inc_active')
        productBlock.querySelector('.inc_product_total_price_block').innerText = "£" + (parseFloat(productObj.activePrice) * elQtyInput.value).toFixed(2)

        var id = productBlock.getAttribute('data-id');
        var qty = parseInt(elQtyInput.value);
        var main_id = productBlock.getAttribute('data-main_id');
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        if (elAddText.innerText.toUpperCase() == INC.bundleVars.added.toUpperCase() || elAddText.innerText.toLowerCase() == "update") {
            INC.methods.updateBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id);
        }
    });

    elQtyUpBlock.addEventListener('click', function () {

        elQtyInput.value = parseInt(elQtyInput.value) + 1;
        // productModuleBlock.querySelector('.inc_product_desc_qty_input_text_block').classList.add('inc_active')
        productBlock.querySelector('.inc_product_total_price_block').innerText = "£" + (parseFloat(productObj.activePrice) * elQtyInput.value).toFixed(2)
        var id = productBlock.getAttribute('data-id');
        var qty = parseInt(elQtyInput.value);
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var main_id = productBlock.getAttribute('data-main_id');
        if (elAddText.innerText.toUpperCase() == INC.bundleVars.added.toUpperCase() || elAddText.innerText.toLowerCase() == "update") {
            INC.methods.updateBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id);
        }
    });
    var elTotalPrice = this.generateHTMLTags('div');
    elTotalPrice.classList.add('inc_product_total_price_block')
    elTotalPrice.innerText = "£" + (parseFloat(productObj.activePrice) * elQtyInput.value).toFixed(2)



    findObj = new INC.classes.FindObj({ mainId: productObj.mainId });

    var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);

    var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);

    var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);

    var product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);

    var product4Obj = INC.dataStore.methods().getProductopt4Obj(findObj);
    elAttColorListBlock.innerHTML = "";
    if (productColorsObj.colorArray.length > 0) {
        if (productColorsObj["colorArray"][0].code == "Color") {
            elAttColorListBlock.innerHTML = "";
            elAttColorListBlock.classList.add('varient_' + productColorsObj["colorArray"].length)
            var elImgColorSwatch = document.createElement('div');
            elImgColorSwatch.classList.add("img_color_swatch");

        var elImgColorSwatchCount = document.createElement('div');
        elImgColorSwatchCount.classList.add("img_color_swatch_count");
        elImgColorSwatchCount.innerText = productColorsObj["colorArray"].length;
        elImgMainZoomTextBlock.style.display = "flex";
        elImgMainZoomText.appendChild(elImgColorSwatch);
        elImgMainZoomText.appendChild(elImgColorSwatchCount);
            // if (INC.debug) console.log(productColorsObj["colorArray"]);
            var one_attr_flag = false
            if (productColorsObj["colorArray"].length == 1) {
                one_attr_flag = true
            }
            var colrcount = 0;
            if (productColorsObj["colorArray"].length > 0) {
                productColorsObj["colorArray"].forEach(function (colorObj) {

                    colrcount++
                    elAttColorBlock.classList.add("inc_active");
                    elAttColorTitleText.innerText = INC.bundleVars.pleaseSelectShades;
                    var attColorBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemBlock"] })
                    var attColorImgBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImgBlock"] });
                    var attColorImg = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImg"] });
                    var attColorTextBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemTextBlock"] });
                    var attColorText = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemText"] });
                    var productAttColorListItemImgHoverBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImgHoverBlock"] });
                    var productAttColorListItemImgHover = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImgHover"] });

                    attColorImgBlock.addEventListener("click", function () {
                        // debugger
                        var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                        if (elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == "inc_product_module_block" && elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block') != null) prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                        var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                        if (elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == "inc_product_module_block" && elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block') != null) prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')

                        var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                        var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                        if (atteditbutton != null) {
                            // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                            // atteditbutton.textContent = INC.config.EditText
                        }
                        elAttColorBlock.classList.remove('show_dropdown')
                        if (prod_modal_attr_block.querySelector('.select_option_inc_title') != null) {
                            prod_modal_attr_block.querySelector('.select_option_inc_title').innerText = "Size:"
                            prod_modal_attr_block.querySelector('.select_option_inc_title').setAttribute('style', '')
                            prod_modal_attr_block.querySelector('.inc_variant_tag').setAttribute('style', '')
                            // prod_card_attr_block.querySelector('.inc_variant_tag').setAttribute('style','')
                        }


                        if (productBlock.querySelector('.close_read_more') != null) {
                            productBlock.querySelector('.close_read_more').click()
                        }
                        var colorText = this.getAttribute("data-color")
                        elAttBlock.setAttribute("data-color", colorText);
                        //elAttBlock.classList.add("active1")
                        prod_card_attr_block.setAttribute("data-color", colorText);
                        if (atteditbutton != null) {
                            // atteditbutton.parentNode.classList.add('active')
                        }
                        // prod_card_attr_block.querySelector('.inc_product_desc_att_color_title_text').innerText = ""
                        if (productBlock.parentNode.parentNode.querySelector('.inc_product_desc_add_text').innerText.toUpperCase().trim() == INC.bundleVars.added.toUpperCase().trim()) {
                            prod_card_attr_block.querySelector('.inc_product_desc_att_color_title_text_selected').textContent = colorText //inc_product_desc_att_color_list_item_img_block
                            //console.log(colorText + "7")
                            if (prod_card_attr_block.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + colorText + '"]') != null) {
                                prod_card_attr_block.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + colorText + '"]').click()
                            }
                        }
                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_color_list_item_img')

                        for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                            all_color_list_item_img[cl].parentNode.parentNode.classList.remove("active");
                            all_color_list_item_img[cl].parentNode.classList.remove("active");
                        }

                        this.parentNode.classList.add("active");
                        // elAttColorTitleText.textContent = "Selected shade: ";
                        elAttColorTitleTextSelected.textContent = colorText;

                        //third
                        productAddErrText.innerText = "";
                        var sel_size = elAttBlock.getAttribute('data-size')
                        findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: colorText });
                        var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj, this);
                        if (product0Obj.att0Array.length > 0) {
                            if (product0Obj["att0Array"][0].code != "Color") {
                                // elAttBlock.classList.add('config_avail')
                                // elAttBlock.classList.add('elipsis_inc')
                                // elp_var_title.innerHTML = INC.config.ColorSizeText
                                findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
                                var selcop = elAtt0ListBlock.parentNode.parentNode.querySelector('.select_option_inc_block')
                                if (selcop != null) {
                                    selcop.parentNode.removeChild(selcop)
                                }
                                elAtt0ListBlock.innerHTML = "";
                                var product0Obj = product0Obj;
                                var productSizeText = "";
                                var select_option_inc_block = generate_html_tag('div', 'select_option_inc_block')
                                var select_option_inc_title = generate_html_tag('div', 'select_option_inc_title')
                                select_option_inc_title.textContent = "Selected size: "
                                select_option_inc_block.appendChild(select_option_inc_title)
                                var selectvariant = generate_html_tag('select', 'inc_variant_tag')
                                select_option_inc_block.appendChild(selectvariant)
                                selectvariant.setAttribute('id', 'variant_inc_avail')
                                // selectvariant.addEventListener("click", function(el){
                                //     if(productBlock.parentNode.parentNode.querySelector(".inc_product_desc_add_text").innerText.toUpperCase().trim() == INC.bundleVars.added.toUpperCase().trim() && productBlock.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + this.value + '"]' != null)){
                                //         productBlock.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + this.value + '"]').click();
                                //     }
                                //     findObj = new INC.classes.FindObj({ mainId: productBlock.getAttribute('data-main_id') });
                                //     findObj.id = productBlock.getAttribute('data-main_id')
                                //     findObj.colorText = this.value
                                //     productObj = INC.dataStore.methods().getProductByAtt(findObj);
                                //     productBlock.setAttribute('data-id', productObj.sku)
                                //     productBlock.setAttribute('data-sku', productObj.sku)
                                // })
                                selectvariant.setAttribute('onchange','inc_onchange_variant(this)')
                                elAtt4Block.parentNode.insertBefore(select_option_inc_block, elAtt4Block)
                                var variantoption1 = generate_html_tag('option', 'variantoption')
                                variantoption1.textContent = "Select size";
                                variantoption1.setAttribute('disabled', 'disabled')
                                variantoption1.setAttribute('selected', 'selected')
                                variantoption1.setAttribute('data-size', "");
                                variantoption1.setAttribute("datasize", "");
                                variantoption1.setAttribute('data-option', "");
                                selectvariant.appendChild(variantoption1)
                                var sel_avail = false
                                product0Obj["att0Array"].forEach(function (sizeObj) {
                                    elAtt0ListBlock.classList.add('varient_' + product0Obj.att0Array.length)
                                    var variantoption = generate_html_tag('option', 'variantoption')
                                    variantoption.textContent = sizeObj["text"];
                                    variantoption.setAttribute('data-size', sizeObj["text"]);
                                    variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                    variantoption.setAttribute('data-option', "1");
                                    variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                                    variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                                    if (product0Obj["att0Array"].length == 1) {
                                        elAttBlock.setAttribute("data-zero", sizeObj["text"]);
                                        variantoption.selected = 'selected'
                                        sel_avail = true
                                        prod_card_attr_block.setAttribute("data-zero", sizeObj["text"]);
                                    } else if (elAtt0Block.parentNode.getAttribute('data-zero') != null) {
                                        if (sizeObj["text"].toLocaleLowerCase() == elAtt0Block.parentNode.getAttribute('data-zero').toLocaleLowerCase()) {
                                            variantoption.selected = 'selected'
                                            sel_avail = true
                                        }
                                    }

                                    selectvariant.appendChild(variantoption)

                                });
                                if (sel_avail == false) {
                                    elAttBlock.setAttribute("data-zero", '');
                                    prod_card_attr_block.setAttribute("data-zero", '');
                                }
                                if (product0Obj["att0Array"].length > 0) {
                                    elAtt0TitleText.textContent = product0Obj["att0Array"][0].code;
                                    elAtt0Block.classList.add("active");
                                    var sizecount = 0
                                    product0Obj["att0Array"].forEach(function (sizeObj) {
                                        sizecount++
                                        var attSizeBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemBlock"] });
                                        var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                                        var attSizeImg0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });
                                        attSizeImgBlock0.addEventListener("click", function (e) {
                                            var elattrmodule = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                                            if (elattrmodule.classList.contains('inc_product_module_block') == true) {
                                                var prod_card_attr_block = elattrmodule.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                                var prod_modal_attr_block = elattrmodule.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                            } else {
                                                if (elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true) {
                                                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode
                                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                                } else {
                                                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                                }
                                            }
                                            if (prod_modal_attr_block.querySelector('.select_option_inc_title') != null) {
                                                prod_modal_attr_block.querySelector('.select_option_inc_title').innerText = "Selected size: "
                                                prod_modal_attr_block.querySelector('.select_option_inc_title').setAttribute('style', '')
                                                prod_modal_attr_block.querySelector('.inc_variant_tag').setAttribute('style', '')
                                                // prod_card_attr_block.querySelector('.inc_variant_tag').setAttribute('style','')
                                            }

                                            var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                            var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                            if (atteditbutton != null) {
                                                // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                                atteditbutton.textContent = INC.config.EditText
                                            }
                                            elAtt0Block.classList.remove('show_dropdown')

                                            if (productBlock.querySelector('.close_read_more') != null) {
                                                productBlock.querySelector('.close_read_more').click()
                                            }
                                            var attr_text = this.getAttribute("data-size");

                                            elAttBlock.setAttribute("data-zero", attr_text);
                                            if (prod_card_attr_block.classList.contains('inc_product_desc_att_block') == true) {
                                                prod_card_attr_block.setAttribute("data-zero", attr_text)
                                            } else if (prod_card_attr_block.querySelector('.inc_product_showcase_block .inc_product_desc_att_block') != null) {
                                                prod_card_attr_block.querySelector('.inc_product_showcase_block .inc_product_desc_att_block').setAttribute("data-zero", attr_text)
                                            }
                                            if (atteditbutton != null) {
                                                // atteditbutton.parentNode.classList.add('active')
                                            }

                                            var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                                            for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                                all_color_list_item_img[cl].classList.remove("active");
                                            }

                                            this.classList.add("active");

                                            elAtt0TitleText.textContent = attr_text;

                                            var sel_size = elAttBlock.getAttribute('data-size')
                                            findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                                            findObj.sizeText = sel_size


                                            INC.methods.updateProductBlock(productBlock, findObj, blockType);

                                            var productModuleBlock = productBlock.parentNode.parentNode;

                                            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                                            INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                            var zero_text = elAttBlock.getAttribute('data-zero');
                                            var size_text = elAttBlock.getAttribute('data-size');
                                            var color_text = elAttBlock.getAttribute('data-color');
                                            var third_text = elAttBlock.getAttribute('data-third');

                                            var sel_attr_text = ""
                                            if (color_text != undefined) {
                                                sel_attr_text = color_text
                                            }
                                            if (zero_text != undefined) {
                                                if (sel_attr_text == "") {
                                                    sel_attr_text = zero_text
                                                } else {
                                                    sel_attr_text = sel_attr_text + "  " + zero_text
                                                }
                                            }
                                            if (size_text != undefined) {
                                                sel_attr_text = sel_attr_text + "  " + size_text
                                            }
                                            if (third_text != undefined) {
                                                sel_attr_text = sel_attr_text + "  " + third_text
                                            }
                                            var pr_mod_elm = productBlock.parentNode.parentNode
                                            if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').textContent = sel_attr_text
                                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                                            }

                                            productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').textContent = ""

                                        });
                                        if (product0Obj["att0Array"].length == 1) {
                                            elAttBlock.setAttribute("data-zero", sizeObj["text"]);
                                        }
                                        attSizeImgBlock0.classList.add('avail')
                                        if (productSizeText.length == 0) {
                                            productSizeText = sizeObj["text"];
                                        }
                                        var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                                        var chckType = sizeObj["text"];

                                        reg.test(chckType);


                                        attSizeImg0.textContent = sizeObj["text"];
                                        attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                                        attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                        attSizeImgBlock0.setAttribute('data-option', "1");
                                        if (product0Obj["att0Array"][0].code == "Size") {
                                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                                        } else if (product0Obj["att0Array"][0].code == "letter") {
                                            attSizeImgBlock0.setAttribute('title', "Letter" + " " + sizeObj["text"].toUpperCase());
                                        } else if (product0Obj["att0Array"][0].code == "choose") {
                                            attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                                        } else {
                                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                                        }

                                        attSizeImgBlock0.appendChild(attSizeImg0);
                                        elAtt0ListBlock.appendChild(attSizeImgBlock0);
                                        if (elAtt0Block.parentNode.getAttribute('data-zero') != null) {
                                            if (attSizeImgBlock0.getAttribute('data-size').toLocaleLowerCase() == elAtt0Block.parentNode.getAttribute('data-zero').toLocaleLowerCase()) {
                                                attSizeImgBlock0.classList.add('active')
                                            }
                                        }
                                    });

                                }
                            }
                        }

                        //end 

                        INC.methods.updateProductBlock(productBlock, findObj, blockType);

                        var productModuleBlock = productBlock.parentNode.parentNode;

                        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                        INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                        var zero_text = elAttBlock.getAttribute('data-zero');
                        var size_text = elAttBlock.getAttribute('data-size');
                        var color_text = elAttBlock.getAttribute('data-color');
                        var third_text = elAttBlock.getAttribute('data-third');

                        var selcolor = color_text.toLowerCase()
                        var sel_color = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + selcolor + '"]')
                        if (sel_color != null) {
                            var all_color_list_item_imgs = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_color_list_item_img')

                            for (cls = 0; cls < all_color_list_item_imgs.length; cls++) {
                                all_color_list_item_imgs[cls].parentNode.parentNode.classList.remove("active");
                            }
                            sel_color.classList.add('active')
                        }

                        var sel_attr_text = ""
                        if (color_text != undefined) {
                            sel_attr_text = color_text
                        }
                        if (zero_text != undefined) {
                            if (sel_attr_text == "") {
                                sel_attr_text = zero_text
                            } else {
                                sel_attr_text = sel_attr_text + "  " + zero_text
                            }
                        }
                        if (size_text != undefined) {
                            sel_attr_text = sel_attr_text + "  " + size_text
                        }
                        if (third_text != undefined) {
                            sel_attr_text = sel_attr_text + "  " + third_text
                        }
                        var pr_mod_elm = productBlock.parentNode.parentNode
                        if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                            if (this.querySelector('img') != null) {
                                var attr_src = this.querySelector('img').src
                                // elAttColorTitleTextSelected.parentNode.querySelector('img').src=attr_src
                                // pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').parentNode.querySelector('img').src = attr_src
                                // pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').parentNode.querySelector('img').style.display="block"
                                // pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').textContent = sel_attr_text 
                                // pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
                            }
                        }

                        // productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').textContent=""
                    });



                    attColorImg.style.backgroundColor = colorObj["colorCode"];
                    productAttColorListItemImgHover.style.backgroundColor = colorObj["colorCode"];

                    if (colorObj["imgSrc"].length > 0) {
                        if (colorObj["colorCode"] == "") {
                            //{ src: colorObj["imgSrc"] }
                            var colorImg = INC.methods.generateHTMLTags('img');
                            colorImg.setAttribute('alt', colorObj["text"])
                            // colorImg.style.backgroundImage="url('"+colorObj["imgSrc"]+"')";
                            // if(onloadpdp == true){
                                colorImg.setAttribute('src', colorObj["imgSrc"])
                            // }
                            if (productObj.categoryName != "") {
                                colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                            }
                            //
                            attColorImg.appendChild(colorImg);
                            //productAttColorListItemImgHover.appendChild(colorImg);
                        }
                    }
                    if (colorObj["imgSrc"].length > 0) {
                        if (colorObj["colorCode"] == "") {
                            //{ src: colorObj["imgSrc"] }
                            var colorImg = INC.methods.generateHTMLTags('img');
                            colorImg.setAttribute('alt', colorObj["text"])
                            // colorImg.style.backgroundImage="url('"+colorObj["imgSrc"]+"')";
                            // if(onloadpdp == true){
                                colorImg.setAttribute('src', colorObj["imgSrc"])
                            // }
                            if (productObj.categoryName != "") {
                                colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                            }
                            //
                            //attColorImg.appendChild(colorImg);
                            productAttColorListItemImgHover.appendChild(colorImg);
                        }
                    }

                    var colorTitle = INC.methods.generateHTMLTags('a');
                    colorTitle.textContent = colorObj["text"]
                    colorTitle.title = colorObj["text"].toUpperCase();
                    colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                    attColorImg.appendChild(colorTitle);

                    var colorTitle1 = INC.methods.generateHTMLTags('a');
                    colorTitle1.textContent = colorObj["text"]
                    colorTitle1.title = colorObj["text"].toUpperCase();
                    colorTitle1.addEventListener('click', function (e) { e.preventDefault(); })
                    productAttColorListItemImgHover.appendChild(colorTitle1);

                    attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                    attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                    attColorImgBlock.setAttribute('data-option', "0");

                    productAttColorListItemImgHoverBlock.setAttribute('data-color', colorObj["text"]);
                    productAttColorListItemImgHoverBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                    productAttColorListItemImgHoverBlock.setAttribute('data-option', "0");


                    attColorImgBlock.appendChild(attColorImg);
                    attColorBlock.appendChild(attColorImgBlock);
                    productAttColorListItemImgHoverBlock.appendChild(productAttColorListItemImgHover)
                    productAttColorListItemImgHoverBlock.style.display = "none";
                    attColorBlock.appendChild(productAttColorListItemImgHoverBlock)
                    elAttColorListBlock.appendChild(attColorBlock);
                    // if(INC.methods.detectDeviceType()  == "mobile"){
                    //     elMobAttColorListBlock.appendChild(attColorBlock)
                    // }
                    var prod_id = productBlock.getAttribute('data-main_id');
                    if (one_attr_flag == true) {
                        setTimeout(function () {
                            if (INC.methods.getProductIdFromWebPage() == prod_id) {
                                attColorImgBlock.click()
                            }
                        }, 0)
                    }
                });
            }
        } else if (productColorsObj["colorArray"][0].code != "Color") {
            if (productColorsObj["colorArray"][0].code == "Size") {
                // elAttBlock.classList.add('config_avail')
                // elAttBlock.classList.add('elipsis_inc')
                elAttColorBlock.classList.add("inc_active");
                elAttColorListBlock.classList.add('varient_' + productColorsObj["colorArray"].length)
                // elp_var_title.innerHTML = INC.config.ColorSizeText
                findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
                                var selcop = elAtt0ListBlock.parentNode.parentNode.querySelector('.select_option_inc_block')
                                if (selcop != null) {
                                    selcop.parentNode.removeChild(selcop)
                                }
                                elAtt0ListBlock.innerHTML = "";
                var product0Obj = product0Obj;
                var productSizeText = "";
                var select_option_inc_block = generate_html_tag('div', 'select_option_inc_block')
                select_option_inc_block.style.display="none"
                var select_option_inc_title = generate_html_tag('div', 'select_option_inc_title')
                select_option_inc_title.textContent = "Selected size: "
                select_option_inc_block.appendChild(select_option_inc_title)
                var selectvariant = generate_html_tag('select', 'inc_variant_tag')
                select_option_inc_block.appendChild(selectvariant)
                selectvariant.setAttribute('id', 'variant_inc_avail')
                // selectvariant.addEventListener("click", function(el){
                //     if(productBlock.parentNode.parentNode.querySelector(".inc_product_desc_add_text").innerText.toUpperCase().trim() == INC.bundleVars.added.toUpperCase().trim() && productBlock.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + this.value + '"]') != null){
                //         productBlock.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + this.value + '"]').click();
                //     }
                //     if(selectvariant.value != "Select size"){
                //         productBlock.querySelector(".inc_product_desc_add_err_text_block").innerText = ""
                //     }
                //     findObj = new INC.classes.FindObj({ mainId: productBlock.getAttribute('data-main_id') });
                //                     findObj.id = productBlock.getAttribute('data-main_id')
                //                     findObj.colorText = this.value
                //                     productObj = INC.dataStore.methods().getProductByAtt(findObj);
                //                     productBlock.setAttribute('data-id', productObj.sku)
                //                     productBlock.setAttribute('data-sku', productObj.sku)
                // })
                selectvariant.setAttribute('onchange','inc_onchange_variant(this)')
                elAtt4Block.parentNode.insertBefore(select_option_inc_block, elAtt4Block)
                var variantoption1 = generate_html_tag('option', 'variantoption')
                variantoption1.textContent = "Select size";
                variantoption1.setAttribute('disabled', 'disabled')
                variantoption1.setAttribute('selected', 'selected')
                variantoption1.setAttribute('data-size', "");
                variantoption1.setAttribute("datasize", "");
                variantoption1.setAttribute('data-option', "");
                selectvariant.appendChild(variantoption1)
                productColorsObj["colorArray"].forEach(function (sizeObj) {
                    var variantoption = generate_html_tag('option', 'variantoption')
                    variantoption.textContent = sizeObj["text"];
                    variantoption.setAttribute('data-size', sizeObj["text"]);
                    variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    variantoption.setAttribute('data-option', "1");
                    variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                    variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                    if (productColorsObj["colorArray"].length == 1) {
                        variantoption.selected = 'selected'
                    }
                    selectvariant.appendChild(variantoption)

                });
                if (productColorsObj["colorArray"].length > 0) {
                    elAtt0TitleText.textContent = productColorsObj["colorArray"][0].code;
                    elAtt0Block.classList.add("active");
                    var sizecount = 0
                    productColorsObj["colorArray"].forEach(function (sizeObj) {
                        sizecount++
                        var attSizeBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemBlock"] });
                        var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                        var attSizeImg0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });
                        attSizeImgBlock0.addEventListener("click", function (e) {
                            var elattrmodule = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                            if (elattrmodule.classList.contains('inc_product_module_block') == true) {
                                var prod_card_attr_block = elattrmodule.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                var prod_modal_attr_block = elattrmodule.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                            } else {
                                if (elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true) {
                                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode
                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                } else {
                                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                }
                            }
                            if (prod_modal_attr_block.querySelector('.select_option_inc_title') != null) {
                                prod_modal_attr_block.querySelector('.select_option_inc_title').innerText = "Selected size: "
                                prod_modal_attr_block.querySelector('.select_option_inc_title').setAttribute('style', '')
                                prod_modal_attr_block.querySelector('.inc_variant_tag').setAttribute('style', '')
                                // prod_card_attr_block.querySelector('.inc_variant_tag').setAttribute('style','')
                            }

                            var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                            
                            
                            var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                            if (atteditbutton != null) {
                                // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                atteditbutton.textContent = INC.config.EditText
                            }
                            elAtt0Block.classList.remove('show_dropdown')

                            if (productBlock.querySelector('.close_read_more') != null) {
                                productBlock.querySelector('.close_read_more').click()
                            }
                            var attr_text = this.getAttribute("data-size");
                            var colotextsel = prod_card_attr_block.querySelector('.inc_product_desc_att_color_title_text_selected')
                            colotextsel.innerText = attr_text
                            elAttBlock.setAttribute("data-zero", attr_text);
                            prod_modal_attr_block.setAttribute("data-zero", attr_text)
                            if (atteditbutton != null) {
                                // atteditbutton.parentNode.classList.add('active')
                            }

                            var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                            for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                all_color_list_item_img[cl].classList.remove("active");
                            }

                            this.classList.add("active");

                            elAtt0TitleText.textContent = attr_text;

                            var sel_size = elAttBlock.getAttribute('data-size')
                            findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                            findObj.sizeText = sel_size


                            INC.methods.updateProductBlock(productBlock, findObj, blockType);

                            var productModuleBlock = productBlock.parentNode.parentNode;

                            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                            INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                            var zero_text = elAttBlock.getAttribute('data-zero');
                            var size_text = elAttBlock.getAttribute('data-size');
                            var color_text = elAttBlock.getAttribute('data-color');
                            var third_text = elAttBlock.getAttribute('data-third');

                            var sel_attr_text = ""
                            if (color_text != undefined) {
                                sel_attr_text = color_text
                            }
                            if (zero_text != undefined) {
                                if (sel_attr_text == "") {
                                    sel_attr_text = zero_text
                                } else {
                                    sel_attr_text = sel_attr_text + "  " + zero_text
                                }
                            }
                            if (size_text != undefined) {
                                sel_attr_text = sel_attr_text + "  " + size_text
                            }
                            if (third_text != undefined) {
                                sel_attr_text = sel_attr_text + "  " + third_text
                            }
                            var pr_mod_elm = productBlock.parentNode.parentNode
                            if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').textContent = sel_attr_text
                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                            }

                            productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').textContent = ""

                        });

                        attSizeImgBlock0.classList.add('avail')
                        if (productSizeText.length == 0) {
                            productSizeText = sizeObj["text"];
                        }
                        var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                        var chckType = sizeObj["text"];

                        reg.test(chckType);


                        attSizeImg0.textContent = sizeObj["text"];
                        attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                        attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock0.setAttribute('data-option', "1");
                        if (productColorsObj["colorArray"][0].code == "Size") {
                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                        } else if (productColorsObj["colorArray"][0].code == "letter") {
                            attSizeImgBlock0.setAttribute('title', "Letter" + " " + sizeObj["text"].toUpperCase());
                        } else if (productColorsObj["colorArray"][0].code == "choose") {
                            attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                        } else {
                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                        }

                        attSizeImgBlock0.appendChild(attSizeImg0);
                        elAtt0ListBlock.appendChild(attSizeImgBlock0);

                    });

                }
            }
        }
    }
    if (product0Obj.att0Array.length > 0) {
        if (product0Obj["att0Array"][0].code != "Color") {
            // elAttBlock.classList.add('config_avail')
            // elAttBlock.classList.add('elipsis_inc')
            elAtt0ListBlock.classList.add('varient_' + product0Obj.att0Array.length)
            // elp_var_title.innerHTML = INC.config.ColorSizeText
            findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
            elAtt0ListBlock.innerHTML = "";
            var product0Obj = product0Obj;
            var productSizeText = "";
            var select_option_inc_block = generate_html_tag('div', 'select_option_inc_block')
            var select_option_inc_title = generate_html_tag('div', 'select_option_inc_title')
            select_option_inc_title.textContent = "Selected size: "
            
            select_option_inc_block.appendChild(select_option_inc_title)
            var selectvariant = generate_html_tag('select', 'inc_variant_tag')
            select_option_inc_block.appendChild(selectvariant)
            selectvariant.setAttribute('onchange','inc_onchange_variant(this)')
            selectvariant.setAttribute('id', 'variant_inc_avail')
            // selectvariant.addEventListener("click", function(el){
            //     if(productBlock.parentNode.parentNode.querySelector(".inc_product_desc_add_text").innerText.toUpperCase().trim() == INC.bundleVars.added.toUpperCase().trim() && productBlock.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + this.value + '"]' != null)){
            //         productBlock.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + this.value + '"]').click();
            //     }
            // })
            elAtt4Block.parentNode.insertBefore(select_option_inc_block, elAtt4Block)
            var variantoption1 = generate_html_tag('option', 'variantoption')
            variantoption1.textContent = "Select size";
            variantoption1.setAttribute('disabled', 'disabled')
            variantoption1.setAttribute('selected', 'selected')
            variantoption1.setAttribute('data-size', "");
            variantoption1.setAttribute("datasize", "");
            variantoption1.setAttribute('data-option', "");
            selectvariant.appendChild(variantoption1)
            product0Obj["att0Array"].forEach(function (sizeObj) {
                var variantoption = generate_html_tag('option', 'variantoption')
                variantoption.textContent = sizeObj["text"];
                variantoption.setAttribute('data-size', sizeObj["text"]);
                variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                variantoption.setAttribute('data-option', "1");
                variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                if (product0Obj["att0Array"].length == 1) {
                    variantoption.selected = 'selected'
                }
                selectvariant.appendChild(variantoption)

            });
            if (product0Obj["att0Array"].length > 0) {
                elAtt0TitleText.textContent = product0Obj["att0Array"][0].code;
                elAtt0Block.classList.add("active");
                var sizecount = 0
                product0Obj["att0Array"].forEach(function (sizeObj) {
                    sizecount++
                    var attSizeBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemBlock"] });
                    var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                    var attSizeImg0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });
                    attSizeImgBlock0.addEventListener("click", function (e) {
                        var elattrmodule = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                        if (elattrmodule.classList.contains('inc_product_module_block') == true) {
                            var prod_card_attr_block = elattrmodule.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                            var prod_modal_attr_block = elattrmodule.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                        } else {
                            if (elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true) {
                                var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode
                                var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                            } else {
                                var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                            }
                        }
                        if (prod_modal_attr_block.querySelector('.select_option_inc_title') != null) {
                            prod_modal_attr_block.querySelector('.select_option_inc_title').innerText = "Selected size: "
                            prod_modal_attr_block.querySelector('.select_option_inc_title').setAttribute('style', '')
                            prod_modal_attr_block.querySelector('.inc_variant_tag').setAttribute('style', '')
                            // prod_card_attr_block.querySelector('.inc_variant_tag').setAttribute('style','')
                        }

                        var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                        if (atteditbutton != null) {
                            // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                            atteditbutton.textContent = INC.config.EditText
                        }
                        elAtt0Block.classList.remove('show_dropdown')

                        if (productBlock.querySelector('.close_read_more') != null) {
                            productBlock.querySelector('.close_read_more').click()
                        }
                        var attr_text = this.getAttribute("data-size");
                        var colotextsel = prod_card_attr_block.querySelector('.inc_product_desc_att_color_title_text_selected')
                       // colotextsel.innerText = attr_text
                        elAttBlock.setAttribute("data-zero", attr_text);
                        prod_modal_attr_block.setAttribute("data-zero", attr_text)
                        if (atteditbutton != null) {
                            // atteditbutton.parentNode.classList.add('active')
                        }

                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                        for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                            all_color_list_item_img[cl].classList.remove("active");
                        }

                        this.classList.add("active");

                        elAtt0TitleText.textContent = attr_text;

                        var sel_size = elAttBlock.getAttribute('data-size')
                        findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                        findObj.sizeText = sel_size


                        INC.methods.updateProductBlock(productBlock, findObj, blockType);

                        var productModuleBlock = productBlock.parentNode.parentNode;

                        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                        INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                        var zero_text = elAttBlock.getAttribute('data-zero');
                        var size_text = elAttBlock.getAttribute('data-size');
                        var color_text = elAttBlock.getAttribute('data-color');
                        var third_text = elAttBlock.getAttribute('data-third');

                        var sel_attr_text = ""
                        if (color_text != undefined) {
                            sel_attr_text = color_text
                        }
                        if (zero_text != undefined) {
                            if (sel_attr_text == "") {
                                sel_attr_text = zero_text
                            } else {
                                sel_attr_text = sel_attr_text + "  " + zero_text
                            }
                        }
                        if (size_text != undefined) {
                            sel_attr_text = sel_attr_text + "  " + size_text
                        }
                        if (third_text != undefined) {
                            sel_attr_text = sel_attr_text + "  " + third_text
                        }
                        var pr_mod_elm = productBlock.parentNode.parentNode
                        if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').textContent = sel_attr_text
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                        }

                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').textContent = ""

                    });

                    attSizeImgBlock0.classList.add('avail')
                    if (productSizeText.length == 0) {
                        productSizeText = sizeObj["text"];
                    }
                    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                    var chckType = sizeObj["text"];

                    reg.test(chckType);


                    attSizeImg0.textContent = sizeObj["text"];
                    attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                    attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock0.setAttribute('data-option', "1");
                    if (product0Obj["att0Array"][0].code == "Size") {
                        attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                    } else if (product0Obj["att0Array"][0].code == "letter") {
                        attSizeImgBlock0.setAttribute('title', "Letter" + " " + sizeObj["text"].toUpperCase());
                    } else if (product0Obj["att0Array"][0].code == "choose") {
                        attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                    } else {
                        attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                    }

                    attSizeImgBlock0.appendChild(attSizeImg0);
                    elAtt0ListBlock.appendChild(attSizeImgBlock0);

                });

            }
        }
    }

    if (INC.debug) console.log(productObj);
    if (INC.debug) console.log("========");
    if (productColorsObj["colorArray"].length == 0) {

        elAttColorTitleText.innerText = INC.bundleVars.viewDetails;
        elAttBlock.classList.add("inc_simple")
    }
    else{
        elAttColorTitleText.innerText = INC.bundleVars.pleaseSelectShades
    }


    switch (blockType) {
        case "pdp": elAddText.innerText = INC.bundleVars.add; break;
        case "sidebar":
        case "am": elAddText.innerText = INC.bundleVars.add; break;
    }

    elAddBlock.addEventListener("click", function (e) {
        //debugger
        e.preventDefault();
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var productModuleBlock = productBlock.parentNode.parentNode;

        var modalProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        var sku = productBlock.getAttribute('data-sku');
        var mainId = productBlock.getAttribute('data-main_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
        var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
        var qty = parseInt(elQtyInput.value);
        var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
        var prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null && document.querySelector('.inc_af_block') == null) {
            

                if(flag_check == 1){
                    switch (elAddText.innerText.toUpperCase()) {
                        case INC.bundleVars.add.toUpperCase(): elAddText.innerText = INC.bundleVars.added;
                            elAddText.classList.add('added');
                            productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_block').classList.add('added');
                            elAddText.parentNode.parentNode.classList.add('inc_added_product');
                            modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = INC.bundleVars.update;
                            var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                            if (pListItemBlock != null) {
                                pListItemBlock.classList.add('product_added');
                                pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.add("checked");
                            }
                            elAddImg.classList.add("checked");
                            
                            if(productModuleBlock.querySelector('.inc_product_desc_att_block.inc_simple') != null){
                                
                            }else{
                                productModuleBlock.querySelector('.inc_product_desc_att_edit_text').innerText = INC.bundleVars.edit;
                                productModuleBlock.querySelector('.inc_product_desc_att_edit_block').classList.add("inc_active");
                            }
                            modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.add("checked");
                            
                            if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null && productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color') != null && productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color') != "") {
                                elAttColorTitleTextSelected.textContent = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
                                elAttColorTitleText.innerText = ""
                                elAttColorTitleText.parentNode.parentNode.parentNode.parentNode.classList.add("inc_active")
                                
                                if(productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_block') != null){
                                    var textsel = productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_block').getAttribute('data-zero')
                                    if(textsel == undefined){
                                        textsel = productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_block').getAttribute('data-color')
                                    }
                                   // console.log(textsel + "8")
                                   // if (modalProductBlock.querySelector('.inc_product_desc_att_color_title_text_selected') != null && textsel != "" && textsel != null) modalProductBlock.querySelector('.inc_product_desc_att_color_title_text_selected').textContent = textsel
                                }
                            }
                            else if (productObj.option[0] != undefined) {
                                // elAttColorTitleTextSelected.innerText = productObj.option[0].text
                                elAttColorTitleText.innerText = ""
                                elAttColorTitleText.parentNode.parentNode.parentNode.parentNode.classList.add("inc_active")
                                elAttColorTitleTextSelected.innerText = productObj.option[0].text
                                if(productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_block') != null){
                                    var textsel = productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_block').getAttribute('data-zero')
                                    if(textsel == null){
                                        textsel = productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_block').getAttribute('data-color')
                                    }
                                    if(modalProductBlock.querySelector('.inc_product_desc_att_block') != null && modalProductBlock.querySelector('.inc_product_desc_att_block').getAttribute('data-zero') != null) textsel = modalProductBlock.querySelector('.inc_product_desc_att_block').getAttribute('data-zero')
                                    if(modalProductBlock.querySelector('.inc_product_desc_att_block') != null && modalProductBlock.querySelector('.inc_product_desc_att_block').getAttribute('data-color') != null) textsel = modalProductBlock.querySelector('.inc_product_desc_att_block').getAttribute('data-color')
                                    if(textsel != null && textsel != "") elAttColorTitleTextSelected.innerText = textsel
                                }
                            }
                            if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id, pname, pprice);
                            if (prod_card != null) {
                                if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                    prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                                    document.querySelector('html').classList.remove('inc_prevent_scroll')
                                    document.querySelector('html').style.overflow = "auto";
                                    document.querySelector('body').classList.remove('inc_overlay')
                                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                                        document.querySelector('body').style.position = "";
                                        if (INC.methods.detectPageType() == "pdp") {
                                            if(document.querySelector('.inc_pdp_block') != null){
                                                jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 10}, 0);
                                            }
                                        }
                                        else if (INC.methods.detectPageType() == "cartPage") {
                                            jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
                                        }
                                    }
                                }
                            }
                            break;
                        case INC.bundleVars.added.toUpperCase():
                            if (modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText != INC.bundleVars.update && prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                elAddText.innerText = INC.bundleVars.add;
                                elAddText.classList.remove('added');
                                productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_block').classList.remove('added');
                                elAddText.parentNode.parentNode.classList.remove('inc_added_product');
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = INC.bundleVars.add;
                                var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                                if (pListItemBlock != null) {
                                    pListItemBlock.classList.remove('product_added');
                                    pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                                }
                                elAddImg.classList.remove("checked");
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub", main_id, bundle_id, pname, pprice);
                            } else {
                                if (prod_card.querySelector('.inc_product_modal_block.inc_active') == null) {
                                    elAddText.innerText = INC.bundleVars.add;
                                    elAddText.classList.remove('added');
                                    productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_block').classList.remove('added');
                                    elAddText.parentNode.parentNode.classList.remove('inc_added_product');
                                    modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = INC.bundleVars.add;
                                    elAttSizeTitleText.innerText = INC.bundleVars.pleaseSelectShades;

                                    if(productModuleBlock.querySelector('.inc_product_desc_att_block.inc_simple') != null){
                                        elAttColorTitleText.innerText = "View Details"
                                    }else{
                                        elAttColorTitleText.innerText = "Select option"
                                    }
                                    
                                    elAttBlock.classList.remove("inc_active")
                                    elAttColorTitleTextSelected.innerText = "";
                                    elAttBlock.parentNode.classList.remove("inc_active")
                                    var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                                    if (pListItemBlock != null) {
                                        pListItemBlock.classList.remove('product_added');
                                        pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                                    }
                                    //productAttColorListItemBlock.classList.remove("active");
                                    // if (modalProductBlock.querySelector(getSelectorClassName(classNames, "productAttColorListItemBlock")) != null) modalProductBlock.querySelector(getSelectorClassName(classNames, "productAttColorListItemBlock")).classList.remove("active")
                                    // if (modalProductBlock.querySelector(getSelectorClassName(classNames, "productAttColorListItemBlock")) != null) modalProductBlock.querySelector(getSelectorClassName(classNames, "productAttColorTitleTextSelected")).innerText = "";
                                    productModuleBlock.querySelector('.inc_product_desc_att_edit_block').classList.remove("inc_active");
                                    productModuleBlock.querySelector('.inc_product_desc_att_edit_text').innerText = "";
                                    elAddImg.classList.remove("checked");
                                    modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                    if (INC.config.pageType == "pdp" && blockType == "pdp") {
                                        INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub", main_id, bundle_id, pname, pprice);
                                        if (Object.keys(INC.dataStore.bundleCartProducts).length < 4) {
                                            INC.methods.createSidebarBlock()
                                        }
                                    }
                                }
                            }
                            if (prod_card != null) {
                                if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                    prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                                }
                            }
                            break;
                    }
                } else {
                    // productModuleBlock.querySelector('.img_color_swatch').click()
                    if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).parentNode.querySelector('.img_color_swatch') != null) {
                        productModuleBlock.querySelector('.img_color_swatch').click()
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = "Please select an option"
                    } else if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                        //inc_product_desc_att_size_title_text
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = "Please select an option"
                        productModuleBlock.querySelector('.inc_product_desc_att_block').click()
                    }
                }
            
        } else {
            //debugger
            if (productModuleBlock.querySelector('.img_color_swatch') != null || productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                // if(productModuleBlock.querySelector('.img_color_swatch') != null || productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                // elAddText.innerText = "Adding...";    
                if(flag_check == 1){

                    elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                    setTimeout(function () {
                        elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                    }, 100);
                } else {
                    if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.img_color_swatch') != null) {
                        productModuleBlock.querySelector('.img_color_swatch').click()
                    } else if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                        productModuleBlock.querySelector('.inc_product_desc_att_block').click()
                    }
                    // if (blockType == "sidebar") {
                    //    // if (productModuleBlock.querySelector('.inc_selected_color_wrapper_block').querySelectorAll('img').length > 0) {
                    //         switch (elAddText.innerText.toUpperCase()) {
                    //             case INC.bundleVars.add.toUpperCase():
                    //                 var qty = parseInt(productModuleBlock.querySelector('.inc_product_desc_qty_input_text input').value);
                    //                 elAddText.innerText = INC.bundleVars.edit;
                    //                 elAddText.parentNode.parentNode.classList.add('inc_added_product')
                    //                 if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id);
                    //                 if (blockType == "sidebar") {
                    //                     findObj = new INC.classes.FindObj({ id: productObj.mainId, mainId: productObj.mainId, sku: sku });
                    //                     INC.methods.addProductToCart(findObj, qty, "sidebar", productModuleBlock, this);
                    //                 }
                    //                 modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.add("checked");
                    //                 elAddImg.classList.add("checked");
                    //                 if(prod_card != null){
                    //                     if(prod_card.querySelector('.inc_product_modal_block.inc_active') != null){
                    //                         prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                    //                     }
                    //                 }
                    //                 break;
                    //             case INC.bundleVars.edit.toUpperCase():
                    //                 var qty = parseInt(productModuleBlock.querySelector('.inc_product_desc_qty_input_text input').value);
                    //                 elAddText.innerText = INC.bundleVars.edit;
                    //                 elAddText.parentNode.parentNode.classList.remove('inc_added_product')
                    //                 if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub", main_id, bundle_id);
                    //                 modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                    //                 elAddImg.classList.remove("checked");
                    //                 productModuleBlock.querySelector('.inc_selected_color_wrapper_block').innerHTML = ""
                    //                 if(prod_card != null){
                    //                     if(prod_card.querySelector('.inc_product_modal_block.inc_active') != null){
                    //                         prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                    //                     }
                    //                 }
                    //                 break;
                    //         }

                    //    // }
                    // }
                }


            } else {
                elAddText.innerText = "Adding...";
                elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                setTimeout(function () {
                    elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                }, 100);
            }
        }
    });
    if (blockType == "sidebar" || document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
        if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null && document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active') != null) {
            document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add("inc_popup_open")
        }
        if (document.querySelector('.inc_product_modal_block') == null && document.querySelector('.inc_sidebar_modal_block') != null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
            
            document.querySelector('.inc_sidebar_modal_block').classList.remove("inc_popup_open")
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
            }
        }
    }

    return productBlock;
}

INC.methods.checkVariantSelection = function(prod_module_block){
    //debugger
    var attr_flag_color = false;
    var attr_flag_size = false;
    var attr__flag_zero = false;
    //inc_product_desc_att_color_block active
    //inc_product_desc_att_zero_block active
    var elSize = prod_module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_block.active')
    var elColor = prod_module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_block.active')
    var elattr0 = prod_module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_zero_block.active')
    // var elColor = prod_module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_block.active')
    
    if(elColor != null && elattr0 != null){
        if(elColor.querySelector('.inc_product_desc_att_color_list_item_block.active') != null && elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.active') != null){
            attr_flag_color = true
            attr__flag_zero = true
        }else{
            attr_flag_color = false
            attr__flag_zero = false
        }
    }else{
        if(elColor != null){
            if(elColor.querySelector('.inc_product_desc_att_color_list_item_block.active') != null){
                attr_flag_color = true
            }
        }else{
            attr_flag_color = true
        }
        if(elattr0 != null){
            if(elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.active') != null){
                attr__flag_zero = true 
            }
        }else{
            attr__flag_zero = true
        }
        if(elSize != null){
            if(elSize.querySelector('.inc_product_desc_att_size_list_item_img_block.active') != null){
                attr_flag_size = true
            }
        }else{
            attr_flag_size = true
        }
    }
    
    if(attr_flag_color == true && attr__flag_zero == true){
        return 1
    }else{
        return 0
    }
}

INC.methods.createProductModalBlock = function (pdpProductId, blockType, bundleProductListCheck) {
    var classNames = INC.uiConfig[blockType].className;
    var productBlock = this.getElementChilds("productBlock", blockType);
    var findObj = new INC.classes.FindObj({ id: pdpProductId });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    // var productColorText = productObj["option"]["2"].text;
    var getSelectorClassName = this.getSelectorClassName;

    productBlock.setAttribute('data-id', productObj.id);
    productBlock.setAttribute('data-sku', productObj.sku);
    productBlock.setAttribute('data-main_id', productObj.mainId);
    productBlock.setAttribute('data-bundle_id', productObj.bundleId);
    productBlock.classList.add(productObj.ProductType);

    function getViewElement(className) {
        return productBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elHeader = getViewElement("productHeaderBlock");
    var elInfoText = getViewElement("productInfoText");
    var elImgBlock = getViewElement("productImgBlock");
    var elImgGalleryListBlock = getViewElement("productImgGalleryListBlock");
    var elTitleBlock = getViewElement("productTitleBlock");
    var elTitleText = getViewElement("productTitleText");
    var elPriceActiveText = getViewElement("productPriceActiveText");
    var elPriceActiveMsg = getViewElement("productPriceActiveTextMsg");
    var elPriceRegularText = getViewElement("productPriceRegularText");
    var elAttBlock = getViewElement("productAttBlock");
    var elAttColorBlock = getViewElement("productAttColorBlock");
    var elAttColorTitleText = getViewElement("productAttColorTitleText");
    var elAttColorTitleTextSelected = getViewElement("productAttColorTitleTextSelected");
    var elAttColorListBlock = getViewElement("productAttColorListBlock");//productShadeMobileBlock
    var elMobAttColorListBlock = getViewElement("productShadeMobileBlock");
    var elAttSizeBlock = getViewElement("productAttSizeBlock");
    var elAttSizeTitleBlock = getViewElement("productAttSizeTitleBlock");
    var elAttSizeTitleText = getViewElement("productAttSizeTitleText");
    var elAttSizeTitleTextSelected = getViewElement("productAttSizeTitleTextSelected");
    var elAttSizeListBlock = getViewElement("productAttSizeListBlock");
    var elAtt0ListBlock = getViewElement("productAttzeroListBlock");
    var elAtt3ListBlock = getViewElement("productAttthirdListBlock");
    var elAtt4ListBlock = getViewElement("productAttfourthListBlock");


    var elAtt0Block = getViewElement("productAttzeroBlock");
    var elAtt3Block = getViewElement("productAttthirdBlock");
    var elAtt4Block = getViewElement("productAttfourthBlock");
    var elAtt0TitleTextSelected = getViewElement("productAttzeroTitleTextSelected");
    var elAtt0TitleText = getViewElement("productAttzeroTitleText");
    var elAtt3TitleTextSelected = getViewElement("productAttthirdTitleTextSelected");
    var elAtt3TitleText = getViewElement("productAttthirdTitleText");
    var elAtt4TitleTextSelected = getViewElement("productAttfourthTitleTextSelected");
    var elAtt4TitleText = getViewElement("productAttfourthTitleText");

    var elPackOfListBlock = getViewElement("productPackOfListBlock");
    var elQtyBlock = getViewElement("productQtyBlock");
    var elQtyInputText = getViewElement("productQtyInputText");
    var elQtyDownBlock = getViewElement("productQtyDownBlock");
    var elQtyUpBlock = getViewElement("productQtyUpBlock");
    var elAddBlock = getViewElement("productAddBlock");
    var elAddText = getViewElement("productAddText");
    var elAddImg = getViewElement("productAddImg");
    var elratingsBlock = getViewElement("productRatingsBlock");
    var elFullDesctext = getViewElement("productInfoFullDescText");
    var elworthPrice = getViewElement("productPriceWorthText");
    var elPromoText = getViewElement("productPromoMsgText");
    var selectedBlockTitle = getViewElement("productSelectedTitleText");
    var rightArrow = getViewElement("productImgGalleryRightBtnImgBlock");
    var leftArrow = getViewElement("productImgGalleryLeftBtnImgBlock");
    var selectedEmpty = getViewElement("selectedColorWrapperBlock");
    var elProductDescriptionText = getViewElement("productDescriptionHeaderTitleText")

    var eldescrpionblock = getViewElement("productDescBlock");
    var elProductDescriptionText = getViewElement("productDescriptionHeaderTitleText")
    var elMaindescription = getViewElement("productDescriptionMainBlock")
    var elviewdetailheader = getViewElement("productHeaderBlock")
    var eldescheader = getViewElement("productDescriptionHeaderBlock")
    var elInfomain = getViewElement("productInfoMainBlock")
    var elcloseblk = getViewElement("productHeaderImgBlock")
    var productHeaderMainBlockTitle = getViewElement("productHeaderMainBlockTitle")
    var productHeaderMainBlockRating = getViewElement("productHeaderMainBlockRating")
    var productViewshortDescText = getViewElement("productViewshortDescText")
    var productAddErrText = getViewElement("productAddErrText");
    var popupTitleText = getViewElement("productHeaderTitleText")

    // if (INC.debug) console.log(productObj);

    elHeader.querySelector(getSelectorClassName(classNames, "productHeaderImgBlock")).addEventListener("click", function () {
        if (this.parentNode.parentNode.querySelector('.inc_selected_color_wrapper_block') != null && this.parentNode.parentNode.querySelector('.inc_selected_color_wrapper_block').querySelectorAll('img') != undefined && this.parentNode.parentNode.querySelector('.inc_selected_color_wrapper_block').querySelectorAll('img').length > 0) {
            // this.parentNode.parentNode.querySelector('.inc_selected_color_wrapper_block').querySelectorAll('img')
            // this.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_img').classList.add('checked');
            // this.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click();

        }
        if (blockType == "sidebar" || document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
            document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove("inc_popup_open")
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
            }
            productBlock.parentNode.parentNode.querySelector('.inc_product_desc_add_text').innerText = INC.bundleVars.add
        }
        if (productBlock.querySelector('.inc_product_Info_Full_desc_info_block') != null) {
            productBlock.querySelector('.inc_product_Info_Full_desc_info_block').classList.remove('show_full_desc')
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
            document.querySelector('body').classList.remove('inc_overlay');
            document.querySelector('html').classList.remove('inc_prevent_scroll')
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                document.querySelector('body').style.position = "";
                if (INC.methods.detectPageType() == "pdp") {
                    if(document.querySelector('.inc_pdp_block') != null){
                        jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 10}, 0);
                    }
                }
                else if (INC.methods.detectPageType() == "cartPage") {
                    jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
                }
            }
            document.querySelector('html').style.overflow = "auto";
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
        if (blockType == "am") {
            findObj = new INC.classes.FindObj({ id: productObj.mainId, mainId: productObj.mainId, sku: productObj.sku });
            var qtyBlock = productBlock.querySelectorAll('.inc_selected_color_qty_input_text_block');
            var qty = 0
            if (qtyBlock.length > 0) {
                qtyBlock.forEach(function (val) {
                    qty = qty + parseInt(val.innerText);
                })
            }
            // INC.methods.addProductToCart(findObj, qty, "am", productBlock, this);
        }
        if (blockType == "sidebar" || document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
            productBlock.querySelector('.inc_selected_color_wrapper_block').innerHTML = ""
            if (productBlock.querySelector('.inc_empty_text') != null) {
                productBlock.querySelector('.inc_empty_text').classList.add('inc_active')
            }
        }
        productBlock.parentNode.classList.remove("inc_active");
        if (blockType == "sidebar" || document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
            document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove("inc_popup_open")
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
            }
        }
        if (this.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_selected_color_wrapper_block') != null) {
            if (this.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_selected_color_wrapper_block').children.length == 0) {
                this.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_att_size_title_text').innerText = INC.bundleVars.pleaseSelectShades;
                this.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_att_wrapper_inner_block').classList.remove('inc_active');
                // this.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_att_edit_block').classList.remove('inc_active');
                if (this.parentNode.parentNode.parentNode != null && this.parentNode.parentNode.parentNode.classList.contains("simple")) {
                    this.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_att_size_title_text').innerText = INC.bundleVars.viewDetails;
                }
            }
        }
    });

    var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));
    var elImgTag1 = this.generateHTMLTags('img', { src: productObj.imageURL });
    elImgTag1.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" )
    var productLink = document.createElement('a');

    // productLink.href = productObj.url;
    productLink.addEventListener("click", function (e) {
        productBlock.querySelector('.inc_product_img_main_zoom_btn_img').click()
    })
    productLink.appendChild(elImgTag1);
    if (elPromoText != null || elPromoText != undefined) {
        elPromoText.innerText = productObj.promoMsg;
    }
    // if ((productObj.otherImageList != null) && productObj.otherImageList.length > 0) {
    //     var elImgtag2 = this.generateHTMLTags('img', { src: productObj.otherImageList[0].split("?")[0] + "?defaultImage=travisperkins/missing-product&layer=comp&fit=constrain,1&wid=400&hei=400&fmt=jpg" });
    //     elImgtag2.style.display = "none";
    //     elImgMainImg.addEventListener("mouseover", function () {
    //         elImgTag1.style.display = "none";
    //         elImgtag2.style.display = "block";
    //     });

    //     elImgMainImg.addEventListener("mouseout", function () {
    //         elImgTag1.style.display = "block";
    //         elImgtag2.style.display = "none";
    //     });

    //     productLink.appendChild(elImgtag2);
    // }

    elImgMainImg.appendChild(productLink);
    //opened
    elImgMainImg.addEventListener("click", function () {
        INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
    });

    elImgGalleryListBlock.innerHTML = "";
    rightArrow.style.visibility = "hidden";
    leftArrow.style.visibility = "hidden";
    if ((productObj.otherImageList != null) && productObj.otherImageList.length > 0) {
        var otimg = 0
        productObj.otherImageList.forEach(function (otherImgURL) {
            var elOtherImgTag = INC.methods.generateHTMLTags('img', { src: otherImgURL });
            elOtherImgTag.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" )
            var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));

            elImgGalleryListItemImg.appendChild(elOtherImgTag);

            elImgGalleryListItemBlock.addEventListener("click", function () {

                Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function (galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("inc_active");
                });

                elImgGalleryListItemBlock.classList.add("inc_active");

                elImgMainImg.querySelector('img').src = otherImgURL;
            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if (otimg == 0) {
                elImgGalleryListItemBlock.classList.add('inc_active')
            }
            otimg++;
            if (productObj.otherImageList.length > 5) {
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }
        });

        // elImgGalleryListBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemBlock")).click();
        // if (INC.methods.detectDeviceType() == "mobile") {
        //     var addBtn = INC.methods.generateHTMLTags('div');
        //     addBtn.classList.add('inc_mobile_modal_add_block');
        //     var parent = productBlock.querySelector('.inc_product_desc_att_wrapper_inner_block');
        //     if (parent != null) {
        //         parent.appendChild(addBtn);
        //     }
        //     var addBtnTxt = INC.methods.generateHTMLTags('div');
        //     addBtnTxt.classList.add('inc_mobile_modal_add_btn')
        //     addBtnTxt.innerText = INC.bundleVars.add;
        //     addBtn.appendChild(addBtnTxt);
        //     addBtn.addEventListener("click", function () {
        //         addBtn.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_qty_add_btn_block').click();
        //         if (INC.methods.detectDeviceType() == "mobile") {
        //             addBtn.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_qty_add_btn_block').click();
        //             addBtn.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_att_wrapper_block').classList.remove('inc_active');
        //             addBtn.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_text_block').click()

        //         }
        //     })
        // }
    }

    elTitleBlock.addEventListener("click", function () {
        INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
    });

    var pTitleDiv = document.createElement('div');
    pTitleDiv.innerText = productObj.name;

    // elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = productObj.name + " | " + productObj.categoryName;

    var field1 = productObj.ratingsCount;
    var field2 = productObj.reviewCount
    if (field1 != "") {
        INC.methods.get_product_ratings(field1,field2, elratingsBlock);
    }
    var pLink = document.createElement('a');
    // pLink.href = productObj.url;
    // pLink.addEventListener("click", function (e) {
    //     productBlock.querySelector('.inc_product_img_main_zoom_btn_img').click()
    // })
    pLink.href = productObj.url;
    pLink.target = "_blank";
    pLink.setAttribute('style','text-transform: unset;cursor: pointer !important;')
    pLink.setAttribute("title", productObj.name);
    pLink.appendChild(pTitleDiv);
    elTitleText.appendChild(pLink);

    elInfoText.innerHTML = productObj.description;
    var shortDescriptionVar = INC.methods.generateHTMLTags('div');
    shortDescriptionVar.innerText = elInfoText.innerText;
    popupTitleText.innerText = "Overview"
    if (productObj.description != "") {
        if (productObj["ProductType"] == "configurable") {

            if (elInfoText.querySelector('p span') != null && elInfoText.querySelector('p').innerText == "About me: ") {
                elInfoText.querySelector('p').parentElement.removeChild(elInfoText.querySelector('p'));
                elInfoText.innerHTML = shortDescriptionVar.innerText.substring(0, 100) + "..." + "<a class='inc_readMore'>" + INC.bundleVars.readMore + "</a>";
            } else {
                elInfoText.innerHTML = shortDescriptionVar.innerText.substring(0, 100) + "..." + "<a class='inc_readMore'>" + INC.bundleVars.readMore + "</a>";
            }
            if (INC.methods.detectDeviceType() == "mobile") {
                elInfoText.innerHTML = shortDescriptionVar.innerText.substring(0, 300) + "..." + "<a class='inc_readMore'>" + INC.bundleVars.readMore + "</a>";
            }
        }
        else {
            elInfoText.innerHTML = shortDescriptionVar.innerText.substring(0, 200) + "..." + "<a class='inc_readMore simple'>" + INC.bundleVars.readMore + "</a>";
        }
        elFullDesctext.innerHTML = productObj.description;
        if (elFullDesctext.querySelector('.see-more') != null) {
            elFullDesctext.removeChild(elFullDesctext.querySelector('.see-more'))
        }
        if (elInfoText.querySelector('.inc_readMore') != null) {
            elInfoText.querySelector('.inc_readMore').addEventListener("click", function (e) {
                productBlock.querySelector('.inc_product_Info_Full_desc_info_block').classList.toggle('show_full_desc')
            })
        }
    }

    if (prdIdBFP.indexOf(productObj.mainId) >= 0) {
        if (productBlock.querySelector('.pc_promo_div') == null && productObj.ProductLevelDiscountMessage != null && productObj.ProductLevelDiscountMessage != "") {
            var ec_promo_wrapper_div = document.createElement('div');
            ec_promo_wrapper_div.classList.add('pc_promo_header_div');
            ec_promo_wrapper_div.classList.add('inc_dual_promo');
            var ec_promo_header_div = document.createElement('div');
            ec_promo_header_div.classList.add('pc_promo_header_div');
            var ec_title_span = document.createElement('span');
            ec_title_span.classList.add('pc_title_span');
            ec_title_span.innerText = "Black friday offer";
            var ec_promo_div = document.createElement('div');
            ec_promo_div.classList.add('pc_promo_div')
            ec_promo_div.classList.add('inc_active')
            var ec_promo_span = document.createElement('span');
            ec_promo_span.classList.add('pc_promo_span')

            ec_promo_span.classList.add('red_promo')
            ec_promo_span.innerHTML = productObj.ProductLevelDiscountMessage.replace("_", " ");
            ec_promo_header_div.appendChild(ec_title_span);
            // ec_promo_header_div.appendChild(ec_promo_header_div);
            ec_promo_div.appendChild(ec_promo_span);
            ec_promo_wrapper_div.appendChild(ec_promo_header_div);
            ec_promo_wrapper_div.appendChild(ec_promo_div)
            var elPrice_blck = getViewElement("productInfoBlock");
            var view = elPrice_blck//productPriceBlock
            if (view != null || view != undefined) {
                // view.insertBefore(ec_promo_div, view.childNodes[0]);
                view.parentNode.insertBefore(ec_promo_wrapper_div, view);
            }
        }
        else if (productBlock.querySelector('.pc_promo_div') == null && productObj.promoMsg != null && productObj.promoMsg != "") {
            // var ec_promo_div = document.createElement('div');
            // ec_promo_div.classList.add('pc_promo_div')
            // ec_promo_div.classList.add('inc_active')
            // var ec_promo_span = document.createElement('span');
            // ec_promo_span.classList.add('pc_promo_span')

            // ec_promo_span.classList.add('red_promo')
            // ec_promo_span.innerHTML = productObj.promoMsg.replace("_", " ")
            // ec_promo_div.appendChild(ec_promo_span);

            // var elPrice_blck = getViewElement("productInfoBlock");
            // var view = elPrice_blck//productPriceBlock
            // if (view != null || view != undefined) {
            //     // view.insertBefore(ec_promo_div, view.childNodes[0]);
            //     view.parentNode.insertBefore(ec_promo_div, view);
            // }
            var ec_promo_wrapper_div = document.createElement('div');
            ec_promo_wrapper_div.classList.add('pc_promo_header_div');
            ec_promo_wrapper_div.classList.add('inc_dual_promo');
            var ec_promo_header_div = document.createElement('div');
            ec_promo_header_div.classList.add('pc_promo_header_div');
            var ec_title_span = document.createElement('span');
            ec_title_span.classList.add('pc_title_span');
            ec_title_span.innerText = "Black friday offer";
            var ec_promo_div = document.createElement('div');
            ec_promo_div.classList.add('pc_promo_div')
            ec_promo_div.classList.add('inc_active')
            var ec_promo_span = document.createElement('span');
            ec_promo_span.classList.add('pc_promo_span')

            ec_promo_span.classList.add('red_promo')
            ec_promo_span.innerHTML = productObj.promoMsg.replace("_", " ");
            ec_promo_header_div.appendChild(ec_title_span);
            // ec_promo_header_div.appendChild(ec_promo_header_div);
            ec_promo_div.appendChild(ec_promo_span);
            ec_promo_wrapper_div.appendChild(ec_promo_header_div);
            ec_promo_wrapper_div.appendChild(ec_promo_div)
            var elPrice_blck = getViewElement("productInfoBlock");
            var view = elPrice_blck//productPriceBlock
            if (view != null || view != undefined) {
                // view.insertBefore(ec_promo_div, view.childNodes[0]);
                view.parentNode.insertBefore(ec_promo_wrapper_div, view);
            }
        }
        else {
            var ec_promo_div = document.createElement('div');
            ec_promo_div.classList.add('pc_promo_div')
            ec_promo_div.classList.add('empty');
            var elPrice_blck = getViewElement("productInfoBlock");
            var view = elPrice_blck//productPriceBlock
            if (view != null || view != undefined) {
                // view.insertBefore(ec_promo_div, view.childNodes[0]);
                view.parentNode.insertBefore(ec_promo_div, view);
            }
        }
    } else {
        if (productBlock.querySelector('.pc_promo_div') == null && productObj.ProductLevelDiscountMessage != null && productObj.ProductLevelDiscountMessage != "") {
            var ec_promo_wrapper_div = document.createElement('div');
            ec_promo_wrapper_div.classList.add('pc_promo_header_div');
            // ec_promo_wrapper_div.classList.add('inc_dual_promo');
            ec_promo_wrapper_div.classList.add('excl_offer');
            var ec_promo_header_div = document.createElement('div');
            ec_promo_header_div.classList.add('pc_promo_header_div');
            var ec_title_span = document.createElement('span');
            ec_title_span.classList.add('pc_title_span');
            ec_title_span.innerText = "Exclusive offer";
            var ec_promo_div = document.createElement('div');
            ec_promo_div.classList.add('pc_promo_div')
            ec_promo_div.classList.add('inc_active')
            var ec_promo_span = document.createElement('span');
            ec_promo_span.classList.add('pc_promo_span')

            ec_promo_span.classList.add('red_promo')
            var promomsg = productObj.ProductLevelDiscountMessage // + "<br>" + "Free Moisturizing Hand Gel with every order!"
            ec_promo_span.innerHTML = promomsg.replace("_", " ");
            ec_promo_header_div.appendChild(ec_title_span);
            // ec_promo_header_div.appendChild(ec_promo_header_div);
            ec_promo_div.appendChild(ec_promo_span);
            ec_promo_wrapper_div.appendChild(ec_promo_header_div);
            ec_promo_wrapper_div.appendChild(ec_promo_div)
            var elPrice_blck = getViewElement("productInfoBlock");
            var view = elPrice_blck//productPriceBlock
            if (view != null || view != undefined) {
                // view.insertBefore(ec_promo_div, view.childNodes[0]);
                view.parentNode.insertBefore(ec_promo_wrapper_div, view);
            }
        }
        else if (productBlock.querySelector('.pc_promo_div') == null && productObj.promoMsg != null && productObj.promoMsg != "") {
            // var ec_promo_div = document.createElement('div');
            // ec_promo_div.classList.add('pc_promo_div')
            // ec_promo_div.classList.add('inc_active')
            // var ec_promo_span = document.createElement('span');
            // ec_promo_span.classList.add('pc_promo_span')

            // ec_promo_span.classList.add('red_promo')
            // ec_promo_span.innerHTML = productObj.promoMsg.replace("_", " ")
            // ec_promo_div.appendChild(ec_promo_span);

            // var elPrice_blck = getViewElement("productInfoBlock");
            // var view = elPrice_blck//productPriceBlock
            // if (view != null || view != undefined) {
            //     // view.insertBefore(ec_promo_div, view.childNodes[0]);
            //     view.parentNode.insertBefore(ec_promo_div, view);
            // }
            var ec_promo_wrapper_div = document.createElement('div');
            ec_promo_wrapper_div.classList.add('pc_promo_header_div');
            // ec_promo_wrapper_div.classList.add('inc_dual_promo');
            ec_promo_wrapper_div.classList.add('excl_offer');
            var ec_promo_header_div = document.createElement('div');
            ec_promo_header_div.classList.add('pc_promo_header_div');
            var ec_title_span = document.createElement('span');
            ec_title_span.classList.add('pc_title_span');
            ec_title_span.innerText = "Exclusive offer";
            var ec_promo_div = document.createElement('div');
            ec_promo_div.classList.add('pc_promo_div')
            ec_promo_div.classList.add('inc_active')
            var ec_promo_span = document.createElement('span');
            ec_promo_span.classList.add('pc_promo_span')

            ec_promo_span.classList.add('red_promo')
            var promomsg = productObj.promoMsg //+ "<br>" + "Free Moisturizing Hand Gel with every order!"
            ec_promo_span.innerHTML = promomsg.replace("_", " ");
            ec_promo_header_div.appendChild(ec_title_span);
            // ec_promo_header_div.appendChild(ec_promo_header_div);
            ec_promo_div.appendChild(ec_promo_span);
            ec_promo_wrapper_div.appendChild(ec_promo_header_div);
            ec_promo_wrapper_div.appendChild(ec_promo_div)
            var elPrice_blck = getViewElement("productInfoBlock");
            var view = elPrice_blck//productPriceBlock
            if (view != null || view != undefined) {
                // view.insertBefore(ec_promo_div, view.childNodes[0]);
                view.parentNode.insertBefore(ec_promo_wrapper_div, view);
            }
        }
        // else if (productObj.promoMsg == null && productObj.ProductLevelDiscountMessage == null) {
        //     // var ec_promo_div = document.createElement('div');
        //     // ec_promo_div.classList.add('pc_promo_div')
        //     // ec_promo_div.classList.add('inc_active')
        //     // var ec_promo_span = document.createElement('span');
        //     // ec_promo_span.classList.add('pc_promo_span')

        //     // ec_promo_span.classList.add('red_promo')
        //     // ec_promo_span.innerHTML = productObj.promoMsg.replace("_", " ")
        //     // ec_promo_div.appendChild(ec_promo_span);

        //     // var elPrice_blck = getViewElement("productInfoBlock");
        //     // var view = elPrice_blck//productPriceBlock
        //     // if (view != null || view != undefined) {
        //     //     // view.insertBefore(ec_promo_div, view.childNodes[0]);
        //     //     view.parentNode.insertBefore(ec_promo_div, view);
        //     // }
        //     var ec_promo_wrapper_div = document.createElement('div');
        //     ec_promo_wrapper_div.classList.add('pc_promo_header_div');
        //     // ec_promo_wrapper_div.classList.add('inc_dual_promo');
        //     ec_promo_wrapper_div.classList.add('excl_offer');
        //     var ec_promo_header_div = document.createElement('div');
        //     ec_promo_header_div.classList.add('pc_promo_header_div');
        //     var ec_title_span = document.createElement('span');
        //     ec_title_span.classList.add('pc_title_span');
        //     ec_title_span.innerText = "Exclusive offer";
        //     var ec_promo_div = document.createElement('div');
        //     ec_promo_div.classList.add('pc_promo_div')
        //     ec_promo_div.classList.add('inc_active')
        //     var ec_promo_span = document.createElement('span');
        //     ec_promo_span.classList.add('pc_promo_span')

        //     ec_promo_span.classList.add('red_promo')
        //     ec_promo_span.innerHTML = "Free Moisturizing Hand Gel with every order!";
        //     ec_promo_header_div.appendChild(ec_title_span);
        //     // ec_promo_header_div.appendChild(ec_promo_header_div);
        //     ec_promo_div.appendChild(ec_promo_span);
        //     ec_promo_wrapper_div.appendChild(ec_promo_header_div);
        //     ec_promo_wrapper_div.appendChild(ec_promo_div)
        //     var elPrice_blck = getViewElement("productInfoBlock");
        //     var view = elPrice_blck//productPriceBlock
        //     if (view != null || view != undefined) {
        //         // view.insertBefore(ec_promo_div, view.childNodes[0]);
        //         view.parentNode.insertBefore(ec_promo_wrapper_div, view);
        //     }
        // }
        else {
            var ec_promo_div = document.createElement('div');
            ec_promo_div.classList.add('pc_promo_div')
            ec_promo_div.classList.add('empty');
            var elPrice_blck = getViewElement("productInfoBlock");
            var view = elPrice_blck//productPriceBlock
            if (view != null || view != undefined) {
                // view.insertBefore(ec_promo_div, view.childNodes[0]);
                view.parentNode.insertBefore(ec_promo_div, view);
            }
        }
    }
    var close_read_more = document.createElement('div');
    close_read_more.classList.add('close_read_more');
    elFullDesctext.parentNode.appendChild(close_read_more)

    close_read_more.addEventListener('click', function (e) {
        var close_read_more_page = e.target.parentNode
        close_read_more_page.classList.remove('show_full_desc')
    });

    var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
    var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();

    elPriceActiveText.innerText = INC.clientConfig.currencySymbol + activePrice;
    // elPriceActiveMsg.innerText = " + VAT"
    elPriceRegularText.innerText = "";
    if (activePrice != regularPrice) {
        elPriceRegularText.innerText = INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + regularPrice;
        elPriceActiveText.classList.add('special_price')
    }
    // if(worthPrice != "NaN"){
    //     elworthPrice.innerText = "Worth " + worthPrice.replace('.', ',') + INC.clientConfig.currencySymbol;
    // }
    // elAttBlock.addEventListener("click", function(){

    //     this.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("inc_active");
    // });

    var elQtyInput = this.generateHTMLTags('input');
    elQtyInput.setAttribute("disabled", "");
    elQtyInput.setAttribute('type', 'number');
    elQtyInput.setAttribute('min', 1);
    elQtyInput.value = 1;

    // elQtyInput.addEventListener("keydown", function(e){
    //     if(e.key != "Backspace"){
    //         e.preventDefault();
    //         if(e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9" || e.key == "0" ){
    //             elQtyInput.value = elQtyInput.value + e.key;
    //         }
    //     }
    //     console.log(elQtyInput.value.length);
    //     if(elQtyInput.value.length == 0) elQtyInput.value = 1;
    //     if(elQtyInput.value == 0) elQtyInput.value = 1;
    //     // console.log(e);
    // });
    elQtyBlock.addEventListener("click", function () {
        // console.log("clicked");
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productPackOfListBlock")), function (el) {
            el.classList.remove("inc_active");
        });
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productAttSizeListBlock")), function (attSizeListBlock) {
            attSizeListBlock.classList.remove("inc_active");
        });
        // console.log(elPackOfListBlock.className);
        elPackOfListBlock.classList.toggle("inc_active");
    });

    // elQtyInput.addEventListener("click", function () {
    //     Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productPackOfListBlock")), function (el) {
    //         el.classList.remove("inc_active");
    //     });
    //     Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productAttSizeListBlock")), function (attSizeListBlock) {
    //         attSizeListBlock.classList.remove("inc_active");
    //     });
    //     elPackOfListBlock.classList.toggle("inc_active");
    // });

    elQtyInput.addEventListener("keydown", function () {
        // elQtyInput.value = (elQtyInput.value - 1 < 1) ? 1 : elQtyInput.value - 1;

        elPackOfListBlock.classList.remove("inc_active");
        setTimeout(function () {
            if (elQtyInput.value.length == 0) elQtyInput.value = 1;
            if (elQtyInput.value == 0) elQtyInput.value = 1;
            if (elQtyInput.value > 6) elQtyInput.value = 6;

            var productModuleBlock = productBlock.parentNode.parentNode;

            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

            showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elQtyInput.value);
            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            if (elAddText.innerText.toUpperCase() == INC.bundleVars.added.toUpperCase() || elAddText.innerText.toLowerCase() == "update") {
                INC.methods.updateBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id);
            }
        }, 50);

    });

    elQtyInputText.appendChild(elQtyInput);

    elQtyDownBlock.addEventListener('click', function () {

        elQtyInput.value = (elQtyInput.value - 1 < 1) ? 1 : elQtyInput.value - 1;
        // productModuleBlock.querySelector('.inc_product_desc_qty_input_text_block').classList.add('inc_active')
        // productBlock.parentNode.parentNode.querySelector('.inc_product_total_price_block').innerText = "£" + (parseFloat(productObj.activePrice) * elQtyInput.value).toFixed(2)
        var productModuleBlock = productBlock.parentNode.parentNode;

        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

        var sku = productBlock.getAttribute('data-sku');
        if (sku == "") {
            sku = productBlock.getAttribute('data-id');
        }
        var qty = parseInt(elQtyInput.value);
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var main_id = productBlock.getAttribute('data-main_id');
        if (elAddText.innerText.toUpperCase() == INC.bundleVars.added.toUpperCase() || elAddText.innerText.toUpperCase() == INC.bundleVars.update.toUpperCase()) {
            INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id);
        }
    });

    elQtyUpBlock.addEventListener('click', function () {

        elQtyInput.value = parseInt(elQtyInput.value) + 1;
        // productBlock.parentNode.parentNode.querySelector('.inc_product_total_price_block').innerText = "£" + (parseFloat(productObj.activePrice) * elQtyInput.value).toFixed(2)

        var productModuleBlock = productBlock.parentNode.parentNode;
        // productModuleBlock.querySelector('.inc_product_desc_qty_input_text_block').classList.add('inc_active')
        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

        if (productBlock.getAttribute('data-sku') != "") {
            var id = productBlock.getAttribute('data-sku');
        }
        else {
            var id = productBlock.getAttribute('data-id');
        }
        var qty = parseInt(elQtyInput.value);
        var main_id = productBlock.getAttribute('data-main_id');
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        if (elAddText.innerText.toUpperCase() == INC.bundleVars.added.toUpperCase() || elAddText.innerText.toUpperCase() == INC.bundleVars.update.toUpperCase() || elAddText.innerText.toLowerCase() == "update") {
            INC.methods.updateBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id);
        }
    });

    findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
    var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);

    var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);

    var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);

    var product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);

    var product4Obj = INC.dataStore.methods().getProductopt4Obj(findObj);
    elAttColorListBlock.innerHTML = "";
    if (productColorsObj.colorArray.length > 0) {
        if (productColorsObj["colorArray"][0].code == "Color") {
            elAttColorListBlock.innerHTML = "";
            elAttColorListBlock.classList.add('varient_' + productColorsObj["colorArray"].length)
            // if (INC.debug) console.log(productColorsObj["colorArray"]);
            var one_attr_flag = false
            if (productColorsObj["colorArray"].length == 1) {
                one_attr_flag = true
            }
            var colrcount = 0;
            if (productColorsObj["colorArray"].length > 0) {
                productColorsObj["colorArray"].forEach(function (colorObj) {

                    colrcount++
                    elAttColorBlock.classList.add("active");
// elAttColorBlock.classList.add("inc_active");
                    elAttColorTitleText.textContent = "Selected shade: ";
                    var attColorBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemBlock"] })
                    var attColorImgBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImgBlock"] });
                    var attColorImg = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImg"] });
                    var attColorTextBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemTextBlock"] });
                    var attColorText = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemText"] });
                    var productAttColorListItemImgHoverBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImgHoverBlock"] });
                    var productAttColorListItemImgHover = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImgHover"] });

                    attColorImgBlock.addEventListener("click", function () {
                        // debugger
                        var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                        if (elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == "inc_product_module_block" && elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block') != null) prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                        var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                        if (elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == "inc_product_module_block" && elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block') != null) prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')

                        var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                        var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                        if (atteditbutton != null) {
                            // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                            // atteditbutton.textContent = INC.config.EditText
                        }
                        elAttColorBlock.classList.remove('show_dropdown')
                        if (prod_modal_attr_block.querySelector('.select_option_inc_title') != null) {
                            prod_modal_attr_block.querySelector('.select_option_inc_title').innerText = "Size:"
                            prod_modal_attr_block.querySelector('.select_option_inc_title').setAttribute('style', '')
                            prod_modal_attr_block.querySelector('.inc_variant_tag').setAttribute('style', '')
                            // prod_card_attr_block.querySelector('.inc_variant_tag').setAttribute('style','')
                        }


                        if (productBlock.querySelector('.close_read_more') != null) {
                            productBlock.querySelector('.close_read_more').click()
                        }
                        var colorText = this.getAttribute("data-color")
                        elAttBlock.setAttribute("data-color", colorText);
                        //elAttBlock.classList.add("active1")
                        prod_card_attr_block.setAttribute("data-color", colorText);
                        if (atteditbutton != null) {
                            // atteditbutton.parentNode.classList.add('active')
                        }
                        // prod_card_attr_block.querySelector('.inc_product_desc_att_color_title_text').innerText = ""
                        if (productBlock.parentNode.parentNode.querySelector('.inc_product_desc_add_text').innerText.toUpperCase().trim() == INC.bundleVars.added.toUpperCase().trim()) {
                            prod_card_attr_block.querySelector('.inc_product_desc_att_color_title_text_selected').textContent = colorText //inc_product_desc_att_color_list_item_img_block
                            console.log(colorText + " 1")
                            if (prod_card_attr_block.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + colorText + '"]') != null) {
                                prod_card_attr_block.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + colorText + '"]').click()
                            }
                        }
                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_color_list_item_img')

                        for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                            all_color_list_item_img[cl].parentNode.parentNode.classList.remove("active");
                            all_color_list_item_img[cl].parentNode.classList.remove("active");
                        }

                        this.parentNode.classList.add("active");
                        elAttColorTitleText.textContent = "Selected shade: ";
                        elAttColorTitleTextSelected.textContent = colorText;

                        //third
                        productAddErrText.innerText = "";
                        var sel_size = elAttBlock.getAttribute('data-size')
                        findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: colorText });
                        var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj, this);
                        if (product0Obj.att0Array.length > 0) {
                            if (product0Obj["att0Array"][0].code != "Color") {
                                elAttBlock.classList.add('config_avail')
                                elAttBlock.classList.add('elipsis_inc')
                                // elp_var_title.innerHTML = INC.config.ColorSizeText
                                findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
                                var selcop = elAtt0ListBlock.parentNode.parentNode.querySelector('.select_option_inc_block')
                                if (selcop != null) {
                                    selcop.parentNode.removeChild(selcop)
                                }
                                elAtt0ListBlock.innerHTML = "";
                                var product0Obj = product0Obj;
                                var productSizeText = "";
                                var select_option_inc_block = generate_html_tag('div', 'select_option_inc_block')
                                var select_option_inc_title = generate_html_tag('div', 'select_option_inc_title')
                                select_option_inc_title.textContent = "Selected size: "
                                select_option_inc_block.appendChild(select_option_inc_title)
                                var selectvariant = generate_html_tag('select', 'inc_variant_tag')
                                select_option_inc_block.appendChild(selectvariant)
                                selectvariant.setAttribute('id', 'variant_inc_avail')
                                // selectvariant.addEventListener("click", function(el){
                                //     if(productBlock.parentNode.parentNode.querySelector(".inc_product_desc_add_text").innerText.toUpperCase().trim() == INC.bundleVars.added.toUpperCase().trim() && productBlock.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + this.value + '"]' != null)){
                                //         productBlock.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + this.value + '"]').click();
                                //     }
                                //     findObj = new INC.classes.FindObj({ mainId: productBlock.getAttribute('data-main_id') });
                                //     findObj.id = productBlock.getAttribute('data-main_id')
                                //     findObj.colorText = this.value
                                //     productObj = INC.dataStore.methods().getProductByAtt(findObj);
                                //     productBlock.setAttribute('data-id', productObj.sku)
                                //     productBlock.setAttribute('data-sku', productObj.sku)
                                // })
                                selectvariant.setAttribute('onchange','inc_onchange_variant(this)')
                                elAtt4Block.parentNode.insertBefore(select_option_inc_block, elAtt4Block)
                                var variantoption1 = generate_html_tag('option', 'variantoption')
                                variantoption1.textContent = "Select size";
                                variantoption1.setAttribute('disabled', 'disabled')
                                variantoption1.setAttribute('selected', 'selected')
                                variantoption1.setAttribute('data-size', "");
                                variantoption1.setAttribute("datasize", "");
                                variantoption1.setAttribute('data-option', "");
                                selectvariant.appendChild(variantoption1)
                                var sel_avail = false
                                product0Obj["att0Array"].forEach(function (sizeObj) {
                                    elAtt0ListBlock.classList.add('varient_' + product0Obj.att0Array.length)
                                    var variantoption = generate_html_tag('option', 'variantoption')
                                    variantoption.textContent = sizeObj["text"];
                                    variantoption.setAttribute('data-size', sizeObj["text"]);
                                    variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                    variantoption.setAttribute('data-option', "1");
                                    variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                                    variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                                    if (product0Obj["att0Array"].length == 1) {
                                        elAttBlock.setAttribute("data-zero", sizeObj["text"]);
                                        variantoption.selected = 'selected'
                                        sel_avail = true
                                        prod_card_attr_block.setAttribute("data-zero", sizeObj["text"]);
                                    } else if (elAtt0Block.parentNode.getAttribute('data-zero') != null) {
                                        if (sizeObj["text"].toLocaleLowerCase() == elAtt0Block.parentNode.getAttribute('data-zero').toLocaleLowerCase()) {
                                            variantoption.selected = 'selected'
                                            sel_avail = true
                                        }
                                    }

                                    selectvariant.appendChild(variantoption)

                                });
                                if (sel_avail == false) {
                                    elAttBlock.setAttribute("data-zero", '');
                                    prod_card_attr_block.setAttribute("data-zero", '');
                                }
                                if (product0Obj["att0Array"].length > 0) {
                                    elAtt0TitleText.textContent = product0Obj["att0Array"][0].code;
                                    elAtt0Block.classList.add("active");
                                    var sizecount = 0
                                    product0Obj["att0Array"].forEach(function (sizeObj) {
                                        sizecount++
                                        var attSizeBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemBlock"] });
                                        var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                                        var attSizeImg0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });
                                        attSizeImgBlock0.addEventListener("click", function (e) {
                                            var elattrmodule = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                                            if (elattrmodule.classList.contains('inc_product_module_block') == true) {
                                                var prod_card_attr_block = elattrmodule.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                                var prod_modal_attr_block = elattrmodule.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                            } else {
                                                if (elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true) {
                                                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode
                                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                                } else {
                                                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                                }
                                            }
                                            if (prod_modal_attr_block.querySelector('.select_option_inc_title') != null) {
                                                prod_modal_attr_block.querySelector('.select_option_inc_title').innerText = "Selected size: "
                                                prod_modal_attr_block.querySelector('.select_option_inc_title').setAttribute('style', '')
                                                prod_modal_attr_block.querySelector('.inc_variant_tag').setAttribute('style', '')
                                                // prod_card_attr_block.querySelector('.inc_variant_tag').setAttribute('style','')
                                            }

                                            var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                            var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                            if (atteditbutton != null) {
                                                // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                                atteditbutton.textContent = INC.config.EditText
                                            }
                                            elAtt0Block.classList.remove('show_dropdown')

                                            if (productBlock.querySelector('.close_read_more') != null) {
                                                productBlock.querySelector('.close_read_more').click()
                                            }
                                            var attr_text = this.getAttribute("data-size");

                                            elAttBlock.setAttribute("data-zero", attr_text);
                                            // var colotextsel = prod_card_attr_block.querySelector('.inc_product_desc_att_color_title_text_selected')
                                            // colotextsel.innerText = attr_text
                                            // console.log(attr_text + " 2")
                                            if (prod_card_attr_block.classList.contains('inc_product_desc_att_block') == true) {
                                                prod_card_attr_block.setAttribute("data-zero", attr_text)
                                            } else if (prod_card_attr_block.querySelector('.inc_product_showcase_block .inc_product_desc_att_block') != null) {
                                                prod_card_attr_block.querySelector('.inc_product_showcase_block .inc_product_desc_att_block').setAttribute("data-zero", attr_text)
                                            }
                                            if (atteditbutton != null) {
                                                // atteditbutton.parentNode.classList.add('active')
                                            }

                                            var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                                            for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                                all_color_list_item_img[cl].classList.remove("active");
                                            }

                                            this.classList.add("active");

                                            elAtt0TitleText.textContent = attr_text;

                                            var sel_size = elAttBlock.getAttribute('data-size')
                                            findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                                            findObj.sizeText = sel_size


                                            INC.methods.updateProductBlock(productBlock, findObj, blockType);

                                            var productModuleBlock = productBlock.parentNode.parentNode;

                                            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                                            INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                            var zero_text = elAttBlock.getAttribute('data-zero');
                                            var size_text = elAttBlock.getAttribute('data-size');
                                            var color_text = elAttBlock.getAttribute('data-color');
                                            var third_text = elAttBlock.getAttribute('data-third');

                                            var sel_attr_text = ""
                                            if (color_text != undefined) {
                                                sel_attr_text = color_text
                                            }
                                            if (zero_text != undefined) {
                                                if (sel_attr_text == "") {
                                                    sel_attr_text = zero_text
                                                } else {
                                                    sel_attr_text = sel_attr_text + "  " + zero_text
                                                }
                                            }
                                            if (size_text != undefined) {
                                                sel_attr_text = sel_attr_text + "  " + size_text
                                            }
                                            if (third_text != undefined) {
                                                sel_attr_text = sel_attr_text + "  " + third_text
                                            }
                                            var pr_mod_elm = productBlock.parentNode.parentNode
                                            if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').textContent = sel_attr_text
                                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                                            }

                                            productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').textContent = ""

                                        });
                                        if (product0Obj["att0Array"].length == 1) {
                                            elAttBlock.setAttribute("data-zero", sizeObj["text"]);
                                        }
                                        attSizeImgBlock0.classList.add('avail')
                                        if (productSizeText.length == 0) {
                                            productSizeText = sizeObj["text"];
                                        }
                                        var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                                        var chckType = sizeObj["text"];

                                        reg.test(chckType);


                                        attSizeImg0.textContent = sizeObj["text"];
                                        attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                                        attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                        attSizeImgBlock0.setAttribute('data-option', "1");
                                        if (product0Obj["att0Array"][0].code == "Size") {
                                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                                        } else if (product0Obj["att0Array"][0].code == "letter") {
                                            attSizeImgBlock0.setAttribute('title', "Letter" + " " + sizeObj["text"].toUpperCase());
                                        } else if (product0Obj["att0Array"][0].code == "choose") {
                                            attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                                        } else {
                                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                                        }

                                        attSizeImgBlock0.appendChild(attSizeImg0);
                                        elAtt0ListBlock.appendChild(attSizeImgBlock0);
                                        if (elAtt0Block.parentNode.getAttribute('data-zero') != null) {
                                            if (attSizeImgBlock0.getAttribute('data-size').toLocaleLowerCase() == elAtt0Block.parentNode.getAttribute('data-zero').toLocaleLowerCase()) {
                                                attSizeImgBlock0.classList.add('active')
                                            }
                                        }
                                    });

                                }
                            }
                        }

                        //end 

                        INC.methods.updateProductBlock(productBlock, findObj, blockType);

                        var productModuleBlock = productBlock.parentNode.parentNode;

                        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                        INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                        var zero_text = elAttBlock.getAttribute('data-zero');
                        var size_text = elAttBlock.getAttribute('data-size');
                        var color_text = elAttBlock.getAttribute('data-color');
                        var third_text = elAttBlock.getAttribute('data-third');

                        var selcolor = color_text.toLowerCase()
                        var sel_color = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + selcolor + '"]')
                        if (sel_color != null) {
                            var all_color_list_item_imgs = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_color_list_item_img')

                            for (cls = 0; cls < all_color_list_item_imgs.length; cls++) {
                                all_color_list_item_imgs[cls].parentNode.parentNode.classList.remove("active");
                            }
                            sel_color.classList.add('active')
                        }

                        var sel_attr_text = ""
                        if (color_text != undefined) {
                            sel_attr_text = color_text
                        }
                        if (zero_text != undefined) {
                            if (sel_attr_text == "") {
                                sel_attr_text = zero_text
                            } else {
                                sel_attr_text = sel_attr_text + "  " + zero_text
                            }
                        }
                        if (size_text != undefined) {
                            sel_attr_text = sel_attr_text + "  " + size_text
                        }
                        if (third_text != undefined) {
                            sel_attr_text = sel_attr_text + "  " + third_text
                        }
                        var pr_mod_elm = productBlock.parentNode.parentNode
                        if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                            if (this.querySelector('img') != null) {
                                var attr_src = this.querySelector('img').src
                                // elAttColorTitleTextSelected.parentNode.querySelector('img').src=attr_src
                                // pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').parentNode.querySelector('img').src = attr_src
                                // pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').parentNode.querySelector('img').style.display="block"
                                // pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').textContent = sel_attr_text 
                                // pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
                            }
                        }

                        // productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').textContent=""
                    });



                    attColorImg.style.backgroundColor = colorObj["colorCode"];
                    productAttColorListItemImgHover.style.backgroundColor = colorObj["colorCode"];

                    if (colorObj["imgSrc"].length > 0) {
                        if (colorObj["colorCode"] == "") {
                            //{ src: colorObj["imgSrc"] }
                            var colorImg = INC.methods.generateHTMLTags('img');
                            colorImg.setAttribute('alt', colorObj["text"])
                            // colorImg.style.backgroundImage="url('"+colorObj["imgSrc"]+"')";
                            // if(onloadpdp == true){
                                colorImg.setAttribute('src', colorObj["imgSrc"])
                            // }
                            if (productObj.categoryName != "") {
                                colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                            }
                            //
                            attColorImg.appendChild(colorImg);
                            //productAttColorListItemImgHover.appendChild(colorImg);
                        }
                    }
                    if (colorObj["imgSrc"].length > 0) {
                        if (colorObj["colorCode"] == "") {
                            //{ src: colorObj["imgSrc"] }
                            var colorImg = INC.methods.generateHTMLTags('img');
                            colorImg.setAttribute('alt', colorObj["text"])
                            // colorImg.style.backgroundImage="url('"+colorObj["imgSrc"]+"')";
                            // if(onloadpdp == true){
                                colorImg.setAttribute('src', colorObj["imgSrc"])
                            // }
                            if (productObj.categoryName != "") {
                                colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                            }
                            //
                            //attColorImg.appendChild(colorImg);
                            productAttColorListItemImgHover.appendChild(colorImg);
                        }
                    }

                    var colorTitle = INC.methods.generateHTMLTags('a');
                    colorTitle.textContent = colorObj["text"]
                    colorTitle.title = colorObj["text"].toUpperCase();
                    colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                    attColorImg.appendChild(colorTitle);

                    var colorTitle1 = INC.methods.generateHTMLTags('a');
                    colorTitle1.textContent = colorObj["text"]
                    colorTitle1.title = colorObj["text"].toUpperCase();
                    colorTitle1.addEventListener('click', function (e) { e.preventDefault(); })
                    productAttColorListItemImgHover.appendChild(colorTitle1);

                    attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                    attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                    attColorImgBlock.setAttribute('data-option', "0");

                    productAttColorListItemImgHoverBlock.setAttribute('data-color', colorObj["text"]);
                    productAttColorListItemImgHoverBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                    productAttColorListItemImgHoverBlock.setAttribute('data-option', "0");


                    attColorImgBlock.appendChild(attColorImg);
                    attColorBlock.appendChild(attColorImgBlock);
                    productAttColorListItemImgHoverBlock.appendChild(productAttColorListItemImgHover)
                    productAttColorListItemImgHoverBlock.style.display = "none";
                    attColorBlock.appendChild(productAttColorListItemImgHoverBlock)
                    elAttColorListBlock.appendChild(attColorBlock);
                    // if(INC.methods.detectDeviceType()  == "mobile"){
                    //     elMobAttColorListBlock.appendChild(attColorBlock)
                    // }
                    var prod_id = productBlock.getAttribute('data-main_id');
                    if (one_attr_flag == true) {
                        setTimeout(function () {
                            if (INC.methods.getProductIdFromWebPage() == prod_id) {
                                attColorImgBlock.click()
                            }
                        }, 0)
                    }
                });
            }
        } else if (productColorsObj["colorArray"][0].code != "Color") {
            if (productColorsObj["colorArray"][0].code == "Size") {
                elAttBlock.classList.add('config_avail')
                elAttBlock.classList.add('elipsis_inc')
                elAttColorListBlock.classList.add('varient_' + productColorsObj["colorArray"].length)
                // elp_var_title.innerHTML = INC.config.ColorSizeText
                findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
                elAtt0ListBlock.innerHTML = "";
                var product0Obj = product0Obj;
                var productSizeText = "";
                var select_option_inc_block = generate_html_tag('div', 'select_option_inc_block')
                var select_option_inc_title = generate_html_tag('div', 'select_option_inc_title')
                select_option_inc_title.textContent = "Selected size: "
                select_option_inc_block.appendChild(select_option_inc_title)
                var selectvariant = generate_html_tag('select', 'inc_variant_tag')
                select_option_inc_block.appendChild(selectvariant)
                selectvariant.setAttribute('id', 'variant_inc_avail')
                // selectvariant.addEventListener("click", function(el){
                //     if(productBlock.parentNode.parentNode.querySelector(".inc_product_desc_add_text").innerText.toUpperCase().trim() == INC.bundleVars.added.toUpperCase().trim() && productBlock.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + this.value + '"]') != null){
                //         productBlock.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + this.value + '"]').click();
                //     }
                //     if(selectvariant.value != "Select size"){
                //         productBlock.querySelector(".inc_product_desc_add_err_text_block").innerText = ""
                //     }
                //     findObj = new INC.classes.FindObj({ mainId: productBlock.getAttribute('data-main_id') });
                //                     findObj.id = productBlock.getAttribute('data-main_id')
                //                     findObj.colorText = this.value
                //                     productObj = INC.dataStore.methods().getProductByAtt(findObj);
                //                     productBlock.setAttribute('data-id', productObj.sku)
                //                     productBlock.setAttribute('data-sku', productObj.sku)
                // })
                selectvariant.setAttribute('onchange','inc_onchange_variant(this)')
                elAtt4Block.parentNode.insertBefore(select_option_inc_block, elAtt4Block)
                var variantoption1 = generate_html_tag('option', 'variantoption')
                variantoption1.textContent = "Select size";
                variantoption1.setAttribute('disabled', 'disabled')
                variantoption1.setAttribute('selected', 'selected')
                variantoption1.setAttribute('data-size', "");
                variantoption1.setAttribute("datasize", "");
                variantoption1.setAttribute('data-option', "");
                selectvariant.appendChild(variantoption1)
                productColorsObj["colorArray"].forEach(function (sizeObj) {
                    var variantoption = generate_html_tag('option', 'variantoption')
                    variantoption.textContent = sizeObj["text"];
                    variantoption.setAttribute('data-size', sizeObj["text"]);
                    variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    variantoption.setAttribute('data-option', "1");
                    variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                    variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                    if (productColorsObj["colorArray"].length == 1) {
                        variantoption.selected = 'selected'
                    }
                    selectvariant.appendChild(variantoption)

                });
                if (productColorsObj["colorArray"].length > 0) {
                    elAtt0TitleText.textContent = productColorsObj["colorArray"][0].code;
                    elAtt0Block.classList.add("active");
                    var sizecount = 0
                    productColorsObj["colorArray"].forEach(function (sizeObj) {
                        sizecount++
                        var attSizeBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemBlock"] });
                        var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                        var attSizeImg0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });
                        attSizeImgBlock0.addEventListener("click", function (e) {
                            var elattrmodule = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                            if (elattrmodule.classList.contains('inc_product_module_block') == true) {
                                var prod_card_attr_block = elattrmodule.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                var prod_modal_attr_block = elattrmodule.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                            } else {
                                if (elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true) {
                                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode
                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                } else {
                                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                }
                            }
                            if (prod_modal_attr_block.querySelector('.select_option_inc_title') != null) {
                                prod_modal_attr_block.querySelector('.select_option_inc_title').innerText = "Selected size: "
                                prod_modal_attr_block.querySelector('.select_option_inc_title').setAttribute('style', '')
                                prod_modal_attr_block.querySelector('.inc_variant_tag').setAttribute('style', '')
                                // prod_card_attr_block.querySelector('.inc_variant_tag').setAttribute('style','')
                            }

                            if(prod_card_attr_block != null){
                                var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                            var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                            }
                            if (atteditbutton != null) {
                                // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                atteditbutton.textContent = INC.config.EditText
                            }
                            elAtt0Block.classList.remove('show_dropdown')

                            if (productBlock.querySelector('.close_read_more') != null) {
                                productBlock.querySelector('.close_read_more').click()
                            }
                            var attr_text = this.getAttribute("data-size");

                            elAttBlock.setAttribute("data-zero", attr_text);
                            prod_modal_attr_block.setAttribute("data-zero", attr_text)
                            if (atteditbutton != null) {
                                // atteditbutton.parentNode.classList.add('active')
                            }
                            if(prod_card_attr_block != null) {
                            var colotextsel = prod_card_attr_block.querySelector('.inc_product_desc_att_color_title_text_selected')
                            colotextsel.innerText = attr_text
                            console.log(attr_text + " 3")
                            }
                            else if (productBlock.parentNode.parentNode != null){
                                var colotextsel = productBlock.parentNode.parentNode.querySelector('.inc_product_desc_att_color_title_text_selected')
                                colotextsel.innerText = attr_text
                                console.log(attr_text + " 4")
                            }

                            var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                            for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                all_color_list_item_img[cl].classList.remove("active");
                            }

                            this.classList.add("active");

                            elAtt0TitleText.textContent = attr_text;

                            var sel_size = elAttBlock.getAttribute('data-size')
                            findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                            findObj.sizeText = sel_size


                            INC.methods.updateProductBlock(productBlock, findObj, blockType);

                            var productModuleBlock = productBlock.parentNode.parentNode;

                            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                            INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                            var zero_text = elAttBlock.getAttribute('data-zero');
                            var size_text = elAttBlock.getAttribute('data-size');
                            var color_text = elAttBlock.getAttribute('data-color');
                            var third_text = elAttBlock.getAttribute('data-third');

                            var sel_attr_text = ""
                            if (color_text != undefined) {
                                sel_attr_text = color_text
                            }
                            if (zero_text != undefined) {
                                if (sel_attr_text == "") {
                                    sel_attr_text = zero_text
                                } else {
                                    sel_attr_text = sel_attr_text + "  " + zero_text
                                }
                            }
                            if (size_text != undefined) {
                                sel_attr_text = sel_attr_text + "  " + size_text
                            }
                            if (third_text != undefined) {
                                sel_attr_text = sel_attr_text + "  " + third_text
                            }
                            var pr_mod_elm = productBlock.parentNode.parentNode
                            if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').textContent = sel_attr_text
                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                            }

                            productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').textContent = ""

                        });

                        attSizeImgBlock0.classList.add('avail')
                        attSizeImgBlock0.classList.add('active')//added active for size
                        if (productSizeText.length == 0) {
                            productSizeText = sizeObj["text"];
                        }
                        var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                        var chckType = sizeObj["text"];

                        reg.test(chckType);


                        attSizeImg0.textContent = sizeObj["text"];
                        attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                        attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock0.setAttribute('data-option', "1");
                        if (productColorsObj["colorArray"][0].code == "Size") {
                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                        } else if (productColorsObj["colorArray"][0].code == "letter") {
                            attSizeImgBlock0.setAttribute('title', "Letter" + " " + sizeObj["text"].toUpperCase());
                        } else if (productColorsObj["colorArray"][0].code == "choose") {
                            attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                        } else {
                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                        }

                        attSizeImgBlock0.appendChild(attSizeImg0);
                        elAtt0ListBlock.appendChild(attSizeImgBlock0);

                    });

                }
            }
        }
    }
    
    if (product0Obj.att0Array.length > 0) {
        if (product0Obj["att0Array"][0].code != "Color") {
            elAttBlock.classList.add('config_avail')
            elAttBlock.classList.add('elipsis_inc')
            elAtt0ListBlock.classList.add('varient_' + product0Obj.att0Array.length)
            // elp_var_title.innerHTML = INC.config.ColorSizeText
            findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
            elAtt0ListBlock.innerHTML = "";
            var product0Obj = product0Obj;
            var productSizeText = "";
            var select_option_inc_block = generate_html_tag('div', 'select_option_inc_block')
            var select_option_inc_title = generate_html_tag('div', 'select_option_inc_title')
            select_option_inc_title.textContent = "Selected size: "
            
            select_option_inc_block.appendChild(select_option_inc_title)
            var selectvariant = generate_html_tag('select', 'inc_variant_tag')
            select_option_inc_block.appendChild(selectvariant)
            selectvariant.setAttribute('onchange','inc_onchange_variant(this)')
            selectvariant.setAttribute('id', 'variant_inc_avail')
            // selectvariant.addEventListener("click", function(el){
            //     if(productBlock.parentNode.parentNode.querySelector(".inc_product_desc_add_text").innerText.toUpperCase().trim() == INC.bundleVars.added.toUpperCase().trim() && productBlock.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + this.value + '"]' != null)){
            //         productBlock.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_img_block[data-color="' + this.value + '"]').click();
            //     }
            // })
            elAtt4Block.parentNode.insertBefore(select_option_inc_block, elAtt4Block)
            var variantoption1 = generate_html_tag('option', 'variantoption')
            variantoption1.textContent = "Select size";
            variantoption1.setAttribute('disabled', 'disabled')
            variantoption1.setAttribute('selected', 'selected')
            variantoption1.setAttribute('data-size', "");
            variantoption1.setAttribute("datasize", "");
            variantoption1.setAttribute('data-option', "");
            selectvariant.appendChild(variantoption1)
            product0Obj["att0Array"].forEach(function (sizeObj) {
                var variantoption = generate_html_tag('option', 'variantoption')
                variantoption.textContent = sizeObj["text"];
                variantoption.setAttribute('data-size', sizeObj["text"]);
                variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                variantoption.setAttribute('data-option', "1");
                variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                if (product0Obj["att0Array"].length == 1) {
                    variantoption.selected = 'selected'
                }
                selectvariant.appendChild(variantoption)

            });
            if (product0Obj["att0Array"].length > 0) {
                elAtt0TitleText.textContent = product0Obj["att0Array"][0].code;
                elAtt0Block.classList.add("active");
                var sizecount = 0
                product0Obj["att0Array"].forEach(function (sizeObj) {
                    sizecount++
                    var attSizeBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemBlock"] });
                    var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                    var attSizeImg0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });
                    attSizeImgBlock0.addEventListener("click", function (e) {
                        var elattrmodule = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                        if (elattrmodule.classList.contains('inc_product_module_block') == true) {
                            var prod_card_attr_block = elattrmodule.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                            var prod_modal_attr_block = elattrmodule.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                        } else {
                            if (elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true) {
                                var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode
                                var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                            } else {
                                var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                            }
                        }
                        if (prod_modal_attr_block.querySelector('.select_option_inc_title') != null) {
                            prod_modal_attr_block.querySelector('.select_option_inc_title').innerText = "Selected size: "
                            prod_modal_attr_block.querySelector('.select_option_inc_title').setAttribute('style', '')
                            prod_modal_attr_block.querySelector('.inc_variant_tag').setAttribute('style', '')
                            // prod_card_attr_block.querySelector('.inc_variant_tag').setAttribute('style','')
                        }

                        var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                        if (atteditbutton != null) {
                            // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                            atteditbutton.textContent = INC.config.EditText
                        }
                        elAtt0Block.classList.remove('show_dropdown')

                        if (productBlock.querySelector('.close_read_more') != null) {
                            productBlock.querySelector('.close_read_more').click()
                        }
                        var attr_text = this.getAttribute("data-size");

                        elAttBlock.setAttribute("data-zero", attr_text);
                        prod_modal_attr_block.setAttribute("data-zero", attr_text)
                        if (atteditbutton != null) {
                            // atteditbutton.parentNode.classList.add('active')
                        }
                        var colotextsel = prod_card_attr_block.querySelector('.inc_product_desc_att_color_title_text_selected')
                            colotextsel.innerText = attr_text
                            console.log(attr_text + " 5")

                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                        for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                            all_color_list_item_img[cl].classList.remove("active");
                        }

                        this.classList.add("active");

                        elAtt0TitleText.textContent = attr_text;

                        var sel_size = elAttBlock.getAttribute('data-size')
                        findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                        findObj.sizeText = sel_size


                        INC.methods.updateProductBlock(productBlock, findObj, blockType);

                        var productModuleBlock = productBlock.parentNode.parentNode;

                        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                        INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                        var zero_text = elAttBlock.getAttribute('data-zero');
                        var size_text = elAttBlock.getAttribute('data-size');
                        var color_text = elAttBlock.getAttribute('data-color');
                        var third_text = elAttBlock.getAttribute('data-third');

                        var sel_attr_text = ""
                        if (color_text != undefined) {
                            sel_attr_text = color_text
                        }
                        if (zero_text != undefined) {
                            if (sel_attr_text == "") {
                                sel_attr_text = zero_text
                            } else {
                                sel_attr_text = sel_attr_text + "  " + zero_text
                            }
                        }
                        if (size_text != undefined) {
                            sel_attr_text = sel_attr_text + "  " + size_text
                        }
                        if (third_text != undefined) {
                            sel_attr_text = sel_attr_text + "  " + third_text
                        }
                        var pr_mod_elm = productBlock.parentNode.parentNode
                        if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').textContent = sel_attr_text
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                        }

                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').textContent = ""

                    });

                    attSizeImgBlock0.classList.add('avail')
                    if (productSizeText.length == 0) {
                        productSizeText = sizeObj["text"];
                    }
                    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                    var chckType = sizeObj["text"];

                    reg.test(chckType);


                    attSizeImg0.textContent = sizeObj["text"];
                    attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                    attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock0.setAttribute('data-option', "1");
                    if (product0Obj["att0Array"][0].code == "Size") {
                        attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                    } else if (product0Obj["att0Array"][0].code == "letter") {
                        attSizeImgBlock0.setAttribute('title', "Letter" + " " + sizeObj["text"].toUpperCase());
                    } else if (product0Obj["att0Array"][0].code == "choose") {
                        attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                    } else {
                        attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                    }

                    attSizeImgBlock0.appendChild(attSizeImg0);
                    elAtt0ListBlock.appendChild(attSizeImgBlock0);

                });

            }
        }
    }
    if (Object.keys(productColorsObj) > 0 && productColorsObj["colorArray"] != undefined && productColorsObj["colorArray"].length == 0 && productObj.size.length > 0) {

        elAttSizeBlock.classList.add("inc_active");
        elAttSizeTitleText.innerText = "Size: ";
        elAttSizeTitleTextSelected.innerText = productObj.size;

        elAttSizeListBlock.querySelector(getSelectorClassName(classNames, "productAttSizeListItemImg")).innerText = productObj.size;
        elAttSizeListBlock.querySelector(getSelectorClassName(classNames, "productAttSizeListItemImg")).parentNode.classList.add("inc_active");
    }


    switch (blockType) {
        case "pdp": elAddText.innerText = INC.bundleVars.add; break;
        case "sidebar":
        case "am": elAddText.innerText = INC.bundleVars.add; break;
    }
    elAddBlock.addEventListener("click", function (e) {
        //debugger;
        e.preventDefault();
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        //console.log(productBlock.parentNode)
        productBlock.parentNode.querySelector('.inc_product_Info_Full_desc_info_block').classList.remove('show_full_desc');
        
        var productModuleBlock = productBlock.parentNode.parentNode;

        var modalProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        var sku = productBlock.getAttribute('data-sku');
        var mainId = productBlock.getAttribute('data-main_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
        var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
        var qty = parseInt(elQtyInput.value);
        var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
        var prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null && document.querySelector('.inc_af_block') == null) {
            

                if(flag_check == 1){
                    switch (elAddText.innerText.toUpperCase()) {
                        case INC.bundleVars.add.toUpperCase():
                            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
                            elAddText.innerText = INC.bundleVars.update;
                            showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).click();
                            // elAddText.classList.add('added');
                            // elAddText.parentNode.parentNode.classList.add('inc_added_product');
                            // modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = INC.bundleVars.edit;
                            var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                            if (pListItemBlock != null) {
                                pListItemBlock.classList.add('product_added');
                                pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.add("checked");
                            }
                            elAddImg.classList.add("checked");
                            if(productModuleBlock.querySelector('.inc_product_desc_att_block.inc_simple') != null){
                                
                            }else{
                                productModuleBlock.querySelector('.inc_product_desc_att_edit_text').innerText = INC.bundleVars.edit;
                                productModuleBlock.querySelector('.inc_product_desc_att_edit_block').classList.add("inc_active");
                            }
                            
                            modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.add("checked");
                            if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id, pname, pprice);
                            if (prod_card != null) {
                                if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                    prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                                    document.querySelector('html').classList.remove('inc_prevent_scroll')
                                    document.querySelector('html').style.overflow = "auto";
                                    document.querySelector('body').classList.remove('inc_overlay');
                                }
                            }
                            break;
                        case INC.bundleVars.added.toUpperCase():
                            if (modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText != INC.bundleVars.update && prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                elAddText.innerText = INC.bundleVars.add;
                                elAddText.classList.remove('added');
                                elAddText.parentNode.parentNode.classList.remove('inc_added_product');
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = INC.bundleVars.add;
                                var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                                if (pListItemBlock != null) {
                                    pListItemBlock.classList.remove('product_added');
                                    pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                                }
                                elAddImg.classList.remove("checked");
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub", main_id, bundle_id, pname, pprice);
                            } else {
                                if (prod_card.querySelector('.inc_product_modal_block.inc_active') == null) {
                                    elAddText.innerText = INC.bundleVars.add;
                                    elAddText.classList.remove('added');
                                    elAddText.parentNode.parentNode.classList.remove('inc_added_product');
                                    modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = INC.bundleVars.add;
                                    elAttSizeTitleText.innerText = INC.bundleVars.pleaseSelectShades;

                                    elAttColorTitleTextSelected.innerText = "";
                                    var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                                    if (pListItemBlock != null) {
                                        pListItemBlock.classList.remove('product_added');
                                        pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                                    }
                                    //productAttColorListItemBlock.classList.remove("active");
                                    // modalProductBlock.querySelector(getSelectorClassName(classNames, "productAttColorListItemBlock")).classList.remove("active")
                                    modalProductBlock.querySelector(getSelectorClassName(classNames, "productAttColorTitleTextSelected")).innerText = "";
                                    productModuleBlock.querySelector('.inc_product_desc_att_edit_block').classList.remove("inc_active");
                                    productModuleBlock.querySelector('.inc_product_desc_att_edit_text').innerText = "";
                                    elAddImg.classList.remove("checked");
                                    modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                    if (INC.config.pageType == "pdp" && blockType == "pdp") {
                                        INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub", main_id, bundle_id, pname, pprice);
                                        if (Object.keys(INC.dataStore.bundleCartProducts).length < 4) {
                                            INC.methods.createSidebarBlock()
                                        }
                                    }
                                }
                            }
                            if (prod_card != null) {
                                if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                    prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                                }
                            }
                            break;
                        case INC.bundleVars.update.toUpperCase():
                            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
                            elAddText.innerText = INC.bundleVars.update;
                            //showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).click();
                            // elAddText.classList.add('added');
                            // elAddText.parentNode.parentNode.classList.add('inc_added_product');
                            // modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = INC.bundleVars.edit;
                            var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                            if (pListItemBlock != null) {
                                pListItemBlock.classList.add('product_added');
                                pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.add("checked");
                            }
                            elAddImg.classList.add("checked");
                            if(productModuleBlock.querySelector('.inc_product_desc_att_block.inc_simple') != null){

                            }else{
                                productModuleBlock.querySelector('.inc_product_desc_att_edit_text').innerText = INC.bundleVars.edit;
                                productModuleBlock.querySelector('.inc_product_desc_att_edit_block').classList.add("inc_active");
                            }
                            
                            modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.add("checked");
                            if(productModuleBlock.querySelector('.inc_product_desc_att_color_title_text_selected') != null && modalProductBlock.querySelector('select') != null){
                                //productModuleBlock.querySelector('.inc_product_desc_att_color_title_text_selected').innerText = modalProductBlock.querySelector('select').value
                                //console.log(modalProductBlock.querySelector('select').value + " 6")
                            }
                            if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id, pname, pprice);
                            if (prod_card != null) {
                                if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                    prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                                    document.querySelector('html').classList.remove('inc_prevent_scroll')
                                    document.querySelector('body').classList.remove('inc_overlay')
                                    document.querySelector('html').style.overflow = "auto";
                                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                                        if (INC.methods.detectPageType() == "pdp") {
                                            document.querySelector('body').style.position = "";
                                            if(document.querySelector('.inc_pdp_block') != null){
                                                jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 10}, 0);
                                            }
                                        }
                                        else if (INC.methods.detectPageType() == "cartPage") {
                                            jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
                                        }
                                    }
                                }
                            }
                            break;
                    }
                } else {
                    // productModuleBlock.querySelector('.img_color_swatch').click()
                    if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).parentNode.querySelector('.img_color_swatch') != null) {
                        productModuleBlock.querySelector('.img_color_swatch').click()
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = "Please select an option"
                    } else if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                        //inc_product_desc_att_size_title_text
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = "Please select an option"
                        productModuleBlock.querySelector('.inc_product_desc_att_block').click()
                    }
                }
        
        } else {
            //debugger
            if (productModuleBlock.querySelector('.img_color_swatch') != null || productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                // if(productModuleBlock.querySelector('.img_color_swatch') != null || productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                if(flag_check == 1){
                    // elAddText.innerText = "Adding...";
                    // elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                    if (blockType == "sidebar" || document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                        // if (productModuleBlock.querySelector('.inc_selected_color_wrapper_block').querySelectorAll('img').length > 0) {
                        switch (elAddText.innerText.toUpperCase()) {
                            case INC.bundleVars.add.toUpperCase():
                                var qty = parseInt(productModuleBlock.querySelector('.inc_product_desc_qty_input_text input').value);
                                //  elAddText.innerText = INC.bundleVars.edit;
                                elAddText.parentNode.parentNode.classList.add('inc_added_product')
                                if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id);
                                if (blockType == "sidebar" || document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                                    findObj = new INC.classes.FindObj({ id: productObj.mainId, mainId: productObj.mainId, sku: sku });
                                    INC.methods.addProductToCart(findObj, qty, "sidebar", productModuleBlock, this);
                                }
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.add("checked");
                                elAddImg.classList.add("checked");
                                if (prod_card != null) {
                                    if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                        prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                                        document.querySelector('html').classList.remove('inc_prevent_scroll')
                                        document.querySelector(".inc_sidebar_modal_block").classList.remove("inc_popup_open")
                                        document.querySelector(".inc_sidebar_modal_block").classList.remove("overflow_visible")
                                    }
                                }
                                break;
                            case INC.bundleVars.edit.toUpperCase():
                                var qty = parseInt(productModuleBlock.querySelector('.inc_product_desc_qty_input_text input').value);
                                elAddText.innerText = INC.bundleVars.edit;
                                elAddText.parentNode.parentNode.classList.remove('inc_added_product')
                                if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub", main_id, bundle_id);
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                elAddImg.classList.remove("checked");
                                productModuleBlock.querySelector('.inc_selected_color_wrapper_block').innerHTML = ""
                                if (prod_card != null) {
                                    if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                        prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                                        document.querySelector('html').classList.remove('inc_prevent_scroll')
                                        document.querySelector(".inc_sidebar_modal_block").classList.remove("inc_popup_open")
                                        document.querySelector(".inc_sidebar_modal_block").classList.remove("overflow_visible")
                                    }
                                }
                                break;
                        }

                        // }
                    } else if (blockType == "am") {
                        // if (productModuleBlock.querySelector('.inc_selected_color_wrapper_block').querySelectorAll('img').length > 0) {
                        switch (elAddText.innerText.toUpperCase()) {
                            case INC.bundleVars.add.toUpperCase():
                                var qty = parseInt(productModuleBlock.querySelector('.inc_product_desc_qty_input_text input').value);
                                // elAddText.innerText = INC.bundleVars.update;
                                elAddText.innerText = "Adding...";
                                elAddText.parentNode.parentNode.classList.add('inc_added_product')
                                if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id);
                                if (blockType == "am") {
                                    findObj = new INC.classes.FindObj({ id: productObj.mainId, mainId: productObj.mainId, sku: sku });
                                    INC.methods.addProductToCart(findObj, qty, "am", productModuleBlock, this);
                                }
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.add("checked");
                                elAddImg.classList.add("checked");
                                if (prod_card != null) {
                                    if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                        prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                                        document.querySelector('html').classList.remove('inc_prevent_scroll')
                                    }
                                }
                                break;
                            case INC.bundleVars.update.toUpperCase():
                                var qty = parseInt(productModuleBlock.querySelector('.inc_product_desc_qty_input_text input').value);
                                elAddText.innerText = INC.bundleVars.update;
                                elAddText.parentNode.parentNode.classList.remove('inc_added_product')
                                if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub", main_id, bundle_id);
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                elAddImg.classList.remove("checked");
                                productModuleBlock.querySelector('.inc_selected_color_wrapper_block').innerHTML = ""
                                if (prod_card != null) {
                                    if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                        prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                                        document.querySelector('html').classList.remove('inc_prevent_scroll')
                                    }
                                }
                                break;
                        }

                        // }
                    }
                } else {
                    // if(productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.img_color_swatch') != null){
                    //     productModuleBlock.querySelector('.img_color_swatch').click()
                    // }else if(productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null){
                    //     productModuleBlock.querySelector('.inc_product_desc_att_block').click()
                    // }
                    productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = "Please select an option"
                    if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = "Please select an option"
                    }
                }

            } else {
                //elAddText.innerText = "Adding...";
                var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
                showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "Adding...";
                elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                setTimeout(function () {
                    elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                }, 100);
                 if(blockType == "sidebar" && productObj.ProductType == "simple" && elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == "inc_product_modal_block simple inc_active") {
                    // flag ++ 
                    productModuleBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).click()
                    elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove("inc_active")
                    document.querySelector(".inc_sidebar_modal_block").classList.remove("inc_popup_open")
                    document.querySelector(".inc_sidebar_modal_block").classList.remove("overflow_visible")
                 }
            }
        }



    });
    setTimeout(function(){
        if(INC.methods.detectDeviceType() == "mobile"){
            var attBlock = productBlock.querySelector('.inc_product_desc_att_wrapper_block')
            var descBlock = productBlock.querySelector('.inc_product_desc_parent_block') || productBlock.querySelector('.inc_product_desc_info_block')
            if(descBlock != null && attBlock != null){
                descBlock.parentNode.insertBefore(attBlock, descBlock)
            }
        }
    }, 800)
    // if (blockType == "pdp") {
    //     productModuleBlock.querySelector('.inc_selected_color_wrapper_block');
    // }
    return productBlock;
}

INC.methods.createSelectedProductBlock = function (findObj, parent, blockType) {
    // var blockType = "pdp";
    var classNames = INC.uiConfig[blockType].className;
    var productObj = INC.dataStore.methods().getProductByAtt(findObj);
    var getSelectorClassName = this.getSelectorClassName;
    var defaultQty = 1;
    var selectedItem = INC.methods.getElementChilds("selectedColorBlock", blockType);
    var selectedColorParent = parent.parentNode.parentNode.parentNode.parentNode.querySelector(".inc_selected_color_wrapper_block");
    // Array.prototype.forEach.call(selectedColorParent.children, function (selected) {
    //     if (selected.getAttribute('data-sku') == productObj.sku) {
    //         var prevQty = selected.querySelector('.inc_selected_color_qty_input_text_block').innerText;
    //         selected.querySelector('.inc_selected_color_qty_input_text_block').innerText = parseInt(prevQty) + 1;
    //     }
    // });
    var skuList = [];
    if (selectedColorParent.parentNode != null && selectedColorParent.parentNode.querySelector('.inc_empty_text') != null) {
        selectedColorParent.parentNode.querySelector('.inc_empty_text').classList.remove('inc_active');
    }
    for (var i = 0; i < selectedColorParent.children.length; i++) {
        var selected = selectedColorParent.children[i];
        skuList.push(selected.getAttribute('data-sku'))
        // if (selected.getAttribute('data-sku') == productObj.sku) {

        //             var prevQty = selected.querySelector('.inc_selected_color_qty_input_text_block').innerText;
        //             selected.querySelector('.inc_selected_color_qty_input_text_block').innerText = parseInt(prevQty) + 1;
        //             break;
        //         }
    }
    if (skuList.indexOf(productObj.sku) > -1) {
        var block = selectedColorParent.querySelector('.inc_selected_color_block[data-sku="' + productObj.sku + '"]');
        if (block != null) {
            var prevQty = block.querySelector('.inc_selected_color_qty_input_text_block').innerText;
            block.querySelector('.inc_selected_color_qty_input_text_block').innerText = parseInt(prevQty) + 1;
        }
    }
    else {
        selectedItem.setAttribute('data-sku', productObj.sku);
        selectedColorParent.appendChild(selectedItem);
        function getViewElement(className) {
            return selectedItem.querySelector(getSelectorClassName(classNames, className));
        }
        var elImgBlock = getViewElement("selectedColorImgBlock");
        var elImg = document.createElement("img");
        var qty = getViewElement('selectedColorQtyInputTextBlock');
        if (qty != null) {
            qty.innerText = defaultQty;
        }
        var qtyUp = getViewElement("selectedColorQtyUpBtn");
        var qtyDown = getViewElement("selectedColorQtyDownBtn");
        qtyUp.addEventListener("click", function () {
            var parent = qtyUp.parentNode.parentNode.parentNode;
            var sku = parent.getAttribute('data-sku');
            if (parent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_Info_Full_desc_info_block') != null) {
                parent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_Info_Full_desc_info_block').classList.remove('show_full_desc')
            }
            var prevQty = parent.querySelector('.inc_selected_color_qty_input_text_block').innerText;
            parent.querySelector('.inc_selected_color_qty_input_text_block').innerText = parseInt(prevQty) + 1;
        })
        qtyDown.addEventListener("click", function () {
            var parent = qtyUp.parentNode.parentNode.parentNode;
            var sku = parent.getAttribute('data-sku');
            if (parent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_Info_Full_desc_info_block') != null) {
                parent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_Info_Full_desc_info_block').classList.remove('show_full_desc')
            }
            var prevQty = parent.querySelector('.inc_selected_color_qty_input_text_block').innerText;
            if (prevQty > 1) {
                parent.querySelector('.inc_selected_color_qty_input_text_block').innerText = parseInt(prevQty) - 1;
            }
            else if (prevQty == 1) {
                // parent.querySelector('.inc_selected_color_remove_block').click();
                parent.querySelector('.inc_selected_color_qty_input_text_block').innerText = 1;
            }
        })
        if (productObj.option[1].imgSrc != null) {
            elImg.setAttribute("src", productObj.option[1].imgSrc);
        }
        elImgBlock.appendChild(elImg);
        var elName = getViewElement("selectedColorNameText");
        elName.innerText = productObj.option[1].text;
        if (selectedColorParent.parentNode != null && selectedColorParent.parentNode.querySelector('.inc_selected_color_wrapper_block') != null && selectedColorParent.parentNode.querySelector('.inc_selected_color_wrapper_block').children.length == 1) {
            selectedColorParent.parentNode.querySelector('.inc_selected_color_wrapper_block').classList.add('one_active')
        }
        else {
            selectedColorParent.parentNode.querySelector('.inc_selected_color_wrapper_block').classList.remove('one_active')
        }
        var removeShade = getViewElement("selectedColorRemoveBlock");
        removeShade.addEventListener("click", function () {
            if (removeShade.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_Info_Full_desc_info_block') != null) {
                removeShade.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_Info_Full_desc_info_block').classList.remove('show_full_desc')
            }
            if (removeShade.parentNode.parentElement.children.length == 1 && INC.methods.detectDeviceType() == "mobile") {
                removeShade.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_mobile_modal_close').click();
                // removeShade.parentNode.parentNode.innerHTML = "";

            }
            // else{
            if (removeShade.parentNode.parentElement.children.length == 1) {
                removeShade.parentNode.parentElement.parentElement.querySelector('.inc_empty_text').classList.add('inc_active');
                if (blockType == "pdp") {
                    removeShade.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click();
                }
                if (removeShade.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode != null && removeShade.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode != null) {
                    removeShade.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_selected_color_wrapper_block').innerHTML = ""
                    removeShade.parentNode.parentElement.classList.remove('one_active')
                }
                if (blockType == "sidebar" || blockType == "am" || document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                    removeShade.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_header_img_block').click();
                }
                removeShade.parentNode.parentNode.removeChild(removeShade.parentNode);
            }
            if (removeShade.parentNode.parentElement != null && removeShade.parentNode.parentElement.children.length == 2) {
                removeShade.parentNode.parentElement.classList.add('one_active')
            } else {
                if (removeShade.parentNode.parentElement != null) {
                    removeShade.parentNode.parentElement.classList.remove('one_active')
                }
            }
            if (removeShade.parentNode.parentNode != null) {
                removeShade.parentNode.parentNode.removeChild(removeShade.parentNode);
            }

            // }
        })
    }

}

INC.methods.updateProductBlock = function (productBlock, findObj, blockType, bundleProductListCheck) {
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig[blockType].className;
    var productBlock = productBlock;
    var productModuleBlock = productBlock.parentNode.parentNode;
    var modal_attr_block = productModuleBlock.querySelector('.inc_product_modal_block')
    var zero_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
    var size_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
    var color_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
    var third_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-third');
    
    var sel_attr_text=""
    if(color_text != undefined){
        findObj.colorText = color_text
        sel_attr_text = color_text
    }else{
        findObj.colorText = ""
    }
    if(zero_text != undefined){
        findObj.zeroText = zero_text
        if(sel_attr_text == ""){
            sel_attr_text = zero_text
        }else{
            sel_attr_text = sel_attr_text + " | " + zero_text
        }
    }else{
        findObj.zeroText = ""
    }
    if(size_text != undefined){
        findObj.sizeText = size_text
        sel_attr_text = sel_attr_text + " | " + size_text
    }else{
        findObj.sizeText = ""
    }
    
    if(third_text != undefined){
        findObj.thirdText = third_text
        sel_attr_text = sel_attr_text + " | " + third_text
    }else{
        findObj.thirdText = ""
    }
    
    
    

    var productObj = INC.dataStore.methods().getProductByAtt(findObj);
    var previousSKU = "";
    var getSelectorClassName = this.getSelectorClassName;

    previousSKU = productBlock.getAttribute('data-sku');
    productBlock.setAttribute('data-id', productObj.id);
    productBlock.setAttribute('data-sku', productObj.sku);
    productBlock.setAttribute('data-main_id', productObj.mainId);
    productBlock.setAttribute('data-bundle_id', productObj.bundleId);

    productModuleBlock.setAttribute('data-id', productObj.id);
    productModuleBlock.setAttribute('data-sku', productObj.sku);
    productModuleBlock.setAttribute('data-main_id', productObj.mainId);
    productModuleBlock.setAttribute('data-bundle_id', productObj.bundleId);

    function getViewElement(className) {
        return productBlock.querySelector(getSelectorClassName(classNames, className));
    }


    var elImgBlock = getViewElement("productImgBlock");
    var elInfoText = getViewElement("productInfoText");
    var elImgGalleryListBlock = getViewElement("productImgGalleryListBlock");
    var elTitleBlock = getViewElement("productTitleBlock");
    var elTitleText = getViewElement("productTitleText");
    var elPriceActiveText = getViewElement("productPriceActiveText");
    var elPriceActiveMsg = getViewElement("productPriceActiveTextMsg");
    var elPriceRegularText = getViewElement("productPriceRegularText");
    var elAttBlock = getViewElement("productAttBlock");
    var elAttColorTitleText = getViewElement("productAttColorTitleText");
    var elAttColorTitleTextSelected = getViewElement("productAttColorTitleTextSelected");
    var elAttColorListBlock = getViewElement("productAttColorListBlock");
    var elAttSizeTitleText = getViewElement("productAttSizeTitleText");
    var elAttSizeTitleTextSelected = getViewElement("productAttSizeTitleTextSelected");
    var elPackOfListBlock = getViewElement("productPackOfListBlock");
    var elQtyInputText = getViewElement("productQtyInputText");
    var elQtyDownBlock = getViewElement("productQtyDownBlock");
    var elQtyUpBlock = getViewElement("productQtyUpBlock");
    var elAddBlock = getViewElement("productAddBlock");
    var elAddText = getViewElement("productAddText");
    var elAddImg = getViewElement("productAddImg");
    var elworthPrice = getViewElement("productPriceWorthText");
    var elFullDesctext = getViewElement("productInfoFullDescText");
    // var elImgTag1 = this.generateHTMLTags('img', { src: productObj.imageURL });
    // var productLink = document.createElement('a');
    // productLink.href = productObj.url;
    // productLink.appendChild(elImgTag1);
    // elImg.appendChild(productLink);
    // elImg.addEventListener("click", function () {
    //     INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'));
    // });
    // if (INC.debug) console.log(elImg);
    // if (INC.debug) console.log(productObj);

    var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));

    elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURL"]);
    // if ((productObj.otherImageList != null) && productObj.otherImageList.length > 0) {
    //     if (typeof (elImg.querySelectorAll('img')[1]) != "undefined") {
    //         elImg.querySelectorAll('img')[1].setAttribute('src', productObj["otherImageList"][0].split("?")[0] + "?defaultImage=travisperkins/missing-product&layer=comp&fit=constrain,1&wid=400&hei=400&fmt=jpg");
    //     }
    // }
    // if(INC.debug) console.log(productObj["url"]);
    // elImgMainImg.querySelector('a').setAttribute('href', productObj["url"]);
    elImgMainImg.querySelector('a').setAttribute('otherImageList',productObj["otherImageList"])
    elImgMainImg.querySelector('a').setAttribute('imageURL',productObj["imageURL"])

    // elImgMainImg.querySelectorAll('img')[0].setAttribute('data-mouseover',productObj["otherImageList"])
    elImgMainImg.querySelectorAll('img')[0].setAttribute('data-imageURL',productObj["imageURL"])
    elImgGalleryListBlock.innerHTML = "";

    if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
        var otimg = 0;
        productObj.otherImageList.forEach(function (otherImgURL) {
            var elOtherImgTag = INC.methods.generateHTMLTags('img', { src: otherImgURL });
            elOtherImgTag.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" )
            var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));

            elImgGalleryListItemImg.appendChild(elOtherImgTag);

            elImgGalleryListItemBlock.addEventListener("click", function () {

                Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function (galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("inc_active");
                });

                elImgGalleryListItemBlock.classList.add("inc_active");

                elImgMainImg.querySelector('img').src = otherImgURL;
            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if (otimg == 0) {
                elImgGalleryListItemBlock.classList.add('inc_active')
            }
            otimg++;
            if (productObj.otherImageList.length > 5) {
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }

        });

        // if (INC.debug) console.log(elImgGalleryListBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemBlock")));

        // elImgGalleryListBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemBlock")).click();
    }

    elTitleText.querySelector('div').innerText = productObj.name;
    // elTitleText.querySelector('a').setAttribute('href', productObj["url"]);

    if(window.innerWidth > 820){
        if(productBlock.classList.contains('inc_product_modal_block') == false){
            if(blockType == "pdp" &&  INC.config.Product_id ==  productObj.mainId) {
                elTitleText.setAttribute('style','cursor: default;text-decoration: none;')
            }else{
                elTitleText.querySelector('a').setAttribute('href', productObj["url"]);
            }
        }
    }
    elTitleText.querySelector('a').setAttribute('title', productObj["name"]);

    // elInfoText.innerHTML = productObj.description;
    // var shortDescriptionVar = INC.methods.generateHTMLTags('div');
    // shortDescriptionVar.innerText.innerText = elInfoText.innerText;
    // if (productObj.description != "") {

    //     if (elInfoText.querySelector('p span') != null && elInfoText.querySelector('p').innerText == "About me: ") {
    //         elInfoText.querySelector('p').parentElement.removeChild(elInfoText.querySelector('p'));
    //         elInfoText.innerHTML = shortDescriptionVar.innerText.substring(0, 100) + "<a class='inc_readMore'>" + INC.bundleVars.readMore + "</a>";
    //     } else {

    //         if (productObj.ProductType == "simple") {
    //             elInfoText.innerHTML = shortDescriptionVar.innerText.substring(0, 200) + "<a class='inc_readMore'>" + INC.bundleVars.readMore + "</a>";
    //         } else {
    //             elInfoText.innerHTML = shortDescriptionVar.innerText.substring(0, 100) + "<a class='inc_readMore'>" + INC.bundleVars.readMore + "</a>";
    //         }
    //     }
    //     elFullDesctext.innerHTML = productObj.description;
    //     if (elFullDesctext.querySelector('.see-more') != null) {
    //         elFullDesctext.removeChild(elFullDesctext.querySelector('.see-more'))
    //     }
    //     if (elInfoText.querySelector('.inc_readMore') != null) {
    //         elInfoText.querySelector('.inc_readMore').addEventListener("click", function (e) {
    //             productBlock.querySelector('.inc_product_Info_Full_desc_info_block').classList.toggle('show_full_desc')
    //         })
    //     }
    // }

    var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
    var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();

    elPriceActiveText.innerText = INC.clientConfig.currencySymbol + activePrice;
    // elPriceActiveMsg.innerText = " + VAT"
    elPriceRegularText.innerText = "";
    if (activePrice != regularPrice) {
        elPriceRegularText.innerText = INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + regularPrice;
        elPriceActiveText.classList.add('special_price')
    }

    if (productBlock.querySelector(getSelectorClassName(classNames, "productAddText")) != null && productBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText.toUpperCase() == INC.bundleVars.added.toUpperCase()) {
        if (!dataStore.hasOwnProperty('bundleCartProducts')) {
            dataStore['bundleCartProducts'] = {};
        }

        dataStore["bundleCartProducts"][productObj["sku"]] = dataStore["bundleCartProducts"][previousSKU];
        if (productObj["sku"] != previousSKU) {
            delete dataStore["bundleCartProducts"][previousSKU];
        }
    }

    var elQtyInput = elQtyInputText.querySelector('input');
    var sku = productBlock.getAttribute('data-sku');
    var qty = parseInt(elQtyInput.value);
    var main_id = productBlock.getAttribute('data-main_id');
    var bundle_id = productBlock.getAttribute('data-bundle_id');
    if (elAddText.innerText.toUpperCase() == INC.bundleVars.added.toUpperCase() || elAddText.innerText.toUpperCase() == INC.bundleVars.update.toUpperCase()) {
        INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id);
    }

    // elPackOfListBlock.innerHTML = "";

}

INC.methods.createProductListItemBlock = function (productObj, blockType) {
    var classNames = INC.uiConfig[blockType].className;
    var productListItemBlock = this.getElementChilds("pdpBundleProductListItemBlock", blockType);
    var findObj = new INC.classes.FindObj({ id: productObj.id, mainId: productObj.mainId });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    // var productColorText = productObj["option"]["2"].text;
    // var productColorsCount = INC.dataStore.methods().getProductColorsObj(findObj)["colorArray"].length;
    var getSelectorClassName = this.getSelectorClassName;
    productListItemBlock.style.userSelect = "none";
    productListItemBlock.setAttribute('data-id', productObj.id);
    productListItemBlock.setAttribute('data-sku', productObj.sku);
    productListItemBlock.setAttribute('data-main_id', productObj.mainId);
    productListItemBlock.setAttribute('data-bundle_id', productObj.bundleId);

    function getViewElement(className) {
        return productListItemBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elImg = getViewElement("pdpBundleProductListItemImg");
    var elTitleText = getViewElement("pdpBundleProductListItemTitleText");
    var elImgTag1 = INC.methods.generateHTMLTags('img', { src: productObj.imageURL });
    elImgTag1.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" )
    elImg.appendChild(elImgTag1);
    productListItemBlock.addEventListener("click", function () {
        if (INC.debug) console.log("list image clicked");
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productPackOfListBlock")), function (el) {
            el.classList.remove("inc_active");
        });
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productAttSizeListBlock")), function (attSizeListBlock) {
            attSizeListBlock.classList.remove("inc_active");
        });

        var elListMainBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListMainBlock"));
        Array.prototype.forEach.call(elListMainBlock.querySelectorAll(getSelectorClassName(classNames, "productModuleBlock")), function (productBlock) {
            productBlock.style.display = "none";
        });
        elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]").style.display = "block";

        Array.prototype.forEach.call(productListItemBlock.parentNode.querySelectorAll(getSelectorClassName(classNames, "pdpBundleProductListItemBlock")), function (pListItemBlock) {
            pListItemBlock.classList.remove("inc_active");
        });

        productListItemBlock.classList.add("inc_active");
    });

    elTitleText.innerText = "";

    // if (productColorsCount > 1) {
    //     elTitleText.innerText = "+" + parseInt(productColorsCount - 1) + ((parseInt(productColorsCount - 1) > 1) ? " COLOURS" : " COLOUR");
    // }

    // if (productColorsCount == 1) {
    //     elTitleText.innerText = " 1 COLOUR";
    // }

    return productListItemBlock;
}

INC.methods.updateProductListItem = function (productObj, blockType) {

    if (blockType != "pdp") return;
    var classNames = INC.uiConfig[blockType].className;
    var findObj = new INC.classes.FindObj({ id: productObj.id, mainId: productObj.mainId });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    var getSelectorClassName = this.getSelectorClassName;

    var querySelectorString = getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-id=\"" + productObj.id + "\"]";
    if (INC.debug) console.log(querySelectorString);

    var productListItemBlock = document.querySelector(querySelectorString);

    if (INC.debug) console.log(productListItemBlock);

    function getViewElement(className) {
        return productListItemBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elImg = getViewElement("pdpBundleProductListItemImg");

    elImg.querySelector('img').setAttribute('src', productObj.imageURL);

}

INC.methods.updateBundleCart = function (bundleCartObj, type, main_id, bundle_id) {
    var dataStore = INC.dataStore;
    var listToDelete = []
    if (!dataStore.hasOwnProperty('bundleCartProducts')) {
        dataStore['bundleCartProducts'] = {};
        INC.config.pdpaddedProductList = []
        INC.config.bundle_tracking = []
    }

    switch (type) {
        case "add": dataStore["bundleCartProducts"][bundleCartObj["sku"]] = bundleCartObj["qty"];
            if(INC.config.pdpaddedProductList.indexOf(main_id) == -1){
                INC.config.pdpaddedProductList.push(main_id)
                INC.config.bundle_tracking.push({
                    id: main_id,
                    bid: bundle_id
                });
            }
            break;
        case "sub": delete dataStore["bundleCartProducts"][bundleCartObj["sku"]];
            INC.config.pdpaddedProductList.remove_prod_list = function () {
                var what, a = arguments, L = a.length, ax;
                while (L && this.length) {
                    what = a[--L];
                    while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                    }
                }
                return this;
            };
            listToDelete[0] = main_id
            for (var i = 0; i < INC.config.bundle_tracking.length; i++) {
                var obj = INC.config.bundle_tracking[i];
                if (obj != undefined) {
                    if (listToDelete.indexOf(obj.id) !== -1) {
                        INC.config.bundle_tracking.splice(i, 1);
                    }
                }
            }
            INC.config.bundle_tracking = INC.config.bundle_tracking
            INC.config.pdpaddedProductList.remove_prod_list(main_id);
            break;
    }
    // var dataStore = INC.dataStore;
    // if (!dataStore.hasOwnProperty('bundleCartProducts')) {
    //     dataStore['bundleCartProducts'] = {};
    // }

    // switch (type) {
    //     case "add": dataStore["bundleCartProducts"][bundleCartObj["sku"]] = bundleCartObj["qty"];
    //         break;
    //     case "sub": delete dataStore["bundleCartProducts"][bundleCartObj["sku"]];
    //         break;
    // }

    if (INC.config.pageType == "pdp" && document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block') != null) {
        this.calculateBundleTotal();
        if (Object.keys(INC.dataStore.bundleCartProducts).length == 0) {
            document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block').classList.add('inc_disable_button');
        }
        else {
            document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block').classList.remove('inc_disable_button');
        }
    };
}

INC.methods.calculateBundleTotal = function () {
    var dataStore = INC.dataStore;
    var bundleCartProducts = dataStore["bundleCartProducts"];
    var productListObj = dataStore.dataStoreObj;

    var totalRegularPrice = 0;
    var totalActivePrice = 0;
    var totalMainProduct = 0;
    var totalAddonProducts = 0;
    var totalAddonProductsCount = 0;
    var totalProductCount = 0;
    var mainId = INC.methods.getProductIdFromWebPage();
    var selectedCount = [];
    if (bundleCartProducts != null && bundleCartProducts != undefined) {
        Object.keys(bundleCartProducts).forEach(function (id) {
            var mainAddedId = id.split('-')[0];
            if (selectedCount.indexOf(mainAddedId) == -1) {
                selectedCount.push(mainAddedId);
            }
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    if (id == productListObj[mainProductId][childProductId]["sku"]) {

                        var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                        var activePrice = productListObj[mainProductId][childProductId]["activePrice"];
                        if (typeof (activePrice) != "number") {
                            activePrice = parseFloat(activePrice);
                        }
                        if (typeof (regularPrice) != "number") {
                            regularPrice = parseFloat(regularPrice);
                        }
                        if (bundleCartProducts[productListObj[mainProductId][childProductId]["id"]] != undefined) {
                            var pid = productListObj[mainProductId][childProductId]["id"];
                        }
                        else {
                            var pid = productListObj[mainProductId][childProductId]["sku"];
                        }
                        totalRegularPrice = totalRegularPrice + (parseFloat(bundleCartProducts[pid]) * regularPrice);
                        totalActivePrice = totalActivePrice + (parseFloat(bundleCartProducts[pid]) * activePrice);

                        if (productListObj[mainProductId][childProductId].mainId == mainId) {
                            totalProductCount = selectedCount.length;
                            if (typeof (bundleCartProducts[pid]) != "number") {
                                totalMainProduct = totalMainProduct + Number.parseInt(bundleCartProducts[pid]) * activePrice;
                            }
                            else {
                                totalMainProduct = totalMainProduct + bundleCartProducts[pid] * activePrice;
                            }

                        }

                        // if (getProductBySKU(findObj).mainId != mainId) {
                        if (productListObj[mainProductId][childProductId].mainId != mainId) {
                            totalProductCount = selectedCount.length;
                            totalAddonProductsCount++;
                            if (typeof (bundleCartProducts[pid]) != "number") {
                                totalAddonProducts = Number.parseInt(bundleCartProducts[pid]) * activePrice;
                            }
                            else {
                                totalAddonProducts = bundleCartProducts[pid] * activePrice;
                            }
                        }
                    }
                }
            }
        });
    }

    if (INC.debug) console.log("totalMainProduct: " + totalMainProduct);
    if (INC.debug) console.log("totalAddonProducts: " + totalAddonProducts);
    if (INC.debug) console.log("totalAddonProductsCount: " + totalAddonProductsCount);

    var priceObj = {
        totalActivePrice: parseFloat(totalActivePrice).toFixed(2),
        totalRegularPrice: parseFloat(totalRegularPrice).toFixed(2),
        totalMainProduct: totalMainProduct,
        totalAddonProducts: totalAddonProducts,
        totalAddonProductsCount: totalAddonProductsCount,
        totalProductCount: totalProductCount
    }

    this.updateBundleCartBlock(priceObj);
}
INC.methods.updateBundleCartBlock = function (priceObj) {
    var classNames = INC.uiConfig.pdp.className;
    var dataStore = INC.dataStore;
    var bundleCartProducts = dataStore["bundleCartProducts"];
    var getSelectorClassName = INC.methods.getSelectorClassName;

    var totalRegularPrice = priceObj.totalRegularPrice;
    var totalActivePrice = priceObj.totalActivePrice;
    var totalMainProduct = priceObj.totalMainProduct;
    var totalAddonProducts = priceObj.totalAddonProducts;
    var totalAddonProductsCount = priceObj.totalAddonProductsCount;
    var totalProductCount = priceObj.totalProductCount;

    var elPdpBundleCartBlock = document.querySelector(this.getSelectorClassName(classNames, "pdpModalBundleCartBlock"));

    function getViewElement(className) {
        if (elPdpBundleCartBlock != null) {
            return elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, className));
        }
    }

    var elBundleCartAddedBlock = getViewElement("pdpBundleCartAddedBlock");
    var elBundleCartSummaryViewBtnCount = getViewElement("pdpBundleCartSummaryViewBtnCount");
    var elBundleCartPriceRegularText = getViewElement("pdpBundleCartSummaryPriceRegularText");
    var elBundleCartPriceActiveText = getViewElement("pdpBundleCartSummaryPriceActiveText");
    var elBundleCartPriceActiveTextMsg = getViewElement("pdpBundleCartSummaryPriceActiveTextMsg");


    if (elBundleCartAddedBlock != undefined) {
        elBundleCartAddedBlock.innerHTML = "";
    }

    if (elBundleCartSummaryViewBtnCount != undefined) {
        elBundleCartSummaryViewBtnCount.innerText = totalProductCount;
    }

    // var bundleCartProductsArray = Object.keys(bundleCartProducts);
    // for (var i = 0; i < bundleCartProductsArray.length; i++) {
    //     var findObj = new INC.classes.FindObj({ sku: bundleCartProductsArray[i] });
    //     var productObj = INC.dataStore.methods().getProductBySKU(findObj);
    //     // if (INC.debug) console.log(productObj);
    //     var productId = productObj.id;
    //     // elBundleCartAddedBlock.prepend(this.createBundleCartAddedProductBlock(productId, bundleCartProducts[bundleCartProductsArray[i]], "pdp"));
    // }
    var bundleCartProductsArray = Object.keys(bundleCartProducts);
    for (var i = 0; i < bundleCartProductsArray.length; i++) {
        var findObj = new INC.classes.FindObj({ sku: bundleCartProductsArray[i] });
        var productObj = INC.dataStore.methods().getProductBySKU(findObj);
        // if (INC.debug) console.log(productObj);
        var productId = productObj.id;
        var selectedColor = "";
        if(productObj["option"] != undefined){
            if(productObj["option"][0] != undefined){
                if (productObj["option"][0] != null) selectedColor = productObj["option"][0]["text"];
            }
        }
        var prepen_elm = this.createBundleCartAddedProductBlock(productId, bundleCartProducts[bundleCartProductsArray[i]], "pdp", bundleCartProductsArray[i])
        if (elBundleCartAddedBlock != null || elBundleCartAddedBlock != undefined) {
            elBundleCartAddedBlock.insertBefore(prepen_elm, elBundleCartAddedBlock.childNodes[0]);
        }
        // elBundleCartAddedBlock.prepend(this.createBundleCartAddedProductBlock(productId, bundleCartProducts[bundleCartProductsArray[i]], "pdp"));
        var elAttColorText = getViewElement("pdpBundleCartAddedProductAttColorText");
        if (selectedColor != "") {
            elAttColorText.innerText = selectedColor + " | "
        }
    }

    if (!(bundleCartProductsArray.length > 4)) {
        var elBundleCartAddedProductDiv = document.createElement('div');
        elBundleCartAddedProductDiv.classList.add("bundle_cart_added_product_div");
        elBundleCartAddedProductDiv.innerText = "ADD PRODUCT";
        if (elBundleCartAddedBlock != undefined) {
            elBundleCartAddedBlock.appendChild(elBundleCartAddedProductDiv);
        }
    }

    if (elBundleCartPriceRegularText != undefined) {
        elBundleCartPriceRegularText.style.display = "none";
    }
    // if (INC.debug) console.log(elBundleCartAddedBlock);
    if (totalActivePrice != totalRegularPrice) {
        elBundleCartPriceRegularText.style.display = "flex";
    }

    if (elBundleCartPriceActiveText != undefined) {
        elBundleCartPriceActiveText.innerText = INC.clientConfig.currencySymbol + totalActivePrice;
    }
    if (elBundleCartPriceRegularText != undefined) {
        elBundleCartPriceRegularText.innerText = INC.clientConfig.currencySymbol + totalRegularPrice;
    }

    if (elPdpBundleCartBlock != null && elPdpBundleCartBlock != undefined) {
        var bundleCartProductsLength = Object.keys(bundleCartProducts).length;

        var elBundleCartTitleText = getViewElement("pdpBundleCartSummaryTitleText");
        var elBundleCartAddBtnText = getViewElement("pdpBundleCartSummaryAddBtnText");

        if (bundleCartProductsLength > 1) {
            elBundleCartTitleText.innerText = INC.bundleVars.totalKitPrice;
            elBundleCartAddBtnText.innerText = "Add " + priceObj["totalProductCount"] + " products to basket";
        }

        if (bundleCartProductsLength == 1) {
            elBundleCartTitleText.innerText = INC.bundleVars.totalKitPrice;
            elBundleCartAddBtnText.innerText = INC.bundleVars.addItemToBag;
        }
        if (bundleCartProductsLength == 0) {
            elBundleCartAddedBlock.classList.add('inc_disable_button');
            elBundleCartAddBtnText.innerText = INC.bundleVars.addItemsToBag;
        }

        var elPriceMainTitleText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceMainTitleText"));
        var elPriceMainFigureText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceMainFigureText"));
        var elPriceAddonTitleText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceAddonTitleText"));
        var elPriceAddonFigureText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceAddonFigureText"));
        var elPriceRegularText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceRegularText"));
        var elPriceActiveText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceActiveText"));


        elPriceMainTitleText.innerText = "Main Product Price";
        elPriceAddonTitleText.innerText = "Add-on(s) Selected  " + ((totalAddonProductsCount > 0) ? totalAddonProductsCount : "");
        elPriceMainFigureText.innerText = INC.clientConfig.currencySymbol + totalMainProduct;
        elPriceAddonFigureText.innerText = INC.clientConfig.currencySymbol + totalAddonProducts;
        // elPriceRegularText.innerText = INC.clientConfig.currencySymbol + totalRegularPrice + " " + ((INC.clientConfig.statusVAT == "true") ? "(Inc. VAT)" : "(Ex. VAT)");
        elPriceActiveText.innerText = INC.clientConfig.currencySymbol + totalActivePrice;
        // if (totalActivePrice == 0) {
        //     // console.log(document.quC.methods.getProductIdFromWebPaerySelector(getSelectorClassName(classNames, "productAddBlock")));
        //     setTimeout(function () {
        //         document.querySelectorAll(getSelectorClassName(classNames, "productAddBlock"))[1].click();
        //     }, 5);
        // }
    }
}

INC.methods.createBundleCartAddedProductBlock = function (productId, qty, blockType, sku) {
    var classNames = INC.uiConfig[blockType].className;
    var addedProductBlock = this.getElementChilds("pdpBundleCartAddedProductBlock", blockType);
    if (sku != null || sku != "" || sku != undefined) {
        var findObj = new INC.classes.FindObj({ id: productId, mainId: productId, sku: sku });
        var productObj = INC.dataStore.methods().getProductBySKU(findObj);
    }
    else {
        var findObj = new INC.classes.FindObj({ id: productId });
        var productObj = INC.dataStore.methods().getProductById(findObj);
    }
    var getSelectorClassName = INC.methods.getSelectorClassName;
    addedProductBlock.setAttribute('data-id', productObj.id);
    addedProductBlock.setAttribute('data-sku', productObj.sku);
    addedProductBlock.setAttribute('data-main_id', productObj.mainId);
    addedProductBlock.setAttribute('data-bundle_id', productObj.bundleId);

    //current  active prod
    var color = "";
    var size = "";
    var just_check_prod_block = document.querySelector('.inc_product_module_block[data-id="' + productId + '"]')
    if (just_check_prod_block != null) {
        if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div') != null) {
            size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div').innerText
        }
        if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null) {
            color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
        }
    }
    // if (color == "" && productObj.option[1] != undefined) {
    //     color = productObj.option[1].text;
    // }
    if (INC.debug) console.log("size " + size)
    if (INC.debug) console.log("color " + color)
    //end
    function getViewElement(className) {
        return addedProductBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elTitleText = getViewElement("pdpBundleCartAddedProductTitleText");
    var elImg = getViewElement("pdpBundleCartAddedProductImg");
    var elPriceActiveText = getViewElement("pdpBundleCartAddedProductPriceText");
    var elAttColorText = getViewElement("pdpBundleCartAddedProductAttColorText");
    var elAttsizeText = getViewElement("pdpBundleCartAddedProductAttSizeText");
    var elQtyText = getViewElement("pdpBundleCartAddedProductQtyText");
    var elEditTextBlock = getViewElement("pdpBundleCartAddedProductEditTextBlock");
    var elEditText = getViewElement("pdpBundleCartAddedProductEditText");
    var elEditImgBlock = getViewElement("pdpBundleCartAddedProductEditImgBlock");
    var elEditImg = getViewElement("pdpBundleCartAddedProductEditImg");

    // elTitleText.innerText = productObj.name;
    var elImgTag1 = this.generateHTMLTags('img', { src: productObj.imageURL });
    elImgTag1.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" )
    elImg.appendChild(elImgTag1);


    // elAttsizeText.innerText = size;
    //}
    var pTitleDiv = document.createElement('div');
    pTitleDiv.innerHTML = qty + "<small>x </small>" + productObj.name;

    var pLink = document.createElement('a');
    pLink.title = productObj.name
    pLink.appendChild(pTitleDiv);
    elTitleText.appendChild(pLink);

    elPriceActiveText.innerText = INC.clientConfig.currencySymbol + parseFloat(parseFloat(productObj.activePrice).toFixed(2) * qty).toFixed(2);
    // elQtyText.innerText = "Qty: " + qty + " | ";

    elEditTextBlock.addEventListener("click", function () {
        if (INC.config.deviceType == "mobile") {
            if (INC.debug) console.log(productObj);
            if (INC.debug) console.log(document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + '[data-main_id="' + productObj.mainId + '"]'));

            if (document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + '[data-main_id="' + productObj.mainId + '"]') != null)
                document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + '[data-main_id="' + productObj.mainId + '"]').click();
        }

        if (INC.config.deviceType == "desktop") {
            if (INC.debug) console.log(document.querySelector(getSelectorClassName(classNames, "productModuleBlock") + '[data-id="' + productObj.id + '"]'));
            // if(document.querySelector(getSelectorClassName(classNames, "productModuleBlock") + '[data-id="' + productObj.id + '"]').style.display == "none"){
            Array.prototype.forEach.call(document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListMainBlock")).querySelectorAll(getSelectorClassName(classNames, "productModuleBlock")), function (el, index) {
                if (INC.debug) console.log(el);
                if (INC.debug) console.log("index of el: " + index);
                if (el.getAttribute('data-id') == productObj.id) {
                    if (index > 1) {
                        for (var i = 0; i < 2; i++) {
                            document.querySelector(getSelectorClassName(classNames, "pdpBundleProductRightBtnBlock")).click()
                        }
                    }

                    if (!(index > 1)) {
                        for (var i = 0; i < 2; i++) {
                            document.querySelector(getSelectorClassName(classNames, "pdpBundleProductLeftBtnBlock")).click()
                        }
                    }
                }
            });
            // }
        }

        setTimeout(function () {
            document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').querySelector(getSelectorClassName(classNames, "productAttBlock")).click();
        }, 50);
    });
    //if(INC.methods.getProductIdFromWebPage() == productObj.bundledProductId){
    elEditText.innerText = INC.bundleVars.update;
    elEditTextBlock.classList.add('inc_active');
    //}
    elEditImgBlock.addEventListener("click", function () {
        // if (document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]') != null || document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]') != undefined) {
        //     document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').querySelector(getSelectorClassName(classNames, "productAddBlock")).click();
        // }
        if (document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').parentNode.parentNode.querySelector('.inc_product_modal_block') != null && document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').parentNode.parentNode.querySelector('.inc_product_modal_block .inc_selected_color_block[data-sku="' + productObj.sku + '"] .inc_selected_color_remove_block') != null) {
            document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').parentNode.parentNode.querySelector('.inc_product_modal_block .inc_selected_color_block[data-sku="' + productObj.sku + '"] .inc_selected_color_remove_block').click();
            document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').parentNode.parentNode.querySelector('.inc_product_modal_block .inc_mobile_modal_add_block').click()
        }
        else if (document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]') != null || document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]') != undefined) {
            document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').querySelector(getSelectorClassName(classNames, "productAddBlock")).click();
        }
    });
    elEditImg.innerText = "";
    // if(INC.debug) console.log(addedProductBlock);
    return addedProductBlock;
}

INC.methods.clear = function () {

    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarOuterBlock")) != null) {
        // document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock")).remove();
        // document.querySelector(".inc_sidebar_overlay_block").remove();
        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarOuterBlock")), function (el) {
            el.parentNode.removeChild(el);
        });

        Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function (el) {
            el.parentNode.removeChild(el);
        });
    }

    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "afModalBlock")) != null) {
        // document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "afModalBlock")).remove();
        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "afModalBlock")), function (el) {
            el.parentNode.removeChild(el);
        });
    }

    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "pdpModalBlock")) != null) {
        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "pdpModalBlock")), function (el) {
            el.parentNode.removeChild(el);
        });
        // document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "pdpModalBlock")).remove();
    }
}

INC.methods.getElementChilds = function (child, pageType) {
    var uiConfig = INC.uiConfig;
    var pType = pageType;
    var vDOM = uiConfig[pType]["dom"];
    // if (INC.debug) console.log(child);
    var elementHTML = this.generateHTMLTags('div', { class: uiConfig[pType]["className"][child] })
    if (vDOM.hasOwnProperty(child)) {
        vDOM[child].forEach(function (subChild) {
            elementHTML.appendChild(INC.methods.getElementChilds(subChild, pType));
        });
    }

    return elementHTML;
}

INC.methods.generateHTMLTags = function (tagName, attributeObj, childNode, eventListner, callback) {
    var element = document.createElement(tagName);
    for (attr in attributeObj) {
        switch (attr) {
            case "class": {
                element.setAttribute('class', attributeObj[attr]);
            }
                break;
            case "style": {
                for (styleAttr in attributeObj[attr]) {
                    element.style[styleAttr] = attributeObj[attr][styleAttr];
                }
            }
                break;
            default: {
                if (attributeObj[attr] != undefined) {
                    // if (tagName == 'img') {
                    //     element.classList.add('inc_lazy')
                    //     element.setAttribute('data-src', attributeObj[attr]);
                    //     element.setAttribute('src', INC.config.srcImgeLazy);
                    // } else {
                    //     element.setAttribute(attr, attributeObj[attr]);
                    // }
                    element.setAttribute(attr, attributeObj[attr]);
                    element.setAttribute('data-src', attributeObj[attr]);
                }
            }
        }
    }
    // }

    if (childNode != null && childNode != undefined) element.appendChild(childNode);
    if (eventListner != null && childNode != undefined) element.addEventListener(eventListner, callback);

    return element;
}

INC.methods.addProductToCart = function (findObj, qty, pageType, productBlock, add_btn_click, add_prod_im) {
    sessionStorage.setItem('refreshOnCart', 1);
    var addProductURL = INC.config.addToBasketURL;
    if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) productBlock.querySelector('.inc_product_desc_add_text').innerText = "Adding..."

    // var findObj = new INC.classes.FindObj(findObj);
    productObj = INC.dataStore.methods().getProductBySKU(findObj)

    if (Object.keys(productObj).length == 0) {
        // findObj.sku = findObj.id;
        var productObj = INC.dataStore.methods().getProductById(findObj);
    }
    // var searchParamObjString = "{ itemCode: '" + productObj.sku +
    //     "', itemQty: '" + qty +
    //     "', itemUrl: '" + (new URL(productObj.url)).pathname.replace("/product/", "") +
    //     "', BasketItemId: '" + productObj.id +
    //     "', actionName: 'add', showVat: false, isMadeToMeasure: false, madeToMeasureWidth: 0, madeToMeasureHeight: 0, madeToMeasureScrewholes: false}";
    INC.config.pdpaddedProductList.push(productObj.mainId) 
    var all_sel_shades = productBlock.querySelectorAll('.inc_product_modal_block .inc_selected_color_wrapper_block .inc_selected_color_block')
    var qty_main = 0;
    var formData = []
    if (productObj.ProductType == "configurable") {
        if (all_sel_shades.length > 0) {
            for (var d = 0; d < all_sel_shades.length; d++) {
                var param_array = {};
                var sel_sku = all_sel_shades[d].getAttribute('data-sku')
                var sel_qty = all_sel_shades[d].querySelector('.inc_selected_color_qty_input_text_block').innerText
                if ((qty != "" || qty != null) && (sel_qty == "" || sel_qty == null)) {
                    sel_qty = qty;
                }
                //var camp_id = _ShopContext.CampaignNumber
                param_array["quantity"] = sel_qty;
                param_array["id"] = sel_sku;
                
               // param_array["Campaign"] = camp_id;
                qty_main = qty_main + +sel_qty
                formData.push(param_array)
            }
        }
    }
    if (formData.length > 0) {
        var params = JSON.stringify(formData)
    } else {
        var searchParamObjString = {
            quantity: qty,
            id: productObj.sku
            //Campaign: _ShopContext.CampaignNumber
        };
        var params = JSON.stringify([searchParamObjString]);
    }
    var mainids = productBlock.getAttribute('data-main_id')
    INC.config.sidebarremovedprod.push(mainids)


    if (INC.debug) console.log(params);

    var nwConfigObj = new INC.classes.NWConfig();
    nwConfigObj["url"] = addProductURL + "?quantity="+qty+"&id="+productObj.sku;
    nwConfigObj["method"] = 'POST';
    //nwConfigObj["params"] = params;
    if (INC.debug) console.log(nwConfigObj["url"]);
    var xhr = new XMLHttpRequest();
    //xhr.open(nwConfigObj.method, addProductURL, true);
    xhr.open(nwConfigObj.method, nwConfigObj.url, true);
    xhr.onload = function () { }
    xhr.setRequestHeader('content-type', 'application/json; charset=utf-8');
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

            // if (INC.debug) console.log(xhr.response);
            // if (INC.config.pageType != "cartPage") document.querySelector('#Basket .countBasked').innerText.innerHTML = xhr.response;
            if (INC.config.pageType == "cartPage") {
                productBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "productAddText")).innerText = INC.bundleVars.addToBasket;
                if (INC.methods.detectPageType() != "plp") {
                    //INC.methods.getSessionHash();
                }
                if (productBlock.parentNode != null) {
                    productBlock.parentNode.removeChild(productBlock);
                }
                window.location.reload();
            }
            //if (pageType == "sidebar") {if(document.querySelector('.inc_sidebar_modal_block.active') == null){
            if (add_btn_click.querySelector('.inc_product_desc_add_text') != null) add_btn_click.querySelector('.inc_product_desc_add_text').innerText = INC.bundleVars.added;
            // if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
            //     if (add_btn_click.parentNode != null && add_btn_click.parentNode.parentNode != null && add_btn_click.parentNode.parentNode.parentNode != null) {
            //         add_btn_click.parentNode.parentNode.parentNode.classList.add('inc_button_disable')
            //         add_btn_click.parentNode.parentNode.parentNode.style.pointerEvents = "none";
            //         add_btn_click.classList.add('inc_button_disable') 
            //         if (productBlock.querySelector('.inc_product_img_main_zoom_btn_img_block') != null) {
            //             productBlock.querySelector('.inc_product_img_main_zoom_btn_img_block').style.pointerEvents = "none";
            //         }
            //     }
            // }
            setTimeout(function () {
                if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                    if (add_btn_click.querySelector('.inc_product_desc_add_text') != null) add_btn_click.querySelector('.inc_product_desc_add_text').innerText = INC.bundleVars.add;
                    if (productBlock.querySelector('.inc_product_desc_add_text') != null) productBlock.querySelector('.inc_product_desc_add_text').innerText = INC.bundleVars.add
                }
                // else{
                //     if (add_btn_click.parentNode != null && add_btn_click.parentNode.parentNode != null && add_btn_click.parentNode.parentNode.parentNode != null) {
                //         add_btn_click.parentNode.parentNode.parentNode.classList.add('inc_button_disable')
                //         add_btn_click.parentNode.parentNode.parentNode.style.pointerEvents = "none";
                //         add_btn_click.classList.add('inc_button_disable') 
                //     }
                // }
                Array.prototype.forEach.call(add_btn_click, function (el) {
                    el.innerText = INC.bundleVars.addToBasket;
                });
            }, 2000);
            //}
            //INC.methods.getSessionHash();
            var allprd = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length
            
            if(document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null || allprd == 1){
                if(document.querySelector('.inc_recommended_tabs_list_item_block.inc_active') != null){
                    var remcat = document.querySelector('.inc_recommended_tabs_list_item_block.inc_active')
                    if(remcat != null){
                       remcat.parentNode.removeChild(remcat)
                        
                        if(document.querySelector('.inc_recommended_tabs_list_item_block') == null){
                            //INC.methods.hideSidebar()
                            // window.location.href = INC.clientConfig.checkoutLink;  
                            // $('body').trigger('added.ajaxProduct', this.$addToCart);
                            document.querySelector('.inc_sidebar_modal_block').classList.add("inc_empty_sidebar")
                        }
                        if(document.querySelectorAll('.inc_recommended_tabs_list_item_block').length > 1){
                            if(productBlock != null){
                                productBlock.parentNode.removeChild(productBlock);
                            }
                            if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                                document.querySelector('.inc_recommended_tabs_list_item_block').click()
                            }
                        }else{
                            if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                                document.querySelector('.inc_recommended_tabs_list_item_block').click()
                            }
                            document.querySelector('.inc_recommended_products_list_block').setAttribute('style','margin-left:0;')
                        }
                    }
                }
                else{
                    if(INC.config.pageType == "productList"){
                        //console.log("here")
                        if(productBlock != null){
                            productBlock.parentNode.removeChild(productBlock);
                        }
                        if(document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length == 0){
                            //console.log("here11")
                            document.querySelector('.inc_sidebar_modal_block').classList.add("inc_empty_sidebar")
                        }
                    }
                }
            }else{
                
                if(productBlock != null){
                    productBlock.parentNode.removeChild(productBlock);
                }
            }
            // INC.clientConfig.slidevalue=0
            INC.clientConfig.offset = 0;
            var seidebar_pr_length=document.querySelectorAll('.inc_sidebar_modal_block .inc_product_module_block').length;
            if(document.querySelector('.inc_sidebar_cart_added_block') != null){
                document.querySelector('.inc_sidebar_cart_added_block').classList.remove('active')
            }
            if(document.querySelector('.inc_recommended_products_list_block') != null){
                document.querySelector('.inc_recommended_products_list_block').setAttribute('style','margin-left:0;')
            }
            
            if (!(seidebar_pr_length > 2)) {
                if(document.querySelector('.inc_recommended_products_right_block') != null){
                    document.querySelector('.inc_recommended_products_right_block').style.visibility = "hidden";
                }
                if(document.querySelector('.inc_recommended_products_left_block') != null){
                    document.querySelector('.inc_recommended_products_left_block').style.visibility = "hidden";
                }
                if(document.querySelector('.inc_recommended_products_left_btn_img_block') != null){
                    document.querySelector('.inc_recommended_products_left_btn_img_block').style.visibility = "hidden";
                }
                
            }
            if (seidebar_pr_length > 2) {
                INC.clientConfig.slidevalue=0
                INC.clientConfig.offset = 0;
                document.querySelector('.inc_recommended_products_list_block').setAttribute('style','margin-left:0;')
                document.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
                document.querySelector('.inc_recommended_products_right_block .inc_recommended_products_right_btn_img_block').setAttribute("style", "pointer-events: auto;opacity:1");
                document.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
                document.querySelector('.inc_recommended_products_right_block .inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                document.querySelector('.inc_recommended_products_left_block').style.visibility = "visible";
                document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block').style.visibility = "visible";
                document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block .inc_recommended_products_left_btn_img').style.visibility = "visible";
                
                // document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block .inc_recommended_products_left_btn_img_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                // document.querySelector('.inc_recommended_products_left_btn_img_block').setAttribute("style", "opacity:0.5");
            }
            
            if(document.querySelector('.inc_recommended_products_list_block') != null){
                document.querySelector('.inc_recommended_products_list_block').setAttribute('style','margin-left:0;')
            }
            

            var plength=document.querySelectorAll('.inc_sidebar_modal_block .inc_product_module_block').length;
            if (plength == 1) {
                document.querySelector('.inc_recommended_products_right_block').style.visibility = "hidden";
                document.querySelector('.inc_recommended_products_left_block').style.visibility = "hidden";
            }
        }
    }
    //xhr.send(nwConfigObj.params);
    xhr.send(null);
    // setTimeout(function () {
    //     productBlock.remove();
    // }, 50);
    var mainProductId = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "productBlock")).getAttribute('data-main_id');
    var main_pid = productBlock.getAttribute('data-main_id')
    if (INC.config.pageType != "cartPage") INC.methods.addProductToSidebarCart(findObj, qty, productBlock);
    if (INC.config.pageType == "cartPage") {
        main_pid = main_pid
    }
    var pageType = "";
    switch (INC.config.pageType) {
        case "pdp": pageType = "107"; break;
        case "productList": pageType = "101"; break;
        case "cartPage": pageType = "103"; break;
        case "other": pageType = "101"; break;
    }
    // if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null && INC.config.pageType != "productList") {
    //     pageType = "100";
    // }
    if (INC.config.pageType == "cartPage") {
        pageType = "103"
    }

    if (productObj.bundleId.toString().indexOf('1234500679') >= 0 && INC.config.pageType == "cartPage") {
        var bundle_type = "product_deal_add_to_cart";
        var eventDataObj = {};
        eventDataObj["bundle_data"] = {
            "core_product_id": mainProductId,
            "product_id": productObj.id
        }
        INC.methods.trackingEvents("product_deal_add_to_cart", eventDataObj, pageType);
    } else if (INC.config.pageType == "cartPage" && all_sel_shades.length > 0) {
        for (var d = 0; d < all_sel_shades.length; d++) {
            var main_pid = all_sel_shades[d].getAttribute('data-main_id')
            var eventDataObj = {};
            eventDataObj["bundle_data"] = {
                "id": productObj.bundleId,
                "product_ids": [mainProductId, main_pid],
                "product_id": mainProductId
            }
            INC.methods.trackingEvents("bundleAddToCart", eventDataObj, pageType);
        }
    } else {
        var eventDataObj = {};
        eventDataObj["bundle_data"] = {
            "id": productObj.bundleId,
            "product_ids": [mainProductId, main_pid],
            "product_id": mainProductId
        }

        INC.methods.trackingEvents("bundleAddToCart", eventDataObj, pageType);
    }
}
INC.methods.addBundleToCart = function (btn_cart) {
    //debugger
    //INC.clientConfig.OOS=[]
    //item_inc=[]
    var addProductURL = INC.config.addToBasketURL
    var dataStore = INC.dataStore;
    var mainProductId = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "productBlock")).getAttribute('data-main_id');
    var searchParamsObjArray = [];
    var formData = []
    formData = new FormData();
    var t=0;
    var data0 = {};
    var data1 = {};
    var data2 = {};
    var data3 = {};
    var data4 = {};
    var data5 = {};
    var data6 = {};
    var url0 = null;
    var url1 = null;
    var url2 = null;
    var url3 = null;
    var url4 = null;
    var url5 = null;
    var url6 = null;

    var form_data_json = []
    var count_pr_to_add=0
    var total_length=Object.keys(dataStore.bundleCartProducts);




    Object.keys(dataStore.bundleCartProducts).forEach(function (bundleCartProduct) {
        var findObj = new INC.classes.FindObj({ id: bundleCartProduct });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        if (INC.debug) console.log(productObj);
        var qty = dataStore.bundleCartProducts[bundleCartProduct];

      
        if (count_pr_to_add == 0) {
                url0 = addProductURL + "?quantity="+qty+"&id="+bundleCartProduct
           
        } else if (count_pr_to_add == 1) {
                url1 = addProductURL + "?quantity="+qty+"&id="+bundleCartProduct
        } else if (count_pr_to_add == 2) {
                url2 = addProductURL + "?quantity="+qty+"&id="+bundleCartProduct
        } else if (count_pr_to_add == 3) {
                url3 = addProductURL + "?quantity="+qty+"&id="+bundleCartProduct
        } else if (count_pr_to_add == 4) {
                url4 = addProductURL + "?quantity="+qty+"&id="+bundleCartProduct
        } else if (count_pr_to_add == 5) {
                url5 = addProductURL + "?quantity="+qty+"&id="+bundleCartProduct
        }
        count_pr_to_add++
        if(total_length.length == count_pr_to_add){
            ajax_add_to_cart(formData,btn_cart,mainProductId,url0,url1,url2,url3,url4,url5)
        }
    });
    var timeoutOffset = 0;
    
    add_to_cart_tracking_multiple(mainProductId)
    
}

function ajax_add_to_cart(formData,btn_cart,mainProductId,url0,url1,url2,url3,url4,url5){
    //
    INC.clientConfig.OOS=[]
    INC.clientConfig.OOS_MESG = []
    
    callprodA()
    
    function callprodA() {
        jQuery.ajax({
            type: "POST",
            url: url0,
            error: function(jqXHR, textStatus, errorMessage) {
                // if(url1== undefined){
                
                // }
                if(btn_cart != undefined){
                    btn_cart.classList.remove('inc_loading')
                }
                
                if(url1 != undefined){
                    callprodB()
                }
            },
            success: function(data) {
                if(btn_cart != undefined){
                    btn_cart.classList.remove('inc_loading')
                }
                if(url1 == undefined){
                    setTimeout(function(){
                        INC.methods.updateSidebarBlock();
                        INC.methods.showSidebar();
                    }, 500)
                }

                if(url1 != undefined){
                    callprodB()
                }
            }
        });
    }
    
    function callprodB() {
        jQuery.ajax({
            type: "POST",
            url: url1,
            error: function(jqXHR, textStatus, errorMessage) {
                // if(url2 == undefined){
                
                // }
                if(btn_cart != undefined){
                    btn_cart.classList.remove('inc_loading')
                }
                if(url2 != undefined){
                    callprodC()
                }
            },
            success: function(data) {     
                if(btn_cart != undefined){
                    btn_cart.classList.remove('inc_loading')
                }           
                if(url2 == undefined){
                    setTimeout(function(){
                        INC.methods.updateSidebarBlock();
                        INC.methods.showSidebar();
                    }, 500)
                }

                if(url2 != undefined){
                    callprodC()
                }
            }
        });
    }
    
    function callprodC() {
        jQuery.ajax({
            type: "POST",
            url: url2,
            error: function(jqXHR, textStatus, errorMessage) {
                // if(url3 == undefined){
              
                // }
                if(btn_cart != undefined){
                    btn_cart.classList.remove('inc_loading')
                }
                if(url3  != undefined){
                    callprodD()
                }
            },
            success: function(data) {     
                if(btn_cart != undefined){
                    btn_cart.classList.remove('inc_loading')
                }           
                if(url3  == undefined){
                    setTimeout(function(){
                        INC.methods.updateSidebarBlock();
                        INC.methods.showSidebar();
                    }, 500)
                }

                if(url3  != undefined){
                    callprodD()
                }
            }
        });
    }
    function callprodD() {
        jQuery.ajax({
            type: "POST",
            url: url3,
            error: function(jqXHR, textStatus, errorMessage) {
                // if(url4 == undefined){
                
                // }
                if(btn_cart != undefined){
                    btn_cart.classList.remove('inc_loading')
                }
                if(url4 != undefined){
                    callprodE()
                }
            },
            success: function(data) { 
                if(btn_cart != undefined){
                    btn_cart.classList.remove('inc_loading')
                }               
                if(url4 == undefined){
                    setTimeout(function(){
                        INC.methods.updateSidebarBlock();
                        INC.methods.showSidebar();
                    }, 500)
                    
                }

                if(url4 != undefined){
                    callprodE()
                }
            }
        });
    }
    function callprodE() {
        jQuery.ajax({
            type: "POST",
            url: url4,
            error: function(jqXHR, textStatus, errorMessage) {
                // if(url5 == undefined){
               
                // }
                if(btn_cart != undefined){
                    btn_cart.classList.remove('inc_loading')
                }
                if(url5 != undefined){
                    callprodF()
                }
            },
            success: function(data) {
                if(btn_cart != undefined){
                    btn_cart.classList.remove('inc_loading')
                }
                if(url5 == undefined){
                    setTimeout(function(){
                        INC.methods.updateSidebarBlock();
                        INC.methods.showSidebar();
                    }, 500)
                    
                }

                if(url5 != undefined){
                    callprodF()
                }
            }
        });
    }
    function callprodF() {
        jQuery.ajax({
            type: "POST",
            url: url5,
            error: function(jqXHR, textStatus, errorMessage) {
                if(btn_cart != undefined){
                    btn_cart.classList.remove('inc_loading')
                }
               
            },
            success: function(data) {
                if(btn_cart != undefined){
                    btn_cart.classList.remove('inc_loading')
                }
                setTimeout(function(){
                    INC.methods.updateSidebarBlock();
                    INC.methods.showSidebar();
                }, 500)
                
            }
        });
    }
    //console.log(item_inc)
}

INC.methods.cartApi = function (sessionId) {

    p_url = 'https://avon.uk.com/cart/add.js';
    // var campaignNumber = _ShopContext.CampaignNumber;
    var sStorage = "";
    var ss = "";
    if (window.sessionStorage.SessionContext_PL != undefined) {
        sStorage = JSON.parse(window.sessionStorage.SessionContext_PL);
        ss = sStorage.Hash.Session;
    }
    if (INC.methods.detectPageType == "cartpage" && sessionId != null) {
        ss = sessionId;
    }
    if (ss != null) {
        p_url = p_url + ss;
    }

    var eventdata = "cb=" + ss;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {
                    // m_incBndle.DataModel.jsonData = xhr.responseText;
                    // callback(m_incBndle.DataModel.jsonData)
                } else {
                    //console.log(xhr);
                }
            }
        }
    };
    xhr.open("GET", p_url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(eventdata);
}
INC.methods.getSessionHash = function () {

    p_url = 'https://www.avon.co.uk/api/sessionapi/getsessionhash?';
    // var campaignNumber = _ShopContext.CampaignNumber;
    var sStorage = "";
    var ss = "";
    if (window.sessionStorage.SessionContext_PL != undefined) {
        sStorage = JSON.parse(window.sessionStorage.SessionContext_PL);
        ss = sStorage.Hash.Session;
    }
    if (ss != null) {
        p_url = p_url + ss;
    }
    var eventdata = "cb=" + ss;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {
                    var newSession = JSON.parse(xhr.responseText).Data.Session;
                    INC.methods.cartApi(newSession);
                } else {
                    //console.log(xhr);
                }
            }
        }
    };
    xhr.open("GET", p_url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(eventdata);
}
function add_to_cart_tracking_multiple(mainProductId) {
    var event_type = "bundle_add_to_cart";
    var core_prod_id = "";
    var productIdsforTracking = []
    core_prod_id = mainProductId;

    pageType = "100";
    // eventdata = { "id": bundleId, "product_ids": productIdsforTracking, "product_id": core_prod_id.toString() }
    var all_data = [];
    for (var k = 0; k < INC.config.bundle_tracking.length; k++) {
        if (INC.config.bundle_tracking.length == 1) {
            productIdsforTracking.push(mainProductId)
            productIdsforTracking.push(INC.config.bundle_tracking[k].id)
            all_data.push({
                id: parseInt(INC.config.bundle_tracking[k].bid),
                product_ids: productIdsforTracking,
                product_id: core_prod_id
            })
            productIdsforTracking = []
        } else {
            if (mainProductId != INC.config.bundle_tracking[k].id) {
                productIdsforTracking.push(mainProductId)
                productIdsforTracking.push(INC.config.bundle_tracking[k].id)
                all_data.push({
                    id: parseInt(INC.config.bundle_tracking[k].bid),
                    product_ids: productIdsforTracking,
                    product_id: core_prod_id
                })
                productIdsforTracking = []
            }
        }
    }
    data = {
        "eventData": btoa((JSON.stringify({
            "event_data": {
                "bundle_data": all_data
            },
            "page_type": pageType.toString(),
            "event_type": event_type,
            "method": "track",
            "platform": "",
            "token": INC.config.clientToken,
            "mb": "1"
        }))),
        "vid": INC.config.ivid,
        "time": getCurrentFormattedTime(),
        "uri": document.location.href
    };
    makeTrackingApiCall(JSON.stringify(data));


}
function makeTrackingApiCall(eventdata) {
    //console.log("TRACKING");
    p_url = '//optimizedby.increasingly.co/ImportData';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {
                    // m_incBndle.DataModel.jsonData = xhr.responseText;
                    // callback(m_incBndle.DataModel.jsonData)
                } else {
                    //console.log(xhr);
                }
            }
        }
    };
    xhr.open("POST", p_url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(eventdata);
}
function getCurrentFormattedTime() {
    var d = new Date();
    var currentTime = (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
    return currentTime;
}

INC.methods.checkStatusVAT = function () {
    if (INC.methods.checkStatusLoggedIn()) return "false";
    var cookieArray = document.cookie.split(";");
    var statusVAT = "true";
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "includeVat") {
            // if (INC.debug) console.log(cookieSplit[1].trim());
            statusVAT = cookieSplit[1].trim();
        }
    });

    return statusVAT;
}

INC.methods.checkStatusLoggedIn = function () {
    var cookieArray = document.cookie.split(";");
    var statusLoggedIn = false;
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "customer_name") {
            statusLoggedIn = true;
        }
    });

    return statusLoggedIn;
}

INC.methods.init = function () { }
INC.methods.initDev = function () { }
INC.methods.buildCrawlDataObj = function buildCrawlDataObj() {
    function buildCrawlDataObj() {

        var elProductName = document.querySelector('.product-title-block .product-name');
        var elActivePrice = document.querySelector('.price-text');
        var elRegularPrice = document.querySelector('.price-text');
        var elDescription = document.querySelector('.product-long-description');
        var elProductImageList = [];
        if (document.querySelector('.s7staticimage') != null) {
            var elProductImageList = document.querySelector('.s7staticimage').querySelectorAll('img');
        }
        var elGender = document.querySelector('.ProductForm__title-gender')
        // var elReview = document.querySelector('.bv_stars_component_container');
        var elColor = document.querySelector('.swatches.color li.selected input');
        var elSize = document.querySelector('.swatches.size li.selected input');
        var elQuantity = document.querySelector('#Quantity');
        // var elworthPrice =null
        // if(document.querySelector('.product-pricing .price-value') != null){
        //     var elworthPrice = document.querySelector('.product-pricing .price-value').innerText.replace('Worth','').replace('£','').trim()
        // } 
        var productName = encodeURIComponent(elProductName.innerText);
        var regularPrice = parseFloat(elRegularPrice.innerText.split('£')[2]);
        var activePrice = parseFloat(elActivePrice.innerText.split('£')[1]);
        var description = encodeURIComponent(elDescription.innerText);
        var productImageURL = elProductImageList[0].src;
        var productOtherImageURLArray = [];

        for (var i = 1; i < elProductImageList.length; i++) {
            productOtherImageURLArray.push(elProductImageList[i].src);
        }

        // var gender = (elGender != null) ? elGender.innerText : "ALL";
        // var reviews = parseFloat(elReview.innerText);
        if (document.querySelector('.swatches.color li.selected input') != null) {
            var color = encodeURIComponent(elColor.parentNode.querySelector('rect').style.fill);
            var colorText = elColor.getAttribute('value').trim();
            // var size = elSize.innerText.replace(" - SOLD OUT", "");
            var productId = INC.methods.getProductIdFromWebPage();
            var productSKU = window.location.search.replace("?variant=", "");
            var quantity = (elQuantity != null) ? ((elQuantity.innerText == "ADD TO CART") ? 100 : 0) : 0;

            var productObj = {
                "brand": "SEAVEES",
                "productId": productId,
                "productSKU": productSKU,
                "productName": productName,
                "description": description,
                "color": color,
                "colorText": colorText,
                // "Size": size,
                "quantity": quantity,
                "productURL": window.location.href,
                "imageURL": productImageURL,
                "otherImageURLs": productOtherImageURLArray,
                "regularPrice": regularPrice,
                "activePrice": activePrice,
                "activePriceMsg": "",
                "Field1": elworthPrice
                // "gender": gender,
                // "reviews": reviews
            }
        }

        return productObj;
    }

    return buildCrawlDataObj();
}
INC.methods.sendCrawlData = function () {
    function buildCrawlDataObj() {

        var elQtyDataAll = document.querySelectorAll('.price_breaks th');
        var elBulkQuantityMessage = document.querySelector('.bulkbuy.upp.tc.fl.pr_hide');
        var elProductQtyMsg = document.querySelector('.uos.pr_hide');

        var productId = code;
        var productTitle = name;
        var productQtyMsg = (elProductQtyMsg != null) ? elProductQtyMsg.innerText.trim() + "|" : "|";
        var bulkQuantityMessage = (elBulkQuantityMessage != null) ? elBulkQuantityMessage.innerText + "|" : "|";
        var qtyDataText = ["|||"];

        if (elQtyDataAll != null) {
            qtyDataText = [];
            Array.prototype.forEach.call(elQtyDataAll, function (elQtyData) {
                var qtyText = elQtyData.querySelector('.p_val').innerText;
                var qtyPrice = elQtyData.querySelector('.p_break').innerText;
                var qtySaveMsg = (elQtyData.querySelector('.save-percent') != null) ? elQtyData.querySelector('.save-percent').innerText : "";

                qtyDataText.push(qtyText);
                qtyDataText.push(qtyPrice);
                qtyDataText.push(qtySaveMsg);
            });
        }

        var productObj = {
            "product_id": productId,
            "product_name": productTitle,
            "field4": productQtyMsg + bulkQuantityMessage + qtyDataText.join("|")
        }

        if (INC.debug) console.log(productObj);

        sendCrawlData(productObj);
    }

    function sendCrawlData(productObj) {
        var eventData = {
            "event_data": productObj,
            "event_type": "product_page_visit",
            "method": "track",
            "token": "seV99s"
        };
        var crawlData = {
            "eventData": btoa(JSON.stringify(eventData)),
            "uri": window.location.origin + window.location.pathname
        }
        var xhr = new XMLHttpRequest();
        var method = "POST";
        var url = "https://gather.increasingly.com/ImportCrawledData";
        xhr.onreadystatechange = handleStateChange;
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        function handleStateChange() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (INC.debug) console.log(xhr.responseText);
            }
        }
        xhr.send(JSON.stringify(crawlData));
        if (INC.debug) console.log(crawlData)
        if (INC.debug) console.log(eventData);
    }

    buildCrawlDataObj();
}
INC.methods.trackingEvents = function (eventType, eventDataObj, pageType) {

    // var importEventDataObj = new INC.classes.EventData(eventDataObj);
    var importEventDataObj = {};
    var importDataObj = {};

    importEventDataObj["event_data"] = eventDataObj;

    switch (eventType) {
        case "productPageVisit":
            importEventDataObj["event_type"] = "product_page_visit";
            importEventDataObj["method"] = "track";
            break;
        case "catalogProductView":
            importEventDataObj["event_type"] = "catalog_product_view";
            importEventDataObj["page_type"] = "catalog_product_view";
            importEventDataObj["method"] = "track";
            break;
        case "bundleProductClickTracking":
            importEventDataObj["event_type"] = "bundle_product_click_tracking";
            importEventDataObj["page_type"] = pageType;
            // switch (INC.config.pageType) {
            //     case "pdp": importEventDataObj["page_type"] = "107"; break;
            //     case "productList": importEventDataObj["page_type"] = "101"; break;
            //     case "cartPage": importEventDataObj["page_type"] = "103"; break;
            // }

            importEventDataObj["is_logged"] = "0";
            importEventDataObj["method"] = "track";
            INC.methods.sendAffiliateRequest();
            break;
        case "bundleAddToCart":
            importEventDataObj["event_type"] = "bundle_add_to_cart";
            importEventDataObj["page_type"] = pageType;
            importEventDataObj["is_logged"] = (INC.clientConfig.statusLoggedIn == true) ? "1" : "0";
            importEventDataObj["method"] = "track";
            INC.methods.sendAffiliateRequest();
            break;
        case "product_deal_add_to_cart":
            importEventDataObj["event_type"] = "product_deal_add_to_cart";
            importEventDataObj["page_type"] = pageType;
            importEventDataObj["is_logged"] = (INC.clientConfig.statusLoggedIn == true) ? "1" : "0";
            importEventDataObj["method"] = "track";
            INC.methods.sendAffiliateRequest();
            break;
    }

    importEventDataObj["platform"] = "";
    importEventDataObj["token"] = INC.config.clientToken;
    // if (INC.debug) console.log(importEventDataObj);
    importDataObj["eventData"] = btoa(JSON.stringify(importEventDataObj));
    importDataObj["uri"] = window.location.href;
    importDataObj["vid"] = INC.config.ivid;
    INC.methods.sendTrackingEvents(importDataObj);
}

INC.methods.sendTrackingEvents = function (importDataObj) {
    // var nwConfigObj = new INC.classes.NWConfig();
    // nwConfigObj.url = INC.config.trackingURL;
    // nwConfigObj.method = "POST";
    // nwConfigObj.params = importDataObj;
    // this.networkReq(nwConfigObj);

    var xhr = new XMLHttpRequest();
    var method = "POST";
    // var url = "https://optimizedby.increasingly.co/ImportData";
    var url = INC.config.trackingURL;
    xhr.onreadystatechange = handleStateChange;

    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    function handleStateChange() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // logger(xhr.responseText);
        }
    }

    xhr.send(JSON.stringify(importDataObj));
}

INC.methods.sendAffiliateRequest = function () {
    var url = INC.config.affiliateURL;
    var oImg = document.createElement("img");
    oImg.setAttribute('id', 'cstracking')
    oImg.setAttribute('src', url);
    oImg.setAttribute('height', '1px');
    oImg.setAttribute('width', '1px');
    oImg.setAttribute('style', 'display:none')
    document.body.appendChild(oImg);
}
INC.methods.addVisitorID = function () {

    function generateUniqueINCVisitorId(len, bits) {

        var bits = bits || 36;
        var outStr = "";
        var newStr;
        while (outStr.length < len) {
            newStr = Math.random().toString(bits).slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr;
    }

    var cookieArray = document.cookie.split(";");
    var ivid = "";
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "ivid") {
            ivid = cookieSplit[1].trim();
        }
    });

    if (ivid.length == 0) {
        ivid = generateUniqueINCVisitorId(42, 16);
        document.cookie = "ivid=" + ivid + ";" + "expires=16 Jul 2021 06:23:41 GMT;" + "path=/";
    }
    if (INC.debug) console.log("ivid: " + ivid);

    // var oImg = document.createElement("img");
    // oImg.setAttribute('src', "//optimizedby.increasingly.co/GetVisitorId?ivid=" + ivid);
    // oImg.setAttribute('height', '1px');
    // oImg.setAttribute('width', '1px');
    // oImg.setAttribute('style', 'display:none');
    // document.body.appendChild(oImg);

    INC.config.ivid = ivid;

    return ivid;
}

INC.methods.autoSelectMainProductColorVarient = function () {
    if (document.querySelector('.swatches.color li.selected input') != null) {
        var productObj = INC.methods.buildCrawlDataObj();
        var mainId = decodeURIComponent(productObj.productName);
        var colorText = productObj.colorText;

        findObj = new INC.classes.FindObj({ mainId: mainId, colorText: colorText });

        var productBlock = document.querySelector('.inc_product_block');
        if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block[data-color="' + colorText + '"]') != null) {
            if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block[data-color="' + colorText + '"]').parentNode.classList.contains('inc_active') == false) {
                document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block[data-color="' + colorText + '"]').click();
            }
        }
    }
}


INC.checkDevUserCookie();



document.onclick = clickListener;

function clickListener(e) {
   // console.log("here")
    var clickedElement = (window.event) ?
        window.event.srcElement :
        e.target,
        tags = document.getElementsByTagName(clickedElement.tagName);
       // console.log(clickedElement.className)
    if (clickedElement.className == "inc_product_modal_block simple inc_active" || clickedElement.className == "inc_product_modal_block configurable inc_active") {
        document.querySelector('body').classList.remove('inc_overlay');
        document.querySelector('html').classList.remove('inc_prevent_scroll')
        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
            document.querySelector('body').style.position = "";
            if (INC.methods.detectPageType() == "pdp") {
                if(document.querySelector('.inc_pdp_block') != null){
                    jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 80}, 0);
                }
            }
            else if (INC.methods.detectPageType() == "cartPage") {
                jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
            }
        }
        document.querySelector('html').style.overflow = "auto";
        clickedElement.classList.remove('inc_active')
        clickedElement.querySelector('.inc_product_Info_Full_desc_info_block').classList.remove('show_full_desc');
    }

    
    if (clickedElement.className == "inc_product_desc_att_wrapper_block active") {
        clickedElement.classList.remove('inc_active');
        clickedElement.parentNode.querySelector('.inc_product_desc_att_wrapper_block');
    }


    if (clickedElement.className == "inc_pdp_bundle_cart_overlay_block active") {
        document.querySelector('.inc_pdp_bundle_cart_title_img_block').click()
    }
    // if(clickedElement.parentElement.className == "Button" && INC.config.pageType == "pdp" && document.querySelector('.select2-choice.ui-select-match') != undefined && (document.querySelector('.select2-choice.ui-select-match').innerText != "Wybierz odcień" && document.querySelector('.select2-choice.ui-select-match') != undefined && document.querySelector('.select2-choice.ui-select-match').innerText != "Choose a shade")){
    //     //document.querySelector('.mini-cart-content')
    //     // var checking_popup = setInterval(function(){
    //     //     if (INC.debug) console.log("interval in progress")
    //     // },0)
    //     // var elClientAddToCartBtn = document.querySelector('.ProductDetails .Button');
    //     // var findObj = new INC.classes.FindObj();
    //     // findObj["id"] = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: INC.dataStore.pdpProductId }).id;
    //     // findObj["mainId"] = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: INC.dataStore.pdpProductId }).id;
    //     // findObj["colorText"] = document.querySelector('.select2-choice.ui-select-match').innerText;
    //     // var sbBlock = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock"));

    //     // sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedListBlock")).innerHTML = "";
    //     // sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarHeaderItemCountFigureText")).innerText = 0;
    //     // var qty = 1;
    //     // if(document.querySelector('.AddToCart.FormField input') != null){
    //     //     var qty =document.querySelector('.AddToCart.FormField input').value
    //     // }




    //     // if (elClientAddToCartBtn.parentNode.parentNode.parentNode.querySelector('div[data-test-id="selected-option"]') == null) {
    //     //     INC.methods.addProductToSidebarCart(findObj, qty,null,"client_add_btn");
    //     //     INC.methods.showSidebar();
    //     //     INC.clientConfig.offset = 0;
    //     //     INC.clientConfig.slidevalue = 0;
    //     //     document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style','margin-left: 0')
    //     //     document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style','pointer-events: none;opacity:0.5')
    //     //     document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style','')
    //     // }
    // }else if(clickedElement.class == "Button" && INC.config.pageType == "productList"){
    //     // var productId = clickedElement.parentNode.parentNode.parentNode.querySelector('[id="pid"]').value;
    //     // var qty = 1;
    //     // if (INC.config.deviceType == "desktop") {
    //     //     qty = clickedElement.parentNode.parentNode.parentNode.parentNode.querySelector('.Quantity button[data-id="Quantity"] span').innerText;
    //     // }
    //     // if (INC.config.deviceType == "mobile") {
    //     //     qty = clickedElement.parentNode.parentNode.parentNode.parentNode.querySelector('.Quantity button[data-id="Quantity"] span').innerText;
    //     // }
    //     // INC.dataStore.plpProductQty = qty;

    //     // INC.methods.clear();
    //     // setTimeout(function () {
    //     //     if (document.querySelector('#QuickViewDialog') != null) {
    //     //         if (document.querySelector('.ProductDetails .Button') == null) {
    //     //             // console.log("display: " + document.querySelector('.Modal__ModalContainer-sc-6twluf-0.djtiDp').style.display);
    //     //             document.querySelector('#QuickViewDialog').style.visibility = "hidden";
    //     //             // Array.prototype.forEach.call(document.querySelectorAll('button[data-test-id="cancel-button"]'), function (el) {
    //     //             //     el.click();
    //     //             // });
    //     //         }
    //     //     }
    //     // }, 50);

    //     // setTimeout(function () {
    //     //     INC.methods.irbReq(productId, 30, "catalog_product_view");
    //     // }, 100);
    // }
    if (document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') == null) {
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
    }
    
    //if (document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.simple.inc_active') != null || document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.configurable.inc_active') != null) {
        if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
            //if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
               // document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add('overflow_visible')
               // document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add('inc_popup_open')
           // }else{
                //document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add('overflow_visible')
                //document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add('inc_popup_open')
           // }
            
        }
   // }
   if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
        if (clickedElement.className == "inc_product_modal_block simple" || clickedElement.className == "inc_product_modal_block configurable") {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('inc_popup_open')
        }
   }
   

    if ((clickedElement.parentNode != null && clickedElement.parentNode.parentNode != null && INC.config.pageType == "pdp" && clickedElement.parentNode.parentNode.parentNode != undefined) && (clickedElement.className != "inc_product_desc_att_size_list_item_img_block active" || clickedElement.className != "inc_product_desc_att_size_list_item_img_block")) {
        if (clickedElement.parentNode.parentNode.parentNode.parentNode != null) {
            if (clickedElement.parentNode.parentNode.id == "swatchList" || clickedElement.parentNode.parentNode.parentNode.parentNode.id == "swatchList" || clickedElement.parentNode.parentNode.id == "swatchList") {
                setTimeout(function () {
                    if (document.querySelector('.inc_pdp_block') != null) {
                        if (document.querySelector('.ProductDetails .Button') != null) {
                            if (document.querySelector('.ProductDetails .Button').getAttribute('disabled') != "disabled") {
                                document.querySelector('.inc_pdp_block').style.display = "block"
                                var selected_shades = "";
                                if (clickedElement.querySelector('img') != null) {
                                    var selected_shades = clickedElement.querySelector('img').alt;
                                } else if (clickedElement.parentNode.parentNode.querySelector('img') != null) {
                                    var selected_shades = clickedElement.parentNode.parentNode.querySelector('img').alt;
                                }
                                var main_prod_attr = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block a');
                                if (selected_shades != "") {
                                    for (a = 0; a < main_prod_attr.length; a++) {
                                        if (main_prod_attr[a].getAttribute('title').indexOf(selected_shades) >= 0) {
                                            if (main_prod_attr[a].parentNode.classList.contains('inc_active') == false) {
                                                main_prod_attr[a].click();
                                                break;
                                            }
                                        }
                                    }
                                }
                                // INC.methods.autoSelectMainProductColorVarient()
                            } else {
                                if((window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
                                    if (document.querySelector('.inc_pdp_block') != null) {
                                        document.querySelector('.inc_pdp_block').style.display = "block";
                                    }
                                }else{
                                    document.querySelector('.inc_pdp_block').style.display = "none"
                                }
                            }
                        } else {
                            if((window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
                                if (document.querySelector('.inc_pdp_block') != null) {
                                    document.querySelector('.inc_pdp_block').style.display = "block";
                                }
                            }else{
                                document.querySelector('.inc_pdp_block').style.display = "none"
                            }
                        }
                    } else {
                        INC.init();
                    }
                }, 2500)
            }
        }
    }
    if (INC.config.pageType == "pdp" && clickedElement.parentNode != undefined && clickedElement.parentNode.classList != undefined && clickedElement.parentNode.classList.contains("VariantImage")) {
        if (INC.debug) console.log(clickedElement.alt);
        var sku = clickedElement.parentNode.parentNode.parentNode.querySelector('.VariantLineNumber').innerText;
    }
    //setTimeout(function () {
       // console.log(document.querySelector('.cart-bag-count').innerText.trim())
       if (INC.config.pageType == "cartPage"){
            if (document.querySelector('.cart-bag-count').innerText.trim() == "0 items") {
                var af_block = document.querySelector('.inc_af_block');
                if (af_block != null) {
                    af_block.parentNode.removeChild(af_block);
                }
                //INC.init();
            }
        }
   // }, 2000)
    if (document.querySelector('.inc_sidebar_modal_block') != null && document.querySelector('.inc_sidebar_modal_block').classList.contains('inc_active')) {
        document.querySelector('html').style.overflow = "hidden";
    }
    if ((INC.methods.detectPageType() == "cartPage" || INC.methods.detectPageType() == "pdp" || INC.methods.detectPageType() == "productList") && (clickedElement.classList != "" && clickedElement.classList != null && clickedElement.classList != undefined && clickedElement.classList.contains("inc_product_modal_block")) && (clickedElement.classList != null && clickedElement.classList != undefined && clickedElement.classList != "" && clickedElement.classList.contains("inc_active"))) {
        if (clickedElement.querySelector('.close_read_more') != null) {
            clickedElement.querySelector('.close_read_more').click()
        }
        clickedElement.classList.remove('inc_active')
        if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
            document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove("inc_popup_open")
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
            }
        }
        else {
            document.querySelector('html').classList.remove('inc_prevent_scroll')
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337 && onloadpdp == true) {
                document.querySelector('body').style.position = "";
                if (INC.methods.detectPageType() == "pdp") {
                    if(document.querySelector('.inc_pdp_block') != null){
                     jQuery("html, body").animate({ scrollTop: jQuery(".inc_pdp_block").offset().top - 80}, 0);
                    }
                }
                else if (INC.methods.detectPageType() == "cartPage") {
                    jQuery("html, body").animate({ scrollTop: jQuery(".inc_af_block").offset().top - 80 }, 0);
                }
            }
            document.querySelector('html').style.overflow = "auto";
            document.querySelector('body').classList.remove('inc_overlay');
        }
    }
    if (clickedElement.className == "sidebar_outer sidebar_outer_active" && document.querySelector(".inc_sidebar_modal_block.inc_active") != null) {
        if (document.querySelector(".inc_sidebar_modal_block.inc_active .inc_header_continue_img") != null) {
            document.querySelector(".inc_sidebar_modal_block.inc_active .inc_header_continue_img").click()
        }
    }
}
if (INC.config.pageType == "cartPage"){
    if (jQuery('.btn-remove') != null) {
        jQuery('.btn-remove').click(function (e) {
            //console.log("inside")
            setTimeout(function () {
                if(document.querySelector('.cart-bag-count').innerText.trim() == "0 items") {
                    //console.log("inside2")
                    var af_block = document.querySelector('.inc_af_block');
                    if (af_block != null) {
                        af_block.parentNode.removeChild(af_block);
                    }
                    //INC.init();
                }
            }, 1000)
        });
    }
}    
    if(inc_isIE()){
        
    }else{
         
        if(typeof($) != "undefined"){
            $(".product-key-actions #btn-basket").on('click', function (ev) {
                //debugger
                if (INC.config.pageType == "pdp") {
                    if (INC.config.modal_called == true) {
                        INC.config.modal_called = false
                        if (document.querySelector('html.mobile') != null || document.querySelector('html.phone') != null) {
                            pdp_modal_pr()
                        } else {
                            var pr_wrapper = ev.target.parentNode.parentNode;
                            pdp_modal_pr(pr_wrapper)
                        }
                    }
                }
            });
        }
        if(typeof($) != "undefined"){
            $(".collection-listing .product-listing button.btn-basket").on('click', function (ev) {
                if (INC.config.pageType == "productList") {
                    if (INC.config.modal_called == true) {
                        INC.config.modal_called = false
                        var product_wrapper = ev.target.parentNode.parentNode.parentNode.parentNode;
                        plp_modal_pr(product_wrapper)
                    }
                }
            
            });
        }



        if(typeof($) != "undefined"){
            $(".PageNext, .PagePrevious, body").on('click', function (ev) {
                if (INC.config.pageType == "pdp") {
                    if (ev.target.parentNode != null && ev.target.parentNode.classList.contains('Quantity') == true) {
                        setTimeout(function () {
                            $(".button-add-to-cart, .AddToCart a.Button span, .AddToCart a.Button, .button-add-to-cart-text span").on('click', function (ev) {
                                if (INC.config.modal_called == true) {
                                    INC.config.modal_called = false
                                    if (document.querySelector('html.mobile') != null || document.querySelector('html.phone') != null) {
                                        pdp_modal_pr()
                                    } else {
                                        var pr_wrapper = ev.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                        pdp_modal_pr(pr_wrapper)
                                    }
                                }
                            })
                        }, 2000);
                    }
                } else {
                    if (INC.config.pageType == "productList") {
                        setTimeout(function () {
                            $(".AddToCart a.Button span, .AddToCart a.Button").on('click', function (ev) {
                                if (INC.config.modal_called == true) {
                                    INC.config.modal_called = false
                                    var product_wrapper = ev.target.parentNode.parentNode.parentNode.parentNode.parentNode;
                                    plp_modal_pr(product_wrapper)
                                }
                            });
                        }, 3000);
                    }
                }
            })
        }
    }
    
function pdp_modal_pr(pr_wrapper) {
    //debugger
    onloadpdp = true
    if (document.querySelector('html.mobile') != null || document.querySelector('html.phone') != null) {

        var prd_name = ""
        if (document.querySelector('body.Controller_Product') != null) {
            prd_name = _ShopContext.ProductViewModel.Product.Name
        } else {
            var jsData = document.querySelector('#MainContentWrapper main div').getAttribute('ng-init')
            var shade_array = JSON.parse(jsData.split('ViewModel=')[1])
            prd_name = shade_array.Product.Name
        }

        if (document.querySelector('#ProductMediaContainer #ProductMediaCarousel .Slides img') != null) {
            var prd_img_url = document.querySelector('#ProductMediaContainer #ProductMediaCarousel .Slides img').src;
        } else {
            var prd_img_url = "https://www.increasingly.co/Implementation/no_img.jpg"
            if (document.querySelector('.Slides .SmallImage img') != null) {
                var prd_img_url = document.querySelector('.Slides .SmallImage img').src;
            }
        }

        var prd_prc = 0;
        var old_prc = 0;
        if (document.querySelector('body.Controller_Product') != null) {
            prd_prc = _ShopContext.ProductViewModel.Product.ListPrice
            old_prc = _ShopContext.ProductViewModel.Product.SalePrice
        } else {
            var jsData = document.querySelector('#MainContentWrapper main div').getAttribute('ng-init')
            var shade_array = JSON.parse(jsData.split('ViewModel=')[1])
            prd_prc = shade_array.Product.ListPrice
            old_prc = shade_array.Product.SalePrice
        }
        var qty_shade = 0;
        var all_qty = document.querySelectorAll('.ProductActions .ShadeSelectedDropdown .Quantity input')
        if (all_qty.length > 0) {
            for (q = 0; q < all_qty.length; q++) {
                var sel_qty = all_qty[q].value;
                qty_shade = qty_shade + +sel_qty
            }
        } else {
            var all_qty = document.querySelectorAll('.quantityDiv .quantity')
            for (q = 0; q < all_qty.length; q++) {
                var sel_qty = all_qty[q].value;
                qty_shade = qty_shade + +sel_qty
            }
        }
    } else {
        var pr_wrapper = pr_wrapper
        var prd_name = ""
        if (document.querySelector('body.template-product') != null && MAKEBECOOL_BUNDLES.product != undefined) {
            prd_name = MAKEBECOOL_BUNDLES.product.title
        } 
        if(document.querySelector('#product-detail .product-title') != null){
            prd_name = document.querySelector('#product-detail .product-title').innerText
        }else if(prd_name = MAKEBECOOL_BUNDLES.product != undefined){
            prd_name = MAKEBECOOL_BUNDLES.product.title
        }
        var prd_prc = 0;
        var old_prc = 0;
        if (document.querySelector('body.template-product') != null) {
            prd_prc = dataLayer[0].product_price
            old_prc = dataLayer[0].product_original_price
        }
        
        if (document.querySelector('#product-images-container img') != null) {
            var prd_img_url = document.querySelector('#product-images-container img').src
        } 
        // else {
        //     var prd_img_url = "https://www.increasingly.co/Implementation/no_img.jpg"
        //     if (document.querySelector('.Slides .SmallImage img') != null) {
        //         var prd_img_url = document.querySelector('.Slides .SmallImage img').src;
        //     }
        // }
        var qty_shade = 0;
        qty_shade = document.querySelector('.product-key-actions .product-quantity-container input').value
        // var all_qty = document.querySelectorAll('.ProductActions .ShadeSelectedDropdown .Quantity input')
        // if (all_qty.length > 0) {
        //     for (q = 0; q < all_qty.length; q++) {
        //         var sel_qty = all_qty[q].value;
        //         qty_shade = qty_shade + +sel_qty
        //     }
        // } 
        // else {
        //     var all_qty = document.querySelectorAll('.quantityDiv .quantity')
        //     for (q = 0; q < all_qty.length; q++) {
        //         var sel_qty = parseInt(all_qty[q].innerText);
        //         qty_shade = qty_shade + +sel_qty
        //     }
        // }
    }
    setTimeout(function () {
        if (document.querySelector('.Validation.ng-hide') != null) {
            if (old_prc != 0) {
                pdp_listeners(prd_name, old_prc, prd_img_url, prd_prc, qty_shade)
            } else {
                pdp_listeners(prd_name, old_prc, prd_img_url, prd_prc, qty_shade)
            }
        } else if (document.querySelector('body.Controller_Product') == null || document.querySelector('body.Controller_ProductDetail') == null || document.querySelector('body.Action_ProductDetailPage') == null) {
            if (old_prc != 0) {
                pdp_listeners(prd_name, old_prc, prd_img_url, prd_prc, qty_shade)
            } else {
                pdp_listeners(prd_name, old_prc, prd_img_url, prd_prc, qty_shade)
            }
        } else {
            INC.config.modal_called = true
        }
    }, 300)

}
function plp_modal_pr(product_wrapper) {
    //debugger
    var prd_name = product_wrapper.querySelector('.product-title a').innerText;
    var prd_prc = product_wrapper.querySelector('.product-price .money').innerText.replace('£', '').replace(',', '.').trim();
    //var prd_img_url = product_wrapper.querySelector('.product-image img').src;
    var prd_img = product_wrapper.querySelectorAll('.product-image a img')
    if(prd_img.length > 0){
        var prd_img_url  = prd_img[prd_img.length - 1].src
    }else{
        var prd_img_url = product_wrapper.querySelector('.product-image img').src;
    }

    var old_prc = 0;
    if (product_wrapper.querySelector('.product-price .original-price') != null) {
        prd_prc = product_wrapper.querySelector('.product-price .money').innerText.replace('£', '').replace('Regular Price', '').replace(',', '.').trim();
        old_prc = product_wrapper.querySelector('.product-price .original-price').innerText.replace('£', '').replace(',', '.').trim();
    }
    prd_prc = prd_prc.replace("€", "").replace(",", ".").replace("£", "").trim()
    if (old_prc != 0) {
        old_prc = old_prc.replace("€", "").replace(",", ".").replace("£", "").trim()
    }

    var sel_v = "";
    if(product_wrapper.querySelector('.product-swatch-dropdown') != null || product_wrapper.querySelector('.product-swatch-dropdown') != undefined){
        if(product_wrapper.querySelector('.product-swatch-dropdown .current-swatch') != null || product_wrapper.querySelector('.product-swatch-dropdown .current-swatch') != undefined){
            if(product_wrapper.querySelector('.product-swatch-dropdown .current-swatch .swatch-title') != null || product_wrapper.querySelector('.product-swatch-dropdown .current-swatch .swatch-title') != undefined){
                if(product_wrapper.querySelector('.product-swatch-dropdown').getAttribute("data-variant-count") > 1){
                    var sel_v = product_wrapper.querySelector('.product-swatch-dropdown .current-swatch .swatch-title').innerText.trim()
                }else{
                    var sel_v = ""
                }
                
            }
        }
    }
    //debugger
    var pr_id = "";
    if(product_wrapper.querySelector('.product-swatch-dropdown') != null || product_wrapper.querySelector('.product-swatch-dropdown') != undefined){
        if(product_wrapper.querySelector('.product-swatch-dropdown .current-swatch') != null || product_wrapper.querySelector('.product-swatch-dropdown .current-swatch') != undefined){
            if(product_wrapper.querySelector('.product-swatch-dropdown .current-swatch .swatch-image img') != null || product_wrapper.querySelector('.product-swatch-dropdown .current-swatch .swatch-image img') != undefined){
                var pr_id = product_wrapper.querySelector('.product-swatch-dropdown .current-swatch .swatch-image img').getAttribute("data-src").split('/products')[1].split('_')[1]
            }else{
                var pr_id = product_wrapper.querySelector('.product-image img').getAttribute("data-src").split('/products')[1].split('_')[1]
            }
        }
    }
    
    

    //pr_id = "15396"
    if (pr_id.indexOf('-') >= 0) {
        var product_id_plp = pr_id.split('-')[2]
        if (product_id_plp == undefined) {
            var product_id_plp = pr_id.split('-')[1]
        }
    }
    // pr_id = product_id_plp
    if (product_id_plp != undefined) {
        pr_id = product_id_plp
    }
    //debugger
    var qty = "1"
    if (product_wrapper.querySelector('.product-quantity-container input') != null) {
        qty = product_wrapper.querySelector('.product-quantity-container input').value
    }
    //if (qty < 1) qty = 1;
    // var product_id_plp = 
    if (pr_id != undefined) {
        prod_id = pr_id;
        var p_href = product_wrapper.querySelector('.product-image a').href
        setTimeout(function () {
            if (old_prc != 0) {
                // prd_name, prd_img_url, product_price, old_price, pr_id
                if(qty >= 1){
                    plp_listeners(prd_name, old_prc, prd_img_url, prd_prc, qty, pr_id, p_href, prod_id,sel_v)
                }
               
            } else {
                if(qty >= 1){
                    plp_listeners(prd_name, old_prc, prd_img_url, prd_prc, qty, pr_id, p_href, prod_id,sel_v)
                }
                
            }
        }, 200)
    }
}
function pdp_listeners(prd_name, old_prc, prd_img_url, prd_prc, qty_shade) {
    setTimeout(function () {
        //if (document.querySelector('.Validation.ng-hide') != null || document.querySelector('body.Controller_Product') == null) {
            INC.config.pdpaddedProductList = []
            INC.config.pdpaddedProductList.push(INC.config.Product_id)
            var checking_popup = setInterval(function () {
                if (INC.debug) console.log("interval in progress")
            }, 0)
            var elClientAddToCartBtn = document.querySelector('.ProductDetails .Button');
            if (elClientAddToCartBtn == null) {
                elClientAddToCartBtn = document.querySelector('.product-key-actions  #btn-basket');
            }
            if (INC.dataStore.pdpProductId == "") INC.dataStore.pdpProductId = INC.methods.getProductIdFromWebPage()
            var findObj = new INC.classes.FindObj();
            findObj["id"] = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: INC.dataStore.pdpProductId }).mainId;
            findObj["sku"] = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: INC.dataStore.pdpProductId }).id;
            findObj["mainId"] = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: INC.dataStore.pdpProductId }).id;
            if (document.querySelector('.select2-choice.ui-select-match') != null && document.querySelector('.select2-choice.ui-select-match').innerText.toUpperCase() != "Select a Shade".toUpperCase()) {
                findObj["colorText"] = document.querySelector('.select2-choice.ui-select-match').innerText;
            }
            if (findObj["colorText"] == "" && document.querySelector('.Shades .Dark') != null) {
                findObj["colorText"] = document.querySelector('.Shades .Dark').innerText
            }
            if (findObj["colorText"] == "" && document.querySelector('.AV023_SelectedShadeName') != null) {
                findObj["colorText"] = document.querySelector('.AV023_SelectedShadeName').innerText
            }
            if (findObj["colorText"] == "" && document.querySelector('.SizeDropdown .select2-chosen span') != null) {
                findObj["colorText"] = document.querySelector('.SizeDropdown .select2-chosen span').innerText.trim()
            }
            var sbBlock = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarOuterBlock"));
            if (sbBlock != null) {
                sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedListBlock")).innerHTML = "";
                var addCheckCategory = INC.config.pdpaddedProductList;
                var productListArrayprod = INC.dataStore.bundleProductsArray;
                var categoryList = INC.dataStore.methods().getUniqueCatergories();
                var count=0;
                for(ct=0;ct<categoryList.length;ct++){
                    for (var ij = 0; ij < productListArrayprod.length; ij++) {
                        var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: productListArrayprod[ij] });
                        if (firstProductObjByMainId["categoryName"] == categoryList[ct]) {
                            if(addCheckCategory.indexOf(productListArrayprod[ij]) == -1){
                                count++
                            }
                        }
                    }
                    
                    if(count == 0){
                        if(document.querySelector('.inc_recommended_tabs_list_item_block[title="'+categoryList[ct]+'"]') != null){
                            var categrem = document.querySelector('.inc_recommended_tabs_list_item_block[title="'+categoryList[ct]+'"]')
                            if(categrem != null){
                                categrem.parentNode.removeChild(categrem)
                            }
                        }
                    }
                }
                // sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarHeaderItemCountFigureText")).innerText = 0;
                var qty = 1;


                // var v_qty = 0;
                // var all_qty = document.querySelectorAll('.ProductActions .ShadeSelectedDropdown .Quantity input')
                // if (all_qty.length > 0) {
                //     for (q = 0; q < all_qty.length; q++) {
                //         var sel_qty = all_qty[q].value;
                //         v_qty = v_qty + +sel_qty
                //     }
                // } else {
                //     var all_qty = document.querySelectorAll('.quantityDiv .quantity')
                //     for (q = 0; q < all_qty.length; q++) {
                //         var sel_qty = parseInt(all_qty[q].innerText);
                //         v_qty = v_qty + +sel_qty
                //     }
                // }
                // if (v_qty != 0) {
                //     qty = v_qty
                // }
                // if (all_qty.length == 0 && document.querySelector('.AddToCart .quantity span') != null) {
                //     qty = document.querySelector('.AddToCart .quantity span').innerText;
                // }
                // else if(all_qty.length == 0 && document.querySelector('.quantity-border-content') != null){
                //     qty = document.querySelector('.quantity-border-content').textContent
                // }

                // console.log("sel_v" + sel_v)
                var sel_v = "";
                if(document.querySelector('.product-swatch-container') != null || document.querySelector('.product-swatch-container') != undefined){
                    if(document.querySelector('.product-swatch-container .current-swatch') != null || document.querySelector('.product-swatch-container .current-swatch') != undefined){
                        if(document.querySelector('.product-swatch-container .current-swatch .swatch-title') != null || document.querySelector('.product-swatch-container .current-swatch .swatch-title') != undefined){
                            var sel_v = document.querySelector('.product-swatch-container .current-swatch .swatch-title').innerText.trim()
                        }
                    }
                }

                if (document.querySelector('.product-quantity-container input') != null) {
                    qty = document.querySelector('.product-quantity-container input').value
                }
                //if (elClientAddToCartBtn.parentNode.parentNode.parentNode.querySelector('div[data-test-id="selected-option"]') == null) {
                    if (findObj.sku != "" || findObj.colorText != "") {
                        INC.methods.addProductToSidebarCart(findObj, qty, null, "client_add_btn", prd_name, old_prc, prd_img_url, prd_prc, qty_shade);
                        INC.methods.showSidebar();
                    }
                    else if (findObj.colorText == "" && document.querySelector('.inc_product_module_block') != null && document.querySelector('.inc_product_module_block .inc_product_modal_block').classList.contains("simple")) {
                        findObj.sku = document.querySelector('.inc_product_module_block').getAttribute('data-sku');
                        INC.methods.addProductToSidebarCart(findObj, qty, null, "client_add_btn", prd_name, old_prc, prd_img_url, prd_prc, qty_shade);
                        INC.methods.showSidebar();
                    }
                    INC.clientConfig.offset = 0;
                    INC.clientConfig.slidevalue = 0;
                    if (document.querySelector('.inc_pdp_bundle_product_list_main_block') != null) {
                        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                    }
                    if (document.querySelector('.inc_pdp_bundle_product_left-btn_block') != null) {
                        document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                    }
                    if (document.querySelector('.inc_pdp_bundle_product_right-btn_block') != null) {
                        document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', '')
                    }
                    //console.log("inc her2")
                    //if (document.querySelector('.inc_cart_added_product_desc_att_color_text_block') != null && document.querySelector('.inc_cart_added_product_desc_att_color_text_block').innerHTML == "") {
                       //console.log("inc here")
                       if(sel_v != ""){
                        document.querySelector('.inc_cart_added_product_desc_att_color_text_block').innerHTML = sel_v + " |"
                       }else{
                        document.querySelector('.inc_cart_added_product_desc_att_color_text_block').innerHTML = sel_v
                       }
                        
                   // }
                //}
            }
       // }
    }, 300)
}

function plp_listeners(prd_name, old_prc, prd_img_url, prd_prc, qty_shade, pr_id, p_href, prod_id,sel_v) {
   // console.log(sel_v)
    //debugger
    var productId = prod_id;
    var qty = 1;
    if (INC.config.deviceType == "desktop") {
        qty = qty_shade;
    }
    if (INC.config.deviceType == "mobile") {
        qty = qty_shade;
    }
    INC.dataStore.plpProductQty = qty;

    INC.methods.clear();

    setTimeout(function () {
        INC.methods.irbReq(productId, 5, "catalog_product_view", prd_name, old_prc, prd_img_url, prd_prc, sel_v);
    }, 100);
    //if (document.querySelector('.inc_cart_added_product_desc_att_color_text_block') != null && document.querySelector('.inc_cart_added_product_desc_att_color_text_block').innerHTML == "") {
        //document.querySelector('.inc_cart_added_product_desc_att_color_text_block').innerHTML = sel_v
    //}
}
setTimeout(function () {
    if (window.innerWidth < 820) {
        window.addEventListener("orientationchange", function () {
            if (window.matchMedia("(orientation: portrait)").matches) {
                if (INC.debug) console.log("PORTRAIT")
                INC.config.deviceMode = "PORTRAIT"
                var inc_pdp_block_rem = document.querySelector(".inc_pdp_block");
                inc_pdp_block_rem.parentNode.removeChild(inc_pdp_block_rem);
                var sidebar_rem = document.querySelector(".inc_sidebar_modal_block");
                sidebar_rem.parentNode.removeChild(sidebar_rem);
                var over_rem = document.querySelector(".inc_sidebar_overlay_block");
                over_rem.parentNode.removeChild(over_rem);
                setTimeout(function () {
                    INC.init();
                }, 0)

            }
            if (window.matchMedia("(orientation: landscape)").matches) {
                if (INC.debug) console.log("LANSCAPE")
                INC.config.deviceMode = "LANSCAPE";
                var inc_pdp_block_rem = document.querySelector(".inc_pdp_block");
                inc_pdp_block_rem.parentNode.removeChild(inc_pdp_block_rem);
                var sidebar_rem = document.querySelector(".inc_sidebar_modal_block");
                sidebar_rem.parentNode.removeChild(sidebar_rem);
                var over_rem = document.querySelector(".inc_sidebar_overlay_block");
                over_rem.parentNode.removeChild(over_rem);
                setTimeout(function () {
                    INC.init();
                }, 0)
            }
        }, false);
    }
}, 2000)

function login_user() {
    if (document.querySelector('.authenticated-user a') != null) {
        if (document.querySelector('.authenticated-user a').innerText.indexOf('increasingly') >= 0) {

            return true
        }

    }
}


if (window.location.pathname == '/cart/') {
    if (sessionStorage.getItem('refreshOnCart') == 1) {
        sessionStorage.removeItem('refreshOnCart');
        setTimeout(function () {
            window.location.reload();
        }, 1000);

    }

}

function inc_isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        return true;
    } else {
        return false;
    }
}
INC.methods.formatPrice = function (input) {
    return (INC.clientConfig.currencySymbol + parseFloat(input).toFixed(2));
}
function attribute_listing(valueArray) {

    sortingArr = ["Color", "Shade", "Size"];

    items = valueArray

    sorting = ["Color", "Shade", "Size"];
    result = []

    sorting.forEach(function (key) {
        var found = false;
        items = items.filter(function (item) {
            if (!found && item.attributeCode == key) {
                result.push(item);
                found = true;
                return false;
            } else
                return true;
        })
    })
    return result;
}

function cb_tc(bundle_response) {
    var bundles_tc = bundle_response.Bundles;
    var bundleProductsArray = [];
    for (var i = 0; i < bundles_tc.length; i++) {
    if (bundles_tc[i] != undefined && INC.config.dupDataObjectProducts.indexOf(bundles_tc[i].BundleId) == -1) {
        INC.config.dupDataObjectProducts.push(bundles_tc[i].BundleId)
        var irbBundleObj = bundles_tc[i];
        var bundleObj = {};
        bundleObj.id = irbBundleObj["BundleId"];
        // if (INC.debug) console.log(bundleObj.id);
        bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
        bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
        bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
        bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
        bundleObj.productCount = irbBundleObj["ProductCount"];


        // var irbProductsArray = irbBundleObj["ProductIds"];
        // if (irbProductsArray.length) {
        //     pdpProductId = irbProductsArray[0];
        //     bundleProductsArray.push(irbProductsArray[1]);
        // }
        var irbProductsArray = irbBundleObj["ProductIds"];
        if (irbProductsArray.length) {
            if(INC.dataStore.bundleProductsArray != undefined){
                pdpProductId = irbProductsArray[0];
                INC.dataStore.bundleProductsArray.push(irbProductsArray[1]);
            }
        }
        var bundleproductarray={}
        if(bundle_response.ProductsDetail != null){
            for (var ib = 0; ib < bundle_response.ProductsDetail.length; ib++) {
                bundleproductarray[bundle_response.ProductsDetail[ib].ProductId] = bundle_response.ProductsDetail[ib]
            }
        }
        

        for (var j = 0; j < irbProductsArray.length; j++) {
            var product = bundleproductarray[irbProductsArray[j]];
            var pAttributes = product["Attributes"] || "";
            if (pAttributes != "" && pAttributes != null) {
                for (var h = 0; h < pAttributes.length; h++) {
                    if (pAttributes[h].frontEndLabel == "Shade") {
                        pAttributes[h].frontEndLabel = "Color"
                    }

                    if (pAttributes[h].attributeCode == "Size") {
                        pAttributes[h].attributeCode = "Size"
                    }
                    if (pAttributes[h].attributeCode == "color-size") {
                        pAttributes[h].attributeCode = "Size"
                    }
                    pAttributes[h].attributeCode = pAttributes[h].frontEndLabel;
                }
                pAttributes = attribute_listing(pAttributes)
            }
            var pAttObj = {};
            for (t = 0; t < pAttributes.length; t++) {
                pAttributes[t].attributeId = t
                var attr_values = pAttributes[t].attributeValues;
                for (v = 0; v < attr_values.length; v++) {
                    attr_values[v].optionId = t;
                }
            }
            for (t = 0; t < pAttributes.length; t++) {
                pAttributes[t].attributeId = t
                var attr_values = pAttributes[t].attributeValues;
                for (v = 0; v < attr_values.length; v++) {
                    attr_values[v].optionId = t;
                }
            }

            if (pAttributes.length) {
                for (var k = 0; k < pAttributes.length; k++) {
                    var pAttributesObj = pAttributes[k];
                    var pAttributesValues = pAttributesObj["attributeValues"];
                    for (var l = 0; l < pAttributesValues.length; l++) {
                        var childProduct = pAttributesValues[l];
                        if (childProduct["childProductId"] == null) {
                            childProduct["childProductId"] = product["ProductId"];
                            childProduct["childProductSku"] = product["ProductSku"];
                            childProduct["childProductName"] = (pAttributesValues[l]["childProductName"] != null) ? pAttributesValues[l]["childProductName"] : product["ProductName"];
                            childProduct["childProductImageUrl"] = product["ImageURL"];
                            // childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                            childProduct["childProductOtherImageUrl"] = [];
                            childProduct["childProductUrl"] = product["ProductUrl"];
                            childProduct["childProductPrice"] = product["Price"];
                            childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                            childProduct["childProductDescription"] = product["Description"];
                            childProduct["childInternalProductId"] = product["ProductId"]
                        }
                        childProduct["childProductName"] = (pAttributesValues[l]["childProductName"] != null) ? pAttributesValues[l]["childProductName"] : product["ProductName"];
                        childProduct["childProductImageUrl"] = product["ImageURL"];
                        // childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                        childProduct["childProductOtherImageUrl"] = [];
                        childProduct["childProductUrl"] = product["ProductUrl"];
                        childProduct["childProductPrice"] = product["Price"];
                        childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                        childProduct["ProductType"] = product["ProductType"];
                        childProduct["childCategoryName"] = product["CategoryName"];
                        childProduct["childCategoryId"] = product["CategoryId"];
                        childProduct["childProductDescription"] = product["Description"];
                        childProduct["ShortDescription"] = product["ShortDescription"];
                        childProduct["Field3"] = product["Field5"];
                        childProduct["promoMsg"] = product["PromotionalMessage"];
                        // if (childProduct["promoMsg"] == null || childProduct["promoMsg"] == "") {
                        //     childProduct["promoMsg"] = product["Field6"];
                        // }
                        childProduct["ProductLevelDiscountMessage"] = product["ProductLevelDiscountMessage"];

                        var productObj = new INC.classes.ProductAttObj(childProduct);

                        productObj["bundledProductId"] = pdpProductId;
                        productObj.mainId = product["ProductId"];
                        productObj.bundleId = bundleObj.id;
                        productObj.sku = productObj.id;
                        productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                        productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                        productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                        productObj.Field3 = product["Field5"]
                        productObj.reviewCount = product["Field5"]
                        productObj.ratingsCount = product["Field6"]
                        //productObj.Field3 = product["Field1"] + "|" + product["Field2"]
                        if (!INC.dataStore.dataStoreObj.hasOwnProperty(product['ProductId'])) {
                            INC.dataStore.dataStoreObj[product['ProductId']] = {};
                        }
                        if (!INC.dataStore.dataStoreObj[product['ProductId']].hasOwnProperty(productObj['id'])) {
                            INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']] = {}
                        }
                        pAttObj = INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']];


                        for (pAtt in productObj) {
                            if (pAtt == "option") {
                                if (!pAttObj.hasOwnProperty('option')) {
                                    pAttObj["option"] = {}
                                }

                                Object.keys(productObj[pAtt]).forEach(function (key) {
                                    pAttObj[pAtt][key] = productObj[pAtt][key];
                                });
                                // }
                            } else {
                                pAttObj[pAtt] = productObj[pAtt];
                            }
                        }
                    }
                }
            }

            if (pAttributes.length == 0) {
                var productObj = new INC.classes.ProductObj(product);
                productObj["bundleId"] = irbBundleObj["BundleId"];
                productObj["bundledProductId"] = pdpProductId;
                productObj.sku = productObj.sku;
                productObj.Field3 = product["Field5"];
                productObj.reviewCount = product["Field5"]
                productObj.ratingsCount = product["Field6"]
                if (!INC.dataStore.dataStoreObj.hasOwnProperty(productObj['mainId'])) {
                    INC.dataStore.dataStoreObj[productObj['mainId']] = {};
                }

                INC.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = {};
                if (!!window.MSInputMethodContext && !!document.documentMode) {
                    INC.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                } else {
                    INC.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                }
            }
        }
    }
}
    setTimeout(function () {
        INC.methods.createPDPBlock("sidebar")
    }, 100)

}


var _isVisible = {
    viewport: {},
    _index: 0,
    _imgs: null,
    _active: false,
    _init: function (data) {
        this.viewport.top = window.pageYOffset;
        this.viewport.bottom = this.viewport.top + window.innerHeight;
        this._imgs = document.querySelectorAll(data.classSelector);
        this._index = data.index;
        this._active = true;
        this.getImages();
    },
    checkVisibility: function (elm) {
        if (typeof (elm) == "undefined")
            return;
        var bounds = {};
        bounds.top = elm.getBoundingClientRect().top + window.pageYOffset;
        bounds.bottom = bounds.top + elm.clientHeight;
        return (bounds.bottom >= this.viewport.top && bounds.bottom <= this.viewport.bottom) || (bounds.top <= this.viewport.bottom && bounds.top >= this.viewport.top);
    },
    getImages: function () {
        (function (elm) {
            var imgLoader = window.setInterval(function () {
                if (elm.checkVisibility(elm._imgs[elm._index])) {
                    switch (elm._imgs[elm._index].tagName) {
                        case "IMG":
                            if (!(elm._imgs[elm._index].src.indexOf("img_placeholder") == -1)) {
                                elm._imgs[elm._index].src = elm._imgs[elm._index].getAttribute('data-src');
                            }
                            break;
                        case "SOURCE":
                            //https://gzinc.increasingly.co/Implementation/tA7T9/images/img_placeholder.gif
                            //if (!(elm._imgs[elm._index].srcset.indexOf("https") > -1)) {
                            if (!(elm._imgs[elm._index].srcset.indexOf("img_placeholder") == -1)) {
                                elm._imgs[elm._index].srcset = elm._imgs[elm._index].getAttribute('data-srcset');
                            }
                            break;
                    }
                }
                elm._index++;
            }, 10);
        }
        )(this);
    }
}
window.addEventListener('scroll', function () {
    _isVisible._init({
        classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src], .inc_af_block img[data-src], .inc_af_block source[data-src]",
        index: 0
    }, { passive: true });
});
window.addEventListener('mousemove', function () {
    _isVisible._init({
        classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src], .inc_af_block img[data-src], .inc_af_block source[data-src]",
        index: 0
    });
}, { passive: true });
document.addEventListener('DOMContentLoaded', function () {
    _isVisible._init({
        classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src], .inc_af_block img[data-src], .inc_af_block source[data-src]",
        index: 0
    });
}, { passive: true });


function inc_onchange_variant(elattrblock){
    
    if(elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true){
        var elmainblock=elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    }else{
        var elmainblock=elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    }
    if(elmainblock.querySelector('.inc_product_modal_block.inc_active') == null){
        var sel_varel = elmainblock.querySelector('.inc_product_modal_block')
    }else{
        var sel_varel = elmainblock.querySelector('.inc_product_showcase_block')
    }
    var elAttBlock = elattrblock.parentNode.parentNode
    var productBlock = elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode
    
    var elAtt0TitleText = elAttBlock.querySelector('.inc_product_desc_att_zero_title_text')
    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
    var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
    
    if(productBlock.querySelector('.close_read_more') != null){
        productBlock.querySelector('.close_read_more').click()
    }
    var attr_text = elattrblock.options[elattrblock.selectedIndex].getAttribute("datasize");
    var attr_text_small = elattrblock.options[elattrblock.selectedIndex].getAttribute("datasize");

    
    // if(elmainblock != null && elmainblock.querySelector('.inc_product_desc_add_text') != null && elmainblock.querySelector('.inc_product_desc_add_text').innerText.toUpperCase().trim() == INC.bundleVars.added.toUpperCase().trim()){
    if(attr_text != "" && attr_text != null){
        if(elAttBlock.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="'+attr_text_small+'"]') != null){
            elAttBlock.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="'+attr_text_small+'"]').click()
        }
        if(sel_varel != null){
            var sel_variant = sel_varel.querySelector('.inc_variant_tag')
            if(sel_variant != null){
                var alloptionss = sel_variant.querySelectorAll('option')
                for(j=0;j<alloptionss.length;j++){
                    if(alloptionss[j].getAttribute('datasize') == attr_text_small.toLocaleLowerCase()){
                        alloptionss[j].selected = 'selected'
                        break;
                    }
                }
            }
        }
    }
    // }
}