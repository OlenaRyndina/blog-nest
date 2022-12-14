import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "blog",
  entities: ["dist/**/*.entity{.ts,.js}"],
  dropSchema: false,
  synchronize: true,
  migrationsRun: false,
  logging: true,
  migrations: [
      "dist/src/**/db/migrations/*{.ts,.js}",
      "dist/src/modules/**/db/migrations/*{.ts, .js}",
      "dist/*{.ts, .js}"]/*,
  cli: {
    migrationsDir: "db/migrations"
  }*/
};

export default config;

