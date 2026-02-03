import random 
import string 
from datetime import datetime, timedelta 
 
def generate_invite_code(length=8): 
    chars = string.ascii_uppercase + string.digits 
    return ''.join(random.choice(chars) for _ in range(length)) 
 
def generate_verification_code(length=6): 
    return ''.join(random.choice(string.digits) for _ in range(length)) 
