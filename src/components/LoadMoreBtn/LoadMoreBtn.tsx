import React from 'react';

interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps): JSX.Element {
  const onChange = () => {
    onClick();
  };

  return (
    <button type="button" onClick={onChange}>
      Load more
    </button>
  );
}
