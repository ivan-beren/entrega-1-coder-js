    let volumen=0;
    
    const pileta = {
        materiaPrima: "Pescado",
        capacidad: 50000,
        volumenActual: 0,
        ingresoPescado: function(volumen){
            if (volumen <= this.capacidad && volumen <= (this.capacidad-this.volumenActual)){
            this.volumenActual += volumen
            console.log(`Se ingresan ${volumen} kilos de pescado`)
            }else{
            console.log(`Se alcanzo la capacidad maxima de pescado en la pileta`)
            }
        },
        transferirPescado: function(volumen){
            if (this.volumenActual > 0 && volumen <= this.volumenActual && volumen <= (cocinador.capacidad-cocinador.volumenCrudo)){
                this.volumenActual -= volumen
                cocinador.volumenCrudo += volumen
                console.log(`Se transfirieron ${volumen} kilos de pescado al cocinador`)
            }else if(this.volumenActual == 0){
                console.log(`No se puede transferir porque no hay pescado en pileta`)
            }else if(volumen >= this.volumenActual){
                console.log(`Se quieren trasnferir ${volumen} kilos de pescado, pero solo hay disponibles ${this.volumenActual}`)
            }else{
                console.log(`La cantidad de pescado que quiere transferir supera la capacidad maxima del cocinador`)
            }
        },
    }

    const cocinador = {
        materiaPrima: "Pescado",
        capacidad: 2000,
        volumenCrudo: 0,
        volumenCocinado: 0,
        temperaturaOptima: 0,
        velocidadRodamiento: 0,
        tiempoCoccion: 0,
        cocinarPescado: function(volumen){
            if (volumen > 0 && volumen <= this.volumenCrudo){
                this.volumenCrudo -= volumen
                this.volumenCocinado += volumen
                console.log(`Se cocinaron ${volumen} de pescado crudo`)
            }else if(volumen == 0){
                console.log(`No hay pescado crudo para cocinar`)
            }else{
                console.log(`Se quieren cocinar ${volumen} kilos de pescado pero solo hay disponible ${this.volumenCrudo}`)
            }
        },
        transferirPescado: function(volumen){
            if (this.volumenCocinado > 0 && volumen <= this.volumenCocinado && volumen <= (prensa.capacidad-prensa.volumenActual)){
                this.volumenCocinado -= volumen
                prensa.volumenActual += volumen
                console.log(`Se transfieren ${volumen} de pescado cocinado a la prensa`)
            }else{
                if (this.volumenCocinado == 0){
                    console.log(`No se puede transferir porque no hay pescado cocinado`)
                }else if (volumen > this.volumenCocinado){
                    console.log(`Usted quiso transferir ${volumen} kilos de pescado pero solo hay disponible ${this.volumenCocinado}`)
                }else{
                    console.log(`La cantidad de pescado cocinado que quiere transferir supera la capacidad maxima de la prensa`)
                }
            }
        },
    }

    const prensa = {
        materiaPrima: "Prensado",
        capacidad: 2000,
        volumenActual: 0,
        volumenPrensado: 0,
        temperatura: 0,
        rodamiento: 0,
        prensarPescado: function(volumen){
            if (volumen > 0 && volumen <= this.volumenActual){
                this.volumenActual -= volumen
                this.volumenPrensado += volumen
                console.log(`Se prensan ${volumen} de pescado previamente cocinado`)
            }else if(volumen == 0){
                console.log("No hay pescado para prensar")
            }else{
                console.log("Se deja de ingresar pescado por equipo sobrecargado")
            }
        },
        transferirPrensado: function(volumen){
            if (volumen > 0 && volumen <= this.volumenPrensado && volumen < (rtd.capacidad-rtd.volumenActual)){
                this.volumenPrensado -= volumen
                rtd.volumenActual += volumen
                console.log(`Se transfieren ${volumen} kilos de prensado al rotadisco`)
            }else if(volumen == 0){
                console.log(`No hay pescado prensado`)
            }else if(volumen > this.volumenPrensado){
                console.log(`Se quieren transferir ${volumen} kilos de prensado pero solo hay ${this.volumenPrensado} disponibles`)
            }else{
                console.log(`La cantidad de prensado que quiere transferir supera la capacidad maxima del rotadisco`)
            }
        },
    }

    const rtd = {
        materiaPrima: "Harina de Pescado",
        capacidad: 2000,
        volumenActual: 0,
        volumenSecado: 0,
        temperatura: 0,
        amperaje: 0,
        secarPrensado: function(volumen){
            if (volumen > 0 && volumen <= this.volumenActual){
                this.volumenActual -= volumen
                this.volumenSecado += volumen
                console.log(`Se secan ${volumen} kilos del prensado ingresado al rotadisco`)
            }else if(volumen == 0){
                console.log("El rotadisco se encuentra vacio")
            }else{
                console.log("Se deja de ingresar prensado por equipo sobrecargado")
            }
        },
        TrasnferirHarina: function(volumen){
            if(volumen > 0 && volumen <= volumenSecado && volumen <= (silo.capacidad - silo.volumenActual)){
                this.volumenSecado -= volumen
                silo.volumenActual += volumen
                console.log(`Se transfieren ${volumen} kilos de harina al silo`)
            }else if(volumen == 0){
                colsole.log(`El silo se encuentra vacio`)
            }else if(volumen > this.volumenSecado){
                console.log(`Se quieren transferir ${volumen} kilos de harina pero solo hay ${this.volumenSecado} disponibles`)
            }else{
                console.log(`La cantidad de prensado que quiere transferir supera la capacidad maxima del silo`)
            }
            
        },
    }

    const silo={
        producto: "Harina de Pescado",
        capacidad: 25000,
        volumenActual: 0,
        vaciarSilo: function(volumen){
            this.volumenActual -= volumen
            bolsa.cantidadBolsa += Math.floor(volumen / this.capacidad)
        },
    }


   // class lote{
   //     constructor
    //}



   /* let loteSize = 100;

    const bolsa={
        producto: "Harina de Pescado",
        capacidad: 50,
        volumenActual: 0,
        cantidadBolsa: 0,
        llenarBolsa: function(volumen) {
            if (volumen > 0) {
                const bolsasLlenas = Math.floor(volumen / this.capacidad);
                this.volumenActual -= volumen % this.capacidad; // Agregar el excedente a volumenActual
                this.cantidadBolsa += bolsasLlenas;
                if (this.cantidadBolsa >= loteSize) {
                    this.crearNuevoLote();
                }
    
                console.log(`Se llenaron ${bolsasLlenas} bolsas`);
            } else {
                console.log(`No se llenó ninguna bolsa`);
            }
        },
        crearNuevoLote: function() {
            const lote = {
                producto: this.producto,
                cantidad: this.cantidadBolsa,
                bolsas: this.cantidadBolsa,
            };
            Lotes.push(lote); // Agregar el nuevo lote al array Lotes
            this.cantidadBolsa = 0;
        },
    };
    
    const Lotes = [];*/
    
    
    
    
    