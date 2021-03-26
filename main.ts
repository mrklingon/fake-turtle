input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 15; index++) {
        Ship.move(1)
        basic.pause(100)
        Ship.ifOnEdgeBounce()
    }
})
input.onButtonPressed(Button.B, function () {
    Ship.turn(Direction.Right, 45)
})
let Ship: game.LedSprite = null
let Arrow = game.createSprite(2, 2)
Ship = game.createSprite(0, 0)
basic.forever(function () {
    if (Ship.isTouching(Arrow)) {
        Ship.turn(Direction.Right, 180)
        Arrow.turn(Direction.Right, 180)
    }
})
basic.forever(function () {
    while (true) {
        Arrow.turn(Direction.Right, randint(0, 359))
        for (let index = 0; index < 9; index++) {
            Arrow.move(1)
            Arrow.ifOnEdgeBounce()
            basic.pause(100)
        }
    }
})
