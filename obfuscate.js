const fs = require('fs');
const path = require('path');
const obfuscator = require('javascript-obfuscator');

// Path to your React build output
const buildDir = path.join(__dirname, 'build/static/js');

function obfuscateDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      obfuscateDir(filePath);
    } else if (file.endsWith('.js')) {
      console.log(`Obfuscating ${filePath}...`);
      const code = fs.readFileSync(filePath, 'utf-8');
      const obfuscatedCode = obfuscator.obfuscate(code, {
        compact: true,
        controlFlowFlattening: true, // Makes logic harder to follow
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true, // Adds unused code
        deadCodeInjectionThreshold: 0.4,
        stringArray: true,
        stringArrayEncoding: ['rc4'],
        rotateStringArray: true,
        stringArrayThreshold: 0.75,
        debugProtection: true, // Prevents use of DevTools
        debugProtectionInterval: 2000, // Run the protection every 2 seconds
        disableConsoleOutput: true, // Removes console logs
      }).getObfuscatedCode();

      fs.writeFileSync(filePath, obfuscatedCode, 'utf-8');
    }
  });
}

// Run obfuscation
obfuscateDir(buildDir);
