class Cubo {
    constructor (x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = w;
    }
}

class Controlador {     
    ListaCubo = [];

    constructor () {        
        this.canva = document.getElementById("gameCanva");
        if (!this.canva.getContext) {
            alert("Não foi possível adquirir o canvas!");
        }
        else {
            this.canva = this.canva.getContext("2d");
        }
    }    

    get QuantidadeCubos (minimo, maximo){
        return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    }

    get CorAleatoria() {
        return 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
    }

    DesenharCubos () {     
        let quantidadeCubos = this.QuantidadeCubos(7,15);
        let espaco = 5;
        for (i in quantidadeCubos) {
            x = 0;
            for (z in quantidadeCubos) {
                canva.fillStyle = this.CorAleatoria;
                canva.fillRect (x + espaco, y + espaco, w, h);                               
                cubo = new Cubo(x, y, w, h);
                ListaCubo.push(Cubo);        

                x += w + espaco;
            }       
            y += h + espaco;       
        }

    }    

    Desenhar (){        
        this.DesenharCubos;  
        //this.DesenharBola;          
    }
    
}

var Inicializar = function () {    
    controlador = new Controlador;
    controlador.Desenhar();
}

//var AtualizarCor = function () {    
//    for (i = 0; i < ListaCubo.length-1; i++) {
//        Cubo = ListaCubo[i];
//        canva.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';    
//        canva.fillRect (Cubo.x, Cubo.y, Cubo.w, Cubo.h);  
//    }

//}

var Update = function () {
 //   AtualizarCor();
}