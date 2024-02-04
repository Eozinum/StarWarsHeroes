# Getting Started

This project uses latest React Native setup.

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions.

## Step 1: Install depndencies and run Application

First, you need to clone repo and install dependencies (make sure you are usind at least node 18)

```bash
npm i
```

Then go to ios directory and install pods:

```bash
cd ios
pod install
```

Great! Now you can run the app! Run next command and follow instructions:

```bash
npm run start

# or you can run only preffered platform:

npx react-native run-ios #for IOS
npx react-native run-android #for Android
```

## Step 2: Explore StarWars Heroes Application

This app lets you explore information about different characters from StarWars using https://swapi.dev/ API:

- There is a list of characters whith infinite scroll while there is data on api.
- You can like/unlike characters.
- When you press on specific character in the list app redirects you to the page with detailed information (you'll see a tiny heart icon in the bottom if you liked character).
- There is a general info about liked characters by gender on the top of list (can be cleared by pressing "Clear" button)
- Also you can see dark and light themes in the app which depend on device mode.

### Tools

- Typescript
- Navigation - react-navigation
- State management - RTK, RTKQuery
- UI and theming - React Native Paper, react-native vector icons
- Debug - Flipper and plugin for Redux
