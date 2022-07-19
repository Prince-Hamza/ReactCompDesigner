var func

export const onData = (method) => {
    func = method
}

export const postData = (filteredData) => {
    if (func) func(filteredData)
}