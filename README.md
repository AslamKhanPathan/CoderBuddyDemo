

## Installation

> **_Please read the below instructions carefully. Complete all the steps sequentially_**.

1. **_FORK_** this repo to your own GitHub account. **_DON'T CLONE THIS REPO_**. Fork button is the top right corner of the GitHub page.
2. Clone the **FORKED** repo to your local machine.
3. Open the project folder in VS Code
4. Install the recommended plugins
   - [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - or open `.vscode/extensions.json` to see the list of recommended plugins and install them manually
5. Install `node_modules` using `npm` or `yarn` or `pnpm`.

   ```sh
   npm install
   ```

   OR

   ```sh
   yarn install
   ```

   OR

   ```sh
   pnpm install
   ```

6. Run `npm run dev` or `yarn dev` to run the project.
7. Project will start at http://localhost:5173

> If you are on Windows and getting lot of ESLint errors due end of line characters CRLF please run the below command to fix it.

```sh
npm run format
```

> **NOTE**: If you face issue installing with `npm` trying using `yarn v1.22.*`



---

> In case of any queries feel free to contact us
