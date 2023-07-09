
export function  isValidDate(dateStr: string): boolean {

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    return dateRegex.test(dateStr);
}