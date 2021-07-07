window.onload = function () {
	let FM = new Form();
	let SM = new Storage();
	let dataArray = SM.dataRetrieve();
	FM.displayForm(dataArray);
};

class Main {
	constructor(fid, sid, type) {
		this.fid = fid;
		this.sid = sid;
		this.type = type;
		this.FM = new Form(this.fid);
		this.SM = new Storage(this.sid);
		this.FM.createForm(this.fid, this.type); // (creates input field in DOM)
		// console.log(`fid:${this.fid}, sid:${this.fid}`);
	}
}

function onAdd(e) {
	e.preventDefault();
	let id = e.target.name;
	let type = e.target.getAttribute("input-type");
	let value = document.getElementById(e.target.name).value;
	let SM = new Storage();
	SM.addRow(id, type, value);
	clearForm();
}
function onRemove(e) {
	e.preventDefault();
	let rmId = e.target.getAttribute("name");
	let SM = new Storage();
	SM.removeRow(rmId);
}

function clearForm() {
	document.getElementById("idInput").value = "";
}

function createMainInstance(fid, type) {
	// console.log(`fid:${fid},type:${type}`);
	let sid = uuidv4();
	const form = new Main(fid, sid, type);
}

function refreshPage() {
	console.log("refresh triggered");
	document.getElementById("dynamicForm").innerHTML = "";
	let FM = new Form();
	let SM = new Storage();
	let dataArray = SM.dataRetrieve();
	FM.displayForm(dataArray);
}

function removeTempRow(e) {
	let targetId = e.target.id;
	let targets = document.getElementsByName(targetId);
	// let targets = document.getElementById(targetId);
	for (var i of targets) {
		console.log(i);
		i.remove();
	}
}
