import fs from "fs";
import path from "path";
import inquirer from "inquirer";

const location = path.resolve("./functions");  

const createFunktion = async () => {
  const { functionName, par1, par2 } = await inquirer.prompt([
    {
      type: "input",
      name: "functionName",
      message: "Please choose a function language: JavaScript or Python?",
    },
    {
      type: "input",
      name: "par1",
      message: "Enter value for parameter 1:",
    },
    {
      type: "input",
      name: "par2",
      message: "Enter value for parameter 2:",
    },
  ]);

  // this checks if the dir is exists
  if (!fs.existsSync(location)) { 
    fs.mkdirSync(location);
  }

  let python = `def myfunc(par1, par2):\n    return par1 + par2\nprint(myfunc(${par1},${par2}))`;
  let javaScript = `let myfunc = (par1, par2) => {\n    return par1 + par2;\n}console.log(myfunc(${par1},${par2}));`;

  if (functionName.toLowerCase() === "python") {
    fs.writeFileSync(path.join(location, "python.py"), python, "utf8");
    console.log("Python file written!");
  } else if (functionName.toLowerCase() === "javascript") {
    fs.writeFileSync(path.join(location, "javascript.js"), javaScript, "utf8");
    console.log("JavaScript file written!");
  } else {
    console.log("Unsupported language. Please choose either 'python' or 'javascript'.");
  }
};

createFunktion();
