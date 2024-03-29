import { useState } from 'react';
import TextInput from '../TextInput';
import styles from './styles.module.css';
import ResultMenu from '../ResultMenu';
import useGetData from '../hooks/useGetData';
import LoadingIndicator from '../LoadingIndicator';
import ClearInput from '../ClearInput';

const InputContainer = () => {
  const [searchInput, setSearchInput] = useState('');
  const { error, loading } = useGetData();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div
      className={styles.container}
      tabIndex={100} // Did this to allow blur function recognize presence of child
      onBlur={(e) => {
        const currentTarget = e.currentTarget;

        // Give browser time to focus the next element
        requestAnimationFrame(() => {
          // Check if the new focused element is a child of the original container
          if (!currentTarget.contains(document.activeElement)) {
            closeMenu();
          }
        });
      }}
    >
      {/* Show loading state or error */}
      <div className={styles.feedback}>
        {loading && <LoadingIndicator text='Fetching Countries' />}
        {error && <span className={styles.error}>{error}</span>}
      </div>

      {/* Input for text search */}
      <TextInput
        searchInput={searchInput}
        updateInput={updateInput}
        closeMenu={closeMenu}
        openMenu={openMenu}
      />

      {/* Clear button */}
      <ClearInput searchInput={searchInput} setSearchInput={setSearchInput} />

      {/* Menu to show all matching results */}
      {showMenu && (
        <ResultMenu
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          closeMenu={closeMenu}
        />
      )}
    </div>
  );
};

export default InputContainer;
