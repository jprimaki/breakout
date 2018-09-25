window.onload = function() {
    controlador = new Controlador();
    controlador.Desenhar();
};

class Cubo {
    constructor (x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}

class Controlador {     


    constructor () {  
        this.listaCubo = [];      
        this.canvas = document.getElementById("gameCanvas");
        if (!this.canvas.getContext) {
            alert("Não foi possível adquirir o canvas!");
        }
        else {
            this.canvas = this.canvas.getContext("2d");
        }
    }    

    QuantidadeCubos (minimo, maximo){
        let valor = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        console.log("QuantidadeCubos: " + valor);
        return valor;
    }

    get CorAleatoria() {
        return 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
    }

    DesenharCubos () {     
        let quantidadeCubos = this.QuantidadeCubos(7,15);
        let espaco = 5;
        let x = 0;
        let y = 0;
        let w = 50;
        let h = 15;
        let cubo = null;
        for (var i = 0; i < quantidadeCubos; i++) {
            x = 0;
            for (var z = 0; z < quantidadeCubos; z++) {
                this.canvas.fillStyle = this.CorAleatoria;
                this.canvas.fillRect (x + espaco, y + espaco, w, h);                               
                cubo = new Cubo(x, y, w, h);
                this.listaCubo.push(cubo);        

                x += w + espaco;
            }       
            y += h + espaco;       
        }

    }    

    Desenhar (){        
        this.DesenharCubos();  
        //this.DesenharBola; 
        //this.DesenharSaco;         
    }
    
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