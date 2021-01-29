const link = document.getElementsByClassName('link');

for(const element of link){
  element.addEventListener('click', openLink, false);
}

function openLink() {
  closeLink(this);

let question = this.children[0];
let arrow = this.children[1];
let answer = this.children[2];

question.classList.toggle('bold');
arrow.classList.toggle('rotate');
answer.classList.toggle('open');
}

function closeLink(targetElement) {
  for (const element of link) {
    if (targetElement == element) {
        continue;
    } else {

        let question = element.children[0];
        let arrow = element.children[1];
        let answer = element.children[2];

        question.classList.remove('bold');
        arrow.classList.remove('rotate');
        answer.classList.remove('open');
    }
}
}