import fs from "fs";
import path from "path";
import inquirer from "inquirer";

const location: string = path.resolve("./functions");

const createFunktion = async (): Promise<void> => {
  const {
    functionName,
    par1,
    par2,
  }: { functionName: string; par1: string; par2: string } = await inquirer.prompt([
    {
      type: "input",
      name: "functionName",
      message: "Please choose a function language: JavaScript or Python?",
    },
    {
      type: "input",
      name: "par1",
      message: "Enter first number:",
    },
    {
      type: "input",
      name: "par2",
      message: "Enter second number:",
    },
  ]);

  const num1 = parseInt(par1);
  const num2 = parseInt(par2);

  if (!fs.existsSync(location)) {
    fs.mkdirSync(location);
  }

  const python = `def sum(par1, par2):\n    return par1 + par2\n\nprint(sum(${num1}, ${num2}))`;
  const javaScript = `let sum = (par1, par2) => {\n    return par1 + par2;\n};\n\nconsole.log(sum(${num1}, ${num2}));`;

  if (functionName.toLowerCase() === "python") {
    fs.writeFileSync(path.join(location, "python.py"), python, "utf8");
    console.log("Python file written!");
  } else if (functionName.toLowerCase() === "javascript") {
    fs.writeFileSync(path.join(location, "javascript.js"), javaScript, "utf8");
    console.log(" JavaScript file written!");
  } else {
    console.log("Unsupported language. Please choose either 'python' or 'javascript'.");
  }
};

createFunktion();
