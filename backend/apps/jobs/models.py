from django.db import models
from apps.users.models import User

class JobOffer(models.Model):
    LEVEL_CHOICES = [
        ('junior', 'Junior'),
        ('confirmed', 'Confirmé'),
        ('senior', 'Senior'),
    ]
    
    poster = models.ForeignKey(User, on_delete=models.CASCADE, related_name='job_offers')
    title = models.CharField(max_length=200)
    description = models.TextField()
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES)
    salary_min = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    salary_max = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    city = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
