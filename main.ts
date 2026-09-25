controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    game.setGameOverMessage(false, "GAME OVER!")
})
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f f . . . . 
    . . . . f f f 1 1 1 1 1 f . . . 
    . . f f f 1 1 1 1 f 1 1 f f . . 
    . . f 1 1 1 1 1 1 1 1 1 f f . . 
    . f f 1 1 1 1 1 1 1 1 1 f f . . 
    . f 1 1 1 f f f 1 1 f f f . . . 
    . f f 1 1 f . f 1 1 f . . . . . 
    . . f 1 1 f . f 1 1 f . . . . . 
    . . f 1 1 f . f 1 1 f . . . . . 
    . . f 1 1 f . f 1 1 f . . . . . 
    . . f 1 1 f . f 1 1 f . . . . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 1 f f 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 7 b . . 
    . b d d d d 5 5 5 5 5 5 5 7 b . 
    b d d d b b b 5 5 5 5 5 5 7 b . 
    c d d b 5 5 d c 5 5 5 5 5 7 b . 
    c b b d 5 d c d 5 5 5 5 7 7 b . 
    . b 5 5 b c d d 5 5 5 7 7 d b . 
    b b c c c d d d d 5 5 7 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    ............777777777...
    ...........7777777777...
    ..........77777.........
    ..........7777..........
    ....4444ffff444ffff444..
    ....44fffffff4fffffff44.
    ...44ffffffff4fffffff44.
    ...4fffffffff4ff111ff44.
    ...4fff111fff4ff111ff44.
    ..44fff111fff4ff111ff44.
    ..44fff111fff4fffffff44.
    .444fffffffff4fffffff44.
    .4444fffffff44ffffff444.
    .4444ffffff4444ffff4444.
    .444444fff444444444444..
    .444444444444444444444..
    .444411111111111444444..
    .44441111111111144444...
    ..44411111111111444.....
    ...444444444444444......
    ....444444444444........
    .......4444444..........
    ........................
    ........................
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 f 7 7 7 f 7 7 6 c . . . 
    . c 7 7 f 7 7 7 f 7 7 7 c . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Player))
scene.setBackgroundColor(15)
