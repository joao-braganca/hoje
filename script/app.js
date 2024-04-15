function nao(){
    var x = parseInt(Math.random()*900);
    var y = parseInt(Math.random()*500);
    document.getElementById("nao").style="position: relative; top: -" + y + "px; left: -" + x + "px;";
    
}

function sim(){
    var i = 0;

    sla();
    function sla(){
            var xx = parseInt(Math.random()*1200);
            var aleatorio = parseInt(Math.random()*900);
            var coracao = document.createElement("div");
            coracao.classList.add("coracao");
            document.body.appendChild(coracao);
            coracao.id = aleatorio;
            coracao.style="left: " + xx + "px;";
            i++;
            
            if(i<55){
                console.log(aleatorio);
                setTimeout(sla, 50);
            }
            if(i<=55){
                setTimeout(aaa, 1000);
            }
            function aaa(){
                document.getElementById(aleatorio).remove();
            }
            
        }

    
}