from django.db import models
from apps.users.models import User

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('phones', 'Téléphones'),
        ('computers', 'Ordinateurs'),
        ('accessories', 'Accessoires'),
        ('clothes', 'Vêtements'),
    ]
    
    seller = models.ForeignKey(User, on_delete=models.CASCADE, related_name='products')
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='products/')
    stock = models.IntegerField(default=1)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
