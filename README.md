# 🌿 Nature App

Aplicación web desarrollada con **Angular** y **.NET 8 Web API** que permite explorar lugares naturales de México mediante un mapa interactivo, galerías de fotos y fichas detalladas de cada sitio, incluyendo sus senderos, amenidades y coordenadas geográficas.

---

## 🧭 Descripción General

**Nature App** conecta una interfaz moderna en Angular con una API REST desarrollada en **.NET 8 (C#)**.  
El objetivo es ofrecer una experiencia de exploración natural intuitiva, visual y educativa.

### 🎯 Objetivos principales:
- Visualizar lugares naturales en un **mapa interactivo de Mapbox**.  
- Consultar el detalle completo de cada lugar: descripción, categoría, altitud, accesibilidad, horario y cuota de entrada.  
- Mostrar **galerías de fotos, amenidades y senderos** asociados.  
- Permitir navegación lateral y mini mapa por cada lugar.  

---



## 🧱 Arquitectura del Proyecto

El proyecto está compuesto por dos módulos principales:  
- **Backend (.NET 8 Web API)**  
- **Frontend (Angular 17+)**

---

## 📁 Estructura del Proyecto

| Carpeta / Archivo | Descripción |
|--------------------|-------------|
| **backend/** | Proyecto .NET Web API |
| ├── Controllers/ | Endpoints principales (Places, Trails, Photos...) |
| ├── Models/ | Entidades del dominio |
| ├── DTOs/ | Objetos de transferencia de datos |
| ├── Repositories/ | Acceso a datos y consultas |
| └── Program.cs | Configuración base del servidor |
| **frontend/** | Proyecto Angular |
| ├── core/models/ | Interfaces TypeScript |
| ├── core/services/ | Servicios HTTP para la API |
| ├── pages/home/ | Mapa principal con marcadores |
| ├── pages/place-detail/ | Vista detallada del lugar |
| ├── pages/trails/ | Lista de senderos |
| ├── shared/components/slide-bar/ | Sidebar de navegación |
| ├── environments/ | Configuración (API, Mapbox) |
| └── assets/ | Recursos e íconos globales |

## 🧪 Endpoints de la API NatureAPI

A continuación se listan los principales endpoints disponibles en la API desarrollada en **.NET 8 Web API**.  
Todos responden en formato **JSON (application/json)**.

---

### 🌍 Places
| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| **GET** | `/api/places` | Obtiene la lista completa de lugares registrados. |
| **GET** | `/api/places/{id}` | Devuelve el detalle de un lugar específico por su ID. |
| **POST** | `/api/places` | Crea un nuevo lugar (requiere cuerpo JSON con datos del lugar). |


---

### 🥾 TrailsController
| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| **GET** | `/api/trails` | Lista todos los senderos disponibles. |
| **GET** | `/api/trails/{id}` | Muestra el detalle de un sendero específico. |

---

## ⚙️ Tecnologías Utilizadas

### 🖥️ Frontend (Angular)
- **Angular 17+**
- **TypeScript**
- **Mapbox GL JS**
- **NG-Zorro** (componentes UI)
- **SCSS modular**

### 🧩 Backend (.NET)
- **ASP.NET Core 8 Web API**
- **Entity Framework Core**
- **SQL Server**
- **DTOs y controladores REST**
- **CORS habilitado para Angular**

---

## 🌍 Funcionalidades Principales

✅ Mapa interactivo con todos los lugares geolocalizados.  
✅ Vista de detalle con fotos, horarios, altitud y accesibilidad.  
✅ Amenidades visualizadas como **chips (tags)**.  
✅ Senderos del lugar con distancia, dificultad y tiempo estimado.  
✅ Mini mapa centrado en el punto del lugar dentro del detalle.  
✅ Interfaz moderna, clara y responsive.  

---

## 🚀 Instalación y Ejecución

### 🔹 Backend (.NET 8)
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/NatureApp.git
   cd NatureApp/backend



