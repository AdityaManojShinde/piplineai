const { execSync } = require('child_process');
const fs = require('fs');

// Function to execute shell commands
function exec(cmd) {
  try {
    console.log(`Executing: ${cmd}`);
    execSync(cmd, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`Error executing ${cmd}:`, error.message);
    return false;
  }
}

// Main build process
async function build() {
  console.log('Starting custom build process...');
  
  // Check if package.json exists
  if (!fs.existsSync('./package.json')) {
    console.error('package.json not found!');
    process.exit(1);
  }
  
  // Read package.json
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  
  // Remove lucide-react if it exists
  if (packageJson.dependencies && packageJson.dependencies['lucide-react']) {
    console.log('Removing lucide-react from dependencies...');
    delete packageJson.dependencies['lucide-react'];
    fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
  }
  
  // Install dependencies
  console.log('Installing dependencies...');
  if (!exec('npm install')) {
    process.exit(1);
  }
  
  // Run the build
  console.log('Running build...');
  if (!exec('npm run build')) {
    process.exit(1);
  }
  
  console.log('Build completed successfully!');
}

// Run the build process
build().catch(error => {
  console.error('Build failed:', error);
  process.exit(1);
}); 