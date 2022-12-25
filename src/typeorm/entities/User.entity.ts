import { Entity, PrimaryGeneratedColumn, Column,OneToMany, JoinColumn} from "typeorm"

@Entity({name:"users"})
export class User{

    @PrimaryGeneratedColumn("uuid")
    id: string

   @Column()
   first_name:string

    @Column()
    last_name:string

    @Column({
        unique:true
    })
    email:string

    @Column()
    password:string

   

}