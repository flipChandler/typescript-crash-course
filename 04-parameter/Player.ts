class Player {
   
    constructor(private firstName: string,
                private lastName: string,
                private age: number){} 

                getFirstName(): string {
                    return this.firstName;
                }

                setFirstName(firstName: string) {
                    this.firstName = firstName;
                }

                getLastName(): string {
                    return this.lastName;
                }

                setLastName(lastName: string) {
                    this.lastName = lastName;
                }

                getAge(): number {
                    return this.age;
                }

                setAge(age: number): void {
                    this.age = age;
                }
}


            
// shorthand for declaring attributes and constructor in a class