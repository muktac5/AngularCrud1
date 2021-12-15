export class Product{

    pid:string ='';
    pname:string='';
    cost:number=0;

    constructor(pid:string,pname:string,cost:number){
        this.pid=pid;
        this.pname=pname;
        this.cost=cost;
    }
}