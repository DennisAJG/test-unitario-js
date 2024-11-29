# Use uma imagem base para Node.js
FROM node:14

# Crie e defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos de dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Exponha a porta 3000
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]