const interval = setInterval(() => {
    if (location.href.includes("catch")) {
        if (document.getElementById("INGDLC-BTN-CAPTURE")) {
            clearInterval(interval);
            return;
        }

        const capturebtn = document.createElement("button");
        capturebtn.id = "INGDLC-BTN-CAPTURE";
        capturebtn.type = "button";
        capturebtn.setAttribute('tip', "캡쳐하기");
        capturebtn.innerHTML = "캡쳐하기";

        const captureimg = document.createElement("img");
        captureimg.id = "INGDLC-CAPTURE-IMG";
        captureimg.src = chrome.runtime.getURL("../icons/capture.png");
        captureimg.style.width = "24px";

        capturebtn.appendChild(captureimg);
        document.getElementsByClassName("share")[0].before(capturebtn);
    } else {
        if (document.getElementById("INGDLC-BTN-CAPTURE")) {
            clearInterval(interval);
            return;
        }

        const capturebtn = document.createElement("button");
        capturebtn.id = "INGDLC-BTN-CAPTURE";
        capturebtn.type = "button";
        capturebtn.setAttribute('tip', "캡쳐하기");
        capturebtn.style.justifyContent = "center";

        const captureimg = document.createElement("img");
        captureimg.id = "INGDLC-CAPTURE-IMG";
        captureimg.src = chrome.runtime.getURL("../icons/capture.png");
        captureimg.style.width = "24px";

        const captureli = document.createElement("li");
        captureli.id = "INGDLC-CAPTURE-LI";
        captureli.style.display = "flex";

        capturebtn.appendChild(captureimg);
        captureli.appendChild(capturebtn);

        document.getElementsByClassName("subscribe")[0].before(captureli);
    }

}, 500);