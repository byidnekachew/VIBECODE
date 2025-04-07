const vagueResponses = [
    "Hmm… that’s <em>certainly</em> a question.",
    "The clouds are... unclear.",
    "You already know the answer. <em>Probably</em>.",
    "Interesting that you’d ask <em>me</em> that.",
    "One could say yes... but <em>should</em> one?",
    "Signs are pointing somewhere. <em>Maybe</em>.",
    "Ask again, but differently. With more <em>intention</em>.",
    "It's not about yes or no. It's about <em>you</em>.",
    "Could be. Could not be. <em>Who’s to say?</em>",
    "Consider your <em>motives</em>.",
    "That's above my <em>vibe grade</em>.",
    "I'm not saying yes, but I’m not <em>not</em> saying yes.",
    "Your energy is... <em>ambiguous</em>.",
    "I think you already know. <em>Or not</em>.",
    "That question vibrates <em>weird</em>.",
    "The answer is... <em>buffering</em>.",
    "Maybe ask a <em>tree</em> instead?",
    "You're not ready for that <em>truth</em>.",
    "Try again when the <em>moon shifts</em>.",
    "🤷"
  ];
  
  // Magic 8 Ball Logic
  document.getElementById("eightBallImg").addEventListener("click", () => {
    const responseBox = document.getElementById("response");
  
    const randomIndex = Math.floor(Math.random() * vagueResponses.length);
    const answer = vagueResponses[randomIndex];
    responseBox.innerHTML = answer;
  });
  
  // Menu Navigation
  const menuButtons = document.querySelectorAll(".menu-btn");
  const eightBallSection = document.getElementById("eightBallSection");
  const luckyNumbersSection = document.getElementById("luckyNumbersSection");
  const fortuneSection = document.getElementById("fortuneSection");
  const astrologySection = document.getElementById("astrologySection");
  const comingSoonSection = document.getElementById("comingSoonSection");
  
  menuButtons.forEach(button => {
    button.addEventListener("click", () => {
      const service = button.getAttribute("data-service");
  
      // Hide all sections first
      eightBallSection.classList.add("hidden");
      luckyNumbersSection.classList.add("hidden");
      fortuneSection.classList.add("hidden");
      astrologySection.classList.add("hidden");
      comingSoonSection.classList.add("hidden");
  
      // Show the selected service
      if (service === "8ball") {
        eightBallSection.classList.remove("hidden");
      } else if (service === "luckyNumbers") {
        luckyNumbersSection.classList.remove("hidden");
      } else if (service === "fortune") {
        fortuneSection.classList.remove("hidden");
      } else if (service === "astrology") {
        astrologySection.classList.remove("hidden");
      } else {
        comingSoonSection.classList.remove("hidden");
      }
    });
  });
  
  // Lucky Numbers Logic
  document.getElementById("generateLuckyNumbers").addEventListener("click", () => {
    const luckyNumbersResponse = document.getElementById("luckyNumbersResponse");
    const luckyNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 99) + 1);
    luckyNumbersResponse.innerHTML = `Your lucky numbers are: ${luckyNumbers.join(", ")}`;
  });
  
  // Fortune Logic
  document.getElementById("generateFortune").addEventListener("click", () => {
    const fortuneResponse = document.getElementById("fortuneResponse");
    const fortunes = [
      "I mean, if you really need it, sure... But don’t expect much.",
  "The stars have spoken... but they’re not saying anything useful.",
  "I wouldn’t rely on it. But, hey, that’s just me.",
  "Fortunes are overrated anyway. Whatever.",
  "You might want to take that with a grain of salt.",
  "Don’t get your hopes up, but you *could* be right.",
  "I’m not saying it’s going to happen... but I’m not *not* saying it.",
  "That’s the kind of thing you tell yourself when you’re desperate.",
  "Sure, why not? But don’t expect it to change your life.",
  "Well, the universe doesn’t really owe you anything, but okay."
    ];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    fortuneResponse.innerHTML = randomFortune;
  });
  
// Array of Passive-Aggressive Statements for Zodiac Signs
const passiveAggressiveStatements = [
    "But, hey, who am I to judge?",
    "Are you *sure* about that?",
    "I mean, it’s just a sign, right?",
    "Could be worse, I guess.",
    "But then again, it could be better.",
    "I wouldn’t take it too seriously.",
    "Not my place to say, but... okay.",
    "You might want to check again.",
    "It is what it is, I suppose.",
    "That’s what the stars say, I guess."
  ];
  
  // Astrology Logic
  document.getElementById("generateAstrology").addEventListener("click", () => {
    const birthdayInput = document.getElementById("birthdayInput").value;
    const astrologyResponse = document.getElementById("astrologyResponse");
  
    if (!birthdayInput) {
      astrologyResponse.innerHTML = "Please enter your birthday.";
      return;
    }
  
    const birthDate = new Date(birthdayInput);
    const month = birthDate.getMonth(); // 0-based month index
    const day = birthDate.getDate();
  
    const zodiacSigns = [
      { sign: "Aries", start: { month: 2, day: 21 }, end: { month: 3, day: 19 } },
      { sign: "Taurus", start: { month: 3, day: 20 }, end: { month: 4, day: 20 } },
      { sign: "Gemini", start: { month: 4, day: 21 }, end: { month: 5, day: 20 } },
      { sign: "Cancer", start: { month: 5, day: 21 }, end: { month: 6, day: 22 } },
      { sign: "Leo", start: { month: 6, day: 23 }, end: { month: 7, day: 22 } },
      { sign: "Virgo", start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
      { sign: "Libra", start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
      { sign: "Scorpio", start: { month: 9, day: 23 }, end: { month: 10, day: 21 } },
      { sign: "Sagittarius", start: { month: 10, day: 22 }, end: { month: 11, day: 21 } },
      { sign: "Capricorn", start: { month: 11, day: 22 }, end: { month: 0, day: 19 } },
      { sign: "Aquarius", start: { month: 0, day: 20 }, end: { month: 1, day: 18 } },
      { sign: "Pisces", start: { month: 1, day: 19 }, end: { month: 2, day: 20 } },
    ];
  
    const zodiac = zodiacSigns.find(zodiac => {
      // Check if the birthday falls between the start and end date for each sign
      const startDate = new Date(birthDate.getFullYear(), zodiac.start.month, zodiac.start.day);
      const endDate = new Date(birthDate.getFullYear(), zodiac.end.month, zodiac.end.day);
      
      // Capricorn end date wraps around to January, so we adjust accordingly
      if (zodiac.sign === "Capricorn" && (month === 11 || month === 0)) {
        return (birthDate >= startDate && birthDate <= endDate);
      } else if (month === zodiac.start.month && day >= zodiac.start.day) {
        return birthDate <= endDate;
      } else if (month === zodiac.end.month && day <= zodiac.end.day) {
        return birthDate >= startDate;
      } else if (month > zodiac.start.month && month < zodiac.end.month) {
        return true;
      } else {
        return false;
      }
    });
  
    if (zodiac) {
      // Add passive-aggressive statement after the zodiac sign
      const randomStatement = passiveAggressiveStatements[Math.floor(Math.random() * passiveAggressiveStatements.length)];
      astrologyResponse.innerHTML = `Your zodiac sign is ${zodiac.sign}. ${randomStatement}`;
    } else {
      astrologyResponse.innerHTML = "Could not determine your zodiac sign. Please check your input.";
    }
  });
  