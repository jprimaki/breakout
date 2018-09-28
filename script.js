var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

window.onload = function() {
    controlador = new Controlador();
    controlador.inicializar();    
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
        this.ultimo = 0;
        this.alfa = 1;        
        this.listaCubo = [];   
        this.visivel = true;      
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
        let padrao = 10;
        let texto = "";

        cubo.quantidade = this.randomico(1,3);        
        texto = cubo.quantidade;
        this.alterarEstilo = "#ffffff";
        this.retornarCanvas.fillText(cubo.quantidade, cubo.x + (cubo.w / 2) - this.retornarCanvas.measureText(texto).width, cubo.y + padrao);
    }

    adicionarCubo (x = 0, y = 0, w = 0, h = 0) {
        let cubo = null;
        cubo = new Cubo(x, y, w, h);
        this.listaCubo.push(cubo);

        return cubo;
    }

    desenharCubo (x = 0, y = 0, w = 0, h = 0, adicionar = false) {
        this.alterarEstilo = this.corAleatoria();
        this.retornarCanvas.fillRect(x, y, w, h); 
        
        if (adicionar)
            return this.adicionarCubo(x,y,w,h);
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
                this.desenharCubo(x + espacoEntreCubo, y + espacoEntreCubo, w, h, true);
                //this.desenharNumero(cubo);
                
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
        //this.retornarCanvas.clearRect(380, 520, 60,  250);   
        this.retornarCanvas.beginPath();
        this.alterarEstilo ="#ff0000";        
        let obj = this.retornarCanvas.arc(this.larguraCanvas / 2, this.alturaCanvas / 1.5, 20,0, Math.PI*2, true); 
        this.retornarCanvas.closePath();
        this.retornarCanvas.fill();        
    }

    desenharStart (){    
        this.retornarCanvas.clearRect(0, 300, this.larguraCanvas,  200);     
        
        if ((parseFloat(this.alfa.toFixed(2)) > 0) && (this.visivel)){
            this.alfa -= 0.015; 
        }
        else {            
            this.alfa += 0.015
            this.visivel = this.alfa.toFixed(2) >= 1;
        }        

        let texto = "PRESS ENTER TO START";
        this.alterarEstilo = "rgba(255, 255, 255, " + this.alfa + ")";
        this.retornarCanvas.textAlign = "center";
        this.retornarCanvas.font = "35px Georgia";
        this.retornarCanvas.fillText(texto, this.larguraCanvas/2, this.alturaCanvas/2);         

        var startAnim = requestAnimationFrame(this.desenharStart.bind(this)); 
    }

    segundo (segundo = 0) {
        return segundo * 1000;
    }

    animacaoAtualizarCor (now)  {   
        if (!this.ultimo || now - this.ultimo >= this.segundo(1)) {
            this.ultimo = now;
        this.listaCubo.forEach(cubo => {
            this.desenharCubo(cubo.x, cubo.y, cubo.w, cubo.h);            
        });               
    }

        var atualizacorAnim = requestAnimationFrame(this.animacaoAtualizarCor.bind(this)); 
    }

    inicializar (){        
        this.desenharCubos();  
        this.desenharBase();
        this.desenharBola();     
        this.desenharStart();
        this.animacaoAtualizarCor();        
    }
    
}