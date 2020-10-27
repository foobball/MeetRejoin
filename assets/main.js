const vers = "2.2.1";

document.getElementById('vers').innerText = `Version ${vers}`;
/*document.getElementById('contact').addEventListener("click", () => {
    window.open(`https://discord.com/users/219541416760705024`);
})*/
document.getElementById('github').addEventListener("click", () => {
    window.open(`https://github.com/foobball/MeetRejoin`);
})
fetch('https://raw.githubusercontent.com/foobball/MeetRejoin/main/vers.txt')
    .then(res => res.text())
    .then(body => {
        console.log(body);
        if (body !== vers) {
            document.getElementById('author').innerHTML = 'by foob <a href="#" style="color:red" id="update">(Out of Date)</a>';
            document.getElementById('update').addEventListener("click", () => {
                window.open(`https://chrome.google.com/webstore/detail/bickjlhloaddmjnanlhdcoedebngamnn`);
            })
        }
    })