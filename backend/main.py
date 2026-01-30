from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.mime.text import MIMEText
import os
from dotenv import load_dotenv
import resend

load_dotenv()

app = FastAPI()

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change to your domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str



resend.api_key = os.getenv("RESEND_API_KEY")

@app.post("/send-email")
def send_email(data: ContactForm):
    try:
        resend.Emails.send({
            "from": "Zeel <onboarding@resend.dev>",
            "to": "zeelgajjar123@gmail.com",
            "subject": f"New Inquiry: {data.subject}",
            "html": f"""
                <h2>New Form Submission</h2>
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Phone:</strong> {data.phone}</p>
                <p><strong>Message:</strong> {data.message}</p>
            """
        })

        return {"success": True, "message": "Message sent successfully"}

    except Exception as e:
        return {"success": False, "message": str(e)}



# SMTP email generator
# @app.post("/send-email")
# def send_email(data: ContactForm):
#     try:
#         sender_email = os.getenv("EMAIL_USER")
#         print("Sender Email:", sender_email)  # Debugging line
#         app_password = os.getenv("EMAIL_PASS")
#         print("App Password:", app_password)  # Debugging line  

#         msg = MIMEText(f"""
#         New Website Inquiry

#         Name: {data.name}
#         Email: {data.email}
#         Phone: {data.phone}
#         Subject: {data.subject}
#         Message:
#         {data.message}
#         """)
#         msg["Subject"] = f"New Inquiry: {data.subject}"
#         msg["From"] = sender_email
#         msg["To"] = sender_email

#         with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
#             server.login(sender_email, app_password)
#             server.send_message(msg)

#         return {"success": True, "message": "Email sent successfully"}

#     except Exception as e:
#         return {"success": False, "message": str(e)}


import uvicorn

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=10000)