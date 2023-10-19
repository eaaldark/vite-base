#Imagen del sistema para el proyecto
FROM node:18.18.2-alpine

#Usuario predeterminado dentro del contenedor
#Nombre del usuario viene de la imagen de node alpine
ARG USERNAME=node

#En su terminal de linux ejecute el comando "id" sin comillas
#Mire si su usuario y grupo de usuario pertenencen al mismo grupo
#UID y GID, esto con la razon de que el contenedor no cree archivos
#Duenos del usuario root si no por un usuario comun
ARG USER_UID=1000
ARG USER_GID=$USER_UID

#Se instalara el paquete shadow que permitira actualizar los permisos
#de crear archivos y que pertenezca al grupo de usuarios igual al
#sistema operativo host
RUN apk --no-cache add shadow bash

#Se estableceran los permisos para el usuario
RUN groupmod --gid $USER_GID $USERNAME \
    && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
    && chown -R $USER_UID:$USER_GID /home/$USERNAME

#Se instala la libreria de desarrollo de next para poder ejecutar de forma global react
#para los respectivos comandos
RUN npm install -g create-vite@latest 

#Se trabajara sobre esta ruta
WORKDIR /app

#Usuario predeterminado dentro del contenedor
USER $USERNAME
