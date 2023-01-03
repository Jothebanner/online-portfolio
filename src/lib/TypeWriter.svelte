<script>
  import { onMount } from "svelte";
  import hljs from "highlight.js";
  import About from "./About.svelte";
  import App from "../App.svelte";

  export let code = `class TypeWriter {
    constructor(doc) {
    }

    printLetter() {
      this.printedContent += this.sort;
      this.doc.innerHTML = this.printedContent;
      this.cursorPosition++;
    }

    type() {
      if (this.cursorPosition < this.docContent.length) {
        this.sort = this.docContent[this.cursorPosition];

        if (this.sort == "<") {
          this.printLetter();

          do {
            this.sort = this.docContent[this.cursorPosition];
            this.printLetter();
          } while (this.sort != ">");

          this.sort = this.docContent[this.cursorPosition];
          this.printLetter();

        } else if (this.sort == " ") {
          let tempPos = this.cursorPosition;
          tempPos++;
          let count = 0;

          while (this.docContent[tempPos] == " ") {
            if (count >= 4) {
              for (let i = 0; i <= 4; i++) {
                this.printLetter();
              }
              break;
            }
            count++;
            tempPos++;
          }
          this.printLetter();
        } else {
          this.printLetter();
        }
      }
    }
  }`;
  
  

    let hljsElement;
    let hljsTest;


  onMount(() => {
    hljsTest = hljs.highlight(code, {language: 'typescript'}).value;
    hljsElement.innerHTML = hljsTest;


    let typewriter;
    typewriter = new TypeWriter(hljsElement);
    setInterval(() => {
      typewriter.type();
    }, 100);
  });

  let doc = null;

  class TypeWriter {
    constructor(doc) {
      this.doc = doc;
      this.docContent = doc.innerHTML;
      this.printedContent = "";
      this.sort = "";
      this.cursorPosition = 0;
    }

    printLetter() {
      this.printedContent += this.sort;
      this.doc.innerHTML = this.printedContent;
      this.cursorPosition++;
    }

    type() {
      if (this.cursorPosition < this.docContent.length) {
        this.sort = this.docContent[this.cursorPosition];

        if (this.sort == "<") {

          let tempString ="<";
          do
          {
            this.cursorPosition++;
            this.sort = this.docContent[this.cursorPosition];
            tempString += this.sort;

          } while (this.sort != ">");

            this.printedContent += tempString;
            this.doc.innerHTML = this.printedContent;
            this.cursorPosition++;

        } else if (this.sort == " ") {
          let tempPos = this.cursorPosition;
          tempPos++;
          let count = 0;

          while (this.docContent[tempPos] == " ") {
            if (count >= 4) {
              for (let i = 0; i <= 4; i++) {
                this.printLetter();
              }
              break;
            }
            count++;
            tempPos++;
          }
          this.printLetter();
        } else if (this.sort == "&") {
          let tempString = this.sort + this.docContent[this.cursorPosition + 1] + this.docContent[this.cursorPosition + 2] + this.docContent[this.cursorPosition + 3];
          switch(tempString)
          {
            case "&lt;":
              this.sort = "<";
              this.cursorPosition += 3;
              break;
            case "&gt;":
              this.sort = ">";
              this.cursorPosition += 3;
              break;
            default:
              break;
          }
          this.printLetter();
        } else {
          this.printLetter();
        }
      }
    }
  }
</script>

<pre class="customHighlights" bind:this={hljsElement} id="typewriter"></pre>

<style lang="scss">
  .var-highlight {
    color: #c0ad60;
  }
  .string-highlight {
    color: rgba(253, 149, 90, 0.8);
  }

  #typewriter {
    font-size: 2em;
    margin: 0;
    font-family: "Courier New";
    text-align: left;
    width: 80vw;

    &:after {
      content: "|";
      animation: blink 500ms linear infinite alternate;
    }
    justify-content: end;
  }

  .customHighlights {
    color: #c4a7bf !important;
  }

  @-webkit-keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
