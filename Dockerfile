# Use a imagem base do nginx
FROM nginx:alpine

# Copia os arquivos do projeto para o diretório padrão do nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80 para acessar o servidor
EXPOSE 8081

# Comando padrão para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]

