import React from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from '../../containers/HeaderContainer';
import ProjectContainer from '../../containers/ProjectContainer';
import BoardActionsContainer from '../../containers/BoardActionsContainer';
import BoardsContainer from '../../containers/BoardsContainer';

import styles from './Fixed.module.scss';

function Fixed({ projectId, board }) {
  return (
    <div>
      {board && !board.isFetching ? (
        <div className={styles.headerWrapper}>
          <BoardsContainer />
          <div className={styles.wrapper}>
            <HeaderContainer />
            <BoardActionsContainer />
          </div>
        </div>
      ) : (
        <div className={styles.wrapperFull}>
          <HeaderContainer />
          {projectId && <ProjectContainer />}
        </div>
      )}
    </div>
  );
}

Fixed.propTypes = {
  projectId: PropTypes.string,
  board: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Fixed.defaultProps = {
  projectId: undefined,
  board: undefined,
};

export default Fixed;
