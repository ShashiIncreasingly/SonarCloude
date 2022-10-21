/* eslint-disable no-mixed-spaces-and-tabs */
(function () {
    "use strict";
    function addCSSFile() {
        var cssFilePath =
            "https://www.increasingly.co/Clients/ukMedi/css/Ukm4Di.css";
        var linkTag = document.createElement("link");
        linkTag.rel = "stylesheet";
        linkTag.href = cssFilePath;
        document.querySelector("head").appendChild(linkTag);
    }
    addCSSFile();
    var pdp_html =
        '<div class="inc_pdp_title_block"><div class="inc_pdp_title_text_block"><div class="inc_pdp_title_text">Frequently Bought Together</div></div></div><div class="inc_pdp_bundle_block"><div class="inc_pdp_product-main_block"></div><div class="inc_pdp_icon-add_block"><div class="inc_pdp_icon-add_img_block"><div class="inc_pdp_icon-add_img"></div></div></div><div class="inc_pdp_bundle_product_block"><div class="inc_pdp_bundle_product_header_block"><div class="inc_pdp_bundle_product_header_text">Frequently Bought with</div></div><div class="inc_pdp_bundle_product_left-btn_block"><div class="inc_pdp_bundle_product_left-btn_img_block"><div class="inc_pdp_bundle_product_left-btn_img" title="Scroll left"></div></div></div><div class="inc_pdp_bundle_product_list_block"><div class="inc_pdp_bundle_product_list_main_block"></div><div class="inc_pdp_bundle_product_list_left_block"><div class="inc_pdp_bundle_product_list_left_btn_block"><div class="inc_pdp_bundle_product_list_left_btn_img_block"><div class="inc_pdp_bundle_product_list_left_btn_img"></div></div></div></div><div class="inc_pdp_bundle_product_list_items_show_more_less_block"><div class="inc_pdp_bundle_product_list_items_show_more_less_text down_wrrow">Show more products</div></div><div class="inc_pdp_bundle_product_list_wrapper_items_block"><div class="inc_pdp_bundle_product_list_wrapper_header_block"><div class="inc_pdp_bundle_product_list_wrapper_header_text_block"></div><div class="inc_pdp_bundle_product_list_wrapper_header_close_block"></div></div><div class="inc_pdp_bundle_product_list_items_block"></div></div><div class="inc_pdp_bundle_product_list_right_block"><div class="inc_pdp_bundle_product_list_right_btn_block"><div class="inc_pdp_bundle_product_list_right_btn_img_block"><div class="inc_pdp_bundle_product_list_right_btn_img"></div></div></div></div></div><div class="inc_pdp_bundle_product_right-btn_block"><div class="inc_pdp_bundle_product_right-btn_img_block"><div class="inc_pdp_bundle_product_right-btn_img" title="Scroll right"></div></div></div></div><div class="inc_pdp_bundle_cart_overlay_block"></div><div class="inc_pdp_bundle_cart_block"><div class="inc_pdp_bundle_cart_title_block"><div class="inc_pdp_bundle_cart_title_text_block"><div class="inc_pdp_bundle_cart_title_text">Price Summary</div></div></div><div class="inc_pdp_bundle-cart_ecirp_block"><div class="inc_pdp_bundle-cart_ecirp_main"><div class="inc_pdp_bundle-cart_ecirp_main_title_block"><div class="inc_pdp_bundle-cart_ecirp_main_title_text_block"><div class="inc_pdp_bundle-cart_ecirp_main_title_text">Main Product Price </div></div></div><div class="inc_pdp_bundle-cart_ecirp_main_figure_block"><div class="inc_pdp_bundle-cart_ecirp_main_figure_text_block"><div class="inc_pdp_bundle-cart_ecirp_main_figure_text">£00.00</div></div></div></div><div class="inc_pdp_bundle-cart_ecirp_addon_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_text_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_text">Add-on(s) Selected </div></div></div><div class="inc_pdp_bundle-cart_ecirp_addon_figure_block"><div class="inc_pdp_bundle-cart_ecirp_addon_figure_text_block"><div class="inc_pdp_bundle-cart_ecirp_addon_figure_text">£0.00</div></div></div></div></div><div class="inc_pdp_bundle_cart_added_block"></div><div class="inc_pdp_bundle_cart_summary_block"><div class="inc_pdp_bundle_cart_summary_title_block"><div class="inc_pdp_bundle_cart_summary_title_text_block"><div class="inc_pdp_bundle_cart_summary_count_text"></div><div class="inc_pdp_bundle_cart_summary_title_text">Total Bundle Price</div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text">£60.00</div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_save_block"><div class="inc_pdp_bundle_cart_summary_ecirp_save_text"></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_regular_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text"></div></div></div></div><div class="inc_pdp_bundle_cart_summary_view_block"><div class="inc_pdp_bundle_cart_summary_view_btn_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img"></div></div><div class="inc_pdp_bundle_cart_summary_view_btn_text_block"><div class="inc_pdp_bundle_cart_summary_view_btn_text">Added items</div></div><div class="inc_pdp_bundle_cart_summary_view_btn_count_block"><div class="inc_pdp_bundle_cart_summary_view_btn_count"></div></div></div></div><div class="inc_pdp_bundle_cart_summary_add_block"><div class="inc_pdp_bundle_cart_summary_add_btn_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text">Add To Cart</div><div class="inc_pdp_bundle_cart_summary_add_btn_span"></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_img_block"><div class="inc_pdp_bundle_cart_summary_add_btn_img"></div></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_collection_block" style="pointer-events: auto;opacity: 1;"><div class="inc_pdp_bundle_cart_summary_add_btn_collection_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_collection_text" style="text-transform: none;"></div></div></div></div></div></div></div>';
    var sidebar_html =
        '<span class="close_modal_inc"></span><div class="inc_sidebar_modal_block"><div class="inc_sidebar_modal_cart_and_title_block"><div class="inc_header_title_block"><div class="inc_header_title_text_block"><div class="inc_header_title_text">Just added To Your Cart</div></div></div><div class="inc_sidebar_cart_added_block"><div class="inc_cart_added_list_block"></div><div class="inc_cart_product_count_block"></div></div><div class="inc_sidebar_header_block"><div class="inc_header_continue_block"><div class="inc_header_continue_img_block"><div class="inc_header_continue_img"></div></div><div class="inc_header_continue_text_block"><div class="inc_header_continue_text">Back</div></div></div><div class="inc_header_item_block"><div class="inc_header_item_count_block"><div class="inc_header_item_count_title_block"><div class="inc_header_item_count_title_text_block"><div class="inc_header_item_count_title_text">Subtotal (0 item)</div></div></div><div class="inc_header_item_count_figure_block"><div class="inc_header_item_count_figure_text_block"><div class="inc_header_item_count_figure_text"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_text" subtotalactiveprice="0.00">£0.00</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text" subtotalregularprice="0.00"></div></div></div><div class="inc_just_added_save_pr"></div></div></div></div></div></div><div class="inc_sidebar_checkout_block"><div class="inc_checkout_continue_block"><div class="inc_checkout_continue_btn_block"><div class="inc_checkout_continue_btn_img_block"><div class="inc_checkout_continue_btn_img"></div></div><div class="inc_checkout_continue_btn_text_block"><div class="inc_checkout_continue_btn_text">Proceed to checkout</div><div class="inc_checkout_continue_btn_span"></div></div></div></div><div class="inc_checkout_basket_block"><div class="inc_checkout_basket_btn_block"><div class="inc_checkout_basket_btn_img_block"><div class="inc_checkout_basket_btn_img"></div></div><div class="inc_checkout_basket_btn_text_block"><div class="inc_checkout_basket_btn_span"></div><div class="inc_checkout_basket_btn_text"><a class="view_basket_checkout"><div draggable="false">View or edit your cart</div></a></div></div></div></div></div><div class="inc_sidebar_recommended_block"><div class="inc_recommended_title_block"><div class="inc_recommended_title_text_block"><div class="inc_recommended_title_text">Customers Also Bought</div></div></div><div class="inc_recommended_tabs_block"><div class="inc_recommended_tabs_list_block" tabindex="0"></div></div><div class="inc_recommended_products_block"><div class="inc_recommended_products_left_block"><div class="inc_recommended_products_left_btn_block"><div class="inc_recommended_products_left_btn_img_block"><div class="inc_recommended_products_left_btn_img" title="Scroll left"></div></div></div></div><div class="inc_recommended_products_list_main_block"><div class="inc_recommended_products_list_block"></div></div><div class="inc_recommended_products_item_thumb_block"><div class="inc_recommended_products_list_item_thumb_block"></div></div><div class="inc_recommended_products_right_block"><div class="inc_recommeded_products_right_btn_block"><div class="inc_recommended_products_right_btn_img_block"><div class="inc_recommended_products_right_btn_img" title="Scroll right"></div></div></div></div></div></div></div>';

    var cart_html =
        '<div class="inc_af_title_block" style="clear: both;"><div class="inc_af_title_text_block"><div class="inc_af_title_text"></div><div class="inc_af_modal_close"></div></div></div><div class="inc_af_bundles_block"><div class="inc_af_left_block"><div class="inc_af_left_btn_block"><div class="inc_af_left_btn_img_block"><div class="inc_af_left_btn_img"></div></div></div></div><div class="inc_af_product-list-main_block"><div class="inc_af_product-list_block"></div></div><div class="inc_af_right_block"><div class="inc_af_right_btn_block"><div class="inc_af_right_btn_img_block"><div class="inc_af_right_btn_img"></div></div></div></div></div>';
    var showcase_productcard =
        '<div class="inc_product_block"><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_header_main_rating_block"></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text"></div></div></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_extension_block"></div><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block"></div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">£0.00 - -£0.00</div><div class="inc_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div></div><div class="pc_promo_div"></div><div class="inc_product_desc_ratings_block"></div><div class="inc_variant_error_text"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text"><span>Add To Cart</span></div></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected"></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected"></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected"></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected"></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected"></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block "><label>qty</label><div class="inc_product_qty_block singleqty"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"><span class="inc_add_text"></span></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text">Add To Cart</div></div></div><div class="inc_product_add_collection_block"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">Add To Cart</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>';

    var modal_productcard =
        '<div class="inc_product_block "><div class="inc_product_extension_block"></div><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_header_main_rating_block"><div class="inc_product_desc_ratings_block"></div><span class="product_modal_sku">#</span></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text">Overview</div></div></div><div class="inc_product_header_title_block_1"><div class="inc_product_header_title_text_block_1"><div class="inc_product_header_title_text_1">Description</div></div></div><div class="inc_product_header_new_page"><a class="inc_product_header_new_page_text" href="">Open in a new tab</a></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"><div class="inc_video_container empty"><video id="incVideoPlayer" class="inc_vim_video"  autoplay muted="" playsinline=""><source src="" type="video/mp4"></video></div></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block" title="Scroll left"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block" title="Scroll right"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="inc_product_desc_size_guide_block"></div><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block"></div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">£0.00 - -£0.00</div><div class="inc_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text"><span></span></div></div><div class="pc_promo_div"></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected"></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected"></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected"></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected"></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected"></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block"><div class="inc_qty_header">Quantity:</div><div class="inc_product_qty_block singleqty"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text"></div></div></div><div class="inc_product_add_collection_block"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">Add To Cart</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>';
    var INC = {};
    INC.bundles = true;
    INC.ENV = "prod";
    INC.debug = 0;
    INC.initStatus = "";
    INC.initStatusCP = "";
    var onloadpdp = false;
    var crypto = window.crypto || window.msCrypto;

    function generateRandomString(bits1) {
        return (
            (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295)
                .toString(bits1)
                .substring(2, 15) +
            (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295)
                .toString(bits1)
                .substring(2, 15)
        );
    }
    var recsUrl = [];
    var trueflag = true;
    var falseflag = false;
    var mismatch = falseflag;
    var oosStatus = falseflag;
    var onloadpdp_delete = false;
    var incallowedKeys = [46, 8, 9, 27, 110, 190];
    var inc_scroll_height = 100;
    INC.clientConfig = {};
    INC.clientConfig.statusVAT = "";
    INC.clientConfig.offset = 0;
    INC.clientConfig.offset_rec = 0;
    INC.clientConfig.slidevalue = 0;
    INC.clientConfig.slidevalue_rec = 0;
    INC.config = {};
    INC.config.deviceType = "";
    INC.config.clientToken = "u7M36i7";
    INC.config.trackingURL = "https://optimizedby.increasingly.co/ImportData";
    INC.config.addToBasketURL = " https://ukmedi.co.uk/remote/v1/cart/add";
    INC.clientConfig.checkoutLink = "https://ukmedi.co.uk/cart.php";
    INC.config.affiliateURL = "";
    INC.config.pageType = "";
    INC.config.ivid = "";
    INC.config.pdpaddedProductList = [];
    INC.config.inc_slideIndex = 1;
    INC.config.bundle_tracking = [];
    INC.config.Product_id = null;
    INC.config.dupBasket = [];
    INC.config.dupDataObjectProducts = [];
    INC.clientConfig.OOS = [];
    INC.config.disablebtn = true;
    INC.config.sidebarremovedprod = [];
    INC.config.cartproductids = [];
    INC.config.bundle_skuPushed = [];
    INC.config.recommendationProduct = [];
    INC.config.FBTTitle = "Frequently Bought Together";
    INC.config.AddedText = "Added";
    INC.config.BeforeYouChecktext = "Customers Also Bought";
    INC.config.ajaxerr =
        "I'm sorry we've experienced an error. Please try again.";
    INC.config.UpdateText = "UPDATE";
    INC.config.sidebarFirstLoad = false;
    // UPDATE ON PRODUCTION
    INC.config.noimage =
        "https://www.increasingly.co/Clients/ukMedi/images/no-image.png";
    // ------------------------
    INC.config.recommendation = false;
    INC.config.bundledid = [];
    INC.config.cldomain = "";
    INC.config.checkoutpath = "/cart";
    INC.config.fabrictext = "Select Fabric";
    INC.config.styleft = "left:0 !important;position: relative;";
    INC.config.ctl_names = [];
    INC.config.ctl_img_srcs = [];
    INC.config.ctl_prices = [];
    INC.config.qtyscross = [];
    INC.config.datastoreprod = [];
    INC.config.ddFlag = false;
    INC.config.catFlag = [];
    var fabricprod = [];
    var addedProductIndex = [];
    INC.config.singleProd = false;
    INC.config.VariantProduct = false;
    INC.checkProdUserCookie = function () {
        setTimeout(function () {
            if (getCountry()) {
                INC.init();
            }
        }, 500);
    };
    INC.checkProdUserCookie();

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var s in ca) {
            if (Object.prototype.hasOwnProperty.call(ca, s)) {
                var c = ca[s];
                while (c.charAt(0) == " ") {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEQ) == 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
        }
        return null;
    }

    function generate_html_tag(element, className) {
        var generateEl = document.createElement(element);
        if (className != undefined) {
            generateEl.classList.add(className);
        }
        return generateEl;
    }
    var formatter = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
    });

    function getCountry() {
        let country = true;
        try {
            if (
                document
                    .querySelector(
                        ".gep-switcher-flag.gep-switcher-flag-desktop"
                    )
                    .style.backgroundImage.slice(4, -1)
                    .replace(/"/g, "")
                    .split("/flags/")[1] == "gb.png"
            ) {
                country = true;
            } else {
                country = false;
            }
        } catch (error) {
            country = true;
        }
        return country;
    }

    INC.init = function () {
        INC.config.datastoreprod = [];
        INC.config.dupDataObjectProducts = [];
        INC.methods.addVisitorID();
        INC.config.pageType = INC.methods.detectPageType();
        INC.methods.clear();
        INC.config.deviceType = window.innerWidth <= 768 ? "mobile" : "desktop";
        if (
            document
                .querySelector(".navPages .navPages-action")
                .getAttribute("aria-label") != "GBP"
        ) {
            return;
        }
        switch (INC.config.pageType) {
            case "pdp":
                var productId = INC.methods.getProductIdFromWebPage();
                var clientATC = document.querySelector(
                    ".button.klaviyo-bis-trigger"
                );
                if (clientATC != null) {
                    if (!INC.config.VariantProduct) {
                        oosStatus = true;
                        oosproduct(productId);
                    }
                } else {
                    oosStatus = false;
                }
                INC.methods.irbReq(productId, 5, "catalog_product_view");
                break;
            case "cartPage":
                if (cartpageprodids().length > 0) {
                    setTimeout(() => {
                        INC.methods.irbReq(
                            INC.config.cartproductids,
                            12,
                            "checkout_cart_index"
                        );
                    }, 1000);
                }
                break;
            case "productList":
                break;
        }
    };

    function cartpageprodids() {
        INC.config.cartproductids = [];
        var cartPro = document.querySelectorAll(
            '.cart-item .cart-item-block a[href="#"]'
        );
        for (var c of cartPro) {
            if (
                c.getAttribute("data-product-id") != null &&
                c.getAttribute("data-product-id") != undefined
            ) {
                INC.config.cartproductids.push(
                    c.getAttribute("data-product-id")
                );
            }
        }

        return INC.config.cartproductids;
    }
    INC.dataStore = {};
    INC.dataStore.methods = function () {
        var incDataStore = INC.dataStore;

        function buildDataStoreObj(bundleResponse) {
            INC.config.dupDataObjectProducts = [];
            INC.dataStore.clientProductDealsCategory = "";
            var bundles = [];
            if (INC.config.recommendation == trueflag) {
                bundles = bundleResponse.CategoryRecommendations;
            } else {
                bundles = bundleResponse.Bundles;
            }
            if (bundleResponse.ProductDeals != null) {
                bundleResponse.ProductDeals.forEach(function (productDealObj) {
                    bundles.push({
                        BundleId: bundles[0]["BundleId"],
                        Products: [bundles[0].Products[0], productDealObj],
                    });

                    INC.dataStore.clientProductDealsCategory =
                        productDealObj.CategoryId;
                });
            }
            var dataStoreObj = {};
            var bundleproductarray = {};
            var bundleProductsArray = [];
            if (bundleResponse.ProductsDetail != null) {
                for (var pr in bundleResponse.ProductsDetail) {
                    if (
                        Object.prototype.hasOwnProperty.call(
                            bundleResponse.ProductsDetail,
                            pr
                        )
                    ) {
                        bundleproductarray[
                            bundleResponse.ProductsDetail[pr].ProductId
                        ] = bundleResponse.ProductsDetail[pr];
                    }
                }
            } else if (bundleResponse.CategoryRecommendations != null) {
                for (var ct in bundleResponse.CategoryRecommendations) {
                    if (
                        Object.prototype.hasOwnProperty.call(
                            bundleResponse.CategoryRecommendations,
                            ct
                        )
                    ) {
                        bundleproductarray[
                            bundleResponse.CategoryRecommendations[ct].ProductId
                        ] = bundleResponse.CategoryRecommendations[ct];
                    }
                }
            }

            var pdpProductId = "";
            for (var i in bundles) {
                if (Object.prototype.hasOwnProperty.call(bundles, i)) {
                    if (
                        INC.config.dupDataObjectProducts.indexOf(
                            bundles[i].BundleId
                        ) == -1
                    ) {
                        if (INC.config.recommendation == falseflag) {
                            INC.config.dupDataObjectProducts.push(
                                bundles[i].BundleId
                            );
                        }
                        INC.config.bundledid.push({
                            bundleids: bundles[i].BundleId,
                            productids: bundles[i].ProductIds,
                        });
                        var irbBundleObj = bundles[i];
                        var bundleObj = {};
                        if (INC.config.recommendation == falseflag) {
                            bundleObj.id = irbBundleObj["BundleId"];
                        }
                        if (INC.config.recommendation == falseflag) {
                            bundleObj.id = irbBundleObj["BundleId"];
                            bundleObj.totalRegularPrice =
                                irbBundleObj["TotalPrice"];
                            bundleObj.totalActivePrice =
                                irbBundleObj["TotalSpecialPrice"];
                            bundleObj.totalBundlePrice =
                                irbBundleObj["TotalBundlePrice"];
                            bundleObj.totalBundleDiscountPrice =
                                irbBundleObj["DiscountPrice"];
                            bundleObj.productCount =
                                irbBundleObj["ProductCount"];
                        }
                        var irbProductsArray = "";
                        if (INC.config.recommendation == trueflag) {
                            irbProductsArray = bundles;
                        } else {
                            irbProductsArray = irbBundleObj["ProductIds"];
                        }

                        if (INC.config.recommendation == falseflag) {
                            if (irbProductsArray) {
                                if (
                                    window.location.pathname ==
                                        INC.config.checkoutpath ||
                                    INC.config.recommendation
                                ) {
                                    if (
                                        INC.config.cartproductids.indexOf(
                                            irbProductsArray[0]
                                        ) >= 0
                                    ) {
                                        pdpProductId = irbProductsArray[0];
                                        bundleProductsArray.push(
                                            irbProductsArray[1]
                                        );
                                    } else if (
                                        INC.config.cartproductids.indexOf(
                                            irbProductsArray[1]
                                        ) >= 0
                                    ) {
                                        pdpProductId = irbProductsArray[1];
                                        bundleProductsArray.push(
                                            irbProductsArray[0]
                                        );
                                    }
                                } else {
                                    pdpProductId = irbProductsArray[0];
                                    bundleProductsArray.push(
                                        irbProductsArray[1]
                                    );
                                }
                            }
                        }

                        if (INC.config.recommendation == trueflag) {
                            bundleProductsArray.push(bundles[i]["ProductId"]);
                        }

                        for (var ir in irbProductsArray) {
                            if (
                                Object.prototype.hasOwnProperty.call(
                                    irbProductsArray,
                                    ir
                                )
                            ) {
                                var product =
                                    bundleproductarray[irbProductsArray[ir]] ||
                                    irbProductsArray[ir];

                                if (
                                    INC.config.datastoreprod.indexOf(
                                        product.ProductId
                                    ) == -1
                                ) {
                                    INC.config.datastoreprod.push(
                                        product.ProductId
                                    );
                                    if (INC.config.recommendation == trueflag) {
                                        INC.config.recommendationProduct.push(
                                            product.ProductId
                                        );
                                    }
                                    var pAttributes =
                                        product["Attributes"] || "";
                                    if (
                                        pAttributes != "" &&
                                        pAttributes != null
                                    ) {
                                        for (var p of pAttributes) {
                                            if (p.attributeCode == "color") {
                                                p.attributeCode = "Color";
                                            }
                                            if (p.attributeCode == "COLOUR") {
                                                p.attributeCode = "Color";
                                            }
                                            if (p.attributeCode == "SIZE") {
                                                p.attributeCode = "Size";
                                            }
                                            if (p.attributeCode == "size") {
                                                p.attributeCode = "Size";
                                            }
                                            if (p.attributeCode == "QTY") {
                                                p.attributeCode = "Size";
                                            }
                                            if (
                                                p.attributeCode == "CALIBRE" ||
                                                p.attributeCode == "RETICULE" ||
                                                p.attributeCode == "CALF"
                                            ) {
                                                p.attributeCode = "Size_";
                                            }
                                            if (pAttributes.length == 1) {
                                                if (
                                                    p.attributeCode ==
                                                        "color" ||
                                                    p.attributeCode ==
                                                        "Color" ||
                                                    p.attributeCode == "COLOUR"
                                                ) {
                                                    p.attributeCode = "Color";
                                                } else {
                                                    p.attributeCode = "Size";
                                                }
                                            }
                                        }
                                        pAttributes =
                                            attribute_listing(pAttributes);
                                    }
                                    var pAttObj = {};
                                    var attr_values = "";
                                    var c_t = 0;
                                    for (var t of pAttributes) {
                                        if (
                                            t.attributeId != null &&
                                            t.attributeId != undefined
                                        ) {
                                            product["Attributes"][
                                                product["Attributes"].indexOf(t)
                                            ]["attrId"] =
                                                product["Attributes"][
                                                    product[
                                                        "Attributes"
                                                    ].indexOf(t)
                                                ].attributeId;
                                        }
                                        if (pAttributes.length == 1) {
                                            if (
                                                pAttributes[0].attributeCode ==
                                                    "Color" ||
                                                pAttributes[0].attributeCode ==
                                                    "color"
                                            ) {
                                                // pAttributes[0].attributeId = 0;
                                                pAttributes[0].attributeIdAd = 0;
                                                attr_values = t.attributeValues;
                                                for (var v of attr_values) {
                                                    v["opId"] = v.optionId;
                                                    v.optionId = 0;
                                                }
                                            } else {
                                                // pAttributes[0].attributeId = 1;
                                                pAttributes[0].attributeIdAd = 1;
                                                attr_values = t.attributeValues;
                                                for (var vb of attr_values) {
                                                    vb["opId"] = vb.optionId;
                                                    vb.optionId = 1;
                                                }
                                            }
                                        } else {
                                            if (pAttributes[1] != undefined) {
                                                if (
                                                    pAttributes[0]
                                                        .attributeCode !=
                                                        "Color" &&
                                                    pAttributes[1]
                                                        .attributeCode !=
                                                        "Color"
                                                ) {
                                                    if (c_t == 0) {
                                                        c_t++;
                                                    }
                                                }
                                            }
                                            t.attributeIdAd = c_t;
                                            attr_values = t.attributeValues;
                                            for (var va of attr_values) {
                                                va["opId"] = va.optionId;
                                                va.optionId = c_t;
                                            }
                                        }
                                        c_t++;
                                    }
                                    var productObj = "";
                                    if (pAttributes.length) {
                                        for (var pattv in pAttributes) {
                                            if (
                                                Object.prototype.hasOwnProperty.call(
                                                    pAttributes,
                                                    pattv
                                                )
                                            ) {
                                                var pAttributesObj =
                                                    pAttributes[pattv];
                                                var pAttributesValues =
                                                    pAttributesObj[
                                                        "attributeValues"
                                                    ];
                                                for (var ptr in pAttributesValues) {
                                                    if (
                                                        Object.prototype.hasOwnProperty.call(
                                                            pAttributesValues,
                                                            ptr
                                                        )
                                                    ) {
                                                        var childProduct =
                                                            pAttributesValues[
                                                                ptr
                                                            ];
                                                        if (
                                                            childProduct[
                                                                "childProductId"
                                                            ] == null
                                                        ) {
                                                            childProduct[
                                                                "childProductId"
                                                            ] =
                                                                product[
                                                                    "ProductId"
                                                                ];
                                                            childProduct[
                                                                "childProductSku"
                                                            ] =
                                                                product[
                                                                    "ProductSku"
                                                                ];
                                                            childProduct[
                                                                "childProductName"
                                                            ] =
                                                                product[
                                                                    "ProductName"
                                                                ];
                                                            childProduct[
                                                                "childProductImageUrl"
                                                            ] =
                                                                product[
                                                                    "ImageURL"
                                                                ];
                                                            childProduct[
                                                                "childProductOtherImageUrl"
                                                            ] =
                                                                product[
                                                                    "OtherImageList"
                                                                ];
                                                            childProduct[
                                                                "childProductUrl"
                                                            ] =
                                                                product[
                                                                    "ProductUrl"
                                                                ];
                                                            childProduct[
                                                                "childProductPrice"
                                                            ] =
                                                                product[
                                                                    "Price"
                                                                ];
                                                            childProduct[
                                                                "childProductSpecialPrice"
                                                            ] =
                                                                product[
                                                                    "SpecialPrice"
                                                                ];
                                                            childProduct[
                                                                "childProductDescription"
                                                            ] =
                                                                product[
                                                                    "Description"
                                                                ];
                                                            childProduct[
                                                                "childInternalProductId"
                                                            ] =
                                                                product[
                                                                    "ProductId"
                                                                ];
                                                        }
                                                        if (
                                                            product[
                                                                "ProductType"
                                                            ]
                                                        )
                                                            childProduct[
                                                                "ProductType"
                                                            ] =
                                                                product[
                                                                    "ProductType"
                                                                ];
                                                        childProduct[
                                                            "mainSKU"
                                                        ] =
                                                            product[
                                                                "ProductSku"
                                                            ];
                                                        childProduct[
                                                            "childProductIdmain"
                                                        ] =
                                                            product[
                                                                "ProductId"
                                                            ];
                                                        childProduct[
                                                            "childProductImageUrlMain"
                                                        ] = product["ImageURL"];
                                                        childProduct[
                                                            "childProductPriceMain"
                                                        ] = product["Price"];
                                                        childProduct[
                                                            "childProductSpecialPriceMain"
                                                        ] =
                                                            product[
                                                                "SpecialPrice"
                                                            ];

                                                        childProduct[
                                                            "PromotionalMessage"
                                                        ] =
                                                            product[
                                                                "PromotionalMessage"
                                                            ];
                                                        childProduct[
                                                            "childProductNameMain"
                                                        ] =
                                                            product[
                                                                "ProductName"
                                                            ];
                                                        childProduct[
                                                            "childProductUrlMain"
                                                        ] =
                                                            product[
                                                                "ProductUrl"
                                                            ];
                                                        childProduct[
                                                            "childreviewsCount"
                                                        ] =
                                                            product[
                                                                "RatingCount"
                                                            ];
                                                        childProduct[
                                                            "childRating"
                                                        ] = product["Rating"];
                                                        childProduct[
                                                            "childCategoryName"
                                                        ] =
                                                            product[
                                                                "CategoryName"
                                                            ];
                                                        childProduct[
                                                            "childCategoryId"
                                                        ] =
                                                            product[
                                                                "CategoryId"
                                                            ];
                                                        childProduct[
                                                            "childProductDescription"
                                                        ] =
                                                            product[
                                                                "Description"
                                                            ];
                                                        childProduct[
                                                            "Manufacturer"
                                                        ] =
                                                            product[
                                                                "Manufacturer"
                                                            ];

                                                        productObj =
                                                            new INC.classes.ProductAttObj(
                                                                childProduct
                                                            );

                                                        productObj[
                                                            "bundledProductId"
                                                        ] = pdpProductId;
                                                        productObj.mainId =
                                                            product[
                                                                "ProductId"
                                                            ];
                                                        productObj.bundleId =
                                                            bundleObj.id;
                                                        productObj.sku =
                                                            productObj.id;
                                                        productObj.shortDescription =
                                                            product[
                                                                "ShortDescription"
                                                            ];
                                                        productObj.option[
                                                            pAttributesObj[
                                                                "attributeIdAd"
                                                            ]
                                                        ].id =
                                                            pAttributesObj[
                                                                "attributeId"
                                                            ];
                                                        productObj["attrId"] =
                                                            pAttributesObj[
                                                                "attrId"
                                                            ];
                                                        productObj.option[
                                                            pAttributesObj[
                                                                "attributeIdAd"
                                                            ]
                                                        ].label =
                                                            pAttributesObj[
                                                                "frontEndLabel"
                                                            ];
                                                        productObj.option[
                                                            pAttributesObj[
                                                                "attributeIdAd"
                                                            ]
                                                        ].code =
                                                            pAttributesObj[
                                                                "attributeCode"
                                                            ];
                                                        productObj.option[
                                                            pAttributesObj[
                                                                "attributeIdAd"
                                                            ]
                                                        ].att_id =
                                                            pAttributesObj.attributeId;
                                                        if (
                                                            !Object.prototype.hasOwnProperty.call(
                                                                dataStoreObj,
                                                                product[
                                                                    "ProductId"
                                                                ]
                                                            )
                                                        ) {
                                                            dataStoreObj[
                                                                product[
                                                                    "ProductId"
                                                                ]
                                                            ] = {};
                                                        }
                                                        if (
                                                            !Object.prototype.hasOwnProperty.call(
                                                                dataStoreObj[
                                                                    product[
                                                                        "ProductId"
                                                                    ]
                                                                ],
                                                                productObj["id"]
                                                            )
                                                        ) {
                                                            dataStoreObj[
                                                                product[
                                                                    "ProductId"
                                                                ]
                                                            ][
                                                                productObj["id"]
                                                            ] = {};
                                                        }
                                                        pAttObj =
                                                            dataStoreObj[
                                                                product[
                                                                    "ProductId"
                                                                ]
                                                            ][productObj["id"]];
                                                        for (var pAtt in productObj) {
                                                            if (
                                                                Object.prototype.hasOwnProperty.call(
                                                                    productObj,
                                                                    pAtt
                                                                )
                                                            ) {
                                                                if (
                                                                    pAtt ==
                                                                    "option"
                                                                ) {
                                                                    if (
                                                                        !Object.prototype.hasOwnProperty.call(
                                                                            pAttObj,
                                                                            "option"
                                                                        )
                                                                    ) {
                                                                        pAttObj[
                                                                            "option"
                                                                        ] = {};
                                                                    }
                                                                    Object.keys(
                                                                        productObj[
                                                                            pAtt
                                                                        ]
                                                                    ).forEach(
                                                                        function (
                                                                            key
                                                                        ) {
                                                                            pAttObj[
                                                                                pAtt
                                                                            ][
                                                                                key
                                                                            ] =
                                                                                productObj[
                                                                                    pAtt
                                                                                ][
                                                                                    key
                                                                                ];
                                                                        }
                                                                    );
                                                                } else {
                                                                    pAttObj[
                                                                        pAtt
                                                                    ] =
                                                                        productObj[
                                                                            pAtt
                                                                        ];
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (pAttributes.length == 0) {
                                        productObj = new INC.classes.ProductObj(
                                            product
                                        );
                                        productObj["bundleId"] =
                                            irbBundleObj["BundleId"];
                                        if (
                                            INC.config.recommendation ==
                                            falseflag
                                        ) {
                                            productObj["bundledProductId"] =
                                                pdpProductId;
                                        }
                                        productObj.sku = productObj.id;
                                        productObj.Filed3 =
                                            product["Field3"] +
                                            " | " +
                                            product["Field4"];
                                        if (
                                            !Object.prototype.hasOwnProperty.call(
                                                dataStoreObj,
                                                productObj["mainId"]
                                            )
                                        ) {
                                            dataStoreObj[productObj["mainId"]] =
                                                {};
                                        }
                                        dataStoreObj[productObj["mainId"]][
                                            productObj["id"]
                                        ] = {};
                                        if (
                                            !!window.MSInputMethodContext &&
                                            !!document.documentMode
                                        ) {
                                            dataStoreObj[productObj["mainId"]][
                                                productObj["id"]
                                            ] = JSON.parse(
                                                JSON.stringify(productObj)
                                            );
                                        } else {
                                            dataStoreObj[productObj["mainId"]][
                                                productObj["id"]
                                            ] = Object.assign({}, productObj);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            //console.log("odata - " + JSON.stringify(dataStoreObj));

            incDataStore.dataStoreObj = dataStoreObj;
            incDataStore.bundleProductsArray = bundleProductsArray;
            if (INC.config.pageType == "cartPage") {
                incDataStore.bundleCartProductsArray =
                    Object.keys(bundleproductarray);
            }
            if (INC.config.recommendation == falseflag) {
                incDataStore.pdpProductId = pdpProductId;
            }
            incDataStore.bundleCartProducts = {};
        }

        function getFirstProductObjByMainId(findObj) {
            var childProductObj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            try {
                if (
                    productListObj != undefined &&
                    productListObj[findObj["mainId"]] != undefined
                ) {
                    childProductObj =
                        productListObj[findObj["mainId"]][
                            Object.keys(productListObj[findObj["mainId"]])[0]
                        ];
                }
            } catch (e) {
                console.error("e", e.stack);
                throw e;
            }
            return childProductObj;
        }

        function getProductById(findObj) {
            let childProductObj = {};
            let productListObj = INC.dataStore.dataStoreObj;
            if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
                for(let mainProductId in productListObj) {
                    for(let childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["id"] == findObj["id"]) {
                            childProductObj = productListObj[mainProductId][childProductId];
                            break;
                        }
                    }
                }
            }
            if(Object.keys(childProductObj).length == 0){
                if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
                    for(let mainProductIds in productListObj) {
                        for(let childProductIds in productListObj[mainProductIds]) {
                            if (productListObj[mainProductIds][childProductIds]["id"] == findObj["id"]) {
                                childProductObj = productListObj[mainProductIds][childProductIds];
                                break;
                            }
                        }
                    }
                }
            }
            return childProductObj;
        }
        function getProductBySKU(findObj) {
            let childProductObj = {};
            let productListObj = INC.dataStore.dataStoreObj;
            if (Object.prototype.hasOwnProperty.call(findObj, "sku")) {
                for(let mainProductId in productListObj) {
                    for(let childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["sku"] == findObj['sku']) {
                            childProductObj = productListObj[mainProductId][childProductId];
                            break;
                        }
                    }
                }
            }
            return childProductObj;
        }
        function getUniqueCatergories() {
            let catergoriesArray = [];
            let productListObj = INC.dataStore.dataStoreObj;
            let bundleProductsArray = INC.dataStore.bundleProductsArray;
            bundleProductsArray.forEach(function (productId) {
                for(let childProductId in productListObj[productId]) {
                    let indexOfCategoryId = catergoriesArray.indexOf(productListObj[productId][childProductId]["categoryId"]);
                    if (indexOfCategoryId == -1 && productListObj[productId][childProductId]["categoryId"] != INC.dataStore.clientProductDealsCategory) {
                        catergoriesArray.push(productListObj[productId][childProductId]["categoryId"]);
                    }
                }
            });
            return catergoriesArray;
        }
        function getProductColorsObj(findObj, type_of) {
            let productColorObj = {};
            let productListObj = INC.dataStore.dataStoreObj;
            let productColorArrayObj = {}
            let productColorObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (let mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (let childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {

                                if (productListObj[mainProductId][childProductId]["option"]["0"].code == "Color") {
                                    if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"] != undefined && productListObj[mainProductId][childProductId]["option"]["0"] != null && productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                        if (type_of != undefined) {
                                            let attr_block = null;
                                            if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                                attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                            } else {
                                                attr_block = type_of.parentNode.parentNode.parentNode
                                            }
                                            let opt_text = ""
                                            let opt_size_text = ""
                                            if (type_of.parentNode != null) {
                                                opt_text = attr_block.getAttribute('data-zero');
                                                if (attr_block.getAttribute('data-size') != undefined) {
                                                    opt_size_text = attr_block.getAttribute('data-size');
                                                }
                                            } else {
                                                opt_text = type_of.innerText;
                                            }

                                            if (opt_text != "" && opt_size_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined) {
                                                if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text) {
                                                    colordata(productColorArrayObj, productListObj, mainProductId, childProductId)
                                                }
                                            } else if (opt_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined) {
                                                if (productListObj[mainProductId][childProductId].option[1].text == opt_text) {
                                                    colordata(productColorArrayObj, productListObj, mainProductId, childProductId)
                                                }
                                            } else {
                                                colordata(productColorArrayObj, productListObj, mainProductId, childProductId)
                                            }
                                        } else {
                                            colordata(productColorArrayObj, productListObj, mainProductId, childProductId)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            Object.keys(productColorArrayObj).forEach(function (colorText) {
                let colorObj = {}
                colorObj["text"] = colorText;
                colorObj["colorCode"] = productColorArrayObj[colorText]["colorCode"];
                colorObj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
                colorObj["titleText"] = productColorArrayObj[colorText]["titleText"];
                colorObj["code"] = productColorArrayObj[colorText]["code"];
                colorObj["cpid"] = productColorArrayObj[colorText]["cpid"];
                productColorObjArray.push(colorObj);

            });
            if (type_of == "size") {
                productColorObj["sizeArray"] = productColorObjArray;
            } else if (type_of == "zero") {
                productColorObj["att0Array"] = productColorObjArray;
            } else if (type_of == "third") {
                productColorObj["att3Array"] = productColorObjArray;
            } else {
                productColorObj["colorArray"] = productColorObjArray;
            }
            return productColorObj;
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
                return (x < y ? -1 : (sortdata_(x, y)));
            });

            function sortdata_(x, y) {
                return x > y ? 1 : 0;
            }
        }
        function colordata(productColorArrayObj, productListObj, mainProductId, childProductId) {
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
            return productColorArrayObj
        }
        function getProductSizesObj(findObj, type_of) {
            var productSizeObj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            var productSizesArrayObj = {};
            var productSizesObjArray = [];
            var attr_code = "";
            var c_pid = "";
            var prc = "";
            var label = "";
            var attid = "";
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {
                            var attr_flag = ""
                            if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                                if (type_of != undefined) {
                                    var attr_block = null;
                                    if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                        attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                    } else {
                                        attr_block = type_of.parentNode.parentNode.parentNode
                                    }
                                    var opt_text = attr_block.getAttribute('data-zero');
                                    var opt_size_text = attr_block.getAttribute('data-color');

                                    if (opt_size_text == undefined) {
                                        opt_size_text = ""
                                    }
                                    if (opt_text == undefined) {
                                        opt_text = ""
                                    }
                                    if (opt_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined) {
                                        if (opt_text != "" && opt_size_text != "" && productListObj[mainProductId][childProductId].option[0]) {
                                            if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[0].text == opt_size_text) {
                                                attr_flag = "fir_block"
                                            }
                                        } else {
                                            if (productListObj[mainProductId][childProductId].option[1].text == opt_text) {
                                                attr_flag = "sec_block"
                                                if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"]["2"] != null) {
                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = {};
                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                                    attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                                    c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                                                    prc = productListObj[mainProductId][childProductId]["option"]["2"]["activePriceChild"];
                                                    label = productListObj[mainProductId][childProductId]["option"]["2"]["label"];
                                                    attid = productListObj[mainProductId][childProductId]["option"]["2"]["att_id"];
                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["2"]["opt_id"];

                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["2"]["colorCode"];
                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["2"]["imgSrc"];
                                                }
                                            }
                                        }
                                    } else if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"]["2"] != null) {
                                        attr_flag = "empty_"
                                    }
                                } else if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"]["2"] != null) {
                                    attr_flag = "empty"
                                }
                                if (attr_flag == "fir_block" || attr_flag == "sec_block" || attr_flag == "empty" || attr_flag == "empty_") {
                                    if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"]["2"] != null) {
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = {};
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                        attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                        c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                                        prc = productListObj[mainProductId][childProductId]["option"]["2"]["activePriceChild"];
                                        label = productListObj[mainProductId][childProductId]["option"]["2"]["label"];
                                        attid = productListObj[mainProductId][childProductId]["option"]["2"]["att_id"];
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["2"]["opt_id"];
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["2"]["colorCode"];
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["2"]["imgSrc"];
                                    }
                                }
                            }
                        }

                    }
                }
            }

            Object.keys(productSizesArrayObj).forEach(function (sizeText) {
                var sizeObj = {};
                sizeObj["text"] = productSizesArrayObj[sizeText]["titleText"];
                sizeObj["code"] = attr_code;
                sizeObj["cpid"] = c_pid;
                sizeObj["prc"] = prc;
                sizeObj["label"] = label;
                sizeObj["opt_id"] = productSizesArrayObj[sizeText]["opt_id"];
                sizeObj["colorCode"] = productSizesArrayObj[sizeText]["colorCode"];
                sizeObj["imgSrc"] = productSizesArrayObj[sizeText]["imgSrc"];
                sizeObj["att_id"] = attid;
                productSizesObjArray.push(sizeObj);
            });
            productSizeObj["sizeArray"] = productSizesObjArray
            return productSizeObj;
        }
        function getProductopt0Obj(findObj, type_of) {
            var product0Obj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            var product0ArrayObj = {}
            var product0ObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {

                            if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"] != undefined && productListObj[mainProductId][childProductId]["option"]["1"] != null && productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {
                                if (type_of != undefined) {
                                    var attr_block = null;
                                    if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                        attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                    } else {
                                        attr_block = type_of.parentNode.parentNode.parentNode
                                    }
                                    var opt_text = ""
                                    if (type_of.parentNode != null) {
                                        opt_text = attr_block.getAttribute('data-color');
                                    } else {
                                        opt_text = type_of.innerText;
                                    }
                                    if (opt_text != undefined) {
                                        if (productListObj[mainProductId][childProductId].option["0"].text.trim().toLocaleLowerCase() == opt_text.trim().toLocaleLowerCase()) {
                                            zerodata(product0ArrayObj, productListObj, mainProductId, childProductId)
                                        }
                                    } else {
                                        zerodata(product0ArrayObj, productListObj, mainProductId, childProductId)
                                    }
                                } else {

                                    zerodata(product0ArrayObj, productListObj, mainProductId, childProductId)
                                }
                            }
                        }
                    }
                }
            }

            Object.keys(product0ArrayObj).forEach(function (colorText) {
                var attr0Obj = {}

                attr0Obj["text"] = colorText;
                attr0Obj["text1"] = colorText
                attr0Obj["imgSrc"] = product0ArrayObj[colorText]["imgSrc"];
                attr0Obj["titleText"] = product0ArrayObj[colorText]["titleText"];
                attr0Obj["code"] = product0ArrayObj[colorText]["code"];
                attr0Obj["cpid"] = product0ArrayObj[colorText]["cpid"];
                attr0Obj["prc"] = product0ArrayObj[colorText]["prc"];
                attr0Obj["label"] = product0ArrayObj[colorText]["label"];
                attr0Obj["colorCode"] = product0ArrayObj[colorText]["colorCode"];
                attr0Obj["opt_id"] = product0ArrayObj[colorText]["opt_id"];
                attr0Obj["att_id"] = product0ArrayObj[colorText]["att_id"];
                attr0Obj["option_text"] = product0ArrayObj[colorText]["option_text"];
                attr0Obj["option_text1"] = product0ArrayObj[colorText]["option_text1"];
                attr0Obj["option_text2"] = product0ArrayObj[colorText]["option_text2"];
                attr0Obj["headers"] = product0ArrayObj[colorText]["headers"];
                attr0Obj["combo_options"] = product0ArrayObj[colorText]["combo_options"];

                product0ObjArray.push(attr0Obj);

            });
            product0Obj["att0Array"] = sortByKey(product0ObjArray, 'colorText');
            return product0Obj;
        }
        function zerodata(product0ArrayObj, productListObj, mainProductId, childProductId) {

            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["1"]["cpid"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["1"]["activePriceChild"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["label"] = productListObj[mainProductId][childProductId]["option"]["1"]["label"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["1"]["colorCode"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["1"]["opt_id"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["att_id"] = productListObj[mainProductId][childProductId]["option"]["1"]["att_id"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["option_text"] = productListObj[mainProductId][childProductId]["option"]["1"]["option_text"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["option_text1"] = productListObj[mainProductId][childProductId]["option"]["1"]["option_text1"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["option_text2"] = productListObj[mainProductId][childProductId]["option"]["1"]["option_text2"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["headers"] = productListObj[mainProductId][childProductId]["option"]["1"]["headers"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["combo_options"] = productListObj[mainProductId][childProductId]["option"]["1"]["combo_options"];

            return product0ArrayObj;
        }
        function getProductopt3Obj(findObj, type_of) {
            var product3Obj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            var productColorArrayObj = {}
            var product3ObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"] != undefined && productListObj[mainProductId][childProductId]["option"]["3"] != null && productListObj[mainProductId][childProductId]["option"]["3"] != undefined) {
                                if (type_of != undefined) {
                                    var attr_block = null;
                                    if (type_of.parentNode.parentNode != null) {
                                        if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                            attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                        } else {
                                            attr_block = type_of.parentNode.parentNode.parentNode
                                        }
                                    } else {
                                        attr_block = type_of.parentNode.parentNode
                                    }
                                    if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == trueflag) {
                                        attr_block = type_of.parentNode.parentNode.parentNode
                                    }
                                    if (type_of.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == trueflag) {
                                        attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                    }
                                    var opt_text = attr_block.getAttribute('data-zero');
                                    var opt_size_text = attr_block.getAttribute('data-size');
                                    var opt_color_text = attr_block.getAttribute('data-color');
                                    var opt_third_text = attr_block.getAttribute('data-third');
                                    if (opt_size_text == undefined) {
                                        opt_size_text = ""
                                    }
                                    if (opt_color_text == undefined) {
                                        opt_color_text = ""
                                    }
                                    if (opt_third_text == undefined) {
                                        opt_third_text = ""
                                    }
                                    if (opt_text == null) {
                                        opt_text = ""
                                    }
                                    if (opt_text != "" && opt_size_text != "" && opt_color_text != "") {
                                        if (productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined && productListObj[mainProductId][childProductId].option[0] != undefined) {
                                            if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text && productListObj[mainProductId][childProductId].option[0].text == opt_color_text) {
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];

                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["label"] = productListObj[mainProductId][childProductId]["option"]["3"]["label"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["3"]["opt_id"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["att_id"] = productListObj[mainProductId][childProductId]["option"]["3"]["att_id"];
                                            }
                                        }
                                    } else if (opt_text != "" && opt_size_text != "" && opt_third_text != "") {
                                        if (productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined && productListObj[mainProductId][childProductId].option[3] != undefined) {
                                            if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text) {
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["label"] = productListObj[mainProductId][childProductId]["option"]["3"]["label"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["3"]["opt_id"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["att_id"] = productListObj[mainProductId][childProductId]["option"]["3"]["att_id"];
                                            }
                                        }
                                    } else {
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["label"] = productListObj[mainProductId][childProductId]["option"]["3"]["label"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["3"]["opt_id"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["att_id"] = productListObj[mainProductId][childProductId]["option"]["3"]["att_id"];
                                    }
                                } else {
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["label"] = productListObj[mainProductId][childProductId]["option"]["3"]["label"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["3"]["opt_id"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["att_id"] = productListObj[mainProductId][childProductId]["option"]["3"]["att_id"];
                                }
                            }
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
                attr3Obj["cpid"] = productColorArrayObj[colorText]["cpid"];
                attr3Obj["prc"] = productColorArrayObj[colorText]["prc"];
                attr3Obj["label"] = productColorArrayObj[colorText]["label"];
                attr3Obj["opt_id"] = productColorArrayObj[colorText]["opt_id"];
                attr3Obj["att_id"] = productColorArrayObj[colorText]["att_id"];
                product3ObjArray.push(attr3Obj);
            });
            product3Obj["att3Array"] = product3ObjArray;
            return product3Obj;
        }

        function getProductByAtt(findObj) {
            var childProductObj = {};
            var mainProductListObj = ""
            var productListObj = INC.dataStore.dataStoreObj;
            if (findObj.mainId != undefined && productListObj != undefined) {
                mainProductListObj = productListObj[findObj.mainId];
            }
            for (var childProductId in mainProductListObj) {
                if (findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && findObj.thirdText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined && mainProductListObj[childProductId]["option"]["3"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text && findObj.thirdText == mainProductListObj[childProductId]["option"]["3"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.sizeText != "" && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined && findObj.thirdText == "") {
                    if (findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText == "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText == "" && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                    if (mainProductListObj[childProductId]["option"]["1"].label == "AMOUNT") {
                        if (parseInt(findObj.zeroText.split('£')[1]) == parseInt(mainProductListObj[childProductId]["option"]["1"].activePriceChild)) {
                            childProductObj = mainProductListObj[childProductId];
                            return childProductObj;
                        }
                    }
                    if (findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if ((mainProductListObj[childProductId]["option"] != null && mainProductListObj[childProductId]["option"] != undefined && mainProductListObj[childProductId]["option"]["0"] != null && mainProductListObj[childProductId]["option"]["0"] != undefined && (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text)) || mainProductListObj[childProductId]["option"] != null && mainProductListObj[childProductId]["option"] != undefined && mainProductListObj[childProductId]["option"]["1"] != null && mainProductListObj[childProductId]["option"]["1"] != undefined && (findObj.sizeText == mainProductListObj[childProductId]["option"]["1"].text)) {
                    childProductObj = mainProductListObj[childProductId];
                    return childProductObj;

                } else if (findObj.sizeText !== "" && findObj.zeroText !== "" && mainProductListObj[childProductId]["option"]["1"].text == findObj.zero_text && mainProductListObj[childProductId]["option"]["2"].text == findObj.sizeText && findObj.thirdText == undefined && findObj.colorText == undefined) {
                    childProductObj = mainProductListObj[childProductId];
                    return childProductObj;
                } else if (findObj.thirdText != undefined && mainProductListObj[childProductId]["option"]["3"] !== undefined) {
                    if (findObj.sizeText !== "" && findObj.zeroText !== "" && mainProductListObj[childProductId]["option"]["1"].text == findObj.zero_text && mainProductListObj[childProductId]["option"]["2"].text == findObj.sizeText && findObj.thirdText == mainProductListObj[childProductId]["option"]["3"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                }
            }
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
            getProductByAtt: getProductByAtt,
        };
    };

    INC.classes = {};
    INC.classes.ProductObj = function (product) {
        this.bundleId = "";
        this.id =
            product != null && product != undefined ? product["ProductId"] : "";
        this.sku =
            product != null && product != undefined
                ? product["ProductSku"]
                : "";
        this.mainsku =
            product != null && product != undefined
                ? product["ProductSku"]
                : "";
        this.childsku =
            product != null && product != undefined
                ? product["ProductSku"]
                : "";
        this.name =
            product != null && product != undefined
                ? product["ProductName"]
                : "";
        this.url = product["ProductUrl"];
        this.imageURL = product["ImageURL"];
        this.regularPrice = product["Price"];
        if (
            product["SpecialPrice"] != null &&
            product["SpecialPrice"] != product["Price"]
        ) {
            if (
                parseFloat(product["SpecialPrice"]) >
                parseFloat(product["Price"])
            ) {
                this.regularPrice = product["SpecialPrice"];
                this.activePrice = product["Price"];
            } else {
                this.activePrice = product["SpecialPrice"];
            }
        } else {
            this.activePrice = product["Price"];
        }

        if (
            product["OtherImageList"] != null &&
            product["OtherImageList"] != undefined
        ) {
            this.otherImageList = product["OtherImageList"];
        } else {
            this.otherImageList = [];
        }
        if (product["Size"] != null && product["Size"] != undefined) {
            this.size = product["Size"];
        } else {
            this.size = "";
        }
        this.option = {};
        this.mainId =
            product != null && product != undefined ? product["ProductId"] : "";
        this.categoryName =
            product != null && product != undefined
                ? product["CategoryName"]
                : "";
        this.categoryId =
            product != null && product != undefined
                ? product["CategoryId"]
                : "";
        this.description =
            product != null && product != undefined
                ? product["Description"]
                : "";
        this.shortDescription =
            product != null && product != undefined
                ? product["ShortDescription"]
                : "";
        this.ratingsCount =
            product != null && product != undefined ? product["Rating"] : "";
        this.reviewsCount =
            product != null && product != undefined
                ? product["RatingCount"]
                : "";

        if (product["PromotionalMessage"] != null) {
            this.PromotionalMessage = product["PromotionalMessage"];
        } else if (product["promotionalMessage"] != null) {
            this.PromotionalMessage = product["promotionalMessage"];
        } else {
            this.PromotionalMessage = "";
        }

        if (product["productLevelDiscountMessage"] != null) {
            this.ProductLevelDiscountMessage =
                product["productLevelDiscountMessage"];
        } else if (product["ProductLevelDiscountMessage"] != null) {
            this.ProductLevelDiscountMessage =
                product["ProductLevelDiscountMessage"];
        }
        this.manufacturer =
            product != null && product != undefined
                ? product["Manufacturer"]
                : "";
        this.skinType =
            product != null && product != undefined ? product["Field3"] : "";
        this.underTone =
            product != null && product != undefined ? product["Field4"] : "";
        this.finish =
            product != null && product != undefined ? product["Field5"] : "";
        this.coverage =
            product != null && product != undefined ? product["Field6"] : "";
        this.ProductType = "";
        if (
            product["ProductType"] != null &&
            product["ProductType"] != undefined
        ) {
            this.ProductType = product["ProductType"];
        }
        this.regularPriceMain = product["Price"];
        if (
            product["SpecialPrice"] != null &&
            product["SpecialPrice"] != product["Price"]
        ) {
            if (
                parseFloat(product["SpecialPrice"]) >
                parseFloat(product["Price"])
            ) {
                this.regularPriceMain = product["SpecialPrice"];
                this.activePriceMain = product["Price"];
            } else {
                this.activePriceMain = product["SpecialPrice"];
            }
        } else {
            this.activePriceMain = product["Price"];
        }
        if (product["ProductName"] != null) {
            this.nameMain = product["ProductName"];
        } else {
            this.nameMain = "";
        }
        if (product["ImageURL"] != null) {
            this.imageURLMain = product["ImageURL"];
        } else {
            this.imageURLMain = "";
        }
        this.urlMain = product["ProductUrl"];
    };
    INC.classes.ProductAttObj = function (product) {
        this.bundleId = "";
        this.id =
            product != null && product != undefined
                ? product["childProductId"]
                : "";
        this.optId =
            product != null && product != undefined ? product["opId"] : "";
        this.sku =
            product != null && product != undefined
                ? product["childProductSku"]
                : "";
        this.mainsku =
            product != null && product != undefined ? product["mainSKU"] : "";
        this.childsku =
            product != null && product != undefined
                ? product["childProductSku"]
                : "";
        if (product["childProductName"] != null) {
            this.name = product["childProductName"];
        } else {
            this.name = "";
        }
        this.url = product["childProductUrl"];
        this.imageURL = product["childProductImageUrl"].replace("pngg", "png");
        this.regularPrice =
            product != null && product != undefined
                ? product["childProductPrice"]
                : "";
        if (
            product["childProductSpecialPrice"] != null &&
            product["childProductSpecialPrice"] != product["childProductPrice"]
        ) {
            if (
                parseFloat(product["childProductSpecialPrice"]) >
                parseFloat(product["childProductPrice"])
            ) {
                this.regularPrice = product["childProductSpecialPrice"];
                this.activePrice = product["childProductPrice"];
            } else {
                this.activePrice = product["childProductSpecialPrice"];
            }
        } else {
            this.activePrice = product["childProductPrice"];
        }

        if (product["PromotionalMessage"] != null) {
            this.PromotionalMessage = product["PromotionalMessage"];
        } else if (product["promotionalMessage"] != null) {
            this.PromotionalMessage = product["promotionalMessage"];
        } else {
            this.PromotionalMessage = "";
        }
        this.VideoUrl = product["childProductField4"];

        if (product["productLevelDiscountMessage"] != null) {
            this.ProductLevelDiscountMessage =
                product["productLevelDiscountMessage"];
        } else if (product["ProductLevelDiscountMessage"] != null) {
            this.ProductLevelDiscountMessage =
                product["ProductLevelDiscountMessage"];
        } else {
            this.ProductLevelDiscountMessage = "";
        }
        this.otherImageList =
            product != null && product != undefined
                ? product["childProductOtherImageUrl"]
                : [];

        this.size = "";
        this.option = {};
        if (product != null && product != undefined) {
            this.option[product["optionId"]] = {};
            this.option[product["optionId"]].text = product["optionText"];
            this.option[product["optionId"]].titleText =
                product["childProductField2"] != null
                    ? product["childProductField2"]
                    : "";
            this.option[product["optionId"]].imgSrc =
                product["optionImageUrl"] != null
                    ? product["optionImageUrl"]
                    : "";
            this.option[product["optionId"]].colorCode =
                product["colorCode"] != null ? product["colorCode"] : "";
            this.option[product["optionId"]].cpid =
                product["childProductId"] != null
                    ? product["childProductId"]
                    : "";
            this.option[product["optionId"]].opt_id =
                product["opId"] != null ? product["opId"] : "";
            this.option[product["optionId"]].opttext = product["optionText1"];
            this.option[product["optionId"]].att_lebel = product.att_lebel;
            this.option[product["optionId"]].field1 =
                product.childProductField1;
            this.option[product["optionId"]].attrLength = product.attrLength;
            this.option[product["optionId"]].activePriceChild =
                product.attrLength;
            if (
                product["childProductSpecialPrice"] != null &&
                product["childProductSpecialPrice"] !=
                    product["childProductPrice"]
            ) {
                if (
                    parseFloat(product["childProductSpecialPrice"]) >
                    parseFloat(product["childProductPrice"])
                ) {
                    this.option[product["optionId"]].activePriceChild =
                        product["childProductSpecialPrice"];
                    this.option[product["optionId"]].activePriceChild =
                        product["childProductPrice"];
                } else {
                    this.option[product["optionId"]].activePriceChild =
                        product["childProductSpecialPrice"];
                }
            } else {
                this.option[product["optionId"]].activePriceChild =
                    product["childProductPrice"];
            }
        }
        this.categoryName =
            product != null && product != undefined
                ? product["childCategoryName"]
                : "";
        this.categoryId =
            product != null && product != undefined
                ? product["childCategoryId"]
                : "";
        this.description =
            product != null && product != undefined
                ? product["childProductDescription"]
                : "";
        if (product["ShortDescription"] != null) {
            this.shortDescription = product["ShortDescription"];
        } else if (product["Field1"] != null) {
            this.shortDescription = product["Field1"];
        } else {
            this.shortDescription = "";
        }
        this.manufacturer =
            product != null && product != undefined
                ? product["Manufacturer"]
                : "";
        this.ratingsCount =
            product != null && product != undefined
                ? product["childRating"]
                : "";
        this.reviewsCount =
            product != null && product != undefined
                ? product["childreviewsCount"]
                : "";
        this.skinType =
            product != null && product != undefined
                ? product["childProductField3"]
                : "";
        this.underTone =
            product != null && product != undefined
                ? product["childProductField4"]
                : "";
        this.finish =
            product != null && product != undefined
                ? product["childProductField5"]
                : "";
        this.coverage =
            product != null && product != undefined
                ? product["childProductField6"]
                : "";
        this.ProductType =
            product != null && product != undefined
                ? product["ProductType"]
                : "";
        this.regularPriceMain = product["childProductPriceMain"];
        this.activePriceMain = product["childProductPriceMain"];
        if (
            product["childProductSpecialPriceMain"] != null &&
            product["childProductSpecialPriceMain"] !=
                product["childProductPriceMain"]
        ) {
            if (
                parseFloat(product["childProductSpecialPriceMain"]) >
                parseFloat(product["childProductPriceMain"])
            ) {
                this.regularPriceMain = product["childProductSpecialPriceMain"];
                this.activePriceMain = product["childProductPrice"];
            } else {
                this.activePriceMain = product["childProductSpecialPriceMain"];
            }
        }
        this.nameMain = "";
        if (product["childProductNameMain"] != null) {
            this.nameMain = product["childProductNameMain"];
        }
        this.imageURLMain = "";
        if (product["childProductImageUrlMain"] != null) {
            this.imageURLMain = product["childProductImageUrlMain"];
        }
        this.urlMain = product["childProductUrlMain"];
    };
    INC.classes.FindObj = function (findObj) {
        this.id = findObj != null && findObj != undefined ? findObj.id : "";
        this.sku = findObj != null && findObj != undefined ? findObj.sku : "";
        this.mainId =
            findObj != null && findObj != undefined ? findObj.mainId : "";
        this.colorText =
            findObj != null && findObj != undefined ? findObj.colorText : "";
        this.sizeText =
            findObj != null && findObj != undefined ? findObj.sizeText : "";
    };

    INC.classes.NWConfig = function (nwConfigObj) {
        this.url =
            nwConfigObj != null && nwConfigObj != undefined
                ? nwConfigObj.url
                : "";
        this.method =
            nwConfigObj != null && nwConfigObj != undefined
                ? nwConfigObj.method
                : "GET";
        this.params =
            nwConfigObj != null && nwConfigObj != undefined
                ? nwConfigObj.params
                : "";
    };

    INC.methods = {};
    INC.methods.networkReq = function (nwConfigObj, cb) {
        var nwConfigObject = new INC.classes.NWConfig(nwConfigObj);
        var xhr = new XMLHttpRequest();
        xhr.open(nwConfigObject.method, nwConfigObject.url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.response != "") {
                    cb(xhr.response);
                    if (INC.config.pageType == "pdp") {
                        var p_ids = INC.methods.getProductIdFromWebPage();
                        var repd = JSON.parse(xhr.response);
                        INC.methods.irbReq_is_tc(
                            p_ids,
                            10,
                            "catalog_product_view"
                        );
                        if (repd.CategoryRecommendations == null) {
                            if (INC.config.pageType == "pdp") {
                                INC.methods.irbReq_is_categ_recomendation(
                                    p_ids,
                                    10,
                                    "catalog_product_view"
                                );
                            }
                        }
                    }
                }
            } else if (xhr.status === 401 || xhr.status === 0) {
                var resp = localStorage.getItem("bundle_response");
                cb(resp);

                if (INC.config.pageType == "pdp") {
                    var p_ids = INC.methods.getProductIdFromWebPage();
                    INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view");
                }
                var p_ids = INC.methods.getProductIdFromWebPage();
                if (INC.config.pageType == "pdp") {
                    INC.methods.irbReq_is_categ_recomendation(
                        p_ids,
                        10,
                        "catalog_product_view"
                    );
                }
            }
        };
        xhr.send(JSON.stringify(nwConfigObject.params));
    };

    INC.methods.irbReq = function (productId, bundleCount, elementName) {
        var elmname = elementName || "";
        var productIdReq = productId;
        var apiKey = INC.config.clientToken;
        var bundleReqCount = bundleCount || 5;
        var irbReqParams = "";
        var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
        irbReqParams =
            "product_ids=" +
            productIdReq +
            "&category_id=" +
            "&api_key=" +
            apiKey +
            "&page_type=" +
            elmname +
            "&fr=" +
            "1" +
            "&client_visitor_id=" +
            INC.config.ivid;
        if (INC.config.pageType != "pdp" && INC.config.pageType != "cartPage") {
            irbReqParams =
                irbReqParams +
                "&is_tc=" +
                "1" +
                "&no_of_bundles=" +
                bundleReqCount;
        }
        var irbReqURL = decodeURI(irbPATH + btoa(irbReqParams));
        var networkConfigObj = new INC.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL;
        return this.refreshBundles(networkConfigObj);
    };

    INC.methods.refreshBundles = function (nwConfigObj) {
        var incDataStore = INC.dataStore;
        INC.methods.networkReq(nwConfigObj, function (response) {
            if (response.length == 0) {
                return;
            }
            var responseJSON = "";
            if (typeof response != "object") {
                responseJSON = JSON.parse(response);
            } else {
                responseJSON = response;
            }
            var bundleResponse = responseJSON;

            if (
                Object.prototype.hasOwnProperty.call(responseJSON, "Bundles") &&
                responseJSON.Bundles != null
            ) {
                INC.config.recommendation = false;
                responseJSON.timeStamp = Date.now();
                INC.dataStore.methods().buildDataStoreObj(bundleResponse);
                if (
                    incDataStore.dataStoreObj == null ||
                    incDataStore.dataStoreObj == undefined
                ) {
                    return;
                }
                switch (INC.config.pageType) {
                    case "pdp":
                        INC.methods.createPDPBlock();
                        //INC.methods.createSidebarBlock();
                        //INC.methods.createAMBlock();
                        break;
                    case "cartPage":
                        INC.methods.createAMBlock();
                        break;
                    case "productList":
                        INC.config.dupDataObjectProducts = [];
                        INC.methods.createSidebarBlock();
                        var findObj = new INC.classes.FindObj();
                        findObj["id"] = INC.config.plpProductId;
                        var sbBlock = document.querySelector(
                            ".inc_sidebar_modal_block"
                        );
                        sbBlock.querySelector(
                            ".inc_sidebar_cart_added_block"
                        ).style.visibilty = "hidden";
                        document.querySelector(
                            ".inc_sidebar_modal_block .inc_sidebar_cart_added_block"
                        ).style.borderBottom = "0px";
                        sbBlock.querySelector(
                            ".inc_header_item_count_figure_text"
                        ).innerText = "";
                        sbBlock.querySelector(
                            ".inc_cart_added_list_block"
                        ).innerHTML = "";
                        if (INC.dataStore.plpProductQty == 0) {
                            INC.dataStore.plpProductQty = 1;
                        }
                        INC.methods.addProductToSidebarCart(
                            findObj,
                            "client_add_btn",
                            INC.dataStore.plpProductQty,
                            null,
                            null
                        );
                        if (
                            document.querySelector(
                                ".ic_popup_module_wrapper.active .inc_popup_close"
                            ) != null
                        ) {
                            document
                                .querySelector(
                                    ".ic_popup_module_wrapper.active .inc_popup_close"
                                )
                                .click();
                        }
                        INC.methods.showSidebar();
                        var img_elem = setInterval(function () {
                            var circle_img = document.querySelector(
                                ".inc_cart_added_product_img img"
                            );
                            if (circle_img != null) {
                                clearInterval(img_elem);
                                var subtotalinc_active = document.querySelector(
                                    ".inc_cart_added_product_desc_subtotal_ecirp_active_text"
                                );
                                var subtotalinc_regular =
                                    document.querySelector(
                                        ".inc_cart_added_product_desc_subtotal_ecirp_regular_text"
                                    );
                                var label = document.querySelector(
                                    ".inc_just_added_save_pr"
                                );
                                if (
                                    INC.config.empty_prod_details[0] !=
                                    undefined
                                ) {
                                    if (
                                        INC.config.empty_prod_details[0]
                                            .p_activePrice != undefined
                                    ) {
                                        if (subtotalinc_active != null) {
                                            var subt =
                                                +INC.config
                                                    .empty_prod_details[0]
                                                    .p_activePrice *
                                                INC.dataStore.plpProductQty;
                                            var subr =
                                                +INC.config
                                                    .empty_prod_details[0]
                                                    .regularPrice *
                                                INC.dataStore.plpProductQty;
                                            if (
                                                INC.config.empty_prod_details[0]
                                                    .regularPrice != undefined
                                            ) {
                                                subtotalinc_active.setAttribute(
                                                    "subtotalactiveprice",
                                                    subt
                                                );
                                                subtotalinc_regular.setAttribute(
                                                    "subtotalregularprice",
                                                    subr
                                                );
                                                var totalsaveprc =
                                                    get_discount_price(
                                                        subt,
                                                        subr
                                                    );
                                                subtotalinc_active.innerHTML =
                                                    formatter.format(subt);
                                                subtotalinc_regular.innerHTML =
                                                    formatter.format(subr);
                                                if (totalsaveprc != 0) {
                                                    label.innerHTML =
                                                        "You save:" +
                                                        formatter.format(
                                                            totalsaveprc
                                                        );
                                                }
                                            } else {
                                                subtotalinc_active.innerHTML =
                                                    formatter.format(subt);
                                                subtotalinc_active.setAttribute(
                                                    "subtotalactiveprice",
                                                    subt
                                                );
                                                subtotalinc_active.setAttribute(
                                                    "subtotalactiveprice",
                                                    subt
                                                );
                                                var subtotalregular =
                                                    document.querySelector(
                                                        ".inc_cart_added_product_desc_subtotal_ecirp_regular_text_block"
                                                    );
                                                subtotalregular.setAttribute(
                                                    "subtotalregularprice",
                                                    0
                                                );
                                            }
                                        }
                                        var prd_names = document.querySelector(
                                            ".inc_cart_added_product_desc_title_text"
                                        );
                                        if (
                                            INC.config.empty_prod_details[0]
                                                .p_name != undefined
                                        ) {
                                            prd_names.innerHTML =
                                                INC.config.empty_prod_details[0].p_name;
                                        }
                                        if (
                                            INC.config.empty_prod_details[0]
                                                .p_name != undefined
                                        ) {
                                            circle_img.src =
                                                INC.config.empty_prod_details[0].p_img;
                                        }
                                        var prd_price = document.querySelector(
                                            ".inc_cart_added_product_desc_ecirp_active_text"
                                        );
                                        if (
                                            prd_price != null &&
                                            INC.config.empty_prod_details[0]
                                                .p_activePrice != null
                                        ) {
                                            prd_price.innerHTML =
                                                formatter.format(
                                                    INC.config
                                                        .empty_prod_details[0]
                                                        .p_activePrice
                                                );
                                        }
                                        var szeClrTxt = document.querySelector(
                                            ".inc_cart_added_product_desc_att_size_text"
                                        );
                                        if (
                                            INC.config.empty_prod_details[0]
                                                .size != "undefined" &&
                                            INC.config.empty_prod_details[0]
                                                .color != "undefined"
                                        ) {
                                            szeClrTxt.innerHTML =
                                                "colour: " +
                                                INC.config.empty_prod_details[0].color.toLowerCase() +
                                                " , " +
                                                "size: " +
                                                INC.config.empty_prod_details[0].size.toLowerCase();
                                        } else {
                                            szeClrTxt.innerHTML =
                                                "size: " +
                                                INC.config.empty_prod_details[0].size.toLowerCase();
                                        }
                                    }
                                }
                                setTimeout(function () {
                                    if (
                                        document.querySelector("#colorbox") !=
                                        null
                                    ) {
                                        if (
                                            document.querySelector("#colorbox")
                                                .style.display == "block"
                                        ) {
                                            document
                                                .querySelector("#cboxClose")
                                                .click();
                                        }
                                    }
                                }, 2000);
                            }
                        }, 100);
                        break;
                }
            } else if (
                Object.prototype.hasOwnProperty.call(
                    responseJSON,
                    "CategoryRecommendations"
                ) &&
                responseJSON.CategoryRecommendations.length > 0
            ) {
                responseJSON.timeStamp = Date.now();
                INC.config.recommendation = true;
                INC.dataStore.methods().buildDataStoreObj(bundleResponse);
                if (
                    incDataStore.dataStoreObj == null ||
                    incDataStore.dataStoreObj == undefined
                ) {
                    return;
                }
                if (INC.config.pageType == "pdp") {
                    INC.methods.createAMBlock("PDP");
                }
            }
        });
    };
    INC.methods.irbReq_is_tc = function (
        productIds,
        bundleCount,
        elementNameel
    ) {
        var elementName = elementNameel || "";
        var productId = productIds;
        var apiKey = INC.config.clientToken;
        var bundleReqCount = bundleCount || 5;
        var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
        var vi = INC.config.ivid;
        var irbparam =
            "product_ids=" +
            productId +
            "&api_key=" +
            apiKey +
            "&page_type=" +
            elementName +
            "&fr=" +
            "1" +
            "&client_visitor_id=" +
            vi +
            "&is_tc=" +
            "1" +
            "&no_of_bundles=" +
            bundleReqCount;

        var irbReqURL1 = decodeURI(irbPATH + btoa(irbparam));
        var networkConfigObj = new INC.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL1;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", networkConfigObj["url"], true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.response != "") {
                    if (INC.config.pageType == "pdp") {
                        cb_tc(JSON.parse(xhr.response));
                    }
                }
            } else if (xhr.status === 401 || xhr.status === 0) {
                var resp = localStorage.getItem("bundle_response");
                if (INC.config.pageType == "pdp") {
                    cb_tc(resp);
                }
            }
        };
        xhr.send(JSON.stringify(networkConfigObj["params"]));
    };
    INC.methods.get_product_ratings = function (
        filed3,
        field2,
        rating_containers
    ) {
        var count = document.createElement("span");
        count.classList.add("rating_count");
        rating_containers.appendChild(count);
        var avg = document.createElement("span");
        avg.classList.add("rating_avg");
        if (field2 == undefined) {
            count.textContent = "0 reviews";
            rating_containers.classList.add("inc_hide");
        } else {
            count.textContent = field2 + " reviews";
        }
        var stars = document.createElement("span");
        if (filed3 != undefined && filed3 != "") {
            var rating = filed3;
            if (
                rating == "" ||
                rating == undefined ||
                rating == "NaN" ||
                rating == "norating"
            ) {
                rating = 0;
            }
            rating = parseFloat(rating).toFixed(1);
            rating = rating.toString();
            var rating_m = null;
            if (
                rating != 0 &&
                rating != 1 &&
                rating != 2 &&
                rating != 3 &&
                rating != 4 &&
                rating != 5
            ) {
                rating_m = rating.replace(".", "-");
            }
            if (rating == 0) {
                rating = "0-0";
            }
            if (rating == 1) {
                rating = "1-0";
            }
            if (rating == 2) {
                rating = "2-0";
            }
            if (rating == 3) {
                rating = "3-0";
            }
            if (rating == 4) {
                rating = "4-0";
            }
            if (rating == 5) {
                rating = "5-0";
            }
            if (rating == "") {
                rating = 0;
            }
            if (rating_m != null && rating_m != "NaN") {
                rating_containers.classList.add("rating_" + rating_m);
            } else if (isNaN(rating_m)) {
                rating_containers.classList.add("rating_" + rating);
            } else {
                rating_containers.classList.add("rating_" + rating);
            }
            stars.classList.add("rating_stars");
            rating_containers.appendChild(stars);
        } else {
            stars.innerText = ".";
            stars.style.color = "#fff";
            stars.classList.add("rating_stars");
            stars.classList.add("noratings");
            rating_containers.appendChild(stars);
        }
    };
    INC.methods.getProductIdFromWebPage = function () {
        var PRODUCTID = "";
        if (document.querySelector(".body .container .productView") != null) {
            PRODUCTID = document
                .querySelector(".body .container .productView")
                .getAttribute("data-entity-id");
        }
        INC.config.Product_id = PRODUCTID;
        return PRODUCTID;
    };

    INC.methods.detectPageType = function () {
        if (document.querySelector(".productView") != null) return "pdp";
        if (document.querySelector(".currentCategory") != null)
            return "productList";

        if (window.location.href.includes("cart")) return "cartPage";
    };
    INC.methods.showSidebar = function () {
        var sidebarel = document.querySelector(".inc_sidebar_modal_block");
        if (sidebarel != null) {
            if (
                document.querySelector(
                    ".inc_recommended_tabs_list_item_block"
                ) == null ||
                INC.config.sidebarFirstLoad == falseflag
            ) {
                setTimeout(() => {
                    window.location.replace("https://ukmedi.co.uk/cart.php");
                }, 1000);
                return;
            }
            if (
                document.querySelector(
                    ".inc_recommended_tabs_list_item_block"
                ) != null
            ) {
                var sidebarouter = document.querySelector(".sidebar_outer");
                if (sidebarouter != null) {
                    document.querySelector("html").classList.add("inc_overlay");
                    var elSidebarOverlay = document.querySelector(
                        ".inc_sidebar_overlay_block"
                    );
                    if (elSidebarOverlay != null) {
                        elSidebarOverlay.style.display = "block";
                    }
                    sidebarouter.style.display = "block";
                    sidebarel.style.display = "block";
                    sidebarel.classList.add("inc_active");
                    sidebarouter.classList.add("sidebar_outer_active");
                }
            }
        }
        if (
            document.querySelector(
                ".inc_pdp_bundle_cart_summary_add_btn_block"
            ) != null
        ) {
            document
                .querySelector(".inc_pdp_bundle_cart_summary_add_btn_block")
                .classList.remove("inc_loading");
        }
    };
    INC.methods.hideSidebar = function () {
        var sidebarelhide = document.querySelector(".inc_sidebar_modal_block");
        INC.config.sidebarremovedprod = [];
        INC.bundles = true;
        document.querySelector("html").style = "";
        document.querySelector("html").classList.remove("inc_overlay");
        document.querySelector("body").classList.remove("inc_popup_open");
        var sidebarouterH = document.querySelector(".sidebar_outer");
        if (sidebarouterH != null) {
            document.querySelector(".inc_sidebar_overlay_block").style.display =
                "none";
            sidebarelhide.style.display = "none";
            sidebarouterH.style.display = "none";
            sidebarouterH.classList.remove("sidebar_outer_active");
            sidebarelhide.classList.remove("inc_active");
        }
        if (INC.config.pageType == "pdp") {
            if (document.querySelector(".inc_pdp_block") != null) {
                var rempdpel = document.querySelector(".inc_pdp_block");
                if (rempdpel != null) {
                    rempdpel.parentNode.removeChild(rempdpel);
                }
                onloadpdp = false;
                onloadpdp_delete = false;
                INC.dataStore["bundleCartProducts"] = {};
                INC.config.pdpaddedProductList = [];
                INC.config.bundle_tracking = [];
                INC.config.bundle_skuPushed = [];
                INC.config.dupBasket = [];
                INC.config.pdpaddedProductList = [];
                INC.config.sidebarremovedprod = [];
                INC.config.pdpaddedProductList = [];
                INC.config.catFlag = [];
                INC.methods.createPDPBlock("hidesidebar");
                setTimeout(function () {
                    INC.methods.createPDPBlock("sidebar");
                }, 200);
            }
        } else {
            INC.methods.clear();
        }
        Array.prototype.forEach.call(
            document.querySelectorAll(".inc_sidebar_overlay_block"),
            function (elm) {
                elm.parentNode.removeChild(elm);
            }
        );
        setTimeout(function () {
            if (
                document.querySelector(
                    ".inc_cart_added_product_desc_subtotal_ecirp_block"
                ) != null
            ) {
                document
                    .querySelector(
                        ".inc_cart_added_product_desc_subtotal_ecirp_block"
                    )
                    .classList.remove("is_special_ecirp");
            }
        }, 30);
        window.location.reload();
    };
    INC.methods.createAMBlock = function (PDP_type) {
        if (INC.dataStore.dataStoreObj.undefined == undefined) {
            document
                .querySelector("html")
                .classList.add("inc-prevent-hor-scroll");
            var amBlock = generate_html_tag("div", "inc_af_block");
            amBlock.classList.add("af_cart_page");
            amBlock.innerHTML = cart_html;
            amBlock.querySelector(".inc_af_product-list_block").innerHTML = "";
            var elAmTitleText = amBlock.querySelector(
                ".inc_af_title_text_block"
            );
            var amProductListBlock = amBlock.querySelector(
                ".inc_af_product-list_block"
            );
            var bundleProductsArray = INC.dataStore.bundleCartProductsArray;
            if (INC.config.pageType == "pdp") {
                if (
                    INC.dataStore.bundleProductsArray.indexOf(
                        INC.config.Product_id
                    ) == -1
                ) {
                }
                INC.config.cartproductids = [];
            }
            var duplamid = [];
            if (PDP_type == "PDP") {
                let countBlockAdded = 0;
                bundleProductsArray = INC.config.recommendationProduct;
                bundleProductsArray.forEach(function (mainProductId) {
                    if (duplamid.indexOf(mainProductId) == -1) {
                        duplamid.push(mainProductId);
                        var firstProductObjByMainId = INC.dataStore
                            .methods()
                            .getFirstProductObjByMainId({
                                mainId: mainProductId,
                            });
                        var prd_modulerec =
                            INC.methods.createProductModuleBlock(
                                firstProductObjByMainId.id,
                                "am",
                                false,
                                amBlock,
                                null,
                                true
                            );
                        countBlockAdded = countBlockAdded + 1;
                        if (
                            prd_modulerec.getAttribute("data-id") != "undefined"
                        ) {
                            amProductListBlock.appendChild(prd_modulerec);
                        }
                        elAmTitleText.innerText =
                            "Best Selling Similar Products";
                    }
                });

                let productListBlock = amBlock.querySelector(
                    ".inc_af_product-list_block"
                );
                if (window.innerWidth < 769) {
                    if (window.innerWidth > 600) {
                        if (countBlockAdded <= 2) {
                            productListBlock.classList.add("less_product");
                        }
                    }
                } else if (countBlockAdded == 1) {
                    productListBlock.classList.add("inc_one_product");
                } else if (countBlockAdded <= 3) {
                    productListBlock.classList.add("less_product");
                } else if (countBlockAdded == 3) {
                    productListBlock.classList.add("inc_three_products");
                }
                if (countBlockAdded == 1) {
                    productListBlock.classList.add("inc_one_product");
                }
            } else {
                let countBlockAdded = 0;
                if (bundleProductsArray.length > 0) {
                    bundleProductsArray.forEach(function (mainProductId) {
                        if (duplamid.indexOf(mainProductId) == -1) {
                            duplamid.push(mainProductId);
                            if (
                                INC.config.cartproductids.indexOf(
                                    mainProductId
                                ) == -1
                            ) {
                                var firstProductObjByMainId = INC.dataStore
                                    .methods()
                                    .getFirstProductObjByMainId({
                                        mainId: mainProductId,
                                    });
                                var prd_module =
                                    INC.methods.createProductModuleBlock(
                                        firstProductObjByMainId.id,
                                        "am",
                                        false,
                                        amBlock
                                    );
                                countBlockAdded = countBlockAdded + 1;
                                if (
                                    prd_module.getAttribute("data-id") !=
                                    "undefined"
                                ) {
                                    elAmTitleText.innerText =
                                        "Other customers also viewed";
                                    amProductListBlock.appendChild(prd_module);
                                    elAmTitleText.innerText =
                                        INC.config.BeforeYouChecktext;
                                }
                            }
                        }
                    });
                }

                let productListBlock = amBlock.querySelector(
                    ".inc_af_product-list_block"
                );
                if (window.innerWidth < 769) {
                    if (window.innerWidth > 600) {
                        if (countBlockAdded <= 2) {
                            productListBlock.classList.add("less_product");
                        }
                    } else {
                        if (countBlockAdded <= 3) {
                            productListBlock.classList.add("less_product");
                        }
                    }
                } else {
                    if (countBlockAdded == 1) {
                        productListBlock.classList.add("inc_one_product");
                    } else if (countBlockAdded <= 3) {
                        productListBlock.classList.add("less_product");
                    } else if (countBlockAdded == 3) {
                        productListBlock.classList.add("inc_three_products");
                    }
                }
            }

            var amProductBlocks =
                amBlock.querySelectorAll(".inc_product_block");
            Array.prototype.forEach.call(
                amProductBlocks,
                function (productBlock) {
                    productBlock
                        .querySelector(".inc_product_desc_add_block")
                        .addEventListener("click", function () {
                            addprodsingle(this);
                        });
                }
            );

            var prod_sl_c = 1;
            if (amBlock != null) {
                Array.prototype.forEach.call(
                    document.querySelectorAll(".inc_af_block"),
                    function (el) {
                        el.parentNode.removeChild(el);
                    }
                );
            }
            if (
                amBlock.querySelector(
                    ".inc_af_block .inc_product_showcase_block"
                ) == null
            ) {
                return;
            }
            if (
                amBlock.querySelectorAll(
                    ".inc_af_product-list_block .inc_product_module_block"
                ).length == 1
            ) {
                amBlock
                    .querySelector(".inc_af_product-list_block")
                    .classList.add("inc_one_product");
            }
            // if (!oosStatus && INC.config.pageType == 'pdp') {
            //     amBlock.style.display = 'none'
            // }
           
            if (PDP_type == "PDP") {
                var pdpBlockSibling = document.querySelector(".inc_pdp_block");
                if (pdpBlockSibling != null) {
                    pdpBlockSibling = pdpBlockSibling.nextElementSibling;
                    pdpBlockSibling.parentElement.insertBefore(
                        amBlock,
                        pdpBlockSibling
                    );
                } else {
                    pdpBlockSibling =
                        document.querySelector(".productView").nextElementSibling;
                    if (
                        pdpBlockSibling != null &&
                        pdpBlockSibling != undefined
                    ) {
                        pdpBlockSibling.parentElement.insertBefore(
                            amBlock,
                            pdpBlockSibling
                        );
                    }
                }
            } else {
                if (bundleProductsArray.length > 0) {
                    var CartPos = document.querySelector("header");
                    if (CartPos != null) {
                        if (CartPos.nextElementSibling != null) {
                            CartPos = CartPos.nextElementSibling;
                        }
                        CartPos.parentNode.insertBefore(amBlock, CartPos);
                    }
                }
            }
            amBlock.querySelector(".inc_af_right_btn_block").style.visibility =
                "hidden";
            amBlock.querySelector(".inc_af_right_btn_img").style.visibility =
                "hidden";
            amBlock.querySelector(".inc_af_left_btn_block").style.visibility =
                "hidden";
            amBlock.querySelector(".inc_af_left_btn_img").style.visibility =
                "hidden";
            var productBlocks = amProductListBlock.querySelectorAll(
                ".inc_product_module_block"
            );
            var sliderBtnCounter_rec = 0;
            if (productBlocks.length > prod_sl_c) {
                amBlock.querySelector(
                    ".inc_af_right_btn_block"
                ).style.visibility = "visible";
                amBlock.querySelector(
                    ".inc_af_left_btn_block"
                ).style.visibility = "visible";
                amBlock
                    .querySelector(".inc_af_left_btn_block")
                    .setAttribute("style", "pointer-events: none;opacity:0.5");
                amBlock.querySelector(
                    ".inc_af_right_btn_img"
                ).style.visibility = "visible";
                amBlock.querySelector(".inc_af_left_btn_img").style.visibility =
                    "visible";
                amBlock
                    .querySelector(".inc_af_left_btn_img")
                    .setAttribute("style", "pointer-events: none;opacity:0.5");
            }
            if (window.innerWidth <= 1205) {
                amBlock.querySelector(".inc_af_right_btn_block").style.display =
                    "none";
                amBlock.querySelector(".inc_af_left_btn_block").style.display =
                    "none";
            }
            var cc_ount = 0;
            if (window.innerWidth < 800) {
                cc_ount = 2;
            } else if (window.innerWidth < 1200) {
                cc_ount = 3;
            } else {
                cc_ount = 4;
            }
            if (productBlocks.length <= cc_ount) {
                amBlock.querySelector(
                    ".inc_af_right_btn_block"
                ).style.visibility = "hidden";
                amBlock.querySelector(
                    ".inc_af_right_btn_img"
                ).style.visibility = "hidden";
                amBlock.querySelector(
                    ".inc_af_left_btn_block"
                ).style.visibility = "hidden";
                amBlock.querySelector(".inc_af_left_btn_img").style.visibility =
                    "hidden";
            }
            amBlock
                .querySelector(".inc_af_right_btn_block")
                .addEventListener("click", function () {
                    sliderBtnCounter_rec++;
                    if (sliderBtnCounter_rec > productBlocks.length - 1) {
                        sliderBtnCounter_rec--;
                    }

                    var all_p_length = document.querySelectorAll(
                        ".inc_af_product-list_block .inc_product_module_block"
                    ).length;
                    var cc_ounts = 0;
                    if (window.innerWidth < 800) {
                        cc_ounts = 2;
                    } else if (window.innerWidth < 1200) {
                        cc_ounts = 3;
                    } else {
                        cc_ounts = 4;
                    }
                    var width_slide = "";
                    var wid_sld = document.querySelector(
                        ".inc_af_block .inc_product_module_block"
                    ).clientWidth;
                    if (
                        INC.config.pageType == "pdp" ||
                        INC.config.pageType == "cartPage"
                    ) {
                        width_slide = wid_sld;
                    }
                    if (
                        INC.clientConfig.slidevalue_rec + cc_ounts <
                        all_p_length
                    ) {
                        amBlock.parentNode.parentNode
                            .querySelector(".inc_af_left_btn_block")
                            .setAttribute(
                                "style",
                                "pointer-events: auto;opacity:1"
                            );
                        amBlock.parentNode.parentNode
                            .querySelector(".inc_af_left_btn_img")
                            .setAttribute(
                                "style",
                                "pointer-events: auto;opacity:1"
                            );
                        INC.clientConfig.slidevalue_rec++;
                        var menu = null;
                        INC.clientConfig.offset_rec =
                            parseInt(INC.clientConfig.offset_rec) -
                            width_slide +
                            "px";
                        menu = amBlock.parentNode.parentNode.querySelector(
                            ".inc_af_product-list_block"
                        );
                        menu.setAttribute(
                            "style",
                            "left:" +
                                INC.clientConfig.offset_rec +
                                ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;"
                        );

                        if (
                            document.querySelector(
                                ".inc_af_product-list-dots-main_block .inc_dots.inc_active"
                            ) != null
                        ) {
                            document
                                .querySelector(
                                    ".inc_af_product-list-dots-main_block .inc_dots.inc_active"
                                )
                                .classList.remove("inc_active");
                        }
                        if (
                            document.querySelectorAll(
                                ".inc_af_product-list-dots-main_block .inc_dots"
                            )[+INC.clientConfig.slidevalue_rec] != null
                        ) {
                            document
                                .querySelectorAll(
                                    ".inc_af_product-list-dots-main_block .inc_dots"
                                )
                                [
                                    +INC.clientConfig.slidevalue_rec
                                ].classList.add("inc_active");
                        }
                    }
                    if (
                        +INC.clientConfig.slidevalue_rec + +cc_ounts ==
                        all_p_length
                    ) {
                        amBlock.parentNode.parentNode
                            .querySelector(".inc_af_right_btn_block")
                            .setAttribute(
                                "style",
                                "pointer-events: none;opacity:1.0"
                            );
                        amBlock.parentNode.parentNode
                            .querySelector(".inc_af_right_btn_img")
                            .setAttribute(
                                "style",
                                "pointer-events: none;opacity:0.25"
                            );
                    }
                });

            amBlock
                .querySelector(".inc_af_left_btn_block")
                .addEventListener("click", function () {
                    sliderBtnCounter_rec--;
                    if (sliderBtnCounter_rec == -1) {
                        sliderBtnCounter_rec = 0;
                    }
                    if (INC.clientConfig.slidevalue_rec == -1) {
                        INC.clientConfig.slidevalue_rec = 0;
                    }
                    var wid_sld = document.querySelector(
                        ".inc_af_block .inc_product_module_block"
                    ).clientWidth;
                    var width_slide = "";
                    width_slide = wid_sld;
                    if (INC.clientConfig.slidevalue_rec > 0) {
                        amBlock.parentNode.parentNode
                            .querySelector(".inc_af_right_btn_block")
                            .setAttribute(
                                "style",
                                "pointer-events: auto;opacity:1"
                            );
                        amBlock.parentNode.parentNode
                            .querySelector(".inc_af_right_btn_img")
                            .setAttribute(
                                "style",
                                "pointer-events: auto;opacity:1"
                            );
                        INC.clientConfig.slidevalue_rec--;
                        INC.clientConfig.offset_rec =
                            parseInt(INC.clientConfig.offset_rec) +
                            width_slide +
                            "px";
                        var menu = null;
                        menu = amBlock.parentNode.parentNode.querySelector(
                            ".inc_af_product-list_block"
                        );
                        menu.setAttribute(
                            "style",
                            "left:" +
                                INC.clientConfig.offset_rec +
                                ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;"
                        );

                        if (
                            document.querySelector(
                                ".inc_af_product-list-dots-main_block .inc_dots.inc_active"
                            ) != null
                        ) {
                            document
                                .querySelector(
                                    ".inc_af_product-list-dots-main_block .inc_dots.inc_active"
                                )
                                .classList.remove("inc_active");
                        }
                        if (
                            document.querySelectorAll(
                                ".inc_af_product-list-dots-main_block .inc_dots"
                            )[+INC.clientConfig.slidevalue_rec] != null
                        ) {
                            document
                                .querySelectorAll(
                                    ".inc_af_product-list-dots-main_block .inc_dots"
                                )
                                [
                                    +INC.clientConfig.slidevalue_rec
                                ].classList.add("inc_active");
                        }
                    }
                    if (INC.clientConfig.slidevalue_rec == 0) {
                        amBlock.parentNode.parentNode
                            .querySelector(".inc_af_left_btn_block")
                            .setAttribute(
                                "style",
                                "pointer-events: none;opacity:0.5"
                            );
                        amBlock.parentNode.parentNode
                            .querySelector(".inc_af_left_btn_img")
                            .setAttribute(
                                "style",
                                "pointer-events: none;opacity:0.5"
                            );
                    }
                });

            setTimeout(function () {
                var all_list_el = document.querySelectorAll(
                    ".inc_af_product-list_block .inc_product_showcase_block"
                );
                for (var all_list in all_list_el) {
                    if (
                        Object.prototype.hasOwnProperty.call(
                            all_list_el,
                            all_list
                        )
                    ) {
                        var prd_moduleb = all_list_el[all_list].parentNode;
                        var main_idsd = "";
                        if (prd_moduleb != null) {
                            main_idsd =
                                prd_moduleb.getAttribute("data-main_id");
                        }
                        if (
                            all_list_el[all_list].querySelector(
                                ".inc_product_desc_att_zero_block.inc_active"
                            ) != null
                        ) {
                            if (
                                prd_moduleb.querySelector(
                                    '.inc_product_desc_att_size_list_item_img_block[data-cpid="' +
                                        main_idsd +
                                        '"]'
                                ) != null
                            ) {
                                if (
                                    prd_moduleb.querySelector(
                                        '.inc_product_desc_att_size_list_item_img_block[data-cpid="' +
                                            main_idsd +
                                            '"] .inc_product_desc_att_size_list_item_img_block'
                                    ) != null
                                ) {
                                    prd_moduleb
                                        .querySelector(
                                            '.inc_product_desc_att_size_list_item_img_block[data-cpid="' +
                                                main_idsd +
                                                '"] .inc_product_desc_att_size_list_item_img_block'
                                        )
                                        .click();
                                } else if (
                                    all_list_el[all_list].querySelector(
                                        ".inc_product_desc_att_size_list_item_img_block"
                                    ) != null
                                ) {
                                    all_list_el[all_list]
                                        .querySelector(
                                            ".inc_product_desc_att_size_list_item_img_block"
                                        )
                                        .click();
                                }
                            } else if (
                                all_list_el[all_list].querySelector(
                                    ".inc_product_desc_att_size_list_item_img_block"
                                ) != null
                            ) {
                                all_list_el[all_list]
                                    .querySelector(
                                        ".inc_product_desc_att_size_list_item_img_block"
                                    )
                                    .click();
                            }
                        }

                        if (
                            all_list_el[all_list].querySelector(
                                ".inc_product_desc_att_color_block.inc_active"
                            ) != null
                        ) {
                            if (
                                prd_moduleb.querySelector(
                                    '.inc_product_desc_att_color_list_item_img_block[data-cpid="' +
                                        main_idsd +
                                        '"]'
                                ) != null
                            ) {
                                if (
                                    prd_moduleb.querySelector(
                                        '.inc_product_desc_att_color_list_item_img_block[data-cpid="' +
                                            main_idsd +
                                            '"]'
                                    ) != null
                                ) {
                                    prd_moduleb
                                        .querySelector(
                                            '.inc_product_desc_att_color_list_item_img_block[data-cpid="' +
                                                main_idsd +
                                                '"]'
                                        )
                                        .click();
                                }
                            } else if (
                                all_list_el[all_list].querySelector(
                                    ".inc_product_desc_att_color_list_item_img_block"
                                ) != null
                            ) {
                                all_list_el[all_list]
                                    .querySelector(
                                        ".inc_product_desc_att_color_list_item_img_block"
                                    )
                                    .click();
                            }
                        } else if (
                            all_list_el[all_list].querySelector(
                                ".inc_product_desc_att_size_list_item_img_block"
                            ) != null
                        ) {
                            all_list_el[all_list]
                                .querySelector(
                                    ".inc_product_desc_att_size_list_item_img_block"
                                )
                                .click();
                        }
                    }
                }
                onloadpdp = true;
            }, 400);
            setTimeout(function () {
                var inc_prod_img = document.querySelectorAll(
                    ".inc_product_img_main_img img"
                );
                for (var i_prd_image in inc_prod_img) {
                    if (
                        inc_prod_img[i_prd_image] != null &&
                        Object.prototype.hasOwnProperty.call(
                            inc_prod_img,
                            i_prd_image
                        )
                    ) {
                        inc_prod_img[i_prd_image].setAttribute(
                            "style",
                            INC.config.styleft
                        );
                    }
                }
            }, 500);
        }

        
        // Select ALL Attributes 
       
        if (document.querySelector(".inc_af_block") != null) {
            if (INC.config.pageType == "cartPage") {
                document
                    .querySelector(".inc_af_block")
                    .classList.add("af_cart_page");
            } else if (INC.config.pageType == "pdp") {
                document
                    .querySelector(".inc_af_block")
                    .classList.add("inc_recommendations");
            }
        }
    };

    function addprodsingle(element) {
        var productBlockNode = element.parentNode.parentNode;
        var flag_check = INC.methods.checkVariantSelection(productBlockNode);
        if (
            element.parentNode.parentNode.className == "inc_product_desc_block"
        ) {
            productBlockNode =
                element.parentNode.parentNode.parentNode.parentNode;
        }
        if (
            productBlockNode.classList.contains("inc_product_block") == trueflag
        ) {
            productBlockNode = productBlockNode.parentNode.parentNode;
        }
        var sku = productBlockNode.getAttribute("data-sku");
        if(sku==null){
            sku=productBlockNode.parentNode.parentNode.getAttribute("data-sku");
        }
        var findObj = new INC.classes.FindObj({
            id: sku,
        });
        var add_btn = productBlockNode.querySelector(".inc_product_add_text");
        var add_btn_click = productBlockNode.querySelector(
            ".inc_product_add_text"
        );
        var add_prod_im = productBlockNode.querySelectorAll(
            ".inc_product_desc_add_img"
        );
        if (flag_check == 1) {
            if (INC.config.disablebtn == trueflag) {
                if (
                    element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains(
                        "inc_product_showcase_block"
                    ) == trueflag ||
                    element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains(
                        "inc_product_modal_block"
                    ) == trueflag
                ) {
                    var popbtn = productBlockNode.querySelector(
                        ".inc_product_modal_block .inc_product_desc_add_text"
                    );
                    popbtn.innerText = "Adding To Basket";
                    setTimeout(function () {
                        popbtn.innerText = "Add To Bag";
                    }, 500);
                    productBlockNode.querySelector(
                        ".inc_product_add_text"
                    ).innerText = "Adding To Basket";
                    var rec = false;
                    if (
                        INC.config.pageType == "pdp" &&
                        document.querySelector(".inc_af_block") != null
                    ) {
                        if (
                            document.querySelector(
                                ".sidebar_outer.sidebar_outer_active"
                            ) == null
                        ) {
                            rec = true;
                        }
                    }
                    INC.methods.addProductToCart(
                        findObj,
                        productBlockNode,
                        add_btn_click,
                        add_prod_im,
                        add_btn,
                        popbtn,
                        rec
                    );
                }
            }
        }
    }

    function scrollincelmtoview(element) {
        element.scrollIntoView();
        if (
            window.getComputedStyle(
                document.querySelector(".header-search-container")
            ).opacity == "1"
        ) {
            window.scrollBy(
                0,
                -document.querySelector(".header-search-container").offsetHeight
            );
        }
    }
    INC.methods.createPDPBlock = function (sidebar) {
        document.querySelector("body").classList.add("inc_bundles");
        document.querySelector("html").classList.add("inc-prevent-hor-scroll");
        var empty_sidebarflag = false;
        if (INC.dataStore.dataStoreObj[INC.config.Product_id] != undefined) {
            if (
                INC.dataStore.dataStoreObj[INC.config.Product_id][
                    INC.config.Product_id
                ] != undefined
            ) {
                if (
                    INC.dataStore.dataStoreObj[INC.config.Product_id][
                        INC.config.Product_id
                    ].bundleId == "12345679"
                ) {
                    empty_sidebarflag = true;
                }
            }
        }
        if (
            INC.bundles == falseflag &&
            sidebar != "sidebar" &&
            sidebar != "hidesidebar"
        ) {
            return;
        }
        if (sidebar != "sidebar" && sidebar != "hidesidebar") {
            if (
                INC.dataStore.dataStoreObj.undefined != undefined ||
                empty_sidebarflag == falseflag
            ) {
                var pdpBlock = generate_html_tag("div", "inc_pdp_block");
                pdpBlock.innerHTML = pdp_html;
                pdpBlock.querySelector(
                    ".inc_pdp_bundle_cart_summary_title_text"
                ).innerText = "Total Bundle Price ";
                pdpBlock.setAttribute("style", "clear: both;");
                var modalTitle = pdpBlock.querySelector(".inc_pdp_title_text");
                console.log("Increasingly!!");
                modalTitle.innerText = INC.config.FBTTitle;
                var pdpProductId = INC.dataStore
                    .methods()
                    .getFirstProductObjByMainId({
                        mainId: INC.dataStore.pdpProductId,
                    }).id;

                var firstProductObjByMainId = "";
                var pdpBundleProductListMainBlock = null;
                var mainProductBlock = this.createProductModuleBlock(
                    pdpProductId,
                    "pdp",
                    false,
                    pdpBlock,
                    "mainprod"
                );
                var bundleProductsArray = INC.dataStore.bundleProductsArray;
                var elPdpMainProductBlock = pdpBlock.querySelector(
                    ".inc_pdp_product-main_block"
                );
                elPdpMainProductBlock.appendChild(mainProductBlock);
                pdpBundleProductListMainBlock = pdpBlock.querySelector(
                    ".inc_pdp_bundle_product_list_main_block"
                );
                pdpBundleProductListMainBlock.innerHTML = "";
                var pdpBundleProductListItemsBlock = pdpBlock.querySelector(
                    ".inc_pdp_bundle_product_list_items_block"
                );
                pdpBundleProductListItemsBlock.innerHTML = "";
                var productVisibleCount = "";
                if (window.innerWidth < 820) {
                    productVisibleCount =
                        bundleProductsArray.length > 2
                            ? 2
                            : bundleProductsArray.length;
                } else {
                    productVisibleCount =
                        bundleProductsArray.length > 2
                            ? 5
                            : bundleProductsArray.length;
                }
                //productVisibleCount = (bundleProductsArray.length > 2) ? 2 : bundleProductsArray.length;

                for (var iq = 0; iq < productVisibleCount; iq++) {
                    firstProductObjByMainId = INC.dataStore
                        .methods()
                        .getFirstProductObjByMainId({
                            mainId: bundleProductsArray[iq],
                        });
                    if (Object.keys(firstProductObjByMainId).length !== 0) {
                        var productBlock = this.createProductModuleBlock(
                            firstProductObjByMainId.id,
                            "pdp",
                            true,
                            pdpBlock
                        );
                        productBlock.setAttribute("b-index", iq + 1);
                        pdpBundleProductListMainBlock.appendChild(productBlock);
                        var productListItemBlock =
                            this.createProductListItemBlock(
                                firstProductObjByMainId,
                                "pdp"
                            );
                        pdpBundleProductListItemsBlock.appendChild(
                            productListItemBlock
                        );
                    }
                }
                if (productVisibleCount == 1) {
                    INC.config.singleProd = true;
                }
                var header = pdpBlock.querySelector(
                    ".inc_pdp_bundle_product_header_text"
                );
                if (header != null) {
                    header.innerText = "Frequently Bought with";
                    header.style.textTransform = "none";
                }

                var mainprodimgsrc = pdpBlock
                    .querySelector(
                        ".inc_pdp_product-main_block .inc_product_img_main_img img"
                    )
                    .getAttribute("data-src");
                var secbundleimgsrc = pdpBlock
                    .querySelectorAll(
                        ".inc_pdp_bundle_product_list_main_block .inc_product_img_main_img img"
                    )[0]
                    .getAttribute("data-src");
                var inc_bundle_avail_block = generate_html_tag(
                    "div",
                    "inc_bundle_avail_block"
                );
                var toplevelbundleblock = "";
                if (
                    pdpBlock.querySelectorAll(
                        ".inc_pdp_bundle_product_list_main_block .inc_product_img_main_img img"
                    ).length > 2
                ) {
                    inc_bundle_avail_block.classList.add("INCthreeProducts");
                    var thirdbundleimgsrc = pdpBlock
                        .querySelectorAll(
                            ".inc_pdp_bundle_product_list_main_block .inc_product_img_main_img img"
                        )[2]
                        .getAttribute("data-src");
                    toplevelbundleblock =
                        "<div class='inc_bundle_avail_img_wrapper'><div class='inc_bundle_avail_img'first'><img src='" +
                        mainprodimgsrc +
                        "'></div><span></span> <div class='inc_bundle_avail_img second'><img src='" +
                        secbundleimgsrc +
                        "'></div><div class='inc_bundle_avail_img third'><img src='" +
                        thirdbundleimgsrc +
                        "'></div></div><div class='inc_bundle_avail_btn'>Bundle Available</div>";
                } else {
                    inc_bundle_avail_block.classList.add("INCtwoProducts");
                    toplevelbundleblock =
                        "<div class='inc_bundle_avail_img_wrapper'><div class='inc_bundle_avail_img first'><img src='" +
                        mainprodimgsrc +
                        "'></div><span></span> <div class='inc_bundle_avail_img second'><img src='" +
                        secbundleimgsrc +
                        "'></div></div><div class='inc_bundle_avail_btn'>Bundle Available</div>";
                }
                inc_bundle_avail_block.innerHTML = toplevelbundleblock;
                inc_bundle_avail_block
                    .querySelector(".inc_bundle_avail_btn")
                    .addEventListener("click", function () {
                        INC.methods.trackingEvents(
                            "bundleProductClickTracking",
                            {
                                product_id: INC.dataStore.pdpProductId,
                                core_product_id: INC.dataStore.pdpProductId,
                            },
                            "210"
                        );
                        var pdpelm = document.querySelector(".inc_pdp_block");
                        if (pdpelm != null) {
                            scrollincelmtoview(pdpelm);
                        }
                    });
                var pdpbundleel = document.querySelector(
                    ".wrapper-tabs-product"
                );
                INC.methods.clear();
                var active_price = pdpBlock.querySelector(
                    ".inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_ecirp_regular_text"
                ).innerText;
                var special_price = pdpBlock.querySelector(
                    ".inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_ecirp_active_text"
                ).innerText;
                // if(window.location.href=='https://ukmedi.co.uk/safe-snap-amp-snapper' || window.location.href=='https://ukmedi.co.uk/0-3-litre-black-discreet-sharps-bin/'){
                //     special_price='1'
                //     mismatch = incPriceMismatch(active_price, special_price, INC.config.pdpProductId)
                // }
                
                pdpBlock
                    .querySelector(".inc_pdp_bundle_product_list_items_block")
                    .classList.add("inc_active");
                var pdpBundleCartBlock =
                    this.createPDPBundleCartBlock(pdpBlock);
                var rpdpBundleCartBlock = pdpBlock.querySelector(
                    ".inc_pdp_bundle_cart_block"
                );
                rpdpBundleCartBlock.parentNode.removeChild(rpdpBundleCartBlock);
                pdpBlock
                    .querySelector(".inc_pdp_bundle_block")
                    .appendChild(pdpBundleCartBlock);
                var pdpBlockSibling = document.querySelector(
                    ".page-content.page-content--product"
                );
                var pdpplacement = document.querySelector(
                    ".container .productView"
                );
                if (pdpplacement != null) {
                    pdpplacement = pdpplacement.nextElementSibling;
                }
                var fabricavail = false;
                var client_var_size = "";
                var client_var = "";
                var swatch1 = "";
                var swatch2 = "";
                if (
                    document.querySelectorAll(
                        ".product-wrapper .product-form__item .image-radio input"
                    ) != null
                ) {
                    swatch1 = document.querySelectorAll(
                        ".product-wrapper .product-form__item .image-radio input"
                    );
                    for (var m = 0; m < swatch1.length; m++) {
                        if (swatch1[m].checked) {
                            client_var_size = swatch1[m].value.toLowerCase();
                            break;
                        }
                    }
                }
                if (
                    document.querySelectorAll(
                        ".product-wrapper .product-form__item.colors .image-radio"
                    ) != null
                ) {
                    swatch2 = document.querySelectorAll(
                        ".product-wrapper .product-form__item.colors .image-radio"
                    );
                    for (var m__ = 0; m__ < swatch2.length; m__++) {
                        if (swatch2[m__].classList.contains("current")) {
                            client_var = swatch2[m__]
                                .querySelector("input")
                                .value.replace("-", " ");
                            break;
                        }
                    }
                }
                if (
                    document.querySelector(".product-options-wrapper select") !=
                    null
                ) {
                    var selvar_ = document.querySelector(
                        ".product-options-wrapper select"
                    );
                    client_var = selvar_.options[
                        selvar_.selectedIndex
                    ].innerText
                        .trim()
                        .toLocaleLowerCase();
                }
                if (
                    document.querySelector(
                        ".product-add-form .swatch-option"
                    ) != null &&
                    client_var == ""
                ) {
                    if (
                        document
                            .querySelector(".product-add-form .swatch-option")
                            .getAttribute("data-option-label") != null
                    ) {
                        client_var = document
                            .querySelector(".product-add-form .swatch-option")
                            .getAttribute("data-option-label")
                            .trim()
                            .toLocaleLowerCase();
                    } else if (
                        document.querySelector(
                            ".page-product-bundle .fieldset-bundle-options .option .option+.label"
                        ) != null
                    ) {
                        client_var = document
                            .querySelector(
                                ".page-product-bundle .fieldset-bundle-options .option .option+.label"
                            )
                            .parentNode.innerText.trim()
                            .toLocaleLowerCase();
                    }
                }
                if (
                    pdpBlock.querySelector(
                        '.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                            client_var_size +
                            '"]'
                    ) != null
                ) {
                    pdpBlock
                        .querySelector(
                            '.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                client_var_size +
                                '"]'
                        )
                        .click();
                } else if (
                    pdpBlock.querySelector(
                        ".inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block"
                    ) != undefined
                ) {
                    pdpBlock
                        .querySelector(
                            ".inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block"
                        )
                        .click();
                }
                if (
                    pdpBlock.querySelector(
                        '.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                            client_var +
                            '"]'
                    ) != null
                ) {
                    pdpBlock
                        .querySelector(
                            '.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                client_var +
                                '"]'
                        )
                        .click();
                } else if (
                    pdpBlock.querySelector(
                        ".inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block"
                    ) != undefined
                ) {
                    pdpBlock
                        .querySelector(
                            ".inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block"
                        )
                        .click();
                }

                var el_all_list_main1 = pdpBlock.querySelectorAll(
                    ".inc_pdp_product-main_block .inc_product_showcase_block"
                );
                for (var li in el_all_list_main1) {
                    if (
                        el_all_list_main1[li] != null &&
                        Object.prototype.hasOwnProperty.call(
                            el_all_list_main1,
                            li
                        )
                    ) {
                        if (
                            el_all_list_main1[li].querySelector(
                                '.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolor="' +
                                    client_var +
                                    '"] div'
                            ) != null
                        ) {
                            el_all_list_main1[li]
                                .querySelector(
                                    '.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolor="' +
                                        client_var +
                                        '"] div'
                                )
                                .click();
                        } else if (
                            el_all_list_main1[li].querySelector(
                                ".inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block div"
                            ) != null
                        ) {
                            el_all_list_main1[li]
                                .querySelector(
                                    ".inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block div"
                                )
                                .click();
                        }
                    }
                }
                
                if (mismatch) {
                    inc_bundle_avail_block.style.display = "none";
                    pdpBlock.style.display = "none";
                }
                if (pdpplacement != null) {
                    pdpplacement.parentNode.insertBefore(
                        pdpBlock,
                        pdpplacement
                    );
                    if (pdpbundleel != null) {
                        if (
                            document.querySelector(".inc_bundle_avail_block") ==
                            null
                        ) {
                            pdpbundleel.parentNode.insertBefore(
                                inc_bundle_avail_block,
                                pdpbundleel
                            );
                        }
                    }
                } else if (pdpBlockSibling != null) {
                    pdpBlockSibling.appendChild(pdpBlock);
                    if (pdpbundleel != null) {
                        if (
                            document.querySelector(".inc_bundle_avail_block") ==
                            null
                        ) {
                            pdpbundleel.parentNode.insertBefore(
                                inc_bundle_avail_block,
                                pdpbundleel
                            );
                        }
                    }
                }

                var elProductAddBlock = pdpBlock.querySelectorAll(
                    ".inc_product_desc_add_block"
                );
                var productBlocks = pdpBlock
                    .querySelector(".inc_pdp_bundle_product_list_block")
                    .querySelectorAll(".inc_product_module_block");
                if (
                    document.querySelector(
                        ".inc_pdp_product-main_block .inc_product_desc_title_text_header"
                    ) != null
                ) {
                    document.querySelector(
                        ".inc_pdp_product-main_block .inc_product_desc_title_text_header"
                    ).innerHTML = "Selected Product";
                    document.querySelector(
                        ".inc_pdp_product-main_block .inc_product_desc_title_text_header"
                    ).style.textTransform = "none";
                }
                pdpBlock
                    .querySelector(".inc_pdp_bundle_product_left-btn_block")
                    .setAttribute("style", "pointer-events: none;opacity:0.5");
                pdpBlock
                    .querySelector(".inc_pdp_bundle_product_left-btn_img")
                    .setAttribute("style", "opacity:0.5");
                pdpBlock
                    .querySelector(".inc_pdp_bundle_product_left-btn_img")
                    .setAttribute("title", "Scroll left");
                pdpBlock
                    .querySelector(".inc_pdp_bundle_product_right-btn_img")
                    .setAttribute("title", "Scroll right");
                var sliderBtnCounter = 0;
                var lengthCount = productBlocks.length + 1;
                var prd_length = 1;
                if (window.innerWidth > 800) {
                    prd_length = 2;
                }
                if (productBlocks.length > prd_length) {
                    pdpBlock
                        .querySelector(
                            ".inc_pdp_bundle_product_right-btn_block"
                        )
                        .addEventListener("click", function () {
                            var prod_c = 2;
                            var width_prod = 255;
                            if (window.innerWidth < 1150) {
                                width_prod = 250;
                            }
                            if (window.innerWidth <= 820) {
                                width_prod = 255;
                            } else if (window.innerWidth > 1023) {
                                if (window.innerWidth > 1023) {
                                    width_prod = 250;
                                } else {
                                    width_prod = 276;
                                }
                            }
                            if (window.innerWidth < 1150) {
                                prod_c = 1;
                            }
                            if (
                                INC.clientConfig.slidevalue + prod_c <
                                productBlocks.length
                            ) {
                                pdpBlock
                                    .querySelector(
                                        ".inc_pdp_bundle_product_left-btn_block"
                                    )
                                    .setAttribute(
                                        "style",
                                        "pointer-events: auto;opacity:1"
                                    );
                                pdpBlock
                                    .querySelector(
                                        ".inc_pdp_bundle_product_left-btn_img"
                                    )
                                    .setAttribute("style", "opacity:1");
                                INC.clientConfig.slidevalue++;
                                INC.clientConfig.offset =
                                    parseInt(INC.clientConfig.offset) -
                                    width_prod +
                                    "px";
                                var menu = pdpBlock.querySelector(
                                    ".inc_pdp_bundle_product_list_main_block"
                                );
                                menu.setAttribute(
                                    "style",
                                    "margin-left:" +
                                        INC.clientConfig.offset +
                                        ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;"
                                );
                            }
                            if (
                                INC.clientConfig.slidevalue + prod_c ==
                                productBlocks.length
                            ) {
                                pdpBlock
                                    .querySelector(
                                        ".inc_pdp_bundle_product_right-btn_block"
                                    )
                                    .setAttribute(
                                        "style",
                                        "pointer-events: none;opacity:0.5"
                                    );
                                pdpBlock
                                    .querySelector(
                                        ".inc_pdp_bundle_product_right-btn_img"
                                    )
                                    .setAttribute("style", "opacity:0.5");
                            }
                            sliderBtnCounter++;
                            if (sliderBtnCounter > lengthCount - 3) {
                                sliderBtnCounter--;
                            }
                        });
                    pdpBlock
                        .querySelector(".inc_pdp_bundle_product_left-btn_block")
                        .addEventListener("click", function () {
                            var width_prod = 255;
                            if (window.innerWidth < 1150) {
                                width_prod = 250;
                            }
                            if (window.innerWidth <= 820) {
                                width_prod = 255;
                            } else if (window.innerWidth > 1023) {
                                if (window.innerWidth > 1023) {
                                    width_prod = 250;
                                } else {
                                    width_prod = 276;
                                }
                            }

                            if (INC.clientConfig.slidevalue == -1) {
                                INC.clientConfig.slidevalue = 0;
                            }

                            if (INC.clientConfig.slidevalue > 0) {
                                pdpBlock
                                    .querySelector(
                                        ".inc_pdp_bundle_product_right-btn_block"
                                    )
                                    .setAttribute(
                                        "style",
                                        "pointer-events: auto;opacity:1"
                                    );
                                pdpBlock
                                    .querySelector(
                                        ".inc_pdp_bundle_product_right-btn_img"
                                    )
                                    .setAttribute("style", "opacity:1");
                                INC.clientConfig.slidevalue--;
                                INC.clientConfig.offset =
                                    parseInt(INC.clientConfig.offset) +
                                    width_prod +
                                    "px";
                                var menu = pdpBlock.querySelector(
                                    ".inc_pdp_bundle_product_list_main_block"
                                );
                                menu.setAttribute(
                                    "style",
                                    "margin-left:" +
                                        INC.clientConfig.offset +
                                        ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;"
                                );
                            }
                            if (INC.clientConfig.slidevalue == 0) {
                                pdpBlock
                                    .querySelector(
                                        ".inc_pdp_bundle_product_left-btn_block"
                                    )
                                    .setAttribute(
                                        "style",
                                        "pointer-events: none;opacity:0.5"
                                    );
                                pdpBlock
                                    .querySelector(
                                        ".inc_pdp_bundle_product_left-btn_img"
                                    )
                                    .setAttribute("style", "opacity:0.5");
                            }
                            sliderBtnCounter--;
                            if (sliderBtnCounter == -1) {
                                sliderBtnCounter = 0;
                            }
                        });
                }
                if (productBlocks.length <= prd_length) {
                    console.log(
                        "verdict " + productBlocks.length <= prd_length
                    );
                    console.log(productBlocks.length + " " + prd_length);
                    pdpBlock.querySelector(
                        ".inc_pdp_bundle_product_right-btn_block"
                    ).style.visibility = "hidden";
                    pdpBlock.querySelector(
                        ".inc_pdp_bundle_product_left-btn_block"
                    ).style.visibility = "hidden";
                }
                setTimeout(function () {
                    for (var iw = 0; iw < 8; iw++) {
                        if (
                            typeof elProductAddBlock[iw] != "undefined" &&
                            iw % 2 != 0
                        ) {
                            if (iw == 1 || iw == 3 || iw == 5) {
                                elProductAddBlock[iw].click();
                            }
                        }
                    }
                }, 100);

                setTimeout(function () {
                    if (
                        fabricavail == trueflag &&
                        client_var != "" &&
                        client_var != undefined
                    ) {
                        if (
                            document.querySelector(
                                '.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[data-optid="' +
                                    client_var +
                                    '"] div'
                            ) != null
                        ) {
                            document
                                .querySelector(
                                    '.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[data-optid="' +
                                        client_var +
                                        '"] div'
                                )
                                .click();
                        }
                    }

                    if (
                        document.querySelector(".inc_bundle_avail_block img") !=
                            null &&
                        document.querySelector(
                            ".inc_pdp_product-main_block .inc_product_img_block img"
                        ) != null
                    ) {
                        document.querySelector(
                            ".inc_bundle_avail_block img"
                        ).src = document
                            .querySelector(
                                ".inc_pdp_product-main_block .inc_product_img_block img"
                            )
                            .getAttribute("data-src");
                    }
                    if (
                        document.querySelector(
                            ".inc_bundle_avail_img.second img"
                        ) != undefined &&
                        document.querySelectorAll(
                            ".inc_pdp_bundle_product_list_main_block .inc_product_showcase_block .inc_product_img_main_img img"
                        )[0] != undefined
                    ) {
                        var secimg = document.querySelectorAll(
                            ".inc_pdp_bundle_product_list_main_block .inc_product_showcase_block .inc_product_img_main_img img"
                        )[0].src;
                        document.querySelector(
                            ".inc_bundle_avail_img.second img"
                        ).src = secimg;
                    }
                    if (
                        document.querySelector(
                            ".inc_bundle_avail_img.third img"
                        ) != undefined &&
                        document.querySelectorAll(
                            ".inc_pdp_bundle_product_list_main_block .inc_product_showcase_block .inc_product_img_main_img img"
                        )[1] != undefined
                    ) {
                        var thirdimg_ = document.querySelectorAll(
                            ".inc_pdp_bundle_product_list_main_block .inc_product_showcase_block .inc_product_img_main_img img"
                        )[1].src;
                        document.querySelector(
                            ".inc_bundle_avail_img.third img"
                        ).src = thirdimg_;
                    }
                    var selectedSwatch = document.querySelectorAll(
                        ".swatches .selected a"
                    );
                    for (var s = 0; s < selectedSwatch.length; s++) {
                        var sswatch = selectedSwatch[s].title;
                        var fbtEleSize = document.querySelectorAll(
                            '.inc_pdp_block .inc_product_modal_block .inc_product_desc_att_block [data-size="' +
                                sswatch +
                                '"]'
                        );
                        for (
                            let fbtEleS_ = 0;
                            fbtEleS_ < fbtEleSize.length;
                            fbtEleS_++
                        ) {
                            fbtEleSize[fbtEleS_].click();
                        }
                        var fbtEleColor = document.querySelectorAll(
                            '.inc_pdp_block .inc_product_modal_block .inc_product_desc_att_block [data-color="' +
                                sswatch +
                                '"]'
                        );
                        for (
                            var fbtEleC_ = 0;
                            fbtEleC_ < fbtEleColor.length;
                            fbtEleC_++
                        ) {
                            fbtEleColor[fbtEleC_].click();
                        }
                    }
                }, 500);
                setTimeout(function () {
                    onloadpdp = true;
                    onloadpdp_delete = true;
                    if (document.querySelector(".inc_pdp_block") == null) {
                        if (
                            document.querySelector(".inc_bundle_avail_block") !=
                            null
                        ) {
                            Array.prototype.forEach.call(
                                document.querySelectorAll(
                                    ".inc_bundle_avail_block"
                                ),
                                function (reme) {
                                    reme.parentNode.removeChild(reme);
                                }
                            );
                        }
                    }
                    var inc_prod_img = document.querySelectorAll(
                        ".inc_product_img_main_img img"
                    );
                    for (var im in inc_prod_img) {
                        if (
                            inc_prod_img[im] != undefined &&
                            Object.prototype.hasOwnProperty.call(
                                inc_prod_img,
                                im
                            )
                        ) {
                            inc_prod_img[im].setAttribute(
                                "style",
                                INC.config.styleft
                            );
                        }
                    }
                    if(document.querySelector('.inc_pdp_product-main_block .inc_product_variant_simple_text.config') != null){
                        var sel_text_m = document.querySelector('.inc_pdp_product-main_block .inc_product_variant_simple_text.config').getAttribute('title')
                        document.querySelector('.inc_pdp_product-main_block .inc_product_variant_simple_text.config').innerHTML = '<span class="variant_span">'+sel_text_m+'</span>'
                    }
                }, 2000);
                if (INC.config.singleProd) {
                    document
                        .querySelector(".inc_pdp_bundle_block")
                        .classList.add("inc_pdp_single_prod");
                }
                setTimeout(function () {
                    let all_pdp_size = document.querySelectorAll(
                        ".inc_pdp_bundle_block .inc_product_modal_block .inc_product_desc_att_size_list_block"
                    );
                    for (let i = 0; i < all_pdp_size.length; i++) {
                        if (
                            all_pdp_size[i].querySelector(
                                ".inc_product_desc_att_size_list_item_img_block"
                            ) != null
                        ) {
                            all_pdp_size[i]
                                .querySelector(
                                    ".inc_product_desc_att_size_list_item_img_block"
                                )
                                .click();
                        }
                    }
                }, 500);
            }
        }

        if (sidebar == "sidebar") {
            this.createSidebarBlock();
        }
    };
    INC.methods.createPDPBundleCartBlock = function (pdpBlock) {
        var pdpBundleCartBlock = pdpBlock.querySelector(
            ".inc_pdp_bundle_cart_block"
        );
        var elBundleCartTitleText = pdpBlock.querySelector(
            ".inc_pdp_bundle_cart_title_text"
        );
        var elBundleCartAddedBlock = pdpBlock.querySelector(
            ".inc_pdp_bundle_cart_added_block"
        );
        var elBundleCartSummaryViewBtnText = pdpBlock.querySelector(
            ".inc_pdp_bundle_cart_summary_view_btn_text"
        );
        var elBundleCartAddBtnBlock = pdpBlock.querySelector(
            ".inc_pdp_bundle_cart_summary_add_btn_block"
        );
        var elBundleCartAddBtncollectionBlock = pdpBlock.querySelector(
            ".inc_pdp_bundle_cart_summary_add_btn_collection_block"
        );

        elBundleCartTitleText.innerText =
            INC.config.deviceType == "Total Bundle Price "
        elBundleCartAddedBlock.innerHTML = "";
        elBundleCartSummaryViewBtnText.innerText = "Added items";

        if (elBundleCartAddBtnBlock != null) {
            elBundleCartAddBtnBlock.addEventListener("click", function () {
                addbundlefn_(this);
            });
        }
        if (elBundleCartAddBtncollectionBlock != null) {
            elBundleCartAddBtncollectionBlock.addEventListener(
                "click",
                function () {
                    addbundlefn_(this);
                }
            );
        }
        return pdpBundleCartBlock;
    };

    function addbundlefn_(elm) {
        if (window.innerWidth < 820) {
            checkAddedProductInJustAdded();
        }

        elm.classList.add("inc_loading");
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        var prd_length = 2;
        if (window.innerWidth >= 820) {
            prd_length = 3;
        }

        document
            .querySelector(".inc_pdp_bundle_product_list_main_block")
            .setAttribute("style", "margin-left: 0");
        if (
            document.querySelectorAll(
                ".inc_pdp_block .inc_product_module_block"
            ).length > prd_length
        ) {
            document
                .querySelector(".inc_pdp_bundle_product_left-btn_block")
                .setAttribute("style", "pointer-events: none;opacity:0.5");
            document
                .querySelector(".inc_pdp_bundle_product_left-btn_img")
                .setAttribute("style", "opacity:0.5");
            document
                .querySelector(".inc_pdp_bundle_product_right-btn_block")
                .setAttribute("style", "pointer-events: auto;opacity:1");
            document
                .querySelector(".inc_pdp_bundle_product_right-btn_img")
                .setAttribute("style", "opacity:1");
        }
        if (INC.config.disablebtn == trueflag) {
            var btn_cart = elm;
            btn_cart.classList.add("inc_loading");
            var recs_ = false;
            INC.methods.addBundleToCart(btn_cart, recs_);
        }
    }

    function remsidebarelm() {
        if (document.querySelector(".sidebar_outer") != null) {
            Array.prototype.forEach.call(
                document.querySelectorAll(".sidebar_outer"),
                function (el) {
                    el.parentNode.removeChild(el);
                }
            );

            Array.prototype.forEach.call(
                document.querySelectorAll(".sidebar_outer"),
                function (el) {
                    el.parentNode.removeChild(el);
                }
            );
        }
        if (document.querySelector(".inc_sidebar_modal_block") != null) {
            Array.prototype.forEach.call(
                document.querySelectorAll(".inc_sidebar_modal_block"),
                function (el) {
                    el.parentNode.removeChild(el);
                }
            );

            Array.prototype.forEach.call(
                document.querySelectorAll(".inc_sidebar_overlay_block"),
                function (el_) {
                    el_.parentNode.removeChild(el_);
                }
            );
        }
    }
    INC.methods.createSidebarBlock = function () {
        var dataStore = INC.dataStore;
        var sidebar_dialoge_block = document.createElement("div");
        sidebar_dialoge_block.classList.add("sidebar_outer");
        sidebar_dialoge_block.innerHTML = sidebar_html;
        var sbBlock = sidebar_dialoge_block.querySelector(
            ".inc_sidebar_modal_block"
        );

        sbBlock.querySelector(".inc_cart_added_list_block").innerHTML = "";

        var elHeaderContinueText = sbBlock.querySelector(
            ".inc_header_continue_text"
        );
        var elHeaderTitleText = sbBlock.querySelector(".inc_header_title_text");
        var elHeaderItemCountTitleText = sbBlock.querySelector(
            ".inc_header_item_count_title_text"
        );
        var elRecommendedTitleText = sbBlock.querySelector(
            ".inc_recommended_title_text"
        );
        var elRecommendedTabsListBlock = sbBlock.querySelector(
            ".inc_recommended_tabs_list_block"
        );
        var elRecommendedProductsListBlock = sbBlock.querySelector(
            ".inc_recommended_products_list_block"
        );
        var elCheckoutContinueBtnText = sbBlock.querySelector(
            ".inc_checkout_continue_btn_text"
        );
        var elCheckoutBasketBtnText = sbBlock.querySelector(
            ".inc_checkout_basket_btn_text"
        );
        var elheaditemblock = sbBlock.querySelector(".inc_header_item_block");
        var elheadtitleblock = sbBlock.querySelector(".inc_header_title_block");
        var elclosesidebar = document.querySelector(".close_modal_inc");
        if (elclosesidebar != null) {
            elclosesidebar.addEventListener("click", function () {
                closesidebar();
            });
        }
        elheaditemblock.addEventListener("click", function () {
            var cnt = document
                .querySelector(".inc_header_item_count_title_text")
                .getAttribute("added_counts");
            if (cnt >= 1) {
                if (
                    document
                        .querySelector(".inc_sidebar_cart_added_block")
                        .classList.contains("inc_active") == trueflag
                ) {
                    document
                        .querySelector(".inc_sidebar_cart_added_block")
                        .classList.remove("inc_active");
                    var alladdedprodlength = document.querySelectorAll(
                        ".inc_cart_added_product_block"
                    ).length;
                    var morecount = 2;
                    if (window.innerWidth <= 769) {
                        morecount = 1;
                    }
                    if (alladdedprodlength > morecount) {
                        var tcount =
                            alladdedprodlength - morecount + " more item(s)";
                        document.querySelector(
                            ".inc_header_item_count_title_text"
                        ).innerText = "+" + tcount;
                        document
                            .querySelector(".inc_header_item_count_title_text")
                            .setAttribute(
                                "added_counts",
                                alladdedprodlength - morecount
                            );
                    } else {
                        document.querySelector(
                            ".inc_header_item_count_title_text"
                        ).innerText = "";
                    }
                } else {
                    document.querySelector(
                        ".inc_header_item_count_title_text"
                    ).innerText = "";
                    document
                        .querySelector(".inc_sidebar_cart_added_block")
                        .classList.add("inc_active");
                }
            }
        });
        var close_sisebar_icon = generate_html_tag(
            "span",
            "close_sisebar_icon"
        );
        elheadtitleblock.appendChild(close_sisebar_icon);
        elRecommendedProductsListBlock.setAttribute("role", "contentinfo");
        elRecommendedProductsListBlock.setAttribute("tabindex", 0);
        elHeaderContinueText.innerText = "Back";
        elHeaderTitleText.innerText = "JUST ADDED TO YOUR BASKET";
        elHeaderTitleText.style.textTransform = "none";

        if (dataStore.bundleCartProducts != undefined) {
            elHeaderItemCountTitleText.innerText = "Subtotal ";
            elRecommendedTitleText.innerText = INC.config.BeforeYouChecktext;
            elRecommendedTitleText.style.textTransform = "none";
            elCheckoutContinueBtnText.innerText = "Proceed to checkout";
            var elCheckoutLink = elCheckoutBasketBtnText.querySelector(
                ".view_basket_checkout"
            );
            elCheckoutLink.setAttribute("href", INC.clientConfig.checkoutLink);

            var productCategoriesArray = dataStore
                .methods()
                .getUniqueCatergories();
            elRecommendedTabsListBlock.innerHTML = "";
            elRecommendedProductsListBlock.innerHTML = "";
            var category_count = 0;
            elRecommendedTabsListBlock.classList.add(
                "inc_categ_" + Object.keys(productCategoriesArray).length
            );

            productCategoriesArray.forEach(function (productCategory) {
                if (category_count < 5 && productCategory != undefined) {
                    category_count++;
                    var sidebarTabsListItemBlock = generate_html_tag(
                        "div",
                        "inc_recommended_tabs_list_item_block"
                    );
                    var tablistitm =
                        '<div class="inc_recommended_tabs_list_item_text_block"><div class="inc_recommended_tabs_list_item_text"></div></div>';
                    sidebarTabsListItemBlock.innerHTML = tablistitm;
                    var sidebarTabsListItemText =
                        sidebarTabsListItemBlock.querySelector(
                            ".inc_recommended_tabs_list_item_text"
                        );
                    sidebarTabsListItemText.parentNode.parentNode.setAttribute(
                        "title",
                        productCategory
                    );
                    sidebarTabsListItemText.innerText =
                        productCategory.toLocaleLowerCase();
                    sidebarTabsListItemText.setAttribute(
                        "style",
                        "text-transform:capitalize;"
                    );
                    sidebarTabsListItemBlock.addEventListener(
                        "click",
                        function () {
                            var elrecprdlistblk = sbBlock.querySelector(
                                ".inc_recommended_products_list_block"
                            );
                            if (elrecprdlistblk != null) {
                                elrecprdlistblk.innerHTML = "";
                            }
                            Array.prototype.forEach.call(
                                elRecommendedTabsListBlock.querySelectorAll(
                                    ".inc_recommended_tabs_list_item_block"
                                ),
                                function (elTabsItemBlock) {
                                    elTabsItemBlock.classList.remove(
                                        "inc_active"
                                    );
                                }
                            );
                            sidebarTabsListItemBlock.classList.add(
                                "inc_active"
                            );
                            INC.methods.updateSidebarProductsList(
                                elrecprdlistblk,
                                productCategory
                            );
                            enableSidebarAttr()
                        }
                    );
                    elRecommendedTabsListBlock.setAttribute("tabindex", 0);
                    elRecommendedTabsListBlock.appendChild(
                        sidebarTabsListItemBlock
                    );
                }
            });
            if (
                elRecommendedTabsListBlock.querySelector(
                    ".inc_recommended_tabs_list_item_block"
                ) != null
            ) {
                elRecommendedTabsListBlock
                    .querySelector(".inc_recommended_tabs_list_item_block")
                    .click();
            } else {
                elRecommendedTitleText.style.display = "none";
            }
            var sbcontinue = sbBlock.querySelector(
                ".inc_header_continue_block"
            );
            sbcontinue.addEventListener("click", function () {
                closesidebar();
            });
            sbBlock
                .querySelector(".inc_checkout_continue_block")
                .addEventListener("click", function () {
                    this.querySelector(
                        ".inc_checkout_continue_btn_block"
                    ).classList.add("inc_loading");
                    window.location.replace("https://ukmedi.co.uk/checkout");
                });
            close_sisebar_icon.addEventListener("click", function () {
                closesidebar();
            });
            sbBlock
                .querySelector(".inc_checkout_basket_block")
                .addEventListener("click", function () {
                    this.querySelector(
                        ".inc_checkout_basket_btn_block"
                    ).classList.add("inc_loading");
                    window.location.replace("https://ukmedi.co.uk/cart.php");
                });
            var body = document.querySelector("body");
            body.appendChild(sidebar_dialoge_block);
            var elSideBarOverlayBlock = document.createElement("div");
            elSideBarOverlayBlock.setAttribute(
                "class",
                "inc_sidebar_overlay_block"
            );
            elSideBarOverlayBlock.addEventListener("click", function () {
                if (window.innerWidth < 820) {
                    closesidebar();
                } else {
                    document.querySelector(
                        ".inc_sidebar_overlay_block"
                    ).style.display = "none";
                    if (
                        document.querySelector(
                            ".mini-cart-content.hidden-mob.open-cart"
                        ) != null
                    ) {
                        document
                            .querySelector(
                                ".mini-cart-content.hidden-mob.open-cart"
                            )
                            .classList.remove("open-cart");
                    }
                    if (
                        document.querySelector(
                            ".mini-cart-label.active-cart"
                        ) != null
                    ) {
                        document
                            .querySelector(".mini-cart-label.active-cart")
                            .classList.remove("active-cart");
                    }
                }
            });
            elSideBarOverlayBlock.style.display = "none";
            body.appendChild(elSideBarOverlayBlock);
            if (INC.dataStore.dataStoreObj.undefined != undefined) {
                if (
                    document.querySelector(".inc_recommended_products_block") !=
                    null
                ) {
                    document.querySelector(
                        ".inc_recommended_products_block"
                    ).style.display = "none";
                }
            }

            function insertBefore(newNode, existingNode) {
                existingNode.parentNode.insertBefore(newNode, existingNode);
            }

            let continueBlock = sbBlock.querySelector(
                ".inc_header_continue_block"
            );
            let titleBlockSidebar = sbBlock.querySelector(
                ".inc_sidebar_modal_cart_and_title_block"
            );
            insertBefore(continueBlock, titleBlockSidebar);
        }

        setTimeout(function () {
            if (
                document.querySelector(
                    ".inc_recommended_products_list_block"
                ) != null
            ) {
                document
                    .querySelector(".inc_recommended_products_list_block")
                    .setAttribute("role", "contentinfo");
            }
            var inc_prod_img = document.querySelectorAll(
                ".inc_product_img_main_img img"
            );
            for (var ig in inc_prod_img) {
                if (
                    inc_prod_img[ig] != null &&
                    Object.prototype.hasOwnProperty.call(inc_prod_img, ig)
                ) {
                    inc_prod_img[ig].setAttribute("style", INC.config.styleft);
                }
            }
        }, 100);
    };

    function closesidebar() {
        document.querySelector("html").classList.remove("inc_overlay");
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = [];
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    }
    INC.methods.updateSidebarBlock = function (mainord, elprd) {
        var subtotalactiveprice = 0;
        var subtotalregukarprice = 0;
        var dataStore = INC.dataStore;
        var qty = "";
        var sbBlock = document.querySelector(".inc_sidebar_modal_block");
        if (sbBlock != null) {
            var sidebarHeaderItemCountTitleText = sbBlock.querySelector(
                ".inc_header_item_count_title_text"
            );
            var elHeadersubtotalactivetext = sbBlock.querySelector(
                ".inc_cart_added_product_desc_subtotal_ecirp_active_text"
            );
            var elHeadersubtotalregulartext = sbBlock.querySelector(
                ".inc_cart_added_product_desc_subtotal_ecirp_regular_text"
            );
            var sbCartBlock = sbBlock.querySelector(
                ".inc_cart_added_list_block"
            );
            var sidebarHeaderseelesstext = sbBlock.querySelector(
                ".inc_header_item_count_figure_text"
            );
            sidebarHeaderseelesstext.innerText = "";
            sbCartBlock.innerHTML = "";
            var bundleCartProductsArray = "";
            if (mainord != null && mainord != undefined) {
                INC.dataStore["bundleCartProducts"] = {};
                INC.dataStore["bundleCartProducts"][mainord] = 1;
                bundleCartProductsArray = Object.keys(
                    dataStore.bundleCartProducts
                );
            } else {
                bundleCartProductsArray = Object.keys(
                    dataStore.bundleCartProducts
                );
            }
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal ";
            var headerItemCountFigureText = 0;
            subtotalactiveprice = 0;
            subtotalregukarprice = 0;
            var error_message = "";
            var oosname = [];
            var oosids = [];
            var remerrorjust = document.querySelectorAll(".inc_justerror");
            for (var r in remerrorjust) {
                if (
                    remerrorjust[r] != null &&
                    Object.prototype.hasOwnProperty.call(remerrorjust, r)
                ) {
                    remerrorjust[r].parentNode.removeChild(remerrorjust[r]);
                }
            }
            bundleCartProductsArray.forEach(function (productSKU) {
                if (dataStore.bundleCartProducts[productSKU] < 1) {
                    dataStore.bundleCartProducts[productSKU] = 1;
                }
                var findObj = new INC.classes.FindObj({
                    sku: productSKU,
                });
                if (mainord != null && mainord != undefined) {
                    qty = elprd.querySelector(
                        ".inc_product_modal_block .inc_product_qty_block input"
                    ).value;
                } else {
                    qty = dataStore.bundleCartProducts[productSKU];
                }
                var productObj = INC.dataStore
                    .methods()
                    .getProductBySKU(findObj);
                if (INC.clientConfig.OOS.indexOf(productObj.sku) >= 0) {
                    if (
                        oosname.indexOf(productObj.name) == -1 &&
                        oosids.indexOf(productObj.sku) == -1
                    ) {
                        error_message = "";
                        oosids.push(productObj.mainId);
                        oosname.push(productObj.name);
                        if (error_message == "") {
                            error_message =
                                "<span>" +
                                productObj.name +
                                "</span>" +
                                " - " +
                                "<span>The requested quantity is not available</span>";
                        } else {
                            error_message =
                                error_message +
                                " <br> " +
                                "<span>" +
                                productObj.name +
                                "</span>" +
                                " - " +
                                "<span>The requested quantity is not available</span>";
                        }
                        var headertitle = sbBlock.querySelector(
                            ".inc_sidebar_modal_cart_and_title_block"
                        );
                        var errormes = generate_html_tag(
                            "div",
                            "inc_justerror"
                        );
                        var errorimg = generate_html_tag("img", "errorimg");
                        errorimg.src = productObj.imageURL;
                        errormes.appendChild(errorimg);
                        var errormestext = generate_html_tag(
                            "span",
                            "inc_justerror_text"
                        );
                        errormestext.innerHTML = error_message;
                        errormes.appendChild(errormestext);
                        headertitle.parentNode.insertBefore(
                            errormes,
                            headertitle
                        );
                        setTimeout(function () {
                            var remoerroblk =
                                document.querySelectorAll(".inc_justerror");
                            for (var re in remoerroblk) {
                                if (
                                    remoerroblk[re] != null &&
                                    Object.prototype.hasOwnProperty.call(
                                        remoerroblk,
                                        re
                                    )
                                ) {
                                    remoerroblk[re].parentNode.removeChild(
                                        remoerroblk[re]
                                    );
                                }
                            }
                        }, 5000);
                    }
                } else {
                    headerItemCountFigureText =
                        headerItemCountFigureText +
                        parseInt(dataStore.bundleCartProducts[productSKU]);
                    var color = "";
                    var size = "";
                    var sizeLabel = "";
                    var colorLabel = "";
                    var just_check_prod_block = null;
                    if (productObj.ProductType != "simple") {
                        just_check_prod_block = document.querySelector(
                            '.inc_pdp_block .inc_product_module_block[data-sku="' +
                                productObj.sku +
                                '"]'
                        );
                    } else {
                        just_check_prod_block = document.querySelector(
                            '.inc_pdp_block .inc_product_module_block[data-main_id="' +
                                productObj.mainId +
                                '"]'
                        );
                    }
                    if (just_check_prod_block == null) {
                        if (productObj.ProductType != "simple") {
                            just_check_prod_block = document.querySelector(
                                '.inc_af_block .inc_product_module_block[data-sku="' +
                                    productObj.sku +
                                    '"]'
                            );
                        } else {
                            just_check_prod_block = document.querySelector(
                                '.inc_af_block .inc_product_module_block[data-main_id="' +
                                    productObj.mainId +
                                    '"]'
                            );
                        }
                    }
                    if (mainord != null && mainord != undefined) {
                        just_check_prod_block = elprd;
                    }


                    var sel_size = "";
                    if (color != "" && color != undefined && color != null) {
                        sel_size = colorLabel + " : " + color;
                    }
                    if (size != "" && size != undefined && size != null) {
                        if (sel_size !== "") {
                            sel_size += " , " + sizeLabel + " : " + size;
                        } else {
                            sel_size += sizeLabel + " : " + size;
                        }
                    }
                    var activePrice = parseFloat(
                        productObj.activePrice
                    ).toFixed(2);

                    subtotalactiveprice =
                        +subtotalactiveprice + +productObj.activePrice * qty;
                    subtotalregukarprice =
                        +subtotalregukarprice + +productObj.regularPrice * qty;
                    var colorUrl_ = "";
                    var sizeText_ = ""
                    if (just_check_prod_block !== null){
                        sizeText_ = ""
                        let first_attr = just_check_prod_block.querySelector('.inc_product_desc_att_zero_list_block')
                        let second_attr = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_block')
                        let third_attr = just_check_prod_block.querySelector('.inc_product_desc_att_third_list_block')
                        let fourth_attr = just_check_prod_block.querySelector('.inc_product_desc_att_fourth_list_block')
    
                        if (first_attr.childElementCount !== 0) {
                            let selected = first_attr.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active')
                            if (selected) {
                                
                                let label = first_attr.parentElement.querySelector('.inc_product_desc_att_zero_title_text').innerText.split(":")[0]
                                sizeText_ += "<div><span>" +  label + ":</span><span>" + selected.innerText + "</span></div>"
    
                            }
                        }
                        
                        if (second_attr.childElementCount !== 0) {
                            let selected = second_attr.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active')
                            if (selected) {
                                
                                let label = second_attr.parentElement.querySelector('.inc_product_desc_att_size_title_text').innerText.split(":")[0]
                                sizeText_ += "<div><span>" +  label + ":</span><span>" + selected.innerText + "</span></div>"
                            }
                        }
    
                        if (third_attr.childElementCount !== 0) {
                            let selected = third_attr.querySelector('.inc_product_desc_att_third_list_item_img_block.inc_active')
                            if (selected) {
                                let label = third_attr.parentElement.querySelector('.inc_product_desc_att_third_title_text').innerText.split(":")[0]
                                sizeText_ += "<div><span>" +  label + ":</span><span>" + selected.innerText + "</span></div>"
                            }
                        }
    
                        if (fourth_attr.childElementCount !== 0) {
                            let selected = fourth_attr.querySelector('.inc_product_desc_att_fourth_list_item_img_block.inc_active')
                            if (selected) {
                                let label = fourth_attr.parentElement.querySelector('.inc_product_desc_att_fourth_title_text').innerText.split(":")[0]
                                sizeText_ += "<div><span>" +  label + ":</span><span>" + selected.innerText + "</span></div>"
                            }
                        }
    
                    }
                    
                    var addedhtml =
                        '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' +
                        productObj.imageURL +
                        '" data-src="' +
                        productObj.imageURL +
                        '" alt="' +
                        productObj.name +
                        '"><div class="sidebar_product_quantity_label">' +
                        qty +
                        "x" +
                        '</div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset;">' +
                        qty +
                        "x " +
                        productObj.name +
                        '</div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"><img src=' +
                        colorUrl_ +
                        '></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">' +
                        sizeText_ +
                        '</div></div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">' +
                        formatter.format(activePrice) +
                        '</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text"></div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div></div>';
                    var productBlock = generate_html_tag(
                        "div",
                        "inc_cart_added_product_block"
                    );
                    productBlock.innerHTML = addedhtml;
                    productBlock.setAttribute("data-id", productObj.id);
                    productBlock.setAttribute("data-sku", productObj.sku);
                    productBlock.setAttribute(
                        "data-main_id",
                        productObj.mainId
                    );
                    productBlock.setAttribute(
                        "data-bundle_id",
                        productObj.bundleId
                    );
                    productBlock.setAttribute(
                        "data-childsku",
                        productObj.childsku
                    );
                    productBlock.setAttribute(
                        "data-mainsku",
                        productObj.mainsku
                    );
                    productBlock
                        .querySelector(".inc_cart_added_product_img img")
                        .setAttribute(
                            "onerror",
                            "this.src='" + INC.config.noimage + "'"
                        );
                    sbCartBlock.appendChild(productBlock);
                }
            });

            var sidebarsaveprc = get_discount_price(
                subtotalregukarprice,
                subtotalactiveprice
            );
            if (
                +subtotalactiveprice != null &&
                +subtotalactiveprice < +subtotalregukarprice
            ) {
                elHeadersubtotalactivetext.setAttribute(
                    "subtotalActiveprice",
                    subtotalactiveprice
                );
                elHeadersubtotalregulartext.setAttribute(
                    "subtotalRegularprice",
                    subtotalregukarprice
                );
                elHeadersubtotalactivetext.innerHTML =
                    formatter.format(subtotalactiveprice);
                elHeadersubtotalregulartext.innerHTML =
                    formatter.format(subtotalregukarprice);
                if (
                    document.querySelector(
                        ".inc_cart_added_product_desc_subtotal_ecirp_block"
                    ) != null
                ) {
                    document
                        .querySelector(
                            ".inc_cart_added_product_desc_subtotal_ecirp_block"
                        )
                        .classList.add("is_special_ecirp");
                }
                if (sidebarsaveprc != 0) {
                    if (
                        document.querySelector(".inc_just_added_save_pr") !=
                        null
                    ) {
                        document.querySelector(
                            ".inc_just_added_save_pr"
                        ).innerText =
                            "Save " + formatter.format(sidebarsaveprc);
                    }
                }
                elHeadersubtotalactivetext.style.color = "#ee1c31";
            } else {
                elHeadersubtotalactivetext.setAttribute(
                    "subtotalActiveprice",
                    subtotalactiveprice
                );
                elHeadersubtotalactivetext.style.color = "#000";
                elHeadersubtotalregulartext.setAttribute(
                    "subtotalRegularprice",
                    subtotalregukarprice
                );
                elHeadersubtotalactivetext.innerHTML =
                    formatter.format(subtotalregukarprice);
                elHeadersubtotalregulartext.innerHTML = "";
                if (document.querySelector(".inc_just_added_save_pr") != null) {
                    document.querySelector(
                        ".inc_just_added_save_pr"
                    ).innerText = "";
                }
            }
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal ";
            if (window.innerWidth > 767) {
                if (
                    document.querySelectorAll(
                        ".inc_sidebar_cart_added_block .inc_cart_added_product_block"
                    ).length > 5
                ) {
                    document
                        .querySelector(".inc_sidebar_cart_added_block")
                        .classList.add("flex-start");
                }
            } else {
                if (
                    document.querySelectorAll(
                        ".inc_sidebar_cart_added_block .inc_cart_added_product_block"
                    ).length > 3
                ) {
                    document
                        .querySelector(".inc_sidebar_cart_added_block")
                        .classList.add("flex-start");
                }
            }
            let addCount = document.querySelectorAll(
                ".inc_sidebar_cart_added_block .inc_cart_added_product_block"
            ).length;
            document
                .querySelector(".inc_sidebar_cart_added_block")
                .classList.add("inc_added_" + addCount);
            if (
                sbBlock.querySelector(".inc_cart_added_product_block") == null
            ) {
                if (
                    sbBlock.querySelector(".inc_header_title_text_block") !=
                    null
                ) {
                    sbBlock.classList.add("oos_prod_avail");
                }
            }
        }
    };
    INC.methods.updateSidebarProductsList = function (
        elRecommendedProductsListBlock,
        productCategory
    ) {
        var productListArray = INC.dataStore.bundleProductsArray;
        var dupl_sidebar_prod = [];
        var addCheck = INC.config.pdpaddedProductList;

        for (var pd in productListArray) {
            var firstProductObjByMainId = INC.dataStore
                .methods()
                .getFirstProductObjByMainId({
                    mainId: productListArray[pd],
                });
            if (INC.dataStore.dataStoreObj.undefined == undefined) {
                if (addCheck.indexOf(productListArray[pd]) == -1) {
                    if (
                        INC.config.sidebarremovedprod.indexOf(
                            firstProductObjByMainId.id
                        ) == -1
                    ) {
                        if (
                            dupl_sidebar_prod.indexOf(
                                firstProductObjByMainId.id
                            ) == -1 &&
                            firstProductObjByMainId.categoryName ==
                                productCategory
                        ) {
                            dupl_sidebar_prod.push(firstProductObjByMainId.id);
                            var prdblck = INC.methods.createProductModuleBlock(
                                firstProductObjByMainId.id,
                                "sidebar",
                                false,
                                elRecommendedProductsListBlock
                            );
                            prdblck
                                .querySelector(".inc_product_desc_add_block")
                                .addEventListener("click", function () {
                                    sidebaraddprod(this);
                                });
                            prdblck
                                .querySelector(
                                    ".inc_product_add_collection_block"
                                )
                                .addEventListener("click", function () {
                                    sidebaraddprod(this);
                                });

                            if (
                                prdblck.getAttribute("data-bundle_id") !=
                                "undefined"
                            ) {
                                elRecommendedProductsListBlock.appendChild(
                                    prdblck
                                );
                            }
                        }
                    }
                }
            }
        }
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        elRecommendedProductsListBlock.setAttribute("style", "margin-left: 0");
        if (
            document.querySelector(".inc_recommended_tabs_list_item_block") ==
                null &&
            elRecommendedProductsListBlock.querySelector(
                ".inc_product_module_block"
            ) == null
        ) {
            elRecommendedProductsListBlock.parentNode.parentNode.parentNode.parentNode.style.display =
                "none";
        }
        if (elRecommendedProductsListBlock.childNodes.length <= 1) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(
                ".inc_recommended_products_right_block"
            ).style.visibility = "hidden";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(
                ".inc_recommended_products_left_block"
            ).style.visibility = "hidden";
            elRecommendedProductsListBlock.parentNode.parentNode
                .querySelector(".inc_recommended_products_left_block")
                .setAttribute(
                    "style",
                    "pointer-events: none;opacity:0.5;visibility: hidden;"
                );
        }

        if (elRecommendedProductsListBlock.childNodes.length > 1) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(
                ".inc_recommended_products_right_block"
            ).style.visibility = "visible";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(
                ".inc_recommended_products_left_block"
            ).style.visibility = "visible";
            elRecommendedProductsListBlock.parentNode.parentNode
                .querySelector(".inc_recommended_products_left_block")
                .setAttribute("style", "pointer-events: none;opacity:0.5");
        }
        if (elRecommendedProductsListBlock.childNodes.length == 1) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(
                ".inc_recommeded_products_right_btn_block"
            ).style.display = "none";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(
                ".inc_recommended_products_left_btn_block"
            ).style.display = "none";
        }
        elRecommendedProductsListBlock.parentNode.parentNode
            .querySelector(".inc_recommended_products_left_btn_img")
            .setAttribute("style", "opacity:0.5");
        var sliderBtnCounter = 0;
        elRecommendedProductsListBlock.parentNode.parentNode
            .querySelector(".inc_recommended_products_left_btn_img")
            .setAttribute("title", "Scroll left");
        elRecommendedProductsListBlock.parentNode.parentNode
            .querySelector(".inc_recommended_products_right_btn_img")
            .setAttribute("title", "Scroll right");
        elRecommendedProductsListBlock.parentNode.parentNode
            .querySelector(".inc_recommeded_products_right_btn_block")
            .addEventListener("click", function () {
                var productBlocks = document.querySelectorAll(
                    ".wrapper-cart-product .inc_recommended_products_list_block .inc_product_module_block"
                );
                if (INC.clientConfig.slidevalue + 1 < productBlocks.length) {
                    elRecommendedProductsListBlock.parentNode.parentNode
                        .querySelector(
                            ".inc_recommended_products_left_btn_block"
                        )
                        .setAttribute(
                            "style",
                            "pointer-events: auto;opacity:1"
                        );
                    elRecommendedProductsListBlock.parentNode.parentNode
                        .querySelector(".inc_recommended_products_left_block")
                        .setAttribute(
                            "style",
                            "pointer-events: auto;opacity:1"
                        );
                    elRecommendedProductsListBlock.parentNode.parentNode
                        .querySelector(".inc_recommended_products_left_btn_img")
                        .setAttribute("style", "opacity:1");
                    INC.clientConfig.slidevalue++;
                    var slide_w = 357;
                    if (window.innerWidth >= 850) {
                        slide_w = 352.4;
                    }
                    INC.clientConfig.offset =
                        parseFloat(INC.clientConfig.offset) - slide_w + "px";
                    var menu =
                        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(
                            ".inc_recommended_products_list_block"
                        );
                    menu.setAttribute(
                        "style",
                        "margin-left:" +
                            INC.clientConfig.offset +
                            ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;"
                    );
                }
                var cc_ount = 1;
                if (window.innerWidth > 820) {
                    cc_ount = 1;
                }
                if (
                    +INC.clientConfig.slidevalue + +cc_ount ==
                    productBlocks.length
                ) {
                    elRecommendedProductsListBlock.parentNode.parentNode
                        .querySelector(
                            ".inc_recommeded_products_right_btn_block"
                        )
                        .setAttribute(
                            "style",
                            "pointer-events: none;opacity:0.5"
                        );
                    document
                        .querySelector(
                            ".inc_recommended_products_right_btn_img"
                        )
                        .setAttribute(
                            "style",
                            "pointer-events: none;opacity:0.5"
                        );
                    elRecommendedProductsListBlock.parentNode.parentNode
                        .querySelector(
                            ".inc_recommended_products_right_btn_img"
                        )
                        .setAttribute("style", "opacity:0.5");
                }
                sliderBtnCounter++;
                if (sliderBtnCounter > productBlocks.length - cc_ount) {
                    sliderBtnCounter--;
                }
            });

        elRecommendedProductsListBlock.parentNode.parentNode
            .querySelector(".inc_recommended_products_left_btn_block")
            .addEventListener("click", function () {
                if (INC.clientConfig.slidevalue == -1) {
                    INC.clientConfig.slidevalue = 0;
                }
                if (INC.clientConfig.slidevalue > 0) {
                    var slide_w = 357;
                    if (window.innerWidth >= 850) {
                        slide_w = 352.4;
                    }
                    elRecommendedProductsListBlock.parentNode.parentNode
                        .querySelector(
                            ".inc_recommeded_products_right_btn_block"
                        )
                        .setAttribute(
                            "style",
                            "pointer-events: auto;opacity:1"
                        );
                    document
                        .querySelector(
                            ".inc_recommended_products_right_btn_img"
                        )
                        .setAttribute(
                            "style",
                            "pointer-events: auto;opacity:1"
                        );
                    elRecommendedProductsListBlock.parentNode.parentNode
                        .querySelector(
                            ".inc_recommended_products_right_btn_img"
                        )
                        .setAttribute("style", "opacity:1");
                    INC.clientConfig.slidevalue--;
                    INC.clientConfig.offset =
                        parseFloat(INC.clientConfig.offset) + slide_w + "px";
                    var menu =
                        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(
                            ".inc_recommended_products_list_block"
                        );
                    menu.setAttribute(
                        "style",
                        "margin-left:" +
                            INC.clientConfig.offset +
                            ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;"
                    );
                }
                if (INC.clientConfig.slidevalue == 0) {
                    elRecommendedProductsListBlock.parentNode.parentNode
                        .querySelector(
                            ".inc_recommended_products_left_btn_block"
                        )
                        .setAttribute(
                            "style",
                            "pointer-events: none;opacity:0.5"
                        );
                    elRecommendedProductsListBlock.parentNode.parentNode
                        .querySelector(".inc_recommended_products_left_block")
                        .setAttribute(
                            "style",
                            "pointer-events: none;opacity:0.5"
                        );
                    elRecommendedProductsListBlock.parentNode.parentNode
                        .querySelector(".inc_recommended_products_left_btn_img")
                        .setAttribute("style", "opacity:0.5");
                }
                sliderBtnCounter--;
                if (sliderBtnCounter == -1) {
                    sliderBtnCounter = 0;
                }
            });
        setTimeout(function () {
            var all_list_el = document.querySelectorAll(
                ".inc_recommended_products_list_block .inc_product_showcase_block"
            );
            for (var le in all_list_el) {
                var prd_moduleb = all_list_el[le].parentNode;
                var main_idsd = "";
                if (prd_moduleb != null) {
                    main_idsd = prd_moduleb.getAttribute("data-main_id");
                }
                if (
                    all_list_el[le] != null &&
                    Object.prototype.hasOwnProperty.call(all_list_el, le)
                ) {
                    if (
                        all_list_el[le].querySelector(
                            ".inc_product_desc_att_zero_block.inc_active"
                        ) != null
                    ) {
                        if (
                            prd_moduleb.querySelector(
                                '.inc_product_desc_att_size_list_item_img_block[data-cpid="' +
                                    main_idsd +
                                    '"]'
                            ) != null
                        ) {
                            if (
                                prd_moduleb.querySelector(
                                    '.inc_product_desc_att_size_list_item_img_block[data-cpid="' +
                                        main_idsd +
                                        '"] .inc_product_desc_att_size_list_item_img_block'
                                ) != null
                            ) {
                                prd_moduleb
                                    .querySelector(
                                        '.inc_product_desc_att_size_list_item_img_block[data-cpid="' +
                                            main_idsd +
                                            '"] .inc_product_desc_att_size_list_item_img_block'
                                    )
                                    .click();
                            } else if (
                                all_list_el[le].querySelector(
                                    ".inc_product_desc_att_size_list_item_img_block"
                                ) != null
                            ) {
                                all_list_el[le]
                                    .querySelector(
                                        ".inc_product_desc_att_size_list_item_img_block"
                                    )
                                    .click();
                            }
                        } else if (
                            all_list_el[le].querySelector(
                                ".inc_product_desc_att_size_list_item_img_block"
                            ) != null
                        ) {
                            all_list_el[le]
                                .querySelector(
                                    ".inc_product_desc_att_size_list_item_img_block"
                                )
                                .click();
                        }
                    }
                    if (
                        all_list_el[le].querySelector(
                            ".inc_product_desc_att_color_block.inc_active"
                        ) != null
                    ) {
                        if (
                            prd_moduleb.querySelector(
                                '.inc_product_desc_att_color_list_item_img_block[data-cpid="' +
                                    main_idsd +
                                    '"]'
                            ) != null
                        ) {
                            if (
                                prd_moduleb.querySelector(
                                    '.inc_product_desc_att_color_list_item_img_block[data-cpid="' +
                                        main_idsd +
                                        '"] .inc_product_desc_att_color_list_item_img_block'
                                ) != null
                            ) {
                                prd_moduleb
                                    .querySelector(
                                        '.inc_product_desc_att_color_list_item_img_block[data-cpid="' +
                                            main_idsd +
                                            '"] .inc_product_desc_att_color_list_item_img_block'
                                    )
                                    .click();
                            }
                        } else if (
                            all_list_el[le].querySelector(
                                ".inc_product_desc_att_color_list_item_img_block"
                            ) != null
                        ) {
                            all_list_el[le]
                                .querySelector(
                                    ".inc_product_desc_att_color_list_item_img_block"
                                )
                                .click();
                        }
                    }
                }
            }
            setTimeout(function () {
                var inc_prod_img = document.querySelectorAll(
                    ".inc_product_img_main_img img"
                );
                for (var prodimg in inc_prod_img) {
                    if (
                        inc_prod_img[prodimg] != null &&
                        Object.prototype.hasOwnProperty.call(
                            inc_prod_img,
                            prodimg
                        )
                    ) {
                        inc_prod_img[prodimg].setAttribute(
                            "style",
                            INC.config.styleft
                        );
                    }
                }
            }, 2000);
        }, 10);
        INC.config.sidebarFirstLoad = true;
    };

    function sidebaraddprod(element) {
        var productModuleBlock =
            element.parentNode.parentNode.parentNode.parentNode.parentNode
                .parentNode;
        if (
            productModuleBlock.classList.contains("inc_product_module_block") ==
            falseflag
        ) {
            productModuleBlock =
                element.parentNode.parentNode.parentNode.parentNode.parentNode;
        }
        var flag_check = INC.methods.checkVariantSelection(productModuleBlock);
        var sku = productModuleBlock.getAttribute("data-sku");
        var findObj = new INC.classes.FindObj({
            id: sku,
        });
        var add_prod_im = productModuleBlock.querySelector(
            ".inc_product_desc_add_img"
        );
        if (flag_check == 1) {
            if (
                element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains(
                    "inc_product_showcase_block"
                ) == trueflag ||
                element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains(
                    "inc_product_modal_block"
                ) == trueflag
            ) {
                if (INC.config.disablebtn == trueflag) {
                    var newbtntext = productModuleBlock.querySelector(
                        ".inc_product_modal_block .inc_product_desc_add_text"
                    );
                    var btnclick = productModuleBlock.querySelector(
                        ".inc_product_add_text"
                    );
                    if (
                        INC.config.pageType == "pdp" &&
                        INC.config.recommendation == trueflag &&
                        document.querySelector(".inc_af_block") != null
                    ) {
                        if (
                            document.querySelector(
                                ".sidebar_outer.sidebar_outer_active"
                            ) == null
                        ) {
                            btnclick = productModuleBlock.querySelector(
                                ".inc_product_variant_simple_text span"
                            );
                        }
                    }
                    var rec_ = false;
                    newbtntext.innerText = "Adding To Basket";
                    btnclick.innerText = "Adding To Basket";
                    var selbtn = productModuleBlock.querySelector(
                        ".inc_product_variant_simple_text"
                    );
                    selbtn.innerText = "Adding To Basket";
                    INC.methods.addProductToCart(
                        findObj,
                        productModuleBlock,
                        btnclick,
                        add_prod_im,
                        selbtn,
                        newbtntext,
                        rec_
                    );
                }
            }
        }
    }
    INC.methods.addProductToSidebarCart = function (
        findObj,
        client_add_btn,
        _productBlockel,
        btn_addtocart,
        elmparent
    ) {
        var qty = 1;
        if (client_add_btn != "client_add_btn") {
            if (_productBlockel != null) {
                if (
                    INC.config.pageType == "pdp" &&
                    INC.config.recommendation == trueflag
                ) {
                    if (
                        _productBlockel.querySelector(
                            ".inc_product_modal_block .inc_product_qty_block input"
                        ) != null
                    ) {
                        qty = _productBlockel.querySelector(
                            ".inc_product_modal_block .inc_product_qty_block input"
                        ).value;
                    }
                }
                if (
                    _productBlockel.querySelector(
                        ".inc_product_modal_block .inc_product_qty_block input"
                    ) != null
                ) {
                    qty = _productBlockel.querySelector(
                        ".inc_product_modal_block .inc_product_qty_block input"
                    ).value;
                }
            }
        }
        if (client_add_btn == "client_add_btn") {
            if (INC.config.pageType == "pdp") {
                if (
                    elmparent.querySelector(
                        ".form-increment input.form-input"
                    ) != null
                ) {
                    qty = elmparent.querySelector(
                        ".form-increment input.form-input"
                    ).value;
                }
            } else {
                qty = INC.dataStore.plpProductQty;
            }
        }
        var dataStore = INC.dataStore;
        var sbBlock = document.querySelector(".inc_sidebar_modal_block");
        var subtotal_activeprice = 0;
        var subtotal_regular = 0;
        if (
            document.querySelector(
                ".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_active_text"
            ) != null
        ) {
            subtotal_activeprice = document
                .querySelector(
                    ".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_active_text"
                )
                .getAttribute("subtotalactiveprice");
        }
        if (
            document.querySelector(
                ".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_regular_text"
            ) != null
        ) {
            subtotal_regular = document
                .querySelector(
                    ".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_regular_text"
                )
                .getAttribute("subtotalregularprice");
        }

        if (subtotal_activeprice == null) {
            subtotal_activeprice = 0;
        }
        if (subtotal_regular == null) {
            subtotal_regular = 0;
        }
        if (client_add_btn == "client_add_btn") {
            subtotal_activeprice = 0;
            subtotal_regular = 0;
        }
        if (
            document.querySelector(
                ".inc_sidebar_cart_added_block.inc_active"
            ) != null
        ) {
            if (
                document.querySelector(".inc_header_item_count_title_block") !=
                null
            ) {
                document
                    .querySelector(".inc_header_item_count_title_block")
                    .click();
            }
        }
        if (sbBlock != null) {
            var elHeadersubtotalactivetext = sbBlock.querySelector(
                ".inc_cart_added_product_desc_subtotal_ecirp_active_text"
            );
            var elHeadersubtotalregulartext = sbBlock.querySelector(
                ".inc_cart_added_product_desc_subtotal_ecirp_regular_text"
            );
            var elHeaderItemCountFigureText = sbBlock.querySelector(
                ".inc_header_item_count_figure_text"
            );
            var sidebarHeaderItemCountTitleText = sbBlock.querySelector(
                ".inc_header_item_count_title_text"
            );
            var sbCartBlock = sbBlock.querySelector(
                ".inc_cart_added_list_block"
            );
            if (client_add_btn == "client_add_btn") {
                sbCartBlock.innerHTML = "";
            }
            var productObj = dataStore.methods().getProductById(findObj);
            var productBlock = generate_html_tag(
                "div",
                "inc_cart_added_product_block"
            );

            if (INC.clientConfig.OOS.indexOf(productObj.mainId) >= 0) {
                productBlock.classList.add("cross");
                for (var e = 0; e < INC.clientConfig.OOS.length; e++) {
                    if (INC.clientConfig.OOS_MESG[e] != undefined) {
                        var remerrorjust =
                            document.querySelector(".inc_justerror");
                        if (remerrorjust != null) {
                            remerrorjust.parentNode.removeChild(remerrorjust);
                        }
                        if (document.querySelector(".inc_justerror") == null) {
                            var headertitle = sbBlock.querySelector(
                                ".inc_sidebar_modal_cart_and_title_block"
                            );
                            var errormes = generate_html_tag(
                                "div",
                                "inc_justerror"
                            );
                            var errormestext = generate_html_tag(
                                "span",
                                "inc_justerror_text"
                            );
                            errormestext.innerHTML =
                                "<span>" +
                                productObj.name +
                                "</span>" +
                                " - " +
                                "<span>The requested quantity is not available</span>";
                            errormes.appendChild(errormestext);
                            headertitle.parentNode.insertBefore(
                                errormes,
                                headertitle
                            );
                            setTimeout(function () {
                                var remel =
                                    document.querySelector(".inc_justerror");
                                if (remel != null) {
                                    remel.parentNode.removeChild(remel);
                                }
                            }, 500);
                        }
                    }
                }
            } 
            if (INC.config.pageType == "pdp") {
                if (
                    Object.keys(productObj).length == 0 ||
                    client_add_btn == "client_add_btn" ||
                    client_add_btn == "clientbtn"
                ) {
                    if (elmparent != null) {
                        if (
                            elmparent.querySelector(
                                ".productView-img-container img"
                            ).src != null ||
                            document.querySelector(
                                ".inc_pdp_product-main_block .inc_product_img_main_img img"
                            ) != null
                        ) {
                            var imgselp = "";
                            if (
                                elmparent.querySelector(
                                    ".productView-img-container img"
                                ).src != null
                            ) {
                                imgselp = elmparent.querySelector(
                                    ".productView-img-container img"
                                ).src;
                            } else if (
                                document.querySelector(
                                    ".inc_pdp_product-main_block .inc_product_img_main_img img"
                                ) != null
                            ) {
                                imgselp = document.querySelector(
                                    ".inc_pdp_product-main_block .inc_product_img_main_img img"
                                ).src;
                            }

                            var namep = elmparent
                                .querySelector(
                                    ".productView-title.main-heading"
                                )
                                .innerText.trim();
                            var clientPrice = null;
                            var clientSpPrice = null;
                            if (
                                document.querySelectorAll(
                                    ".productView .price-section--withTax .price"
                                )[1].innerText != ""
                            ) {
                                clientPrice = document
                                    .querySelectorAll(
                                        ".productView .price-section--withTax .price"
                                    )[1]
                                    .innerText.replace("£", "")
                                    .trim();
                                if (
                                    clientPrice == 0 &&
                                    document.querySelectorAll(
                                        ".productView .price-section--withTax .price"
                                    )[2].innerText != ""
                                ) {
                                    clientPrice = document
                                        .querySelectorAll(
                                            ".productView .price-section--withTax .price"
                                        )[2]
                                        .innerText.replace("£", "")
                                        .trim();
                                }
                            }
                            if (
                                elmparent.querySelector(
                                    ".product-price .price-standard"
                                ) != null &&
                                elmparent.querySelector(
                                    ".product-price .price-standard"
                                ).innerHTML != ""
                            ) {
                                clientPrice = document
                                    .querySelector(
                                        ".product-price .price-standard"
                                    )
                                    .innerText.replace("£", "")
                                    .trim();
                            } else {
                                clientPrice = 0;
                            }
                            if (
                                parseFloat(clientSpPrice) != null &&
                                parseFloat(clientSpPrice) <
                                    parseFloat(clientPrice)
                            ) {
                                var activprice =
                                    parseFloat(clientSpPrice).toFixed(2) * qty;
                                var reglprice =
                                    parseFloat(clientPrice).toFixed(2) * qty;
                                var sidebarsavepr = get_discount_price(
                                    activprice,
                                    reglprice
                                );
                                if (
                                    document.querySelector(
                                        ".inc_just_added_save_pr"
                                    ) != null
                                ) {
                                    document.querySelector(
                                        ".inc_just_added_save_pr"
                                    ).innerText =
                                        "Save " +
                                        formatter.format(
                                            Math.abs(sidebarsavepr)
                                        );
                                }
                            }
                            let swatches1;
                            let swatches2;
                            let size_;
                            let color_;
                            let colorImgUrl;
                            var proSku = "";
                            if (
                                elmparent.querySelector(
                                    ".productSKU .productView-info-value"
                                ) != null
                            ) {
                                proSku = elmparent.querySelector(
                                    ".productSKU .productView-info-value"
                                ).innerText;
                            }
                            let findObj = new INC.classes.FindObj({
                                sku: proSku,
                            });
                            let productObj = INC.dataStore
                                .methods()
                                .getProductBySKU(findObj);
                            if (
                                productObj.option != undefined &&
                                productObj.option != null
                            ) {
                                if (productObj.option[0] != undefined) {
                                    color_ = productObj.option[0].text;
                                    colorImgUrl = productObj.option[0].imgSrc;
                                }
                                if (productObj.option[1] != undefined) {
                                    size_ = productObj.option[1].text;
                                }
                            }

                            if (
                                productBlock.querySelector(
                                    ".inc_cart_added_product_img img"
                                ) != null
                            ) {
                                if (imgselp != "" && imgselp != undefined) {
                                    productBlock.querySelector(
                                        ".inc_cart_added_product_img img"
                                    ).src = imgselp;
                                }
                                productBlock.querySelector(
                                    ".inc_cart_added_product_desc_title_text"
                                ).innerText =
                                    qty +
                                    "x " +
                                    capitalizeFirstLetter(namep.toLowerCase());
                                productBlock
                                    .querySelector(
                                        ".inc_cart_added_product_desc_title_text"
                                    )
                                    .setAttribute(
                                        "title",
                                        capitalizeFirstLetter(namep)
                                    );
                                // if (parseFloat(clientSpPrice) != null && parseFloat(clientSpPrice) < parseFloat(clientPrice)) {
                                //     productBlock.querySelector('.inc_cart_added_product_desc_ecirp_active_text').innerHTML = formatter.format(clientSpPrice);
                                // } else {
                                //     productBlock.querySelector('.inc_cart_added_product_desc_ecirp_active_text').innerHTML = formatter.format(clientPrice);
                                // }
                            }
                        }
                    }
                }
            }
            if (
                document.querySelector(".inc_cart_added_product_block") != null
            ) {
                sbBlock.classList.remove("oos_prod_avail");
            } else {
                sbBlock.classList.add("oos_prod_avail");
            }
        }
    };
    INC.methods.sendBundleClickTracking = function (productId, rec_type) {
        var pageType = "";
        switch (INC.config.pageType) {
            case "pdp":
                pageType = "107";
                break;
            case "productList":
                pageType = "101";
                break;
            case "cartPage":
                pageType = "103";
                break;
            case "ticket":
                pageType = "103";
                break;
            case "other":
                pageType = "101";
        }
        if (
            (!(rec_type == "sidebar") && INC.config.pageType == "pdp") ||
            rec_type == trueflag
        ) {
            pageType = "100";
        }
        if (
            (document.querySelector(".inc_sidebar_modal_block.inc_active") !=
                null &&
                INC.config.pageType != "productList") ||
            (document.querySelector(
                ".mini-cart-content.hidden-mob.open-cart"
            ) != null &&
                INC.config.pageType == "pdp")
        ) {
            pageType = "107";
        }
        var prdcore = INC.dataStore.pdpProductId;
        if (INC.config.pageType == "pdp") {
            prdcore = INC.config.Product_id;
        }
        INC.methods.trackingEvents(
            "bundleProductClickTracking",
            {
                product_id: productId,
                core_product_id: prdcore.toString(),
            },
            pageType,
            rec_type
        );
    };

    INC.methods.createProductModuleBlock = function (
        pdpProductId,
        blockType,
        bundleProductListCheck,
        pdpblockel,
        mainprod,
        rec_type
    ) {
        if (INC.dataStore.dataStoreObj.undefined == undefined) {
            var productModuleBlock = generate_html_tag(
                "div",
                "inc_product_module_block"
            );
            var findObj = new INC.classes.FindObj({
                id: pdpProductId,
            });
            var productObj = INC.dataStore.methods().getProductById(findObj);
            productModuleBlock.style.userSelect = "none";
            setidstoelm(productModuleBlock, productObj);
            var elProductShowcaseBlock = generate_html_tag(
                "div",
                "inc_product_showcase_block"
            );
            elProductShowcaseBlock.innerHTML = showcase_productcard;
            var elProductModalBlock = generate_html_tag(
                "div",
                "inc_product_modal_block"
            );
            elProductModalBlock.innerHTML = modal_productcard;
            if (elProductShowcaseBlock != null) {
                elProductShowcaseBlock.setAttribute("role", "contentinfo");
            }
            if (elProductModalBlock != null) {
                elProductModalBlock.setAttribute("role", "contentinfo");
            }

            var productShowcaseBlock = INC.methods.createProductShowcaseBlock(
                pdpProductId,
                blockType,
                bundleProductListCheck,
                pdpblockel,
                elProductShowcaseBlock,
                mainprod,
                rec_type
            );
            var productModalBlock = INC.methods.createProductModalBlock(
                pdpProductId,
                blockType,
                bundleProductListCheck,
                pdpblockel,
                elProductModalBlock,
                mainprod,
                rec_type
            );

            elProductShowcaseBlock.appendChild(productShowcaseBlock);
            elProductModalBlock.appendChild(productModalBlock);
            if (window.innerWidth <= 800) {
                var closeBlock = elProductModalBlock.querySelector(
                    ".inc_product_header_img_block"
                );
                elProductModalBlock
                    .querySelector(".inc_product_header_img_block")
                    .remove();
                elProductModalBlock.insertBefore(
                    closeBlock,
                    elProductModalBlock.children[0]
                );
            }
            productModuleBlock.appendChild(elProductShowcaseBlock);
            productModuleBlock.appendChild(elProductModalBlock);

            return productModuleBlock;
        }
    };

    function setidstoelm(productBlock, productObj) {
        productBlock.setAttribute("data-id", productObj.id);
        productBlock.setAttribute("data-sku", productObj.sku);
        productBlock.setAttribute("data-main_id", productObj.mainId);
        productBlock.setAttribute("data-bundle_id", productObj.bundleId);
        productBlock.setAttribute(
            "data_main_variant",
            productObj.mainProdVariant
        );
        productBlock.setAttribute(
            "data-category_name",
            productObj.categoryName
        );
        productBlock.setAttribute("product_type", productObj.ProductType);
        productBlock.classList.add(productObj.ProductType);
    }

    function prodtypedesc(productObj, producttypedetails, prodtypeflag) {
        if (productObj.finish != null && productObj.finish != "") {
            prodtypeflag = true;
            var inc_prod_finish_block = generate_html_tag(
                "div",
                "inc_prod_finish_block"
            );
            producttypedetails.appendChild(inc_prod_finish_block);
            var inc_prod_finish_title = generate_html_tag(
                "div",
                "inc_prod_finish_title"
            );
            inc_prod_finish_title.innerText = "Finish";
            inc_prod_finish_block.appendChild(inc_prod_finish_title);
            var inc_prod_finish_text = generate_html_tag(
                "div",
                "inc_prod_finish_text"
            );
            inc_prod_finish_text.innerText = productObj.finish;
            inc_prod_finish_block.appendChild(inc_prod_finish_text);
        }
        if (productObj.coverage != null && productObj.coverage != "") {
            prodtypeflag = true;
            var inc_prod_coverage_block = generate_html_tag(
                "div",
                "inc_prod_coverage_block"
            );
            producttypedetails.appendChild(inc_prod_coverage_block);
            var inc_prod_coverage_title = generate_html_tag(
                "div",
                "inc_prod_coverage_title"
            );
            inc_prod_coverage_title.innerText = "Coverage";
            inc_prod_coverage_block.appendChild(inc_prod_coverage_title);
            var inc_prod_coverage_text = generate_html_tag(
                "div",
                "inc_prod_coverage_text"
            );
            inc_prod_coverage_text.innerText = productObj.coverage;
            inc_prod_coverage_block.appendChild(inc_prod_coverage_text);
        }
        if (productObj.underTone != null && productObj.underTone != "") {
            prodtypeflag = true;
            var inc_prod_undertone_block = generate_html_tag(
                "div",
                "inc_prod_undertone_block"
            );
            producttypedetails.appendChild(inc_prod_undertone_block);
            var inc_prod_undertone_title = generate_html_tag(
                "div",
                "inc_prod_undertone_title"
            );
            inc_prod_undertone_title.innerText = "Undertone";
            inc_prod_undertone_block.appendChild(inc_prod_undertone_title);
            var inc_prod_undertone_text = generate_html_tag(
                "div",
                "inc_prod_undertone_text"
            );
            inc_prod_undertone_text.innerText = productObj.underTone;
            inc_prod_undertone_block.appendChild(inc_prod_undertone_text);
        }
        if (productObj.skinType != null && productObj.skinType != "") {
            prodtypeflag = true;
            var inc_prod_skinType_block = generate_html_tag(
                "div",
                "inc_prod_skinType_block"
            );
            producttypedetails.appendChild(inc_prod_skinType_block);
            var inc_prod_skinType_title = generate_html_tag(
                "div",
                "inc_prod_skinType_title"
            );
            inc_prod_skinType_title.innerText = "Skin Type";
            inc_prod_skinType_block.appendChild(inc_prod_skinType_title);
            var inc_prod_skinType_text = generate_html_tag(
                "div",
                "inc_prod_skinType_text"
            );
            inc_prod_skinType_text.innerText = productObj.skinType;
            inc_prod_skinType_block.appendChild(inc_prod_skinType_text);
        }
        return prodtypeflag;
    }

    function incscrollPgae(productBlock) {
        var doc = null;
        if (document.querySelector(".inc_pdp_block") != null) {
            doc = document.querySelector(".inc_pdp_block");
            inc_scroll_height =
                (window.scrollY || doc.scrollTop) - (doc.clientTop || 0);
        } else if (document.querySelector(".inc_af_block") != null) {
            doc = document.querySelector(".inc_af_block");
            inc_scroll_height =
                (window.scrollY || doc.scrollTop) - (doc.clientTop || 0);
        }
        if (productBlock != null) {
            if (
                productBlock.parentNode.parentNode.querySelector(
                    ".inc_product_modal_block .inc_product_header_block"
                ) != null
            ) {
                productBlock.parentNode.parentNode
                    .querySelector(
                        ".inc_product_modal_block .inc_product_header_block"
                    )
                    .click();
            }
            Array.prototype.forEach.call(
                document.querySelectorAll(".inc_product_modal_block"),
                function (el) {
                    el.classList.remove("inc_active");
                }
            );
        }
    }

    function prepareAdditionalimages(
        elImgGalleryListBlock,
        productObj,
        productBlock
    ) {
        var otimg = 0;
        var otherImages = [];
        if (productObj.otherImageList.length > 0) {
            otherImages.push(productObj.imageURL);
            for (var m = 0; m < productObj.otherImageList.length; m++) {
                otherImages.push(productObj.otherImageList[m]);
            }
        }
        otherImages.forEach(function (otherImgURLs) {
            var otherImgURL = otherImgURLs;
            var elImgGalleryListItemBlock = generate_html_tag(
                "div",
                "inc_product_img_gallery_list_item_block"
            );
            var imglist =
                '<div class="inc_product_img_gallery_list_item_img_block"><div class="inc_product_img_gallery_list_item_img"><img class="inc_lazy" data-src="' +
                otherImgURL +
                '" src="' +
                otherImgURL +
                '" role="img" aria-label="Image"  alt="' +
                productObj.name +
                '"></div></div><div class="inc_product_img_gallery_list_item_text_block"><div class="inc_product_img_gallery_list_item_text"></div></div>';
            elImgGalleryListItemBlock.innerHTML = imglist;

            var elImgGalleryListItemImg =
                elImgGalleryListItemBlock.querySelector(
                    ".inc_product_img_gallery_list_item_img"
                );

            var elOtherImgTag = elImgGalleryListItemBlock.querySelector(
                ".inc_product_img_gallery_list_item_img img"
            );
            elOtherImgTag.src = otherImgURL;
            elOtherImgTag.setAttribute("alt", productObj.name);
            elOtherImgTag.setAttribute("role", "img");
            elOtherImgTag.setAttribute("aria-label", "Image");
            elOtherImgTag.setAttribute(
                "onerror",
                "this.src='" + INC.config.noimage + "'"
            );

            if (productObj.otherImageList.length > 4) {
                elImgGalleryListItemImg.classList.add("OthImg4");
            }

            elImgGalleryListItemBlock.setAttribute("index", otimg);
            elImgGalleryListItemBlock.addEventListener("click", function () {
                Array.prototype.forEach.call(
                    productBlock.querySelectorAll(
                        ".inc_product_img_gallery_list_item_block"
                    ),
                    function (galleryListItemBlock) {
                        galleryListItemBlock.classList.remove("inc_active");
                    }
                );
                elImgGalleryListItemBlock.classList.add("inc_active");
                var imgotherlist = this.querySelector("img").src;
                var elImgMainImg = productBlock.querySelector(
                    ".inc_product_img_main_img"
                );
                if (!imgotherlist.includes("VIDEO")) {
                    elImgMainImg.classList.remove("inc_hide_img");
                    elImgMainImg
                        .querySelector(".inc_video_container")
                        .classList.add("empty");
                }
                elImgMainImg.querySelector("img").src = imgotherlist;
                elImgMainImg
                    .querySelector("img")
                    .setAttribute(
                        "onerror",
                        "this.src='" + INC.config.noimage + "'"
                    );
            });

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if (otimg == 0) {
                elImgGalleryListItemBlock.classList.add("inc_active");
            }
            if (productObj.otherImageList.length > 3) {
                elImgGalleryListItemBlock.parentNode.classList.add(
                    "flex-start"
                );
            }
            
            otimg++;
        });
      
        if (otherImages.length > 3) {
            
            elImgGalleryListBlock.classList.add("flex-start")
         }
    }

    function prepareqty(productBlock, blockType) {
        var elAddText = productBlock.querySelector(
            ".inc_product_desc_add_text"
        );
        var productDescQtyInputText = productBlock.querySelector(
            ".inc_product_qty_input_text"
        );
        var productDescQtyBlock = productBlock.querySelector(
            ".inc_product_qty_block"
        );
        var elQtyBlock = productBlock.querySelector(".inc_product_qty_block");
        var elQtyDownBlock = productBlock.querySelector(
            ".inc_product_qty_down_block"
        );
        var elQtyUpBlock = productBlock.querySelector(
            ".inc_product_qty_up_block"
        );
        var elQtyInput = generate_html_tag("input");
        elQtyInput.setAttribute("type", "number");
        elQtyInput.setAttribute("aria-label", "quantity");
        elQtyInput.setAttribute("min", 1);
        elQtyInput.setAttribute("max", 99);
        elQtyInput.setAttribute("maxlength", 99);
        elQtyInput.value = 1;
        elQtyInput.setAttribute("old_qty", "1");
        elQtyInput.setAttribute(
            "onkeydown",
            "if(event.key==='.'){event.preventDefault();}"
        );
        elQtyInput.setAttribute(
            "onKeyPress",
            "if(this.value.length==3) return false;"
        );
        elQtyInput.setAttribute("oninput", "validity.valid||(value='');");
        elQtyInput.addEventListener("keydown", function (event) {
            var elmth = this;
            var keyCode = event.which || event.keyCode;
            if (keyCode === 13) {
                event.preventDefault();
            } else if (
                window.jQuery.inArray(event.keyCode, incallowedKeys) != -1 ||
                (keyCode === 65 && (event.ctrlKey || event.metaKey)) ||
                (keyCode >= 35 && keyCode <= 40)
            ) {
                return;
            }
            var charValue = String.fromCharCode(keyCode),
                valid = /^\d+£/.test(charValue);
            // if (!valid) {
            //     event.preventDefault();
            // } else {
            setTimeout(function () {
                qtyupdateInc(elmth, productBlock, elAddText);
            }, 50);
            // }
        });
        elQtyInput.addEventListener("focusout", function () {
            var elmt = this;
            setTimeout(function () {
                qtyupdateInc(elmt, productBlock, elAddText);
            }, 50);
        });

        function qtyupdateInc(_elm, prdblk, eladtext) {
            if (_elm.value.length == 0) {
                _elm.value = 1;
            }
            if (_elm.value == 0) {
                _elm.value = 1;
            }
            if (_elm.value > 99) {
                _elm.value = 99;
            }
            if (_elm.value == 99) {
                elQtyUpBlock.classList.add("maxqty");
                elQtyBlock.classList.remove("singleqty");
            }
            if (_elm.value < 99) {
                elQtyUpBlock.classList.remove("maxqty");
            }
            if (_elm.value > 1) {
                elQtyBlock.classList.remove("singleqty");
            }
            var productModuleBlock = prdblk.parentNode.parentNode;
            var showcaseProductBlock = productModuleBlock
                .querySelector(".inc_product_showcase_block")
                .querySelector(".inc_product_block");
            var modalProductBlock = productModuleBlock
                .querySelector(".inc_product_modal_block")
                .querySelector(".inc_product_block");
            showcaseProductBlock
                .querySelector(".inc_product_qty_block")
                .querySelector("input").value = parseInt(_elm.value);
            modalProductBlock.querySelector(
                ".inc_product_qty_input_text input"
            ).value = parseInt(_elm.value);

            var id = prdblk.getAttribute("data-id");
            var qty = parseInt(_elm.value);
            var main_id = prdblk.getAttribute("data-main_id");
            var bundle_id = prdblk.getAttribute("data-bundle_id");
            var pname = prdblk.querySelector(
                ".inc_product_desc_title_text"
            ).textContent;
            var pprice = prdblk
                .querySelector(".inc_product_desc_ecirp_active_text")
                .textContent.replace("£", "");
            if (
                eladtext.textContent == "Added" ||
                eladtext.textContent == "Update"
            ) {
                INC.methods.updateBundleCart(
                    {
                        sku: id,
                        qty: qty,
                    },
                    "add",
                    main_id,
                    bundle_id,
                    pname,
                    pprice
                );
            }
            if (_elm.value == 1) {
                elQtyBlock.classList.add("singleqty");
            }
        }
        productDescQtyInputText.appendChild(elQtyInput);

        var added_text = document.createElement("span");
        added_text.classList.add("inc_add_text");
        productDescQtyInputText.appendChild(added_text);

        elQtyDownBlock.addEventListener("click", function () {
            var elinput = this.parentNode.parentNode.parentNode.querySelector(
                ".inc_product_qty_input_text input"
            );
            var productModuleBlock = productBlock.parentNode.parentNode;
            var showcaseProductBlock = productModuleBlock
                .querySelector(".inc_product_showcase_block")
                .querySelector(".inc_product_block");
            var modalProductBlock = productModuleBlock
                .querySelector(".inc_product_modal_block")
                .querySelector(".inc_product_block");
            if (
                elinput.parentNode.parentNode.parentNode.parentNode.parentNode
                    .parentNode.parentNode.parentNode.parentNode.className !=
                "inc_product_modal_block inc_active"
            ) {
                if (elinput.value == 1) {
                    showcaseProductBlock
                        .querySelector(".inc_product_desc_add_block")
                        .click();
                }
            }
            elinput.value = elinput.value - 1 < 1 ? 1 : elinput.value - 1;
            if (parseInt(elinput.value) <= 99) {
                elQtyUpBlock.classList.remove("maxqty");
            }

            showcaseProductBlock
                .querySelector(".inc_product_qty_block")
                .querySelector("input").value = parseInt(elinput.value);
            modalProductBlock.querySelector(
                ".inc_product_qty_input_text input"
            ).value = parseInt(elinput.value);

            var id = productBlock.getAttribute("data-id");
            var qty = parseInt(elinput.value);
            var bundle_id = productBlock.getAttribute("data-bundle_id");
            var main_id = productBlock.getAttribute("data-main_id");
            var pname = productBlock.querySelector(
                ".inc_product_desc_title_text"
            ).innerText;
            var pprice = productBlock
                .querySelector(".inc_product_desc_ecirp_active_text")
                .innerText.replace("£", "");
            if (
                parseInt(elinput.value) == 1 &&
                productDescQtyBlock.classList.contains("singleqty") == trueflag
            ) {
                if (
                    elAddText.textContent == "Added" ||
                    elAddText.textContent == "Update" ||
                    elAddText.textContent == INC.config.AddedText ||
                    elAddText.textContent == INC.config.UpdateText
                ) {
                    // document
                    //     .querySelector("html")
                    //     .classList.remove("inc_overlay");
                    if (INC.config.pageType == "pdp" && blockType == "pdp") {
                        INC.methods.updateBundleCart(
                            {
                                sku: id,
                                qty: qty,
                            },
                            "add",
                            main_id,
                            bundle_id,
                            pname,
                            pprice
                        );
                    }
                }
            } else {
                if (
                    elAddText.textContent == "Added" ||
                    elAddText.textContent == "Update" ||
                    elAddText.textContent == INC.config.AddedText ||
                    elAddText.textContent == INC.config.UpdateText
                ) {
                    INC.methods.updateBundleCart(
                        {
                            sku: id,
                            qty: qty,
                        },
                        "add",
                        main_id,
                        bundle_id,
                        pname,
                        pprice
                    );
                }
            }
            if (elinput.value == 1) {
                elQtyBlock.classList.add("singleqty");
                productModuleBlock
                    .querySelector(
                        ".inc_product_showcase_block .inc_product_qty_block"
                    )
                    .classList.add("singleqty");
                modalProductBlock
                    .querySelector(".inc_product_qty_input_text input")
                    .parentNode.parentNode.parentNode.parentNode.classList.add(
                        "singleqty"
                    );
            }
        });

        elQtyUpBlock.addEventListener("click", function () {
            var elinpt = this.parentNode.parentNode.parentNode.querySelector(
                ".inc_product_qty_input_text input"
            );
            elinpt.value =
                parseInt(elinpt.value) + 1 > 99
                    ? 99
                    : parseInt(elinpt.value) + 1;
            if (parseInt(elinpt.value) == 99) {
                elQtyUpBlock.classList.add("maxqty");
            }
            var productModuleBlock = productBlock.parentNode.parentNode;
            var showcaseProductBlock = productModuleBlock
                .querySelector(".inc_product_showcase_block")
                .querySelector(".inc_product_block");
            var modalProductBlock = productModuleBlock
                .querySelector(".inc_product_modal_block")
                .querySelector(".inc_product_block");

            showcaseProductBlock
                .querySelector(".inc_product_qty_block")
                .querySelector("input").value = parseInt(elinpt.value);
            modalProductBlock.querySelector(
                ".inc_product_qty_input_text input"
            ).value = parseInt(elinpt.value);

            modalProductBlock
                .querySelector(".inc_product_qty_input_text input")
                .parentNode.parentNode.parentNode.parentNode.classList.remove(
                    "singleqty"
                );

            productDescQtyBlock.classList.remove("singleqty");
            productModuleBlock
                .querySelector(
                    ".inc_product_showcase_block .inc_product_qty_block"
                )
                .classList.remove("singleqty");
            var id = productBlock.getAttribute("data-id");
            var qty = parseInt(elinpt.value);
            var bundle_id = productBlock.getAttribute("data-bundle_id");
            var main_id = productBlock.getAttribute("data-main_id");
            var pname = productBlock.querySelector(
                ".inc_product_desc_title_text"
            ).innerText;
            var pprice = productBlock
                .querySelector(".inc_product_desc_ecirp_active_text")
                .innerText.replace("£", "");
            if (
                elAddText.textContent == "Added" ||
                elAddText.textContent == "Update" ||
                elAddText.textContent == INC.config.AddedText ||
                elAddText.textContent == INC.config.UpdateText
            ) {
                INC.methods.updateBundleCart(
                    {
                        sku: id,
                        qty: qty,
                    },
                    "add",
                    main_id,
                    bundle_id,
                    pname,
                    pprice
                );
            }
        });
    }
    INC.methods.createProductShowcaseBlock = function (
        pdpProductId,
        blockType,
        _bundleProductListCheck,
        _parentblock,
        elProductShowcaseBlock,
        mainprod
    ) {
        var productBlock =
            elProductShowcaseBlock.querySelector(".inc_product_block");
        var findObj = new INC.classes.FindObj({
            id: pdpProductId,
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        setidstoelm(productBlock, productObj);
        var elHeaderInfoBlck = productBlock.querySelector(
            ".inc_product_info_main_block"
        );
        var elHeader = productBlock.querySelector(
            ".inc_product_header_main_block"
        );
        var elImgBlock = productBlock.querySelector(".inc_product_img_block");
        var elImgGalleryListBlock = productBlock.querySelector(
            ".inc_product_img_gallery_list_block"
        );
        var elTitleTextBlock = productBlock.querySelector(
            ".inc_product_desc_title_text_block"
        );
        var elTitleText = productBlock.querySelector(
            ".inc_product_desc_title_text"
        );
        var elPromo = productBlock.querySelector(".pc_promo_div");
        var elproductPriceLabel = productBlock.querySelector(
            ".inc_product_ecirp_label_block"
        );
        var elPriceActiveText = productBlock.querySelector(
            ".inc_product_desc_ecirp_active_text"
        );
        var elPriceRegularText = productBlock.querySelector(
            ".inc_product_desc_ecirp_regular_text"
        );
        var elAttBlock = productBlock.querySelector(
            ".inc_product_desc_att_block"
        );
        var elAttColorBlock = productBlock.querySelector(
            ".inc_product_desc_att_color_block"
        );
        var elAttColorTitleText = productBlock.querySelector(
            ".inc_product_desc_att_color_title_text"
        );
        var elAttColorListBlock = productBlock.querySelector(
            ".inc_product_desc_att_color_list_block"
        );
        var elAttSizeBlock = productBlock.querySelector(
            ".inc_product_desc_att_size_block"
        );
        var elAttSizeTitleText = productBlock.querySelector(
            ".inc_product_desc_att_size_title_text"
        );
        var elAttSizeTitleTextSelected = productBlock.querySelector(
            ".inc_product_desc_att_size_title_text_selected"
        );
        var elAttSizeListBlock = productBlock.querySelector(
            ".inc_product_desc_att_size_list_block"
        );
        var elAtt0ListBlock = productBlock.querySelector(
            ".inc_product_desc_att_zero_list_block"
        );
        var elAtt3ListBlock = productBlock.querySelector(
            ".inc_product_desc_att_third_list_block"
        );
        var elAtt4ListBlock = productBlock.querySelector(
            ".inc_product_desc_att_fourth_list_block"
        );
        var elAtt0Block = productBlock.querySelector(
            ".inc_product_desc_att_zero_block"
        );
        var elAtt3Block = productBlock.querySelector(
            ".inc_product_desc_att_third_block"
        );
        var elAtt4Block = productBlock.querySelector(
            ".inc_product_desc_att_fourth_block"
        );
        var elAtt0TitleText = productBlock.querySelector(
            ".inc_product_desc_att_zero_title_text"
        );
        var elAtt3TitleTextSelected = productBlock.querySelector(
            ".inc_product_desc_att_third_title_text_selected"
        );
        var elAtt3TitleText = productBlock.querySelector(
            ".inc_product_desc_att_third_title_text"
        );
        var elAtt4TitleTextSelected = productBlock.querySelector(
            ".inc_product_desc_att_fourth_title_text_selected"
        );
        var elAtt4TitleText = productBlock.querySelector(
            ".inc_product_desc_att_fourth_title_text"
        );

        var elAddBlock = productBlock.querySelector(
            ".inc_product_desc_add_block"
        );
        var elAddText = productBlock.querySelector(
            ".inc_product_desc_add_text"
        );
        var elAddImg = productBlock.querySelector(".inc_product_desc_add_img");
        var elratingsBlock = productBlock.querySelector(
            ".inc_product_desc_ratings_block"
        );
        var elworthPrice = productBlock.querySelector(
            ".inc_product_desc_ecirp_worth_text"
        );
        var eldetailsprodblock = productBlock.querySelector(
            ".inc_product_desc_att_details_block"
        );
        var eladdvarianttext = productBlock.querySelector(
            ".inc_product_variant_simple_text"
        );
        var elconfigtitle = productBlock.querySelector(
            ".inc_product_desc_add_title_text_block"
        );
        var elvariantaddbtn = productBlock.querySelector(
            ".inc_product_desc_att_variant_add_block"
        );
        var elvariantaddbtntext = productBlock.querySelector(
            ".inc_product_desc_att_variant_text"
        );
        var elvariantpopupclose = productBlock.querySelector(
            ".inc_product_desc_variant_popup_close_block"
        );
        var elselectoptaddbtn = productBlock.querySelector(
            ".inc_product_variant_simple_block"
        );

        var productDescAddText = productBlock.querySelector(
            ".inc_product_add_text"
        );
        var elQtyAddBtnBlock = productBlock.querySelector(
            ".inc_product_desc_qty_add_btn_block"
        );

        elQtyAddBtnBlock.classList.add(productObj.ProductType);

        if (INC.config.catFlag.length >= 2) {
            if (_parentblock.querySelector(".inc_pdp_title_text") != null) {
                _parentblock.querySelector(".inc_pdp_title_text").innerText =
                    "Frequently Bought Together";
            }
        }
        if (productObj.ProductType == "simple") {
            productBlock
                .querySelector(".inc_product_add_block")
                .addEventListener("click", function () {
                    productBlock
                        .querySelector(".inc_product_desc_add_block")
                        .click();
                });
        }

        if (window.innerWidth < 769) {
            var prodtypeflag = false;
            var producttypedetails_mobile_view = generate_html_tag(
                "div",
                "inc_details_mobile_quick_view"
            );
            var producttypedetails = generate_html_tag(
                "div",
                "inc_producttype_details_block"
            );
            var prod_quick_view_close = generate_html_tag(
                "div",
                "prod_quick_view_close"
            );
            producttypedetails_mobile_view.appendChild(prod_quick_view_close);
            prod_quick_view_close.addEventListener("click", function () {
                document.querySelector("html").classList.remove("inc_overlay");
                document
                    .querySelector("body")
                    .classList.remove("quick_view_active_inc");
                if (
                    document.querySelector(
                        ".inc_details_mobile_quick_view.quick_view_active"
                    ) != null
                ) {
                    document
                        .querySelector(".inc_product_block.quick_view_open")
                        .classList.remove("quick_view_open");
                    document
                        .querySelector(
                            ".inc_details_mobile_quick_view.quick_view_active"
                        )
                        .classList.remove("quick_view_active");
                }
            });
            producttypedetails_mobile_view.appendChild(producttypedetails);
            prodtypedesc(productObj, producttypedetails, prodtypeflag);
            if (prodtypeflag == trueflag) {
                var prod_quick_view_btn = generate_html_tag(
                    "div",
                    "prod_quick_view_btn"
                );
                prod_quick_view_btn.innerText = "More Info";
                prod_quick_view_btn.addEventListener("click", function () {
                    if (
                        productBlock.querySelector(
                            ".inc_details_mobile_quick_view.quick_view_active"
                        ) != null
                    ) {
                        document
                            .querySelector("html")
                            .classList.remove("inc_overlay");
                        document
                            .querySelector("body")
                            .classList.remove("quick_view_active_inc");
                        productBlock.classList.remove("quick_view_open");
                        productBlock
                            .querySelector(
                                ".inc_details_mobile_quick_view.quick_view_active"
                            )
                            .classList.remove("quick_view_active");
                    } else {
                        document
                            .querySelector("body")
                            .classList.add("quick_view_active_inc");
                        document
                            .querySelector("html")
                            .classList.add("inc_overlay");
                        productBlock.classList.add("quick_view_open");
                        productBlock
                            .querySelector(".inc_details_mobile_quick_view")
                            .classList.add("quick_view_active");
                    }
                });
                var prodplacement = productBlock.querySelector(
                    ".inc_product_desc_block"
                );
                if (prodplacement != null) {
                    prodplacement.appendChild(prod_quick_view_btn);
                    prodplacement.appendChild(producttypedetails_mobile_view);
                }
            }
        }

        elvariantpopupclose.addEventListener("click", function () {
            if (
                document.querySelector(".inc_product_modal_block.inc_active") ==
                    null &&
                document.querySelector(".inc_sidebar_modal_block.inc_active") ==
                    null
            ) {
                document.querySelector("html").classList.remove("inc_overlay");
                document.querySelector("body").style.position = "relative";
                document.querySelector("body").style.overflow = "auto";
            }
            this.parentNode.classList.remove("inc_active");
            productBlock.classList.remove("show_overlay");
        });
        elHeaderInfoBlck.setAttribute("data-id", productObj.id);
        elHeaderInfoBlck.setAttribute("data-sku", productObj.sku);
        elHeaderInfoBlck.setAttribute("data-main_id", productObj.mainId);
        elHeaderInfoBlck.setAttribute("data-bundle_id", productObj.bundleId);

        elHeader
            .querySelector(".inc_product_header_img_block")
            .addEventListener("click", function () {
                productBlock.parentNode.classList.remove("inc_active");
            });
        var elImgMainImg = elImgBlock.querySelector(
            ".inc_product_img_main_img"
        );
        var elImgTag1 = generate_html_tag("img");
        if (productObj.imageURLMain != undefined) {
            elImgTag1.src = productObj.imageURLMain;
        }
        elImgTag1.setAttribute("data-src", productObj.imageURLMain);
        elImgTag1.setAttribute(
            "onerror",
            "this.src='" + INC.config.noimage + "'"
        );
        elImgTag1.setAttribute("role", "img");
        elImgTag1.setAttribute("aria-label", "Image");
        elImgTag1.setAttribute("alt", productObj.nameMain);
        elImgTag1.setAttribute("data-mouseover", productObj["otherImageList"]);
        elImgTag1.setAttribute("data-imageURL", productObj["imageURLMain"]);
        var productLink = document.createElement("a");

        productLink.setAttribute("rel", "noopener noreferrer");
        productLink.appendChild(elImgTag1);
        productLink.setAttribute(
            "otherImageList",
            productObj["otherImageList"]
        );
        productLink.setAttribute("imageURL", productObj["imageURLMain"]);
        add_swipe(productLink);
        elImgMainImg.appendChild(productLink);
        productLink.addEventListener("click", function (e) {
            e.preventDefault();
        });
        productLink.setAttribute("href", productObj.url);
        elImgGalleryListBlock.innerHTML = "";
        if (
            productObj.otherImageList != null &&
            productObj.otherImageList.length > 1
        ) {
            prepareAdditionalimages(
                elImgGalleryListBlock,
                productObj,
                productBlock
            );
           
        }
        if (
            productObj.PromotionalMessage != null &&
            productObj.PromotionalMessage != ""
        ) {
            elPromo.innerText = productObj.PromotionalMessage;
            elPromo.classList.add("avail");
        } else {
            elPromo.classList.add("empty");
        }

        var pTitleDiv = document.createElement("div");

        if (mainprod == "mainprod" && INC.config.pageType == "pdp") {
            pTitleDiv.innerHTML =
                "<strong>THIS ITEM: </strong>" + productObj.nameMain;
        } else {
            pTitleDiv.innerHTML = productObj.nameMain;
        }

        var field1 = productObj.ratingsCount;
        var field2 = productObj.reviewsCount;
        INC.methods.get_product_ratings(field1, field2, elratingsBlock);
        var pLink = document.createElement("a");
        pLink.setAttribute("style", "cursor: default;text-decoration: none;");
        pLink.href = productObj.url;
        pLink.addEventListener("click", function (ev) {
            ev.preventDefault();
        });
        pLink.setAttribute("style", "text-transform: unset;");
        pLink.setAttribute("title", productObj.nameMain);
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);
        var activePrice = parseFloat(productObj.activePriceMain)
            .toFixed(2)
            .toString();
        var regularPrice = parseFloat(productObj.regularPriceMain)
            .toFixed(2)
            .toString();
        var totalsaveprc = get_discount_price(
            productObj.regularPrice,
            productObj.activePrice
        );
        elPriceRegularText.textContent = "";

        if (
            activePrice != regularPrice &&
            regularPrice != "" &&
            regularPrice != null &&
            regularPrice != 0
        ) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add(
                "is_special_ecirp"
            );
            elPriceActiveText.innerHTML = formatter.format(activePrice);
            elPriceRegularText.innerHTML = formatter.format(regularPrice);
            elproductPriceLabel.innerHTML =
                "You save:" + formatter.format(totalsaveprc);
        } else {
            elPriceActiveText.innerHTML = formatter.format(activePrice);
            elworthPrice.innerHTML = "";
        }
        if (window.innerWidth < 769) {
            var inc_empty_popup = generate_html_tag("div", "inc_empty_popup");
            eldetailsprodblock.appendChild(inc_empty_popup);
        }
        if (blockType == "am") {
            productDescAddText.innerText = "Add To Basket";
        } else if (blockType == "sidebar") {
            productDescAddText.innerText = "Add To Basket";
        } else {
            productDescAddText.innerText = "Add To Bundle";
        }
        productDescAddText.addEventListener("click", function () {
            this.parentNode.parentNode.parentNode
                .querySelector(".inc_product_desc_add_block")
                .click();
        });

        prepareqty(productBlock, blockType);

        findObj = new INC.classes.FindObj({
            mainId: productObj.mainId,
        });
        var productColorsObj = INC.dataStore
            .methods()
            .getProductColorsObj(findObj);
        var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);
        var productSizesObj = INC.dataStore
            .methods()
            .getProductSizesObj(findObj);
        var product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);
        var product4Obj = INC.dataStore.methods().getProductopt4Obj(findObj);

        elAtt0ListBlock.innerHTML = "";
        elAttSizeListBlock.innerHTML = "";
        elAttColorListBlock.innerHTML = "";
        elAtt3ListBlock.innerHTML = "";
        if (product0Obj.att0Array.length > 0) {
            if (product0Obj["att0Array"][0].code != "Color") {
                findObj = new INC.classes.FindObj({
                    mainId: productObj.mainId,
                });
                elAtt0ListBlock.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    productzeroatt(
                        elAtt0TitleText,
                        elAtt0Block,
                        product0Obj,
                        elAtt0ListBlock,
                        blockType
                    );
                }
            }
        }
        productsizeatt(
            elAttSizeTitleText,
            elAttSizeBlock,
            productSizesObj,
            elAttSizeListBlock,
            elAttSizeTitleTextSelected,
            blockType
        );
        productcoloratt(
            productColorsObj,
            productBlock,
            elAttColorListBlock,
            blockType,
            elAttColorBlock,
            elAttColorTitleText,
            elProductShowcaseBlock
        );
        productthirdatt(
            product3Obj,
            elAtt3TitleText,
            elAtt3Block,
            elAtt3ListBlock,
            blockType,
            elAtt3TitleTextSelected
        );
        productfourthatt(
            product4Obj,
            elAtt4TitleText,
            elAtt4Block,
            elAtt4ListBlock,
            blockType,
            elAtt4TitleTextSelected
        );
        if (
            productSizesObj.sizeArray.length > 0 &&
            product0Obj["att0Array"].length > 0
        ) {
            elAttBlock.classList.add("moreThanOne");
        }
        if (
            productColorsObj["colorArray"].length > 0 &&
            product0Obj["att0Array"].length > 0
        ) {
            elAttBlock.classList.add("moreThanOne");
        }
        if (product0Obj["att0Array"].length > 0) {
            productBlock
                .querySelector(".inc_product_desc_att_zero_title_block")
                .addEventListener("click", function (e) {
                    if (
                        document.querySelector(
                            ".inc_product_desc_att_zero_block.show_dropdown"
                        ) != e.currentTarget
                    ) {
                        if (
                            e.currentTarget.parentNode.classList.contains(
                                "show_dropdown"
                            ) == falseflag
                        ) {
                            zeroremshowdrop();
                        }
                    }
                    colorshowdrop();
                    sizehowdrop();
                    thirshowdrop();
                    this.parentNode.classList.toggle("show_dropdown");
                });
        }
        if (productColorsObj["colorArray"].length > 0) {
            _parentblock.classList.add("variant_avail");
            productBlock
                .querySelector(".inc_product_desc_att_color_title_block")
                .addEventListener("click", function (e) {
                    if (
                        document.querySelector(
                            ".inc_product_desc_att_color_block.show_dropdown"
                        ) != e.currentTarget
                    ) {
                        if (
                            e.currentTarget.parentNode.classList.contains(
                                "show_dropdown"
                            ) == falseflag
                        ) {
                            colorshowdrop();
                        }
                    }
                    zeroremshowdrop();
                    this.parentNode.classList.toggle("show_dropdown");
                });
        }
        if (productSizesObj.sizeArray.length > 0) {
            _parentblock.classList.add("variant_avail");
            productBlock
                .querySelector(
                    ".inc_product_desc_att_size_block .inc_product_desc_att_size_title_block"
                )
                .addEventListener("click", function (e) {
                    if (
                        document.querySelector(
                            ".inc_product_desc_att_size_block.show_dropdown"
                        ) != e.currentTarget
                    ) {
                        if (
                            e.currentTarget.parentNode.classList.contains(
                                "show_dropdown"
                            ) == falseflag
                        ) {
                            sizehowdrop();
                        }
                    }
                    thirshowdrop();
                    zeroremshowdrop();
                    this.parentNode.classList.toggle("show_dropdown");
                });
        }
        if (product3Obj.att3Array.length > 0) {
            _parentblock.classList.add("variant_avail");
            productBlock
                .querySelector(".inc_product_desc_att_third_title_block")
                .addEventListener("click", function (e) {
                    if (
                        document.querySelector(
                            ".inc_product_desc_att_third_block.show_dropdown"
                        ) != e.currentTarget
                    ) {
                        if (
                            e.currentTarget.parentNode.classList.contains(
                                "show_dropdown"
                            ) == falseflag
                        ) {
                            zeroremshowdrop();
                            sizehowdrop();
                        }
                    }
                    zeroremshowdrop();
                    sizehowdrop();

                    this.parentNode.classList.toggle("show_dropdown");
                });
        }
        if (product4Obj.att4Array.length > 0) {
            _parentblock.classList.add("variant_avail");
            productBlock
                .querySelector(".inc_product_desc_att_fourth_title_block")
                .addEventListener("click", function (e) {
                    if (
                        document.querySelector(
                            ".inc_product_desc_att_fourth_block.show_dropdown"
                        ) != e.currentTarget
                    ) {
                        if (
                            e.currentTarget.parentNode.classList.contains(
                                "show_dropdown"
                            ) == falseflag
                        ) {
                            zeroremshowdrop();
                            sizehowdrop();
                        }
                    }
                    zeroremshowdrop();
                    sizehowdrop();

                    this.parentNode.classList.toggle("show_dropdown");
                });
        }

        function zeroremshowdrop() {
            if (
                document.querySelector(
                    ".inc_product_desc_att_zero_block.show_dropdown"
                ) != null
            ) {
                document
                    .querySelector(
                        ".inc_product_desc_att_zero_block.show_dropdown"
                    )
                    .classList.remove("show_dropdown");
            }
        }

        function colorshowdrop() {
            if (
                document.querySelector(
                    ".inc_product_desc_att_color_block.show_dropdown"
                ) != null
            ) {
                document
                    .querySelector(
                        ".inc_product_desc_att_color_block.show_dropdown"
                    )
                    .classList.remove("show_dropdown");
            }
        }

        function sizehowdrop() {
            if (
                document.querySelector(
                    ".inc_product_desc_att_size_block.show_dropdown"
                ) != null
            ) {
                document
                    .querySelector(
                        ".inc_product_desc_att_size_block.show_dropdown"
                    )
                    .classList.remove("show_dropdown");
            }
        }

        function thirshowdrop() {
            if (
                document.querySelector(
                    ".inc_product_desc_att_third_block.show_dropdown"
                ) != null
            ) {
                document
                    .querySelector(
                        ".inc_product_desc_att_third_block.show_dropdown"
                    )
                    .classList.remove("show_dropdown");
            }
        }
        function fourthshowdrop() {
            if (
                document.querySelector(
                    ".inc_product_desc_att_fourth_block.show_dropdown"
                ) != null
            ) {
                document
                    .querySelector(
                        ".inc_product_desc_att_fourth_block.show_dropdown"
                    )
                    .classList.remove("show_dropdown");
            }
        }
        var sizezero = INC.dataStore.methods().getProductopt0Obj(findObj);
        if (
            productColorsObj["colorArray"].length == 0 &&
            sizezero["att0Array"].length == 0
        ) {
            elAttBlock.classList.add("attributes_not_avail");
            eladdvarianttext.textContent = "Add";
            switch (blockType) {
                case "pdp":
                    eladdvarianttext.textContent = "Add To Bundle";
                    break;
                case "sidebar":
                    eladdvarianttext.textContent = "Add To Bag";
                    break;
                case "am":
                    eladdvarianttext.textContent = "Add To Bag";
                    break;
            }
            eladdvarianttext.classList.add("simple");
        } else if (productColorsObj["colorArray"].length > 0) {
            elAttBlock.classList.add("attributes_avail");
            elAttSizeTitleText.textContent = "View colours";
            eladdvarianttext.textContent = "View Options";
            eladdvarianttext.classList.add("config");
            elconfigtitle.textContent = "Please select a Color";
            switch (blockType) {
                case "pdp":
                    elvariantaddbtntext.textContent = "Add To Bundle";
                    break;
                case "sidebar":
                    elvariantaddbtntext.textContent = "Add To Bag";
                    break;
                case "am":
                    elvariantaddbtntext.textContent = "Add To Bag";
                    break;
            }
            eladdvarianttext.classList.remove("simple");
        } else if (sizezero["att0Array"].length > 0) {
            eladdvarianttext.classList.remove("simple");
            eladdvarianttext.textContent = "View Options";
            eladdvarianttext.classList.add("config");
            elAttBlock.classList.add("attributes_avail");
            if (elAttSizeTitleText.textContent == null) {
                elAttSizeTitleText.textContent = "View Sizes";
            }
            elconfigtitle.textContent = "Please select your Size";
            switch (blockType) {
                case "pdp":
                    elvariantaddbtntext.textContent = "Add To Bundle";
                    break;
                case "sidebar":
                    elvariantaddbtntext.textContent = "Add To Bag";
                    break;
                case "am":
                    elvariantaddbtntext.textContent = "Add To Bag";
                    break;
            }
        }

        elvariantaddbtn.addEventListener("click", function () {
            var moduleblk =
                this.parentNode.parentNode.parentNode.parentNode.parentNode
                    .parentNode.parentNode;
            var flag_check = INC.methods.checkVariantSelection(moduleblk);
            if (
                (this.textContent.trim() == "Update" ||
                    this.parentNode.classList.contains("config_avail") ==
                        trueflag) &&
                this.innerText.trim() != "Add To Bag"
            ) {
                if (flag_check == 1 || flag_check == 3) {
                    if (
                        document.querySelector(
                            ".inc_product_modal_block.inc_active"
                        ) == null &&
                        document.querySelector(
                            ".inc_sidebar_modal_block.inc_active"
                        ) == null
                    ) {
                        document
                            .querySelector("html")
                            .classList.remove("inc_overlay");
                    }
                    this.parentNode.parentNode
                        .querySelector(
                            ".inc_product_desc_variant_popup_close_block"
                        )
                        .click();
                    this.parentNode.parentNode
                        .querySelector(
                            ".inc_product_desc_variant_popup_close_block"
                        )
                        .click();
                    productBlock.classList.remove("show_overlay");
                    if (this.textContent.trim() == "Add") {
                        this.parentNode.parentNode.parentNode
                            .querySelector(".inc_product_desc_add_block")
                            .click();
                    }
                } else {
                    if (flag_check == 2 || flag_check == 0) {
                        if (flag_check != 0) {
                            if (
                                this.parentNode.parentNode.querySelector(
                                    ".inc_variant_tag"
                                ) != null
                            ) {
                                this.parentNode.querySelector(
                                    ".inc_product_desc_add_title_text_block"
                                ).innerText = "Please select a Color";
                                this.parentNode.parentNode
                                    .querySelector(".inc_variant_tag")
                                    .setAttribute(
                                        "style",
                                        "border:1px solid #E52B45;"
                                    );
                            }
                        }

                        if (
                            this.parentNode.querySelector(
                                ".inc_product_desc_add_title_text_block"
                            ) != null
                        ) {
                            if (
                                this.parentNode.getAttribute("data-color") ==
                                    null &&
                                this.parentNode.getAttribute("data-zero") !=
                                    null &&
                                this.parentNode.getAttribute("data-size") !=
                                    null
                            ) {
                                this.parentNode.querySelector(
                                    ".inc_product_desc_add_title_text_block"
                                ).innerText =
                                    "Please select your Size and Color options";
                            } else if (
                                this.parentNode.getAttribute("data-color") !=
                                    null &&
                                this.parentNode.querySelectorAll(
                                    "inc_product_desc_att_color_list_item_block.inc_active"
                                ).length > 0
                            ) {
                                this.parentNode.querySelector(
                                    ".inc_product_desc_add_title_text_block"
                                ).innerText = "Please select your Size";
                            } else if (
                                this.parentNode.getAttribute("data-zero") !=
                                    null ||
                                this.parentNode.getAttribute("data-size") !=
                                    null
                            ) {
                                this.parentNode.querySelector(
                                    ".inc_product_desc_add_title_text_block"
                                ).innerText = "Please select a Color";
                            }
                            this.parentNode
                                .querySelector(
                                    ".inc_product_desc_add_title_text_block"
                                )
                                .setAttribute("style", "display:block;");
                        }
                    }
                }
            } else {
                if (
                    this.innerText.trim() == "Add To Bag" ||
                    this.innerText.trim() == "SELECT"
                ) {
                    if (flag_check == 1 || flag_check == 3) {
                        if (
                            document.querySelector(
                                ".inc_product_modal_block.inc_active"
                            ) == null &&
                            document.querySelector(
                                ".inc_sidebar_modal_block.inc_active"
                            ) == null
                        ) {
                            document
                                .querySelector("html")
                                .classList.remove("inc_overlay");
                        }
                        this.parentNode.parentNode
                            .querySelector(
                                ".inc_product_desc_variant_popup_close_block"
                            )
                            .click();
                        this.parentNode.parentNode
                            .querySelector(
                                ".inc_product_desc_variant_popup_close_block"
                            )
                            .click();

                        productBlock.classList.remove("show_overlay");
                        if (
                            this.textContent.trim() == "Add To Bag" ||
                            this.textContent.trim() == "SELECT" ||
                            this.textContent.trim() == "Add"
                        ) {
                            this.parentNode.parentNode.parentNode
                                .querySelector(".inc_product_desc_add_block")
                                .click();
                        }
                    } else {
                        if (flag_check == 2 || flag_check == 0) {
                            if (
                                this.parentNode.querySelector(
                                    ".inc_product_desc_add_title_text_block"
                                ) != null
                            ) {
                                if (
                                    this.parentNode.getAttribute(
                                        "data-color"
                                    ) == null &&
                                    this.parentNode.getAttribute("data-zero") ==
                                        null &&
                                    this.parentNode.getAttribute("data-size") ==
                                        null
                                ) {
                                    this.parentNode.querySelector(
                                        ".inc_product_desc_add_title_text_block"
                                    ).innerText =
                                        "Please select your Size and Color options";
                                } else if (
                                    this.parentNode.getAttribute("data-zero") ==
                                    null
                                ) {
                                    this.parentNode.querySelector(
                                        ".inc_product_desc_add_title_text_block"
                                    ).innerText = "Please select your Size";
                                } else if (
                                    this.parentNode.getAttribute("data-zero") !=
                                        null ||
                                    this.parentNode.getAttribute("data-size") !=
                                        null
                                ) {
                                    this.parentNode.querySelector(
                                        ".inc_product_desc_add_title_text_block"
                                    ).innerText = "Please select a Color";
                                }
                                this.parentNode
                                    .querySelector(
                                        ".inc_product_desc_add_title_text_block"
                                    )
                                    .setAttribute("style", "display:block;");
                            }

                            if (flag_check == 0) {
                                if (
                                    this.parentNode.querySelector(
                                        ".inc_product_desc_add_title_text_block"
                                    ) != null
                                ) {
                                    this.parentNode.querySelector(
                                        ".inc_product_desc_add_title_text_block"
                                    ).innerText = "Please select your size";
                                }
                            }
                        }
                    }
                } else {
                    if (flag_check == 1 || flag_check == 3) {
                        this.parentNode.parentNode.parentNode
                            .querySelector(".inc_product_desc_add_block")
                            .click();
                        this.parentNode.parentNode.parentNode
                            .querySelector(
                                ".inc_product_desc_variant_popup_close_block"
                            )
                            .click();
                    } else {
                        if (flag_check == 2 || flag_check == 0) {
                            if (flag_check != 0) {
                                if (
                                    this.parentNode.parentNode.querySelector(
                                        ".inc_variant_tag"
                                    ) != null
                                ) {
                                    this.parentNode.querySelector(
                                        ".inc_product_desc_add_title_text_block"
                                    ).innerText = "Please select a Color";
                                }
                            }

                            if (
                                this.parentNode.querySelector(
                                    ".inc_product_desc_add_title_text_block"
                                ) != null
                            ) {
                                if (
                                    this.parentNode.getAttribute(
                                        "data-color"
                                    ) == null &&
                                    this.parentNode.getAttribute("data-zero") ==
                                        null &&
                                    this.parentNode.getAttribute("data-size") ==
                                        null
                                ) {
                                    this.parentNode.querySelector(
                                        ".inc_product_desc_add_title_text_block"
                                    ).innerText =
                                        "Please select your Size and Color options";
                                } else if (
                                    this.parentNode.getAttribute(
                                        "data-color"
                                    ) != null
                                ) {
                                    this.parentNode.querySelector(
                                        ".inc_product_desc_add_title_text_block"
                                    ).innerText = "Please select your Size";
                                } else if (
                                    this.parentNode.getAttribute("data-zero") !=
                                        null ||
                                    this.parentNode.getAttribute("data-size")
                                ) {
                                    this.parentNode.querySelector(
                                        ".inc_product_desc_add_title_text_block"
                                    ).innerText = "Please select a Color";
                                }
                                this.parentNode
                                    .querySelector(
                                        ".inc_product_desc_add_title_text_block"
                                    )
                                    .setAttribute("style", "display:block;");
                            }

                            if (flag_check == 0) {
                                if (
                                    this.parentNode.querySelector(
                                        ".inc_product_desc_add_title_text_block"
                                    ) != null
                                ) {
                                    this.parentNode.querySelector(
                                        ".inc_product_desc_add_title_text_block"
                                    ).innerText = "Please select your size";
                                }
                            }
                        }
                    }
                }
            }
        });

        elselectoptaddbtn.addEventListener("click", function () {
            if (
                INC.config.recommendation &&
                productObj.ProductType != "simple"
            ) {
                document.querySelector("html").classList.add("inc_overlay");
                if (
                    window.innerWidth <= 800 &&
                    INC.config.pageType != "cartPage"
                ) {
                    if(productBlock.parentElement.parentElement.parentElement.classList.contains('inc_af_product-list_block') == false){
                        this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.add("inc_mini_modal");
                    }
                }
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                    .querySelector(".inc_product_modal_block")
                    .classList.add("inc_active");
                if (
                    document.querySelector(
                        ".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block"
                    ) != null
                ) {
                    document
                        .querySelector(
                            ".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block"
                        )
                        .classList.add("overflow_visible");
                    document
                        .querySelector("body")
                        .classList.add("inc_popup_open");
                }
                var trucheck = true;
                if (
                    productBlock.parentNode.parentNode.parentNode.classList.contains(
                        "inc_af_product-list_block"
                    ) == trucheck
                ) {
                    document.querySelector("html").classList.add("inc_overlay");
                }
                productBlock.parentNode.parentNode
                    .querySelector(
                        ".inc_product_modal_block .inc_product_info_main_block"
                    )
                    .classList.add("inc_active");
                productBlock.parentNode.parentNode
                    .querySelector(
                        ".inc_product_modal_block .inc_product_description_main_block"
                    )
                    .classList.remove("inc_active");
            }
            if (
                document.querySelector(
                    ".inc_product_desc_att_block.inc_active"
                ) != null
            ) {
                document
                    .querySelector(".inc_product_desc_att_block.inc_active")
                    .classList.remove("inc_active");
            }
            incscrollPgae(null);
            if (
                this.querySelector(".inc_product_variant_simple_text.simple") !=
                null
            ) {
                this.parentNode.parentNode.parentNode
                    .querySelector(".inc_product_desc_add_block")
                    .click();
            }
        });
        switch (blockType) {
            case "pdp":
                elAddText.textContent = "Add";
                break;
            case "sidebar":
                elAddText.textContent = "Add To Bag";
                break;
            case "am":
                elAddText.textContent = "Add To Bag";
                break;
        }
        elAddBlock.addEventListener("click", function () {
            var productModuleBlock = productBlock.parentNode.parentNode;
            var modalProductBlock = productModuleBlock
                .querySelector(".inc_product_modal_block")
                .querySelector(".inc_product_block");
            var flag_check =
                INC.methods.checkVariantSelection(productModuleBlock);
            var sku = productBlock.getAttribute("data-sku");
            var mainId = productBlock.getAttribute("data-main_id");
            var main_id = productBlock.getAttribute("data-main_id");
            var bundle_id = productBlock.getAttribute("data-bundle_id");
            var pname = productBlock.querySelector(
                ".inc_product_desc_title_text"
            ).textContent;
            var pprice = productBlock
                .querySelector(".inc_product_desc_ecirp_active_text")
                .textContent.replace("£", "");
            var elqtyvalue = productModuleBlock.querySelector(
                ".inc_product_showcase_block .inc_product_qty_block input"
            );
            var qty = parseInt(elqtyvalue.value);
            if (qty < 1) {
                qty = 1;
            }
            var prod_card =
                elAddText.parentNode.parentNode.parentNode.parentNode.parentNode
                    .parentNode.parentNode.parentNode;
            var prodflag = false;
            if (
                document.querySelector(".inc_sidebar_modal_block.inc_active") ==
                null
            ) {
                if (
                    flag_check == 1 ||
                    onloadpdp == falseflag ||
                    onloadpdp_delete == falseflag
                ) {
                    prodflag = true;
                } else {
                    if (
                        document.querySelector(
                            ".inc_product_modal_block.inc_active"
                        ) == null
                    ) {
                        if (
                            document.querySelector(
                                ".inc_pdp_bundle_block.inc_active .inc_pdp_bundle_cart_title_img_block"
                            ) != null
                        ) {
                            document
                                .querySelector(
                                    ".inc_pdp_bundle_block.inc_active .inc_pdp_bundle_cart_title_img_block"
                                )
                                .click();
                        }
                        if (window.innerWidth < 769) {
                            productModuleBlock
                                .querySelector(
                                    ".inc_product_variant_simple_text"
                                )
                                .click();
                        } else {
                            productModuleBlock
                                .querySelector(
                                    ".inc_product_variant_simple_block"
                                )
                                .click();
                        }
                        if (elAddText.textContent == "Add") {
                            if (
                                document.querySelector(
                                    ".inc_product_modal_block.inc_active"
                                ) == null
                            ) {
                                if (window.innerWidth < 769) {
                                    productModuleBlock
                                        .querySelector(
                                            ".inc_product_variant_simple_text"
                                        )
                                        .click();
                                } else {
                                    productModuleBlock
                                        .querySelector(
                                            ".inc_product_details_prod_block"
                                        )
                                        .click();
                                }
                            }
                            if (
                                productModuleBlock
                                    .querySelector(
                                        ".inc_product_variant_simple_text"
                                    )
                                    .getAttribute("title") != null
                            ) {
                                productModuleBlock.querySelector(
                                    ".inc_product_variant_simple_text"
                                ).textContent = productModuleBlock
                                    .querySelector(
                                        ".inc_product_variant_simple_text"
                                    )
                                    .getAttribute("title");
                            }
                        }
                    }
                }

                if (elAddText.textContent == "Add") {
                    if (prodflag == trueflag) {
                        elAddText.textContent = "Added";
                        elAddText.classList.add("added");
                        productDescAddText.textContent = "Added";
                        elAddText.parentNode.parentNode.parentNode
                            .querySelector(".inc_product_desc_add_block")
                            .classList.add("Inc_checked");
                        var pListItemBlock = document.querySelector(
                            ".inc_pdp_bundle_product_list_item_block" +
                                '[data-main_id="' +
                                mainId +
                                '"]'
                        );
                        modalProductBlock.querySelector(
                            ".inc_product_desc_add_text"
                        ).textContent = "Update";
                        if (pListItemBlock != null) {
                            pListItemBlock.classList.add("product_added");
                            pListItemBlock
                                .querySelector(
                                    ".inc_pdp_bundle_product_list_item_added_btn_img"
                                )
                                .classList.add("checked");
                        }
                        elAddImg.classList.add("checked");
                        modalProductBlock
                            .querySelector(".inc_product_desc_add_img")
                            .classList.add("checked");
                        if (
                            INC.config.pageType == "pdp" &&
                            blockType == "pdp"
                        ) {
                            INC.methods.updateBundleCart(
                                {
                                    sku: sku,
                                    qty: qty,
                                },
                                "add",
                                main_id,
                                bundle_id,
                                pname,
                                pprice
                            );
                        }
                        if (prod_card != null) {
                            if (
                                prod_card.querySelector(
                                    ".inc_product_modal_block.inc_active"
                                ) != null
                            ) {
                                if (inc_scroll_height > 100) {
                                    window.scrollTo(0, inc_scroll_height);
                                }
                                prod_card
                                    .querySelector(
                                        ".inc_product_modal_block.inc_active"
                                    )
                                    .classList.remove("inc_active");
                            }
                        }
                        productModuleBlock
                            .querySelector(".inc_product_variant_simple_block")
                            .classList.add("added_inc");
                        // productModuleBlock
                        //     .querySelector(".inc_product_variant_simple_block")
                        //     .classList.add("inc_stay_added");
                        productModuleBlock
                            .querySelector(
                                ".inc_product_desc_qty_add_btn_block"
                            )
                            .classList.add("added_inc");
                        // productModuleBlock
                        //     .querySelector(
                        //         ".inc_product_desc_qty_add_btn_block"
                        //     )
                        //     .classList.add("inc_stay_added");
                        if (
                            productModuleBlock.querySelector(
                                ".inc_product_desc_qty_add_btn_block .inc_add_text"
                            ) != null
                        ) {
                            productModuleBlock.querySelector(
                                ".inc_product_desc_qty_add_btn_block .inc_add_text"
                            ).innerText = "Added";
                        }
                        productModuleBlock
                            .querySelector(".inc_product_add_block")
                            .classList.add("added_inc");
                        // productModuleBlock
                        //     .querySelector(".inc_product_add_block")
                        //     .classList.add("inc_stay_added");
                        productModuleBlock
                            .querySelector(
                                ".inc_product_modal_block .inc_product_add_block"
                            )
                            .classList.add("added_inc");
                        productModuleBlock.querySelector(
                            ".inc_product_desc_att_variant_text"
                        ).textContent = "Update";
                        
                        if(productModuleBlock.querySelector(".inc_product_variant_simple_text").getAttribute("title_") != undefined){
                            var seltx=productModuleBlock.querySelector(".inc_product_variant_simple_text").getAttribute("title_")
                            productModuleBlock.querySelector(".inc_product_variant_simple_text").setAttribute("title",seltx);
                        }

                        var titlesel = productModuleBlock.querySelector(".inc_product_variant_simple_text").getAttribute("title");
                        productModuleBlock.querySelector(".inc_product_variant_simple_block").classList.remove("inc_select");
                        productModuleBlock.querySelector(".inc_product_variant_simple_block").classList.add("added_inc");
                        productModuleBlock.querySelector(".inc_product_variant_simple_text").setAttribute("title",titlesel);
                        productModuleBlock.querySelector(".inc_product_variant_simple_text").innerHTML = '<span class="variant_span">'+titlesel+'</span>'
                    }
                } else if (elAddText.textContent == "Added") {
                    if (
                        modalProductBlock.querySelector(
                            ".inc_product_desc_add_text"
                        ).textContent != "Update" &&
                        prod_card.querySelector(
                            ".inc_product_modal_block.inc_active"
                        ) != null
                    ) {
                        elAddText.textContent = "Add";
                        productDescAddText.textContent = "Add To Bundle";
                        elAddText.classList.remove("added");
                        elAddText.parentNode.parentNode.classList.remove(
                            "Inc_checked"
                        );
                        modalProductBlock.querySelector(
                            ".inc_product_desc_add_text"
                        ).textContent = "Add To Bundle";
                        var pListItemBlock1 = document.querySelector(
                            ".inc_pdp_bundle_product_list_item_block" +
                                '[data-main_id="' +
                                mainId +
                                '"]'
                        );
                        if (pListItemBlock1 != null) {
                            pListItemBlock1.classList.remove("product_added");
                            pListItemBlock1
                                .querySelector(
                                    ".inc_pdp_bundle_product_list_item_added_btn_img"
                                )
                                .classList.remove("checked");
                        }
                        elAddImg.classList.remove("checked");
                        modalProductBlock
                            .querySelector(".inc_product_desc_add_img")
                            .classList.remove("checked");
                        eladdfn_(productModuleBlock);
                        if (
                            INC.config.pageType == "pdp" &&
                            blockType == "pdp"
                        ) {
                            INC.methods.updateBundleCart(
                                {
                                    sku: sku,
                                    qty: qty,
                                },
                                "sub",
                                main_id,
                                bundle_id,
                                pname,
                                pprice
                            );
                        }
                    } else {
                        if (
                            prod_card.querySelector(
                                ".inc_product_modal_block.inc_active"
                            ) == null
                        ) {
                            elAddText.textContent = "Add";
                            productDescAddText.textContent = "Add To Bundle";
                            elAddText.classList.remove("added");
                            elAddText.parentNode.parentNode.classList.remove(
                                "Inc_checked"
                            );
                            modalProductBlock.querySelector(
                                ".inc_product_desc_add_text"
                            ).textContent = "Add To Bundle";
                            var pListItemBlock2 = document.querySelector(
                                ".inc_pdp_bundle_product_list_item_block" +
                                    '[data-main_id="' +
                                    mainId +
                                    '"]'
                            );
                            if (pListItemBlock2 != null) {
                                pListItemBlock2.classList.remove(
                                    "product_added"
                                );
                                pListItemBlock2
                                    .querySelector(
                                        ".inc_pdp_bundle_product_list_item_added_btn_img"
                                    )
                                    .classList.remove("checked");
                            }
                            eladdfn_(productModuleBlock);
                            elAddImg.classList.remove("checked");
                            modalProductBlock
                                .querySelector(".inc_product_desc_add_img")
                                .classList.remove("checked");
                            if (
                                INC.config.pageType == "pdp" &&
                                blockType == "pdp"
                            ) {
                                INC.methods.updateBundleCart(
                                    {
                                        sku: sku,
                                        qty: qty,
                                    },
                                    "sub",
                                    main_id,
                                    bundle_id,
                                    pname,
                                    pprice
                                );
                            }
                        }
                    }
                    if (prod_card != null) {
                        if (
                            prod_card.querySelector(
                                ".inc_product_modal_block.inc_active"
                            ) != null
                        ) {
                            if (inc_scroll_height > 100) {
                                window.scrollTo(0, inc_scroll_height);
                            }
                            prod_card
                                .querySelector(
                                    ".inc_product_modal_block.inc_active"
                                )
                                .classList.remove("inc_active");
                        }
                    }
                }
            } else {
                if (flag_check == 1) {
                    elAddText.textContent = "Adding To Basket";
                    elAddText.parentNode.parentNode.setAttribute(
                        "style",
                        "pointer-events: none;opacity: 0.5;"
                    );
                } else {
                    if (
                        document.querySelector(
                            ".inc_product_modal_block.inc_active"
                        ) == null
                    ) {
                        productModuleBlock
                            .querySelector(".inc_product_details_prod_block")
                            .click();
                    }
                }
            }
        });
        if (
            INC.config.pageType == "cartPage" &&
            window.location.href.includes("tapbuy")
        ) {
            productBlock.querySelector(
                ".inc_product_desc_att_details_block"
            ).style.display = "none";
        }
        return productBlock;
    };

    function eladdfn_(productModuleBlock) {
        if (
            productModuleBlock.querySelector(
                ".inc_product_variant_simple_text.simple"
            ) != null
        ) {
            productModuleBlock.querySelector(
                ".inc_product_variant_simple_text.simple"
            ).textContent = "Add To Bundle";
            productModuleBlock
                .querySelector(".inc_product_variant_simple_text")
                .setAttribute("title", "Add To Bundle");
        } else {
            if (INC.config.pageType !== "pdp") {
                productModuleBlock.querySelector(
                    ".inc_product_variant_simple_text"
                ).textContent = "View Options";
                productModuleBlock
                    .querySelector(".inc_product_variant_simple_text")
                    .setAttribute("title", "View Options");
            } else {
            }
        }
        if (
            productModuleBlock.querySelector(
                ".inc_product_variant_simple_block"
            ) != null
        ) {
            productModuleBlock
                .querySelector(".inc_product_variant_simple_block")
                .classList.remove("added_inc");
        }
        productModuleBlock
            .querySelector(".inc_product_desc_qty_add_btn_block")
            .classList.remove("added_inc");
        productModuleBlock
            .querySelector(".inc_product_add_block")
            .classList.remove("added_inc");
        productModuleBlock
            .querySelector(".inc_product_modal_block .inc_product_add_block")
            .classList.remove("added_inc");
        productModuleBlock.querySelector(
            ".inc_product_desc_att_variant_text"
        ).textContent = "Add To Bundle";
    }
    INC.methods.createProductModalBlock = function (
        pdpProductId,
        blockType,
        _bundleProductListCheck,
        _parentblock,
        elmodalblock,
        mainprod,
        rec_type
    ) {
        var productBlock = elmodalblock.querySelector(".inc_product_block");
        var prdmblock = productBlock;
        var findObj = new INC.classes.FindObj({
            id: pdpProductId,
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);

        setidstoelm(productBlock, productObj);
        var elHeader = prdmblock.querySelector(
            ".inc_product_header_main_block"
        );
        var elImgBlock = prdmblock.querySelector(".inc_product_img_block");
        var elImgGalleryListBlock = prdmblock.querySelector(
            ".inc_product_img_gallery_list_block"
        );
        var elTitleBlock = prdmblock.querySelector(
            ".inc_product_desc_title_block"
        );
        var elTitleText = prdmblock.querySelector(
            ".inc_product_desc_title_text"
        );
        var elAttColorTitleText = prdmblock.querySelector(
            ".inc_product_desc_att_color_title_text"
        );
        var elPromo = productBlock.querySelector(".pc_promo_div");
        var elPriceActiveText = prdmblock.querySelector(
            ".inc_product_desc_ecirp_active_text"
        );
        var elPriceRegularText = prdmblock.querySelector(
            ".inc_product_desc_ecirp_regular_text"
        );
        var elAttColorBlock = prdmblock.querySelector(
            ".inc_product_desc_att_color_block"
        );
        var elAttColorListBlock = prdmblock.querySelector(
            ".inc_product_desc_att_color_list_block"
        );
        var elAttSizeBlock = prdmblock.querySelector(
            ".inc_product_desc_att_size_block"
        );
        var elAttSizeTitleText = prdmblock.querySelector(
            ".inc_product_desc_att_size_title_text"
        );
        var elAttSizeTitleTextSelected = prdmblock.querySelector(
            ".inc_product_desc_att_size_title_text_selected"
        );
        var elAttSizeListBlock = prdmblock.querySelector(
            ".inc_product_desc_att_size_list_block"
        );
        var elAtt0ListBlock = prdmblock.querySelector(
            ".inc_product_desc_att_zero_list_block"
        );
        var elAtt3ListBlock = prdmblock.querySelector(
            ".inc_product_desc_att_third_list_block"
        );
        var elAtt4ListBlock = prdmblock.querySelector(
            ".inc_product_desc_att_fourth_list_block"
        );
        var elAtt0Block = prdmblock.querySelector(
            ".inc_product_desc_att_zero_block"
        );
        var elAtt3Block = prdmblock.querySelector(
            ".inc_product_desc_att_third_block"
        );
        var elAtt4Block = prdmblock.querySelector(
            ".inc_product_desc_att_fourth_block"
        );
        var elAtt0TitleText = prdmblock.querySelector(
            ".inc_product_desc_att_zero_title_text"
        );
        var elAtt3TitleTextSelected = prdmblock.querySelector(
            ".inc_product_desc_att_third_title_text_selected"
        );
        var elAtt3TitleText = prdmblock.querySelector(
            ".inc_product_desc_att_third_title_text"
        );
        var elAtt4TitleTextSelected = prdmblock.querySelector(
            ".inc_product_desc_att_fourth_title_text_selected"
        );
        var elAtt4TitleText = prdmblock.querySelector(
            ".inc_product_desc_att_fourth_title_text"
        );
        var elAddBlock = prdmblock.querySelector(".inc_product_desc_add_block");
        var elAddText = prdmblock.querySelector(".inc_product_desc_add_text");
        var elratingsBlock = prdmblock.querySelector(
            ".inc_product_desc_ratings_block"
        );
        var elGalleryRightArrow = prdmblock.querySelector(
            ".inc_product_img_gallery_right_block"
        );
        var elGallerylefttArrow = prdmblock.querySelector(
            ".inc_product_img_gallery_left_block"
        );
        var productDescriptionMainBlock = prdmblock.querySelector(
            ".inc_product_description_main_block"
        );
        var productHeaderMainBlockTitle = prdmblock.querySelector(
            ".inc_product_header_main_title_block"
        );
        var productHeaderMainBlockRating = prdmblock.querySelector(
            ".inc_product_header_main_rating_block"
        );
        var elproductPriceLabel = prdmblock.querySelector(
            ".inc_product_ecirp_label_block"
        );
        var elproductdescblock = prdmblock.querySelector(
            ".inc_product_desc_block"
        );
        prdmblock
            .querySelector("#incVideoPlayer")
            .addEventListener("ended", function () {
                prdmblock
                    .querySelector(".inc_product_img_main_img")
                    .classList.remove("inc_hide_img");
                prdmblock
                    .querySelector(".inc_video_container")
                    .classList.add("empty");
            });

        if (window.innerWidth < 820) {
            var productFullDetailsBlock = generate_html_tag(
                "div",
                "inc_product_mobile_full_deatils"
            );
            productFullDetailsBlock.innerHTML =
                "<span></span>" + "VIEW FULL DETAILS";
            elproductdescblock.appendChild(productFullDetailsBlock);

            productFullDetailsBlock.addEventListener("click", function () {
                INC.methods.sendBundleClickTracking(
                    productBlock.getAttribute("data-main_id"),
                    rec_type
                );
                getTrackingPixel();
                var hrefm = productBlock.querySelector(
                    ".inc_product_img_main_img a"
                ).href;
                setTimeout(function () {
                    window.location.href = hrefm;
                }, 2000);
            });
        }

        elHeader
            .querySelector(".inc_product_header_img_block")
            .addEventListener("click", function () {
                if (
                    document.querySelector(
                        ".inc_sidebar_modal_block.inc_active"
                    ) == null
                ) {
                    document
                        .querySelector("html")
                        .classList.remove("inc_overlay");
                    document
                        .querySelector("body")
                        .classList.remove("inc_popup_open");
                }
                if (
                    document.querySelector(
                        ".inc_sidebar_modal_block.inc_active"
                    ) != null
                ) {
                    document
                        .querySelector(".inc_sidebar_modal_block.inc_active")
                        .classList.remove("overflow_visible");
                }
                if (
                    productBlock.parentNode.parentNode.querySelector(
                        ".inc_product_modal_block .inc_product_desc_qty_input_text input"
                    ) != null &&
                    productBlock.parentNode.parentNode.querySelector(
                        ".inc_product_showcase_block .inc_product_desc_qty_input_text input"
                    ) != null
                ) {
                    if (
                        productBlock.parentNode.parentNode.querySelector(
                            ".inc_product_modal_block .inc_product_desc_qty_input_text input"
                        ).value !=
                        productBlock.parentNode.parentNode.querySelector(
                            ".inc_product_showcase_block .inc_product_desc_qty_input_text input"
                        ).value
                    ) {
                        productBlock.parentNode.parentNode.querySelector(
                            ".inc_product_modal_block .inc_product_desc_qty_input_text input"
                        ).value = productBlock.parentNode.parentNode.querySelector(
                            ".inc_product_showcase_block .inc_product_desc_qty_input_text input"
                        ).value;
                    }
                }

                productBlock.parentNode.classList.remove("inc_active");
                productBlock.parentNode
                    .querySelector(".inc_product_header_title_block")
                    .classList.add("inc_active");
                productBlock.parentNode
                    .querySelector(".inc_product_header_title_block_1")
                    .classList.remove("inc_active");
                if (
                    document.querySelector(
                        ".inc_product_modal_block.inc_active"
                    ) == null &&
                    document.querySelector(
                        "body.active-gnav, body.product-shades-sidebar-active"
                    ) == null
                ) {
                }
            });
        if (window.innerWidth > 820) {
            var prodtypeflag = false;
            var producttypedetails = generate_html_tag(
                "div",
                "inc_producttype_details_block"
            );
            prodtypedesc(productObj, producttypedetails, prodtypeflag);
            if (prodtypeflag == trueflag) {
                var prodplacement = productBlock.querySelector(
                    ".inc_product_desc_att_details_block"
                );
                if (prodplacement != null) {
                    prodplacement.parentNode.insertBefore(
                        producttypedetails,
                        prodplacement
                    );
                }
            }
        }
        var elImgMainImg = elImgBlock.querySelector(
            ".inc_product_img_main_img"
        );
        var elImgTag1 = generate_html_tag("img");
        if (productObj.imageURLMain != undefined) {
            elImgTag1.src = productObj.imageURLMain;
            elImgTag1.setAttribute("data-src", productObj.imageURLMain);
            if (elImgTag1 == trueflag) {
                elImgTag1.src = productObj.imageURLMain;
            }
        }
        elImgTag1.setAttribute(
            "onerror",
            "this.src='" + INC.config.noimage + "'"
        );
        elImgTag1.setAttribute("role", "img");
        elImgTag1.setAttribute("aria-label", "Image");
        elImgTag1.setAttribute("alt", productObj.nameMain);
        if (window.innerWidth < 769) {
            if (
                productObj.otherImageList != null &&
                productObj.otherImageList.length < 4
            ) {
                elGalleryRightArrow.style.display = "none";
                elGallerylefttArrow.style.display = "none";
            }
        } else {
            if (
                productObj.otherImageList != null &&
                productObj.otherImageList.length < 6
            ) {
                elGalleryRightArrow.style.display = "none";
                elGallerylefttArrow.style.display = "none";
            }
        }
        var productLink = document.createElement("a");

        productLink.setAttribute("rel", "noopener noreferrer");
        if (mainprod != "mainprod") {
            productLink.href = productObj.url;
        }
        productLink.appendChild(elImgTag1);
        productLink.style.cursor = "pointer";
        productLink.setAttribute(
            "otherImageList",
            productObj["otherImageList"]
        );
        productLink.setAttribute("imageURL", productObj["imageURLMain"]);
        add_swipe(productLink);
        elImgMainImg.appendChild(productLink);
        if (mainprod != "mainprod") {
            elImgMainImg.addEventListener("click", function (e) {
                e.preventDefault();
                if (
                    productBlock.parentNode.parentNode.parentNode.classList.contains(
                        "inc_recommended_products_list_block"
                    )
                ) {
                    rec_type = "sidebar";
                }
                INC.methods.sendBundleClickTracking(
                    productBlock.getAttribute("data-main_id"),
                    rec_type
                );
                getTrackingPixel();
                var hrefm = productBlock.querySelector(
                    ".inc_product_img_main_img a"
                ).href;
                if (event.target.src.includes("VIDEO")) {
                    productBlock
                        .querySelector(".inc_product_img_main_img")
                        .classList.add("inc_hide_img");
                    productBlock
                        .querySelector(".inc_video_container")
                        .classList.remove("empty");
                    productBlock.querySelector(".inc_vim_video").src =
                        productObj.VideoUrl;
                } else {
                    setTimeout(function () {
                        window.location.href = hrefm;
                    }, 2000);
                }
            });
        } else {
            elImgMainImg.addEventListener("click", function (e) {
                e.preventDefault();
                if (event.target.src.includes("VIDEO")) {
                    productBlock
                        .querySelector(".inc_product_img_main_img")
                        .classList.add("inc_hide_img");
                    productBlock
                        .querySelector(".inc_video_container")
                        .classList.remove("empty");
                    productBlock.querySelector(".inc_vim_video").src =
                        productObj.VideoUrl;
                }
            });
        }
        elImgGalleryListBlock.innerHTML = "";
        if (
            productObj.otherImageList != null &&
            productObj.otherImageList.length >= 1
        ) {
            prepareAdditionalimages(
                elImgGalleryListBlock,
                productObj,
                productBlock
            );
           
        } else {
            productBlock.classList.add("inc_other_noimage");
        }

        elTitleBlock.addEventListener("click", function (ee) {
            ee.preventDefault();
            if (INC.config.Product_id != productObj.childsku) {
                INC.methods.sendBundleClickTracking(
                    productBlock.getAttribute("data-main_id"),
                    rec_type
                );
                getTrackingPixel();
                var hrefm1 = productBlock.querySelector(
                    ".inc_product_img_main_img a"
                ).href;
                setTimeout(function () {
                    window.location.href = hrefm1;
                }, 2000);
            }
        });

        var pTitleDiv = document.createElement("div");
        pTitleDiv.innerText = productObj.nameMain;
        var pLinkModal = document.createElement("a");
        pLinkModal.setAttribute("title", productObj.nameMain);
        if (mainprod != "mainprod") {
            pLinkModal.setAttribute("href", productObj.url);
        }
        pLinkModal.setAttribute("rel", "noopener noreferrer");
        pLinkModal.innerText = productObj.nameMain;
        productHeaderMainBlockTitle.appendChild(pLinkModal);
        if (mainprod != "mainprod") {
            pLinkModal.addEventListener("click", function (e) {
                e.preventDefault();
                INC.methods.sendBundleClickTracking(
                    productBlock.getAttribute("data-main_id"),
                    rec_type
                );
                getTrackingPixel();
                var hrefm2 = productBlock.querySelector(
                    ".inc_product_img_main_img a"
                ).href;
                setTimeout(function () {
                    window.location.href = hrefm2;
                }, 2000);
            });
        }

        var field1 = productObj.ratingsCount;
        var field2 = productObj.reviewsCount;
        INC.methods.get_product_ratings(field1, field2, elratingsBlock);
        var pLinkModalSKU = document.createElement("span");
        pLinkModalSKU.classList.add("product_modal_sku");
        pLinkModalSKU.innerText = "#" + productObj.sku;
        productHeaderMainBlockRating.appendChild(pLinkModalSKU);

        var pLink = document.createElement("a");
        pLink.href = productObj.url;
        pLink.setAttribute("style", "text-transform: unset;");
        pLink.setAttribute("title", productObj.nameMain);
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);

        if (
            productObj.PromotionalMessage != null &&
            productObj.PromotionalMessage != ""
        ) {
            elPromo.innerText = productObj.PromotionalMessage;
            elPromo.classList.add("avail");
        } else {
            elPromo.classList.add("empty");
        }

        var activePrice = parseFloat(productObj.activePriceMain)
            .toFixed(2)
            .toString();
        var regularPrice = parseFloat(productObj.regularPriceMain)
            .toFixed(2)
            .toString();
        var totalsaveprc = get_discount_price(
            productObj.regularPrice,
            productObj.activePrice
        );
        elPriceRegularText.innerText = "";
        if (
            activePrice != regularPrice &&
            regularPrice != "" &&
            regularPrice != null &&
            regularPrice != 0
        ) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add(
                "is_special_ecirp"
            );
            elPriceActiveText.innerHTML = formatter.format(activePrice);
            elPriceRegularText.innerHTML = formatter.format(regularPrice);
            elproductPriceLabel.innerHTML =
                "You save:" + formatter.format(totalsaveprc);
        } else {
            elPriceActiveText.innerText = formatter.format(activePrice);
        }
        prepareqty(productBlock, blockType);

        findObj = new INC.classes.FindObj({
            mainId: productObj.mainId,
        });
        if (
            INC.dataStore.methods().getProductColorsObj(findObj).colorArray
                .length == 0 &&
            INC.dataStore.methods().getProductopt0Obj(findObj).att0Array
                .length == 0
        ) {
            elHeader.querySelector(".inc_product_header_title_text").innerText =
                "Overview";
        } else {
            if (
                INC.dataStore.methods().getProductopt0Obj(findObj).att0Array
                    .length > 0 ||
                INC.dataStore.methods().getProductColorsObj(findObj).colorArray
                    .length > 0
            ) {
                elHeader.querySelector(
                    ".inc_product_header_title_text"
                ).innerText = "Overview";
            }
        }
        var inc_product_header_title_block_1 = productBlock.querySelector(
            ".inc_product_header_title_block_1"
        );
        var inc_product_header_title_text_1 = productBlock.querySelector(
            ".inc_product_header_title_text_1"
        );

        inc_product_header_title_text_1.innerText = "Description";

        if (window.innerWidth < 769) {
            productDescriptionMainBlock.innerHTML =
                "<span>Description</span>" + productObj.description;
        } else {
            productDescriptionMainBlock.innerHTML = productObj.description;
        }

        var inc_product_header_title_block =
            inc_product_header_title_block_1.parentNode.querySelector(
                ".inc_product_header_title_block"
            );

        var inc_product_header_new_page = productBlock.querySelector(
            ".inc_product_header_new_page"
        );
        var inc_product_header_new_page_text = productBlock.querySelector(
            ".inc_product_header_new_page .inc_product_header_new_page_text"
        );
        inc_product_header_new_page_text.innerText = "Open In A New Tab";
        inc_product_header_new_page_text.setAttribute("href", productObj.url);
        inc_product_header_new_page_text.setAttribute("target", "_blank");
        inc_product_header_new_page_text.setAttribute(
            "rel",
            "noopener noreferrer"
        );
        inc_product_header_new_page.addEventListener("click", function () {
            INC.methods.sendBundleClickTracking(productObj.mainId, rec_type);
            getTrackingPixel();
        });

        inc_product_header_title_block_1.addEventListener("click", function () {
            this.parentNode.parentNode.parentNode
                .querySelector(".inc_product_description_main_block")
                .classList.add("inc_active");
            this.parentNode.parentNode.parentNode
                .querySelector(".inc_product_info_main_block")
                .classList.remove("inc_active");
            this.parentNode
                .querySelector(".inc_product_header_title_block")
                .classList.remove("inc_active");
            this.classList.add("inc_active");
        });

        inc_product_header_title_block.classList.add("inc_active");

        inc_product_header_title_block.addEventListener("click", function () {
            this.parentNode.parentNode.parentNode
                .querySelector(".inc_product_description_main_block")
                .classList.remove("inc_active");
            this.parentNode.parentNode.parentNode
                .querySelector(".inc_product_info_main_block")
                .classList.add("inc_active");
            inc_product_header_title_block.classList.add("inc_active");
            inc_product_header_title_block_1.classList.remove("inc_active");
        });

        var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);

        var productColorsObj = INC.dataStore
            .methods()
            .getProductColorsObj(findObj);
        var productSizesObj = INC.dataStore
            .methods()
            .getProductSizesObj(findObj);

        var product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);
        var product4Obj = INC.dataStore.methods().getProductopt4Obj(findObj);

        elAtt0ListBlock.innerHTML = "";
        elAttSizeListBlock.innerHTML = "";
        elAttColorListBlock.innerHTML = "";
        elAtt3ListBlock.innerHTML = "";

        if (product0Obj.att0Array.length > 0) {
            if (product0Obj["att0Array"][0].code != "Color") {
                elAtt0ListBlock.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    productzeroatt(
                        elAtt0TitleText,
                        elAtt0Block,
                        product0Obj,
                        elAtt0ListBlock,
                        blockType
                    );
                }
            }
        }

        if (
            productColorsObj["colorArray"].length > 0 ||
            productSizesObj["sizeArray"].length > 0 ||
            product3Obj["att3Array"].length > 0
        ) {
            INC.config.ddFlag = true;
        }

        productcoloratt(
            productColorsObj,
            productBlock,
            elAttColorListBlock,
            blockType,
            elAttColorBlock,
            elAttColorTitleText,
            null
        );
        productsizeatt(
            elAttSizeTitleText,
            elAttSizeBlock,
            productSizesObj,
            elAttSizeListBlock,
            elAttSizeTitleTextSelected,
            blockType
        );
        productthirdatt(
            product3Obj,
            elAtt3TitleText,
            elAtt3Block,
            elAtt3ListBlock,
            blockType,
            elAtt3TitleTextSelected
        );
        productfourthatt(
            product4Obj,
            elAtt4TitleText,
            elAtt4Block,
            elAtt4ListBlock,
            blockType,
            elAtt4TitleTextSelected
        );

        
        elGallerylefttArrow.setAttribute("title", "Scroll left");
        elGalleryRightArrow.setAttribute("title", "Scroll right");

        elGalleryRightArrow.addEventListener("click", function () {
            var prod_card =
                this.parentNode.parentNode.parentNode.parentNode.parentNode
                    .parentNode;
            var pr_id = prod_card.getAttribute("data-main_id");
            slideTo(pr_id, 0, prod_card, "right", "arrow");
        });
        elGallerylefttArrow.addEventListener("click", function () {
            var prod_card =
                this.parentNode.parentNode.parentNode.parentNode.parentNode
                    .parentNode;
            var pr_id = prod_card.getAttribute("data-main_id");
            slideTo(pr_id, 0, prod_card, "left", "arrow");
        });
        if (
            productObj.otherImageList == null ||
            productObj.otherImageList.length < 2
        ) {
            elGalleryRightArrow.style.display = "none";
            elGallerylefttArrow.style.display = "none";
        }
        switch (blockType) {
            case "pdp":
                elAddText.innerText = "Add To Bundle";
                break;
            case "sidebar":
                elAddText.innerText = "Add To Basket";
                break;
            case "am":
                elAddText.innerText = "Add To Basket";
                break;
        }
        elAddBlock.addEventListener("click", function () {
            productBlock.parentNode
                .querySelector(".inc_product_header_title_block")
                .classList.add("inc_active");
            productBlock.parentNode
                .querySelector(".inc_product_header_title_block_1")
                .classList.remove("inc_active");
            productBlock.parentNode
                .querySelector(".inc_product_description_main_block")
                .classList.remove("inc_active");

            var productModuleBlock = productBlock.parentNode.parentNode;
            var flag_check =
                INC.methods.checkVariantSelection(productModuleBlock);
            if (
                document.querySelector(".sidebar_outer.sidebar_outer_active") ==
                null
            ) {
                document
                    .querySelector("body")
                    .classList.remove("inc_popup_open");
                document.querySelector("html").classList.remove("inc_overlay");
            }
            var showcaseProductBlock = productModuleBlock
                .querySelector(".inc_product_showcase_block")
                .querySelector(".inc_product_block");
            if (
                INC.config.pageType == "pdp" ||
                INC.config.pageType == "productList"
            ) {
                if (
                    INC.config.pageType != "cartPage" &&
                    INC.config.pageType != "ticket" &&
                    productModuleBlock.parentNode.className.indexOf(
                        "inc_af_product-list_block"
                    ) == -1
                ) {
                    showcaseProductBlock
                        .querySelector(".inc_product_desc_add_block")
                        .click();
                }
            } else {
                if (
                    INC.config.pageType != "cartPage" &&
                    INC.config.recommendation &&
                    INC.config.pageType != "ticket" &&
                    productModuleBlock.parentNode.className.indexOf(
                        "inc_af_product-list_block"
                    ) == -1
                ) {
                    showcaseProductBlock
                        .querySelector(".inc_product_desc_add_block")
                        .click();
                }
            }
            if (
                productModuleBlock.classList.contains("configurable") ==
                trueflag
            ) {
                if (flag_check == 1) {
                    setTimeout(function () {
                        if (
                            document.querySelector(
                                ".sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active"
                            ) != null
                        ) {
                            document
                                .querySelector(
                                    ".sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active"
                                )
                                .classList.remove("inc_active");
                            document
                                .querySelector("body")
                                .classList.remove("inc_popup_open");
                            if (inc_scroll_height > 100) {
                                window.scrollTo(0, inc_scroll_height);
                            }
                            document
                                .querySelector(
                                    ".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block"
                                )
                                .classList.remove("overflow_visible");
                        }
                    }, 200);
                } else {
                    productModuleBlock
                        .querySelector(".inc_product_desc_add_title_text_block")
                        .setAttribute("style", "color:#E52B45");
                    var element = document.querySelector(
                        ".inc_product_modal_block.inc_active .inc_product_block .inc_product_desc_att_color_block"
                    );
                    if (element != null) {
                        document
                            .querySelector("html")
                            .classList.add("inc_popup_open");
                        document
                            .querySelector("html")
                            .classList.add("inc_overlay");
                    }
                }
            } else {
                setTimeout(function () {
                    if (
                        document.querySelector(
                            ".inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active"
                        ) != null
                    ) {
                        document
                            .querySelector(
                                ".inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active"
                            )
                            .classList.remove("inc_active");
                        document
                            .querySelector("body")
                            .classList.remove("inc_popup_open");
                        if (inc_scroll_height > 100) {
                            window.scrollTo(0, inc_scroll_height);
                        }
                    }
                    var sidemodal = document.querySelector(
                        ".inc_sidebar_modal_block"
                    );
                    if (
                        document.querySelector(
                            ".inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active"
                        ) == null &&
                        sidemodal != null
                    ) {
                        sidemodal.classList.remove("overflow_visible");
                    }
                }, 100);
            }
            setTimeout(function () {
                if (
                    document.querySelector(
                        ".sidebar_outer.sidebar_outer_active"
                    ) != null &&
                    document.querySelector(
                        ".inc_product_modal_block.inc_active"
                    ) == null
                ) {
                    document
                        .querySelector(".inc_sidebar_modal_block.inc_active")
                        .classList.remove("overflow_visible");
                }
            }, 200);
        });
        return productBlock;
    };

    function productzeroatt(
        elAtt0TitleText,
        elAtt0Block,
        product0Obj,
        elAtt0ListBlock,
        blockType
    ) {
        elAtt0TitleText.innerHTML =
            product0Obj["att0Array"][0].label.toUpperCase() +
            ': <span class="inc_compulsory_sign">*</span>';
        // if (elAtt0TitleText.innerText == 'size') {
        //     elAtt0TitleText.innerText = 'Select Your Size'
        // }
        if (elAtt0TitleText.innerText)
            if (window.innerWidth < 769) {
                if (INC.config.ddFlag) {
                    if (
                        product0Obj["att0Array"][0].label == "Leather" ||
                        product0Obj["att0Array"][0].label == "Color"
                    ) {
                        elAtt0Block.parentNode.parentNode.parentNode.classList.add(
                            "dropdownstyle"
                        );
                    }
                }
            } else {
                if (
                    product0Obj["att0Array"][0].label == "Leather" ||
                    product0Obj["att0Array"][0].label == "Colour" ||
                    product0Obj["att0Array"][0].label == "Colour:" ||
                    product0Obj["att0Array"][0].label == "Fabric" ||
                    product0Obj["att0Array"][0].label == "Marble" ||
                    product0Obj["att0Array"][0].label == "Finish"
                ) {
                    elAtt0Block.parentNode.parentNode.parentNode.classList.add(
                        "dropdownstyle"
                    );
                }
            }

        elAtt0Block.classList.add("inc_active");
        elAtt0Block.classList.add(
            "inc_total_" + product0Obj["att0Array"].length
        );
        var zeroc = 0;
        product0Obj["att0Array"].forEach(function (sizeObj) {
            var attSizeImgBlock0 = generate_html_tag(
                "div",
                "inc_product_desc_att_size_list_item_img_block"
            );
            var attSizeImg0 = generate_html_tag(
                "div",
                "inc_product_desc_att_size_list_item_img"
            );
            attSizeImgBlock0.setAttribute("blocktype", blockType);
            attSizeImgBlock0.setAttribute("varianttypes", "zero");
            attSizeImgBlock0.addEventListener("click", function () {
                var elvariant = this;
                var elblktype = this.getAttribute("blocktype");
                var elvtype = this.getAttribute("varianttypes");
                INC.methods.mappvariants(elvariant, elblktype, elvtype);
            });
            attSizeImgBlock0.classList.add("avail");

            if (sizeObj.imgSrc.length > 0 || sizeObj["colorCode"] != "") {
                if (
                    sizeObj["colorCode"] == "" ||
                    sizeObj["colorCode"] == undefined
                ) {
                    var sizeimg = generate_html_tag("img");
                    sizeimg.setAttribute("alt", sizeObj["text"]);
                    sizeimg.src = sizeObj["imgSrc"];
                    attSizeImgBlock0.setAttribute(
                        "data-optionimge",
                        sizeObj["imgSrc"]
                    );
                    attSizeImgBlock0.appendChild(sizeimg);
                    elAtt0TitleText.classList.add("img_tag_avail");
                    elAtt0TitleText.style.display = "flex";
                    attSizeImgBlock0.classList.add("img_avail");
                } else {
                    var spancolorcode = generate_html_tag("span");
                    spancolorcode.classList.add("color_code");
                    spancolorcode.setAttribute("alt", sizeObj["text"]);
                    spancolorcode.style.backgroundColor = sizeObj["colorCode"];
                    elAtt0TitleText.classList.add("img_tag_avail");
                    attSizeImgBlock0.appendChild(spancolorcode);
                }
                elAtt0ListBlock.classList.add("img_tag_avail");
            }

            attSizeImg0.innerText = sizeObj["text"];
            attSizeImgBlock0.setAttribute("data-size", sizeObj["text"]);
            attSizeImgBlock0.setAttribute("title", sizeObj["text"]);
            attSizeImgBlock0.setAttribute(
                "datasize",
                sizeObj["text"].toLocaleLowerCase()
            );
            attSizeImgBlock0.setAttribute("data-option", "1");
            attSizeImgBlock0.setAttribute("data-cpid", sizeObj["cpid"]);
            attSizeImgBlock0.setAttribute("data-optid", sizeObj["opt_id"]);
            attSizeImgBlock0.setAttribute("data-attrid", sizeObj["att_id"]);
            attSizeImgBlock0.setAttribute("data-child-price", sizeObj["prc"]);
            if (product0Obj["att0Array"][0].code == "size") {
                attSizeImgBlock0.setAttribute(
                    "title",
                    sizeObj["text"].toUpperCase()
                );
            } else if (product0Obj["att0Array"][0].code == "letter") {
                attSizeImgBlock0.setAttribute(
                    "title",
                    "Letter" + " " + sizeObj["text"].toUpperCase()
                );
            } else if (product0Obj["att0Array"][0].code == "choose") {
                attSizeImgBlock0.setAttribute(
                    "title",
                    "Number " + sizeObj["text"].toUpperCase()
                );
            } else {
                attSizeImgBlock0.setAttribute(
                    "title",
                    sizeObj["text"].toUpperCase()
                );
            }
            if (zeroc > 6 && blockType != "pdp") {
                return;
            }
            zeroc++;
            attSizeImgBlock0.appendChild(attSizeImg0);
            elAtt0ListBlock.appendChild(attSizeImgBlock0);
        });
    }

    function productcoloratt(
        productColorsObj,
        productBlock,
        elAttColorListBlock,
        blockType,
        elAttColorBlock,
        elAttColorTitleText,
        bType
    ) {
        fabricprod = [];
        if (productColorsObj.colorArray.length > 0) {
            productColorsObj["colorArray"] = productColorsObj[
                "colorArray"
            ].sort(function (a, b) {
                if (a.attLebel < b.attLebel) {
                    return -1;
                }
                if (a.attLebel > b.attLebel) {
                    return 1;
                }
                return 0;
            });
            if (productColorsObj["colorArray"][0].label == "Select Fabric") {
                var items = productColorsObj["colorArray"];
                var sortingdata = [
                    "Color",
                    "Size",
                    "Linen",
                    "Wool",
                    "Duro Velvet",
                    "Bouclé",
                    "Textured Chenille",
                    "Wilbur Alpaca Blend",
                    "Stonewash Linen",
                    "Twisted Yarn Cotton Blend",
                    "Brenta Leather",
                    "Fermo Leather",
                    "Romagna Leather",
                    "Riso Bouclé",
                    "Alpaca Velvet",
                    "Bora Bora",
                    "Dolce",
                    "Strange Loves",
                ];
                var result = [];
                sortingdata.forEach(function (key) {
                    var found = false;
                    items = items.filter(function (item) {
                        var attcheck = item.attLebel.split("|")[0];
                        if (!found && attcheck == key) {
                            result.push(item);
                            return false;
                        } else {
                            return true;
                        }
                    });
                });
                productColorsObj["colorArray"] = result;
            }

            if (productColorsObj["colorArray"].length > 0) {
                elAttColorListBlock.innerHTML = "";
                elAttColorBlock.classList.add("inc_active");
                elAttColorTitleText.innerText =
                    productColorsObj["colorArray"][0].label.toLowerCase();
                var one_attr_flag = false;
                if (productColorsObj["colorArray"].length == 1) {
                    one_attr_flag = true;
                }
                if (productColorsObj["colorArray"].length > 6) {
                    elAttColorListBlock.classList.add("greater6");
                }
                var pushedfabric = [];
                var colorC = 0;
                elAttColorBlock.classList.add("inc_active");
                if (
                    productColorsObj["colorArray"][0].label == "Select Fabric"
                ) {
                    for (
                        var aL = 0;
                        aL < productColorsObj["colorArray"][0].attrLength;
                        aL++
                    ) {
                        productColorsObj["colorArray"].forEach(function (
                            colorObj
                        ) {
                            if (pushedfabric.indexOf(colorObj.attLebel) == -1) {
                                pushedfabric.push(colorObj.attLebel);
                            }
                            if (pushedfabric[aL] == colorObj.attLebel) {
                                if (
                                    fabricprod.indexOf(colorObj.attLebel) == -1
                                ) {
                                    fabricprod.push(colorObj.attLebel);
                                }
                                colorelmOb(
                                    colorObj,
                                    elAttColorListBlock,
                                    colorC,
                                    blockType,
                                    productBlock,
                                    one_attr_flag,
                                    bType
                                );
                                if (colorObj.label == "Select Fabric") {
                                    elAttColorTitleText.innerText =
                                        colorObj.label;
                                }
                                colorC++;
                            }
                        });
                    }
                } else {
                    productColorsObj["colorArray"].forEach(function (colorObj) {
                        colorelmOb(
                            colorObj,
                            elAttColorListBlock,
                            colorC,
                            blockType,
                            productBlock,
                            one_attr_flag,
                            bType
                        );
                        colorC++;
                    });
                }
            }
        }
    }

    function colorelmOb(
        colorObj,
        elAttColorListBlock,
        colorC,
        blockType,
        productBlock,
        one_attr_flag,
        bType
    ) {
        var attColorBlock = generate_html_tag(
            "div",
            "inc_product_desc_att_color_list_item_block"
        );
        var attColorImgBlock = generate_html_tag(
            "div",
            "inc_product_desc_att_color_list_item_img_block"
        );
        var attColorImg = generate_html_tag(
            "div",
            "inc_product_desc_att_color_list_item_img"
        );
        attColorImgBlock.setAttribute("blocktype", blockType);
        attColorImgBlock.setAttribute("varianttypes", "color");
        attColorImgBlock.addEventListener("click", function () {
            var elvariantc = this;
            var elblktypec = this.getAttribute("blocktype");
            var elvtypec = this.getAttribute("varianttypes");
            INC.methods.mappvariants(elvariantc, elblktypec, elvtypec);
        });

        imgcolorgen(colorObj, attColorImg);
        var colorTitle = generate_html_tag("a");
        colorTitle.innerText = colorObj["text"];
        colorTitle.title = colorObj["text"].toUpperCase();
        colorTitle.addEventListener("click", function (e) {
            e.preventDefault();
        });
        attColorImg.appendChild(colorTitle);

        attColorImgBlock.setAttribute("data-color", colorObj["text"]);
        attColorImgBlock.setAttribute("title", colorObj["text"]);
        attColorImgBlock.setAttribute(
            "datacolor",
            colorObj["text"].toLocaleLowerCase()
        );
        if (colorObj["opttext"] != undefined) {
            if (colorObj["opttext"] != undefined) {
                attColorImgBlock.setAttribute(
                    "datacolorfabric",
                    colorObj["opttext"].split("_")[0].toLocaleLowerCase()
                );
            }
        }
        attColorImgBlock.setAttribute("data-option", "0");
        attColorImgBlock.setAttribute("data-cpid", colorObj["cpid"]);
        attColorImgBlock.setAttribute("data-colorcode", colorObj["colorCode"]);
        attColorImgBlock.setAttribute("data-optionimge", colorObj["imgSrc"]);
        attColorImgBlock.setAttribute("data-optid", colorObj["opt_id"]);
        attColorImgBlock.setAttribute("data-attrid", colorObj["att_id"]);
        attColorImgBlock.setAttribute("data-child-price", colorObj["prc"]);
        if (bType != null && colorC > 3 && blockType != "pdp") {
            var inc_more_color = generate_html_tag("a", "inc_more_color");
            inc_more_color.innerText = "+";
            inc_more_color.addEventListener("click", function (e) {
                e.preventDefault();
                productBlock
                    .querySelector(".inc_product_desc_title_text")
                    .click();
            });
            if (elAttColorListBlock.querySelector(".inc_more_color") == null) {
                elAttColorListBlock.appendChild(inc_more_color);
            }
            return;
        }
        attColorImgBlock.appendChild(attColorImg);
        attColorBlock.appendChild(attColorImgBlock);
        elAttColorListBlock.appendChild(attColorBlock);
        if (one_attr_flag == trueflag) {
            setTimeout(function () {
                attColorImgBlock.click();
            }, 0);
        }
    }

    function productsizeatt(
        elAttSizeTitleText,
        elAttSizeBlock,
        productSizesObj,
        elAttSizeListBlock,
        elAttSizeTitleTextSelected,
        blockType
    ) {
        if (productSizesObj.sizeArray.length > 0) {
            elAttSizeBlock.parentNode.parentNode.parentNode.classList.add(
                "dropdownstyle"
            );
            if (productSizesObj["sizeArray"][0].code != "Color") {
                elAttSizeListBlock.innerHTML = "";
                elAttSizeTitleText.innerHTML =
                    productSizesObj["sizeArray"][0].label +
                    ': <span class="inc_compulsory_sign">*</span>';
                elAttSizeBlock.classList.add("inc_active");
                productSizesObj["sizeArray"].forEach(function (sizeObj) {
                    var attSizeImgBlock = generate_html_tag(
                        "div",
                        "inc_product_desc_att_size_list_item_img_block"
                    );
                    var attSizeImg = generate_html_tag(
                        "div",
                        "inc_product_desc_att_size_list_item_img"
                    );
                    elAttSizeTitleTextSelected.innerText = "- Please Select -";
                    attSizeImgBlock.classList.add("avail");
                    attSizeImgBlock.setAttribute("blocktype", blockType);
                    attSizeImgBlock.setAttribute("varianttypes", "size");
                    attSizeImgBlock.addEventListener("click", function () {
                        var elvariants = this;
                        var elblktypes = this.getAttribute("blocktype");
                        var elvtypes = this.getAttribute("varianttypes");
                        INC.methods.mappvariants(
                            elvariants,
                            elblktypes,
                            elvtypes
                        );
                    });
                    if (
                        sizeObj.imgSrc.length > 0 ||
                        sizeObj["colorCode"] != ""
                    ) {
                        if (
                            sizeObj["colorCode"] == "" ||
                            sizeObj["colorCode"] == undefined
                        ) {
                            var sizeimg_ = generate_html_tag("img");
                            sizeimg_.setAttribute("alt", sizeObj["text"]);
                            sizeimg_.src = sizeObj["imgSrc"];
                            attSizeImgBlock.setAttribute(
                                "data-optionimge",
                                sizeObj["imgSrc"]
                            );
                            attSizeImgBlock.appendChild(sizeimg_);
                            elAttSizeTitleText.classList.add("img_tag_avail");
                            elAttSizeTitleText.style.display = "flex";
                            attSizeImgBlock.classList.add("img_avail");
                        } else {
                            var spancolorcode_ = generate_html_tag("span");
                            spancolorcode_.classList.add("color_code");
                            spancolorcode_.setAttribute("alt", sizeObj["text"]);
                            spancolorcode_.style.backgroundColor =
                                sizeObj["colorCode"];
                            elAttSizeTitleText.classList.add("img_tag_avail");
                            attSizeImgBlock.appendChild(spancolorcode_);
                        }
                        elAttSizeListBlock.classList.add("img_tag_avail");
                    }
                    attSizeImg.innerText = sizeObj["text"];
                    attSizeImgBlock.setAttribute("data-size", sizeObj["text"]);
                    attSizeImgBlock.setAttribute("title", sizeObj["text"]);

                    attSizeImgBlock.setAttribute(
                        "datasize",
                        sizeObj["text"].toLocaleLowerCase()
                    );
                    attSizeImgBlock.setAttribute("data-option", "2");
                    attSizeImgBlock.setAttribute(
                        "data-optid",
                        sizeObj["opt_id"]
                    );
                    attSizeImgBlock.setAttribute(
                        "data-attrid",
                        sizeObj["att_id"]
                    );
                    attSizeImgBlock.setAttribute(
                        "data-child-price",
                        sizeObj["prc"]
                    );
                    if (productSizesObj["sizeArray"][0].code == "size") {
                        attSizeImgBlock.setAttribute(
                            "title",
                            sizeObj["text"].toUpperCase()
                        );
                    } else if (
                        productSizesObj["sizeArray"][0].code == "letter"
                    ) {
                        attSizeImgBlock.setAttribute(
                            "title",
                            "Letter" + " " + sizeObj["text"].toUpperCase()
                        );
                    } else if (
                        productSizesObj["sizeArray"][0].code == "choose"
                    ) {
                        attSizeImgBlock.setAttribute(
                            "title",
                            "Number " + sizeObj["text"].toUpperCase()
                        );
                    } else {
                        attSizeImgBlock.setAttribute(
                            "title",
                            sizeObj["text"].toUpperCase()
                        );
                    }
                    attSizeImgBlock.appendChild(attSizeImg);
                    elAttSizeListBlock.appendChild(attSizeImgBlock);
                });
            }
        }
    }

    function productthirdatt(
        product3Obj,
        elAtt3TitleText,
        elAtt3Block,
        elAtt3ListBlock,
        blockType,
        elAtt3TitleTextSelected
    ) {
        if (product3Obj.att3Array.length > 0) {
            
        }
    }
    function productfourthatt(
        product3Obj,
        elAtt3TitleText,
        elAtt3Block,
        elAtt3ListBlock,
        blockType,
        elAtt3TitleTextSelected
    ) {
        if (product3Obj.att4Array.length > 0) {
           
        }
    }
    INC.methods.mappvariants = function (obj, blocktype, type_of_variant) {
        if (obj.parentNode != undefined) {
            var productModuleBlck =
                obj.parentNode.parentNode.parentNode.parentNode.parentNode
                    .parentNode.parentNode.parentNode.parentNode;
            if (
                productModuleBlck.classList.contains(
                    "inc_product_showcase_block"
                ) == trueflag ||
                productModuleBlck.classList.contains(
                    "inc_product_modal_block"
                ) == trueflag
            ) {
                productModuleBlck = productModuleBlck.parentNode;
            }
            if (
                productModuleBlck.classList.contains("inc_product_block") ==
                trueflag
            ) {
                productModuleBlck = productModuleBlck.parentNode.parentNode;
            } else if (
                productModuleBlck.classList.contains(
                    "inc_product_info_main_block"
                ) == trueflag
            ) {
                productModuleBlck =
                    productModuleBlck.parentNode.parentNode.parentNode;
            }
            var productblockshow = productModuleBlck.querySelector(
                ".inc_product_showcase_block .inc_product_block"
            );
            var productblockmod = productModuleBlck.querySelector(
                ".inc_product_modal_block .inc_product_block"
            );

            var mainprdid = productblockshow.getAttribute("data-main_id");

            if (type_of_variant == "zero") {
                var sel_variantz = obj.getAttribute("data-size");
                productblockmod
                    .querySelector(".inc_product_desc_att_block")
                    .setAttribute("data-zero", sel_variantz);
                productblockshow
                    .querySelector(".inc_product_desc_att_block")
                    .setAttribute("data-zero", sel_variantz);
            } else if (type_of_variant == "color") {
                var sel_variantC = obj.getAttribute("data-color");
                productblockmod
                    .querySelector(".inc_product_desc_att_block")
                    .setAttribute("data-color", sel_variantC);
                productblockshow
                    .querySelector(".inc_product_desc_att_block")
                    .setAttribute("data-color", sel_variantC);
            } else if (type_of_variant == "size") {
                var sel_variantS = obj.getAttribute("data-size");
                productblockmod
                    .querySelector(".inc_product_desc_att_block")
                    .setAttribute("data-size", sel_variantS);
                productblockshow
                    .querySelector(".inc_product_desc_att_block")
                    .setAttribute("data-size", sel_variantS);
            } else if (type_of_variant == "third") {
                var sel_variantT = obj.getAttribute("data-size");
                productblockmod
                    .querySelector(".inc_product_desc_att_block")
                    .setAttribute("data-third", sel_variantT);
                productblockshow
                    .querySelector(".inc_product_desc_att_block")
                    .setAttribute("data-third", sel_variantT);
            } else if (type_of_variant == "fourth") {
                var sel_variantT = obj.getAttribute("data-size");
                productblockmod
                    .querySelector(".inc_product_desc_att_block")
                    .setAttribute("data-fourth", sel_variantT);
                productblockshow
                    .querySelector(".inc_product_desc_att_block")
                    .setAttribute("data-fourth", sel_variantT);
            }

            productblockmod
                .querySelector(".inc_product_desc_att_block")
                .setAttribute("data-module-id", mainprdid);

            var main_p_id = INC.dataStore.methods().getFirstProductObjByMainId({
                mainId: mainprdid,
            }).id;
            var findobj = new INC.classes.FindObj({
                id: main_p_id,
            });
            var zero_text = productblockmod
                .querySelector(".inc_product_desc_att_block")
                .getAttribute("data-zero");
            var size_text = productblockmod
                .querySelector(".inc_product_desc_att_block")
                .getAttribute("data-size");
            var color_text = productblockmod
                .querySelector(".inc_product_desc_att_block")
                .getAttribute("data-color");
            var third_text = productblockmod
                .querySelector(".inc_product_desc_att_block")
                .getAttribute("data-third");
            var fourth_text = productblockmod
                .querySelector(".inc_product_desc_att_block")
                .getAttribute("data-fourth");

            findobj.mainId = mainprdid;
            findobj.colorText = "";
            if (color_text != undefined) {
                findobj.colorText = color_text;
                productblockmod
                    .querySelector(
                        ".inc_product_desc_att_color_title_text_selected"
                    )
                    .setAttribute("style", 'color:"#4D4D4F";');
                productblockmod.querySelector(
                    ".inc_product_desc_att_color_title_text_selected"
                ).innerText = color_text;
                productblockshow
                    .querySelector(
                        ".inc_product_desc_att_color_title_text_selected"
                    )
                    .setAttribute("style", 'color:"#4D4D4F";');
                productblockshow.querySelector(
                    ".inc_product_desc_att_color_title_text_selected"
                ).innerText = color_text;
            }
            if (zero_text != undefined) {
                findobj.zeroText = zero_text;
                productblockshow.querySelector(
                    ".inc_product_desc_att_zero_title_text_selected"
                ).innerText = zero_text;
                productblockshow
                    .querySelector(
                        ".inc_product_desc_att_zero_title_text_selected"
                    )
                    .setAttribute("style", 'color:"#4D4D4F";');
                productblockmod
                    .querySelector(
                        ".inc_product_desc_att_zero_title_text_selected"
                    )
                    .classList.add("inc_change_color");
                productblockmod.querySelector(
                    ".inc_product_desc_att_zero_title_text_selected"
                ).innerText = zero_text;
            }
            if (size_text != undefined) {
                findobj.sizeText = size_text;
                productblockshow.querySelector(
                    ".inc_product_desc_att_size_title_text_selected"
                ).innerText = size_text;
                productblockmod.querySelector(
                    ".inc_product_desc_att_size_title_text_selected"
                ).innerText = size_text;
                productblockshow
                    .querySelector(
                        ".inc_product_desc_att_size_title_text_selected"
                    )
                    .setAttribute("style", 'color:"#4D4D4F";');
                productblockmod
                    .querySelector(
                        ".inc_product_desc_att_size_title_text_selected"
                    )
                    .setAttribute("style", 'color:"#4D4D4F";');
            }

            if (third_text != undefined) {
                findobj.thirdText = third_text;
                productblockmod.querySelector(
                    ".inc_product_desc_att_third_title_text_selected"
                ).innerText = third_text;
                productblockshow.querySelector(
                    ".inc_product_desc_att_third_title_text_selected"
                ).innerText = third_text;
            }
            if (fourth_text != undefined) {
                findobj.thirdText = third_text;
                productblockmod.querySelector(
                    ".inc_product_desc_att_fourth_title_text_selected"
                ).innerText = fourth_text;
                productblockshow.querySelector(
                    ".inc_product_desc_att_fourth_title_text_selected"
                ).innerText = fourth_text;
            }
            productblockmod.querySelector(
                ".inc_product_desc_add_err_text_block"
            ).innerHTML = "";
            productblockshow.querySelector(
                ".inc_variant_error_text"
            ).innerHTML = "";
            productblockshow
                .querySelector(".inc_product_variant_simple_text")
                .setAttribute("style", "");
            productblockshow
                .querySelector(".inc_product_desc_add_title_text_block")
                .setAttribute("style", "");
            var elselcolortextmodal = productblockmod.querySelector(
                ".inc_product_desc_att_color_title_text_selected"
            );
            var productSizesObj = INC.dataStore
                .methods()
                .getProductSizesObj(findobj, obj);
            var productColorsObj = INC.dataStore
                .methods()
                .getProductColorsObj(findobj, obj);
            var product3rdObj = INC.dataStore
                .methods()
                .getProductopt3Obj(findobj, obj);
            var product4thObj = INC.dataStore
                .methods()
                .getProductopt4Obj(findobj, obj);
            var product0Obj = INC.dataStore
                .methods()
                .getProductopt0Obj(findobj, obj);

            var elAttSizeBlock = productblockmod.querySelector(
                ".inc_product_desc_att_size_block"
            );
            var elAttColorBlock = productblockmod.querySelector(
                ".inc_product_desc_att_color_block"
            );
            var elAtt3rdBlock = productblockmod.querySelector(
                ".inc_product_desc_att_third_block"
            );
            var elAtt4thBlock = productblockmod.querySelector(
                ".inc_product_desc_att_fourth_block"
            );
            var elAttSizeListBlock = productblockmod.querySelector(
                ".inc_product_desc_att_size_list_block"
            );
            var elAtt0ListBlock = productblockmod.querySelector(
                ".inc_product_desc_att_zero_list_block"
            );
            var elAttColorListBlock = productblockmod.querySelector(
                ".inc_product_desc_att_color_list_block"
            );
            var elAtt3ListBlock = productblockmod.querySelector(
                ".inc_product_desc_att_third_list_block"
            );
            var elcolortextmodal = productblockmod.querySelector(
                ".inc_product_desc_att_color_title_text"
            );
            var elAttSizeListBlockshow = productblockshow.querySelector(
                ".inc_product_desc_att_size_list_block"
            );
            var elAtt0ListBlockshow = productblockshow.querySelector(
                ".inc_product_desc_att_zero_list_block"
            );

            var elAttColorListBlockshow = productblockshow.querySelector(
                ".inc_product_desc_att_color_list_block"
            );
            var elAtt3ListBlockshow = productblockshow.querySelector(
                ".inc_product_desc_att_third_list_block"
            );
            var elAtt4ListBlockshow = productblockshow.querySelector(
                ".inc_product_desc_att_fourth_list_block"
            );
            var elselcolortextshow = productblockshow.querySelector(
                ".inc_product_desc_att_color_title_text_selected"
            );
            var elcolortextshow = productblockmod.querySelector(
                ".inc_product_desc_att_color_title_text"
            );
            var zerosel = false;
            if (
                type_of_variant == "color" &&
                productblockshow.querySelector(
                    ".inc_product_desc_att_color_block.inc_active"
                ) != null
            ) {
                elAtt0ListBlock.innerHTML = "";
                elAtt0ListBlockshow.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    product0Obj["att0Array"].forEach(function (sizeObj) {
                        var attSizeImgBlock0 = generate_html_tag(
                            "div",
                            "inc_product_desc_att_size_list_item_img_block"
                        );
                        var attSizeImg0 = generate_html_tag(
                            "div",
                            "inc_product_desc_att_size_list_item_img"
                        );
                        attSizeImgBlock0.setAttribute("blocktype", blocktype);
                        attSizeImgBlock0.setAttribute("varianttypes", "zero");
                        attSizeImgBlock0.addEventListener("click", function () {
                            var elvariantss = this;
                            var elblktype__ = this.getAttribute("blocktype");
                            var elvtype__ = this.getAttribute("varianttypes");
                            INC.methods.mappvariants(
                                elvariantss,
                                elblktype__,
                                elvtype__
                            );
                        });
                        attSizeImgBlock0.classList.add("avail");
                        attSizeImg0.innerText = sizeObj["text"];
                        attSizeImgBlock0.setAttribute(
                            "data-size",
                            sizeObj["text"]
                        );
                        attSizeImgBlock0.setAttribute("title", sizeObj["text"]);
                        attSizeImgBlock0.setAttribute(
                            "datasize",
                            sizeObj["text"].toLocaleLowerCase()
                        );
                        attSizeImgBlock0.setAttribute("data-option", "1");
                        attSizeImgBlock0.setAttribute(
                            "data-cpid",
                            sizeObj["cpid"]
                        );
                        attSizeImgBlock0.setAttribute(
                            "data-optid",
                            sizeObj["opt_id"]
                        );
                        attSizeImgBlock0.setAttribute(
                            "data-attrid",
                            sizeObj["att_id"]
                        );
                        attSizeImgBlock0.setAttribute(
                            "data-child-price",
                            sizeObj["prc"]
                        );
                        var attSizeImgBlockclone0 =
                            attSizeImgBlock0.cloneNode(attSizeImgBlock0);
                        attSizeImgBlockclone0.addEventListener(
                            "click",
                            function () {
                                var elvariants_1 = this;
                                var elblktypes__2 =
                                    this.getAttribute("blocktype");
                                var elvtypes__1 =
                                    this.getAttribute("varianttypes");
                                INC.methods.mappvariants(
                                    elvariants_1,
                                    elblktypes__2,
                                    elvtypes__1
                                );
                            }
                        );
                        attSizeImgBlock0.appendChild(attSizeImg0);
                        elAtt0ListBlock.appendChild(attSizeImgBlock0);
                        elAtt0ListBlockshow.appendChild(attSizeImgBlockclone0);
                        if (zero_text != undefined) {
                            if (
                                zero_text.toLocaleLowerCase() ==
                                sizeObj["text"].toLocaleLowerCase()
                            ) {
                                zerosel = true;
                                attSizeImgBlock0.classList.add("inc_active");
                                attSizeImgBlockclone0.classList.add(
                                    "inc_active"
                                );
                            }
                        }
                    });
                    if (zerosel == falseflag) {
                        var zerotxt_ = productblockmod
                            .querySelector(
                                ".inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block"
                            )
                            .getAttribute("data-size");
                        productblockmod
                            .querySelector(".inc_product_desc_att_block")
                            .setAttribute("data-zero", zerotxt_);
                        productblockshow
                            .querySelector(".inc_product_desc_att_block")
                            .setAttribute("data-zero", zerotxt_);
                        elAtt0ListBlock
                            .querySelector(
                                ".inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block"
                            )
                            .classList.add("inc_active");
                        elAtt0ListBlockshow
                            .querySelector(
                                ".inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block"
                            )
                            .classList.add("inc_active");
                    }
                }
            }
            if (
                type_of_variant == "zero" ||
                type_of_variant == "third" ||
                type_of_variant == "color" ||
                type_of_variant == "fourth"
            ) {
                elAttSizeListBlock.innerHTML = "";
                elAttSizeListBlockshow.innerHTML = "";
                if (productSizesObj["sizeArray"].length > 0) {
                    elAttSizeBlock.classList.add("inc_active");
                    productSizesObj["sizeArray"].forEach(function (sizeObj) {
                        var attSizeImgBlock = generate_html_tag(
                            "div",
                            "inc_product_desc_att_size_list_item_img_block"
                        );
                        var attSizeImg = generate_html_tag(
                            "div",
                            "inc_product_desc_att_size_list_item_img"
                        );
                        attSizeImgBlock.setAttribute("blocktype", blocktype);
                        attSizeImgBlock.setAttribute("varianttypes", "size");
                        attSizeImgBlock.addEventListener("click", function () {
                            var elvariants2 = this;
                            var elblktypes2 = this.getAttribute("blocktype");
                            var elvtypes2 = this.getAttribute("varianttypes");
                            INC.methods.mappvariants(
                                elvariants2,
                                elblktypes2,
                                elvtypes2
                            );
                        });
                        attSizeImgBlock.classList.add("avail");
                        attSizeImg.innerText = sizeObj["text"];
                        attSizeImgBlock.setAttribute(
                            "data-size",
                            sizeObj["text"]
                        );
                        attSizeImgBlock.setAttribute("title", sizeObj["text"]);
                        attSizeImgBlock.setAttribute(
                            "datasize",
                            sizeObj["text"].toLocaleLowerCase()
                        );
                        attSizeImgBlock.setAttribute("data-option", "2");
                        attSizeImgBlock.appendChild(attSizeImg);
                        var attSizeImgBlockclone =
                            attSizeImgBlock.cloneNode(attSizeImgBlock);
                        attSizeImgBlockclone.addEventListener(
                            "click",
                            function () {
                                var elvariants_ = this;
                                var elblktypes_ =
                                    this.getAttribute("blocktype");
                                var elvtypes_ =
                                    this.getAttribute("varianttypes");
                                INC.methods.mappvariants(
                                    elvariants_,
                                    elblktypes_,
                                    elvtypes_
                                );
                            }
                        );
                        elAttSizeListBlock.appendChild(attSizeImgBlock);
                        elAttSizeListBlockshow.appendChild(
                            attSizeImgBlockclone
                        );

                        if (size_text != undefined) {
                            if (
                                size_text.toLocaleLowerCase() ==
                                sizeObj["text"].toLocaleLowerCase()
                            ) {
                                attSizeImgBlock.classList.add("inc_active");
                                attSizeImgBlockclone.classList.add(
                                    "inc_active"
                                );
                            }
                        }
                    });
                }
            } else {
                var sizelowertext = size_text.toLocaleLowerCase();
                if (
                    productblockmod.querySelector(
                        ".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active"
                    ) != null
                ) {
                    productblockmod
                        .querySelector(
                            ".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active"
                        )
                        .classList.remove("inc_active");
                }
                if (
                    productblockshow.querySelector(
                        ".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active"
                    ) != null
                ) {
                    productblockshow
                        .querySelector(
                            ".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active"
                        )
                        .classList.remove("inc_active");
                }
                if (
                    productblockmod.querySelector(
                        '.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                            sizelowertext +
                            '"]'
                    ) != null
                ) {
                    productblockmod
                        .querySelector(
                            '.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                sizelowertext +
                                '"]'
                        )
                        .classList.add("inc_active");
                    productblockshow
                        .querySelector(
                            '.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                sizelowertext +
                                '"]'
                        )
                        .classList.add("inc_active");
                }
            }
            if (
                type_of_variant == "size" ||
                type_of_variant == "third" ||
                type_of_variant == "fourth"
            ) {
                elAttColorListBlock.innerHTML = "";
                elAttColorListBlockshow.innerHTML = "";
                if (
                    productModuleBlck.querySelector(
                        ".inc_product_modal_block .inc_product_desc_att_color_title_text_selected"
                    ).innerText == "" &&
                    productModuleBlck.querySelector(
                        ".inc_product_desc_att_color_title_text_selected"
                    ).innerText == ""
                ) {
                    productModuleBlck.querySelector(
                        ".inc_product_modal_block .inc_product_desc_att_color_title_text_selected"
                    ).innerText = "";
                    productModuleBlck.querySelector(
                        ".inc_product_desc_att_color_title_text_selected"
                    ).innerText = "";
                }
                var selcol = findobj.colorText;
                if (productColorsObj["colorArray"].length > 0) {
                    elAttColorBlock.classList.add("inc_active");
                    var clrselflag = false;
                    var clrarrac = 0;
                    productColorsObj["colorArray"].forEach(function (colorObj) {
                        if (selcol == colorObj["text"]) {
                            findobj.colorText = colorObj["text"];
                            findobj.color_text = colorObj["text"];
                        } else {
                            findobj.colorText = "";
                            findobj.color_text = "";
                        }
                        var attColorBlock = generate_html_tag(
                            "div",
                            "inc_product_desc_att_color_list_item_block"
                        );
                        var attColorImgBlock = generate_html_tag(
                            "div",
                            "inc_product_desc_att_color_list_item_img_block"
                        );
                        var attColorImg = generate_html_tag(
                            "div",
                            "inc_product_desc_att_color_list_item_img"
                        );

                        attColorImgBlock.setAttribute("blocktype", blocktype);
                        attColorImgBlock.setAttribute("varianttypes", "color");
                        attColorImgBlock.addEventListener("click", function () {
                            var elvariantc2 = this;
                            var elblktypec2 = this.getAttribute("blocktype");
                            var elvtypec2 = this.getAttribute("varianttypes");
                            INC.methods.mappvariants(
                                elvariantc2,
                                elblktypec2,
                                elvtypec2
                            );
                        });
                        imgcolorgen(colorObj, attColorImg);

                        var colorTitle = generate_html_tag("a");
                        colorTitle.innerText = colorObj["text"];
                        colorTitle.title = colorObj["text"];
                        colorTitle.addEventListener("click", function (e) {
                            e.preventDefault();
                        });
                        attColorImg.appendChild(colorTitle);

                        attColorImgBlock.setAttribute(
                            "data-color",
                            colorObj["text"]
                        );
                        attColorImgBlock.setAttribute(
                            "datacolor",
                            colorObj["text"].toLocaleLowerCase()
                        );
                        attColorImgBlock.setAttribute("data-option", "0");
                        attColorImgBlock.setAttribute(
                            "data-cpid",
                            colorObj["cpid"]
                        );
                        attColorImgBlock.setAttribute(
                            "data-colorcode",
                            colorObj["colorCode"]
                        );
                        attColorImgBlock.setAttribute(
                            "data-optionimge",
                            colorObj["imgSrc"]
                        );
                        attColorImgBlock.appendChild(attColorImg);
                        attColorBlock.appendChild(attColorImgBlock);
                        var attColorBlockclone =
                            attColorBlock.cloneNode(attColorBlock);
                        attColorBlockclone
                            .querySelector(
                                ".inc_product_desc_att_color_list_item_img_block"
                            )
                            .addEventListener("click", function () {
                                var elvariantc1s = this;
                                var elblktypec2s =
                                    this.getAttribute("blocktype");
                                var elvtypec2s =
                                    this.getAttribute("varianttypes");
                                INC.methods.mappvariants(
                                    elvariantc1s,
                                    elblktypec2s,
                                    elvtypec2s
                                );
                            });
                        if (
                            document.querySelector(
                                ".sidebar_outer.sidebar_outer_active"
                            ) != null ||
                            INC.config.pageType == "cartPage"
                        ) {
                            if (clrarrac > 3) {
                                var inc_more_color1 = generate_html_tag(
                                    "a",
                                    "inc_more_color"
                                );
                                inc_more_color1.target = "_blank";
                                inc_more_color1.innerText = "+";
                                inc_more_color1.addEventListener(
                                    "click",
                                    function (ee) {
                                        if (window.innerWidth < 821) {
                                            ee.preventDefault();
                                        }
                                        var hrefd2 =
                                            productblockshow.querySelector(
                                                ".inc_product_img_main_img a"
                                            ).href;
                                        this.setAttribute("href", hrefd2);
                                        INC.methods.sendBundleClickTracking(
                                            productblockshow.getAttribute(
                                                "data-main_id"
                                            )
                                        );
                                        getTrackingPixel();
                                        if (window.innerWidth < 821) {
                                            setTimeout(function () {
                                                window.location.href = hrefd2;
                                            }, 2000);
                                        }
                                    }
                                );
                                var inc_more_color1clone =
                                    inc_more_color1.cloneNode(inc_more_color1);
                                if (
                                    elAttColorListBlock.querySelector(
                                        ".inc_more_color"
                                    ) == null
                                ) {
                                    elAttColorListBlock.appendChild(
                                        inc_more_color1
                                    );
                                    elAttColorListBlockshow.appendChild(
                                        inc_more_color1clone
                                    );
                                    var cloneelinc_more_color =
                                        elAttColorListBlockshow.querySelector(
                                            ".inc_more_color"
                                        );
                                    cloneelinc_more_color.addEventListener(
                                        "click",
                                        function (ec) {
                                            if (window.innerWidth < 821) {
                                                ec.preventDefault();
                                            }
                                            var hrefd1 =
                                                productblockshow.querySelector(
                                                    ".inc_product_img_main_img a"
                                                ).href;
                                            this.setAttribute("href", hrefd1);
                                            INC.methods.sendBundleClickTracking(
                                                productblockshow.getAttribute(
                                                    "data-main_id"
                                                )
                                            );
                                            getTrackingPixel();
                                            if (window.innerWidth < 821) {
                                                setTimeout(function () {
                                                    window.location.href =
                                                        hrefd1;
                                                }, 2000);
                                            }
                                        }
                                    );
                                }
                                return;
                            }
                        }
                        clrarrac++;
                        elAttColorListBlock.appendChild(attColorBlock);
                        elAttColorListBlockshow.appendChild(attColorBlockclone);
                        if (color_text != null) {
                            if (
                                color_text.toLocaleLowerCase() ==
                                colorObj.text.toLocaleLowerCase()
                            ) {
                                clrselflag = true;
                                attColorBlock.classList.add("inc_active");
                                attColorBlockclone.classList.add("inc_active");
                                elselcolortextshow.innerText = colorObj.text;
                                elselcolortextmodal.innerText =
                                    colorObj.text + ":";
                                if (window.innerWidth < 821) {
                                    elcolortextmodal.style.backgroundColor =
                                        colorObj["colorCode"];
                                    elcolortextshow.style.backgroundColor =
                                        colorObj["colorCode"];
                                }
                            } else if (
                                productColorsObj["colorArray"].length == 1
                            ) {
                                clrselflag = true;
                                attColorBlock.classList.add("inc_active");
                                attColorBlockclone.classList.add("inc_active");
                                productblockmod
                                    .querySelector(
                                        ".inc_product_desc_att_block"
                                    )
                                    .setAttribute("data-color", colorObj.text);
                                productblockshow
                                    .querySelector(
                                        ".inc_product_desc_att_block"
                                    )
                                    .setAttribute("data-color", colorObj.text);
                                elselcolortextshow.innerText = colorObj.text;
                                elselcolortextmodal.innerText =
                                    colorObj.text + ":";
                                if (window.innerWidth < 821) {
                                    elcolortextmodal.style.backgroundColor =
                                        colorObj["colorCode"];
                                    elcolortextshow.style.backgroundColor =
                                        colorObj["colorCode"];
                                }
                            }
                        }
                    });
                    if (clrselflag == falseflag) {
                        var ctext = productblockmod
                            .querySelector(
                                ".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block"
                            )
                            .getAttribute("data-color");
                        var color_colorcodesel = productblockmod
                            .querySelector(
                                ".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block"
                            )
                            .getAttribute("data-colorcode");
                        productblockmod
                            .querySelector(".inc_product_desc_att_block")
                            .setAttribute("data-color", ctext);
                        productblockshow
                            .querySelector(".inc_product_desc_att_block")
                            .setAttribute("data-color", ctext);
                        elAttColorListBlock
                            .querySelector(
                                ".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block"
                            )
                            .parentNode.classList.add("inc_active");
                        elAttColorListBlockshow
                            .querySelector(
                                ".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block"
                            )
                            .parentNode.classList.add("inc_active");
                        elselcolortextshow.innerText = ctext;
                        elselcolortextmodal.innerText = ctext;
                        if (window.innerWidth < 821) {
                            elcolortextmodal.style.backgroundColor =
                                color_colorcodesel;
                            elcolortextshow.style.backgroundColor =
                                color_colorcodesel;
                        }
                    }
                }
            } else {
                var colorlowertext = "";
                if (color_text != undefined) {
                    colorlowertext = color_text.toLocaleLowerCase();
                }
                if (
                    productblockmod.querySelector(
                        ".inc_product_desc_att_color_list_item_block.inc_active"
                    ) != null
                ) {
                    productblockmod
                        .querySelector(
                            ".inc_product_desc_att_color_list_item_block.inc_active"
                        )
                        .classList.remove("inc_active");
                }
                if (
                    productblockshow.querySelector(
                        ".inc_product_desc_att_color_list_item_block.inc_active"
                    ) != null
                ) {
                    productblockshow
                        .querySelector(
                            ".inc_product_desc_att_color_list_item_block.inc_active"
                        )
                        .classList.remove("inc_active");
                }
                if (
                    productblockmod.querySelector(
                        '.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' +
                            colorlowertext +
                            '"]'
                    ) != null
                ) {
                    productblockmod
                        .querySelector(
                            '.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' +
                                colorlowertext +
                                '"]'
                        )
                        .parentNode.classList.add("inc_active");
                    if (
                        productblockshow.querySelector(
                            '.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' +
                                colorlowertext +
                                '"]'
                        ) != null
                    ) {
                        productblockshow
                            .querySelector(
                                '.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' +
                                    colorlowertext +
                                    '"]'
                            )
                            .parentNode.classList.add("inc_active");
                    }

                    elselcolortextshow.innerText = colorlowertext;
                    elselcolortextmodal.innerText = colorlowertext;
                    if (
                        productblockmod.querySelector(
                            ".inc_product_desc_att_color_list_item_block.inc_active div"
                        ) != null
                    ) {
                        var color_colorcode = productblockmod
                            .querySelector(
                                ".inc_product_desc_att_color_list_item_block.inc_active div"
                            )
                            .getAttribute("data-colorcode");
                        if (window.innerWidth < 821) {
                            elcolortextmodal.style.backgroundColor =
                                color_colorcode;
                            elcolortextshow.style.backgroundColor =
                                color_colorcode;
                        }
                    }
                }
            }
            if (
                type_of_variant == "zero" ||
                type_of_variant == "size" ||
                type_of_variant == "color"
            ) {
                elAtt3ListBlock.innerHTML = "";
                elAtt3ListBlockshow.innerHTML = "";
                if (product3rdObj["att3Array"].length > 0) {
                    elAtt3rdBlock.classList.add("inc_active");

                }
                if (product4thObj["att4Array"].length > 0) {
                    elAtt4thBlock.classList.add("inc_active");

                }
            } else {
                if (third_text != undefined && third_text != null) {
                    var thirdlowertext = third_text.toLocaleLowerCase();
                    if (
                        productblockmod.querySelector(
                            ".inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.inc_active"
                        ) != null
                    ) {
                        productblockmod
                            .querySelector(
                                ".inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.inc_active"
                            )
                            .classList.remove("inc_active");
                    }
                    if (
                        productblockshow.querySelector(
                            ".inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.inc_active"
                        ) != null
                    ) {
                        productblockshow
                            .querySelector(
                                ".inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.inc_active"
                            )
                            .classList.remove("inc_active");
                    }
                    productblockmod
                        .querySelector(
                            ".inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block[datasize='" +
                                thirdlowertext +
                                "']"
                        )
                        .classList.add("inc_active");
                    productblockshow
                        .querySelector(
                            ".inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block[datasize='" +
                                thirdlowertext +
                                "']"
                        )
                        .classList.add("inc_active");
                }
                if (fourth_text != null && fourth_text != undefined) {
                    var fourthlowertext = fourth_text.toLocaleLowerCase();
                    if (
                        productblockmod.querySelector(
                            ".inc_product_desc_att_fourth_list_block .inc_product_desc_att_fourth_list_item_img_block.inc_active"
                        ) != null
                    ) {
                        productblockmod
                            .querySelector(
                                ".inc_product_desc_att_fourth_list_block .inc_product_desc_att_fourth_list_item_img_block.inc_active"
                            )
                            .classList.remove("inc_active");
                    }
                    if (
                        productblockshow.querySelector(
                            ".inc_product_desc_att_fourth_list_block .inc_product_desc_att_fourth_list_item_img_block.inc_active"
                        ) != null
                    ) {
                        productblockshow
                            .querySelector(
                                ".inc_product_desc_att_fourth_list_block .inc_product_desc_att_fourth_list_item_img_block.inc_active"
                            )
                            .classList.remove("inc_active");
                    }
                    productblockmod
                        .querySelector(
                            ".inc_product_desc_att_fourth_list_block .inc_product_desc_att_fourth_list_item_img_block[datasize='" +
                                fourthlowertext +
                                "']"
                        )
                        .classList.add("inc_active");
                    productblockshow
                        .querySelector(
                            ".inc_product_desc_att_fourth_list_block .inc_product_desc_att_fourth_list_item_img_block[datasize='" +
                                fourthlowertext +
                                "']"
                        )
                        .classList.add("inc_active");
                }
            }
            var checkzeroselflag = false;
            if (
                productblockmod.querySelector(
                    ".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active"
                ) == null
            ) {
                checkzeroselflag = true;
            }
            if (
                type_of_variant == "zero" ||
                (checkzeroselflag == trueflag && type_of_variant != "color")
            ) {
                var zerolowertext = "";
                zero_text = "";
                if (checkzeroselflag == trueflag) {
                    if (obj != null) {
                        zero_text = obj.getAttribute("data-size");
                        zerolowertext = zero_text.toLocaleLowerCase();
                    } else {
                        if (
                            productblockmod.querySelector(
                                ".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block"
                            ) != null
                        ) {
                            zero_text = productblockmod
                                .querySelector(
                                    ".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block"
                                )
                                .getAttribute("data-size");
                            zerolowertext = zero_text.toLocaleLowerCase();
                        }
                    }
                } else {
                    if (obj != null) {
                        zero_text = obj.getAttribute("data-size");
                        zerolowertext = zero_text.toLocaleLowerCase();
                    }
                }
                if (
                    productblockmod.querySelector(
                        ".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active"
                    ) != null
                ) {
                    productblockmod
                        .querySelector(
                            ".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active"
                        )
                        .classList.remove("inc_active");
                }
                if (
                    productblockshow.querySelector(
                        ".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active"
                    ) != null
                ) {
                    productblockshow
                        .querySelector(
                            ".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active"
                        )
                        .classList.remove("inc_active");
                }
                if (
                    productblockmod.querySelector(
                        '.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                            zerolowertext +
                            '"]'
                    ) != null
                ) {
                    productblockmod
                        .querySelector(
                            '.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                zerolowertext +
                                '"]'
                        )
                        .classList.add("inc_active");
                    productblockshow
                        .querySelector(
                            '.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                zerolowertext +
                                '"]'
                        )
                        .classList.add("inc_active");
                }
                if (
                    productblockmod.querySelector(
                        ".inc_product_desc_att_zero_title_text_selected"
                    ) != null
                ) {
                    productblockmod.querySelector(
                        ".inc_product_desc_att_zero_title_text_selected"
                    ).innerText = zero_text;
                }
                if (
                    productblockshow.querySelector(
                        ".inc_product_desc_att_zero_title_text_selected"
                    ) != null
                ) {
                    productblockshow.querySelector(
                        ".inc_product_desc_att_zero_title_text_selected"
                    ).innerText = zero_text;
                }
            }
            INC.methods.updateProductBlock(
                productblockshow,
                findobj,
                blocktype
            );
            INC.methods.updateProductBlock(productblockmod, findobj, blocktype);
            if (window.innerWidth < 821) {
                if (
                    document.querySelector(".inc_product_block.show_overlay") !=
                    null
                ) {
                    var allact = document.querySelectorAll(
                        ".inc_product_desc_att_block.inc_active"
                    );
                    if (
                        document.querySelector(
                            ".inc_product_modal_block.inc_active"
                        ) == null &&
                        document.querySelector(
                            ".inc_sidebar_modal_block.inc_active"
                        ) == null
                    ) {
                        document
                            .querySelector("html")
                            .classList.remove("inc_overlay");
                        document
                            .querySelector("body")
                            .classList.remove("inc_popup_open");
                    }
                    for (var actelm in allact) {
                        if (
                            allact[actelm] != null &&
                            Object.prototype.hasOwnProperty.call(allact, actelm)
                        ) {
                            allact[actelm].classList.remove("inc_active");
                        }
                    }

                    if (
                        document.querySelector(
                            ".inc_product_block.show_overlay"
                        ) != null
                    ) {
                        document
                            .querySelector(".inc_product_block.show_overlay")
                            .classList.remove("show_overlay");
                    }
                }
            }
        }
    };
    INC.methods.checkVariantSelection = function (prod_module_block) {
        var attr_flag_color = false;
        var attr_flag_size = false;
        var attr__flag_zero = false;
        var attr__flag_third = false;
        var attr__flag_fourth = false;
        var elSize = prod_module_block.querySelector(
            ".inc_product_desc_att_size_block.inc_active"
        );
        var elColor = prod_module_block.querySelector(
            ".inc_product_desc_att_color_block.inc_active"
        );
        var elattr0 = prod_module_block.querySelector(
            ".inc_product_desc_att_zero_block.inc_active"
        );
        var elthird3 = prod_module_block.querySelector(
            ".inc_product_desc_att_third_block.inc_active"
        );
        var elfourth4 = prod_module_block.querySelector(
            ".inc_product_desc_att_fourth_block.inc_active"
        );

        if (
            elColor != null &&
            elattr0 != null &&
            elthird3 != null &&
            elSize != null &&
            elfourth4 != null
        ) {
            if (
                elColor.querySelector(
                    ".inc_product_desc_att_color_list_item_block.inc_active"
                ) != null &&
                elattr0.querySelector(
                    ".inc_product_desc_att_size_list_item_img_block.inc_active"
                ) != null &&
                elthird3.querySelector(
                    ".inc_product_desc_att_size_list_item_img_block.inc_active"
                ) != null &&
                elSize.querySelector(
                    ".inc_product_desc_att_size_list_item_img_block.inc_active"
                ) != null
            ) {
                attr_flag_color = true;
                attr__flag_zero = true;
                attr__flag_third = true;
                attr_flag_size = true;
            }
        } else if (elColor != null && elattr0 != null && elSize != null) {
            if (
                elColor.querySelector(
                    ".inc_product_desc_att_color_list_item_block.inc_active"
                ) != null &&
                elattr0.querySelector(
                    ".inc_product_desc_att_size_list_item_img_block.inc_active"
                ) != null &&
                elSize.querySelector(
                    ".inc_product_desc_att_size_list_item_img_block.inc_active"
                ) != null
            ) {
                attr_flag_color = true;
                attr__flag_zero = true;
                attr__flag_third = true;
                attr_flag_size = true;
            }
        } else if (elColor != null && elattr0 != null) {
            if (
                elColor.querySelector(
                    ".inc_product_desc_att_color_list_item_block.inc_active"
                ) != null &&
                elattr0.querySelector(
                    ".inc_product_desc_att_size_list_item_img_block.inc_active"
                ) != null
            ) {
                attr_flag_color = true;
                attr__flag_zero = true;
                attr_flag_size = true;
                attr__flag_third = true;
            }
        } else {
            if (elColor != null) {
                if (
                    elColor.querySelector(
                        ".inc_product_desc_att_color_list_item_block.inc_active"
                    ) != null
                ) {
                    attr_flag_color = true;
                }
            } else {
                attr_flag_color = true;
            }
            if (elattr0 != null) {
                if (
                    elattr0.querySelector(
                        ".inc_product_desc_att_size_list_item_img_block.inc_active"
                    ) != null
                ) {
                    attr__flag_zero = true;
                }
            } else {
                attr__flag_zero = true;
            }
            if (elSize != null) {
                if (
                    elSize.querySelector(
                        ".inc_product_desc_att_size_list_item_img_block.inc_active"
                    ) != null
                ) {
                    attr_flag_size = true;
                }
            } else {
                attr_flag_size = true;
            }
            if (elthird3 != null) {
                if (
                    elthird3.querySelector(
                        ".inc_product_desc_att_third_list_item_img_block.inc_active"
                    ) != null
                ) {
                    attr__flag_third = true;
                }
            } else {
                attr__flag_third = true;
            }
            if (elfourth4 != null) {
                if (
                    elfourth4.querySelector(
                        ".inc_product_desc_att_fourth_list_item_img_block.inc_active"
                    ) != null
                ) {
                    attr__flag_fourth = true;
                }
            } else {
                attr__flag_fourth = true;
            }
        }
        if (
            attr_flag_size == trueflag &&
            attr__flag_zero == trueflag &&
            attr__flag_third == trueflag &&
            attr__flag_fourth == trueflag
        ) {
            return 1;
        }
        if (
            attr_flag_color == trueflag &&
            attr__flag_zero == trueflag &&
            attr__flag_third == trueflag
        ) {
            return 1;
        } else {
            if (attr_flag_size == falseflag) {
                return 2;
            } else if (attr__flag_third == falseflag) {
                return 3;
            } else if (attr_flag_color == falseflag) {
                return 0;
            } else {
                return 0;
            }
        }
    };

    function imgcolorgen(colorObj, attColorImg) {
        var colrdcode = false;
        var imagecode = false;
        if (colorObj["colorCode"] != "" && colorObj["colorCode"] != undefined) {
            colrdcode = true;
        } else if (colorObj["imgSrc"].length > 0) {
            if (
                colorObj["colorCode"] == "" &&
                colorObj["imgSrc"].charAt(0) != "#"
            ) {
                var colorImg = generate_html_tag("img");
                colorImg.setAttribute("alt", colorObj["text"]);
                colorImg.src = colorObj["imgSrc"];
                attColorImg.appendChild(colorImg);
            } else {
                imagecode = true;
            }
        }
        if (colrdcode == trueflag || imagecode == trueflag) {
            var spancolorcode = generate_html_tag("span");
            spancolorcode.setAttribute("alt", colorObj["text"]);
            if (imagecode == trueflag) {
                spancolorcode.style.backgroundColor = colorObj["imgSrc"];
            } else {
                spancolorcode.style.backgroundColor = colorObj["colorCode"];
            }
            attColorImg.appendChild(spancolorcode);
        }
    }
    INC.methods.updateProductBlock = function (
        productBlockel,
        findObj,
        blockType
    ) {
        var dataStore = INC.dataStore;
        var productBlock = productBlockel;
        var productModuleBlock = productBlock.parentNode.parentNode;
        var modal_attr_block = productModuleBlock.querySelector(
            ".inc_product_modal_block"
        );
        var zero_text = modal_attr_block
            .querySelector(".inc_product_desc_att_block")
            .getAttribute("data-zero");
        var size_text = modal_attr_block
            .querySelector(".inc_product_desc_att_block")
            .getAttribute("data-size");
        var color_text = modal_attr_block
            .querySelector(".inc_product_desc_att_block")
            .getAttribute("data-color");
        var third_text = modal_attr_block
            .querySelector(".inc_product_desc_att_block")
            .getAttribute("data-third");
        var fourth_text = modal_attr_block
            .querySelector(".inc_product_desc_att_block")
            .getAttribute("data-fourth");
        var elproductPriceLabel = productBlock.querySelector(
            ".inc_product_ecirp_label_block"
        );
        //data-fourth
        var sel_attr_text = "";

        if (color_text != undefined) {
            findObj.color_text = color_text;
            findObj.colorText = color_text;
            sel_attr_text = color_text.split("_")[0];
        } else {
            findObj.color_text = "";
        }

        if (zero_text != undefined) {
            findObj.zero_text = zero_text;
            findObj.zeroText = zero_text;
            if (sel_attr_text == "") {
                sel_attr_text = zero_text;
            } else {
                sel_attr_text = sel_attr_text + " / " + zero_text;
            }
        } else {
            findObj.zeroText = "";
            findObj.zero_text = "";
        }

        if (size_text != undefined) {
            findObj.sizeText = size_text;
            sel_attr_text = sel_attr_text + " / " + size_text;
        } else {
            findObj.sizeText = "";
        }

        if (third_text != undefined) {
            findObj.thirdText = third_text;
            sel_attr_text = sel_attr_text + " / " + third_text;
        } else {
            findObj.thirdText = "";
        }
        if (fourth_text != undefined) {
            findObj.forthtext = fourth_text;
            sel_attr_text = sel_attr_text + " / " + fourth_text;
        } else {
            findObj.forthtext = "";
        }
        if (
            productBlock.querySelector(".inc_product_variant_simple_text") !=
            null
        ) {
            if (blockType == "sidebar" || blockType == "am") {
                productBlock.querySelector(
                    ".inc_product_variant_simple_text"
                ).innerText = "View Options";
                productBlock
                    .querySelector(".inc_product_variant_simple_text")
                    .setAttribute("title", "View Options");
            } else {
                if (
                    productBlock
                        .querySelector(".inc_product_variant_simple_text")
                        .innerText.indexOf("Option") >= 0
                ) {
                    productBlock
                        .querySelector(".inc_product_variant_simple_text")
                        .setAttribute("title", "View Options");
                    productBlock.querySelector(".inc_product_variant_simple_text").setAttribute("title", "View Options");
                    productBlock.querySelector('.inc_product_variant_simple_text').setAttribute('title_', sel_attr_text)
                } else {
                    productBlock
                        .querySelector(".inc_product_variant_simple_text")
                        .setAttribute("title_", sel_attr_text);
                }
                if (
                    productBlock.querySelector(
                        ".inc_product_variant_simple_block.added_inc"
                    ) != null
                ) {
                    productBlock
                        .querySelector(".inc_product_variant_simple_text")
                        .setAttribute("title", sel_attr_text);
                } else {
                    productBlock
                        .querySelector(".inc_product_variant_simple_text")
                        .setAttribute("title", "View Options");
                    productBlock.querySelector('.inc_product_variant_simple_text').setAttribute('title_', sel_attr_text)
                }

                if (
                    productModuleBlock.querySelector(
                        ".inc_product_block .inc_product_add_block.added_inc"
                    ) != null
                ) {
                    productBlock.querySelector(
                        ".inc_product_variant_simple_text"
                    ).innerText = "";

                    var variant_span = generate_html_tag(
                        "span",
                        "variant_span"
                    );
                    if (findObj.zeroText != "") {
                        variant_span.innerText = findObj.zeroText;
                    } else {
                        variant_span.innerText = findObj.colorText;
                    }

                    let selected_image_attr_block =
                        modal_attr_block.querySelector(
                            ".inc_product_desc_att_color_list_item_block.inc_active img"
                        );
                    if (selected_image_attr_block) {
                        let image_src_selected_color_attr =
                            selected_image_attr_block.src;
                        let show_attribute_color_img =
                            document.createElement("img");
                        let show_attribute_color_box =
                            document.createElement("span");
                        show_attribute_color_box.classList.add(
                            "show_attribute_color_box"
                        );
                        show_attribute_color_img.src =
                            image_src_selected_color_attr;
                        show_attribute_color_box.appendChild(
                            show_attribute_color_img
                        );
                        productBlock
                            .querySelector(".inc_product_variant_simple_text")
                            .appendChild(show_attribute_color_box);
                    }
                    productBlock
                        .querySelector(".inc_product_variant_simple_text")
                        .appendChild(variant_span);
                }
            }
            if (color_text != null) {
                var colorImg = modal_attr_block.querySelector(
                    ".inc_product_desc_att_color_list_item_block.inc_active img"
                );
                var colorSrc = "";
                var colorAlt = "";
                if (colorImg != null) {
                    colorSrc = colorImg.src;
                    colorAlt = colorImg.alt;
                }
                var PrdVarSimTxt = productBlock.querySelector(
                    ".inc_product_variant_simple_text"
                );
                var colorTitle = generate_html_tag("div");
                colorTitle.addEventListener("click", function (e) {
                    e.preventDefault();
                });
                if (colorSrc != "") {
                    imgTag = generate_html_tag("img");
                    imgTag.src = colorSrc;
                    imgTag.alt = colorAlt;
                    colorTitle.appendChild(imgTag);
                }
                PrdVarSimTxt.appendChild(colorTitle);
                colorTitle.classList.add("colorCircle");
            }
        }
        var productObj = INC.dataStore.methods().getProductByAtt(findObj);
        if (Object.keys(productObj).length != 0) {
            var previousSKU = "";
            previousSKU = productBlock.getAttribute("data-sku");
            productBlock.setAttribute("data-id", productObj.id);
            productBlock.setAttribute("data-sku", productObj.sku);
            productBlock.setAttribute("data-main_id", productObj.mainId);
            productBlock.setAttribute("data-bundle_id", productObj.bundleId);
            productModuleBlock.setAttribute("data-id", productObj.id);
            productModuleBlock.setAttribute("data-sku", productObj.sku);
            productModuleBlock.setAttribute("data-main_id", productObj.mainId);
            productModuleBlock.setAttribute(
                "data-bundle_id",
                productObj.bundleId
            );

            if (
                document.querySelector(
                    '.inc_pdp_bundle_cart_added_product_block[data-main_id="' +
                        productObj.mainId +
                        '"]'
                ) != null &&
                sel_attr_text != ""
            ) {
                var added_sum_prod = document.querySelector(
                    '.inc_pdp_bundle_cart_added_product_block[data-main_id="' +
                        productObj.mainId +
                        '"]'
                );
                added_sum_prod.querySelector(
                    ".inc_pdp_bundle_cart_added_product_att_color_text_block"
                ).textContent = sel_attr_text;
                added_sum_prod
                    .querySelector(
                        ".inc_pdp_bundle_cart_added_product_att_color_text_block"
                    )
                    .setAttribute("style", "");
                added_sum_prod
                    .querySelector(
                        ".inc_pdp_bundle_cart_added_product_att_block"
                    )
                    .setAttribute("title", sel_attr_text);
            }
            if (
                productModuleBlock.querySelector(
                    ".inc_product_desc_att_size_title_text"
                ) != null &&
                sel_attr_text != ""
            ) {
                productModuleBlock
                    .querySelector(".inc_product_desc_att_size_title_text")
                    .setAttribute("title", sel_attr_text);
                if (
                    modal_attr_block.querySelector(
                        ".inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block"
                    ) != null
                ) {
                    var optionimage = modal_attr_block
                        .querySelector(
                            ".inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block"
                        )
                        .getAttribute("data-optionimge");
                    if (optionimage == "" || optionimage == undefined) {
                        optionimage = modal_attr_block
                            .querySelector(
                                ".inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block"
                            )
                            .getAttribute("data-colorcode");
                    }
                }
            }
            if (color_text != undefined) {
                var ccode = modal_attr_block
                    .querySelector(
                        ".inc_product_desc_att_color_list_item_block.inc_active div"
                    )
                    .getAttribute("data-colorcode");
                productModuleBlock.querySelector(
                    ".inc_product_showcase_block .inc_product_desc_att_color_title_text"
                ).style.backgroundColor = ccode;
                if (window.innerWidth < 769) {
                    productModuleBlock.querySelector(
                        ".inc_product_modal_block .inc_product_desc_att_color_title_text"
                    ).style.backgroundColor = ccode;
                }
            }
            var elPromo = productBlock.querySelector(".pc_promo_div");
            var elImgBlock = productBlock.querySelector(
                ".inc_product_img_block"
            );
            var elImgGalleryListBlock = productBlock.querySelector(
                ".inc_product_img_gallery_list_block"
            );
            var elTitleText = productBlock.querySelector(
                ".inc_product_desc_title_text"
            );
            var elPriceActiveText = productBlock.querySelector(
                ".inc_product_desc_ecirp_active_text"
            );
            var elPriceRegularText = productBlock.querySelector(
                ".inc_product_desc_ecirp_regular_text"
            );
            var elAddText = productBlock.querySelector(
                ".inc_product_desc_add_text"
            );
            var elworthPrice = productBlock.querySelector(
                ".inc_product_desc_ecirp_worth_text"
            );
            var elGalleryRightArrow = productBlock.querySelector(
                ".inc_product_img_gallery_right_block"
            );
            var elGallerylefttArrow = productBlock.querySelector(
                ".inc_product_img_gallery_left_block"
            );
            var eladdbtnqtyblock = productBlock.querySelector(
                ".inc_product_desc_qty_add_btn_block"
            );
            if (
                productObj.PromotionalMessage != null &&
                productObj.PromotionalMessage != ""
            ) {
                elPromo.innerText = productObj.PromotionalMessage;
                elPromo.classList.add("avail");
            } else {
                elPromo.innerText = "";
                elPromo.classList.add("empty");
            }
            if (
                productBlockel.parentNode.classList.contains(
                    "inc_product_modal_block"
                ) ||
                productBlockel.parentNode.className ==
                    "inc_product_modal_block inc_active"
            ) {
                if (
                    productBlock.querySelector(
                        ".inc_product_header_main_title_block"
                    ) != null
                ) {
                    var elModalTitle = productBlock.querySelector(
                        ".inc_product_header_main_title_block"
                    );
                }
            }
            if (
                productBlock.parentNode.className.indexOf(
                    "inc_product_showcase_block"
                ) >= 0
            ) {
                if (blockType != "pdp") {
                    eladdbtnqtyblock.classList.add("inc_active");
                }
            }
            var elImgMainImg = elImgBlock.querySelector(
                ".inc_product_img_main_img"
            );

            elImgMainImg
                .querySelectorAll("img")[0]
                .setAttribute("src", productObj["imageURL"]);

            elImgMainImg
                .querySelector("a")
                .setAttribute("otherImageList", productObj["otherImageList"]);
            elImgMainImg
                .querySelector("a")
                .setAttribute("imageURL", productObj["imageURL"]);
            elImgMainImg
                .querySelectorAll("img")[0]
                .setAttribute("data-mouseover", productObj["otherImageList"]);
            elImgMainImg
                .querySelectorAll("img")[0]
                .setAttribute("data-imageURL", productObj["imageURL"]);

            elImgMainImg
                .querySelector("a")
                .setAttribute("otherImageList", productObj["otherImageList"]);
            elImgMainImg
                .querySelector("a")
                .setAttribute("imageURL", productObj["imageURL"]);

            elImgMainImg
                .querySelectorAll("img")[0]
                .setAttribute("data-mouseover", productObj["otherImageList"]);
            elImgMainImg
                .querySelectorAll("img")[0]
                .setAttribute("data-imageURL", productObj["imageURL"]);

            var prod_ids = productModuleBlock.getAttribute("data-main_id");
            if (
                document.querySelector(
                    '.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="' +
                        prod_ids +
                        '"]'
                ) != null
            ) {
                var tab_img = document.querySelector(
                    '.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="' +
                        prod_ids +
                        '"]'
                );
                if (tab_img.querySelector("img") != null) {
                    tab_img.querySelector("img").src = productObj["imageURL"];
                }
            }
            elImgGalleryListBlock.innerHTML = "";
            if (
                productObj.otherImageList != null &&
                productObj.otherImageList.length >= 1
            ) {
                prepareAdditionalimages(
                    elImgGalleryListBlock,
                    productObj,
                    productBlock
                );
               
            } else {
                productBlock.classList.add("inc_other_noimage");
            }
            if (window.innerWidth > 820) {
                if (
                    productObj.otherImageList == null ||
                    productObj.otherImageList.length < 2 ||
                    productObj.otherImageList.length == 1 ||
                    productObj.otherImageList == ""
                ) {
                    elGalleryRightArrow.style.display = "none";
                    elGallerylefttArrow.style.display = "none";
                } else {
                    // elGalleryRightArrow.style.display = "none"
                    // elGallerylefttArrow.style.display = "none"
                }
            } else {
                if (
                    productObj.otherImageList == null ||
                    productObj.otherImageList.length < 3 ||
                    productObj.otherImageList.length == 1 ||
                    productObj.otherImageList == ""
                ) {
                    elGalleryRightArrow.style.display = "none";
                    elGallerylefttArrow.style.display = "none";
                } else {
                    // elGalleryRightArrow.style.display = "none"
                    // elGallerylefttArrow.style.display = "none"
                }
            }
            if (
                elTitleText.querySelector("strong") != null &&
                INC.config.pageType == "pdp"
            ) {
                elTitleText.querySelector("div").innerHTML =
                    "<strong>THIS ITEM: </strong>" + productObj.name;
            } else {
                elTitleText.querySelector("div").textContent = productObj.name;
            }
            elTitleText
                .querySelector("a")
                .setAttribute("title", productObj.name);

            if (elModalTitle != null) {
                elModalTitle.querySelector("a").textContent = productObj.name;
                elModalTitle
                    .querySelector("a")
                    .setAttribute("title", productObj.name);
            }

            var activePrice = parseFloat(productObj.activePrice)
                .toFixed(2)
                .toString();
            var regularPrice = parseFloat(productObj.regularPrice)
                .toFixed(2)
                .toString();
            var totalsaveprc = get_discount_price(
                productObj.regularPrice,
                productObj.activePrice
            );
            var totalsaveper = get_discount_price_percentage(
                productObj.regularPrice,
                productObj.activePrice
            );

            elPriceActiveText.parentNode.parentNode.parentNode.classList.remove(
                "is_special_ecirp"
            );
            elPriceRegularText.textContent = "";

            if (
                activePrice != regularPrice &&
                regularPrice != "" &&
                regularPrice != null &&
                regularPrice != 0
            ) {
                elPriceActiveText.parentNode.parentNode.parentNode.classList.add(
                    "is_special_ecirp"
                );
                elPriceActiveText.innerHTML = formatter.format(activePrice);
                elPriceRegularText.innerHTML = formatter.format(regularPrice);
                elworthPrice.innerHTML = "-" + totalsaveper + "%";
                elproductPriceLabel.innerHTML = "-" + totalsaveper + "%";
            } else {
                elworthPrice.innerHTML = "";
                elPriceActiveText.innerHTML = formatter.format(activePrice);
                elproductPriceLabel.innerHTML = "";
            }

            if (
                productBlock.querySelector(".inc_product_desc_add_text")
                    .textContent == "Added" ||
                productBlock.querySelector(".inc_product_desc_add_text")
                    .textContent == INC.config.AddedText ||
                productBlock.parentNode.parentNode.querySelector(
                    ".inc_product_desc_add_text"
                ).textContent == INC.config.AddedText
            ) {
                if (
                    !Object.prototype.hasOwnProperty.call(
                        dataStore,
                        "bundleCartProducts"
                    )
                ) {
                    dataStore["bundleCartProducts"] = {};
                    INC.config.pdpaddedProductList = [];
                    INC.config.bundle_tracking = [];
                    INC.config.bundle_skuPushed = [];
                    INC.config.dupBasket = [];
                }
                dataStore["bundleCartProducts"][productObj["sku"]] =
                    dataStore["bundleCartProducts"][previousSKU];
                if (productObj["sku"] != previousSKU) {
                    delete dataStore["bundleCartProducts"][previousSKU];
                }
            }
            var elQtyInput = productBlock.parentNode.parentNode.querySelector(
                ".inc_product_modal_block .inc_product_desc_qty_add_btn_block .inc_product_qty_block input"
            );
            var sku = productBlock.getAttribute("data-sku");
            var bundle_id = productBlock.getAttribute("data-bundle_id");
            var main_id = productBlock.getAttribute("data-main_id");
            var qty = parseInt(elQtyInput.value);
            var pname = productBlock.querySelector(
                ".inc_product_desc_title_text"
            ).textContent;
            var pprice = productBlock
                .querySelector(".inc_product_desc_ecirp_active_text")
                .textContent.replace("£", "");

            if (
                elAddText.parentNode.parentNode.querySelector(
                    ".inc_product_desc_add_img.checked"
                ) != null
            ) {
                INC.methods.updateBundleCart(
                    {
                        sku: sku,
                        qty: qty,
                    },
                    "add",
                    main_id,
                    bundle_id,
                    pname,
                    pprice
                );
            }
            setTimeout(function () {
                if (
                    elImgMainImg.querySelectorAll("img")[0].naturalWidth == 360
                ) {
                    elImgMainImg
                        .querySelectorAll("img")[0]
                        .setAttribute("src", productObj["imageURLMain"]);
                }
            }, 200);
        }
        if (
            blockType == "pdp" &&
            productModuleBlock.querySelector(
                ".inc_product_add_block.added_inc"
            ) != null
        ) {
            productModuleBlock
                .querySelector(".inc_product_variant_simple_block")
                .classList.add("added_inc");
            // productModuleBlock
            //     .querySelector(".inc_product_variant_simple_block")
            //     .classList.add("inc_stay_added");
        }
    };

    INC.methods.createProductListItemBlock = function (productObjs) {
        var productListItemBlock = generate_html_tag(
            "div",
            "inc_pdp_bundle_product_list_item_block"
        );
        var findObj = new INC.classes.FindObj({
            id: productObjs.id,
            mainId: productObjs.mainId,
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        productListItemBlock.style.userSelect = "none";
        productListItemBlock.setAttribute("data-id", productObj.id);
        productListItemBlock.setAttribute("data-sku", productObj.sku);
        productListItemBlock.setAttribute("data-main_id", productObj.mainId);
        productListItemBlock.setAttribute(
            "data-bundle_id",
            productObj.bundleId
        );

        var seemoreprodhtml =
            '<div class="inc_pdp_bundle_product_list_item_added_block"><div class="inc_pdp_bundle_product_list_item_added_btn_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img"></div></div><div class="inc_pdp_bundle_product_list_item_added_btn_text_block"><div class="inc_pdp_bundle_product_list_item_added_btn_text"></div></div></div></div><div class="inc_pdp_bundle_product_list_item_img_block"><div class="inc_pdp_bundle_product_list_item_img"><img class="inc_lazy" data-src="' +
            productObj.imageURL +
            '" src="' +
            productObj.imageURL +
            '"></div></div><div class="inc_pdp_bundle_product_list_item_title_block"><div class="inc_pdp_bundle_product_list_item_title_text_block"><div class="inc_pdp_bundle_product_list_item_title_text"></div></div></div><div class="inc_pdp_bundle_product_list_item_ecirp_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_text_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_text"></div></div></div></div>';

        productListItemBlock.innerHTML = seemoreprodhtml;
        productListItemBlock
            .querySelector(".inc_pdp_bundle_product_list_item_img img")
            .setAttribute("onerror", "this.src='" + INC.config.noimage + "'");
        productListItemBlock.addEventListener("click", function () {
            Array.prototype.forEach.call(
                document.querySelectorAll(
                    ".inc_product_desc_att_size_list_block"
                ),
                function (attSizeListBlock) {
                    attSizeListBlock.classList.remove("inc_active");
                }
            );

            var elListMainBlock = document.querySelector(
                ".inc_pdp_bundle_product_list_main_block"
            );
            Array.prototype.forEach.call(
                elListMainBlock.querySelectorAll(".inc_product_module_block"),
                function (productBlock) {
                    productBlock.setAttribute(
                        "style",
                        "display: none!important"
                    );
                }
            );
            elListMainBlock.querySelector(
                ".inc_product_module_block" +
                    '[data-main_id="' +
                    productObj.mainId +
                    '"]'
            ).style.display = "block";

            Array.prototype.forEach.call(
                productListItemBlock.parentNode.querySelectorAll(
                    ".inc_pdp_bundle_product_list_item_block"
                ),
                function (pListItemBlock) {
                    pListItemBlock.classList.remove("inc_active");
                }
            );

            productListItemBlock.classList.add("inc_active");
        });

        return productListItemBlock;
    };
    INC.methods.updateBundleCart = function (
        bundleCartObj,
        type,
        main_id,
        bundle_id,
        pname,
        pprice
    ) {
        var dataStore = INC.dataStore;
        var listToDelete = [];
        if (
            !Object.prototype.hasOwnProperty.call(
                dataStore,
                "bundleCartProducts"
            )
        ) {
            dataStore["bundleCartProducts"] = {};
            INC.config.pdpaddedProductList = [];
            INC.config.bundle_tracking = [];
            INC.config.bundle_skuPushed = [];
            INC.config.dupBasket = [];
        }

        switch (type) {
            case "add":
                dataStore["bundleCartProducts"][bundleCartObj["sku"]] =
                    bundleCartObj["qty"];
                if (
                    INC.config.bundle_skuPushed.indexOf(bundleCartObj["sku"]) ==
                    -1
                ) {
                    INC.config.bundle_skuPushed.push(bundleCartObj["sku"]);
                }
                if (INC.config.pdpaddedProductList.indexOf(main_id) == -1) {
                    INC.config.pdpaddedProductList.push(main_id);
                    INC.config.bundle_tracking.push({
                        id: main_id,
                        bid: bundle_id,
                        pname: pname,
                        prc: pprice,
                        qty: bundleCartObj["qty"],
                    });
                }
                break;
            case "sub":
                delete dataStore["bundleCartProducts"][bundleCartObj["sku"]];
                INC.config.pdpaddedProductList.remove_prod_list = function () {
                    var what,
                        a = arguments,
                        L = a.length,
                        ax;
                    while (L && this.length) {
                        what = a[--L];
                        while ((ax = this.indexOf(what)) != -1) {
                            this.splice(ax, 1);
                        }
                    }
                    return this;
                };
                listToDelete[0] = main_id;
                for (var i = 0; i < INC.config.bundle_tracking.length; i++) {
                    var obj = INC.config.bundle_tracking[i];
                    if (obj != undefined) {
                        if (listToDelete.indexOf(obj.id) != -1) {
                            INC.config.bundle_tracking.splice(i, 1);
                        }
                    }
                }
                INC.config.bundle_skuPushed.remove_prod_list = function () {
                    var what1,
                        a1 = arguments,
                        L1 = a1.length,
                        ax1;
                    while (L1 && this.length) {
                        what1 = a1[--L1];
                        while ((ax1 = this.indexOf(what1)) != -1) {
                            this.splice(ax1, 1);
                        }
                    }
                    return this;
                };
                INC.config.pdpaddedProductList.remove_prod_list(main_id);
                INC.config.bundle_skuPushed.remove_prod_list(
                    bundleCartObj["sku"]
                );
                break;
        }

        if (INC.config.pageType == "pdp") {
            this.calculateBundleTotal();
        }
    };

    INC.methods.calculateBundleTotal = function () {
        var dataStore = INC.dataStore;
        var bundleCartProducts = dataStore["bundleCartProducts"];
        var productListObj = dataStore.dataStoreObj;
        var duplicate_check_produ = [];
        var totalRegularPrice = 0;
        var totalActivePrice = 0;
        var totalMainProduct = 0;
        var totalAddonProducts = 0;
        var totalAddonProductsCount = 0;
        var totalProductCount = 0;
        var total_qty = 0;
        var total_collect_point = 0;
        var mainId = INC.methods.getProductIdFromWebPage();
        if (bundleCartProducts != null && bundleCartProducts != undefined) {
            Object.keys(bundleCartProducts).forEach(function (sku) {
                for (var mainProductId in productListObj) {
                    for (var childProductId in productListObj[mainProductId]) {
                        if (
                            sku ==
                            productListObj[mainProductId][childProductId]["sku"]
                        ) {
                            if (
                                duplicate_check_produ.indexOf(
                                    productListObj[mainProductId][
                                        childProductId
                                    ]["sku"]
                                ) == -1
                            ) {
                                duplicate_check_produ.push(
                                    productListObj[mainProductId][
                                        childProductId
                                    ]["sku"]
                                );
                                var regularPrice =
                                    productListObj[mainProductId][
                                        childProductId
                                    ]["regularPrice"];
                                var activePrice =
                                    productListObj[mainProductId][
                                        childProductId
                                    ]["activePrice"];
                                totalRegularPrice =
                                    totalRegularPrice +
                                    parseFloat(bundleCartProducts[sku]) *
                                        regularPrice;
                                totalActivePrice =
                                    totalActivePrice +
                                    parseFloat(bundleCartProducts[sku]) *
                                        activePrice;

                                total_qty =
                                    total_qty +
                                    parseInt(bundleCartProducts[sku]);

                                if (
                                    productListObj[mainProductId][
                                        childProductId
                                    ]["worthPrice"] != "" &&
                                    productListObj[mainProductId][
                                        childProductId
                                    ]["worthPrice"] != null
                                ) {
                                    total_collect_point =
                                        total_collect_point +
                                        +(
                                            productListObj[mainProductId][
                                                childProductId
                                            ]["worthPrice"] *
                                            parseInt(bundleCartProducts[sku])
                                        );
                                }
                                if (
                                    productListObj[mainProductId][
                                        childProductId
                                    ].mainId == mainId
                                ) {
                                    totalProductCount++;
                                    totalMainProduct =
                                        totalMainProduct +
                                        parseInt(bundleCartProducts[sku]) *
                                            activePrice;
                                }
                                if (
                                    productListObj[mainProductId][
                                        childProductId
                                    ].mainId != mainId
                                ) {
                                    totalProductCount++;
                                    totalAddonProductsCount++;
                                    totalAddonProducts =
                                        totalAddonProducts +
                                        parseInt(bundleCartProducts[sku]) *
                                            activePrice;
                                }
                            }
                        }
                    }
                }
            });
        }
        var priceObj = {
            totalActivePrice: parseFloat(totalActivePrice).toFixed(2),
            totalRegularPrice: parseFloat(totalRegularPrice).toFixed(2),
            totalMainProduct: totalMainProduct,
            totalAddonProducts: totalAddonProducts,
            totalAddonProductsCount: totalAddonProductsCount,
            totalProductCount: totalProductCount,
            total_qty: total_qty,
            total_collect_point: total_collect_point,
        };
        this.updateBundleCartBlock(priceObj);
    };

    INC.methods.updateBundleCartBlock = function (priceObj) {
        var dataStore = INC.dataStore;
        var bundleCartProducts = dataStore["bundleCartProducts"];
        var totalRegularPrice = priceObj.totalRegularPrice;
        var totalActivePrice = priceObj.totalActivePrice;
        var totalMainProduct = priceObj.totalMainProduct;
        var totalAddonProducts = priceObj.totalAddonProducts;
        var totalAddonProductsCount = priceObj.totalAddonProductsCount;
        var totalProductCount = priceObj.totalProductCount;
        var elPdpBundleCartBlock = document.querySelector(
            ".inc_pdp_bundle_cart_block"
        );
        if (elPdpBundleCartBlock != null) {
            var elBundleCartAddedBlock = document.querySelector(
                ".inc_pdp_bundle_cart_added_block"
            );
            var elBundleCartSummaryViewBtnCount = document.querySelector(
                ".inc_pdp_bundle_cart_summary_view_btn_count"
            );
            var elBundleCartPriceRegularText = document.querySelector(
                ".inc_pdp_bundle_cart_summary_ecirp_regular_text"
            );
            var elBundleCartPriceActiveText = document.querySelector(
                ".inc_pdp_bundle_cart_summary_ecirp_active_text"
            );
            var elBundleCartTitleTextcount = document.querySelector(
                ".inc_pdp_bundle_cart_title_text"
            );
            var elbundlesavetext = document.querySelector(
                ".inc_pdp_bundle_cart_summary_ecirp_save_text"
            );
            var elBundleCartAddBtnCount = document.querySelector(
                ".inc_pdp_bundle_cart_summary_count_text"
            );
            var elBundleCartAddBtnText = document.querySelector(
                ".inc_pdp_bundle_cart_summary_add_btn_text"
            );
            elBundleCartAddedBlock.innerHTML = "";
            var bundleCartProductsArray = Object.keys(bundleCartProducts);
            elBundleCartSummaryViewBtnCount.textContent =
                bundleCartProductsArray.length;
            if (window.innerWidth < 769) {
                elBundleCartTitleTextcount.textContent = "Items you've added";
            }
            for (var skup in INC.config.bundle_skuPushed) {
                var elcont = INC.config.bundle_skuPushed[skup];
                for (var bundaray in bundleCartProductsArray) {
                    var findObj = new INC.classes.FindObj({
                        sku: bundleCartProductsArray[bundaray],
                    });
                    var productObj = INC.dataStore
                        .methods()
                        .getProductBySKU(findObj);
                    if (elcont == productObj.id) {
                        var productId = productObj.id;
                        var prepen_elm = this.createBundleCartAddedProductBlock(
                            productId,
                            bundleCartProducts[
                                bundleCartProductsArray[bundaray]
                            ],
                            "pdp"
                        );
                        if (prepen_elm != undefined) {
                            if (
                                elBundleCartAddedBlock != null ||
                                elBundleCartAddedBlock != undefined
                            ) {
                                elBundleCartAddedBlock.insertBefore(
                                    prepen_elm,
                                    elBundleCartAddedBlock.childNodes[0]
                                );
                            }
                        }
                    }
                }
            }
            elBundleCartPriceRegularText.style.display = "none";
            if (totalActivePrice != totalRegularPrice) {
                elBundleCartPriceRegularText.style.display = "flex";
            }

            if (bundleCartProductsArray.length == 0) {
                setTimeout(function () {
                    onloadpdp_delete = false;
                    document
                        .querySelectorAll(
                            ".inc_pdp_block .inc_product_desc_add_block"
                        )[1]
                        .click();
                    onloadpdp_delete = true;
                }, 5);
            }
            elBundleCartPriceActiveText.innerHTML =
                formatter.format(totalActivePrice);
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove(
                "simple_ecirp"
            );
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove(
                "is_special_ecirp"
            );
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove(
                "simple_ecirp"
            );
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove(
                "is_special_ecirp"
            );
            var totalsaveprcs = get_discount_price(
                totalRegularPrice,
                totalActivePrice
            );
            if (
                totalRegularPrice != "0.00" &&
                totalRegularPrice != totalActivePrice &&
                totalRegularPrice != null &&
                totalRegularPrice != ""
            ) {
                elBundleCartPriceRegularText.innerHTML =
                    formatter.format(totalRegularPrice);
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.add(
                    "is_special_ecirp"
                );
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add(
                    "is_special_ecirp"
                );
                elbundlesavetext.innerHTML =
                    "Save " + formatter.format(totalsaveprcs);
            } else {
                elbundlesavetext.innerHTML = "";
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add(
                    "simple_ecirp"
                );
            }

            if (
                elPdpBundleCartBlock != null &&
                elPdpBundleCartBlock != undefined
            ) {
                var elBundleCartTitleText = document.querySelector(
                    ".inc_pdp_bundle_cart_title_text"
                );
                var elBundleCartAddBtnTexts = document.querySelector(
                    ".inc_pdp_bundle_cart_summary_add_btn_text"
                );
                elBundleCartAddBtnTexts.style.textTransform = "none";
                elBundleCartTitleText.textContent = "Price Summary";
                elBundleCartAddBtnTexts.textContent = "Add To Basket";
                if (totalProductCount <= 1) {
                    elBundleCartAddBtnTexts.textContent = "Add To Basket";
                    elBundleCartAddBtnCount.innerHTML =
                        Object.keys(INC.dataStore.bundleCartProducts).length +
                        " Item Added";
                } else if (totalProductCount == 2) {
                    elBundleCartAddBtnTexts.textContent = "Add Both To Basket";
                    elBundleCartAddBtnCount.innerHTML =
                        Object.keys(INC.dataStore.bundleCartProducts).length +
                        " Items Added";
                } else if (totalProductCount == 3) {
                    elBundleCartAddBtnTexts.textContent =
                        "Add All Three To Basket";
                    elBundleCartAddBtnCount.innerHTML =
                        Object.keys(INC.dataStore.bundleCartProducts).length +
                        " Items Added";
                } else if (totalProductCount == 4) {
                    elBundleCartAddBtnTexts.textContent =
                        "Add All Four To Basket";
                    elBundleCartAddBtnCount.innerHTML =
                        Object.keys(INC.dataStore.bundleCartProducts).length +
                        " Items Added";
                } else if (totalProductCount == 5) {
                    elBundleCartAddBtnTexts.textContent =
                        "Add All Five To Basket";
                    elBundleCartAddBtnCount.innerHTML =
                        Object.keys(INC.dataStore.bundleCartProducts).length +
                        " Items Added";
                } else if (totalProductCount == 6) {
                    elBundleCartAddBtnTexts.textContent =
                        "Add All Six To Basket";
                    elBundleCartAddBtnCount.innerHTML =
                        Object.keys(INC.dataStore.bundleCartProducts).length +
                        " Items Added";
                }
            }

            var elPriceMainTitleText = elPdpBundleCartBlock.querySelector(
                ".inc_pdp_bundle-cart_ecirp_main_title_text"
            );
            var elPriceMainFigureText = elPdpBundleCartBlock.querySelector(
                ".inc_pdp_bundle-cart_ecirp_main_figure_text"
            );
            var elPriceAddonTitleText = elPdpBundleCartBlock.querySelector(
                ".inc_pdp_bundle-cart_ecirp_addon_title_text"
            );
            var elPriceAddonFigureText = elPdpBundleCartBlock.querySelector(
                ".inc_pdp_bundle-cart_ecirp_addon_figure_text"
            );
            var elPriceActiveText = elPdpBundleCartBlock.querySelector(
                ".inc_pdp_bundle_cart_summary_ecirp_active_text"
            );

            elPriceMainTitleText.textContent = "Main Product Price ";
            elPriceAddonTitleText.textContent =
                "Add-on(s) Selected  " +
                (totalAddonProductsCount > 0 ? totalAddonProductsCount : "");

            elPriceMainFigureText.innerHTML =
                formatter.format(totalMainProduct);
            elPriceAddonFigureText.innerHTML =
                formatter.format(totalAddonProducts);
            elPriceActiveText.innerHTML = formatter.format(totalActivePrice);

            setTimeout(function () {
                if (INC.dataStore.bundleCartProducts != null) {
                    if (
                        Object.keys(INC.dataStore.bundleCartProducts).length ==
                        0
                    ) {
                        elBundleCartAddBtnText.textContent = "Add To Bag";
                        elBundleCartAddBtnText.parentNode.parentNode.setAttribute(
                            "style",
                            "pointer-events: none;opacity: 0.5;"
                        );
                    } else {
                        elBundleCartAddBtnText.parentNode.parentNode.setAttribute(
                            "style",
                            "pointer-events: auto;opacity: 1;"
                        );
                    }
                }
            }, 100);
        }
    };

    INC.methods.createBundleCartAddedProductBlock = function (productId, qty) {
        var addedProductBlock = generate_html_tag(
            "div",
            "inc_pdp_bundle_cart_added_product_block"
        );
        var findObj = new INC.classes.FindObj({
            id: productId,
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        addedProductBlock.setAttribute("data-id", productObj.id);
        addedProductBlock.setAttribute("data-sku", productObj.sku);
        addedProductBlock.setAttribute("data-main_id", productObj.mainId);
        addedProductBlock.setAttribute("data-bundle_id", productObj.bundleId);

        var prod_module_elm = document.querySelector(
            '.inc_pdp_block .inc_product_module_block[data-main_id="' +
                productObj.mainId +
                '"]'
        );
        if (prod_module_elm != null) {
            var modal_attr_block = prod_module_elm.querySelector(
                ".inc_product_modal_block"
            );
            var zero_text = modal_attr_block
                .querySelector(".inc_product_desc_att_block")
                .getAttribute("data-zero");
            var size_text = modal_attr_block
                .querySelector(".inc_product_desc_att_block")
                .getAttribute("data-size");
            var color_text = modal_attr_block
                .querySelector(".inc_product_desc_att_block")
                .getAttribute("data-color");
            var third_text = modal_attr_block
                .querySelector(".inc_product_desc_att_block")
                .getAttribute("data-third");
            var fourth_text = modal_attr_block
                .querySelector(".inc_product_desc_att_block")
                .getAttribute("data-fourth");

            var sel_attr_text = "";
            if (color_text != undefined) {
                sel_attr_text = color_text;
            }
            if (zero_text != undefined) {
                if (sel_attr_text == "") {
                    sel_attr_text = zero_text;
                } else {
                    sel_attr_text = sel_attr_text + " / " + zero_text;
                }
            }
            if (size_text != undefined) {
                sel_attr_text = sel_attr_text + " / " + size_text;
            }
            if (third_text != undefined) {
                sel_attr_text = sel_attr_text + " / " + third_text;
            }
            var addedsumprodhtml =
                '<div class="inc_pdp_bundle_cart_added_product_img_block"><div class="inc_pdp_bundle_cart_added_product_img"><img src="' +
                productObj.imageURL +
                '" data-src="' +
                productObj.imageURL +
                '"></div></div><div class="inc_pdp_bundle_cart_added_product_title_block"><div class="inc_pdp_bundle_cart_added_product_title_text_block"><div class="inc_pdp_bundle_cart_added_product_title_text"><a title="' +
                productObj.name +
                '"><div style="text-transform: unset;"><span>' +
                qty +
                " <small>x</small> </span>" +
                productObj.name +
                '</div></a></div></div></div><div class="inc_pdp_bundle_cart_added_product_qty_block"><div class="inc_pdp_bundle_cart_added_product_qty_text_block"><div class="inc_pdp_bundle_cart_addeed_product_qty_text">' +
                qty +
                '</div></div></div><div class="inc_pdp_bundle_cart_added_product_ecirp_block"><div class="inc_pdp_bundle_cart_added_product_ecirp_text_block"><div class="inc_pdp_bundle_cart_added_product_ecirp_text">' +
                formatter.format(productObj.activePrice * qty) +
                '</div></div></div><div class="inc_pdp_bundle_cart_added_product_att_block" title="' +
                sel_attr_text +
                '"><div class="inc_pdp_bundle_cart_added_product_att_color_block"><div class="inc_pdp_bundle_cart_added_product_att_color_text_block" style="text-transform: none;">' +
                sel_attr_text +
                '</div></div><div class="inc_pdp_bundle_cart_added_product_att_size_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text"></div></div></div></div><div class="inc_pdp_bundle_cart_added_product_edit_block"><div class="inc_pdp_bundle_cart_added_product_edit_text_block"><div class="inc_pdp_bundle_cart_added_product_edit_text"></div></div><div class="inc_pdp_bundle_cart_added_product_edit_img_block"><div class="inc_pdp_bundle_cart_added_product_edit_img"></div></div></div>';

            addedProductBlock.innerHTML = addedsumprodhtml;

            addedProductBlock
                .querySelector(".inc_pdp_bundle_cart_added_product_img img")
                .setAttribute(
                    "onerror",
                    "this.src='" + INC.config.noimage + "'"
                );

            var elEditTextBlock = addedProductBlock.querySelector(
                ".inc_pdp_bundle_cart_added_product_edit_text_block"
            );
            var elEditImgBlock = addedProductBlock.querySelector(
                ".inc_pdp_bundle_cart_added_product_edit_img_block"
            );

            elEditTextBlock.addEventListener("click", function () {
                if (INC.config.deviceType == "mobile") {
                    if (
                        document.querySelector(
                            ".inc_pdp_bundle_product_list_item_block" +
                                '[data-main_id="' +
                                productObj.mainId +
                                '"]'
                        ) != null
                    )
                        document
                            .querySelector(
                                ".inc_pdp_bundle_product_list_item_block" +
                                    '[data-main_id="' +
                                    productObj.mainId +
                                    '"]'
                            )
                            .click();
                }
                setTimeout(function () {
                    document
                        .querySelector(
                            ".inc_product_block" +
                                '[data-id="' +
                                productObj.id +
                                '"]'
                        )
                        .parentNode.parentNode.querySelector(
                            ".inc_product_modal_block"
                        )
                        .classList.add("inc_active");
                    document.querySelector("html").classList.add("inc_overlay");
                }, 50);
            });
            elEditImgBlock.addEventListener("click", function () {
                document
                    .querySelector(
                        ".inc_product_block" +
                            '[data-id="' +
                            productObj.id +
                            '"]'
                    )
                    .querySelector(".inc_product_desc_add_block")
                    .click();
            });
            return addedProductBlock;
        }
    };

    INC.methods.clear = function () {
        remsidebarelm();
        if (document.querySelector(".inc_af_block") != null) {
            Array.prototype.forEach.call(
                document.querySelectorAll(".inc_af_block"),
                function (el) {
                    el.parentNode.removeChild(el);
                }
            );
        }
        if (document.querySelector(".inc_bundle_avail_block") != null) {
            Array.prototype.forEach.call(
                document.querySelectorAll(".inc_bundle_avail_block"),
                function (reme) {
                    reme.parentNode.removeChild(reme);
                }
            );
        }
        if (document.querySelector(".inc_pdp_block") == null) {
            if (document.querySelector(".inc_bundle_avail_block") != null) {
                Array.prototype.forEach.call(
                    document.querySelectorAll(".inc_bundle_avail_block"),
                    function (reme) {
                        reme.parentNode.removeChild(reme);
                    }
                );
            }
        }
        if (document.querySelector(".inc_pdp_block") != null) {
            Array.prototype.forEach.call(
                document.querySelectorAll(".inc_pdp_block"),
                function (el) {
                    el.parentNode.removeChild(el);
                }
            );
        }
    };

    INC.methods.addProductToCart = function (
        findObjd,
        productBlock,
        add_btn_click,
        _add_prod_im,
        btn_addtocart,
        newbtntext,
        rec_type
    ) {
        if (INC.config.pageType != "cartPage" && INC.config.pageType != "pdp") {
            document.querySelector("html").classList.remove("inc_overlay");
        }
        if (
            document.querySelector(
                ".inc_product_modal_block.inc_active .inc_product_header_img"
            ) != null
        ) {
            document
                .querySelector(
                    ".inc_product_modal_block.inc_active .inc_product_header_img"
                )
                .click();
        }
        if (
            document.querySelector(
                ".product-add-to-cart .flits-wishlist-product-page #flits-wsl-token"
            ) != null
        ) {
            var token = document.querySelector(
                ".product-add-to-cart .flits-wishlist-product-page #flits-wsl-token"
            ).value;
        }
        var mainids = productBlock.getAttribute("data-main_id");
        var findObj = new INC.classes.FindObj(findObjd);
        var productObj = INC.dataStore.methods().getProductById(findObj);
        var params = "";
        var qty = productBlock.querySelector(
            ".inc_product_qty_input_text input"
        ).value;
        if (productObj.option[0] != undefined) {
            optName0 = productObj.option[0].text;
        }
        if (productObj.ProductType == "configurable") {
            var params =
                "action=add&product+id=" +
                productObj.mainId +
                "&qty%5B%5D=" +
                qty +
                "";

            params =
                params +
                "&attribute[" +
                productObj.option[0].att_id +
                "]=" +
                productObj.option[0].opt_id +
                "";
        } else {
            var opt__Id = "attribute[" + productObj.attrId + "]";
            params = {
                action: "add",
                "product id": productObj.mainId,
                "qty[]": qty,
            };
            // params[opt__Id] = productObj.optId;
        }
        INC.config.pdpaddedProductList.push(productObj.mainId);
        INC.config.sidebarremovedprod.push(mainids);
        if (rec_type == trueflag) {
            INC.config.pdpaddedProductList = [];
        }
        var addUrl = INC.config.addToBasketURL;
        jQuery.ajax({
            type: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "*/*",
            },
            url: addUrl,
            data: params,

            error: function () {},
            success: function (data) {
                if (
                    document.querySelector(
                        ".sidebar_outer.sidebar_outer_active"
                    )
                ) {
                    INC.methods.addProductToSidebarCart(
                        findObj,
                        1,
                        productBlock,
                        null,
                        btn_addtocart
                    );
                    productBlock.remove();
                    INC.config.pdpaddedProductList.push(productObj.childsku);
                    if (
                        document.querySelectorAll(
                            ".inc_recommended_products_list_main_block .inc_product_module_block"
                        ).length == 0
                    ) {
                        document
                            .querySelector(
                                ".inc_recommended_tabs_list_item_block.inc_active"
                            )
                            .remove();
                        if (
                            document.querySelector(
                                ".inc_recommended_tabs_list_item_block"
                            ) != null
                        ) {
                            document
                                .querySelector(
                                    ".inc_recommended_tabs_list_item_block"
                                )
                                .click();
                            document
                                .querySelector(
                                    ".inc_recommended_tabs_list_block"
                                )
                                .scrollTo({
                                    left: 0,
                                });
                        } else {
                            INC.methods.hideSidebar();
                            document
                                .querySelector(".inc_checkout_basket_btn_block")
                                .click();
                        }
                    }
                } else if (
                    document.querySelector(
                        ".sidebar_outer.sidebar_outer_active"
                    ) == null &&
                    INC.config.pageType == "pdp"
                ) {
                    INC.methods.showSidebar();
                    INC.config.pdpaddedProductList = [];
                    INC.config.pdpaddedProductList.push(productObj.childsku);
                    INC.dataStore.bundleCartProducts = {};
                    INC.dataStore.bundleCartProducts[productObj.id] = qty;
                    INC.methods.updateSidebarBlock();
                   if( document
                    .querySelector(".inc_recommended_tabs_list_item_block")!= null){
                        document
                        .querySelector(".inc_recommended_tabs_list_item_block")
                        .click();
                    }else{
                        window.location.href='https://ukmedi.co.uk/cart.php'
                    }
                    productBlock.remove();
                    INC.config.pdpaddedProductList.push(productObj.childsku);
                }
                return;
            },
        });
        function removecartfn() {
            
            INC.methods.createSidebarBlock();
        }
        function appendtocart(data) {
            var dataelm = document.createElement("div");
            dataelm.innerHTML = data;
            var elmim = dataelm.querySelectorAll(".mini-cart-image img");
            
        }

        function addsuccess_(btn_t, addbtnt, addedprdblock) {
            INC.config.disablebtn = true;
            addbtnt.innerText = "Added To Bag";
            btn_t.innerText = "Added To Bag";
            if (newbtntext != undefined) {
                newbtntext.innerHTML = "Added To Bag";
            }
            if (INC.config.pageType == "cartPage") {
                if (document.querySelector(".cart-item.product") != null) {
                    INC.clientConfig.offset = 0;
                    INC.clientConfig.slidevalue = 0;
                    INC.init();
                }
            }
            var call_addprodtosidebar = false;

            if (
                INC.config.pageType != "cartPage" &&
                !INC.config.recommendation &&
                !rec_type
            ) {
                call_addprodtosidebar = true;
            } else {
                if (
                    INC.config.pageType != "cartPage" &&
                    document.querySelector(
                        ".sidebar_outer.sidebar_outer_active"
                    ) != null
                ) {
                    call_addprodtosidebar = true;
                }
            }
            if (call_addprodtosidebar == trueflag) {
                INC.methods.addProductToSidebarCart(
                    findObj,
                    1,
                    productBlock,
                    null,
                    btn_addtocart
                );
            }

            if (INC.config.pageType == "cartPage") {
                if (
                    document.querySelector(
                        ".inc_product_modal_block.inc_active"
                    ) != null
                ) {
                    document
                        .querySelector(".inc_product_modal_block.inc_active")
                        .classList.remove("inc_active");
                }
                addedprdblock.querySelector(
                    ".inc_product_desc_add_text"
                ).innerText = "Added";
                setTimeout(function () {
                    if (addedprdblock != null) {
                        addedprdblock.parentNode.removeChild(addedprdblock);
                    }
                }, 500);
                setTimeout(function () {
                    window.location.reload();
                }, 2000);

                if (
                    document.querySelector(
                        ".inc_recommended_tabs_list_item_block"
                    ) != null
                ) {
                    document
                        .querySelector(".inc_recommended_tabs_list_item_block")
                        .click();
                }
                document.querySelector("html").classList.remove("inc_overlay");
            }

            setTimeout(function () {
                addbtnt.innerText = "Add To Bag";
                Array.prototype.forEach.call(addbtnt, function (el) {
                    el.innerText = "Add";
                });
                if (btn_t != undefined) {
                    if (btn_t.parentNode.parentNode != null) {
                        btn_t.parentNode.parentNode.setAttribute(
                            "style",
                            "pointer-events: auto;opacity: 1;"
                        );
                    }
                }
                INC.config.disablebtn = true;
            }, 3000);
        }
        document.querySelector("body").classList.remove("inc_popup_open");
        var pageType = "";
        switch (INC.config.pageType) {
            case "pdp":
                pageType = "107";
                break;
            case "productList":
                pageType = "101";
                break;
            case "cartPage":
                pageType = "103";
                break;
            case "other":
                pageType = "101";
                break;
        }
        setTimeout(function () {
            if (INC.config.pageType == "cartPage") {
                if (btn_addtocart.innerText == "Adding To Basket") {
                    add_btn_click.innerText = "Added To Bag";
                    btn_addtocart.innerText = "Added To Bag";
                    if (newbtntext != undefined) {
                        newbtntext.innerHTML = "Added To Bag";
                    }
                }
                if (
                    document.querySelector(
                        ".inc_product_modal_block.inc_active"
                    ) != null
                ) {
                    document
                        .querySelector(".inc_product_modal_block.inc_active")
                        .classList.remove("inc_active");
                }

                document.querySelector("html").classList.remove("inc_overlay");
                setTimeout(() => {
                    window.location.replace("https://ukmedi.co.uk/cart.php");
                }, 1500);
            }
        }, 3000);
        var eventDataObj = {};
        if (
            INC.config.pageType == "pdp" &&
            window.innerWidth > 820 &&
            !productBlock.parentNode.classList.contains(
                "inc_recommended_products_list_block"
            )
        ) {
            pageType = "100";
        } else if (
            window.innerWidth <= 820 &&
            document.querySelector(".inc_sidebar_modal_block.inc_active") ==
                null &&
            INC.config.pageType == "pdp"
        ) {
            pageType = "100";
        }
        if (
            document.querySelector(".inc_sidebar_modal_block.inc_active") !=
                null &&
            INC.config.pageType != "productList"
        ) {
            pageType = "107";
        }
        if (
            (INC.config.recommendation == falseflag &&
                rec_type != trueflag &&
                productObj.bundleId == "undefined") ||
            productObj.bundleId == undefined
        ) {
            var eventdata__ = {
                core_product_id: INC.config.Product_id,
                product_id: productObj.mainId,
            };
            if (oosStatus) {
                var rpt = "1";
            } else {
                var rpt = "4";
            }
            var data__ = {
                eventData: btoa(
                    JSON.stringify({
                        event_data: eventdata__,
                        page_type: pageType,
                        event_type: "bestseller_add_to_cart",
                        method: "track",
                        platform: "",
                        rt: "8",
                        rpt: rpt,
                        token: INC.config.clientToken,
                    })
                ),
                vid: readCookie("ivid"),
                time: getCurrentFormattedTime(),
                uri: document.location.href,
            };
            makeTrackingApiCall(JSON.stringify(data__));
        } else {
            if (INC.config.pageType == "cartPage") {
                eventDataObj["bundle_data"] = {
                    id: productObj.bundleId,
                    product_ids: [
                        productObj.bundledProductId,
                        productObj.mainId,
                    ],
                    product_id: productObj.mainId,
                };
            } else {
                eventDataObj["bundle_data"] = {
                    id: productObj.bundleId,
                    product_ids: [
                        productObj.bundledProductId,
                        productObj.mainId,
                    ],
                    product_id: productObj.bundledProductId,
                };
            }
            INC.methods.trackingEvents(
                "bundleAddToCart",
                eventDataObj,
                pageType
            );
        }
    };

    function checkTabEmpty(len_) {
        var allprd_ = document.querySelectorAll(
            ".inc_recommended_products_list_block .inc_product_module_block"
        ).length;
        if (
            document.querySelector(
                ".inc_recommended_products_list_block .inc_product_module_block"
            ) == null ||
            (allprd_ == 1 &&
                document.querySelector(".sidebar_outer.sidebar_outer_active") !=
                    null) ||
            len_ == 1
        ) {
            if (
                document.querySelector(
                    ".inc_recommended_tabs_list_item_block.inc_active"
                ) != null
            ) {
                var remcat_ = document.querySelector(
                    ".inc_recommended_tabs_list_item_block.inc_active"
                );
                if (
                    document.querySelector(
                        ".inc_recommended_tabs_list_item_block.inc_active"
                    ) != null
                ) {
                    document
                        .querySelector(
                            ".inc_recommended_tabs_list_item_block.inc_active"
                        )
                        .parentNode.removeChild(remcat_);

                    if (
                        document.querySelector(".inc_recommended_tabs_block")
                            .innerText == ""
                    ) {
                        document.querySelector(
                            ".inc_recommended_products_block"
                        ).innerHTML = "";
                        window.location.replace(
                            "https://ukmedi.co.uk/cart.php"
                        );
                        return;
                    }
                    if (
                        document.querySelector(
                            ".inc_recommended_tabs_list_item_block"
                        ) != null
                    ) {
                        document
                            .querySelector(
                                ".inc_recommended_tabs_list_item_block"
                            )
                            .click();
                    }
                }
            }
        }
    }
    INC.methods.addBundleToCart = function (btn_cart, recsType) {
        INC.clientConfig.OOS = [];
        var dataStore = INC.dataStore;
        var mainProductId = document
            .querySelector(
                ".inc_pdp_product-main_block .inc_product_module_block"
            )
            .getAttribute("data-main_id");
        var formData = [];
        var url_add = [];
        var count_pr_to_add = 0;
        var total_length = Object.keys(dataStore.bundleCartProducts);
        Object.keys(dataStore.bundleCartProducts).forEach(function (
            bundleCartProduct
        ) {
            var findObj = new INC.classes.FindObj({
                id: bundleCartProduct,
            });
            addedProductIndex.push(
                document
                    .querySelector(
                        '.inc_product_module_block[data-sku="' +
                            bundleCartProduct +
                            '"]'
                    )
                    .getAttribute("b-index")
            );
            if (
                document.querySelector(
                    ".product-add-to-cart .flits-wishlist-product-page #flits-wsl-token"
                ) != null
            ) {
                var token = document.querySelector(
                    ".product-add-to-cart .flits-wishlist-product-page #flits-wsl-token"
                ).value;
            }
            var productObj = INC.dataStore.methods().getProductById(findObj);
            var qty = INC.dataStore.bundleCartProducts[bundleCartProduct];
            var addProductURL = INC.config.addToBasketURL;
            var params = "";

            if (productObj.ProductType == "configurable") {
                var param_ =
                    "action=add&product+id=" +
                    productObj.mainId +
                    "&qty%5B%5D=" +
                    qty +
                    "";

                param_ =
                        param_ +
                        "&attribute[" +
                        productObj.option[0].att_id +
                        "]=" +
                        productObj.option[0].opt_id +
                        "";
                formData.push(param_);
            } else {
                params = {
                    action: "add",
                    "product id": productObj.mainId,
                    "qty[]": qty,
                };
                // params[opt__Id] = productObj.optId;
                formData.push(params);
            }
            count_pr_to_add++;
            if (total_length.length == count_pr_to_add) {
                url_add = INC.config.addToBasketURL;
                ajax_add_to_cart(formData, url_add, btn_cart, recsType);
            }
        });

        add_to_cart_tracking_multiple(mainProductId);
    };
    function ajax_add_to_cart(formData, url_add, btn_cart, recsType) {
        INC.clientConfig.OOS = [];
        INC.clientConfig.OOS_MESG = [];

        function suc1(btn_ca, data) {
            if (formData[1] == undefined) {
                loadsidebarajax(btn_ca, recsType);
            }
            if (formData[1] != undefined) {
                callprodB();
            }
        }

        function suc2(btn_ca, data) {
            if (formData[2] == undefined) {
                loadsidebarajax(btn_ca, recsType);
            }
            if (formData[2] != undefined) {
                callprodC();
            }
        }

        function suc3(btn_ca, data) {
            if (formData[3] == undefined) {
                loadsidebarajax(btn_ca, recsType);
            }
            if (formData[3] != undefined) {
                callprodD();
            }
        }

        function suc4(btn_ca) {
            if (formData[4] == undefined) {
                loadsidebarajax(btn_ca, recsType);
            }
            if (formData[4] != undefined) {
                callprodE();
            }
        }

        function suc5(btn_ca) {
            if (formData[5] == undefined) {
                loadsidebarajax(btn_ca, recsType);
            }
            if (formData[5] != undefined) {
                callprodF();
            }
        }

        callprodA();
        function removecartfn() {
            var elm = document.querySelectorAll(".minicart-remove-button");
            
        }
        function appendtocart(data) {
            var dataelm = document.createElement("div");
            dataelm.innerHTML = data;
            var elmim = dataelm.querySelectorAll(".mini-cart-image img");
            for (var e of elmim) {
                e.src = e.getAttribute("data-src");
            }
            if (document.querySelector(".mini-cart-product") != null) {
                document.querySelector(
                    "#mini-cart .mini-cart-content"
                ).innerHTML =
                    dataelm.querySelector(".mini-cart-content").innerHTML;
                document
                    .querySelector("#mini-cart .mini-cart-label")
                    .classList.add("active-cart");
                document
                    .querySelector("#mini-cart .mini-cart-content")
                    .classList.add("open-cart");
                removecartfn();
            } else {
                localStorage.setItem("inc_added_refresh", "1");
                if (window.innerWidth >= 820) {
                    window.location.reload();
                }
            }
        }
        function callprodA() {
            window.jQuery.ajax({
                type: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Accept: "*/*",
                },
                url: url_add,
                data: formData[0],
                success: function (data_re) {
                    if (data_re.backUrl != undefined) {
                        prod_qty_notinstock(formData[0]);
                    }
                    suc1(btn_cart, data_re);
                },
                error: function (resp) {
                    if (resp.responseJSON != undefined) {
                        if (
                            resp.responseJSON.status == 422 ||
                            resp.responseJSON.status == 500
                        ) {
                            prod_qty_notinstock(resp.responseJSON, formData[0]);
                        }
                    }
                    suc1(btn_cart);
                },
            });
        }

        function callprodB() {
            window.jQuery.ajax({
                type: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Accept: "*/*",
                },
                url: url_add,
                data: formData[1],
                success: function (res) {
                    if (res.backUrl != undefined) {
                        prod_qty_notinstock(formData[1]);
                    }
                    suc2(btn_cart, res);
                },
                error: function (resp2) {
                    if (resp2.responseJSON != undefined) {
                        if (
                            resp2.responseJSON.status == 422 ||
                            resp2.responseJSON.status == 500
                        ) {
                            prod_qty_notinstock(
                                resp2.responseJSON,
                                formData[1]
                            );
                        }
                    }
                    suc2(btn_cart);
                },
            });
        }

        function callprodC() {
            window.jQuery.ajax({
                type: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Accept: "*/*",
                },
                url: url_add,
                data: formData[2],
                success: function (res2) {
                    if (res2.backUrl != undefined) {
                        prod_qty_notinstock(formData[2]);
                    }
                    suc3(btn_cart, res2);
                },
                error: function (resp3) {
                    if (resp3.responseJSON != undefined) {
                        if (
                            resp3.responseJSON.status == 422 ||
                            resp3.responseJSON.status == 500
                        ) {
                            prod_qty_notinstock(
                                resp3.responseJSON,
                                formData[2]
                            );
                        }
                    }
                    suc3(btn_cart);
                },
            });
        }

        function callprodD() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add[3],
                data: formData[3],
                async: true,
                dataType: "json",
                success: function (res3) {
                    if (res3.backUrl != undefined) {
                        prod_qty_notinstock(formData[3]);
                    }
                    suc4(btn_cart);
                },
                error: function (resp4) {
                    if (resp4.responseJSON != undefined) {
                        if (
                            resp4.responseJSON.status == 422 ||
                            resp4.responseJSON.status == 500
                        ) {
                            prod_qty_notinstock(
                                resp4.responseJSON,
                                formData[3]
                            );
                        }
                    }
                    suc4(btn_cart);
                },
            });
        }

        function callprodE() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add,
                data: formData[4],
                async: true,
                dataType: "json",
                success: function (res4) {
                    if (res4.backUrl != undefined) {
                        prod_qty_notinstock(formData[4]);
                    }
                    suc5(btn_cart);
                },
                error: function (resp5) {
                    if (resp5.responseJSON != undefined) {
                        if (
                            resp5.responseJSON.status == 422 ||
                            resp5.responseJSON.status == 500
                        ) {
                            prod_qty_notinstock(
                                resp5.responseJSON,
                                formData[4]
                            );
                        }
                    }
                    suc5(btn_cart);
                },
            });
        }

        function callprodF() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add,
                data: formData[5],
                async: true,
                dataType: "json",
                success: function (res5) {
                    if (res5.backUrl != undefined) {
                        prod_qty_notinstock(formData[5]);
                    }
                    loadsidebarajax(btn_cart, recsType);
                },
                error: function (resp6) {
                    if (resp6.responseJSON != undefined) {
                        if (
                            resp6.responseJSON.status == 422 ||
                            resp6.responseJSON.status == 500
                        ) {
                            prod_qty_notinstock(
                                resp6.responseJSON,
                                formData[5]
                            );
                        }
                    }
                    loadsidebarajax(btn_cart);
                },
            });
        }
    }

    function prod_qty_notinstock(formd, formData) {
        INC.clientConfig.OOS = [];
        INC.clientConfig.OOS_MESG = [];

        var ajaxmainid = formData.split("&id=")[1].split("&")[0];
        INC.clientConfig.OOS.push(ajaxmainid);
        INC.clientConfig.OOS_MESG.push(formd.description);
    }

    function loadsidebarajax(btn_cart, rec_type) {
        INC.config.disablebtn = true;
        if (btn_cart != undefined) {
            btn_cart.classList.remove("inc_loading");
        }
        if (
            document.querySelector(
                ".inc_pdp_bundle_cart_summary_add_btn_block.inc_loading"
            ) != null
        ) {
            document
                .querySelector(
                    ".inc_pdp_bundle_cart_summary_add_btn_block.inc_loading"
                )
                .classList.remove("inc_loading");
        }

        if (INC.config.recommendation == falseflag && rec_type == falseflag) {
            if (
                document.querySelector(".sidebar_outer.sidebar_outer_active") ==
                null
            ) {
                checkAddedProductInJustAdded();
                INC.methods.showSidebar();
                INC.methods.updateSidebarBlock();
            }
        }
    }

    function checkAddedProductInJustAdded() {
        var addCheckCategory = INC.config.pdpaddedProductList;
        var productListArrayprod = INC.dataStore.bundleProductsArray;
        var categoryList = INC.dataStore.methods().getUniqueCatergories();
        for (var catlist in categoryList) {
            var count = 0;
            for (var prd in productListArrayprod) {
                var firstProductObjByMainId = INC.dataStore
                    .methods()
                    .getFirstProductObjByMainId({
                        mainId: productListArrayprod[prd],
                    });
                if (
                    firstProductObjByMainId["categoryName"] ==
                    categoryList[catlist]
                ) {
                    if (
                        addCheckCategory.indexOf(productListArrayprod[prd]) ==
                        -1
                    ) {
                        count++;
                    }
                }
            }

            if (count == 0) {
                var titleel = categoryList[catlist];
                var eltablist = document.querySelectorAll(
                    ".inc_recommended_tabs_list_item_block"
                );
                if (eltablist != null) {
                    for (const element of eltablist) {
                        var titleText = element.getAttribute("title");
                        if (titleText == titleel) {
                            if (element != null) {
                                element.parentNode.removeChild(element);
                            }
                        }
                    }
                }
            }
        }
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;

        if (
            document.querySelector(".inc_recommended_tabs_list_item_block") !=
            null
        ) {
            document
                .querySelector(".inc_recommended_tabs_list_item_block")
                .click();
            if (
                document.querySelector(
                    ".inc_recommended_products_list_block .inc_product_module_block"
                ) == null
            ) {
                var remcateg = document.querySelector(
                    ".inc_recommended_tabs_list_item_block.inc_active"
                );
                if (remcateg != null) {
                    remcateg.parentNode.removeChild(remcateg);
                }
            }
        }
        if (
            document.querySelector(
                ".inc_recommended_tabs_list_item_block.inc_active"
            ) == null
        ) {
            if (
                document.querySelector(
                    ".inc_recommended_tabs_list_item_block"
                ) != null
            ) {
                document
                    .querySelector(".inc_recommended_tabs_list_item_block")
                    .click();
            }
        }
    }

    function add_to_cart_tracking_multiple(mainProductId) {
        var event_type = "bundle_add_to_cart";
        var core_prod_id = "";
        var productIdsforTracking = [];
        core_prod_id = mainProductId;

        var pageType = "100";
        var all_data = [];
        var bundlpos = "";
        for (var tc in INC.config.bundle_tracking) {
            if (INC.config.bundle_tracking.length == 1) {
                productIdsforTracking.push(mainProductId);
                productIdsforTracking.push(INC.config.bundle_tracking[tc].id);
                if (
                    document.querySelector(
                        '.inc_pdp_block .inc_product_module_block[data-main_id="' +
                            INC.config.bundle_tracking[tc].id +
                            '"]'
                    ) != null
                ) {
                    bundlpos = document
                        .querySelector(
                            '.inc_pdp_block .inc_product_module_block[data-main_id="' +
                                INC.config.bundle_tracking[tc].id +
                                '"]'
                        )
                        .getAttribute("b-index");
                } else if (
                    document.querySelector(
                        '.inc_pdp_block .inc_product_module_block[data-sku="' +
                            INC.config.bundle_tracking[tc].id +
                            '"]'
                    ) != null
                ) {
                    bundlpos = document
                        .querySelector(
                            '.inc_pdp_block .inc_product_module_block[data-sku="' +
                                INC.config.bundle_tracking[tc].id +
                                '"]'
                        )
                        .getAttribute("b-index");
                }
                all_data.push({
                    id: parseInt(INC.config.bundle_tracking[tc].bid),
                    product_ids: productIdsforTracking,
                    product_id: core_prod_id,
                    bundle_pos: bundlpos,
                });
                productIdsforTracking = [];
            } else {
                if (mainProductId != INC.config.bundle_tracking[tc].id) {
                    productIdsforTracking.push(mainProductId);
                    productIdsforTracking.push(
                        INC.config.bundle_tracking[tc].id
                    );
                    if (
                        document.querySelector(
                            '.inc_pdp_block .inc_product_module_block[data-main_id="' +
                                INC.config.bundle_tracking[tc].id +
                                '"]'
                        ) != null
                    ) {
                        bundlpos = document
                            .querySelector(
                                '.inc_pdp_block .inc_product_module_block[data-main_id="' +
                                    INC.config.bundle_tracking[tc].id +
                                    '"]'
                            )
                            .getAttribute("b-index");
                    } else if (
                        document.querySelector(
                            '.inc_pdp_block .inc_product_module_block[data-sku="' +
                                INC.config.bundle_tracking[tc].id +
                                '"]'
                        ) != null
                    ) {
                        bundlpos = document
                            .querySelector(
                                '.inc_pdp_block .inc_product_module_block[data-sku="' +
                                    INC.config.bundle_tracking[tc].id +
                                    '"]'
                            )
                            .getAttribute("b-index");
                    }
                    all_data.push({
                        id: parseInt(INC.config.bundle_tracking[tc].bid),
                        product_ids: productIdsforTracking,
                        product_id: core_prod_id,
                        bundle_pos: bundlpos,
                    });
                    productIdsforTracking = [];
                }
            }
        }
    }

    function makeTrackingApiCall(eventdata) {
        var p_url = "https://optimizedby.increasingly.co/ImportData";
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {
                    var resul = xhr.responseText;
                    console.log("track" + resul);
                }
            }
        };
        xhr.open("POST", p_url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(eventdata);
    }

    function getCurrentFormattedTime() {
        var d = new Date();
        return (
            d.getFullYear() +
            "-" +
            (d.getMonth() + 1) +
            "-" +
            d.getDate() +
            " " +
            d.getHours() +
            ":" +
            d.getMinutes() +
            ":" +
            d.getSeconds() +
            "." +
            d.getMilliseconds()
        );
    }
    INC.methods.trackingEvents = function (
        eventType,
        eventDataObj,
        pageType,
        rec_type
    ) {
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
                if (oosStatus) {
                    var rpt = "1";
                } else {
                    var rpt = "4";
                }
                importEventDataObj["event_type"] =
                    "bundle_product_click_tracking";
                importEventDataObj["page_type"] = pageType;
                if (rec_type == trueflag && INC.config.pageType == "pdp") {
                    importEventDataObj["rt"] = "8";
                    importEventDataObj["rpt"] = rpt;
                }
                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";
                if (rec_type != true) {
                    if (pageType == "100") {
                        if (
                            document.querySelectorAll(
                                ".inc_pdp_block .inc_product_module_block"
                            )[0] != undefined
                        ) {
                            var bundlec = document.querySelectorAll(
                                ".inc_pdp_bundle_product_list_main_block .inc_product_module_block"
                            ).length;
                            importEventDataObj["db"] = bundlec.toString();
                        }
                    }
                }
                break;
            case "bundleAddToCart":
                importEventDataObj["event_type"] = "bundle_add_to_cart";
                importEventDataObj["page_type"] = pageType;
                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";
                if (pageType == "100") {
                    if (
                        document.querySelectorAll(
                            ".inc_pdp_block .inc_product_module_block"
                        )[0] != undefined
                    ) {
                        var bundlec_ = document.querySelectorAll(
                            ".inc_pdp_bundle_product_list_main_block .inc_product_module_block"
                        ).length;
                        var bundleShown = bundlec_.toString();
                        importEventDataObj["db"] = bundleShown;
                    }
                }
                break;
        }

        importEventDataObj["platform"] = "";
        importEventDataObj["token"] = INC.config.clientToken;
        importDataObj["eventData"] = btoa(JSON.stringify(importEventDataObj));
        importDataObj["uri"] = window.location.href;
        importDataObj["vid"] = INC.config.ivid;
        INC.methods.sendTrackingEvents(importDataObj);
    };
    INC.methods.sendTrackingEvents = function (importDataObj) {
        var xhr = new XMLHttpRequest();
        var method = "POST";
        var url = INC.config.trackingURL;
        xhr.onreadystatechange = handleStateChange;

        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        function handleStateChange() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.readyState);
            }
        }

        xhr.send(JSON.stringify(importDataObj));
    };
    INC.methods.addVisitorID = function () {
        function generateUniqueINCVisitorId(len, bits) {
            var bits1 = bits || 36;
            var outStr = "";
            var newStr;
            while (outStr.length < len) {
                newStr = generateRandomString(bits1).toString().slice(2);
                outStr += newStr.slice(
                    0,
                    Math.min(newStr.length, len - outStr.length)
                );
            }
            return outStr;
        }
        var ivid = "";
        if (readCookie("ivid") != undefined) {
            ivid = readCookie("ivid");
        }
        var clientdomain = window.location.host;
        var arr = clientdomain.split(".");
        var d = new Date();
        var expires = "expires=" + d.toUTCString();
        if (ivid.length == 0) {
            ivid = generateUniqueINCVisitorId(42, 16);
            arr.shift();
            clientdomain = arr.join(".");
            if (arr == "com") {
                clientdomain = window.location.host;
            }
            d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
            expires = "expires=" + d.toUTCString();
            document.cookie =
                "ivid=" +
                ivid +
                "; expires=" +
                expires +
                "; domain=" +
                clientdomain +
                "; path=/" +
                "; secure;";
        } else {
            arr.shift();
            clientdomain = arr.join(".");
            if (arr == "com") {
                clientdomain = window.location.host;
            }
            d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
            expires = "expires=" + d.toUTCString();
            document.cookie =
                "ivid=" +
                ivid +
                "; expires=" +
                expires +
                "; domain=" +
                clientdomain +
                "; path=/" +
                "; secure;";
        }
        INC.config.ivid = ivid;
        console.log(ivid);
        return ivid;
    };
    document.onclick = clickListener;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function clickListener(e) {
        var clickedElement = e.target;
        if (clickedElement != null) {
            try {
                if (
                    window.innerWidth <= 1205 &&
                    clickedElement.classList.contains("maskLayer")
                ) {
                }
                if (
                    clickedElement.classList.contains("form-option-wrapper") ||
                    (clickedElement.parentNode != null &&
                        clickedElement.parentNode.classList.contains(
                            "form-option-wrapper"
                        ))
                ) {
                    if (
                        clickedElement.parentNode.querySelector("input").checked
                    ) {
                        var clEle = clickedElement.parentNode;
                        var selValue =
                            clickedElement.parentNode.querySelector(
                                "span"
                            ).innerText;
                        var bundleavailblk = document.querySelector(
                            ".inc_bundle_avail_block"
                        );
                        var qry =
                            ".inc_pdp_block .inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_block [title='" +
                            selValue.toUpperCase() +
                            "']";
                        if (clickedElement.parentNode != null) {
                            if (
                                clickedElement.parentNode.querySelector(
                                    ".unavailable"
                                ) != null
                            ) {
                                if (
                                    document.querySelector(".inc_pdp_block") !=
                                    null
                                ) {
                                    document.querySelector(
                                        ".inc_pdp_block"
                                    ).style.display = "none";
                                }
                            } else {
                                if (document.querySelector(qry) != null) {
                                    if (
                                        document.querySelector(
                                            ".inc_pdp_block"
                                        ) != null
                                    ) {
                                        document.querySelector(
                                            ".inc_pdp_block"
                                        ).style.display = "";
                                    }
                                    document.querySelector(qry).click();
                                }
                            }
                        }

                        // if (bundleavailblk != null) {
                        //     var siblingClass = document.querySelector('.inc_bundle_avail_block').nextElementSibling.classList
                        //     setTimeout(function () {
                        //         var siblingEle = document.querySelector('.' + siblingClass[0] + "." + siblingClass[1])
                        //         siblingEle.parentNode.insertBefore(bundleavailblk, siblingEle)
                        //         bundleavailblk.style.display = 'none'
                        //         document.querySelector('.inc_pdp_block').style.display = 'none'
                        //         document.querySelector('.inc_af_block ').style.display = ''
                        //         oosStatus = trueflag

                        //     }, 4000)
                        //}
                    }
                    //else {
                    //     var addCartStatus = true
                    //     if (clickedElement.tagName == 'IMG') {
                    //         addCartStatus = false
                    //     }
                    //     var bundleavailblk = document.querySelector('.inc_bundle_avail_block')
                    //     if (bundleavailblk != null) {
                    //         var siblingClass = document.querySelector('.inc_bundle_avail_block').nextElementSibling.classList
                    //         setTimeout(function () {
                    //             if (siblingClass[1] != undefined) {
                    //                 var siblingEle = document.querySelector('.' + siblingClass[0] + "." + siblingClass[1])
                    //             } else {
                    //                 var siblingEle = document.querySelector('.' + siblingClass[0])
                    //             }

                    //             siblingEle.parentNode.insertBefore(bundleavailblk, siblingEle)
                    //             if (document.querySelector('.pdpForm button') != null) {
                    //                 bundleavailblk.style.display = ''
                    //                 document.querySelector('.inc_pdp_block').style.display = ''
                    //                 document.querySelector('.inc_af_block ').style.display = 'none'
                    //                 oosStatus = falseflag
                    //                 var selectedSwatch = document.querySelectorAll('.swatches .selected a')
                    //                 for (var s = 0; s < selectedSwatch.length; s++) {
                    //                     var sswatch = selectedSwatch[s].title
                    //                     var fbtEleSize = document.querySelectorAll('.inc_pdp_block .inc_product_modal_block .inc_product_desc_att_block [data-size="' + sswatch + '"]')
                    //                     for (let fbtEleS_=0;fbtEleS_<fbtEleSize.length;fbtEleS_++) {
                    //                         fbtEleSize[fbtEleS_].click()
                    //                     }
                    //                     var fbtEleColor = document.querySelectorAll('.inc_pdp_block .inc_product_modal_block .inc_product_desc_att_block [data-color="' + sswatch + '"]')
                    //                     for (var fbtEleC_=0;fbtEleC_<fbtEleColor.length;fbtEleC_++) {
                    //                         fbtEleColor[fbtEleC_].click()
                    //                     }
                    //                 }
                    //             }
                    //             if (window.innerWidth < 820 && addCartStatus) {
                    //                 var findObj = new INC.classes.FindObj();
                    //                 var p_ids = INC.methods.getProductIdFromWebPage()
                    //                 findObj["id"] = INC.dataStore.methods().getFirstProductObjByMainId({
                    //                     mainId: p_ids
                    //                 }).id;
                    //                 var elPDP = document.querySelector('.wrapper-product-image-container')
                    //                 INC.methods.addProductToSidebarCart(findObj, "client_add_btn", null, null, elPDP);
                    //                 INC.methods.showSidebar("clientBtn");
                    //                 checkAddedProductInJustAdded()
                    //             }
                    //         }, 4000)
                    //     }
                    // }
                }
                if (
                    clickedElement.id == "form-action-addToCart" &&
                    document.querySelector(".inc_sidebar_modal_block") != null
                ) {
                    INC.config.pdpaddedProductList=[]
                    INC.config.pdpaddedProductList.push(INC.methods.getProductIdFromWebPage())
                    var attrArray = document.querySelectorAll(
                        ".productView-options-inner .form-field .form-radio"
                    );
                    var attCounter = 0;
                    for (var att of attrArray) {
                        if (att.checked == trueflag) {
                            attCounter++;
                        }
                    }
                    if (
                        document.querySelectorAll(
                            ".productView-options-inner .form-field"
                        ).length != attCounter
                    ) {
                        return;
                    }
                    let findObj = new INC.classes.FindObj();
                    let p_ids = INC.methods.getProductIdFromWebPage();
                    findObj["id"] = INC.dataStore
                        .methods()
                        .getFirstProductObjByMainId({
                            mainId: p_ids,
                        }).id;
                    let elPDP = document.querySelector(".productView");
                    INC.methods.addProductToSidebarCart(
                        findObj,
                        "client_add_btn",
                        null,
                        null,
                        elPDP
                    );
                    INC.methods.showSidebar("clientBtn");
                    checkAddedProductInJustAdded();
                }
                if (
                    clickedElement.className ==
                        "inc_product_modal_block inc_active" ||
                    clickedElement.className ==
                        "inc_product_modal_block inc_mini_modal inc_active"
                ) {
                    document
                        .querySelector("body")
                        .classList.remove("inc_popup_open");
                    if (
                        document.querySelector(
                            ".inc_sidebar_modal_block.inc_active"
                        ) == null
                    ) {
                        document
                            .querySelector("html")
                            .classList.remove("inc_overlay");
                        document
                            .querySelector("html")
                            .classList.remove("inc_popup_open");
                    } else {
                        document
                            .querySelector("html")
                            .classList.remove("inc_popup_open");
                    }
                    clickedElement
                        .querySelector(".inc_product_header_title_block")
                        .classList.add("inc_active");
                    clickedElement
                        .querySelector(".inc_product_header_title_block_1")
                        .classList.remove("inc_active");
                    clickedElement.classList.remove("inc_active");
                }
                if (INC.config.pageType == "cartPage") {
                    if (clickedElement.className != "mfp-close") {
                        if (
                            clickedElement.className == "close" ||
                            clickedElement.parentNode.parentNode.className ==
                                "close"
                        ) {
                            setTimeout(function () {
                                if (
                                    document.querySelectorAll(
                                        ".container .cart__item-list .cart__card"
                                    ).length == 0
                                ) {
                                    if (
                                        document.querySelector(
                                            ".inc_af_block"
                                        ) != null
                                    ) {
                                        document.querySelector(
                                            ".inc_af_block"
                                        ).style.display = "none";
                                    }
                                }
                            }, 3500);
                        }
                    }
                }
                if (
                    clickedElement.classList.contains("quick_view_open") ==
                    trueflag
                ) {
                    if (
                        document.querySelector(
                            ".inc_details_mobile_quick_view.quick_view_active"
                        ) != null
                    ) {
                        document
                            .querySelector(
                                ".inc_details_mobile_quick_view.quick_view_active .prod_quick_view_close"
                            )
                            .click();
                    }
                }
                if (clickedElement.className == "inc_empty_popup") {
                    if (
                        document.querySelector(
                            ".inc_product_modal_block.inc_active"
                        ) == null &&
                        document.querySelector(
                            ".inc_sidebar_modal_block.inc_active"
                        ) == null
                    ) {
                        document
                            .querySelector("html")
                            .classList.remove("inc_overlay");
                        document
                            .querySelector("html")
                            .classList.remove("inc_popup_open");
                    }
                    if (
                        clickedElement.parentNode
                            .querySelector(".inc_product_desc_att_block")
                            .classList.contains("inc_active")
                    ) {
                        clickedElement.parentNode
                            .querySelector(".inc_product_desc_att_block")
                            .classList.remove("inc_active");
                    }
                }
                if (
                    clickedElement.className ==
                        "inc_product_block configurable show_overlay" ||
                    clickedElement.className ==
                        "inc_product_block configurable inc_other_noimage show_overlay"
                ) {
                    if (
                        clickedElement.parentNode
                            .querySelector(".inc_product_desc_att_block")
                            .classList.contains("inc_active")
                    ) {
                        clickedElement.parentNode
                            .querySelector(".inc_product_desc_att_block")
                            .classList.remove("inc_active");
                        document
                            .querySelector("html")
                            .classList.remove("inc_overlay");
                        document.querySelector("body").style.position =
                            "relative";
                        document.querySelector("body").style.overflow = "auto";
                        document
                            .querySelector(
                                ".inc_product_block.configurable.show_overlay"
                            )
                            .classList.remove("show_overlay");
                    }
                }
                if (
                    document.querySelector(
                        ".inc_product_modal_block.inc_active"
                    ) != null
                ) {
                    if (
                        clickedElement.parentNode.classList ==
                            "inc_product_desc_att_color_list_item_img" ||
                        clickedElement.classList ==
                            "inc_product_desc_att_color_list_item_img" ||
                        clickedElement.parentNode.classList ==
                            "inc_product_desc_att_zero_list_block" ||
                        clickedElement.classList ==
                            "inc_product_desc_att_zero_list_block"
                    ) {
                        if (
                            document.querySelector(
                                ".inc_product_desc_att_block .show_dropdown"
                            ) != null
                        ) {
                            document
                                .querySelector(
                                    ".inc_product_desc_att_block .show_dropdown"
                                )
                                .classList.remove("show_dropdown");
                        }
                    }
                }

                if (INC.config.pageType == "pdp") {
                    if (
                        clickedElement.classList.contains(
                            "size-element-to-toggle"
                        ) &&
                        window.innerWidth < 820
                    ) {
                        if (document.querySelector(".inc_pdp_block") != null) {
                            if (!document.querySelector(".inc_pdp_block")) {
                                return;
                            }
                            if (
                                document.querySelector(".inc_pdp_block").style
                                    .display == "none"
                            ) {
                                return;
                            }
                        }
                        if (INC.config.pageType == "cartPage") return;
                        var findObj = new INC.classes.FindObj();
                        var p_ids = INC.methods.getProductIdFromWebPage();
                        findObj["id"] = INC.dataStore
                            .methods()
                            .getFirstProductObjByMainId({
                                mainId: p_ids,
                            }).id;
                        var clientATCFlag = trueflag;
                        if (clientATCFlag == trueflag) {
                            var elPDP = document.querySelector(
                                ".wrapper-product-image-container"
                            );
                            INC.config.pdpaddedProductList = [];
                            INC.config.pdpaddedProductList.push(
                                INC.config.Product_id
                            );
                            INC.clientConfig.OOS = [];
                            INC.clientConfig.OOS_MESG = [];
                            if (
                                document.querySelector(
                                    ".inc_sidebar_modal_block .inc_product_module_block"
                                ) == null
                            ) {
                                if (
                                    document.querySelector(
                                        ".inc_recommended_tabs_list_item_block"
                                    ) != null
                                ) {
                                    document
                                        .querySelector(
                                            ".inc_recommended_tabs_list_item_block"
                                        )
                                        .click();
                                }
                            }
                            INC.methods.addProductToSidebarCart(
                                findObj,
                                "client_add_btn",
                                null,
                                null,
                                elPDP
                            );
                            INC.methods.showSidebar("clientBtn");
                            checkAddedProductInJustAdded();
                        }
                    }
                }

                if (INC.config.pageType == "productList") {
                    if (
                        clickedElement.parentNode.classList.contains(
                            "button--add-to-cart"
                        ) == trueflag ||
                        clickedElement.classList.contains(
                            "button--add-to-cart"
                        ) == trueflag
                    ) {
                        var prd_wrapplp = document.querySelector(
                            ".fancybox-container .js-quick-shop"
                        );
                        plp_modal_pr(prd_wrapplp);
                    }
                }

                if (clickedElement != null) {
                    if (
                        clickedElement.classList ==
                            "inc_product_desc_add_img" &&
                        document.querySelector(
                            ".inc_product_modal_block .inc_product_desc_att_block .show_dropdown"
                        ) != null
                    ) {
                        if (window.innerWidth > 2000) {
                            document
                                .querySelector(
                                    ".inc_product_modal_block .inc_product_desc_att_block .show_dropdown"
                                )
                                .classList.remove("show_dropdown");
                        }
                    }
                    if (clickedElement.className == "inc_product_header_img") {
                        document
                            .querySelector(".inc_product_header_title_block")
                            .classList.add("inc_active");
                        document
                            .querySelector(".inc_product_header_title_block_1")
                            .classList.remove("inc_active");
                        document
                            .querySelector("body")
                            .classList.remove("inc_popup_open");
                    }

                    if (
                        clickedElement.className ==
                        "sidebar_outer sidebar_outer_active"
                    ) {
                        if (
                            document.querySelector(
                                ".inc_header_continue_img"
                            ) != null
                        ) {
                            document
                                .querySelector(".inc_header_continue_img")
                                .click();
                        }
                    }
                    if (clickedElement.className == "close_modal_inc") {
                        if (
                            document.querySelector(
                                ".inc_header_continue_img"
                            ) != null
                        ) {
                            document
                                .querySelector(".inc_header_continue_img")
                                .click();
                        }
                    }
                    if (
                        clickedElement.className ==
                        "inc_pdp_bundle_cart_overlay_block active"
                    ) {
                        document
                            .querySelector(
                                ".inc_pdp_bundle_cart_title_img_block"
                            )
                            .click();
                    }
                    if (
                        clickedElement.className == "inc_promo_popup inc_active"
                    ) {
                        document
                            .querySelector("html")
                            .classList.remove("inc_overlay_promo");
                        clickedElement.classList.remove("inc_active");
                        if (
                            document.querySelector(
                                ".inc_sidebar_modal_block.inc_active"
                            ) != null
                        ) {
                            document
                                .querySelector(
                                    ".inc_sidebar_modal_block.inc_active"
                                )
                                .classList.remove("overflow_visible");
                        }
                    }
                    if (clickedElement.parentNode != null) {
                        if (
                            clickedElement.className !=
                                "inc_product_desc_att_color_title_text_block" &&
                            clickedElement.className !=
                                "inc_product_desc_att_color_title_text_selected" &&
                            clickedElement.parentNode.className !=
                                "inc_product_desc_att_color_title_text_block" &&
                            clickedElement.className !=
                                "inc_product_desc_att_zero_title_text" &&
                            clickedElement.className !=
                                "inc_product_desc_add_block" &&
                            clickedElement.className !=
                                "inc_product_desc_add_text" &&
                            clickedElement.className != "img_color_swatch" &&
                            clickedElement.className !=
                                "inc_product_desc_att_zero_title_text_selected" &&
                            clickedElement.classList.contains(
                                "inc_product_desc_att_color_list_item_img"
                            ) != trueflag &&
                            clickedElement.classList.contains(
                                "inc_product_desc_att_zero_title_text_selected"
                            ) != trueflag &&
                            clickedElement.classList.contains(
                                "inc_product_desc_att_size_title_text_selected"
                            ) != trueflag &&
                            clickedElement.className !=
                                "inc_product_desc_att_third_title_text_selected" &&
                            clickedElement.className !=
                                "inc_product_desc_att_size_title_text_selected" &&
                            clickedElement.className !=
                                "inc_product_desc_att_third_title_text_selected"
                        ) {
                            if (
                                document.querySelector(
                                    ".inc_product_desc_att_block .show_dropdown"
                                ) != null
                            ) {
                                document
                                    .querySelector(
                                        ".inc_product_desc_att_block .show_dropdown"
                                    )
                                    .classList.remove("show_dropdown");
                            }
                        }

                        if (
                            clickedElement.className ==
                                "inc_product_desc_color_list_mobile_overlay_block" ||
                            clickedElement.className ==
                                "inc_product_desc_color_list_header_img" ||
                            clickedElement.className ==
                                "inc_product_desc_colour_list_add_btn" ||
                            clickedElement.className ==
                                "inc_product_desc_att_zero_list_mobile_overlay_block" ||
                            clickedElement.className ==
                                "inc_product_desc_att_zero_list_header_img" ||
                            clickedElement.className ==
                                "inc_product_desc_att_zero_list_add_btn"
                        ) {
                            if (window.innerWidth < 769) {
                                document
                                    .querySelector(
                                        ".inc_product_desc_att_block .show_dropdown"
                                    )
                                    .classList.remove("show_dropdown");
                                document
                                    .querySelector("html")
                                    .classList.remove("inc_overlay");
                                document
                                    .querySelector("body")
                                    .classList.remove("inc_popup_open");
                            }
                        }
                    }
                    if (
                        document.querySelector(
                            ".sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active"
                        ) == null
                    ) {
                        if (
                            document.querySelector(
                                ".inc_sidebar_modal_block.inc_active"
                            ) != null
                        ) {
                            if (
                                document.querySelector(
                                    ".inc_cart_added_product_block.remove_product_conf_modal"
                                ) == null
                            ) {
                                if (
                                    document.querySelector(
                                        ".inc_promo_popup.inc_active"
                                    ) == null
                                ) {
                                    document
                                        .querySelector(
                                            ".inc_sidebar_modal_block.inc_active"
                                        )
                                        .classList.remove("overflow_visible");
                                }
                            }
                        }
                    } else if (
                        document.querySelector(
                            ".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block .inc_product_modal_block.inc_active"
                        ) != null
                    ) {
                        document
                            .querySelector(
                                ".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block"
                            )
                            .classList.add("overflow_visible");
                        document
                            .querySelector("body")
                            .classList.add("inc_popup_open");
                    }
                    if (
                        clickedElement.className !=
                            "inc_product_block configurable inc_other_noimage show_overlay" &&
                        clickedElement.className !=
                            "inc_product_desc_att_zero_title_text_block" &&
                        clickedElement.className !=
                            "inc_product_details_prod_block" &&
                        clickedElement.className !=
                            "inc_product_variant_simple_block" &&
                        clickedElement.className !=
                            "inc_product_variant_simple_text config" &&
                        clickedElement.className !=
                            "inc_product_desc_variant_popup_close_block" &&
                        clickedElement.className !=
                            "inc_product_desc_add_title_text_block" &&
                        clickedElement.tagName != "SELECT" &&
                        clickedElement.className !=
                            "inc_product_header_block active" &&
                        clickedElement.className !=
                            "inc_product_desc_att_color_list_item_img_block active" &&
                        clickedElement.className !=
                            "inc_product_desc_att_block attributes_avail active" &&
                        clickedElement.className !=
                            "inc_product_qty_block active" &&
                        clickedElement.tagName != "LABEL" &&
                        clickedElement.tagName != "INPUT" &&
                        clickedElement.className != "inc_product_qty_block" &&
                        clickedElement.className !=
                            "inc_product_desc_att_color_list_item_img_block" &&
                        clickedElement.className !=
                            "inc_product_header_block" &&
                        clickedElement.className != "select_option_inc_title" &&
                        clickedElement.className !=
                            "inc_product_desc_att_color_list_item_img" &&
                        clickedElement.className !=
                            "inc_product_desc_att_color_title_text" &&
                        clickedElement.className !=
                            "inc_product_desc_att_color_list_block" &&
                        clickedElement.classList.contains(
                            "inc_product_desc_att_block"
                        ) == falseflag &&
                        clickedElement.className != "select_option_inc_block" &&
                        clickedElement.className !=
                            "inc_product_desc_att_color_title_text_block" &&
                        clickedElement.className !=
                            "inc_product_desc_att_variant_text" &&
                        clickedElement.className !=
                            "inc_product_desc_add_img" &&
                        clickedElement.className != "inc_product_qty_up_btn" &&
                        clickedElement.className !=
                            "inc_product_qty_down_btn" &&
                        clickedElement.className != "variant_span"
                    ) {
                        if (clickedElement.classList != undefined) {
                            if (
                                clickedElement.classList.contains(
                                    "variantoption"
                                ) == falseflag &&
                                clickedElement.classList.contains(
                                    "inc_product_desc_att_size_list_item_img_block"
                                ) == falseflag &&
                                clickedElement.classList.contains(
                                    "inc_product_desc_att_color_list_block"
                                ) == falseflag &&
                                clickedElement.className !=
                                    "inc_product_desc_add_img checked" &&
                                clickedElement.classList.contains(
                                    "inc_product_desc_add_block"
                                ) == falseflag &&
                                clickedElement.classList.contains(
                                    "inc_pdp_bundle_cart_added_product_edit_img"
                                ) == falseflag &&
                                clickedElement.className !=
                                    "inc_product_desc_att_color_title_block" &&
                                clickedElement.className !=
                                    "inc_product_desc_qty_up_btn" &&
                                clickedElement.className !=
                                    "inc_product_desc_qty_down_btn" &&
                                clickedElement.classList.contains(
                                    "inc_product_desc_att_color_block"
                                ) == falseflag &&
                                clickedElement.classList.contains(
                                    "inc_product_desc_att_color_list_item_block"
                                ) == falseflag &&
                                clickedElement.classList.contains(
                                    "inc_product_desc_att_zero_title_text_selected"
                                ) == falseflag &&
                                clickedElement.classList.contains(
                                    "inc_product_desc_att_zero_title_text"
                                ) == falseflag &&
                                clickedElement.classList.contains(
                                    "inc_product_desc_att_size_list_item_img"
                                ) == falseflag &&
                                clickedElement.classList.contains(
                                    "inc_product_desc_att_color_list_item_img"
                                ) != trueflag &&
                                clickedElement.className !=
                                    "inc_product_desc_att_size_title_text_selected" &&
                                clickedElement.className !=
                                    "inc_product_desc_att_third_title_text_selected"
                            ) {
                                if (
                                    document.querySelector(
                                        ".inc_product_desc_att_block"
                                    ) != null
                                ) {
                                    if (
                                        document
                                            .querySelector(
                                                ".inc_product_desc_att_block"
                                            )
                                            .classList.contains(
                                                "moreThanOne"
                                            ) == falseflag
                                    ) {
                                        var allact = document.querySelectorAll(
                                            ".inc_product_desc_att_block.inc_active"
                                        );

                                        if (
                                            document.querySelector(
                                                ".inc_product_modal_block.inc_active"
                                            ) == null &&
                                            document.querySelector(
                                                ".inc_sidebar_modal_block.inc_active"
                                            ) == null
                                        ) {
                                            document
                                                .querySelector("html")
                                                .classList.remove(
                                                    "inc_overlay"
                                                );
                                            document
                                                .querySelector("body")
                                                .classList.remove(
                                                    "inc_popup_open"
                                                );
                                        }
                                        for (var actelm in allact) {
                                            if (
                                                allact[actelm] != null &&
                                                Object.prototype.hasOwnProperty.call(
                                                    allact,
                                                    actelm
                                                )
                                            ) {
                                                allact[actelm].classList.remove(
                                                    "inc_active"
                                                );
                                            }
                                        }

                                        if (
                                            document.querySelector(
                                                ".inc_product_block.show_overlay"
                                            ) != null
                                        ) {
                                            document
                                                .querySelector(
                                                    ".inc_product_block.show_overlay"
                                                )
                                                .classList.remove(
                                                    "show_overlay"
                                                );
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if (INC.config.pageType == "pdp") {
                        if (clickedElement.parentNode != null) {
                            if (
                                clickedElement.parentNode.classList != undefined
                            ) {
                                if (
                                    clickedElement.parentNode.classList.contains(
                                        "image-radio"
                                    ) == trueflag ||
                                    clickedElement.classList.contains(
                                        "swatch-option"
                                    ) == trueflag ||
                                    clickedElement.classList.contains(
                                        "image"
                                    ) == trueflag ||
                                    clickedElement.parentNode.classList.contains(
                                        "image"
                                    ) == trueflag ||
                                    clickedElement.classList.contains(
                                        "product-custom-option"
                                    ) ||
                                    clickedElement.parentNode.classList.contains(
                                        "soldout"
                                    ) == trueflag ||
                                    clickedElement.parentNode.classList.contains(
                                        "swatch-element"
                                    ) == trueflag
                                ) {
                                    var click_textsel =
                                        clickedElement.getAttribute(
                                            "data-option-label"
                                        );

                                    if (
                                        clickedElement.classList.contains(
                                            "image"
                                        ) == trueflag ||
                                        clickedElement.parentNode.classList.contains(
                                            "image"
                                        ) == trueflag
                                    ) {
                                        click_textsel =
                                            clickedElement.parentNode.parentNode
                                                .innerText;
                                        if (
                                            clickedElement.getAttribute(
                                                "data-option-label"
                                            ) != undefined
                                        ) {
                                            click_textsel =
                                                clickedElement.getAttribute(
                                                    "data-option-label"
                                                );
                                        }
                                    }
                                    if (
                                        clickedElement.parentNode.classList.contains(
                                            "image-radio"
                                        ) == trueflag ||
                                        clickedElement.classList.contains(
                                            "image-radio"
                                        ) == trueflag
                                    ) {
                                        click_textsel =
                                            clickedElement.innerText;
                                    }
                                    if (
                                        clickedElement.classList.contains(
                                            "single-option-selector"
                                        ) == trueflag &&
                                        (click_textsel == null ||
                                            click_textsel == "")
                                    ) {
                                        if (clickedElement.tagName == "INPUT") {
                                            click_textsel =
                                                clickedElement.value;
                                        }
                                    }
                                    if (click_textsel != undefined) {
                                        click_textsel = click_textsel
                                            .trim()
                                            .toLocaleLowerCase();
                                    }
                                    autoselect_(click_textsel);
                                }
                            }
                        }
                    }
                    if (
                        clickedElement.classList.contains("remove_link") ==
                            trueflag &&
                        INC.config.pageType == "cartPage"
                    ) {
                        setTimeout(function () {
                            if (
                                document.querySelector(".cart-item.product") !=
                                null
                            ) {
                                INC.clientConfig.offset = 0;
                                INC.clientConfig.slidevalue = 0;
                                INC.init();
                            }
                        }, 2000);
                    }
                }
                setTimeout(function () {
                    var inc_prod_img1 = document.querySelector(
                        ".inc_product_modal_block.inc_active .inc_product_img_main_img img"
                    );
                    if (inc_prod_img1) {
                        inc_prod_img1.setAttribute("style", INC.config.styleft);
                    }
                }, 2000);
            } catch (err) {
                var formData = new FormData();
                formData.append("EmailId", "shashi@increasingly.com");
                formData.append("Subject", "JS Error on Conranshop");
                formData.append("Message", err + "Error Stack" + err.stack);
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "//api.increasingly.co/SendEmail", trueflag);
                xhr.send(formData);
                throw err;
            }
        }
    }

    function plp_modal_pr(product_wrapper) {
        var prd_name = "";
        var prd_price = 0;
        if (
            product_wrapper.querySelector(
                ".quick-shop__title.js-product-title"
            ) != null
        ) {
            prd_name = product_wrapper
                .querySelector(".quick-shop__title.js-product-title")
                .textContent.trim();
        }
        if (
            product_wrapper.querySelector(".modal_price .current_price") != null
        ) {
            prd_price = product_wrapper
                .querySelector(".modal_price .current_price")
                .textContent.trim();
        }
        var prd_prc = prd_price
            .split("£")[1]
            .split("/")[0]
            .replace(" ", "")
            .replace(",", "")
            .trim();
        var prd_img_url = "";
        if (
            document.querySelector(
                ".product-gallery__main .image__container img"
            ) != null
        ) {
            prd_img_url = document.querySelector(
                ".product-gallery__main .image__container img"
            ).src;
        }
        var old_prc = 0;
        var pr_id = "";
        if (
            document
                .querySelector(".fancybox-container")
                .className.includes("product-")
        ) {
            pr_id = document
                .querySelector(".fancybox-container")
                .className.split("product-")[1]
                .split(" ")[0]
                .trim();
        }

        if (
            product_wrapper.querySelector(".modal_price .was-price")
                .innerText != null
        ) {
            old_prc = product_wrapper
                .querySelector(".modal_price .was-price")
                .innerText.replace("£", "")
                .replace(",", "");
        }
        var qty = 1;

        let swatch1;
        let swatch2;
        let size;
        let color;

        if (
            document.querySelectorAll(".js-quick-shop .swatch_options .swatch")
                .length > 1
        ) {
            swatch1 = document.querySelectorAll(
                ".js-quick-shop .swatch_options .swatch .swatch__options"
            )[0];
            swatch2 = document.querySelectorAll(
                ".js-quick-shop .swatch_options .swatch .swatch__options"
            )[1];
            var sizeSwatch = swatch1.querySelectorAll("input");
            for (var l = 0; l < sizeSwatch.length; l++) {
                if (sizeSwatch[l].checked) {
                    size = sizeSwatch[l].value;
                    break;
                }
            }
            var colorSwatch = swatch2.querySelectorAll("input");
            for (var z = 0; z < colorSwatch.length; z++) {
                if (colorSwatch[z].checked) {
                    color = colorSwatch[z].value;
                    break;
                }
            }
        } else {
            swatch1 = document.querySelectorAll(
                ".js-quick-shop .swatch_options .swatch .swatch__options input"
            );
            for (var m = 0; m < swatch1.length; m++) {
                if (swatch1[m].checked) {
                    size = swatch1[m].value;
                    break;
                }
            }
        }
        var size_c = size + " , " + color;
        if (
            product_wrapper.querySelector(
                ".quantity-wrapper .quantity-input"
            ) != null
        ) {
            qty = product_wrapper.querySelector(
                ".quantity-wrapper .quantity-input"
            ).value;
        }
        if (isNaN(qty)) qty = 1;
        qty = Math.abs(qty);
        if (pr_id != undefined) {
            var prod_id = pr_id;
            setTimeout(function () {
                plp_listeners(
                    prd_name,
                    old_prc,
                    prd_img_url,
                    prd_prc,
                    qty,
                    prod_id,
                    size_c
                );
            }, 200);
        }
    }

    function plp_listeners(
        prd_name_,
        old_prc_,
        prd_img_url_,
        prd_prc_,
        qty_shade_,
        prod_id,
        size_c_
    ) {
        var productId = prod_id;
        var qty = 1;
        if (INC.config.deviceType == "desktop") {
            qty = qty_shade_;
        }
        if (INC.config.deviceType == "mobile") {
            qty = qty_shade_;
        }
        qty = Math.abs(qty);
        INC.dataStore.plpProductQty = qty;

        INC.methods.clear();
        var p_img = prd_img_url_;
        var p_name = prd_name_;
        var prc = prd_prc_;
        var s_prc = null;
        var p_activePrice = 0;
        var regularPrice = 0;
        if (old_prc_ != 0) {
            s_prc = prd_prc_;
            prc = old_prc_;
        }
        if (s_prc != null && s_prc != prc) {
            p_activePrice = s_prc;
            regularPrice = prc;
        } else {
            p_activePrice = prc;
            regularPrice = prc;
        }

        INC.config.empty_prod_details = [];
        INC.config.empty_prod_details.push({
            p_id: productId,
            p_name: p_name,
            p_img: p_img,
            p_activePrice: p_activePrice,
            regularPrice: regularPrice,
            size: size_c_.split(",")[0].trim(),
            color: size_c_.split(",")[1].trim(),
        });
        setTimeout(function () {
            INC.methods.irbReq(productId, 5, "catalog_product_view");
        }, 100);
    }

    function autoselect_(textsel) {
        setTimeout(function () {
            if (textsel == null) {
                if (
                    document.querySelector('select[name="options[33]"]') != null
                ) {
                    var selvar = document.querySelector(
                        'select[name="options[33]"]'
                    );
                    textsel = selvar.options[selvar.selectedIndex].innerText
                        .trim()
                        .toLocaleLowerCase();
                }
            }
            var all_list_el = document.querySelectorAll(
                ".inc_pdp_product-main_block .inc_product_showcase_block"
            );
            for (var alistel in all_list_el) {
                if (
                    all_list_el[alistel] != null &&
                    Object.prototype.hasOwnProperty.call(all_list_el, alistel)
                ) {
                    if (
                        all_list_el[alistel].querySelector(
                            ".inc_product_desc_att_zero_block.inc_active"
                        ) != null
                    ) {
                        if (
                            all_list_el[alistel].querySelector(
                                '.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                    textsel +
                                    '"] div'
                            ) != undefined
                        ) {
                            all_list_el[alistel]
                                .querySelector(
                                    '.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                        textsel +
                                        '"] div'
                                )
                                .click();
                        } else if (
                            all_list_el[alistel].querySelector(
                                '.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                    textsel +
                                    '"]'
                            ) != undefined
                        ) {
                            all_list_el[alistel]
                                .querySelector(
                                    '.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                        textsel +
                                        '"]'
                                )
                                .click();
                        }
                        if (
                            all_list_el[alistel].querySelector(
                                ".inc_product_desc_att_color_block.inc_active"
                            ) != null
                        ) {
                            if (
                                all_list_el[alistel].querySelector(
                                    '.inc_product_desc_att_color_list_item_img_block[datacolor="' +
                                        textsel +
                                        '"] div'
                                ) != undefined
                            ) {
                                all_list_el[alistel]
                                    .querySelector(
                                        '.inc_product_desc_att_color_list_item_img_block[datacolor="' +
                                            textsel +
                                            '"]'
                                    )
                                    .click();
                            }
                        }
                    }
                    if (textsel != null) {
                        if (textsel.indexOf("sel_35") < 0) {
                            if (
                                all_list_el[alistel].querySelector(
                                    ".inc_product_desc_att_size_block.inc_active"
                                ) != null
                            ) {
                                textsel = textsel.replace("sel_34", "").trim();
                                if (
                                    all_list_el[alistel].querySelector(
                                        '.inc_product_desc_att_size_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                            textsel +
                                            '"] div'
                                    ) != undefined
                                ) {
                                    all_list_el[alistel]
                                        .querySelector(
                                            '.inc_product_desc_att_size_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                                textsel +
                                                '"] div'
                                        )
                                        .click();
                                }
                                textsel = textsel + "sel_34";
                            }
                        }
                        if (textsel.indexOf("sel_34") < 0) {
                            if (
                                all_list_el[alistel].querySelector(
                                    ".inc_product_desc_att_third_block.inc_active"
                                ) != null
                            ) {
                                textsel = textsel.replace("sel_35", "").trim();
                                if (
                                    all_list_el[alistel].querySelector(
                                        '.inc_product_desc_att_third_block.inc_active .inc_product_desc_att_third_list_item_img_block[datasize="' +
                                            textsel +
                                            '"] div'
                                    ) != undefined
                                ) {
                                    all_list_el[alistel]
                                        .querySelector(
                                            '.inc_product_desc_att_third_block.inc_active .inc_product_desc_att_third_list_item_img_block[datasize="' +
                                                textsel +
                                                '"] div'
                                        )
                                        .click();
                                }
                            }
                        }
                    }
                    if (
                        all_list_el[alistel].querySelector(
                            '.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolorfabric="' +
                                textsel +
                                '"] div'
                        ) != null
                    ) {
                        all_list_el[alistel]
                            .querySelector(
                                '.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolorfabric="' +
                                    textsel +
                                    '"] div'
                            )
                            .click();
                    }
                    if (
                        all_list_el[alistel].querySelector(
                            ".inc_product_desc_att_color_block.inc_active"
                        ) != null
                    ) {
                        if (
                            all_list_el[alistel].querySelector(
                                '.inc_product_desc_att_color_list_item_img_block[datacolor="' +
                                    textsel +
                                    '"] div'
                            ) != undefined
                        ) {
                            all_list_el[alistel]
                                .querySelector(
                                    '.inc_product_desc_att_color_list_item_img_block[datacolor="' +
                                        textsel +
                                        '"]'
                                )
                                .click();
                        }
                    }
                }
            }
        }, 500);
    }
    setTimeout(function () {
        if (window.innerWidth < 1025) {
            window.addEventListener(
                "orientationchange",
                function () {
                    if (window.matchMedia("(orientation: portrait)").matches) {
                        console.log("PORTRAIT");
                        INC.config.deviceMode = "PORTRAIT";
                        var inc_pdp_block_rem =
                            document.querySelector(".inc_pdp_block");
                        if (inc_pdp_block_rem != null) {
                            inc_pdp_block_rem.parentNode.removeChild(
                                inc_pdp_block_rem
                            );
                        }
                        onloadpdp = false;
                        var sidebar_rem = document.querySelector(
                            ".inc_sidebar_modal_block"
                        );
                        if (sidebar_rem != null) {
                            sidebar_rem.parentNode.removeChild(sidebar_rem);
                        }
                        var over_rem = document.querySelector(
                            ".inc_sidebar_overlay_block"
                        );
                        if (over_rem != null) {
                            over_rem.parentNode.removeChild(over_rem);
                        }
                        setTimeout(function () {
                            INC.init();
                        }, 0);
                    }
                    if (window.matchMedia("(orientation: landscape)").matches) {
                        console.log("LANSCAPE");
                        INC.config.deviceMode = "LANSCAPE";
                        onloadpdp = false;
                        var inc_pdp_block_remove =
                            document.querySelector(".inc_pdp_block");
                        if (inc_pdp_block_remove != null) {
                            inc_pdp_block_remove.parentNode.removeChild(
                                inc_pdp_block_remove
                            );
                        }
                        var sidebar_remove = document.querySelector(
                            ".inc_sidebar_modal_block"
                        );
                        if (sidebar_remove != null) {
                            sidebar_remove.parentNode.removeChild(
                                sidebar_remove
                            );
                        }
                        var over_remove = document.querySelector(
                            ".inc_sidebar_overlay_block"
                        );
                        if (over_remove != null) {
                            over_remove.parentNode.removeChild(over_remove);
                        }
                        setTimeout(function () {
                            INC.init();
                        }, 10);
                    }
                },
                {
                    passive: true,
                }
            );
            document.addEventListener("touchmove", checkScrollDirection, false);
        }

        function checkScrollDirection() {
            if (document.querySelector(".inc_pdp_block") != null) {
                if (
                    document.querySelectorAll(
                        ".elc-sticky-container.js-sticky-container"
                    )[1] != null
                ) {
                    document.querySelectorAll(
                        ".elc-sticky-container.js-sticky-container"
                    )[1].style.display = "block";
                }
            }
        }
    }, 3000);

    function slideTo(_id, _n, elm, type_of, arrow) {
        if (
            elm.className == "left_arrow" ||
            elm.className == "left_arrow inc_active" ||
            type_of == "left"
        ) {
            var nn2 = -1;
            var indslid = (INC.config.inc_slideIndex += nn2);
            inc_showSlides(indslid, nn2, elm, type_of, arrow);
        } else {
            var nn1 = 1;
            var indslid1 = (INC.config.inc_slideIndex += nn1);
            inc_showSlides(indslid1, nn1, elm, type_of, arrow);
        }
    }

    function inc_showSlides(n, _ind, elm, _type_of, arrow) {
        var showcase_other_img_list = elm.querySelector(
            ".inc_product_showcase_block .inc_product_img_main_img a"
        );
        var showcase_dots = elm.querySelectorAll(
            ".inc_product_showcase_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block"
        );
        var modal_dots = elm.querySelectorAll(
            ".inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block"
        );

        var showcase_other_img = elm.querySelector(
            ".inc_product_showcase_block .inc_product_img_main_img a img"
        );

        var modal_other_img = elm.querySelector(
            ".inc_product_modal_block .inc_product_img_main_img a img"
        );

        var otherImg_list =
            showcase_other_img_list.getAttribute("otherImageList");
        var additional_img = [];
        var mainImg = showcase_other_img_list.getAttribute("imageURL");
        additional_img.push(mainImg);
        for (var i = 0; i < otherImg_list.split(",").length; i++) {
            additional_img.push(otherImg_list.split(",")[i]);
        }
        var get_org_img = showcase_other_img_list.getAttribute("imageURL");
        if (n > additional_img.length) {
            INC.config.inc_slideIndex = 1;
        }
        if (n < 1) {
            INC.config.inc_slideIndex = additional_img.length;
        }

        for (var im = 0; im < showcase_dots.length; im++) {
            if (modal_dots[im] != undefined) {
                modal_dots[im].classList.remove("inc_active");
            }
        }
        var img_src = additional_img[INC.config.inc_slideIndex - 1].replace(
            "160x90",
            "2000x1500"
        );
        if (img_src != "null") {
            modal_other_img.setAttribute("src", img_src);
            modal_other_img.setAttribute(
                "onerror",
                "this.src='" + get_org_img + "'"
            );

            for (var r = 0; r < showcase_dots.length; r++) {
                modal_dots[r].classList.remove("inc_active");
            }
            if (showcase_dots[INC.config.inc_slideIndex - 1] != null) {
            }
            if (modal_dots[INC.config.inc_slideIndex - 1] != null) {
                modal_dots[INC.config.inc_slideIndex - 1].classList.add(
                    "inc_active"
                );
            }
        }
    }
    var xDown = null;
    var yDown = null;

    function add_swipe(element) {
        element.addEventListener("touchstart", handleTouchStart, {
            passive: true,
        });
        element.addEventListener("touchmove", handleTouchMove, {
            passive: true,
        });
    }

    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    }

    function handleTouchMove(evt) {
        var prod_card = null;
        if (!xDown || !yDown) {
            return;
        }
        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
        if (
            Math.abs(xDiff) + Math.abs(yDiff) > 150 ||
            Math.abs(xDiff) + Math.abs(yDiff) < 150
        ) {
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (xDiff > 0) {
                    prod_card =
                        evt.target.parentNode.parentNode.parentNode.parentNode
                            .parentNode.parentNode.parentNode.parentNode;
                    slideTo(null, 0, prod_card, "left");
                } else {
                    prod_card =
                        evt.target.parentNode.parentNode.parentNode.parentNode
                            .parentNode.parentNode.parentNode.parentNode;
                    slideTo(null, 0, prod_card, "right");
                }
            }
            xDown = null;
            yDown = null;
        }
    }

    function attribute_listing(valueArray) {
        var items = valueArray;
        var sorting = [
            "Colour",
            "Color",
            "Color_size",
            "Size",
            "Leather",
            "Castors",
            "Size_",
            "Length",
            "Castors_Size",
            "Leather_Size",
            "CYCLE LENGTH",
            "SYRINGE SIZE",
            "INJECTING NEEDLE",
            "INCLUDE SHARPS BIN",
        ];
        var result = [];
        sorting.forEach(function (key) {
            var found = false;
            items = items.filter(function (item) {
                if (!found && item.attributeCode == key) {
                    result.push(item);
                    found = true;
                    return false;
                } else {
                    return true;
                }
            });
        });
        return result;
    }
    var Base64 = {
        _keyStr:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (e) {
            var t = "";
            var n, r, i, s, o, u, a;
            var f = 0;
            e = Base64._utf8_encode(e);
            while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = ((n & 3) << 4) | (r >> 4);
                u = ((r & 15) << 2) | (i >> 6);
                a = i & 63;
                if (isNaN(r)) {
                    u = a = 64;
                } else if (isNaN(i)) {
                    a = 64;
                }
                t =
                    t +
                    this._keyStr.charAt(s) +
                    this._keyStr.charAt(o) +
                    this._keyStr.charAt(u) +
                    this._keyStr.charAt(a);
            }
            return t;
        },
        decode: function (e) {
            var t = "";
            var n, r, i;
            var s, o, u, a;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9+/=]/g, "");
            while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = (s << 2) | (o >> 4);
                r = ((o & 15) << 4) | (u >> 2);
                i = ((u & 3) << 6) | a;
                t = t + String.fromCharCode(n);
                if (u != 64) {
                    t = t + String.fromCharCode(r);
                }
                if (a != 64) {
                    t = t + String.fromCharCode(i);
                }
            }
            t = Base64._utf8_decode(t);
            return t;
        },
        _utf8_encode: function (e) {
            e = e.replace(/rn/g, "n");
            var t = "";
            for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                } else if (r > 127 && r < 2048) {
                    t += String.fromCharCode((r >> 6) | 192);
                    t += String.fromCharCode((r & 63) | 128);
                } else {
                    t += String.fromCharCode((r >> 12) | 224);
                    t += String.fromCharCode(((r >> 6) & 63) | 128);
                    t += String.fromCharCode((r & 63) | 128);
                }
            }
            return t;
        },
        _utf8_decode: function (e) {
            var t = "";
            var n = 0;
            var r = 0;
            var c2 = 0;
            while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                    n++;
                } else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));
                    n += 2;
                } else {
                    c2 = e.charCodeAt(n + 1);
                    var c3 = e.charCodeAt(n + 2);
                    t += String.fromCharCode(
                        ((r & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
                    );
                    n += 3;
                }
            }
            return t;
        },
    };

    function getTrackingPixel() {
        var url = "";
        if (url != "") {
            var oImg = document.createElement("img");
            oImg.setAttribute("id", "cstracking");
            oImg.setAttribute("src", url);
            oImg.setAttribute("height", "1px");
            oImg.setAttribute("width", "1px");
            oImg.setAttribute("style", "display:none");
            document.body.appendChild(oImg);
        }
    }

    function get_discount_price(p_original_price, p_sale_price) {
        return parseFloat(Math.abs(+p_original_price - +p_sale_price));
    }

    function get_discount_price_percentage(p_original_price, p_sale_price) {
        return Math.round(
            ((p_original_price - p_sale_price) / p_original_price) * 100
        );
    }

    function incPriceMismatch(active_price, special_price, product_id) {
        var data = {};
        var priceMismatchObj = {};
        priceMismatchObj.token = INC.config.clientToken;
        priceMismatchObj.product_id = product_id
            ? product_id
            : INC.methods.getProductIdFromWebPage();

        var checkSpecial = document.querySelector(
            ".product-price .price-standard "
        );
        var isSpecial = false;
        if (checkSpecial != null) {
            isSpecial = true;
        }
        let elProductPrice = document.querySelectorAll(".price-section.price-section--withTax .price")[1]
        let elSpecialPrice = isSpecial
            ? document.querySelector(".price-section.price-section--withTax.non-sale-price--withTax")
            : null;

        let clientSpecialPrice =0
        if(elSpecialPrice== null){
            clientSpecialPrice = elSpecialPrice
            ? Number(elSpecialPrice.innerText.replace(/[^0-9.-]+/g, ""))
            : null;
        }
        let clientProductPrice= 0
        if(elProductPrice!= null){
            clientProductPrice = Number(
                elProductPrice.innerText.replace(/[^0-9.-]+/g, "")
            );
        }

        let final_product_price = clientProductPrice;
        let final_special_price = clientSpecialPrice;
        let final_old_product_price = Number(
            active_price.replace(/[^0-9.-]+/g, "")
        );
        let final_old_client_special_price =
            Number(special_price.replace(/[^0-9.-]+/g, "")) == 0
                ? null
                : Number(special_price.replace(/[^0-9.-]+/g, ""));
        if (final_old_product_price == 0) {
            let tempPrice = final_old_client_special_price;
            final_old_client_special_price = null;
            final_old_product_price = tempPrice;
        }
        priceMismatchObj.product_price = final_product_price.toString();
        priceMismatchObj.special_price = final_special_price
            ? final_special_price.toString()
            : final_special_price;

        priceMismatchObj.old_product_price = final_old_product_price.toString();
        priceMismatchObj.old_special_price = final_old_client_special_price
            ? final_old_client_special_price.toString()
            : null;
        priceMismatchObj.price_type = "IncVAT";

        data = {
            eventData: btoa(JSON.stringify(priceMismatchObj)),
        };

        console.log(priceMismatchObj);

        mismatch = false;
        if (
            final_product_price !== final_old_product_price ||
            final_special_price !== final_old_client_special_price
        ) {
            mismatch = true;
        }

        if (
            final_old_product_price === final_old_client_special_price &&
            final_special_price == null
        ) {
            mismatch = false;
        }

        if (mismatch) {
            window.jQuery.ajax({
                type: "POST",
                url: "https://gather.increasingly.com/ProductPriceDetails",
                data: JSON.stringify(data),
                dataType: "json",
                headers: {
                    "content-type": "application/json; charset=utf-8",
                },
                error: function (jqXHR) {
                    console.log("priceMismatched error - " + jqXHR);
                },
                success: function (result) {
                    console.log("priceMismatched - " + JSON.stringify(result));
                },
            });
            return true;
        } else {
            return false;
        }
    }

    function oosproduct(prdid) {
        var format_json_data;
        var product_id = prdid;
        var qty = 0;
        format_json_data = JSON.stringify({
            token: INC.config.clientToken,
            product_id: product_id,
            quantity: qty,
        });

        if (product_id != null) {
            var data = {
                eventData: Base64.encode(format_json_data),
            };
            var p_url =
                "https://usagather.increasingly.com/ProductInventoryUpdate";
            var xhr = new XMLHttpRequest();
            xhr.open("POST", p_url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                    }
                }
            };
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(data));
        }
    }

    function cb_tc(bundle_response, recommendation_) {
        var bundles_tc = "";
        var bundleproductarrayTC = {};
        var pdpProductId = "";
        if (bundle_response.ProductsDetail != null) {
            for (var prdetails in bundle_response.ProductsDetail) {
                bundleproductarrayTC[
                    bundle_response.ProductsDetail[prdetails].ProductId
                ] = bundle_response.ProductsDetail[prdetails];
            }
        } else if (
            bundle_response.ProductsDetail == null ||
            bundle_response.ProductsDetail == "null"
        ) {
            for (var c in bundle_response.CategoryRecommendations) {
                bundleproductarrayTC[
                    bundle_response.CategoryRecommendations[c].ProductId
                ] = bundle_response.CategoryRecommendations[c];
            }
        }
        if (recommendation_ == "recommendation") {
            bundles_tc = bundle_response.CategoryRecommendations;
        } else {
            bundles_tc = bundle_response.Bundles;
        }

        for (var i in bundles_tc) {
            if (Object.prototype.hasOwnProperty.call(bundles_tc, i)) {
                if (
                    INC.config.dupDataObjectProducts.indexOf(
                        bundles_tc[i].BundleId
                    ) == -1
                ) {
                    if (recommendation_ != "recommendation") {
                        INC.config.dupDataObjectProducts.push(
                            bundles_tc[i].BundleId
                        );
                    }
                    INC.config.bundledid.push({
                        bundleids: bundles_tc[i].BundleId,
                        productids: bundles_tc[i].ProductIds,
                    });
                    var irbBundleObj = bundles_tc[i];
                    var bundleObj = {};

                    if (recommendation_ != "recommendation") {
                        bundleObj.id = irbBundleObj["BundleId"];
                        bundleObj.totalRegularPrice =
                            irbBundleObj["TotalPrice"];
                        bundleObj.totalActivePrice =
                            irbBundleObj["TotalSpecialPrice"];
                        bundleObj.totalBundlePrice =
                            irbBundleObj["TotalBundlePrice"];
                        bundleObj.totalBundleDiscountPrice =
                            irbBundleObj["DiscountPrice"];
                        bundleObj.productCount = irbBundleObj["ProductCount"];
                    }
                    var irbProductsArray = "";
                    if (recommendation_ == "recommendation") {
                        irbProductsArray = bundles_tc;
                    } else {
                        irbProductsArray = irbBundleObj["ProductIds"];
                    }
                    if (recommendation_ != "recommendation") {
                        if (irbProductsArray.length) {
                            if (
                                INC.dataStore.bundleProductsArray != undefined
                            ) {
                                pdpProductId = irbProductsArray[0];
                                INC.dataStore.bundleProductsArray.push(
                                    irbProductsArray[1]
                                );
                            }
                        }
                    }
                    for (var irbprdarray in irbProductsArray) {
                        if (
                            Object.prototype.hasOwnProperty.call(
                                irbProductsArray,
                                irbprdarray
                            )
                        ) {
                            var product =
                                bundleproductarrayTC[
                                    irbProductsArray[irbprdarray]
                                ] || irbProductsArray[irbprdarray];
                            if (
                                INC.config.datastoreprod.indexOf(
                                    product.ProductId
                                ) == -1
                            ) {
                                if (recommendation_ == "recommendation") {
                                    INC.config.recommendationProduct.push(
                                        product.ProductId
                                    );
                                }
                                INC.config.datastoreprod.push(
                                    product.ProductId
                                );

                                var pAttributes = product["Attributes"] || "";
                                if (pAttributes != "" && pAttributes != null) {
                                    for (var patt1 of pAttributes) {
                                        if (patt1.attributeCode == "color") {
                                            patt1.attributeCode = "Color";
                                        }
                                        if (patt1.attributeCode == "COLOUR") {
                                            patt1.attributeCode = "Color";
                                        }
                                        if (patt1.attributeCode == "size") {
                                            patt1.attributeCode = "Size";
                                        }
                                        if (patt1.attributeCode == "QTY") {
                                            patt1.attributeCode = "Size";
                                        }
                                        if (patt1.attributeCode == "SIZE") {
                                            patt1.attributeCode = "Size";
                                        }
                                        if (
                                            patt1.attributeCode == "CALIBRE" ||
                                            patt1.attributeCode == "RETICULE" ||
                                            patt1.attributeCode == "CALF"
                                        ) {
                                            patt1.attributeCode = "Size_";
                                        }
                                        if (pAttributes.length == 1) {
                                            if (
                                                patt1.attributeCode ==
                                                    "color" ||
                                                patt1.attributeCode ==
                                                    "Color" ||
                                                patt1.attributeCode == "COLOUR"
                                            ) {
                                                patt1.attributeCode = "Color";
                                            } else {
                                                patt1.attributeCode = "Size";
                                            }
                                        }
                                    }
                                    pAttributes =
                                        attribute_listing(pAttributes);
                                }
                                var pAttObj = {};
                                var attr_values = "";
                                var tcount = 0;
                                for (var p2 of pAttributes) {
                                    if (
                                        p2.attributeId != null &&
                                        p2.attributeId != undefined
                                    ) {
                                        product["Attributes"][
                                            product["Attributes"].indexOf(p2)
                                        ]["attrId"] =
                                            product["Attributes"][
                                                product["Attributes"].indexOf(
                                                    p2
                                                )
                                            ].attributeId;
                                    }
                                    if (pAttributes.length == 1) {
                                        if (
                                            pAttributes[0].attributeCode ==
                                                "Color" ||
                                            pAttributes[0].attributeCode ==
                                                "color"
                                        ) {
                                            pAttributes[0].attributeIdAd = 0;
                                            attr_values = p2.attributeValues;
                                            for (var v of attr_values) {
                                                v["opId"] = v.optionId;
                                                v.optionId = 0;
                                            }
                                        } else {
                                            // pAttributes[0].attributeId = 1;
                                            pAttributes[0].attributeIdAd = 1;
                                            attr_values = p2.attributeValues;
                                            for (var v1 of attr_values) {
                                                v1["opId"] = v1.optionId;
                                                v1.optionId = 1;
                                            }
                                        }
                                    } else {
                                        if (pAttributes[1] != undefined) {
                                            if (
                                                pAttributes[0].attributeCode !=
                                                    "Color" &&
                                                pAttributes[1].attributeCode !=
                                                    "Color"
                                            ) {
                                                if (tcount == 0) {
                                                    tcount++;
                                                }
                                            }
                                        }
                                        p2.attributeIdAd = tcount;
                                        attr_values = p2.attributeValues;
                                        for (var v2 of attr_values) {
                                            v2["opId"] = v2.optionId;
                                            v2.optionId = tcount;
                                        }
                                    }
                                    tcount++;
                                }

                                if (pAttributes.length) {
                                    for (var k in pAttributes) {
                                        var pAttributesObj = pAttributes[k];
                                        var pAttributesValues =
                                            pAttributesObj["attributeValues"];
                                        for (var l in pAttributesValues) {
                                            var childProduct =
                                                pAttributesValues[l];
                                            if (
                                                childProduct[
                                                    "childProductId"
                                                ] == null
                                            ) {
                                                childProduct["childProductId"] =
                                                    product["ProductId"];
                                                childProduct[
                                                    "childProductSku"
                                                ] = product["ProductSku"];
                                                childProduct[
                                                    "childProductName"
                                                ] = product["ProductName"];
                                                childProduct[
                                                    "childProductImageUrl"
                                                ] = product["ImageURL"];
                                                childProduct[
                                                    "childProductOtherImageUrl"
                                                ] = product["OtherImageList"];
                                                childProduct[
                                                    "childProductUrl"
                                                ] = product["ProductUrl"];
                                                childProduct[
                                                    "childProductPrice"
                                                ] = product["Price"];
                                                childProduct[
                                                    "childProductSpecialPrice"
                                                ] = product["SpecialPrice"];
                                                childProduct[
                                                    "childProductDescription"
                                                ] = product["Description"];
                                                childProduct[
                                                    "childInternalProductId"
                                                ] = product["ProductId"];
                                            }
                                            childProduct["ProductType"] =
                                                product["ProductType"];
                                            childProduct["mainSKU"] =
                                                product["ProductSku"];
                                            childProduct["childProductIdmain"] =
                                                product["ProductId"];

                                            childProduct[
                                                "childProductImageUrlMain"
                                            ] = product["ImageURL"];
                                            childProduct[
                                                "childProductPriceMain"
                                            ] = product["Price"];
                                            childProduct[
                                                "childProductSpecialPriceMain"
                                            ] = product["SpecialPrice"];
                                            childProduct[
                                                "childProductNameMain"
                                            ] = product["ProductName"];
                                            childProduct["PromotionalMessage"] =
                                                product["PromotionalMessage"];
                                            childProduct[
                                                "childProductUrlMain"
                                            ] = product["ProductUrl"];
                                            childProduct["Field1"] =
                                                product["Field1"];
                                            childProduct["Manufacturer"] =
                                                product["Manufacturer"];
                                            childProduct["childreviewsCount"] =
                                                product["RatingCount"];
                                            childProduct["childRating"] =
                                                product["Rating"];
                                            childProduct["childCategoryName"] =
                                                product["CategoryName"];
                                            childProduct["childCategoryId"] =
                                                product["CategoryId"];
                                            childProduct[
                                                "childProductDescription"
                                            ] = product["Description"];

                                            var productObj =
                                                new INC.classes.ProductAttObj(
                                                    childProduct
                                                );
                                            productObj["bundledProductId"] =
                                                pdpProductId;
                                            productObj.mainId =
                                                product["ProductId"];
                                            productObj.bundleId = bundleObj.id;
                                            productObj.sku = productObj.id;
                                            productObj.shortDescription =
                                                product["ShortDescription"];

                                            productObj.option[
                                                pAttributesObj["attributeIdAd"]
                                            ].id =
                                                pAttributesObj["attributeId"];
                                            productObj["attrId"] =
                                                pAttributesObj["attrId"];
                                            productObj.option[
                                                pAttributesObj["attributeIdAd"]
                                            ].label =
                                                pAttributesObj["frontEndLabel"];
                                            productObj.option[
                                                pAttributesObj["attributeIdAd"]
                                            ].code =
                                                pAttributesObj["attributeCode"];
                                            productObj.option[
                                                pAttributesObj["attributeIdAd"]
                                            ].att_id =
                                                pAttributesObj.attributeId;
                                            if (
                                                !Object.prototype.hasOwnProperty.call(
                                                    INC.dataStore.dataStoreObj,
                                                    product["ProductId"]
                                                )
                                            ) {
                                                INC.dataStore.dataStoreObj[
                                                    product["ProductId"]
                                                ] = {};
                                            }

                                            if (
                                                !Object.prototype.hasOwnProperty.call(
                                                    INC.dataStore.dataStoreObj[
                                                        product["ProductId"]
                                                    ],
                                                    productObj["id"]
                                                )
                                            ) {
                                                INC.dataStore.dataStoreObj[
                                                    product["ProductId"]
                                                ][productObj["id"]] = {};
                                            }
                                            pAttObj =
                                                INC.dataStore.dataStoreObj[
                                                    product["ProductId"]
                                                ][productObj["id"]];
                                            for (var pAttcb in productObj) {
                                                if (pAttcb == "option") {
                                                    if (
                                                        !Object.prototype.hasOwnProperty.call(
                                                            pAttObj,
                                                            "option"
                                                        )
                                                    ) {
                                                        pAttObj["option"] = {};
                                                    }
                                                    Object.keys(
                                                        productObj[pAttcb]
                                                    ).forEach(function (key) {
                                                        pAttObj[pAttcb][key] =
                                                            productObj[pAttcb][
                                                                key
                                                            ];
                                                    });
                                                } else {
                                                    pAttObj[pAttcb] =
                                                        productObj[pAttcb];
                                                }
                                            }
                                        }
                                    }
                                }
                                if (pAttributes.length == 0) {
                                    var productObjS =
                                        new INC.classes.ProductObj(product);
                                    productObjS["bundleId"] =
                                        irbBundleObj["BundleId"];
                                    productObjS["bundledProductId"] =
                                        pdpProductId;
                                    productObjS.sku = productObjS.id;
                                    productObjS.Filed3 =
                                        product["Field3"] +
                                        " | " +
                                        product["Field4"];
                                    if (
                                        INC.dataStore.dataStoreObj !=
                                            undefined &&
                                        !Object.prototype.hasOwnProperty.call(
                                            INC.dataStore.dataStoreObj,
                                            productObjS["mainId"]
                                        )
                                    ) {
                                        INC.dataStore.dataStoreObj[
                                            productObjS["mainId"]
                                        ] = {};
                                    }
                                    if (
                                        INC.dataStore.dataStoreObj != undefined
                                    ) {
                                        INC.dataStore.dataStoreObj[
                                            productObjS["mainId"]
                                        ][productObjS["id"]] = {};
                                        if (
                                            !!window.MSInputMethodContext &&
                                            !!document.documentMode
                                        ) {
                                            INC.dataStore.dataStoreObj[
                                                productObjS["mainId"]
                                            ][productObjS["id"]] = JSON.parse(
                                                JSON.stringify(productObjS)
                                            );
                                        } else {
                                            INC.dataStore.dataStoreObj[
                                                productObjS["mainId"]
                                            ][productObjS["id"]] =
                                                Object.assign({}, productObjS);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        setTimeout(function () {
            if (recommendation_ == "recommendation") {
                INC.methods.createAMBlock("PDP");
            } else {
                INC.methods.createPDPBlock("sidebar");
            }
        }, 200);
    }

    INC.methods.irbReq_is_categ_recomendation = function (
        productId,
        _bundleCount,
        elementName
    ) {
        var elementName_ = elementName;
        var productId_ = productId;
        var apiKey = INC.config.clientToken;
        var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
        var irbReqParams =
            "product_ids=" +
            productId_ +
            "&category_id=" +
            "&api_key=" +
            apiKey +
            "&client_id=" +
            "&page_type=" +
            elementName_ +
            "&fr=" +
            "1" +
            "&client_visitor_id=" +
            INC.config.ivid +
            "&rc=" +
            "1";
        var irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
        var networkConfigObj = new INC.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL1;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", networkConfigObj["url"], true);
        xhr.onload = function () {
            console.log("xhr");
        };
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.response != "") {
                    if (INC.config.pageType == "pdp") {
                        cb_tc(JSON.parse(xhr.response), "recommendation");
                    }
                }
            } else if (xhr.status === 401 || xhr.status === 0) {
                var resp = localStorage.getItem("bundle_recs");
                cb_tc(JSON.parse(resp), "recommendation");
            }
        };
        xhr.send(JSON.stringify(networkConfigObj["params"]));
    };
    setTimeout(function () {
        if (document.querySelector(".inc_pdp_block") != null) {
            if (
                document
                    .querySelector(
                        ".inc_pdp_product-main_block .inc_product_module_block"
                    )
                    .classList.contains("simple") &&
                document
                    .querySelector(
                        ".inc_pdp_bundle_product_list_main_block .inc_product_module_block"
                    )
                    .classList.contains("simple")
            ) {
                document
                    .querySelector(".inc_pdp_block")
                    .classList.add("bothSimple");
            }
        } else {
            if (document.querySelector(".inc_bundle_avail_block") != null) {
                document.querySelector(
                    ".inc_bundle_avail_block"
                ).style.display = "none";
            }
        }
    }, 2500);
    if (document.querySelector("#mini-cart .mini-cart-content") != null) {
        document
            .querySelector("#mini-cart .mini-cart-content")
            .addEventListener("mouseleave", function () {
                if (
                    document.querySelector(
                        ".inc_product_modal_block.inc_active"
                    ) == null
                ) {
                    if (
                        document.querySelector("#mini-cart .mini-cart-content")
                            .style.right == "-32px"
                    ) {
                        document
                            .querySelector("#mini-cart .mini-cart-content")
                            .setAttribute("style", "");
                    }
                    if (
                        document.querySelector(
                            ".mini-cart-content.hidden-mob.open-cart"
                        ) != null
                    ) {
                        document
                            .querySelector(
                                ".mini-cart-content.hidden-mob.open-cart"
                            )
                            .classList.remove("open-cart");
                    }
                    if (
                        document.querySelector(
                            ".mini-cart-label.active-cart"
                        ) != null
                    ) {
                        document
                            .querySelector(".mini-cart-label.active-cart")
                            .classList.remove("active-cart");
                    }
                }
            });
    }
    if (
        window.innerWidth > 820 &&
        document.querySelector(".product-add-to-cart .add-to-cart") != null
    ) {
        document
            .querySelector(".product-add-to-cart .add-to-cart")
            .addEventListener("click", function () {
                INC.config.pdpaddedProductList = [];
                INC.config.pdpaddedProductList.push(
                    INC.methods.getProductIdFromWebPage()
                );
                setTimeout(function () {
                    INC.methods.createSidebarBlock();
                }, 1000);
            });
    }
})();
function enableSidebarAttr(){
    setTimeout(() => {
        let allAttrSecond = document.querySelectorAll('.inc_sidebar_modal_block .inc_product_modal_block .inc_product_desc_att_size_list_block')
        for (let i = 0 ; i < allAttrSecond.length;i++){
         
         if (allAttrSecond[i].childElementCount >= 1){
            
             let elemt = allAttrSecond[i].querySelector('.inc_sidebar_modal_block .inc_product_desc_att_size_list_item_img_block')
             elemt.click()
         }
        }
        let allAttrThird = document.querySelectorAll('.inc_sidebar_modal_block .inc_product_modal_block .inc_product_desc_att_third_list_block')
        for (let i = 0 ; i < allAttrThird.length;i++){
            if (allAttrThird[i].childElementCount >= 1){
            
                let elemt = allAttrThird[i].querySelector('.inc_product_desc_att_third_list_item_img_block')
                elemt.click()
            }
        }
        let allAttrFourth = document.querySelectorAll('.inc_sidebar_modal_block .inc_product_modal_block .inc_product_desc_att_fourth_list_block')
        for (let i = 0 ; i < allAttrFourth.length;i++){
            if (allAttrFourth[i].childElementCount >= 1){
            
                let elemt = allAttrFourth[i].querySelector('.inc_product_desc_att_fourth_list_item_img_block')
                elemt.click()
            }
        }
    }, 1000);
}

