
function setupStars() {
  LetoileX=60;
  LetoileY=50

  for (var i =0; i <Nombre; i=i+1){
    deplacementX[i]=random(L)
    deplacementY[i]=random(H)
    speed[i]=random(15)
    direction[i]=1
    rouge_etoile[i]=random(255) 
    vert_etoile[i]=random(255)
    bleu_etoile[i]=random(255)
    directionX[i]=random(2)
    directionY[i]=random(3)
    speedX[i]=random(5)
    speedY[i]=random(5)
    Taille[i]=random(0.9, 2)
    console.log('??',Taille[i])
  } 
}


function drawStars() {

  for (var i = 0; i < Nombre; i = i+1) {
    etoile(deplacementX[i], deplacementY[i], rouge_etoile[i], vert_etoile[i], bleu_etoile[i],Taille[i]); 
    deplacementX[i] = deplacementX[i] + directionX[i]*speedX[i]; 
      // etoile depasse par la droite
    if (deplacementX[i]>width-LetoileX){ 
      directionX[i] = -1; 
    }
      // etoile depasse par la gauche
    if (deplacementX[i] < 0){
        directionX[i] = 1; 
    }
    deplacementY[i] = deplacementY[i] + directionY[i]*speedY[i]
    if (deplacementY[i]>height-LetoileY){
        directionY[i] = -1;
    } 
    if (deplacementY[i]<0){
       directionY[i] = 1;
    }
  }
}


  
function etoile(pPosX, pPosY, pRouge, pVert, pBleu, pTaille){
  fill(pRouge, pVert, pBleu);
  beginShape();
    vertex(20*pTaille+pPosX, 30*pTaille+pPosY); //poin n 1 
    vertex(40*pTaille+pPosX, 30*pTaille+pPosY); //poin n 2
    vertex(50*pTaille+pPosX, 10*pTaille+pPosY); //poin n 3
    vertex(60*pTaille+pPosX, 30*pTaille+pPosY); //poin n 4
    vertex(80*pTaille+pPosX, 30*pTaille+pPosY); //poin n 5
    vertex(65*pTaille+pPosX, 45*pTaille+pPosY); //poin n 6
    vertex(70*pTaille+pPosX, 65*pTaille+pPosY); //poin n 7
    vertex(50*pTaille+pPosX, 55*pTaille+pPosY); //poin n 8
    vertex(30*pTaille+pPosX, 65*pTaille+pPosY) ;//poin n 9
    vertex(35*pTaille+pPosX, 45*pTaille+pPosY); //poin n 10
  endShape(CLOSE)
}

