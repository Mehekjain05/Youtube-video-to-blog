from flask import Flask, request
from youtube_transcript_api import YouTubeTranscriptApi
import google.generativeai as genai
from dotenv import load_dotenv
import os
# video_id = 'ftKiHCDVwfA?si=Xvtkz1tWGOLHCxbf'
app = Flask(__name__)
load_dotenv()
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

# Route for seeing a data
@app.route('/home', methods=['GET', 'POST'])
def home():     
    data: dict = request.get_json()
    video_id = data.get('video_id')
    res = YouTubeTranscriptApi.get_transcript(video_id)
    data = [i['text'] for i in res]    
    data = ' '.join(data)
    response = model.generate_content(f"You are an expert blog writer. Below is a transcript from a YouTube video: ${data}. Generate a well-structured, engaging blog post from this transcript. Format the response using appropriate HTML tags but exclude the <html>, <head>, and <body> tags since this content will be used inside a React page. Use <h1> for the title, <h2> for subheadings, <p> for paragraphs, <ul> or <ol> for lists, and <strong> or <em> for emphasis where necessary.Also add line breaks. Ensure the content is readable, engaging, and SEO-friendly. Maintain logical flow while keeping it concise and informative.")    
    text = response.candidates[0].content.parts[0].text
    return {
        "data": text,
        }

    
# Running app
if __name__ == '__main__':
    app.run(debug=True)
