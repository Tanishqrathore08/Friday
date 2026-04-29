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
