import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

// @ts-ignore
function RateStars({rating}) {
    // @ts-ignore
    const [value, setValue] = React.useState(rating)


    // @ts-ignore
    const handleChange = value => {
        setValue(value)
    };

        // @ts-ignore
        return (
            <span>
        <Rate tooltips={desc} onChange={handleChange} value={value} />
                {/*{value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}*/}
      </span>
        );
    }

export default RateStars