/** @odoo-module **/
import { Pager } from "@web/core/pager/pager";
import { patch } from "@web/core/utils/patch";
import { rpc } from "@web/core/network/rpc";

patch(Pager.prototype, {
    async setup() {
        super.setup()
        var size = $(window).width();
        setTimeout(() => {
            this._toggleChatterButtons();
        }, 0);
        await rpc('/update/chatter/position', {}).then(function (data) {
            if ( data === 'chatter_right' ) {
                $("body").find('.chatter_position_right').addClass('active')
                $("body").find('.chatter_position_bottom').removeClass('active')
            }
            else {
                $("body").find('.chatter_position_right').removeClass('active')
                $("body").find('.chatter_position_bottom').addClass('active')
            }
        })
        await rpc('/update/split/view', {}).then((data) => {
            if (size >= 992) {
                if (data === true) {
                    $("body").addClass("tree_form_split_view");
                    $(".tree_form_split_view").addClass("active");
                } else {
                    $("body").removeClass("tree_form_split_view");
                    $(".tree_form_split_view").removeClass("active");
                }
            }
        });
        await rpc('/update/filter/row', {}).then((data) => {
            if (data === true) {
                $("body").addClass("show_filter_row");
                $(".filter_row").removeClass("d-none");
                $(".show_filter_row").addClass("active");
            } else {
                $("body").removeClass("show_filter_row");
                $(".filter_row").addClass("d-none");
                $(".show_filter_row").removeClass("active");
            }
        });
    },

    async updateChatterPosition (position) {
        await rpc('/update/chatter/position', {
            'chatter_position': position
        }).then(function (rec) {
            
        })
        this.chatter_position = position

        if ( position === 'chatter_right' ) {
            $("body").removeClass('chatter_bottom');
            $("body").addClass(position);
            $("body").find('.chatter_position_right').addClass('active')
            $("body").find('.chatter_position_bottom').removeClass('active')
        }
        else {
            $("body").removeClass('chatter_right');
            $("body").addClass(position);
            $("body").find('.chatter_position_right').removeClass('active')
            $("body").find('.chatter_position_bottom').addClass('active')
        }
    },


    async updateSplitView() {
        const isActive = $("body").hasClass("tree_form_split_view");
        var size = $(window).width();
        if (size >= 992) {
            if (isActive) {
                // Remove Split View
                $("body").removeClass("tree_form_split_view");
                $(".tree_form_split_view").removeClass("active");
                rpc('/update/split/view', {
                    tree_form_split_view: false,
                });
                window.location.reload();

            } else {
                // Enable Split View
                $("body").addClass("tree_form_split_view");
                $(".tree_form_split_view").addClass("active");
                rpc('/update/split/view', {
                    tree_form_split_view: true,
                });
            }
        }
    },

    _toggleChatterButtons() {
        const viewType = this.env.config.viewType || this.env.viewType;
        const isFormView = viewType === 'form';
        const btnRight = document.querySelector('.chatter_position_right');
        const btnBottom = document.querySelector('.chatter_position_bottom');
        const splitView = document.body.classList.contains("tree_form_split_view");

        if (btnRight && btnBottom) {
            const shouldHide = splitView || !isFormView;
            [btnRight, btnBottom].forEach(btn => 
                btn.classList.toggle('d-none', shouldHide)
            );
        }
    },
    async toggleFilterClass() {
        const isActive = $("body").hasClass("show_filter_row");

        if (isActive) {
            $("body").removeClass("show_filter_row");
            $(".show_filter_row").removeClass("active");
            $(".filter_row").addClass("d-none");
            rpc('/update/filter/row', {
                show_filter_row: false,
            });
        } else {
            $("body").addClass("show_filter_row");
            $(".show_filter_row").addClass("active");
            $(".filter_row").removeClass("d-none");
            rpc('/update/filter/row', {
                show_filter_row: true,
            });
        }
    },

})