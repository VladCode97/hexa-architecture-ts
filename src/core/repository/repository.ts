export interface IRepository<T> {
    createAll?(body: T): T | string;
    viewAll?(): Array<T>;
}