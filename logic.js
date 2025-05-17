function copyToClipboard() {
    navigator.clipboard.writeText('inquiry@shuaamisr.com').then(() => {
        const button = document.getElementById('copyText');
        button.classList.add('copy-feedback', 'copied');
        setTimeout(() => button.classList.remove('copied'), 2000);
    });
}

function copyToClipboard2() {
    navigator.clipboard.writeText('(+20) 1003046969').then(() => {
        const button = document.getElementById('copyText2');
        button.classList.add('copy-feedback', 'copied');
        setTimeout(() => button.classList.remove('copied'), 2000);
    });
}