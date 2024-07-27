function createBtn(id, text) {
    let btn = document.createElement("button");
    btn.id = id;
    btn.innerHTML = `[${text}]`;
    btn.style.color = "#707173";
    btn.style.fontSize = "13px";
    return btn;
}

const createLi = (id) => {
    const li = document.createElement("li");
    li.id = id;
    li.style.position = "relative";
    li.style.float = "left";
    li.style.color = "#000";
    li.style.zIndex = "99";
    li.style.marginLeft = "13px";

    return li;
}

// 캡쳐 버튼
setInterval(() => {
    if (document.getElementById("INGDLC-CAPTURE")) return;

    const licap = createLi("INGDLC-CAPTURE-LI");

    licap.prepend(createBtn("INGDLC-CAPTURE", "캡쳐"));

    if (document.getElementsByClassName("subscribe")[0]) {
        document.getElementsByClassName("subscribe")[0]?.before(licap);
    }

}, 500);