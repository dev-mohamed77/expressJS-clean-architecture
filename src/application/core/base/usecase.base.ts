export interface BaseUseCase<T> {
  execute(...arg: any[]): Promise<T>;
}
