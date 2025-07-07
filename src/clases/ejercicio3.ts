      // Ejercicio 4: Cuenta Bancaria
       export  class CuentaBancaria {
       titular:string;
       saldoInicial:number =0; 
       saldo:number;
       transacciones: string[]; //Arreglo de transacciones

        constructor(titular: string, saldoInicial:number) {
            this.titular = titular;
            this.saldo = saldoInicial;
            this.transacciones = [];
        }
            
        depositar(monto: number) {
            if (monto <= 0) {
                throw new Error("El monto debe ser positivo");
            }
            this.saldo += monto;
            this.transacciones.push(`Depósito: +$${monto}`);
            return this.saldo;
        }
        
        retirar(monto: number) {
            if (monto <= 0) {
                throw new Error("El monto debe ser positivo");
            }
            if (monto > this.saldo) {
                throw new Error("Saldo insuficiente");
            }
            this.saldo -= monto;
            this.transacciones.push(`Retiro: -$${monto}`);
            return this.saldo;
        }
    
        mostrarSaldo() {
            return `Titular: ${this.titular} | Saldo: $${this.saldo}`;
        }
        
        mostrarTransacciones() {
            return this.transacciones.join('\n');
        }
        }