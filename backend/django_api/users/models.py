from django.db import models 
from django.contrib.auth.models import AbstractUser 
from django.core.validators import EmailValidator 
import uuid 
 
class User(AbstractUser): 
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) 
    email = models.EmailField(unique=True, validators=[EmailValidator()]) 
    is_verified = models.BooleanField(default=False) 
    verification_code = models.CharField(max_length=6, null=True, blank=True) 
    verification_code_expires = models.DateTimeField(null=True, blank=True) 
    coins = models.IntegerField(default=0) 
    tier = models.CharField(max_length=20, default='iron') 
    invite_code = models.CharField(max_length=10, unique=True) 
    referred_by = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True) 
    created_at = models.DateTimeField(auto_now_add=True) 
    updated_at = models.DateTimeField(auto_now=True) 
 
    def __str__(self): 
        return self.email 
