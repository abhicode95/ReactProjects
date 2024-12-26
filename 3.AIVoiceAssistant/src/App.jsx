import "./App.css";
import img from "../src/ai-human.avif";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [information, setInformation] = useState(false);
  const [voices, setVoices] = useState([]);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  const loadVoice = () => {
    const allVoice = window.speechSynthesis.getVoices();
    setVoices(allVoice);
  };

  useEffect(() => {
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoice;
    } else {
      loadVoice();
    }
  }, []);

  const startListening = () => {
    recognition.start();
    setIsListening(true);
  };

  recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript.toLowerCase();
    setTranscript(spokenText);
    handleVoiceCommand(spokenText);
  };

  recognition.onend = () => setIsListening(false);

  const speakText = (text) => {
    if (voices.length === 0) {
      console.warn("No voice available yet.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    const maleEnglishVoice =
      voices.find(
        (voice) =>
          voice.lang.startsWith("en-") &&
          voice.name.toLowerCase().includes("male")
      ) ||
      voices.find((voice) => voice.lang.startsWith("en-")) ||
      voices[0];

    utterance.voice = maleEnglishVoice;
    utterance.lang = maleEnglishVoice.lang || "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  };

  const handleVoiceCommand = async (command) => {
    if (command.startsWith("open ")) {
      const site = command.split("open ")[1].trim();

      const sitesMap = {
        youtube: "https://www.youtube.com",
        facebook: "https://www.facebook.com",
        google: "https://www.google.com",
        twitter: "https://www.twitter.com",
        instagram: "https://www.instagram.com",
      };

      if (sitesMap[site]) {
        speakText(`Opening ${site}`);
        window.open(sitesMap[site], "_blank");
        setInformation(`Opened ${site}`);
      } else {
        speakText(`I don't know how to open ${site}`);
        setInformation(`Could not find the website for  ${site}`);
      }
      return;
    }

    if (command.includes("what is your name")) {
      const response =
        "Hello Sir I'm Voice Changer, Your voice assistant created by Abhi";
      speakText(response);
      setInformation(response);
      return;
    } else if (command.includes("hello voice")) {
      const response = "Hello Sir I'm Voice Changer, How can i help you";
      speakText(response);
      setInformation(response);
      return;
    } else if (command.includes("what is your age")) {
      const response = "Hello Sir I'm Voice Changer, I'm 200 years old";
      speakText(response);
      setInformation(response);
      return;
    }
    // List of famous people
    const famousPeople = [
      "bill gates",
      "mark zuckerberg",
      "elon musk",
      "steve jobs",
      "warren buffet",
      "barack obama",
      "jeff bezos",
      "sundar pichai",
      "mukesh ambani",
      "virat kohli",
      "sachin tendulkar",
      "brian lara",
    ];

    if (famousPeople.some((person) => command.includes(person))) {
      const person = famousPeople.find((person) => command.includes(person));
      const personData = await fetchPersonData(person);

      if (personData) {
        const infoText = `${personData.name}, ${personData.extract}`;
        setInformation(infoText);
        speakText(infoText);

        performGoogleSeach(command);
      } else {
        const fallbackMessage = "I couldn't find detailed information";

        speakText(fallbackMessage);
        performGoogleSeach(command);
      }
    } else {
      const fallbackMessage = `Here is the information about ${command}`;

      speakText(fallbackMessage);
      performGoogleSeach(command);
    }
  };

  const fetchPersonData = async (person) => {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      person
    )}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.title && data.extract) {
        return {
          name: data.title,
          extract: data.extract.split(".")[0],
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const performGoogleSeach = (query) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;

    window.open(searchUrl, "_blank");
  };

  return (
    <>
      <div className="voice-assistant">
        <img src={img} alt="ai-image" className="ai-img" />
        <h2>Voice Assistant</h2>
        <button className="btn" disabled={isListening} onClick={startListening}>
          <i className="fas fa-microphone"></i>
          Start Listening
        </button>
        <p className="transcript">{transcript}</p>
        <p className="information">{information}</p>
      </div>
    </>
  );
}

export default App;
