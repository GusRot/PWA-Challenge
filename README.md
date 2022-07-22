### Version of README [English](./README-en.md)

<div style="display: flex; gap:1rem;">
<a href="#">
<img alt="Repository size" src="https://img.shields.io/github/repo-size/GusRot/PWA-Challenge">
</a>
<a href="#">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/GusRot/PWA-Challenge?color=%2304D361">
</a>
</div>

# PWA-CheckoutStep-Desafio

## Requisitos do Desafio

<div>
    <img style="height: 120px" src="images/challengeRequisites.png">
</div>
1. A barra de progresso deve corresponder à cor primária do site <br>
2. O último checkpoint não é renderizado, você preenche a barra de progresso até o final. Quando você tem etapas de envio, cobrança e sucesso, você renderiza dois pontos de verificação para envio e cobrança, mas na última (terceira) etapa você preenche a barra de progresso até o final para que ela seja concluída <br>
3. Os componentes devem ser reutilizáveis. Todos os dados são fornecidos no aplicativo. Ele deve suportar qualquer quantidade de etapas. Deve ser possível retirar este componente e colocá-lo em qualquer outro projeto sem modificação <br>
4. Ao concluir uma etapa, a barra de progresso deve preencher o próximo segmento com animação <br>

## Resultados do Desafio

1- Minha customização está localizada na pasta `src` como qualquer aplicativo PWA.

<!-- [![Watch the video](https://img.youtube.com/vi/KTequZCtP1c/maxresdefault.jpg)](https://youtu.be/KTequZCtP1c) -->

## Instalação

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
