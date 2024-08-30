# app-proveedores
Rutas y controladores a desarrollar:
- users (usuarios)
- suppliers (proveedores)
- products (productos)
- tickets (comprobantes)
- sucursal 
Se debe crear un CRUD (crear, leer, actualizar y eliminar) para CADA entidad.

Definición de endpoints:
* post / (crear uno)
- get / (leer todos)
- get /:id (leer uno)
* patch /:id (modificar uno)
* delete /:id (eliminar uno)

Definición de controladores -> Definir una clase con métodos estáticos, los cuales sus nombres representaran la ACCIÓN a realizar con el recurso. Ej: create(){}, read, readOne(id){}, update(id, data){}, delete(id){}