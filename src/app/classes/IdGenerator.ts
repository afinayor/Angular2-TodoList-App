/**
 * Created by Afolabi mayowa on 30/07/2017.
 */
//    class to generate unique ids
export class IdGenerator{

    public length = 8;
    public timestamp = +new Date;

    constructor(length){
        this.length = length;
    }
    _getRandomInt( min, max ) {
        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }

    generate() {
        var ts = this.timestamp.toString();
        var parts = ts.split( "" ).reverse();
        var id = "";

        for( var i = 0; i < this.length; ++i ) {
            var index = this._getRandomInt( 0, parts.length - 1 );
            id += parts[index];
        }

        return id;
    }


}

