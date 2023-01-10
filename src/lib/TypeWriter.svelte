<script>
  import { onMount } from "svelte";
  import hljs from "highlight.js";
  import About from "./About.svelte";
  import App from "../App.svelte";

  // export const wordWrap = true;
  // export const rowLength = 40;

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
    let typeWriterHeight = 0;
    let scrollToggle = false;


    export let textSize = "1vw";

    let calculateSize = (entries) => 
    {
      let newTextSize = (entries[0].target.clientWidth / 1500) + .4;
      textSize = newTextSize + "em";
    }

    // let stickToBottom = (entries) =>
    // {
    //   entries[0].target.scrollTo(0, entries[0].target.scrollHeight);
    // }

  onMount(() => {
    hljsTest = code.split(/\n/g);
    hljsElement.innerHTML = hljs.highlight(code, {language: 'typescript'}).value;

    hljsElement.addEventListener("scroll", (event) => {
      //yoink
      if (Math.abs(hljsElement.scrollHeight - hljsElement.clientHeight - event.target.scrollTop) < 1)
        scrollToggle = false;
      else
        scrollToggle = true;
    });

    new ResizeObserver(calculateSize).observe(hljsElement);

    let typewriter;
    typewriter = new TypeWriter(hljsElement, hljsTest);
    setInterval(() => {
      typewriter.type();
    }, 75);
  });

  let doc = null;

  class TypeWriter {
    constructor(doc, rows) {
      this.doc = doc;
      this.docContent = doc.innerHTML;
      this.rows = rows;
      this.printedContent = "";
      this.sort = "";
      this.cursorPosition = 0;
      this.rowNum = 0;
      this.columnNum = 0;
    }

    printLetter() {
      this.printedContent += this.sort;
      this.doc.innerHTML = this.printedContent;
      this.cursorPosition++;
      this.columnNum++;
      if (this.doc.scrollHeight > typeWriterHeight && !scrollToggle)
      {
        this.doc.scrollTo(0, this.doc.scrollHeight);
        typeWriterHeight = this.doc.scrollTop;
      }
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
      
      // // add to the end so we don't have to wait a tick to scroll
      // if (this.columnNum >= this.rows[this.rowNum].length + 1)
      // {
      //   this.columnNum = 0;
      //   this.rowNum++;
      //   this.doc.scrollTo(0, this.doc.scrollHeight);
      // }
    }
  }
</script>

<pre style="--text-size: {textSize}" class="customHighlights" bind:this={hljsElement} id="typewriter"></pre>

<style lang="scss">
  :root {
    --typewriter-text-size: var(--text-size);
  }
  pre {
    overflow-y: scroll;
    scrollbar-color: dark;
    height: 100%;
    width: 100%;
    //yoink
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
  }
  #typewriter {
    font-size: var(--text-size);
    margin: 0;
    font-family: "Courier New";
    text-align: left;
    padding-bottom: calc(var(--text-size) * 3);

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
