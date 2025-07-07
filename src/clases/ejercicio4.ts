       export class Cancion {
             titulo: string;
             genero: string;
            private _autor: string;

            constructor(titulo: string, genero: string) {
                this.titulo = titulo;
                this.genero = genero;
                this._autor = "";
            }
            
            // Encapsulamiento de la propiedad autor
            get autor() {
                return this._autor;
            }
            
            set autor(autor) {
                this._autor = autor;
            }
            
            mostrarInformacion() {
                return `Canción: ${this.titulo} | Género: ${this.genero} | Autor: ${this._autor}`;
            }
        }