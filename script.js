/**
 * MIKOKO League - Unified Script v1.0.4
 * Includes: Cursor, Update System, AI Modal, AI Engine, and Mission Briefing.
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SMOOTH CURSOR SYSTEM ---
    if (!window.matchMedia("(pointer: coarse)").matches) {
        const dot = document.createElement('div');
        const ring = document.createElement('div');
        dot.className = 'cursor-dot';
        ring.className = 'cursor-ring';
        document.body.appendChild(dot);
        document.body.appendChild(ring);

        let mouse = { x: -100, y: -100 };
        let dotPos = { x: 0, y: 0 };
        let ringPos = { x: 0, y: 0 };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            dot.style.opacity = "1";
            ring.style.opacity = "1";
        });

        const handleHover = () => {
            const interactables = document.querySelectorAll('a, button, .clickable, input');
            interactables.forEach(el => {
                el.addEventListener('mouseenter', () => ring.classList.add('cursor-ring--active'));
                el.addEventListener('mouseleave', () => ring.classList.remove('cursor-ring--active'));
            });
        };
        handleHover();

        function renderCursor() {
            dotPos.x += (mouse.x - dotPos.x) * 0.2;
            dotPos.y += (mouse.y - dotPos.y) * 0.2;
            ringPos.x += (mouse.x - ringPos.x) * 0.1;
            ringPos.y += (mouse.y - ringPos.y) * 0.1;
            dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`;
            ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
            requestAnimationFrame(renderCursor);
        }
        renderCursor();
    }

    // --- 2. UPDATE SYSTEM LOGIC ---
    const updateModal = document.getElementById('updateModal');
    const updateStatus = document.getElementById('updateStatus');
    const updateHeader = document.getElementById('updateHeader');
    const updateProgressBar = document.getElementById('updateProgressBar');
    const progressWrapper = document.getElementById('progressWrapper');
    const updateSpinner = document.getElementById('updateSpinner');
    const closeUpdateBtn = document.getElementById('closeUpdateBtn');
    const checkUpdateBtn = document.getElementById('checkUpdateBtn');

    const checkMessages = [
        "Checking for updates...", "Digging deeper...", "Still on check...",
        "Don't turn off device yet...", "Authorizing Tech Nxxt handshake..."
    ];

    if (checkUpdateBtn) {
        checkUpdateBtn.addEventListener('click', () => {
            updateModal.classList.remove('hidden');
            updateHeader.innerText = "Scanning System";
            closeUpdateBtn.classList.add('hidden');
            progressWrapper.classList.add('hidden');
            updateSpinner.classList.add('animate-spin');

            let checkTime = 0;
            const checkInterval = setInterval(() => {
                updateStatus.innerText = checkMessages[Math.floor(checkTime / 2) % checkMessages.length];
                checkTime++;
                if (checkTime >= 10) {
                    clearInterval(checkInterval);
                    const updateFound = Math.random() > 0.5;
                    if (updateFound) {
                        processUpdate();
                    } else {
                        updateHeader.innerText = "Up to Date";
                        updateStatus.innerText = "No update found. Check back later.";
                        updateSpinner.classList.remove('animate-spin');
                        closeUpdateBtn.classList.remove('hidden');
                    }
                }
            }, 1000);
        });
    }

    function processUpdate() {
        updateHeader.innerText = "Updating System";
        progressWrapper.classList.remove('hidden');
        let progress = 0;
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
    }

    closeUpdateBtn?.addEventListener('click', () => updateModal.classList.add('hidden'));

    // --- 3. AI MODAL & ENGINE ---
    const aiModal = document.getElementById('aiModal');
    const openAiBtn = document.getElementById('openAiBtn');
    const closeAiBtn = document.getElementById('closeAiBtn');
    const closeAiX = document.getElementById('closeAiX');
    const chatWindow = document.getElementById('chatWindow');
    const aiForm = document.getElementById('aiForm');
    const aiInput = document.getElementById('aiInput');
    const typingIndicator = document.getElementById('typingIndicator');

    const checkSuspension = () => {
        const banTime = localStorage.getItem('mikoko_ban_until');
        if (banTime && Date.now() < banTime) {
            const remaining = Math.ceil((banTime - Date.now()) / (1000 * 60 * 60));
            return { isBanned: true, message: `Access Denied. Your IP is suspended for ${remaining} more hours.` };
        }
        if (banTime && Date.now() >= banTime) {
            localStorage.removeItem('mikoko_ban_until');
            return { isBanned: false, notify: "Welcome back. Suspension ended." };
        }
        return { isBanned: false };
    };

    let chatHistory = JSON.parse(localStorage.getItem('mikoko_ai_history')) || [
        { role: 'ai', text: 'Welcome to MIKOKO League! I am your AI assistant.' }
    ];

    const renderMessages = () => {
        chatWindow.innerHTML = chatHistory.map(msg => `
            <div class="${msg.role === 'user' ? 'self-end bg-red-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm mb-2' 
                                             : 'self-start bg-white/10 text-gray-200 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm border border-white/5 mb-2'}">
                ${msg.text}
            </div>
        `).join('');
        chatWindow.scrollTop = chatWindow.scrollHeight;
    };

    const getAiResponse = (input) => {
        const msg = input.toLowerCase().trim();
        const badWords = ["stupid", "idiot", "fool", "fuck", "bastard", "mad", "mumu", "ode", "kill", "die"];

        if (msg.includes("creator") || msg.includes("built you") || msg.includes("tech nxxt")) return "I was engineered by Tech Nxxt Company for MIKOKO League.";
        if (badWords.some(word => msg.includes(word))) {
            localStorage.setItem('mikoko_ban_until', Date.now() + (5 * 60 * 60 * 1000));
            return "CRITICAL ERROR: Protocol Violation. IP suspended for 5 hours.";
        }
        if (msg.includes("founder")) return "MIKOKO League was founded by MIKOKO, a visionary Graduate Student.";
        if (msg.includes("team")) return "There are 12 elite teams currently competing.";
        
        return "I am MIKOKO-AI v1.0.4. Ask me about the founder, teams, or rules!";
    };

    aiForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const status = checkSuspension();
        if (status.isBanned) {
            showSuspensionAlert(status.message);
            return;
        }

        const text = aiInput.value.trim();
        if (!text) return;

        chatHistory.push({ role: 'user', text });
        renderMessages();
        aiInput.value = '';
        typingIndicator.classList.remove('hidden');

        setTimeout(() => {
            typingIndicator.classList.add('hidden');
            const response = getAiResponse(text);
            chatHistory.push({ role: 'ai', text: response });
            localStorage.setItem('mikoko_ai_history', JSON.stringify(chatHistory));
            renderMessages();
            if (response.includes("suspended")) {
                showSuspensionAlert("Suspension Active: 5 Hours for misconduct.");
                setTimeout(() => location.reload(), 2000);
            }
        }, 3000);
    });

    openAiBtn?.addEventListener('click', () => {
        aiModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
        aiModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };
    closeAiBtn?.addEventListener('click', closeModal);
    closeAiX?.addEventListener('click', closeModal);

    // --- 4. TOAST & ALERTS ---
    const showSuspensionAlert = (msg) => {
        const container = document.getElementById('suspensionAlert');
        const box = document.getElementById('alertBox');
        const message = document.getElementById('alertMessage');
        const progress = document.getElementById('alertProgress');
        if(!container) return;
        message.innerText = msg;
        container.classList.remove('hidden');
        progress.style.width = '100%';
        setTimeout(() => { progress.style.transition = 'width 6s linear'; progress.style.width = '0%'; }, 10);
        setTimeout(() => container.classList.add('hidden'), 6000);
    };

    const micBtn = document.getElementById('micBtn');
    micBtn?.addEventListener('click', () => {
        const toast = document.getElementById('toast');
        const toastMsg = document.getElementById('toastMessage');
        toastMsg.innerText = "Voice command is not available in v1.0.4";
        toast.classList.remove('translate-x-[150%]');
        setTimeout(() => toast.classList.add('translate-x-[150%]'), 4000);
    });

    // --- 5. INITIAL RENDER ---
    renderMessages();
});

// MISSION BRIEFING LOGIC (Globally accessible)
function showSlide(index) {
    const slides = document.querySelectorAll('.briefing-slide');
    const dots = document.querySelectorAll('.dot');
    slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
        dots[i].classList.toggle('bg-red-600', i === index);
        dots[i].classList.toggle('bg-gray-800', i !== index);
    });
}

let currentSlide = 0;
function nextSlide() { currentSlide = (currentSlide + 1) % 3; showSlide(currentSlide); }
function prevSlide() { currentSlide = (currentSlide - 1 + 3) % 3; showSlide(currentSlide); }
function closeBriefing() {
    const briefing = document.getElementById('missionBriefing');
    briefing.classList.add('opacity-0');
    setTimeout(() => briefing.style.display = 'none', 500);
}
