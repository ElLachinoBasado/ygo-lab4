let mock = [
{
    id: 1,
    name: "Tri-Brigade",
    tier: 1,
    image: "99726621.jpg",
    matchupbomb: 0,
    matchuptrap: 1,
    description: "Pure Tri-Brigade and Tri-Brigade Zoodiac are both surprisingly simple matchups. They're too consistent to put down as truly winning matchups, but it's very competitive in Bo1."
},       
{
    id: 2,
    name: 'Live Twins',
    tier: 4,
    image: '9205573.jpg',
    matchupbomb: 1,
    matchuptrap: 2,
    description: "Without Sunny, this deck doesn't have any real staying power versus Bomb CyDra, and it also doesn't have a lot of ways to fight an onslaught of trap cards. This matchup will change when inevitably the deck gets Sunny, however."
},
{
    id: 3,
    name: 'Adamancipators',
    tier: 2,
    image: '9464441.jpg',
    matchupbomb: -1,
    matchuptrap: -2,
    description: "Trap Cyber Dragon cannot keep up with the grind game of triple Block Dragon. In fact, nobody can. Why is this card legal in Master Duel?"
},
{
    id: 4,
    name: 'Cyber Dragon',
    tier: 0,
    image: '10443957.jpg',
    matchupbomb: 0,
    matchuptrap: 1,
    description: "You go first, you lose. Almost every CyDra player is using a bomb variant, so trap CyDra kind of wins for free if it goes second."
},
{
    id: 5,
    name: 'Thunder Dragons',
    tier: 3,
    image: '15291624.jpg',
    matchupbomb: -1,
    matchuptrap: 0,
    description: "Bomb CyDra SHOULD lose harder, but it's actually not THAT difficult to deal with Colossus. Trap CyDra actually has a very stable matchup with the archetype."
},
{
    id: 6,
    name: "Dinosaurs",
    tier: 4,
    image: '18940556.jpg',
    matchupbomb: -1,
    matchuptrap: 0,
    description: "Dinosaurs are one of the only meta relevant decks that want to go second, which really messes CyDra up. The bomb variant is really unstable against this archetype, however, since Dinos can put up a much better turn 1 board. Trap CyDra has a much less lopsided match up."
},
{
    id: 7,
    name: "Dragonmaids",
    tier: 5,
    image: '24799107.jpg',
    matchupbomb: 1,
    matchuptrap: 2,
    description: "This deck is comically weak. Its only interrupts happen with hand traps or in the battle phase. CyDra Infinity + Rampage Dragon is an instant gg, shake my hand, kind of setup. Throw in a few Solemn Strikes or Torrential Tributes and there is quite honestly nothing that Dragonmaids can do."
},
{
    id: 8,
    name: "Sky Striker",
    tier: 3,
    image: '26077387.jpg',
    matchupbomb: 1,
    matchuptrap: 2,
    description: "Sky Striker loses so badly to CyDra because it focuses on putting up boards that only have one Machine type monster in the extra monster zone... In other words, you get to resolve 5 or 6 chimeratechs a game without triggering Raye's graveyard effect."
},    
{
    id: 9,
    name: "Drytrons",
    tier: 1,
    image: '48546368.jpg',
    matchupbomb: -2,
    matchuptrap: -1,
    description: "Herald of Ultimateness + triple Benten + triple Eva? What were they thinking? There is literally nothing that you can do to stop it. Bomb CyDra cannot beat this deck without Droplet + Kaiju, while at least Trap CyDra can clear the Herald with cards like Solemn Strike or Broken Line."
},
{
    id: 10,
    name: "HERO",
    tier: 4,
    image: '58481572.jpg',
    matchupbomb: 1,
    matchuptrap: 2,
    description: "HERO is already known for putting up boards that are fragile to boardwipes. Throw in CyDra's board breaking prowess + Trap cards? GG, shake my hand. Sorry Jaden. Zane wins again!"
},
{
    id: 11,
    name: "Phantom Knights",
    tier: 3,
    image: '62709239.jpg',
    matchupbomb: -2,
    matchuptrap: -1,
    description: "Rhongo Bongo. End of story."
},
{
    id: 12,
    name: "Tri-Brigade Lyrilusc",
    tier: 2,
    image: '72330894.jpg',
    matchupbomb: -2,
    matchuptrap: -1,
    description: "Simorgh + Wind Barrier makes Bomb CyDra impossible to play against this archetype. Trap Cyber Dragon also loses because it can't keep up this deck's sheer power + speed, but it is a lot more effective at clearing the board which gives you a fighting chance."
},
{
    id: 13,
    name: "Prank-Kids",
    tier: 3,
    image: '81997228.jpg',
    matchupbomb: -1,
    matchuptrap: 0,
    description: "Bomb CyDra struggles to OTK this wily deck. Trap CyDra is surprisingly good at grinding out the Prank-Kids, though it has to be wary of backrow hate."
},
{
    id: 14,
    name: "Virtual World",
    tier: 2,
    image: '92519087.jpg',
    matchupbomb: -1,
    matchuptrap: 0,
    description: "If True King of All Calamities did not exist this would actually be a pretty good matchup. Sadly, it does, so the matchup is actually pretty bad for bomb CyDra. Trap Cyber Dragon actually doesn't care about True King, but is forced to play the grind game vs one of the absolute best in the game at grinding, which is unfortunate. Still, VW hates interrupts so Trap CyDra is probably the way to go."
},
{
    id: 15,
    name: "Invoked Dogmatika Shaddoll",
    tier: 2,
    image: '94977270.jpg',
    matchupbomb: -1,
    matchuptrap: -2,
    description: "This deck's grind game is far too powerful for Trap Cyber Dragon. You can kind of cheese out wins sometimes, but for the most part, Winda + IDS interrupts equals game. Bomb CyDra is slightly better because it wins the game faster. Most turn 1 IDS boards are Mechaba + Winda, which loses to Jizukiru + Droplet and gets utterly mollywhopped by Cyber Dragon OTKs."
},
{
    id: 16,
    name: "Eldlich",
    tier: 3,
    image: '95440946.jpg',
    matchupbomb: -1,
    matchuptrap: -2,
    description: "This deck is horrendous for Trap Cyber Dragon. It's also bad for Bomb CyDra, but it's slightly better since Bomb CyDra doesn't depend on a grind game nearly as much as Trap Cyber Dragon does. Because of the best of one format, every Cyber Dragon list should run multiple options for Skill Drain and backrow nuking."
},
{
    id: 17,
    name: "Blue-Eyes White Dragon",
    tier: 5,
    image: '89631143.jpg',
    matchupbomb: 2,
    matchuptrap: 2,
    description: "If your decklist can't beat Blue-Eyes White Dragon decks consistently, you should throw it out and start over. This matchup is so free that it's not even funny."
}              
]
export default mock;