## About This Progremm 

## 🚀 Function Template Generator (Node.js)
A simple Node.js program that generates function templates in either Python 🐍 or JavaScript 💻 based on user input. The program allows users to specify function parameters and creates a corresponding function template in the selected language, saving it into a file inside a functions directory.

## ✨ Features:
🎯 Prompts the user to choose between Python or JavaScript.

🔢 Asks the user for two parameters (par1 and par2) for the function (sum).

📁 Creates a functions folder (if it doesn’t already exist).

📝 Generates a file based on the chosen language:

### Python: A function in python.py with the structure def sum(par1, par2): return par1 + par2 ,will return sum of (par1, par2).

### JavaScript: A function in javascript.js with the structure let sum = (par1, par2) => { return par1 + par2 }; ,will return sum of (par1, par2).

📦 Requirements:
Node.js (version 12 or higher)

Inquirer (for interactive prompts)

## ⚡ How to Use:
### 1. Clone the repository
git clone https://github.com/git@github.com:ilcodice/Template-Generator.git

### 2. Navigate to the project folder
cd function-template-generator

### 3. Install dependencies
npm install

### 4. Run the program
node index.js


## 🖼️ Example:
### When choosing Python 🐍 and entering par1 = 1 and par2 = 3, the program creates the following file functions/python.py:

in python.py:

def sum(par1, par2):
    return par1 + par2 ;
print(sum(1, 3))

    
### When choosing JavaScript and entering par1 = 5 and par2 = 4, the generated functions/javascript.js file will contain:

javascript.js:

let myfunc = (par1, par2) => {
    return par1 + par2;
};
console.log((sum(5, 4))

## 🧪 Run the Generated Files Python.py and JavaScript.py:
### python.py:
1. cd to function directory
2. execute: python3 python.py

### javascript:
1. cd to function directory
2. node javascript.js
