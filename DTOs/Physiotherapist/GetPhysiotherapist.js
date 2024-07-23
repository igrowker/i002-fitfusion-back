class GetPhysiotherapist {
    constructor({ PhysiotherapistId, FullName, ContactEmail, ContactPhone, Location, Description }) {
        this.id = PhysiotherapistId;
        this.name = FullName;
        this.email = ContactEmail;
        this.phone = ContactPhone;
        this.residence = Location;
        this.description = Description;
    }
}

export default GetPhysiotherapist;