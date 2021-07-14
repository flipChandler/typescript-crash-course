export class Product {
   
    constructor(private description: string,
                private price: number,
                private quantity: number){} 

                getDescription(): string {
                    return this.description;
                }

                setDescription(description: string) {
                    this.description = description;
                }

                getPrice(): number {
                    return this.price;
                }

                setPrice(price: number) {
                    this.price = price;
                }

                getQuantity(): number {
                    return this.quantity;
                }

                setQuantity(quantity: number): void {
                    this.quantity = quantity;
                }
}


            
// shorthand for declaring attributes and constructor in a class