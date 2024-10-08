const races = {
    Altmer: { birthsign: ["Serpent", "Shadow", "Thief", "Tower"], blessing: ["Boethia", "Hircine", "Jyggalag", "Kynareth", "Malacath", "Mephala", "Molag Bal", "Nocturnal", "Sanguine"] },
    Argonian: { birthsign: [], blessing: ["Kynareth"] },
    Bosmer: { birthsign: ["Lord", "Tower"], blessing: ["Akatosh", "Arkay", "Auriel", "Boethia", "Hermaeus Mora", "Hircine", "Julianos", "Jyggalag", "Magnus", "Molag Bal", "Sanguine", "Sheogorath", "Stendarr", "Talos", "Vaermina"] },
    Breton: { birthsign: ["Serpent", "Shadow", "Thief"], blessing: ["Hircine", "Jyggalag", "Kynareth", "Malacath", "Mephala", "Molag Bal", "Nocturnal", "Sanguine"] },
    Dunmer: { birthsign: [], blessing: ["Clavicus Vile", "Jyggalag", "Kynareth", "Sanguine"] },
    Imperial: { birthsign: [], blessing: ["Sanguine"] },
    Khajiit: { birthsign: ["Ritual"], blessing: ["Clavicus Vile", "Kynareth"] },
    Nord: { birthsign: [], blessing: ["Kynareth", "Sanguine"] },
    Orc: { birthsign: ["Ritual", "Shadow"], blessing: ["Akatosh", "Boethia", "Clavicus Vile", "Hermaeus Mora", "Kynareth", "Magnus", "Mephala"] },
    Redguard: { birthsign: ["Ritual"], blessing: ["Akatosh", "Clavicus Vile", "Hermaeus Mora", "Kynareth", "Magnus", "Sanguine"] },
	None: { birthsign: ["Apprentice", "Atronach", "Lady", "Lord", "Lover", "Mage", "Ritual", "Serpent", "Shadow", "Steed", "Thief", "Tower", "Warrior"], blessing: ["Akatosh", "Arkay", "Auriel", "Azura", "Boethia", "Clavicus Vile", "Dibella", "Hermaeus Mora", "Hircine", "Julianos", "Jyggalag", "Kynareth", "Magnus", "Malacath", "Mara", "Mehrunes Dagon", "Mephala", "Meridia", "Molag Bal", "Namira", "Nocturnal", "Peryite", "Sanguine", "Sheogorath", "Stendarr", "Syrabane", "Talos", "Vaermina", "Zenithar"] }
};

const birthsigns = {
    Apprentice: { race: [], blessing: ["Hircine", "Jyggalag", "Vaermina"] },
    Atronach: { race: [], blessing: ["Boethia", "Julianos", "Jyggalag", "Nocturnal", "Vaermina"] },
    Lady: { race: ["Redguard"], blessing: [] },
    Lord: { race: ["Bosmer"], blessing: ["Kynareth", "Magnus", "Namira"] },
    Lover: { race: [], blessing: [] },
    Mage: { race: [], blessing: ["Jyggalag", "Vaermina"] },
    Ritual: { race: ["Khajiit", "Orc", "Redguard"], blessing: ["Boethia", "Hircine", "Jyggalag", "Stendarr"] },
    Serpent: { race: ["Altmer", "Breton"], blessing: ["Akatosh", "Boethia", "Hircine"] },
    Shadow: { race: ["Altmer", "Breton", "Orc"], blessing: ["Akatosh", "Arkay", "Clavicus Vile", "Hermaeus Mora", "Hircine", "Julianos", "Jyggalag", "Magnus", "Mara", "Mehrunes Dagon", "Meridia", "Peryite", "Sanguine", "Vaermina"] },
    Steed: { race: [], blessing: [] },
    Thief: { race: ["Altmer", "Breton"], blessing: ["Julianos", "Magnus", "Sanguine"] },
    Tower: { race: ["Altmer", "Bosmer"], blessing: ["Boethia", "Hircine", "Julianos", "Kynareth", "Magnus", "Namira", "Nocturnal"] },
    Warrior: { race: [], blessing: ["Magnus", "Mephala", "Vaermina"] },
	None: { race: ["Altmer", "Argonian", "Bosmer", "Breton", "Dunmer", "Imperial", "Khajiit", "Nord", "Orc", "Redguard"], blessing: ["Akatosh", "Arkay", "Auriel", "Azura", "Boethia", "Clavicus Vile", "Dibella", "Hermaeus Mora", "Hircine", "Julianos", "Jyggalag", "Kynareth", "Magnus", "Malacath", "Mara", "Mehrunes Dagon", "Mephala", "Meridia", "Molag Bal", "Namira", "Nocturnal", "Peryite", "Sanguine", "Sheogorath", "Stendarr", "Syrabane", "Talos", "Vaermina", "Zenithar"]}
};

const blessings = {
    Akatosh: { race: ["Bosmer", "Orc", "Redguard"], birthsign: ["Serpent", "Shadow"] },
    Arkay: { race: [], birthsign: ["Shadow"] },
    Auriel: { race: ["Bosmer"], birthsign: ["Shadow"] },
    Azura: { race: [], birthsign: [] },
    Boethia: { race: ["Altmer", "Bosmer", "Breton", "Orc", "Redguard"], birthsign: ["Atronach", "Ritual", "Tower"] },
    "Clavicus Vile": { race: ["Khajiit", "Orc", "Redguard"], birthsign: ["Shadow"] },
    Dibella: { race: [], birthsign: [] },
    "Hermaeus Mora": { race: ["Bosmer", "Orc", "Redguard"], birthsign: ["Shadow"] },
    Hircine: { race: ["Altmer", "Bosmer", "Breton"], birthsign: ["Ritual", "Serpent", "Shadow", "Tower"] },
    Julianos: { race: [], birthsign: ["Atronach", "Shadow", "Tower"] },
    Jyggalag: { race: ["Altmer", "Bosmer", "Breton", "Dunmer"], birthsign: ["Apprentice", "Atronach", "Mage", "Ritual", "Shadow"] },
    Kynareth: { race: ["Altmer", "Argonian", "Breton", "Dunmer", "Imperial", "Khajiit", "Nord", "Orc", "Redguard"], birthsign: ["Lord", "Tower"] },
    Magnus: { race: ["Bosmer", "Orc", "Redguard"], birthsign: ["Lord", "Shadow", "Thief", "Tower", "Warrior"] },
    Malacath: { race: ["Altmer", "Breton"], birthsign: [] },
    Mara: { race: [], birthsign: ["Shadow"] },
    "Mehrunes Dagon": { race: [], birthsign: ["Shadow"] },
    Mephala: { race: ["Altmer", "Breton", "Orc"], birthsign: ["Warrior"] },
    Meridia: { race: [], birthsign: ["Shadow"] },
    "Molag Bal": { race: ["Altmer", "Bosmer", "Breton"], birthsign: [] },
    Namira: { race: [], birthsign: ["Lord", "Tower"] },
    Nocturnal: { race: ["Altmer", "Breton"], birthsign: ["Atronach", "Tower"] },
    Peryite: { race: [], birthsign: ["Shadow"] },
    Sanguine: { race: ["Altmer", "Bosmer", "Breton", "Dunmer", "Imperial", "Nord", "Redguard"], birthsign: ["Shadow"] },
    Sheogorath: { race: ["Bosmer"], birthsign: [] },
    Stendarr: { race: ["Bosmer"], birthsign: ["Ritual"] },
    Syrabane: { race: [], birthsign: [] },
    Talos: { race: ["Bosmer"], birthsign: ["Atronach", "Shadow", "Tower"] },
    Vaermina: { race: ["Bosmer"], birthsign: ["Apprentice", "Atronach", "Mage", "Shadow", "Warrior"] },
    Zenithar: { race: ["Bosmer"], birthsign: ["Shadow"] },
	None: { race: ["Altmer", "Argonian", "Bosmer", "Breton", "Dunmer", "Imperial", "Khajiit", "Nord", "Orc", "Redguard"], birthsign: ["Apprentice", "Atronach", "Lady", "Lord", "Lover", "Mage", "Ritual", "Serpent", "Shadow", "Steed", "Thief", "Tower", "Warrior"]}
};

function getCheckedValues(className) {
	const checkboxes = document.querySelectorAll(`#${className} input[type="checkbox"]`);
	return Array.from(checkboxes).filter(checkbox => !checkbox.checked).map(checkbox => checkbox.value);
}

function build_char(blacklistRaces, blacklistBlessings, blacklistBirthsigns, bGender, bPreset) {
	let result = "";
	let race = "None";
	let birthsign = "None";
	let blessing = "None";
	let availableBirthsigns = [];
	let availableBlessings = [];
	let availableRaces = [];

	availableRaces = Object.keys(races).filter(r => !blacklistRaces.includes(r) && r !== "None");
	if(availableRaces.length > 0) {
		race = availableRaces[Math.floor(Math.random() * availableRaces.length)];
	}
	if(race === "None") {
		result += "You need to have at least 1 race checked!";
		return result;
	}
	
	result += "Race: " + race + "<br>";
	
	if (bGender) {
		const gender = Math.floor(Math.random() * 2) + 1;
		result += "Gender: " + (gender === 1 ? "Male" : "Female") + "<br>";
	}

	if (bPreset) {
		const preset = Math.floor(Math.random() * 10) + 1;
		result += "Preset: " + preset + "<br>";
	}

	availableBirthsigns = Object.keys(birthsigns).filter(bs => !races[race].birthsign.includes(bs) && !blacklistBirthsigns.includes(bs) && bs !== "None");
	if(availableBirthsigns.length > 0) {
		birthsign = availableBirthsigns[Math.floor(Math.random() * availableBirthsigns.length)];
	}
	
	result += "Birthsign: " + birthsign + "<br>";
	
	if(birthsign !== "None"){	
		availableBlessings = Object.keys(blessings).filter(b => !races[race].blessing.includes(b) && !birthsigns[birthsign].blessing.includes(b) && !blacklistBlessings.includes(b) && b !== "None");
	}
	else {
		availableBlessings = Object.keys(blessings).filter(b => !races[race].blessing.includes(b) && !blacklistBlessings.includes(b) && b !== "None");
	}
	if(availableBlessings.length > 0) {
		blessing = availableBlessings[Math.floor(Math.random() * availableBlessings.length)];
	}

	result += "Blessing: " + blessing + "<br>";

	return result;
}

document.getElementById('generateBtn').addEventListener('click', function () {
	const blacklistRaces = getCheckedValues('excludeRaces');
	const blacklistBlessings = getCheckedValues('excludeBlessings');
	const blacklistBirthsigns = getCheckedValues('excludeBirthsigns');

	const bGender = document.getElementById('toggleGender').checked;
	const bPreset = document.getElementById('togglePreset').checked;

	const result = build_char(blacklistRaces, blacklistBlessings, blacklistBirthsigns, bGender, bPreset);
	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = result;
	resultDiv.style.display = 'block';
});