const glib = (function (jQ) {
	const rand = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// list of names to be glibified
	const names = {
		"Joe Biden": "Joey B",
		"Joe": "Joey",
		"Kamala Harris": "Kammy H",
		"Kamala": "Kammy",
		"Jen Psaki": "Jenny P",
		"Jen": "Jenny",
		"Biden": "B",
		"Marjorie Taylor Greene": "Maggie T",
		"press secretary": "gossip gal",
		"Press secretary": "gossip queen",
		"Press Secretary": "gossip girl",
		"Donald Trump": "Donnie T",
		Donald: "Donnie",
		Jacob: "Jakey",
		William: "Billy",
		Bill: "Billy",
		Alexander: "Xander",
		Alex: "X-man",
		Benjamin: "Benji",
		James: "Jimmy",
		Daniel: "Danny",
		Samuel: "Sammy",
		Joseph: "Joey",
		Andrew: "Andy",
		David: "Davey", 
		Dave: "Davey",
		Robert: "Robbie",
		Michael: "Mikey",
		Theodore: "Teddy",
		Charles: "Chuck",
		Jay: "Jayden",
		Henry: "Hank",
		John: "Jonny",
		Jonathan: "Jonny",
		Thomas: "Tommy",
		Tom: "Tommy-Tom",
		Nathaniel: "Nate",
		Leonardo: "Leo",
		Sophia: "Fifi",
		Elizabeth: "Betsy",
		Abigail: "Abby",
		Isabella: "Izzy",
		Patricia: "Trish",
		Victoria: "Vicki",
		Katherine: "Kat",
		Allison: "Alli",
		Samantha: "Sami",
		Stephanie: "Steffi",
		Jennifer: "Jenny",
		Alexandria: "Lexi",
		Kimberly: "Kimmie",
		Rebecca: "Becki",
		Margaret: "Peggy",
		Olivia: "Livy",
		Violet: "Vi",
		Amelia: "Millie",
		Mackenzie: "Kenzie",
		Makayla: "Kay-Kay",
		Patrick: "Pat-man",
		Chuck: "Chucky",
		Dick: "Dickie",
		Mitch: "Mitchie",
		Lisa: "Lizzie",
		Mark: "Marky-Mark",
		Kyrsten: "Krissy",
		Dianne: "Deedee",
		Christopher: "Chrissy-poo",
		Chris: "Chrissy-poo",
		Marco: "DJ Marc-y Marc",
		Tammy: "Tamalamadingdong",
		Jerry: "Jer-Bear",
		Susan: "Suz"
	};
	// old:new
	const underFire = {
		attacking: "totally shading",
		attacked: "totes shaded",
		"faces backlash": "is getting absolutely roasted on Twitter",
		extremist: "whackadoo",
		"facing condemnation": "causing, like, sooo much drama",
		bigotry: "dickishness",
		bigot: "hot mess express",
		"drew backlash": "got owned by Twitter",
		"social media": "socials",
		transgender: "totally-going-through-some-stuff",
		"drew fire": "got totes wrecked",
		congressman: "vice principal",
		congresswoman: "vice principal",
		Congressman: "Vice Principal",
		Congresswoman: "Vice Principal",
		President: "Principal",
		Rep: "Vice Principal",
		Republican: "History Teacher",
		Progressive:"Drama Teacher",
		Progressives:"Drama Teachers",
		Democrat: "English Teacher",
		hate: "high-key shade",
		disrespect: "low-key shade",
		politics: "dramaaaa",
		politicians: "teachers",
		"gender identity": "downstairs situation or whatever",
		flashpoint: "hype-beast",
		sad: "like, sooo sad",
		says: "like, totally says",
		bully: "hot-mess-express",
		"women's rights": "girl power",
		legislation: "school rules",
		LGBT: "Cool Drama Class Kids",
		LGBTQ: "Cool Drama Class Kids",
		LGBTQIA: "Cool Drama Class Kids",
		targets: "puts on blast",
		targeted: "put on blast",
		"House floor": "Teacher's lounge"
	};
	const lastNames = {
		'Baldwin': 'B',
		'Barrasso': 'B',
		'Bennet': 'B',
		'Blackburn': 'B',
		'Blumenthal': 'B',
		'Blunt': 'B',
		'Booker': 'B',
		'Boozman': 'B',
		'Braun': 'B',
		'Brown': 'B',
		'Burr': 'B',
		'Cantwell': 'C',
		'Capito': 'C',
		'Cardin': 'C',
		'Carper': 'C',
		'Casey': 'C',
		'Cassidy': 'C',
		'Collins': 'C',
		'Coons': 'C',
		'Cornyn': 'C',
		'Cotton': 'C',
		'Cramer': 'C',
		'Crapo': 'C',
		'Cruz': 'C',
		'Daines': 'D',
		'Duckworth': 'D',
		'Durbin': 'D',
		'Ernst': 'E',
		'Feinstein': 'F',
		'Fischer': 'F',
		'Gillibrand': 'G',
		'Graham': 'G',
		'Grassley': 'G',
		'Hagerty': 'H',
		'Hassan': 'H',
		'Hawley': 'H',
		'Heinrich': 'H',
		'Hickenlooper': 'H',
		'Hirono': 'H',
		'Hoeven': 'H',
		'Hollen': 'H',
		'Hyde-Smith': 'H',
		'Inhofe': 'I',
		'Johnson': 'J',
		'Kaine': 'K',
		'Kennedy': 'K',
		'King': 'K',
		'Klobuchar': 'K',
		'Lankford': 'L',
		'Leahy': 'L',
		'Luján': 'L',
		'Lummis': 'L',
		'Manchin': 'M',
		'Markey': 'M',
		'Marshall': 'M',
		'Masto': 'M',
		'McConnell': 'M',
		'Menendez': 'M',
		'Merkley': 'M',
		'Moran': 'M',
		'Murkowski': 'M',
		'Murphy': 'M',
		'Murray': 'M',
		'Newman': 'N',
		'Ossoff': 'O',
		'Padilla': 'P',
		'Paul': 'P',
		'Peters': 'P',
		'Portman': 'P',
		'Reed': 'R',
		'Risch': 'R',
		'Romney': 'R',
		'Rosen': 'R',
		'Rounds': 'R',
		'Rubio': 'R',
		'Sanders': 'S',
		'Sasse': 'S',
		'Schatz': 'S',
		'Schumer': 'S',
		'Scott': 'S',
		'Shaheen': 'S',
		'Shelby': 'S',
		'Sinema': 'S',
		'Smith': 'S',
		'Stabenow': 'S',
		'Sullivan': 'S',
		'Tester': 'T',
		'Thune': 'T',
		'Tillis': 'T',
		'Toomey': 'T',
		'Tuberville': 'T',
		'Warner': 'W',
		'Warnock': 'W',
		'Warren': 'W',
		'Whitehouse': 'W',
		'Wicker': 'W',
		'Wyden': 'W',
		'Young': 'Y'
	};

	const posessiveObj = (objj) => {
		let newObj = {};
		for (const [key, value] of Object.entries(objj)) {
  		newObj[`${key}'s`] = `${value}'s`;
		}
    return newObj;
	}
	
	const replaceImgs = () => {
		let imgArray = [
			"https://media3.giphy.com/media/2alKkyRFPKRSU/200.gif",
			"https://thumbs.gfycat.com/BossyDiligentElephant-max-1mb.gif",
			"https://media.tenor.com/images/7aab96eedf106784193495f51cb3eab7/tenor.gif",
			"https://media.tenor.com/images/7636d015f249839b27a1495a53cd7b1c/tenor.gif",
			"https://media1.giphy.com/media/8Fx6qGnvI6tfU517R8/giphy.gif"
		];
		$("img").each(function (index) {
			$(this).attr("src", imgArray[rand(0, imgArray.length - 1)]);
		});
	};

	// simple replacement of one value with another in a string
	const replaceName = (oldName, newName, textBody) => {
		let str = textBody;
		//replace distinct instances of old word
		let newStr = str.replace(
			RegExp(
				"\\b" + oldName.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "\\b",
				"g"
			),
			newName
		);
		return newStr;
	};
	
	const replaceNameWithInitial = (name) => {
		name.charAt(0);
	}

	const replaceAllNames = (array, textBody) => {
		let newStr = textBody;
		for (const [key, value] of Object.entries(array)) {
			//replace all the names
			newStr = replaceName(key, value, newStr);
		}
		return newStr;
	};

	//add attention-grabbers to the start of any header element
	const prependHElements = () => {
		const attentionGrab = [
			"OMG you guys",
			"Like, for real",
			"Okay, so you don't even know",
			"It's whatever, and I don't even care, but have you heard",
			"Shut up shut up shut up! So here's the tea",
			"Like whaaaaat?"
		];
		$("h1").text(
			attentionGrab[rand(0, attentionGrab.length - 1)] + ", " + $("h1").text()
		);
		$("h2").text(
			attentionGrab[rand(0, attentionGrab.length - 1)] + ", " + $("h2").text()
		);
		$("h3").text(
			attentionGrab[rand(0, attentionGrab.length - 1)] + ", " + $("h3").text()
		);
		$("h4").text(
			attentionGrab[rand(0, attentionGrab.length - 1)] + ", " + $("h4").text()
		);
		$("h5").text(
			attentionGrab[rand(0, attentionGrab.length - 1)] + ", " + $("h5").text()
		);
	};

	// replace text in elements with object key pairs
	const replaceParagraphs = (elem, objName) => {
		$(elem).each(function (index) {
			$(this).text(replaceAllNames(objName, $(this).text()));
		});
	};
	
	const firstLetterOnly = (arrayName, textBody) => {
		let newStr = textBody;
		for (let i=0; i<arrayName.length; i++) {
			//replace all the names
			newStr = newStr.charAt(0);
		}
		return newStr;
		$(this).text(replaceAllNames(objName, $(this).text()));
			str.charAt(0);
	}

	const glibItAll = () => {
		const elems = ["p", "span", "i", "h1", "h2", "h3", "h4","h5"];
		let posessiveLastNames = posessiveObj(lastNames);
		for (let i=0; i< elems.length;i++){
			replaceParagraphs(elems[i], names);
			replaceParagraphs(elems[i], lastNames);
			replaceParagraphs(elems[i], posessiveLastNames);
			replaceParagraphs(elems[i], underFire);
		}

		// prependHElements();
		replaceImgs();
		document.body.style.background = "hotpink";
	};

	// wait function
	$.wait = function (ms) {
		var defer = $.Deferred();
		setTimeout(function () {
			defer.resolve();
		}, ms);
		return defer;
	};

	// public
	return {
		glibify: () => {
			$.ajax(
				$("body").append(`<span class=
  "pinkDot" style="background-color:hotpink; position:fixed; top:50%;
  left:50%; transform:translate(-50%,-50%); height:1px;
  width:1px; border-radius:50%; z-index:500"></span>`)
			)
				.then(function () {
					//2 ajax call
					return $.ajax(
						$(".pinkDot").animate({ height: "2000px", width: "2000px" })
					);
				})
				.then(function () {
					//3 ajax call
					return $.ajax($(".pinkDot").animate({ opacity: 0 }));
				})
				.then(function () {
					//4 ajax call
					return $.ajax(
						setTimeout(function () {
							$(".pinkDot").remove();
						}, 1000)
					);
				});
			$.wait(500).then(glibItAll);
		}
	};
})(jQuery);
