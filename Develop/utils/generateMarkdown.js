
        
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
  return `# ${markdownData.projectInput}
  ## READ ME
  ${markdownData.answers}
  
  

  ## Description 
  ${markdownData.descriptionData}

  ## Table of Contents 
  ${markdownData.tocData}

  ## Installation Instructions
  ${markdownData.installationData}

  ## Usage
  ${markdownData.usageData}

  ## Contributors
  ${markdownData.contributorData}

  ## Tests
  ${markdownData.testData}

  ## Questions
  ${markdownData.questionData}

  ## License
  ${markdownData.licenseData}  
  
  
        



`;
}

module.exports = generateMarkdown;
