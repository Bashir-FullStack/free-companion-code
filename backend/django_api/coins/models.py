from django.db import models 
from users.models import User 
import uuid 
 
class CoinTransaction(models.Model): 
    TRANSACTION_TYPES = [ 
        ('SIGNUP', 'Signup Bonus'), 
        ('LESSON', 'Lesson Completion'), 
        ('PROJECT', 'Project Completion'), 
        ('REFERRAL', 'Referral Bonus'), 
        ('DAILY', 'Daily Login'), 
        ('SURVEY', 'Survey Completion'), 
        ('ADMIN', 'Admin Grant'), 
    ] 
 
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) 
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='coin_transactions') 
    amount = models.IntegerField() 
    transaction_type = models.CharField(max_length=20, choices=TRANSACTION_TYPES) 
    description = models.TextField() 
    created_at = models.DateTimeField(auto_now_add=True) 
 
    def __str__(self): 
        return f"{self.user.email} - {self.amount} coins" 
