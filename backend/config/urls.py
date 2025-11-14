from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('apps.users.urls')),
    path('api/market/', include('apps.market.urls')),
    path('api/jobs/', include('apps.jobs.urls')),
    path('api/content/', include('apps.content.urls')),
    path('api/horoscope/', include('apps.horoscope.urls')),
    path('api/groups/', include('apps.groups.urls')),
    path('api/payments/', include('apps.payments.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
