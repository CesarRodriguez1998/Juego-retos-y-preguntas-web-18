var audio = document.getElementById("audi");

$(document).ready(function(){
    $("#se").hide();
    $("#h").hide();
    
    $("#g").click(function(){
        obtener();
        $("#g").hide();
        $("#h").show();
    });

    $("#h").click(function(){
        jugar();
        $("#se").show();
    });
    // ESTE PEDAZO DE CODIGO SIRVE PARA INGRESAR LOS PARTICPIANTES

    function obtener(){
        audio.play();

        var n = prompt("CUANTOS HOMBRES VAN A JUGAR.");
        for(i = 1;i<=n;i++){
            var x = prompt("INGRESE NOMBRE "+"["+i+"]");
            hombre.push(x);
            document.getElementById("hombre").innerHTML="Hombres: "+hombre;
        }
        var m = prompt("CUANTAS MUJERES VAN A JUGAR");
        for(i = 1;i<=m;i++){
            var x = prompt("INGRESE NOMBRE "+"["+i+"]");
            mujeres.push(x);
            document.getElementById("mujeres").innerHTML="Mujeres: "+mujeres;
        }
    }
    
    function jugar() {
        for (let index = 0; index < 3; index++) {
            var num = 6;
            var aleatorio1 = Math.floor(Math.random()*num);
            if(aleatorio1 == 1){
                var aleatorio = Math.floor(Math.random()*retos.length);
                // alert(retos[aleatorio]);
                document.getElementById("reto").innerHTML =retos[aleatorio];
                break;
            }else if(aleatorio1 == 2){
                var aleatorio = Math.floor(Math.random()*preguntas.length);
                // alert(preguntas[aleatorio]);
                document.getElementById("reto").innerHTML =preguntas[aleatorio];
                break;
            }else{
                var aleatorio = Math.floor(Math.random()*pareja.length);
                var aleatorio2 = Math.floor(Math.random()*hombre.length);
                // alert(pareja[aleatorio]);
                document.getElementById("reto").innerHTML =hombre[aleatorio2]+" "+pareja[aleatorio]+" "+mujeres[aleatorio2];
            }
            
           // document.getElementById("reto").innerHTML =retos[aleatorio];
        }  
    }
    
})

var retos = [
    " Besa apasionadamente al que quieras.",
    " Ve en ropa interior al baño con una persona del sexo opuesto.",
    " Quitate una prenda.",
    " Bailar sensualmente para todos.",
    " Escoge a alguien para darle un beso y el beso termina hasta que tu quieras ",
	" Escoge a alguien para ir al otro cuarto durante 2 minutos ",
	" Escoge a alguien para ir al otro cuarto durante 1 minuto ",
	" Desviste a cualquier participante dejandolo solo en ropa interior ",
	" Besa a cualquier participante un poco mas abajo del ombligo, por debajo de la ropa ",
	" Besa a cualquier participante mas arriba del ombligo por debajo de la ropa ",
	" Besale los pechos de cualquier participante por debajo de la ropa ",
	" Agarra la zona intima de cualquier participante por debajo de la ropa ",
	" Agarra cualquier parte del cuerpo a cualquier participante ",
	" Escoge a alguien para ir en ropa interior al otro cuarto durante 3 minutos ",
	" Escoge a alguien para acostar en la cama, subete arriba y besalo como nuca ",
	" Quedate en ropa interior 3 turnos",
	" Muestra los pechos durante 10 segundos",
	" Quedate 2 turnos mostrandos los pechos",
	" Quedate 2 turnos solo en ropa interior"
];

    var preguntas = [
    " ¿A que edad perdiste la virginiddad? ",
    " ¿Has hecho trios, cuentanos tu historia? ",
    " ¿Te gusta o sientes algo de atraccion por algun(os) de los participantes? ",
    " ¿Has sido infiel? ",
    " ¿Te has vengado siendo infiel? ",
    " ¿Has estado con alguien solo por sexo? ",
    " ¿Te gusta el anal? ",
    " ¿Alguna vez se han llegado dentro de ti? ",
	" ¿De que color es tu ropa interior? ",
	" ¿Tienes lenceria?",
	" ¿Te masturbas con algun juguete sexual? ",
	" ¿Has tenido relaciones sexuales con diferentes personas al mismo tiempo? ",
	" ¿Has hecho alguna locura sexual con alguien del mismo sexo? ",
	" ¿Di el nombre con quien quisieras tener sexo? ",
	" ¿Cual es tu posicion preferida durante el acto sexual? ",
	" ¿Tienes algun fetiche sexual? "
];

var pareja = [
    "Besa hasta que quieras parar a ",
    "Besa durante 10 segundos a ",
    "Toca cualquier parte del cuerpo a "
];

var mujeres = [];
var hombre = [];
