const text = document.getElementById("text");

// speech recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.continuous = true;

recognition.onstart = () => {
    text.innerText = "Friday is listening...";
};

recognition.onresult = function (event) {
    const command = event.results[event.results.length - 1][0].transcript.toLowerCase();

    console.log("You:", command);
    handleCommand(command);
};

// speech
function speak(msg) {
    text.innerText = msg;

    const speech = new SpeechSynthesisUtterance(msg);
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}

// logic (same as your Python)
function handleCommand(command) {

    // wake
    if (command.includes("hello friday")) {
        speak("Yes, I am here. How can I help you?");
    }

    // ---------------- YOU (MAIN FEATURE) ----------------
    else if (command.includes("who is tanishq")) {
        speak("Tanishq Rathore is a BCA student passionate about technology, cloud computing, and building creative AI projects.");
    }

    else if (command.includes("skills") || command.includes("what can tanishq do")) {
        speak("He works with Python, web development, and is learning cloud computing and AI systems.");
    }

    else if (command.includes("projects")) {
        speak("He built a voice assistant called Friday AI, and is working on interactive portfolio systems.");
    }

    else if (command.includes("goal") || command.includes("career")) {
        speak("His goal is to become a skilled software engineer and work in top tech companies.");
    }

    else if (command.includes("hire") || command.includes("why should we hire")) {
        speak("You should hire Tanishq because he is curious, creative, and builds real projects instead of just learning theory.");
    }

    // ---------------- GENERAL ----------------
    else if (command.includes("time")) {
        const time = new Date().toLocaleTimeString();
        speak("The time is " + time);
    }

    else if (command.includes("what is ai")) {
        speak("Artificial Intelligence is when machines learn and think like humans.");
    }

    else if (command.includes("who is elon musk")) {
        speak("Elon Musk is the CEO of Tesla and SpaceX.");
    }

    // fallback
    else {
        speak("I don't know that yet, but I am learning.");
    }
}

// auto start
recognition.start();