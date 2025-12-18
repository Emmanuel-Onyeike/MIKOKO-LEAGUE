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
                            <p class="font-bold text-sm uppercase">NIL</p>
                        </div>
                        
                        <div class="text-center">
                            <p class="text-3xl font-black italic text-white">VS</p>
                            <p class="text-[10px] text-gray-500 font-mono mt-2">NIL</p>
                        </div>

                        <div class="text-center">
                            <div class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-3 border border-white/5 group-hover:border-red-600/50 transition-colors">
                                <i class="fas fa-shield-halved text-2xl text-red-600"></i>
                            </div>
                            <p class="font-bold text-sm uppercase">NIL</p>
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
    <div class="space-y-6 animate-in pb-10">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
                <h3 class="text-2xl font-black italic uppercase tracking-tighter text-red-600">League Table</h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Season 03 // 08 Team Protocol</p>
            </div>
            <div class="bg-white/5 border border-white/10 px-4 py-3 rounded-xl md:rounded-2xl">
                <p class="text-[9px] md:text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                    Protocol: <span class="text-white font-black">Top 4 Qualify for Glory Champion Cup</span>
                </p>
                <p class="text-[8px] md:text-[9px] text-red-500 font-bold uppercase tracking-tighter mt-1">
                    Format: Semi-Finals & Grand Finale
                </p>
            </div>
        </div>

        <div class="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <table class="w-full text-left border-collapse min-w-[500px] md:min-w-full">
                <thead>
                    <tr class="text-gray-500 border-b border-white/5 uppercase text-[10px] tracking-[0.2em] font-black">
                        <th class="pb-4 pl-2">Pos</th>
                        <th class="pb-4">Team</th>
                        <th class="pb-4 text-center">P</th>
                        <th class="pb-4 text-center text-green-500 hidden md:table-cell">W</th>
                        <th class="pb-4 text-center text-yellow-500 hidden md:table-cell">D</th>
                        <th class="pb-4 text-center text-red-500 hidden md:table-cell">L</th>
                        <th class="pb-4 text-center">GD</th>
                        <th class="pb-4 text-right pr-2 text-white">Pts</th>
                    </tr>
                </thead>
                <tbody class="text-gray-300 font-medium">
                    ${[
                        "NIL", "NIL", "NIL", "NIL", 
                        "NIL", "NIL", "NIL", "NIL"
                    ].map((team, index) => `
                        <tr class="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group ${index < 4 ? 'bg-green-500/[0.01]' : ''}">
                            <td class="py-4 pl-2 font-mono text-xs ${index < 4 ? 'text-green-500' : 'text-red-600'} font-bold">
                                ${(index + 1).toString().padStart(2, '0')}
                            </td>
                            <td class="py-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-7 h-7 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[10px] font-black group-hover:border-red-600/50 transition-colors uppercase italic">${team.charAt(0)}</div>
                                    <div class="flex flex-col">
                                        <span class="font-bold text-sm tracking-tight text-white">${team}</span>
                                        ${index < 4 ? '<span class="text-[7px] text-green-500 uppercase font-black tracking-widest md:hidden">Qualified</span>' : ''}
                                    </div>
                                </div>
                            </td>
                            <td class="py-4 text-center font-mono text-xs">0</td>
                            <td class="py-4 text-center font-mono text-xs text-gray-500 hidden md:table-cell">0</td>
                            <td class="py-4 text-center font-mono text-xs text-gray-500 hidden md:table-cell">0</td>
                            <td class="py-4 text-center font-mono text-xs text-gray-500 hidden md:table-cell">0</td>
                            <td class="py-4 text-center font-mono text-xs">0</td>
                            <td class="py-4 text-right pr-2 font-black text-white">0</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="mt-8 p-6 bg-red-600/5 border border-red-600/10 rounded-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10">
                <i class="fas fa-trophy text-4xl text-red-600"></i>
            </div>
            <p class="text-[10px] text-gray-500 uppercase font-black tracking-widest flex items-center gap-2">
                <i class="fas fa-circle-info text-red-600"></i> Glory Champion Cup Path
            </p>
            <p class="text-xs text-gray-400 mt-2 leading-relaxed uppercase font-bold italic">
                The <span class="text-green-500">Top 4</span> teams automatically advance to the knockouts:
                <br class="hidden md:block"> 
                1st vs 4th | 2nd vs 3rd (Semi-Finals) → Winner advances to the Grand Finale.
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
    <div class="space-y-8 animate-in pb-10">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
                <h3 class="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-red-600">Match Schedule</h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: Season 03 Protocol // 04 Fixtures Active</p>
            </div>
            <div class="px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <span class="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Matchday 01</span>
            </div>
        </div>

        <div class="grid gap-4">
            ${[
                { home: "Apex Predators", away: "Rangers FC", id: 1 },
                { home: "Blaze FC", away: "Mamba FC", id: 2 },
                { home: "Citadel United", away: "Viper Squad", id: 3 },
                { home: "Dynamos SC", away: "Ironbound FC", id: 4 }
            ].map((match) => `
                <div class="p-5 md:p-6 bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] md:rounded-[2rem] flex flex-col md:flex-row justify-between items-center group transition-all hover:border-red-600/20">
                    <div class="flex items-center gap-4 md:gap-6 w-full md:w-auto">
                        <div class="hidden md:flex w-12 h-12 bg-white/5 rounded-2xl border border-white/5 items-center justify-center text-[10px] font-black text-gray-600 group-hover:text-red-600 transition-colors">0${match.id}</div>
                        
                        <div class="flex items-center justify-between md:justify-start gap-3 md:gap-6 w-full md:w-auto">
                            <span class="text-white font-black text-sm md:text-lg uppercase italic tracking-tighter w-24 md:w-auto text-left">${match.home}</span>
                            <span class="text-red-600 font-black italic text-xs md:text-sm">VS</span>
                            <span class="text-white font-black text-sm md:text-lg uppercase italic tracking-tighter w-24 md:w-auto text-right md:text-left">${match.away}</span>
                        </div>
                    </div>
                    
                    <div class="flex flex-row md:items-center gap-3 mt-6 md:mt-0 w-full md:w-auto border-t border-white/5 md:border-none pt-4 md:pt-0">
                        <div class="hidden lg:block text-right mr-4">
                            <span class="block text-[10px] text-red-600 font-black uppercase tracking-widest">TBD</span>
                            <span class="block text-[8px] text-gray-600 font-mono mt-0.5 uppercase">Arena: Main Core</span>
                        </div>
                        
                        <button onclick="openFixtureDetails('${match.home} vs ${match.away}')" class="flex-1 md:flex-none px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
                            Details
                        </button>
                        
                        <button onclick="broadcastUpdate('${match.home} vs ${match.away}')" class="flex-1 md:flex-none px-4 py-3 bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white border border-red-600/20 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                            <i class="fas fa-satellite-dish"></i> <span>Push</span>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="p-4 bg-white/[0.02] border border-dashed border-white/10 rounded-2xl text-center">
            <p class="text-[9px] text-gray-600 uppercase font-bold tracking-[0.3em]">All Kick-off times are subject to MIKOKO Main Node synchronization</p>
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
    <div class="space-y-8 animate-in pb-20">
        <div class="flex justify-between items-end">
            <div>
                <h3 class="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-red-600">News Hub</h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Direct Feed: <span class="text-white">Admin TOGA // Authority Broadcast</span></p>
            </div>
            <span class="hidden md:block text-[10px] text-gray-600 font-mono uppercase tracking-widest">Date: 18.12.2025</span>
        </div>

        <div class="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-red-600/20 bg-[#0a0a0a] group">
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="relative h-[250px] lg:h-full bg-zinc-900 overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
                    <div class="absolute inset-0 flex items-center justify-center text-red-600/10 group-hover:scale-110 transition-transform duration-700">
                         <i class="fas fa-edit text-9xl"></i>
                    </div>
                    <div class="absolute top-6 left-6 z-20 flex flex-col gap-2">
                        <span class="px-4 py-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">7 Slots Available</span>
                        <span class="px-4 py-1.5 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">Custom Naming Active</span>
                    </div>
                </div>

                <div class="p-8 md:p-10 flex flex-col justify-center">
                    <span class="text-[10px] text-red-500 font-black uppercase mb-4 tracking-[0.3em]">Franchise Acquisition</span>
                    <h4 class="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white leading-none mb-6">
                        Own a Team <br><span class="text-red-600 text-xl md:text-4xl">Name Your Legacy</span>
                    </h4>
                    <p class="text-gray-400 text-[11px] md:text-sm uppercase leading-relaxed font-bold tracking-wide mb-8">
                        The ₦4,000 ownership fee grants you full control. <span class="text-white">When you purchase a team, you choose the name.</span> Define your brand, secure your slot, and lead your squad to the Glory Cup.
                    </p>
                    <div class="flex flex-col gap-4">
                        <button onclick="updateView('Mikoko Payment')" class="w-full md:w-max px-8 py-4 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-all">Claim & Name Your Team</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
            <div class="absolute -right-10 -top-10 opacity-5">
                <i class="fas fa-users text-[15rem]"></i>
            </div>
            <div class="relative z-10">
                <span class="text-[10px] text-blue-500 font-black uppercase tracking-[0.4em]">Planning Committee</span>
                <h4 class="text-2xl font-black italic text-white uppercase mt-2 mb-6">Official Oversight</h4>
                <p class="text-gray-400 text-xs md:text-sm font-bold uppercase leading-relaxed mb-8 max-w-2xl">
                    Administered by <span class="text-white font-black italic">TOGA, HASSAN, UGO, ONANA, ZUBBY, DIVINE (White Money), and DERRICK.</span> Decisions and announcements from this group are the only official sources of truth.
                </p>
                <div class="flex flex-wrap gap-2">
                    ${['TOGA', 'HASSAN', 'UGO', 'ONANA', 'ZUBBY', 'DIVINE', 'DERRICK'].map(name => `
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] text-gray-400 font-bold uppercase tracking-widest">${name}</span>
                    `).join('')}
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white/[0.02] border border-white/10 rounded-[2rem] p-6 hover:border-red-600/30 transition-all group">
                <div class="w-10 h-10 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 border border-red-600/20">
                    <i class="fas fa-receipt text-red-500 text-sm"></i>
                </div>
                <span class="text-[9px] text-red-500 font-black uppercase tracking-widest">Payment Security</span>
                <h5 class="text-white font-black uppercase italic tracking-tighter text-lg mt-2 mb-3">Receipt Confirmation</h5>
                <p class="text-gray-500 text-[10px] font-bold uppercase leading-relaxed mb-6">
                    Mikoko League payment has officially begun. Use the transfer section on this site. <span class="text-white">After payment, send your receipt to TOGA's DM for validation.</span>
                </p>
                <div class="pt-4 border-t border-white/5 text-[9px] text-gray-600 font-mono uppercase italic">Only Valid Channel: MIKOKO TERMINAL</div>
            </div>

            <div class="bg-white/[0.02] border border-white/10 rounded-[2rem] p-6 hover:border-white/30 transition-all group">
                <div class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/20">
                    <i class="fas fa-user-tie text-white text-sm"></i>
                </div>
                <span class="text-[9px] text-gray-400 font-black uppercase tracking-widest">Manager Protocol</span>
                <h5 class="text-white font-black uppercase italic tracking-tighter text-lg mt-2 mb-3">Franchise Slot Count</h5>
                <p class="text-gray-500 text-[10px] font-bold uppercase leading-relaxed mb-6">
                    1 Slot already claimed. 7 Remaining. Once all 8 franchises are sold, the ownership window closes. Secure your spot to participate in the upcoming Season 03.
                </p>
                <div class="pt-4 border-t border-white/5 text-[9px] text-gray-600 font-mono uppercase italic">Ownership: ₦4,000 // Player: ₦2,000</div>
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
<div class="space-y-8 animate-in pb-12">
    <div class="flex justify-between items-end">
        <div>
            <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">Market Terminal</h3>
            <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-yellow-500 italic">Standby Mode</span></p>
        </div>
        <div class="hidden md:flex items-center gap-3">
            <span class="text-[9px] text-gray-600 font-mono uppercase">Node: MKK-TRNSFR-03</span>
            <div class="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
        </div>
    </div>

    <div class="relative p-10 md:p-20 bg-[#0a0a0a] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col items-center justify-center text-center">
        <div class="absolute inset-0 opacity-20 pointer-events-none">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.2)_0%,transparent_70%)]"></div>
            <i class="fas fa-chart-line absolute -left-10 -bottom-10 text-[25rem] text-white/5 -rotate-12"></i>
        </div>

        <div class="relative z-10 max-w-2xl">
            <div class="w-24 h-24 bg-red-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-10 rotate-12 shadow-[0_0_50px_rgba(220,38,38,0.3)] border-4 border-black">
                <i class="fas fa-hand-holding-usd text-4xl -rotate-12"></i>
            </div>
            
            <h4 class="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none mb-6">
                Market Opening <br>
                <span class="text-red-600">Jan 18, 2026</span>
            </h4>

            <div class="inline-block px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
                <span class="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em]">Stay Tuned Managers</span>
            </div>

            <p class="text-sm md:text-lg text-gray-400 font-bold uppercase leading-relaxed tracking-wide mb-10">
                "Make your <span class="text-white">money worth the buy</span> and your <span class="text-red-600">pocket worth the sale</span>. Build a dynasty or cash out—the choice is yours."
            </p>

            <div class="flex flex-wrap justify-center gap-4">
                <div class="px-5 py-3 bg-red-600/10 border border-red-600/30 rounded-2xl">
                    <span class="block text-[8px] text-red-500 font-black uppercase mb-1">Buy Logic</span>
                    <span class="text-xs text-white font-black uppercase italic">Value Driven</span>
                </div>
                <div class="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl">
                    <span class="block text-[8px] text-gray-500 font-black uppercase mb-1">Sell Logic</span>
                    <span class="text-xs text-white font-black uppercase italic">Profit Focus</span>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-8 bg-zinc-900/50 border border-white/5 rounded-[2rem] group hover:border-red-600/30 transition-all">
            <i class="fas fa-user-check text-red-600 mb-4"></i>
            <h5 class="text-white font-black uppercase italic text-sm mb-2">Verified Units</h5>
            <p class="text-[10px] text-gray-500 font-bold uppercase leading-relaxed">Only managers who have secured their franchise slots (₦4,000) can participate in the open market.</p>
        </div>

        <div class="p-8 bg-zinc-900/50 border border-white/5 rounded-[2rem] group hover:border-red-600/30 transition-all">
            <i class="fas fa-coins text-red-600 mb-4"></i>
            <h5 class="text-white font-black uppercase italic text-sm mb-2">Trade Protocol</h5>
            <p class="text-[10px] text-gray-500 font-bold uppercase leading-relaxed">Direct player-to-player swaps and cash-plus-player deals will be facilitated by the Committee.</p>
        </div>

        <div class="p-8 bg-zinc-900/50 border border-white/5 rounded-[2rem] group hover:border-red-600/30 transition-all">
            <i class="fas fa-file-contract text-red-600 mb-4"></i>
            <h5 class="text-white font-black uppercase italic text-sm mb-2">Finalization</h5>
            <p class="text-[10px] text-gray-400 font-bold uppercase leading-relaxed italic">"Everything regarding the league collectively comes from the Committee."</p>
        </div>
    </div>
</div>`,
    
   'Mikoko Payment': `
<div class="space-y-8 animate-in pb-12">
    <div class="flex justify-between items-end">
        <div>
            <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">Financial Node</h3>
            <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-green-500">Payment Channels Active</span></p>
        </div>
        <i class="fas fa-file-invoice-dollar text-red-600 opacity-20 text-3xl"></i>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-6 bg-red-600/10 border border-red-600/20 rounded-3xl">
            <span class="text-[9px] text-red-600 font-black uppercase tracking-widest">Franchise Fee</span>
            <h4 class="text-2xl font-black text-white italic uppercase">₦4,000</h4>
            <p class="text-[10px] text-gray-400 font-bold uppercase mt-1">To Own, Name, & Coach a Team</p>
        </div>
        <div class="p-6 bg-white/5 border border-white/10 rounded-3xl">
            <span class="text-[9px] text-gray-400 font-black uppercase tracking-widest">Player Fee</span>
            <h4 class="text-2xl font-black text-white italic uppercase">₦2,000</h4>
            <p class="text-[10px] text-gray-400 font-bold uppercase mt-1">To Register for the Draft Pool</p>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="p-8 bg-zinc-900/50 border border-white/10 rounded-[2.5rem] relative overflow-hidden">
            <div class="relative z-10">
                <span class="text-[9px] text-red-600 font-black uppercase tracking-[0.2em]">Transfer Protocol</span>
                <h4 class="text-xl font-black text-white italic mt-2 mb-6 uppercase tracking-tighter">Account Information</h4>
                
                <div class="space-y-4">
                    <div class="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p class="text-[9px] text-gray-500 uppercase font-bold">Bank Name</p>
                        <p class="text-lg text-white font-black italic uppercase">OPAY</p>
                    </div>
                     <div class="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p class="text-[9px] text-gray-500 uppercase font-bold">Account Name</p>
                        <p class="text-lg text-white font-black italic uppercase">IBEKU TOCHUKWU</p>
                    </div>
                    <div class="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p class="text-[9px] text-gray-500 uppercase font-bold">Account Number</p>
                        <p class="text-2xl text-red-600 font-mono font-black tracking-tighter">7062959301</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative p-8 bg-[#0a0a0a] border border-red-600/20 rounded-[2.5rem] flex flex-col justify-center overflow-hidden">
            <div class="relative z-10">
                <div class="w-12 h-12 bg-red-600/10 border border-red-600/30 rounded-xl flex items-center justify-center mb-6">
                    <i class="fas fa-paper-plane text-red-600"></i>
                </div>
                <h4 class="text-white font-black uppercase italic text-xl tracking-tighter mb-4">Verification Steps</h4>
                <ul class="space-y-4">
                    <li class="flex gap-4">
                        <span class="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center font-black">1</span>
                        <p class="text-[10px] text-gray-400 font-bold uppercase leading-relaxed">Transfer the exact fee (₦2,000 or ₦4,000) to the account provided.</p>
                    </li>
                    <li class="flex gap-4">
                        <span class="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center font-black">2</span>
                        <p class="text-[10px] text-gray-400 font-bold uppercase leading-relaxed">Capture a clear screenshot of the successful transaction receipt.</p>
                    </li>
                    <li class="flex gap-4">
                        <span class="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center font-black">3</span>
                        <p class="text-[10px] text-white font-black uppercase leading-relaxed">Send the receipt directly to <span class="text-red-600">TOGA's DM</span> for manual validation.</p>
                    </li>
                </ul>
                
                <div class="mt-8 pt-6 border-t border-white/5">
                    <p class="text-[9px] text-gray-600 font-mono uppercase italic">Note: Only payments verified by the Planning Committee are valid.</p>
                </div>
            </div>
        </div>
    </div>
</div>`,
   'Team Lab': `
<div class="space-y-8 animate-in pb-12">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
            <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">Tactical Lab</h3>
            <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-green-500">Live Simulation Active</span></p>
        </div>
        <div class="flex gap-2">
            <button onclick="saveTacticalMap()" class="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] text-white font-black uppercase hover:bg-red-600 transition-all">
                <i class="fas fa-camera mr-2"></i> Save to Gallery
            </button>
            <button onclick="generateTacticalLink()" class="px-4 py-2 bg-red-600 text-white rounded-xl text-[10px] font-black uppercase shadow-lg shadow-red-600/20">
                <i class="fas fa-link mr-2"></i> Share Link
            </button>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-4">
            <div id="tacticalPitch" class="relative aspect-[3/4] md:aspect-video bg-emerald-900/30 border-4 border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm">
                <div class="absolute inset-6 border-2 border-white/5 rounded-lg pointer-events-none">
                    <div class="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5"></div>
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/5 rounded-full"></div>
                </div>

                <div id="dropZone" class="absolute inset-0 z-10" ondrop="dropPlayer(event)" ondragover="allowDrop(event)">
                    </div>
            </div>

            <div class="flex gap-4">
                <input type="text" id="tacticalTeamName" placeholder="ENTER SQUAD NAME..." class="flex-1 bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-white font-black italic uppercase text-sm">
                <select id="matchType" onchange="initTacticalLab()" class="bg-zinc-900 border border-white/10 rounded-2xl px-4 text-red-600 font-black uppercase text-xs">
                    <option value="11">11-Man Game</option>
                    <option value="9">9-Man Game</option>
                    <option value="7">7-Man Game</option>
                    <option value="5">5-Man Game</option>
                </select>
            </div>
        </div>

        <div class="space-y-6">
            <div class="p-6 bg-zinc-900/50 border border-white/5 rounded-[2rem]">
                <h5 class="text-white font-black uppercase italic text-xs mb-4">Player Reserves (Drag Units)</h5>
                <div id="playerBench" class="flex flex-wrap gap-3 min-h-[100px] p-4 bg-black/40 rounded-2xl border border-dashed border-white/10">
                    </div>
            </div>

            <div class="p-6 bg-zinc-900/50 border border-white/5 rounded-[2rem]">
                <h5 class="text-white font-black uppercase italic text-xs mb-4">Auto-Formations</h5>
                <div class="grid grid-cols-2 gap-2">
                    <button onclick="applyFormation('4-4-2')" class="p-3 bg-white/5 border border-white/10 rounded-xl text-[9px] text-gray-400 font-black uppercase hover:text-red-600">4-4-2 Standard</button>
                    <button onclick="applyFormation('4-3-3')" class="p-3 bg-white/5 border border-white/10 rounded-xl text-[9px] text-gray-400 font-black uppercase hover:text-red-600">4-3-3 Attack</button>
                    <button onclick="applyFormation('3-5-2')" class="p-3 bg-white/5 border border-white/10 rounded-xl text-[9px] text-gray-400 font-black uppercase hover:text-red-600">3-5-2 Wide</button>
                    <button onclick="applyFormation('clear')" class="p-3 bg-red-600/10 border border-red-600/20 rounded-xl text-[9px] text-red-600 font-black uppercase">Reset Board</button>
                </div>
            </div>
        </div>
    </div>
</div>
`,

    
    'Pure Stream': `
<div class="space-y-8 animate-in pb-12">
    <div class="flex justify-between items-end">
        <div>
            <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">Pure Stream</h3>
            <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-red-600 animate-pulse">OFF AIR</span></p>
        </div>
        <i class="fas fa-satellite-dish text-red-600 opacity-20 text-3xl"></i>
    </div>

    <div class="relative aspect-video bg-black rounded-[3rem] border border-white/5 overflow-hidden group">
        <div class="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div class="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-red-600/40 group-hover:scale-110 transition-transform">
                <i class="fas fa-play text-white ml-1"></i>
            </div>
            <p class="text-white font-black uppercase italic tracking-widest text-sm">Waiting for Matchday 01</p>
            <p class="text-gray-600 text-[9px] font-bold uppercase mt-2">Signal Strength: 100% // Latency: 22ms</p>
        </div>
        <div class="absolute bottom-8 left-8 right-8 flex justify-between items-center z-20">
            <span class="px-3 py-1 bg-red-600 text-white text-[8px] font-black uppercase rounded">Live Feed</span>
            <div class="flex gap-4">
                <i class="fas fa-expand text-white/20 text-xs"></i>
                <i class="fas fa-cog text-white/20 text-xs"></i>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${[1, 2, 3].map(i => `
            <div class="bg-zinc-900/50 border border-white/5 rounded-3xl p-4 opacity-40">
                <div class="aspect-video bg-black rounded-2xl mb-4 flex items-center justify-center">
                    <i class="fas fa-film text-gray-800"></i>
                </div>
                <span class="text-[8px] text-gray-500 font-black uppercase">Archive Log 0${i}</span>
                <p class="text-[10px] text-white font-bold uppercase mt-1">Season 02 Highlights</p>
            </div>
        `).join('')}
    </div>
</div>`,

    'Messages': `
<div class="space-y-8 animate-in pb-12">
    <div class="flex justify-between items-end">
        <div>
            <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">Comms Center</h3>
            <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-green-500 italic">Encrypted Connection Stable</span></p>
        </div>
        <i class="fas fa-envelope-open-text text-red-600 opacity-20 text-3xl"></i>
    </div>

    <div class="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-6 md:p-10 min-h-[500px] flex flex-col">
        <div class="space-y-6 flex-1">
            <div class="flex gap-4 max-w-2xl">
                <div class="w-10 h-10 rounded-xl bg-red-600 flex-shrink-0 flex items-center justify-center shadow-lg shadow-red-600/20">
                    <i class="fas fa-robot text-white text-xs"></i>
                </div>
                <div class="bg-white/5 border border-white/10 p-5 rounded-2xl rounded-tl-none">
                    <span class="text-[9px] text-red-600 font-black uppercase tracking-widest block mb-2">System Admin // TOGA</span>
                    <p class="text-xs text-gray-300 font-bold uppercase leading-relaxed">
                        Welcome to Season 03. All Team Owners must DM their receipts for <span class="text-white">Franchise Naming Rights</span>. Use the Financial Node for account details.
                    </p>
                    <span class="text-[8px] text-gray-600 font-mono mt-3 block">SENT: 18.12.2025 // 14:00</span>
                </div>
            </div>

            <div class="flex gap-4 max-w-2xl ml-auto flex-row-reverse">
                <div class="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex-shrink-0 flex items-center justify-center">
                    <i class="fas fa-users text-white text-xs"></i>
                </div>
                <div class="bg-red-600/10 border border-red-600/20 p-5 rounded-2xl rounded-tr-none text-right">
                    <span class="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-2">League Committee</span>
                    <p class="text-xs text-gray-300 font-bold uppercase leading-relaxed">
                        Registration for the draft pool is currently at ₦2,000. Ensure you have your ID cards ready for the Jan 18th window.
                    </p>
                    <span class="text-[8px] text-gray-600 font-mono mt-3 block">SENT: 18.12.2025 // 15:45</span>
                </div>
            </div>
        </div>

        <div class="mt-10 relative">
            <input type="text" placeholder="SECURE MESSAGE UNAVAILABLE - BROADCAST ONLY" disabled 
                class="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-[10px] font-black uppercase tracking-widest text-gray-700 cursor-not-allowed">
            <div class="absolute right-4 top-1/2 -translate-y-1/2">
                <i class="fas fa-lock text-gray-800"></i>
            </div>
        </div>
    </div>
</div>`,
};

/**
 * MIKOKO LEAGUE FULL SYSTEM SCRIPT
 * Version: 7.0 (Franchise Naming Protocol)
 */

// --- 1. GLOBAL DATABASE STATE (8 TEAMS - DEFAULT NIL) ---
let players = JSON.parse(localStorage.getItem('mikoko_players')) || [];
let teams = JSON.parse(localStorage.getItem('mikoko_teams')) || [
    { id: '01A', name: "NIL", members: [] },
    { id: '02B', name: "NIL", members: [] },
    { id: '03C', name: "NIL", members: [] },
    { id: '04D', name: "NIL", members: [] },
    { id: '05E', name: "NIL", members: [] },
    { id: '06I', name: "NIL", members: [] },
    { id: '07M', name: "NIL", members: [] },
    { id: '08R', name: "NIL", members: [] }
];

const MAX_SQUAD_SIZE = 10;
const TOTAL_SLOTS = 80; 
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
            if (title === 'Player Selection' || title === 'Team Selection') {
                renderLeagueSystem(title);
            } else {
                mainDisplay.innerHTML = (typeof contentData !== 'undefined' && contentData[title]) 
                    ? contentData[title] 
                    : `<div class="p-10 text-center"><h2 class="text-white font-black italic">${title}</h2><p class="text-gray-500 text-xs mt-2">DATA NODE OFFLINE</p></div>`;
            }
            
            mainDisplay.style.opacity = '1';
            startSystemSync(); 
        }, 200);
    }

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

// --- 4. ADMIN AUTH ---
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
    if (portal) {
        portal.classList.add('opacity-0');
        setTimeout(() => portal.classList.add('hidden'), 500);
    }
    updateView('Overview');
}

function verifyAdminAccess() {
    const input = document.getElementById('adminPassInput').value;
    if (input === ADMIN_PASSCODE) {
        const portal = document.getElementById('adminAuthPortal');
        portal.classList.add('opacity-0');
        setTimeout(() => {
            portal.classList.add('hidden');
            executeAdminRender();
        }, 500);
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
            <div class="space-y-8 animate-in pb-10">
                <div class="bg-zinc-900/80 p-6 md:p-8 rounded-[2rem] border border-white/5">
                    <h3 class="text-white font-black uppercase italic mb-4">Registration Terminal</h3>
                    <div class="flex flex-col md:flex-row gap-4">
                        <input type="text" id="playerNameInput" placeholder="ENTER PLAYER NAME..." class="flex-1 bg-black/60 border border-white/10 rounded-2xl px-6 py-4 text-red-500 font-mono focus:outline-none focus:border-red-600">
                        <button onclick="registerPlayer()" class="px-10 py-4 bg-red-600 text-white font-black uppercase italic rounded-2xl hover:bg-white hover:text-red-600 transition-all">Register</button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="border border-white/5 rounded-[2.5rem] p-6 bg-black/40">
                        <h4 class="text-yellow-500 font-black uppercase text-[10px] mb-4 tracking-widest">Awaiting Assignment (${pending.length})</h4>
                        <div class="space-y-2 overflow-y-auto max-h-[450px] custom-scrollbar pr-2">
                            ${pending.map(p => `<div class="p-4 bg-white/5 rounded-2xl flex justify-between items-center"><span class="text-white font-bold text-xs uppercase">${p.name}</span><i class="fas fa-clock text-yellow-500/20 text-xs"></i></div>`).join('') || '<p class="text-zinc-800 text-center py-10 font-black uppercase italic">No Pending Units</p>'}
                        </div>
                    </div>
                    <div class="border border-white/5 rounded-[2.5rem] p-6 bg-black/40">
                        <h4 class="text-emerald-500 font-black uppercase text-[10px] mb-4 tracking-widest">Active Roster (${active.length})</h4>
                        <div class="space-y-2 overflow-y-auto max-h-[450px] custom-scrollbar pr-2">
                            ${active.map(p => `<div class="p-4 bg-white/5 rounded-2xl flex justify-between items-center"><span class="text-white font-bold text-xs uppercase">${p.name}</span><span class="text-[8px] text-zinc-500 font-black uppercase border border-white/5 px-2 py-1 rounded italic">${p.team}</span></div>`).join('') || '<p class="text-zinc-800 text-center py-10 font-black uppercase italic">Roster Empty</p>'}
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
        <div class="space-y-8 animate-in pb-20">
            <div class="bg-red-600/10 border border-red-600/20 p-6 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-4 backdrop-blur-md">
                <div>
                    <h3 class="text-white font-black uppercase italic">Franchise Admin Terminal</h3>
                    <p class="text-[9px] text-red-500 font-bold uppercase tracking-widest">Elite-8 Control Module</p>
                </div>
                <div class="bg-black/50 px-4 py-3 rounded-xl border border-white/10 flex items-center gap-3">
                    <span class="text-[9px] text-gray-500 uppercase font-black">Next In Queue:</span>
                    <span class="text-xs text-white font-bold italic uppercase">${firstPending ? firstPending.name : 'NO PENDING'}</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                ${teams.map(t => `
                    <div class="flex flex-col h-[400px] bg-zinc-900/50 border border-white/10 rounded-[2rem] overflow-hidden group hover:border-red-600/30 transition-all">
                        <div class="p-5 pb-2">
                            <div class="flex justify-between items-start">
                                <h4 class="text-white font-black italic uppercase text-sm truncate ${t.name === 'NIL' ? 'text-gray-600' : 'text-white'}">${t.name}</h4>
                                <button onclick="renameTeam('${t.id}')" class="text-[10px] text-red-600 hover:text-white"><i class="fas fa-pen"></i></button>
                            </div>
                            <p class="text-[9px] text-red-600 font-bold uppercase tracking-widest mt-1">${t.members.length}/10 UNITS</p>
                        </div>

                        <div class="flex-1 overflow-y-auto px-5 py-2 custom-scrollbar space-y-2">
                            ${t.members.map(m => `
                                <div class="flex justify-between items-center p-3 bg-white/[0.03] border border-white/5 rounded-xl group/item">
                                    <p class="text-[9px] text-zinc-300 font-mono uppercase font-bold">${m}</p>
                                    <button onclick="firePlayer('${m}', '${t.id}')" class="text-red-600 opacity-0 group-hover/item:opacity-100 transition-all">
                                        <i class="fas fa-trash-alt text-[10px]"></i>
                                    </button>
                                </div>`).join('') || '<div class="h-full flex flex-col items-center justify-center opacity-10 gap-2"><i class="fas fa-shield-blank text-2xl"></i><span class="text-[8px] font-black uppercase italic">Empty Slot</span></div>'}
                        </div>

                        <div class="p-5 pt-2 mt-auto">
                            <button onclick="assignPlayerToTeam(${firstPending ? firstPending.id : null}, '${t.id}')" 
                                class="w-full py-4 rounded-xl text-[9px] font-black uppercase transition-all 
                                ${firstPending && t.members.length < MAX_SQUAD_SIZE ? 'bg-red-600 text-white shadow-lg' : 'bg-white/5 text-gray-600 cursor-not-allowed'}">
                                ${firstPending ? (t.members.length < MAX_SQUAD_SIZE ? 'Assign' : 'Full') : 'Queue Empty'}
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

function renameTeam(teamId) {
    const team = teams.find(t => t.id === teamId);
    const newName = prompt("ENTER NEW FRANCHISE NAME:", team.name === "NIL" ? "" : team.name);
    
    if (newName && newName.trim() !== "") {
        const oldName = team.name;
        team.name = newName.trim().toUpperCase();
        
        // Update all players currently in this team
        players.forEach(p => {
            if (p.team === oldName) p.team = team.name;
        });

        saveLeagueData();
        executeAdminRender();
        showGlobalAlert("fas fa-id-card", "Franchise Branded", `Team ${teamId} is now ${team.name}`);
    }
}

function registerPlayer() {
    const nameInput = document.getElementById('playerNameInput');
    if (!nameInput || !nameInput.value.trim()) return;

    if (players.length >= TOTAL_SLOTS) {
        showGlobalAlert("fas fa-exclamation-circle", "Network Full", "League capacity has been reached.");
        return;
    }

    players.push({ id: Date.now(), name: nameInput.value.trim(), status: 'Pending', team: 'Unassigned' });
    saveLeagueData();
    showGlobalAlert("fas fa-hourglass-half", "Entry Logged", "Awaiting Admin Assignment.");
    nameInput.value = "";
    renderLeagueSystem('Player Selection'); 
}

function assignPlayerToTeam(playerId, teamId) {
    if (!playerId) return;
    const team = teams.find(t => t.id === teamId);
    const player = players.find(p => p.id === playerId);
    
    if (team.name === "NIL") {
        showGlobalAlert("fas fa-lock", "Access Denied", "Purchase franchise to unlock team assignment.");
        return;
    }

    if (team.members.length >= MAX_SQUAD_SIZE) {
        showGlobalAlert("fas fa-users", "Squad Full", "Max capacity reached.");
        return;
    }

    player.status = 'Confirmed';
    player.team = team.name;
    team.members.push(player.name);
    
    saveLeagueData();
    executeAdminRender();
    showGlobalAlert("fas fa-check-double", "Unit Deployed", `${player.name} joined ${team.name}.`);
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
/**
 * MIKOKO LEAGUE - DEDICATED LEADERBOARD ENGINE
 * Handles Expansion and Display for Goals & Assists
 */

// --- 1. GOALS LEADERBOARD FUNCTIONS ---
function toggleFullLeaderboard() {
    const extraRows = document.querySelectorAll('.extra-players');
    const btn = document.getElementById('toggleGoalsBtn');
    
    // Check if currently hidden
    const isHidden = extraRows[0].classList.contains('hidden');
    
    if (isHidden) {
        extraRows.forEach(row => {
            row.classList.remove('hidden');
            row.classList.add('flex'); // Ensure flex layout remains
        });
        btn.innerText = "Collapse Rankings";
    } else {
        extraRows.forEach(row => {
            row.classList.add('hidden');
            row.classList.remove('flex');
        });
        btn.innerText = "View Full Player Stats (Top 10)";
    }
}

// --- 2. ASSISTS LEADERBOARD FUNCTIONS ---
function toggleAssistsLeaderboard() {
    const extraRows = document.querySelectorAll('.extra-assists');
    const btn = document.getElementById('toggleAssistsBtn');
    
    // Check if currently hidden
    const isHidden = extraRows[0].classList.contains('hidden');
    
    if (isHidden) {
        extraRows.forEach(row => {
            row.classList.remove('hidden');
            row.classList.add('flex');
        });
        btn.innerText = "Collapse Rankings";
    } else {
        extraRows.forEach(row => {
            row.classList.add('hidden');
            row.classList.remove('flex');
        });
        btn.innerText = "View Full Playmaker Stats (Top 10)";
    }
}

// --- 3. DATA SYNC (Optional: Syncs names if data exists) ---
function syncLeaderboardData() {
    // If you want these to pull from your player database automatically
    if (typeof players !== 'undefined' && players.length > 0) {
        // This is where you would map your players into the HTML rows
        // If you prefer to keep them static for now, this can stay empty
    }
}



/// for the team lab
// --- TACTICAL LAB ENGINE ---

function initTacticalLab() {
    const bench = document.getElementById('playerBench');
    const matchType = document.getElementById('matchType').value;
    if(!bench) return;

    bench.innerHTML = '';
    // Always provide 12 units for the coach to choose from
    for(let i = 1; i <= 12; i++) {
        const playerDot = document.createElement('div');
        playerDot.id = `tactical-player-${i}`;
        playerDot.draggable = true;
        playerDot.ondragstart = dragPlayer;
        playerDot.className = "w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white font-black cursor-move border-2 border-white/20 shadow-lg";
        playerDot.innerText = i;
        bench.appendChild(playerDot);
    }
}

function allowDrop(ev) { ev.preventDefault(); }

function dragPlayer(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropPlayer(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const player = document.getElementById(data);
    const dropZone = document.getElementById('dropZone');
    
    // Calculate position relative to the pitch
    const rect = dropZone.getBoundingClientRect();
    const x = ((ev.clientX - rect.left) / rect.width) * 100;
    const y = ((ev.clientY - rect.top) / rect.height) * 100;

    player.style.position = 'absolute';
    player.style.left = `${x}%`;
    player.style.top = `${y}%`;
    player.style.transform = 'translate(-50%, -50%)';
    
    dropZone.appendChild(player);
}

function applyFormation(type) {
    const players = Array.from(document.querySelectorAll('[id^="tactical-player-"]'));
    const dropZone = document.getElementById('dropZone');
    
    if(type === 'clear') {
        initTacticalLab();
        return;
    }

    // Basic coordinate logic for formations
    const formations = {
        '4-4-2': [
            {t:90, l:50}, // GK
            {t:70, l:20}, {t:70, l:40}, {t:70, l:60}, {t:70, l:80}, // DEF
            {t:40, l:20}, {t:40, l:40}, {t:40, l:60}, {t:40, l:80}, // MID
            {t:15, l:40}, {t:15, l:60} // ATT
        ]
    };

    const coords = formations[type] || [];
    coords.forEach((pos, i) => {
        if(players[i]) {
            players[i].style.position = 'absolute';
            players[i].style.left = `${pos.l}%`;
            players[i].style.top = `${pos.t}%`;
            players[i].style.transform = 'translate(-50%, -50%)';
            dropZone.appendChild(players[i]);
        }
    });
}

function saveTacticalMap() {
    const pitch = document.getElementById('tacticalPitch');
    // Note: requires <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    html2canvas(pitch).then(canvas => {
        const link = document.createElement('a');
        link.download = `Mikoko-Tactics-${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
        showGlobalAlert("fas fa-file-download", "Tactics Exported", "Saved to your device gallery.");
    });
}

function generateTacticalLink() {
    const teamName = document.getElementById('tacticalTeamName').value || "Unnamed Squad";
    const shareUrl = window.location.href.split('?')[0] + "?view=TeamLab&team=" + btoa(teamName);
    
    navigator.clipboard.writeText(shareUrl);
    showGlobalAlert("fas fa-link", "Link Generated", "Share this link with your squad group.");
}
