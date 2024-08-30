const races = ["Altmer", "Argonian", "Bosmer", "Breton", "Dunmer", "Imperial", "Khajiit", "Nord", "Orc", "Redguard"];
const blessings = ["Akatosh", "Arkay", "Auriel", "Azura", "Boethia", "Clavicus Vile", "Dibella", "Hermaeus Mora", "Hircine", "Julianos", "Jyggalag", "Kynareth", "Magnus", "Malacath", "Mara", "Mehrunes Dagon", "Mephala", "Meridia", "Molag Bal", "Namira", "Nocturnal", "Peryite", "Sanguine", "Sheogorath", "Stendarr", "Syrabane", "Talos", "Vermina", "Zenithar"];
const birthsigns = ["Apprentice", "Atronach", "Lady", "Lord", "Lover", "Mage", "Ritual", "Serpent", "Shadow", "Steed", "Thief", "Tower", "Warrior"];

function randlist(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function getCheckedValues(className) {
	const checkboxes = document.querySelectorAll(`#${className} input[type="checkbox"]`);
	return Array.from(checkboxes).filter(checkbox => !checkbox.checked).map(checkbox => checkbox.value);
}

function filterSelections(array, exclusions) {
	return array.filter(item => !exclusions.includes(item));
}

function build_char(races, blessings, birthsigns, bRace, bGender, bPreset, bBlessing, bBirthsign) {
	let result = "";

	if (bRace) {
		if (races.length > 0) {
			const race = randlist(races);
			result += "Race: " + race + "<br>";
		} else {
			result += "Race: None<br>";
		}
	}

	if (bGender) {
		const gender = Math.floor(Math.random() * 2) + 1;
		result += "Gender: " + (gender === 1 ? "Male" : "Female") + "<br>";
	}

	if (bPreset) {
		const preset = Math.floor(Math.random() * 10) + 1;
		result += "Preset: " + preset + "<br>";
	}

	if (bBirthsign) {
		if (birthsigns.length > 0) {
			const birthsign = randlist(birthsigns);
			result += "Birthsign: " + birthsign + "<br>";
		} else {
			result += "Birthsign: None<br>";
		}
	}

	if (bBlessing) {
		if (blessings.length > 0) {
			const blessing = randlist(blessings);
			result += "Blessing: " + blessing + "<br>";
		} else {
			result += "Blessing: None<br>";
		}
	}

	return result;
}

document.getElementById('generateBtn').addEventListener('click', function () {
	const excludeRaces = getCheckedValues('excludeRaces');
	const excludeBlessings = getCheckedValues('excludeBlessings');
	const excludeBirthsigns = getCheckedValues('excludeBirthsigns');

	const filteredRaces = filterSelections(races, excludeRaces);
	const filteredBlessings = filterSelections(blessings, excludeBlessings);
	const filteredBirthsigns = filterSelections(birthsigns, excludeBirthsigns);

	const bRace = document.getElementById('toggleRace').checked;
	const bBlessing = document.getElementById('toggleBlessing').checked;
	const bBirthsign = document.getElementById('toggleBirthsign').checked;
	const bGender = document.getElementById('toggleGender').checked;
	const bPreset = document.getElementById('togglePreset').checked;

	const result = build_char(filteredRaces, filteredBlessings, filteredBirthsigns, bRace, bGender, bPreset, bBlessing, bBirthsign);
	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = result;
	resultDiv.style.display = 'block';
});