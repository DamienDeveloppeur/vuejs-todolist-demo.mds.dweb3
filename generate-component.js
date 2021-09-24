/**
 * This script allow you to generate Vue JS components automatically, by just giving its name.
 * Run the script: npm run gc MyComponent
 */

/**
 * The "File System" module is a native Node JS module that allow you to navigate and manipulate files nad directories.
 * https://nodejs.org/dist/latest-v14.x/docs/api/fs.html
 */
const fs = require('fs');

/**
 * The "Path" module is a native Node JS module that provide methods for dealing with paths and platform separators.
 * https://nodejs.org/dist/latest-v14.x/docs/api/path.html
 */
const path = require('path');

// process.argv contains an array of all the arguments passed to the command line used to run this script.
// In our case, the third one could contain the name of the component we want to create.
const compName = process.argv[2] || 'NewComponent';

fs.writeFile(path.join(__dirname, `./src/components/${compName}.vue`), `
<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: '${path.basename(compName)}'
  }
</script>

<style scoped>
</style>
`, (err) => {
  if (err) {
    console.error(err);
  }
  else {
    console.log('File created', path.join(__dirname, `./src/components/${compName}.vue`))
  }
});