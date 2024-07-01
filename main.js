let open = [false,false,false,false];
let answers = [
    `Frontend Mentor offers realistic coding challenges to help developers improve their 
      frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
      all levels and ideal for portfolio building.`,
    `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
      option providing access to a range of projects suitable for all skill levels.`,
    `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
      way to showcase your skills to potential employers!`,
    `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
      channel where you can ask questions and seek support from other community members.`
];
const articles = document.querySelectorAll('.questions');
const iconsHTML = document.querySelectorAll('.pa');
const iconsMinusOriginal1 = document.createElement('a');
iconsMinusOriginal1.innerHTML = `<img src="assets/images/icon-minus.svg" alt="icon-minus">`;
const iconsMinusOriginal2 = document.createElement('a');
iconsMinusOriginal2.innerHTML = `<img src="assets/images/icon-minus.svg" alt="icon-minus">`;
const iconsMinusOriginal3 = document.createElement('a');
iconsMinusOriginal3.innerHTML = `<img src="assets/images/icon-minus.svg" alt="icon-minus">`;
const iconsMinusOriginal4 = document.createElement('a');
iconsMinusOriginal4.innerHTML = `<img src="assets/images/icon-minus.svg" alt="icon-minus">`;
const iconsMinus = [iconsMinusOriginal1, iconsMinusOriginal2, iconsMinusOriginal3, iconsMinusOriginal4];



faqs.addEventListener('click', (event)=>{
    event.preventDefault();
    if(event.srcElement.nodeName == 'B' || event.srcElement.nodeName == 'IMG'){
        let asd = 0;
        for(let i = 0; i < 4; i++){
            if(event.srcElement.parentNode.parentNode.id == `q${i+1}`){
                asd = i;
            }
        }
        addAnswer(asd);
    }    
});

let addAnswer = (asd) => {
    let i = asd;
    
    if(open[i] == false){
        open[i] = true;
        iconsHTML[i].replaceWith(iconsMinus[i]);
        let answer = document.createElement('p');
        answer.id = `a${i}`;
        answer.innerHTML = `${answers[i]}`;
        articles[i].insertAdjacentElement('afterend', answer);
    } else {
        open[i] = false;
        iconsMinus[i].replaceWith(iconsHTML[i]);
        const paragraph = document.querySelector(`#a${i}`);
        faqs.removeChild(paragraph);
    }
}