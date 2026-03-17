const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // موقع عشوائي لكن قريب من الماوس
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

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
