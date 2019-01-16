const comps = `<input type="text" name="cpt_child">_<input type="checkbox" name="cpt_cbx">_<input type="radio" name="cpt_rbx">U<input type="radio" name="cpt_rbx">O_<select name="cpt_select"><option value="1">1</option><option value="2">2</option></select><textarea name="cpt_textarea"></textarea>`;

class AComp extends HTMLElement {
	constructor() {
		super();

		let div = document.createElement("div");
		div.innerHTML = `<i>LightDOM</i>_${comps.replace("cpt", "acomp")}_`;

		this.appendChild(div);
	}
}

class ASComp extends HTMLElement {
	constructor() {
		super();

		let div = document.createElement("div");
		div.innerHTML = `<i>ShadowDOM</i>_${comps.replace("cpt", "ascomp")}_`;
		let thus = this;
		
		div.addEventListener("input", e => {
			log(`${e.target.tagName}/${e.target.name} = ${e.target.value} | ShadowDOM`);
		});

		let shadow = this.attachShadow({ mode : "open" });

		shadow.appendChild(div);
	}
}


customElements.define("a-comp", AComp);
customElements.define("as-comp", ASComp);