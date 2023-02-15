// greeting follow time

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
greet = 'Good Morning.';
else if (hrs >= 12 && hrs <= 17)
greet = 'Good Afternoon.';
else if (hrs >= 17 && hrs <= 24)
greet = 'Good Evening.';

document.getElementById('greeting').innerHTML = greet;



// copy to clipboard name

const copyName = document.getElementById("name");
const showCopied = document.getElementById("copied");

copyName.onclick = function() {
    document.execCommand("copy");
}

copyName.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", copyName.textContent);
        console.log(event.clipboardData.getData("text"))
        
        showCopied.style.visibility = "visible";

        showCopied.innerHTML = "Name Copied"
        setTimeout(() => {
            showCopied.style.visibility = "hidden";
        }, 2000)
    } 
});

// copy to clipboard position

const copyPosition = document.getElementById("position");
const showCopied2 = document.getElementById("copied");

copyPosition.onclick = function() {
    document.execCommand("copy");
}

copyPosition.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", copyPosition.textContent);
        console.log(event.clipboardData.getData("text"))
        
        showCopied2.style.visibility = "visible";

        showCopied2.innerHTML = "Position Copied"
        setTimeout(() => {
            showCopied2.style.visibility = "hidden";
        }, 2000)
    } 
});

// Web API navigator.share

const shareURL = {
    url: window.location.href
}

const shareBtn = document.getElementById('share');
const resultPara = document.getElementById('copied');

// Share must be triggered by "user activation"
shareBtn.addEventListener('click', async () => {
try {
    await navigator.share(shareURL);
    resultPara.textContent = 'Shared Link';
} catch (err) {
    resultPara.textContent = `Error: ${err}`;
}
});
