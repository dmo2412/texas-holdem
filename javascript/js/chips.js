var deal = require('./deal');
console.log(deal.cards)
const chips = () => {
    var pot = { name: 'Pot', chips: 0 }
    let player1 = {
        name: 'Mike McDermott',
        chips: 100,
        cardPool: [],
        holecards: [],
        showCards: {},
        status: true
    }
    let player2 = {
        name: 'Tom Dwan',
        chips: 100,
        cardPool: [],
        holecards: [],
        showCards: {},
        status: true
    }
    let player3 = {
        name: 'Phil Ivey',
        chips: 100,
        cardPool: [],
        holecards: [],
        showCards: {},
        status: true
    }
    var theData = [player1, player2, player3, pot];
    d3.select("#chipcount").selectAll("p")
        .data(theData)
        .enter()
        .append("p")
        .text(function (d) { return d.name + " : " + d.chips; })
        .attr("class", "playernames");

}
export default chips;