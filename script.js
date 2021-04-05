// Array to hold input from the users
var teamPlayers = [];
const PLAYER_LIMIT = 4;

// Gets the input from the user with .querySelector()
function addPlayer(teamPlayers) {
  if (hasPlayers(PLAYER_LIMIT) == true) {
    alert("This game is just for " + PLAYER_LIMIT + " players!")
  } else {
    var newPlayer = document.querySelector('#newPlayer');
    // Gets just the value from the user
    var addNewPlayer = newPlayer.value;
    // Keeps showing the placeholder name
    newPlayer.value = "";
    // Variable that hold data returned from the function
    setPlayer(addNewPlayer);
    printPlayers(teamPlayers);
  }
};


// Set all initial properties for each new player
function setPlayer(name) {
   teamPlayers.push({mascot: randomMascot(), player: name, victories: 0, ties: 0, defeats: 0, points: 0});
};


// Print the table point on the screen
function printPlayers(teamPlayers) {
  var html = "";
  for (var i = 0; i < teamPlayers.length; i++) {
    html += "<tr><td><img src='" + teamPlayers[i].mascot + "' height='50'></td>";
    html += "<td>" + teamPlayers[i].player + "</td>";
    html += "<td>" + teamPlayers[i].victories + "</td>";
    html += "<td>" + teamPlayers[i].ties + "</td>";
    html += "<td>" + teamPlayers[i].defeats + "</td>";
    html += "<td>" + teamPlayers[i].points + "</td>";
    html += "<td><button onClick='addVictory(" + i + ")'>Victory</button></td>";
    html += "<td><button onClick='addTie(" + i + ")'>Tie</button></td>";
    html += "<td><button onClick='addDefeat(" + i + ")'>Defeat</button></td>";
    html += "<td><button id='mascot' onClick='addMascot(" + i + ")'>Mascot</button></td></tr>";
  }
  var playersTable = document.getElementById("playersTable");
  playersTable.innerHTML = html;
};


// Add victories to each player
function addVictory(i) {
  teamPlayers[i].victories++;
  teamPlayers[i].points = calculatePoints(teamPlayers[i]);
  printPlayers(teamPlayers);
};


// Add ties to all players at the same time
function addTie(i) {
  for (var i = 0; i < teamPlayers.length; i++) {
    teamPlayers[i].ties++;
    teamPlayers[i].points = calculatePoints(teamPlayers[i]);
  }
  printPlayers(teamPlayers);
};


// Add defeats to each player
function addDefeat(i) {
  teamPlayers[i].defeats++;
  printPlayers(teamPlayers);
};


// Add every victory and tie points to the total points for each player
function calculatePoints(player) {
  var points = (player.victories * 3) + player.ties;
  return points;
};


// Add mascot
function addMascot(i) {
  teamPlayers[i].mascot = randomMascot();
  printPlayers(teamPlayers);
} 


//Select mascot randomly
function randomMascot() {
  const mascots = [
    "https://www.jing.fm/clipimg/detail/27-278887_free-clip-art-super-mario-bros-personagens.png",
    "https://www.jing.fm/clipimg/detail/279-2794415_super-smash-bros-ultimate-yoshi.png",
    "https://www.jing.fm/clipimg/detail/112-1120614_download-super-mario-bros-wii-luigi.png",
    "https://www.jing.fm/clipimg/detail/27-273002_princess-peach-clipart-confused-new-super-mario-bros.png",
    "https://www.jing.fm/clipimg/detail/106-1060082_super-mario-wiki-new-super-mario-bros-u.png",
    "https://www.jing.fm/clipimg/detail/288-2886434_new-super-mario-bros-wii-yellow-toad.png",
    "https://www.jing.fm/clipimg/detail/54-545512_mario-png-new-super-mario-bros-u-koopa.png",
    "https://www.jing.fm/clipimg/detail/238-2381679_crossing-arms-png-super-smash-bros-brawl-mario.png",
    "https://www.jing.fm/clipimg/detail/290-2908263_super-mario-bros-u-larry-koopa.png",
    "https://www.jing.fm/clipimg/detail/213-2131238_23added-by-kevkev3ou-mario-bros-power-ups.png"
  ];
  let randomNum = Math.floor(Math.random() * mascots.length);
  return mascots[randomNum];
}


// Function to verify the number of players
function hasPlayers(n) {
  return teamPlayers.length >= n;
};