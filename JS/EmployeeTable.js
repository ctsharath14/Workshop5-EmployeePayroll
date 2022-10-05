let employeePayrollList;
window.addEventListener('DOMContentLoaded', () => {
    employeePayrollList = getEmployeeDataFromStorage();
    document.querySelector('.emp-count').textContent = employeePayrollList.length;
    createInnerHTML();
    localStorage.removeItem('edit-emp');
});

const getEmployeeDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList')
        ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHTML = () => {
    if (employeePayrollList.length == 0) return;
    const headerHtml = `
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>`;

    let innerHtml = `${headerHtml}`;
    for (const employeePayrollData of employeePayrollList) {
        innerHtml = `${innerHtml}
        <tr>
        <td>
            <img class="profile" alt="profileImage" src="${employeePayrollData._profilePic}">
        </td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>
            ${getDeptHtml(employeePayrollData._department)}
        </td>
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
            <img id="${employeePayrollData._id}" alt="edit" src="../assets/icons/create-black-18dp.svg" onClick=update(this)>
            <img id="${employeePayrollData._id}" alt="delete" src="../assets/icons/delete-black-18dp.svg" onClick=remove(this)>
        </td>
    </tr>`;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const createEmployeePayrollJson = () => {
    let employeePayrollList = [];
    return employeePayrollList;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}

const remove = (data) => {
    let employeeData =  employeePayrollList.find(empData => empData._id == data.id);
    if(!employeeData)
        return;
    const index = employeePayrollList.map(empData => empData._id).indexOf(employeeData._id);
    employeePayrollList.splice(index, 1);
    localStorage.setItem('EmployeePayrollList', JSON.stringify(employeePayrollList));
    document.querySelector('.emp-count').textContent = employeePayrollList.length;
    createInnerHTML();
}

const update = (data) => {
    let employeeData = employeePayrollList.find(empData => empData._id == data.id);
    if (!employeeData)
        return;
    localStorage.setItem('edit-emp', JSON.stringify(employeeData));
    window.location.replace(site_properties.payroll);
}