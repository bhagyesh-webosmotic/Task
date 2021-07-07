function attrib(input, element) {
	if (!element.value) {
		// console.log("inside dom");
		switch (element.type) {
			case "range":
				input.setAttribute("min", 0);
				input.setAttribute("max", 10);
				break;
		}
		input.setAttribute("type", element.type);
		input.setAttribute("name", element.id);
		input.setAttribute("value", element.id);
		input.setAttribute("id", element.id);
		if (element.type == "color") {
			input.setAttribute("class", "colorPicker");
		} else {
			input.setAttribute("class", "formFields");
		}
	} else {
		// console.log("inside saved data");
		switch (element.type) {
			case "range":
				input.setAttribute("min", 0);
				input.setAttribute("max", 10);
				break;
		}
		input.setAttribute("type", element.type);
		input.setAttribute("value", element.value);
		input.setAttribute("id", element.id);
		if (element.type == "color") {
			input.setAttribute("class", "colorPicker");
		} else {
			input.setAttribute("class", "formFields");
		}
	}
}
