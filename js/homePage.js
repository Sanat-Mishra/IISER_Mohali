function getCurrentDate() {
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if ( mm < 10) {
        mm = '0' + mm;
    }
    return dd+"-"+mm+"-"+yyyy;
}

function cleanUp() {
    var elements = document.getElementsByClassName("event invisible");
    var date = getCurrentDate();
    var c = 0;
    for (element of elements) {
        var id = element.id;
        var visFrom = id.split(":")[0];
        var visTill = id.split(":")[1].slice(0,11);
        if (date >= visFrom && date <= visTill) {
            element.classList.remove("invisible");
            c += 1;
        } else {
            element.remove();
        }
    }
    if (c != 0) {
        document.getElementById("noHiglightsMsg").remove();
    }
}