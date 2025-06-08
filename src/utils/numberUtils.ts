/**
 * Rút gọn số lớn thành chuỗi ngắn:
 *  - 1,500 → "1.5k"
 *  - 1,000,000 → "1M"
 *  - 1,000,000,000 → "1B"
 * @param num Số nguyên cần định dạng
 * @returns Chuỗi số đã rút gọn
 */
export const formatNumber = (num: number): string => {
    if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1_000) {
        return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
};

/**
 * Thêm dấu chấm ngăn cách hàng nghìn (ví dụ: 1000000 → "1.000.000")
 */
export const formatNumberWithSeparator = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};