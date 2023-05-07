//code from project assets combined with ansers to questions

function createDocument(answers) {
    console.log("got to the svg file!");
    
    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${answers.shape} cx="150" cy="100" r="80" fill="${answers.shape_color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.text_color}">${answers.logo_text}</text>
        </svg>
    `;
}
module.exports = {createDocument};
