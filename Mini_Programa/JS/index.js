const letters = "PROBABILIDAD";
        let interval = null;

        function changeTextLetter(event) {
            let iteration = 0;

            const initText = event.target.innerText;

            clearInterval(interval);

            interval = setInterval(() =>{
                event.target.innerText = initText
                .split("")
                .map((letter, index) =>{
                    if(index < iteration) {
                        return event.target.dataset.textValue[index];

                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
                if(iteration >= event.target.dataset.textValue.length) {
                    clearInterval(interval);
                }

                iteration += 1;
            }, 50);
        }

        const animTexts = document.querySelectorAll(".animated-text");

        animTexts.forEach((element) => {
            element.addEventListener("mouseover", (event) => {
                changeTextLetter(event);
            });
        });