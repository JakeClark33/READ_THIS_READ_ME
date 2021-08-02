const inquirer = require('inquirer');

const path = require('path');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
   
    {
      type: 'input',
      name: 'projectInput',
      message: 'What is the name of your project?',
      validate: projectInput => {
        if (projectInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        } 
      }   
      },


    {
    type: 'input',
    name: 'descriptionInput',
    message: 'Please provide a detailed description of your project. (Required)' ,
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please provide a description of your project!');
        return false;
      }
    }
  }, 
    

    


    


      {
      type: 'input',
      name: 'installationInput',
      message: 'Please provide detailed instructions on how to install and run your project.(Required)' ,
        validate: installationInput => {
          if (installationInput) {
            return true;
          } 
          else {
            console.log('Please provide Instructions!');
            return false;
          }
        }  
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'Which languages did you use to build this project? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']

      },
   

      {
      type: 'input',
      name: 'usageInput',
      message: 'Please provide detailed instructions on how to use your project.(Required)',
      validate: usageInput => {
        if(usageInput) {
          return true;
        } else {
            console.log('Please provide instructions on how to use your project!');
          return false;
      }
    }  
  },
      

      {
      type: 'input',
      name: 'contributorInput',
      message: 'Please provide detailed references and contributors to this project.(Required)',  
      validate: contributorInput => {
        if (contributorInput) {
          return true;
        } else {
            console.log('Please add contributoprs or sources for this project.');
          return false;
      }
    }
  },

        
      {
      type: 'input',
      name: 'testInput',
      message: 'Please provide detailed explanation of any testing that was completed on this project.(Required)',  
      validate: testsInput => {
        if (testsInput) {
          return true;
        } else {
           console.log('Please provide tests or N/A!');
          return false;
       }
     }  
  },
        
  
      {
      type: 'input',
      name: 'githubInput', 
      message: 'Please enter your GitHub username.(Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
            console.log('You must enter your GitHub Username!');
          return false;
       }
     }  
  },


      {
      type: 'input',
      name: 'emailInput', 
      message: 'Please enter a valid email address.(Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
            console.log('Enter a Valid email address!');
          return false;
       }
    }
  },


      {
      type: 'input',
      name:'contactInput', 
      message: 'How else can you be contacted with additional questions regarding your project?(Required)',
      validate: contactInput => {
        if (contactInput) {
          return true;
        } else {
            console.log('Please enter additional contact information!');
          return false;
        }
      }
    },

      {
      type: 'input',
      name: 'license',
      message: 'Which license is your project currently using?.(Required)',           
      }
  
      
      ]
    

            
        
               
  
  // .then(promptDescription)
  // .then(descriptionAnswers => console.log(descriptionAnswers))
  // .then(promptToc)
  // .then(tocData => 
  //   console.log(tocData))
  //   .then(promptInstall)
  //   .then(installData => 
  //     console.log(installData))
  //     .then(promptUsage)
  //     .then(usageData => 
  //       console.log(usageData))
  //       .then(promptContributors)
  //     .then(contributorData => 
  //       console.log(contributorData))
  //       .then(promptTests)
  //       .then(TestData => 
  //         console.log(TestData))
  //         .then(promptQuestions)
  //       .then(QuestionData => 
  //         console.log(QuestionData))
  //         .then(promptLicense)
  //       .then(licenseData => {
  //        console.log(licenseData);
        
          
        function writeFile(fileName, markdownData){
          return fs.writeFileSync(path.join(process.cwd(),fileName),markdownData) 
        }
        console.log(writeFile);
        function start(){
          inquirer.prompt(questions)
          .then (inquirerResponses => {
            writeFile('template.md', generateMarkdown({...inquirerResponses}))
          })
        }   
        start()
        
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

 