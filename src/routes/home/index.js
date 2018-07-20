import React, { Component } from 'react';
import { Table, Popconfirm, Button } from 'antd';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import style from './home.less';
import head from '../../assets/yay.jpg'
class Content extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        funck: '日'
    }
    onDelete() {
        console.log(123);
    }
    render() {
        console.log(style)
        const name = this.props.name;
        const fuck = this.state.funck;
        const onDelete = this.props.onDelete;
        return (
            <div>
                <div className={style.card}>
                    <div className={style.cardLeft}>
                        APP专享|最高99元新人红包
                </div>
                    <div className={style.cardRight}>
                        立即领取
                </div>
                </div>
                <div className={style.shopCard}>
                    <div className={style.shopCardLeft}>
                        <img src={head} className={style.shopCardLeftImg}></img>
                    </div>
                    <div className={style.shopCardCenter}>
                        APP专享|最高99元新人红包
                    </div>
                    <div className={style.shopCardRight}>
                        立即领取
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;