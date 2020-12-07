var translateBtn = document.querySelector("#Translate-btn");
var inputTxt = document.querySelector("#input-txt");
var outputTxt = document.querySelector("#output")

var serverUrl = "https://api.funtranslations.com/translate/shakespeare.json"

function getUrl(text)
{
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error){
    console.log("Error occured:",error);
    alert("Server is busy,try again later")
}


function translateFn() {

    fetch(getUrl(inputTxt.value))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated
        outputTxt.innerText = translatedText
    })
    .catch(errorHandler)
};

translateBtn.addEventListener("click", translateFn)
