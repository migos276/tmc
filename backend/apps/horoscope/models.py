from django.db import models

class HoroscopeSign(models.Model):
    SIGNS = [
        ('belier', 'Bélier'),
        ('taureau', 'Taureau'),
        ('gemeaux', 'Gémeaux'),
        ('cancer', 'Cancer'),
        ('lion', 'Lion'),
        ('vierge', 'Vierge'),
        ('balance', 'Balance'),
        ('scorpion', 'Scorpion'),
        ('sagittaire', 'Sagittaire'),
        ('capricorne', 'Capricorne'),
        ('verseau', 'Verseau'),
        ('poissons', 'Poissons'),
    ]
    
    sign = models.CharField(max_length=20, choices=SIGNS, unique=True)
    today_prediction = models.TextField()
    compatibility = models.CharField(max_length=20)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['sign']
