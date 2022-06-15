document.getElementById("button").addEventListener("click", function () {
    let textArea = document.getElementById("textarea").value

    try {
        let convertedObject = JSON.parse(textArea)
        document.getElementById("showResult").innerHTML = "Parsable JSON string!"
        console.log(convertedObject)
    } catch (e) {
        document.getElementById("showResult").innerHTML = e
        throw new Error (e)
    }
})