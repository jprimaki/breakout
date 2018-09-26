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

    set alterarEstilo (estilo = ""){
        this.retornarCanvas.fillStyle = estilo;
    }

    get larguraCanvas (){
        return this.retornarCanvas.canvas.clientWidth
    }

    get alturaCanvas (){
        return this.retornarCanvas.canvas.clientHeight;
    }

    get retornarCanvas() {
        return this.canvas;
    }

    randomico (minimo = 0, maximo = 0){          
        return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    }

    corAleatoria() {
        return 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
    }

    desenharNumero (cubo) {               
        let padrao = 15;

        cubo.quantidade = this.randomico(1,3);
        this.alterarEstilo = "#ffffff";
        this.retornarCanvas.fillText(cubo.quantidade, cubo.x + (cubo.w / 2), padrao + cubo.y);
    }

    desenharCubos () {                  
        let quantidadeCubos = this.randomico(15,15);
        let espacoEntreCubo = 5;
        let borda = 5;
        let x = 0;
        let y = 0;
        let w = 50;
        let h = 15;
        let cubo = null;
        this.retornarCanvas.canvas.width = (quantidadeCubos * (w + espacoEntreCubo)) + borda; 

        for (var i = 0; i < quantidadeCubos; i++) {
            x = 0;
            for (var z = 0; z < quantidadeCubos; z++) {
                this.alterarEstilo = this.corAleatoria();
                this.retornarCanvas.fillRect (x + espacoEntreCubo, y + espacoEntreCubo, w, h);                               
                cubo = new Cubo(x, y, w, h);
                this.listaCubo.push(cubo);  

                this.desenharNumero(cubo);
                
                x += w + espacoEntreCubo;
            }       
            y += h + espacoEntreCubo;       
        }

    }    

    desenharBase () {         
        let widthBase = 150;                           
        let heightBase = 10;
        let borda = 50;
        this.alterarEstilo = "#FFF";
        this.retornarCanvas.fillRect (this.larguraCanvas / 2 - (widthBase / 2), this.alturaCanvas - borda, widthBase, heightBase);                                    
    }

    desenharBola (){
        this.retornarCanvas.beginPath();
        this.alterarEstilo ="#ff0000";        
        this.retornarCanvas.arc(this.larguraCanvas / 2, this.alturaCanvas / 1.5 ,20,0,Math.PI*2,true); 
        this.retornarCanvas.closePath();
        this.retornarCanvas.fill();
    }

    desenharStart (){
        let alfa = 1;
        let texto = "PRESS ENTER TO START";
        this.alterarEstilo = "rgba(255, 255, 255, " + alfa + ")";
        this.retornarCanvas.textAlign = "center";
        this.retornarCanvas.font = "35px Georgia";
        this.retornarCanvas.fillText(texto, this.larguraCanvas/2, this.alturaCanvas/2);      
        //let larguraTexto = this.retornarCanvas.measureText(texto).width;        
    }

    Desenhar (){        
        this.desenharCubos();  
        this.desenharBase();
        this.desenharBola();     
        this.desenharStart();
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