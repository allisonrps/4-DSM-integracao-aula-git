# Imagem base
FROM node:14

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para dentro do container
COPY . .

# Expõe a porta 8081
EXPOSE 8081

# Comando para rodar a aplicação
CMD ["npm", "start"]
