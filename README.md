Friday AI – Desktop Voice Assistant
🚀 Overview

Friday AI is a Python-based desktop voice assistant that listens to user commands, processes them, and responds using both voice and on-screen text.

It can perform tasks like opening applications, answering queries, and even presenting my personal portfolio interactively.

🌐 Demo Website (Preview Only)

⚠️ This repository also includes a simple web version of the project hosted on GitHub Pages.

This website is only a preview to showcase the idea and features of Friday AI.
The actual working application is currently running and being developed on my local system.

💡 Why I Built This

I wanted to build something more practical than basic scripts—something that feels like a real product.

This project helped me explore:

Voice-based interaction
Combining multiple technologies
Building and packaging a real application
⚙️ How It Works
🎤 Voice Input
Uses speech_recognition
Converts user speech into text using Google Speech API

🧠 Command Processing
Uses Python if-elif logic
Identifies user intent (time, apps, personal info, etc.)

🔊 Voice Output
Uses pyttsx3
Converts text responses into speech

🖥️ User Interface
Built with tkinter
Displays responses and an animated AI interface

⚡ Multi-threading
Uses threading
Ensures smooth UI while listening and speaking simultaneously

🔥 Features
🎙️ Real-time voice recognition
🔊 Voice + text responses
🧑 Personal portfolio assistant
🌐 Opens apps/websites (YouTube, Google, etc.)
🖥️ Interactive UI
📦 Executable (.exe) using PyInstaller
🧠 Type of AI

This is a rule-based voice assistant, not a machine learning model.

It uses predefined logic to respond to commands efficiently.

📚 What I Learned
Working with APIs (speech recognition)
Multi-threading in real applications
Building desktop UI using Tkinter
Packaging Python apps into executable files
Improving user experience

⚠️ Limitations
No real AI learning capability
Requires internet for speech recognition
Limited command understanding
No memory or context awareness

🔮 Future Improvements
Integrate real AI APIs (like OpenAI)
Add memory and context awareness
Convert into a web or mobile application
Improve UI/UX

🛠️ Tech Stack
-Python
-speech_recognition
-pyttsx3
-tkinter
-threading
-PyInstaller

▶️ How to Run
python main.py

Or run the .exe file directly.

🎯 Short Description (for recruiters)

Friday AI is a Python-based desktop voice assistant that uses speech recognition, text-to-speech, and a Tkinter-based UI to perform tasks like answering queries, opening applications, and presenting a personal portfolio.

Code here -
main.py 
import speech_recognition as sr
import pyttsx3
import webbrowser
import datetime
import os
import requests

# ---------------- VOICE ----------------
engine = pyttsx3.init()

def speak(text):
    print("Friday:", text)
    engine.say(text)
    engine.runAndWait()

def listen():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        r.adjust_for_ambient_noise(source)
        audio = r.listen(source)
    try:
        command = r.recognize_google(audio)
        print("You:", command)
        return command.lower()
    except:
        return ""

# ---------------- LOCAL AI (OLLAMA) ----------------
def ask_ai(prompt):
    try:
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "llama3",
                "prompt": prompt,
                "stream": False
            }
        )
        return response.json()["response"]
    except:
        return "AI not responding"

# ---------------- LOCAL COMMANDS ----------------
def handle_command(command):
    if "time" in command:
        now = datetime.now().strftime("%H:%M")
        speak(f"The time is {now}")
    elif "open youtube" in command:
        speak("Opening YouTube")
        webbrowser.open("https://youtube.com")
    elif "open google" in command:
        speak("Opening Google")
        webbrowser.open("https://google.com")
    elif "open whatsapp" in command:
        speak("Opening WhatsApp")
        webbrowser.open("https://web.whatsapp.com")
    elif "exit" in command or "stop" in command:
        speak("Goodbye")
        os._exit(0)
    else:
        # 🔥 ALWAYS GO TO AI (NO GOOGLE)
        speak("Thinking...")
        answer = ask_ai(command)
        speak(answer)
# ---------------- START ----------------
if __name__ == "__main__":
    print("Starting Friday AI...")
    Thread(target=assistant_loop, daemon=True).start()
    root.mainloop()
    ------------------------------------------------------------------------------------------------
app.py 
import speech_recognition as sr
import pyttsx3
import webbrowser
import os
import sys
import tkinter as tk
from PIL import Image, ImageTk, ImageSequence
from threading import Thread
from datetime import datetime
import random
import time

# ---------------- RESOURCE PATH ----------------
def resource_path(relative_path):
    try:
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")
    return os.path.join(base_path, relative_path)

# ---------------- SPEAK ----------------
def speak(text):
    print("Friday:", text)
    # show text
    status_label.config(text=text)
    root.update_idletasks()
    #  keep text visible longer
    time.sleep(1)
    def run_speech():
        try:
            engine = pyttsx3.init()
            engine.setProperty('rate', 150)
            engine.setProperty('volume', 1.0)
            voices = engine.getProperty('voices')
            engine.setProperty('voice', voices[0].id)
            engine.say(text)
            engine.runAndWait()
            engine.stop()
        except Exception as e:
            print("Speech Error:", e)
    Thread(target=run_speech, daemon=True).start()

# ---------------- LISTEN ----------------
def listen():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        status_label.config(text="Listening...")
        print("Listening...")
        r.adjust_for_ambient_noise(source, duration=0.5)
        audio = r.listen(source)
    try:
        command = r.recognize_google(audio)
        print("You:", command)
        return command.lower()
    except:
        return ""

# ---------------- COMMANDS ----------------
def handle_command(command):
    print("COMMAND:", command)
    if "hello friday" in command:
        speak("Yes, I am here. What can I do for you?")
    elif "time" in command:
        now = datetime.now().strftime("%H:%M")
        speak(f"The time is {now}")
    elif "open youtube" in command:
        speak("Opening YouTube")
        webbrowser.open("https://youtube.com")
    elif "open google" in command:
        speak("Opening Google")
        webbrowser.open("https://google.com")
    elif "open whatsapp" in command:
        speak("Opening WhatsApp")
        webbrowser.open("https://web.whatsapp.com")
    elif "open notepad" in command:
        speak("Opening Notepad")
        os.system("notepad")
    elif "who is tanishq" in command:
        speak("Tanishq Rathore is a BCA student passionate about technology and building smart applications.")
    elif "what is ai" in command:
        speak("Artificial Intelligence is when machines think and learn like humans.")
    elif "who is elon musk" in command:
        speak("Elon Musk is the CEO of Tesla and SpaceX.")
    elif "how are you" in command:
        speak("I am doing great. What about you?")

    elif "i am fine" in command:
        speak("That is good to hear")

    elif "exit" in command or "stop" in command:
        speak("Goodbye")
        root.destroy()
        os._exit(0)

    else:
        speak(random.choice([
            "I don't know that yet.",
            "I'm still learning that.",
            "Can you ask something else?"
        ]))

# ---------------- MAIN LOOP ----------------
def assistant_loop():
    speak("Friday is ready")

    while True:
        command = listen()

        if not command:
            continue

        handle_command(command)

# ---------------- UI ----------------
root = tk.Tk()
root.title("Friday AI")
root.configure(bg="black")

root.attributes("-fullscreen", True)
root.bind("<Escape>", lambda e: root.destroy())

# GIF
gif = Image.open(resource_path("ai.gif"))

frames = []
for frame in ImageSequence.Iterator(gif):
    frame = frame.copy()
    frame.thumbnail((500, 500))
    frames.append(ImageTk.PhotoImage(frame))

frame_index = 0

def update_gif():
    global frame_index
    gif_label.config(image=frames[frame_index])
    frame_index = (frame_index + 1) % len(frames)
    root.after(40, update_gif)

gif_label = tk.Label(root, bg="black")
gif_label.pack(expand=True)

# 🔥 CLEAN TEXT (NO BOX)
status_label = tk.Label(
    root,
    text="Initializing...",
    font=("Segoe UI", 18),
    fg="white",
    bg="black",
    wraplength=800,   # 🔥 makes long text wrap nicely
    justify="center"
)
status_label.place(relx=0.5, rely=0.85, anchor="center")

update_gif()

Thread(target=assistant_loop, daemon=True).start()

root.mainloop()
    
