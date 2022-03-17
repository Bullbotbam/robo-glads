let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;

// You can also log multiple values at once like this
console.log(
	playerName,
	'now has',
	playerHealth,
	'health units and level',
	playerAttack,
	'attack strength.'
);

// enemy robot stats
let enemyName = 'Herman Roboto';
let enemyHealth = 50;
let enemyAttack = 12;

// this creates the fight function
let fight = function () {
	// alert to start the round
	window.alert('Welcome to Robo-Glads!');

	// subtract playerAttack from enemyHealth, use that value to update enemyHealth
	enemyHealth = enemyHealth - playerAttack;
	// log results to console when it works
	console.log(
		`Oh no! ${playerName} attacked ${enemyName}.  ${enemyName} now has ${enemyHealth} health units remaining.`
	);
	// subtrack enemyAttack from playerHealth, use that value to update playerHealth
	playerHealth = playerHealth - enemyAttack;
	// log results to the console when it works
	console.log(
		`${enemyName} retaliates against ${playerName}. ${playerName} now has ${playerHealth} health units remaining.`
	);
};
fight();
