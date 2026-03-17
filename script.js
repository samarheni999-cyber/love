const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // حركة متوسطة (20px - 50px)
    const shiftX = Math.random() * 30 + 20; // 20 → 50px
    const shiftY = Math.random() * 30 + 20; // 20 → 50px

    // اتجاه عشوائي
    let dirX = Math.random() < 0.5 ? -1 : 1;
    let dirY = Math.random() < 0.5 ? -1 : 1;

    let currentX = parseFloat(noBtn.style.left) || 0;
    let currentY = parseFloat(noBtn.style.top) || 0;

    let newX = currentX + shiftX * dirX;
    let newY = currentY + shiftY * dirY;

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
