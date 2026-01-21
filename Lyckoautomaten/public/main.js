const numberBtn = document.getElementById("numberBtn")
const resultNumber = document.getElementById("resultNumber")
const timestampText = document.getElementById("timestampText")

async function fetchResults() {
    try {
        const res = await fetch("/api/lucky")
        const data = await res.json()

        resultNumber.textContent = data.number
        timestampText.textContent = data.date
        console.log(data.date)
    } catch {
        console.log("Error")
    }
}

numberBtn.addEventListener('click', fetchResults)

