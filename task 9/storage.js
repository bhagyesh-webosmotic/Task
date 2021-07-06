class Storage {
	constructor(sid) {
		this.sid = sid;
	}
	addRow(id, type, value) {
		if (localStorage["input"] === undefined) {
			localStorage["input"] = "[]";
		} else {
			let dataArray = [];
			dataArray = JSON.parse(localStorage["input"]);

			function structure(id, type, value) {
				this.id = id;
				this.type = type;
				this.value = value;
			}

			let obj = new structure(id, type, value);

			dataArray.forEach((element) => {
				if (element.id == id) {
					console.log("matched");
					const index = dataArray.indexOf(element);
					console.log(index);
					dataArray.splice(index, 1);
				}
			});
			dataArray.push(obj);
			localStorage["input"] = JSON.stringify(dataArray);
		}
	}
	removeRow(rmId) {
		let dataArray = [];
		dataArray = JSON.parse(localStorage["input"]);
		dataArray.splice(rmId, 1);
		localStorage["input"] = JSON.stringify(dataArray);
		location.reload();
	}
}
