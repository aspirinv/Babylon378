export class scene{
    private interval: any;
    public iteration: number = 0;

    constructor(private root: any){
        this.interval = setInterval(()=>this.iterate(),100);
    }

    private iterate(){
        this.iteration ++;
        //console.log("iter", this.iteration);
    }
}