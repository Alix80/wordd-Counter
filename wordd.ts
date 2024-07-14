//Import Inquirer module, which is a cmd for node.js
import inquirer from 'inquirer'

//declear the variable and assign it thevalue which take input from the user
const answer:{
    sentence: string
}=await inquirer.prompt([
        {
            name:'sentence',
            type:'input',
            message:'Enter your sentences'

        }
    ]
)
const words=answer.sentence.trim().split("")

//display the words
console.log(words)
//display the count words
console.log(`Your sentence word count is${words.length}`)