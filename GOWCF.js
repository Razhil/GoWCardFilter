angular.module('GOWCFApp', ['ngAnimate'])
.controller('MainCtrl', function ($scope, $http) {
	/* Default view state */
	$scope.game = {};
	$scope.filters = {};
		
	/* Init model */
	$scope.game.kingdoms = ["Adana", "Broken Spire", "Darkstone", "Divinion Fields", "Forest of Thorns", "Ghulvania", "Grosh-Nak", "Karakoth", "Khaziel", "Khetar", "Maugrim Woods", "Mist of Scales", "Pan's Vale", "Pridelands", "Primal", "Stormheim", "Sword's Edge", "Whitehelm", "Wild Plains", "Zaejin", "Zhul'Kari"];
	$scope.game.types = ["Beast", "Construct", "Daemon", "Divine", "Dragon", "Dwarf", "Elemental", "Elf", "Fey", "Giant", "Human", "Knight", "Marauder", "Monster", "Undead", "Wildfolk"];
	$scope.game.rarities = ["Common", "Rare", "Ultra-Rare", "Epic", "Legendary"];
	$scope.game.colors = ["Blue", "Brown", "Green", "Purple", "Red", "Yellow"];
	$scope.game.costs = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
	$scope.game.traits = ["Aflame", "Agile", "Air Brand", "Air Heart", "Air Link", "Air Spirit", "Alert", "Arcane", "Armored", "Avenger", "Beast Bond", "Beast Slayer", "Big", "Blessed", "Construct Bond", "Construct Slayer", "Cunning", "Cursed", "Daemon Bond", "Daemon Slayer", "Daemonic Pact", "Defender", "Divine Bond", "Divine Slayer", "Dragon Slayer", "Dwarf Bond", "Dwarf Slayer", "Elemental Bond", "Elemental Slayer", "Elf Bond", "Elf Slayer", "Empowered", "Fast", "Fey Bond", "Fey Slayer", "Fire Brand", "Fire Heart", "Fire Link", "Fire Spirit", "Fireproof", "Flying", "Frenzy", "Giant Bond", "Giant Slayer", "Greedy", "Huge", "Human Bond", "Human Slayer", "Impervious", "Inscribed", "Jinx", "Knight Bond", "Knight Slayer", "Leader", "Life Drain", "Magic Brand", "Magic Heart", "Magic Link", "Magic Spirit", "Marauder Bond", "Marauder Slayer", "Merchant", "Monster Bond", "Monster Slayer", "Nature Brand", "Nature Heart", "Nature Link", "Nature Spirit", "Necromancy", "Pyromania", "Regeneration", "Reinforced", "Siege", "Stealthy", "Stone Brand", "Stone Heart", "Stone Link", "Stone Spirit", "Stoneskin", "Sturdy", "True Shot", "Undead Bond", "Undead Slayer", "Venomous", "Water Brand", "Water Heart", "Water Link", "Water Spirit", "Wildfold Bond", "Windfolk Slayer"];
	
	$scope.search = function() {
		var query = JSON.stringify($scope.filters, excludeRule);

		var costQuery = "";
		if ($scope.filters.cost) {
			costQuery = "cost:{$lte:" + $scope.filters.cost + "}";
		}
		
		var colorQuery = "";
		if ($scope.filters.color1 && $scope.filters.color2) {
			colorQuery = "$or:[{'color1':'" + $scope.filters.color1 + "','color2':'" + $scope.filters.color2 + "'},{'color1':'" + $scope.filters.color2 + "','color2':'" + $scope.filters.color1 + "'}]";
		} else if ($scope.filters.color1) {
			colorQuery = "$or:[{'color1':'" + $scope.filters.color1 + "'},{'color2':'" + $scope.filters.color1 + "'}]";
		} else if ($scope.filters.color2) {
			colorQuery = "$or:[{'color1':'" + $scope.filters.color2 + "'},{'color2':'" + $scope.filters.color2 + "'}]";
		}
		
		var traitQuery = "";
		if ($scope.filters.trait1 && $scope.filters.trait2 && $scope.filters.trait3) {
			traitQuery = "$or:[{'trait1':'" + $scope.filters.trait1 + "','trait2':'" + $scope.filters.trait2 + "','trait3':'" + $scope.filters.trait3 + "'},{'trait1':'" + $scope.filters.trait1 + "','trait2':'" + $scope.filters.trait3 + "','trait3':'" + $scope.filters.trait2 + "'},{'trait1':'" + $scope.filters.trait2 + "','trait2':'" + $scope.filters.trait1 + "','trait3':'" + $scope.filters.trait3 + "'},{'trait1':'" + $scope.filters.trait2 + "','trait2':'" + $scope.filters.trait3 + "','trait3':'" + $scope.filters.trait1 + "'},{'trait1':'" + $scope.filters.trait3 + "','trait2':'" + $scope.filters.trait2 + "','trait3':'" + $scope.filters.trait1 + "'},{'trait1':'" + $scope.filters.trait3 + "','trait2':'" + $scope.filters.trait1 + "','trait3':'" + $scope.filters.trait2 + "'}]";
		} else if ($scope.filters.trait1 && $scope.filters.trait2) {
			traitQuery = "$or:[{'trait1':'" + $scope.filters.trait1 + "','trait2':'" + $scope.filters.trait2 + "'},{'trait1':'" + $scope.filters.trait1 + "','trait3':'" + $scope.filters.trait2 + "'},{'trait1':'" + $scope.filters.trait2 + "','trait2':'" + $scope.filters.trait1 + "'},{'trait1':'" + $scope.filters.trait2 + "','trait3':'" + $scope.filters.trait1 + "'},{'trait2':'" + $scope.filters.trait2 + "','trait3':'" + $scope.filters.trait1 + "'},{'trait2':'" + $scope.filters.trait1 + "','trait3':'" + $scope.filters.trait2 + "'}]";
		} else if ($scope.filters.trait1 && $scope.filters.trait3) {
			traitQuery = "$or:[{'trait1':'" + $scope.filters.trait1 + "','trait2':'" + $scope.filters.trait3 + "'},{'trait1':'" + $scope.filters.trait1 + "','trait3':'" + $scope.filters.trait3 + "'},{'trait1':'" + $scope.filters.trait3 + "','trait2':'" + $scope.filters.trait1 + "'},{'trait1':'" + $scope.filters.trait3 + "','trait3':'" + $scope.filters.trait1 + "'},{'trait2':'" + $scope.filters.trait3 + "','trait3':'" + $scope.filters.trait1 + "'},{'trait2':'" + $scope.filters.trait1 + "','trait3':'" + $scope.filters.trait3 + "'}]";
		} else if ($scope.filters.trait2 && $scope.filters.trait3) {
			traitQuery = "$or:[{'trait1':'" + $scope.filters.trait3 + "','trait2':'" + $scope.filters.trait2 + "'},{'trait1':'" + $scope.filters.trait3 + "','trait3':'" + $scope.filters.trait2 + "'},{'trait1':'" + $scope.filters.trait2 + "','trait2':'" + $scope.filters.trait3 + "'},{'trait1':'" + $scope.filters.trait2 + "','trait3':'" + $scope.filters.trait3 + "'},{'trait2':'" + $scope.filters.trait2 + "','trait3':'" + $scope.filters.trait3 + "'},{'trait2':'" + $scope.filters.trait3 + "','trait3':'" + $scope.filters.trait2 + "'}]";
		} else if ($scope.filters.trait1) {
			traitQuery = "$or:[{'trait1':'" + $scope.filters.trait1 + "'},{'trait2':'" + $scope.filters.trait1 + "'},{'trait3':'" + $scope.filters.trait1 + "'}]";
		} else if ($scope.filters.trait2) {
			traitQuery = "$or:[{'trait1':'" + $scope.filters.trait2 + "'},{'trait2':'" + $scope.filters.trait2 + "'},{'trait3':'" + $scope.filters.trait2 + "'}]";
		} else if ($scope.filters.trait3) {
			traitQuery = "$or:[{'trait1':'" + $scope.filters.trait3 + "'},{'trait2':'" + $scope.filters.trait3 + "'},{'trait3':'" + $scope.filters.trait3 + "'}]";
		}
		
		var customQuery = "";
		if (colorQuery != "" && traitQuery != "") {
			customQuery = "$and:[{" + colorQuery + "},{" + traitQuery + "}]";
		} else {
			customQuery = colorQuery + traitQuery;
		}
		
		loadCards("{" + query.slice(1, -1) + (query != "{}" ? "," : "") + costQuery + (costQuery != "" ? "," : "") + customQuery + "}");
	}
	
	var excludeRule = function(key, value) {
		if (value === null) {
			return undefined;
		}
		if (key === "color1" || key === "color2") {
			return undefined;
		}
		if (key === "cost") {
			return undefined;
		}
		if (key === "trait1" || key === "trait2" || key === "trait3") {
			return undefined;
		}
		
		return value;
	}
	
	var loadCards = function(query) {
		var url = "https://api.mongolab.com/api/1/databases/gowcf_db/collections/Cards?apiKey=aEDoJR0l_r7yjOT9w9tJ3WpgN0fi4jJ_";
		return $http.get(url + "&s={'name':1}&q=" + query).then(
			function(resp) {
				$scope.cards = [];
				if (resp.data.length > 0) {
					resp.data.forEach(function(entry) {
						var card = {};
						card.name = entry.name;
						card.kingdom = entry.kingdom;
						card.type = entry.type;
						card.rarity = entry.rarity;
						card.color1 = entry.color1;
						card.color2 = entry.color2;
						card.cost = parseInt(entry.cost);
						card.trait1 = entry.trait1;
						card.trait2 = entry.trait2;
						card.trait3 = entry.trait3;
						card.atk20 = parseInt(entry.atk20);
						card.arm20 = parseInt(entry.arm20);
						card.hp20 = parseInt(entry.hp20);
						
						$scope.cards.push(card);
					});
					return "OK";
				}
			},
			function(resp) {
				alert("Failed to load data : " + resp.message);
				return [];
			}
		);
	}
})
