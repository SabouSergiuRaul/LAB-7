function changeProfile() {
	// call all functions to change profile
	NameToJob();
	educationToAchievements();
	oldToNewImage();
	changeBodyBackgroundColor();
}

function NameToJob() {
	document.getElementById("Nume").innerHTML = "Computer network architect - FTX co.";
}

function educationToAchievements() {
	// schimbare primul rand tabel
	var r1 = document.getElementById("realizare_r1");
	var p1 = document.getElementById("perioada_r1");
	var l1 = document.getElementById("link_r1");
	r1.innerHTML = "Internship";
	p1.innerHTML = "01.06.2024-24.09.2024";
	l1.innerHTML = "https://www.uber.com/us/en/careers/teams/university/";

	// schimbare al doilea rand tabel
	var r2 = document.getElementById("realizare_r2");
	var p2 = document.getElementById("perioada_r2");
	var l2 = document.getElementById("link_r2");
	r2.innerHTML = "Lucrare de licenta";
	p2.innerHTML = "26.06.2026";
	l2.innerHTML = "https://youtu.be/dQw4w9WgXcQ";

	// schimbare al treilea rand tabel
	var r3 = document.getElementById("realizare_r3");
	var p3 = document.getElementById("perioada_r3");
	var l3 = document.getElementById("link_r3");
	r3.innerHTML = "Voluntariat";
	p3.innerHTML = "01.06.2024-24.09.2024";
	l3.innerHTML = "https://youtu.be/yKQ_sQKBASM";

	// schimbare al patrulea rand tabel
	var r4 = document.getElementById("realizare_r4");
	var p4 = document.getElementById("perioada_r4");
	var l4 = document.getElementById("link_r4");
	r4.innerHTML = "Internship";
	p4.innerHTML = "01.06.2024-24.09.2024";
	l4.innerHTML = "https://careers.google.com/jobs/results/?category=DATA_CENTER_OPERATIONS&category=DEVELOPER_RELATIONS&category=HARDWARE_ENGINEERING&category=INFORMATION_TECHNOLOGY&category=MANUFACTURING_SUPPLY_CHAIN&category=NETWORK_ENGINEERING&category=PRODUCT_MANAGEMENT&category=PROGRAM_MANAGEMENT&category=SOFTWARE_ENGINEERING&category=TECHNICAL_INFRASTRUCTURE_ENGINEERING&category=TECHNICAL_SOLUTIONS&category=TECHNICAL_WRITING&category=USER_EXPERIENCE&distance=50&employment_type=INTERN&employment_type=PART_TIME&has_remote=true&jex=ENTRY_LEVEL";

	// schimbare al cincilea rand tabel
	var r5 = document.getElementById("realizare_r5");
	var p5 = document.getElementById("perioada_r5");
	var l5 = document.getElementById("link_r5");
	r5.innerHTML = "Internship";
	p5.innerHTML = "01.06.2024-24.09.2024";
	l5.innerHTML = "https://www.amazon.jobs/en/teams/internships-for-students";
}

function oldToNewImage() {
	var img = document.getElementById("poza");
	img.src = "1122.jpg";
	img.style.opacity = 1;
	img.style.borderWidth = '10px';
    img.style.borderStyle = 'solid';
    img.style.borderColor = 'red';
	img.style.right='100px'
	
	
	
}

function changeBodyBackgroundColor() {
	var body = document.getElementById("bodiy");
	body.style.backgroundColor = "#e1f0e5";
	body.style.backgroundImage = "url('8337347401aaefcf703d3325396f7919333f994d.png')";
	body.style.backgroundSize = "1500px 720px";
	body.style.fontFamily = "Verdana";
	
}