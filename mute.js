let interval = window.setInterval(() => {
    if (document.getElementsByClassName('sUZ4id').length == 2) {
        if (document.getElementsByClassName('sUZ4id')[0].children !== undefined) {
            let i = 0;
            let muting = setInterval(() => {
                let muteButton = document.getElementsByClassName('sUZ4id')[0].children[0];
                let camButton = document.getElementsByClassName('sUZ4id')[1].children[0];
                if (muteButton.dataset.isMuted == "false") muteButton.click();
                if (camButton.dataset.isMuted == "false") camButton.click();
                if (i > 20) clearInterval(muting);
            }, 100)
            clearInterval(interval);
        }
    }
}, 1000)