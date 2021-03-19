/* 
    1 : get the text that we choose and make it piece to piece
    2 : when document load the main function run
    3 : for number of the str, make an span of each length and insert in the text area of content
    4: build a setinterval and call another function to add class for each <span> that we build in previres part
    5 : add a class to each spans to show ,5-1: this is a bugfixer (when first for lop arrive to a empty piece,it doesnt add class to it,so we have to sum before add classess)
      */
// 1
const aniamtiontext = document.querySelectorAll('.animation-text')
aniamtiontext.forEach(eachtext => {
    // clear previes data
    // 5-1
    let bugfixer = 0;
    let indexstr = 0;
    const strtext = eachtext.textContent.split('');
    eachtext.textContent = '';
    // 2
    window.addEventListener('load', () => {
        // 3
        // 5-1

        for (let i = 0; i < strtext.length; i++) {
            if (strtext[i] === ' ') {
                eachtext.innerHTML += `<span style="display: inline !important;"> </span>`;
                bugfixer++;
            }
            eachtext.innerHTML += `<span>${strtext[i]}</span>`;
        }

        // 4
        let typeAnimationTime = setInterval(showtypeanimation, 50)
            // 5
        function showtypeanimation() {
            if (indexstr < strtext.length + bugfixer) {
                const spans = document.querySelectorAll('.animation-text span')[indexstr];
                spans.classList.add('show-type-aniamtion')
                indexstr++;
            } else {
                clearInterval(typeAnimationTime);
            }
        }

    })
})