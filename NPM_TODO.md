# NPM Publishing Setup

This document outlines the necessary steps to configure your environment for publishing packages to the npm registry using the new "Publish to npm" GitHub Actions workflow.

These steps only need to be completed once.

## 1. Create an npm Account

If you don't already have an npm account, you'll need to create one.

*   Go to [https://www.npmjs.com/signup](https://www.npmjs.com/signup) and create a new account.

## 2. Generate an npm Access Token

The workflow requires an access token to authenticate with the npm registry on your behalf.

*   Navigate to [https://www.npmjs.com/](https://www.npmjs.com/) and log in to your account.
*   Click on your profile picture in the top-right corner and select **Access Tokens**.
*   Click the **Generate New Token** button and select the **Automation** token type. This type is specifically designed for CI/CD workflows.
*   Give the token a descriptive name, like `wasm-forge-release`.
*   Click **Generate Token**.
*   **Important:** Copy the generated token immediately. You will not be able to see it again after you leave this page.

## 3. Create a GitHub Secret

The access token must be stored securely as a GitHub secret.

*   Go to your `wasm-forge` repository on GitHub.
*   Click on the **Settings** tab.
*   In the left sidebar, navigate to **Secrets and variables > Actions**.
*   Click the **New repository secret** button.
*   For the **Name**, enter `NPM_TOKEN`.
*   In the **Value** field, paste the npm token you generated in the previous step.
*   Click **Add secret**.

Once these steps are complete, the "Publish to npm" workflow will be ready to use.
