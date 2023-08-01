const button = document.querySelector('.change-advice-btn')
const adviceId = document.querySelector('.advice-id')
const adviceText = document.querySelector('.advice-text')

button.addEventListener('click', getAdvice)

async function getAdvice() {
    const url = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await url.json();

    adviceId.innerHTML = `Advice #${adviceContent.slip.id}`;
    adviceText.innerHTML = `"${adviceContent.slip.advice}"`;
}

getAdvice()