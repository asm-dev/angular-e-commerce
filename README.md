# Tienda Online - Proyecto Angular

Este proyecto forma parte de una actividad del máster de desarrollo web avanzado, centrada en la aplicación de conceptos clave del framework Angular. El objetivo principal es implementar una tienda online que consuma datos de una API externa utilizando un enfoque moderno basado en _standalone components_. Entre los requisitos de la actividad se incluía la creación de rutas dinámicas, el uso de un servicio para gestionar la obtención de datos desde una API pública, la creación y uso de _pipes_ personalizadas, así como la estructuración del proyecto siguiendo buenas prácticas tanto a nivel de estilo como de arquitectura.

Además, se aprovecha para hacer un **deploy** de esta POC en **Firebase**, puedes verlo en [este link](https://poc-angular-shop.web.app/).

## Estructura funcional del proyecto

El proyecto está organizado en componentes independientes que reflejan una arquitectura clara basada en vistas. Se ha utilizado el sistema de rutas de Angular para navegar entre las distintas secciones de la aplicación de forma dinámica.

### Servicio de datos

Toda la interacción con la API se realiza mediante un servicio centralizado (`ProductService`). Este servicio utiliza `HttpClient` para realizar peticiones HTTP a los diferentes endpoints expuestos por la API de Fake Store. De este modo, el servicio encapsula la lógica de acceso a datos y facilita su reutilización por parte de los componentes.

Las rutas que se consumen desde el servicio son:

- `/products/categories`: devuelve un array de strings con los nombres de las categorías disponibles de productos
- `/products/category/:category`: devuelve todos los productos de una categoría concreta
- `/products/:id`: devuelve los detalles de un producto en concreto

### Componentes

- `CategoriesComponent`: muestra las categorías disponibles en la API. Cada categoría se presenta como un botón que redirige al listado de productos correspondientes.
- `ProductsComponent`: muestra un grid de productos pertenecientes a una categoría. Cada producto contiene una imagen, un título, un precio y un botón para acceder a su vista detallada.
- `ProductDetailComponent`: presenta información completa sobre un producto concreto, incluyendo la descripción, la categoría a la que pertenece, el precio y la imagen correspondiente.

### Pipes personalizadas

Se ha creado una pipe personalizada llamada `CapitalizePipe` que transforma la primera letra de una cadena a mayúscula, dejando el resto en minúsculas. Esta pipe se ha utilizado, por ejemplo, para mejorar la presentación del nombre de las categorías.

### Estilos y estructura visual

Los estilos se han implementado utilizando ficheros SCSS específicos para cada componente, con el fin de mantener una separación clara de responsabilidades y facilitar el mantenimiento. Se ha utilizado una tipografía moderna, una paleta de colores neutra con detalles en azul oscuro, y un sistema de diseño basado en tarjetas (_cards_) para presentar los productos de manera clara y coherente. La estructura visual se ha desarrollado con técnicas como _Flexbox_ y _Grid_, asegurando una presentación equilibrada y centrada tanto en escritorio como en pantallas reducidas.

## Posibles ampliaciones

Este proyecto puede extenderse fácilmente para incluir funcionalidades como:

- Gestión de un carrito de compra con almacenamiento en local o estado compartido
- Añadir paginación o carga por scroll
- Agregar filtros avanzados por precio o categoría
- Implementar un sistema de autenticación y login para simular una experiencia real de e-commerce
- Despliegue continuo con Firebase Hosting, GitHub Actions u otras plataformas
