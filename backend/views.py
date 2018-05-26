# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import JsonResponse
from .models import Stock, StockPrice

import json

# get all stock info from the database
def stock_list(request):
	querySets = Stock.objects.all()
	
	datas = [{'id': int(item.stock_id), 'name': str(item.stock_name), 'quote': str(item.stock_quote)} for item in querySets]

	return JsonResponse({'datas': datas})

# api for collecting the price base on the stock id
def stock_price_list(request):

	if request.method == 'POST':

		stock_id = request.POST.get('stock_id')
		querySets = StockPrice.objects.filter(stock_id = stock_id).order_by('date')

		datas = [[item.date, float(item.price)] for item in querySets]

		return JsonResponse({'datas': datas})

	return JsonResponse({'datas': []})
