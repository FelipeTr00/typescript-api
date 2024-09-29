#  Get Started

Este guia irá ajudá-lo a configurar o projeto localmente usando **Yarn** e **Sucrase** com **TypeScript**. Siga os passos abaixo para começar!

## ⚙️ Requisitos

- **Node.js**: ![Node.js](https://img.shields.io/badge/-v14+-339933?logo=node.js&logoColor=white)
- **Homebrew** (para Linux/Mac): ![Homebrew](https://img.shields.io/badge/-Homebrew-FF7139?logo=homebrew&logoColor=white)

## 0. Instalando YARN via Brew 📦

Para instalar o **Yarn** usando o **Homebrew** no macOS ou em distribuições Linux que suportam o Brew:

1. Certifique-se de que o **Homebrew** está instalado. Se não estiver, você pode instalá-lo executando:

```zsh
brew install yarn;
```

## ✅ 1. Inicializando

```zsh
yarn add -D typescript sucrase;
```

### 1.1 Add "scripts" ao packeage.json
```zsh
 "scripts": {
    "dev": "sucrase-node src/index.ts"
    },
```
Test => index.ts
```
const hi: string = "Hello, World!";

console.log(hi);
```
Exec 
```
yarn dev;
```
### Hello, world! executado com sucesso! 😎

## ✅ 2. Configurando o Server

Nodemon
```zsh
yarn add -D nodemon
touch nodemon.json;
```

#### Alterar para server.ts

```
$ yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

```
$ yarn add express cors mongoose
```

### Thanks to

https://www.youtube.com/watch?v=aTf8QTjw4RE

