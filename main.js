/* -------------------------
            PIN ICONS
----------------------------*/
function pin(colorClass) {
	return L.divIcon({
		className: `custom-pin-icon ${colorClass}`,
		iconSize: [30, 42],
		iconAnchor: [15, 42],
		popupAnchor: [0, 10],
	});
}

const ICON_BLUE = pin("blue");
const ICON_LIGHT = pin("light");
const ICON_ORANGE = pin("orange");
const ICON_RED = pin("red");

function chooseIcon(availability) {
	switch (availability) {
		case "Plenty":
			return ICON_BLUE;
		case "Moderate":
			return ICON_LIGHT;
		case "Scarce":
			return ICON_ORANGE;
		case "None":
			return ICON_RED;
		default:
			return ICON_LIGHT; // Default icon in case of error
	}
}
/* -------------------------
            LANGUAGE LOGIC 
        ----------------------------*/
const translations = {
	en: {
		headerTitle: "Wells in Syria",
		searchPlaceholder: "Find village...",
		addCurrentLocationBtn: "📍 Add at Current Location",
		addTapMapBtn: "👆 Add by Tapping Map",
		addWellBtn: "Add Well",
		btnCancel: "✕ Cancel",
		reportUpdateBtn: "Report Update",
		modalUpdateReport: "Update Report",
		modalNewWell: "New Well",
		modalDesc:
			"Please share information about the water well in {villageName}. <br>You can move the pin if it is in the wrong location.",
		modalCondition: "Condition",
		conditionFunctional: "✔ Functional",
		conditionNeedsRepair: "🔧 Needs repair",
		conditionCompletelyBroken: "❌ Completely broken",
		modalAvailability: "Water Availability",
		availabilityPlenty: "💧💧💧 Plenty",
		availabilityModerate: "💧💧 Moderate",
		availabilityScarce: "💧 Scarce",
		availabilityNone: "🚱 None",
		modalWaterQuality: "Water Quality (Select all that apply)",
		qualityClear: "✨ Clear",
		qualityMuddy: "🟫 Muddy",
		qualitySmelly: "👃 Smelly",
		qualityContaminated: "🤢 Contaminated",
		modalWellType: "Well Type (optional)",
		typeHandpump: "🖐️ Hand pump",
		typeBorehole: "🛢️ Borehole",
		typeOpenwell: "🕳️ Open well",
		typeSpring: "🏞️ Source",
		typeOther: "❓ Other",
		modalDepth: "Depth (optional)",
		depthUnknown: "Unknown",
		depth010m: "0-10m",
		depth1130m: "11-30m",
		depth3150m: "31-50m",
		depth50m: "50m+",
		modalAdditionalNotes: "Additional Notes (optional)",
		additionalNotesPlaceholder: "Any additional information...",
		modalConsent: "I agree to share this information.",
		submitReportBtn: "Submit Report",
		thankYouMessage: `Thank you. Your report helps improve access to water in your community.<br><br>If you’re offline, your report is saved and will be sent when you’re back online.`,
		offlineMessage:
			"No internet? Your report is saved and will be sent when you’re online. Just tap the 'Submit Report' button.",
		popupStatus: "Status:",
		popupAvailability: "Availability:",
		popupQuality: "Quality:",
		popupType: "Type:",
		popupDepth: "Depth:",
		popupNotes: "Notes:",
		alertCurrentLocationError: "Could not get your current location.",
		alertGeolocationNotSupported:
			"Geolocation is not supported by your browser.",
		alertTapMapPrompt: "Tap on the map to place a new well.",
		alertLocationNotFound: "Location not found in Syria",
		// --- DETAILS ---
		cityAleppo: "Aleppo",
		cityRaqqa: "Raqqa",
		cityDeir: "Deir ez-Zor",
		cityHama: "Hama",
		note_well_A: "New pump installed last month.",
		note_well_B: "Engine needs servicing, water levels are low.",
		note_well_C: "Has been dry for 3 months now. Urgent need for new source.",
		note_well_D:
			"Smells bad, villagers are getting sick. Investigation needed.",
		popupStaticTitle: "Well in {village}",
	},
	ar: {
		headerTitle: "آبار في سوريا",
		searchPlaceholder: "ابحث عن قرية...",
		addCurrentLocationBtn: "📍 إضافة في الموقع الحالي",
		addTapMapBtn: "👆 إضافة بالنقر على الخريطة",
		addWellBtn: "إضافة بئر",
		btnCancel: "✕ إلغاء",
		reportUpdateBtn: "تحديث التقرير",
		modalUpdateReport: "تحديث التقرير",
		modalNewWell: "بئر جديد",
		modalDesc:
			"يرجى مشاركة المعلومات حول بئر الماء في {villageName}. <br>يمكنك تحريك الدبوس إذا كان في موقع خاطئ.",
		modalCondition: "الحالة",
		conditionFunctional: "✔ يعمل",
		conditionNeedsRepair: "🔧 يحتاج إلى إصلاح",
		conditionCompletelyBroken: "❌ معطل تمامًا",
		modalAvailability: "توفر المياه",
		availabilityPlenty: "💧💧💧 وفيرة",
		availabilityModerate: "💧💧 متوسطة",
		availabilityScarce: "💧 نادرة",
		availabilityNone: "🚱 لا يوجد",
		modalWaterQuality: "جودة المياه (اختر ما ينطبق)",
		qualityClear: "✨ صافية",
		qualityMuddy: "🟫 موحلة",
		qualitySmelly: "👃 كريهة الرائحة",
		qualityContaminated: "🤢 ملوثة",
		modalWellType: "نوع البئر (اختياري)",
		typeHandpump: "🖐️ مضخة يدوية",
		typeBorehole: "🛢️ بئر ارتوازي",
		typeOpenwell: "🕳️ بئر مفتوح",
		typeSpring: "🏞️ نبع",
		typeOther: "❓ أخرى",
		modalDepth: "العمق (اختياري)",
		depthUnknown: "غير معروف",
		depth010m: "\u202A0-10\u202C م",
		depth1130m: "\u202A11-30\u202C م",
		depth3150m: "\u202A31-50\u202C م",
		depth50m: "\u202A50\u202C+ م",
		modalAdditionalNotes: "ملاحظات إضافية (اختياري)",
		additionalNotesPlaceholder: "أي معلومات إضافية...",
		modalConsent: "أوافق على مشاركة هذه المعلومات.",
		submitReportBtn: "إرسال التقرير",
		thankYouMessage: `شكراً لك. تقريرك يساعد في تحسين الوصول إلى المياه في مجتمعك.<br><br>		
إذا كنت غير متصل بالإنترنت، فسيتم حفظ تقريرك وإرساله عندما تعود إلى الاتصال بالإنترنت.`,
		offlineMessage:
			"لا يوجد اتصال بالإنترنت؟ تم حفظ تقريرك وسيتم إرساله عندما تكون متصلاً بالإنترنت. ما عليك سوى النقر على زر ”إرسال التقرير“.",
		popupStatus: ":الحالة",
		popupAvailability: ":التوفر",
		popupQuality: ":الجودة",
		popupType: ":النوع",
		popupDepth: ":العمق",
		popupNotes: ":ملاحظات",
		alertCurrentLocationError: "تعذر الحصول على موقعك الحالي.",
		alertGeolocationNotSupported: "الموقع الجغرافي غير مدعوم من قبل متصفحك.",
		alertTapMapPrompt: "انقر على الخريطة لوضع بئر جديد.",
		alertLocationNotFound: "الموقع غير موجود في سوريا",
		// --- DETAILS ---
		cityAleppo: "حلب",
		cityRaqqa: "الرقة",
		cityDeir: "دير الزور",
		cityHama: "حماة",
		note_well_A: "تم تركيب مضخة جديدة الشهر الماضي.",
		note_well_B: "المحرك يحتاج إلى صيانة، منسوب المياه منخفض.",
		note_well_C: "جف البئر منذ 3 أشهر. حاجة ملحة لمصدر جديد.",
		note_well_D: "رائحة كريهة، القرويون يمرضون. التحقيق مطلوب.",
		popupStaticTitle: "بئر في {village}",
	},
	ku: {
		headerTitle: "Bîrên li Sûriyê",
		searchPlaceholder: "Gundekî bibîne...",
		addCurrentLocationBtn: "📍 Li Cihê Heyî Zêde bike",
		addTapMapBtn: "👆 Bi Tikandina Nexşeyê Zêde bike",
		addWellBtn: "Bîrek Zêde bike",
		btnCancel: "✕ Betal bike",
		reportUpdateBtn: "Rapora Nû bike",
		modalUpdateReport: "Rapora Nû bike",
		modalNewWell: "Bîra Nû",
		modalDesc:
			"Ji kerema xwe agahdariya der barê bîra avê ya li {villageName} parve bikin. <br>Hûn dikarin pîneyê biguherînin ger ew li cîhek xelet be.",
		modalCondition: "Rewş",
		conditionFunctional: "✔ Kar dike",
		conditionNeedsRepair: "🔧 Pêwîstiya tamîrê heye",
		conditionCompletelyBroken: "❌ Bi tevahî xirab e",
		modalAvailability: "Berdestbûna Avê",
		availabilityPlenty: "💧💧💧 Pir",
		availabilityModerate: "💧💧 Navîn",
		availabilityScarce: "💧 Kêm",
		availabilityNone: "🚱 Tune",
		modalWaterQuality: "Kalîteya Avê (Hemûyan Hilbijêre)",
		qualityClear: "✨ Zelal",
		qualityMuddy: "🟫 Herî",
		qualitySmelly: "👃 Bêhnxweş",
		qualityContaminated: "🤢 Pîs",
		modalWellType: "Cureya Bîrê (vebijarkî)",
		typeHandpump: "🖐️ Pompa Destan",
		typeBorehole: "🛢️ Bîra Kûr",
		typeOpenwell: "🕳️ Bîra Vekirî",
		typeSpring: "🏞️ Kanî",
		typeOther: "❓ Din",
		modalDepth: "Kûrahî (vebijarkî)",
		depthUnknown: "Nenas",
		depth010m: "0-10m",
		depth1130m: "11-30m",
		depth3150m: "31-50m",
		depth50m: "50m+",
		modalAdditionalNotes: "Têbîniyên Zêde (vebijarkî)",
		additionalNotesPlaceholder: "Her agahdariya din...",
		modalConsent: "Ez razî me ku ez vê agahiyê parve bikim.",
		submitReportBtn: "Raporê Bişîne",
		thankYouMessage: `Spas. Rapora we alîkariyê dide baştirkirina gihîştina avê li civata we.<br><br>
		Heke hûn ne serhêl bin, rapora we tê tomarkirin û dema ku hûn dîsa serhêl bibin dê were şandin.`,
		offlineMessage:
			"Înternet tune ye? Rapora we tê tomarkirin û dema ku hûn bikevin ser înternetê dê were şandin. Tenê bişkoka 'Rapora Bişîne' bitikînin.",
		popupStatus: "Rewş:",
		popupAvailability: "Berdestbûn:",
		popupQuality: "Kalîte:",
		popupType: "Cure:",
		popupDepth: "Kûrahî:",
		popupNotes: "Têbînî:",
		alertCurrentLocationError: "Nikare cîhê weya heyî bistîne.",
		alertGeolocationNotSupported:
			"Cîhê erdnîgarî ji hêla geroka we ve nayê piştgirî kirin.",
		alertTapMapPrompt: "Li ser nexşeyê bikirtînin da ku bîrek nû bi cîh bikin.",
		alertLocationNotFound: "Cîh li Sûriyê nehat dîtin",
		// --- DETAILS ---
		cityAleppo: "Heleb",
		cityRaqqa: "Reqa",
		cityDeir: "Dêra Zorê",
		cityHama: "Hama",
		note_well_A: "Meha borî pompeyek nû hate saz kirin.",
		note_well_B: "Pêdiviya motorê bi servîsê heye, asta avê kêm e.",
		note_well_C: "Ev 3 meh in zuwa bûye. Pêdivî bi çavkaniyek nû heye.",
		note_well_D:
			"Bêhna wê nexweş e, gundî nexweş dikevin. Pêdivî bi lêkolînê heye.",
		popupStaticTitle: "Bîra li {village}",
	},
};
let currentLanguage = "en"; // // Default language

/* -------------------------
            MAIN MAP INIT
        ----------------------------*/
// Syria's borders (roughly, with a slight margin)
var syriaBounds = [
	[29.0, 33.0], // S-W
	[40.0, 46.0], // N-E
];

var map = L.map("map", {
	zoomControl: false,
	maxBounds: syriaBounds,
	maxBoundsViscosity: 0.8,
	minZoom: 7,
}).setView([35.0, 38.9], 7);

// --- CENTRE LOGIC AT 20% FROM THE TOP ---
map.on("popupopen", function (e) {
	var px = map.project(e.popup._latlng);
	var mapHeight = map.getSize().y;
	var targetCenterY = px.y + mapHeight * 0.3;
	var targetLatLng = map.unproject([px.x, targetCenterY], map.getZoom());
	map.panTo(targetLatLng, { animate: true, duration: 0.5 });
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 16,
	attribution: "© OSM",
	updateWhenIdle: true,
	keepBuffer: 1,
}).addTo(map);

let tempMarker = null;

/* -------------------------
            DATA
        ----------------------------*/
const wells = [
	{
		name: "well_A_name",
		village: "cityAleppo",
		coords: [35.95, 38.99],
		status: ["Functional"],
		waterAvailability: "Plenty",
		waterQuality: ["Clear"],
		wellType: "Hand pump",
		wellDepth: "0-10m",
		additionalNotes: "note_well_A",
	},
	{
		name: "well_B_name",
		village: "cityRaqqa",
		coords: [36.5, 40.75],
		status: ["Needs repair"],
		waterAvailability: "Moderate",
		waterQuality: ["Muddy"],
		wellType: "Borehole",
		wellDepth: "11-30m",
		additionalNotes: "note_well_B",
	},
	{
		name: "well_C_name",
		village: "cityDeir",
		coords: [35.33, 40.17],
		status: ["Dry"],
		waterAvailability: "None",
		waterQuality: ["Smelly", "Muddy"],
		wellType: "Open well",
		wellDepth: "31-50m",
		additionalNotes: "note_well_C",
	},
	{
		name: "well_D_name",
		village: "cityHama",
		coords: [36.53, 37.95],
		status: ["Contaminated"],
		waterAvailability: "Scarce",
		waterQuality: ["Contaminated", "Smelly"],
		wellType: "Spring",
		wellDepth: "0-10m",
		additionalNotes: "note_well_D",
	},
];

// --- SEARCH LOGIC ---
const searchInput = document.getElementById("searchInput");

function setLanguage(lang) {
	currentLanguage = lang;
	const isRtl = lang === "ar";
	document.documentElement.setAttribute("lang", lang);
	document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");

	document.querySelectorAll(".lang-button").forEach(btn => {
		btn.classList.remove("active");
	});
	document
		.getElementById(`lang${lang.charAt(0).toUpperCase() + lang.slice(1)}`)
		.classList.add("active");

	document.querySelectorAll("[data-key]").forEach(element => {
		const key = element.dataset.key;
		if (translations[lang][key]) {
			if (element.tagName === "INPUT" && element.type === "text") {
				element.placeholder = translations[lang][key];
			} else {
				element.innerHTML = translations[lang][key];
			}
		}
	});

	updateAllWellPopups();
	if (modalBg.style.display === "flex") {
		resetForm();
	}
}

function updateAllWellPopups() {
	wells.forEach(w => {
		if (w.marker) {
			w.marker.setPopupContent(createWellPopupContent(w));
		}
	});
}

function getStatusIcon(statusValue) {
	switch (statusValue) {
		case "Functional":
			return "✔";
		case "Needs repair":
			return "🔧";
		case "Dry":
			return "🚱";
		case "Contaminated":
			return "🤢";
		default:
			return "";
	}
}
function getAvailabilityIcon(availabilityValue) {
	switch (availabilityValue) {
		case "Plenty":
			return "💧💧💧";
		case "Moderate":
			return "💧💧";
		case "Scarce":
			return "💧";
		case "None":
			return "🚱";
		default:
			return "";
	}
}
function getQualityIcon(qualityValue) {
	switch (qualityValue) {
		case "Clear":
			return "✨";
		case "Muddy":
			return "🟫";
		case "Smelly":
			return "👃";
		case "Contaminated":
			return "🤢";
		default:
			return "";
	}
}
function getTypeIcon(typeValue) {
	switch (typeValue) {
		case "Hand pump":
			return "🖐️";
		case "Borehole":
			return "🛢️";
		case "Open well":
			return "🕳️";
		case "Spring":
			return "🏞️";
		default:
			return "❓";
	}
}

// Functions for creating pop-ups and forms
function createWellPopupContent(w) {
	const t = translations[currentLanguage];

	// TRANSLATION AND LOGIC OF THE TITLE
	const nameText = t[w.name] || w.name;
	const villageText = t[w.village] || w.village;
	const notesText = t[w.additionalNotes] || w.additionalNotes;

	// --- HEADER ---
	let headerHTML = "";

	if (w.name.startsWith("well_")) {
		headerHTML = t.popupStaticTitle.replace("{village}", villageText);
	} else {
		headerHTML = `${nameText} (${villageText})`;
	}
	// -----------------------------

	// --- TYPES OF WELLS ---
	const typeMapping = {
		"Hand pump": "typeHandpump",
		"Hand Pump": "typeHandpump",
		Borehole: "typeBorehole",
		"Open well": "typeOpenwell",
		"Open Well": "typeOpenwell",
		Spring: "typeSpring",
		Source: "typeSpring",
		Other: "typeOther",
	};
	const typeKey = typeMapping[w.wellType] || "typeOther";
	const typeText = t[typeKey] || w.wellType;

	// --- STATUS AND AVAILABILITY MAPS ---
	const statusMapping = {
		Functional: "conditionFunctional",
		"Needs repair": "conditionNeedsRepair",
		"Completely broken": "conditionCompletelyBroken",
		Dry: "conditionCompletelyBroken",
		Contaminated: "conditionCompletelyBroken",
	};
	const statusVal = w.status[0];
	const statusKey = statusMapping[statusVal] || "conditionFunctional";
	const statusText = t[statusKey] || statusVal;

	const availMapping = {
		Plenty: "availabilityPlenty",
		Moderate: "availabilityModerate",
		Scarce: "availabilityScarce",
		None: "availabilityNone",
	};
	const availKey = availMapping[w.waterAvailability] || "availabilityModerate";
	const availText = t[availKey] || w.waterAvailability;

	// --- CONTENT BUILDING ---
	let content = `<b>${headerHTML}</b>`;

	content += `<p><strong>${t.popupStatus}</strong> <span>${statusText}</span></p>`;
	content += `<p><strong>${t.popupAvailability}</strong> <span>${availText}</span></p>`;

	const qualityArray = Array.isArray(w.waterQuality)
		? w.waterQuality
		: [w.waterQuality];
	const qualityText = qualityArray
		.map(q => {
			const k = `quality${q.replace(/\s/g, "")}`;
			return t[k] || q;
		})
		.join(", ");
	content += `<p><strong>${t.popupQuality}</strong> <span>${qualityText}</span></p>`;

	content += `<p><strong>${t.popupType}</strong> <span>${typeText}</span></p>`;

	if (w.wellDepth) {
		const depthKey = `depth${w.wellDepth.replace(/[^a-zA-Z0-9]/g, "")}`;
		content += `<p><strong>${t.popupDepth}</strong> <span>${
			t[depthKey] || w.wellDepth
		} </span></p>`;
	}

	if (w.additionalNotes)
		content += `<div class="popup-notes"><strong>${t.popupNotes}</strong><br>${notesText}</div>`;

	content += `<br><button onclick="openModal('${w.village}', '${w.name}', [${w.coords[0]}, ${w.coords[1]}])">
                ${t.reportUpdateBtn}
            </button>`;

	return content;
}
/* -------------------------
            MODAL LOGIC
        ----------------------------*/
const modalBg = document.getElementById("modalBg");
const modalContent = document.getElementById("modalContent");
const addWellOptions = document.getElementById("addWellOptions");
let currentVillageName = "";
let currentWellName = "";
let currentWellCoords = null;
let modalMap = null;

function openModal(
	villageName = "Unknown Location",
	wellName = "",
	coords = null
) {
	currentVillageName = villageName;
	currentWellName = wellName;
	currentWellCoords = coords;

	addWellOptions.classList.remove("active");
	if (tempMarker) {
		map.removeLayer(tempMarker);
		tempMarker = null;
	}
	modalContent.scrollTop = 0;

	map.off("click", handleMapTapForNewWell);

	resetForm();
	modalBg.style.display = "flex";

	if (currentWellCoords) {
		setTimeout(() => {
			if (modalMap) {
				modalMap.remove();
				modalMap = null;
			}
			modalMap = L.map("modalMap", {
				zoomControl: false,
				attributionControl: false,
				dragging: true,
				touchZoom: true,
				scrollWheelZoom: true,
				doubleClickZoom: true,
			}).setView(currentWellCoords, 13);

			L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
				maxZoom: 18,
			}).addTo(modalMap);

			var modalMarker = L.marker(currentWellCoords, {
				icon: chooseIcon(
					getWellProperty(currentWellName, "waterAvailability") || "Moderate"
				),
				draggable: true,
			}).addTo(modalMap);

			modalMarker.on("dragend", function (event) {
				var position = event.target.getLatLng();
				currentWellCoords = [position.lat, position.lng];
				modalMap.panTo(position);
			});

			modalMap.invalidateSize();
		}, 100);

		modalContent.scrollTop = 0;

		setTimeout(() => {
			const firstFocusable = modalContent.querySelector(
				"h2, input, select, textarea, button"
			);
			firstFocusable?.focus();
		}, 0);
	}
}

function closeModal() {
	modalBg.style.display = "none";
	currentVillageName = "";
	currentWellName = "";
	currentWellCoords = null;
	if (modalMap) {
		modalMap.remove();
		modalMap = null;
	}
	addWellOptions.classList.remove("active");
	map.off("click", handleMapTapForNewWell);
	if (tempMarker) {
		map.removeLayer(tempMarker);
		tempMarker = null;
	}
}

function getWellProperty(wellName, property) {
	const well = wells.find(
		w => w.name === wellName && w.village === currentVillageName
	);
	return well ? well[property] : null;
}

function submitReport() {
	const selectedStatusValue = document.getElementById("conditionSelect").value;
	const selectedStatus = [selectedStatusValue];

	const waterAvailability = document.getElementById("availabilitySelect").value;

	const selectedWaterQuality = Array.from(
		document.querySelectorAll(".quality-btn.active")
	).map(btn => btn.dataset.value);
	const waterQuality = selectedWaterQuality.length
		? selectedWaterQuality
		: ["Clear"];

	const wellType = document.getElementById("typeSelect").value;
	const wellDepth = document.getElementById("depthSelect").value;
	const additionalNotes = document.getElementById("additionalNotesInput").value;
	const consentGiven = document.getElementById("consentCheckbox").checked;

	const newWellData = {
		village: currentVillageName,
		name: currentWellName || `New Well ${Date.now()}`,
		coords: currentWellCoords,
		status: selectedStatus,
		waterAvailability,
		waterQuality,
		wellType,
		wellDepth,
		additionalNotes,
		consentGiven,
	};

	if (currentWellName && currentWellCoords) {
		const existingWellIndex = wells.findIndex(
			w => w.name === currentWellName && w.village === currentVillageName
		);
		if (existingWellIndex !== -1) {
			wells[existingWellIndex] = {
				...wells[existingWellIndex],
				...newWellData,
			};
			const updatedWell = wells[existingWellIndex];
			if (updatedWell.marker) {
				updatedWell.marker.setIcon(chooseIcon(updatedWell.waterAvailability));
				// Ważne: zaktualizuj popup po zmianie danych i języka
				updatedWell.marker.setPopupContent(createWellPopupContent(updatedWell));
			}
		} else {
			const newWell = { ...newWellData, marker: null };
			wells.push(newWell);
			const m = L.marker(newWell.coords, {
				icon: chooseIcon(newWell.waterAvailability),
			}).addTo(map);
			m.bindPopup(createWellPopupContent(newWell));
			newWell.marker = m;
		}
	} else if (currentWellCoords) {
		const newWell = { ...newWellData, marker: null };
		wells.push(newWell);
		const m = L.marker(newWell.coords, {
			icon: chooseIcon(newWell.waterAvailability),
		}).addTo(map);
		m.bindPopup(createWellPopupContent(newWell));
		newWell.marker = m;
	}

	const t = translations[currentLanguage];
	modalContent.innerHTML = `
                <div class="modal-header-controls" style="border-radius:20px;">
                    <div class="close-btn" onclick="closeModal()">×</div>
                </div>
                <div class="thankyou">
                    ${t.thankYouMessage}
                </div>
            `;
}

function resetForm() {
	const wellToEdit = wells.find(
		w => w.name === currentWellName && w.village === currentVillageName
	);
	const wellCoordsToDisplay =
		currentWellCoords || (wellToEdit ? wellToEdit.coords : null);

	const t = translations[currentLanguage];

	// We retrieve the translation of the village name.
	const translatedVillageName = t[currentVillageName] || currentVillageName;

	modalContent.innerHTML = `
        <div class="modal-header-controls">
            <h2>${wellToEdit ? t.modalUpdateReport : t.modalNewWell}</h2>
            <p class="desc">${t.modalDesc.replace(
							"{villageName}",
							translatedVillageName
						)}</p>
            <div class="close-btn" onclick="closeModal()">×</div>
        </div>

        ${
					wellCoordsToDisplay
						? `<div class="modal-map-container"><div id="modalMap"></div></div>`
						: ""
				}

        <div class="modal-content-inner">
            
            <div class="two-col-grid">
                <div>
                    <label for="conditionSelect">${t.modalCondition}</label>
                    <select id="conditionSelect">
                        <option value="Functional">${
													t.conditionFunctional
												}</option>
                        <option value="Needs repair">${
													t.conditionNeedsRepair
												}</option>
                        <option value="Completely broken">${
													t.conditionCompletelyBroken
												}</option>
                    </select>
                </div>
                <div>
                    <label for="availabilitySelect">${
											t.modalAvailability
										}</label>
                    <select id="availabilitySelect">
                        <option value="Plenty">${t.availabilityPlenty}</option>
                        <option value="Moderate">${
													t.availabilityModerate
												}</option>
                        <option value="Scarce">${t.availabilityScarce}</option>
                        <option value="None">${t.availabilityNone}</option>
                    </select>
                </div>
            </div>

            <label>${t.modalWaterQuality}</label>
            <div class="quality-grid">
                <div class="quality-btn" data-value="Clear">${
									t.qualityClear
								}</div>
                <div class="quality-btn" data-value="Muddy">${
									t.qualityMuddy
								}</div>
                <div class="quality-btn" data-value="Smelly">${
									t.qualitySmelly
								}</div>
                <div class="quality-btn" data-value="Contaminated">${
									t.qualityContaminated
								}</div>
            </div>

            <div class="two-col-grid">
                <div>
                    <label for="typeSelect">${t.modalWellType}</label>
                    <select id="typeSelect">
                        <option value="Hand pump">${t.typeHandpump}</option>
                        <option value="Borehole">${t.typeBorehole}</option>
                        <option value="Open well">${t.typeOpenwell}</option>
                        <option value="Spring">${t.typeSpring}</option>
                        <option value="Other">${t.typeOther}</option>
                    </select>
                </div>
                <div>
                    <label for="depthSelect">${t.modalDepth}</label>
                    <select id="depthSelect">
                        <option value="">${t.depthUnknown}</option>
                        
                        <!-- TUTAJ BYŁ BŁĄD - TERAZ KLUCZE SĄ POPRAWIONE (bez podkreśleń) -->
                        <option value="0-10m">${t.depth010m}</option>
                        <option value="11-30m">${t.depth1130m}</option>
                        <option value="31-50m">${t.depth3150m}</option>
                        <option value="50m+">${
													t.depth50m
												}</option> <!-- Tu zmieniono też depth50mPlus na depth50m -->
                        
                    </select>
                </div>
            </div>

            <label>${t.modalAdditionalNotes}</label>
            <textarea id="additionalNotesInput" placeholder="${
							t.additionalNotesPlaceholder
						}"></textarea>

            <div class="checkbox-container">
                <input type="checkbox" id="consentCheckbox" checked>
                <label for="consentCheckbox">${t.modalConsent}</label>
            </div>

            <button class="submit-btn" onclick="submitReport()">${
							t.submitReportBtn
						}</button>
            <p class="modal-no-internet">${t.offlineMessage}</p>
        </div>
    `;

	document.querySelectorAll(".quality-btn").forEach(btn => {
		btn.addEventListener("click", () => {
			btn.classList.toggle("active");
		});
	});

	if (wellToEdit) {
		let statusValue = wellToEdit.status[0] || "";
		if (statusValue === "Dry" || statusValue === "Contaminated") {
			statusValue = "Completely broken";
		}
		document.getElementById("conditionSelect").value = statusValue;

		const qualityValues = Array.isArray(wellToEdit.waterQuality)
			? wellToEdit.waterQuality
			: [wellToEdit.waterQuality];
		qualityValues.forEach(q => {
			const btn = document.querySelector(`.quality-btn[data-value="${q}"]`);
			if (btn) btn.classList.add("active");
		});

		document.getElementById("availabilitySelect").value =
			wellToEdit.waterAvailability;
		document.getElementById("typeSelect").value = wellToEdit.wellType;
		if (wellToEdit.wellDepth)
			document.getElementById("depthSelect").value = wellToEdit.wellDepth;
	}
}

//---ADD NEW WELL---

function handleMapTapForNewWell(e) {
	if (tempMarker) {
		map.removeLayer(tempMarker);
	}

	tempMarker = L.marker(e.latlng, { icon: ICON_BLUE, draggable: true }).addTo(
		map
	);

	tempMarker.on("dragend", function (event) {
		const marker = event.target;
		const position = marker.getLatLng();
		currentWellCoords = [position.lat, position.lng];
	});

	currentWellCoords = [e.latlng.lat, e.latlng.lng];
	openModal("Tapped Location", "", [e.latlng.lat, e.latlng.lng]);

	map.off("click", handleMapTapForNewWell);
}

// --- LISTENERS FOR ADD WELL BTNS ---

const mainBtn = document.getElementById("mainAddWellBtn");
const optionsDiv = document.getElementById("addWellOptions");
const cancelBtn = document.getElementById("cancelAddWellBtn");

mainBtn.addEventListener("click", function () {
	optionsDiv.classList.add("active");
	mainBtn.style.display = "none";
});

if (cancelBtn) {
	cancelBtn.addEventListener("click", function () {
		optionsDiv.classList.remove("active");
		mainBtn.style.display = "block";
	});
}

document
	.getElementById("addWellCurrentLocationBtn")
	.addEventListener("click", function () {
		optionsDiv.classList.remove("active");
		mainBtn.style.display = "block";

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				function (position) {
					const lat = position.coords.latitude;
					const lng = position.coords.longitude;
					map.setView([lat, lng], 14);
					openModal("Current Location", "", [lat, lng]);
				},
				function (error) {
					alert(translations[currentLanguage].alertCurrentLocationError);
				}
			);
		} else {
			alert(translations[currentLanguage].alertGeolocationNotSupported);
		}
	});

document
	.getElementById("addWellTapMapBtn")
	.addEventListener("click", function () {
		optionsDiv.classList.remove("active");
		mainBtn.style.display = "block";

		alert(translations[currentLanguage].alertTapMapPrompt);
		map.on("click", handleMapTapForNewWell);
	});

// LISTENERS FOR LANG BTNS
document
	.getElementById("langEn")
	.addEventListener("click", () => setLanguage("en"));
document
	.getElementById("langAr")
	.addEventListener("click", () => setLanguage("ar"));
document
	.getElementById("langKu")
	.addEventListener("click", () => setLanguage("ku"));

document.addEventListener("DOMContentLoaded", () => {
	setLanguage(currentLanguage);

	wells.forEach(w => {
		const iconToUse = chooseIcon(w.waterAvailability);
		const m = L.marker(w.coords, { icon: iconToUse }).addTo(map);
		m.bindPopup(createWellPopupContent(w), {
			closeButton: true,
			autoPan: false,
			autoPanPadding: L.point(10, 80),
		});
		w.marker = m;
	});
});

// ENTER IN SEARCHBAR
searchInput.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		performSearch();
	}
});
function performSearch() {
	const term = searchInput.value.toLowerCase();
	if (term.length < 3) return;

	const t = translations[currentLanguage];

	const localWell = wells.find(w => {
		const villageTranslated = (t[w.village] || w.village).toLowerCase();
		const nameTranslated = (t[w.name] || w.name).toLowerCase();
		return villageTranslated.includes(term) || nameTranslated.includes(term);
	});

	if (localWell) {
		map.setView(localWell.coords, 14);
		localWell.marker.openPopup();
	} else {
		fetch(
			`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
				term + " Syria"
			)}`
		)
			.then(response => response.json())
			.then(data => {
				if (data.length > 0) {
					const lat = data[0].lat;
					const lon = data[0].lon;
					map.setView([lat, lon], 12);
				} else {
					alert(translations[currentLanguage].alertLocationNotFound);
				}
			})
			.catch(err => {
				console.error("Error:", err);
			});
	}
}
