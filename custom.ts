enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace animations {
    /**
     * Blink an LED at a particular interval
     * @param x horizontal led coordinate
     * @param y vertical led coordinate
     * @param interval time in milli seconds between blinks
     */
    //% block= " blink x $x y $y every $interval ms "
    export function blink(x: number, y: number, interval: number): void {
    let sprite =game.createSprite(x,y)
    sprite.setBlink(interval)
    sprite.blink()
    }
}
