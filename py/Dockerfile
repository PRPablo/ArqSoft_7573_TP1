FROM python:3.8.3
RUN mkdir /app
WORKDIR /app
COPY app.py ./
RUN pip install flask gunicorn
RUN python app.py
ENTRYPOINT ["gunicorn","-w 1","-b 0.0.0.0:8000","app:app"]
