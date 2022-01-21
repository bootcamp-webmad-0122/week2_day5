const Game = {
    title: 'Bouncing balls app yay',
    author: 'Ger',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    balls: [],
    keys: {
        SPACE: 'Space'
    },
    canvasSize: {
        w: undefined,
        h: undefined
    },
    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.setEventListeners()
        this.start()
    },
    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },
    setEventListeners() {
        document.onkeydown = e => e.code === this.keys.SPACE ? this.createBall() : null
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 20)
    },
    drawAll() {
        this.balls.forEach(elm => elm.draw())
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.clearBalls()
    },
    createBall() {
        this.balls.push(new Ball(this.ctx, 0, 0, 50, 50, this.canvasSize))
        console.log(this.balls)
    },
    clearBalls() {
        this.balls = this.balls.filter(elm => elm.ballPos.x >= 0 - elm.ballSize.w)
    }

}