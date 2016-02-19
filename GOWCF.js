angular.module('GOWCFApp', ['ngAnimate'])
.controller('MainCtrl', function ($scope) {
	/* Default view state */
	$scope.game = {};
	$scope.filters = {};
		
	/* Init model */
	$scope.game.kingdoms = ["", "Adana", "Broken Spire", "Darkstone", "Divinion Fields", "Forest of Thorns", "Ghulvania", "Grosh-Nak", "Karakoth", "Khaziel", "Khetar", "Maugrim Woods", "Mist of Scales", "Pan's Vale", "Pridelands", "Primal", "Stormheim", "Sword's Edge", "Whitehelm", "Wild Plains", "Zaejin", "Zhul'Kari"];
	$scope.game.types = ["", "Beast", "Construct", "Daemon", "Divine", "Dragon", "Dwarf", "Elemental", "Elf", "Fey", "Giant", "Human", "Knight", "Marauder", "Monster", "Undead", "Wildfolk"];
	$scope.game.rarities = ["", "Common", "Rare", "Ultra-Rare", "Epic", "Legendary"];
	$scope.game.colors = ["", "Blue", "Brown", "Green", "Purple", "Red", "Yellow"];
	$scope.game.costs = ["", 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
	$scope.game.traits = ["", "Aflame", "Agile", "Air Brand", "Air Heart", "Air Link", "Air Spirit", "Alert", "Arcane", "Armored", "Avenger", "Beast Bond", "Beast Slayer", "Big", "Blessed", "Construct Bond", "Construct Slayer", "Cunning", "Cursed", "Daemon Bond", "Daemon Slayer", "Daemonic Pact", "Defender", "Divine Bond", "Divine Slayer", "Dragon Slayer", "Dwarf Bond", "Dwarf Slayer", "Elemental Bond", "Elemental Slayer", "Elf Bond", "Elf Slayer", "Empowered", "Fast", "Fey Bond", "Fey Slayer", "Fire Brand", "Fire Heart", "Fire Link", "Fire Spirit", "Fireproof", "Flying", "Frenzy", "Giant Bond", "Giant Slayer", "Greedy", "Huge", "Human Bond", "Human Slayer", "Impervious", "Inscribed", "Jinx", "Knight Bond", "Knight Slayer", "Leader", "Life Drain", "Magic Brand", "Magic Heart", "Magic Link", "Magic Spirit", "Marauder Bond", "Marauder Slayer", "Merchant", "Monster Bond", "Monster Slayer", "Nature Brand", "Nature Heart", "Nature Link", "Nature Spirit", "Necromancy", "Pyromania", "Regeneration", "Reinforced", "Siege", "Stealthy", "Stone Brand", "Stone Heart", "Stone Link", "Stone Spirit", "Stoneskin", "Sturdy", "True Shot", "Undead Bond", "Undead Slayer", "Venomous", "Water Brand", "Water Heart", "Water Link", "Water Spirit", "Wildfold Bond", "Windfolk Slayer"];
	
	
	$scope.filters.name = "";
	$scope.filters.kingdom = "";
	$scope.filters.type = "";
	$scope.filters.rarity = "";
	
	$scope.filters.color1 = "";
	$scope.filters.color2 = "";
	$scope.filters.maxcost = "";
	
	$scope.filters.trait1 = "";
	$scope.filters.trait2 = "";
	$scope.filters.trait3 = "";	
})
