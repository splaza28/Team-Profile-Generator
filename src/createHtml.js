const generatePage = (team) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
    </head>
  
    <body>
    <header>
      <h1>Team Profiles</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
      <header>
    </body>
    </html>
    `;
  };
  
  //fs.writeFile('team.html', generatePage);
  
    //console.log('Portfolio complete! Check out index.html to see the output!');
 // });
  
module.exports = generatePage


