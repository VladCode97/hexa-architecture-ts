export interface IRepository<T> {
    createAll?(body: T): string;
    viewAll?(): Array<T>;
}