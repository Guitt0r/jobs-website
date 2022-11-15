export const dateConvertor = (dateString) => {
    const currentDate = new Date(Date.now())
    const date = new Date(dateString)
    let difference = (currentDate - date) / (1000 * 3600 * 24)
    return Math.floor(difference)
}