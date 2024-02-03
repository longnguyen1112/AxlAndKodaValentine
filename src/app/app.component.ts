import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  noCount = 0;
  yesPressed = false;
  yesButtonSize: number = 16;
  initialImageSize = 85;

  constructor() {
    this.calculateYesButtonSize();
  }

  handleNoClick(): void {
    this.noCount++;
    this.calculateYesButtonSize()
    this.reduceContainerHeight()
  }

  getNoButtonText(): string {
    const phrases = [
      'No',
      'NO??? Are you sure?',
      'Really sure?',
      'Think again!',
      'Absolutely certain?',
      'Last chance!',
      'Surely not?',
      'Final opportunity!',
      'You might regret this!',
      'Give it another thought!',
      'Are you absolutely certain?',
      'This could be a mistake!',
      'Mistake like 404 ERROR you know',
      'Have a heart!',
      'How can you let this man be lonely',
      'Change of heart?',
      "Wouldn't you reconsider?",
      'Is that your final answer?',
      "You're breaking my heart",
      'Come onnn!!!',
      'I know you want to say yes!!!',
      "I will be so sad :("
    ];

    return phrases[Math.min(this.noCount, phrases.length - 1)];
  }

  setYesPressed(value: boolean): void {
    this.yesPressed = value;
  }

  private reduceContainerHeight() {
    console.log('hi')
    console.log(this.initialImageSize)
    this.initialImageSize -= 2.5;

    if (this.initialImageSize < 20) {
      this.initialImageSize = 20;
    }
  }

  private calculateYesButtonSize(): void {
    this.yesButtonSize = this.noCount * 20 + 16;
  }
}
