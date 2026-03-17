const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // الموقع الجديد قريب من الموقع الحالي
    let currentX = parseFloat(noBtn.style.left || 0);
    let currentY = parseFloat(noBtn.style.top || 0);

    // Random shift صغير (-50px → +50px)
    let x = currentX + (Math.random() * 100 - 50);
    let y = currentY + (Math.random() * 100 - 50);

    // ما يخرجش من الشاشة
    x = Math.max(0, Math.min(maxX, x));
    y = Math.max(0, Math.min(maxY, y));

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
/* ===== YES BUTTON ===== */
function showLove(){
    document.getElementById("message").style.display = "block";
    createHearts();
}

/* ===== HEARTS ===== */
function createHearts(){
    const container = document.getElementById("hearts-container");

    for(let i=0; i<40; i++){
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heart.style.fontSize = (15 + Math.random() * 40) + "px";

        container.appendChild(heart);

        setTimeout(()=>heart.remove(),3000);
    }
}
