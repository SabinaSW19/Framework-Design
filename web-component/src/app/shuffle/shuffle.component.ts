import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shuffle-component',
  templateUrl: './shuffle.component.html',
  styleUrls: ['./shuffle.component.css'],
})

export class ShuffleComponent implements OnInit {
  @Input() sources!: string[];
  @Input() titles!: string[];
  @Input() about!: string[];
  @Input() category!: string;
  constructor() { }

  ngOnInit(): void {
  }

  clickModal() {
    var modal = document.getElementById('myModal');
    if(modal !== null) {
      modal.style.display = "none";
    }
  }

  showInfo() {
    var modalText = document.getElementById("textForImg");
    var number = document.getElementById("modalNumber");
    var about=this.about[Number(number.innerText)];
    if(modalText!==null) {
      modalText.innerHTML = about;
    }
  }

  noInfo() {
    var modalText = document.getElementById("textForImg");
    modalText.innerHTML="";
  }

  shuffle() {
    const randomElement = Math.floor(Math.random() * this.sources.length);
    var image = this.sources[randomElement];
    var desc=this.titles[randomElement];

    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("imageSrc");
    var modalDesc = document.getElementById("desc");
    var modalText = document.getElementById("textForImg");
    var modalNumber = document.getElementById("modalNumber");

    if(modal !== null) {
      modal.style.display = "block";
    }
    if(modalImg !== null) {
      modalImg.setAttribute('src', image);
    }
    if(modalDesc !== null) {
      modalDesc.innerHTML = desc;
    }
    if(modalNumber !== null) {
      modalNumber.innerHTML = randomElement.toString();
    }
    if(modalText!==null) {
      modalText.innerHTML = '';
    }
  }
}
