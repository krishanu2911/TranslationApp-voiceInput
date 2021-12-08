const output = document.querySelector(".outEl");
const btn = document.querySelector(".btn-sp");
const outputdiv = document.querySelector(".outputDiv")

const btnt = document.querySelector(".btn-trans");
btnt.addEventListener("click",translateFunc);
function translateFunc(){
    fetch(serverURL+"?"+"text="+output.value)
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputdiv.innerText = translatedText;
    })
    // console.log(output.value);
}
// "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
// output.innerText = 
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function(){
    console.log("The Recognition has fired, start speaking!");
}
recognition.onresult = function(event){
    var transcript = event.results[0][0].transcript; 
    output.innerText = `${transcript}`;
    // console.log(transcript);
    // fetch(serverURL+"?"+"text="+transcript)
    // .then(response => response.json())
    // .then(json =>{
    //     var translatedText = json.contents.translated;
    //     outputdiv.innerText = translatedText;
    // })
    // output.textContent = transcript;
    // output.innerText = `${transcript}`;
    // document.querySelector(".output-box").innerText = transcript;
}
btn.addEventListener("click", clickHandler);
function clickHandler(){
    recognition.start();
}

// recognition.start();