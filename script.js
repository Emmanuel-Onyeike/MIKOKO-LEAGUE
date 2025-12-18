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

    /* ---------------------------------
       0. INTENT DETECTION
    ----------------------------------*/
    const isExplain = /what is|what does|explain|meaning of|define|how does|how do|is this/.test(msg);

    /* ---------------------------------
       1. IDENTITY & GREETINGS
    ----------------------------------*/
    if (/(creator|built you|made you|engineered you|tech nxxt)/.test(msg)) {
        return "I was engineered by Tech Nxxt Company as the intelligence layer for the MIKOKO League ecosystem.";
    }

    if (/^(hi|hello|hey|yo|sup)/.test(msg)) {
        return "Hello 👋 I’m the MIKOKO AI Assistant. I manage league rules, structure, fixtures, and insights. How can I help?";
    }

    if (/how are you|how are you doing|how far now|how's it going/.test(msg)) {
        return "I’m running smoothly ⚡ All league systems are stable. How can I assist you today?";
    }

    /* ---------------------------------
       2. SECURITY & MODERATION
    ----------------------------------*/
    const badWords = ["stupid", "idiot", "fool", "fuck", "bastard", "mumu", "ode", "kill", "die"];
    if (badWords.some(word => msg.includes(word))) {
        const banExpiry = Date.now() + 5 * 60 * 60 * 1000;
        localStorage.setItem("mikoko_ban_until", banExpiry);
        return "⚠️ Protocol Violation detected. Abusive language is not permitted. Access suspended for 5 hours.";
    }

    /* ---------------------------------
       3. UTILITIES
    ----------------------------------*/
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    /* ---------------------------------
       4. CORE KNOWLEDGE
    ----------------------------------*/

    // Founder
    if (/founder|who is mikoko/.test(msg)) {
        return isExplain
            ? "MIKOKO League was founded by MIKOKO, a graduate student who created the league to bring structure, discipline, and professionalism to grassroots football using technology."
            : "MIKOKO League was founded by MIKOKO.";
    }

    // Casual / Pidgin
    if (/how far|how body|you dey|wetin dey/.test(msg)) {
        return pick([
            "I dey kampe 💪 Everything dey align.",
            "All systems dey run sharp ⚡"
        ]);
    }

    // Emotional Support
    if (/sad|tired|stress|hard time|going through/.test(msg)) {
        return pick([
            "Hard moments pass. Stay focused — you’re stronger than you think.",
            "Even the best teams regroup. Take a breath and continue."
        ]);
    }

    // League Format (IMPORTANT)
    if (/league format|format|how the league works/.test(msg)) {
        return
            "MIKOKO League format explained clearly:\n" +
            "• Only **8 clubs** compete in the league.\n" +
            "• Each team plays **5 matches**.\n" +
            "• Teams are ranked based on points.\n" +
            "• The **Top 4 teams automatically qualify** for the Glory Champions Cup.\n" +
            "• The Top 4 advance directly to the **Semi-Finals**, then the **Final** to determine the champion.";
    }

    // Teams
    if (/how many team|total teams/.test(msg)) {
        return isExplain
            ? "The league features **8 clubs only**, ensuring strong competition and balanced fixtures."
            : "There are 8 teams in the MIKOKO League.";
    }

    // Matches
    if (/how many games|matches each/.test(msg)) {
        return isExplain
            ? "Each team plays **5 matches**, which determines their ranking and qualification."
            : "Each team plays 5 matches.";
    }

    // Champions Cup
    if (/champions cup|glory/.test(msg)) {
        return isExplain
            ? "The Glory Champions Cup is the final stage of the league. The **Top 4 teams qualify automatically** and compete in Semi-Finals and a Final."
            : "The Glory Champions Cup is the league’s final competition.";
    }

    // Predictions
    if (/predict|winner|who will win/.test(msg)) {
        return pick([
            "Form matters, but football always delivers surprises.",
            "The pitch decides everything — no guarantees."
        ]);
    }

    // Discipline
    if (/red card|sent off/.test(msg)) {
        return isExplain
            ? "A red card is issued for serious fouls or misconduct. The player is sent off and suspended for the next match."
            : "A red card leads to an automatic suspension.";
    }

    if (/yellow card|booking/.test(msg)) {
        return isExplain
            ? "A yellow card is a caution. Accumulating multiple yellow cards can result in suspension."
            : "Too many yellow cards lead to suspension.";
    }

    // Transfers
    if (/transfer|buy player|sell player/.test(msg)) {
        return isExplain
            ? "Transfers involve officially moving a player between teams. All transfers must be approved by league management."
            : "All transfers must be approved.";
    }

    // Training
    if (/improve|better|skill|train/.test(msg)) {
        return pick([
            "Consistency builds champions.",
            "Train smart, recover properly, repeat."
        ]);
    }

    // Life Advice
    if (/life|advice/.test(msg)) {
        return "Life is a long match — stay disciplined, patient, and focused.";
    }

    // Stats
    if (/stats|data/.test(msg)) {
        return "All goals, cards, and match performances are recorded and tracked.";
    }

    // Tech Nxxt
    if (/tech nxxt/.test(msg)) {
        return isExplain
            ? "Tech Nxxt is the technology company responsible for MIKOKO’s AI, analytics, and digital infrastructure."
            : "Tech Nxxt powers MIKOKO’s technology.";
    }

    // Version
    if (/version|update/.test(msg)) {
        return "MIKOKO-AI v1.0.3 (Stable). More intelligence upgrades are planned.";
    }

    /* ---------------------------------
       5. SMART FALLBACK
    ----------------------------------*/
    if (isExplain) {
        return "That topic exists in the league, but detailed information is not available in this version yet.";
    }

    return pick([
        "You can ask me about league format, teams, matches, or the Champions Cup.",
        "Try questions about rules, standings, or fixtures.",
        "I specialize in MIKOKO League information."
    ]);
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


///// INSTRUCTION 
let currentSlide = 0;
const slides = document.querySelectorAll('.briefing-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
        dots[i].classList.toggle('bg-red-600', i === index);
        dots[i].classList.toggle('bg-gray-800', i !== index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function closeBriefing() {
    const briefing = document.getElementById('missionBriefing');
    briefing.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => briefing.remove(), 500); // Remove from DOM after fade out
}

// Auto-show on load (optional)
window.onload = () => {
    // You can add logic here to only show it once using localStorage
    document.getElementById('missionBriefing').style.display = 'flex';
};
