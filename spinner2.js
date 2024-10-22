const spinners = "|/-\\|";
let delay = 100;

for (const spinner of spinners) {
  setTimeout(() => {
    process.stdout.write("\r" + spinner);
  }, delay);
    
  delay += 200;
}
