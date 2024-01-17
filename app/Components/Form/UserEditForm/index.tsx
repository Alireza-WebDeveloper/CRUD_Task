'use client';
import { FC } from 'react';
import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../FormikControl/Index';
import * as Yup from 'yup';

// Types

export interface InitialUserEditForm {
  email: string;
  first_name: string;
  last_name: string;
}

type UserEditFormProps = {
  handleSubmitForm(values: InitialUserEditForm): Promise<void>;
  selectUserEdit: any;
};

// Validation
const validationSchema = Yup.object().shape({
  email: Yup.string().required('email Is Required.'),
  first_name: Yup.string().required('first Name Is Required.'),
  last_name: Yup.string().required('Last name Is Required.'),
});

const UserEditForm: FC<UserEditFormProps> = ({
  handleSubmitForm,
  selectUserEdit,
}) => {
  const { email, first_name, last_name } = selectUserEdit;
  // InitialValues
  const initialValues: InitialUserEditForm = {
    email: email,
    first_name,
    last_name,
  };

  // Return JSX
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
      validationSchema={validationSchema}
      enableReinitialize={true}
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
                  edit
                </button>
              </section>
            </div>
          </Formik_Form>
        );
      }}
    </Formik>
  );
};

export default UserEditForm;
