window.onload = function() {
    controlador = new Controlador();
    controlador.Desenhar();
};

class Cubo {
    constructor (x, y, w, h, quantidade){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.quantidade = quantidade;
    }
}

class Controlador {       
    constructor () {  
        this.listaCubo = [];         
        this.definirCanvas = document.getElementById("gameCanvas");        
    }    

    set definirCanvas (canvas) {        
        if (!canvas.getContext) {
            alert("Não foi possível definir o canvas!");
        }
        else {
            this.canvas = canvas.getContext("2d");
        }
    }

    get retornarCanvas() {
        return this.canvas;
    }

    randomico (minimo = 0, maximo = 0){          
        return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    }

    coraleatoria() {
        return 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
    }

    desenharNumero (cubo) {       
        cubo.quantidade = this.randomico(1,3);
        let padrao = 15;
        this.retornarCanvas.fillStyle = "#ffffff";
        this.retornarCanvas.fillText(cubo.quantidade, cubo.x + (cubo.w / 2), padrao + cubo.y);
    }

    desenharCubos () {                  
        let quantidadeCubos = this.randomico(15,15);
        let espaco = 5;
        let x = 0;
        let y = 0;
        let w = 50;
        let h = 15;
        let cubo = null;
        this.retornarCanvas.canvas.width = (quantidadeCubos * (w + espaco)) + 5; 

        for (var i = 0; i < quantidadeCubos; i++) {
            x = 0;
            for (var z = 0; z < quantidadeCubos; z++) {
                this.retornarCanvas.fillStyle = this.coraleatoria();
                this.retornarCanvas.fillRect (x + espaco, y + espaco, w, h);                               
                cubo = new Cubo(x, y, w, h);
                this.listaCubo.push(cubo);  

                this.desenharNumero(cubo);
                
                x += w + espaco;
            }       
            y += h + espaco;       
        }

    }    

    desenharBase () {                                  
        this.retornarCanvas.beginPath();
        this.retornarCanvas.lineCap = "round";
        this.retornarCanvas.lineWidth = 10;
        this.retornarCanvas.moveTo(this.retornarCanvas.canvas.clientWidth / 2, this.retornarCanvas.canvas.clientHeight / 2);
        this.retornarCanvas.lineTo(950, 156);
        this.strokeStyle = "#FF0000";
        this.retornarCanvas.stroke();      
    }

    Desenhar (){        
        this.desenharCubos();  
        //this.desenharBase();
        //this.DesenharBola;     
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