export interface IRepository<T> {
    createAll?(body: T): Promise<string>;
    viewAll?(): Promise<Array<T>>;
}