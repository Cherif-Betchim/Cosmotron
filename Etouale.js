var largeur=800
var hauteur=800
var nombre = 100;
var posX = [];
var posY = []; 
var speed = []; 
var bleu = [];
var vert = [];
var taille = []; 

function spesetup(){
   createCanvas(largeur, hauteur)
   //background("crimson");

   for (var i = 0; i < nombre; i=i+1) {
        posX[i] = random(-200,1800);
        posY[i] = random(0, 1800);
        speed[i] = random(2, 7); 
        bleu[i] = random(255);
        vert[i] = random(255); 
        taille[i] = random(0.1, 0.9);
   }
}

function spedraw(){
    //background(0,0,0);
     for (var i = 0; i < nombre; i=i+1) {
        etouale(posX[i], posY[i], bleu[i], vert[i], taille[i]);
         posY[i] += speed[i]; 
         if(posY[i]>=hauteur){
             posY[i]=-400
             posX[i] = random(-200, 1800); 
         }
     }
}

function etouale(x, y, b, v, taille){
    fill(255, v, b)
    beginShape();
        vertex(x, y);
        vertex(x+25*taille, y+60*taille );
        vertex(x+90*taille, y+60*taille );
        vertex(x+40*taille, y+100*taille);
        vertex(x+60*taille, y+170*taille);
        vertex(x+ 0*taille, y+130*taille);
        vertex(x-60*taille, y+170*taille);
        vertex(x-40*taille, y+100*taille);
        vertex(x-90*taille, y+60*taille );
        vertex(x-25*taille, y+60*taille );
        vertex(x+0 *taille, y+0*taille  );
    endShape();
}
