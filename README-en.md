### Version of README [Portuguese](./README.md)

<div style="display: flex; gap:1rem;">
<a href="#">
<img alt="Repository size" src="https://img.shields.io/github/repo-size/GusRot/PWA-Challenge">
</a>
<a href="#">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/GusRot/PWA-Challenge?color=%2304D361">
</a>
</div>

# PWA-CheckoutStep-Challenge

## Challenge Requisites

<div>
    <img style="height: 120px" src="images/challengeRequisites.png">
</div>
1. Progressbar must match the website primary color <br>
2. The last step checkpoint doesn't render, you fill the progressbar to the end instead. So when you have shipping, billing and success steps, you render two checkpoints for shipping and billing, but on the last (third) step you fill the progressbar to the end so it becomes completed <br>
3. Components should be reusable. No hardcode is allowed, all data is provided in the app. It should support any amount of steps. It should be possible to take this component out and put it to any other ScandiPWA project without any modifications <br>
4. When you complete a step, the progressbar should fill the next segment with animation <br>

## Challenge Results

1- My customizaion is located at `src` folder like any PWA aplication.

<!-- [![Watch the video](https://img.youtube.com/vi/KTequZCtP1c/maxresdefault.jpg)](https://youtu.be/KTequZCtP1c) -->

## Installation

yarn create scandipwa-app `my-app` <br>
***Enter to the project directory*** <br>
cd `my-app` <br>
***Downgrade ScandiPWA*** <br>
yarn add @scandipwa/scandipwa@4.5.1 <br>
copy `composer.json` content from this repository to your own <br>
***config*** <br>
open `package.json`, find the `proxy` field and paste **<https://demo100-ors-1588667385-swpwa451-zco.scandipwa.cloud/>** <br>
use `yarn` or `npm i` command.

This package contains new ScandiPWA theme sources. Your parent theme is `@scandipwa/scandipwa`.

## Available Scripts

`npm run start` or `yarn start`
**Starts the development server.**

`npm run build` or `yarn build`
**Bundles the app into static files for production.**
