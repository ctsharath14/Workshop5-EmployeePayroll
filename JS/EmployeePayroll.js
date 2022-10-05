class EmployeePayroll {

    get id(){
        return this._id;
    }
    set id(id){
        this._id=id;
    }
     
    get name() {
        return this._name;
    }
    
    set name(name) {
        const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) {
            this._name=name;
        } else {
            throw "Name is incorrect";
        }
    }

    get profilePic() {
        return this._profilePic;
    }
    
    set profilePic(profilePic){
        this._profilePic=profilePic;
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender=gender;
    }

    get department(){
        return this._department;
    }
    set department(department){
        this._department=department;
    }

    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary=salary;
    }

    get notes(){
        return this._notes;
    }
    set notes(notes){
        this._notes=notes;
    }

    get startDate(){
        return this._startDate;
    }

    set startDate(startDate){
        let datee = new Date();
        if(startDate<=datee)
        {
        this._startDate = startDate;
        }
        else
        throw 'StartDate is incorrect';
    }
}
