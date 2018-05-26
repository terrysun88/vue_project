from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^stock$', views.stock_list, name='stock_list'),
	url(r'^stock_price$', views.stock_price_list, name='stock_price_list')
]