import React from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

type PropsType = {
    rating: number
}

function RateStars(props:PropsType) {

    const [value, setValue] = React.useState(props.rating)


    const handleChange = (value:number) => {
        setValue(value)
    };

        return (
            <span>
        <Rate tooltips={desc} onChange={handleChange} value={value} className='stars'
         />
      </span>
        );
    }

export default RateStars