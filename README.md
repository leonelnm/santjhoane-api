# Configuración Desarrollo
1. Utilizar fichero `.env.example`, copiar o cambiar el nombre a `.env` para tener el mismo fichero, cambiar las variables de entorno como corresponda.
2. Instalar todos los paquetes
3. Cargar/construir bbdd
~~~sh
npm run prisma:migrate:dev
~~~
4. Levantar entorno
~~~sh
npm run dev
~~~