<div align="center">
  <img src="./.github/logo.svg">
</div>

<br />
<p align="center">
  <a href="#the-solution">Solution</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

## The Solution

<div align="center">
  <img src="./.github/screenshot.png">
</div>

The project was developed during Ignite (ReactJS) bootcamp from [Rocketseat](http://rocketseat.com.br/), where fundamentals concepts with NextJS, back-end with NextJS and Front-end JamStack using checkout and CMS services were used.

You can view the project accessing the following link https://theignews.vercel.app.

## Technologies
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](http://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [NextAuth](https://next-auth.js.org/)
- [FaunaDB](https://fauna.com/)
- [Stripe](https://stripe.com/)
- [Prismic CMS](https://prismic.io/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [axios](https://github.com/axios/axios)
- [Yarn](https://yarnpkg.com/)

## How to use

### Required Environment Variables

- NEXTAUTH_URL
- STRIPE_API_KEY
- NEXT_PUBLIC_STRIPE_PUBLIC_KEY
- STRIPE_WEBHOOK_SECRET
- STRIPE_SUCCESS_UR
- STRIPE_CANCEL_URL
- GITHUB_CLIENT_ID
- GITHUB_CLIENT_SECRET
- FAUNADB_KEY
- PRISMIC_ENDPOINT
- PRISMIC_ACCESS_TOKEN

### Repository clone
To download the project on your machine, run the command below in the terminal or [download](https://github.com/gustavojuneo/ignews/archive/main.zip).

```bash
$ git clone https://github.com/gustavojuneo/ignews/.git
```

### Installing the Dependencies

To be able to start the application it will be necessary to install the project dependencies, run the command below in the directory to install all the necessary dependencies.

```bash
$ yarn install
```
ou

if you don't use Yarn you can use npm, just remove the yarn.lock file from inside the folder and run the following command:
```bash
$ npm install
```
### Starting the Application

To start the application use the command:

```bash
$ yarn dev
```

The application will run by default on the route:
https://localhost:3000