export class CalculatePricing {
    calculatePricing(products) {
        return products.reduce((total, product) => total + product.price, 0)
    }
}