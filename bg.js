console.log('MeetRejoin by foob (https://discord.com/users/219541416760705024)');

function createBtn() {
    if (document.getElementsByClassName('jtEd4b').length < 1) return;
    const errElement = document.getElementsByClassName('jtEd4b')[0];
    const errorMessage = errElement.innerHTML;
    if (errorMessage !== 'You can\'t create a meeting yourself. Contact your system administrator for more information.') return;
    errElement.innerHTML = 'This meeting hasn\'t started yet 😳.';
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('alias');
    const authuser = urlParams.get('authuser');
    document.getElementsByClassName('fwk7ze')[0].innerHTML = `<p><b>Meeting Code</b>: ${code}</p>`;
    let rejoinButton = `<div class="VfPpkd-dgl2Hf-ppHlrf-sM5MNb" data-is-touch-wrapper="true"><button id='rejoinButton' class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc WNaQqc"><div class="VfPpkd-Jh9lGc"></div><span class="VfPpkd-vQzf8d">Attempt to Rejoin</span><div class="VfPpkd-RLmnJb"></div></button></div>`;
    document.getElementsByClassName('F0Ljwf')[0].innerHTML = rejoinButton;
    document.getElementById('rejoinButton').addEventListener("click", () => {
        window.location = `https://meet.google.com/lookup/${code}?authuser=${authuser}`;
    })
}
let repeat = setInterval(() => {
    if (document.getElementsByClassName('jtEd4b').length >= 1) {
        clearInterval(repeat);
        createBtn();
    }
}, 10)