export const parseDate = function parseDate(dateString: any) {
    const parsedDate = new Date(dateString);
    if (isNaN(parsedDate.getTime())) {
       return null;
    }
    return parsedDate;
   }
  