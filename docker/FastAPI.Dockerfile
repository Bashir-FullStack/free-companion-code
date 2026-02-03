FROM python:3.11-slim 
WORKDIR /app 
COPY ../fastapi_services/requirements.txt . 
RUN pip install --no-cache-dir -r requirements.txt 
COPY . . 
CMD ["uvicorn", "authentication.app:app", "--host", "0.0.0.0", "--port", "8001"] 
