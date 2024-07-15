class GetNutricionist {
    constructor({ NutricionistsId, FullName, ContactEmail, ContactPhone, Location, Description }) {
        this.id = NutricionistsId;
        this.name = FullName;
        this.email = ContactEmail;
        this.phone = ContactPhone;
        this.residence = Location;
        this.description = Description;
    }
}

export default GetNutricionist;