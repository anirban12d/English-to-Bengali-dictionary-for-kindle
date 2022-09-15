const body = document.querySelector("body");
let mbp = document.createElement("mbp:frameset");
let idx = document.createElement("idx:entry");
let h5 = document.createElement("h5");
let dt = document.createElement("dt");
let orth = document.createElement("idx:orth");
let dd = document.createElement("dd");
let hr = document.createElement("hr");

body.appendChild(mbp);

window.onload = () => {
  // FILE PICKER
  let picker = document.getElementById("csv");

  // READ CSV FILE
  picker.onchange = () => {
    //  GET SELECTED CSV FILE
    let selected = picker.files[0];

    //  READ CSV INTO ARRAY
    let reader = new FileReader();
    reader.addEventListener("loadend", () => {
      //  SPLIT ROWS & COLUMNS
      let data = reader.result.split("\r\n");

      for (let i in data) {
        data[i] = data[i].split(",");
      }

      data.forEach((element) => {
        let idx = document.createElement("idx:entry");
        let h5 = document.createElement("h5");
        let dt = document.createElement("dt");
        let orth = document.createElement("idx:orth");
        let dd = document.createElement("dd");
        let hr = document.createElement("hr");

        mbp.appendChild(idx);
        idx.setAttribute("name", "default");
        idx.setAttribute("scriptable", "yes");
        idx.setAttribute("spell", "yes");
        idx.appendChild(h5);
        h5.appendChild(dt);
        dt.appendChild(orth);
        orth.innerText = element[0];
        idx.appendChild(dd);
        dd.innerText = element[1];
        idx.appendChild(hr);
      });
    });
    reader.readAsText(selected);
  };
};
