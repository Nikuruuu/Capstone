const ACTION_TYPES = {
  '/academicYear/create': 'Academic Year',
  '/academicYear/update/:id': 'Academic Year',
  '/academicYear/delete/:id': 'Academic Year',
  '/academicYear/setActive/:id': 'Academic Year',
  '/academicYear/setCompleted/:id': 'Academic Year',
  '/clinicVisit/post': 'Clinic Visit',
  '/clinicVisit/update/:id': 'Clinic Visit',
  '/clinicVisit/deleteData/:id': 'Clinic Visit',
  '/dengueMonitoring/create': 'Dengue Monitoring',
  '/dengueMonitoring/update/:id': 'Dengue Monitoring',
  '/dengueMonitoring/delete/:id': 'Dengue Monitoring',
  '/dengueMonitoring/bulkDelete': 'Dengue Monitoring',
  '/employeeMedical/create': 'Employee Medical',
  '/employeeMedical/update/:id': 'Employee Medical',
  '/employeeMedical/delete/:id': 'Employee Medical',
  '/employeeMedical/bulkDelete': 'Employee Medical',
  '/employeeProfile/create': 'Employee Profile',
  '/employeeProfile/update/:id': 'Employee Profile',
  '/employeeProfile/delete/:id': 'Employee Profile',
  '/employeeProfile/bulkDelete': 'Employee Profile',
  '/events/createEvent': 'Events',
  '/events/updateEvent/:eventIdd': 'Events',
  '/events/deleteEvent/:eventId': 'Events',
  '/feedingProgram/create': 'Feeding Program',
  '/feedingProgram/update/:id': 'Feeding Program',
  '/feedingProgram/delete/:id': 'Feeding Program',
  '/feedingProgram/bulkDelete': 'Feeding Program',
  '/medicineInventory/postItem': 'Medicine Item',
  '/medicineInventory/updateItem/:id': 'Medicine Item',
  '/medicineInventory/deleteItem/:id': 'Medicine Item',
  '/medicineInventory/postIn': 'Medicine In',
  '/medicineInventory/updateIn/:id': 'Medicine In',
  '/medicineInventory/deleteIn/:id': 'Medicine In',
  '/medicineInventory/postDispense': 'Medicine Dispense',
  '/medicineInventory/postDispenseClinicVisit': 'Medicine Dispense',
  '/medicineInventory/updateDispense/:id': 'Medicine Dispense',
  '/medicineInventory/deleteDispense/:id': 'Medicine Dispense',
  '/medicineInventory/postAdjustment': 'Medicine Adjustment',
  '/medicineInventory/updateAdjustment/:id': 'Medicine Adjustment',
  '/medicineInventory/deleteAdjustment/:id': 'Medicine Adjustment',
  '/role/create': 'Role',
  '/role/update/:id': 'Role',
  '/role/delete/:id': 'Role',
  '/role/bulkDelete': 'Role',
  '/studentMedical/create': 'Student Medical',
  '/studentMedical/update/:id': 'Student Medical',
  '/studentMedical/delete/:id': 'Student Medical',
  '/studentMedical/bulkDelete': 'Student Medical',
  '/studentProfile/create': 'Student Profile',
  '/studentProfile/update/:id': 'Student Profile',
  '/studentProfile/delete/:id': 'Student Profile',
  '/studentProfile/bulkDelete': 'Student Profile',
  '/user/create': 'Manage User',
  '/user/update/:id': 'Manage User',
  '/user/delete/:id': 'Manage User',
  '/user/user-settings/:userId': 'Edit Settings',
};

export default ACTION_TYPES;