import React from 'react';
import ButtonAction from '../../Ui/ButtonAction';
import { GrAlert } from 'react-icons/gr';

interface UserDeleteFormProps {
  handleSubmitForm(): Promise<void>;
  closeModal(): void;
}

const UserDeleteForm: React.FC<UserDeleteFormProps> = ({
  handleSubmitForm,
  closeModal,
}) => {
  return (
    <>
      <div className="flex flex-col items-center space-y-3 w-full">
        {/* Alert icon with a background */}
        <span className="p-3 bg-yellow-300 rounded-full">
          <GrAlert />
        </span>
        {/* Action title */}
        <span className="text-2xl font-bold">are you sure delete user?</span>
        {/* Action description */}
        <span className="text-sm text-gray-500">delete</span>
        {/* Action buttons */}
        <div className="flex items-center gap-3">
          {/* Submit button */}
          <ButtonAction
            className="bg-red-500 hover:bg-red-700"
            onClick={handleSubmitForm}
          >
            Confirm
          </ButtonAction>
          {/* Cancel button */}
          <ButtonAction
            className="bg-blue-500 hover:bg-blue-700"
            onClick={closeModal}
          >
            Cancel
          </ButtonAction>
        </div>
      </div>
    </>
  );
};

export default UserDeleteForm;
