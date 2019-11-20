export enum AssertStrategy {
    JSON,
    Field
}

export function getAllStrategies(): AssertStrategy[] {
    return [AssertStrategy.JSON, AssertStrategy.Field]
}