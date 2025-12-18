/**
 * MIKOKO LEAGUE - Command Center Core Script
 * Single-Engine Mobile & Desktop Integration
 */

// 1. SELECTORS
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
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

// 3. MOBILE MENU TOGGLES (single sidebar)
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full'); // Slide in/out
        overlay.classList.toggle('hidden');           // Show/hide overlay
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    });
}


// 4. CONTENT REPOSITORY
const contentData = {
    'Overview': `
    <div class="space-y-8 animate-in">
        <div class="flex justify-between items-end">
            <div>
                <h3 class="text-2xl font-black italic uppercase tracking-tighter text-red-600">Command Center</h3>
                <p class="text-gray-500 text-xs uppercase tracking-widest font-bold">Node: MIKOKO_MAIN_CORE // Status: <span class="text-red-500 animate-pulse">Offline</span></p>
            </div>
            <div class="hidden md:block text-right">
            
   <div class="hidden md:block text-right">
    <p class="text-[10px] text-gray-600 font-mono uppercase tracking-widest">Latency: 24ms</p>
    <div id="syncStatus" class="text-[10px] text-red-600 font-mono flex items-center justify-end gap-2">
        <i class="fas fa-circle-notch animate-spin"></i>
        <span id="countdownTimer">INITIALIZING...</span>
    </div>
</div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div class="lg:col-span-2 space-y-6">
                <div class="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[2rem] p-8 relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-4">
                        <span class="px-3 py-1 bg-red-600 text-[10px] font-bold uppercase tracking-tighter rounded-full">Season Kickoff</span>
                    </div>
                    
                    <h4 class="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-6">Matchday 01 Featured</h4>
                    
                    <div class="flex items-center justify-between gap-4">
                        <div class="text-center">
                            <div class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-3 border border-white/5 group-hover:border-red-600/50 transition-colors">
                                <i class="fas fa-shield-halved text-2xl text-white"></i>
                            </div>
                            <p class="font-bold text-sm uppercase">Blaze FC</p>
                        </div>
                        
                        <div class="text-center">
                            <p class="text-3xl font-black italic text-white">VS</p>
                            <p class="text-[10px] text-gray-500 font-mono mt-2">NIL</p>
                        </div>

                        <div class="text-center">
                            <div class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-3 border border-white/5 group-hover:border-red-600/50 transition-colors">
                                <i class="fas fa-shield-halved text-2xl text-red-600"></i>
                            </div>
                            <p class="font-bold text-sm uppercase">Rangers Fc</p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div class="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-red-600/20 transition-all">
        <h4 class="text-white font-bold mb-2 text-sm">
            <i class="fas fa-microchip mr-2 text-red-600"></i> AI Match Analytics
        </h4>
        <p class="text-[11px] text-gray-500 italic uppercase">
            "AI analytics not available in this version. Feature coming in future updates."
        </p>
    </div>
                    <div class="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-red-600/20 transition-all">
        <h4 class="text-white font-bold mb-2 text-sm">
            <i class="fas fa-chart-line mr-2 text-yellow-500"></i> Market Insights
        </h4>
        <p class="text-[11px] text-gray-500 italic uppercase">
            "Market monitoring not available in this version. Will be enabled in upcoming releases."
        </p>
    </div>
                </div>
            </div>

           <div class="space-y-6">
    <div class="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 h-[500px] flex flex-col">
        <h4 class="text-white font-bold text-xs uppercase tracking-widest mb-6 flex items-center shrink-0">
            <span class="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></span> System Live Feed
        </h4>
        
        <div class="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar">
            
            <div class="flex gap-4 items-start border-l-2 border-red-600 pl-4 bg-red-600/5 py-4 rounded-r-xl">
                <div>
                    <p class="text-xs text-white font-black uppercase italic tracking-wider">Protocol: Payment Phase Active</p>
                    <p class="text-[11px] text-gray-300 mt-2 uppercase leading-relaxed font-bold">
                        The MIKOKO League payment window officially opens today, <span class="text-red-500">18th Dec 2025</span>. 
                    </p>
                    <p class="text-[10px] text-gray-500 mt-1 uppercase leading-tight">
                        Managers must finalize transfers to the official account details to secure their team slot.
                    </p>
                    <button class="mt-3 px-3 py-1.5 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg hover:bg-red-700 transition-all" onclick="updateView('Mikoko Payment')">
                        Pay Now
                    </button>
                </div>
            </div>

            <div class="flex gap-4 items-start border-l-2 border-white/10 pl-4">
                <div>
                    <p class="text-xs text-white font-bold uppercase">Official Placement Notice</p>
                    <p class="text-[10px] text-gray-500 mt-1 leading-relaxed uppercase">
                        Dates for team divisions and arrangement will be announced soon. Keep your node active to see your assigned placement.
                    </p>
                </div>
            </div>

            <div class="flex gap-4 items-start border-l-2 border-white/5 pl-4 opacity-50">
                <div>
                    <p class="text-xs text-gray-400 font-bold uppercase">Feature Rollout</p>
                    <p class="text-[10px] text-gray-600 mt-1 uppercase">
                        Site infrastructure is currently being updated to introduce matchday live-tracking features.
                    </p>
                </div>
            </div>
        </div>

        <button class="w-full mt-6 py-4 bg-white/5 hover:bg-white/10 text-gray-400 text-[10px] uppercase font-black tracking-widest rounded-2xl transition-all shrink-0" onclick="updateView('News')">
            Open Full News Hub
        </button>
    </div>
</div>

        </div>
    </div>`,
    
    'Standings': `
    <div class="space-y-6 animate-in">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
                <h3 class="text-2xl font-black italic uppercase tracking-tighter text-red-600">League Table</h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Season 03 // Pre-Matchday Calibration</p>
            </div>
            <div class="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
    <p class="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
            Protocol: <span class="text-white font-black">Top 8 Qualify for Glory Cup Quarter-Finals</span>
        </p>
        <p class="text-[9px] text-red-500 font-bold uppercase tracking-tighter mt-1">
            Current Sort: Alphabetical (Initial)
        </p>
            </div>
        </div>

        <div class="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <table class="w-full text-left border-collapse min-w-[600px]">
                <thead>
                    <tr class="text-gray-500 border-b border-white/5 uppercase text-[10px] tracking-[0.2em] font-black">
                        <th class="pb-4 pl-2">Pos</th>
                        <th class="pb-4">Team</th>
                        <th class="pb-4 text-center">P</th>
                        <th class="pb-4 text-center text-green-500">W</th>
                        <th class="pb-4 text-center text-yellow-500">D</th>
                        <th class="pb-4 text-center text-red-500">L</th>
                        <th class="pb-4 text-center">GF</th>
                        <th class="pb-4 text-center">GA</th>
                        <th class="pb-4 text-center">GD</th>
                        <th class="pb-4 text-right pr-2 text-white">Pts</th>
                    </tr>
                </thead>
                <tbody class="text-gray-300 font-medium">
                    ${[
                        "Apex Predators", "Blaze FC", "Citadel United", "Dynamos SC", 
                        "Elite Vanguard", "Ironbound FC", "Mamba FC", "Rangers FC", 
                        "Shadow Strikers", "Spartan Ath", "Titan Warriors", "Viper Squad"
                    ].map((team, index) => `
                        <tr class="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group">
                            <td class="py-4 pl-2 font-mono text-xs text-red-600 font-bold">${(index + 1).toString().padStart(2, '0')}</td>
                            <td class="py-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-6 h-6 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[10px] font-black group-hover:border-red-600/50 transition-colors uppercase italic">${team.charAt(0)}</div>
                                    <span class="font-bold text-sm tracking-tight text-white">${team}</span>
                                </div>
                            </td>
                            <td class="py-4 text-center font-mono text-xs">0</td>
                            <td class="py-4 text-center font-mono text-xs text-gray-500">0</td>
                            <td class="py-4 text-center font-mono text-xs text-gray-500">0</td>
                            <td class="py-4 text-center font-mono text-xs text-gray-500">0</td>
                            <td class="py-4 text-center font-mono text-xs text-gray-500">0</td>
                            <td class="py-4 text-center font-mono text-xs text-gray-500">0</td>
                            <td class="py-4 text-center font-mono text-xs">0</td>
                            <td class="py-4 text-right pr-2 font-black text-white">0</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="mt-8 p-6 bg-red-600/5 border border-red-600/10 rounded-2xl">
            <p class="text-[10px] text-gray-500 uppercase font-black tracking-widest flex items-center gap-2">
                <i class="fas fa-circle-info text-red-600"></i> Qualification Rule
            </p>
            <p class="text-xs text-gray-400 mt-2 leading-relaxed">
                Positions are currently tied due to zero matches played. Tie-breakers will be determined by 1. Points, 2. Goal Difference, 3. Goals Scored once the league commences.
            </p>
        </div>
    </div>`,

    'Live': `
    <div class="flex flex-col items-center justify-center min-h-[400px] text-center animate-in">
        <div class="relative w-32 h-32 mb-8">
            <div class="absolute inset-0 bg-red-600/10 rounded-full animate-ping"></div>
            <div class="absolute inset-2 border-2 border-dashed border-red-600/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div class="absolute inset-10 bg-gradient-to-t from-red-600 to-red-500 rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                <i class="fas fa-satellite-dish text-white -rotate-45 text-xl"></i>
            </div>
        </div>

        <div class="space-y-2">
            <h3 class="text-2xl font-black italic uppercase tracking-tighter text-white">Signal Standby</h3>
            <p class="text-red-600 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Scanning MIKOKO Frequencies...</p>
        </div>

        <div class="flex gap-1 h-4 mt-8">
            <div class="w-1 bg-red-600/20 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
            <div class="w-1 bg-red-600/40 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
            <div class="w-1 bg-red-600/60 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
            <div class="w-1 bg-red-600/40 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
            <div class="w-1 bg-red-600/20 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
        </div>

        <div class="mt-12 max-w-sm p-6 bg-white/[0.02] border border-white/5 rounded-[2rem]">
            <p class="text-[11px] text-gray-500 uppercase leading-relaxed font-medium">
                The <span class="text-white">Live Broadcast Engine</span> is currently under calibration. 
                Real-time match tracking and instant score updates will be deployed in the <span class="text-red-600 font-bold">Next System Update</span>.
            </p>
            <div class="mt-4 pt-4 border-t border-white/5">
                <p class="text-[9px] text-gray-600 uppercase tracking-widest font-bold">Expected Online: Matchday 01 Kickoff</p>
            </div>
        </div>
    </div>`,

    'Upcoming': `
    <div class="space-y-8 animate-in">
        <div>
            <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">Match Schedule</h3>
            <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: Official Schedule Control</p>
        </div>

        <div class="grid gap-4">
            ${[
                { teams: "Blaze FC vs Rangers FC", id: 1 },
                { teams: "Mamba FC vs Viper Squad", id: 2 },
                { teams: "Apex Predators vs Titan Warriors", id: 3 },
                { teams: "Citadel United vs Ironbound FC", id: 4 },
                { teams: "Shadow Strikers vs Elite Vanguard", id: 5 }
            ].map((match) => `
                <div class="p-6 bg-[#0a0a0a] border border-white/5 rounded-[2rem] flex flex-col md:flex-row justify-between items-center group">
                    <div class="flex items-center gap-6">
                        <div class="w-12 h-12 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center text-[10px] font-black text-gray-600">0${match.id}</div>
                        <h4 class="text-white font-black text-lg uppercase italic tracking-tighter">${match.teams}</h4>
                    </div>
                    
                    <div class="flex items-center gap-4 mt-4 md:mt-0">
                        <div class="text-center md:text-right mr-4">
                            <span class="block text-[11px] text-red-600 font-black uppercase tracking-widest">NIL</span>
                            <span class="block text-[9px] text-gray-600 font-mono mt-1 uppercase">Time: NIL</span>
                        </div>
                        <button onclick="openFixtureDetails('${match.teams}')" class="px-5 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                            Details
                        </button>
                        <button onclick="broadcastUpdate('${match.teams}')" class="px-5 py-2 bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white border border-red-600/20 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                            <i class="fas fa-satellite-dish mr-1"></i> Save & Push
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>`,

  'Stats': `
    <div class="space-y-8 animate-in">
        <div class="flex justify-between items-end">
            <div>
                <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">Player Analytics</h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Season Status: <span class="text-white">Pre-Kickoff Calibration</span></p>
            </div>
            <div class="hidden md:block">
                <span class="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Last Updated: NIL
                </span>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div class="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden">
                <div class="p-6 border-b border-white/5 bg-gradient-to-r from-red-600/10 to-transparent flex justify-between items-center">
                    <h4 class="text-white font-black uppercase italic tracking-tighter text-sm flex items-center gap-2">
                        <i class="fas fa-boot text-red-600"></i> Golden Boot Race
                    </h4>
                    <span class="text-[9px] text-gray-500 font-mono font-bold uppercase">Metric: GOALS</span>
                </div>
                <div class="p-4">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="text-[9px] text-gray-600 uppercase tracking-[0.2em] font-black border-b border-white/5">
                                <th class="py-4 pl-4 font-normal">Rank</th>
                                <th class="py-4 font-normal">Player / Node</th>
                                <th class="py-4 font-normal text-right pr-4">Stats</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-white/[0.02]">
                            ${[1, 2, 3, 4, 5].map(i => `
                                <tr class="group hover:bg-white/[0.02] transition-colors">
                                    <td class="py-5 pl-4">
                                        <span class="text-xs font-mono font-bold ${i === 1 ? 'text-red-600' : 'text-gray-500'}">0${i}</span>
                                    </td>
                                    <td class="py-5">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                                                <i class="fas fa-user text-[10px] text-gray-600"></i>
                                            </div>
                                            <div>
                                                <p class="text-[11px] text-white font-black uppercase italic tracking-tighter">Awaiting_Data</p>
                                                <p class="text-[9px] text-gray-600 font-bold uppercase tracking-widest">TBD FC</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-5 pr-4 text-right">
                                        <span class="text-xs text-white font-black italic">--</span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden">
                <div class="p-6 border-b border-white/5 bg-gradient-to-r from-blue-600/10 to-transparent flex justify-between items-center">
                    <h4 class="text-white font-black uppercase italic tracking-tighter text-sm flex items-center gap-2">
                        <i class="fas fa-magic text-blue-500"></i> Playmaker Ranking
                    </h4>
                    <span class="text-[9px] text-gray-500 font-mono font-bold uppercase">Metric: ASSISTS</span>
                </div>
                <div class="p-4">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="text-[9px] text-gray-600 uppercase tracking-[0.2em] font-black border-b border-white/5">
                                <th class="py-4 pl-4 font-normal">Rank</th>
                                <th class="py-4 font-normal">Player / Node</th>
                                <th class="py-4 font-normal text-right pr-4">Stats</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-white/[0.02]">
                            ${[1, 2, 3, 4, 5].map(i => `
                                <tr class="group hover:bg-white/[0.02] transition-colors">
                                    <td class="py-5 pl-4">
                                        <span class="text-xs font-mono font-bold ${i === 1 ? 'text-blue-500' : 'text-gray-500'}">0${i}</span>
                                    </td>
                                    <td class="py-5">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                                                <i class="fas fa-user-tag text-[10px] text-gray-600"></i>
                                            </div>
                                            <div>
                                                <p class="text-[11px] text-white font-black uppercase italic tracking-tighter">Awaiting_Data</p>
                                                <p class="text-[9px] text-gray-600 font-bold uppercase tracking-widest">TBD FC</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-5 pr-4 text-right">
                                        <span class="text-xs text-white font-black italic">--</span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-6 bg-white/5 border border-white/5 rounded-3xl group hover:border-red-600/20 transition-all">
                <div class="flex justify-between items-start mb-4">
                    <i class="fas fa-hand-fist text-xl text-red-600/30"></i>
                    <span class="text-[9px] text-gray-600 font-black uppercase">Discipline</span>
                </div>
                <h5 class="text-white font-bold text-xs uppercase tracking-widest mb-1">Total Cards</h5>
                <p class="text-2xl font-black italic text-white/10">00</p>
            </div>
            <div class="p-6 bg-white/5 border border-white/5 rounded-3xl group hover:border-yellow-600/20 transition-all">
                <div class="flex justify-between items-start mb-4">
                    <i class="fas fa-hand-holding-heart text-xl text-yellow-600/30"></i>
                    <span class="text-[9px] text-gray-600 font-black uppercase">Defense</span>
                </div>
                <h5 class="text-white font-bold text-xs uppercase tracking-widest mb-1">Clean Sheets</h5>
                <p class="text-2xl font-black italic text-white/10">00</p>
            </div>
            <div class="p-6 bg-white/5 border border-white/5 rounded-3xl group hover:border-green-600/20 transition-all">
                <div class="flex justify-between items-start mb-4">
                    <i class="fas fa-bolt text-xl text-green-600/30"></i>
                    <span class="text-[9px] text-gray-600 font-black uppercase">Efficiency</span>
                </div>
                <h5 class="text-white font-bold text-xs uppercase tracking-widest mb-1">Goal / Game</h5>
                <p class="text-2xl font-black italic text-white/10">0.00</p>
            </div>
        </div>
    </div>`,

   'Highlights': `
    <div class="space-y-8 animate-in">
        <div class="flex justify-between items-center">
            <div>
                <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">VOD Library</h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-white">Awaiting Matchday Stream</span></p>
            </div>
            <div class="px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <span class="text-[9px] text-red-600 font-black uppercase tracking-widest animate-pulse">Live Uplink Ready</span>
            </div>
        </div>

        <div class="relative aspect-video bg-[#0a0a0a] rounded-[3rem] border border-white/5 overflow-hidden group">
            <div class="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
            
            <div class="absolute inset-0 flex flex-col items-center justify-center">
                <div class="relative w-20 h-20 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <i class="fas fa-lock text-gray-700 text-2xl"></i>
                </div>
                <div class="mt-8 text-center">
                    <p class="text-white font-black italic uppercase tracking-[0.3em] text-sm">Official Feed Offline</p>
                    <p class="text-gray-600 text-[10px] font-mono mt-2 uppercase">Encryption Active // Matchday 01 Required</p>
                </div>
            </div>
        </div>

        <div class="relative p-10 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-[3rem] overflow-hidden">
            <i class="fas fa-cloud-arrow-up absolute -right-4 -bottom-4 text-9xl text-white/[0.02] -rotate-12"></i>
            
            <div class="relative z-10 flex flex-col items-center text-center">
                <div class="mb-6 px-4 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
                    <span class="text-[9px] text-yellow-500 font-black uppercase tracking-[0.2em]">Next Update: Community VODs</span>
                </div>
                
                <h4 class="text-2xl font-black italic uppercase tracking-tighter text-white mb-3">Upload Your Highlights</h4>
                <p class="text-gray-500 text-xs uppercase tracking-widest max-w-md mx-auto leading-relaxed">
                    Soon, managers will be able to upload their best moments directly to the Mikoko Network. 
                    <span class="text-red-600">This node is currently disabled.</span>
                </p>

                <div class="mt-8 flex gap-4">
                    <div class="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] text-gray-600 font-black uppercase tracking-[0.2em] cursor-not-allowed flex items-center gap-3">
                        <i class="fas fa-video"></i> Select File
                    </div>
                    <div class="px-8 py-4 bg-red-600/10 border border-red-600/20 rounded-2xl text-[10px] text-red-600/50 font-black uppercase tracking-[0.2em] cursor-not-allowed flex items-center gap-3">
                        <i class="fas fa-cloud-upload-alt"></i> Upload Terminal
                    </div>
                </div>

                <div class="mt-10 pt-6 border-t border-white/5 w-full">
                    <p class="text-[9px] text-gray-700 font-mono uppercase">System Restriction: Level 04 Access Required</p>
                </div>
            </div>

            <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none"></div>
        </div>
    </div>`,
    
       'News': `
    <div class="space-y-8 animate-in">
        <div class="flex justify-between items-end">
            <div>
                <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">News Hub</h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Network Feed: <span class="text-white">Priority Broadcast</span></p>
            </div>
            <span class="hidden md:block text-[10px] text-gray-600 font-mono uppercase tracking-widest">Date: 18.12.2025</span>
        </div>

        <div class="relative rounded-[3rem] overflow-hidden border border-red-600/20 bg-[#0a0a0a] group">
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="relative h-[300px] lg:h-full bg-zinc-900 overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
                    <div class="absolute inset-0 flex items-center justify-center text-red-600/10 group-hover:scale-105 transition-transform duration-700">
                         <i class="fas fa-credit-card text-9xl"></i>
                    </div>
                    <div class="absolute top-6 left-6 z-20">
                        <span class="px-4 py-1.5 bg-green-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg animate-pulse">Live Now</span>
                    </div>
                </div>

                <div class="p-10 flex flex-col justify-center">
                    <span class="text-[10px] text-gray-500 font-mono uppercase mb-4">Broadcast: Dec 18, 2025 // 00:00 AM</span>
                    <h4 class="text-3xl font-black italic uppercase tracking-tighter text-white leading-none mb-6">
                        MIKOKO League <br><span class="text-red-600">Payment Window Open</span>
                    </h4>
                    <p class="text-gray-400 text-sm uppercase leading-relaxed font-bold tracking-wide mb-8">
                        The payment portal for the upcoming season is officially active as of today, Dec 18th. Entry fee is set at <span class="text-white">₦2,000</span>. Please navigate to the Mikoko Payment terminal to secure your team's slot.
                    </p>
                    <div class="flex items-center gap-4">
                        <button onclick="updateView('Mikoko Payment')" class="px-8 py-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-all">Proceed to Payment</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 hover:border-yellow-600/30 transition-all group">
                <div class="w-12 h-12 bg-yellow-600/10 rounded-2xl flex items-center justify-center mb-6 border border-yellow-600/20">
                    <i class="fas fa-user-clock text-yellow-500 text-lg"></i>
                </div>
                <span class="text-[9px] text-yellow-500 font-black uppercase tracking-widest">Pending Announcement</span>
                <h5 class="text-white font-black uppercase italic tracking-tighter text-xl mt-2 mb-3">Roster Selection Deadline</h5>
                <p class="text-gray-500 text-[11px] font-bold uppercase leading-relaxed mb-6">
                    The final deadline for team and player selections will be announced shortly. Ensure your scouting reports are complete and ready for the active window.
                </p>
                <div class="flex justify-between items-center pt-4 border-t border-white/5">
                    <span class="text-[9px] text-gray-600 font-mono">STATUS: AWAITING CALIBRATION</span>
                </div>
            </div>

            <div class="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 hover:border-blue-600/30 transition-all group">
                <div class="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-600/20">
                    <i class="fas fa-calendar-alt text-blue-500 text-lg"></i>
                </div>
                <span class="text-[9px] text-blue-500 font-black uppercase tracking-widest">Future Protocol</span>
                <h5 class="text-white font-black uppercase italic tracking-tighter text-xl mt-2 mb-3">Season 03 // 2026 Arriving</h5>
                <p class="text-gray-500 text-[11px] font-bold uppercase leading-relaxed mb-6">
                    The horizon is clear. Season 03 2026 is almost here. We are evolving the network to bring a more competitive and technologically advanced league experience.
                </p>
                <div class="flex justify-between items-center pt-4 border-t border-white/5">
                    <span class="text-[9px] text-gray-600 font-mono">ETA: Q1 2026</span>
                </div>
            </div>
        </div>
    </div>`,

   'Goals Leaderboard': `
<div class="space-y-8 animate-in">
    <div class="flex flex-col lg:flex-row gap-8">
        
        <div class="lg:w-1/3">
            <div class="relative group overflow-hidden bg-gradient-to-br from-red-600/20 to-transparent border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center text-center sticky top-8">
                <div class="absolute top-6 left-6 px-4 py-1 bg-red-600 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-red-600/20">
                    Player of the Week
                </div>
                
                <div class="w-40 h-40 md:w-48 md:h-48 bg-zinc-900 rounded-full mb-6 border-4 border-red-500/30 overflow-hidden relative shadow-2xl">
                    <div class="absolute inset-0 flex items-center justify-center text-gray-700 italic">
                        <i class="fas fa-user-ninja text-6xl"></i>
                    </div>
                </div>

                <h3 class="text-3xl font-black text-white uppercase tracking-tighter italic leading-tight">NIL <span class="text-red-500">NIL</span></h3>
                <p class="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-2 italic">Awaiting Selection // Striker</p>
                
                <div class="flex gap-4 md:gap-8 mt-8 w-full justify-center">
                    <div class="text-center">
                        <span class="block text-2xl font-black text-white">0</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest">Goals</span>
                    </div>
                    <div class="text-center border-x border-white/10 px-4 md:px-8">
                        <span class="block text-2xl font-black text-white">0</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest">Assists</span>
                    </div>
                    <div class="text-center">
                        <span class="block text-2xl font-black text-white">0</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest">MVP</span>
                    </div>
                </div>
                
                <div class="mt-8 w-full pt-6 border-t border-white/5">
                    <span class="text-[9px] text-gray-600 font-mono uppercase">Node Status: STANDBY</span>
                </div>
            </div>
        </div>

        <div class="lg:w-2/3 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 flex flex-col">
            <h3 class="text-xl font-black text-white mb-8 uppercase italic tracking-tighter flex items-center">
                <i class="fas fa-fire text-red-600 mr-3 animate-pulse"></i> Top Scorers
            </h3>
            
            <div class="space-y-3" id="goalsListContainer">
                <div class="flex text-[9px] uppercase font-black text-gray-600 px-4 mb-2 tracking-[0.2em]">
                    <div class="w-12 text-center">Pos</div>
                    <div class="flex-grow">Player Identification</div>
                    <div class="w-12 text-right">G</div>
                </div>

                ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `
                    <div class="flex items-center p-4 bg-white/[0.03] rounded-[1.5rem] border border-white/5 group hover:border-red-600/30 transition-all ${i > 6 ? 'hidden extra-players animate-in' : ''}">
                        <div class="w-12 font-black italic text-sm ${i <= 3 ? 'text-red-600' : 'text-gray-600'} text-center">${i < 10 ? '0' + i : i}</div>
                        <div class="flex-grow flex items-center space-x-4 px-2">
                            <div class="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center relative">
                                <i class="fas fa-user text-[10px] text-gray-600"></i>
                                ${i <= 5 ? '<i class="fas fa-star absolute -top-1 -right-1 text-[8px] text-yellow-500 animate-pulse"></i>' : ''}
                            </div>
                            <div class="flex flex-col">
                                <span class="text-xs font-black text-white uppercase tracking-tighter group-hover:text-red-600 transition-colors">Pending_Roster</span>
                                <span class="text-[8px] text-gray-600 font-bold uppercase tracking-widest italic">Awaiting Assignment</span>
                            </div>
                        </div>
                        <div class="w-12 text-right font-black italic text-white group-hover:scale-125 transition-transform">0</div>
                    </div>
                `).join('')}
            </div>

            <button id="toggleGoalsBtn" onclick="toggleFullLeaderboard()" class="w-full mt-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                View Full Player Stats (Top 10)
            </button>
        </div>

    </div>
</div>`,

  'Assists Leaderboard': `
<div class="space-y-8 animate-in">
    <div class="flex flex-col lg:flex-row gap-8">
        
        <div class="lg:w-1/3">
            <div class="relative group overflow-hidden bg-gradient-to-br from-blue-600/20 to-transparent border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center text-center sticky top-8">
                <div class="absolute top-6 left-6 px-4 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-600/20">
                    Playmaker of the Week
                </div>
                
                <div class="w-40 h-40 md:w-48 md:h-48 bg-zinc-900 rounded-full mb-6 border-4 border-blue-500/30 overflow-hidden relative shadow-2xl">
                    <div class="absolute inset-0 flex items-center justify-center text-gray-700 italic">
                        <i class="fas fa-magic-wand-sparkles text-6xl"></i>
                    </div>
                </div>

                <h3 class="text-3xl font-black text-white uppercase tracking-tighter italic leading-tight">NIL <span class="text-blue-500">NIL</span></h3>
                <p class="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-2 italic">Awaiting Selection // Midfield Node</p>
                
                <div class="flex gap-4 md:gap-8 mt-8 w-full justify-center">
                    <div class="text-center">
                        <span class="block text-2xl font-black text-white">0</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest">Assists</span>
                    </div>
                    <div class="text-center border-x border-white/10 px-4 md:px-8">
                        <span class="block text-2xl font-black text-white">0</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest">Key Passes</span>
                    </div>
                    <div class="text-center">
                        <span class="block text-2xl font-black text-white">0</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest">MVP</span>
                    </div>
                </div>
                
                <div class="mt-8 w-full pt-6 border-t border-white/5">
                    <span class="text-[9px] text-gray-600 font-mono uppercase">Vision Status: ANALYZING</span>
                </div>
            </div>
        </div>

        <div class="lg:w-2/3 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 flex flex-col">
            <h3 class="text-xl font-black text-white mb-8 uppercase italic tracking-tighter flex items-center">
                <i class="fas fa-wand-magic-sparkles text-blue-500 mr-3 animate-pulse"></i> Playmaker Rankings
            </h3>
            
            <div class="space-y-3" id="assistsListContainer">
                <div class="flex text-[9px] uppercase font-black text-gray-600 px-4 mb-2 tracking-[0.2em]">
                    <div class="w-12 text-center">Pos</div>
                    <div class="flex-grow">Creative Node</div>
                    <div class="w-12 text-right">A</div>
                </div>

                ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `
                    <div class="flex items-center p-4 bg-white/[0.03] rounded-[1.5rem] border border-white/5 group hover:border-blue-600/30 transition-all ${i > 6 ? 'hidden extra-assists animate-in' : ''}">
                        <div class="w-12 font-black italic text-sm ${i <= 3 ? 'text-blue-500' : 'text-gray-600'} text-center">${i < 10 ? '0' + i : i}</div>
                        <div class="flex-grow flex items-center space-x-4 px-2">
                            <div class="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center relative">
                                <i class="fas fa-brain text-[10px] text-gray-600"></i>
                                ${i <= 5 ? '<i class="fas fa-certificate absolute -top-1 -right-1 text-[8px] text-blue-400 animate-pulse"></i>' : ''}
                            </div>
                            <div class="flex flex-col">
                                <span class="text-xs font-black text-white uppercase tracking-tighter group-hover:text-blue-500 transition-colors">Pending_Roster</span>
                                <span class="text-[8px] text-gray-600 font-bold uppercase tracking-widest italic">Awaiting Pass Data</span>
                            </div>
                        </div>
                        <div class="w-12 text-right font-black italic text-white group-hover:scale-125 transition-transform">0</div>
                    </div>
                `).join('')}
            </div>

            <button id="toggleAssistsBtn" onclick="toggleAssistsLeaderboard()" class="w-full mt-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                View Full Playmaker Stats (Top 10)
            </button>
        </div>

    </div>
</div>`,

'Player Selection': `
<div class="space-y-8 animate-in fade-in duration-500">
    <div class="bg-zinc-900/80 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
        <h3 class="text-2xl font-black text-white uppercase italic tracking-tighter mb-6">Player Registration</h3>
        <div class="flex flex-col md:flex-row gap-4">
            <input type="text" id="playerNameInput" placeholder="ENTER FULL LEGAL NAME..." 
                class="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-red-600 focus:outline-none focus:border-red-600 transition-all">
            <button onclick="registerPlayer()" 
                class="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase italic rounded-2xl transition-all shadow-lg shadow-red-600/20">
                Register Entry
            </button>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 bg-[#070707] border border-white/5 rounded-[2.5rem] p-6">
            <h4 class="text-[10px] uppercase font-black text-gray-500 tracking-widest mb-6">Live Registry Status</h4>
            <div id="playerListContainer" class="space-y-3">
                <p class="text-gray-600 text-xs italic">Waiting for new registrations...</p>
            </div>
        </div>
        
        <div class="bg-zinc-900/30 border border-white/5 rounded-[2.5rem] p-6">
            <h4 class="text-[10px] uppercase font-black text-gray-500 tracking-widest mb-4">League Capacity</h4>
            <div class="space-y-4" id="teamCapacityList">
                </div>
        </div>
    </div>
</div>`,

'Team Selection': `
<div class="space-y-8 animate-in fade-in duration-500">
    <div class="bg-red-600/10 border border-red-600/20 p-6 rounded-[2rem]">
        <h3 class="text-white font-black uppercase italic">Admin Assignment Terminal</h3>
        <p class="text-gray-500 text-[10px] font-bold uppercase mt-1">Select a pending player to assign to a tactical unit.</p>
    </div>

    <div id="adminAssignmentGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        </div>
</div>`,
   
'Transfer Market': `
<div class="space-y-8 animate-in">
    <div class="flex justify-between items-end">
        <div>
            <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">Market Terminal</h3>
            <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-red-600">System Locked</span></p>
        </div>
        <div class="hidden md:block">
            <span class="px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-[10px] text-red-600 font-black uppercase tracking-widest">
                Access Level: Restricted
            </span>
        </div>
    </div>

    <div class="relative p-10 md:p-20 bg-[#0a0a0a] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col items-center justify-center text-center">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,transparent_70%)]"></div>
            <i class="fas fa-handshake absolute -right-10 -bottom-10 text-[20rem] text-white/5 -rotate-12"></i>
        </div>

        <div class="relative z-10">
            <div class="w-20 h-20 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-600/20 shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                <i class="fas fa-lock text-red-600 text-3xl"></i>
            </div>
            
            <h4 class="text-white font-black uppercase tracking-[0.3em] text-xs mb-10">Market Protocol Opening In:</h4>

            <div class="flex gap-4 md:gap-8 justify-center items-center">
                <div class="flex flex-col">
                    <span id="days" class="text-4xl md:text-6xl font-black text-white italic tracking-tighter">00</span>
                    <span class="text-[9px] text-gray-600 font-bold uppercase mt-2 tracking-widest">Days</span>
                </div>
                <span class="text-2xl font-black text-red-600 mb-6">:</span>
                <div class="flex flex-col">
                    <span id="hours" class="text-4xl md:text-6xl font-black text-white italic tracking-tighter">00</span>
                    <span class="text-[9px] text-gray-600 font-bold uppercase mt-2 tracking-widest">Hrs</span>
                </div>
                <span class="text-2xl font-black text-red-600 mb-6">:</span>
                <div class="flex flex-col">
                    <span id="minutes" class="text-4xl md:text-6xl font-black text-white italic tracking-tighter">00</span>
                    <span class="text-[9px] text-gray-600 font-bold uppercase mt-2 tracking-widest">Min</span>
                </div>
                <span class="text-2xl font-black text-red-600 mb-6">:</span>
                <div class="flex flex-col">
                    <span id="seconds" class="text-4xl md:text-6xl font-black text-white italic tracking-tighter text-red-600">00</span>
                    <span class="text-[9px] text-gray-600 font-bold uppercase mt-2 tracking-widest">Sec</span>
                </div>
            </div>

            <p class="mt-12 text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] max-w-sm mx-auto leading-relaxed">
                The Mikoko Transfer Window will officially unlock on <span class="text-white">January 18th, 2026</span>. Roster modifications are strictly prohibited until the countdown hits zero.
            </p>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center gap-6">
            <div class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                <i class="fas fa-info text-gray-600"></i>
            </div>
            <div>
                <p class="text-[9px] text-red-600 font-black uppercase tracking-widest">Market Rule</p>
                <p class="text-xs text-white font-bold uppercase">Manual Negotiations Only</p>
            </div>
        </div>
        <div class="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center gap-6">
            <div class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                <i class="fas fa-microchip text-gray-600"></i>
            </div>
            <div>
                <p class="text-[9px] text-red-600 font-black uppercase tracking-widest">System Check</p>
                <p class="text-xs text-white font-bold uppercase">Node Integrity Verified</p>
            </div>
        </div>
    </div>
</div>`,
   'Mikoko Payment': `
<div class="space-y-8 animate-in">
    <div class="flex justify-between items-end">
        <div>
            <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">Financial Node</h3>
            <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-yellow-500">System Restricted</span></p>
        </div>
        <i class="fas fa-lock text-yellow-500 opacity-20 text-3xl"></i>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="p-8 bg-zinc-900/50 border border-white/10 rounded-[2.5rem] relative overflow-hidden opacity-60">
            <div class="relative z-10">
                <span class="text-[9px] text-red-600 font-black uppercase tracking-[0.2em]">Official Payment Node</span>
                <h4 class="text-2xl font-black text-white italic mt-2 mb-6 uppercase tracking-tighter">Required Fee: ₦2,000</h4>
                
                <div class="space-y-4">
                    <div class="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p class="text-[9px] text-gray-500 uppercase font-bold">Bank Name</p>
                        <p class="text-lg text-white font-black italic uppercase">OPAY</p>
                    </div>
                    <div class="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p class="text-[9px] text-gray-500 uppercase font-bold">Account Number</p>
                        <p class="text-2xl text-red-600 font-mono font-black tracking-tighter">7062959301</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative p-8 bg-[#0a0a0a] border border-red-600/20 rounded-[2.5rem] flex flex-col items-center justify-center text-center overflow-hidden">
            
            <div class="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-8">
                <div class="w-16 h-16 bg-red-600/10 border border-red-600/50 rounded-full flex items-center justify-center mb-4">
                    <i class="fas fa-shield-slash text-red-600 text-2xl animate-pulse"></i>
                </div>
                <h5 class="text-white font-black uppercase italic tracking-widest text-sm">Upload Restricted</h5>
                <p class="text-gray-500 text-[9px] font-bold uppercase mt-3 leading-relaxed tracking-widest">
                    Manual verification is offline.<br>
                    Next Update: <span class="text-red-600">UNLEASH V2.0</span>
                </p>
                <div class="mt-6 px-4 py-1 border border-white/10 rounded-full">
                    <span class="text-[8px] text-gray-500 font-black uppercase">Protocol: Locked</span>
                </div>
            </div>

            <input type="file" disabled class="hidden">
            
            <div class="opacity-10">
                <i class="fas fa-cloud-arrow-up text-4xl mb-4"></i>
                <p class="text-[10px] uppercase font-bold tracking-widest text-white">Tap to Upload</p>
            </div>
        </div>
    </div>
</div>`,
};

/**
 * MIKOKO LEAGUE FULL SYSTEM SCRIPT
 * Version: 6.0 (Unified & Fixed Navigation)
 */

// --- 1. GLOBAL DATABASE STATE ---
let players = JSON.parse(localStorage.getItem('mikoko_players')) || [];
let teams = JSON.parse(localStorage.getItem('mikoko_teams')) || [
    { id: '01A', name: "Apex Predators", members: [] },
    { id: '02B', name: "Blaze FC", members: [] },
    { id: '03C', name: "Citadel United", members: [] },
    { id: '04D', name: "Dynamos SC", members: [] },
    { id: '05E', name: "Elite Vanguard", members: [] },
    { id: '06I', name: "Ironbound FC", members: [] },
    { id: '07M', name: "Mamba FC", members: [] },
    { id: '08R', name: "Rangers FC", members: [] },
    { id: '09S', name: "Shadow Strikers", members: [] },
    { id: '10S', name: "Spartan Ath", members: [] },
    { id: '11T', name: "Titan Warriors", members: [] },
    { id: '12V', name: "Viper Squad", members: [] }
];

const MAX_SQUAD_SIZE = 10;
const ADMIN_PASSCODE = "123789";

// --- 2. MASTER UI CONTROLLER ---
function updateView(title) {
    const viewTitle = document.getElementById('viewTitle');
    if (viewTitle) viewTitle.innerText = title;

    const allLinks = document.querySelectorAll('.sidebar-item');
    allLinks.forEach(link => {
        link.classList.remove('active');
        const span = link.querySelector('span');
        if (span && span.innerText.trim() === title) link.classList.add('active');
    });

    const mainDisplay = document.getElementById('mainDisplay');
    if (mainDisplay) {
        mainDisplay.style.opacity = '0';
        
        setTimeout(() => {
            // FIX: If title is NOT a system mode, load from contentData
            if (title === 'Player Selection' || title === 'Team Selection') {
                renderLeagueSystem(title);
            } else {
                // This restores your Overview, Rules, etc.
                mainDisplay.innerHTML = (typeof contentData !== 'undefined' && contentData[title]) 
                    ? contentData[title] 
                    : `<div class="p-10 text-center"><h2 class="text-white font-black italic">${title}</h2><p class="text-gray-500 text-xs mt-2">DATA NODE OFFLINE</p></div>`;
            }
            
            mainDisplay.style.opacity = '1';
            startSystemSync(); 
        }, 200);
    }

    // Mobile Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (window.innerWidth < 768 && sidebar && !sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.add('-translate-x-full');
        if (overlay) overlay.classList.add('hidden');
    }
}

// --- 3. DATA & SYSTEM SYNC ---
function startSystemSync() {
    const ids = {
        'stat-total-players': players.length,
        'stat-confirmed-players': players.filter(p => p.status === 'Confirmed').length,
        'stat-pending-players': players.filter(p => p.status === 'Pending').length
    };

    Object.entries(ids).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el) el.innerText = val;
    });

    const timerElement = document.getElementById('countdownTimer');
    if (timerElement) {
        const targetDate = new Date("Jan 1, 2026 00:00:00").getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        timerElement.innerText = `SYNCING: ${d}D ${h}H ${m}M ${s}S`;
    }
}

// --- 4. HASHED ADMIN AUTH ---
function openAuthPortal() {
    const portal = document.getElementById('adminAuthPortal');
    const input = document.getElementById('adminPassInput');
    if (!portal) return;
    input.value = "";
    portal.classList.remove('hidden');
    setTimeout(() => {
        portal.classList.remove('opacity-0');
        input.focus();
    }, 10);
}

function closeAuthPortal() {
    const portal = document.getElementById('adminAuthPortal');
    portal.classList.add('opacity-0');
    setTimeout(() => portal.classList.add('hidden'), 500);
    updateView('Overview');
}

function verifyAdminAccess() {
    const input = document.getElementById('adminPassInput').value;
    if (input === ADMIN_PASSCODE) {
        const portal = document.getElementById('adminAuthPortal');
        portal.classList.add('opacity-0');
        setTimeout(() => portal.classList.add('hidden'), 500);
        executeAdminRender();
    } else {
        showGlobalAlert("fas fa-exclamation-triangle", "Auth Failed", "Invalid Credentials.");
        closeAuthPortal();
    }
}

// --- 5. RENDER SYSTEM PAGES ---
function renderLeagueSystem(mode) {
    const mainDisplay = document.getElementById('mainDisplay');

    if (mode === 'Team Selection') {
        openAuthPortal();
        return;
    }

    if (mode === 'Player Selection') {
        const pending = players.filter(p => p.status === 'Pending');
        const active = players.filter(p => p.status === 'Confirmed');

        mainDisplay.innerHTML = `
            <div class="space-y-8 animate-in fade-in duration-500">
                <div class="bg-zinc-900/80 p-8 rounded-[2.5rem] border border-white/5">
                    <h3 class="text-white font-black uppercase italic mb-6">Registration Terminal</h3>
                    <div class="flex flex-col md:flex-row gap-4">
                        <input type="text" id="playerNameInput" placeholder="ENTER NAME..." class="flex-1 bg-black/60 border border-white/10 rounded-2xl px-6 py-4 text-red-500 font-mono focus:outline-none focus:border-red-600">
                        <button onclick="registerPlayer()" class="px-10 py-4 bg-red-600 text-white font-black uppercase italic rounded-2xl">Register</button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="border border-white/5 rounded-[2.5rem] p-6 bg-black/40">
                        <h4 class="text-yellow-500 font-black uppercase text-[10px] mb-4 tracking-widest">Pending (${pending.length})</h4>
                        <div class="space-y-2 overflow-y-auto max-h-[450px] custom-scrollbar pr-2">
                            ${pending.map(p => `<div class="p-4 bg-white/5 rounded-2xl flex justify-between"><span class="text-white font-bold text-xs uppercase">${p.name}</span><i class="fas fa-clock text-yellow-500/20 text-xs"></i></div>`).join('') || '<p class="text-zinc-800 text-center py-10">EMPTY</p>'}
                        </div>
                    </div>
                    <div class="border border-white/5 rounded-[2.5rem] p-6 bg-black/40">
                        <h4 class="text-emerald-500 font-black uppercase text-[10px] mb-4 tracking-widest">Active (${active.length})</h4>
                        <div class="space-y-2 overflow-y-auto max-h-[450px] custom-scrollbar pr-2">
                            ${active.map(p => `<div class="p-4 bg-white/5 rounded-2xl flex justify-between items-center"><span class="text-white font-bold text-xs uppercase">${p.name}</span><span class="text-[8px] text-zinc-500 font-mono border border-white/5 px-2 py-1 rounded">${p.team}</span></div>`).join('') || '<p class="text-zinc-800 text-center py-10">EMPTY</p>'}
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

function executeAdminRender() {
    const mainDisplay = document.getElementById('mainDisplay');
    const firstPending = players.find(p => p.status === 'Pending');
    
    mainDisplay.innerHTML = `
        <div class="space-y-8 animate-in slide-in-from-bottom-4 duration-500 pb-20">
            <div class="bg-red-600/10 border border-red-600/20 p-6 rounded-[2rem] flex justify-between items-center backdrop-blur-md">
                <h3 class="text-white font-black uppercase italic">Admin Terminal</h3>
                <div class="bg-black/50 px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3">
                    <span class="text-[9px] text-gray-500 uppercase font-black">Next:</span>
                    <span class="text-xs text-white font-bold italic uppercase">${firstPending ? firstPending.name : 'NONE'}</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${teams.map(t => `
                    <div class="flex flex-col h-[400px] bg-zinc-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden group">
                        <div class="p-6 pb-2">
                            <h4 class="text-white font-black italic uppercase text-sm">${t.name}</h4>
                            <p class="text-[9px] text-red-600 font-bold uppercase tracking-widest mt-1">${t.members.length}/10 Personnel</p>
                        </div>

                        <div class="flex-1 overflow-y-auto px-6 py-2 custom-scrollbar space-y-2">
                            ${t.members.map(m => `
                                <div class="flex justify-between items-center p-3 bg-white/[0.03] border border-white/5 rounded-xl group/item">
                                    <p class="text-[10px] text-zinc-300 font-mono">/ ${m}</p>
                                    <button onclick="firePlayer('${m}', '${t.id}')" class="text-red-600 opacity-0 group-hover/item:opacity-100 transition-all">
                                        <i class="fas fa-user-minus"></i>
                                    </button>
                                </div>`).join('') || '<div class="h-full flex items-center justify-center opacity-10"><i class="fas fa-users-slash text-2xl"></i></div>'}
                        </div>

                        <div class="p-6 pt-2 mt-auto">
                            <button onclick="assignPlayerToTeam(${firstPending ? firstPending.id : null}, '${t.id}')" 
                                class="w-full py-4 rounded-xl text-[9px] font-black uppercase transition-all 
                                ${firstPending ? 'bg-red-600 text-white shadow-lg' : 'bg-white/5 text-gray-600 cursor-not-allowed'}">
                                ${firstPending ? 'Deploy Unit' : 'Queue Empty'}
                            </button>
                        </div>
                    </div>`).join('')}
            </div>
        </div>`;
}

// --- 6. CORE LOGIC ---
function saveLeagueData() {
    localStorage.setItem('mikoko_players', JSON.stringify(players));
    localStorage.setItem('mikoko_teams', JSON.stringify(teams));
    startSystemSync();
}

function registerPlayer() {
    const nameInput = document.getElementById('playerNameInput');
    if (!nameInput || !nameInput.value.trim()) return;
    players.push({ id: Date.now(), name: nameInput.value.trim(), status: 'Pending', team: 'Unassigned' });
    saveLeagueData();
    showGlobalAlert("fas fa-hourglass-half", "Entry Logged", "Awaiting Assignment.");
    renderLeagueSystem('Player Selection'); 
}

function assignPlayerToTeam(playerId, teamId) {
    if (!playerId) return;
    const team = teams.find(t => t.id === teamId);
    const player = players.find(p => p.id === playerId);
    if (team.members.length >= MAX_SQUAD_SIZE) return;
    player.status = 'Confirmed';
    player.team = team.name;
    team.members.push(player.name);
    saveLeagueData();
    executeAdminRender();
}

function firePlayer(playerName, teamId) {
    const team = teams.find(t => t.id === teamId);
    const player = players.find(p => p.name === playerName);
    team.members = team.members.filter(m => m !== playerName);
    if (player) { player.status = 'Pending'; player.team = 'Unassigned'; }
    saveLeagueData();
    executeAdminRender();
}

function showGlobalAlert(icon, title, message) {
    const overlay = document.getElementById('globalAlert');
    if (!overlay) return;
    document.getElementById('alertIcon').innerHTML = `<i class="${icon} text-red-600 text-5xl"></i>`;
    document.getElementById('alertTitle').innerText = title;
    document.getElementById('alertMessage').innerText = message;
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => overlay.classList.add('opacity-0', 'pointer-events-none'), 3000);
}

// --- 7. INITIALIZATION ---
window.onload = () => {
    startSystemSync();
    updateView('Overview');
};