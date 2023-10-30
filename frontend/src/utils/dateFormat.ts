import dayjs from "dayjs";

export const getDateNm = (dateFormat: string, date: string) => {
    let dateNm = '';

    if (dateFormat) {
        switch (dateFormat) {
            case 'YMD':
                dateNm = dayjs(date).format('YYYY-MM-DD');
                break;
            case 'YMD_KOR':
                dateNm = dayjs(date).format('YYYY년 MM월 DD일');
                break;
            case 'YMDHM':
                dateNm = dayjs(date).format('YYYY-MM-DD HH:mm');
                break;
            default:
                dateNm = dayjs(date).format('YY-MM-DD');
                break;
        }
    }

    return dateNm;

}