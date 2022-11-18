export const dateConvertor = (dateString: string) => {
    const currentDate = new Date(Date.now()).getTime()
    const date = new Date(dateString).getTime()
    let difference = (currentDate - date) / (1000 * 3600 * 24)
    return Math.floor(difference)
}