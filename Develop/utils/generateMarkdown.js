// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {if (license === 'MIT')
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  else if (license ==='Apache 2.0')
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  else if (license ==='ISC')
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  else 
  return;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {if (license === 'MIT')
  return `(https://opensource.org/licenses/MIT)`;
  else if (license ==='Apache 2.0')
    return `(https://opensource.org/licenses/Apache-2.0)`;
  else if (license ==='ISC')
    return `(https://opensource.org/licenses/ISC)`;
  else 
  return;}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {if (license){return `${license}`;}
else {return};

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.des}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## installation
  ${data.install}

  ## usage
  ${data.usage}

  ## license
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## contributing
  ${data.contributing}

  ## tests
  ${data.tests}

  ## questions
  Any quebbins? Hit me up yo! ${data.githubName} at ${data.email}

`;
}

export default generateMarkdown;
