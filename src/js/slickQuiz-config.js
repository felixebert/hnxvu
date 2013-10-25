// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"results": "",
		"level1": "Brücken-Experte",
		"level2": "Brücken-Versteher",
		"level3": "Brücken-Amateur",
		"level4": "Brücken-Neuling",
		"level5": "Brücken-Verweigerer"
	},
	"labels": {
		"deutschhof": "Überdachte Brücke im Deutschhof",
		"europaplatz": "Brücke am Europaplatz",
		"horkheim": "Schleuse bei Horkheim",
		"klingenberg": "Brücke bei Klingenberg",
		"neckartalstrasse": "Neckartalstraßenbrücke",
		"pfuehlpark": "Brücke im Pfühlpark",
		"schemmelsberg": "Schemmelsbergtunnel",
		"trappensee": "Tunnel am Trappensee",
		"wollhaus": "Brücke am Wollhaus",
	},
	"questions": [{
		"q": "klingenberg",
		"a": [{
			"option": "klingenberg",
		}, {
			"option": "deutschhof",
		}, {
			"option": "wollhaus",
		}],
		"correct": "<p><strong>Richtig, gut erkannt!</strong> So klingt es unter der Brücke bei Klingenberg.</p>",
		"incorrect": "<p><strong>Leider falsch.</strong> So klingt es unter der Brücke bei Klingenberg.</p>"
	}, {
		"q": "horkheim",
		"a": [{
			"option": "neckartalstrasse",
		}, {
			"option": "trappensee",
		}, {
			"option": "horkheim",
		}],
		"correct": "<p><strong>Richtig, gut erkannt!</strong></p>",
		"incorrect": "<p><strong>Leider falsch.</strong></p>"
	}, {
		"q": "deutschhof",
		"a": [{
			"option": "wollhaus",
		}, {
			"option": "deutschhof",
		}, {
			"option": "pfuehlpark",
		}],
		"correct": "<p><strong>Richtig, gut erkannt!</strong></p>",
		"incorrect": "<p><strong>Leider falsch.</strong></p>"
	}, {
		"q": "wollhaus",
		"a": [{
			"option": "europaplatz",
		}, {
			"option": "wollhaus",
		}, {
			"option": "schemmelsberg",
		}],
		"correct": "<p><strong>Richtig, gut erkannt!</strong></p>",
		"incorrect": "<p><strong>Leider falsch.</strong></p>"
	}, {
		"q": "neckartalstrasse",
		"a": [{
			"option": "pfuehlpark",
		}, {
			"option": "trappensee",
		}, {
			"option": "neckartalstrasse",
		}],
		"correct": "<p><strong>Richtig, gut erkannt!</strong></p>",
		"incorrect": "<p><strong>Leider falsch.</strong></p>"
	}, {
		"q": "trappensee",
		"a": [{
			"option": "europaplatz",
		}, {
			"option": "trappensee",
		}, {
			"option": "schemmelsberg",
		}],
		"correct": "<p><strong>Richtig, gut erkannt!</strong></p>",
		"incorrect": "<p><strong>Leider falsch.</strong></p>"
	}, {
		"q": "pfuehlpark",
		"a": [{
			"option": "deutschhof",
		}, {
			"option": "klingenberg",
		}, {
			"option": "pfuehlpark",
		}],
		"correct": "<p><strong>Richtig, gut erkannt!</strong></p>",
		"incorrect": "<p><strong>Leider falsch.</strong></p>"
	}, {
		"q": "schemmelsberg",
		"a": [{
			"option": "schemmelsberg",
		}, {
			"option": "horkheim",
		}, {
			"option": "europaplatz",
		}],
		"correct": "<p><strong>Richtig, gut erkannt!</strong></p>",
		"incorrect": "<p><strong>Leider falsch.</strong></p>"
	}, {
		"q": "europaplatz",
		"a": [{
			"option": "neckartalstrasse",
		}, {
			"option": "europaplatz",
		}, {
			"option": "pfuehlpark",
		}],
		"correct": "<p><strong>Richtig, gut erkannt!</strong></p>",
		"incorrect": "<p><strong>Leider falsch.</strong></p>"
	}]
};
