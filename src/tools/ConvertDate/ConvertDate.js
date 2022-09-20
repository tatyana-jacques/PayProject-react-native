export default function ConvertDate(date) {
    const [day, month, year] = date.split("/")

    function convertMonth(month) {
        let convertedMonth = ""
        switch (month) {
            case "01":
                convertedMonth = "janeiro"
                break;
            case "02":
                convertedMonth = "fevereiro"
                break;
            case "03":
                convertedMonth = "março"
                break;
            case "04":
                convertedMonth = "abril"
                break;
            case "05":
                convertedMonth = "maio"
                break;
            case "06":
                convertedMonth = "junho"
                break;
            case "07":
                convertedMonth = "julho"
                break;

            case "08":
                convertedMonth = "agosto"
                break;

            case "09":
                convertedMonth = "setembro"
                break;
            case "10":
                convertedMonth = "outubro"
                break;
            case "11":
                convertedMonth = "novembro"
                break;
            default:
                convertedMonth = "dezembro"
                break
        }
        return (convertedMonth)

    }

    return (day + " de " + convertMonth(month))

}