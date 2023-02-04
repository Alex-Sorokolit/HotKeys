import { useEffect, useState } from 'react';

export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  // const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(isOpen => !isOpen);

  // return { isOpen, open, close, toggle };
  return { isOpen, toggle, close };
};
export const useConfirmToggle = (initialState = false) => {
  const [isConfirmOpen, SetIsConfirmOpen] = useState(initialState);
  // const open = () => setIsOpen(true);
  const confirmClose = () => SetIsConfirmOpen(false);
  const confirmToggle = () => SetIsConfirmOpen(isOpen => !isOpen);

  // return { isOpen, open, close, toggle };
  return { isConfirmOpen, confirmToggle, confirmClose };
};
