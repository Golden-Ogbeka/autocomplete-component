import React from 'react';
import styles from './styles.module.css';

// Component to reset the state
const ClearInput = ({
  searchInput,
  setSearchInput,
}: {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const executeClear = () => {
    setSearchInput('');
  };

  if (!searchInput) return null;

  return (
    <button type='button' className={styles.clear} onClick={executeClear}>
      x
    </button>
  );
};

export default ClearInput;
