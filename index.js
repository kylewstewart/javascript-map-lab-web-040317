const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

var sortedRobots = []

sortedRobots = robots.map(function (robot) {
    var alliance = "autobot"
    if (knownDecepticons.includes(robot.name)){
        alliance = "decepticon"
    }
    return Object.assign({}, robot, {
        alliance: alliance
    })
})


var coloredZebraStripes = []

coloredZebraStripes = zebraStripes.map(function (zebra, index){
    var color = "black"
    if (index % 2 !== 0){
        color = "white"
    }
    return Object.assign({}, zebra, {
        color: color
    })

})
