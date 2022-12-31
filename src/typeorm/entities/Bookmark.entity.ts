import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './User.entity';

@Entity({ name: 'bookmarks' })
export class Bookmark {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookmark_name: string;

  @Column()
  bookmark_value: string;

  @ManyToOne(() => User, (user) => user.bookmarks)
  @JoinColumn()
  user: User;
}
