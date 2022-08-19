(function () {
    "use strict";
    var pdp_html = '<div class="inc_pdp_title_block"><div class="inc_pdp_title_text_block"><div class="inc_pdp_title_text">Frequently Bought Together</div></div></div><div class="inc_pdp_bundle_block"><div class="inc_pdp_product-main_block"></div><div class="inc_pdp_icon-add_block"><div class="inc_pdp_icon-add_img_block"><div class="inc_pdp_icon-add_img"></div></div></div><div class="inc_pdp_bundle_product_block"><div class="inc_pdp_bundle_product_header_block"><div class="inc_pdp_bundle_product_header_text">Frequently Bought with</div></div><div class="inc_pdp_bundle_product_left-btn_block"><div class="inc_pdp_bundle_product_left-btn_img_block"><div class="inc_pdp_bundle_product_left-btn_img" title="Scroll left"></div></div></div><div class="inc_pdp_bundle_product_list_block"><div class="inc_pdp_bundle_product_list_main_block"></div><div class="inc_pdp_bundle_product_list_left_block"><div class="inc_pdp_bundle_product_list_left_btn_block"><div class="inc_pdp_bundle_product_list_left_btn_img_block"><div class="inc_pdp_bundle_product_list_left_btn_img"></div></div></div></div><div class="inc_pdp_bundle_product_list_items_show_more_less_block"><div class="inc_pdp_bundle_product_list_items_show_more_less_text down_wrrow">Show more products</div></div><div class="inc_pdp_bundle_product_list_wrapper_items_block"><div class="inc_pdp_bundle_product_list_wrapper_header_block"><div class="inc_pdp_bundle_product_list_wrapper_header_text_block"></div><div class="inc_pdp_bundle_product_list_wrapper_header_close_block"></div></div><div class="inc_pdp_bundle_product_list_items_block"></div></div><div class="inc_pdp_bundle_product_list_right_block"><div class="inc_pdp_bundle_product_list_right_btn_block"><div class="inc_pdp_bundle_product_list_right_btn_img_block"><div class="inc_pdp_bundle_product_list_right_btn_img"></div></div></div></div></div><div class="inc_pdp_bundle_product_right-btn_block"><div class="inc_pdp_bundle_product_right-btn_img_block"><div class="inc_pdp_bundle_product_right-btn_img" title="Scroll right"></div></div></div></div><div class="inc_pdp_bundle_cart_overlay_block"></div><div class="inc_pdp_bundle_cart_block"><div class="inc_pdp_bundle_cart_title_block"><div class="inc_pdp_bundle_cart_title_text_block"><div class="inc_pdp_bundle_cart_title_text">Price Summary</div></div></div><div class="inc_pdp_bundle-cart_ecirp_block"><div class="inc_pdp_bundle-cart_ecirp_main"><div class="inc_pdp_bundle-cart_ecirp_main_title_block"><div class="inc_pdp_bundle-cart_ecirp_main_title_text_block"><div class="inc_pdp_bundle-cart_ecirp_main_title_text">Main Product Price </div></div></div><div class="inc_pdp_bundle-cart_ecirp_main_figure_block"><div class="inc_pdp_bundle-cart_ecirp_main_figure_text_block"><div class="inc_pdp_bundle-cart_ecirp_main_figure_text">£00.00</div></div></div></div><div class="inc_pdp_bundle-cart_ecirp_addon_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_text_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_text">Add-on(s) Selected </div></div></div><div class="inc_pdp_bundle-cart_ecirp_addon_figure_block"><div class="inc_pdp_bundle-cart_ecirp_addon_figure_text_block"><div class="inc_pdp_bundle-cart_ecirp_addon_figure_text">£0.00</div></div></div></div></div><div class="inc_pdp_bundle_cart_added_block"></div><div class="inc_pdp_bundle_cart_summary_block"><div class="inc_pdp_bundle_cart_summary_title_block"><div class="inc_pdp_bundle_cart_summary_title_text_block"><div class="inc_pdp_bundle_cart_summary_count_text">3 Items Added</div><div class="inc_pdp_bundle_cart_summary_title_text">Total bundle price</div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text">£60.00</div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_regular_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text"></div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_save_block"><div class="inc_pdp_bundle_cart_summary_ecirp_save_text"></div></div></div><div class="inc_pdp_bundle_cart_summary_view_block"><div class="inc_pdp_bundle_cart_summary_view_btn_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img"></div></div><div class="inc_pdp_bundle_cart_summary_view_btn_text_block"><div class="inc_pdp_bundle_cart_summary_view_btn_text">Added items</div></div><div class="inc_pdp_bundle_cart_summary_view_btn_count_block"><div class="inc_pdp_bundle_cart_summary_view_btn_count"></div></div></div></div><div class="inc_pdp_bundle_cart_summary_add_block"><div class="inc_pdp_bundle_cart_summary_add_btn_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text">Add to Basket</div><div class="inc_pdp_bundle_cart_summary_add_btn_span"></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_img_block"><div class="inc_pdp_bundle_cart_summary_add_btn_img"></div></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_collection_block" style="pointer-events: auto;opacity: 1;"><div class="inc_pdp_bundle_cart_summary_add_btn_collection_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_collection_text" style="text-transform: none;"></div></div></div></div></div></div></div>';
    var sidebar_html = '<span class="close_modal_inc"></span><div class="inc_sidebar_modal_block"><div class="inc_sidebar_modal_cart_and_title_block"><div class="inc_header_title_block"><div class="inc_header_title_text_block"><div class="inc_header_title_text">Just Added To Your Basket</div></div></div><div class="inc_sidebar_cart_added_block"><div class="inc_cart_added_list_block"></div><div class="inc_cart_product_count_block"></div></div><div class="inc_sidebar_header_block"><div class="inc_header_continue_block"><div class="inc_header_continue_img_block"><div class="inc_header_continue_img"></div></div><div class="inc_header_continue_text_block"><div class="inc_header_continue_text">Back</div></div></div><div class="inc_header_item_block"><div class="inc_header_item_count_block"><div class="inc_header_item_count_title_block"><div class="inc_header_item_count_title_text_block"><div class="inc_header_item_count_title_text">Subtotal (0 item)</div></div></div><div class="inc_header_item_count_figure_block"><div class="inc_header_item_count_figure_text_block"><div class="inc_header_item_count_figure_text"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_text" subtotalactiveprice="0.00">£0.00</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text" subtotalregularprice="0.00"></div></div></div><div class="inc_just_added_save_pr"></div></div></div></div></div></div><div class="inc_sidebar_checkout_block"><div class="inc_checkout_continue_block"><div class="inc_checkout_continue_btn_block"><div class="inc_checkout_continue_btn_img_block"><div class="inc_checkout_continue_btn_img"></div></div><div class="inc_checkout_continue_btn_text_block"><div class="inc_checkout_continue_btn_text">Continue Shopping</div><div class="inc_checkout_continue_btn_span"></div></div></div></div><div class="inc_checkout_basket_block"><div class="inc_checkout_basket_btn_block"><div class="inc_checkout_basket_btn_img_block"><div class="inc_checkout_basket_btn_img"></div></div><div class="inc_checkout_basket_btn_text_block"><div class="inc_checkout_basket_btn_span"></div><div class="inc_checkout_basket_btn_text"><a class="view_basket_checkout"><div draggable="false">View Basket</div></a></div></div></div></div></div><div class="inc_sidebar_recommended_block"><div class="inc_recommended_title_block"><div class="inc_recommended_title_text_block"><div class="inc_recommended_title_text">Customers also Bought</div></div></div><div class="inc_recommended_tabs_block"><div class="inc_recommended_tabs_list_block inc_categ_4" tabindex="0"></div></div><div class="inc_recommended_products_block"><div class="inc_recommended_products_left_block"><div class="inc_recommended_products_left_btn_block"><div class="inc_recommended_products_left_btn_img_block"><div class="inc_recommended_products_left_btn_img" title="Scroll left"></div></div></div></div><div class="inc_recommended_products_list_main_block"><div class="inc_recommended_products_list_block"></div></div><div class="inc_recommended_products_item_thumb_block"><div class="inc_recommended_products_list_item_thumb_block"></div></div><div class="inc_recommended_products_right_block"><div class="inc_recommeded_products_right_btn_block"><div class="inc_recommended_products_right_btn_img_block"><div class="inc_recommended_products_right_btn_img" title="Scroll right"></div></div></div></div></div></div></div>'
    var cart_html = '<div class="inc_af_title_block" style="clear: both;"><div class="inc_af_title_text_block"><div class="inc_af_title_text"></div><div class="inc_af_modal_close"></div></div></div><div class="inc_af_bundles_block"><div class="inc_af_left_block"><div class="inc_af_left_btn_block"><div class="inc_af_left_btn_img_block"><div class="inc_af_left_btn_img"></div></div></div></div><div class="inc_af_product-list-main_block"><div class="inc_af_product-list_block"></div></div><div class="inc_af_right_block"><div class="inc_af_right_btn_block"><div class="inc_af_right_btn_img_block"><div class="inc_af_right_btn_img"></div></div></div></div></div>'
    var showcase_productcard = '<div class="inc_product_block"><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_header_main_rating_block"></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text"></div></div></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_extension_block"></div><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="pc_promo_div"></div><div class="inc_product_desc_ratings_block"></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block"></div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">£0.00 - -£0.00</div><div class="inc_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div></div><div class="inc_variant_error_text"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text"><span>Add to Basket</span></div></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected" ></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected" ></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected" ></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected" ></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected" ></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_pop_qty_block singleqty"><div class="inc_pop_qty_down_block"><div class="inc_pop_qty_down_btn_block"><div class="inc_pop_qty_down_btn"></div></div></div><div class="inc_pop_qty_input_block"><div class="inc_pop_qty_input_text_block"><div class="inc_pop_qty_input_text"></div></div></div><div class="inc_pop_qty_up_block"><div class="inc_pop_qty_up_btn_block"><div class="inc_pop_qty_up_btn"></div></div></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block"><label>qty</label><div class="inc_product_qty_block singleqty"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"><span class="inc_add_text"></span></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text">Add to Basket</div></div></div><div class="inc_product_add_collection_block"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">Add to Basket</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>'
    var modal_productcard = '<span class="close_modal_inc"></span><div class="inc_product_block"><div class="inc_product_extension_block"></div><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_header_main_rating_block"><div class="inc_product_desc_ratings_block"></div><span class="product_modal_sku">#</span></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text">Overview</div></div></div><div class="inc_product_header_title_block_0"><div class="inc_product_header_title_text_block_0"><div class="inc_product_header_title_text_0">Video</div></div></div><div class="inc_product_header_title_block_1"><div class="inc_product_header_title_text_block_1"><div class="inc_product_header_title_text_1">Description</div></div></div><div class="inc_product_header_new_page"><a class="inc_product_header_new_page_text" href="" >Open in a new tab</a ></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"></div><div class="inc_product_img_gallery_left_block" title="Scroll left"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_right_block" title="Scroll right"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block scroll_up" title="Scroll left" ><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block scroll_down" title="Scroll right" ><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_img_block inc_video"><div class="inc_product_img_main_block inc_video"><div class="inc_product_img_main_img inc_video"></div><div class="inc_product_img_gallery_left_block inc_video" title="Scroll left"><div class="inc_product_img_gallery_left_btn_block inc_video"><div class="inc_product_img_gallery_left_btn_img_block inc_video"><div class="inc_product_img_gallery_left_btn_img inc_video"></div></div><div class="inc_product_img_gallery_left_btn_text_block inc_video"><div class="inc_product_img_gallery_left_btn_text inc_video"></div></div></div></div><div class="inc_product_img_gallery_right_block inc_video" title="Scroll right"><div class="inc_product_img_gallery_right_btn_block inc_video"><div class="inc_product_img_gallery_right_btn_img_block inc_video"><div class="inc_product_img_gallery_right_btn_img inc_video"></div></div><div class="inc_product_img_gallery_right_btn_text_block inc_video"><div class="inc_product_img_gallery_right_btn_text inc_video"></div></div></div></div></div><div class="inc_product_img_gallery_block inc_video"><div class="inc_product_img_gallery_left_block scroll_up inc_video" title="Scroll left" ><div class="inc_product_img_gallery_left_btn_block inc_video"><div class="inc_product_img_gallery_left_btn_img_block inc_video"><div class="inc_product_img_gallery_left_btn_img inc_video"></div></div><div class="inc_product_img_gallery_left_btn_text_block inc_video"><div class="inc_product_img_gallery_left_btn_text inc_video"></div></div></div></div><div class="inc_product_img_gallery_list_block inc_video"></div><div class="inc_product_img_gallery_right_block scroll_down inc_video" title="Scroll right" ><div class="inc_product_img_gallery_right_btn_block inc_video"><div class="inc_product_img_gallery_right_btn_img_block inc_video"><div class="inc_product_img_gallery_right_btn_img inc_video"></div></div><div class="inc_product_img_gallery_right_btn_text_block inc_video"><div class="inc_product_img_gallery_right_btn_text inc_video"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="pc_promo_div"></div><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block"></div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">£0.00 - -£0.00</div><div class="inc_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div></div><div class="inc_mobile_desc_ratings_block"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text"><span></span></div></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected" ></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected" ></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected" ></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected" ></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected" ></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block"><div class="inc_product_qty_block singleqty"><label>Quantity</label><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text"></div></div></div><div class="inc_product_add_collection_block"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">Add to Basket</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>'

    var INC = {};
    var init_flag = true
    INC.bundles = true
    INC.ENV = "prod";
    INC.debug = 0;
    INC.initStatus = "";

    INC.initStatusCP = "";
    var onloadpdp = false;
    var crypto = window.crypto || window.msCrypto;



    function generateRandomString(bits1) {
        return (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15) + (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15);
    }

    function getCountry() {
        if (document.querySelector('#page').dataset.currencyIsoCode == "GBP") {
            return "b58luk";
        } else if (document.querySelector('#page').dataset.currencyIsoCode == "AUD") {
            return "b58lau";
        } else if (document.querySelector('#page').dataset.currencyIsoCode == "USD") {
            return "b58lus";
        } else {
            return false
        }
    }

    function getCheckoutLink() {
        if (document.querySelector('#page').dataset.currencyIsoCode == "GBP") {
            return "https://www.balsamhill.co.uk/cart";
        } else if (document.querySelector('#page').dataset.currencyIsoCode == "AUD") {
            return "https://www.balsamhill.com.au/cart";
        } else if (document.querySelector('#page').dataset.currencyIsoCode == "USD") {
            return "https://www.balsamhill.com/cart";
        } else {
            return false
        }
    }

    function getAddToCartURL() {
        if (document.querySelector('#page').dataset.currencyIsoCode == "GBP") {
            return "https://www.balsamhill.co.uk/ajax/cart/addMultiple";
        } else if (document.querySelector('#page').dataset.currencyIsoCode == "AUD") {
            return "https://www.balsamhill.com.au/ajax/cart/addMultiple";
        } else if (document.querySelector('#page').dataset.currencyIsoCode == "USD") {
            return "https://www.balsamhill.com/ajax/cart/addMultiple";
        } else {
            return false
        }
    }

    function addButtonText() {
        if (getCountry() == "b58luk") {
            return "Add to Basket";
        } else if (getCountry() == "b58lau") {
            return "Add to Cart";
        } else if (getCountry() == "b58lus") {
            return "Add to Cart";
        } else {
            return false
        }
    }

    function justAddedText() {
        if (getCountry() == "b58luk") {
            return "Basket";
        } else if (getCountry() == "b58lau") {
            return "Cart";
        } else if (getCountry() == "b58lus") {
            return "Cart";
        } else {
            return false
        }
    }

    function addBundleText() {
        if (getCountry() == "b58luk") {
            return "Basket";
        } else if (getCountry() == "b58lau") {
            return "Cart";
        } else if (getCountry() == "b58lus") {
            return "Cart";
        } else {
            return false
        }
    }


    var trueflag = true;
    var falseflag = false;
    var onloadpdp_delete = false;
    var incallowedKeys = [46, 8, 9, 27, 110, 190];
    var inc_scroll_height = 100
    INC.clientConfig = {};
    INC.clientConfig.statusVAT = "";
    INC.clientConfig.OOS_MESG = []
    INC.clientConfig.offset = 0;
    INC.clientConfig.slidevalue = 0;

    INC.config = {};
    INC.config.clientATCClick = false
    INC.config.run_permission = true
    INC.config.deviceType = "";
    INC.config.syncClickAdded = false
    INC.config.priceApiRan = false
    INC.config.attributeSyncedForAPI = false
    INC.config.SyncOperation = true
    INC.config.clientSimple = false
    INC.config.clientToken = getCountry()
    INC.config.trackingURL = "https://optimizedby.increasingly.co/ImportData";
    if (getCountry() == 'b58lau') {
        INC.config.trackingURL = "https://jpoptimizedby.increasingly.co/ImportData";
    }
    if (getCountry() == 'b58lus') {
        INC.config.trackingURL = "https://usaoptimizedby.increasingly.co/ImportData";
    }
    INC.config.addToBasketURL = getAddToCartURL()
    INC.clientConfig.checkoutLink = getCheckoutLink()
    INC.config.affiliateURL = "";
    INC.config.pageType = "";
    INC.config.miniPopup = true
    INC.config.ivid = "";
    INC.config.pdpaddedProductList = [];
    INC.config.inc_slideIndex = 1;
    INC.config.bundle_tracking = [];
    INC.config.Product_id = null;
    INC.config.db_products = 0
    INC.config.dupBasket = [];
    INC.config.apiMismatch = false
    INC.config.dupDataObjectProducts = [];
    INC.clientConfig.OOS = []
    INC.config.disablebtn = true;
    INC.config.sidebarremovedprod = [];
    INC.config.cartproductids = [];
    INC.config.bundle_skuPushed = []
    INC.config.recommendationProduct = [];
    INC.config.FBTTitle = "Frequently Bought Together"
    INC.config.AddedText = "Added"
    INC.config.BeforeYouChecktext = "Customers also Bought"
    INC.config.ajaxerr = "I'm sorry we've experienced an error. Please try again."
    INC.config.UpdateText = "UPDATE"
    INC.config.OutOfStock = false
    INC.config.pdpBundles = []

    //
    // UPDATE ON PRODUCTION
    INC.config.noimage = "https://www.increasingly.co/Clients/b58luk/images/noimage.png"
    // ------------------------
    INC.config.recommendation = false;
    INC.config.bundledid = []
    INC.config.cldomain = "";
    INC.config.checkoutpath = '/cart';
    INC.config.fabrictext = "Select Fabric"
    INC.config.styleft = "left:0 !important;position: relative;"
    INC.config.ctl_names = []
    INC.config.ctl_img_srcs = []
    INC.config.ctl_prices = []
    INC.config.qtyscross = []
    INC.config.datastoreprod = []
    INC.config.ddFlag = false;
    INC.config.catFlag = [];
    var fabricprod = []

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var s in ca) {
            if (Object.prototype.hasOwnProperty.call(ca, s)) {
                var c = ca[s];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1, c.length)
                }
                if (c.indexOf(nameEQ) == 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
        }
        return null;
    }

    INC.checkProdUserCookie = function () {
        if (INC.ENV == "prod") {

            if (getCountry() === "b58luk") {
                if (readCookie('bbgdrpconsent') === null) return
                if (init_flag) {
                    setTimeout(function () {
                        init_flag = false;
                        INC.init();
                    }, 500)
                }
            } else {
                if (init_flag) {
                    setTimeout(function () {
                        init_flag = false;
                        INC.init();
                    }, 500)
                }
            }



        }
    }
    INC.checkProdUserCookie();

    function clientButtonCheck() {

        setTimeout(() => {
            let clientOOS = document.querySelector('.atc-btn.add-to-cart-button').classList.contains('ng-hide')
            if (clientOOS) {

                if (document.querySelector('.inc_pdp_block') != null) {
                    document.querySelector('.inc_pdp_block').style.display = "none"
                    var productId = INC.methods.getProductIdFromWebPage();
                    // oosproduct(productId)
                    INC.config.OutOfStock = true
                }
            } else {
                if (INC.config.recommendation) {
                    if (document.querySelector('.inc_af_block') == null) {
                        INC.config.run_permission = false
                        INC.init()
                    } else {
                        document.querySelector('.inc_af_block').style.display = "block"
                    }
                } else {
                    if (document.querySelector('.inc_pdp_block') == null) {
                        INC.config.run_permission = false
                        INC.init()
                    } else {
                        // document.querySelector('.inc_pdp_block').style.display = "block"
                        syncClientAttributes(false)
                    }
                }

            }
        }, 2000);

    }

    function checkChildLevelPrice() {

        if (INC.config.recommendation) return
        if (document.querySelector('.inc_pdp_block') == null) return

        let regularPricePDP = document.querySelector('.inc_pdp_product-main_block .inc_product_desc_ecirp_regular_text')
        let activePricePDP = document.querySelector('.inc_pdp_product-main_block .inc_product_desc_ecirp_active_text')
        if (regularPricePDP.innerText !== "") {
            regularPricePDP = regularPricePDP.innerText.replace(/[^0-9.-]+/g, "")
        } else {
            regularPricePDP = 0
        }
        if (activePricePDP.innerText !== "") {
            activePricePDP = activePricePDP.innerText.replace(/[^0-9.-]+/g, "")
        }

        if (regularPricePDP == 0) {
            regularPricePDP = activePricePDP
            activePricePDP = 0
        }

        let prdId = document.querySelector('.inc_pdp_product-main_block .inc_product_module_block').dataset.id
        let mismatch = incPriceMismatch(regularPricePDP, activePricePDP, prdId)

        if (mismatch == false) {
            INC.config.apiMismatch = false
            if (document.querySelector('.inc_pdp_block')) {
                document.querySelector('.inc_pdp_block').style.display = "block"
            }
        } else {
            INC.config.apiMismatch = true
            setTimeout(() => {
                if (INC.config.apiMismatch) {
                    if (document.querySelector('.inc_pdp_block')) {
                        document.querySelector('.inc_pdp_block').style.display = "none"
                    }
                }
            }, 2000);

        }
        INC.config.SyncOperation = true
    }
    // Check Cookie Consent
    if (document.querySelector('.accept-cookies')) {

        document.querySelector('.accept-cookies').addEventListener('click', function () {
            setTimeout(() => {
                INC.checkProdUserCookie();
            }, 2000);
        })
        document.querySelector('.manage-cookies').addEventListener('click', function () {
            setTimeout(() => {

                document.querySelector('#preferences_prompt_submit').addEventListener('click', function () {
                    setTimeout(() => {
                        INC.checkProdUserCookie();
                    }, 2000);
                })
            }, 2000);
        })

    }

    function generate_html_tag(element, className) {
        var generateEl = document.createElement(element);
        if (className != undefined) {
            generateEl.classList.add(className)
        }
        return generateEl;
    }
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 0
    });
    let getCountryCode = getCountry()
    if (getCountryCode == 'b58lus') {
        formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0

        });
    }
    if (getCountryCode == 'b58lau') {
        formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',

            minimumFractionDigits: 0
        });
    }

    let sortEmpty = function (array) {
        let sortedArray = new Array()
        if (array == undefined) return
        let allempty = 0
        array.map(function (item) {
            if (!item.includes('empty')) {
                sortedArray.push(item)
            }
        })
        array.map(function (item) {
            if (item.includes('empty')) {
                allempty++
            }
        })


        if (allempty == array.length) {
            sortedArray = array
        } else {
            array.map(function (item) {
                if (item.includes('empty')) {
                    allempty++
                    sortedArray.unshift(item)
                }
            })
        }
        return sortedArray
    }
    INC.init = function () {
        INC.config.datastoreprod = []
        INC.config.dupDataObjectProducts = [];
        INC.methods.addVisitorID();
        INC.config.pageType = INC.methods.detectPageType();
        INC.methods.clear();
        INC.config.deviceType = window.innerWidth <= 768 ? "mobile" : "desktop"

        switch (INC.config.pageType) {
            case "pdp":
                // Check OOS
                if (!getCountry())
                    return

                observeClientATC()

                var productId = INC.methods.getProductIdFromWebPage();

                if (document.querySelector('.atc-btn.ng-hide').innerText.includes('Add to Basket')) {
                    oosproduct(productId)
                    clientButtonCheck()
                    INC.config.OutOfStock = true
                }
                if (document.querySelector('.atc-btn.ng-hide').innerText.includes('Add to Cart') && INC.config.OutOfStock == false) {
                    oosproduct(productId)
                    clientButtonCheck()
                    INC.config.OutOfStock = true
                }

                if (document.querySelector('.atc-btn.ng-scope') && INC.config.OutOfStock == false) {
                    if (document.querySelector('.atc-btn.ng-scope').classList.contains('unavailable')) {
                        oosproduct(productId)
                        clientButtonCheck()
                        INC.config.OutOfStock = true
                    }
                }

                INC.methods.irbReq(productId, 5, "catalog_product_view")
                break;
            case "cartPage":
                setTimeout(() => {
                    if (cartpageprodids().length > 0) {
                        INC.methods.irbReq(INC.config.cartproductids, 12, "checkout_cart_index");
                    }
                }, 1000);

                break;
            case "productList":
                break;
        }
    }

    function cartpageprodids() {
        INC.config.cartproductids = []
        let idsFromStorage = utag_data.prod_parent_code
        idsFromStorage.map((product) => {
            INC.config.cartproductids.push(product.toString())
        })
        return INC.config.cartproductids;
    }

    INC.dataStore = {};
    INC.dataStore.methods = function () {
        var incDataStore = INC.dataStore;

        function buildDataStoreObj(bundleResponse) {
            INC.config.dupDataObjectProducts = []
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
                        Products: [bundles[0].Products[0], productDealObj]
                    });

                    INC.dataStore.clientProductDealsCategory = productDealObj.CategoryId;
                });
            }
            var dataStoreObj = {};
            var bundleproductarray = {}
            var bundleProductsArray = [];
            if (bundleResponse.ProductsDetail != null) {
                for (var pr in bundleResponse.ProductsDetail) {
                    if (Object.prototype.hasOwnProperty.call(bundleResponse.ProductsDetail, pr)) {
                        bundleproductarray[bundleResponse.ProductsDetail[pr].ProductId] = bundleResponse.ProductsDetail[pr]
                    }
                }
            } else if (bundleResponse.CategoryRecommendations != null) {
                for (var ct in bundleResponse.CategoryRecommendations) {
                    if (Object.prototype.hasOwnProperty.call(bundleResponse.CategoryRecommendations, ct)) {
                        bundleproductarray[bundleResponse.CategoryRecommendations[ct].ProductId] = bundleResponse.CategoryRecommendations[ct]
                    }
                }
            }

            var pdpProductId = ""
            for (var i in bundles) {
                if (Object.prototype.hasOwnProperty.call(bundles, i)) {
                    if (INC.config.dupDataObjectProducts.indexOf(bundles[i].BundleId) == -1) {
                        if (INC.config.recommendation == falseflag) {
                            INC.config.dupDataObjectProducts.push(bundles[i].BundleId)
                        }
                        INC.config.bundledid.push({
                            bundleids: bundles[i].BundleId,
                            productids: bundles[i].ProductIds
                        })
                        var irbBundleObj = bundles[i];
                        var bundleObj = {};
                        if (INC.config.recommendation == falseflag) {
                            bundleObj.id = irbBundleObj["BundleId"];
                        }
                        if (INC.config.recommendation == falseflag) {
                            bundleObj.id = irbBundleObj["BundleId"];
                            bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                            bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                            bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                            bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                            bundleObj.productCount = irbBundleObj["ProductCount"];
                        }
                        var irbProductsArray = '';
                        if (INC.config.recommendation == trueflag) {
                            irbProductsArray = bundles;
                        } else {
                            irbProductsArray = irbBundleObj["ProductIds"]
                        }

                        if (INC.config.recommendation == falseflag) {
                            if (irbProductsArray) {
                                if (window.location.pathname == INC.config.checkoutpath || INC.config.recommendation) {
                                    if (INC.config.cartproductids.indexOf(irbProductsArray[0]) >= 0) {
                                        pdpProductId = irbProductsArray[0];
                                        bundleProductsArray.push(irbProductsArray[1]);
                                    } else if (INC.config.cartproductids.indexOf(irbProductsArray[1]) >= 0) {
                                        pdpProductId = irbProductsArray[1];
                                        bundleProductsArray.push(irbProductsArray[0]);
                                    }
                                } else {
                                    pdpProductId = irbProductsArray[0];
                                    bundleProductsArray.push(irbProductsArray[1]);
                                }
                            }
                        }

                        if (INC.config.recommendation == trueflag) {
                            bundleProductsArray.push(bundles[i]["ProductId"]);
                        }

                        for (var ir in irbProductsArray) {
                            if (Object.prototype.hasOwnProperty.call(irbProductsArray, ir)) {
                                var product = bundleproductarray[irbProductsArray[ir]] || irbProductsArray[ir]

                                if (INC.config.datastoreprod.indexOf(product.ProductId) == -1) {
                                    INC.config.datastoreprod.push(product.ProductId)
                                    if (INC.config.recommendation == trueflag) {
                                        INC.config.recommendationProduct.push(product.ProductId)
                                    }
                                    var pAttributes = product["Attributes"] || "";

                                    var clrcount = 0
                                    var clrflg = false;
                                    var setTypeatt = false;
                                    let comboTypes = []
                                    if (pAttributes != null) {

                                        if (pAttributes[0] != undefined) {


                                            if (pAttributes[0] != undefined) {
                                                if (pAttributes[0].attributeCode != undefined) {
                                                    comboTypes.push(pAttributes[0].attributeCode)
                                                    if (pAttributes[0].attributeCode.indexOf('empty_header') >= 0) {
                                                        setTypeatt = true
                                                    }
                                                }
                                            }
                                            if (pAttributes[1] != undefined) {
                                                if (pAttributes[1].attributeCode != undefined) {
                                                    comboTypes.push(pAttributes[1].attributeCode)
                                                    if (pAttributes[1].attributeCode.indexOf('empty_header') >= 0) {
                                                        setTypeatt = true
                                                    }
                                                }
                                            }
                                            if (pAttributes[2] != undefined) {
                                                if (pAttributes[2].attributeCode != undefined) {
                                                    comboTypes.push(pAttributes[2].attributeCode)
                                                    if (pAttributes[2].attributeCode.indexOf('empty_header') >= 0) {
                                                        setTypeatt = true
                                                    }
                                                }
                                            }
                                            if (pAttributes[3] != undefined) {
                                                if (pAttributes[3].attributeCode != undefined) {
                                                    comboTypes.push(pAttributes[3].attributeCode)
                                                    if (pAttributes[3].attributeCode.indexOf('empty_header') >= 0) {
                                                        setTypeatt = true
                                                    }
                                                }
                                            }

                                            if (comboTypes.includes('Diameter')) {
                                                setTypeatt = true
                                            }
                                            if (comboTypes.includes('Set Size')) {
                                                setTypeatt = true
                                            }

                                            if (comboTypes.includes('Height') && comboTypes.includes('Length') && comboTypes.includes('Width')) {
                                                setTypeatt = true
                                            }
                                            if (comboTypes.includes('Color') && comboTypes.includes('Length') && comboTypes.includes('Width')) {
                                                setTypeatt = true
                                            }

                                            if (comboTypes.includes('Height') && comboTypes.includes('Width')) {
                                                setTypeatt = true
                                            }
                                        }
                                    }
                                    var newattribute = []

                                    if (setTypeatt == trueflag) {
                                        var fabricvariants = [];
                                        var fabricattributes = [];
                                        pAttributes[0].attributeValues[0].headers = []

                                        for (var pm in pAttributes) {
                                            if (Object.prototype.hasOwnProperty.call(pAttributes, pm)) {

                                                if (pm != 10) {
                                                    var atvalues = pAttributes[pm].attributeValues;

                                                    for (var vS in atvalues) {


                                                        atvalues = atvalues.sort(dynamicSort('childProductId'))

                                                        if (Object.prototype.hasOwnProperty.call(atvalues, vS)) {

                                                            if (pAttributes[0].attributeValues[vS].childProductId == atvalues[vS].childProductId) {
                                                                if (pm == 1) {
                                                                    pAttributes[0].attributeValues[vS].option_text = atvalues[vS].optionText + "_" + pAttributes[pm].attributeCode + "_ " + vS
                                                                } else {
                                                                    pAttributes[0].attributeValues[vS].option_text1 = atvalues[vS].optionText + "_" + pAttributes[pm].attributeCode + "_" + vS
                                                                }
                                                                if (pm == 2) {
                                                                    pAttributes[0].attributeValues[vS].option_text2 = atvalues[vS].optionText + "_" + pAttributes[pm].attributeCode + "_" + vS
                                                                }

                                                                if (pAttributes[0].attributeValues[vS].combo_options == undefined) {
                                                                    pAttributes[0].attributeValues[vS].combo_options = []
                                                                }
                                                                pAttributes[0].attributeValues[vS].combo_options.push(atvalues[vS].optionText + "_" + pAttributes[pm].attributeCode + "_ " + vS)
                                                            }
                                                        }
                                                    }
                                                }

                                                if (pAttributes[0].attributeValues[0].headers == undefined) {
                                                    pAttributes[0].attributeValues[0].headers = []
                                                }

                                                pAttributes[0].attributeValues[0].headers.push(pAttributes[pm].attributeCode)
                                            }
                                        }

                                        fabricattributes.push({
                                            attributeIdAd: 0,
                                            attributeCode: "Size",
                                            attributeId: "0",
                                            attributeValues: pAttributes[0].attributeValues,
                                            frontEndLabel: "Size"
                                        })
                                        pAttributes = fabricattributes

                                    }
                                    if (pAttributes != "" && pAttributes != null) {
                                        for (var p of pAttributes) {
                                            if (p.attributeCode == "color") {
                                                p.attributeCode = "Color"
                                            }
                                            if (p.attributeCode == "COLOUR") {
                                                p.attributeCode = "Color"
                                            }
                                            if (p.attributeCode == "SIZE") {
                                                p.attributeCode = "Size"
                                            }
                                            if (p.attributeCode == "size") {
                                                p.attributeCode = "Size"
                                            }
                                            if (pAttributes.length == 2) {
                                                if (pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == "color" || pAttributes[0].attributeCode == "Colour" || pAttributes[0].attributeCode == "COLOUR" || pAttributes[1].attributeCode == "Color" || pAttributes[1].attributeCode == "color" || pAttributes[1].attributeCode == "Colour" || pAttributes[1].attributeCode == "COLOUR") {
                                                    p.attributeCode = "Color"
                                                    clrflg = true
                                                } else if (clrflg == falseflag) {
                                                    if (clrcount == 0) {
                                                        p.attributeCode = "Size"
                                                    } else if (clrcount == 1) {
                                                        p.attributeCode = "Size_"
                                                    }
                                                }
                                                clrcount++
                                            }
                                            if (pAttributes.length == 1) {
                                                if (p.attributeCode == "color" || p.attributeCode == "Color" || p.attributeCode == "COLOUR") {
                                                    p.attributeCode = "Color"
                                                } else {
                                                    p.attributeCode = "Size"
                                                }
                                            }
                                        }
                                        pAttributes = attribute_listing(pAttributes)

                                    }
                                    var pAttObj = {};
                                    var attr_values = '';
                                    var c_t = 0
                                    for (var t of pAttributes) {
                                        if (pAttributes.length == 1) {
                                            if (pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == "color") {
                                                pAttributes[0].attributeId = 0;
                                                attr_values = t.attributeValues;
                                                for (var v of attr_values) {
                                                    v.optionId = 0;
                                                }
                                            } else {
                                                pAttributes[0].attributeId = 1;
                                                attr_values = t.attributeValues;
                                                for (var vb of attr_values) {
                                                    vb.optionId = 1;
                                                }
                                            }
                                        } else {
                                            if (pAttributes[1] != undefined) {
                                                if (pAttributes[0].attributeCode != "Color" && pAttributes[1].attributeCode != "Color") {
                                                    if (c_t == 0) {
                                                        c_t++
                                                    }
                                                }
                                            }
                                            t.attributeId = c_t
                                            attr_values = t.attributeValues;
                                            for (var va of attr_values) {
                                                va.optionId = c_t;
                                            }
                                        }
                                        c_t++
                                    }
                                    var productObj = '';

                                    if (pAttributes.length) {
                                        for (var pattv in pAttributes) {
                                            if (Object.prototype.hasOwnProperty.call(pAttributes, pattv)) {
                                                var pAttributesObj = pAttributes[pattv];
                                                var pAttributesValues = pAttributesObj["attributeValues"];
                                                for (var ptr in pAttributesValues) {
                                                    if (Object.prototype.hasOwnProperty.call(pAttributesValues, ptr)) {
                                                        var childProduct = pAttributesValues[ptr];
                                                        if (childProduct["childProductId"] == null) {
                                                            childProduct["childProductId"] = product["ProductId"];
                                                            childProduct["childProductSku"] = product["ProductSku"];
                                                            childProduct["childProductName"] = product["ProductName"];
                                                            childProduct["childProductImageUrl"] = product["ImageURL"];
                                                            childProduct["childProductOtherImageUrl"] = product["OtherImageList"];

                                                            childProduct["childProductOtherVideoUrl"] = product["Field4"];
                                                            childProduct["childProductUrl"] = product["ProductUrl"];
                                                            childProduct["childProductPrice"] = product["Price"];
                                                            childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                                                            childProduct["childProductDescription"] = product["Description"];
                                                            childProduct["childInternalProductId"] = product["ProductId"]
                                                        }
                                                        childProduct["ProductType"] = product["ProductType"];
                                                        childProduct["mainSKU"] = product["ProductSku"];
                                                        childProduct["childProductIdmain"] = product["ProductId"];
                                                        childProduct["childProductImageUrlMain"] = product["ImageURL"];
                                                        childProduct["childProductPriceMain"] = product["Price"];
                                                        childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];

                                                        childProduct["PromotionalMessage"] = product["PromotionalMessage"];
                                                        childProduct["childProductNameMain"] = product["ProductName"];
                                                        childProduct["childProductUrlMain"] = product["ProductUrl"];
                                                        childProduct["childreviewsCount"] = product["RatingCount"];
                                                        childProduct["childRating"] = product["Rating"];
                                                        childProduct["childCategoryName"] = product["CategoryName"];
                                                        childProduct["childCategoryId"] = product["CategoryId"];
                                                        childProduct["childProductDescription"] = product["Description"];
                                                        childProduct["Manufacturer"] = product["Manufacturer"];

                                                        productObj = new INC.classes.ProductAttObj(childProduct);

                                                        productObj["bundledProductId"] = pdpProductId;
                                                        productObj.mainId = product["ProductId"];
                                                        productObj.bundleId = bundleObj.id;
                                                        productObj.sku = productObj.id;
                                                        productObj.shortDescription = product["ShortDescription"]
                                                        productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                                        productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                                        productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                                        productObj.option[pAttributesObj["attributeId"]].att_id = pAttributesObj.attributeId
                                                        if (!Object.prototype.hasOwnProperty.call(dataStoreObj, product['ProductId'])) {
                                                            dataStoreObj[product['ProductId']] = {};
                                                        }
                                                        if (!Object.prototype.hasOwnProperty.call(dataStoreObj[product['ProductId']], productObj['id'])) {
                                                            dataStoreObj[product['ProductId']][productObj['id']] = {}
                                                        }
                                                        pAttObj = dataStoreObj[product['ProductId']][productObj['id']];
                                                        for (var pAtt in productObj) {
                                                            if (Object.prototype.hasOwnProperty.call(productObj, pAtt)) {
                                                                if (pAtt == "option") {
                                                                    if (!Object.prototype.hasOwnProperty.call(pAttObj, 'option')) {
                                                                        pAttObj["option"] = {}
                                                                    }
                                                                    Object.keys(productObj[pAtt]).forEach(function (key) {
                                                                        pAttObj[pAtt][key] = productObj[pAtt][key];
                                                                    });
                                                                } else {
                                                                    pAttObj[pAtt] = productObj[pAtt];
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (pAttributes.length == 0) {
                                        productObj = new INC.classes.ProductObj(product);
                                        productObj["bundleId"] = irbBundleObj["BundleId"];
                                        if (INC.config.recommendation == falseflag) {
                                            productObj["bundledProductId"] = pdpProductId;
                                        }
                                        productObj.sku = productObj.id;
                                        productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
                                        if (!Object.prototype.hasOwnProperty.call(dataStoreObj, productObj['mainId'])) {
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
                    }
                }
            }

            incDataStore.dataStoreObj = dataStoreObj;
            incDataStore.bundleProductsArray = bundleProductsArray;
            if (INC.config.recommendation == falseflag) {
                incDataStore.pdpProductId = pdpProductId;
            }
            incDataStore.bundleCartProducts = {};
        }

        function getFirstProductObjByMainId(findObj) {
            var childProductObj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            try {
                if (productListObj != undefined && productListObj[findObj["mainId"]] != undefined) {
                    childProductObj = productListObj[findObj["mainId"]][Object.keys(productListObj[findObj["mainId"]])[0]];
                }
            } catch (e) {
                console.error('e', e.stack);
                throw e;
            }
            return childProductObj;
        }

        function getProductById(findObj) {
            var childProductObj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
                for (var mainProductId in productListObj) {
                    for (var childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["id"] == findObj["id"]) {
                            childProductObj = productListObj[mainProductId][childProductId];
                            break;
                        }
                    }
                }
            }
            if (Object.keys(childProductObj).length == 0) {
                if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
                    for (var mainProductIds in productListObj) {
                        for (var childProductIds in productListObj[mainProductIds]) {
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
            var childProductObj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            if (Object.prototype.hasOwnProperty.call(findObj, "sku")) {
                for (var mainProductId in productListObj) {
                    for (var childProductId in productListObj[mainProductId]) {
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
            var catergoriesArray = [];
            var productListObj = INC.dataStore.dataStoreObj;
            var bundleProductsArray = INC.dataStore.bundleProductsArray;
            bundleProductsArray.forEach(function (productId) {
                for (var childProductId in productListObj[productId]) {
                    var indexOfCategoryId = catergoriesArray.indexOf(productListObj[productId][childProductId]["categoryId"]);
                    if (indexOfCategoryId == -1 && productListObj[productId][childProductId]["categoryId"] != INC.dataStore.clientProductDealsCategory && productListObj[productId][childProductId]["bundleId"] != undefined) {
                        catergoriesArray.push(productListObj[productId][childProductId]["categoryId"]);
                    }
                }
            });
            return catergoriesArray;
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

        function getProductColorsObj(findObj, type_of) {
            var productColorObj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            var productColorArrayObj = {}
            var productColorObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var mainProductId in productListObj) {

                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {

                                if (productListObj[mainProductId][childProductId]["option"]["0"].code == "Color") {
                                    if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"] != undefined && productListObj[mainProductId][childProductId]["option"]["0"] != null && productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                        if (type_of != undefined) {
                                            var attr_block = null;
                                            if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                                attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                            } else {
                                                attr_block = type_of.parentNode.parentNode.parentNode
                                            }
                                            var opt_text = ""
                                            var opt_size_text = ""
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
                var colorObj = {}
                colorObj["text"] = colorText;
                colorObj["colorCode"] = productColorArrayObj[colorText]["colorCode"];
                colorObj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
                colorObj["titleText"] = productColorArrayObj[colorText]["titleText"];
                colorObj["code"] = productColorArrayObj[colorText]["code"];
                colorObj["cpid"] = productColorArrayObj[colorText]["cpid"];
                colorObj["attLebel"] = productColorArrayObj[colorText]["attLebel"];
                colorObj["label"] = productColorArrayObj[colorText]["label"];
                colorObj["attrLength"] = productColorArrayObj[colorText]["attrLength"];
                colorObj["opttext"] = productColorArrayObj[colorText]["opttext"];
                colorObj["field1"] = productColorArrayObj[colorText]["field1"];
                colorObj["att_id"] = productColorArrayObj[colorText]["att_id"];
                colorObj["opt_id"] = productColorArrayObj[colorText]["opt_id"];
                colorObj["prc"] = productColorArrayObj[colorText]["prc"];

            });
            if (type_of == "size") {
                productColorObj["sizeArray"] = sortByKey(productColorObjArray, 'colorText');
            } else if (type_of == "zero") {
                productColorObj["att0Array"] = sortByKey(productColorObjArray, 'colorText');
            } else if (type_of == "third") {
                productColorObj["att3Array"] = sortByKey(productColorObjArray, 'colorText');
            } else {
                productColorObj["colorArray"] = sortByKey(productColorObjArray, 'colorText');
            }
            return productColorObj;
        }

        function colordata(productColorArrayObj, productListObj, mainProductId, childProductId) {
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["attLebel"] = productListObj[mainProductId][childProductId]["option"]["0"]["att_lebel"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["label"] = productListObj[mainProductId][childProductId]["option"]["0"]["label"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["attrLength"] = productListObj[mainProductId][childProductId]["option"]["0"]["attrLength"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["opttext"] = productListObj[mainProductId][childProductId]["option"]["0"]["opttext"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["field1"] = productListObj[mainProductId][childProductId]["option"]["0"]["field1"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["att_id"] = productListObj[mainProductId][childProductId]["option"]["0"]["att_id"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["0"]["opt_id"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["0"]["activePriceChild"];
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
            getProductopt0Obj: getProductopt0Obj,
            getProductByAtt: getProductByAtt
        }
    }

    INC.classes = {};
    INC.classes.ProductObj = function (product) {
        this.bundleId = "";
        this.id = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
        this.sku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
        this.mainsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
        this.childsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
        this.name = ((product != null) && (product != undefined)) ? product["ProductName"] : "";
        this.url = product["ProductUrl"]
        this.imageURL = product["ImageURL"]
        this.regularPrice = product["Price"];
        if (product["SpecialPrice"] != null && product["SpecialPrice"] != product["Price"]) {
            if (parseFloat(product["SpecialPrice"]) > parseFloat(product["Price"])) {
                this.regularPrice = product["SpecialPrice"]
                this.activePrice = product["Price"]
            } else {
                this.activePrice = product["SpecialPrice"]
            }
        } else {
            this.activePrice = product["Price"]
        }

        if (product["OtherImageList"] != null && product["OtherImageList"] != undefined) {
            this.otherImageList = product["OtherImageList"];
        } else {
            this.otherImageList = [];
        }

        if (product["OtherVideoList"] != null && product["Field4"] != undefined) {
            this.OtherVideoList = product["Field4"];
        } else {
            this.OtherVideoList = [];
        }
        if (product["Size"] != null && product["Size"] != undefined) {
            this.size = product["Size"];
        } else {
            this.size = ""
        }
        this.option = {};
        this.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
        this.categoryName = ((product != null) && (product != undefined)) ? product["CategoryName"] : "";
        this.categoryId = ((product != null) && (product != undefined)) ? product["CategoryId"] : "";
        this.description = ((product != null) && (product != undefined)) ? product["Description"] : "";
        this.shortDescription = ((product != null) && (product != undefined)) ? product["ShortDescription"] : "";
        this.ratingsCount = ((product != null) && (product != undefined)) ? product["RatingCount"] : "";
        this.reviewsCount = ((product != null) && (product != undefined)) ? product["Rating"] : "";

        if (product["PromotionalMessage"] != null) {
            this.PromotionalMessage = product["PromotionalMessage"];
        } else {
            this.PromotionalMessage = ""
        }
        if (product["ProductLevelDiscountMessage"] != null) {
            this.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"]
        } else {
            this.ProductLevelDiscountMessage = ""
        }
        this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
        this.skinType = ((product != null) && (product != undefined)) ? product["Field3"] : "";
        this.underTone = ((product != null) && (product != undefined)) ? product["Field4"] : "";
        this.finish = ((product != null) && (product != undefined)) ? product["Field5"] : "";
        this.coverage = ((product != null) && (product != undefined)) ? product["Field6"] : "";
        this.ProductType = ""
        if (product["ProductType"] != null && product["ProductType"] != undefined) {
            this.ProductType = product["ProductType"]
        }
        this.regularPriceMain = product["Price"];
        if (product["SpecialPrice"] != null && product["SpecialPrice"] != product["Price"]) {

            if (parseFloat(product["SpecialPrice"]) > parseFloat(product["Price"])) {
                this.regularPriceMain = product["SpecialPrice"]
                this.activePriceMain = product["Price"]
            } else {
                this.activePriceMain = product["SpecialPrice"];
            }
        } else {
            this.activePriceMain = product["Price"];
        }
        if (product["ProductName"] != null) {
            this.nameMain = product["ProductName"];
        } else {
            this.nameMain = ""
        }
        if (product["ImageURL"] != null) {
            this.imageURLMain = product["ImageURL"];
        } else {
            this.imageURLMain = ""
        }
        this.urlMain = product["ProductUrl"]
    }
    INC.classes.ProductAttObj = function (product) {
        this.bundleId = "";
        this.id = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
        this.sku = ((product != null) && (product != undefined)) ? product["childProductSku"] : "";
        this.mainsku = ((product != null) && (product != undefined)) ? product["mainSKU"] : "";
        this.childsku = ((product != null) && (product != undefined)) ? product["childProductSku"] : "";
        if (product["childProductName"] != null) {
            this.name = product["childProductName"];
        } else {
            this.name = "";
        }
        this.url = product["childProductUrl"]
        this.imageURL = product["childProductImageUrl"]
        this.regularPrice = ((product != null) && (product != undefined)) ? product["childProductPrice"] : "";
        if (product["childProductSpecialPrice"] != null && product["childProductSpecialPrice"] != product["childProductPrice"]) {
            if (parseFloat(product["childProductSpecialPrice"]) > parseFloat(product["childProductPrice"])) {
                this.regularPrice = product["childProductSpecialPrice"]
                this.activePrice = product["childProductPrice"]
            } else {
                this.activePrice = product["childProductSpecialPrice"];
            }
        } else {
            this.activePrice = product["childProductPrice"];
        }

        if (product["PromotionalMessage"] != null) {
            this.PromotionalMessage = product["PromotionalMessage"];
        } else {
            this.PromotionalMessage = ""
        }
        if (product["productLevelDiscountMessage"] != null) {
            this.ProductLevelDiscountMessage = product["productLevelDiscountMessage"]
        } else {
            this.ProductLevelDiscountMessage = ""
        }
        this.otherImageList = ((product != null) && (product != undefined)) ? product["childProductOtherImageUrl"] : [];
        this.otherVideoList = ((product != null) && (product != undefined)) ? product["childProductField4"] : [];
        this.otherOptionImageUrl = ((product != null) && (product != undefined)) ? product["optionImageUrl"] : [];
        this.size = "";
        this.option = {};

        if (((product != null) && (product != undefined))) {
            this.option[product["optionId"]] = {};
            if (product["option_text"] != undefined) {

                if (product["option_text"].indexOf('empty_header') >= 0) {
                    this.option[product["optionId"]].text = decodeEntity(product["option_text"])
                    this.option[product["optionId"]].option_text1 = decodeEntity(product["option_text1"])
                    this.option[product["optionId"]].option_text2 = decodeEntity(product["option_text2"])
                    this.option[product["optionId"]].option_text = decodeEntity(product["optionText"]);
                    this.option[product["optionId"]].headers = product["headers"];
                    this.option[product["optionId"]].combo_options = product["combo_options"];
                } else {
                    this.option[product["optionId"]].text = decodeEntity(product["option_text1"]);
                    this.option[product["optionId"]].option_text = decodeEntity(product["option_text"]);
                    this.option[product["optionId"]].option_text1 = decodeEntity(product["optionText"]);
                    this.option[product["optionId"]].option_text2 = decodeEntity(product["option_text2"]);
                    this.option[product["optionId"]].headers = product["headers"];
                    this.option[product["optionId"]].combo_options = product["combo_options"];

                }
            } else {
                this.option[product["optionId"]].text = decodeEntity(product["optionText"]);
            }

            this.option[product["optionId"]].titleText = (product["childProductField2"] != null) ? product["childProductField2"] : "";
            this.option[product["optionId"]].imgSrc = (product["optionImageUrl"] != null) ? product["optionImageUrl"] : "";
            this.option[product["optionId"]].colorCode = (product["colorCode"] != null) ? product["colorCode"] : "";
            this.option[product["optionId"]].cpid = (product["childProductId"] != null) ? product["childProductId"] : "";
            this.option[product["optionId"]].opt_id = (product["optionId"] != null) ? product["optionId"] : "";


            this.option[product["optionId"]].att_lebel = product.att_lebel;
            this.option[product["optionId"]].field1 = product.childProductField1;
            this.option[product["optionId"]].attrLength = product.attrLength;
            this.option[product["optionId"]].activePriceChild = product.attrLength;
            if (product["childProductSpecialPrice"] != null && product["childProductSpecialPrice"] != product["childProductPrice"]) {
                if (parseFloat(product["childProductSpecialPrice"]) > parseFloat(product["childProductPrice"])) {
                    this.option[product["optionId"]].activePriceChild = product["childProductSpecialPrice"]
                    this.option[product["optionId"]].activePriceChild = product["childProductPrice"]
                } else {
                    this.option[product["optionId"]].activePriceChild = product["childProductSpecialPrice"];
                }
            } else {
                this.option[product["optionId"]].activePriceChild = product["childProductPrice"];
            }

        }
        this.categoryName = ((product != null) && (product != undefined)) ? product["childCategoryName"] : "";
        this.categoryId = ((product != null) && (product != undefined)) ? product["childCategoryId"] : "";
        this.description = ((product != null) && (product != undefined)) ? product["childProductDescription"] : "";
        if (product["ShortDescription"] != null) {
            this.shortDescription = product["ShortDescription"]
        } else if (product["Field1"] != null) {
            this.shortDescription = product["Field1"]
        } else {
            this.shortDescription = ""
        }
        this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
        this.ratingsCount = ((product != null) && (product != undefined)) ? product["childreviewsCount"] : "";
        this.reviewsCount = ((product != null) && (product != undefined)) ? product["childRating"] : "";

        this.skinType = ((product != null) && (product != undefined)) ? product["childProductField3"] : "";
        this.underTone = ((product != null) && (product != undefined)) ? product["childProductField4"] : "";
        this.finish = ((product != null) && (product != undefined)) ? product["childProductField5"] : "";
        this.coverage = ((product != null) && (product != undefined)) ? product["childProductField6"] : "";
        this.ProductType = ((product != null) && (product != undefined)) ? product["ProductType"] : "";
        this.regularPriceMain = product["childProductPriceMain"];
        this.activePriceMain = product["childProductPriceMain"];
        if (product["childProductSpecialPriceMain"] != null && product["childProductSpecialPriceMain"] != product["childProductPriceMain"]) {
            if (parseFloat(product["childProductSpecialPriceMain"]) > parseFloat(product["childProductPriceMain"])) {
                this.regularPriceMain = product["childProductSpecialPriceMain"]
                this.activePriceMain = product["childProductPrice"]
            } else {
                this.activePriceMain = product["childProductSpecialPriceMain"];
            }
        }
        this.nameMain = ""
        if (product["childProductNameMain"] != null) {
            this.nameMain = product["childProductNameMain"];
        }
        this.imageURLMain = ""
        if (product["childProductImageUrlMain"] != null) {
            this.imageURLMain = product["childProductImageUrlMain"];
        }
        this.urlMain = product["childProductUrlMain"]

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
                        // var p_ids = INC.methods.getProductIdFromWebPage()
                        // INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view");
                    }
                } else {
                    if (INC.config.pageType == "productList") {
                        INC.config.modal_called = true
                    } else {
                        if (INC.config.VariantProduct)
                            return
                        INC.config.VariantProduct = true
                        if (INC.methods.detectPageType() == "cartPage")
                            return
                        INC.init()
                    }

                }
            }
        }
        xhr.send(JSON.stringify(nwConfigObject.params));
    }

    INC.methods.irbReq = function (productId, bundleCount, elementName) {
        var elmname = elementName || "";
        var productIdReq = productId;
        var apiKey = INC.config.clientToken;
        var bundleReqCount = bundleCount || 5;
        var irbReqParams = ""
        var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
        if (getCountry() == "b58lus") {
            irbPATH = "//usarapidload.increasingly.co/increasingly_bundles?irb/";
        }
        if (getCountry() == "b58lau") {
            irbPATH = "//jprapidload.increasingly.co/increasingly_bundles?irb/";
        }
        irbReqParams = "product_ids=" + productIdReq + "&category_id=" + "&api_key=" + apiKey + "&page_type=" + elmname + "&fr=" + "1" + "&client_visitor_id=" + INC.config.ivid
        if (INC.config.pageType != "pdp" && INC.config.pageType != "cartPage") {
            irbReqParams = irbReqParams + "&is_tc=" + "1" + "&no_of_bundles=" + bundleReqCount
        }

        var irbReqURL = decodeURI(irbPATH + btoa(irbReqParams));
        var networkConfigObj = new INC.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL;
        return this.refreshBundles(networkConfigObj);
    }

    INC.methods.refreshBundles = function (nwConfigObj) {
        var incDataStore = INC.dataStore;
        INC.methods.networkReq(nwConfigObj, function (response) {
            if (response.length == 0) {
                return;
            }
            var responseJSON = ""
            if (typeof (response) != "object") {
                responseJSON = JSON.parse(response);
            } else {
                responseJSON = response;
            }
            var bundleResponse = responseJSON;

            if (Object.prototype.hasOwnProperty.call(responseJSON, "Bundles") && (responseJSON.Bundles != null)) {
                INC.config.recommendation = false;
                responseJSON.timeStamp = Date.now();
                INC.dataStore.methods().buildDataStoreObj(bundleResponse);
                if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) {
                    return;
                }
                switch (INC.config.pageType) {
                    case "pdp":
                        INC.methods.createPDPBlock();

                        syncClientAttributes(true)

                        break;
                    case "cartPage":
                        INC.methods.createAMBlock();

                        break;
                    case "productList":
                        INC.methods.createSidebarBlock();
                        INC.methods.showSidebar();
                        break;
                }
            } else if (Object.prototype.hasOwnProperty.call(responseJSON, "CategoryRecommendations") && (responseJSON.CategoryRecommendations.length > 0)) {
                responseJSON.timeStamp = Date.now();
                INC.config.recommendation = true
                INC.dataStore.methods().buildDataStoreObj(bundleResponse);
                if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) {
                    return;
                }
                if (INC.config.pageType == "pdp") {
                    INC.methods.createAMBlock("PDP")
                }
            }
        });
    }

    INC.methods.irbReq_is_tc = function (productIds, bundleCount, elementNameel) {
        var elementName = elementNameel || "";
        var productId = productIds;
        var apiKey = INC.config.clientToken;
        var bundleReqCount = bundleCount || 5;
        var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
        if (getCountry() == "b58lau") {
            irbPATH = "//jprapidload.increasingly.co/increasingly_bundles?irb/";
        }
        if (getCountry() == "b58lus") {
            irbPATH = "//usarapidload.increasingly.co/increasingly_bundles?irb/";
        }
        var vi = INC.config.ivid
        var irbparam = "product_ids=" + productId + "&api_key=" + apiKey + "&page_type=" + elementName + "&fr=" + "1" + "&client_visitor_id=" + vi + "&is_tc=" + "1" + "&no_of_bundles=" + bundleReqCount;

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
            }
        }
        xhr.send(JSON.stringify(networkConfigObj["params"]));
    }
    INC.methods.get_product_ratings = function (filed3, field2, rating_containers) {

        var count = document.createElement('span');
        count.classList.add('rating_count')
        rating_containers.appendChild(count);
        var avg = document.createElement('span');
        avg.classList.add('rating_avg')

        if (field2 == undefined || field2 == "NaN" || Number(field2) == 0) {

            rating_containers.classList.add('inc_hide')
            rating_containers.style.visibility = 'hidden'
        } else {
            count.textContent = field2

        }

        var stars = document.createElement('span');
        if (filed3 != undefined && filed3 != "") {
            if (Number(filed3 != 0)) {
                var rating = filed3;
                if (rating == "" || rating == undefined || rating == "NaN" || rating == "norating") {
                    rating = 0
                }
                rating = parseFloat(rating).toFixed(1)
                rating = rating.toString();
                var rating_m = null;
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
                } else if (isNaN(rating_m)) {
                    rating_containers.classList.add("rating_" + rating);
                } else {
                    rating_containers.classList.add("rating_" + rating);
                }
                stars.classList.add('rating_stars');
                rating_containers.appendChild(stars);
            } else {
                stars.innerText = "."
                stars.style.color = "#fff"
                stars.classList.add('rating_stars');
                stars.classList.add('noratings');
                rating_containers.appendChild(stars);
            }
        } else {
            stars.innerText = "."
            stars.style.color = "#fff"
            stars.classList.add('rating_stars');
            stars.classList.add('noratings');
            rating_containers.appendChild(stars);
        }
    }

    INC.methods.getProductIdFromWebPage = function () {
        let PRODUCTID = document.querySelector('.pdp-wrap').dataset.parentid
        INC.config.Product_id = PRODUCTID
        return PRODUCTID
    }

    INC.methods.detectPageType = function () {
        if (document.querySelector('.pdp-wrap') != null)
            return "pdp";
        if (document.querySelector(".cart-items-heads") != null)
            return "cartPage";
    }
    INC.methods.showSidebar = function () {
        // Disable Sidebar Completely
        setTimeout(() => {
            window.location.href = INC.clientConfig.checkoutLink
        }, 1000)
        return

        var sidebarel = document.querySelector('.inc_sidebar_modal_block')
        if (sidebarel != null) {
            if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                setTimeout(() => {
                    window.location.href = INC.clientConfig.checkoutLink
                }, 1000);
                return
            }

            if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                var sidebarouter = document.querySelector('.sidebar_outer')
                if (sidebarouter != null) {
                    document.querySelector("html").classList.add("inc_overlay");
                    var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
                    if (elSidebarOverlay != null) {
                        elSidebarOverlay.style.display = "block";
                    }
                    sidebarouter.style.display = "block"
                    sidebarel.style.display = "block"
                    sidebarel.classList.add('inc_active')
                    sidebarouter.classList.add('sidebar_outer_active')

                }

                document.querySelector('.inc_recommended_tabs_list_item_block').click()

            }
        }
        if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block') != null) {
            document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block').classList.remove('inc_loading');
        }
        updateAllSelection(true)
    }
    INC.methods.hideSidebar = function () {
        var sidebarelhide = document.querySelector('.inc_sidebar_modal_block')
        INC.config.sidebarremovedprod = []
        INC.bundles = true;
        document.querySelector('html').style = '';
        document.querySelector('html').classList.remove('inc_overlay')
        document.querySelector('body').classList.remove('inc_popup_open');
        var sidebarouterH = document.querySelector('.sidebar_outer')
        if (sidebarouterH != null) {
            document.querySelector(".inc_sidebar_overlay_block").style.display = "none"
            sidebarelhide.style.display = "none"
            sidebarouterH.style.display = "none"
            sidebarouterH.classList.remove('sidebar_outer_active')
            sidebarelhide.classList.remove('inc_active')
        }
        if (INC.config.pageType == "pdp") {
            if (document.querySelector('.inc_pdp_block') != null) {
                var rempdpel = document.querySelector('.inc_pdp_block')
                if (rempdpel != null) {
                    rempdpel.parentNode.removeChild(rempdpel)
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
                INC.methods.createPDPBlock("hidesidebar")
                setTimeout(function () {
                    INC.methods.createPDPBlock("sidebar")
                }, 200)
            }
        } else {
            INC.methods.clear()
        }
        Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function (elm) {
            elm.parentNode.removeChild(elm);
        });
        setTimeout(function () {
            if (document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block") != null) {
                document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block").classList.remove("is_special_ecirp");
            }
        }, 30);
        setTimeout(function () {
            var allchecked = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_showcase_block .inc_product_desc_add_img.checked')
            var coch = 0
            for (var alcheckp in allchecked) {
                if (allchecked[alcheckp] != undefined && coch != 0 && coch != 1 && Object.prototype.hasOwnProperty.call(allchecked, alcheckp)) {
                    coch++
                    allchecked[alcheckp].click()
                }
            }
            INC.config.pdpaddedProductList = Object.keys(INC.dataStore.bundleCartProducts)

            if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block') != null) {
                document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block').classList.remove('is_special_ecirp');
            }
        }, 30)


    }
    INC.methods.createAMBlock = function (PDP_type) {
        if (INC.dataStore.dataStoreObj.undefined == undefined) {
            document.querySelector('html').classList.add('inc-prevent-hor-scroll');
            var amBlock = generate_html_tag('div', 'inc_af_block')
            amBlock.classList.add('af_cart_page')
            amBlock.innerHTML = cart_html
            amBlock.querySelector(".inc_af_product-list_block").innerHTML = "";
            var elAmTitleText = amBlock.querySelector(".inc_af_title_text_block");
            var amProductListBlock = amBlock.querySelector(".inc_af_product-list_block");
            var bundleProductsArray = INC.dataStore.bundleProductsArray;
            if (INC.config.pageType == "pdp") {
                if (INC.dataStore.bundleProductsArray.indexOf(INC.config.Product_id) == -1) {
                    INC.dataStore.bundleProductsArray.push(INC.config.Product_id)
                }
                INC.config.cartproductids = []
            }

            var duplamid = []
            if (PDP_type == "PDP") {
                let countBlockAdded = 0
                bundleProductsArray = INC.config.recommendationProduct
                bundleProductsArray.forEach(function (mainProductId) {
                    if (duplamid.indexOf(mainProductId) == -1) {
                        duplamid.push(mainProductId)
                        var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                            mainId: mainProductId
                        });
                        var prd_modulerec = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false, amBlock);
                        countBlockAdded = countBlockAdded + 1
                        if (prd_modulerec.getAttribute('data-id') != "undefined") {
                            amProductListBlock.appendChild(prd_modulerec);
                        }
                        elAmTitleText.innerText = "Best Selling Similar Products";
                    }
                });
                let productListBlock = amBlock.querySelector('.inc_af_product-list_block')
                if (countBlockAdded < 3) {
                    productListBlock.classList.add('less_product')
                }

                if (countBlockAdded == 1) {
                    productListBlock.classList.add('inc_1')
                }
            } else {
                let countBlockAdded = 0
                if (bundleProductsArray.length > 0) {
                    bundleProductsArray.forEach(function (mainProductId) {
                        if (duplamid.indexOf(mainProductId) == -1) {
                            duplamid.push(mainProductId)
                            if (INC.config.cartproductids.indexOf(mainProductId) == -1) {
                                var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                                    mainId: mainProductId
                                });
                                var prd_module = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false, amBlock);
                                countBlockAdded = countBlockAdded + 1
                                if (prd_module.getAttribute('data-id') != "undefined") {
                                    elAmTitleText.innerText = "Other customers also viewed";
                                    amProductListBlock.appendChild(prd_module);
                                    elAmTitleText.innerText = INC.config.BeforeYouChecktext;
                                }
                            }
                        }
                    });
                }
                let productListBlock = amBlock.querySelector('.inc_af_product-list_block')
                if (countBlockAdded < 3) {
                    productListBlock.classList.add('less_product')
                }
                if (countBlockAdded == 1) {
                    productListBlock.classList.add('inc_' + countBlockAdded)
                }
            }

            var amProductBlocks = amBlock.querySelectorAll('.inc_product_block');
            Array.prototype.forEach.call(amProductBlocks, function (productBlock) {
                productBlock.querySelector('.inc_product_desc_add_block').addEventListener("click", function () {

                    addprodsingle(this)
                });
            });

            var prod_sl_c = 1
            if (amBlock != null) {
                Array.prototype.forEach.call(document.querySelectorAll('.inc_af_block'), function (el) {
                    el.parentNode.removeChild(el);
                });
            }
            if (amBlock.querySelector('.inc_af_block .inc_product_showcase_block') == null) {
                return;
            }


            if (PDP_type == "PDP") {

                let PDPPlacement = document.querySelector('.pdp-wrap')
                if (PDPPlacement != null) {
                    insertAfter(amBlock, PDPPlacement)
                }
            } else {
                if (bundleProductsArray.length > 0) {
                    var CartPos = document.querySelector('.cart-items-checkout-wrapper')
                    if (window.innerWidth < 992) {
                        CartPos = document.querySelectorAll('.mar-b-25.ng-star-inserted')[1]
                    }
                    if (CartPos != null) {
                        var carnext = CartPos
                        insertAfter(amBlock, carnext)

                    }
                }
            }

            amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "hidden";
            var productBlocks = amProductListBlock.querySelectorAll('.inc_product_module_block');
            var sliderBtnCounter = 0;
            if (productBlocks.length > prod_sl_c) {
                amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "visible";
                amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "visible";
                amBlock.querySelector('.inc_af_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "visible";
                amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "visible";
                amBlock.querySelector('.inc_af_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
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
                amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "hidden";
                amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "hidden";
                amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "hidden";
                amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "hidden";
            }
            amBlock.querySelector('.inc_af_right_btn_block').addEventListener("click", function () {
                sliderBtnCounter++;
                if (sliderBtnCounter > productBlocks.length - 1) {
                    sliderBtnCounter--;
                }
                var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
                var cc_ounts = 0;
                if (window.innerWidth < 800) {
                    cc_ounts = 2;
                } else if (window.innerWidth < 1200) {
                    cc_ounts = 3;
                } else {
                    cc_ounts = 4;
                }
                var width_slide = ""
                if (INC.config.pageType == "pdp" && !INC.config.recommendation) {
                    width_slide = 188;
                } else if (INC.config.recommendation) {
                    var wid_sld = document.querySelector('.inc_product_module_block').clientWidth
                    if (window.innerWidth < 500) {
                        width_slide = wid_sld
                    } else if (window.innerWidth < 800) {
                        width_slide = 306
                    } else if (window.innerWidth < 1200) {
                        width_slide = 306;
                    } else {
                        width_slide = 306;
                    }
                } else {
                    var wid_sld = document.querySelector('.inc_product_module_block').clientWidth
                    if (window.innerWidth < 500) {
                        width_slide = wid_sld
                    } else if (window.innerWidth < 800) {
                        width_slide = 188
                    } else if (window.innerWidth < 1200) {
                        width_slide = 188;
                    } else {
                        width_slide = 188;
                    }
                }
                if (+INC.clientConfig.slidevalue + +cc_ounts < all_p_length) {
                    amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                    amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                    INC.clientConfig.slidevalue++
                    INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - width_slide) + 'px';
                    if (window.innerWidth < 500) {
                        var menu = amBlock.parentNode.parentNode.querySelector('.inc_af_product-list_block');
                        menu.setAttribute('style', 'left:' + INC.clientConfig.offset + ';transition-duration:0.3s;-webkit-transition-duration:0.3s;-moz-transition-duration:0.3s;-ms-transition-duration:0.3s;-o-transition-duration:0.3s;')
                    } else {
                        var menu = amBlock.parentNode.parentNode.querySelector('.inc_af_product-list_block');
                        menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.3s;-webkit-transition-duration:0.3s;-moz-transition-duration:0.3s;-ms-transition-duration:0.3s;-o-transition-duration:0.3s;')
                    }
                    if (document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active') != null) {
                        document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active').classList.remove('inc_active')
                    }
                    if (document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue] != null) {
                        document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue].classList.add('inc_active')
                    }
                }

                if (+INC.clientConfig.slidevalue + +cc_ounts == all_p_length) {
                    amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
                }
            });

            amBlock.querySelector('.inc_af_left_btn_block').addEventListener("click", function () {
                sliderBtnCounter--;
                if (sliderBtnCounter == -1) {
                    sliderBtnCounter = 0;
                }
                if (INC.clientConfig.slidevalue == -1) {
                    INC.clientConfig.slidevalue = 0;
                }
                var width_slide = ""
                if (INC.config.pageType == "pdp" && !INC.config.recommendation) {
                    width_slide = 188;
                } else if (INC.config.recommendation) {
                    var wid_sld = document.querySelector('.inc_product_module_block').clientWidth
                    if (window.innerWidth < 500) {
                        width_slide = wid_sld
                    } else if (window.innerWidth < 800) {
                        width_slide = 306
                    } else if (window.innerWidth < 1200) {
                        width_slide = 306;
                    } else {
                        width_slide = 306;
                    }
                } else {
                    if (window.innerWidth < 500) {
                        var wid_sld = document.querySelector('.inc_product_module_block').clientWidth
                        width_slide = wid_sld
                    } else if (window.innerWidth < 800) {
                        width_slide = 188
                    } else if (window.innerWidth < 1200) {
                        width_slide = 188;
                    } else {
                        width_slide = 188;
                    }
                }
                if (INC.clientConfig.slidevalue > 0) {
                    amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                    amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                    INC.clientConfig.slidevalue--
                    INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + width_slide) + 'px';
                    if (window.innerWidth < 500) {
                        var menu = amBlock.parentNode.parentNode.querySelector('.inc_af_product-list_block');
                        menu.setAttribute('style', 'left:' + INC.clientConfig.offset + ';transition-duration:0.3s;-webkit-transition-duration:0.3s;-moz-transition-duration:0.3s;-ms-transition-duration:0.3s;-o-transition-duration:0.3s;')
                    } else {
                        var menu = amBlock.parentNode.parentNode.querySelector('.inc_af_product-list_block');
                        menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.3s;-webkit-transition-duration:0.3s;-moz-transition-duration:0.3s;-ms-transition-duration:0.3s;-o-transition-duration:0.3s;')
                    }
                    if (document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active') != null) {
                        document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active').classList.remove('inc_active')
                    }
                    if (document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue] != null) {
                        document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue].classList.add('inc_active')
                    }
                }
                if (INC.clientConfig.slidevalue == 0) {
                    amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
                }
            });

            setTimeout(function () {
                var all_list_el = document.querySelectorAll('.inc_af_product-list_block .inc_product_showcase_block')
                for (var all_list in all_list_el) {
                    if (Object.prototype.hasOwnProperty.call(all_list_el, all_list)) {
                        var prd_moduleb = all_list_el[all_list].parentNode
                        var main_idsd = ""
                        if (prd_moduleb != null) {
                            main_idsd = prd_moduleb.getAttribute('data-main_id')
                        }
                        if (all_list_el[all_list].querySelector('.inc_product_desc_att_zero_block.inc_active') != null) {
                            if (prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"]') != null) {
                                if (prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_size_list_item_img_block') != null) {
                                    prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_size_list_item_img_block').click()
                                } else if (all_list_el[all_list].querySelector('.inc_product_desc_att_size_list_item_img_block') != null) {
                                    all_list_el[all_list].querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                                }
                            } else if (all_list_el[all_list].querySelector('.inc_product_desc_att_size_list_item_img_block') != null) {
                                all_list_el[all_list].querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                            }
                        }
                        if (all_list_el[all_list].querySelector('.inc_product_desc_att_color_block.inc_active') != null) {
                            if (prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + main_idsd + '"]') != null) {
                                if (prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_color_list_item_img_block') != null) {
                                    prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_color_list_item_img_block').click()
                                }
                            } else if (all_list_el[all_list].querySelector('.inc_product_desc_att_color_list_item_img_block') != null) {
                                all_list_el[all_list].querySelector('.inc_product_desc_att_color_list_item_img_block').click()
                            }
                        } else if (all_list_el[all_list].querySelector('.inc_product_desc_att_size_list_item_img_block') != null) {
                            all_list_el[all_list].querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                        }
                    }
                }
                onloadpdp = true
            }, 400)
            setTimeout(function () {
                var inc_prod_img = document.querySelectorAll('.inc_product_img_main_img img')
                for (var i_prd_image in inc_prod_img) {
                    if (inc_prod_img[i_prd_image] != null && Object.prototype.hasOwnProperty.call(inc_prod_img, i_prd_image)) {
                        inc_prod_img[i_prd_image].setAttribute('style', INC.config.styleft)
                    }
                }
            }, 2000)
        }
        if (document.querySelector('.inc_af_block') != null) {
            if (INC.config.pageType == "cartPage") {
                document.querySelector('.inc_af_block').classList.add('af_cart_page')
            } else if (INC.config.pageType == "pdp") {
                document.querySelector('.inc_af_block').classList.add('inc_recommendations')
            }
        }
        updateAllSelection()
    }


    function addprodsingle(element) {
        var productBlockNode = element.parentNode.parentNode;
        if (INC.config.pageType == 'cartPage') {
            productBlockNode = element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
        }

        var flag_check = INC.methods.checkVariantSelection(productBlockNode)
        if (element.parentNode.parentNode.className == "inc_product_desc_block") {
            productBlockNode = element.parentNode.parentNode.parentNode.parentNode
        }
        if (productBlockNode.classList.contains('inc_product_block') == trueflag) {
            productBlockNode = productBlockNode.parentNode.parentNode
        }

        // if (INC.config.recommendation) {
        //     productBlockNode = productBlockNode.parentElement.parentElement.parentElement.parentElement
        // }

        var sku = productBlockNode.getAttribute('data-sku');
        if (sku == undefined && INC.config.recommendation) {
            productBlockNode = productBlockNode.parentElement.parentElement
            sku = productBlockNode.getAttribute('data-sku');
        }

        var findObj = new INC.classes.FindObj({
            id: sku
        });
        var add_btn = productBlockNode.querySelector('.inc_product_add_text')
        var add_btn_click = productBlockNode.querySelector('.inc_product_add_text');
        var add_prod_im = productBlockNode.querySelectorAll('.inc_product_desc_add_img');

        if (flag_check == 1) {
            if (INC.config.disablebtn == trueflag) {
                INC.config.disablebtn = false;
                if (element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_showcase_block') == trueflag || element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_modal_block') == trueflag) {
                    var popbtn = productBlockNode.querySelector('.inc_product_modal_block .inc_product_desc_add_text')
                    popbtn.innerText = "Adding..."
                    productBlockNode.querySelector('.inc_product_add_text').innerText = "Adding..."
                    INC.methods.addProductToCart(findObj, productBlockNode, add_btn_click, add_prod_im, add_btn, popbtn);
                }
            }
        }
    }

    function scrollincelmtoview(element) {
        var topOfElement = element.offsetTop + 50
        window.scroll({
            top: topOfElement,
            behavior: "smooth"
        });
    }
    INC.methods.createPDPBlock = function (sidebar) {
        document.querySelector('body').classList.add('inc_bundles');
        document.querySelector('html').classList.add('inc-prevent-hor-scroll');
        var empty_sidebarflag = false
        if (INC.dataStore.dataStoreObj[INC.config.Product_id] != undefined) {
            if (INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id] != undefined) {
                if (INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id].bundleId == "12345679") {
                    empty_sidebarflag = true
                }
            }
        }
        if (INC.bundles == falseflag && sidebar != 'sidebar' && sidebar != 'hidesidebar') {
            return;
        }
        if (sidebar != "sidebar") {
            if (INC.dataStore.dataStoreObj.undefined != undefined || empty_sidebarflag == falseflag) {
                var pdpBlock = generate_html_tag('div', 'inc_pdp_block')
                pdpBlock.innerHTML = pdp_html
                pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_title_text').innerText = INC.config.deviceType == "mobile" ? "Total Bundle Price " : "Total Bundle Price "
                pdpBlock.setAttribute('style', 'clear: both;')
                var modalTitle = pdpBlock.querySelector('.inc_pdp_title_text');
                modalTitle.innerText = INC.config.FBTTitle

                var pdpProductId = INC.dataStore.methods().getFirstProductObjByMainId({
                    mainId: INC.dataStore.pdpProductId
                }).id;
                var firstProductObjByMainId = ''
                var pdpBundleProductListMainBlock = null;
                var mainProductBlock = this.createProductModuleBlock(pdpProductId, "pdp", false, pdpBlock, "mainprod");
                var bundleProductsArray = INC.dataStore.bundleProductsArray;
                if (INC.config.db_products === 0) {

                    INC.config.db_products = bundleProductsArray.length
                }

                if (window.innerWidth < 800) {
                    if (INC.config.db_products > 3) {
                        INC.config.db_products = 2
                    }
                }

                if (INC.config.pdpBundles.length == 0) {
                    let copyBundles = []
                    for (let i = 0; i < 5; i++) {
                        if (bundleProductsArray[i] !== undefined) {
                            copyBundles.push(bundleProductsArray[i])
                        }
                    }
                    INC.config.pdpBundles = copyBundles

                } else {
                    bundleProductsArray = INC.config.pdpBundles
                }

                var elPdpMainProductBlock = pdpBlock.querySelector('.inc_pdp_product-main_block');

                elPdpMainProductBlock.appendChild(mainProductBlock);
                pdpBundleProductListMainBlock = pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block');
                pdpBundleProductListMainBlock.innerHTML = "";
                var pdpBundleProductListItemsBlock = pdpBlock.querySelector('.inc_pdp_bundle_product_list_items_block');
                pdpBundleProductListItemsBlock.innerHTML = "";

                var productVisibleCount = (bundleProductsArray.length > 5) ? 5 : bundleProductsArray.length;
                if (INC.config.deviceType == 'mobile')
                    productVisibleCount = productVisibleCount < 3 ? productVisibleCount : 2
                for (var i = 0; i < productVisibleCount; i++) {
                    firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                        mainId: bundleProductsArray[i]
                    });
                    var productBlock = this.createProductModuleBlock(firstProductObjByMainId.id, "pdp", true, pdpBlock);
                    pdpBundleProductListMainBlock.appendChild(productBlock);
                    var productListItemBlock = this.createProductListItemBlock(firstProductObjByMainId, "pdp");
                    pdpBundleProductListItemsBlock.appendChild(productListItemBlock);
                }

                if (productVisibleCount == 1) {
                    pdpBlock.querySelector('.inc_pdp_bundle_block').classList.add('inc_pdp_single_prod')
                }

                var header = pdpBlock.querySelector('.inc_pdp_bundle_product_header_text');
                if (header != null) {
                    header.innerText = "Frequently Bought with"
                    header.style.textTransform = "none"
                }

                var mainprodimgsrc = pdpBlock.querySelector('.inc_pdp_product-main_block .inc_product_img_main_img img').getAttribute('data-src')
                var secbundleimgsrc = pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_img_main_img img').getAttribute('data-src')
                var thirdbundleimgsrc = null
                if (pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block').querySelectorAll('.inc_product_module_block')[1] !== undefined) {
                    var thirdbundleimgsrc = pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block').querySelectorAll('.inc_product_module_block')[1].querySelector('.inc_product_img_main_img img').getAttribute('data-src')
                }

                var inc_bundle_avail_block = generate_html_tag('div', 'inc_bundle_avail_block')
                var toplevelbundleblock = null
                if (thirdbundleimgsrc) {
                    toplevelbundleblock = "<div class='inc_bundle_avail_img first'><img src='" + mainprodimgsrc + "'></div><span></span> <div class='inc_bundle_avail_img second'><img src='" + secbundleimgsrc + "'></div><span></span><div class='inc_bundle_avail_img third'><img src='" + thirdbundleimgsrc + "'></div><div class='inc_bundle_avail_btn'>Bundle Available</div>"

                } else {

                    toplevelbundleblock = "<div class='inc_bundle_avail_img first'><img src='" + mainprodimgsrc + "'></div><span></span> <div class='inc_bundle_avail_img second'><img src='" + secbundleimgsrc + "'></div><div class='inc_bundle_avail_btn'>BUNDLE AVAILABLE</div>"
                }
                inc_bundle_avail_block.innerHTML = toplevelbundleblock
                inc_bundle_avail_block.querySelector('.inc_bundle_avail_btn').addEventListener('click', function () {
                    var pdpelm = document.querySelector('.inc_pdp_block')
                    if (pdpelm != null) {
                        scrollincelmtoview(pdpelm)
                    }
                })



                INC.methods.clear();

                pdpBlock.querySelector('.inc_pdp_bundle_product_list_items_block').classList.add("inc_active");
                var pdpBundleCartBlock = this.createPDPBundleCartBlock(pdpBlock);
                var rpdpBundleCartBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_block')
                rpdpBundleCartBlock.parentNode.removeChild(rpdpBundleCartBlock);
                pdpBlock.querySelector('.inc_pdp_bundle_block').appendChild(pdpBundleCartBlock);

                let PDPPlacement = document.querySelector('.pdp-modules')
                if (window.innerWidth < 798) {
                    PDPPlacement = document.querySelector('.pdp-modules')
                }
                var fabricavail = false
                var client_var = ""
                if (document.querySelector('.swatch-option.selected') != null) {
                    client_var = document.querySelector('.swatch-option.selected').getAttribute('data-option-label').trim().toLocaleLowerCase()
                }
                if (document.querySelector('.page-product-bundle .fieldset-bundle-options .option .option:checked') != null) {
                    var elmfabric = document.querySelector('.page-product-bundle .fieldset-bundle-options .option .option:checked+.label').parentNode
                    client_var = elmfabric.innerText.trim().toLocaleLowerCase()
                    if (elmfabric.querySelector('input') != null) {
                        client_var = elmfabric.querySelector('input').value
                        fabricavail = true
                    }
                }
                if (document.querySelector('.product-options-wrapper select') != null) {
                    var selvar_ = document.querySelector('.product-options-wrapper select');
                    client_var = selvar_.options[selvar_.selectedIndex].innerText.trim().toLocaleLowerCase();
                }

                if (document.querySelector('.product-add-form .swatch-option') != null && client_var == "") {
                    if (document.querySelector('.product-add-form .swatch-option').getAttribute('data-option-label') != null) {
                        client_var = document.querySelector('.product-add-form .swatch-option').getAttribute('data-option-label').trim().toLocaleLowerCase()
                    } else if (document.querySelector('.page-product-bundle .fieldset-bundle-options .option .option+.label') != null) {
                        client_var = document.querySelector('.page-product-bundle .fieldset-bundle-options .option .option+.label').parentNode.innerText.trim().toLocaleLowerCase()
                    }
                }


                if (PDPPlacement != null) {
                    var pdpelplc = PDPPlacement
                    pdpelplc.parentNode.insertBefore(pdpBlock, pdpelplc)
                }

                var elProductAddBlock = pdpBlock.querySelectorAll('.inc_product_desc_add_block')
                var productBlocks = pdpBlock.querySelector('.inc_pdp_bundle_product_list_block').querySelectorAll('.inc_product_module_block');
                if (document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header') != null) {
                    document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header').innerHTML = "Selected Product"
                    document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header').style.textTransform = "none"
                }
                pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute("style", "opacity:0.5");
                pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('title', 'Scroll left')
                pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('title', 'Scroll right')
                var sliderBtnCounter = 0;
                var lengthCount = productBlocks.length + 1;
                var prd_length = 1
                if (window.innerWidth >= 1268) {
                    prd_length = 2
                }


                pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_block').addEventListener("click", function () {

                    var prod_c = 1;
                    var width_prod = 300;
                    if (window.innerWidth >= 840 && window.innerWidth < 1190) {
                        width_prod = 300;
                    } else if (window.innerWidth >= 1268) {
                        prod_c = 2
                        if (window.innerWidth > 1368) {
                            width_prod = 300;
                        } else {
                            width_prod = 300;
                        }
                    }

                    if (window.innerWidth <= 965 && window.innerWidth >= 769) {
                        width_prod = 300;
                    }



                    if (INC.clientConfig.slidevalue + prod_c < productBlocks.length) {
                        pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                        pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute("style", "opacity:1");
                        INC.clientConfig.slidevalue++
                        INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - width_prod) + 'px';
                        var menu = pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block');
                        menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.3s;-webkit-transition-duration:0.3s;-moz-transition-duration:0.3s;-ms-transition-duration:0.3s;-o-transition-duration:0.3s;')
                    }

                    if (INC.clientConfig.slidevalue + prod_c == productBlocks.length) {
                        pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                        pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute("style", "opacity:0.5");
                    }
                    sliderBtnCounter++;
                    if (sliderBtnCounter > lengthCount - 3) {
                        sliderBtnCounter--;
                    }
                });
                pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').addEventListener("click", function () {
                    var width_prod = 300;
                    if (window.innerWidth >= 840 && window.innerWidth < 1190) {
                        width_prod = 300;
                    } else if (window.innerWidth >= 1268) {
                        if (window.innerWidth > 1368) {
                            width_prod = 300;
                        } else {
                            width_prod = 300;
                        }
                    }
                    if (window.innerWidth <= 965 && window.innerWidth >= 769) {

                        width_prod = 300;
                    }
                    if (INC.clientConfig.slidevalue == -1) {
                        INC.clientConfig.slidevalue = 0;
                    }
                    if (INC.clientConfig.slidevalue > 0) {
                        pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                        pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute("style", "opacity:1");
                        INC.clientConfig.slidevalue--
                        INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + width_prod) + 'px';
                        var menu = pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block');
                        menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.3s;-webkit-transition-duration:0.3s;-moz-transition-duration:0.3s;-ms-transition-duration:0.3s;-o-transition-duration:0.3s;')
                    }
                    if (INC.clientConfig.slidevalue == 0) {
                        pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                        pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute("style", "opacity:0.5");
                    }
                    sliderBtnCounter--;
                    if (sliderBtnCounter == -1) {
                        sliderBtnCounter = 0;
                    }
                });


                if ((productBlocks.length <= prd_length)) {
                    pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_block').style.visibility = "hidden";
                    pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').style.visibility = "hidden";
                }


                setTimeout(function () {
                    for (var n = 0; n < 6; n++) {
                        if (typeof (elProductAddBlock[n]) != "undefined" && n % 2 != 0) {
                            elProductAddBlock[n].click();
                        }

                    }
                }, 100)


                setTimeout(function () {
                    if (document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"]') != null) {
                        document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"]').click()
                    } else if (document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block') != undefined) {
                        document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block').click()
                    }
                    if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"]') != null) {
                        document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"]').click()
                    } else if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block') != undefined) {
                        document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block').click()
                    }
                    var el_all_list_main1 = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_showcase_block')
                    for (var li in el_all_list_main1) {
                        if (el_all_list_main1[li] != null && Object.prototype.hasOwnProperty.call(el_all_list_main1, li)) {
                            if (el_all_list_main1[li].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolorfabric="' + client_var + '"] div') != null) {
                                el_all_list_main1[li].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolorfabric="' + client_var + '"] div').click()
                            } else if (el_all_list_main1[li].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + client_var + '"] div') != null) {
                                el_all_list_main1[li].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + client_var + '"] div').click()
                            } else if (el_all_list_main1[li].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block div') != null) {
                                el_all_list_main1[li].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block div').click()
                            }
                        }
                    }
                    if (fabricavail == trueflag && client_var != "" && client_var != undefined) {
                        if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[data-optid="' + client_var + '"] div') != null) {
                            document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[data-optid="' + client_var + '"] div').click()
                        }
                    }
                    var all_list_el = document.querySelectorAll('.inc_pdp_bundle_product_list_block .inc_product_showcase_block');
                    for (var ell in all_list_el) {
                        if (Object.prototype.hasOwnProperty.call(all_list_el, ell)) {
                            var prd_moduleb = all_list_el[ell].parentNode
                            var main_idsd = prd_moduleb.getAttribute('data-main_id')
                            if (all_list_el[ell] != null) {

                                if (all_list_el[ell].querySelector('.inc_product_desc_att_zero_block.inc_active') != null) {
                                    if (prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"]') != null) {
                                        if (prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"] div') != null) {
                                            prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"] div').click()
                                        }
                                    } else if (all_list_el[ell].querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"] div') != undefined) {
                                        all_list_el[ell].querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"] div').click()
                                    } else if (all_list_el[ell].querySelector('.inc_product_desc_att_size_list_item_img_block') != null) {
                                        all_list_el[ell].querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                                    }
                                }
                                if (all_list_el[ell].querySelector('.inc_product_desc_att_color_block.inc_active') != null) {
                                    if (prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + main_idsd + '"]') != null) {
                                        if (prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_color_list_item_img_block') != null) {
                                            prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_color_list_item_img_block').click()
                                        }
                                    } else if (all_list_el[ell].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + client_var + '"] div') != undefined) {
                                        all_list_el[ell].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + client_var + '"] div').click()
                                    } else if (all_list_el[ell].querySelector('.inc_product_desc_att_color_list_item_img_block') != null) {
                                        all_list_el[ell].querySelector('.inc_product_desc_att_color_list_item_img_block').click()
                                    }
                                }
                            }
                        }
                    }

                    if (document.querySelector('.inc_bundle_avail_block img') != null && document.querySelector('.inc_pdp_product-main_block .inc_product_img_block img') != null) {
                        document.querySelector('.inc_bundle_avail_block img').src = document.querySelector('.inc_pdp_product-main_block .inc_product_img_block img').getAttribute('data-src')
                    }
                    if (document.querySelectorAll('.inc_bundle_avail_block img')[1] != undefined && document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_img_main_img img') != null) {
                        var secimg = document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_img_main_img img').src
                        document.querySelectorAll('.inc_bundle_avail_block img')[1].src = secimg
                    }

                }, 200)


                setTimeout(function () {
                    onloadpdp = true
                    onloadpdp_delete = true
                    var inc_prod_img = document.querySelectorAll('.inc_product_img_main_img img')
                    for (var im in inc_prod_img) {
                        if (inc_prod_img[im] != undefined && Object.prototype.hasOwnProperty.call(inc_prod_img, im)) {
                            inc_prod_img[im].setAttribute('style', INC.config.styleft)
                        }
                    }
                    INC.config.run_permission = true
                }, 2000)



            }
        }
        updateAllSelection()

        pdpBlock.style.display = "none"

        if (sidebar == "sidebar") {

            this.createSidebarBlock();
        }
    }

    // Sync Client And PDP
    function syncClientAttributes(firstLoad) {

        if (INC.config.recommendation) return

        let attributeType = document.querySelector('.m-detail') || document.querySelector('#pricing-table')
        if (!attributeType) return

        let comboParentType = "simple"
        if (document.querySelector('.m-detail') == null) {
            comboParentType = "combo"
        }

        function arraysEqual(a, b) {
            if (a === b) return true;
            if (a == null || b == null) return false;
            if (a.length !== b.length) return false;
            a.sort()
            b.sort()
            for (let i = 0; i < a.length; ++i) {
                if (a[i].trim() !== b[i].trim()) return false;
            }
            return true;
        }


        let updatePDPSelection = function (selected_value, comboParentType) {
            console.log("UPDATE PDP SELECTION CALLED")

            INC.config.SyncOperation = false
            let flag = true
            if (comboParentType == 'combo') {
                setTimeout(() => {
                    let allpdpSize = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_list_item_img_block')
                    if (allpdpSize.length > 1) {
                        for (let i = 0; i < allpdpSize.length; i++) {

                            let firstSplit = Array.from(allpdpSize[i].children, ({
                                textContent
                            }) => textContent.trim()).filter(Boolean).join(';').split(';')
                            // dup currency check

                            let secondSplit = selected_value.split('\n')
                            secondSplit = secondSplit.filter(e => e);

                            let currentCountryPrice = getCountry()
                            let replaceCurrency = '£'
                            if (currentCountryPrice == "b58lus") {
                                replaceCurrency = "$"
                            }

                            if (firstSplit[firstSplit.length - 1].split(replaceCurrency).length > 2) {
                                firstSplit = firstSplit.slice(0, firstSplit.length - 1)
                                secondSplit = secondSplit.slice(0, secondSplit.length - 2)
                            }
                            let valid = arraysEqual(firstSplit, secondSplit)

                            if (valid) {
                                allpdpSize[i].click()
                                INC.config.attributeSyncedForAPI = true
                                checkChildLevelPrice()
                                flag = false
                                return true
                            }
                        }
                    } else {
                        checkChildLevelPrice()
                    }

                }, 500);

            } else {
                flag = loopOverAllClient()
            }
            return flag
        }

        function loopOverAllClient() {
            let isItDone = false
            console.log("LOOP OVER CALLED")
            console.log("Loop Started", performance.now())
            let attr = document.querySelectorAll('.js-seleted')
            let allcheck = 0
            if (attr[0] !== undefined) {
                let selectedFirst = attr[0].innerText.trim()
                try {
                    if (document.querySelector(".inc_pdp_product-main_block .inc_product_desc_att_size_list_item_img_block[data-size='" + selectedFirst + "']")) {
                        document.querySelector(".inc_pdp_product-main_block .inc_product_desc_att_size_list_item_img_block[data-size='" + selectedFirst + "']").click()

                    }
                } catch {}
                try {
                    if (document.querySelector('.inc_pdp_product-main_block .inc_product_desc_att_size_list_item_img_block[data-size="' + selectedFirst + '"]')) {
                        document.querySelector('.inc_pdp_product-main_block .inc_product_desc_att_size_list_item_img_block[data-size="' + selectedFirst + '"]').click()

                    }
                } catch (error) {}
            }
            if (attr[1] !== undefined) {
                let selectedSecond = attr[1].innerText.trim()
                try {
                    if (document.querySelector(".inc_pdp_product-main_block .inc_product_desc_att_size_list_item_img_block[data-size='" + selectedSecond + "']")) {
                        document.querySelector(".inc_pdp_product-main_block .inc_product_desc_att_size_list_item_img_block[data-size='" + selectedSecond + "']").click()
                        allcheck++
                    }
                } catch {}
                try {
                    if (document.querySelector('.inc_pdp_product-main_block .inc_product_desc_att_size_list_item_img_block[data-size="' + selectedSecond + '"]')) {
                        document.querySelector('.inc_pdp_product-main_block .inc_product_desc_att_size_list_item_img_block[data-size="' + selectedSecond + '"]').click()
                        allcheck++
                    }
                } catch (error) {}
            }
            if (attr[2] !== undefined) {
                let selectedThird = attr[2].innerText.trim()
                try {
                    if (document.querySelector(".inc_pdp_product-main_block .inc_product_desc_att_size_list_item_img_block[data-size='" + selectedThird + "']")) {
                        document.querySelector(".inc_pdp_product-main_block .inc_product_desc_att_size_list_item_img_block[data-size='" + selectedThird + "']").click()
                        allcheck++
                    }
                } catch {}
                try {
                    if (document.querySelector('.inc_pdp_product-main_block .inc_product_desc_att_size_list_item_img_block[data-size="' + selectedThird + '"]')) {
                        document.querySelector('.inc_pdp_product-main_block .inc_product_desc_att_size_list_item_img_block[data-size="' + selectedThird + '"]').click()
                        allcheck++
                    }
                } catch (error) {}
            }

            if (allcheck == attr.length) {
                INC.config.attributeSyncedForAPI = true
            }


            checkChildLevelPrice()

            console.log("Loop Ended", performance.now())
            return isItDone
        }

        const debounce = (func, delay) => {
            let debounceTimer
            return function () {
                const context = this
                const args = arguments
                clearTimeout(debounceTimer)
                debounceTimer
                    = setTimeout(() => func.apply(context, args), delay)
            }
        }
        if (INC.config.syncClickAdded == false) {
            let isButtonClicked = 0
            attributeType.addEventListener('click', debounce(function (e) {
                console.log("FIRED CLICKED")
                isButtonClicked++

                INC.config.syncClickAdded = true
                if (document.querySelector('.inc_pdp_block')) {
                    if (document.querySelector('.inc_pdp_block').style.display == "none") {
                        INC.config.SyncOperation = true
                    }
                }


                if (INC.config.SyncOperation) {
                    let selected = document.querySelector('.sku-selected') || e.target.innerText
                    let selected_value = ""
                    if (comboParentType == 'combo') {
                        selected_value = selected.innerText
                    } else {
                        selected_value = e.target.innerText
                    }
                    (updatePDPSelection(selected_value, comboParentType))
                }


            }, 1500))
        }


        if (firstLoad) {
            let firstSyncSelected = ""
            if (comboParentType == 'combo') {
                firstSyncSelected = document.querySelector('.sku-selected').innerText

                updatePDPSelection(firstSyncSelected, comboParentType)

            } else {
                setTimeout(() => {
                    updatePDPSelection(null, comboParentType)
                }, 500);
            }
        }



    }

    function updateAllSelection(sidebar) {
        let mainEle = document
        if (sidebar) {
            mainEle = document.querySelector('.inc_sidebar_modal_block')
        }

        if (mainEle == null) return

        let size_att = mainEle.querySelectorAll('.inc_product_desc_att_size_list_block')
        let zero_att = mainEle.querySelectorAll('.inc_product_desc_att_zero_list_block')
        let color_att = mainEle.querySelectorAll('.inc_product_desc_att_color_list_block')
        let third_att = mainEle.querySelectorAll('.inc_product_desc_att_third_list_block')
        let updateProduct = function (att) {
            if (att.length > 0) {
                for (let i = 0; i < att.length; i++) {
                    if (att[i].childElementCount > 0) {
                        att[i].children[0].click()
                    }
                }
            }
        }

        updateProduct(size_att)
        updateProduct(zero_att)
        updateProduct(color_att)
        updateProduct(third_att)
    }



    INC.methods.createPDPBundleCartBlock = function (pdpBlock) {
        var pdpBundleCartBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_block')
        var elBundleCartTitleText = pdpBlock.querySelector('.inc_pdp_bundle_cart_title_text')
        var elBundleCartAddedBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_added_block')
        var elBundleCartSummaryViewBtnText = pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_view_btn_text');
        var elBundleCartAddBtnBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block');
        var elBundleCartAddBtncollectionBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_add_btn_collection_block')

        elBundleCartTitleText.innerText = "Total Bundle Price ";
        elBundleCartAddedBlock.innerHTML = "";
        elBundleCartSummaryViewBtnText.innerText = "Added items";

        if (elBundleCartAddBtnBlock != null) {
            elBundleCartAddBtnBlock.addEventListener("click", function () {
                addbundlefn_('delivery', this)
            });
        }
        if (elBundleCartAddBtncollectionBlock != null) {
            elBundleCartAddBtncollectionBlock.addEventListener("click", function () {
                addbundlefn_('collection', this)
            });
        }
        return pdpBundleCartBlock;
    }

    function addbundlefn_(typeadd, elm) {
        checkAddedProductInJustAdded()
        elm.classList.add('inc_loading');
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        var prd_length = 2
        if (window.innerWidth > 1188) {
            prd_length = 3
        }
        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
        if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > prd_length) {
            document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
            document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
            document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
            document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
        }
        if (INC.config.disablebtn == trueflag) {
            var btn_cart = elm
            INC.config.disablebtn = false
            btn_cart.classList.add('inc_loading')
            INC.methods.addBundleToCart(btn_cart, typeadd);
        }
    }

    function remsidebarelm() {
        if (document.querySelector('.sidebar_outer') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.sidebar_outer'), function (el) {
                el.parentNode.removeChild(el);
            });

            Array.prototype.forEach.call(document.querySelectorAll(".sidebar_outer"), function (el) {
                el.parentNode.removeChild(el);
            });
        }
        if (document.querySelector('.inc_sidebar_modal_block') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_sidebar_modal_block'), function (el) {
                el.parentNode.removeChild(el);
            });

            Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function (el) {
                el.parentNode.removeChild(el);
            });
        }
    }
    INC.methods.createSidebarBlock = function () {

        var dataStore = INC.dataStore;
        var sidebar_dialoge_block = document.createElement('div')
        sidebar_dialoge_block.classList.add('sidebar_outer')
        sidebar_dialoge_block.innerHTML = sidebar_html
        var sbBlock = sidebar_dialoge_block.querySelector('.inc_sidebar_modal_block');

        sbBlock.querySelector(".inc_cart_added_list_block").innerHTML = "";

        var elHeaderContinueText = sbBlock.querySelector(".inc_header_continue_text");
        var elHeaderTitleText = sbBlock.querySelector(".inc_header_title_text");
        var elHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
        var elRecommendedTitleText = sbBlock.querySelector(".inc_recommended_title_text");
        var elRecommendedTabsListBlock = sbBlock.querySelector(".inc_recommended_tabs_list_block")
        var elRecommendedProductsListBlock = sbBlock.querySelector(".inc_recommended_products_list_block");
        var elCheckoutContinueBtnText = sbBlock.querySelector(".inc_checkout_continue_btn_text");
        var elCheckoutBasketBtnText = sbBlock.querySelector(".inc_checkout_basket_btn_text");
        var elheaditemblock = sbBlock.querySelector(".inc_header_item_block");
        var elheadtitleblock = sbBlock.querySelector(".inc_header_title_block");
        var elclosesidebar = document.querySelector(".close_modal_inc");
        if (elclosesidebar != null) {
            elclosesidebar.addEventListener('click', function () {
                closesidebar()
            })
        }
        elheaditemblock.addEventListener('click', function () {
            var cnt = document.querySelector('.inc_header_item_count_title_text').getAttribute('added_counts')
            if (cnt >= 1) {
                if (document.querySelector('.inc_sidebar_cart_added_block').classList.contains('inc_active') == trueflag) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_active')
                    var alladdedprodlength = document.querySelectorAll('.inc_cart_added_product_block').length;
                    var morecount = 2
                    if (window.innerWidth <= 769) {
                        morecount = 1
                    }
                    if (alladdedprodlength > morecount) {
                        var tcount = alladdedprodlength - morecount + " more item(s)"
                        document.querySelector('.inc_header_item_count_title_text').innerText = "+" + tcount
                        document.querySelector('.inc_header_item_count_title_text').setAttribute('added_counts', (alladdedprodlength - morecount))
                    } else {
                        document.querySelector('.inc_header_item_count_title_text').innerText = ""
                    }
                } else {
                    document.querySelector('.inc_header_item_count_title_text').innerText = ""
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_active')
                }
            }
        })
        var close_sisebar_icon = generate_html_tag('span', 'close_sisebar_icon')
        elheadtitleblock.appendChild(close_sisebar_icon)
        elRecommendedProductsListBlock.setAttribute('role', "contentinfo")
        elRecommendedProductsListBlock.setAttribute('tabindex', 0)
        elHeaderContinueText.innerText = "Back";
        elHeaderTitleText.innerText = "Just Added To Your " + justAddedText()
        elHeaderTitleText.style.textTransform = "none"

        if (dataStore.bundleCartProducts != undefined) {
            elHeaderItemCountTitleText.innerText = "Subtotal ";
            elRecommendedTitleText.innerText = INC.config.BeforeYouChecktext
            elRecommendedTitleText.style.textTransform = "none"
            elCheckoutContinueBtnText.innerText = "Continue Shopping";
            var elCheckoutLink = elCheckoutBasketBtnText.querySelector('.view_basket_checkout')
            elCheckoutLink.setAttribute('href', INC.clientConfig.checkoutLink);
            elCheckoutLink.querySelector('div[draggable="false"]').innerText = "View " + addBundleText()
            var productCategoriesArray = dataStore.methods().getUniqueCatergories();
            elRecommendedTabsListBlock.innerHTML = "";
            elRecommendedProductsListBlock.innerHTML = "";
            var category_count = 0
            elRecommendedTabsListBlock.classList.add('inc_categ_' + Object.keys(productCategoriesArray).length)

            productCategoriesArray.forEach(function (productCategory) {
                if (category_count < 5 && productCategory != undefined) {
                    category_count++
                    var sidebarTabsListItemBlock = generate_html_tag('div', 'inc_recommended_tabs_list_item_block')
                    var tablistitm = '<div class="inc_recommended_tabs_list_item_text_block"><div class="inc_recommended_tabs_list_item_text"></div></div>'
                    sidebarTabsListItemBlock.innerHTML = tablistitm
                    var sidebarTabsListItemText = sidebarTabsListItemBlock.querySelector('.inc_recommended_tabs_list_item_text');
                    sidebarTabsListItemText.parentNode.parentNode.setAttribute('title', productCategory)
                    sidebarTabsListItemText.innerText = decodeEntity(productCategory.toLocaleLowerCase());
                    sidebarTabsListItemText.setAttribute('style', 'text-transform:capitalize;')
                    sidebarTabsListItemBlock.addEventListener("click", function () {
                        var elrecprdlistblk = sbBlock.querySelector(".inc_recommended_products_list_block")
                        if (elrecprdlistblk != null) {
                            elrecprdlistblk.innerHTML = "";
                        }
                        Array.prototype.forEach.call(elRecommendedTabsListBlock.querySelectorAll('.inc_recommended_tabs_list_item_block'), function (elTabsItemBlock) {
                            elTabsItemBlock.classList.remove("inc_active");
                        });
                        sidebarTabsListItemBlock.classList.add("inc_active");
                        INC.methods.updateSidebarProductsList(elrecprdlistblk, productCategory);
                        // updateAllSelection(true)
                    });
                    elRecommendedTabsListBlock.setAttribute('tabindex', 0)
                    elRecommendedTabsListBlock.appendChild(sidebarTabsListItemBlock);
                }
            });
            if (elRecommendedTabsListBlock.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                elRecommendedTabsListBlock.querySelector('.inc_recommended_tabs_list_item_block').click();
            } else {
                elRecommendedTitleText.style.display = "none";
            }
            var sbcontinue = sbBlock.querySelector(".inc_header_continue_block")
            sbcontinue.addEventListener("click", function () {
                closesidebar()
            });
            sbBlock.querySelector(".inc_checkout_continue_block").addEventListener("click", function () {
                closesidebar()
            });
            close_sisebar_icon.addEventListener("click", function () {
                closesidebar()
            });
            sbBlock.querySelector(".inc_checkout_basket_block").addEventListener("click", function () {
                this.querySelector('.inc_checkout_basket_btn_block').classList.add('inc_loading')

                window.location.replace(getCheckoutLink());
            });
            var body = document.querySelector('body');
            body.appendChild(sidebar_dialoge_block);
            var elSideBarOverlayBlock = document.createElement('div');
            elSideBarOverlayBlock.setAttribute("class", "inc_sidebar_overlay_block");
            elSideBarOverlayBlock.addEventListener("click", function () {
                closesidebar()
            });
            elSideBarOverlayBlock.style.display = "none";
            body.appendChild(elSideBarOverlayBlock);
            if (INC.dataStore.dataStoreObj.undefined != undefined) {
                if (document.querySelector('.inc_recommended_products_block') != null) {
                    document.querySelector('.inc_recommended_products_block').style.display = "none"
                }
            }
        }
        setTimeout(function () {
            if (document.querySelector('.inc_recommended_products_list_block') != null) {
                document.querySelector('.inc_recommended_products_list_block').setAttribute('role', "contentinfo")
            }
            var inc_prod_img = document.querySelectorAll('.inc_product_img_main_img img')
            for (var ig in inc_prod_img) {
                if (inc_prod_img[ig] != null && Object.prototype.hasOwnProperty.call(inc_prod_img, ig)) {
                    inc_prod_img[ig].setAttribute('style', INC.config.styleft)
                }
            }
        }, 100)

        document.querySelector('.inc_checkout_continue_block').addEventListener('click', function () {
            INC.methods.hideSidebar()
        })
        document.querySelector('.inc_header_continue_block').addEventListener('click', function () {
            INC.methods.hideSidebar()
        })
    }

    function closesidebar(sidebar) {
        document.querySelector('html').classList.remove('inc_overlay');
        if (document.querySelector('.sidebar_outer.sidebar_outer_active') && sidebar) {
            INC.methods.hideSidebar()
        }
        INC.config.pdpaddedProductList = [];
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;

    }
    INC.methods.updateSidebarBlock = function () {

        var subtotalactiveprice = 0
        var subtotalregukarprice = 0
        var dataStore = INC.dataStore;

        var sbBlock = document.querySelector('.inc_sidebar_modal_block');
        if (sbBlock != null) {
            var sidebarHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
            var elHeadersubtotalactivetext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text");
            var elHeadersubtotalregulartext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text");
            var sbCartBlock = sbBlock.querySelector(".inc_cart_added_list_block");
            var sidebarHeaderseelesstext = sbBlock.querySelector(".inc_header_item_count_figure_text");
            sidebarHeaderseelesstext.innerText = ""
            sbCartBlock.innerHTML = "";
            var bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal ";
            var headerItemCountFigureText = 0;
            subtotalactiveprice = 0
            subtotalregukarprice = 0
            var error_message = ""
            var oosname = []
            var oosids = []
            var remerrorjust = document.querySelectorAll('.inc_justerror')
            for (var r in remerrorjust) {
                if (remerrorjust[r] != null && Object.prototype.hasOwnProperty.call(remerrorjust, r)) {
                    remerrorjust[r].parentNode.removeChild(remerrorjust[r])
                }
            }
            bundleCartProductsArray.forEach(function (productSKU) {
                if (dataStore.bundleCartProducts[productSKU] < 1) {
                    dataStore.bundleCartProducts[productSKU] = 1
                }
                var findObj = new INC.classes.FindObj({
                    sku: productSKU
                });
                var productObj = INC.dataStore.methods().getProductBySKU(findObj);

                if (INC.clientConfig.OOS.indexOf(productObj.sku) >= 0) {
                    if (oosname.indexOf(productObj.name) == -1 && oosids.indexOf(productObj.sku) == -1) {
                        error_message = ""
                        oosids.push(productObj.sku)
                        oosname.push(productObj.name)
                        if (error_message == "") {
                            error_message = "<span>" + productObj.name + "</span>" + " - " + "<span>The requested quantity is not available</span>"
                        } else {
                            error_message = error_message + " <br> " + "<span>" + productObj.name + "</span>" + " - " + "<span>The requested quantity is not available</span>"
                        }
                        var headertitle = sbBlock.querySelector('.inc_sidebar_modal_cart_and_title_block')
                        var errormes = generate_html_tag('div', 'inc_justerror')
                        var errormestext = generate_html_tag('span', 'inc_justerror_text')
                        errormestext.innerHTML = error_message
                        errormes.appendChild(errormestext)
                        headertitle.parentNode.insertBefore(errormes, headertitle)
                        setTimeout(function () {
                            var remoerroblk = document.querySelectorAll('.inc_justerror')
                            for (var re in remoerroblk) {
                                if (remoerroblk[re] != null && Object.prototype.hasOwnProperty.call(remoerroblk, re)) {
                                    remoerroblk[re].parentNode.removeChild(remoerroblk[re])
                                }
                            }
                        }, 5000)
                    }
                } else {
                    headerItemCountFigureText = headerItemCountFigureText + parseInt(dataStore.bundleCartProducts[productSKU]);
                    var color = "";
                    var size = "";
                    var sizeLabel = ""
                    var colorLabel = ""
                    var other1 = ""
                    var just_check_prod_block = document.querySelector('.inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
                    if (just_check_prod_block != null) {
                        if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active div') != null) {
                            size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active div').innerText
                            sizeLabel = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block').parentElement.parentElement.querySelector('.inc_product_desc_att_zero_title_text').innerText
                        }
                        if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block') != null) {
                            color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
                            colorLabel = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block').parentElement.parentElement.querySelector('.inc_product_desc_att_color_title_text').innerText
                        }
                        if (just_check_prod_block.querySelector('.inc_product_desc_att_size_block.inc_active .inc_product_desc_att_size_list_item_img_block.inc_active') !== null) {
                            other1 = just_check_prod_block.querySelector('.inc_product_desc_att_size_block.inc_active .inc_product_desc_att_size_list_item_img_block.inc_active').dataset.size
                        }

                    }

                    var sel_size = ""
                    if (color != "" && color != undefined && color != null) {
                        sel_size = color
                    }
                    if (size != "" && size != undefined && size != null) {
                        if (sel_size !== "") {
                            sel_size += "/" + size
                        } else {
                            sel_size += size
                        }
                    }

                    if (other1 !== "" && sel_size !== "") {
                        sel_size += " / " + other1
                    } else if (other1 !== "") {
                        sel_size += other1
                    }

                    if (productObj.option[1].text.includes('empty')) {
                        if (just_check_prod_block.querySelector('.variant_span').innerText.length > sel_size.length) {
                            sel_size = just_check_prod_block.querySelector('.variant_span').innerText
                        }
                    }

                    if (productObj.option) {
                        sel_size = ''
                        for (let i = 3; i >= 0; i--) {
                            if (productObj.option[i] !== undefined) {
                                if (sel_size == "") {
                                    sel_size = (productObj.option[i].text)
                                } else {
                                    sel_size += "/" + (productObj.option[i].text)
                                }
                            }
                        }

                    }

                    if (productObj.option[1] !== undefined) {
                        if (productObj.option[1].combo_options !== undefined) {

                            let combo_type = sortEmpty(productObj.option[1].combo_options)
                            sel_size = ""
                            combo_type.map(function (item) {
                                if (sel_size == "") {
                                    if (item.split('_')[0] !== 'null') {
                                        sel_size = item.split('_')[0]
                                    }

                                } else {
                                    if (item.split('_')[0] !== 'null') {

                                        sel_size += " / " + item.split('_')[0]
                                    }
                                }
                            })
                        }
                    }

                    var activePrice = parseFloat(productObj.activePrice).toFixed(2);
                    subtotalactiveprice = (+subtotalactiveprice + (+productObj.activePrice * dataStore.bundleCartProducts[productSKU]));
                    subtotalregukarprice = (+subtotalregukarprice + (+productObj.regularPrice * dataStore.bundleCartProducts[productSKU]));
                    var sactivePrice = parseFloat(productObj.activePrice).toFixed(2).toString()
                    var sregularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();

                    var addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' + productObj.imageURL + '" data-src="' + productObj.imageURL + '" alt="' + productObj.name + '" /></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset" >' + dataStore.bundleCartProducts[productSKU] + "x " + productObj.name + ' </div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">' + formatter.format(sactivePrice) + ' </div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text">' + formatter.format(sregularPrice) + '</div></div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">' + decodeEntity(sel_size) + ' </div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div></div>'
                    if (sactivePrice == sregularPrice) {
                        addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' + productObj.imageURL + '" data-src="' + productObj.imageURL + '" alt="' + productObj.name + '" /></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset" >' + dataStore.bundleCartProducts[productSKU] + "x " + productObj.name + ' </div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">' + formatter.format(sactivePrice) + ' </div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">' + decodeEntity(sel_size) + ' </div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div></div>'

                    }
                    var productBlock = generate_html_tag('div', 'inc_cart_added_product_block');
                    productBlock.innerHTML = addedhtml
                    productBlock.setAttribute('data-id', productObj.id);
                    productBlock.setAttribute('data-sku', productObj.sku);
                    productBlock.setAttribute('data-main_id', productObj.mainId);
                    productBlock.setAttribute('data-bundle_id', productObj.bundleId);
                    productBlock.setAttribute('data-childsku', productObj.childsku);
                    productBlock.setAttribute('data-mainsku', productObj.mainsku);
                    productBlock.querySelector('.inc_cart_added_product_img img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
                    sbCartBlock.appendChild(productBlock);
                }
            });
            var sidebarsaveprc = get_discount_price(subtotalregukarprice, subtotalactiveprice)
            if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
                elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
                elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
                elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice)
                elHeadersubtotalregulartext.innerHTML = formatter.format(subtotalregukarprice)
                if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block') != null) {
                    document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block').classList.add("is_special_ecirp")
                }
                if (document.querySelector('.inc_just_added_save_pr') != null) {
                    document.querySelector('.inc_just_added_save_pr').innerText = "You Saved " + formatter.format(sidebarsaveprc.toFixed(2))
                }
                elHeadersubtotalactivetext.style.color = "#ee1c31"
            } else {
                elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
                elHeadersubtotalactivetext.style.color = "#000"
                elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
                elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalregukarprice)
                elHeadersubtotalregulartext.innerHTML = ""
                if (document.querySelector('.inc_just_added_save_pr') != null) {
                    document.querySelector('.inc_just_added_save_pr').innerText = ""
                }
            }
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal ";
            if (window.innerWidth > 767) {
                if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 5) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
                }
            } else {
                if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
                }
            }
            if (sbBlock.querySelector('.inc_cart_added_product_block') == null) {
                if (sbBlock.querySelector('.inc_header_title_text_block') != null) {
                    sbBlock.classList.add('oos_prod_avail')
                }
            }

            let prdLengthSidebar = document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_added_' + prdLengthSidebar)
        }
    }
    INC.methods.updateSidebarProductsList = function (elRecommendedProductsListBlock, productCategory) {

        var productListArray = INC.dataStore.bundleProductsArray;
        var dupl_sidebar_prod = []
        var addCheck = INC.config.pdpaddedProductList;

        for (var pd in productListArray) {
            var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                mainId: productListArray[pd]
            });
            if (firstProductObjByMainId["categoryId"] == productCategory) {

                if (INC.dataStore.dataStoreObj.undefined == undefined) {

                    if (addCheck.indexOf(productListArray[pd]) == -1 && firstProductObjByMainId.bundleId != undefined) {



                        if (INC.config.sidebarremovedprod.indexOf(firstProductObjByMainId.id) == -1) {

                            if (dupl_sidebar_prod.indexOf(firstProductObjByMainId.id) == -1) {
                                dupl_sidebar_prod.push(firstProductObjByMainId.id)
                                var prdblck = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "sidebar", false, elRecommendedProductsListBlock);
                                prdblck.querySelector('.inc_product_desc_add_block').addEventListener("click", function () {
                                    sidebaraddprod(this)
                                });
                                prdblck.querySelector('.inc_product_add_collection_block').addEventListener("click", function () {
                                    sidebaraddprod(this)
                                });

                                elRecommendedProductsListBlock.appendChild(prdblck);
                            }
                        }
                    }
                }
            }
        }
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        elRecommendedProductsListBlock.setAttribute('style', 'margin-left: 0')
        if ((document.querySelector('.inc_recommended_tabs_list_item_block') == null && elRecommendedProductsListBlock.querySelector('.inc_product_module_block') == null)) {
            elRecommendedProductsListBlock.parentNode.parentNode.parentNode.parentNode.style.display = "none"
        }
        if ((elRecommendedProductsListBlock.childNodes.length <= 2)) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_block').style.visibility = "hidden";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').style.visibility = "hidden";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: none;opacity:0.5;visibility: hidden;");
        }

        if (elRecommendedProductsListBlock.childNodes.length > 2) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').style.visibility = "visible";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: none;opacity:0.5");
        }
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:0.5");
        var sliderBtnCounter = 0;
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute('title', 'Scroll left')
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_btn_img').setAttribute('title', 'Scroll right')
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommeded_products_right_btn_block').addEventListener("click", function () {
            var productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
            if (INC.clientConfig.slidevalue + 1 < productBlocks.length) {
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: auto;opacity:1");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:1");
                INC.clientConfig.slidevalue++
                var slide_w = 274
                INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - slide_w) + 'px';
                var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_list_block');
                menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.3s;-webkit-transition-duration:0.3s;-moz-transition-duration:0.3s;-ms-transition-duration:0.3s;-o-transition-duration:0.3s;')
            }
            var cc_ount = 1;
            if (window.innerWidth > 820) {
                cc_ount = 2
            }
            if (+INC.clientConfig.slidevalue + +cc_ount == productBlocks.length) {
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "opacity:0.5");
            }
            sliderBtnCounter++;
            if (sliderBtnCounter > productBlocks.length - cc_ount) {
                sliderBtnCounter--;
            }
        });

        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_block').addEventListener("click", function () {
            if (INC.clientConfig.slidevalue == -1) {
                INC.clientConfig.slidevalue = 0;
            }
            if (INC.clientConfig.slidevalue > 0) {
                var slide_w = 274
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "opacity:1");
                INC.clientConfig.slidevalue--
                INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + slide_w) + 'px';
                var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_list_block');
                menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.3s;-webkit-transition-duration:0.3s;-moz-transition-duration:0.3s;-ms-transition-duration:0.3s;-o-transition-duration:0.3s;')
            }
            if (INC.clientConfig.slidevalue == 0) {
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:0.5");
            }
            sliderBtnCounter--;
            if (sliderBtnCounter == -1) {
                sliderBtnCounter = 0;
            }
        });
        setTimeout(function () {

            // updateAllSelection()

            setTimeout(function () {
                var inc_prod_img = document.querySelectorAll('.inc_product_img_main_img img')
                for (var prodimg in inc_prod_img) {
                    if (inc_prod_img[prodimg] != null && Object.prototype.hasOwnProperty.call(inc_prod_img, prodimg)) {
                        inc_prod_img[prodimg].setAttribute('style', INC.config.styleft)
                    }
                }
            }, 2000)
        }, 10)

    }

    function sidebaraddprod(element) {

        var productModuleBlock = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        if (productModuleBlock.classList.contains('inc_product_module_block') == falseflag) {
            productModuleBlock = element.parentNode.parentNode.parentNode.parentNode.parentNode
        }
        var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
        var sku = productModuleBlock.getAttribute('data-sku');
        var findObj = new INC.classes.FindObj({
            id: sku
        });
        var add_prod_im = productModuleBlock.querySelector('.inc_product_desc_add_img')
        if (flag_check == 1) {
            if (element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_showcase_block') == trueflag || element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_modal_block') == trueflag) {
                if (INC.config.disablebtn == trueflag) {
                    INC.config.disablebtn = false;
                    var newbtntext = productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_text')
                    var btnclick = productModuleBlock.querySelector('.inc_product_add_text')
                    newbtntext.innerText = "Adding..."
                    btnclick.innerText = "Adding...";
                    var selbtn = productModuleBlock.querySelector('.inc_product_variant_simple_text')
                    selbtn.innerText = "Adding...";
                    INC.methods.addProductToCart(findObj, productModuleBlock, btnclick, add_prod_im, selbtn, newbtntext);
                }
            }
        }
    }
    INC.methods.addProductToSidebarCart = function (findObj, _productBlockel, client_add_btn, btn_addtocart, elmparent) {
        var qty = 1;

        if (_productBlockel != null) {
            qty = _productBlockel
        }
        if (client_add_btn == 'client_add_btn') {
            if (document.querySelector('.quantity-section input').value !== "") {
                qty = Number(document.querySelector('.quantity-section input').value)
            } else {
                qty = 1
            }
        }

        var dataStore = INC.dataStore;
        var sbBlock = document.querySelector('.inc_sidebar_modal_block');
        var subtotal_activeprice = 0;
        var subtotal_regular = 0;
        if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_active_text') != null) {
            subtotal_activeprice = document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_active_text').getAttribute('subtotalactiveprice')
        }
        if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_regular_text') != null) {
            subtotal_regular = document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_regular_text').getAttribute('subtotalregularprice')
        }

        if (subtotal_activeprice == null) {
            subtotal_activeprice = 0
        }
        if (subtotal_regular == null) {
            subtotal_regular = 0
        }
        if (client_add_btn == "client_add_btn") {
            subtotal_activeprice = 0;
            subtotal_regular = 0;
        }
        if (document.querySelector('.inc_sidebar_cart_added_block.inc_active') != null) {
            if (document.querySelector('.inc_header_item_count_title_block') != null) {
                document.querySelector('.inc_header_item_count_title_block').click()
            }
        }

        if (sbBlock != null) {
            var elHeadersubtotalactivetext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text");
            var elHeadersubtotalregulartext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text");
            var elHeaderItemCountFigureText = sbBlock.querySelector(".inc_header_item_count_figure_text");
            var sidebarHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
            var sbCartBlock = sbBlock.querySelector(".inc_cart_added_list_block");
            if (client_add_btn == "client_add_btn") {
                sbCartBlock.innerHTML = ""
            }
            var productObj = dataStore.methods().getProductById(findObj);
            var productBlock = generate_html_tag('div', 'inc_cart_added_product_block');

            if (INC.clientConfig.OOS.indexOf(productObj.id) >= 0) {
                productBlock.classList.add('cross')
                for (var e = 0; e < INC.clientConfig.OOS.length; e++) {
                    if (INC.clientConfig.OOS_MESG[e] != undefined) {
                        var remerrorjust = document.querySelector('.inc_justerror')
                        if (remerrorjust != null) {
                            remerrorjust.parentNode.removeChild(remerrorjust)
                        }
                        if (document.querySelector('.inc_justerror') == null) {
                            var headertitle = sbBlock.querySelector('.inc_sidebar_modal_cart_and_title_block')
                            var errormes = generate_html_tag('div', 'inc_justerror')
                            var errormestext = generate_html_tag('span', 'inc_justerror_text')
                            errormestext.innerHTML = "<span>" + productObj.name + "</span>" + " - " + "<span>The requested quantity is not available</span>"
                            errormes.appendChild(errormestext)
                            headertitle.parentNode.insertBefore(errormes, headertitle)
                            setTimeout(function () {
                                var remel = document.querySelector('.inc_justerror')
                                if (remel != null) {
                                    remel.parentNode.removeChild(remel)
                                }
                            }, 10000)
                        }
                    }
                }
            } else {
                var color = "";
                var size = "";
                var sizeLabel = ""
                var just_check_prod_block = ""
                var colorLabel = ""
                if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                    just_check_prod_block = document.querySelector('.inc_sidebar_modal_block .inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
                } else {
                    just_check_prod_block = document.querySelector('.inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
                }
                if (just_check_prod_block != null) {
                    if (just_check_prod_block.querySelector('.inc_product_modal_block .inc_product_desc_att_block') != null) {
                        var sel_attr = just_check_prod_block.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                        var zero_text = sel_attr.getAttribute('data-zero');
                        var size_text = sel_attr.getAttribute('data-size');
                        var color_text = sel_attr.getAttribute('data-color');
                        var third_text = sel_attr.getAttribute('data-third');
                        size = ""
                        color = ""
                        var sel_size = ""
                        if (color != "" && color != undefined && color != null) {
                            sel_size = color
                        }
                        if (size != "" && size != undefined && size != null) {
                            if (sel_size !== "") {
                                sel_size += "/" + size
                            } else {
                                sel_size += size
                            }
                        }
                    }
                }

                if (productObj.option) {
                    sel_size = ''
                    for (let i = 3; i >= 0; i--) {
                        if (productObj.option[i] !== undefined) {
                            if (sel_size == "") {
                                sel_size = (productObj.option[i].text)
                            } else {
                                sel_size += "/" + (productObj.option[i].text)
                            }
                        }
                    }

                }

                if (productObj.option[1] !== undefined) {
                    if (productObj.option[1].combo_options !== undefined) {
                        sel_size = ""
                        let combo_type = sortEmpty(productObj.option[1].combo_options)
                        combo_type.map(function (item) {
                            if (!item.split('_')[0].includes('null')) {

                                if (sel_size == "") {
                                    sel_size = item.split('_')[0]
                                } else {
                                    sel_size += " / " + item.split('_')[0]
                                }
                            }
                        })
                    }
                }

                if (btn_addtocart != undefined) {
                    if (btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == trueflag) {
                        var module_blk = btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                        if (module_blk.querySelector('.inc_product_modal_block .inc_product_desc_att_block') != null) {
                            var sel_attr = module_blk.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                            var zero_text = sel_attr.getAttribute('data-zero');
                            var size_text = sel_attr.getAttribute('data-size');
                            var color_text = sel_attr.getAttribute('data-color');
                            var third_text = sel_attr.getAttribute('data-third');
                            size = ""
                            color = ""
                            if (color_text != undefined) {
                                color = color_text
                            }
                            if (zero_text != undefined) {
                                if (size == "") {
                                    size = zero_text
                                } else {
                                    size = size + "|" + zero_text
                                }
                            }
                            if (size_text != undefined) {
                                size = size + "|" + size_text
                            }
                            if (third_text != undefined) {
                                size = size + "|" + third_text
                            }

                        }
                    }
                }

                if (sel_size === "") {
                    // var sel_size = ""
                    if (color != "" && color != undefined && color != null) {
                        sel_size = colorLabel + " : " + color
                    }
                    if (size != "" && size != undefined && size != null) {
                        if (sel_size !== "") {
                            sel_size += " , " + sizeLabel + " : " + size
                        } else {
                            sel_size += sizeLabel + " : " + size
                        }
                    }
                }


                if (client_add_btn == 'client_add_btn') {

                    let clientAttr = document.querySelectorAll('.js-seleted')
                    if (clientAttr.length == 0) {
                        clientAttr = document.querySelector('.sku-selected')
                        if (clientAttr) {
                            clientAttr = document.querySelector('.sku-selected').innerText.split('\n')

                            clientAttr.pop()

                            sel_size = ""
                            for (let i = 0; i < clientAttr.length; i++) {
                                let selected = clientAttr[i]
                                if (sel_size == "") {
                                    if (!selected.includes('null')) {

                                        sel_size = selected
                                    }
                                } else {

                                    if (selected.includes('£') || selected.includes('$') || selected.includes('null')) {

                                    } else {

                                        sel_size += ' / ' + selected
                                    }
                                }
                            }
                        }

                    } else {
                        sel_size = ""
                        for (let i = 0; i < clientAttr.length; i++) {
                            let selected = clientAttr[i].innerText
                            if (sel_size == "") {
                                if (!selected.includes('null')) {

                                    sel_size = selected
                                }
                            } else {
                                if (selected.includes('£') || selected.includes('$') || selected.includes('null')) {} else {

                                    sel_size += ' / ' + selected
                                }
                            }
                        }
                    }

                }

                var pdpprice = 0
                let currentCountryPrice = getCountry()
                let replaceCurrency = '£'
                if (currentCountryPrice == "b58lus") {
                    replaceCurrency = "$"
                }
                if (client_add_btn == "client_add_btn" && INC.config.pageType == "pdp" && document.querySelector('.actual-price') != null) {

                    pdpprice = document.querySelector('.actual-price').innerText.replace(replaceCurrency, '').replace(',', '').trim()
                }
                var activepriceClnt = document.querySelector('.actual-price')
                var regularpriceClnt = document.querySelector('.sale-price')
                if (activepriceClnt) {
                    activepriceClnt = activepriceClnt.innerText.replace(replaceCurrency, '').replace(',', '').trim()
                } else {
                    activepriceClnt = 0
                }
                if (regularpriceClnt) {
                    regularpriceClnt = regularpriceClnt.innerText.replace(replaceCurrency, '').replace(',', '').trim()
                } else {
                    regularpriceClnt = 0
                }
                var activePrice = 0;
                var regularPrice = 0;

                if (client_add_btn == "client_add_btn") {

                    if (activepriceClnt != 0 && regularpriceClnt != 0) {
                        activePrice = Number(activepriceClnt.replace(/[^0-9\.]+/g, "")).toString();
                        regularPrice = Number(regularpriceClnt.replace(/[^0-9\.]+/g, "")).toString();
                    } else if (regularpriceClnt != 0) {
                        activePrice = Number(regularpriceClnt.replace(/[^0-9\.]+/g, "")).toString();
                        regularPrice = Number(regularpriceClnt.replace(/[^0-9\.]+/g, "")).toString();
                    } else if (regularpriceClnt == 0 && activepriceClnt != 0) {
                        activePrice = Number(activepriceClnt.replace(/[^0-9\.]+/g, "")).toString();
                        regularPrice = Number(activepriceClnt.replace(/[^0-9\.]+/g, "")).toString();
                    } else {
                        activePrice = Number(productObj.activePrice.replace(/[^0-9\.]+/g, "")).toString();
                        regularPrice = Number(productObj.regularPrice.replace(/[^0-9\.]+/g, "")).toString();
                    }

                } else {
                    activePrice = Number(productObj.activePrice.replace(/[^0-9\.]+/g, "")).toString();
                    regularPrice = Number(productObj.regularPrice.replace(/[^0-9\.]+/g, "")).toString();
                }

                let imageSrc = productObj.imageURL
                if (INC.config.recommendation && document.querySelector('.sidebar_outer.sidebar_outer_active') == null && client_add_btn == 'client_add_btn') {
                    imageSrc = document.querySelector('.image__container img').src
                }
                var addedhtml = ""
                if (client_add_btn == 'client_add_btn') {

                    var sactivePrice = parseFloat(Number(activepriceClnt.replace(/[^0-9\.]+/g, ""))).toFixed(2).toString()
                    var sregularPrice = ""
                    if (regularpriceClnt !== 0) {
                        sregularPrice = parseFloat(Number(regularpriceClnt.replace(/[^0-9\.]+/g, ""))).toFixed(2).toString();
                    } else {
                        sregularPrice = 0
                    }

                    if (sregularPrice == 0) {
                        sactivePrice = sactivePrice / qty
                        sregularPrice = sactivePrice
                    } else {
                        sactivePrice = sactivePrice / qty
                        sregularPrice = sregularPrice / qty
                    }

                    if (activepriceClnt == 0) {
                        activepriceClnt = regularpriceClnt
                        regularpriceClnt = 0
                    }
                    addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' + imageSrc + '" data-src="' + imageSrc + '" alt="' + productObj.name + '" /></div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset" >' + '<span>' + qty + '<span>x</span> ' + productObj.name + '</span>' + ' </div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">' + formatter.format(sactivePrice) + ' </div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text">' + formatter.format(sregularPrice) + ' </div></div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">' + decodeEntity(sel_size) + ' </div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div>'
                    if (regularpriceClnt == 0) {
                        addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' + imageSrc + '" data-src="' + imageSrc + '" alt="' + productObj.name + '" /></div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset" >' + '<span>' + qty + '<span>x</span> ' + productObj.name + '</span>' + ' </div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">' + formatter.format(sactivePrice) + ' </div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">' + decodeEntity(sel_size) + ' </div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div>'

                    }
                } else {
                    var sactivePrice = parseFloat(productObj.activePrice).toFixed(2).toString()
                    var sregularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                    addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' + imageSrc + '" data-src="' + imageSrc + '" alt="' + productObj.name + '" /></div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset" >' + '<span>' + qty + '<span>x</span> ' + productObj.name + '</span>' + ' </div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">' + formatter.format(sactivePrice) + ' </div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text">' + formatter.format(sregularPrice) + ' </div></div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">' + decodeEntity(sel_size) + ' </div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div>'
                    if (sactivePrice == sregularPrice) {
                        addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' + imageSrc + '" data-src="' + imageSrc + '" alt="' + productObj.name + '" /></div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset" >' + '<span>' + qty + '<span>x</span> ' + productObj.name + '</span>' + ' </div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">' + formatter.format(sactivePrice) + ' </div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">' + decodeEntity(sel_size) + ' </div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div>'

                    }
                }


                productBlock.innerHTML = addedhtml

                productBlock.querySelector('.inc_cart_added_product_img img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
                var subtotalactiveprice = 0;
                var subtotalregukarprice = 0;
                if (client_add_btn == 'client_add_btn') {
                    qty = 1
                }
                if (subtotal_regular == "" && +regularPrice != 0 && regularPrice != "") {
                    subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty)
                    subtotalregukarprice = +subtotal_activeprice + (+regularPrice * qty)
                } else {
                    subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty)
                    subtotalregukarprice = +subtotal_regular + (+regularPrice * qty)
                }
                if (sbCartBlock != null) {

                    sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector('.inc_cart_added_product_block'));
                }

                if (elHeaderItemCountFigureText != null) {
                    elHeaderItemCountFigureText.style.display = "none";
                }
                sidebarHeaderItemCountTitleText.innerHTML = "Subtotal "
                elHeadersubtotalactivetext.setAttribute('subtotalactiveprice', subtotalactiveprice)
                elHeadersubtotalregulartext.setAttribute('subtotalregularprice', subtotalregukarprice)

                var sidebarsaveprcw = get_discount_price(subtotalregukarprice, subtotalactiveprice)
                sidebarsaveprcw = parseFloat(sidebarsaveprcw).toFixed(2)
                if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
                    elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice)
                    elHeadersubtotalregulartext.innerHTML = formatter.format(subtotalregukarprice);
                    if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block') != null)
                        document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block').classList.add("is_special_ecirp")
                    elHeadersubtotalactivetext.style.color = "#ee1c31"
                    if (document.querySelector('.inc_just_added_save_pr') != null) {
                        document.querySelector('.inc_just_added_save_pr').innerText = "You Saved " + formatter.format(sidebarsaveprcw)
                    }
                } else {
                    elHeadersubtotalactivetext.style.color = "#000"
                    elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice);
                    elHeadersubtotalregulartext.innerHTML = ""
                    if (document.querySelector('.inc_just_added_save_pr') != null) {
                        document.querySelector('.inc_just_added_save_pr').innerHTML = ""
                    }
                }
                if (window.innerWidth > 767) {
                    if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 5) {
                        document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
                    }
                } else {
                    if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
                        document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
                    }
                }
                if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 7) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('more_than_seven')
                }
            }

            if (INC.config.pageType == "pdp") {

                if (Object.keys(productObj).length == 0 || client_add_btn == "client_add_btn" || client_add_btn == "clientbtn") {
                    if (elmparent != null) {

                        if (elmparent.querySelector('.product__main-photos .zoomImg') != null || document.querySelector('.inc_pdp_product-main_block .inc_product_img_main_img img') != null || document.querySelector('.inc_af_block.af_cart_page.variant_avail.inc_recommendations') !== null) {
                            var imgselp = ''
                            if (elmparent.querySelector('.product__main-photos .zoomImg') != null) {
                                imgselp = elmparent.querySelector('.product__main-photos .zoomImg').src;
                            } else if (document.querySelector('.inc_pdp_product-main_block .inc_product_img_main_img img') != null) {
                                imgselp = document.querySelector('.inc_pdp_product-main_block .inc_product_img_main_img img').src;
                            } else if (document.querySelector('.inc_af_block.af_cart_page.variant_avail.inc_recommendations')) {
                                imgselp = document.querySelector('.inc_af_block.af_cart_page .inc_product_img_main_img img').src;
                            }
                            if (INC.config.recommendation) {
                                imgselp = document.querySelector('.image__container img').src
                            }
                            var namep = document.querySelector('.pdp-prod-name').innerText
                            var clientPrice = null;
                            var clientSpPrice = null;
                            let replaceCurrency = '£'
                            let currentCountryPrice = getCountry()
                            if (currentCountryPrice == "b58lus" || currentCountryPrice == 'b58lau') {
                                replaceCurrency = "$"
                            }

                            if (document.querySelector('.actual-price').innerText.replace(replaceCurrency, '').replace(',', '').indexOf('\n') >= 0 && document.querySelector('.product__price[itemprop="price"]') != null) {
                                clientPrice = document.querySelector('.actual-price').innerText.replace(replaceCurrency, '').replace(',', '')
                            } else {
                                if (document.querySelector('.actual-price') != null) {
                                    clientPrice = document.querySelector('.actual-price').innerText.replace(replaceCurrency, '').replace(',', '')
                                }
                                if (document.querySelector('.ng-binding.sale-price') != null) {
                                    clientPrice = document.querySelector('.ng-binding.sale-price').innerText.replace(replaceCurrency, '').replace(',', '')
                                }
                                if (document.querySelector('.ng-binding.sale-price') != null && document.querySelector('.actual-price') != null) {
                                    clientPrice = document.querySelector('.actual-price').innerText.replace(replaceCurrency, '').replace(',', '')
                                    clientSpPrice = document.querySelector('.ng-binding.sale-price').innerText.replace(replaceCurrency, '').replace(',', '')
                                }
                            }

                            var actprice = parseFloat(clientPrice).toFixed(2) * qty;
                            var regprice = parseFloat(clientPrice).toFixed(2) * qty;
                            var actiprice = parseFloat(clientPrice).toFixed(2);
                            if (parseFloat(clientSpPrice) != null && parseFloat(clientSpPrice) < parseFloat(clientPrice)) {
                                actprice = parseFloat(clientSpPrice).toFixed(2) * qty;
                                regprice = parseFloat(clientPrice).toFixed(2) * qty;
                                actiprice = parseFloat(clientSpPrice).toFixed(2);
                                var sidebarsavepr = get_discount_price(clientPrice, clientSpPrice)
                                if (document.querySelector('.inc_just_added_save_pr') != null) {
                                    document.querySelector('.inc_just_added_save_pr').innerText = "You Saved " + formatter.format((sidebarsavepr).toFixed(2))
                                }
                            }

                            if (productBlock.querySelector('.inc_cart_added_product_img img') != null) {
                                if (imgselp != "" && imgselp != undefined) {
                                    productBlock.querySelector('.inc_cart_added_product_img img').src = imgselp
                                }

                                if (document.querySelector('.swatch__options') != null) {
                                    // if (sel_size !== '') return
                                    var selat = ""
                                    var allchecked = document.querySelector('.swatch_options.collection_swatches').querySelectorAll('input[type="radio"]:checked')
                                    if (client_add_btn == 'client_add_btn') {
                                        document.querySelector('.inc_cart_added_product_desc_att_size_text').innerHTML = ""
                                    }
                                    for (var at = 0; at < allchecked.length; at++) {
                                        if (at == 0) {
                                            selat = allchecked[at].value
                                        } else {
                                            selat = selat + allchecked[at].value
                                        }
                                        let nameOption = allchecked[at].parentElement.parentElement.querySelector('.option-title.label').innerText
                                        if (selat != "" && document.querySelector('.inc_cart_added_product_desc_att_size_text').innerHTML === "" && client_add_btn !== 'client_add_btn') {

                                            document.querySelector('.inc_cart_added_product_desc_att_size_text').innerHTML += nameOption + " : " + allchecked[at].value + ""
                                        }

                                        if (client_add_btn == 'client_add_btn') {
                                            if (at == 1) {

                                                document.querySelector('.inc_cart_added_product_desc_att_size_text').innerHTML += " , " + capitalizeFirstLetter(nameOption) + " : " + allchecked[at].value + ""
                                            } else {
                                                document.querySelector('.inc_cart_added_product_desc_att_size_text').innerHTML += capitalizeFirstLetter(nameOption) + " : " + allchecked[at].value + ""
                                            }
                                        }
                                    }

                                }
                                if (client_add_btn !== 'client_add_btn') {
                                    productBlock.querySelector('.inc_cart_added_product_desc_title_text').innerText = namep
                                    productBlock.querySelector('.inc_cart_added_product_desc_title_text').setAttribute('title', namep)
                                    productBlock.querySelector('.inc_cart_added_product_desc_ecirp_active_text').innerHTML = formatter.format(actiprice);
                                    elHeadersubtotalregulartext.setAttribute('subtotalregularprice', regprice)
                                    elHeadersubtotalactivetext.innerHTML = formatter.format(actprice);
                                    elHeadersubtotalactivetext.setAttribute('subtotalactiveprice', actprice)
                                }

                            }
                        }
                    }
                }
            }
            if (document.querySelector('.inc_cart_added_product_block') != null) {
                sbBlock.classList.remove('oos_prod_avail')
            } else {
                sbBlock.classList.add('oos_prod_avail')
            }
        }

        if (document.querySelector('.sidebar_outer')) {

            let prdLengthSidebar = document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length
            for (let i = 0; i < 6; i++) {

                document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_added_' + i)

            }
            // document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_added_')
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_added_' + prdLengthSidebar)
        }

    }
    INC.methods.sendBundleClickTracking = function (productId) {
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
        if (document.querySelector(".inc_sidebar_modal_block.inc_active") == null && INC.config.pageType == "pdp") {
            pageType = "100";
        }
        if (document.querySelector(".inc_sidebar_modal_block.inc_active") != null && INC.config.pageType != "productList") {
            pageType = "107";
        }
        var prdcore = INC.dataStore.pdpProductId
        if (INC.config.pageType == 'pdp') {
            prdcore = INC.config.Product_id
        }
        INC.methods.trackingEvents("bundleProductClickTracking", {
            "product_id": productId,
            "core_product_id": prdcore.toString()
        }, pageType);
    };

    INC.methods.createProductModuleBlock = function (pdpProductId, blockType, bundleProductListCheck, pdpblockel, mainprod) {
        if (INC.dataStore.dataStoreObj.undefined == undefined) {
            var productModuleBlock = generate_html_tag('div', 'inc_product_module_block')
            var findObj = new INC.classes.FindObj({
                id: pdpProductId
            });
            var productObj = INC.dataStore.methods().getProductById(findObj);
            productModuleBlock.style.userSelect = "none";
            setidstoelm(productModuleBlock, productObj)
            var elProductShowcaseBlock = generate_html_tag('div', 'inc_product_showcase_block');
            elProductShowcaseBlock.innerHTML = showcase_productcard
            var elProductModalBlock = generate_html_tag('div', 'inc_product_modal_block');
            elProductModalBlock.innerHTML = modal_productcard
            if (elProductShowcaseBlock != null) {
                elProductShowcaseBlock.setAttribute('role', "contentinfo")
            }
            if (elProductModalBlock != null) {
                elProductModalBlock.setAttribute('role', "contentinfo")
            }
            var productShowcaseBlock = INC.methods.createProductShowcaseBlock(pdpProductId, blockType, bundleProductListCheck, pdpblockel, elProductShowcaseBlock, mainprod);
            var productModalBlock = INC.methods.createProductModalBlock(pdpProductId, blockType, bundleProductListCheck, pdpblockel, elProductModalBlock, mainprod);

            elProductShowcaseBlock.appendChild(productShowcaseBlock);
            elProductModalBlock.appendChild(productModalBlock);
            productModuleBlock.appendChild(elProductShowcaseBlock)
            productModuleBlock.appendChild(elProductModalBlock)
            return productModuleBlock;
        }
    }

    function setidstoelm(productBlock, productObj) {
        productBlock.setAttribute('data-id', productObj.id);
        productBlock.setAttribute('data-sku', productObj.sku);
        productBlock.setAttribute('data-main_id', productObj.mainId);
        productBlock.setAttribute('data-bundle_id', productObj.bundleId);
        productBlock.setAttribute('data_main_variant', productObj.mainProdVariant);
        productBlock.setAttribute('data-category_name', productObj.categoryName);
        productBlock.setAttribute('product_type', productObj.ProductType);
        productBlock.classList.add(productObj.ProductType)
    }

    function prodtypedesc(productObj, producttypedetails, prodtypeflag) {
        if (productObj.finish != null && productObj.finish != "") {
            prodtypeflag = true
            var inc_prod_finish_block = generate_html_tag('div', 'inc_prod_finish_block')
            producttypedetails.appendChild(inc_prod_finish_block)
            var inc_prod_finish_title = generate_html_tag('div', 'inc_prod_finish_title')
            inc_prod_finish_title.innerText = "Finish"
            inc_prod_finish_block.appendChild(inc_prod_finish_title)
            var inc_prod_finish_text = generate_html_tag('div', 'inc_prod_finish_text')
            inc_prod_finish_text.innerText = productObj.finish
            inc_prod_finish_block.appendChild(inc_prod_finish_text)
        }
        if (productObj.coverage != null && productObj.coverage != "") {
            prodtypeflag = true
            var inc_prod_coverage_block = generate_html_tag('div', 'inc_prod_coverage_block')
            producttypedetails.appendChild(inc_prod_coverage_block)
            var inc_prod_coverage_title = generate_html_tag('div', 'inc_prod_coverage_title')
            inc_prod_coverage_title.innerText = "Coverage"
            inc_prod_coverage_block.appendChild(inc_prod_coverage_title)
            var inc_prod_coverage_text = generate_html_tag('div', 'inc_prod_coverage_text')
            inc_prod_coverage_text.innerText = productObj.coverage
            inc_prod_coverage_block.appendChild(inc_prod_coverage_text)
        }
        if (productObj.underTone != null && productObj.underTone != "") {
            prodtypeflag = true
            var inc_prod_undertone_block = generate_html_tag('div', 'inc_prod_undertone_block')
            producttypedetails.appendChild(inc_prod_undertone_block)
            var inc_prod_undertone_title = generate_html_tag('div', 'inc_prod_undertone_title')
            inc_prod_undertone_title.innerText = "Undertone"
            inc_prod_undertone_block.appendChild(inc_prod_undertone_title)
            var inc_prod_undertone_text = generate_html_tag('div', 'inc_prod_undertone_text')
            inc_prod_undertone_text.innerText = productObj.underTone
            inc_prod_undertone_block.appendChild(inc_prod_undertone_text)
        }
        if (productObj.skinType != null && productObj.skinType != "") {
            prodtypeflag = true
            var inc_prod_skinType_block = generate_html_tag('div', 'inc_prod_skinType_block')
            producttypedetails.appendChild(inc_prod_skinType_block)
            var inc_prod_skinType_title = generate_html_tag('div', 'inc_prod_skinType_title')
            inc_prod_skinType_title.innerText = "Skin Type"
            inc_prod_skinType_block.appendChild(inc_prod_skinType_title)
            var inc_prod_skinType_text = generate_html_tag('div', 'inc_prod_skinType_text')
            inc_prod_skinType_text.innerText = productObj.skinType
            inc_prod_skinType_block.appendChild(inc_prod_skinType_text)
        }
        return prodtypeflag;
    }

    function incscrollPgae(productBlock) {
        var doc = null;
        if (document.querySelector('.inc_pdp_block') != null) {
            doc = document.querySelector('.inc_pdp_block');
            inc_scroll_height = (window.scrollY || doc.scrollTop) - (doc.clientTop || 0);
        } else if (document.querySelector('.inc_af_block') != null) {
            doc = document.querySelector('.inc_af_block');
            inc_scroll_height = (window.scrollY || doc.scrollTop) - (doc.clientTop || 0);
        }
        if (productBlock != null) {
            if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null) {
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            Array.prototype.forEach.call(document.querySelectorAll('.inc_product_modal_block'), function (el) {
                el.classList.remove("inc_active");
            });
        }
    }

    function prepareAdditionalimages(elImgGalleryListBlock, productObj, productBlock, blockType) {
        var otimg = 0
        let otherImageArray = productObj.otherImageList


        if (otherImageArray.length > 0) {
            elImgGalleryListBlock.innerHTML = ""
        }
        let imagePresent = false


        if (productObj.otherOptionImageUrl !== null) {
            if (productObj.otherOptionImageUrl == undefined) return
            let newOtherImages = new Array()
            otherImageArray.forEach(function (otherImgURLs, idx) {
                if (otherImgURLs !== null) {

                    if (otherImgURLs.split('?')[0] == productObj.otherOptionImageUrl.split('?')[0]) {
                        imagePresent = true
                        otherImageArray[idx] = null
                    } else {
                        imagePresent = false
                    }
                }
            })

            newOtherImages.push(productObj.otherOptionImageUrl)
            otherImageArray.forEach(function (otherImgURLs, idx) {
                if (otherImgURLs !== null) {
                    newOtherImages.push(otherImgURLs)
                }
            })
            otherImageArray = newOtherImages
        }

        if (productBlock.querySelector('.inc_product_img_pagination_block')) {
            productBlock.querySelector('.inc_product_img_pagination_block').innerText = "1/" + otherImageArray.length
        }


        //inc_product_img_main_img
        productBlock.querySelector('.inc_product_img_main_img a').setAttribute('otherimagelist', otherImageArray)
        otherImageArray.forEach(function (otherImgURLs) {
            var otherImgURL = otherImgURLs;
            var elImgGalleryListItemBlock = generate_html_tag('div', 'inc_product_img_gallery_list_item_block')
            var imglist = '<div class="inc_product_img_gallery_list_item_img_block"><div class="inc_product_img_gallery_list_item_img"><img class="inc_lazy" data-src="' + otherImgURL + '" src="' + otherImgURL + '" role="img" aria-label="Image"  alt="' + productObj.name + '"></div></div><div class="inc_product_img_gallery_list_item_text_block"><div class="inc_product_img_gallery_list_item_text"></div></div>'
            elImgGalleryListItemBlock.innerHTML = imglist

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector('.inc_product_img_gallery_list_item_img');

            var elOtherImgTag = elImgGalleryListItemBlock.querySelector('.inc_product_img_gallery_list_item_img img')
            elOtherImgTag.src = otherImgURL
            elOtherImgTag.setAttribute('alt', productObj.name)
            elOtherImgTag.setAttribute('role', 'img')
            elOtherImgTag.setAttribute('aria-label', 'Image')
            elOtherImgTag.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");

            if (productObj.otherImageList.length > 4) {
                elImgGalleryListItemImg.classList.add('OthImg4');
            }

            elImgGalleryListItemBlock.setAttribute('index', otimg)
            elImgGalleryListItemBlock.addEventListener("click", function () {
                Array.prototype.forEach.call(productBlock.querySelectorAll('.inc_product_img_gallery_list_item_block'), function (galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("inc_active");
                });
                elImgGalleryListItemBlock.classList.add("inc_active");
                var imgotherlist = this.querySelector('img').src
                var elImgMainImg = productBlock.querySelector('.inc_product_img_main_img')
                elImgMainImg.querySelector('img').src = imgotherlist;
                elImgMainImg.querySelector('img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");

                // class="inc_product_img_pagination_block"
                let currentPos = Number(elImgGalleryListItemBlock.getAttribute('index')) + 1
                if (productBlock.querySelector('.inc_product_img_pagination_block')) {

                    let totalImages = productObj.otherImageList.length
                    productBlock.querySelector('.inc_product_img_pagination_block').innerText = currentPos + "/" + otherImageArray.length
                    INC.config.inc_slideIndex = currentPos
                    if (INC.config.inc_slideIndex > 1 && otherImageArray.length > 7) {

                        productBlock.querySelector('.inc_product_img_gallery_left_block.scroll_up').style.display = "block"
                    }
                    if (INC.config.inc_slideIndex == 1 && otherImageArray.length > 7) {
                        productBlock.querySelector('.inc_product_img_gallery_left_block.scroll_up').style.display = "none"
                    }

                    if (INC.config.inc_slideIndex == otherImageArray.length && otherImageArray.length > 7) {

                        productBlock.querySelector('.inc_product_img_gallery_right_block.scroll_down').style.display = "none"
                    }
                    if (INC.config.inc_slideIndex < otherImageArray.length && otherImageArray.length > 7) {
                        productBlock.querySelector('.inc_product_img_gallery_right_block.scroll_down').style.display = "block"
                    }
                }

            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);

            if (productObj.otherOptionImageUrl !== null) {

                if (otherImgURL.split('?')[0] == productObj.otherOptionImageUrl.split('?')[0]) {
                    elImgGalleryListItemBlock.click()
                } else {
                    if (otimg == 0) {
                        elImgGalleryListItemBlock.click()
                    }
                }
            } else {
                if (otimg == 0) {
                    elImgGalleryListItemBlock.click()
                }
            }

            if (productObj.otherImageList.length > 5) {
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }
            otimg++;
        });


    }

    function prepareAdditionalvideos(elImgGalleryListBlock, productObj, productBlock, blockType) {
        var otimg = 0

        if (productObj.otherVideoList === null) return
        let otherImageArray = productObj.otherVideoList.split(',')

        if (blockType == "modal") {
            productBlock.querySelector('.inc_product_img_pagination_block').innerText = "1/" + otherImageArray.length
        }
        if (otherImageArray.length > 0) {
            elImgGalleryListBlock.innerHTML = ""
        }
        otherImageArray.forEach(function (otherImgURLs) {
            var otherImgURL = otherImgURLs;
            var elImgGalleryListItemBlock = generate_html_tag('div', 'inc_product_img_gallery_list_item_block')
            var imglist = '<div class="inc_product_img_gallery_list_item_img_block"><div class="inc_product_img_gallery_list_item_img"><img class="inc_lazy" data-src="' + otherImgURL + '" src="' + otherImgURL + '" role="img" aria-label="Image"  alt="' + productObj.name + '"></div></div><div class="inc_product_img_gallery_list_item_text_block"><div class="inc_product_img_gallery_list_item_text"></div></div>'
            elImgGalleryListItemBlock.innerHTML = imglist

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector('.inc_product_img_gallery_list_item_img');

            var elOtherImgTag = elImgGalleryListItemBlock.querySelector('.inc_product_img_gallery_list_item_img img')
            elOtherImgTag.src = otherImgURL
            elOtherImgTag.setAttribute('alt', productObj.name)
            elOtherImgTag.setAttribute('role', 'img')
            elOtherImgTag.setAttribute('aria-label', 'Image')
            elOtherImgTag.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");

            if (productObj.otherImageList.length > 4) {
                elImgGalleryListItemImg.classList.add('OthImg4');
            }

            elImgGalleryListItemBlock.setAttribute('index', otimg)
            elImgGalleryListItemBlock.addEventListener("click", function () {
                Array.prototype.forEach.call(productBlock.querySelectorAll('.inc_product_img_gallery_list_item_block'), function (galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("inc_active");
                });
                elImgGalleryListItemBlock.classList.add("inc_active");
                var imgotherlist = this.querySelector('img').src
                var elImgMainImg = productBlock.querySelector('.inc_product_img_main_img')
                elImgMainImg.querySelector('img').src = imgotherlist;
                elImgMainImg.querySelector('img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");

                // class="inc_product_img_pagination_block"
                let currentPos = Number(elImgGalleryListItemBlock.getAttribute('index')) + 1
                let totalImages = productBlock.querySelector('.inc_product_img_pagination_block').innerText.split('/')[1]
                productBlock.querySelector('.inc_product_img_pagination_block').innerText = currentPos + "/" + totalImages
                INC.config.inc_slideIndex = currentPos
            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);

            if (otimg == 0) {
                elImgGalleryListItemBlock.classList.add('inc_active')
            }
            if (productObj.otherImageList.length > 5) {
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }
            otimg++;
        });
    }

    function prepareqty(productBlock, blockType) {
        var elAddText = productBlock.querySelector('.inc_product_desc_add_text');
        var productDescQtyInputText = productBlock.querySelector('.inc_product_qty_input_text');
        var productDescQtyBlock = productBlock.querySelector('.inc_product_qty_block');
        var elQtyBlock = productBlock.querySelector('.inc_product_qty_block');
        var elQtyDownBlock = productBlock.querySelector('.inc_product_qty_down_block');
        var elQtyUpBlock = productBlock.querySelector('.inc_product_qty_up_block');
        var elQtyInput = generate_html_tag('input');
        elQtyInput.setAttribute('type', "number");
        elQtyInput.setAttribute('aria-label', "quantity");
        elQtyInput.setAttribute('min', 1);
        elQtyInput.setAttribute('max', 99);
        elQtyInput.setAttribute('maxlength', 99);
        elQtyInput.value = 1;
        elQtyInput.setAttribute('old_qty', '1');

        elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
        elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==3) return false;');
        elQtyInput.setAttribute("oninput", "validity.valid||(value='');");
        elQtyInput.addEventListener("keydown", function (event) {
            var elmth = this
            var keyCode = event.which || event.keyCode;
            if (keyCode === 13) {
                event.preventDefault();
            } else if ((window.jQuery.inArray(event.keyCode, incallowedKeys) != -1) || (keyCode === 65 && (event.ctrlKey || event.metaKey)) || (keyCode >= 35 && keyCode <= 40)) {
                return;
            }
            var charValue = String.fromCharCode(keyCode),
                valid = /^\d+$/.test(charValue);
            if (!valid) {
                event.preventDefault();
            } else {
                setTimeout(function () {
                    qtyupdateInc(elmth, productBlock, elAddText)
                }, 50);
            }
        });
        elQtyInput.addEventListener('focusout', function () {
            var elmt = this
            setTimeout(function () {
                qtyupdateInc(elmt, productBlock, elAddText)
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

            var productModuleBlock = prdblk.parentNode.parentNode;
            var showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
            var modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')
            showcaseProductBlock.querySelector('.inc_product_qty_block').querySelector('input').value = parseInt(_elm.value);
            modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(_elm.value);

            var id = prdblk.getAttribute('data-id');
            var qty = parseInt(_elm.value);
            var main_id = prdblk.getAttribute('data-main_id');
            var bundle_id = prdblk.getAttribute('data-bundle_id');
            var pname = prdblk.querySelector('.inc_product_desc_title_text').textContent;
            var pprice = prdblk.querySelector('.inc_product_desc_ecirp_active_text').textContent.replace(/[^0-9.-]+/g, "")
            if (eladtext.textContent == 'Added' || eladtext.textContent == "Update") {
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id, bundle_id, pname, pprice);
            }
            if (_elm.value == 1) {
                elQtyBlock.classList.add('singleqty')
            }
        }
        productDescQtyInputText.appendChild(elQtyInput);

        var added_text = document.createElement('span');
        added_text.classList.add("inc_add_text");
        productDescQtyInputText.appendChild(added_text);

        elQtyDownBlock.addEventListener('click', function () {
            var elinput = this.parentNode.parentNode.parentNode.querySelector('.inc_product_qty_input_text input')
            elinput.value = (elinput.value - 1 < 1) ? 1 : elinput.value - 1;
            elinput.value == 1 ? elinput.classList.add('inc_disable') : elinput.classList.remove('inc_disable')
            var productModuleBlock = productBlock.parentNode.parentNode;
            var showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
            var modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')

            showcaseProductBlock.querySelector('.inc_product_qty_block').querySelector('input').value = parseInt(elinput.value);
            modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(elinput.value);

            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elinput.value);
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var main_id = productBlock.getAttribute('data-main_id');
            var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
            var pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').innerText.replace(/[^0-9.-]+/g, "")
            if (parseInt(elinput.value) == 1 && productDescQtyBlock.classList.contains('singleqty') == trueflag) {
                if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                    document.querySelector('html').classList.remove('inc_overlay')
                    if (INC.config.pageType == "pdp" && blockType == "pdp") {
                        INC.methods.updateBundleCart({
                            sku: id,
                            qty: qty
                        }, "add", main_id, bundle_id, pname, pprice);
                    }
                }
            } else {
                if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                    INC.methods.updateBundleCart({
                        sku: id,
                        qty: qty
                    }, "add", main_id, bundle_id, pname, pprice);
                }
            }
            if (elinput.value == 1) {
                elQtyBlock.classList.add('singleqty')
                productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block').classList.add('singleqty')
                modalProductBlock.querySelector('.inc_product_qty_input_text input').parentNode.parentNode.parentNode.parentNode.classList.add('singleqty');
            }
        });

        elQtyUpBlock.addEventListener('click', function () {
            var elinpt = this.parentNode.parentNode.parentNode.querySelector('.inc_product_qty_input_text input')
            elinpt.value = (parseInt(elinpt.value) + 1 > 99) ? 99 : parseInt(elinpt.value) + 1;
            var productModuleBlock = productBlock.parentNode.parentNode;
            var showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
            var modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')

            showcaseProductBlock.querySelector('.inc_product_qty_block').querySelector('input').value = parseInt(elinpt.value);
            modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(elinpt.value);

            modalProductBlock.querySelector('.inc_product_qty_input_text input').parentNode.parentNode.parentNode.parentNode.classList.remove('singleqty');

            productDescQtyBlock.classList.remove('singleqty')
            productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block').classList.remove('singleqty')
            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elinpt.value);
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var main_id = productBlock.getAttribute('data-main_id');
            var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
            var pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').innerText.replace(/[^0-9.-]+/g, "")
            if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id, bundle_id, pname, pprice);
            }
        });
    }
    INC.methods.createProductShowcaseBlock = function (pdpProductId, blockType, _bundleProductListCheck, _parentblock, elProductShowcaseBlock, mainprod) {
        var productBlock = elProductShowcaseBlock.querySelector('.inc_product_block')
        var findObj = new INC.classes.FindObj({
            id: pdpProductId
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);

        setidstoelm(productBlock, productObj)
        var elHeaderInfoBlck = productBlock.querySelector('.inc_product_info_main_block');
        var elHeader = productBlock.querySelector('.inc_product_header_main_block');
        var elImgBlock = productBlock.querySelector('.inc_product_img_block');
        var elImgGalleryListBlock = productBlock.querySelector('.inc_product_img_gallery_list_block');
        var elTitleTextBlock = productBlock.querySelector('.inc_product_desc_title_text_block');
        var elTitleText = productBlock.querySelector('.inc_product_desc_title_text');
        var elPromo = productBlock.querySelector('.pc_promo_div');
        var elproductPriceLabel = productBlock.querySelector('.inc_product_ecirp_label_block');
        var elPriceActiveText = productBlock.querySelector('.inc_product_desc_ecirp_active_text');
        var elPriceRegularText = productBlock.querySelector('.inc_product_desc_ecirp_regular_text');
        var elAttBlock = productBlock.querySelector('.inc_product_desc_att_block');
        var elAttColorBlock = productBlock.querySelector('.inc_product_desc_att_color_block');
        var elAttColorTitleText = productBlock.querySelector('.inc_product_desc_att_color_title_text');
        var elAttColorListBlock = productBlock.querySelector('.inc_product_desc_att_color_list_block');
        var elAttSizeBlock = productBlock.querySelector('.inc_product_desc_att_size_block');
        var elAttSizeTitleText = productBlock.querySelector('.inc_product_desc_att_size_title_text');
        var elAttSizeTitleTextSelected = productBlock.querySelector('.inc_product_desc_att_size_title_text_selected');
        var elAttSizeListBlock = productBlock.querySelector('.inc_product_desc_att_size_list_block');
        var elAtt0ListBlock = productBlock.querySelector('.inc_product_desc_att_zero_list_block');
        var elAtt3ListBlock = productBlock.querySelector('.inc_product_desc_att_third_list_block');
        var elAtt0Block = productBlock.querySelector('.inc_product_desc_att_zero_block');
        var elAtt3Block = productBlock.querySelector('.inc_product_desc_att_third_block');
        var elAtt0TitleText = productBlock.querySelector('.inc_product_desc_att_zero_title_text');
        var elAtt3TitleTextSelected = productBlock.querySelector('.inc_product_desc_att_third_title_text_selected');
        var elAtt3TitleText = productBlock.querySelector('.inc_product_desc_att_third_title_text');

        var elAddBlock = productBlock.querySelector('.inc_product_desc_add_block');
        var elAddText = productBlock.querySelector('.inc_product_desc_add_text');
        var elAddImg = productBlock.querySelector('.inc_product_desc_add_img');
        var elratingsBlock = productBlock.querySelector('.inc_product_desc_ratings_block');
        var elworthPrice = productBlock.querySelector('.inc_product_desc_ecirp_worth_text');
        var eldetailsprodblock = productBlock.querySelector('.inc_product_desc_att_details_block');
        var eladdvarianttext = productBlock.querySelector('.inc_product_variant_simple_text');
        var elconfigtitle = productBlock.querySelector('.inc_product_desc_add_title_text_block');
        var elvariantaddbtn = productBlock.querySelector('.inc_product_desc_att_variant_add_block');
        var elvariantaddbtntext = productBlock.querySelector('.inc_product_desc_att_variant_text');
        var elvariantpopupclose = productBlock.querySelector('.inc_product_desc_variant_popup_close_block');
        var elselectoptaddbtn = productBlock.querySelector('.inc_product_variant_simple_block');

        var elManuBlock = productBlock.querySelector('.inc_product_extension_block');
        var productDescAddText = productBlock.querySelector('.inc_product_add_text');
        var elQtyAddBtnBlock = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');

        elQtyAddBtnBlock.classList.add(productObj.ProductType);

        if (INC.config.catFlag.length >= 2) {

            if (_parentblock.querySelector('.inc_pdp_title_text') != null) {
                _parentblock.querySelector('.inc_pdp_title_text').innerText = "Frequently Bought Together"
            }

        }

        if (window.innerWidth < 821) {

            var prodtypeflag = false;
            var producttypedetails_mobile_view = generate_html_tag('div', 'inc_details_mobile_quick_view')
            var producttypedetails = generate_html_tag('div', 'inc_producttype_details_block')
            var prod_quick_view_close = generate_html_tag('div', 'prod_quick_view_close')
            producttypedetails_mobile_view.appendChild(prod_quick_view_close)
            prod_quick_view_close.addEventListener('click', function () {
                document.querySelector('html').classList.remove('inc_overlay')
                document.querySelector('body').classList.remove('quick_view_active_inc')
                if (document.querySelector('.inc_details_mobile_quick_view.quick_view_active') != null) {
                    document.querySelector('.inc_product_block.quick_view_open').classList.remove('quick_view_open')
                    document.querySelector('.inc_details_mobile_quick_view.quick_view_active').classList.remove('quick_view_active')
                }
            })
            producttypedetails_mobile_view.appendChild(producttypedetails)
            prodtypedesc(productObj, producttypedetails, prodtypeflag)
            if (prodtypeflag == trueflag) {
                var prod_quick_view_btn = generate_html_tag('div', 'prod_quick_view_btn')
                prod_quick_view_btn.innerText = "More Info"
                prod_quick_view_btn.addEventListener('click', function () {
                    if (productBlock.querySelector('.inc_details_mobile_quick_view.quick_view_active') != null) {
                        document.querySelector('html').classList.remove('inc_overlay')
                        document.querySelector('body').classList.remove('quick_view_active_inc')
                        productBlock.classList.remove('quick_view_open')
                        productBlock.querySelector('.inc_details_mobile_quick_view.quick_view_active').classList.remove('quick_view_active')
                    } else {
                        document.querySelector('body').classList.add('quick_view_active_inc')
                        document.querySelector('html').classList.add('inc_overlay')
                        productBlock.classList.add('quick_view_open')
                        productBlock.querySelector('.inc_details_mobile_quick_view').classList.add('quick_view_active')
                    }

                })

                var prodplacement = productBlock.querySelector('.inc_product_desc_block')
                if (prodplacement != null) {
                    prodplacement.appendChild(prod_quick_view_btn)
                    prodplacement.appendChild(producttypedetails_mobile_view)
                }
            }
        }

        elvariantpopupclose.addEventListener('click', function () {
            if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                document.querySelector('html').classList.remove('inc_overlay')
                document.querySelector('body').style.position = "relative"
                document.querySelector('body').style.overflow = "auto"
            }
            this.parentNode.classList.remove('inc_active')
            productBlock.classList.remove('show_overlay')
        });
        elHeaderInfoBlck.setAttribute('data-id', productObj.id);
        elHeaderInfoBlck.setAttribute('data-sku', productObj.sku);
        elHeaderInfoBlck.setAttribute('data-main_id', productObj.mainId);
        elHeaderInfoBlck.setAttribute('data-bundle_id', productObj.bundleId);

        elHeader.querySelector('.inc_product_header_img_block').addEventListener("click", function () {
            productBlock.parentNode.classList.remove("inc_active");
            document.querySelector('body').classList.remove('inc_popup_open')

        });
        var elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');
        var elImgTag1 = generate_html_tag('img');
        elImgTag1.src = productObj.imageURLMain
        elImgTag1.setAttribute('data-src', productObj.imageURLMain)
        elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
        elImgTag1.setAttribute('role', 'img')
        elImgTag1.setAttribute('aria-label', 'Image')
        elImgTag1.setAttribute('alt', productObj.nameMain)
        elImgTag1.setAttribute('data-mouseover', productObj["otherImageList"])
        elImgTag1.setAttribute('data-imageURL', productObj["imageURLMain"])
        var productLink = document.createElement('a');

        productLink.setAttribute('rel', 'noopener noreferrer')
        productLink.href = productObj.url;
        productLink.appendChild(elImgTag1);
        productLink.setAttribute('otherImageList', productObj["otherImageList"])
        productLink.setAttribute('imageURL', productObj["imageURLMain"])
        add_swipe(productLink)

        elImgMainImg.appendChild(productLink);

        productLink.addEventListener('click', function (e) {
            if (window.innerWidth < 798 || mainprod == "mainprod") {
                e.preventDefault()
            }
        })


        productLink.setAttribute("href", productObj.url);

        elImgMainImg.addEventListener("click", function (e) {

            e.preventDefault()
            INC.config.miniPopup = false
            if (productObj.ProductType == "configurable") {
                productBlock.parentElement.parentElement.querySelector('.inc_product_modal_block .inc_product_block.configurable').classList.remove('inc_mini_modal')
                productBlock.querySelector('.inc_product_variant_simple_text').click()
            } else {
                window.location.href = productObj.url
            }

        });
        elImgGalleryListBlock.innerHTML = "";
        if ((productObj.otherImageList != null) && productObj.otherImageList.length >= 1) {
            prepareAdditionalimages(elImgGalleryListBlock, productObj, productBlock)
        }

        elTitleTextBlock.addEventListener("click", function (e) {
            e.preventDefault()
            INC.config.miniPopup = false
            if (productObj.ProductType == "configurable") {
                productBlock.parentElement.parentElement.querySelector('.inc_product_modal_block .inc_product_block.configurable').classList.remove('inc_mini_modal')
                productBlock.querySelector('.inc_product_variant_simple_text').click()
            } else {
                window.location.href = productObj.url
            }
        });

        if (productObj.PromotionalMessage != null && productObj.PromotionalMessage != "") {
            // elPromo.innerText = productObj.PromotionalMessage;
            elPromo.classList.add('avail')
        } else {
            elPromo.classList.add('empty')
        }

        var pTitleDiv = document.createElement('div');

        if (mainprod == "mainprod" && INC.config.pageType == "pdp") {
            pTitleDiv.innerHTML = "<strong>This item: </strong>" + productObj.nameMain;
        } else {
            pTitleDiv.innerHTML = productObj.nameMain;
        }

        var ratingCountT = productObj.ratingsCount
        var reviewCountT = productObj.reviewsCount

        INC.methods.get_product_ratings(reviewCountT, ratingCountT, elratingsBlock);
        var pLink = document.createElement('a');
        pLink.setAttribute('style', 'cursor: default;text-decoration: none;')
        pLink.href = productObj.url;
        pLink.addEventListener('click', function (ev) {
            if (window.innerWidth < 798 || mainprod == "mainprod") {
                ev.preventDefault()
            }
        })
        pLink.setAttribute('style', 'text-transform: unset;')
        pLink.setAttribute('title', productObj.nameMain)
        if (INC.config.pageType == "pdp" && INC.config.recommendation) {
            pLink.setAttribute('href', productObj.url)
        }
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);
        var activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
        var regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();
        var totalsaveprc = get_discount_price(productObj.regularPrice, productObj.activePrice)
        elPriceRegularText.textContent = "";

        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
            elPriceActiveText.innerHTML = formatter.format(activePrice)
            elPriceRegularText.innerHTML = formatter.format(regularPrice)
            elproductPriceLabel.innerHTML = "You Saved " + (totalsaveprc).toFixed(2)
        } else {
            elPriceActiveText.innerHTML = formatter.format(activePrice)
            elworthPrice.innerHTML = ""

        }
        if (window.innerWidth < 798) {
            var inc_empty_popup = generate_html_tag('div', 'inc_empty_popup');
            eldetailsprodblock.appendChild(inc_empty_popup);
        }
        if (blockType == "am") {
            productDescAddText.innerText = addButtonText()
        } else if (blockType == "sidebar") {
            productDescAddText.innerText = addButtonText()
        } else {
            productDescAddText.innerText = "Add to Bundle"
        }
        productDescAddText.addEventListener('click', function () {
            this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
        });

        prepareqty(productBlock, blockType)

        ////////////////// mobile pop qty start
        if (window.innerWidth < 820) {
            var elAddText = productBlock.querySelector('.inc_product_desc_add_text');
            var productDescQtyInputText1 = productBlock.querySelector('.inc_pop_qty_input_text');
            var productDescQtyBlock1 = productBlock.querySelector('.inc_pop_qty_block');
            var elQtyBlock1 = productBlock.querySelector('.inc_pop_qty_block');
            var elQtyDownBlock1 = productBlock.querySelector('.inc_pop_qty_down_block');
            var elQtyUpBlock1 = productBlock.querySelector('.inc_pop_qty_up_block');
            var elQtyInput1 = generate_html_tag('input');
            elQtyInput1.setAttribute('type', "number");
            elQtyInput1.setAttribute('aria-label', "quantity");
            elQtyInput1.setAttribute('min', 1);
            elQtyInput1.setAttribute('max', 99);
            elQtyInput1.setAttribute('maxlength', 99);
            elQtyInput1.value = 1;
            elQtyInput1.setAttribute('old_qty', '1');

            elQtyInput1.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
            elQtyInput1.setAttribute('onKeyPress', 'if(this.value.length==3) return false;');
            elQtyInput1.setAttribute("oninput", "validity.valid||(value='');");
            // elQtyInput1.addEventListener("keydown", function (event) {
            //     var elmth = this
            //     var keyCode = event.which || event.keyCode;
            //     if (keyCode === 13) {
            //         event.preventDefault();
            //     } else if ((window.jQuery.inArray(event.keyCode, incallowedKeys) != -1) || (keyCode === 65 && (event.ctrlKey || event.metaKey)) || (keyCode >= 35 && keyCode <= 40)) {
            //         return;
            //     }
            //     var charValue = String.fromCharCode(keyCode),
            //         valid = /^\d+$/.test(charValue);
            //     if (!valid) {
            //         event.preventDefault();
            //     } else {
            //         setTimeout(function () {
            //             qtyupdateInc(elmth, productBlock, elAddText)
            //         }, 50);
            //     }
            // });
            // elQtyInput1.addEventListener('focusout', function () {
            //     var elmt = this
            //     setTimeout(function () {
            //         qtyupdateInc(elmt, productBlock, elAddText)
            //     }, 50);
            // });

            // function qtyupdateInc(_elm, prdblk, eladtext) {
            //     if (_elm.value.length == 0) {
            //         _elm.value = 1;
            //     }
            //     if (_elm.value == 0) {
            //         _elm.value = 1;
            //     }
            //     if (_elm.value > 99) {
            //         _elm.value = 99;
            //     }

            //     var productModuleBlock = prdblk.parentNode.parentNode;
            //     var showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
            //     var modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')
            //     showcaseProductBlock.querySelector('.inc_product_qty_block').querySelector('input').value = parseInt(_elm.value);
            //     modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(_elm.value);

            //     var id = prdblk.getAttribute('data-id');
            //     var qty = parseInt(_elm.value);
            //     var main_id = prdblk.getAttribute('data-main_id');
            //     var bundle_id = prdblk.getAttribute('data-bundle_id');
            //     var pname = prdblk.querySelector('.inc_product_desc_title_text').textContent;
            //     var pprice = prdblk.querySelector('.inc_product_desc_ecirp_active_text').textContent.replace(/[^0-9.-]+/g, "")
            //     if (eladtext.textContent == 'Added' || eladtext.textContent == "Update") {
            //         INC.methods.updateBundleCart({
            //             sku: id,
            //             qty: qty
            //         }, "add", main_id, bundle_id, pname, pprice);
            //     }
            //     if (_elm.value == 1) {
            //         elQtyBlock.classList.add('singleqty')
            //     }
            // }
            productDescQtyInputText1.appendChild(elQtyInput1);

            var added_text = document.createElement('span');
            added_text.classList.add("inc_add_text");
            productDescQtyInputText1.appendChild(added_text);

            elQtyDownBlock1.addEventListener('click', function () {
                var elinput = this.parentNode.parentNode.parentNode.querySelector('.inc_pop_qty_input_text input')
                elinput.value = (elinput.value - 1 < 1) ? 1 : elinput.value - 1;
                elinput.value == 1 ? elinput.classList.add('inc_disable') : elinput.classList.remove('inc_disable')
                var productModuleBlock = productBlock.parentNode.parentNode;
                var showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
                var modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')

                showcaseProductBlock.querySelector('.inc_product_qty_block').querySelector('input').value = parseInt(elinput.value);
                modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(elinput.value);

                var id = productBlock.getAttribute('data-id');
                var qty = parseInt(elinput.value);
                var bundle_id = productBlock.getAttribute('data-bundle_id');
                var main_id = productBlock.getAttribute('data-main_id');
                var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
                var pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').innerText.replace(/[^0-9.-]+/g, "")
                if (parseInt(elinput.value) == 1 && productDescQtyBlock1.classList.contains('singleqty') == trueflag) {
                    if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                        document.querySelector('html').classList.remove('inc_overlay')
                        if (INC.config.pageType == "pdp" && blockType == "pdp") {
                            INC.methods.updateBundleCart({
                                sku: id,
                                qty: qty
                            }, "add", main_id, bundle_id, pname, pprice);
                        }
                    }
                } else {
                    if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                        INC.methods.updateBundleCart({
                            sku: id,
                            qty: qty
                        }, "add", main_id, bundle_id, pname, pprice);
                    }
                }
                if (elinput.value == 1) {
                    elQtyBlock1.classList.add('singleqty')
                    productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block').classList.add('singleqty')
                    modalProductBlock.querySelector('.inc_product_qty_input_text input').parentNode.parentNode.parentNode.parentNode.classList.add('singleqty');
                }
            });

            elQtyUpBlock1.addEventListener('click', function () {
                var elinpt = this.parentNode.parentNode.parentNode.querySelector('.inc_pop_qty_input_text input')
                elinpt.value = (parseInt(elinpt.value) + 1 > 99) ? 99 : parseInt(elinpt.value) + 1;
                var productModuleBlock = productBlock.parentNode.parentNode;
                var showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
                var modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')

                showcaseProductBlock.querySelector('.inc_product_qty_block').querySelector('input').value = parseInt(elinpt.value);
                modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(elinpt.value);

                modalProductBlock.querySelector('.inc_product_qty_input_text input').parentNode.parentNode.parentNode.parentNode.classList.remove('singleqty');

                productDescQtyBlock1.classList.remove('singleqty')
                productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block').classList.remove('singleqty')
                var id = productBlock.getAttribute('data-id');
                var qty = parseInt(elinpt.value);
                var bundle_id = productBlock.getAttribute('data-bundle_id');
                var main_id = productBlock.getAttribute('data-main_id');
                var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
                var pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').innerText.replace(/[^0-9.-]+/g, "")
                if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                    INC.methods.updateBundleCart({
                        sku: id,
                        qty: qty
                    }, "add", main_id, bundle_id, pname, pprice);
                }
            });
        }
        /////////////////////// mobile qty end 
        findObj = new INC.classes.FindObj({
            mainId: productObj.mainId
        });
        var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);
        var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);
        var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);
        var product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);



        elAtt0ListBlock.innerHTML = "";
        elAttSizeListBlock.innerHTML = "";
        elAttColorListBlock.innerHTML = "";
        elAtt3ListBlock.innerHTML = "";

        if (product0Obj.att0Array.length > 0) {

            elAtt0ListBlock.innerHTML = "";
            if (product0Obj["att0Array"].length > 0) {

                productzeroatt(elAtt0TitleText, elAtt0Block, product0Obj, elAtt0ListBlock, blockType, productBlock)
            }

        }

        productsizeatt(elAttSizeTitleText, elAttSizeBlock, productSizesObj, elAttSizeListBlock, elAttSizeTitleTextSelected, blockType)
        productcoloratt(productColorsObj, productBlock, elAttColorListBlock, blockType, elAttColorBlock, elAttColorTitleText)
        productthirdatt(product3Obj, elAtt3TitleText, elAtt3Block, elAtt3ListBlock, blockType, elAtt3TitleTextSelected)

        if (productSizesObj.sizeArray.length > 0 && product0Obj["att0Array"].length > 0) {
            elAttBlock.classList.add('moreThanOne')
        }
        if (productColorsObj["colorArray"].length > 0 && product0Obj["att0Array"].length > 0) {
            elAttBlock.classList.add('moreThanOne')
        }

        var sizezero = INC.dataStore.methods().getProductopt0Obj(findObj)
        if (productColorsObj["colorArray"].length == 0 && sizezero["att0Array"].length == 0) {
            elAttBlock.classList.add('attributes_not_avail')
            eladdvarianttext.textContent = "Add"
            switch (blockType) {
                case "pdp":
                    eladdvarianttext.textContent = "Add to Bundle";
                    break;
                case "sidebar":
                    eladdvarianttext.textContent = addButtonText();
                    break;
                case "am":
                    eladdvarianttext.textContent = addButtonText();
                    break;
            }
            eladdvarianttext.classList.add('simple')
        } else if (productColorsObj["colorArray"].length > 0) {
            elAttBlock.classList.add('attributes_avail')
            elAttSizeTitleText.textContent = "View colours";
            eladdvarianttext.textContent = "Select Option";
            eladdvarianttext.classList.add('config')
            elconfigtitle.textContent = "Please select a Color";
            switch (blockType) {
                case "pdp":
                    elvariantaddbtntext.textContent = "Add to Bundle";
                    break;
                case "sidebar":
                    elvariantaddbtntext.textContent = addButtonText();
                    break;
                case "am":
                    elvariantaddbtntext.textContent = addButtonText();
                    break;
            }
            eladdvarianttext.classList.remove('simple')
        } else if (sizezero["att0Array"].length > 0) {
            eladdvarianttext.classList.remove('simple')
            eladdvarianttext.textContent = "Select Option";
            eladdvarianttext.classList.add('config')
            elAttBlock.classList.add('attributes_avail')
            if (elAttSizeTitleText.textContent == null) {
                elAttSizeTitleText.textContent = "View Sizes";
            }
            elconfigtitle.textContent = "Please select your Size";
            switch (blockType) {
                case "pdp":
                    elvariantaddbtntext.textContent = "Add to Bundle";
                    break;
                case "sidebar":
                    elvariantaddbtntext.textContent = addButtonText();
                    break;
                case "am":
                    elvariantaddbtntext.textContent = addButtonText();
                    break;
            }
        }

        elvariantaddbtn.addEventListener('click', function () {
            var moduleblk = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            var flag_check = INC.methods.checkVariantSelection(moduleblk)
            if ((this.textContent.trim() == "Update" || this.parentNode.classList.contains('config_avail') == trueflag) && this.innerText.trim() != addButtonText()) {
                if (flag_check == 1 || flag_check == 3) {
                    if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                        document.querySelector('html').classList.remove('inc_overlay')
                    }
                    this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    productBlock.classList.remove('show_overlay')
                    if (this.textContent.trim() == "Add") {
                        this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                    }
                } else {
                    if (flag_check == 2 || flag_check == 0) {
                        if (flag_check != 0) {
                            if (this.parentNode.parentNode.querySelector('.inc_variant_tag') != null) {
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                                this.parentNode.parentNode.querySelector('.inc_variant_tag').setAttribute('style', 'border:1px solid #E52B45;')
                            }
                        }

                        if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                            if (this.parentNode.getAttribute('data-color') == null && this.parentNode.getAttribute('data-zero') != null && this.parentNode.getAttribute('data-size') != null) {
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size and Color options";
                            } else if (this.parentNode.getAttribute('data-color') != null && this.parentNode.querySelectorAll('inc_product_desc_att_color_list_item_block.inc_active').length > 0) {
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size";
                            } else if (this.parentNode.getAttribute('data-zero') != null || this.parentNode.getAttribute('data-size') != null) {
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                            }
                            this.parentNode.querySelector('.inc_product_desc_add_title_text_block').setAttribute('style', 'display:block;')
                        }

                    }
                }
            } else {
                if (this.innerText.trim() == addButtonText() || this.innerText.trim() == "SELECT") {
                    if (flag_check == 1 || flag_check == 3) {
                        if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                        this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                        this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()

                        productBlock.classList.remove('show_overlay')
                        if (this.textContent.trim() == addButtonText() || this.textContent.trim() == "SELECT" || this.textContent.trim() == "Add") {
                            this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                        }
                    } else {
                        if (flag_check == 2 || flag_check == 0) {
                            if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                                if (this.parentNode.getAttribute('data-color') == null && this.parentNode.getAttribute('data-zero') == null && this.parentNode.getAttribute('data-size') == null) {
                                    this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size and Color options";
                                } else if (this.parentNode.getAttribute('data-zero') == null) {
                                    this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size";
                                } else if (this.parentNode.getAttribute('data-zero') != null || this.parentNode.getAttribute('data-size') != null) {
                                    this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                                }
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').setAttribute('style', 'display:block;')
                            }

                            if (flag_check == 0) {
                                if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                                    this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your size";
                                }
                            }
                        }
                    }
                } else {
                    if (flag_check == 1 || flag_check == 3) {
                        this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                        this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    } else {
                        if (flag_check == 2 || flag_check == 0) {
                            if (flag_check != 0) {
                                if (this.parentNode.parentNode.querySelector('.inc_variant_tag') != null) {
                                    this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                                }
                            }

                            if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                                if (this.parentNode.getAttribute('data-color') == null && this.parentNode.getAttribute('data-zero') == null && this.parentNode.getAttribute('data-size') == null) {
                                    this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size and Color options";
                                } else if (this.parentNode.getAttribute('data-color') != null) {
                                    this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size";
                                } else if (this.parentNode.getAttribute('data-zero') != null || this.parentNode.getAttribute('data-size')) {
                                    this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                                }
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').setAttribute('style', 'display:block;')
                            }

                            if (flag_check == 0) {
                                if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                                    this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your size";
                                }
                            }
                        }
                    }
                }

            }
        })

        elselectoptaddbtn.addEventListener('click', function (e) {
            if (document.querySelector('.inc_product_desc_att_block.inc_active') != null) {
                document.querySelector('.inc_product_desc_att_block.inc_active').classList.remove('inc_active')
            }
            incscrollPgae(null)
            if (this.querySelector('.inc_product_variant_simple_text.simple') != null) {
                this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
            } else {
                document.querySelector('html').classList.add('inc_overlay');
                // if (window.innerWidth <= 769) {
                //     document.querySelector('html').classList.add('inc_overlay')
                //     document.querySelector('body').style.overflow = "hidden"
                //     productBlock.classList.add('show_overlay')
                //     this.parentNode.querySelector('.inc_product_desc_att_block').classList.add('inc_active')
                // } else {
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block').classList.add('inc_active')
                //}
                if (INC.config.recommendation || document.querySelector('.sidebar_outer.sidebar_outer_active') || INC.config.pageType == 'cartPage') {

                    let variantsModal = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block')
                    // updateAllSelectionModal(variantsModal)
                }

                if (window.innerWidth < 800 && INC.config.miniPopup && blockType == "pdp") {
                    productBlock.parentElement.parentElement.querySelector('.inc_product_modal_block .inc_product_block.configurable').classList.add('inc_mini_modal')
                }
                if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block') != null) {
                    document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block').classList.add('overflow_visible')
                    document.querySelector('body').classList.add('inc_popup_open');
                }
                if (productBlock.parentNode.parentNode.parentNode.classList.contains('inc_af_product-list_block') == trueflag) {
                    document.querySelector('html').classList.add('inc_overlay');
                }
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_info_main_block').classList.add('inc_active');
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_description_main_block').classList.remove('inc_active');
                INC.config.miniPopup = true
                if (INC.config.pageType == 'cartPage') {
                    updateAllSelection()
                }
            }
        })
        switch (blockType) {
            case "pdp":
                elAddText.textContent = "Add";
                break;
            case "sidebar":
                elAddText.textContent = addButtonText();
                break;
            case "am":
                elAddText.textContent = addButtonText();
                break;
        }
        elAddBlock.addEventListener("click", function () {
            var productModuleBlock = productBlock.parentNode.parentNode;
            var modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')
            var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
            var sku = productBlock.getAttribute('data-sku');
            var mainId = productBlock.getAttribute('data-main_id');
            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var pname = productBlock.querySelector('.inc_product_desc_title_text').textContent;
            var pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').textContent.replace(/[^0-9.-]+/g, "")
            var elqtyvalue = productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block input')
            var qty = parseInt(elqtyvalue.value);
            if (qty < 1) {
                qty = 1
            }
            var prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            var prodflag = false;


            if (productModuleBlock.querySelector('.inc_product_variant_simple_block').innerText == "Select Option") {
                productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.add('select_inc')
            }

            if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                if (flag_check == 1 || onloadpdp == falseflag || onloadpdp_delete == falseflag) {
                    prodflag = true

                } else {

                    if (document.querySelector('.inc_product_modal_block.inc_active') == null) {
                        if (document.querySelector('.inc_pdp_bundle_block.inc_active .inc_pdp_bundle_cart_title_img_block') != null) {
                            document.querySelector('.inc_pdp_bundle_block.inc_active .inc_pdp_bundle_cart_title_img_block').click()
                        }
                        if (window.innerWidth < 798) {
                            productModuleBlock.querySelector('.inc_product_variant_simple_text').click()
                        } else {
                            productModuleBlock.querySelector('.inc_product_variant_simple_block').click()
                        }

                        if (elAddText.textContent == "Add") {
                            if (document.querySelector('.inc_product_modal_block.inc_active') == null) {
                                // if (window.innerWidth < 798) {
                                //     productModuleBlock.querySelector('.inc_product_variant_simple_text').click()
                                // } else {
                                //     productModuleBlock.querySelector('.inc_product_variant_simple_text').click()
                                // }
                            }
                            if (productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title') != null) {
                                var variant_span = generate_html_tag('span', 'variant_span')
                                variant_span.innerText = decodeEntity(productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title'))
                                if (variant_span.innerText.includes('Set of')) {

                                    let setofcollection = productModuleBlock.querySelectorAll('.inc_product_modal_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block .inc_product_desc_att_size_list_item_img')
                                    let sel_attr_text = ""
                                    setofcollection.forEach((item) => {
                                        if (sel_attr_text == "") {
                                            sel_attr_text = decodeEntity(item.innerText)
                                        } else {
                                            sel_attr_text = sel_attr_text + " / " + decodeEntity(item.innerText)
                                        }
                                    })
                                    variant_span.innerText = sel_attr_text

                                }

                                productModuleBlock.querySelector('.inc_product_variant_simple_text').innerHTML = ""
                                productModuleBlock.querySelector('.inc_product_variant_simple_text').appendChild(variant_span)
                            }
                        }
                    }
                }



                if (productModuleBlock.querySelector('.inc_product_variant_simple_block').innerText == "Select Option") {
                    productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.add('select_inc')
                }




                if (elAddText.textContent == "Add") {

                    if (prodflag == trueflag) {
                        elAddText.textContent = "Added";
                        elAddText.classList.add('added');
                        productDescAddText.textContent = "Added"
                        elAddText.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').classList.add('Inc_checked');
                        var pListItemBlock = document.querySelector('.inc_pdp_bundle_product_list_item_block' + "[data-main_id=\"" + mainId + "\"]");
                        modalProductBlock.querySelector('.inc_product_desc_add_text').textContent = "Update";
                        if (pListItemBlock != null) {
                            pListItemBlock.classList.add('product_added');
                            pListItemBlock.querySelector('.inc_pdp_bundle_product_list_item_added_btn_img').classList.add("checked");
                        }
                        elAddImg.classList.add("checked");
                        modalProductBlock.querySelector('.inc_product_desc_add_img').classList.add("checked");
                        if (INC.config.pageType == "pdp" && blockType == "pdp") {
                            INC.methods.updateBundleCart({
                                sku: sku,
                                qty: qty
                            }, "add", main_id, bundle_id, pname, pprice);
                        }
                        if (prod_card != null) {
                            if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                if (inc_scroll_height > 100) {
                                    window.scrollTo(0, inc_scroll_height);
                                }
                                prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                            }
                        }
                        productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.add('added_inc')

                        if (productModuleBlock.querySelector('.inc_product_variant_simple_block').textContent == "Select Option") {

                            productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.add('select_inc')
                        }
                        productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block').classList.add('added_inc')
                        if (productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block .inc_add_text') != null) {
                            productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block .inc_add_text').innerText = "Added to Bundle";
                        }
                        productModuleBlock.querySelector('.inc_product_add_block').classList.add('added_inc')
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_add_block').classList.add('added_inc')
                        productModuleBlock.querySelector('.inc_product_desc_att_variant_text').textContent = "Update"

                        var variant_span = generate_html_tag('span', 'variant_span')
                        variant_span.innerText = decodeEntity(productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title'))
                        if (variant_span.innerText.includes('Set of')) {

                            let setofcollection = productModuleBlock.querySelectorAll('.inc_product_modal_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block .inc_product_desc_att_size_list_item_img')
                            let sel_attr_text = ""
                            setofcollection.forEach((item) => {
                                if (sel_attr_text == "") {
                                    sel_attr_text = decodeEntity(item.innerText)
                                } else {
                                    sel_attr_text = sel_attr_text + " / " + decodeEntity(item.innerText)
                                }
                            })

                            variant_span.innerText = sel_attr_text

                        }



                        productModuleBlock.querySelector('.inc_product_variant_simple_text').innerHTML = ""
                        productModuleBlock.querySelector('.inc_product_variant_simple_text').appendChild(variant_span)
                        if (productModuleBlock.querySelector('.inc_product_variant_simple_block').innerText !== "Select Option") {
                            productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.remove('select_inc')
                        }
                        if (onloadpdp && productModuleBlock.querySelector('.inc_product_desc_add_block.Inc_checked') == null) {

                            productModuleBlock.querySelector('.inc_product_variant_simple_text').click()
                        }
                    }
                } else if (elAddText.textContent == "Added") {
                    if (modalProductBlock.querySelector('.inc_product_desc_add_text').textContent != "Update" && prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                        elAddText.textContent = "Add";
                        productDescAddText.textContent = "Add to Bundle"
                        elAddText.classList.remove('added');

                        elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                        modalProductBlock.querySelector('.inc_product_desc_add_text').textContent = "Add to Bundle";
                        var pListItemBlock1 = document.querySelector('.inc_pdp_bundle_product_list_item_block' + "[data-main_id=\"" + mainId + "\"]");
                        if (pListItemBlock1 != null) {
                            pListItemBlock1.classList.remove('product_added');
                            pListItemBlock1.querySelector('.inc_pdp_bundle_product_list_item_added_btn_img').classList.remove("checked");
                        }
                        elAddImg.classList.remove("checked");
                        modalProductBlock.querySelector('.inc_product_desc_add_img').classList.remove("checked");
                        eladdfn_(productModuleBlock)
                        if (INC.config.pageType == "pdp" && blockType == "pdp") {
                            INC.methods.updateBundleCart({
                                sku: sku,
                                qty: qty
                            }, "sub", main_id, bundle_id, pname, pprice);
                        }
                    } else {
                        if (prod_card.querySelector('.inc_product_modal_block.inc_active') == null) {
                            elAddText.textContent = "Add";
                            productDescAddText.textContent = "Add to Bundle"
                            elAddText.classList.remove('added');
                            elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                            modalProductBlock.querySelector('.inc_product_desc_add_text').textContent = "Add to Bundle";
                            var pListItemBlock2 = document.querySelector('.inc_pdp_bundle_product_list_item_block' + "[data-main_id=\"" + mainId + "\"]");
                            if (pListItemBlock2 != null) {
                                pListItemBlock2.classList.remove('product_added');
                                pListItemBlock2.querySelector('.inc_pdp_bundle_product_list_item_added_btn_img').classList.remove("checked");
                            }
                            eladdfn_(productModuleBlock)
                            elAddImg.classList.remove("checked");
                            modalProductBlock.querySelector('.inc_product_desc_add_img').classList.remove("checked");
                            if (INC.config.pageType == "pdp" && blockType == "pdp") {
                                INC.methods.updateBundleCart({
                                    sku: sku,
                                    qty: qty
                                }, "sub", main_id, bundle_id, pname, pprice);
                            }
                        }
                    }
                    if (prod_card != null) {
                        if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                            if (inc_scroll_height > 100) {
                                window.scrollTo(0, inc_scroll_height);
                            }
                            prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                        }
                    }
                }
            } else {
                if (flag_check == 1) {
                    elAddText.textContent = "Adding...";
                    elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                } else {
                    if (document.querySelector('.inc_product_modal_block.inc_active') == null) {
                        productModuleBlock.querySelector('.inc_product_details_prod_block').click()
                    }
                }
            }

        });


        if (blockType == 'sidebar') {
            if (productBlock.querySelector('.inc_product_variant_simple_block').innerText == "Select Option") {
                productBlock.querySelector('.inc_product_variant_simple_block').classList.add('select_inc')
            }
        }


        return productBlock;
    }

    function eladdfn_(productModuleBlock) {

        if (productModuleBlock.querySelector('.inc_product_variant_simple_text.simple') != null) {
            productModuleBlock.querySelector('.inc_product_variant_simple_text.simple').textContent = "Add to Bundle"
        } else {
            if (productModuleBlock.parentElement !== null) {

                if (!productModuleBlock.parentElement.classList.contains('inc_pdp_product-main_block') && !productModuleBlock.parentElement.classList.contains('inc_pdp_bundle_product_list_main_block')) {
                    productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = "Select Option";
                }
            } else {
                productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = "Select Option";
            }
        }
        if (productModuleBlock.querySelector('.inc_product_variant_simple_block') != null) {
            productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.remove('added_inc')
            if (productModuleBlock.querySelector('.inc_product_variant_simple_block') !== 'Select Option') {

                productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.remove('select_inc')
            }
        }

        productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block').classList.remove('added_inc')
        productModuleBlock.querySelector('.inc_product_add_block').classList.remove('added_inc')
        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_add_block').classList.remove('added_inc')
        productModuleBlock.querySelector('.inc_product_desc_att_variant_text').textContent = "Add to Bundle"
    }
    INC.methods.createProductModalBlock = function (pdpProductId, blockType, _bundleProductListCheck, _parentblock, elmodalblock, mainprod) {
        var productBlock = elmodalblock.querySelector('.inc_product_block')
        var prdmblock = productBlock
        var findObj = new INC.classes.FindObj({
            id: pdpProductId
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        setidstoelm(productBlock, productObj)
        var elHeader = prdmblock.querySelector('.inc_product_header_main_block');
        var elImgBlock = prdmblock.querySelector('.inc_product_img_block');
        var elImgGalleryListBlock = prdmblock.querySelector('.inc_product_img_gallery_list_block');
        var elImgGalleryListVideoBlock = prdmblock.querySelector('.inc_product_img_gallery_list_block.inc_video');
        var elTitleBlock = prdmblock.querySelector('.inc_product_desc_title_block');
        var elManuBlock = prdmblock.querySelector('.inc_product_extension_block');
        var elTitleText = prdmblock.querySelector('.inc_product_desc_title_text');
        var elAttBlock = productBlock.querySelector('.inc_product_desc_att_block');
        var elAttColorTitleText = prdmblock.querySelector('.inc_product_desc_att_color_title_text');
        var elPriceActiveText = prdmblock.querySelector('.inc_product_desc_ecirp_active_text');
        var elPriceRegularText = prdmblock.querySelector('.inc_product_desc_ecirp_regular_text');
        var elAttColorBlock = prdmblock.querySelector('.inc_product_desc_att_color_block');
        var elAttColorListBlock = prdmblock.querySelector('.inc_product_desc_att_color_list_block');
        var elAttSizeBlock = prdmblock.querySelector('.inc_product_desc_att_size_block');
        var elAttSizeTitleText = prdmblock.querySelector('.inc_product_desc_att_size_title_text');
        var elAttSizeTitleTextSelected = prdmblock.querySelector('.inc_product_desc_att_size_title_text_selected');
        var elAttSizeListBlock = prdmblock.querySelector('.inc_product_desc_att_size_list_block');
        var elAtt0ListBlock = prdmblock.querySelector('.inc_product_desc_att_zero_list_block');
        var elAtt3ListBlock = prdmblock.querySelector('.inc_product_desc_att_third_list_block');
        var elAtt0Block = prdmblock.querySelector('.inc_product_desc_att_zero_block');
        var elAtt3Block = prdmblock.querySelector('.inc_product_desc_att_third_block');
        var elAtt0TitleText = prdmblock.querySelector('.inc_product_desc_att_zero_title_text');
        var elAtt3TitleTextSelected = prdmblock.querySelector('.inc_product_desc_att_third_title_text_selected');
        var elAtt3TitleText = prdmblock.querySelector('.inc_product_desc_att_third_title_text');
        var elAddBlock = prdmblock.querySelector('.inc_product_desc_add_block');
        var elAddText = prdmblock.querySelector('.inc_product_desc_add_text');
        var elratingsBlock = prdmblock.querySelector('.inc_product_desc_ratings_block');
        var elratingsMobileBlock = prdmblock.querySelector('.inc_mobile_desc_ratings_block');
        var elGalleryRightArrow = prdmblock.querySelector('.inc_product_img_gallery_right_block');
        var elGallerylefttArrow = prdmblock.querySelector('.inc_product_img_gallery_left_block');
        var elGalleryRightArrowScroll = prdmblock.querySelector('.inc_product_img_gallery_right_block.scroll_down');
        var elGallerylefttArrowScroll = prdmblock.querySelector('.inc_product_img_gallery_left_block.scroll_up');
        var productDescriptionMainBlock = prdmblock.querySelector('.inc_product_description_main_block');
        var productHeaderMainBlockTitle = prdmblock.querySelector('.inc_product_header_main_title_block')
        var productHeaderMainBlockRating = prdmblock.querySelector('.inc_product_header_main_rating_block')
        var elproductPriceLabel = prdmblock.querySelector('.inc_product_ecirp_label_block')
        var elPromo = productBlock.querySelector('.pc_promo_div');
        var elproductdescblock = prdmblock.querySelector('.inc_product_desc_block')
        var elGalleryBlock = prdmblock.querySelector('.inc_product_img_gallery_block')

        if (productObj.PromotionalMessage != null && productObj.PromotionalMessage != "") {
            // elPromo.innerText = productObj.PromotionalMessage;
            elPromo.classList.add('avail')
        } else {
            elPromo.classList.add('empty')
        }

        if (window.innerWidth < 800) {
            var productFullDetailsBlock = generate_html_tag('div', 'inc_product_mobile_full_deatils')
            productFullDetailsBlock.innerHTML = "<span></span>" + "View Full Details"
            elproductdescblock.appendChild(productFullDetailsBlock)

            productFullDetailsBlock.addEventListener("click", function () {
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                getTrackingPixel();
                var hrefm = productBlock.querySelector('.inc_product_img_main_img a').href
                setTimeout(function () {
                    window.location.href = hrefm
                }, 2000)
            });
        }

        elHeader.querySelector('.inc_product_header_img_block').addEventListener("click", function () {

            // if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
            if (blockType !== 'sidebar') {

                document.querySelector('html').classList.remove('inc_overlay');
            }
            document.querySelector('body').classList.remove('inc_popup_open');
            // }
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
            }
            if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input') != null && productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input') != null) {
                if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value != productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value) {
                    productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value
                }
            }

            productBlock.parentNode.classList.remove("inc_active");
            productBlock.parentNode.querySelector('.inc_product_header_title_block').classList.add('inc_active');
            productBlock.parentNode.querySelector('.inc_product_header_title_block_1').classList.remove('inc_active');
            if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('body.active-gnav, body.product-shades-sidebar-active') == null) { // document.querySelector('body').setAttribute('style', 'overflow:auto')
            }

            if (window.innerWidth < 800) {
                productBlock.parentElement.parentElement.querySelector('.inc_product_modal_block .inc_product_block.configurable').classList.remove('inc_mini_modal')
            }
            if (inc_scroll_height > 100) {
                window.scrollTo(0, inc_scroll_height);
            }
        });
        if (window.innerWidth > 820) {
            var prodtypeflag = false;
            var producttypedetails = generate_html_tag('div', 'inc_producttype_details_block')
            prodtypedesc(productObj, producttypedetails, prodtypeflag)
            if (prodtypeflag == trueflag) {
                var prodplacement = productBlock.querySelector('.inc_product_desc_att_details_block')
                if (prodplacement != null) {
                    prodplacement.parentNode.insertBefore(producttypedetails, prodplacement)
                }
            }
        }
        var elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');
        var elImgTag1 = generate_html_tag('img');
        elImgTag1.src = productObj.imageURLMain
        elImgTag1.setAttribute('data-src', productObj.imageURLMain)
        if (elImgTag1 == trueflag) {
            elImgTag1.src = productObj.imageURLMain
        }
        elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
        elImgTag1.setAttribute('role', 'img')
        elImgTag1.setAttribute('aria-label', 'Image')
        elImgTag1.setAttribute('alt', productObj.nameMain)

        if (window.innerWidth < 798) {
            if (productObj.otherImageList != null && productObj.otherImageList.length < 2) {

                elGallerylefttArrowScroll.style.display = 'none'
                elGalleryRightArrowScroll.style.display = 'none'
            }
        } else {
            elGallerylefttArrowScroll.style.display = 'none'
            if (productObj.otherImageList != null && productObj.otherImageList.length < 8) {

                elGallerylefttArrowScroll.style.display = 'none'
                elGalleryRightArrowScroll.style.display = 'none'
            }
        }
        if (productObj.otherImageList == null) {
            elGalleryRightArrow.style.setProperty('display', 'none', 'important')
            elGallerylefttArrow.style.setProperty('display', 'none', 'important')
            elGallerylefttArrowScroll.style.display = 'none'
            elGalleryRightArrowScroll.style.display = 'none'
            elGalleryBlock.style.display = 'none'
        }
        var productLink = document.createElement('a');

        productLink.setAttribute('rel', 'noopener noreferrer')
        if (mainprod != 'mainprod') {
            productLink.href = productObj.url;
        }
        productLink.appendChild(elImgTag1);
        productLink.style.cursor = 'pointer';
        productLink.setAttribute('otherImageList', productObj["otherImageList"])
        productLink.setAttribute('imageURL', productObj["imageURLMain"])
        add_swipe(productLink)
        elImgMainImg.appendChild(productLink);
        let pagination_div = document.createElement('div')
        pagination_div.classList.add('inc_product_img_pagination_block')
        elImgMainImg.appendChild(pagination_div);
        if (mainprod != 'mainprod') {
            elImgMainImg.addEventListener("click", function (e) {
                e.preventDefault()
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                getTrackingPixel();
                var hrefm = productBlock.querySelector('.inc_product_img_main_img a').href
                setTimeout(function () {
                    window.location.href = hrefm
                }, 2000)
            });
        }
        elImgGalleryListBlock.innerHTML = "";

        if ((productObj.otherImageList != null) && productObj.otherImageList.length >= 1) {
            prepareAdditionalimages(elImgGalleryListBlock, productObj, productBlock, "modal")
        } else {
            productBlock.classList.add('inc_other_noimage')
        }

        let incVideoTab = productBlock.querySelector('.inc_product_img_block.inc_video')
        let incTabButton = productBlock.querySelector('.inc_product_header_title_block_0')
        if (incVideoTab) {
            incVideoTab.style.display = "none"
            incTabButton.style.display = 'none'
        }
        elImgGalleryListVideoBlock.innerHTML = ""
        // prepareAdditionalvideos(elImgGalleryListVideoBlock, productObj, productBlock, "modal")

        if (mainprod != 'mainprod') {
            elTitleBlock.addEventListener("click", function (ee) {
                ee.preventDefault()
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                getTrackingPixel();
                var hrefm1 = productBlock.querySelector('.inc_product_img_main_img a').href
                setTimeout(function () {
                    window.location.href = hrefm1
                }, 2000)
            });
        }
        elManuBlock.innerText = productObj.manufacturer
        let mobileModalManu = elManuBlock.cloneNode(elManuBlock)

        elTitleText.parentNode.insertBefore(mobileModalManu, elTitleText)
        var pTitleDiv = document.createElement('div');
        pTitleDiv.innerText = productObj.nameMain;
        var pLinkModal = document.createElement('a');
        pLinkModal.setAttribute("title", productObj.nameMain);
        if (mainprod != 'mainprod') {
            pLinkModal.setAttribute("href", productObj.url);
        }
        pLinkModal.setAttribute('rel', 'noopener noreferrer')
        pLinkModal.innerText = productObj.nameMain;
        productHeaderMainBlockTitle.appendChild(pLinkModal)
        if (mainprod != 'mainprod') {
            pLinkModal.addEventListener("click", function (e) {
                e.preventDefault()
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                getTrackingPixel();
                var hrefm2 = productBlock.querySelector('.inc_product_img_main_img a').href
                setTimeout(function () {
                    window.location.href = hrefm2
                }, 2000)
            });
        }

        var ratingCountT = productObj.ratingsCount
        var reviewCountT = productObj.reviewsCount

        INC.methods.get_product_ratings(reviewCountT, ratingCountT, elratingsBlock);
        if (window.innerWidth < 768) {
            INC.methods.get_product_ratings(reviewCountT, ratingCountT, elratingsMobileBlock);
        }
        var pLinkModalSKU = document.createElement('span');
        pLinkModalSKU.classList.add("product_modal_sku");
        pLinkModalSKU.innerText = "#" + productObj.sku
        productHeaderMainBlockRating.appendChild(pLinkModalSKU)


        // Swap rating and price
        if (window.innerWidth < 800) {
            insertAfter(productBlock.querySelector('.inc_product_desc_ecirp_block'), productBlock.querySelector('.inc_mobile_desc_ratings_block'))
        }

        var pLink = document.createElement('a');
        if (mainprod !== 'mainprod') {

            pLink.href = productObj.url;
        }
        pLink.setAttribute('style', 'text-transform: unset;')
        pLink.setAttribute('title', productObj.nameMain)
        pLink.appendChild(pTitleDiv);

        elTitleText.appendChild(pLink);
        var activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
        var regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();
        var totalsaveprc = get_discount_price(productObj.regularPrice, productObj.activePrice)
        elPriceRegularText.innerText = "";
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
            elPriceActiveText.innerHTML = formatter.format(activePrice)
            elPriceRegularText.innerHTML = formatter.format(regularPrice)
            elproductPriceLabel.innerHTML = (totalsaveprc).toFixed(2)
        } else {
            elPriceActiveText.innerText = formatter.format(activePrice)
        }
        prepareqty(productBlock, blockType)

        findObj = new INC.classes.FindObj({
            mainId: productObj.mainId
        });
        if (INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length == 0 && INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length == 0) {
            elHeader.querySelector('.inc_product_header_title_text').innerText = "Overview";
        } else {
            if (INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length > 0 || INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length > 0) {
                elHeader.querySelector('.inc_product_header_title_text').innerText = "Overview";
            }
        }

        var inc_product_header_title_block_1 = productBlock.querySelector('.inc_product_header_title_block_1')
        var inc_product_header_title_text_1 = productBlock.querySelector('.inc_product_header_title_text_1')
        inc_product_header_title_text_1.innerText = "Description";
        if (productObj.description) {

            if (window.innerWidth < 798) {
                productDescriptionMainBlock.innerHTML = "<span>Description</span>" + productObj.description.replace(/\\t/g, '');
            } else {
                productDescriptionMainBlock.innerHTML = productObj.description.replace(/\\t/g, '');
            }
        }
        if (productDescriptionMainBlock.querySelector('.readMore-description')) {
            productDescriptionMainBlock.querySelector('.readMore-description').remove()
        }
        if (productDescriptionMainBlock.querySelector('.readLess-description')) {
            productDescriptionMainBlock.querySelector('.readLess-description').remove()
        }

        let allDescriptionEl = productDescriptionMainBlock.querySelectorAll('*')
        for (let i = 0; i < allDescriptionEl.length; i++) {
            allDescriptionEl[i].removeAttribute('style');
        }
        var inc_product_header_title_block = inc_product_header_title_block_1.parentNode.querySelector('.inc_product_header_title_block');

        var inc_product_header_new_page = productBlock.querySelector('.inc_product_header_new_page')
        var inc_product_header_new_page_text = productBlock.querySelector('.inc_product_header_new_page .inc_product_header_new_page_text')
        inc_product_header_new_page_text.innerText = "Open in a new tab"
        inc_product_header_new_page_text.setAttribute("href", productObj.url)
        inc_product_header_new_page_text.setAttribute("target", "_blank")
        inc_product_header_new_page_text.setAttribute('rel', 'noopener noreferrer')
        inc_product_header_new_page.addEventListener("click", function () {
            INC.methods.sendBundleClickTracking(productObj.mainId);
            getTrackingPixel()
        });

        inc_product_header_title_block_1.addEventListener('click', function () {
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_description_main_block").classList.add("inc_active")
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_info_main_block").classList.remove("inc_active")
            this.parentNode.querySelector('.inc_product_header_title_block').classList.remove("inc_active");
            this.classList.add("inc_active");
        });

        inc_product_header_title_block.classList.add('inc_active');

        inc_product_header_title_block.addEventListener('click', function () {
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_description_main_block").classList.remove("inc_active")
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_info_main_block").classList.add("inc_active")
            inc_product_header_title_block.classList.add('inc_active');
            inc_product_header_title_block_1.classList.remove('inc_active');
        });

        var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);

        var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);
        var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);
        var product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);

        elAtt0ListBlock.innerHTML = "";
        elAttSizeListBlock.innerHTML = "";
        elAttColorListBlock.innerHTML = "";
        elAtt3ListBlock.innerHTML = "";



        if (product0Obj.att0Array.length > 0) {

            elAtt0ListBlock.innerHTML = "";
            if (product0Obj["att0Array"].length > 0) {
                productzeroatt(elAtt0TitleText, elAtt0Block, product0Obj, elAtt0ListBlock, blockType, productBlock)
            }

        }

        if (productColorsObj["colorArray"].length > 0 || productSizesObj["sizeArray"].length > 0 || product3Obj["att3Array"].length > 0) {
            INC.config.ddFlag = true;
        }

        productsizeatt(elAttSizeTitleText, elAttSizeBlock, productSizesObj, elAttSizeListBlock, elAttSizeTitleTextSelected, blockType)
        productcoloratt(productColorsObj, productBlock, elAttColorListBlock, blockType, elAttColorBlock, elAttColorTitleText)
        productthirdatt(product3Obj, elAtt3TitleText, elAtt3Block, elAtt3ListBlock, blockType, elAtt3TitleTextSelected)


        elGallerylefttArrow.setAttribute('title', 'Scroll left')
        elGalleryRightArrow.setAttribute('title', 'Scroll right')

        elGalleryRightArrow.addEventListener("click", function () {
            var prod_card = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var pr_id = prod_card.getAttribute('data-main_id')
            slideTo(pr_id, 0, prod_card, "right", "arrow")
        });
        elGallerylefttArrow.addEventListener("click", function () {
            var prod_card = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var pr_id = prod_card.getAttribute('data-main_id')
            slideTo(pr_id, 0, prod_card, "left", "arrow")
        });

        elGalleryRightArrowScroll.addEventListener("click", function () {
            var prod_card = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var pr_id = prod_card.getAttribute('data-main_id')
            slideTo(pr_id, 0, prod_card, "right", "arrow", "scroll")
        });
        elGallerylefttArrowScroll.addEventListener("click", function () {
            var prod_card = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var pr_id = prod_card.getAttribute('data-main_id')
            slideTo(pr_id, 0, prod_card, "left", "arrow", "scroll")
        });
        if ((productObj.otherImageList == null) || productObj.otherImageList.length < 1) {
            elGalleryRightArrow.style.display = "none"
            elGallerylefttArrow.style.display = "none"
        }
        switch (blockType) {
            case "pdp":
                elAddText.innerText = "Add to Bundle";
                break;
            case "sidebar":
                elAddText.innerText = addButtonText();
                break;
            case "am":
                elAddText.innerText = addButtonText();
                break;
        }
        elAddBlock.addEventListener("click", function () {

            //productBlock.parentNode.querySelector('.inc_product_header_title_block').classList.add('inc_active');

            // productBlock.parentNode.querySelector('.inc_product_header_title_block_1').click()

            var productModuleBlock = productBlock.parentNode.parentNode;
            var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
            if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                document.querySelector('body').classList.remove('inc_popup_open')
                document.querySelector('html').classList.remove('inc_overlay')
            }
            var showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');

            if (INC.config.pageType != "cartPage" && !INC.config.recommendation && INC.config.pageType != "ticket" && productModuleBlock.parentNode.className.indexOf('inc_af_product-list_block') == -1) {
                showcaseProductBlock.querySelector('.inc_product_desc_add_block').click();
            }
            if (productModuleBlock.classList.contains('configurable') == trueflag) {
                if (flag_check == 1) {

                    setTimeout(function () {
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active') != null) {

                            checkAddedProductInJustAdded()
                            // INC.methods.showSidebar();
                            // INC.methods.updateSidebarBlock()
                            document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block').classList.remove('overflow_visible')
                        }
                    }, 200)
                } else {
                    productModuleBlock.querySelector('.inc_product_desc_add_title_text_block').setAttribute('style', 'color:#E52B45')
                    var element = document.querySelector('.inc_product_modal_block.inc_active .inc_product_block .inc_product_desc_att_color_block')

                    productBlock.querySelector('.inc_product_desc_add_err_text_block').innerText = 'Please select a variant'
                    if (element != null) {
                        document.querySelector('html').classList.add('inc_popup_open')
                        document.querySelector('html').classList.add('inc_overlay')
                    }
                }
            } else {
                setTimeout(function () {
                    if (document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active') != null) {
                        document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active').classList.remove('inc_active')
                        document.querySelector('body').classList.remove('inc_popup_open')
                        if (inc_scroll_height > 100) {
                            window.scrollTo(0, inc_scroll_height);
                        }
                    }
                    var sidemodal = document.querySelector('.inc_sidebar_modal_block')
                    if (document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active') == null && sidemodal != null) {
                        sidemodal.classList.remove('overflow_visible')
                    }
                }, 100)
            }
            setTimeout(function () {
                if (document.querySelector('.sidebar_outer.sidebar_outer_active') != null && document.querySelector('.inc_product_modal_block.inc_active') == null) {
                    document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
                }
            }, 200)
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                addprodsingle(this)
            }
            productBlock.parentNode.querySelector('.inc_product_header_title_block').click()
        });
        return productBlock;
    }

    function productzeroatt(elAtt0TitleText, elAtt0Block, product0Obj, elAtt0ListBlock, blockType, _productBlock_) {
        elAtt0TitleText.innerText = product0Obj["att0Array"][0].label
        elAtt0Block.classList.add("inc_active");
        elAtt0Block.classList.add("inc_total_" + product0Obj["att0Array"].length)
        var zeroc = 0


        if (product0Obj["att0Array"][0].headers !== undefined) {
            if (product0Obj["att0Array"][0].length !== 0) {
                let parentHeaders = product0Obj["att0Array"][0].headers
                product0Obj["att0Array"].forEach(function (sizeObj) {
                    sizeObj.headers = parentHeaders
                })
            }
        }
        elAtt0Block.classList.add(decodeEntity(product0Obj["att0Array"][0].label).replace(' ', '_').toLowerCase());
        product0Obj["att0Array"].forEach(function (sizeObj) {
            var attSizeImgBlock0 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img_block');
            var attSizeImg0 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
            attSizeImgBlock0.setAttribute('blocktype', blockType)
            attSizeImgBlock0.setAttribute('varianttypes', 'zero')
            attSizeImgBlock0.addEventListener('click', function () {
                var elvariant = this;
                var elblktype = this.getAttribute('blocktype')
                var elvtype = this.getAttribute('varianttypes')
                INC.methods.mappvariants(elvariant, elblktype, elvtype)
            })
            attSizeImgBlock0.classList.add('avail')

            if (sizeObj.imgSrc.length > 0 || sizeObj["colorCode"] != "") {
                if (sizeObj["colorCode"] == "" || sizeObj["colorCode"] == undefined) {
                    var sizeimg = generate_html_tag('img');
                    sizeimg.setAttribute('alt', sizeObj["text"])
                    sizeimg.src = sizeObj["imgSrc"]
                    attSizeImgBlock0.setAttribute('data-optionimge', sizeObj["imgSrc"])
                    attSizeImgBlock0.appendChild(sizeimg);
                    elAtt0TitleText.classList.add('img_tag_avail')
                    elAtt0TitleText.style.display = "flex"
                    attSizeImgBlock0.classList.add('img_avail')
                } else {
                    var spancolorcode = generate_html_tag('span');
                    spancolorcode.classList.add('color_code')
                    spancolorcode.setAttribute('alt', sizeObj["text"])
                    spancolorcode.style.backgroundColor = sizeObj["colorCode"];
                    elAtt0TitleText.classList.add('img_tag_avail')
                    attSizeImgBlock0.appendChild(spancolorcode);
                }
                elAtt0ListBlock.classList.add('img_tag_avail')
            }

            let prepareComboAttribute = function (pos, element) {
                if (!sizeObj.combo_options[pos]) return
                let comboValue = sizeObj.combo_options[pos].split('_')[0]
                if (comboValue == "null") {
                    element.innerText = ""
                } else {
                    element.innerText = decodeEntity(comboValue)

                }
                element.setAttribute('data-option-type', decodeEntity(comboValue))
                attSizeImgBlock0.appendChild(element);
            }


            sizeObj.combo_options = sortEmpty(sizeObj.combo_options)

            if (sizeObj.combo_options !== undefined) {
                let comboFirst = sizeObj.combo_options[0].split('_')[0]
                if (comboFirst == "null") {
                    attSizeImg0.innerText = ""
                } else {
                    attSizeImg0.innerText = decodeEntity(comboFirst)
                }
                attSizeImg0.setAttribute('data-option-type', decodeEntity(comboFirst))
            } else {

                attSizeImg0.innerText = decodeEntity(sizeObj["text"].split("_")[0])
                attSizeImg0.setAttribute('data-option-type', decodeEntity(sizeObj["text"].split("_")[0]))
            }


            attSizeImgBlock0.setAttribute('data-size', sizeObj["text"])
            attSizeImgBlock0.setAttribute('data-size-select', decodeEntity(sizeObj["text"]))
            attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase())
            attSizeImgBlock0.setAttribute('data-option', "1");
            attSizeImgBlock0.setAttribute('data-cpid', sizeObj["cpid"])
            attSizeImgBlock0.setAttribute('data-optid', sizeObj["opt_id"]);
            attSizeImgBlock0.setAttribute('data-attrid', sizeObj["att_id"]);
            attSizeImgBlock0.setAttribute('data-child-price', sizeObj["prc"]);
            // attSizeImgBlock0.setAttribute('title', sizeObj["text"])
            attSizeImgBlock0.setAttribute('titles', sizeObj["text"])

            zeroc++
            if (attSizeImg0.textContent !== "null") {
                attSizeImgBlock0.appendChild(attSizeImg0);
            }

            if (sizeObj.combo_options !== undefined) {

                // Enable Variant Type Via Class
                attSizeImgBlock0.classList.add('set_variant')
                elAtt0Block.classList.add('set_variant')
                // Set Header


                if (sizeObj.headers !== undefined) {
                    sizeObj.headers = sortEmpty(sizeObj.headers)
                    elAtt0TitleText.innerText = ""
                    // Move empty to first
                    let headersTitle = sizeObj.headers
                    let validHeaders = 0
                    let emtpyHeaders = 0

                    for (let i = 0; i < headersTitle.length; i++) {
                        if (!headersTitle[i].includes('empty')) {
                            let header_title = generate_html_tag('div', 'inc_product_desc_att_set_variant_headers');
                            header_title.textContent = decodeEntity(headersTitle[i])
                            elAtt0TitleText.appendChild(header_title)
                            validHeaders++
                        } else {
                            let empty_header_title = generate_html_tag('div', 'inc_product_desc_att_set_variant_headers_empty');
                            empty_header_title.innerText = ""
                            elAtt0TitleText.appendChild(empty_header_title)
                            emtpyHeaders++
                        }
                    }

                    let headersLength = sizeObj.headers.length + 1
                    if (emtpyHeaders == 0) {
                        headersLength = headersLength + "_" + Number(sizeObj.headers.length + 1)
                    }

                    if (validHeaders < emtpyHeaders && validHeaders == 0) {
                        headersLength = 1
                    }
                    elAtt0Block.classList.add("inc_total_headers_" + headersLength)

                    let subTitlePrice = generate_html_tag('div', 'inc_product_desc_att_set_variant_headers');
                    subTitlePrice.textContent = "Price"
                    elAtt0TitleText.appendChild(subTitlePrice)

                }

                var attSizeImg1 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
                prepareComboAttribute(1, attSizeImg1)

                var attSizeImg2 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
                prepareComboAttribute(2, attSizeImg2)

                var attSizeImg3 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
                prepareComboAttribute(3, attSizeImg3)

                var attSizeImgPrc = generate_html_tag('div', 'inc_product_desc_att_size_list_item_prc');

                let findObj = new INC.classes.FindObj({
                    id: sizeObj.cpid
                });
                let prdObj = INC.dataStore.methods().getProductById(findObj);

                if (prdObj.regularPrice == prdObj.activePrice) {

                    attSizeImgPrc.innerHTML = "<span class='inc_active_price'>" + formatter.format(parseFloat(prdObj.activePrice)) + "</span>"

                } else {

                    attSizeImgPrc.innerHTML = "<span class='inc_regular_price'>" + formatter.format(parseFloat(prdObj.regularPrice)) + "</span>" + "<span class='inc_active_price'>" + formatter.format(parseFloat(prdObj.activePrice)) + "</span>"
                }


                if (attSizeImgPrc.textContent != "null") {
                    attSizeImgBlock0.appendChild(attSizeImgPrc);
                }



            }
            elAtt0ListBlock.appendChild(attSizeImgBlock0);
        });
    }

    function productcoloratt(productColorsObj, productBlock, elAttColorListBlock, blockType, elAttColorBlock, elAttColorTitleText) {
        fabricprod = []
        if (productColorsObj.colorArray.length > 0) {
            productColorsObj["colorArray"] = productColorsObj["colorArray"].sort(function (a, b) {
                if (a.attLebel < b.attLebel) {
                    return -1;
                }
                if (a.attLebel > b.attLebel) {
                    return 1;
                }
                return 0;
            })
            if (productColorsObj["colorArray"][0].label == 'Select Fabric') {
                var items = productColorsObj["colorArray"]
                var sortingdata = ["Color", "Size", "Linen", "Wool", "Duro Velvet", "Bouclé", "Textured Chenille", "Wilbur Alpaca Blend", "Stonewash Linen", "Twisted Yarn Cotton Blend", "Brenta Leather", "Fermo Leather", "Romagna Leather", "Riso Bouclé", "Alpaca Velvet", "Bora Bora", "Dolce", "Strange Loves"];
                var result = []
                sortingdata.forEach(function (key) {
                    var found = false;
                    items = items.filter(function (item) {
                        var attcheck = item.attLebel.split('|')[0]
                        if (!found && attcheck == key) {
                            result.push(item);
                            return false;
                        } else {
                            return true;
                        }
                    })
                })
                productColorsObj["colorArray"] = result
            }

            if (productColorsObj["colorArray"].length > 0) {
                elAttColorListBlock.innerHTML = "";

                elAttColorBlock.classList.add(decodeEntity(productColorsObj["colorArray"][0].label).replace(' ', '_').toLowerCase());
                elAttColorListBlock.classList.add('greater6');
                elAttColorTitleText.innerText = (productColorsObj["colorArray"][0].label)
                var one_attr_flag = false
                if (productColorsObj["colorArray"].length == 1) {
                    one_attr_flag = true
                }
                if (productColorsObj["colorArray"].length > 6) {
                    elAttColorListBlock.classList.add('greater6');
                }
                var pushedfabric = []
                var colorC = 0
                elAttColorBlock.classList.add("inc_active");
                if (productColorsObj["colorArray"][0].label == 'Select Fabric') {
                    for (var aL = 0; aL < productColorsObj["colorArray"][0].attrLength; aL++) {
                        productColorsObj["colorArray"].forEach(function (colorObj) {
                            var createelmflg = false;
                            if (pushedfabric.indexOf(colorObj.attLebel) == -1) {
                                pushedfabric.push(colorObj.attLebel)
                            }
                            if (pushedfabric[aL] == colorObj.attLebel) {
                                if (fabricprod.indexOf(colorObj.attLebel) == -1) {
                                    fabricprod.push(colorObj.attLebel)
                                    createelmflg = true
                                }
                                colorelmOb(colorObj, elAttColorListBlock, colorC, blockType, productBlock, one_attr_flag, createelmflg)
                                if (colorObj.label == 'Select Color') {
                                    elAttColorTitleText.innerText = colorObj.label
                                }
                                colorC++
                            }
                        });
                    }
                } else {
                    productColorsObj["colorArray"].forEach(function (colorObj) {
                        colorelmOb(colorObj, elAttColorListBlock, colorC, blockType, productBlock, one_attr_flag, null)
                        colorC++
                    });
                }
            }
        }
    }

    function colorelmOb(colorObj, elAttColorListBlock, colorC, blockType, productBlock, one_attr_flag, createelmflg) {
        var attColorBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_block')
        var attColorImgBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img_block');
        var attColorImg = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img');
        attColorImgBlock.setAttribute('blocktype', blockType)
        attColorImgBlock.setAttribute('varianttypes', 'color')
        attColorImgBlock.addEventListener('click', function () {
            var elvariantc = this;
            var elblktypec = this.getAttribute('blocktype')
            var elvtypec = this.getAttribute('varianttypes')
            INC.methods.mappvariants(elvariantc, elblktypec, elvtypec)
        })

        let isColor = (strColor) => {
            const s = new Option().style;
            s.color = strColor;
            return s.color !== '';
        }

        imgcolorgen(colorObj, attColorImg)
        var colorTitle = generate_html_tag('a');
        colorTitle.innerText = colorObj["text"]
        colorTitle.title = colorObj["text"].toUpperCase();
        colorTitle.addEventListener('click', function (e) {
            e.preventDefault();
        })
        attColorImg.appendChild(colorTitle);

        attColorImgBlock.setAttribute('data-color', colorObj["text"]);
        attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
        if (colorObj["opttext"] != undefined) {
            if (colorObj["opttext"] != undefined) {
                attColorImgBlock.setAttribute("datacolorfabric", colorObj["opttext"].split('_')[0].toLocaleLowerCase());
            }
        }
        attColorImgBlock.setAttribute('data-option', "0");
        attColorImgBlock.setAttribute('data-cpid', colorObj["cpid"])
        attColorImgBlock.setAttribute('data-colorcode', colorObj["colorCode"])
        attColorImgBlock.setAttribute('data-optionimge', colorObj["imgSrc"])
        attColorImgBlock.setAttribute('data-optid', colorObj["opt_id"]);
        attColorImgBlock.setAttribute('data-attrid', colorObj["att_id"]);
        attColorImgBlock.setAttribute('data-child-price', colorObj["prc"]);

        if (isColor(colorObj["colorCode"])) {
            attColorImgBlock.style.backgroundColor = colorObj["colorCode"]
        }
        if (colorC > 5 && blockType != 'pdp') {
            var inc_more_color = generate_html_tag('a', 'inc_more_color')
            inc_more_color.innerText = '+';
            inc_more_color.addEventListener('click', function (e) {
                if (window.innerWidth < 798) {
                    e.preventDefault()
                }
                var hrefd = productBlock.querySelector('.inc_product_img_main_img a').href
                this.setAttribute('href', hrefd)
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                getTrackingPixel();
                if (window.innerWidth < 798) {
                    setTimeout(function () {
                        window.location.href = hrefd
                    }, 2000)
                }
            })
            if (elAttColorListBlock.querySelector('.inc_more_color') == null) {
                elAttColorListBlock.appendChild(inc_more_color);
            }
            return
        }
        attColorImgBlock.appendChild(attColorImg);
        attColorBlock.appendChild(attColorImgBlock);

        if (colorObj.label == 'Select Fabric') {
            if (createelmflg == trueflag) {
                productBlock.querySelector('.inc_product_desc_att_block').classList.add('fabric_items_available')
                var inc_fabric_att = generate_html_tag('div', 'inc_fabric_att')
                var inc_fabric_att_text = generate_html_tag('div', 'inc_fabric_att_text')
                inc_fabric_att_text.innerText = colorObj.attLebel.replace('|', ' ')
                inc_fabric_att.appendChild(inc_fabric_att_text);
                var inc_list_fabric_blk = generate_html_tag('div', 'inc_list_fabric_blk')
                inc_list_fabric_blk.appendChild(attColorBlock);
                inc_fabric_att.appendChild(inc_list_fabric_blk);
                elAttColorListBlock.appendChild(inc_fabric_att);
                attColorBlock.classList.add('fabric_items')
            } else {
                var elind = fabricprod.length - 1
                var inc_fabricel = elAttColorListBlock.querySelectorAll('.inc_list_fabric_blk')[elind]
                inc_fabricel.appendChild(attColorBlock);
            }
            colorTitle.innerText = colorObj["opttext"].split('_')[0]
            colorTitle.title = colorObj["opttext"].split('_')[0].toUpperCase();
        } else {
            elAttColorListBlock.appendChild(attColorBlock);
        }
        var prod_id = productBlock.getAttribute('data-main_id');
        if (one_attr_flag == trueflag) {
            setTimeout(function () {
                if (INC.methods.getProductIdFromWebPage() == prod_id) {
                    attColorImgBlock.click()
                }
            }, 0)
        }
    }

    function productsizeatt(elAttSizeTitleText, elAttSizeBlock, productSizesObj, elAttSizeListBlock, elAttSizeTitleTextSelected, blockType) {
        if (productSizesObj.sizeArray.length > 0) {
            elAttSizeBlock.parentNode.parentNode.parentNode.classList.add('dropdownstyle')
            if (productSizesObj["sizeArray"][0].code != "Color") {
                elAttSizeListBlock.innerHTML = "";
                elAttSizeTitleText.innerText = productSizesObj["sizeArray"][0].label;
                elAttSizeBlock.classList.add("inc_active");

                elAttSizeBlock.classList.add(decodeEntity(productSizesObj["sizeArray"][0].label).replace(' ', '_').toLowerCase())
                productSizesObj["sizeArray"].forEach(function (sizeObj) {
                    var attSizeImgBlock = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img_block');
                    var attSizeImg = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
                    elAttSizeTitleTextSelected.innerText = "- Please Select -"
                    attSizeImgBlock.classList.add('avail')
                    attSizeImgBlock.setAttribute('blocktype', blockType)
                    attSizeImgBlock.setAttribute('varianttypes', 'size')
                    attSizeImgBlock.addEventListener('click', function () {
                        var elvariants = this;
                        var elblktypes = this.getAttribute('blocktype')
                        var elvtypes = this.getAttribute('varianttypes')
                        INC.methods.mappvariants(elvariants, elblktypes, elvtypes)
                    })
                    if (sizeObj.imgSrc.length > 0 || sizeObj["colorCode"] != "") {
                        if (sizeObj["colorCode"] == "" || sizeObj["colorCode"] == undefined) {
                            var sizeimg_ = generate_html_tag('img');
                            sizeimg_.setAttribute('alt', sizeObj["text"])
                            sizeimg_.src = sizeObj["imgSrc"]
                            attSizeImgBlock.setAttribute('data-optionimge', sizeObj["imgSrc"])
                            attSizeImgBlock.appendChild(sizeimg_);
                            elAttSizeTitleText.classList.add('img_tag_avail')
                            elAttSizeTitleText.style.display = "flex"
                            attSizeImgBlock.classList.add('img_avail')
                        } else {
                            var spancolorcode_ = generate_html_tag('span');
                            spancolorcode_.classList.add('color_code')
                            spancolorcode_.setAttribute('alt', sizeObj["text"])
                            spancolorcode_.style.backgroundColor = sizeObj["colorCode"];
                            elAttSizeTitleText.classList.add('img_tag_avail')
                            attSizeImgBlock.appendChild(spancolorcode_);
                        }
                        elAttSizeListBlock.classList.add('img_tag_avail')
                    }
                    attSizeImg.innerText = decodeEntity(sizeObj["text"])

                    attSizeImgBlock.setAttribute('data-size', sizeObj["text"]);

                    attSizeImgBlock.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock.setAttribute("data-size-select", decodeEntity(sizeObj["text"]))
                    attSizeImgBlock.setAttribute('data-option', "2");
                    attSizeImgBlock.setAttribute('data-optid', sizeObj["opt_id"]);
                    attSizeImgBlock.setAttribute('data-attrid', sizeObj["att_id"]);
                    attSizeImgBlock.setAttribute('data-child-price', sizeObj["prc"]);
                    if (productSizesObj["sizeArray"][0].code == "size") {
                        // attSizeImgBlock.setAttribute('title', sizeObj["text"].toUpperCase());
                        attSizeImgBlock.setAttribute('titles', sizeObj["text"].toUpperCase());
                    } else if (productSizesObj["sizeArray"][0].code == "letter") {
                        // attSizeImgBlock.setAttribute('title', "Letter" + " " + sizeObj["text"].toUpperCase());
                        attSizeImgBlock.setAttribute('titles', "Letter" + " " + sizeObj["text"].toUpperCase());
                    } else if (productSizesObj["sizeArray"][0].code == "choose") {
                        // attSizeImgBlock.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                        attSizeImgBlock.setAttribute('titles', "Number " + sizeObj["text"].toUpperCase());
                    } else {
                        // attSizeImgBlock.setAttribute('title', sizeObj["text"].toUpperCase());
                        attSizeImgBlock.setAttribute('titles', sizeObj["text"].toUpperCase());
                    }
                    attSizeImgBlock.appendChild(attSizeImg);
                    elAttSizeListBlock.appendChild(attSizeImgBlock);

                });
            }
        }

    }


    function productthirdatt(product3Obj, elAtt3TitleText, elAtt3Block, elAtt3ListBlock, blockType, elAtt3TitleTextSelected) {
        if (product3Obj.att3Array.length > 0) {
            if (product3Obj["att3Array"][0].code != "Color") {
                elAtt3ListBlock.innerHTML = "";
                elAtt3TitleTextSelected.innerText = "- Please Select -"
                product3Obj["att3Array"].forEach(function (sizeObj) {
                    elAtt3TitleText.innerText = product3Obj["att3Array"][0].label;
                    elAtt3Block.classList.add("inc_active");
                    var attSizeImgBlock3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img_block');
                    var attSizeImg3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img');
                    attSizeImgBlock3.setAttribute('blocktype', blockType)
                    attSizeImgBlock3.setAttribute('varianttypes', 'third')
                    attSizeImgBlock3.addEventListener('click', function () {
                        var elvariantd = this;
                        var elblktyped = this.getAttribute('blocktype')
                        var elvtyped = this.getAttribute('varianttypes')
                        INC.methods.mappvariants(elvariantd, elblktyped, elvtyped)
                    })
                    attSizeImgBlock3.classList.add('avail')
                    attSizeImg3.innerText = decodeEntity(sizeObj["text"])
                    attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                    attSizeImgBlock3.setAttribute('data-size-select', decodeEntity(sizeObj["text"]));
                    attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock3.setAttribute('data-option', "3");
                    attSizeImgBlock3.setAttribute('data-optid', sizeObj["opt_id"]);
                    attSizeImgBlock3.setAttribute('data-attrid', sizeObj["att_id"]);
                    attSizeImgBlock3.setAttribute('data-child-price', sizeObj["prc"]);
                    attSizeImgBlock3.appendChild(attSizeImg3);
                    elAtt3ListBlock.appendChild(attSizeImgBlock3);
                });
            }
        }
    }

    INC.methods.mappvariants = function (obj, blocktype, type_of_variant) {
        if (obj.parentNode != undefined) {
            var productModuleBlck = obj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            if (productModuleBlck.classList.contains('inc_product_showcase_block') == trueflag || productModuleBlck.classList.contains('inc_product_modal_block') == trueflag) {
                productModuleBlck = productModuleBlck.parentNode
            }
            if (productModuleBlck.classList.contains('inc_product_block') == trueflag) {
                productModuleBlck = productModuleBlck.parentNode.parentNode
            } else if (productModuleBlck.classList.contains('inc_product_info_main_block') == trueflag) {
                productModuleBlck = productModuleBlck.parentNode.parentNode.parentNode
            }
            var productblockshow = productModuleBlck.querySelector('.inc_product_showcase_block .inc_product_block')
            var productblockmod = productModuleBlck.querySelector('.inc_product_modal_block .inc_product_block')

            var mainprdid = productblockshow.getAttribute('data-main_id')

            if (type_of_variant == "zero") {
                var sel_variantz = obj.getAttribute('data-size')
                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-zero', sel_variantz)
                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-zero', sel_variantz)
            } else if (type_of_variant == "color") {
                var sel_variantC = obj.getAttribute('data-color')
                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-color', sel_variantC)
                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-color', sel_variantC)
            } else if (type_of_variant == "size") {
                var sel_variantS = obj.getAttribute('data-size')
                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-size', sel_variantS)
                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-size', sel_variantS)

            } else if (type_of_variant == "third") {
                var sel_variantT = obj.getAttribute('data-size')
                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-third', sel_variantT)
                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-third', sel_variantT)
            }

            productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-module-id', mainprdid)

            var main_p_id = INC.dataStore.methods().getFirstProductObjByMainId({
                mainId: mainprdid
            }).id;
            var findobj = new INC.classes.FindObj({
                id: main_p_id
            });
            var zero_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
            var size_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
            var color_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
            var third_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-third');

            findobj.mainId = mainprdid
            findobj.colorText = ""
            if (color_text != undefined) {
                findobj.colorText = color_text
                productblockmod.querySelector('.inc_product_desc_att_color_title_text_selected').setAttribute('style', 'color:"#4D4D4F";')
                productblockmod.querySelector('.inc_product_desc_att_color_title_text_selected').innerText = color_text
                productblockshow.querySelector('.inc_product_desc_att_color_title_text_selected').setAttribute('style', 'color:"#4D4D4F";')
                productblockshow.querySelector('.inc_product_desc_att_color_title_text_selected').innerText = color_text
            }
            if (zero_text != undefined) {
                findobj.zeroText = zero_text
                productblockshow.querySelector('.inc_product_desc_att_zero_title_text_selected').innerText = zero_text
                productblockshow.querySelector('.inc_product_desc_att_zero_title_text_selected').setAttribute('style', 'color:"#4D4D4F";')
                productblockmod.querySelector('.inc_product_desc_att_zero_title_text_selected').classList.add('inc_change_color');
                productblockmod.querySelector('.inc_product_desc_att_zero_title_text_selected').innerText = zero_text
            }
            if (size_text != undefined) {
                findobj.sizeText = size_text
                productblockshow.querySelector('.inc_product_desc_att_size_title_text_selected').innerText = size_text
                productblockmod.querySelector('.inc_product_desc_att_size_title_text_selected').innerText = size_text
                productblockshow.querySelector('.inc_product_desc_att_size_title_text_selected').setAttribute('style', 'color:"#4D4D4F";')
                productblockmod.querySelector('.inc_product_desc_att_size_title_text_selected').setAttribute('style', 'color:"#4D4D4F";')
            }

            if (third_text != undefined) {
                findobj.thirdText = third_text
                productblockmod.querySelector('.inc_product_desc_att_third_title_text_selected').innerText = third_text
                productblockshow.querySelector('.inc_product_desc_att_third_title_text_selected').innerText = third_text
            }
            productblockmod.querySelector('.inc_product_desc_add_err_text_block').innerHTML = ""
            productblockshow.querySelector('.inc_variant_error_text').innerHTML = ""
            productblockshow.querySelector('.inc_product_variant_simple_text').setAttribute('style', '')
            productblockshow.querySelector('.inc_product_desc_add_title_text_block').setAttribute('style', '')
            var elselcolortextmodal = productblockmod.querySelector('.inc_product_desc_att_color_title_text_selected')
            var productSizesObj = INC.dataStore.methods().getProductSizesObj(findobj, obj);
            var productColorsObj = INC.dataStore.methods().getProductColorsObj(findobj, obj);
            var product3rdObj = INC.dataStore.methods().getProductopt3Obj(findobj, obj);
            var product0Obj = INC.dataStore.methods().getProductopt0Obj(findobj, obj);

            var elAttSizeBlock = productblockmod.querySelector('.inc_product_desc_att_size_block')
            var elAttColorBlock = productblockmod.querySelector('.inc_product_desc_att_color_block')
            var elAtt3rdBlock = productblockmod.querySelector('.inc_product_desc_att_third_block')
            var elAttSizeListBlock = productblockmod.querySelector('.inc_product_desc_att_size_list_block')
            var elAtt0ListBlock = productblockmod.querySelector('.inc_product_desc_att_zero_list_block');
            var elAttColorListBlock = productblockmod.querySelector('.inc_product_desc_att_color_list_block')
            var elAtt3ListBlock = productblockmod.querySelector('.inc_product_desc_att_third_list_block')
            var elcolortextmodal = productblockmod.querySelector('.inc_product_desc_att_color_title_text')
            var elAttSizeListBlockshow = productblockshow.querySelector('.inc_product_desc_att_size_list_block')
            var elAtt0ListBlockshow = productblockshow.querySelector('.inc_product_desc_att_zero_list_block')

            var elAttColorListBlockshow = productblockshow.querySelector('.inc_product_desc_att_color_list_block')
            var elAtt3ListBlockshow = productblockshow.querySelector('.inc_product_desc_att_third_list_block')
            var elselcolortextshow = productblockshow.querySelector('.inc_product_desc_att_color_title_text_selected')
            var elcolortextshow = productblockmod.querySelector('.inc_product_desc_att_color_title_text')

            if (type_of_variant == "color" && productblockshow.querySelector('.inc_product_desc_att_color_block.inc_active') != null) {
                elAtt0ListBlock.innerHTML = "";
                elAtt0ListBlockshow.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    product0Obj["att0Array"].forEach(function (sizeObj) {
                        var attSizeImgBlock0 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img_block');
                        var attSizeImg0 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
                        attSizeImgBlock0.setAttribute('blocktype', blocktype)
                        attSizeImgBlock0.setAttribute('varianttypes', 'zero')
                        attSizeImgBlock0.addEventListener('click', function () {
                            var elvariantss = this;
                            var elblktype__ = this.getAttribute('blocktype')
                            var elvtype__ = this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariantss, elblktype__, elvtype__)
                        })
                        attSizeImgBlock0.classList.add('avail')
                        attSizeImg0.innerText = decodeEntity(sizeObj["text"])
                        attSizeImgBlock0.setAttribute('data-size', sizeObj["text"])
                        attSizeImgBlock0.setAttribute('data-size-select', decodeEntity(sizeObj["text"]))
                        attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock0.setAttribute('data-option', "1");
                        attSizeImgBlock0.setAttribute('data-cpid', sizeObj["cpid"])
                        attSizeImgBlock0.setAttribute('data-optid', sizeObj["opt_id"]);
                        attSizeImgBlock0.setAttribute('data-attrid', sizeObj["att_id"]);
                        attSizeImgBlock0.setAttribute('data-child-price', sizeObj["prc"]);
                        var attSizeImgBlockclone0 = attSizeImgBlock0.cloneNode(attSizeImgBlock0);
                        attSizeImgBlockclone0.addEventListener('click', function () {
                            var elvariants_1 = this;
                            var elblktypes__2 = this.getAttribute('blocktype')
                            var elvtypes__1 = this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariants_1, elblktypes__2, elvtypes__1)
                        })
                        attSizeImgBlock0.appendChild(attSizeImg0);
                        elAtt0ListBlock.appendChild(attSizeImgBlock0);
                        elAtt0ListBlockshow.appendChild(attSizeImgBlockclone0);

                        if (zero_text != undefined) {
                            if (zero_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                                attSizeImgBlock0.classList.add('inc_active')
                                attSizeImgBlockclone0.classList.add('inc_active')
                            }
                        }
                    });
                }
            }

            if (type_of_variant == "zero" || type_of_variant == "third" || type_of_variant == "color") {


                if (productSizesObj["sizeArray"].length > 0) {
                    elAttSizeListBlock.innerHTML = "";
                    elAttSizeListBlockshow.innerHTML = "";
                    elAttSizeBlock.classList.add("inc_active");
                    let zerosel = false
                    if (productSizesObj["sizeArray"].length > 0) {
                        elAttSizeListBlock.innerHTML = "";
                        elAttSizeListBlockshow.innerHTML = "";
                        elAttSizeBlock.classList.add("inc_active");
                        productSizesObj["sizeArray"].forEach(function (sizeObj) {
                            var attSizeImgBlock = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img_block');
                            var attSizeImg = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
                            attSizeImgBlock.setAttribute('blocktype', blocktype)
                            attSizeImgBlock.setAttribute('varianttypes', 'size')
                            attSizeImgBlock.addEventListener('click', function () {
                                var elvariant5 = this;
                                var elblktype5 = this.getAttribute('blocktype')
                                var elvtype5 = this.getAttribute('varianttypes')
                                INC.methods.mappvariants(elvariant5, elblktype5, elvtype5)
                            })
                            attSizeImgBlock.classList.add('avail')
                            attSizeImg.innerText = sizeObj["text"];
                            attSizeImgBlock.setAttribute('data-size', sizeObj["text"]);
                            attSizeImgBlock.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                            attSizeImgBlock.setAttribute('data-option', "2");
                            attSizeImgBlock.appendChild(attSizeImg);
                            var attSizeImgBlockclone = attSizeImgBlock.cloneNode(attSizeImgBlock);
                            attSizeImgBlockclone.addEventListener('click', function () {
                                var elvariants_ = this;
                                var elblktypes_ = this.getAttribute('blocktype')
                                var elvtypes_ = this.getAttribute('varianttypes')
                                INC.methods.mappvariants(elvariants_, elblktypes_, elvtypes_)
                            })
                            elAttSizeListBlock.appendChild(attSizeImgBlock);
                            elAttSizeListBlockshow.appendChild(attSizeImgBlockclone);
                            if (size_text != undefined) {
                                if (size_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                                    zerosel = true
                                    attSizeImgBlock.classList.add('inc_active')
                                    attSizeImgBlockclone.classList.add('inc_active')
                                    findobj.sizeText = size_text.toLocaleLowerCase()
                                }
                            }

                        });
                        if (zerosel == false) {
                            var zerotxt_ = productblockmod.querySelector('.inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block').getAttribute('data-size')
                            productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-size', zerotxt_)
                            productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-size', zerotxt_)
                            productblockmod.querySelector('.inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block').classList.add('inc_active')
                            productblockshow.querySelector('.inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block').classList.add('inc_active')

                            findobj.sizeText = zerotxt_

                        }
                    }


                }
            } else {
                var sizelowertext = size_text.toLocaleLowerCase()
                if (productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                try {
                    if (productblockmod.querySelector(".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize='" + sizelowertext + "']") != null) {
                        productblockmod.querySelector(".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize='" + sizelowertext + "']").classList.add('inc_active')
                        productblockshow.querySelector(".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize='" + sizelowertext + "']").classList.add('inc_active')
                    }
                } catch (error) {
                    if (productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowertext + '"]') != null) {
                        productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowertext + '"]').classList.add('inc_active')
                        productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowertext + '"]').classList.add('inc_active')
                    }
                }

            }
            //type_of_variant == "zero" || 
            if (type_of_variant == "size" || type_of_variant == "third") {
                elAttColorListBlock.innerHTML = "";
                elAttColorListBlockshow.innerHTML = "";
                if (productModuleBlck.querySelector('.inc_product_modal_block .inc_product_desc_att_color_title_text_selected').innerText == "" && productModuleBlck.querySelector('.inc_product_desc_att_color_title_text_selected').innerText == "") {
                    productModuleBlck.querySelector('.inc_product_modal_block .inc_product_desc_att_color_title_text_selected').innerText = ""
                    productModuleBlck.querySelector('.inc_product_desc_att_color_title_text_selected').innerText = ""
                }
                var selcol = findobj.colorText
                if (productColorsObj["colorArray"].length > 0) {
                    elAttColorBlock.classList.add("inc_active");
                    var clrselflag = false;
                    var clrarrac = 0
                    productColorsObj["colorArray"].forEach(function (colorObj) {
                        if (selcol == colorObj["text"]) {
                            findobj.colorText = colorObj["text"]
                            findobj.color_text = colorObj["text"]
                        } else {
                            findobj.colorText = ""
                            findobj.color_text = ""
                        }
                        var attColorBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_block')
                        var attColorImgBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img_block');
                        var attColorImg = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img');

                        attColorImgBlock.setAttribute('blocktype', blocktype)
                        attColorImgBlock.setAttribute('varianttypes', 'color')
                        attColorImgBlock.addEventListener('click', function () {
                            var elvariantc2 = this;
                            var elblktypec2 = this.getAttribute('blocktype')
                            var elvtypec2 = this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariantc2, elblktypec2, elvtypec2)
                        })
                        imgcolorgen(colorObj, attColorImg)

                        var colorTitle = generate_html_tag('a');
                        colorTitle.innerText = colorObj["text"]
                        colorTitle.title = colorObj["text"];
                        colorTitle.addEventListener('click', function (e) {
                            e.preventDefault();
                        })
                        attColorImg.appendChild(colorTitle);

                        attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                        attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                        attColorImgBlock.setAttribute('data-option', "0");
                        attColorImgBlock.setAttribute('data-cpid', colorObj["cpid"])
                        attColorImgBlock.setAttribute('data-colorcode', colorObj["colorCode"])
                        attColorImgBlock.setAttribute('data-optionimge', colorObj["imgSrc"])
                        attColorImgBlock.appendChild(attColorImg);
                        attColorBlock.appendChild(attColorImgBlock);
                        var attColorBlockclone = attColorBlock.cloneNode(attColorBlock);
                        attColorBlockclone.querySelector('.inc_product_desc_att_color_list_item_img_block').addEventListener('click', function () {
                            var elvariantc1s = this;
                            var elblktypec2s = this.getAttribute('blocktype')
                            var elvtypec2s = this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariantc1s, elblktypec2s, elvtypec2s)
                        })
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active') != null || INC.config.pageType == 'cartPage') {
                            if (clrarrac > 5) {
                                var inc_more_color1 = generate_html_tag('a', 'inc_more_color')
                                inc_more_color1.target = "_blank";
                                inc_more_color1.innerText = '+';
                                inc_more_color1.addEventListener('click', function (ee) {
                                    if (window.innerWidth < 821) {
                                        ee.preventDefault()
                                    }
                                    var hrefd2 = productBlock.querySelector('.inc_product_img_main_img a').href
                                    this.setAttribute('href', hrefd2)
                                    INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                                    getTrackingPixel();
                                    if (window.innerWidth < 821) {
                                        setTimeout(function () {
                                            window.location.href = hrefd2
                                        }, 2000)
                                    }
                                })
                                var inc_more_color1clone = inc_more_color1.cloneNode(inc_more_color1);
                                if (elAttColorListBlock.querySelector('.inc_more_color') == null) {
                                    elAttColorListBlock.appendChild(inc_more_color1);
                                    elAttColorListBlockshow.appendChild(inc_more_color1clone);
                                    var cloneelinc_more_color = elAttColorListBlockshow.querySelector('.inc_more_color')
                                    cloneelinc_more_color.addEventListener('click', function (ec) {
                                        if (window.innerWidth < 821) {
                                            ec.preventDefault()
                                        }
                                        var hrefd1 = productblockshow.querySelector('.inc_product_img_main_img a').href
                                        this.setAttribute('href', hrefd1)
                                        INC.methods.sendBundleClickTracking(productblockshow.getAttribute('data-main_id'));
                                        getTrackingPixel();
                                        if (window.innerWidth < 821) {
                                            setTimeout(function () {
                                                window.location.href = hrefd1
                                            }, 2000)
                                        }
                                    })
                                }
                                return
                            }
                        }
                        clrarrac++
                        elAttColorListBlock.appendChild(attColorBlock);
                        elAttColorListBlockshow.appendChild(attColorBlockclone);
                        if (color_text != null) {
                            if (color_text.toLocaleLowerCase() == colorObj.text.toLocaleLowerCase()) {
                                clrselflag = true
                                attColorBlock.classList.add('inc_active');
                                attColorBlockclone.classList.add('inc_active');
                                elselcolortextshow.innerText = colorObj.text
                                elselcolortextmodal.innerText = colorObj.text + ":"
                                if (window.innerWidth < 821) {
                                    elcolortextmodal.style.backgroundColor = colorObj["colorCode"];
                                    elcolortextshow.style.backgroundColor = colorObj["colorCode"];
                                }

                            } else if (productColorsObj["colorArray"].length == 1) {
                                clrselflag = true
                                attColorBlock.classList.add('inc_active');
                                attColorBlockclone.classList.add('inc_active');
                                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-color', colorObj.text)
                                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-color', colorObj.text)
                                elselcolortextshow.innerText = colorObj.text
                                elselcolortextmodal.innerText = colorObj.text + ":"
                                if (window.innerWidth < 821) {
                                    elcolortextmodal.style.backgroundColor = colorObj["colorCode"];
                                    elcolortextshow.style.backgroundColor = colorObj["colorCode"];
                                }
                            }
                        }
                    });
                    if (clrselflag == falseflag) {
                        var ctext = productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
                        var color_colorcodesel = productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').getAttribute('data-colorcode');
                        productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-color', ctext)
                        productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-color', ctext)
                        elAttColorListBlock.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').parentNode.classList.add('inc_active')
                        elAttColorListBlockshow.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').parentNode.classList.add('inc_active')
                        elselcolortextshow.innerText = ctext
                        elselcolortextmodal.innerText = ctext
                        if (window.innerWidth < 821) {
                            elcolortextmodal.style.backgroundColor = color_colorcodesel;
                            elcolortextshow.style.backgroundColor = color_colorcodesel;
                        }
                    }
                }
            } else {
                var colorlowertext = ""
                if (color_text != undefined) {
                    colorlowertext = color_text.toLocaleLowerCase()
                }
                if (productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_color_list_item_block.inc_active').classList.remove('inc_active')
                }
                if (productblockmod.querySelector(".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor='" + colorlowertext + "']") != null) {
                    productblockmod.querySelector(".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor='" + colorlowertext + "']").parentNode.classList.add('inc_active')
                    productblockshow.querySelector(".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor='" + colorlowertext + "']").parentNode.classList.add('inc_active')
                    elselcolortextshow.innerText = colorlowertext
                    elselcolortextmodal.innerText = colorlowertext
                    if (productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active div') != null) {
                        var color_colorcode = productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active div').getAttribute('data-colorcode');
                        if (window.innerWidth < 821) {
                            elcolortextmodal.style.backgroundColor = color_colorcode;
                            elcolortextshow.style.backgroundColor = color_colorcode;
                        }
                    }
                }
            }

            if (product3rdObj["att3Array"].length == 0 && findobj.thirdText !== "") {
                product3rdObj = INC.dataStore.methods().getProductopt3Obj(findobj, obj);
            }
            if (type_of_variant == "zero" || type_of_variant == "size" || type_of_variant == "color") {
                elAtt3ListBlock.innerHTML = "";
                elAtt3ListBlockshow.innerHTML = "";

                if (product3rdObj["att3Array"].length > 0) {
                    elAtt3rdBlock.classList.add("inc_active");
                    let thirdsel = false
                    product3rdObj["att3Array"].forEach(function (sizeObj) {
                        var attSizeImgBlock3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img_block');
                        var attSizeImg3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img');

                        attSizeImgBlock3.setAttribute('blocktype', blocktype)
                        attSizeImgBlock3.setAttribute('varianttypes', 'third')
                        attSizeImgBlock3.addEventListener('click', function () {
                            var elvarianttd = this;
                            var elblktypetd = this.getAttribute('blocktype')
                            var elvtypetd = this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvarianttd, elblktypetd, elvtypetd)
                        })
                        attSizeImg3.innerText = decodeEntity(sizeObj["text"])
                        attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                        attSizeImgBlock3.setAttribute('data-size-select', decodeEntity(sizeObj["text"]));
                        attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock3.setAttribute('data-option', "3");
                        attSizeImgBlock3.appendChild(attSizeImg3);
                        var attSizeImgBlock3clone = attSizeImgBlock3.cloneNode(attSizeImgBlock3);
                        attSizeImgBlock3clone.addEventListener('click', function () {
                            var elvarianttd_ = this;
                            var elblktypetd_ = this.getAttribute('blocktype')
                            var elvtypetd_ = this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvarianttd_, elblktypetd_, elvtypetd_)
                        })
                        elAtt3ListBlock.appendChild(attSizeImgBlock3);
                        elAtt3ListBlockshow.appendChild(attSizeImgBlock3clone);

                        if (third_text != undefined) {
                            if (third_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                                thirdsel = true
                                attSizeImgBlock3.classList.add('inc_active')
                                attSizeImgBlock3clone.classList.add('inc_active')
                            }
                        }
                    });

                    if (thirdsel == false) {

                        var thirdtext_ = productblockmod.querySelector('.inc_product_desc_att_third_block .inc_product_desc_att_third_list_item_img_block').getAttribute('data-size')
                        if (third_text !== null) {

                            productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-third', thirdtext_)
                            productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-third', thirdtext_)
                            productblockmod.querySelector('.inc_product_desc_att_third_block .inc_product_desc_att_third_list_item_img_block').classList.add('inc_active')
                            productblockshow.querySelector('.inc_product_desc_att_third_block .inc_product_desc_att_third_list_item_img_block').classList.add('inc_active')
                        }
                    }
                }
            } else {
                var thirdlowertext = third_text.toLocaleLowerCase()
                if (productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.inc_active') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.inc_active') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.inc_active').classList.remove('inc_active')
                }

                productblockmod.querySelector(".inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block[datasize='" + thirdlowertext + "']").classList.add('inc_active')
                productblockshow.querySelector(".inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block[datasize='" + thirdlowertext + "']").classList.add('inc_active')
            }
            var checkzeroselflag = false
            if (productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') == null) {
                checkzeroselflag = true
            }

            if (type_of_variant == "zero" || checkzeroselflag == trueflag && type_of_variant != "color") {
                var zerolowertext = ""
                zero_text = ""
                if (checkzeroselflag == trueflag) {
                    if (obj != null) {
                        zero_text = obj.getAttribute('data-size')
                        zerolowertext = zero_text.toLocaleLowerCase()
                    } else {
                        if (productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block') != null) {
                            zero_text = productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block').getAttribute('data-size')
                            zerolowertext = zero_text.toLocaleLowerCase()
                        }
                    }
                } else {
                    if (obj != null) {
                        zero_text = obj.getAttribute('data-size')
                        zerolowertext = zero_text.toLocaleLowerCase()
                    }
                }
                if (productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                try {
                    if (productblockmod.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize='" + zerolowertext + "']") != null) {
                        productblockmod.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize='" + zerolowertext + "']").classList.add('inc_active')
                        productblockshow.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize='" + zerolowertext + "']").classList.add('inc_active')
                    }
                } catch {
                    if (productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + zerolowertext + '"]') != null) {
                        productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + zerolowertext + '"]').classList.add('inc_active')
                        productblockshow.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + zerolowertext + '"]').classList.add('inc_active')
                    }
                }

                if (productblockmod.querySelector('.inc_product_desc_att_zero_title_text_selected') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_zero_title_text_selected').innerText = zero_text
                }
                if (productblockshow.querySelector('.inc_product_desc_att_zero_title_text_selected') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_zero_title_text_selected').innerText = zero_text
                }
            }
            INC.methods.updateProductBlock(productblockshow, findobj, blocktype);
            INC.methods.updateProductBlock(productblockmod, findobj, blocktype);
            if (window.innerWidth < 821) { // if(document.querySelector(".inc_product_block.show_overlay") != null){
                //     var allact = document.querySelectorAll('.inc_product_desc_att_block.inc_active')
                //     if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                //         document.querySelector('html').classList.remove('inc_overlay');
                //         document.querySelector('body').classList.remove('inc_popup_open');
                //     }
                //     for (var actelm in allact) {
                //         if(allact[actelm] != null && Object.prototype.hasOwnProperty.call(allact, actelm)){
                //             allact[actelm].classList.remove('inc_active')
                //         }
                //     }

                //     if (document.querySelector('.inc_product_block.show_overlay') != null) {
                //         document.querySelector('.inc_product_block.show_overlay').classList.remove('show_overlay')
                //     }
                // }
            }
        }
    }
    INC.methods.checkVariantSelection = function (prod_module_block) {
        var attr_flag_color = false;
        var attr_flag_size = false;
        var attr__flag_zero = false;
        var attr__flag_third = false;
        var elSize = prod_module_block.querySelector('.inc_product_desc_att_size_block.inc_active')
        var elColor = prod_module_block.querySelector('.inc_product_desc_att_color_block.inc_active')
        var elattr0 = prod_module_block.querySelector('.inc_product_desc_att_zero_block.inc_active')
        var elthird3 = prod_module_block.querySelector('.inc_product_desc_att_third_block.inc_active')
        if (elColor != null && elattr0 != null && elthird3 != null && elSize != null) {
            if ((elColor.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null && elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null && elthird3.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null && elSize.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null)) {
                attr_flag_color = true
                attr__flag_zero = true
                attr__flag_third = true;
                attr_flag_size = true
            }
        } else if (elColor != null && elattr0 != null && elSize != null) {
            if (elColor.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null && elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null && elSize.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                attr_flag_color = true
                attr__flag_zero = true
                attr__flag_third = true;
                attr_flag_size = true
            }
        } else if (elColor != null && elattr0 != null) {
            if (elColor.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null && elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                attr_flag_color = true
                attr__flag_zero = true
                attr_flag_size = true;
                attr__flag_third = true;
            }
        } else {
            if (elColor != null) {
                if (elColor.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null) {
                    attr_flag_color = true
                }
            } else {
                attr_flag_color = true
            }
            if (elattr0 != null) {
                if (elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    attr__flag_zero = true
                }
            } else {
                attr__flag_zero = true
            }
            if (elSize != null) {
                if (elSize.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    attr_flag_size = true
                }
            } else {
                attr_flag_size = true
            }
            if (elthird3 != null) {
                if (elthird3.querySelector('.inc_product_desc_att_third_list_item_img_block.inc_active') != null) {
                    attr__flag_third = true
                }
            } else {
                attr__flag_third = true
            }
        }

        if (attr__flag_zero == trueflag && attr__flag_third == trueflag) {
            return 1
        } else {
            if (attr_flag_size == falseflag) {
                return 2
            } else if (attr__flag_third == falseflag) {
                return 3
            } else if (attr_flag_color == falseflag) {
                return 0
            } else {
                return 0
            }
        }
    }

    function imgcolorgen(colorObj, attColorImg) {
        var colrdcode = false;
        var imagecode = false;
        if (colorObj["colorCode"] != "" && colorObj["colorCode"] != undefined) {
            colrdcode = true
        } else if (colorObj["imgSrc"].length > 0) {
            if (colorObj["colorCode"] == "" && colorObj["imgSrc"].charAt(0) != "#") {
                var colorImg = generate_html_tag('img');
                colorImg.setAttribute('alt', colorObj["text"])
                colorImg.src = colorObj["imgSrc"]
                attColorImg.appendChild(colorImg);
            } else {
                imagecode = true
            }
        }
        if (colrdcode == trueflag || imagecode == trueflag) {
            var spancolorcode = generate_html_tag('span');
            spancolorcode.setAttribute('alt', colorObj["text"])
            if (imagecode == trueflag) {
                spancolorcode.style.backgroundColor = colorObj["imgSrc"];
            } else {
                spancolorcode.style.backgroundColor = colorObj["colorCode"];
            }
            attColorImg.appendChild(spancolorcode);
        }
    }
    INC.methods.updateProductBlock = function (productBlockel, findObj, blockType) {
        var dataStore = INC.dataStore;
        var productBlock = productBlockel;
        var productModuleBlock = productBlock.parentNode.parentNode;
        var modal_attr_block = productModuleBlock.querySelector('.inc_product_modal_block')
        var zero_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
        var size_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
        var color_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
        var third_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-third');
        var elproductPriceLabel = productBlock.querySelector('.inc_product_ecirp_label_block');
        var isSetVariant = productBlock.querySelector('.set_variant')
        var sel_attr_text = ""
        if (zero_text != undefined) {
            findObj.zero_text = zero_text
            sel_attr_text = zero_text
        } else {
            findObj.zeroText = ""
            findObj.zero_text = ""
        }
        if (color_text != undefined) {
            findObj.color_text = color_text
            if (sel_attr_text == "") {
                sel_attr_text = color_text.split('_')[0]
            } else {
                sel_attr_text = sel_attr_text + " / " + color_text.split('_')[0]
            }
        } else {
            findObj.color_text = ""
        }
        if (size_text != undefined) {
            findObj.sizeText = size_text
            sel_attr_text = sel_attr_text + " / " + size_text
        } else {
            findObj.sizeText = ""
        }

        if (third_text != undefined) {
            findObj.thirdText = third_text
            sel_attr_text = sel_attr_text + " / " + third_text
        } else {
            findObj.thirdText = ""
        }

        if (isSetVariant) {

            let setofcollection = modal_attr_block.querySelectorAll('.inc_product_desc_att_size_list_item_img_block.set_variant.inc_active .inc_product_desc_att_size_list_item_img')
            sel_attr_text = ""
            setofcollection.forEach((item) => {
                if (item.innerText.length !== 0) {

                    if (sel_attr_text == "") {
                        sel_attr_text = decodeEntity(item.innerText)
                    } else {

                        sel_attr_text = sel_attr_text + " / " + decodeEntity(item.innerText)
                    }
                }
            })

        }
        // inc_product_desc_att_size_list_item_img_block avail set_variant inc_active
        if (productBlock.querySelector('.inc_product_variant_simple_text') != null) {
            if (blockType == "sidebar" || blockType == "am") {
                productBlock.querySelector('.inc_product_variant_simple_text').innerText = "Select Option"
            } else {
                productBlock.querySelector('.inc_product_variant_simple_text').setAttribute('title', sel_attr_text)
                if (productModuleBlock.querySelector('.inc_product_block .inc_product_add_block.added_inc') != null) {
                    if (INC.config.pageType == 'cartPage') {
                        return
                    }
                    productBlock.querySelector('.inc_product_variant_simple_text').innerText = "";
                    var variant_span = generate_html_tag('span', 'variant_span')
                    variant_span.innerText = decodeEntity(sel_attr_text)

                    if (document.querySelector('.sidebar_outer.sidebar_outer_active') || INC.config.recommendation) {
                        variant_span.innerText = 'Select Option'
                    }
                    productBlock.querySelector('.inc_product_variant_simple_text').innerHTML = ""
                    productBlock.querySelector('.inc_product_variant_simple_text').appendChild(variant_span)
                }
            }
            if (color_text != null) {
                var PrdVarSimTxt = productBlock.querySelector('.inc_product_variant_simple_text')
                var colorTitle = generate_html_tag('div');
                colorTitle.addEventListener('click', function (e) {
                    e.preventDefault();
                })
                PrdVarSimTxt.appendChild(colorTitle);
                colorTitle.classList.add("colorCircle")
            }
        }
        var productObj = INC.dataStore.methods().getProductByAtt(findObj);
        if (Object.keys(productObj).length != 0) {
            var previousSKU = "";
            previousSKU = productBlock.getAttribute('data-sku');
            productBlock.setAttribute('data-id', productObj.id);
            productBlock.setAttribute('data-sku', productObj.sku);
            productBlock.setAttribute('data-main_id', productObj.mainId);
            productBlock.setAttribute('data-bundle_id', productObj.bundleId);
            productModuleBlock.setAttribute('data-id', productObj.id);
            productModuleBlock.setAttribute('data-sku', productObj.sku);
            productModuleBlock.setAttribute('data-main_id', productObj.mainId);
            productModuleBlock.setAttribute('data-bundle_id', productObj.bundleId);

            if (document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="' + productObj.mainId + '"]') != null && sel_attr_text != "") {
                var added_sum_prod = document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="' + productObj.mainId + '"]')
                added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_color_text_block').textContent = sel_attr_text
                added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_color_text_block').setAttribute('style', '')
                added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_block').setAttribute('title', sel_attr_text)
            }
            if (productModuleBlock.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                // productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').textContent = sel_attr_text
                productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                if (modal_attr_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block') != null) {
                    var optionimage = modal_attr_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-optionimge');
                    if (optionimage == '' || optionimage == undefined) {
                        optionimage = modal_attr_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-colorcode');
                    }
                    if (optionimage != undefined && optionimage != "") {
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_variant_simple_text').innerHTML = ""
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_variant_simple_text').innerHTML = ""
                        var optimg = null
                        if (optionimage.charAt(0) != "#") {
                            optimg = generate_html_tag('img')
                            optimg.src = optionimage
                        } else {
                            optimg = generate_html_tag('span')
                            optimg.style.backgroundColor = optionimage
                        }

                        var imgselvar = optimg.cloneNode(optimg);
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_variant_simple_text').appendChild(optimg)
                        if (window.innerWidth < 798) {
                            productModuleBlock.querySelector('.inc_product_modal_block .inc_product_variant_simple_text').appendChild(imgselvar)
                        }

                        var variant_span1 = generate_html_tag('span', 'variant_span')
                        variant_span1.innerText = decodeEntity(sel_attr_text)

                        if (document.querySelector('.sidebar_outer.sidebar_outer_active') || INC.config.recommendation || INC.config.pageType == 'cartPage') {
                            variant_span1.innerText = 'Select Option'
                        }

                        var varseltextclonea = variant_span1.cloneNode(variant_span1);
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_variant_simple_text').innerHTML = ""
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_variant_simple_text').appendChild(variant_span1)
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_variant_simple_text').appendChild(varseltextclonea)
                    }
                }
            }
            if (color_text != undefined) {
                var ccode = modal_attr_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active div').getAttribute('data-colorcode');
                productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_att_color_title_text').style.backgroundColor = ccode
                if (window.innerWidth < 798) {
                    productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_color_title_text').style.backgroundColor = ccode
                }
            }

            var elImgBlock = productBlock.querySelector('.inc_product_img_block');
            var elImgGalleryListBlock = productBlock.querySelector('.inc_product_img_gallery_list_block');
            var elTitleText = productBlock.querySelector('.inc_product_desc_title_text');
            var elPriceActiveText = productBlock.querySelector('.inc_product_desc_ecirp_active_text');
            var elPriceRegularText = productBlock.querySelector('.inc_product_desc_ecirp_regular_text');
            var elAddText = productBlock.querySelector('.inc_product_desc_add_text');
            var elworthPrice = productBlock.querySelector('.inc_product_desc_ecirp_worth_text');
            var elGalleryRightArrow = productBlock.querySelector('.inc_product_img_gallery_right_block');
            var elGallerylefttArrow = productBlock.querySelector('.inc_product_img_gallery_left_block');
            var eladdbtnqtyblock = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');
            if (productBlock.parentNode.className.indexOf('inc_product_showcase_block') >= 0) {
                if (blockType != "pdp") {
                    eladdbtnqtyblock.classList.add('inc_active')
                }
            }
            var elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');

            elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURL"]);
            if (productModuleBlock.parentNode.classList.contains('inc_pdp_product-main_block') == falseflag) {
                elImgMainImg.querySelector('a').setAttribute('href', productObj["url"]);
            }
            elImgMainImg.querySelector('a').setAttribute('otherImageList', productObj["otherImageList"])
            elImgMainImg.querySelector('a').setAttribute('imageURL', productObj["imageURL"])
            elImgMainImg.querySelectorAll('img')[0].setAttribute('data-mouseover', productObj["otherImageList"])
            elImgMainImg.querySelectorAll('img')[0].setAttribute('data-imageURL', productObj["imageURL"])

            elImgMainImg.querySelector('a').setAttribute('otherImageList', productObj["otherImageList"])
            elImgMainImg.querySelector('a').setAttribute('imageURL', productObj["imageURL"])

            elImgMainImg.querySelectorAll('img')[0].setAttribute('data-mouseover', productObj["otherImageList"])
            elImgMainImg.querySelectorAll('img')[0].setAttribute('data-imageURL', productObj["imageURL"])

            var prod_ids = productModuleBlock.getAttribute('data-main_id')
            if (document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="' + prod_ids + '"]') != null) {
                var tab_img = document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="' + prod_ids + '"]');
                if (tab_img.querySelector('img') != null) {
                    tab_img.querySelector('img').src = productObj["imageURL"]
                }
            }
            // elImgGalleryListBlock.innerHTML = "";

            if ((productObj.otherImageList != null) && productObj.otherImageList.length >= 1) {
                prepareAdditionalimages(elImgGalleryListBlock, productObj, productBlock)
            } else {
                productBlock.classList.add('inc_other_noimage')
            }
            if (window.innerWidth > 820) {
                if ((productObj.otherImageList == null) || productObj.otherImageList.length < 2 || productObj.otherImageList.length == 1 || productObj.otherImageList == "") {
                    elGalleryRightArrow.style.display = "none"
                    elGallerylefttArrow.style.display = "none"
                }
            } else {
                if (productObj.otherImageList == null || productObj.otherImageList.length < 1 || productObj.otherImageList.length == 1 || productObj.otherImageList == "") {
                    elGalleryRightArrow.style.display = "none"
                    elGallerylefttArrow.style.display = "none"
                }
            }
            if (elTitleText.querySelector('strong') != null && INC.config.pageType == "pdp") {
                elTitleText.querySelector('div').innerHTML = "<strong>This item: </strong>" + productObj.name
            } else {
                elTitleText.querySelector('div').textContent = productObj.name
            }
            elTitleText.querySelector('a').setAttribute('title', productObj.name)

            var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
            var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
            var totalsaveprc = get_discount_price(productObj.regularPrice, productObj.activePrice)

            elPriceActiveText.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
            elPriceRegularText.textContent = "";

            if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elPriceActiveText.innerHTML = formatter.format(activePrice)
                elPriceRegularText.innerHTML = formatter.format(regularPrice)
                elworthPrice.innerHTML = (totalsaveprc).toFixed(2)
                elproductPriceLabel.innerHTML = (totalsaveprc).toFixed(2)
            } else {
                elworthPrice.innerHTML = "";
                elPriceActiveText.innerHTML = formatter.format(activePrice)
                elproductPriceLabel.innerHTML = ""
            }

            if (productBlock.querySelector('.inc_product_desc_add_text').textContent == "Added" || productBlock.querySelector('.inc_product_desc_add_text').textContent == INC.config.AddedText || productBlock.parentNode.parentNode.querySelector('.inc_product_desc_add_text').textContent == INC.config.AddedText) {
                if (!Object.prototype.hasOwnProperty.call(dataStore, "bundleCartProducts")) {
                    dataStore['bundleCartProducts'] = {};
                    INC.config.pdpaddedProductList = []
                    INC.config.bundle_tracking = []
                    INC.config.bundle_skuPushed = []
                    INC.config.dupBasket = []
                }
                dataStore["bundleCartProducts"][productObj["sku"]] = dataStore["bundleCartProducts"][previousSKU];
                if (productObj["sku"] != previousSKU) {
                    delete dataStore["bundleCartProducts"][previousSKU];
                }
            }
            var elQtyInput = productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_add_btn_block .inc_product_qty_block input');
            var sku = productBlock.getAttribute('data-sku');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var main_id = productBlock.getAttribute('data-main_id');
            var qty = parseInt(elQtyInput.value);
            var pname = productBlock.querySelector('.inc_product_desc_title_text').textContent;
            var pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').textContent.replace(/[^0-9.-]+/g, "")

            if (elAddText.parentNode.parentNode.querySelector('.inc_product_desc_add_img.checked') != null) {
                INC.methods.updateBundleCart({
                    sku: sku,
                    qty: qty
                }, "add", main_id, bundle_id, pname, pprice);
            }
            setTimeout(function () {
                if (elImgMainImg.querySelectorAll('img')[0].naturalWidth == 360) {
                    elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURLMain"]);
                }
            }, 200);
        }
        if (blockType == "pdp" && productModuleBlock.querySelector('.inc_product_add_block.added_inc') != null) {
            productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.add('added_inc')

        }

        if (productModuleBlock.querySelector('.inc_product_variant_simple_block').innerText == "Select Option") {
            productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.add('select_inc')
        }


        if (blockType !== 'sidebar') {

            if (productModuleBlock.querySelector('.inc_product_variant_simple_block').innerText != "Select Option") {
                productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.remove('select_inc')
            }
        }

    }

    INC.methods.createProductListItemBlock = function (productObjs) {
        var productListItemBlock = generate_html_tag('div', 'inc_pdp_bundle_product_list_item_block');
        var findObj = new INC.classes.FindObj({
            id: productObjs.id,
            mainId: productObjs.mainId
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        productListItemBlock.style.userSelect = "none";
        productListItemBlock.setAttribute('data-id', productObj.id);
        productListItemBlock.setAttribute('data-sku', productObj.sku);
        productListItemBlock.setAttribute('data-main_id', productObj.mainId);
        productListItemBlock.setAttribute('data-bundle_id', productObj.bundleId);

        var seemoreprodhtml = '<div class="inc_pdp_bundle_product_list_item_added_block"><div class="inc_pdp_bundle_product_list_item_added_btn_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img"></div></div><div class="inc_pdp_bundle_product_list_item_added_btn_text_block"><div class="inc_pdp_bundle_product_list_item_added_btn_text"></div></div></div></div><div class="inc_pdp_bundle_product_list_item_img_block"><div class="inc_pdp_bundle_product_list_item_img"><img class="inc_lazy" data-src="' + productObj.imageURL + '" src="' + productObj.imageURL + '"></div></div><div class="inc_pdp_bundle_product_list_item_title_block"><div class="inc_pdp_bundle_product_list_item_title_text_block"><div class="inc_pdp_bundle_product_list_item_title_text"></div></div></div><div class="inc_pdp_bundle_product_list_item_ecirp_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_text_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_text"></div></div></div></div>'

        productListItemBlock.innerHTML = seemoreprodhtml
        productListItemBlock.querySelector('.inc_pdp_bundle_product_list_item_img img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
        productListItemBlock.addEventListener("click", function () {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_product_desc_att_size_list_block'), function (attSizeListBlock) {
                attSizeListBlock.classList.remove("inc_active");
            });

            var elListMainBlock = document.querySelector('.inc_pdp_bundle_product_list_main_block');
            Array.prototype.forEach.call(elListMainBlock.querySelectorAll('.inc_product_module_block'), function (productBlock) {
                productBlock.setAttribute('style', 'display: none!important');
            });
            elListMainBlock.querySelector('.inc_product_module_block' + "[data-main_id=\"" + productObj.mainId + "\"]").style.display = "block";

            Array.prototype.forEach.call(productListItemBlock.parentNode.querySelectorAll('.inc_pdp_bundle_product_list_item_block'), function (pListItemBlock) {
                pListItemBlock.classList.remove("inc_active");
            });

            productListItemBlock.classList.add("inc_active");
        });

        return productListItemBlock;
    }
    INC.methods.updateBundleCart = function (bundleCartObj, type, main_id, bundle_id, pname, pprice) {
        var dataStore = INC.dataStore;
        var listToDelete = []
        if (!Object.prototype.hasOwnProperty.call(dataStore, "bundleCartProducts")) {
            dataStore['bundleCartProducts'] = {};
            INC.config.pdpaddedProductList = []
            INC.config.bundle_tracking = []
            INC.config.bundle_skuPushed = []
            INC.config.dupBasket = []
        }

        switch (type) {
            case "add":
                dataStore["bundleCartProducts"][bundleCartObj["sku"]] = bundleCartObj["qty"];
                if (INC.config.bundle_skuPushed.indexOf(bundleCartObj["sku"]) == -1) {
                    INC.config.bundle_skuPushed.push(bundleCartObj["sku"])
                }
                if (INC.config.pdpaddedProductList.indexOf(main_id) == -1) {
                    INC.config.pdpaddedProductList.push(main_id)
                    INC.config.bundle_tracking.push({
                        id: main_id,
                        bid: bundle_id,
                        pname: pname,
                        prc: pprice,
                        qty: bundleCartObj["qty"]
                    });
                }
                break;
            case "sub":
                delete dataStore["bundleCartProducts"][bundleCartObj["sku"]];
                INC.config.pdpaddedProductList.remove_prod_list = function () {
                    var what, a = arguments,
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
                listToDelete[0] = main_id
                for (var i = 0; i < INC.config.bundle_tracking.length; i++) {
                    var obj = INC.config.bundle_tracking[i];
                    if (obj != undefined) {
                        if (listToDelete.indexOf(obj.id) != -1) {
                            INC.config.bundle_tracking.splice(i, 1);
                        }
                    }
                }
                INC.config.bundle_skuPushed.remove_prod_list = function () {
                    var what1, a1 = arguments,
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
                INC.config.bundle_skuPushed.remove_prod_list(bundleCartObj["sku"]);
                break;
        }

        if (INC.config.pageType == "pdp") {
            this.calculateBundleTotal();
        }
    }

    INC.methods.calculateBundleTotal = function () {
        var dataStore = INC.dataStore;
        var bundleCartProducts = dataStore["bundleCartProducts"];
        var productListObj = dataStore.dataStoreObj;
        var duplicate_check_produ = []
        var totalRegularPrice = 0;
        var totalActivePrice = 0;
        var totalMainProduct = 0;
        var totalAddonProducts = 0;
        var totalAddonProductsCount = 0;
        var totalProductCount = 0;
        var total_qty = 0
        var total_collect_point = 0
        var mainId = INC.methods.getProductIdFromWebPage();
        if (bundleCartProducts != null && bundleCartProducts != undefined) {
            Object.keys(bundleCartProducts).forEach(function (sku) {
                for (var mainProductId in productListObj) {
                    for (var childProductId in productListObj[mainProductId]) {
                        if (sku == productListObj[mainProductId][childProductId]["sku"]) {
                            if (duplicate_check_produ.indexOf(productListObj[mainProductId][childProductId]["sku"]) == -1) {
                                duplicate_check_produ.push(productListObj[mainProductId][childProductId]["sku"])
                                var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                var activePrice = productListObj[mainProductId][childProductId]["activePrice"];
                                totalRegularPrice = totalRegularPrice + (parseFloat(bundleCartProducts[sku]) * regularPrice);
                                totalActivePrice = totalActivePrice + (parseFloat(bundleCartProducts[sku])) * activePrice;

                                total_qty = total_qty + parseInt(bundleCartProducts[sku])

                                if (productListObj[mainProductId][childProductId]["worthPrice"] != "" && productListObj[mainProductId][childProductId]["worthPrice"] != null) {
                                    total_collect_point = total_collect_point + +(productListObj[mainProductId][childProductId]["worthPrice"] * parseInt(bundleCartProducts[sku]))
                                }
                                if (productListObj[mainProductId][childProductId].mainId == mainId) {
                                    totalProductCount++;
                                    totalMainProduct = totalMainProduct + (parseInt(bundleCartProducts[sku]) * activePrice);
                                }
                                if (productListObj[mainProductId][childProductId].mainId != mainId) {
                                    totalProductCount++;
                                    totalAddonProductsCount++;
                                    totalAddonProducts = totalAddonProducts + (parseInt(bundleCartProducts[sku]) * activePrice);
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
            total_collect_point: total_collect_point
        }
        this.updateBundleCartBlock(priceObj);
    }

    INC.methods.updateBundleCartBlock = function (priceObj) {
        var dataStore = INC.dataStore;
        var bundleCartProducts = dataStore["bundleCartProducts"];
        var totalRegularPrice = priceObj.totalRegularPrice;
        var totalActivePrice = priceObj.totalActivePrice;
        var totalMainProduct = priceObj.totalMainProduct;
        var totalAddonProducts = priceObj.totalAddonProducts;
        var totalAddonProductsCount = priceObj.totalAddonProductsCount;
        var totalProductCount = priceObj.totalProductCount;
        var elPdpBundleCartBlock = document.querySelector('.inc_pdp_bundle_cart_block');
        if (elPdpBundleCartBlock != null) {
            var elBundleCartAddedBlock = document.querySelector('.inc_pdp_bundle_cart_added_block')
            var elBundleCartSummaryViewBtnCount = document.querySelector('.inc_pdp_bundle_cart_summary_view_btn_count')
            var elBundleCartPriceRegularText = document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_regular_text')
            var elBundleCartPriceActiveText = document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_active_text')
            var elBundleCartTitleTextcount = document.querySelector('.inc_pdp_bundle_cart_title_text')
            var elbundlesavetext = document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_save_text')
            var elBundleCartAddBtnText = document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text')
            var elBundleCartAddBtnCount = document.querySelector('.inc_pdp_bundle_cart_summary_count_text')
            elBundleCartAddedBlock.innerHTML = "";
            var bundleCartProductsArray = Object.keys(bundleCartProducts);
            elBundleCartSummaryViewBtnCount.textContent = bundleCartProductsArray.length;
            if (window.innerWidth < 798) {
                elBundleCartTitleTextcount.textContent = "Items you've added"
            }
            for (var skup in INC.config.bundle_skuPushed) {
                var elcont = INC.config.bundle_skuPushed[skup]
                for (var bundaray in bundleCartProductsArray) {
                    var findObj = new INC.classes.FindObj({
                        sku: bundleCartProductsArray[bundaray]
                    });
                    var productObj = INC.dataStore.methods().getProductBySKU(findObj);
                    if (elcont == productObj.id) {
                        var productId = productObj.id;
                        var prepen_elm = this.createBundleCartAddedProductBlock(productId, bundleCartProducts[bundleCartProductsArray[bundaray]], "pdp")
                        if (elBundleCartAddedBlock != null || elBundleCartAddedBlock != undefined) {
                            elBundleCartAddedBlock.insertBefore(prepen_elm, elBundleCartAddedBlock.childNodes[0]);
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
                    document.querySelectorAll('.inc_pdp_block .inc_product_desc_add_block')[1].click();
                    onloadpdp_delete = true;
                }, 5);
            }
            elBundleCartPriceActiveText.innerHTML = formatter.format(totalActivePrice)
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('simple_ecirp')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('simple_ecirp')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
            var totalsaveprcs = get_discount_price(totalRegularPrice, totalActivePrice)

            if (totalRegularPrice != "0.00" && totalRegularPrice != totalActivePrice && totalRegularPrice != null && totalRegularPrice != "") {
                elBundleCartPriceRegularText.innerHTML = formatter.format(totalRegularPrice)
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elbundlesavetext.innerHTML = "You Saved " + formatter.format((totalsaveprcs).toFixed(2))
            } else {
                elbundlesavetext.innerHTML = ""
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('simple_ecirp')
            }

            if (elPdpBundleCartBlock != null && elPdpBundleCartBlock != undefined) {
                var elBundleCartTitleText = document.querySelector('.inc_pdp_bundle_cart_title_text')
                var elBundleCartAddBtnTexts = document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text')
                elBundleCartAddBtnTexts.style.textTransform = "none"
                elBundleCartTitleText.textContent = "Price Summary";
                elBundleCartAddBtnTexts.textContent = addButtonText();
                if (totalProductCount <= 1) {
                    elBundleCartAddBtnTexts.textContent = addButtonText();
                    elBundleCartAddBtnCount.innerHTML = Object.keys(INC.dataStore.bundleCartProducts).length + " Item"
                } else if (totalProductCount == 2) {
                    elBundleCartAddBtnTexts.textContent = "Add Both to " + addBundleText();
                    elBundleCartAddBtnCount.innerHTML = Object.keys(INC.dataStore.bundleCartProducts).length + " Items"
                } else if (totalProductCount == 3) {
                    elBundleCartAddBtnTexts.textContent = "Add all Three to " + addBundleText()
                    elBundleCartAddBtnCount.innerHTML = Object.keys(INC.dataStore.bundleCartProducts).length + " Items"
                } else if (totalProductCount == 4) {
                    elBundleCartAddBtnTexts.textContent = "Add all Four to " + addBundleText()
                    elBundleCartAddBtnCount.innerHTML = Object.keys(INC.dataStore.bundleCartProducts).length + " Items"
                } else if (totalProductCount == 5) {
                    elBundleCartAddBtnTexts.textContent = "Add all Five to " + addBundleText()
                    elBundleCartAddBtnCount.innerHTML = Object.keys(INC.dataStore.bundleCartProducts).length + " Items"
                } else if (totalProductCount == 6) {
                    elBundleCartAddBtnTexts.textContent = "Add all Six to " + addBundleText()
                    elBundleCartAddBtnCount.innerHTML = Object.keys(INC.dataStore.bundleCartProducts).length + " Items"
                }
            }

            var elPriceMainTitleText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_ecirp_main_title_text');
            var elPriceMainFigureText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_ecirp_main_figure_text');
            var elPriceAddonTitleText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_ecirp_addon_title_text');
            var elPriceAddonFigureText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_ecirp_addon_figure_text');
            var elPriceActiveText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle_cart_summary_ecirp_active_text');

            elPriceMainTitleText.textContent = "Main Product Price ";
            elPriceAddonTitleText.textContent = "Add-on(s) Selected  " + ((totalAddonProductsCount > 0) ? totalAddonProductsCount : "");

            elPriceMainFigureText.innerHTML = formatter.format(totalMainProduct)
            elPriceAddonFigureText.innerHTML = formatter.format(totalAddonProducts)
            elPriceActiveText.innerHTML = formatter.format(totalActivePrice)

            setTimeout(function () {
                if (INC.dataStore.bundleCartProducts != null) {
                    if (Object.keys(INC.dataStore.bundleCartProducts).length == 0) {
                        elBundleCartAddBtnText.textContent = addButtonText();
                        elBundleCartAddBtnText.parentNode.parentNode.setAttribute('style', 'pointer-events: none;opacity: 0.5;')
                    } else {
                        elBundleCartAddBtnText.parentNode.parentNode.setAttribute('style', 'pointer-events: auto;opacity: 1;')
                    }
                }
            }, 100);
        }

    }

    INC.methods.createBundleCartAddedProductBlock = function (productId, qty) {
        var addedProductBlock = generate_html_tag('div', 'inc_pdp_bundle_cart_added_product_block')
        var findObj = new INC.classes.FindObj({
            id: productId
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        addedProductBlock.setAttribute('data-id', productObj.id);
        addedProductBlock.setAttribute('data-sku', productObj.sku);
        addedProductBlock.setAttribute('data-main_id', productObj.mainId);
        addedProductBlock.setAttribute('data-bundle_id', productObj.bundleId);

        var prod_module_elm = document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
        var modal_attr_block = prod_module_elm.querySelector('.inc_product_modal_block')
        var zero_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
        var size_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
        var color_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
        var third_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-third');

        var sel_attr_text = ""
        if (color_text != undefined) {
            sel_attr_text = color_text
        }
        if (zero_text != undefined) {
            if (sel_attr_text == "") {
                sel_attr_text = zero_text
            } else {
                sel_attr_text = sel_attr_text + " / " + zero_text
            }
        }
        if (size_text != undefined) {
            sel_attr_text = sel_attr_text + " / " + size_text
        }
        if (third_text != undefined) {
            sel_attr_text = sel_attr_text + " / " + third_text
        }
        var addedsumprodhtml = '<div class="inc_pdp_bundle_cart_added_product_img_block"><div class="inc_pdp_bundle_cart_added_product_img"><img src="' + productObj.imageURL + '" data-src="' + productObj.imageURL + '"></div></div><div class="inc_pdp_bundle_cart_added_product_title_block"><div class="inc_pdp_bundle_cart_added_product_title_text_block"><div class="inc_pdp_bundle_cart_added_product_title_text"><a title="' + productObj.name + '"><div style="text-transform: unset;"></span>' + productObj.name + '</div></a></div></div></div><div class="inc_pdp_bundle_cart_added_product_qty_block"><div class="inc_pdp_bundle_cart_added_product_qty_text_block"><div class="inc_pdp_bundle_cart_addeed_product_qty_text">' + qty + '</div></div></div><div class="inc_pdp_bundle_cart_added_product_ecirp_block"><div class="inc_pdp_bundle_cart_added_product_ecirp_text_block"><div class="inc_pdp_bundle_cart_added_product_ecirp_text">' + formatter.format(productObj.activePrice * qty) + '</div></div></div><div class="inc_pdp_bundle_cart_added_product_att_block" title="' + sel_attr_text + '"><div class="inc_pdp_bundle_cart_added_product_att_color_block"><div class="inc_pdp_bundle_cart_added_product_att_color_text_block" style="text-transform: none;">' + sel_attr_text + '</div></div><div class="inc_pdp_bundle_cart_added_product_att_size_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text"></div></div></div></div><div class="inc_pdp_bundle_cart_added_product_edit_block"><div class="inc_pdp_bundle_cart_added_product_edit_text_block"><div class="inc_pdp_bundle_cart_added_product_edit_text"></div></div><div class="inc_pdp_bundle_cart_added_product_edit_img_block"><div class="inc_pdp_bundle_cart_added_product_edit_img"></div></div></div>'

        addedProductBlock.innerHTML = addedsumprodhtml

        addedProductBlock.querySelector('.inc_pdp_bundle_cart_added_product_img img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'")

        var elEditTextBlock = addedProductBlock.querySelector(".inc_pdp_bundle_cart_added_product_edit_text_block")
        var elEditImgBlock = addedProductBlock.querySelector(".inc_pdp_bundle_cart_added_product_edit_img_block");

        elEditTextBlock.addEventListener("click", function () {
            if (INC.config.deviceType == "mobile") {
                if (document.querySelector('.inc_pdp_bundle_product_list_item_block' + '[data-main_id="' + productObj.mainId + '"]') != null)
                    document.querySelector('.inc_pdp_bundle_product_list_item_block' + '[data-main_id="' + productObj.mainId + '"]').click();
            }
            setTimeout(function () {
                document.querySelector('.inc_product_block' + '[data-id="' + productObj.id + '"]').parentNode.parentNode.querySelector('.inc_product_modal_block').classList.add('inc_active');
                document.querySelector('html').classList.add('inc_overlay');
            }, 50);
        });
        elEditImgBlock.addEventListener("click", function () {
            document.querySelector('.inc_product_block' + '[data-id="' + productObj.id + '"]').querySelector('.inc_product_desc_add_block').click();
        });
        return addedProductBlock;
    }

    INC.methods.clear = function () {
        remsidebarelm()
        if (document.querySelector('.inc_af_block') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_af_block'), function (el) {
                el.parentNode.removeChild(el);
            });
        }
        if (document.querySelector('.inc_bundle_avail_block') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_bundle_avail_block'), function (reme) {
                reme.parentNode.removeChild(reme);
            });
        }
        if (document.querySelector('.inc_pdp_block') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_pdp_block'), function (el) {
                el.parentNode.removeChild(el);
            });
        }
    }

    INC.methods.addProductToCart = function (findObjd, productBlock, add_btn_click, _add_prod_im, btn_addtocart, newbtntext) {

        if (INC.config.pageType != "cartPage" && INC.config.pageType != "pdp") {
            document.querySelector('html').classList.remove('inc_overlay')
        }

        var findObj = new INC.classes.FindObj(findObjd);
        var productObj = INC.dataStore.methods().getProductById(findObj);
        var mainids = productBlock.getAttribute('data-main_id')
        var addProductURL = INC.config.addToBasketURL
        var params = []

        var cartQTY = productBlock.querySelector('.inc_product_qty_input_text').querySelector('input').value


        if (productObj.ProductType == "configurable") {
            var optName = ""
            if (productObj.option[0] != undefined) {
                optName = productObj.option[0].text
            } else if (productObj.option[1] != undefined) {
                optName = productObj.option[1].text
            }
            let prdIdAtc = productObj.id
            let atcObject = {}
            atcObject[prdIdAtc] = cartQTY
            params.push(atcObject)
        } else {
            let prdIdAtc = productObj.id
            let atcObject = {}
            atcObject[prdIdAtc] = cartQTY
            params.push(atcObject)
        }

        window.jQuery.ajax({
            type: "POST",
            data: JSON.stringify(params),
            async: true,
            url: addProductURL,
            contentType: "application/json",
            dataType: 'json',
            success: function (res) {
                INC.config.pdpaddedProductList.push(productObj.mainId)
                INC.config.sidebarremovedprod.push(mainids)

                if (res.status == "ERROR") {
                    prod_qty_notinstock(res, productObj)
                    let ourBundleButton = productBlock.querySelector('.inc_product_variant_simple_text')

                    let oldText = ourBundleButton.innerText
                    ourBundleButton.innerText = "Out Of Stock"
                    setTimeout(() => {
                        ourBundleButton.innerText = oldText
                    }, 3000);

                }
                updateMiniCart(res, cartQTY)
                addsuccess_(btn_addtocart, add_btn_click, productBlock, findObj)
                // if (INC.config.pageType == "pdp" && document.querySelector('.inc_sidebar_modal_block') == null) {
                //     setTimeout(function () {
                //         if (INC.config.recommendation && document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                //             window.location.reload()
                //         } else {
                //             window.location = getCheckoutLink()
                //         }
                //     }, 1000)
                // }
            },
            error: function (res) {
                if (res != undefined) {
                    if (res.responseJSON != undefined) {

                        if (res.responseJSON.message == 'Cart Error') {
                            prod_qty_notinstock(params)
                            if (INC.config.pageType == "pdp" && INC.config.recommendation == trueflag) {
                                if (document.querySelector('.inc_sidebar_modal_block') != null) {
                                    if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                                        if (productObj.ProductType != "simple") {
                                            INC.methods.updateSidebarBlock(productObj.sku, productBlock);
                                        } else {
                                            INC.methods.updateSidebarBlock(productObj.mainId, productBlock);
                                        }
                                        INC.methods.showSidebar();
                                    }
                                }
                            }
                        }
                    }
                }
                add_btn_click.innerText = "Not Added";
                btn_addtocart.innerText = "Not Added";
                if (newbtntext != undefined) {
                    newbtntext.innerHTML = "Not Added";
                }
                if (INC.config.pageType == "cartPage") {
                    if (productBlock != null) {
                        productBlock.parentNode.removeChild(productBlock);
                    }
                }
                prod_qty_notinstock(params)

                var remerrorjust = document.querySelector('.inc_justerror')
                if (remerrorjust != null) {
                    remerrorjust.parentNode.removeChild(remerrorjust)
                }

                if (document.querySelector('.inc_justerror') == null) {
                    var headertitle = document.querySelector('.inc_sidebar_modal_cart_and_title_block')
                    var errormes = generate_html_tag('div', 'inc_justerror')
                    var errormestext = generate_html_tag('div', 'inc_justerror_text')
                    errormestext.innerHTML = "<div><img style='width:40px' src='" + productObj.imageURL + "'/>" + res.responseJSON.description + "</span></div>"
                    errormes.appendChild(errormestext)
                    headertitle.parentNode.insertBefore(errormes, headertitle)
                    setTimeout(function () {
                        var remel = document.querySelector('.inc_justerror')
                        if (remel != null) {
                            remel.parentNode.removeChild(remel)
                        }
                    }, 2000)
                }

                if (INC.config.pageType != "cartPage") {
                    setTimeout(function () {
                        loadsidebarajax()
                    }, 500)
                }
            },
        });

        function addsuccess_(btn_t, addbtnt, addedprdblock) {


            INC.config.disablebtn = true
            addbtnt.innerText = "Added to " + justAddedText();
            btn_t.innerText = "Added to " + justAddedText();
            if (newbtntext != undefined) {
                newbtntext.innerHTML = "Added to " + justAddedText();
            }

            var call_addprodtosidebar = false;
            if (INC.config.pageType != "cartPage" && !INC.config.recommendation) {
                call_addprodtosidebar = true
            } else {
                if ((INC.config.pageType != "cartPage" && document.querySelector('.sidebar_outer.sidebar_outer_active') != null) || INC.config.recommendation == trueflag) {
                    call_addprodtosidebar = true
                }
            }

            var qty = addedprdblock.querySelector('.inc_product_qty_input_block').querySelector('input').value

            if (call_addprodtosidebar == trueflag) {
                INC.methods.addProductToSidebarCart(findObj, qty, productBlock, null, btn_addtocart);
            }

            if (INC.config.pageType == "cartPage") {
                if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                    document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                }
                addedprdblock.querySelector('.inc_product_desc_add_text').innerText = "Added";
                setTimeout(function () {
                    if (addedprdblock != null) {
                        if (addedprdblock.parentNode == null) {
                            addedprdblock = document.querySelector('.sidebar_outer .inc_product_module_block[data-id="' + addedprdblock.dataset.id + '"]')
                            if (addedprdblock) {
                                addedprdblock.parentNode.removeChild(addedprdblock);
                            }
                        } else {

                            addedprdblock.parentNode.removeChild(addedprdblock);
                        }
                    }
                }, 500)
                window.location.reload();
                if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                    document.querySelector('.inc_recommended_tabs_list_item_block').click()
                }
                document.querySelector('html').classList.remove('inc_overlay')

            } else if (INC.config.recommendation) {
                setTimeout(() => {
                    if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                        let elButton = document.querySelector('.inc_product_modal_block.inc_active .inc_product_desc_add_text')
                        document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                        elButton.innerText = addButtonText()
                    }
                }, 1000);


            }

            setTimeout(function () {
                addbtnt.innerText = addButtonText();
                Array.prototype.forEach.call(addbtnt, function (el) {
                    el.innerText = "Add";
                });
                if (btn_t != undefined) {
                    if (btn_t.parentNode.parentNode != null) {
                        btn_t.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                    }
                }
                INC.config.disablebtn = true
            }, 2000);



            if (INC.config.pageType != "cartPage" && !INC.config.recommendation) {
                setTimeout(function () {
                    var allprd = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length

                    if (document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null || allprd == 1 && document.querySelector('.sidebar_outer.sidebar_outer_active') != null) {
                        if (document.querySelector('.inc_recommended_tabs_list_item_block.inc_active') != null) {
                            var remcat = document.querySelector('.inc_recommended_tabs_list_item_block.inc_active')

                            if (document.querySelector('.inc_recommended_tabs_list_item_block.inc_active') != null) {
                                document.querySelector('.inc_recommended_tabs_list_item_block.inc_active').parentNode.removeChild(remcat)

                                if (document.querySelector('.inc_recommended_tabs_block').innerText == "") {
                                    document.querySelector('.inc_recommended_products_block').innerHTML = ""
                                    if (window.innerWidth < 800) {
                                        setTimeout(() => {

                                            window.location.href = INC.clientConfig.checkoutLink
                                        }, 3000);
                                    } else {
                                        window.location.href = INC.clientConfig.checkoutLink
                                    }
                                    return
                                }

                                if (document.querySelectorAll('.inc_recommended_tabs_list_item_block').length > 1) {
                                    let remove_main_id = addedprdblock.dataset.main_id
                                    let remove_prd_block = document.querySelector('.sidebar_outer .inc_product_module_block[data-main_id=' + remove_main_id + ']')

                                    remove_prd_block.parentNode.removeChild(remove_prd_block);
                                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                                        document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                    }
                                } else {
                                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                                        document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                    }
                                    document.querySelector('.inc_recommended_products_list_block').setAttribute('style', 'margin-left:0;')
                                }
                                if (window.innerWidth < 821) {
                                    document.querySelector('.inc_recommended_tabs_list_block').scroll({
                                        left: 0,
                                        top: 0,
                                        behavior: 'smooth'
                                    })
                                }
                            }
                        }
                    } else {
                        if (document.querySelector('.inc_recommended_products_list_block .inc_product_module_block').length == 1) {
                            if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                                document.querySelector('.inc_recommended_tabs_list_item_block').click()
                            }
                        } else {
                            let remove_main_id = addedprdblock.dataset.main_id

                            let remove_prd_block = document.querySelector('.sidebar_outer .inc_product_module_block[data-main_id=' + remove_main_id + ']')
                            remove_prd_block.parentNode.removeChild(remove_prd_block);
                        }

                        if (window.innerWidth < 821) {
                            document.querySelector('.inc_recommended_tabs_list_block').scroll({
                                left: 0,
                                top: 0,
                                behavior: 'smooth'
                            })
                        }
                    }
                    if (INC.config.pageType == "pdp") {
                        if (document.querySelector('.inc_sidebar_modal_block') == null) {

                            window.location.href = INC.clientConfig.checkoutLink
                        }
                    }
                }, 1000)
            }
        }



        document.querySelector('body').classList.remove('inc_popup_open');
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
                if (btn_addtocart.innerText == 'Adding...') {
                    add_btn_click.innerText = "Added to " + justAddedText();
                    btn_addtocart.innerText = "Added to " + justAddedText();
                    if (newbtntext != undefined) {
                        newbtntext.innerHTML = "Added to " + justAddedText();
                    }
                }
                if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                    document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                }

                document.querySelector('html').classList.remove('inc_overlay')
                window.location.reload()
            }
        }, 3000)
        var eventDataObj = {};
        if (document.querySelector(".inc_sidebar_modal_block.inc_active") == null && INC.config.pageType == "pdp") {
            pageType = "100";
        }
        if (document.querySelector(".inc_sidebar_modal_block.inc_active") != null && INC.config.pageType != "productList") {
            pageType = "107";
        }

        if (INC.config.recommendation == falseflag && productObj.bundleId == 'undefined' || productObj.bundleId == undefined && INC.config.pageType == 'pdp') {
            var eventdata__ = {
                "core_product_id": INC.config.Product_id,
                "product_id": productObj.mainId ? productObj.mainId.toString() : "",
            }
            var rpt_val = '4'
            if (INC.config.pageType == "pdp") {
                if (INC.config.OutOfStock) {
                    rpt_val = "1";
                } else if (INC.config.recommendation == true) {
                    rpt_val = "2";
                } else if (INC.config.recommendationProduct.includes(eventdata__.product_id)) {
                    rpt_val = "4";
                } else {
                    rpt_val = "3";
                }
            }
            var data__ = {
                "eventData": btoa((JSON.stringify({
                    "event_data": eventdata__,
                    "page_type": pageType,
                    "event_type": 'bestseller_add_to_cart',
                    "method": "track",
                    "platform": "",
                    "token": INC.config.clientToken,
                    "rt": "8",
                    "rpt": rpt_val

                }))),
                "vid": readCookie('ivid'),
                "time": getCurrentFormattedTime(),
                "uri": document.location.href
            };
            makeTrackingApiCall(JSON.stringify(data__));
        } else {
            if (INC.config.pageType == "cartPage") {
                eventDataObj["bundle_data"] = {
                    "id": productObj.bundleId,
                    "product_ids": [productObj.bundledProductId, productObj.mainId],
                    "product_id": productObj.mainId
                }
            } else {
                eventDataObj["bundle_data"] = {
                    "id": productObj.bundleId,
                    "product_ids": [productObj.bundledProductId, productObj.mainId],
                    "product_id": productObj.bundledProductId
                }
            }
            INC.methods.trackingEvents("bundleAddToCart", eventDataObj, pageType);
        }
    }
    INC.methods.addBundleToCart = function (btn_cart) {
        INC.clientConfig.OOS = []
        var dataStore = INC.dataStore;
        var mainProductId = document.querySelector('.inc_pdp_product-main_block .inc_product_module_block').getAttribute('data-main_id');
        var formData = []
        var url_add = []
        var count_pr_to_add = 0

        var total_length = Object.keys(dataStore.bundleCartProducts);
        Object.keys(dataStore.bundleCartProducts).forEach(function (bundleCartProduct) {
            var findObj = new INC.classes.FindObj({
                id: bundleCartProduct
            });
            var productObj = INC.dataStore.methods().getProductById(findObj);
            var addProductURL = INC.config.addToBasketURL
            var params = []

            if (productObj.ProductType == "configurable") {
                var optName = ""
                if (productObj.option[0] != undefined) {
                    optName = productObj.option[0].text
                } else if (productObj.option[1] != undefined) {
                    optName = productObj.option[1].text
                }
                let prdIdAtc = productObj.id
                let atcObject = {}
                atcObject[prdIdAtc] = INC.dataStore['bundleCartProducts'][productObj.id]
                params.push(atcObject)
            } else {
                let prdIdAtc = productObj.id
                let atcObject = {}
                atcObject[prdIdAtc] = INC.dataStore['bundleCartProducts'][productObj.id]
                params.push(atcObject)
            }
            formData.push(params)
            url_add.push(addProductURL)
            count_pr_to_add++
            if (total_length.length == count_pr_to_add) {
                ajax_add_to_cart(formData, url_add, btn_cart)
            }
        });


        add_to_cart_tracking_multiple(mainProductId)
    }

    function ajax_add_to_cart(formData, url_add, btn_cart) {
        INC.clientConfig.OOS = []
        INC.clientConfig.OOS_MESG = []

        function suc1(btn_ca) {
            if (formData[1] == undefined) {

                loadsidebarajax(btn_ca)
            }
            if (formData[1] != undefined) {
                callprodB()
            }
        }

        function suc2(btn_ca) {
            if (formData[2] == undefined) {
                loadsidebarajax(btn_ca)
            }
            if (formData[2] != undefined) {
                callprodC()
            }
        }

        function suc3(btn_ca) {
            if (formData[3] == undefined) {
                loadsidebarajax(btn_ca)
            }
            if (formData[3] != undefined) {
                callprodD()
            }
        }

        function suc4(btn_ca) {
            if (formData[4] == undefined) {
                loadsidebarajax(btn_ca)
            }
            if (formData[4] != undefined) {
                callprodE()
            }
        }

        function suc5(btn_ca) {
            if (formData[5] == undefined) {
                loadsidebarajax(btn_ca)
            }
            if (formData[5] != undefined) {
                callprodF()
            }
        }

        callprodA()

        function callprodA() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add[0],
                data: JSON.stringify(formData[0]),
                async: true,
                dataType: 'json',
                contentType: "application/json",
                success: function (data_re) {

                    if (data_re.status == "ERROR") {
                        prod_qty_notinstock(data_re)
                    }
                    suc1(btn_cart)
                    updateMiniCart(data_re)

                },
                error: function () {
                    suc1(btn_cart)
                },
            });
        }

        function callprodB() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add[1],
                data: JSON.stringify(formData[1]),
                async: true,
                dataType: 'json',
                contentType: "application/json",
                success: function (res) {
                    if (res.status == "ERROR") {
                        prod_qty_notinstock(res)
                    }
                    suc2(btn_cart)
                    updateMiniCart(res)

                },
                error: function () {
                    suc2(btn_cart)

                },
            });
        }

        function callprodC() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add[2],
                data: JSON.stringify(formData[2]),
                async: true,
                dataType: 'json',
                contentType: "application/json",
                success: function (res2) {
                    if (res2.status == "ERROR") {
                        prod_qty_notinstock(res2)
                    }
                    suc3(btn_cart)
                    updateMiniCart(res2)
                },
                error: function () {
                    suc3(btn_cart)
                },
            });
        }

        function callprodD() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add[3],
                data: JSON.stringify(formData[3]),
                async: true,
                dataType: 'json',
                contentType: "application/json",
                success: function (res3) {
                    if (res3.status == "ERROR") {
                        prod_qty_notinstock(res3)
                    }
                    suc4(btn_cart)
                    updateMiniCart(res3)
                },
                error: function () {
                    suc4(btn_cart)
                },
            });
        }

        function callprodE() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add[4],
                data: JSON.stringify(formData[4]),
                async: true,
                dataType: 'json',
                contentType: "application/json",
                success: function (res4) {
                    if (res4.status == "ERROR") {
                        prod_qty_notinstock(res4)
                    }
                    suc5(btn_cart)
                    updateMiniCart(res4)
                },
                error: function () {
                    suc5(btn_cart)
                },
            });
        }

        function callprodF() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add[5],
                data: JSON.stringify(formData[5]),
                async: true,
                dataType: 'json',
                contentType: "application/json",
                success: function (res5) {
                    if (res5.backUrl != undefined) {
                        prod_qty_notinstock(res5)
                    }
                    loadsidebarajax(btn_cart)
                    updateMiniCart(res5)
                },
                error: function () {
                    loadsidebarajax(btn_cart)
                },
            });
        }
    }

    function updateMiniCart(res, qty) {

        let miniCart = document.querySelector('.miniCart .count')
        var total_length = Object.keys(INC.dataStore.bundleCartProducts).length
        if (qty) {
            total_length = Number(qty)
        }
        total_length = total_length + Number(miniCart.innerText)
        miniCart.innerText = total_length
        if (miniCart.innerText != 0) {
            miniCart.classList.remove('count--empty')
        }
    }

    function prod_qty_notinstock(formd, productObj) {
        var ajaxmainid = ''
        if (formd.data.itemsRejected == undefined) {
            ajaxmainid = productObj.sku
        } else {
            ajaxmainid = formd.data.itemsRejected[0].sku
        }

        INC.clientConfig.OOS.push(ajaxmainid)
        INC.clientConfig.OOS_MESG.push('The requested quantity is not available')
    }

    function loadsidebarajax(btn_cart) {

        INC.config.disablebtn = true
        if (btn_cart != undefined) {
            btn_cart.classList.remove('inc_loading')
        }
        if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null) {
            document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
        }
        if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
            if (!INC.config.recommendation) {

                INC.methods.updateSidebarBlock()
            }
            checkAddedProductInJustAdded()
            INC.methods.showSidebar();


        }

    }

    function checkAddedProductInJustAdded() {
        var addCheckCategory = INC.config.pdpaddedProductList;
        var productListArrayprod = INC.dataStore.bundleProductsArray;
        var categoryList = INC.dataStore.methods().getUniqueCatergories();

        for (var catlist in categoryList) {
            var count = 0;
            for (var prd in productListArrayprod) {
                var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                    mainId: productListArrayprod[prd]
                });
                if (firstProductObjByMainId["categoryName"] == categoryList[catlist]) {
                    if (addCheckCategory.indexOf(productListArrayprod[prd]) == -1) {
                        count++
                    }
                }
            }
            if (count == 0) {
                var titleel = categoryList[catlist]
                var eltablist = document.querySelectorAll('.inc_recommended_tabs_list_item_block')
                if (eltablist != null) {
                    for (const element of eltablist) {
                        var titleText = element.getAttribute('title')
                        if (titleText == titleel) {
                            if (element != null) {
                                element.parentNode.removeChild(element)
                            }
                        }
                    }
                }
            }
        }
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;


    }

    function add_to_cart_tracking_multiple(mainProductId) {
        var event_type = "bundle_add_to_cart";
        var core_prod_id = "";
        var productIdsforTracking = []
        core_prod_id = mainProductId;

        var pageType = "100";
        var all_data = [];

        // Remove Duplicate
        INC.config.bundle_tracking = INC.config.bundle_tracking.filter((v, i, a) => a.findIndex(v2 => (v2.id === v.id)) === i)


        for (var tc in INC.config.bundle_tracking) {


            var bundlePos = 0
            var bundleProdsList = document.querySelectorAll('.inc_pdp_bundle_block .inc_product_module_block')
            var prodBlock = document.querySelector('.inc_pdp_bundle_block .inc_product_module_block[data-main_id="' + INC.config.bundle_tracking[tc].id + '"]')

            for (var index in bundleProdsList) {
                if (bundleProdsList[index] == prodBlock) {
                    bundlePos = index
                    break
                }
            }


            if (INC.config.bundle_tracking.length == 1) {
                productIdsforTracking.push(mainProductId)
                productIdsforTracking.push(INC.config.bundle_tracking[tc].id)
                all_data.push({
                    id: parseInt(INC.config.bundle_tracking[tc].bid),
                    product_ids: productIdsforTracking,
                    product_id: core_prod_id,
                    bundle_pos: (bundlePos > 1) ? parseInt(bundlePos) : 1
                })
                productIdsforTracking = []
            } else {
                if (mainProductId != INC.config.bundle_tracking[tc].id) {
                    productIdsforTracking.push(mainProductId)
                    productIdsforTracking.push(INC.config.bundle_tracking[tc].id)
                    all_data.push({
                        id: parseInt(INC.config.bundle_tracking[tc].bid),
                        product_ids: productIdsforTracking,
                        product_id: core_prod_id,
                        bundle_pos: (bundlePos > 1) ? parseInt(bundlePos) : 1
                    })
                    productIdsforTracking = []
                }
            }
        }




        let dbCount = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block').length

        var data = {
            "eventData": btoa((JSON.stringify({
                "event_data": {
                    "bundle_data": all_data
                },
                "page_type": pageType.toString(),
                "event_type": event_type,
                "method": "track",
                "platform": "",
                "token": INC.config.clientToken,
                "mb": "1",
                "db": dbCount.toString(),
            }))),
            "vid": INC.config.ivid,
            "time": getCurrentFormattedTime(),
            "uri": document.location.href
        };
        makeTrackingApiCall(JSON.stringify(data));

    }

    function makeTrackingApiCall(eventdata) {
        var p_url = '//optimizedby.increasingly.co/ImportData';
        if (getCountry() == 'b58lau') {
            p_url = 'https://jpoptimizedby.increasingly.co/ImportData';
        }
        if (getCountry() == "b58lus") {
            p_url = '//usaoptimizedby.increasingly.co/ImportData';
        }
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {
                    var resul = xhr.responseText;
                    // console.log("track" + resul)
                }
            }
        };
        xhr.open("POST", p_url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(eventdata);
    }

    function getCurrentFormattedTime() {
        var d = new Date();
        return (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
    }
    INC.methods.trackingEvents = function (eventType, eventDataObj, pageType) {
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
                if ((INC.config.recommendation == trueflag || INC.config.recommendationProduct.includes(eventDataObj.product_id)) && INC.config.pageType == "pdp") {
                    importEventDataObj["rt"] = "8";
                    if (INC.config.pageType == "pdp") {
                        if (INC.config.OutOfStock) {
                            importEventDataObj["rpt"] = "1";
                        } else if (INC.config.recommendation == true) {
                            importEventDataObj["rpt"] = "2";
                        } else if (INC.config.recommendationProduct.includes(eventDataObj.product_id)) {
                            importEventDataObj["rpt"] = "4";
                        } else {
                            importEventDataObj["rpt"] = "3";
                        }
                    }

                }
                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";

                if (pageType == "100" && !INC.config.recommendationProduct.includes(eventDataObj.product_id)) {

                    importEventDataObj["db"] = INC.config.db_products.toString();
                }
                break;
            case "bundleAddToCart":
                importEventDataObj["event_type"] = "bundle_add_to_cart";
                importEventDataObj["page_type"] = pageType;
                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";
                break;
        }

        importEventDataObj["platform"] = "";
        importEventDataObj["token"] = INC.config.clientToken;
        importDataObj["eventData"] = btoa(JSON.stringify(importEventDataObj));
        importDataObj["uri"] = window.location.href;
        importDataObj["vid"] = INC.config.ivid;
        INC.methods.sendTrackingEvents(importDataObj);
    }

    INC.methods.sendTrackingEvents = function (importDataObj) {
        var xhr = new XMLHttpRequest();
        var method = "POST";
        var url = INC.config.trackingURL;
        xhr.onreadystatechange = handleStateChange;
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        function handleStateChange() {
            if (xhr.readyState === 4 && xhr.status === 200) { // console.log(xhr.responseText)
            }
        }

        xhr.send(JSON.stringify(importDataObj));
    }
    INC.methods.addVisitorID = function () {
        function generateUniqueINCVisitorId(len, bits) {
            var bits1 = bits || 36;
            var outStr = "";
            var newStr;
            while (outStr.length < len) {
                newStr = generateRandomString(bits1).toString().slice(2);
                outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
            }
            return outStr;
        }
        var ivid = "";
        if (readCookie('ivid') != undefined) {
            ivid = readCookie('ivid')
        }
        var clientdomain = window.location.host
        var arr = clientdomain.split(".");
        var d = new Date();
        var expires = "expires=" + d.toUTCString();
        if (ivid.length == 0) {
            ivid = generateUniqueINCVisitorId(42, 16);
            arr.shift();
            clientdomain = arr.join(".");
            if (arr == 'com') {
                clientdomain = window.location.host;
            }
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            expires = "expires=" + d.toUTCString();
            document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
        } else {
            arr.shift();
            clientdomain = arr.join(".");
            if (arr == 'com') {
                clientdomain = window.location.host;
            }
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            expires = "expires=" + d.toUTCString();
            document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
        }
        INC.config.ivid = ivid;
        return ivid;
    }

    document.onclick = clickListener;

    function clickListener(e) {
        var clickedElement = e.target;

        if (clickedElement != null) {
            if (typeof clickedElement.className == 'object') {
                return
            }
            try {
                if (clickedElement.className == "inc_product_modal_block inc_active") {
                    document.querySelector('body').classList.remove('inc_popup_open');
                    if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                        document.querySelector('html').classList.remove('inc_overlay');
                        document.querySelector('html').classList.remove('inc_popup_open');
                    }
                    if (inc_scroll_height > 100) {
                        window.scrollTo(0, inc_scroll_height);
                    }
                    clickedElement.querySelector('.inc_product_header_title_block').classList.add('inc_active');
                    clickedElement.querySelector('.inc_product_header_title_block_1').classList.remove('inc_active');
                    clickedElement.classList.remove('inc_active')

                }

                if (clickedElement.classList.contains('quick_view_open') == trueflag) {
                    if (document.querySelector('.inc_details_mobile_quick_view.quick_view_active') != null) {
                        document.querySelector('.inc_details_mobile_quick_view.quick_view_active .prod_quick_view_close').click()
                    }
                }
                if (clickedElement.className == "inc_empty_popup") {
                    if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                        document.querySelector('html').classList.remove('inc_overlay')
                        document.querySelector('html').classList.remove('inc_popup_open');
                    }
                    if (clickedElement.parentNode.querySelector('.inc_product_desc_att_block').classList.contains('inc_active')) {
                        clickedElement.parentNode.querySelector('.inc_product_desc_att_block').classList.remove('inc_active')
                    }
                }
                if (clickedElement.className == 'inc_product_block configurable show_overlay' || clickedElement.className == 'inc_product_block configurable inc_other_noimage show_overlay') {
                    if (clickedElement.parentNode.querySelector('.inc_product_desc_att_block').classList.contains('inc_active')) {
                        clickedElement.parentNode.querySelector('.inc_product_desc_att_block').classList.remove('inc_active')
                        document.querySelector('html').classList.remove('inc_overlay');
                        document.querySelector('body').style.position = "relative"
                        document.querySelector('body').style.overflow = "auto"
                        document.querySelector('.inc_product_block.configurable.show_overlay').classList.remove('show_overlay')
                    }
                }
                if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                    if (clickedElement.parentNode.classList == "inc_product_desc_att_color_list_item_img" || clickedElement.classList == "inc_product_desc_att_color_list_item_img" || clickedElement.parentNode.classList == "inc_product_desc_att_zero_list_block" || clickedElement.classList == "inc_product_desc_att_zero_list_block") {
                        if (document.querySelector('.inc_product_desc_att_block .show_dropdown') != null) {
                            document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
                        }
                    }
                }
                // Update Variant

                if (clickedElement != null) {
                    if (clickedElement.classList == "inc_product_desc_add_img" && document.querySelector('.inc_product_modal_block .inc_product_desc_att_block .show_dropdown') != null) {
                        if (window.innerWidth > 2000) {
                            document.querySelector('.inc_product_modal_block .inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown');
                        }
                    }
                    if (clickedElement.className == "inc_product_header_img") {
                        document.querySelector('.inc_product_header_title_block').classList.add('inc_active');
                        document.querySelector('.inc_product_header_title_block_1').classList.remove('inc_active');
                        document.querySelector('body').classList.remove('inc_popup_open');
                    }

                    if (clickedElement.className == "sidebar_outer sidebar_outer_active") {
                        // if (document.querySelector('.inc_header_continue_img') != null) {
                        //     document.querySelector('.inc_header_continue_img').click()
                        // }
                        INC.methods.hideSidebar()
                    }
                    if (clickedElement.className == 'close_modal_inc') {

                        if (clickedElement.parentElement.className == 'inc_product_modal_block inc_active') {
                            clickedElement.parentElement.classList.remove('inc_active')

                        } else {
                            INC.methods.hideSidebar()
                        }
                    }
                    if (clickedElement.className == "inc_pdp_bundle_cart_overlay_block active") {
                        document.querySelector('.inc_pdp_bundle_cart_title_img_block').click()
                    }
                    if (clickedElement.className == "inc_promo_popup inc_active") {
                        document.querySelector('html').classList.remove('inc_overlay_promo');
                        clickedElement.classList.remove('inc_active')
                        if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                            document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
                        }
                    }
                    if (clickedElement.parentNode != null) {
                        if (clickedElement.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_color_title_text_selected" && clickedElement.parentNode.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_zero_title_text" && clickedElement.className != "inc_product_desc_add_block" && clickedElement.className != "inc_product_desc_add_text" && clickedElement.className != "img_color_swatch" && clickedElement.className != "inc_product_desc_att_zero_title_text_selected" && clickedElement.classList.contains('inc_product_desc_att_color_list_item_img') != trueflag && clickedElement.classList.contains('inc_product_desc_att_zero_title_text_selected') != trueflag && clickedElement.classList.contains('inc_product_desc_att_size_title_text_selected') != trueflag && clickedElement.className != 'inc_product_desc_att_third_title_text_selected' && clickedElement.className != 'inc_product_desc_att_size_title_text_selected' && clickedElement.className != 'inc_product_desc_att_third_title_text_selected') {
                            if (document.querySelector('.inc_product_desc_att_block .show_dropdown') != null) {
                                document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
                            }
                        }

                        if (clickedElement.className == "inc_product_desc_color_list_mobile_overlay_block" || clickedElement.className == "inc_product_desc_color_list_header_img" || clickedElement.className == "inc_product_desc_colour_list_add_btn" || clickedElement.className == "inc_product_desc_att_zero_list_mobile_overlay_block" || clickedElement.className == "inc_product_desc_att_zero_list_header_img" || clickedElement.className == "inc_product_desc_att_zero_list_add_btn") {
                            if (window.innerWidth < 798) {
                                document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
                                document.querySelector('html').classList.remove('inc_overlay');
                                document.querySelector('body').classList.remove('inc_popup_open');
                            }

                        }
                    }

                    if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active') == null) {
                        if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                            if (document.querySelector('.inc_cart_added_product_block.remove_product_conf_modal') == null) {
                                if (document.querySelector('.inc_promo_popup.inc_active') == null) {
                                    document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
                                }
                            }
                        }
                    } else if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block .inc_product_modal_block.inc_active') != null) {
                        document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block').classList.add('overflow_visible')

                        //document.querySelector('body').classList.add('inc_popup_open');
                    }
                    if (clickedElement.className != 'inc_product_block configurable inc_other_noimage show_overlay' && clickedElement.className != 'inc_product_desc_att_zero_title_text_block' && clickedElement.className != "inc_product_details_prod_block" && clickedElement.className != "inc_product_variant_simple_block" && clickedElement.className != "inc_product_variant_simple_text config" && clickedElement.className != "inc_product_desc_variant_popup_close_block" && clickedElement.className != "inc_product_desc_add_title_text_block" && clickedElement.tagName != "SELECT" && clickedElement.className != "inc_product_header_block active" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block active" && clickedElement.className != "inc_product_desc_att_block attributes_avail active" && clickedElement.className != "inc_product_qty_block active" && clickedElement.tagName != "LABEL" && clickedElement.tagName != "INPUT" && clickedElement.className != "inc_product_qty_block" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block" && clickedElement.className != "inc_product_header_block" && clickedElement.className != "select_option_inc_title" && clickedElement.className != "inc_product_desc_att_color_list_item_img" && clickedElement.className != "inc_product_desc_att_color_title_text" && clickedElement.className != "inc_product_desc_att_color_list_block" && clickedElement.classList.contains('inc_product_desc_att_block') == falseflag && clickedElement.className != "select_option_inc_block" && clickedElement.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_variant_text" && clickedElement.className != "inc_product_desc_add_img" && clickedElement.className != "inc_product_qty_up_btn" && clickedElement.className != "inc_product_qty_down_btn" && clickedElement.className != 'variant_span') {
                        if (clickedElement.classList != undefined) {
                            if (clickedElement.classList.contains('variantoption') == falseflag && clickedElement.classList.contains('inc_product_desc_att_size_list_item_img_block') == falseflag && clickedElement.classList.contains('inc_product_desc_att_color_list_block') == falseflag && clickedElement.className != "inc_product_desc_add_img checked" && clickedElement.classList.contains('inc_product_desc_add_block') == falseflag && clickedElement.classList.contains('inc_pdp_bundle_cart_added_product_edit_img') == falseflag && clickedElement.className != "inc_product_desc_att_color_title_block" && clickedElement.className != "inc_product_desc_qty_up_btn" && clickedElement.className != "inc_product_desc_qty_down_btn" && clickedElement.classList.contains('inc_product_desc_att_color_block') == falseflag && clickedElement.classList.contains('inc_product_desc_att_color_list_item_block') == falseflag && clickedElement.classList.contains('inc_product_desc_att_zero_title_text_selected') == falseflag && clickedElement.classList.contains('inc_product_desc_att_zero_title_text') == falseflag && clickedElement.classList.contains('inc_product_desc_att_size_list_item_img') == falseflag && clickedElement.classList.contains('inc_product_desc_att_color_list_item_img') != trueflag && clickedElement.className != 'inc_product_desc_att_size_title_text_selected' && clickedElement.className != 'inc_product_desc_att_third_title_text_selected') {
                                if (document.querySelector('.inc_product_desc_att_block') != null) { // if (document.querySelector('.inc_product_desc_att_block').classList.contains('moreThanOne') == falseflag) {
                                    //     var allact = document.querySelectorAll('.inc_product_desc_att_block.inc_active')

                                    //     if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                                    //         document.querySelector('html').classList.remove('inc_overlay');
                                    //         document.querySelector('body').classList.remove('inc_popup_open');
                                    //     }
                                    //     for (var actelm in allact) {
                                    //         if (allact[actelm] != null && Object.prototype.hasOwnProperty.call(allact, actelm)) {
                                    //             allact[actelm].classList.remove('inc_active')
                                    //         }
                                    //     }

                                    //     if (document.querySelector('.inc_product_block.show_overlay') != null) {
                                    //         document.querySelector('.inc_product_block.show_overlay').classList.remove('show_overlay')
                                    //     }
                                    // }
                                }
                            }
                        }
                    }

                    if (INC.config.pageType == "pdp") {

                        /*autoselection*/
                        if (clickedElement.parentNode != null) {
                            if (clickedElement.parentNode.classList != undefined) {
                                if (clickedElement.classList.contains('swatch-option') == trueflag || clickedElement.classList.contains('image') == trueflag || clickedElement.parentNode.classList.contains('image') == trueflag || clickedElement.classList.contains('product-custom-option')) {
                                    var click_textsel = clickedElement.getAttribute('data-option-label')
                                    if (clickedElement.classList.contains('image') == trueflag || clickedElement.parentNode.classList.contains('image') == trueflag) {
                                        click_textsel = clickedElement.parentNode.parentNode.innerText;
                                        if (clickedElement.getAttribute('data-option-label') != undefined) {
                                            click_textsel = clickedElement.getAttribute('data-option-label')
                                        }
                                    }
                                    if (click_textsel != undefined) {
                                        click_textsel = click_textsel.trim().toLocaleLowerCase()
                                    }
                                    autoselect_(click_textsel)
                                }
                            }
                        }
                        setTimeout(function () {
                            window.jQuery('.control #select_33').on('change', function () {
                                if (document.querySelector('select[name="options[33]"]') != null) {
                                    var selvar = document.querySelector('select[name="options[33]"]');
                                    var textsel_4 = selvar.options[selvar.selectedIndex].textContent.trim().toLocaleLowerCase() + "sel_33";
                                    autoselect_(textsel_4)
                                }
                            })

                            window.jQuery('.control #select_34').on('change', function () {

                                if (document.querySelector('select[name="options[34]"]') != null) {
                                    var selvar = document.querySelector('select[name="options[34]"]');
                                    var textsel_21 = selvar.options[selvar.selectedIndex].textContent.trim().toLocaleLowerCase() + "sel_34";
                                    autoselect_(textsel_21)
                                }
                            })

                            window.jQuery('.control #select_35').on('change', function () {

                                if (document.querySelector('select[name="options[35]"]') != null) {
                                    var selvar = document.querySelector('select[name="options[35]"]');
                                    var selt11 = selvar.options[selvar.selectedIndex].textContent.trim().toLocaleLowerCase() + "sel_35";
                                    autoselect_(selt11)
                                }
                            })

                            window.jQuery('.control #select_60').on('change', function () {
                                if (document.querySelector('select[name="options[60]"]') != null) {
                                    var selvar = document.querySelector('select[name="options[60]"]');
                                    var selt_ = selvar.options[selvar.selectedIndex].textContent.trim().toLocaleLowerCase();
                                    autoselect_(selt_)
                                }
                            })

                            window.jQuery('.control #select_187').on('change', function () {
                                if (document.querySelector('select[name="options[187]"]') != null) {
                                    var selvar = document.querySelector('select[name="options[187]"]');
                                    var selt = selvar.options[selvar.selectedIndex].textContent.trim().toLocaleLowerCase();
                                    autoselect_(selt)
                                }
                            })

                            window.jQuery('.control #select_163').on('change', function () {
                                if (document.querySelector('select[name="options[163]"]') != null) {
                                    var selvar = document.querySelector('select[name="options[163]"]');
                                    var textsel_11 = selvar.options[selvar.selectedIndex].textContent.trim().toLocaleLowerCase();
                                    autoselect_(textsel_11)
                                }
                            })

                            window.jQuery('.control #select_127').on('change', function () {
                                if (document.querySelector('select[name="options[127]"]') != null) {
                                    var selvar = document.querySelector('select[name="options[127]"]');
                                    var textsel_1 = selvar.options[selvar.selectedIndex].textContent.trim().toLocaleLowerCase();
                                    autoselect_(textsel_1)
                                }
                            })

                            window.jQuery('.control #select_66').on('change', function () {
                                if (document.querySelector('select[name="options[66]"]') != null) {
                                    var selvar = document.querySelector('select[name="options[66]"]');
                                    var textsel22 = selvar.options[selvar.selectedIndex].textContent.trim().toLocaleLowerCase();
                                    autoselect_(textsel22)
                                }
                            })
                            window.jQuery('.product-options-wrapper .control select').on('change', function () {
                                if (document.querySelector('.product-options-wrapper .control select') != null) {
                                    var selvar = document.querySelector('.product-options-wrapper .control select');
                                    var textsel22_ = selvar.options[selvar.selectedIndex].textContent.trim().toLocaleLowerCase();
                                    autoselect_(textsel22_)
                                }
                            })
                            window.jQuery('.control #select_90').on('change', function () {
                                if (document.querySelector('select[name="options[90]"]') != null) {
                                    var selvar = document.querySelector('select[name="options[90]"]');
                                    var textsel2 = selvar.options[selvar.selectedIndex].textContent.trim().toLocaleLowerCase();
                                    autoselect_(textsel2)
                                }
                            })

                            window.jQuery('.control #select_269').on('change', function () {
                                if (document.querySelector('select[name="options[269]"]') != null) {
                                    var selvar = document.querySelector('select[name="options[269]"]');
                                    var textsel12 = selvar.options[selvar.selectedIndex].textContent.trim().toLocaleLowerCase();
                                    autoselect_(textsel12)
                                }
                            })

                            window.jQuery('.control #select_164').on('change', function () {
                                if (document.querySelector('select[name="options[164]"]') != null) {
                                    var selvar = document.querySelector('select[name="options[164]"]');
                                    var textsel1 = selvar.options[selvar.selectedIndex].textContent.trim().toLocaleLowerCase();
                                    autoselect_(textsel1)
                                }
                            })

                            window.jQuery('.control #select_100').on('change', function () {
                                if (document.querySelector('select[name="options[100]"]') != null) {
                                    var selvar = document.querySelector('select[name="options[100]"]');
                                    var textsel__ = selvar.options[selvar.selectedIndex].textContent.trim().toLocaleLowerCase();
                                    autoselect_(textsel__)
                                }
                            })
                        }, 5000)

                        if (clickedElement.classList.contains('pdp-link-thumb')) {

                            clientButtonCheck()
                        }

                    }
                    if (clickedElement.classList.contains('remove_link') == trueflag && INC.config.pageType == "cartPage") {
                        setTimeout(function () {
                            if (document.querySelector('.cart-item.product') != null) {
                                INC.clientConfig.offset = 0;
                                INC.clientConfig.slidevalue = 0;
                                INC.init();
                            }
                        }, 2000)
                    }
                }
                setTimeout(function () {
                    var inc_prod_img1 = document.querySelector('.inc_product_modal_block.inc_active .inc_product_img_main_img img')
                    if (inc_prod_img1) {
                        inc_prod_img1.setAttribute('style', INC.config.styleft)
                    }
                }, 2000)
            } catch (err) {
                var formData = new FormData();
                formData.append("EmailId", "shashi@increasingly.com");
                formData.append("Subject", 'JS Error on Conranshop');
                formData.append("Message", err + 'Error Stack' + err.stack);
                var xhr = new XMLHttpRequest();
                xhr.open("POST", '//api.increasingly.co/SendEmail', trueflag);
                xhr.send(formData);
                throw err;
            }
        }
    }

    function autoselect_(textsel) {
        setTimeout(function () {
            if (textsel == null) {
                if (document.querySelector('select[name="options[33]"]') != null) {
                    var selvar = document.querySelector('select[name="options[33]"]');
                    textsel = selvar.options[selvar.selectedIndex].innerText.trim().toLocaleLowerCase();
                }
            }
            var all_list_el = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_showcase_block')
            for (var alistel in all_list_el) {
                if (all_list_el[alistel] != null && Object.prototype.hasOwnProperty.call(all_list_el, alistel)) {
                    if (all_list_el[alistel].querySelector('.inc_product_desc_att_zero_block.inc_active') != null) {
                        if (all_list_el[alistel].querySelector('.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' + textsel + '"] div') != undefined) {
                            all_list_el[alistel].querySelector('.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' + textsel + '"] div').click()
                        }
                        if (all_list_el[alistel].querySelector('.inc_product_desc_att_color_block.inc_active') != null) {
                            if (all_list_el[alistel].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + textsel + '"] div') != undefined) {
                                all_list_el[alistel].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + textsel + '"]').click()
                            }
                        }
                    }
                    if (textsel != null) {
                        if (textsel.indexOf('sel_35') < 0) {
                            if (all_list_el[alistel].querySelector('.inc_product_desc_att_size_block.inc_active') != null) {
                                textsel = textsel.replace('sel_34', '').trim()
                                if (all_list_el[alistel].querySelector('.inc_product_desc_att_size_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' + textsel + '"] div') != undefined) {
                                    all_list_el[alistel].querySelector('.inc_product_desc_att_size_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' + textsel + '"] div').click()
                                }
                                textsel = textsel + 'sel_34'
                            }
                        }
                        if (textsel.indexOf('sel_34') < 0) {
                            if (all_list_el[alistel].querySelector('.inc_product_desc_att_third_block.inc_active') != null) {
                                textsel = textsel.replace('sel_35', '').trim()
                                if (all_list_el[alistel].querySelector('.inc_product_desc_att_third_block.inc_active .inc_product_desc_att_third_list_item_img_block[datasize="' + textsel + '"] div') != undefined) {
                                    all_list_el[alistel].querySelector('.inc_product_desc_att_third_block.inc_active .inc_product_desc_att_third_list_item_img_block[datasize="' + textsel + '"] div').click()
                                }
                            }
                        }
                    }
                    if (all_list_el[alistel].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolorfabric="' + textsel + '"] div') != null) {
                        all_list_el[alistel].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolorfabric="' + textsel + '"] div').click()
                    }
                    if (all_list_el[alistel].querySelector('.inc_product_desc_att_color_block.inc_active') != null) {
                        if (all_list_el[alistel].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + textsel + '"] div') != undefined) {
                            all_list_el[alistel].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + textsel + '"]').click()
                        }
                    }
                }
            }
        }, 500)
        if (document.querySelector('.product-info-main .product-info-stock-sku .stock.unavailable') != null || document.querySelector('.swatch-attribute-selected-option.unavailable') != null) {
            if (document.querySelector('.inc_pdp_block') != null) {
                document.querySelector('.inc_pdp_block').style.display = "none"
                if (document.querySelector('.inc_bundle_avail_block') != null) {
                    document.querySelector('.inc_bundle_avail_block').setAttribute('style', 'display: none !important')
                }
            }
        } else {
            if (document.querySelector('.inc_pdp_block') != null) {
                document.querySelector('.inc_pdp_block').style.display = "block"

                if (document.querySelector('.inc_bundle_avail_block') != null) {
                    document.querySelector('.inc_bundle_avail_block').style.display = "block"
                }
            }
        }
    }
    setTimeout(function () {
        if (window.innerWidth < 798) {
            window.addEventListener("orientationchange", function () {
                if (window.matchMedia("(orientation: portrait)").matches) {
                    console.log("PORTRAIT")
                    INC.config.deviceMode = "PORTRAIT"
                    var inc_pdp_block_rem = document.querySelector(".inc_pdp_block");
                    if (inc_pdp_block_rem != null) {
                        inc_pdp_block_rem.parentNode.removeChild(inc_pdp_block_rem);
                    }
                    onloadpdp = false
                    var sidebar_rem = document.querySelector(".inc_sidebar_modal_block");
                    if (sidebar_rem != null) {
                        sidebar_rem.parentNode.removeChild(sidebar_rem);
                    }
                    var over_rem = document.querySelector(".inc_sidebar_overlay_block");
                    if (over_rem != null) {
                        over_rem.parentNode.removeChild(over_rem);
                    }
                    setTimeout(function () {
                        INC.init();
                    }, 0)

                }
                if (window.matchMedia("(orientation: landscape)").matches) {
                    console.log("LANSCAPE")
                    INC.config.deviceMode = "LANSCAPE";
                    onloadpdp = false
                    var inc_pdp_block_remove = document.querySelector(".inc_pdp_block");
                    if (inc_pdp_block_remove != null) {
                        inc_pdp_block_remove.parentNode.removeChild(inc_pdp_block_remove);
                    }
                    var sidebar_remove = document.querySelector(".inc_sidebar_modal_block");
                    if (sidebar_remove != null) {
                        sidebar_remove.parentNode.removeChild(sidebar_remove);
                    }
                    var over_remove = document.querySelector(".inc_sidebar_overlay_block");
                    if (over_remove != null) {
                        over_remove.parentNode.removeChild(over_remove);
                    }
                    setTimeout(function () {
                        INC.init();
                    }, 10)
                }
            }, {
                passive: true
            });
            document.addEventListener("touchmove", checkScrollDirection, false);
        }

        function checkScrollDirection() {
            if (inc_isOnScreen(window.jQuery('.inc_pdp_block'))) {
                if (document.querySelector('.inc_pdp_block') != null) {
                    if (document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1] != null) {
                        document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1].style.display = "none";
                    }
                }
            } else {
                if (document.querySelector('.inc_pdp_block') != null) {
                    if (document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1] != null) {
                        document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1].style.display = "block"
                    }
                }
            }
        }
        window.addEventListener('resize', function () {
            if (document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_main_block') != null) {
                document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_main_block').setAttribute("style", "margin-left:0");
                var prd_length = 2
                if (window.innerWidth > 1268) {
                    prd_length = 3
                }
                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > prd_length && document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_left-btn_block') != null) {
                    document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_right-btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                } else {
                    document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: none;opacity:0");
                    document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_right-btn_block').setAttribute("style", "pointer-events: auto;opacity:0");
                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0')
                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:0')
                }
                INC.clientConfig.slidevalue = 0
                INC.clientConfig.offset = 0
                INC.clientConfig.slidevalue = 0
            }
        }, {
            passive: true
        })
    }, 3000)

    function inc_isOnScreen(elem) {
        if (elem.length == 0) {
            return;
        }
        var $window = window.jQuery(window)
        var viewport_top = $window.scrollTop()
        var viewport_height = $window.height()
        var viewport_bottom = viewport_top + viewport_height
        var $elem = window.jQuery(elem)
        var top = $elem.offset().top
        var height = $elem.height()
        var bottom = top + height
        return (top >= viewport_top && top < viewport_bottom) || (bottom > viewport_top && bottom <= viewport_bottom) || (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    }

    function slideTo(_id, _n, elm, type_of, arrow, scroll) {
        if (elm.className == "left_arrow" || elm.className == "left_arrow inc_active" || type_of == "left") {
            var nn2 = -1
            var indslid = INC.config.inc_slideIndex += nn2
            inc_showSlides(indslid, nn2, elm, type_of, arrow, scroll);
        } else {
            var nn1 = 1
            var indslid1 = INC.config.inc_slideIndex += nn1
            inc_showSlides(indslid1, nn1, elm, type_of, arrow, scroll);
        }
    }

    function inc_showSlides(n, _ind, elm, _type_of, arrow, scroll) {
        var showcase_other_img_list = elm.querySelector('.inc_product_showcase_block .inc_product_img_main_img a')
        var showcase_dots = elm.querySelectorAll('.inc_product_showcase_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')
        var modal_dots = elm.querySelectorAll('.inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')

        var showcase_other_img = elm.querySelector('.inc_product_showcase_block .inc_product_img_main_img a img')

        var modal_other_img = elm.querySelector('.inc_product_modal_block .inc_product_img_main_img a img')

        var otherImg_list = showcase_other_img_list.getAttribute('otherImageList');
        var additional_img = []
        additional_img = otherImg_list.split(',');
        var get_org_img = showcase_other_img_list.getAttribute('imageURL')
        if (n > additional_img.length) {
            INC.config.inc_slideIndex = 1
        }
        if (n < 1) {
            INC.config.inc_slideIndex = additional_img.length
        }


        for (var im = 0; im < showcase_dots.length; im++) {
            showcase_dots[im].classList.remove('inc_active')
            if (modal_dots[im] != undefined) {
                modal_dots[im].classList.remove('inc_active')
            }
        }
        var img_src = additional_img[INC.config.inc_slideIndex - 1].replace('160x90', '2000x1500');
        let totalImages = elm.querySelector('.inc_product_img_pagination_block').innerText.split('/')[1]
        elm.querySelector('.inc_product_img_pagination_block').innerText = INC.config.inc_slideIndex + "/" + totalImages
        let totalStop = totalImages - 3


        if (img_src != "null") {
            showcase_other_img.setAttribute('src', img_src);
            modal_other_img.setAttribute('src', img_src)
            showcase_other_img.setAttribute('onerror', "this.src='" + get_org_img + "'");
            modal_other_img.setAttribute('onerror', "this.src='" + get_org_img + "'");

            for (var r = 0; r < showcase_dots.length; r++) {
                showcase_dots[r].classList.remove('inc_active');
                modal_dots[r].classList.remove('inc_active');
            }
            if (showcase_dots[INC.config.inc_slideIndex - 1] != null) {
                showcase_dots[INC.config.inc_slideIndex - 1].classList.add('inc_active');
            }
            if (modal_dots[INC.config.inc_slideIndex - 1] != null) {
                modal_dots[INC.config.inc_slideIndex - 1].classList.add('inc_active');
            }

            if (arrow == "arrow") {
                if (modal_dots.length > 6) {
                    var activedots = elm.querySelector('.inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block.inc_active')
                    if (activedots != null) {

                        var actind = activedots.getAttribute('index')

                        if (window.innerWidth > 800) {


                            if (actind == totalImages - 1) {
                                if (totalImages > 8) {
                                    elm.querySelector('.inc_product_modal_block .inc_product_img_gallery_right_block.scroll_down').style.display = "none"
                                }
                            } else {
                                if (totalImages > 8) {
                                    elm.querySelector('.inc_product_modal_block .inc_product_img_gallery_right_block.scroll_down').style.display = "block"
                                }
                            }

                            if (actind == 1 && totalImages > 8) {

                                elm.querySelector('.inc_product_modal_block .inc_product_img_gallery_left_block.scroll_up').style.display = "block"
                            }
                            if (actind == 0) {
                                if (totalImages > 8) {
                                    elm.querySelector('.inc_product_modal_block .inc_product_img_gallery_left_block.scroll_up').style.display = "none"
                                }
                            }
                            if (actind >= totalStop) {
                                return
                            }
                        }


                        if (actind == 5) {
                            if (modal_dots.length >= 6) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 6) {
                            if (modal_dots.length >= 7) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 7) {
                            if (modal_dots.length >= 8) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 8) {
                            if (modal_dots.length >= 9) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 9) {
                            if (modal_dots.length >= 10) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                                modal_dots[4].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 10) {
                            if (modal_dots.length >= 11) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                                modal_dots[4].setAttribute('style', 'display: none !important;')
                                modal_dots[5].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 11) {
                            if (modal_dots.length >= 12) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                                modal_dots[4].setAttribute('style', 'display: none !important;')
                                modal_dots[5].setAttribute('style', 'display: none !important;')
                                modal_dots[6].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 12) {
                            if (modal_dots.length >= 13) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                                modal_dots[4].setAttribute('style', 'display: none !important;')
                                modal_dots[5].setAttribute('style', 'display: none !important;')
                                modal_dots[6].setAttribute('style', 'display: none !important;')
                                modal_dots[7].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 13) {
                            if (modal_dots.length >= 14) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                                modal_dots[4].setAttribute('style', 'display: none !important;')
                                modal_dots[5].setAttribute('style', 'display: none !important;')
                                modal_dots[6].setAttribute('style', 'display: none !important;')
                                modal_dots[7].setAttribute('style', 'display: none !important;')
                                modal_dots[8].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 14) {
                            if (modal_dots.length >= 15) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                                modal_dots[4].setAttribute('style', 'display: none !important;')
                                modal_dots[5].setAttribute('style', 'display: none !important;')
                                modal_dots[6].setAttribute('style', 'display: none !important;')
                                modal_dots[7].setAttribute('style', 'display: none !important;')
                                modal_dots[8].setAttribute('style', 'display: none !important;')
                                modal_dots[9].setAttribute('style', 'display: none !important;')

                            }
                        } else if (actind == 15) {
                            if (modal_dots.length >= 16) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                                modal_dots[4].setAttribute('style', 'display: none !important;')
                                modal_dots[5].setAttribute('style', 'display: none !important;')
                                modal_dots[6].setAttribute('style', 'display: none !important;')
                                modal_dots[7].setAttribute('style', 'display: none !important;')
                                modal_dots[8].setAttribute('style', 'display: none !important;')
                                modal_dots[9].setAttribute('style', 'display: none !important;')
                                modal_dots[10].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 16) {
                            if (modal_dots.length >= 17) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                                modal_dots[4].setAttribute('style', 'display: none !important;')
                                modal_dots[5].setAttribute('style', 'display: none !important;')
                                modal_dots[6].setAttribute('style', 'display: none !important;')
                                modal_dots[7].setAttribute('style', 'display: none !important;')
                                modal_dots[8].setAttribute('style', 'display: none !important;')
                                modal_dots[9].setAttribute('style', 'display: none !important;')
                                modal_dots[10].setAttribute('style', 'display: none !important;')
                                modal_dots[11].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 17) {
                            if (modal_dots.length >= 18) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                                modal_dots[4].setAttribute('style', 'display: none !important;')
                                modal_dots[5].setAttribute('style', 'display: none !important;')
                                modal_dots[6].setAttribute('style', 'display: none !important;')
                                modal_dots[7].setAttribute('style', 'display: none !important;')
                                modal_dots[8].setAttribute('style', 'display: none !important;')
                                modal_dots[9].setAttribute('style', 'display: none !important;')
                                modal_dots[10].setAttribute('style', 'display: none !important;')
                                modal_dots[11].setAttribute('style', 'display: none !important;')
                                modal_dots[12].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 18) {
                            if (modal_dots.length >= 19) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                                modal_dots[4].setAttribute('style', 'display: none !important;')
                                modal_dots[5].setAttribute('style', 'display: none !important;')
                                modal_dots[6].setAttribute('style', 'display: none !important;')
                                modal_dots[7].setAttribute('style', 'display: none !important;')
                                modal_dots[8].setAttribute('style', 'display: none !important;')
                                modal_dots[9].setAttribute('style', 'display: none !important;')
                                modal_dots[10].setAttribute('style', 'display: none !important;')
                                modal_dots[11].setAttribute('style', 'display: none !important;')
                                modal_dots[12].setAttribute('style', 'display: none !important;')
                                modal_dots[13].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 19) {
                            if (modal_dots.length >= 20) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                                modal_dots[4].setAttribute('style', 'display: none !important;')
                                modal_dots[5].setAttribute('style', 'display: none !important;')
                                modal_dots[6].setAttribute('style', 'display: none !important;')
                                modal_dots[7].setAttribute('style', 'display: none !important;')
                                modal_dots[8].setAttribute('style', 'display: none !important;')
                                modal_dots[9].setAttribute('style', 'display: none !important;')
                                modal_dots[10].setAttribute('style', 'display: none !important;')
                                modal_dots[11].setAttribute('style', 'display: none !important;')
                                modal_dots[12].setAttribute('style', 'display: none !important;')
                                modal_dots[13].setAttribute('style', 'display: none !important;')
                                modal_dots[14].setAttribute('style', 'display: none !important;')
                            }
                        } else {
                            modal_dots[0].style.display = "flex"
                            modal_dots[1].style.display = "flex"
                            modal_dots[2].style.display = "flex"
                            modal_dots[3].style.display = "flex"
                            if (modal_dots[4] != undefined) {
                                modal_dots[4].style.display = "flex"
                            }
                            if (modal_dots[5] != undefined) {
                                modal_dots[5].style.display = "flex"
                            }
                            if (modal_dots[6] != undefined) {
                                modal_dots[6].style.display = "flex"
                            }
                        }
                        // }
                    }
                }
            }
        }
    }
    // SWIPE FEATURE
    var xDown = null;
    var yDown = null;

    function add_swipe(element) {
        element.addEventListener('touchstart', handleTouchStart, {
            passive: true
        });
        element.addEventListener('touchmove', handleTouchMove, {
            passive: true
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
        if (Math.abs(xDiff) + Math.abs(yDiff) > 150 || Math.abs(xDiff) + Math.abs(yDiff) < 150) {
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                /*most significant*/
                if (xDiff > 0) {
                    prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    slideTo(null, 0, prod_card, "left")
                } else {
                    /* right swipe */
                    prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    slideTo(null, 0, prod_card, "right")
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
    }



    function cb_tc(bundle_response) {
        var bundles_tc = bundle_response.Bundles;
        var bundleproductarrayTC = {}
        var pdpProductId = ""
        if (bundle_response.ProductsDetail != null) {
            for (var prdetails in bundle_response.ProductsDetail) {
                bundleproductarrayTC[bundle_response.ProductsDetail[prdetails].ProductId] = bundle_response.ProductsDetail[prdetails]
            }
        } else if (bundle_response.ProductsDetail == null || bundle_response.ProductsDetail == "null") {
            for (var c in bundle_response.CategoryRecommendations) {
                bundleproductarrayTC[bundle_response.CategoryRecommendations[c].ProductId] = bundle_response.CategoryRecommendations[c]
            }
        }
        var bundle_count = bundles_tc.length
        for (var i = 0; i < bundle_count; i++) {
            if (INC.config.dupDataObjectProducts.indexOf(bundles_tc[i].BundleId) == -1) {
                INC.config.dupDataObjectProducts.push(bundles_tc[i].BundleId)
                var irbBundleObj = bundles_tc[i];
                var bundleObj = {};
                bundleObj.id = irbBundleObj["BundleId"];
                if (INC.config.recommendation == falseflag) {
                    bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                    bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                    bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                    bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                    bundleObj.productCount = irbBundleObj["ProductCount"];
                }
                var irbProductsArray = irbBundleObj["ProductIds"]
                if (irbProductsArray.length) {
                    if (INC.dataStore.bundleProductsArray != undefined) {
                        pdpProductId = irbProductsArray[0];
                        INC.dataStore.bundleProductsArray.push(irbProductsArray[1]);
                    }
                }
                var setTypeatt = false;
                var clrflg = false;
                var clrcount = 0
                for (var irbprdarray in irbProductsArray) {
                    if (Object.prototype.hasOwnProperty.call(irbProductsArray, irbprdarray)) {
                        var product = bundleproductarrayTC[irbProductsArray[irbprdarray]]
                        if (INC.config.datastoreprod.indexOf(product.ProductId) == -1) {
                            INC.config.datastoreprod.push(product.ProductId)
                            var pAttributes = product["Attributes"] || "";

                            var clrcount = 0
                            var clrflg = false;
                            var setTypeatt = false;
                            let comboTypes = []
                            if (pAttributes != null) {

                                if (pAttributes[0] != undefined) {


                                    if (pAttributes[0] != undefined) {
                                        if (pAttributes[0].attributeCode != undefined) {
                                            comboTypes.push(pAttributes[0].attributeCode)
                                            if (pAttributes[0].attributeCode.indexOf('empty_header') >= 0) {
                                                setTypeatt = true
                                            }
                                        }
                                    }
                                    if (pAttributes[1] != undefined) {
                                        if (pAttributes[1].attributeCode != undefined) {
                                            comboTypes.push(pAttributes[1].attributeCode)
                                            if (pAttributes[1].attributeCode.indexOf('empty_header') >= 0) {
                                                setTypeatt = true
                                            }
                                        }
                                    }
                                    if (pAttributes[2] != undefined) {
                                        if (pAttributes[2].attributeCode != undefined) {
                                            comboTypes.push(pAttributes[2].attributeCode)
                                            if (pAttributes[2].attributeCode.indexOf('empty_header') >= 0) {
                                                setTypeatt = true
                                            }
                                        }
                                    }
                                    if (pAttributes[3] != undefined) {
                                        if (pAttributes[3].attributeCode != undefined) {
                                            comboTypes.push(pAttributes[3].attributeCode)
                                            if (pAttributes[3].attributeCode.indexOf('empty_header') >= 0) {
                                                setTypeatt = true
                                            }
                                        }
                                    }

                                    if (comboTypes.includes('Diameter')) {
                                        setTypeatt = true
                                    }
                                    if (comboTypes.includes('Set Size')) {
                                        setTypeatt = true
                                    }
                                    if (comboTypes.includes('Height') && comboTypes.includes('Length') && comboTypes.includes('Width')) {
                                        setTypeatt = true
                                    }
                                }
                            }
                            var newattribute = []
                            if (setTypeatt == trueflag) {
                                var fabricvariants = [];
                                var fabricattributes = [];
                                pAttributes[0].attributeValues[0].headers = []


                                for (var pm in pAttributes) {
                                    if (Object.prototype.hasOwnProperty.call(pAttributes, pm)) {
                                        if (pm != 10) {
                                            var atvalues = pAttributes[pm].attributeValues;

                                            for (var vS in atvalues) {


                                                atvalues = atvalues.sort(dynamicSort('childProductId'))
                                                if (Object.prototype.hasOwnProperty.call(atvalues, vS)) {
                                                    if (pAttributes[0].attributeValues[vS].childProductId == atvalues[vS].childProductId) {

                                                        if (pm == 1) {
                                                            pAttributes[0].attributeValues[vS].option_text = atvalues[vS].optionText + "_" + pAttributes[pm].attributeCode + "_ " + vS
                                                        } else {
                                                            pAttributes[0].attributeValues[vS].option_text1 = atvalues[vS].optionText + "_" + pAttributes[pm].attributeCode + "_" + vS
                                                            pAttributes[0].attributeValues[0].headers
                                                        }
                                                        if (pm == 2) {
                                                            pAttributes[0].attributeValues[vS].option_text2 = atvalues[vS].optionText + "_" + pAttributes[pm].attributeCode + "_" + vS
                                                        }
                                                        if (pAttributes[0].attributeValues[vS].combo_options == undefined) {
                                                            pAttributes[0].attributeValues[vS].combo_options = []
                                                        }
                                                        pAttributes[0].attributeValues[vS].combo_options.push(atvalues[vS].optionText + "_" + pAttributes[pm].attributeCode + "_ " + vS)

                                                    }
                                                }
                                            }
                                        }
                                        if (pAttributes[0].attributeValues[0].headers == undefined) {
                                            pAttributes[0].attributeValues[0].headers = []
                                        }
                                        pAttributes[0].attributeValues[0].headers.push(pAttributes[pm].attributeCode)
                                    }
                                }

                                fabricattributes.push({
                                    attributeIdAd: 0,
                                    attributeCode: "Size",
                                    attributeId: "0",
                                    attributeValues: pAttributes[0].attributeValues,
                                    frontEndLabel: "Size"
                                })
                                pAttributes = fabricattributes

                            }
                            if (pAttributes != "" && pAttributes != null) {
                                for (var patt1 of pAttributes) {
                                    if (patt1.attributeCode == "color") {
                                        patt1.attributeCode = "Color"
                                    }
                                    if (patt1.attributeCode == "COLOUR") {
                                        patt1.attributeCode = "Color"
                                    }
                                    if (patt1.attributeCode == "size") {
                                        patt1.attributeCode = "Size"
                                    }
                                    if (patt1.attributeCode == "SIZE") {
                                        patt1.attributeCode = "Size"
                                    }
                                    if (patt1.attributeCode == "CALIBRE" || patt1.attributeCode == "RETICULE" || patt1.attributeCode == "CALF") {
                                        patt1.attributeCode = "Size_"
                                    }
                                    if (pAttributes.length == 2) {
                                        if (pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == "color" || pAttributes[0].attributeCode == "Colour" || pAttributes[0].attributeCode == "COLOUR" || pAttributes[1].attributeCode == "Color" || pAttributes[1].attributeCode == "color" || pAttributes[1].attributeCode == "Colour" || pAttributes[1].attributeCode == "COLOUR") {
                                            patt1.attributeCode = "Color"
                                            clrflg = true
                                        } else if (clrflg == falseflag) {
                                            if (clrcount == 0) {
                                                patt1.attributeCode = "Size"
                                            } else if (clrcount == 1) {
                                                patt1.attributeCode = "Size_"
                                            }
                                        }
                                        clrcount++
                                    }
                                    if (pAttributes.length == 1) {
                                        if (patt1.attributeCode == "color" || patt1.attributeCode == "Color" || patt1.attributeCode == "COLOUR") {
                                            patt1.attributeCode = "Color"
                                        } else {
                                            patt1.attributeCode = "Size"
                                        }
                                    }
                                }
                                pAttributes = attribute_listing(pAttributes)
                            }
                            var pAttObj = {};
                            var attr_values = ""
                            var tcount = 0
                            for (var p2 of pAttributes) {
                                if (pAttributes.length == 1) {
                                    if (pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == "color") {
                                        pAttributes[0].attributeId = 0;
                                        attr_values = p2.attributeValues;
                                        for (var v of attr_values) {
                                            v.optionId = 0;
                                        }
                                    } else {
                                        pAttributes[0].attributeId = 1;
                                        attr_values = p2.attributeValues;
                                        for (var v1 of attr_values) {
                                            v1.optionId = 1;
                                        }
                                    }
                                } else {
                                    if (pAttributes[1] != undefined) {
                                        if (pAttributes[0].attributeCode != "Color" && pAttributes[1].attributeCode != "Color") {
                                            if (tcount == 0) {
                                                tcount++
                                            }
                                        }
                                    }
                                    p2.attributeId = tcount
                                    attr_values = p2.attributeValues;
                                    for (var v2 of attr_values) {
                                        v2.optionId = tcount;
                                    }
                                }
                                tcount++
                            }

                            if (pAttributes.length) {
                                for (var k in pAttributes) {
                                    var pAttributesObj = pAttributes[k];
                                    var pAttributesValues = pAttributesObj["attributeValues"];
                                    for (var l in pAttributesValues) {
                                        var childProduct = pAttributesValues[l];
                                        if (childProduct["childProductId"] == null) {
                                            childProduct["childProductId"] = product["ProductId"];
                                            childProduct["childProductSku"] = product["ProductSku"];
                                            childProduct["childProductName"] = product["ProductName"];
                                            childProduct["childProductImageUrl"] = product["ImageURL"];
                                            childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                            childProduct["childProductOtherOptionImageUrl"] = product["optionImageUrl"];
                                            childProduct["childProductOtherVideoUrl"] = product["Field4"];
                                            childProduct["childProductUrl"] = product["ProductUrl"];
                                            childProduct["childProductPrice"] = product["Price"];
                                            childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                                            childProduct["childProductDescription"] = product["Description"];
                                            childProduct["childInternalProductId"] = product["ProductId"]
                                        }
                                        childProduct["ProductType"] = product["ProductType"];
                                        childProduct["mainSKU"] = product["ProductSku"];
                                        childProduct["childProductIdmain"] = product["ProductId"];

                                        childProduct["childProductImageUrlMain"] = product["ImageURL"];
                                        childProduct["childProductPriceMain"] = product["Price"];
                                        childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
                                        childProduct["childProductNameMain"] = product["ProductName"];
                                        childProduct["PromotionalMessage"] = product["PromotionalMessage"];
                                        childProduct["childProductUrlMain"] = product["ProductUrl"];
                                        childProduct["Field1"] = product["Field1"];
                                        childProduct["Manufacturer"] = product["Manufacturer"];
                                        childProduct["childreviewsCount"] = product["RatingCount"];
                                        childProduct["childRating"] = product["Rating"];
                                        childProduct["childCategoryName"] = product["CategoryName"];
                                        childProduct["childCategoryId"] = product["CategoryId"];
                                        childProduct["childProductDescription"] = product["Description"];

                                        var productObj = new INC.classes.ProductAttObj(childProduct);
                                        productObj["bundledProductId"] = pdpProductId;
                                        productObj.mainId = product["ProductId"];
                                        productObj.bundleId = bundleObj.id;
                                        productObj.sku = productObj.id;

                                        productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                        productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                        productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                        productObj.option[pAttributesObj["attributeId"]].att_id = pAttributesObj.attributeId
                                        if (!Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj, product['ProductId'])) {
                                            INC.dataStore.dataStoreObj[product['ProductId']] = {};
                                        }

                                        if (!Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj[product['ProductId']], productObj['id'])) {
                                            INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']] = {}
                                        }
                                        pAttObj = INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']];
                                        for (var pAttcb in productObj) {
                                            if (pAttcb == "option") {
                                                if (!Object.prototype.hasOwnProperty.call(pAttObj, 'option')) {
                                                    pAttObj["option"] = {}
                                                }
                                                Object.keys(productObj[pAttcb]).forEach(function (key) {
                                                    pAttObj[pAttcb][key] = productObj[pAttcb][key];
                                                });
                                            } else {
                                                pAttObj[pAttcb] = productObj[pAttcb];
                                            }
                                        }
                                    }
                                }
                            }
                            if (pAttributes.length == 0) {
                                var productObjS = new INC.classes.ProductObj(product);
                                productObjS["bundleId"] = irbBundleObj["BundleId"];
                                productObjS["bundledProductId"] = pdpProductId;
                                productObjS.sku = productObjS.id;
                                productObjS.Filed3 = product["Field3"] + " | " + product["Field4"];
                                if ((INC.dataStore.dataStoreObj != undefined) && !Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj, productObjS['mainId'])) {
                                    INC.dataStore.dataStoreObj[productObjS['mainId']] = {};
                                }
                                if (INC.dataStore.dataStoreObj != undefined) {
                                    INC.dataStore.dataStoreObj[productObjS['mainId']][productObjS['id']] = {};
                                    if (!!window.MSInputMethodContext && !!document.documentMode) {
                                        INC.dataStore.dataStoreObj[productObjS['mainId']][productObjS['id']] = JSON.parse(JSON.stringify(productObjS));
                                    } else {
                                        INC.dataStore.dataStoreObj[productObjS['mainId']][productObjS['id']] = Object.assign({}, productObjS);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        setTimeout(function () {
            INC.methods.createPDPBlock("sidebar")
        }, 200)

        updateAllSelection()
    }

    function attribute_listing(valueArray) {
        var items = valueArray
        var sorting = ["Colour", "Color", "Color_size", "Size", "Size_", "Leather", "Castors", "Size_", "Length", 'Foliage Type', 'Width', 'Height', 'Light Type', 'Diameter', 'Set Size'];
        var result = []
        sorting.forEach(function (key) {
            var found = false;
            items = items.filter(function (item) {
                if (!found && item.frontEndLabel == key) {
                    result.push(item);
                    found = true;
                    return false;
                } else {
                    return true;
                }
            })
        })
        return result;
    }
    var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
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
                o = (n & 3) << 4 | r >> 4;
                u = (r & 15) << 2 | i >> 6;
                a = i & 63;
                if (isNaN(r)) {
                    u = a = 64
                } else if (isNaN(i)) {
                    a = 64
                }
                t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
            }
            return t
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
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + String.fromCharCode(n);
                if (u != 64) {
                    t = t + String.fromCharCode(r)
                }
                if (a != 64) {
                    t = t + String.fromCharCode(i)
                }
            }
            t = Base64._utf8_decode(t);
            return t
        },
        _utf8_encode: function (e) {
            e = e.replace(/rn/g, "n");
            var t = "";
            for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r)
                } else if (r > 127 && r < 2048) {
                    t += String.fromCharCode(r >> 6 | 192);
                    t += String.fromCharCode(r & 63 | 128)
                } else {
                    t += String.fromCharCode(r >> 12 | 224);
                    t += String.fromCharCode(r >> 6 & 63 | 128);
                    t += String.fromCharCode(r & 63 | 128)
                }
            }
            return t
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
                    n++
                } else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                    n += 2
                } else {
                    c2 = e.charCodeAt(n + 1);
                    var c3 = e.charCodeAt(n + 2);
                    t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    n += 3
                }
            }
            return t
        }
    }

    function getTrackingPixel() {
        var url = ''
        /*-------------------Tracking with Image Pixel---------------------------*/
        if (url != '') {
            var oImg = document.createElement("img");
            oImg.setAttribute('id', 'cstracking')
            oImg.setAttribute('src', url);
            oImg.setAttribute('height', '1px');
            oImg.setAttribute('width', '1px');
            oImg.setAttribute('style', 'display:none')
            document.body.appendChild(oImg);
        }
        /* -----------------------------------------------------------------------*/
    }

    function get_discount_price(p_original_price, p_sale_price) {
        return parseFloat(+p_original_price - +p_sale_price)
    }

    function incPriceMismatch(active_price, special_price, prdId) {
        if (INC.config.priceApiRan == true) return
        if (INC.config.attributeSyncedForAPI == false) return false
        let endQuery = false
        if (document.querySelector('.atc-btn.ng-hide').innerText.includes('Add to Basket')) {
            endQuery = true
            return
        }
        if (document.querySelector('.atc-btn.ng-hide').innerText.includes('Add to Cart') && endQuery == false) {
            endQuery = true
            return
        }

        if (document.querySelector('.atc-btn.ng-scope') && endQuery == false) {
            if (document.querySelector('.atc-btn.ng-scope').classList.contains('unavailable')) {
                endQuery = true
                return
            }
        }

        if (endQuery) return
        var data = {}
        var priceMismatchObj = {}
        priceMismatchObj.token = INC.config.clientToken
        priceMismatchObj.product_id = prdId ? prdId : INC.methods.getProductIdFromWebPage()

        var parentEl = document.querySelector('.pricing-section')

        var checkSpecial = parentEl.querySelector('.sale-price')
        var isSpecial = false
        if (checkSpecial) {
            isSpecial = true
        }

        let elProductPrice = isSpecial ? parentEl.querySelector('.sale-price') : parentEl.querySelector('.actual-price')
        let elSpecialPrice = isSpecial ? parentEl.querySelector('.actual-price') : 0

        let clientSpecialPrice = elSpecialPrice ? parseFloat(elSpecialPrice.innerText.replace(/[^0-9.-]+/g, "")).toFixed(2) : null
        let clientProductPrice = parseFloat(elProductPrice.innerText.replace(/[^0-9.-]+/g, "")).toFixed(2)

        let final_product_price = clientProductPrice
        let final_special_price = clientSpecialPrice
        let final_old_product_price = parseFloat(active_price).toFixed(2)
        let final_old_client_special_price = Number(special_price) == 0 ? null : parseFloat(special_price).toFixed(2)

        //  
        priceMismatchObj.product_price = final_product_price.toString()
        priceMismatchObj.special_price = final_special_price ? final_special_price.toString() : final_special_price

        priceMismatchObj.old_product_price = (final_old_product_price).toString()
        priceMismatchObj.old_special_price = final_old_client_special_price ? (final_old_client_special_price).toString() : null
        priceMismatchObj.price_type = "IncVAT"
        console.log(priceMismatchObj)
        data = {
            "eventData": btoa(JSON.stringify(priceMismatchObj))
        }

        let mismatch = false
        if (final_product_price !== final_old_product_price || final_special_price !== final_old_client_special_price) {
            mismatch = true
        }

        if (final_old_product_price === final_old_client_special_price && final_special_price == null) {
            mismatch = false
        }


        if (Number(priceMismatchObj.product_price) !== Number(priceMismatchObj.old_product_price) || Number(priceMismatchObj.special_price) !== Number(priceMismatchObj.old_special_price)) {
            mismatch = true
        }

        let mismatchURL = "https://gather.increasingly.com/ProductPriceDetails"
        if (getCountry() == "b58lus") {
            mismatchURL = "https://usagather.increasingly.com/ProductPriceDetails"
        }
        if (getCountry() == "b58lau") {
            mismatchURL = "https://usagather.increasingly.com/ProductPriceDetails"
        }
        INC.config.attributeSyncedForAPI = false
        if (mismatch) {
            INC.config.priceApiRan = true
            window.jQuery.ajax({
                type: "POST",
                url: mismatchURL,
                data: JSON.stringify(data),
                dataType: 'json',
                headers: {
                    "content-type": "application/json; charset=utf-8"
                },
                error: function (jqXHR) {
                    console.log('priceMismatche error - ' + jqXHR)
                    setTimeout(() => {

                        INC.config.priceApiRan = false
                    }, 1000);
                },
                success: function (result) {
                    console.log('priceMismatched - ' + JSON.stringify(result))
                    setTimeout(() => {

                        INC.config.priceApiRan = false
                    }, 1000);
                }
            });
            return true
        } else {
            return false
        }
    }

    function oosproduct(prdid) {
        var format_json_data;
        var product_id = prdid;
        var qty = 0
        format_json_data = JSON.stringify({
            "token": INC.config.clientToken,
            "product_id": product_id,
            "quantity": qty,
        });

        if (product_id != null) {
            var data = {
                "eventData": Base64.encode(format_json_data)
            };
            var p_url = 'https://gather.increasingly.com/ProductInventoryUpdate';
            var xhr = new XMLHttpRequest();
            xhr.open("POST", p_url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200) { // console.log(xhr.responseText)
                    }
                }
            };
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function decodeEntity(inputStr) {
        var textarea = document.createElement("textarea");
        textarea.innerHTML = inputStr;
        let value = textarea.value

        if (value.includes('empty')) {
            for (let i = 0; i <= 10; i++) {
                let pattern = "_empty_header_0" + i
                value = value.replace(pattern.toString(), '')
                if (!value.includes('empty')) {
                    break;
                }
            }
        }

        function unicodeToChar(text) {
            return text.replace(/\\u[\dA-F]{4}/gi,
                function (match) {
                    return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
                });
        }

        value = unicodeToChar(value)


        value = value.replace(/\\/g, "");
        return value
    }

    function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    function observeClientATC() {
        // Select the target node.
        var target = document.querySelector('.atc-btn')

        // Create an observer instance.
        var observer = new MutationObserver(function (mutations) {
            clientButtonCheck()
            if (document.querySelector('.inc_pdp_block') == null) {
                syncClientAttributes(false)
            }

        });

        // Pass in the target node, as well as the observer options.
        observer.observe(target, {
            attributes: true,
            childList: true,
            characterData: true
        });
    }

    function dynamicSort(property) {
        return function (a, b) {
            return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        }
    }


})();