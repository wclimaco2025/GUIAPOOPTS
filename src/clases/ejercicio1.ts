       // Ejercicio 1: Cabecera de Página
     export class CabeceraPagina {
        titulo:string;
        color:string;
        fuente:string;
        alineacion:string;
        
            constructor() {
                this.titulo = "";
                this.color = "";
                this.fuente = "";
                this.alineacion = "";
            }
            
            establecerTitulo(titulo: string) {
                this.titulo = titulo;
            }
            
            establecerColor(color: string) {
                this.color = color;
            }
            
            establecerFuente(fuente: string) {
                this.fuente = fuente;
            }
            
            establecerAlineacion(alineacion: string) {
                this.alineacion = alineacion;
            }
            
            obtenerPropiedades() {
                return {
                    titulo: this.titulo,
                    color: this.color,
                    fuente: this.fuente,
                    alineacion: this.alineacion
                };
            }
        }