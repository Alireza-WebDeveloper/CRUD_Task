'use client';
import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return { isOpen, closeModal, openModal };
};

export default useModal;
