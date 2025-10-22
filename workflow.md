from fastapi import FastAPI, UploadFile, Form
from composio import Composio
from openai import OpenAI
import uvicorn
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(title="KAIRO - Smart Life Companion")

# Initialize Composio & OpenAI
composio_client = Composio(api_key=os.getenv("COMPOSIO_API_KEY"))
openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@app.get("/")
def home():
    return {"message": "Welcome to KAIRO AI Backend"}

# Example: LearnWise Summarizer
@app.post("/summarize")
async def summarize_text(text: str = Form(...)):
    completion = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Summarize educational or lecture text into short notes"},
            {"role": "user", "content": text}
        ]
    )
    return {"summary": completion.choices[0].message.content}

# Example: SpendWise Alert
@app.post("/spend_alert")
async def spend_alert(amount: float = Form(...), limit: float = Form(...)):
    if amount > limit:
        return {"alert": f"⚠️ You spent ₹{amount}, which exceeds your daily limit ₹{limit}."}
    return {"alert": f"✅ You spent ₹{amount}, within your safe limit ₹{limit}."}

# Example: Women Safety SOS
@app.get("/sos_alert")
def sos_alert():
    return {"status": "🚨 SOS triggered. Contacts and live location sent!"}

# Example: Men FixIt Tips
@app.get("/fixit_tips")
def fixit_tips():
    return {
        "tips": [
            "🔧 Fix leaking taps using Teflon tape.",
            "💡 For Wi-Fi issues, restart router before resetting.",
            "🍳 Clean microwave with lemon water steam for 2 mins."
        ]
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
    # Example: TalkZone AI Support
@app.post("/talkzone")
async def talkzone(message: str = Form(...)):
    """
    AI TalkZone – A safe space where users can talk and get supportive, friendly replies.
    """
    response = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a friendly, empathetic companion. Reply kindly, not too formal."},
            {"role": "user", "content": message}
        ]
    )
    return {"reply": response.choices[0].message.content}
requirement texts
fastapi
uvicorn
openai
python-dotenv
composio==0.8.20
.env.example
OPENAI_API_KEY=your_openai_key_here
COMPOSIO_API_KEY=your_composio_key_here
JWT_SECRET_KEY=your_jwt_key_here
AZURE_SPEECH_KEY=your_azure_key_here
GOOGLE_MAP_KEY=your_google_key_here