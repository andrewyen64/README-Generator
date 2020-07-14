// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

[![Generic badge](https://img.shields.io/badge/license-${data.license}-brightgreen)](https://shields.io/)

## Description

${data.description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

* Github: <https://github.com/${data.github}>

* Email: ${data.email}

## License

${data.license}

Copyright © ${data.year} ${data.fullName} 
`;
}

module.exports = generateMarkdown;
