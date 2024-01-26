fetch('https://canary.discord.com/login')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.text();
  })
  .then(html => {
    console.log(html);
  })
  .catch(error => {
    console.error('Err:', error);
  });
