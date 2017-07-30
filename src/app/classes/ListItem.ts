/**
 * Created by Afolabi mayowa on 30/07/2017.
 */
export class ListItem {
    //constructor(public name: string, public amount: number) {}
    public todo:string;
    public id:number;
    public status:string = 'incomplete';

    constructor(todo , status , id){
        this.todo = todo;
        this.status = status;
        this.id = id;
    }
}

