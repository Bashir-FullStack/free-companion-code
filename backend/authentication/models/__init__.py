from pydantic import BaseModel 
from typing import Optional 
from datetime import datetime 
 
class UserBase(BaseModel): 
    email: str 
 
class UserCreate(UserBase): 
    password: str 
 
class User(UserBase): 
    id: str 
    is_verified: bool = False 
 
class Token(BaseModel): 
    access_token: str 
    token_type: str 
