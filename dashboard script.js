/**
 * MIKOKO LEAGUE - Command Center Core Script
 * Fully Functional Integrated Version
 */

// 1. SELECTORS
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const mainDisplay = document.getElementById('mainDisplay'); 
const greetingElement = document.getElementById('greeting');
const viewTitle = document.getElementById('viewTitle');

// 2. DYNAMIC GREETING LOGIC
function setGreeting() {
    const hour = new Date().getHours();
    let welcome;

    if (hour >= 5 && hour < 12) welcome = "Good morning";
    else if (hour >= 12 && hour < 17) welcome = "Good afternoon";
    else if (hour >= 17 && hour < 21) welcome = "Good evening";
    else welcome = "Good night";

    if (greetingElement) {
        greetingElement.innerText = `${welcome}, User`;
    }
}

// 3. MOBILE MENU TOGGLE
if (menuBtn) {
    menuBtn.onclick = () => mobileMenu.classList.remove('hidden');
}
if (overlay) {
    overlay.onclick = () => mobileMenu.classList.add('hidden');
}

// 4. CONTENT REPOSITORY (Updated for all new buttons)
const contentData = {
    'Overview': `
        <div class="space-y-6 animate-in">
            <h3 class="text-xl font-bold italic uppercase tracking-tighter text-red-600">Command Center</h3>
            <p class="text-gray-400">System v1.0.4 is active. Monitoring 12 team nodes across the league network.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-6 bg-white/5 border border-white/5 rounded-2xl">
                    <h4 class="text-white font-bold mb-2"><i class="fas fa-microchip mr-2 text-red-600"></i> AI Processing</h4>
                    <p class="text-xs text-gray-500 italic">"Predictive algorithms suggest a 12% increase in league-wide scoring for the upcoming matchday."</p>
                </div>
            </div>
        </div>`,
    
    'Standings': `
        <h3 class="text-xl font-bold italic uppercase tracking-tighter text-red-600 mb-6">League Table</h3>
        <div class="overflow-x-auto">
            <table class="w-full text-left text-sm">
                <thead>
                    <tr class="text-gray-500 border-b border-white/5 uppercase text-[10px] tracking-widest">
                        <th class="pb-4">Pos</th>
                        <th class="pb-4">Team</th>
                        <th class="pb-4">P</th>
                        <th class="pb-4">GD</th>
                        <th class="pb-4">Pts</th>
                    </tr>
                </thead>
                <tbody class="text-gray-300">
                    <tr class="border-b border-white/5"><td class="py-4 font-mono text-red-600">01</td><td class="py-4 font-bold">Mamba FC</td><td>0</td><td>0</td><td class="font-bold">0</td></tr>
                    <tr class="border-b border-white/5"><td class="py-4 font-mono text-red-600">02</td><td class="py-4 font-bold">Viper Squad</td><td>0</td><td>0</td><td class="font-bold">0</td></tr>
                </tbody>
            </table>
        </div>`,

    'Live': `
        <div class="flex flex-col items-center justify-center py-12 text-center">
            <div class="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-4">
                <div class="w-4 h-4 bg-red-600 rounded-full animate-ping"></div>
            </div>
            <h3 class="text-xl font-bold italic uppercase text-white">Live Monitor</h3>
            <p class="text-gray-500 mt-2 max-w-xs">Scanning MIKOKO frequencies... No active match broadcasts detected at this time.</p>
        </div>`,

    'Upcoming': `
        <h3 class="text-xl font-bold italic uppercase tracking-tighter text-red-600 mb-6">Match Schedule</h3>
        <div class="grid gap-4">
            <div class="p-5 bg-white/5 border border-white/5 rounded-2xl flex justify-between items-center group hover:border-red-600/30 transition-all">
                <div>
                    <span class="block text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Saturday, 18:00</span>
                    <span class="text-white font-bold">Mamba FC <span class="text-red-600 mx-2">vs</span> Viper Squad</span>
                </div>
                <i class="fas fa-ticket text-gray-700 group-hover:text-red-600"></i>
            </div>
        </div>`,

    'Stats': `
        <h3 class="text-xl font-bold italic uppercase tracking-tighter text-red-600 mb-6">Player Analytics</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-6 bg-white/5 border border-white/5 rounded-2xl">
                <p class="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-2">Top Scorer</p>
                <p class="text-white font-black italic text-lg">PENDING_START</p>
            </div>
            <div class="p-6 bg-white/5 border border-white/5 rounded-2xl">
                <p class="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-2">Clean Sheets</p>
                <p class="text-white font-black italic text-lg">NULL_DATA</p>
            </div>
        </div>`,

    'Highlights': `
        <h3 class="text-xl font-bold italic uppercase tracking-tighter text-red-600 mb-6">VOD Library</h3>
        <div class="aspect-video bg-white/5 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center group cursor-pointer hover:bg-white/10 transition-all">
            <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/40 mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-play text-white ml-1"></i>
            </div>
            <p class="text-gray-500 text-xs font-bold uppercase tracking-widest">Season 01 Vault Empty</p>
        </div>`,
        
        'Goals Leaderboard': `
        <h3 class="text-xl font-bold italic uppercase tracking-tighter text-red-600 mb-6">Golden Boot Race</h3>
        <div class="space-y-3">
            <div class="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                <div class="flex items-center gap-4">
                    <span class="font-black italic text-red-600">01</span>
                    <span class="font-bold">Pending Player</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-xl font-black">0</span>
                    <span class="text-[10px] text-gray-500 uppercase font-bold">Goals</span>
                </div>
            </div>
            <p class="text-center text-gray-600 text-xs italic mt-4">Data updates automatically after every match whistle.</p>
        </div>`,

    'Assists Leaderboard': `
        <h3 class="text-xl font-bold italic uppercase tracking-tighter text-red-600 mb-6">Playmaker Rankings</h3>
        <div class="space-y-3">
            <div class="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                <div class="flex items-center gap-4">
                    <span class="font-black italic text-red-600">01</span>
                    <span class="font-bold">Pending Player</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-xl font-black">0</span>
                    <span class="text-[10px] text-gray-500 uppercase font-bold">Assists</span>
                </div>
            </div>
            <p class="text-center text-gray-600 text-xs italic mt-4">Tracking the creative engine of MIKOKO League.</p>
        </div>`,

    'News': `
        <h3 class="text-xl font-bold italic uppercase tracking-tighter text-red-600 mb-6">Latest Updates</h3>
        <div class="space-y-4">
            <div class="p-6 border-l-4 border-red-600 bg-white/5 rounded-r-2xl">
                <h4 class="text-white font-bold">Registration Portal Open</h4>
                <p class="text-gray-500 text-sm mt-1">Managers can now register their rosters for the upcoming December sequence.</p>
            </div>
        </div>`,

    'Transfer Market': `
        <h3 class="text-xl font-bold italic uppercase tracking-tighter text-red-600 mb-6">Market Terminal</h3>
        <div class="p-10 text-center border border-dashed border-white/10 rounded-3xl">
            <i class="fas fa-handshake-slash text-3xl text-gray-700 mb-4"></i>
            <p class="text-gray-500 italic">Transfer window is currently <span class="text-red-600">Locked</span>.</p>
        </div>`,

    'Mikoko Payment': `
        <h3 class="text-xl font-bold italic uppercase tracking-tighter text-red-600 mb-6">Financial Node</h3>
        <div class="p-8 bg-gradient-to-br from-red-600/20 to-transparent border border-white/5 rounded-3xl">
            <p class="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">M-AI Balance</p>
            <h4 class="text-3xl font-black text-white italic">0.00 <span class="text-sm text-red-600 not-italic">CREDITS</span></h4>
            <button class="mt-6 px-6 py-3 bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-red-700 transition-colors">Deposit Funds</button>
        </div>`
};

// 5. THE CORE ENGINE
function updateView(title) {
    // A. Update Visual Labels
    if (viewTitle) viewTitle.innerText = `Showing ${title} Information`;

    // B. Handle Nav Active States (Desktop & Mobile)
    const allLinks = document.querySelectorAll('.sidebar-item');
    allLinks.forEach(link => {
        link.classList.remove('active');
        // Match the text in the span exactly
        const spanText = link.querySelector('span')?.innerText;
        if (spanText === title) {
            link.classList.add('active');
        }
    });

    // C. Content Injection with Animation
    if (mainDisplay) {
        mainDisplay.style.opacity = '0';
        mainDisplay.style.transform = 'translateY(10px)';

        setTimeout(() => {
            // Find key in contentData, fallback to generic if not found
            mainDisplay.innerHTML = contentData[title] || `
                <h3 class="text-xl font-bold italic uppercase text-red-600">${title}</h3>
                <p class="text-gray-500 mt-4">Node connecting... data stream pending for this section.</p>`;
            
            mainDisplay.style.opacity = '1';
            mainDisplay.style.transform = 'translateY(0)';
        }, 200);
    }

    // D. Auto-close mobile menu
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
}

// 6. INITIALIZATION ON LOAD
window.onload = () => {
    setGreeting();
    
    // Set initial view
    updateView('Overview');
};