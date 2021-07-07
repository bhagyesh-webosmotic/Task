window.onload = function () {
	let FM = new Form(this.fid);
	let SM = new Storage(this.sid);
	let dataArray = SM.dataRetrive();
	FM.displayForm(dataArray);
};

class Main {
	constructor(fid, sid) {
		this.fid = fid;
		this.sid = sid;
		this.FM = new Form(this.fid);
		this.SM = new Storage(this.sid);
		this.FM.createForm(this.fid, this.sid); //fid=id, sid=type (creates input field in DOM)
	}
}

function onAdd(e) {
	e.preventDefault();
	let id = e.target.name;
	let type = e.target.getAttribute("input-type");
	let value = document.getElementById(e.target.name).value;
	let SM = new Storage(this.fid);
	SM.addRow(id, type, value);
	clearForm();
}
function onRemove(e) {
	e.preventDefault();
	let rmId = e.target.getAttribute("name");
	let SM = new Storage(this.fid);
	SM.removeRow(rmId);
}

function createMainInstance(fid, sid) {
	const form = new Main(fid, sid);
}

function clearForm() {
	document.getElementById("idInput").value = "";
}
