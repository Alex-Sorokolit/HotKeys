export const Confirm = ({ close, deleteCategory, id, category, toggle }) => {
  const confirm = () => {
    deleteCategory(id, category);
    toggle();
  };

  return (
    <div>
      <p>Are you sure want delete?</p>
      <button type="button" onClick={confirm}>
        Confirm delete
      </button>
      <button type="button" onClick={close}>
        Close modal
      </button>
    </div>
  );
};
