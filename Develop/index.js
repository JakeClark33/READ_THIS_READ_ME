const inquirer = require('inquirer');

const promptUser = () => {
  return inquirer.prompt
  ([
    {
      type: 'input',
      name: 'Project Type',
      message: 'What type of Project are you creating?'
    },
    {
    type: 'input',
    name: 'Project Name',
    message: 'What is the name of your project?'
    },
   
  ])
  
};

 





const promptDescription = () => {
console.log(`
  
  ================================================================
  Description
  ================================================================

  `);
  return inquirer.prompt([
    {
    type: 'input',
    name: 'description',
    message: 'Please provide a detailed description of your project. (Required)'  
    }
    
  ]);
};

const promptToc = tocData => {
  if (!tocData) {
  tocData = [];
  }
  console.log(`
    
    ================================================================
    Table Of Contents
    ================================================================
  
    `);
    return inquirer.prompt([
      {
      type: 'input',
      name: 'table of contents heading',
      message: 'Please provide a section heading for your Table Of Contents'  
      },
      {
        type: 'confirm',
      name: 'addHeading',
      message: 'Would you like to enter another Table Of Contents heading?',
      default: false
      }

    ])
    .then (headingData => {
      tocData.push(headingData)
      if(confirmAddHeading === true) {
        return promptToc(tocData);
      }else {
        return tocData;
      }
    })
    
  };





promptUser()
  .then(answers => console.log(answers))
  .then(promptDescription)
  .then(descriptionAnswers => console.log(descriptionAnswers))
  .then(promptToc)
  .then(tocData => 
    console.log(tocData));
   
  
// const fs = require('fs');

// const generatePage = require('./src/page-template');

// fs.writeFile('index.html', generatePage(projectType, projectName), err => {
//     if (err) throw err;
  
//     console.log('README complete! Check out index.html to see the output!');
//   });

// const pageHTML = generatePage(projectType, projectName);


// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;
  
//     console.log('README complete! Check out index.html to see the output!');
//   });






// // TODO: Include packages needed for this application
// const inquirer = require('inquirer');
// // TODO: Create an array of questions for user input
// const promptQuestions = () =>
// {
//   type: 'input',  
//   name: 'GitHub Project',
//   message: 'What is the name of your project? Required',
//   validate: nameInput => {
//       if (nameInput) {
//           return true;
//       } else {
//           console.log('Please enter the name of your project');
//           return false;
//       }
//   }
// }

// promptQuestions()
// .then(promptDescription)
// .then(descriptionData => {
//     return generatePage(descriptionData);
// })
// .then(pageHTML => {
//     return writeFile(pageHTML);
// })
// .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
// })
// .then(copyFileResponse => {
//     console.log(copyFileResponse);
// })
// .catch(err => {
//     console.log(err);
// });







// const promptDescription = descriptionData => {
//     console.log(`
//     *********************************
//     Description
//     *********************************
//     `);
//     return inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'description',
//                 message: 'Please provide a description of your project (Required)',
//                 validate: descriptionInput => {
//                     if (descriptionInput) {
//                         return true;
//                     } else {
//                         console.log('Please enter the description of your project!');
//                         return false;
                    
//                     }
//                 },
//             }
    
//         ]),

//     const promptTOC = tocData => {
//         console.log(`
//         ******************************
//         Table Of Contents
//         ******************************
//         `);
//     }
//     return inquirer
//         .prompt([
//             {
//                 type:'input',
//                 name: 'Installation Instructions',
//                 message: 'Please enter Instructions for Installation of your project (Required)',
//                     validate: nameInput => {
//                     if (nameInput) {
//                      return true;
//                     } else {
//                      console.log('You must have instructions on installation of your project!');
//                     return false;
//           }
//             }
//         },
//         {
//             type: 'input',
//             name:'Usage',
//             message:'How do we use your project (Required)'
//         }
//         ])
//     // TODO: Create a function to initialize app
//     //function initialize() {}
      
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// //function initialize() {}


// // Function call to initialize app
// init();
//             }