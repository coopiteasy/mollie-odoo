odoo.define('payment_mollie_official.tour', function(require) {
"use strict";

var core = require('web.core');
var tour = require('web_tour.tour');

var _t = core._t;

tour.register('mollie_tour', {
    url: "/web",
}, [tour.STEPS.SHOW_APPS_MENU_ITEM, {
    trigger: '.o_app[data-menu-xmlid="website.menu_website_configuration"]',
    content: _t('Want to manage <b>online payments with Mollie</b>? <i>It starts here.</i>'),
    position: 'bottom',
}, {
    trigger: 'li a[data-menu-xmlid="website.menu_website_global_configuration"]',
    content: _t('Click on <b>Configuration</b>. Next open up the menuitem <b>eCommerce > Payment Acquirers</b>.'),
    position: 'bottom',
}, {
    trigger: ".o_searchview_input",
    content: _t("Search for <b>Mollie</b> here and then open up the record."),
    position: "bottom",
}, {
    trigger: ".o_form_button_edit",
    extra_trigger: '.logging_smartbutton',
    content: _t('Click on this button to configure Mollie.'),
    position: "bottom"
}, {
    trigger: '.o_form_view input.o_field_char[name=mollie_api_key_test]',
    content: _t('Fill in the test API key. You can get this API key from https://www.mollie.com/dashboard/developers/api-keys'),
    position: 'bottom',
}, {
    trigger: '.o_form_view input.o_field_char[name=mollie_api_key_prod]',
    content: _t('Fill in the live API key. You can get this API key from https://www.mollie.com/dashboard/developers/api-keys'),
    position: 'bottom',
}, {
    trigger: '.o_form_view input.o_field_char[name=mollie_api_key_prod]',
    content: _t('Fill in the live API key. You can get this API key from https://www.mollie.com/dashboard/developers/api-keys'),
    position: 'bottom',
}, {
    trigger: '.oe_stat_button[name=toggle_environment_value]',
    content: _t('<b>Click on the smartbutton</b> to switch the mode. <b>Test environment</b> allows you to test Mollie and make test transactions through your webshop.<b>Production environment</b> means everything is ready and your customer will be able to pay with Mollie'),
    position: 'bottom',
}, {
    trigger: '.oe_stat_button[name=toggle_website_published]',
    content: _t('<b>Activate</b> Mollie by clicking on the button. If the payment method is archived it will not be shown as a payment method to customers.'),
    position: 'bottom',
}, {
    trigger: '.o_form_button_save',
    extra_trigger: '.logging_smartbutton',
    content: _t('Click on save to <b>save your configuration</b>. You can now start testing and using Mollie.'),
    position: 'bottom',

}]);

});