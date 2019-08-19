# -*- coding: utf-8 -*-
from odoo import fields, models, api, _
from mollie.api.client import Client
from odoo.addons.payment_mollie_official.models.mollie import get_mollie_provider_key


class PaymentIcon(models.Model):
    _inherit = 'payment.icon'

    _mollie_client = Client()

    active = fields.Boolean(string='Active')

    @api.multi
    def toggle_active(self):
        for record in self:
            record.active = not record.active
            if record.provider == 'mollie':
                key = get_mollie_provider_key(self.env)
                self._mollie_client.set_api_key(key)

                if record.active:
                    # Activates the payment method for your Mollie account (on mollie.com).
                    # Note: this only works when the payment acquirer Mollie is in 'production' and not in test mode.
                    self._mollie_client.profile_methods.with_parent_id('me', record.acquirer_reference).create()
                else:
                    # Dectivates the payment method for your Mollie account (on mollie.com).
                    # Note: this only works when the payment acquirer Mollie is in 'production' and not in test mode.
                    self._mollie_client.profile_methods.with_parent_id('me', record.acquirer_reference).delete()
