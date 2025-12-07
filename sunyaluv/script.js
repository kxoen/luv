function submitForm() {
    const docID = document.getElementById("docID").value;
    const date = document.getElementById("date").value;
    const requester = document.getElementById("requester").value;
    const target = document.getElementById("target").value;
    const statement = document.getElementById("statement").value;
    const replyName = document.getElementById("replyName").value;

    const terms = [...document.querySelectorAll(".term")]
        .filter(t => t.checked)
        .map(t => "✔️ " + t.parentNode.innerText)
        .join("<br>");

    const resp = document.querySelector("input[name='resp']:checked");
    const respText = resp ? resp.value : "ยังไม่เลือกคำตอบ";

    document.getElementById("sumDocID").innerHTML = "📄 เลขที่เอกสาร: " + docID;
    document.getElementById("sumDate").innerHTML = "📅 วันที่ออกเอกสาร: " + date;
    document.getElementById("sumRequest").innerHTML = "👤 ผู้ขอ: " + requester;
    document.getElementById("sumTarget").innerHTML = "💗 ผู้ถูกขอ: " + target;
    document.getElementById("sumStatement").innerHTML = "📌 คำประกาศ:<br>" + statement;
    document.getElementById("sumTerms").innerHTML = "📝 ข้อตกลง:<br>" + (terms || "—");
    document.getElementById("sumResp").innerHTML = "❤️ การตอบรับ: " + respText;
    document.getElementById("sumRespName").innerHTML = "✍️ ผู้ตอบรับ: " + replyName;

    document.getElementById("formPage").style.display = "none";
    document.getElementById("summaryPage").style.display = "block";
}


/* โหลดเป็นภาพ PNG */
function downloadImage() {
    const targetDiv = document.getElementById("summaryPage");

    html2canvas(targetDiv, {
        scale: 3,
        backgroundColor: "#ffffff"
    }).then(canvas => {
        const link = document.createElement("a");
        link.download = "relationship-document.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}