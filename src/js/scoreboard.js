// import * as d3 from "d3";
document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var me = {name: 'Me', chips: 100};
    var tom = {name: 'Tom Dwan', chips: 100};
    var phil = {name: 'Phil Ivey', chips: 100};
    var pot = {name: 'Pot', chips: 0}

    var theData = [me, tom, phil, pot];
    
    d3.select("#chipcount").selectAll("p")
    .data(theData)
    .enter()
    .append("p")
    .text(function (d) { return d.name + " : " + d.chips; })
    .attr("class", "playernames");

    // d3.select("#betamount")
    let max;
    let turn = 0;

    document.getElementById('betbutton').onclick = function placeBet() {
        // theData[0].chips = theData[0].chips - 10;
        // theData.push(adder)
        if (turn % 3 === 0) {
            me.chips = me.chips - 10;
        } else if (turn % 3 === 1) {
            tom.chips = tom.chips - 10;
        } else if (turn % 3 === 2) {
            phil.chips = phil.chips - 10;
        }
        turn += 1;
        pot.chips += 10;

        d3.selectAll(".playernames").remove();


        d3.select("#chipcount").selectAll("p")
            .data(theData)
            .enter()
            .append("p")
            .text(function (d) { return d.name + " : " + d.chips; })
            .attr("class", "playernames");

    }

    












    
})

