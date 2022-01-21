class Ball {
    constructor(ctx, ballPosX, ballPosY, ballWidth, ballHeight, gameSize) {

        this.ctx = ctx
        this.ballPos = { x: ballPosX, y: ballPosY }
        this.ballSize = { w: ballWidth, h: ballHeight }
        this.ballVel = { x: 10, y: 1 }
        this.ballPhysics = { gravity: .4 }
        this.gameSize = gameSize
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/basketball.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {
        this.ballPos.x += this.ballVel.x

        this.ballVel.y += this.ballPhysics.gravity
        this.ballPos.y += this.ballVel.y

        this.checkCollision()
    }

    checkCollision() {
        if (this.ballPos.y >= this.gameSize.h - this.ballSize.h) {
            this.ballVel.y *= -1
        }

        if (this.ballPos.x >= this.gameSize.w - this.ballSize.w) {
            this.ballVel.x *= -1
        }
    }
}