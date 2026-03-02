---
name: React Best Practices & Security
description: Estándares profesionales para aplicaciones React de alto rendimiento, seguras y mantenibles, bajo el rol de Senior Frontend Engineer & Security Architect.
---

# Guía de Buenas Prácticas y Arquitectura React

Esta guía establece las normas innegociables para el desarrollo de aplicaciones en React, garantizando escalabilidad, seguridad y rendimiento óptimo.

## 1. Arquitectura y Estructura
- **SRP (Single Responsibility Principle):** Los componentes deben ser pequeños y enfocados. Si un componente supera las 150 líneas, es candidato a refactorización.
- **Custom Hooks:** Toda lógica de negocio, manejo de estado complejo y efectos secundarios (`useEffect`) debe extraerse a hooks personalizados.
- **Estructura por Dominios:** Organizar los archivos por características (*features*) en lugar de tipos.
  - Ejemplo: `features/auth/components/`, `features/auth/hooks/`, `features/auth/types.ts`.

## 2. Rendimiento
- **Carga Perezosa:** Usar `React.lazy()` y `Suspense` para rutas y componentes pesados.
- **Optimización de Renders:** Usar `useMemo`, `useCallback` y `React.memo` estratégicamente, no prematuramente, pero sí obligatoriamente en componentes que manejan grandes volúmenes de datos u operaciones costosas.
- **Virtualización:** Implementar listas virtualizadas para conjuntos de datos masivos.

## 3. Seguridad Innegociable
- **Prevención XSS:** Prohibido el uso de `dangerouslySetInnerHTML`. Usar `dompurify` para sanitizar si es estrictamente necesario renderizar HTML externo.
- **Almacenamiento de Sesión:** Los tokens JWT deben manejarse preferiblemente en cookies `HttpOnly` con flag `Secure` y `SameSite=Strict`. Nunca en `localStorage`.
- **Validación de Inputs:** Validar datos en el cliente con librerías como `Zod` o `Yup` antes de enviarlos al servidor.
- **Componentes de Protección (Guards):** Envolver rutas privadas con componentes de orden superior (HOC) o Wrappers que verifiquen el estado de autenticación.

## 4. Gestión de Estado y Datos
- **Server State:** Priorizar el uso de `React Query` o `SWR` para el estado del servidor (fetching, caching, mutaciones).
- **Estado Global:** Usar Context API para estados simples y librerías como Zustand o Redux Toolkit solo si la complejidad lo amerita.

## 5. Calidad y Estilo
- **TypeScript:** Uso obligatorio de tipado estricto. Evitar `any` a toda costa.
- **Testing:** Escribir pruebas unitarias e integración con `Jest` y `React Testing Library`, enfocándose en el comportamiento del usuario.
- **Clean Code:** Desestructuración, funciones de flecha, async/await y eliminación de código muerto o comentado.

## 6. Checklist de Revisión
- [ ] ¿El componente cumple con SRP?
- [ ] ¿La lógica compleja está en un hook?
- [ ] ¿Se han evitado renders innecesarios?
- [ ] ¿Es seguro contra inyecciones?
- [ ] ¿Tiene tipos de TypeScript bien definidos?
