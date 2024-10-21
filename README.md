# Back-End Optimal Technology

Este proyecto consiste en la creación de una API RESTful que gestiona los datos de un formulario básico, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre elementos como productos. El servicio está diseñado para interactuar con un frontend que proporciona una interfaz simple para el manejo de datos.

## Tecnologías

- **Backend**: Node.js con Express
- **Base de Datos**: MongoDB Atlas
- **Otros**: Docker

## Instalación

1. **Clona el repositorio**:
   - git clone https://github.com/DelgadoBrayan/Back_End_Optimal_Technology.git
   - cd Back_End_Optimal_Technology

Despliegue
El servicio API está desplegado en Render y es accesible en la siguiente URL:
- [API Desplegada](https://back-end-optimal-technology.onrender.com/)
## Operaciones Disponibles
# La API permite las siguientes operaciones:

- Listar todos los elementos: Realiza una solicitud GET a /api/products.
- Listar un elemento por ID: Realiza una solicitud GET a /api/products/:id.
- Agregar un nuevo elemento: Realiza una solicitud POST a /api/products con el cuerpo adecuado.
- Actualizar un elemento existente: Realiza una solicitud PUT a /api/products/:id con los datos actualizados en el cuerpo.
- Eliminar un elemento: Realiza una solicitud DELETE a /api/products/:id.

