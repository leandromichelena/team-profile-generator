const fs = require('fs'); 

const listEmployees = teamArray => {

  return `
    <section class="m-3">
      <div class="row justify-content-center">
      ${teamArray
      .map(createCard)
      .join('')}
      </div>
    </section>
  `;
};

function createCard(employee){
  console.log(employee);
  let role = employee.getRole();
if (role == "Manager"){
  return `
      <div class="m-1 card" style="width: 20rem;">
        <div class="card-body">
          <h2 class="card-title">${employee.name}</h2>
          <h3 class="card-title">Manager</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">e-mail: <a href="mailto:${employee.email}">${employee.email}</a></li>
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
        </ul>
      </div>
`;
}

else if (role == "Engineer" ){
  return `
      <div class="m-1 card" style="width: 20rem;">
        <div class="card-body">
          <h2 class="card-title">${employee.name}</h2>
          <h3 class="card-title">Engineer</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">e-mail: <a href="mailto:${employee.email}">${employee.email}</a></li>
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Github: <a href="https://github.com/${employee.github}">${employee.github}</a></li>
        </ul>
      </div>
`;
}

else {
  return `
      <div class="m-1 card" style="width: 20rem;">
        <div class="card-body">
          <h2 class="card-title">${employee.name}</h2>
          <h3 class="card-title">Intern</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">e-mail: <a href="mailto:${employee.email}">${employee.email}</a></li>
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">School: ${employee.school}</li>
        </ul>
      </div>
`;
}
  
};

function htmlTemplate (team){
  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>My Team</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <main class="row m-5">
  <h1 class='text-center'>My Team</h1>
    ${listEmployees(team)}
  </main>

</body>
</html>
`;
}

function writeFile (team) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', htmlTemplate(team), err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created. Please check the HTML file located in the dist folder.'
      });
    });
  });
};

module.exports = writeFile;