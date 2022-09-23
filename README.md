<div align="center">

# Github finder

![Guess the champ logo image](/assets/images/readme-logo.png)

### RZLT Technical case task

[📀 The project](#-the-project) &emsp;|&emsp;
[🧰 Tech stack](#-tech-stack) &emsp;|&emsp;
[📝 Testing](#-testing)

</div>

## 📀 The project

This is a Github profile finder where you can search for a github username to see the user's profile and repositories. Also there is a history page where you can see all searched users and repeat the search.

<br>

![Project main demo image](/assets/images/main-demo-image.png)

You can try the live version here: [gitfinder.radaeli.dev](https://gitfinder.radaeli.dev)

## 🧰 Tech stack

<a href="https://vitejs.dev/">
  <img width="64" height="64" src="/assets/icons/vite.png" alt="Vite logo"/>
</a>

<a href="https://reactjs.org/">
  <img width="64" height="64" src="/assets/icons/react.png" alt="React.js logo"/>
</a>

<a href="https://www.typescriptlang.org/">
  <img width="64" height="64" src="/assets/icons/ts.png" alt="Typescript Logo"/>
</a>

<a href="https://styled-components.com/">
  <img width="64" height="64" src="/assets/icons/styled.png" alt="Styled Components logo"/>
</a>

<a href="https://jestjs.io/">
  <img width="64" height="64" src="/assets/icons/jest.png" alt="Jest logo"/>
</a>

<a href="https://testing-library.com/docs/react-testing-library/intro">
  <img width="64" height="64" src="/assets/icons/testing-library.png" alt="Testing library logo"/>
</a>

<a href="https://mswjs.io/">
  <img width="64" height="64" src="/assets/icons/msw.png" alt="Mock Service Worker logo"/>
</a>

<br>

This project was created with [Vite](https://vitejs.dev/), [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/) and [Styled-Components](https://styled-components.com/).</p> For tests i'm using [Jest](https://jestjs.io/), [Testing Library](https://testing-library.com/docs/react-testing-library/intro) and [Mock Service Worker](https://mswjs.io/).

## 📝 Testing

Github api has a pretty low rate limit `(60 without authorization)` and as a solution for this problem I have implemented the [MSW](./src/mocks/handlers.ts) that can intercept http requests and return mocked data. There are 3 mocked users: `radaelilucca`, `github` and `facebook`. Search for this users will return the mocked data that you can find at `src/mocks/data/users.ts`. Any other search will hit the Github Api and return real data, decreasing the `x-ratelimit-remaining`. Also MSW helps a lot with tests using Jest.
