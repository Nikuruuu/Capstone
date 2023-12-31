import Joi from 'joi';

const studentProfileSchema = Joi.object({
  lrn: Joi.string().required(),
  lastName: Joi.string().required(),
  firstName: Joi.string().required(),
  middleName: Joi.string().allow('', null), // Optional
  nameExtension: Joi.string().allow('', null), // Optional
  gender: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
  age: Joi.number().integer().required(),
  schoolYear: Joi.string().required(),
  grade: Joi.string().required(),
  section: Joi.string().required(),
  is4p: Joi.boolean().required(),
  parentName1: Joi.string().required(),
  parentContact1: Joi.string().required(),
  parentName2: Joi.string().allow('', null), // Optional
  parentContact2: Joi.string().allow('', null), // Optional
  address: Joi.string().required(),
  status: Joi.string().valid('Active', 'Archived', 'Inactive'),
});

export const validateStudentProfile = (data) => {
  return studentProfileSchema.validate(data);
};

const headerMappings = {
  LRN: 'lrn',
  'Last Name': 'lastName',
  'First Name': 'firstName',
  'Middle Name': 'middleName',
  'Name Extension': 'nameExtension',
  Gender: 'gender',
  'Birth Date': 'dateOfBirth',
  Age: 'age',
  'School Year': 'schoolYear',
  Grade: 'grade',
  Section: 'section',
  "4P's?": 'is4p',
  'Parent Name1': 'parentName1',
  'Parent Contact1': 'parentContact1',
  'Parent Name2': 'parentName2',
  'Parent Contact2': 'parentContact2',
  Address: 'address',
  Status: 'status',
};

export const mapHeaderToSchemaKey = (header) => {
  return headerMappings[header] || header;
};
