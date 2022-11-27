import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class CityAttractions {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({nullable: false})
	cityName: string;

	@Column({nullable: false})
	cityAttractions: string;
    
    @Column({nullable: false})
	nameCityAttractions: string;

	@Column({nullable: false})
	adress: string;

	@Column({nullable: false})
	phone: string;

	@Column({nullable: false})
	site: string;

	@Column({nullable: false})
	workHours: string;

	@Column({nullable: false})
	ticketPrice: string;

	@Column({nullable: false})
	coordX: string;

	@Column({nullable: false})
	coordY: string;

	@Column({nullable: false})
	like: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
