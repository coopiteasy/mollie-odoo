# -*- coding: utf-8 -*-
from odoo import fields, models, api, _


class PaymentIcon(models.Model):
    _inherit = 'payment.icon'

    active = fields.Boolean(string='Active', default=True)
