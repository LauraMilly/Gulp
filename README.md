# Gulp Project - Task Automation

This is a task automation project using **Gulp**. It automates the compilation of Sass files, minification of JavaScript files, and image compression.

## Technologies Used

- **Gulp**: Task automation.
- **gulp-sass**: Compilation of `.scss` files to `.css`.
- **gulp-uglify**: Minification of JavaScript files.
- **gulp-imagemin**: Image compression.

## Requirements

- **Node.js**: Version 14 or above.
- **NPM**: Node.js package manager.

## How to Run the Project

## 🔧 How to Run the Project?

1️⃣ Clone the repository to your machine and navigate to the project directory. Then, run the following command to install the dependencies:
```sh
git clone https://github.com/LauraMilly/Gulp
```
2️⃣ Install dependencies
Navigate to the project folder and install the necessary dependencies by running:
```sh
npm install
```
3️⃣ Run Gulp
After installing the dependencies, you can run Gulp to execute the tasks for compilation, minification, and compression. To run all the tasks defined in the gulpfile.js, execute:
```sh
gulp
```
## This will trigger Gulp to:

- Compile the Sass files into CSS.
- Minify the JavaScript files.
- Compress the images.


## 📂 Project Structure
```
├── dist/
│   ├── css/
│   ├── js/
│   └── images/
├── src/
│   ├── sass/
│   ├── js/
│   └── images/
├── gulpfile.js
└── package.json

```

## Available Scripts

In the package.json, you can configure custom scripts. To run Gulp directly via NPM, add the following line to your package.json:
```sh
"scripts": {
  "start": "gulp"
}
```
Then, to run Gulp, simply use the command:
```sh
npm start

```

