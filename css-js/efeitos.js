let texto1 = "A alimentação saudável é essencial para o funcionamento do nosso corpo, pois é dela que retiramos os nutrientes de que necessitamos para nossa sobrevivência. Uma alimentação saudável está relacionada com diversos benefícios para nosso organismo, como a melhora na imunidade, no humor e na qualidade do sono, o aumento da disposição, a regulação do nosso intestino e a manutenção do peso.";
let i = 0;
let p = document.getElementById("texto1");

setInterval(function(){
    if(i < texto1.length)
    {
        p.textContent += texto1.charAt(i);
        i++;
    }
}, 10)