# GYF
# Getting database  with sqlserver

CREATE TABLE [dbo].[Producto](
	[id] [int] NULL,
	[Descripcion] [nvarchar](25) NULL,
	[Precio] [float] NULL,
	[Categoria] [nvarchar](50) NULL,
	[FechaCarga] [datetime2](7) NULL
) ON [PRIMARY]

insert into Producto(id,Categoria, Precio,FechaCarga,Descripcion)
values(1,'PRODDOS',10,CONVERT(datetime,'2019-10-25'),'PRODUCTO 1')

insert into Producto(id,Categoria, Precio,FechaCarga,Descripcion)
values(2,'PRODUNO',60,CONVERT(datetime,'2019-10-21'),'PRODUCTO 2')

insert into Producto(id,Categoria, Precio,FechaCarga,Descripcion)
values(3,'PRODDOS',5,CONVERT(datetime,'2019-10-22'),'PRODUCTO 3')

insert into Producto(id,Categoria, Precio,FechaCarga,Descripcion)
values(4,'PRODUNO',5,CONVERT(datetime,'2019-10-29'),'PRODUCTO 4')

insert into Producto(id,Categoria, Precio,FechaCarga,Descripcion)
values(2,'PRODDOS',15,CONVERT(datetime,'2019-09-11'),'PRODUCTO 5')

en el archivo de conexión a datos se encuentra en “appsettings.json”

"ConnectionStrings": {
    "APIDBConection": "Data Source=JURNB-0156\\MSSQLSERVER01 ;Initial catalog=GYF;Integrated Security=SSPI"
    
  }

## Available Backend


El proyecto utilice Core 5 con patrón de diseño mediador, EntityFramework, Automapper.
Por el momento solo utilizo el método “GetbyPresupuest”
Deje preparado el GetAll y el ProductoNew 


### `run Nuget`
mediador, EntityFramework, Automapper
Runs the app in the development mode.\

Open [https://localhost:44351](https://localhost:44351) to view it in the browser.

## Available Frontend

## Available Scripts

In the project directory, you can run:
### `npm install`

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

