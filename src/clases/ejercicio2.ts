 // Ejercicio 2: Calculadora
      export  class Calculadora {
        a:number;
        b:number;
        
        constructor(){
           this.a = 0;
           this.b = 0;
        }
            sumar(a: number, b: number) {
                return a + b;
            }
            
            restar(a: number, b: number) {
                return a - b;
            }
            
            multiplicar(a: number, b: number) {
                return a * b;
            }
            
            dividir(a: number, b: number) {
                if (b === 0) {
                    throw new Error("No se puede dividir por cero");
                }
                return a / b;
            }
            
            potencia(base: number, exponente: number) {
                return Math.pow(base, exponente);
            }
            
            factorial(n: number): number|string {
                if (n < 0) {
                    throw new Error("El factorial no está definido para números negativos");
                }
                if (n === 0 || n === 1) {
                    return 1;
                }
                let result = this.factorial(n - 1);
                return typeof result === 'number' ? n * result : 0;
            }
        }