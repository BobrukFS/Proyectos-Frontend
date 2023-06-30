class Score extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section class="resume__score score">
        <h1 class="score__h1">Your Result</h1>
        <div class="score__circle">
          <p class="score__porcentage">76</p>
          <p class="score__paragraphs">of 100</p>
        </div>
        <h3 class="score__h3">Great</h3>
        <p class="score__paragraphs">You scored higher than 65% of the people who have taken these tests.</p>
      </section> 
        `
    }
}

window.customElements.define("resume-score", Score);