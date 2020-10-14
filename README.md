# Github App




Description

Application made with Expo that makes requests for Github API to get information about the user and their repositories.

The application contains four screens, where you can view information about the authenticated user, as well as list all your available repositories and individual information for each one.

All requests are made with GraphQL and authentication is currently done through a token generated by the Github platform itself (remember this is a demo app).


Installation
If you want to build the Github App, you need to have expo installed in your machine, for more details on how to install Expo check their [documentation](https://docs.expo.io/get-started/installation/)

Addionatily to Expo, you need to inform the GitHub token in a file token.js at the root directory.
Follow the steps in [Creating a personal access token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) in order to get your personal token.


```bash
git clone https://github.com/XXXX
cd rn-app
echo "export default myToken= <Insert your personal token here>" > token.js
export start
```

