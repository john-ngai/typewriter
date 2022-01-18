// EXERCISE:  Animate a sentence, revealing one character at a time.

const sentence = 'Hello, my name is John!';
let timer = 0;
let interval = 50;

for (const char of sentence) {
  // In Node, instead of using console.log() we can use process.stdout.write() to have more control and avoid automatically adding an extra "newline character" at the end each time.
  if (timer !== interval * sentence.length) {
    setTimeout(() => {process.stdout.write(char);}, timer);
  }
  if (timer === interval * (sentence.length - 1)) {
    setTimeout(() => {process.stdout.write('\n');}, timer);
  }
  timer += interval;
}