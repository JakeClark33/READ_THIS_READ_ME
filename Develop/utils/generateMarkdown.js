
        
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `(https://shields.io/category/license/github/license/${githubInput}/${repo})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(markdownData) {
  return `
  ## READ ME
  ${markdownData.projectInput}
  
  

  ## Description 
  ${markdownData.descriptionInput}

  ## Table of Contents 
  ${markdownData.sectionInput}

  ## Installation Instructions
  ${markdownData.installationInput}

  ## Usage
  ${markdownData.usageInput}

  ## Contributors
  ${markdownData.contributorInput}

  ## Tests
  ${markdownData.testInput}

  ## Questions
  ${markdownData.githubInput}
  ${markdownData.emailInput}
  ${markdownData.contactInput}


  ## License
  ${markdownData.license}  
  
  
        



`;
}
module.exports = generateMarkdown;
