import { DataSource, DataSourceOptions } from "typeorm";

const configMigration = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "blog",
  entities: ["dist/**/*.entity{.ts,.js}"],
  dropSchema: false,
  synchronize: false,
  migrationsRun: false,
  logging: true,
  migrations: [
      "dist/src/**/db/migrations/*{.ts,.js}",
      "dist/src/modules/**/db/migrations/*{.ts, .js}",
      "dist/*{.ts, .js}"],
  cli: {
    migrationsDir: "db/migrations"
  }
} as DataSourceOptions);

configMigration.initialize();

export default configMigration;