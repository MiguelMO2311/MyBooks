export class User {
    public Id_user!: number;
    public name!: string;
    public last_name!: string;
    public email!: string;
    public photo!: string;
    public password!: string;
    public url!: string;
}
export class Books {
    public  id_book!: number;
    public  id_user!: number;
    public  title!: string;
    public type!: string;
    public  author!: string;
    public  price!: number;
    public  photo!: string;
}

