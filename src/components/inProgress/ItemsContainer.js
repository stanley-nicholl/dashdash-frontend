import React from 'react'
import Item from './Item'

const ItemsContainer = () => {
  return (
    <div className="container" style={{ overflow: 'scroll', height: '100vh', paddingTop: '165px', paddingBottom: '70px' }}>
      <Item style='previous' title='yawn' time='10'/>
      <Item style='previous' title='get dressed' time='10'/>
      <Item style='current' title='shower' time='15'/>
      <Item style='upcoming' title='eat breakfast' time='12'/>
      <Item style='upcoming' title='yodel' time='15'/>
      <Item style='upcoming' title='yodel' time='15'/>
      <Item style='upcoming' title='yodel' time='15'/>
      <Item style='upcoming' title='yodel' time='15'/>
      <Item style='upcoming' title='yodel' time='15'/>
      <Item style='upcoming' title='yodel' time='15'/>
      <Item style='upcoming' title='yodel' time='15'/>
      <Item style='upcoming' title='yodel' time='15'/>
      <Item style='upcoming' title='yodel' time='15'/>
    </div>
  )
}

export default ItemsContainer