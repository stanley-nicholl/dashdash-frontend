import React from 'react'
import Item from './Item'

function mapItems(current, items) {
  return items.map((el, index) => {
    let itemStatus = 'upcoming'
    if (index === current) itemStatus = 'current'
    if (index < current) itemStatus = 'previous'
    return <Item key={ index } itemStatus={ itemStatus } title={ el.name } itemSecondsLeft={ el.itemSecondsLeft } />
  })
}

const ItemsContainer = ({ currentItemIndex, items }) => {
  return (
    <div className="container" style={{ overflow: 'scroll', height: '100vh', paddingTop: '165px', paddingBottom: '70px' }}>
      { items ? mapItems(currentItemIndex, items) : 'There are no events for this plan' }
    </div>
  )
}

export default ItemsContainer