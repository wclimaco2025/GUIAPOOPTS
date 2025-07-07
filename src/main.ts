import './style.css';
import { CabeceraPagina } from './clases/ejercicio1';
import { Calculadora } from './clases/ejercicio2';
import { CuentaBancaria } from './clases/ejercicio3';
import { Cancion } from './clases/ejercicio4';
import { Persona, Empleado } from './clases/ejercicio5';

// Funcion para ejecutar los ejercicios
        function ejecutarEjercicios() {
            const output = document.getElementById('output');
            let resultado = '<div class="section-title">💻 Consola de Salida</div>';
            
            try {
                // Ejercicio 1: Cabecera de Página
                resultado += '<div class="output-section">';
                resultado += '<div class="output-header">🎯 Ejercicio 1: Cabecera de Página</div>';
                resultado += '<div class="output-content">';
                const cabecera = new CabeceraPagina();
                cabecera.establecerTitulo("Mi Página Web");
                cabecera.establecerColor("#3498db");
                cabecera.establecerFuente("Arial, sans-serif");
                cabecera.establecerAlineacion("center");
                const propiedades = cabecera.obtenerPropiedades();
                resultado += `Propiedades configuradas:<br>`;
                resultado += `- Título: ${propiedades.titulo}<br>`;
                resultado += `- Color: ${propiedades.color}<br>`;
                resultado += `- Fuente: ${propiedades.fuente}<br>`;
                resultado += `- Alineación: ${propiedades.alineacion}`;
                resultado += '</div></div>';
                
                // Ejercicio 2: Calculadora
                resultado += '<div class="output-section">';
                resultado += '<div class="output-header">🧮 Ejercicio 2: Calculadora</div>';
                resultado += '<div class="output-content">';
                const calc = new Calculadora();
                resultado += `Operaciones matemáticas:<br>`;
                resultado += `- 10 + 5 = ${calc.sumar(10, 5)}<br>`;
                resultado += `- 10 - 5 = ${calc.restar(10, 5)}<br>`;
                resultado += `- 10 × 5 = ${calc.multiplicar(10, 5)}<br>`;
                resultado += `- 10 ÷ 5 = ${calc.dividir(10, 5)}<br>`;
                resultado += `- 2^3 = ${calc.potencia(2, 3)}<br>`;
                resultado += `- 5! = ${calc.factorial(5)}`;
                resultado += '</div></div>';
                
                // Ejercicio 3: Canción
                resultado += '<div class="output-section">';
                resultado += '<div class="output-header">🎵 Ejercicio 3: Canción</div>';
                resultado += '<div class="output-content">';
                const cancion = new Cancion("Bohemian Rhapsody", "Rock");
                cancion.autor = "Queen";
                resultado += `${cancion.mostrarInformacion()}<br>`;
                resultado += `Usando getters: Título = "${cancion.titulo}", Género = "${cancion.genero}"`;
                resultado += '</div></div>';
                
                // Ejercicio 4: Cuenta Bancaria
                resultado += '<div class="output-section">';
                resultado += '<div class="output-header">🏦 Ejercicio 4: Cuenta Bancaria</div>';
                resultado += '<div class="output-content">';
                const cuenta = new CuentaBancaria("Juan Pérez", 1000);
                resultado += `Estado inicial: ${cuenta.mostrarSaldo()}<br>`;
                cuenta.depositar(500);
                resultado += `Después de depositar $500: ${cuenta.mostrarSaldo()}<br>`;
                cuenta.retirar(200);
                resultado += `Después de retirar $200: ${cuenta.mostrarSaldo()}<br>`;
                resultado += `Transacciones:<br>${cuenta.mostrarTransacciones().replace(/\n/g, '<br>')}`;
                resultado += '</div></div>';
                
                // Ejercicio 5: Persona y Empleado
                resultado += '<div class="output-section">';
                resultado += '<div class="output-header">👥 Ejercicio 5: Persona y Empleado</div>';
                resultado += '<div class="output-content">';
                const persona = new Persona("Ana", "García", "Calle 123", "555-1234", 25);
                const empleado = new Empleado("Carlos", "López", "Avenida 456", "555-5678", 30, 2500);
                
                resultado += `Persona: ${persona.mostrarInformacion()}<br>`;
                resultado += `¿Es mayor de edad? ${persona.esMayorDeEdad() ? 'Sí' : 'No'}<br><br>`;
                resultado += `Empleado: ${empleado.mostrarInformacion()}<br>`;
                resultado += `¿Es mayor de edad? ${empleado.esMayorDeEdad() ? 'Sí' : 'No'}<br>`;
                empleado.cargarSueldo(3000);
                resultado += `Después del aumento: ${empleado.mostrarInformacion()}`;
                resultado += '</div></div>';
                
                resultado += '<div style="color: #4caf50; font-weight: bold; margin-top: 20px;">✅ Todos los ejercicios ejecutados correctamente</div>';
                
            } catch (error) {
                resultado += `<div style="color: #f44336;">❌ Error: ${(error as Error).message}</div>`;
            }
            
            if (output) {
                output.innerHTML = resultado;
            } else {
                console.error('Output element not found');
            }
        }

// Función para crear el DOM
        function crearDOM() {
            const container = document.createElement('div');
            container.className = 'container';
            
            // Título principal
            const h1 = document.createElement('h1');
            h1.textContent = '🎯 Programación Orientada a Objetos';
            container.appendChild(h1);
            
            // Subtítulo
            const subtitle = document.createElement('p');
            subtitle.className = 'subtitle';
            subtitle.textContent = 'Guía de Ejercicios con TypeScript';
            container.appendChild(subtitle);
            
            // Caja de información
            const infoBox = document.createElement('div');
            infoBox.className = 'info-box';
            
            const infoTitle = document.createElement('h3');
            infoTitle.textContent = '📚 Ejercicios Implementados:';
            infoBox.appendChild(infoTitle);
            
            const exerciseGrid = document.createElement('div');
            exerciseGrid.className = 'exercise-grid';
            
            // Datos de los ejercicios
            const exercises = [
                {
                    title: '1. Cabecera de Página',
                    description: 'Clase para manejar propiedades de cabeceras web con métodos para configurar título, color, fuente y alineación.'
                },
                {
                    title: '2. Calculadora',
                    description: 'Operaciones matemáticas básicas: suma, resta, multiplicación, división, potencia y factorial.'
                },
                {
                    title: '3. Canción',
                    description: 'Clase con atributos privados, constructor, getters/setters y método para mostrar información.'
                },
                {
                    title: '4. Cuenta Bancaria',
                    description: 'Sistema bancario con validaciones para depósitos y retiros, mostrando saldos y transacciones.'
                },
                {
                    title: '5. Persona y Empleado',
                    description: 'Clases abstractas, herencia, y métodos especializados para gestión de empleados.'
                }
            ];
            
            //Crear cards para describir cada ejercicio
            exercises.forEach(exercise => {
                const card = document.createElement('div');
                card.className = 'exercise-card';
                
                const cardTitle = document.createElement('h3');
                cardTitle.textContent = exercise.title;
                card.appendChild(cardTitle);
                
                const cardDescription = document.createElement('p');
                cardDescription.textContent = exercise.description;
                card.appendChild(cardDescription);
                
                exerciseGrid.appendChild(card);
            });
            
            infoBox.appendChild(exerciseGrid);
            container.appendChild(infoBox);
            
            // Botón ejecutar
            const button = document.createElement('button');
            button.textContent = '🚀 Ejecutar Todos los Ejercicios';
            button.onclick = ejecutarEjercicios;
            container.appendChild(button);
            
            // Área de salida
            const output = document.createElement('div');
            output.id = 'output';
            output.className = 'console-output';
            
            const outputTitle = document.createElement('div');
            outputTitle.className = 'section-title';
            outputTitle.textContent = '💻 Consola de Salida';
            output.appendChild(outputTitle);
            
            const outputContent = document.createElement('div');
            outputContent.textContent = 'Haz clic en el botón para ejecutar los ejercicios...';
            output.appendChild(outputContent);
            
            container.appendChild(output);
            
            // Agregar al body
            document.body.appendChild(container);
        }
        
        // Ejecutar cuando el DOM esté listo
        document.addEventListener('DOMContentLoaded', crearDOM);