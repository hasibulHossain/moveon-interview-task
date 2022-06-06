/**
 * @since V1.0.0
 * @param {Array} skus - product variation
 * @param {Object} selectedVariantColor - selected variant information
 * @returns {object} - will return found sku
 */
export const searchSelectedVariant = (skus, selectedVariantColor) => {
    return skus.find(sku => {
            if(selectedVariantColor.color.length > 0 && selectedVariantColor.size.length > 0) {
                return sku.props[0] === selectedVariantColor.color[0].id && sku.props[1] === selectedVariantColor.size[0].id;
            }

            if(selectedVariantColor.color.length > 0) {
                return sku.props[0] === selectedVariantColor.color[0].id;
            }

            if(selectedVariantColor.size.length > 0) {
                return sku.props[1] === selectedVariantColor.size[0].id;
            }
            return false;
        }
    );
} 