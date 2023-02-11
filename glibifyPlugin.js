const glib = (function () {
	const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
	const names = {
		"Joe Biden": "Joey B",
		Joe: "Joey",
		"Kamala Harris": "Kammy H",
		Kamala: "Kammy",
		"Jen Psaki": "Jenny P",
		Jen: "Jenny",
		Biden: "B",
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
		Progressive: "Drama Teacher",
		Progressives: "Drama Teachers",
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
		"House floor": "Teacher's lounge",
		"White House": "Principal's Office",
		"The Science": "The Nerd Brigade"
	};
	const lastNames = {
		Baldwin: "B",
		Barrasso: "B",
		Bennet: "B",
		Blackburn: "B",
		Blumenthal: "B",
		Blunt: "B",
		Booker: "B",
		Boozman: "B",
		Braun: "B",
		Brown: "B",
		Burr: "B",
		Cantwell: "C",
		Capito: "C",
		Cardin: "C",
		Carper: "C",
		Casey: "C",
		Cassidy: "C",
		Collins: "C",
		Coons: "C",
		Cornyn: "C",
		Cotton: "C",
		Cramer: "C",
		Crapo: "C",
		Cruz: "C",
		Daines: "D",
		Duckworth: "D",
		Durbin: "D",
		Ernst: "E",
		Feinstein: "F",
		Fischer: "F",
		Gillibrand: "G",
		Graham: "G",
		Grassley: "G",
		Hagerty: "H",
		Hassan: "H",
		Hawley: "H",
		Heinrich: "H",
		Hickenlooper: "H",
		Hirono: "H",
		Hoeven: "H",
		Hollen: "H",
		"Hyde-Smith": "H",
		Inhofe: "I",
		Johnson: "J",
		Kaine: "K",
		Kennedy: "K",
		King: "K",
		Klobuchar: "K",
		Lankford: "L",
		Leahy: "L",
		Luján: "L",
		Lummis: "L",
		Manchin: "M",
		Markey: "M",
		Marshall: "M",
		Masto: "M",
		McConnell: "M",
		Menendez: "M",
		Merkley: "M",
		Moran: "M",
		Murkowski: "M",
		Murphy: "M",
		Murray: "M",
		Newman: "N",
		Ossoff: "O",
		Padilla: "P",
		Paul: "P",
		Peters: "P",
		Portman: "P",
		Reed: "R",
		Risch: "R",
		Romney: "R",
		Rosen: "R",
		Rounds: "R",
		Rubio: "R",
		Sanders: "S",
		Sasse: "S",
		Schatz: "S",
		Schumer: "S",
		Scott: "S",
		Shaheen: "S",
		Shelby: "S",
		Sinema: "S",
		Smith: "S",
		Stabenow: "S",
		Sullivan: "S",
		Tester: "T",
		Thune: "T",
		Tillis: "T",
		Toomey: "T",
		Tuberville: "T",
		Warner: "W",
		Warnock: "W",
		Warren: "W",
		Whitehouse: "W",
		Wicker: "W",
		Wyden: "W",
		Young: "Y"
	};

	const posessiveObj = (obj) => {
		const newObj = {};
		for (const [key, value] of Object.entries(obj)) {
			newObj[`${key}'s`] = `${value}'s`;
		}
		return newObj;
	};

	const replaceImgs = () => {
		const imgArray = [
			"https://media3.giphy.com/media/2alKkyRFPKRSU/200.gif",
			"https://thumbs.gfycat.com/BossyDiligentElephant-max-1mb.gif",
			"https://media.tenor.com/images/7aab96eedf106784193495f51cb3eab7/tenor.gif",
			"https://media.tenor.com/images/7636d015f249839b27a1495a53cd7b1c/tenor.gif",
			"https://media1.giphy.com/media/8Fx6qGnvI6tfU517R8/giphy.gif"
		];
		const imgs = document.querySelectorAll("img");
		imgs.forEach((img) => (img.src = imgArray[rand(0, imgArray.length - 1)]));
	};

	const replaceName = (oldName, newName, textBody) => {
		const pattern = new RegExp(
			`\\b${oldName.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}\\b`,
			"g"
		);
		return textBody.replace(pattern, newName);
	};

	const replaceNameWithInitial = (name) => name.charAt(0);

	const replaceAllNames = (array, textBody) => {
		let newStr = textBody;
		for (const [key, value] of Object.entries(array)) {
			newStr = replaceName(key, value, newStr);
		}
		return newStr;
	};

	const prependHElements = () => {
		const attentionGrab = [
			"OMG you guys",
			"Like, for real",
			"Okay, so you don't even know",
			"It's whatever, and I don't even care, but have you heard",
			"Shut up shut up shut up! So here's the tea",
			"Like whaaaaat?"
		];
		const headers = document.querySelectorAll("h1, h2, h3, h4, h5");
		headers.forEach((header) => {
			header.textContent = `${attentionGrab[rand(0, attentionGrab.length - 1)]}, ${
				header.textContent
			}`;
		});
	};

	const replaceParagraphs = (elem, obj) => {
		const elements = document.querySelectorAll(elem);
		elements.forEach((el) => (el.innerText = replaceAllNames(obj, el.innerText)));
	};

	const glibify = () => {
		const bloom = document.createElement('div');
		bloom.style.height = "100vh";
		bloom.style.width = "100vw";
		bloom.style.position = "fixed";
		bloom.style.transform = "translate(-50%, -50%)";
		bloom.style.top = "50%";
		bloom.style.left = "50%";
		bloom.style.zIndex = "999999";
		bloom.style.userSelect = "none";
		bloom.style.pointerEvents = "none";
		bloom.id = 'bloom';
		bloom.style.backgroundSize = "100% 100%";
		bloom.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Ccircle r='0' cx='50' cy='50' fill='hotpink'%3E%3Canimate id='blow' attributeName='r' values='0;100' begin='0s' dur='0.5s' repeatCount='none' fill='freeze' /%3E%3Canimate attributeName='opacity' values='1;0' begin='blow.end' dur='0.25s' repeatCount='none' fill='freeze' /%3E%3C/circle%3E%3C/svg%3E")`;
		document.body.appendChild(bloom);
		setTimeout(()=> {
			document.querySelector('#bloom').parentNode.removeChild(document.querySelector('#bloom'));
		}, 750);
		const elems = ["p", "span", "i", "h1", "h2", "h3", "h4", "h5"];
		const posessiveLastNames = posessiveObj(lastNames);

		elems.forEach((elem) => {
			replaceParagraphs(elem, names);
			replaceParagraphs(elem, lastNames);
			replaceParagraphs(elem, posessiveLastNames);
			replaceParagraphs(elem, underFire);
		});
		// you can use the replaceImgs() function instead of the block of code that replaces the image elements
		replaceImgs();
		prependHElements();
	};

	const createGlibButton = () => {
		const glibBtn = document.createElement('button');
		glibBtn.style.height = "100px";
		glibBtn.style.width = "120px";
		glibBtn.style.position = "fixed";
		glibBtn.style.background = "radial-gradient(pink, hotpink)";
		glibBtn.style.transform = "translate(-50%, -50%)";
		glibBtn.style.top = "50%";
		glibBtn.style.left = "50%";
		glibBtn.style.zIndex = "999999";
		glibBtn.style.fontSize = "1.5em";
		glibBtn.style.fontWeight = "bold";
		glibBtn.style.borderRadius = "999px";
		glibBtn.style.boxShadow = "0px 0px 20px #000";
		glibBtn.id = 'glibifyBtn';
		const glibBtnText = document.createElement('span');
		glibBtnText.innerText = "Glibify!"
		glibBtnText.style.backgroundSize = "cover";
		glibBtnText.style.color = "#fff";
		glibBtnText.style.webkitTextFillColor = 'transparent';
		glibBtnText.style.backgroundClip = 'text';
		glibBtnText.style.WebkitBackgroundClip = 'text';
		glibBtnText.style.MozBackgroundClip = 'text';
		glibBtnText.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3ClinearGradient id='gradient'%3E %3Cstop offset='10%25' stop-color='red' /%3E %3Cstop offset='20%25' stop-color='orange' /%3E %3Cstop offset='50%25' stop-color='green' /%3E %3Cstop offset='60%25' stop-color='blue' /%3E %3Cstop offset='75%25' stop-color='indigo' /%3E %3Cstop offset='90%25' stop-color='violet' /%3E %3Cstop offset='100%25' stop-color='red' /%3E %3C/linearGradient%3E%3Crect height='100' width='101' x='0' y='0' fill='url(%23gradient)'%3E%3Canimate id='blow' attributeName='x' values='-100;100' begin='0s' dur='5s' repeatCount='indefinite' /%3E%3C/rect%3E%3Crect height='100' width='101' x='-100' y='0' fill='url(%23gradient)'%3E%3Canimate id='blow' attributeName='x' values='-100;100' begin='-2.5s' dur='5s' repeatCount='indefinite' /%3E%3C/rect%3E%3C/svg%3E")`;
		glibBtn.appendChild(glibBtnText);
		glibBtn.addEventListener('click', () => {
			glibify();
	document.querySelector('#glibifyBtn').parentNode.removeChild(document.querySelector('#glibifyBtn'));
		});
		document.body.appendChild(glibBtn);
		
	};
	return {
		glibify: glibify,
		createGlibButton: createGlibButton
	};
})();

glib.createGlibButton();
