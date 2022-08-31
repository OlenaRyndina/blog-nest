import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Admin {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({nullable: false})
	login: string;

	@Column({nullable: false})
	passwordHash?: string;

	@Column({nullable: false})
	nickName: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}