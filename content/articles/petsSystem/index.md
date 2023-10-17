---
title: "Pets System"
description: "Sistema de gestion de veterinaria"
date: "2023-03-03"
banner:
    src: '../../images/PetsSystem.png'
    alt: 'Curriculum creator'
    caption: ''
categories:
  - "Propio"
keywords:
  - "Sistema"
  - "veterinaria"
  - "mascotas"
  - "gestion"
---
<div align="center">

  <h2 align="center">Pets System</h3>

  <p align="center">
   Sistema de gestion de veterinaria con Nextjs 13
  <br/>
  <ul>
  <li><a href="https://sistema-veterinaria-frontend.vercel.app" target="_blank"><bold>Preview</bold></a></li>
  <li><a href="https://github.com/sebastian-contreras/SistemaVeterinariaBackend" target="_blank"><bold>Backend Github</a></bold>
</li>
  <li><a href="https://github.com/sebastian-contreras/SistemaVeterinariaFrontend" target="_blank"><bold>Frontend Github</bold></a></li>
  </ul>

  <br/>


  <h3 align="center">Frontend Pets System</h3>

  <p align="center">
   Frontend de Sistema de gestion de veterinaria con Nextjs 13
  
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyecto</a>
    </li>
    <li><a href="#pruebalo">Pruebalo</a></li>
    <li><a href="#imagenes">Imagenes</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre el proyecto<a name="Sobre-el-proyecto"></a>

El frontend de Pet System es una aplicación web desarrollada con Next.js 13. El objetivo de esta aplicación es facilitar la gestión de una clínica veterinaria, permitiendo registrar y consultar información sobre clientes, veterinarios, mascotas y citas.

La aplicación cuenta con diferentes tipos de usuarios, cada uno con un perfil propio y un nivel de acceso distinto. Los clientes pueden ver los turnos disponibles de los veterinarios, reservar citas para sus mascotas y acceder al perfil de cada una de ellas, donde se muestra una tabla con las citas pendientes y el historial clínico ordenado cronológicamente. Los veterinarios pueden ver los turnos que tienen asignados, acceder al perfil de las mascotas que atienden y entregar diagnósticos de sus citas. Los administradores pueden crear, editar y borrar todos los atributos del sistema, así como asignar credenciales a los veterinarios. Además, los administradores tienen un dashboard que muestra estadísticas sobre la clínica, como la cantidad de mascotas por tipo, por sexo, las ganancias mensuales, la cantidad de citas y el ranking de veterinarios. La aplicación también tiene una sección de clientes donde se puede filtrar la tabla por paginación o búsqueda.

El frontend de Pet System utiliza Next.js 13 para aprovechar las ventajas de esta librería, como el renderizado híbrido, el soporte para TypeScript, la optimización de imágenes y el uso de API routes. También utiliza NextAuth.js para integrar la autenticación a travez de credenciales, y para manejar los roles y permisos de los usuarios. Por último, utiliza Bootstrap para crear una interfaz responsive, moderna y consistente, usando componentes como botones, tarjetas, tablas y gráficos.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Usuarios

#Administrador
- user: administrador
- password: administrador


#Veterinario
- user: veterinario
- password: veterinario

### Construccion<a name="Construccion"></a>

- NextJs 13
- Bootstrap
- Next-AuthJs
- React Google Chart
- Toast

<!-- GETTING STARTED -->
## Imagenes

![Dashboard Administrador](https://i.imgur.com/JjCpMjb.png)
![Dashboard Veterinario](https://i.imgur.com/FMAaRit.png)
![Perfil Cliente](https://i.imgur.com/NKCGy3y.png)
![Perfil Mascota](https://i.imgur.com/iGF5Tei.png)
![Tabla clientes](https://i.imgur.com/cbGLi8y.png)


<div align="center">
  <a href="[https://github.com/othneildrew/Best-README-Template](https://github.com/sebastian-contreras/)">
    <img src="https://w7.pngwing.com/pngs/589/438/png-transparent-cat-paw-kitten-dog-cat-animals-pet-paw.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Backend Pets System</h3>

  <p align="center">
   Backend de Sistema de gestion de veterinaria
  
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyecto</a>
      <ul>
        <li><a href="#construccion">Contruido con: </a></li>
        <li><a href="#base-de-datos">Base de datos </a></li>
      </ul>
    </li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#contacto">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre el proyecto<a name="Sobre-el-proyecto"></a>

El backend de mi proyecto, denominado "Pet System", ha sido desarrollado utilizando Java Spring Boot y utiliza JPA Hibernate con una base de datos MySQL. Este sistema ofrece autenticación de usuarios a través de JWT con Roles y abarca todos los aspectos de una clínica veterinaria, incluyendo la gestión de clientes, veterinarios, mascotas, citas, historias clínicas y próximamente también el seguimiento de insumos, compras y ventas realizadas por los empleados. Además, proporciona estadísticas relacionadas con ingresos, mascotas y un ranking de veterinarios.
<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Construccion<a name="Construccion"></a>

- Maven
- Spring Web
- Spring Devtols
- MYSQL Drivers
- Lombok
- Spring Data JPA
- JWT
      
### Base de datos<a name="Base-de-datos"></a>

Esta API utiliza Base de datos relacionales cuyo gestor de base de datos elegido es MYSQL, El diagrama fisico de la base de datos es el siguiente:

![Diagrama fisico de Base de datos](https://github.com/sebastian-contreras/SistemaVeterinariaBackend/blob/main/DisenoBD/modeloArreglado.png?raw=true)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Endpoints<a name="Endpoints"></a>

### Métodos GET

| Endpoint                           | Descripción                                           |
| ---------------------------------- | ----------------------------------------------------- |
| `/api/clientes`                     | Obtiene la lista de clientes.                        |
| `/api/empleados`                    | Obtiene la lista de empleados.                       |
| `/api/veterinarios`                  | Obtiene la lista de veterinarios.                    |
| `/api/clientes/{dni}`               | Obtiene un cliente por su número de identificación. |
| `/api/empleados/{dni}`              | Obtiene un empleado por su número de identificación.|
| `/api/veterinarios/{dni}`            | Obtiene un veterinario por su número de identificación. |
| `/api/mascotas`                      | Obtiene la lista de mascotas.                        |
| `/api/mascotas/{dni}`               | Obtiene las mascotas de un cliente por su número de identificación. |
| `/api/mascotas/perfil/{id}`          | Obtiene el perfil de una mascota por su ID.          |
| `/api/citas`                        | Obtiene la lista de citas.                           |
| `/api/citas/{dni}`                 | Obtiene las citas de un cliente por su número de identificación. |
| `/api/citasveterinario/{dni}`       | Obtiene las citas de un veterinario por su número de identificación. |
| `/api/citaspendiente`               | Obtiene la lista de citas pendientes.                |
| `/api/citaspendiente/{dni}`        | Obtiene las citas pendientes de un cliente por su número de identificación. |
| `/api/citasmascota/{id}`            | Obtiene las citas de una mascota por su ID.          |
| `/api/historia/{id}`                | Obtiene la historia clínica de una mascota por su ID. |
| `/api/estadistica/mascota`                     | Obtiene estadísticas relacionadas con las mascotas.  |
| `/api/estadistica/ganancia`                    | Obtiene estadísticas relacionadas con las ganancias. |
| `/api/estadistica/gananciavet`                 | Obtiene estadísticas de ganancias de un veterinario. |
| `/api/estadistica/gananciavet/{dni}`           | Obtiene estadísticas de ganancias de un veterinario por su número de identificación. |
| `/api/estadistica/topvet`                      | Obtiene el ranking de veterinarios en función de sus ganancias. |

### Método POST

| Endpoint                           | Descripción                                           |
| ---------------------------------- | ----------------------------------------------------- |
| `/api/persona/save`                  | Crea una nueva persona (cliente, empleado o veterinario). |
| `/api/mascotas/save`                 | Crea una nueva mascota.                              |
| `/api/citas/save`                    | Crea una nueva cita.                                 |
| `/auth/register`                     | Registro de usuarios.                                |
| `/auth/login`                        | Autenticación de usuarios.                           |
### Método DELETE

| Endpoint                           | Descripción                                           |
| ---------------------------------- | ----------------------------------------------------- |
| `/api/persona/ID`                    | Elimina una persona por su ID.                       |
| `/api/mascotas/ID`                   | Elimina una mascota por su ID.                       |
| `/api/citaspendiente/id`             | Elimina una cita pendiente por su ID.                |

### Método PUT

| Endpoint                           | Descripción                                           |
| ---------------------------------- | ----------------------------------------------------- |
| `/api/historia/createhistoria/id`    | Convierte una cita en una historia clínica.          |
