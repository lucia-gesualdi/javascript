class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Personas {
    constructor() {
    }

    agregarPersona(numeroDePersona) {
        let nombre = prompt("Ingrese el nombre de la persona " + numeroDePersona + ":")
        let edad = getNumber("Ingrese edad de " + nombre + ": ");

        switch (numeroDePersona) {
            case 1:
                this.persona1 = new Persona(nombre, edad);
                break;
            case 2:
                this.persona2 = new Persona(nombre, edad);
                break;
            case 3:
                this.persona3 = new Persona(nombre, edad);
                break;
            case 4:
                this.persona4 = new Persona(nombre, edad);
                break;
            default:
                alert("No es una persona valida");
        }
    }

    promedio() {
        return (this.persona1.edad + this.persona2.edad + this.persona3.edad + this.persona4.edad) / 4;
    }
}

function getNumber(text) {
    do {
        let value = prompt(text);
        let number = parseInt(value);
        if (!isNaN(number)) {
            return number;
        }

        alert("El valor ingresado no es un numero.");
    } while (true);
}

function edadPromedio() {
    let personas = new Personas();
    for(i = 1; i <= 4; i++) {
        personas.agregarPersona(i);
    }

    alert("El promedio de edades es: " + personas.promedio());
}

edadPromedio();
