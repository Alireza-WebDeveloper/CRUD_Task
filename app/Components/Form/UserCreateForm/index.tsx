'use client';
import { FC } from 'react';
import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../FormikControl/Index';
import * as Yup from 'yup';

// Types

export interface InitialUserCreateForm {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

type UserCreateFormProps = {
  handleSubmitForm(values: InitialUserCreateForm): Promise<void>;
};
// InitialValues
const initialValues: InitialUserCreateForm = {
  email: '',
  first_name: '',
  last_name: '',
  avatar: 'https://source.unsplash.com/random/200x200?person',
};

// Validation
const validationSchema = Yup.object().shape({
  email: Yup.string().required('email Is Required.'),
  first_name: Yup.string().required('first Name Is Required.'),
  last_name: Yup.string().required('Last name Is Required.'),
});

const UserCreateForm: FC<UserCreateFormProps> = ({ handleSubmitForm }) => {
  // Return JSX
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
      validationSchema={validationSchema}
    >
      {(FormikProps) => {
        return (
          <Formik_Form>
            <div className="flex flex-col space-y-5">
              <FormikControl
                control="input"
                name="email"
                type="text"
                label="email"
              />
              <FormikControl
                control="input"
                name="first_name"
                type="text"
                label="first name"
              />
              <FormikControl
                control="input"
                name="last_name"
                type="text"
                label="last name"
              />
              <section className="flex flex-col space-y-2">
                <button
                  type="submit"
                  className="bg-green-600 w-full py-2 rounded-lg capitalize px-4 text-2xl text-white"
                >
                  create
                </button>
              </section>
            </div>
          </Formik_Form>
        );
      }}
    </Formik>
  );
};

export default UserCreateForm;
