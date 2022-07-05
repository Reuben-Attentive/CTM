import React from 'react'
import { Layout, Button, Row, Col, Card} from 'antd';
const { Content } = Layout;

function LevelCard() {
  return (
<div className='level-card'>
    <div>Level1</div>
    <div className='level-card-score'>
        <p>Best Score: 80/100</p>
        <p>Least Score: 80/100</p>
        <p>Last Score: 80/100</p>
    </div>
    <div style={{width:"inherit"}}>
        <Button style={{width:"100%"}} type="primary">GO!!</Button>
    </div>
</div>
    
  )
}

export default LevelCard