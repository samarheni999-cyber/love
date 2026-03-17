const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // تحرك عشوائي لكن محدود (50-100px)
    const shiftX = Math.random() * 100 - 50;
    const shiftY = Math.random() * 100 - 50;

    // المكان الحالي
    let currentX = parseFloat(noBtn.style.left) || 0;
    let currentY = parseFloat(noBtn.style.top) || 0;

    // الموقع الجديد
    let newX = currentX + shiftX;
    let newY = currentY + shiftY;

    // ما يخرجش من الشاشة
    newX = Math.max(0, Math.min(maxX, newX));
    newY = Math.max(0, Math.min(maxY, newY));

    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
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
