const fs = require('fs');
const path = require('path');

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