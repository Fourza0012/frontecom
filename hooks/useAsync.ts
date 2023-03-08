import { useCallback, useEffect, useState } from "react";

export function useAsync(func : Function, dependencies : any = []) {
    const { execute, ...state } = useAsyncInternal(func, dependencies, true)

    useEffect(() => {
        execute()
    }, [execute])

    return state
}

export function useAsyncFn(func : Function, dependencies : any = []) {
    return useAsyncInternal(func, dependencies, false)
}

function useAsyncInternal(func : Function, dependencies : any, initialLoading : boolean = false) {
    const [loading, setLoading] = useState<boolean>(initialLoading)
    const [error, setError] = useState<any>()
    const [value, setValue] = useState<any>()

    const execute = useCallback((...params : any) => {
        setLoading(true)
        return func(...params).then((data : any) => {
            setValue(data)
            setError(undefined)
            return data
        }).catch((error : any) => {
            setValue(undefined)
            setError(error)
            return Promise.reject(error)
        }).finally(() => {
            setLoading(false)
        })
    }, dependencies)
    return { loading, error, value, execute }
}