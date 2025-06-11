export function ifArrayIcludes(array: string[], value: any) {
    return !!array.find(element => element === value)
}
