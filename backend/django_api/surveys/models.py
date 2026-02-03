from django.db import models 
from users.models import User 
import uuid 
 
class SurveyQuestion(models.Model): 
    QUESTION_TYPES = [ 
        ('MC', 'Multiple Choice'), 
        ('TF', 'True/False'), 
        ('SCALE', 'Rating Scale'), 
        ('TEXT', 'Text Response'), 
    ] 
 
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) 
    question_text = models.TextField() 
    question_type = models.CharField(max_length=10, choices=QUESTION_TYPES) 
    options = models.JSONField(null=True, blank=True)  # For MC questions 
    order = models.IntegerField(default=0) 
    created_at = models.DateTimeField(auto_now_add=True) 
 
    def __str__(self): 
        return self.question_text[:50] 
