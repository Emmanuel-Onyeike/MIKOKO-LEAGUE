/**
 * MIKOKO League - Unified System Script v1.0.4
 * Includes: Smooth Cursor, AI Engine v1.0.4, System Update Flow, and UI Modals.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SYSTEM CONSTANTS & STATE ---
    const STATE = {
        isMobile: window.matchMedia("(pointer: coarse)").matches,
        chatHistory: JSON.parse(localStorage.getItem('mikoko_ai_history')) || [
            { role: 'ai', text: 'Welcome to MIKOKO League! I am your AI assistant. Ask me anything about the teams or fixtures.' }
        ],
        banDuration: 5 * 60 * 60 * 1000, // 5 Hours
    };

    // --- 2. SMOOTH CURSOR ENGINE ---
    if (!STATE.isMobile) {
        const dot = document.createElement('div');
        const ring = document.createElement('div');
        dot.className = 'cursor-dot';
        ring.className = 'cursor-ring';
        document.body.appendChild(dot);
        document.body.appendChild(ring);

        let mouse = { x: -100, y: -100 }, dotPos = { x: 0, y: 0 }, ringPos = { x: 0, y: 0 };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX; mouse.y = e.clientY;
            dot.style.opacity = ring.style.opacity = "1";
        });

        const renderCursor = () => {
            dotPos.x += (mouse.x - dotPos.x) * 0.2;
            dotPos.y += (mouse.y - dotPos.y) * 0.2;
            ringPos.x += (mouse.x - ringPos.x) * 0.1;
            ringPos.y += (mouse.y - ringPos.y) * 0.1;
            dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`;
            ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
            requestAnimationFrame(renderCursor);
        };
        renderCursor();

        // Hover Effect
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('a, button, .clickable, input')) ring.classList.add('cursor-ring--active');
        });
        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('a, button, .clickable, input')) ring.classList.remove('cursor-ring--active');
        });
    }

    // --- 3. PEAK AI ENGINE (MODULAR & OPTIMIZED) ---
    const KNOWLEDGE_BASE = {
        founder: "MIKOKO League was founded by MIKOKO, a visionary Graduate Student blending academic excellence with football passion.",
        teams: "There are 12 elite teams currently competing in the MIKOKO League.",
        games: "Each of the 12 teams will play a total of 5 games in the opening round.",
        cup: "The Glory Champions Cup is the ultimate prize. The Top 6 teams qualify automatically.",
        playoff: "Teams finishing 7th-10th enter high-stakes playoffs to join the Champions Cup.",
        creator: "I was engineered by Tech Nxxt Company to provide intelligence for the MIKOKO League.",
        pidgin: ["how far", "how body", "wassup"],
        support: ["sad", "hard time", "going through"],
        rules: ["red card", "yellow card", "referee", "var"],
        tech: ["tech nxxt", "infrastructure", "data"],
        meaning: "MIKOKO represents excellence, community, and the spirit of a Graduate Student's dream."
    };

    const getAiResponse = (input) => {
        const msg = input.toLowerCase();
        
        // Security Moderation
        const toxic = ["stupid", "idiot", "fuck", "bastard", "kill", "die"];
        if (toxic.some(word => msg.includes(word))) {
            localStorage.setItem('mikoko_ban_until', Date.now() + STATE.banDuration);
            return "CRITICAL ERROR: Protocol Violation. Tech Nxxt Security has suspended your IP.";
        }

        // Logic Mapping
        if (msg.includes("founder")) return KNOWLEDGE_BASE.founder;
        if (msg.includes("team")) return KNOWLEDGE_BASE.teams;
        if (msg.includes("game") || msg.includes("match")) return KNOWLEDGE_BASE.games;
        if (msg.includes("cup") || msg.includes("glory")) return KNOWLEDGE_BASE.cup;
        if (msg.includes("tech")) return KNOWLEDGE_BASE.tech[0];
        if (KNOWLEDGE_BASE.pidgin.some(p => msg.includes(p))) return "I dey kampe! MIKOKO engine dey run fast. How your side?";
        
        return "I'm currently running MIKOKO-AI v1.0.4. Try asking about the founder, teams, or Tech Nxxt infrastructure.";
    };

    // --- 4. UI HANDLERS (MODALS & UPDATES) ---
    const ui = {
        aiForm: document.getElementById('aiForm'),
        aiInput: document.getElementById('aiInput'),
        chatWindow: document.getElementById('chatWindow'),
        updateModal: document.getElementById('updateModal'),
        updateProgressBar: document.getElementById('updateProgressBar'),
        updateStatus: document.getElementById('updateStatus')
    };

    const checkSuspension = () => {
        const banTime = localStorage.getItem('mikoko_ban_until');
        if (banTime && Date.now() < banTime) {
            const hours = Math.ceil((banTime - Date.now()) / (1000 * 60 * 60));
            return { banned: true, msg: `Access Denied. IP suspended for ${hours} more hours.` };
        }
        return { banned: false };
    };

    const renderChat = () => {
        ui.chatWindow.innerHTML = STATE.chatHistory.map(msg => `
            <div class="${msg.role === 'user' ? 'self-end bg-red-600' : 'self-start bg-white/10 border border-white/5'} p-3 rounded-2xl max-w-[80%] text-sm mb-2 text-white">
                ${msg.text}
            </div>
        `).join('');
        ui.chatWindow.scrollTop = ui.chatWindow.scrollHeight;
    };

    ui.aiForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const status = checkSuspension();
        if (status.banned) return alert(status.msg);

        const text = ui.aiInput.value.trim();
        if (!text) return;

        STATE.chatHistory.push({ role: 'user', text });
        renderChat();
        ui.aiInput.value = '';

        setTimeout(() => {
            const response = getAiResponse(text);
            STATE.chatHistory.push({ role: 'ai', text: response });
            localStorage.setItem('mikoko_ai_history', JSON.stringify(STATE.chatHistory));
            renderChat();
            if (response.includes("suspended")) setTimeout(() => location.reload(), 1500);
        }, 1500);
    });

    // --- 5. INITIALIZATION ---
    renderChat();
});
