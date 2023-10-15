---
title: "Curriculum Creator"
description: "Plataforma de Creación y Gestión de Perfiles Profesionales "
date: "2023-03-03"
banner:
    src: '../../images/curriculum.png'
    alt: 'Curriculum creator'
    caption: ''
categories:
  - "Propio"
keywords:
  - "Sistema"
  - "curriculum"
  - "argentina programa"
  - "gestion"
---
<div align="center">
    <img src="https://github.com/sebastian-contreras/Curriculum-Angular/blob/main/imagenes/argprograma.png?raw=true" alt="Logo" width="80" height="80">

  <h2 align="center">Curriculum Creator Argentina Programa</h3>

  <p align="center">
   Sistema de gestion de veterinaria con Nextjs 13
  <br/>
  <ul>
  <li><a href="https://hosting-angular-curriculum.web.app/" target="_blank"><bold>Preview</bold></a></li>
  <li><a href="https://github.com/sebastian-contreras/Curriculum-Backend" target="_blank"><bold>Backend Github</a></bold>
</li>
  <li><a href="https://github.com/sebastian-contreras/Curriculum-Angular" target="_blank"><bold>Frontend Github</bold></a></li>
  </ul>

  <br/>


  <h3 align="center">Frontend Curriculum Argentina Programa</h3>
  <p align="center">
   Frontend de proyecto integrador final del curso Argentina Programa:Plataforma de Creación y Gestión de Perfiles Profesionales  
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyecto</a>
    </li>
    <li><a href="#test">Test</a></li>
    <li><a href="#imagenes">Imagenes</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre el proyecto<a name="Sobre-el-proyecto"></a>

**Nombre del Proyecto:** Plataforma de Creación y Gestión de Perfiles Profesionales

**Descripción:**
El proyecto desarrollado como parte del trabajo integrador final del curso Argentina Programa es una plataforma web diseñada para ayudar a los usuarios a crear y gestionar sus perfiles profesionales de manera efectiva. La plataforma combina una serie de características esenciales para la construcción de un currículum vitae sólido y versátil. A continuación, se detallan las principales características de tu proyecto:

**Características del Proyecto:**

1. **Registro de Usuarios:** Los usuarios pueden registrarse en la plataforma proporcionando sus credenciales. Después del registro, se les proporciona un perfil en blanco que pueden personalizar.

2. **Gestión de Perfil:** Cada perfil de usuario consta de varias secciones, incluyendo una cabecera con una foto de perfil y una portada personalizables.

3. **Información Personal:** Los usuarios pueden agregar y editar su información personal, como nombre, contacto y ubicación.

4. **Educación:** Los usuarios pueden registrar su historial educativo, incluyendo imágenes de las instituciones y fechas relevantes.

5. **Experiencia Laboral:** Se permite a los usuarios detallar su experiencia laboral, destacando sus roles, empresas y periodos de empleo.

6. **Habilidades (Skills):** Los usuarios pueden enumerar sus habilidades profesionales y técnicas, lo que les permite mostrar sus competencias a posibles empleadores o contactos profesionales.

7. **Proyectos:** Los usuarios pueden describir proyectos en los que han trabajado, demostrando su experiencia y capacidades.

8. **Edición y Personalización:** Los usuarios pueden editar y personalizar cada sección de su perfil según sus necesidades y preferencias.

9. **Autenticación Segura:** Para garantizar la seguridad de la plataforma, se utiliza autenticación basada en Json Web Token (JWT), lo que permite a los usuarios acceder de forma segura a sus cuentas.

10. **Compartir Perfiles:** Los usuarios pueden compartir su perfil con otras personas a través de un enlace único, lo que facilita la distribución de su información profesional.

**Tecnologías Utilizadas:**

- **Backend:** Java 11 y Spring Boot para la lógica del servidor y la gestión de datos.

- **Frontend:** Angular para la interfaz de usuario, proporcionando una experiencia atractiva y fácil de usar.

- **Base de Datos:** MariaDB se emplea como sistema gestor de base de datos, lo que garantiza la persistencia de los datos de los usuarios.

**Resumen:**

Tu proyecto combina tecnología moderna con una amplia gama de características útiles para los usuarios que desean crear, gestionar y compartir sus perfiles profesionales. Además, el uso de JWT para la autenticación brinda un nivel adicional de seguridad. Este proyecto tiene el potencial de ser una herramienta valiosa para ayudar a las personas a destacarse en el mercado laboral y establecer conexiones profesionales sólidas.


### Construccion<a name="Construccion"></a>

- Angular 15.0.4.
- Bootstrap

### Test<a name="Imagenes"></a>

username: sebasfac2017@gmail.com
password: 123456


### Imagenes<a name="Imagenes"></a>
![register](https://github.com/sebastian-contreras/Curriculum-Angular/blob/main/imagenes/register.png?raw=true)
![login](https://github.com/sebastian-contreras/Curriculum-Angular/blob/main/imagenes/login.png?raw=true)
![Dashboard](https://github.com/sebastian-contreras/Curriculum-Angular/blob/main/imagenes/dash.png?raw=true)
![Dashboard Administrador](https://github.com/sebastian-contreras/Curriculum-Angular/blob/main/imagenes/dashout.png?raw=true)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

  <h3 align="center">Backend Curriculum Argentina Programa</h3>

  <p align="center">
   Backend de proyecto integrador final del curso Argentina Programa:Plataforma de Creación y Gestión de Perfiles Profesionales
  
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenidos</summary>
  <ol>
        <li><a href="#Base-de-datos">Base de datos</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

### Construccion<a name="Construccion"></a>

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- Maven
- Spring Web
- Spring Devtols
- MariaDB Drivers
- Lombok
- Spring Data JPA
- JWT
      
### Base de datos<a name="Base-de-datos"></a>

Esta API utiliza Base de datos relacionales cuyo gestor de base de datos elegido es MYSQL, El diagrama fisico de la base de datos es el siguiente:

![Diagrama fisico de Base de datos](https://github.com/sebastian-contreras/Curriculum-Backend/blob/main/BASEDEDATOS/diagrama.png?raw=true)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Endpoints<a name="Endpoints"></a>

| Método         | Ruta                          | Descripción                                       |
| -------------- | ----------------------------- | ------------------------------------------------- |
| `GET`          | `/users/{id}`                 | Obtiene la cabecera de un usuario.                |
| `PUT`          | `/users/{idusuario}`          | Permite editar la cabecera de un usuario.         |
| `GET`          | `/historias/{idusuario}`      | Obtiene la experiencia laboral o educación de un usuario. |
| `POST`         | `/historias`                  | Agrega experiencia laboral o educación a un usuario.  |
| `PUT`          | `/historias/{idhistorioa}`    | Permite editar la experiencia laboral o educación de un usuario. |
| `DELETE`       | `/historias/{idhistoria}`     | Borra una experiencia laboral o educación de un usuario. |
| `GET`          | `/proyects/{id}`              | Obtiene los proyectos de un usuario.             |
| `POST`         | `/proyects`                   | Agrega proyectos a un usuario.                   |
| `DELETE`       | `/proyects/{idpryecto}`       | Elimina un proyecto de un usuario.               |
| `PUT`          | `/proyects/{idpryecto}`       | Permite modificar un proyecto de un usuario.    |
| `GET`          | `/skills/{id}`                | Obtiene las habilidades (skills) de un usuario.  |
| `POST`         | `/skills`                     | Agrega habilidades a un usuario.                 |
| `DELETE`       | `/skills/{idskill}`           | Elimina una habilidad de un usuario.             |
| `PUT`          | `/skills/{idskill}`           | Permite modificar una habilidad de un usuario.   |


