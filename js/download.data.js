function reportdownload() {
    var oReq = new XMLHttpRequest();
    var URLToPDF = "./data/Lab No_27006_LH_.pdf";
    oReq.open("GET", URLToPDF, true);
    oReq.responseType = "blob";
    oReq.onload = function () {
        var file = new Blob([oReq.response], {
            type: 'application/pdf'
        });
        saveAs(file, "P-27920210817962-report.pdf");
    };
    oReq.send();
}