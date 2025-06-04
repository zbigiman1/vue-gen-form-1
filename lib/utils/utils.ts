export function ifArrayIcludes(array: string[], value: any) {
    console.log(!!array.find(element => element === value))
    return !!array.find(element => element === value)
}
