export const isExpired = (epxTimeInSecond: number) => {

    return (epxTimeInSecond * 1000) < (Date.now() + 5 * 1000)
}

export const isAuthorized = (email: string, refresh: boolean) => {
    return email && refresh === true ? true : false;
}