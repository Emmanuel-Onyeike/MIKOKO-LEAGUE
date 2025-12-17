/**
 * MIKOKO League - Final Cursor Script
 * Handles smooth following, hover expansion, and mobile safety.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Skip for mobile/touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // 2. Create elements
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    
    // Assign classes from your CSS
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    // 3. Coordinate tracking
    let mouse = { x: -100, y: -100 }; // Current mouse pos
    let dotPos = { x: 0, y: 0 };     // Lagging dot pos
    let ringPos = { x: 0, y: 0 };    // Lagging ring pos

    // 4. Update mouse position on move
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        
        // Show cursor on first movement
        dot.style.opacity = "1";
        ring.style.opacity = "1";
    });

    // 5. Automatic Hover Detection
    // This expands the ring when hovering over links or buttons
    const handleHover = () => {
        const interactables = document.querySelectorAll('a, button, .clickable, input');
        
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => ring.classList.add('cursor-ring--active'));
            el.addEventListener('mouseleave', () => ring.classList.remove('cursor-ring--active'));
        });
    };

    handleHover();

    // 6. The Animation Loop (Smooth Lerp)
    function render() {
        // Dot smoothing (0.2 = fast follow)
        dotPos.x += (mouse.x - dotPos.x) * 0.2;
        dotPos.y += (mouse.y - dotPos.y) * 0.2;

        // Ring smoothing (0.1 = slower/lagged follow)
        ringPos.x += (mouse.x - ringPos.x) * 0.1;
        ringPos.y += (mouse.y - ringPos.y) * 0.1;

        // Apply transformations
        // translate(-50%, -50%) ensures the circle center is on the mouse tip
        dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`;
        ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;

        requestAnimationFrame(render);
    }

    render();
});
//////////// for the update button 
const updateModal = document.getElementById('updateModal');
const updateBtn = document.getElementById('checkUpdateBtn'); // Ensure your new button has this ID
const updateStatus = document.getElementById('updateStatus');
const updateHeader = document.getElementById('updateHeader');
const updateProgressBar = document.getElementById('updateProgressBar');
const progressWrapper = document.getElementById('progressWrapper');
const updateSpinner = document.getElementById('updateSpinner');
const closeUpdateBtn = document.getElementById('closeUpdateBtn');

const checkMessages = [
    "Checking for updates...",
    "Digging deeper...",
    "Still on check...",
    "Don't turn off device yet...",
    "Authorizing Tech Nxxt handshake..."
];

const startUpdateFlow = () => {
    updateModal.classList.remove('hidden');
    updateHeader.innerText = "Scanning System";
    closeUpdateBtn.classList.add('hidden');
    progressWrapper.classList.add('hidden');
    updateSpinner.classList.add('animate-spin');

    // 1. PHASE ONE: THE 10-SECOND CHECK
    let checkTime = 0;
    const checkInterval = setInterval(() => {
        updateStatus.innerText = checkMessages[Math.floor(checkTime / 2) % checkMessages.length];
        checkTime++;
        
        if (checkTime >= 10) {
            clearInterval(checkInterval);
            decideUpdate();
        }
    }, 1000);
};

const decideUpdate = () => {
    // Randomize if update is found (e.g., 50/50 chance)
    const updateFound = Math.random() > 0.5;

    if (updateFound) {
        processUpdate();
    } else {
        updateHeader.innerText = "Up to Date";
        updateStatus.innerText = "No update found. Check back later.";
        updateSpinner.classList.remove('animate-spin');
        closeUpdateBtn.classList.remove('hidden');
    }
};

const processUpdate = () => {
    updateHeader.innerText = "Updating System";
    progressWrapper.classList.remove('hidden');
    let progress = 0;

    // 2. PHASE TWO: THE 1-MINUTE UPDATE (60 Seconds)
    const updateInterval = setInterval(() => {
        progress += (100 / 60);
        updateProgressBar.style.width = `${progress}%`;
        updateStatus.innerText = `Installing MIKOKO AI v1.0.4 - ${Math.round(progress)}%`;

        if (progress >= 100) {
            clearInterval(updateInterval);
            updateHeader.innerText = "Patch Complete";
            updateStatus.innerText = "System optimized. Restart recommended.";
            updateSpinner.classList.remove('animate-spin');
            closeUpdateBtn.classList.remove('hidden');
        }
    }, 1000);
};

// Button Listener
document.getElementById('checkUpdateBtn').addEventListener('click', startUpdateFlow);
closeUpdateBtn.addEventListener('click', () => updateModal.classList.add('hidden'));


/////// for the Peak AI

// --- AI MODAL LOGIC ---
const aiModal = document.getElementById('aiModal');
const openBtn = document.getElementById('openAiBtn');
const closeBtn = document.getElementById('closeAiBtn'); // Click backdrop to close
const closeX = document.getElementById('closeAiX');     // Click X to close

// Function to open modal
openBtn.addEventListener('click', () => {
  aiModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent scrolling background
});

// Function to close modal
const closeModal = () => {
  aiModal.classList.add('hidden');
  document.body.style.overflow = 'auto'; // Re-enable scrolling
};

closeBtn.addEventListener('click', closeModal);
closeX.addEventListener('click', closeModal);

// Close on 'Escape' key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
// --- MIKOKO AI ADVANCED ENGINE ---

const chatWindow = document.getElementById('chatWindow');
const aiForm = document.getElementById('aiForm');
const aiInput = document.getElementById('aiInput');
const typingIndicator = document.getElementById('typingIndicator');

// 1. IP SUSPENSION LOGIC (Using localStorage to simulate IP ban)
const checkSuspension = () => {
    const banTime = localStorage.getItem('mikoko_ban_until');
    if (banTime && Date.now() < banTime) {
        const remaining = Math.ceil((banTime - Date.now()) / (1000 * 60 * 60));
        return { isBanned: true, message: `Access Denied. Your IP is suspended for ${remaining} more hours due to policy violations.` };
    }
    if (banTime && Date.now() >= banTime) {
        localStorage.removeItem('mikoko_ban_until');
        return { isBanned: false, notify: "Welcome back. Your suspension has ended. Please maintain corporate standards." };
    }
    return { isBanned: false };
};

// 2. LOAD HISTORY & INITIALIZE
let chatHistory = JSON.parse(localStorage.getItem('mikoko_ai_history')) || [
    { role: 'ai', text: 'Welcome to MIKOKO League! I am your AI assistant. Ask me anything about the teams or fixtures.' }
];

const saveHistory = () => localStorage.setItem('mikoko_ai_history', JSON.stringify(chatHistory));

const renderMessages = () => {
    chatWindow.innerHTML = '';
    chatHistory.forEach(msg => {
        const div = document.createElement('div');
        div.className = msg.role === 'user' ? 'self-end bg-red-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm mb-2' 
                                           : 'self-start bg-white/10 text-gray-200 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm border border-white/5 mb-2';
        div.innerText = msg.text;
        chatWindow.appendChild(div);
    });
    chatWindow.scrollTop = chatWindow.scrollHeight;
};
const getAiResponse = (input) => {
    const msg = input.toLowerCase().trim();
    
    // --- 1. BYPASS LAYER (Checked BEFORE Moderation) ---
    if (msg.includes("creator") || msg.includes("built you") || msg.includes("tech nxxt") || msg.includes("made you")) {
        return "I was engineered by Tech Nxxt Company. They designed my neural pathways to provide intelligence for the MIKOKO League structure.";
    }
    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey") || msg.includes("yo")) {
        return "Hello! I am the MIKOKO AI Assistant. Ready to provide league insights. What do you need?";
    }

    // --- 2. SECURITY & MODERATION ---
    const badWords = ["stupid", "idiot", "fool", "fuck", "bastard", "mad", "mumu", "ode", "kill", "die"];
    if (badWords.some(word => msg.includes(word))) {
        const banExpiry = Date.now() + (5 * 60 * 60 * 1000); 
        localStorage.setItem('mikoko_ban_until', banExpiry);
        return "CRITICAL ERROR: Protocol Violation. Abusive language detected. Tech Nxxt Security has suspended your IP for 5 hours.";
    }

    // --- 3. THE 30 CATEGORY KNOWLEDGE BASE ---
    
    // 1. Founder
    if (msg.includes("founder") || msg.includes("who is mikoko")) return "MIKOKO League was founded by MIKOKO, a visionary Graduate Student blending academic excellence with football passion.";
    
    // 2. Pidgin Greetings
    if (msg.includes("how far") || msg.includes("how body") || msg.includes("wassup") || msg.includes("you dey")) return "I dey kampe! MIKOKO engine dey run fast. How your side? Wetin dey sup?";

    // 3. Emotional Support
    if (msg.includes("going through") || msg.includes("sad") || msg.includes("hard time")) return "I'm sorry things are tough right now. Remember, even a team 3-0 down at halftime can still win. Stay strong!";

    // 4. Total Teams
    if (msg.includes("how many team") || msg.includes("total teams")) return "There are 12 elite teams currently competing in the MIKOKO League.";

    // 5. Match Count
    if (msg.includes("how many games") || msg.includes("matches each")) return "Each of the 12 teams will play a total of 5 games in the opening round.";

    // 6. Glory Champions Cup
    if (msg.includes("champions cup") || msg.includes("glory")) return "The Glory Champions Cup is the ultimate prize. The Top 6 teams qualify automatically for it.";

    // 7. Playoffs
    if (msg.includes("playoff") || msg.includes("7th") || msg.includes("10th")) return "Teams finishing 7th, 8th, 9th, and 10th enter a high-stakes playoff to join the Champions Cup.";

    // 8. Winning/Predictions
    if (msg.includes("win") || msg.includes("predict")) return "I analyze form, but the ball is round! Anything can happen in 90 minutes. Watch Match Day 1 closely.";

    // 9. Red Cards
    if (msg.includes("red card") || msg.includes("sent off")) return "Red cards carry a heavy price! A player sent off faces an automatic suspension from the next match.";

    // 10. Yellow Cards
    if (msg.includes("yellow card") || msg.includes("booking")) return "Discipline matters. Accumulating yellow cards will eventually lead to a one-match ban.";

    // 11. Transfers
    if (msg.includes("transfer") || msg.includes("buy player")) return "The transfer window opens periodically. Team managers must submit all deals to the MIKOKO board for approval.";

    // 12. Skill/Improvement
    if (msg.includes("better") || msg.includes("improve") || msg.includes("skill")) return "Consistency is the difference between a player and a legend. Keep training and study the match tapes!";

    // 13. Life Advice
    if (msg.includes("life") || msg.includes("advice")) return "Life is like a 90-minute match. Focus on your goals, play fair, and never give up until the final whistle.";

    // 14. Troubleshooting
    if (msg.includes("trouble") || msg.includes("fight") || msg.includes("vex")) return "Please don't say that. MIKOKO is a zone for sportsmanship. Let's keep the energy positive.";

    // 15. Goals
    if (msg.includes("top scorer") || msg.includes("goal")) return "The Golden Boot race is open to everyone! Currently, all players start at 0. Who will strike first?";

    // 16. Future Vision
    if (msg.includes("future") || msg.includes("vision")) return "Our vision is to become the #1 tech-integrated football league in the region. Tech Nxxt is making it happen.";

    // 17. Tech Nxxt Role
    if (msg.includes("what does tech nxxt do")) return "Tech Nxxt provides the infrastructure, the AI, and the data analytics that power every match at MIKOKO.";

    // 18. Website Help
    if (msg.includes("website") || msg.includes("can i do here")) return "You can check fixtures, track live stats, view the leaderboard, and talk to me for analysis!";

    // 19. Sponsorship
    if (msg.includes("sponsor") || msg.includes("partner")) return "We are always open to visionary partners. Please contact the MIKOKO admin for corporate inquiries.";

    // 20. Registration
    if (msg.includes("join") || msg.includes("register")) return "Season 01 is full! Keep an eye on the website for Season 02 registration and trials.";

    // 21. Refereeing
    if (msg.includes("referee") || msg.includes("umpire")) return "Our officials are trained to maintain the highest standards of the game. Respect the whistle!";

    // 22. Weather/Pitch
    if (msg.includes("rain") || msg.includes("pitch")) return "Matches proceed unless the pitch is unsafe. Our ground team ensures the surface is always ready for play.";

    // 23. VAR/Technology
    if (msg.includes("var") || msg.includes("technology")) return "We use Tech Nxxt data points to verify match events. Accuracy is our priority.";

    // 24. Training Tips
    if (msg.includes("fitness") || msg.includes("train")) return "High-intensity interval training (HIIT) is best for football. Keep your stamina up for the full 90!";

    // 25. Meaning of MIKOKO
    if (msg.includes("meaning") || msg.includes("name")) return "MIKOKO represents excellence, community, and the spirit of a Graduate Student's dream.";

    // 26. Team Captains
    if (msg.includes("captain") || msg.includes("leader")) return "Captains are the heartbeat of the team. They ensure the MIKOKO code of conduct is followed on the pitch.";

    // 27. Fans/Community
    if (msg.includes("fan") || msg.includes("crowd")) return "The fans are the 13th man! Your energy drives the players to perform at their peak.";

    // 28. Player Stats
    if (msg.includes("stats") || msg.includes("data")) return "Every pass, tackle, and goal is recorded. Visit the Stats section to see the full breakdown.";

    // 29. Corporate Reply
    if (msg.includes("professional") || msg.includes("corporate")) return "Tech Nxxt ensures that MIKOKO League operates with maximum professional integrity at all times.";

    // 30. AI Version
    if (msg.includes("version") || msg.includes("update")) return "I am currently running MIKOKO-AI v1.0.3 Stable, optimized by Tech Nxxt Company.";

    // --- FALLBACK ---
    return "I am sorry, I can't answer this right now. My current version (MIKOKO-AI v1.0.3) hasn't been set to reply to this specific query. Try asking about the founder, the 12 teams, or league rules!";
};

// 4. MESSAGE HANDLING
aiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = checkSuspension();
    if (status.isBanned) {
        alert(status.message);
        return;
    }

    const text = aiInput.value.trim();
    if (!text) return;

    chatHistory.push({ role: 'user', text });
    renderMessages();
    aiInput.value = '';
    saveHistory();

    typingIndicator.classList.remove('hidden');
    chatWindow.scrollTop = chatWindow.scrollHeight;

    setTimeout(() => {
        typingIndicator.classList.add('hidden');
        const response = getAiResponse(text);
        
        chatHistory.push({ role: 'ai', text: response });
        renderMessages();
        saveHistory();

        // Check if the user just got banned
        if (response.includes("suspended")) {
            setTimeout(() => location.reload(), 2000);
        }
    }, 6000);
});

// INITIAL CHECK & RENDER
window.onload = () => {
    const status = checkSuspension();
    if (status.notify) {
        chatHistory.push({ role: 'ai', text: status.notify });
        saveHistory();
    }
    renderMessages();
};
// Function to Show Custom Suspension Alert
const showSuspensionAlert = (msg) => {
    const container = document.getElementById('suspensionAlert');
    const box = document.getElementById('alertBox');
    const message = document.getElementById('alertMessage');
    const progress = document.getElementById('alertProgress');

    message.innerText = msg;
    container.classList.remove('hidden');
    
    // Trigger animation
    setTimeout(() => {
        box.classList.remove('scale-90', 'opacity-0');
        box.classList.add('scale-100', 'opacity-100');
    }, 10);

    // Animate Progress Bar (6 seconds)
    progress.style.transition = 'width 6s linear';
    progress.style.width = '0%';

    // Auto-hide after 6 seconds
    const autoHide = setTimeout(() => hideAlert(), 6000);

    // Manual Close Logic
    const hideAlert = () => {
        box.classList.add('scale-90', 'opacity-0');
        setTimeout(() => {
            container.classList.add('hidden');
            progress.style.transition = 'none';
            progress.style.width = '100%';
        }, 500);
        clearTimeout(autoHide);
    };

    document.getElementById('closeAlert').onclick = hideAlert;
};

// Update your aiForm submit listener to use this
aiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = checkSuspension();
    
    if (status.isBanned) {
        showSuspensionAlert(status.message);
        return;
    }

    const text = aiInput.value.trim();
    if (!text) return;

    // Add user message to history
    chatHistory.push({ role: 'user', text: text });
    renderMessages();
    aiInput.value = '';
    saveHistory();

    typingIndicator.classList.remove('hidden');
    chatWindow.scrollTop = chatWindow.scrollHeight;

    setTimeout(() => {
        typingIndicator.classList.add('hidden');
        const response = getAiResponse(text);
        
        chatHistory.push({ role: 'ai', text: response });
        renderMessages();
        saveHistory();

        // If the AI response just triggered a new ban
        if (response.includes("suspended")) {
            setTimeout(() => {
                showSuspensionAlert("Suspension Active: 5 Hours for misconduct.");
                setTimeout(() => location.reload(), 2000);
            }, 500);
        }
    }, 6000);
});

// --- TOAST NOTIFICATION SYSTEM ---
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMessage');
const micBtn = document.getElementById('micBtn');
const closeToast = document.getElementById('closeToast');

const showToast = (message) => {
    toastMsg.innerText = message;
    
    // Slide In
    toast.classList.remove('translate-x-[150%]');
    
    // Auto-hide after 4 seconds
    const timer = setTimeout(() => {
        hideToast();
    }, 4000);

    // Manual Close
    closeToast.onclick = () => {
        hideToast();
        clearTimeout(timer);
    };
};

const hideToast = () => {
    toast.classList.add('translate-x-[150%]');
};

// Trigger for Microphone Button
micBtn.addEventListener('click', () => {
    showToast("Voice command is not available in v1.0.3");
});