let peca = "Dama";

let pecaDois = peca.toLowerCase() ;

switch (pecaDois){
    case ("rei"):
        console.log ("Se move em qualquer direção. Uma casa por vez.");
        break;
    case ("dama"):
        console.log ("Se move em qualquer direção em quantas casas quiser desde que estejam livres.");
        break;
    case ("torre"):
        console.log ("Se move em linha reta na horizontal e vertical por quantas casas quiser.");
        break;
    case ("bispo"):
        console.log ("move-se na diagonal por quantas casas quiser.");
        break;
    case ("cavalo"):
        console.log ("salta por outras peças do tabuleiro. O movimento é em formato de L, sendo duas para a direção desejada e uma para a direita ou esquerda.");
        break;
    case("peao"):
        console.log("move-se uma casa para frente, exceto o primeiro movimento que dá a possibilidade de se mover por uma casa a mais. Não pode retroceder e por efetuar uma captura na diagonal em uma casa.");
        break;
    default:
        console.log ("Por favor,informe um nome válido de peça");
}