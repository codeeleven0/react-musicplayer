rm -Recurse electron
npm run build
npx cap add @capacitor-community/electron
npx cap open @capacitor-community/electron