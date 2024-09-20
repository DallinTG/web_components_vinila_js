let all_components
let object_temp = {
    waffles:"hi i like dslkjfhskljdfskjdfhslkdjfhsdlkfjhsdkjfhslfjhslkdfjhsdlkj waffles",
}


function get_comp_text() {
	return fetch(`./components/components.html`).then(function (response) {
		if (response.ok) {
			let text = response.text();
			return text;
		}
		throw response;
	});
}

function create_doc_frag(text) {
	return document.createRange().createContextualFragment(text);
}

function add_default_comps_slot(slots) {
    slots.forEach((element) => {
        let new_comp = all_components.querySelector("section[comp=" + element.getAttribute("comp")+"]")
        if (new_comp != null) {
            let temp_comp
            if (element.getAttribute("comp_data")!=null){                
                let text = new_comp.outerHTML
                text = interpolate(text, eval(element.getAttribute("comp_data")))
                temp_comp = create_doc_frag(text).querySelector("section[comp=" + element.getAttribute("comp")+"]")
            }else{
                temp_comp = new_comp.cloneNode(true)
            }
            element.replaceWith(temp_comp)
            add_default_comps_slot(temp_comp.querySelectorAll("slot")) 
        }
    });
}

function add_default_comps() {
    let slots = document.querySelectorAll("slot")
    add_default_comps_slot(slots)
}

function init_components() {
    get_comp_text().then(function (text) {
        all_components = create_doc_frag(text)
        document.addEventListener("DOMContentLoaded", add_default_comps())
    });
}

const regex = /#{[^{]+?}/g;

function interpolate(template, variables, fallback) {
	return template.replace(regex, (match) => {
		const path = match.slice(2, -1).trim();
		// console.log(match);
		return getObjPath(path, variables, fallback);
		
	});
}

//get the specified property or nested property of an object
function getObjPath(path, obj, fallback = "") {
	return path.split(".").reduce((res, key) => res[key] || fallback, obj);
}

function set_comp(host_slot , comp_id, comp_data) {
    new_comp = all_components.querySelector("section[comp=" + comp_id+"]")
    //temp_comp = new_comp.cloneNode(true)

    if (host_slot.getAttribute("comp_data")!=null){                
        let text = new_comp.outerHTML
        text = interpolate(text, eval(element.getAttribute("comp_data")))
        temp_comp = create_doc_frag(text).querySelector("section[comp=" + element.getAttribute("comp")+"]")
    }else{
        temp_comp = new_comp.cloneNode(true)
    }

    host_slot.replaceWith(temp_comp)
    let slots = document.querySelectorAll("slot")
    add_default_comps_slot(slots)
}

init_components()