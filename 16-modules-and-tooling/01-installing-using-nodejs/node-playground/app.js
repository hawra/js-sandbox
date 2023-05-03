async function getUser() {
  const response = await fetch('https://api.github.com/users/bradtraversy'); // RSH fetch was added to ode.js only recently in version 18
  const data = await response.json();
  console.log(data);
}

getUser();
console.log('Hello from Node.js'); // RSH Since we're not operating in the browser, as we're in the terminal, console refers to the terminal
