document.addEventListener("DOMContentLoaded", () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    function applyHoverEffect(event) {
        let repetition = 0;
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < repetition) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (repetition >= event.target.dataset.value.length)
                clearInterval(interval);
            repetition += 1 / 3;
        }, 30);
    }
    document.querySelector(".blogmanu").onmouseover = applyHoverEffect;
    document.querySelector(".hakkimdamanu").onmouseover = applyHoverEffect;
    document.querySelector(".iletisimmanu").onmouseover = applyHoverEffect;
    document.querySelector(".anasayfamanu").onmouseover = applyHoverEffect;
});
    document.addEventListener("DOMContentLoaded", () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    function applyHoverEffect(event) {
        let repetition = 0;
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < repetition) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (repetition >= event.target.dataset.value.length)
                clearInterval(interval);
            repetition += 1 / 3;
        }, 30);
    }
    document.querySelector(".blogmanu").onmouseover = applyHoverEffect;
    document.querySelector(".hakkimdamanu").onmouseover = applyHoverEffect;
    document.querySelector(".iletisimmanu").onmouseover = applyHoverEffect;
    document.querySelector(".anasayfamanu").onmouseover = applyHoverEffect;
});
    
