import React from 'react'
import { FlatList, Text, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

import { Colors } from '_styles'

import styles from './styles'

const List = ({ isLoading, listData, emptyMessage, renderItem, loadNextItems, ...props }) => {
  const renderEmpty = () => !isLoading && !listData.length && <Text>{emptyMessage}</Text>

  const renderFooter = () =>
    isLoading && <ActivityIndicator color={Colors.BLACK} size='large' style={styles.loader} />

  return (
    <FlatList
      data={listData}
      keyExtractor={(item, index) => `${index}-${item.id}`}
      renderItem={renderItem}
      onEndReached={loadNextItems}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
      ListEmptyComponent={renderEmpty}
      {...props}
    />
  )
}

List.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  listData: PropTypes.instanceOf(Array),
  emptyMessage: PropTypes.string.isRequired,
  renderItem: PropTypes.instanceOf(Object).isRequired,
  loadNextItems: PropTypes.func,
}

List.defaultProps = {
  listData: [],
  loadNextItems: () => {},
}

export default List
