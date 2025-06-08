# Remove global Next.js installation
npm uninstall -g next

# Clean npm cache
npm cache clean --force

# Remove existing build artifacts and dependencies
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

# Install dependencies
npm install

# Start development server
npm run dev 