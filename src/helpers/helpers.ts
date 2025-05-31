export function ifArrayIcludes(array: [], value: any) {
    return !!array.find(element => element === value)

}