import React from 'react';

const DeleteButton = ({id, deleteHandler}) => {
  const btnDeleteHandler = (e) => {
    deleteHandler(e.target.value);
  }

  return (
    <button value={id} onClick={btnDeleteHandler} type="button">Delete</button>
  )
}

DeleteButton.props = {
  id: React.PropTypes.string.isRequired,
  deleteHandler: React.PropTypes.func.isRequired
}

export default DeleteButton;
