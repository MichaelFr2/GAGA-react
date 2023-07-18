import React from 'react'
import useStyles from './SearchField.styles'
import SearchIcon from '../../icons/SearchIcon'

const SearchField = () => {
    const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <input
        className={classes.searchField}
        placeholder="Поиск"
      />
      <SearchIcon className={classes.searchIcon}/>
    </div>
  )
}

export default SearchField