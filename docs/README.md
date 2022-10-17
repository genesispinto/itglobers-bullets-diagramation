
<h1 align="center"> Bullets diagramation </h1>

Es un contexto de elementos que renderizaran los niveles inferiores de navegacion dentro de una lista de bullets con imagenes



____________
## :hammer:Configuración del proyecto

- :pushpin: `Paso 1 - Configuración Básica`: 
  Asegurarse que esta en el ambiente correcto de vtex

- :pushpin: `Paso 2 - Clone estos archivos` con el link proporcionado en el repositorio 
- :pushpin: `Paso 3 - Instalacion de nodos de react`: 
  Ingresar a la carpeta de react ejecutando el comando en consola ```$ cd react```
  y dentro de esta instalar lo siguiente: <br>
  :pencil2:`1` Nodos de react ejecutando en consola el comando ```$ yarn``` <br>
  :pencil2:`2` Paquete `css-handles` para los estilos basicos ```$ @vtex/css-handles```
- :pushpin: `Paso 4 - Volver a carpeta principal del proyecto y linkear app a su Tienda`: 
  Ejecute comando en consola ```$ vtex link```
  ________
## :key: Listado de apps que están funcionando en la tienda
   1. "vtex.native-types": "0.x",
   2. "vtex.list-context": "0.x",
   3. "vtex.device-detector": "0.x",
   4. "vtex.css-handles": "0.x"
__________
## :key:Dependencias

1. Store-theme: Coloque esta dependencia en el archivo `manifest.json` de su tienda


  "dependencies": 
  {
  ```ruby
    "itglobers.bullets-diagramation": "0.x"
  ```
  }

## :key:Manera de llamar al componente: 
Ejemplo:
```
"flex-layout.row#example":{
    "children":["list-context.bullet-group"]
    }
```

## :black_nib:Autor

 [<sub>Génesis Pinto</sub>](https://github.com/genesispinto) 
