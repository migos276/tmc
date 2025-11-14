from django.db import models
from apps.users.models import User

class Content(models.Model):
    TYPE_CHOICES = [
        ('video', 'Vidéo'),
        ('book', 'Livre'),
        ('app', 'Application'),
    ]
    
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='contents')
    title = models.CharField(max_length=200)
    description = models.TextField()
    content_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    file = models.FileField(upload_to='contents/')
    thumbnail = models.ImageField(upload_to='thumbnails/')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    requires_premium = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
