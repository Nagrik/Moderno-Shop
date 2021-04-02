import React from 'react'
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/dist/antd.css';

export default function PriceRange(){
    const [inputValue, setInputValue] = React.useState(1);
    const onChange = (value:number) => {
        setInputValue(value)
    };
    return(
        <div className="price-range aside__item">
            <div className="aside__title">
                Price Range
            </div>
            <Row>
                <Col span={12}>
                    <Slider
                        min={1}
                        max={100}
                        onChange={onChange}
                        value={inputValue}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={100}
                        style={{ margin: '0 16px' }}
                        value={inputValue}
                        onChange={onChange}
                    />
                </Col>
            </Row>
        </div>
)
}