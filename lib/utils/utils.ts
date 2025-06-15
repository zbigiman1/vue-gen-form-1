export function ifArrayIcludes(array: string[], value: any) {
    return !!array.find(element => element === value)
}

export function slugify(string: string) {
    return string.split(' ').join('_').toLocaleLowerCase()
}