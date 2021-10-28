function clearTextArea() {
    document.textform.textarea.value = '';
}

function lowerCaseText() {

    var a = document.textform.textarea.value;
    document.textform.textarea.value = a.toUpperCase();
}

function powerLifter() {




    var a = document.textform.textarea.value;
    document.textform.textarea.value = a.split(/\r?\n/).sort().join('\n');
}

function notPowerLifter() {




    var a = document.textform.textarea.value;
    document.textform.textarea.value = a.split(/\r?\n/).sort().reverse().join('\n');
}

function goWin() {





    var a = document.textform.textarea.value;
    document.textform.textarea.value = a.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, "");
}

function liveLife() {
    let i = 1;
    var a = document.textform.textarea.value;
    document.textform.textarea.value = a.replace(/^/gm, () => `${i++}.`);
}

function nazrulBest() {




    const lines = document.textform.textarea.value.split(/\r?\n/);
    for (let i = lines.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lines[i], lines[j]] = [lines[j], lines[i]];
    }

    document.textform.textarea.value = lines.join('\n');
}