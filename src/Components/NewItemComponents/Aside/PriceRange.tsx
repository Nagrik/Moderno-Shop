import React from 'react'
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import CategoryAside from "../../Products/ProductsItem/CategoryAside";

export default function PriceRange(){
    const [inputValue, setInputValue] = React.useState(1);
    const onChange = (value:number) => {
        setInputValue(value)
    };
    return(
        // state = {
        //     inputValue: 1,
        // };

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
                        value={typeof inputValue === 'number' ? inputValue : 0}
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