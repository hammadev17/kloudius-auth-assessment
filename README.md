
# 🌍 **User Authentication App**

User Authentication App is a React Native mobile application offering intuitive user authentication functionalities, such as Login, Register, Logout and goes to Dashboard displaying Full name and email of user.

---

## 🛠️ **Approach & Technical Choices**

## 🧠 **State Management**

App uses the **React Context API** to manage global state across the app. This modular approach keeps the state predictable and avoids prop drilling, making the app scalable for larger features.

- **context**: Provides shared application state via React Context Providers.
- **authcontext**: AuthContext shares the user authentication across the app for managing Login and Logout states
- **AsyncStorage**: Storage is used to save user data and access it accross the app

---

## 🧱 **Project Structure**

The project follows a clear and modular folder structure:

```
.
├── assets          # managing images files
├── component       # UI components
├── constant        # App-wide constants and config
├── context         # React Contexts for global state
├── models          # Creating data models
├── navigation      # Naigation stacks and navigation containers
├── screen          # Application screens (e.g., Landing)
```

---

## 🧹 **Code Quality & Consistency**

To maintain a clean and consistent codebase, the following tools are used:

- **ESLint**: Static code analysis for enforcing style and catching errors.
- **Prettier**: Opinionated code formatter.

These tools ensure the project's coding standards automatically.
For running these explicitly you can go through `package.json` scripts

```sh
    rm -rf node_modules    
    npm install
```

---

## 🧑‍💻 **Developer Experience**

- **Path Aliases**: Set up via `tsconfig.json` and `babel.config.js` to avoid long relative imports and improve code readability.  
  Example:  
  `import { Loader } from '@maplify/molecule'` instead of `../../../component/molecule`.

---

## ⚙️ **Getting Started**

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Step 1: 🚧 **Pre-start**

Clone the project:

```sh
git clone https://github.com/hammadev17/kloudius-auth-assessment
git checkout main
```

Make sure you're using the correct Node version by running the following (based on `.nvmrc`):

```sh
nvm use # This will use the node version defined in the project.
```

---


### Step 2: ▶️ **Start Metro**

Run **Metro**, the JavaScript bundler for React Native:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

---

### Step 3: ⚙️ **Build and Run Your App**

With Metro running, open a new terminal window and use one of the following commands to build and run your Android or iOS app:

- **For Android**:

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

- **For iOS**:

Make sure to install CocoaPods dependencies:

```sh
bundle install
bundle exec pod install
```

Then, build the app:

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

## **Demo**

[![Watch the video](https://github.com/user-attachments/assets/64e133f7-d81d-4bbb-8812-6417acb929d8)

## Congratulations! 🏆 you made it 🥳 👏

## Authors

[@hammadev17](https://github.com/hammadev17)
