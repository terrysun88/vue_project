# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# creating Stock model
class Stock(models.Model):
	stock_id = models.AutoField(primary_key = True)
	stock_name = models.CharField(max_length = 250)
	stock_quote = models.CharField(max_length = 10)

#creating StockPrice model
class StockPrice(models.Model):
	id = models.AutoField(primary_key = True)
	price = models.DecimalField(max_digits = 20, decimal_places = 2, null = False)
	date = models.DateField()
	stock = models.ForeignKey(Stock, null = False)
