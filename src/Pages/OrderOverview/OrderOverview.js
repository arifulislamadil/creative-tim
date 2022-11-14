import React from 'react';
import "./OderOverview.css"

const OrderOverview = () => {
    return (
        <div className='order-overview'>
            <h3>Orders overview
            </h3>
            <span> 24% this month</span>
            <div className='overview-body'>
                <div>
                    <h3>$2400, Design changes</h3>
                    <span>22 DEC 7:20 PM</span>
                </div>
                <div>
                    <h3>New order #1832412</h3>
                    <span>22 DEC 7:20 PM</span>
                </div>
                <div>
                    <h3>Server payments for April</h3>
                    <span>22 DEC 7:20 PM</span>
                </div>
                <div>
                    <h3>New card added for order #4395133</h3>
                    <span>22 DEC 7:20 PM</span>
                </div>
                <div>
                    <h3>Unlock packages for development</h3>
                    <span>22 DEC 7:20 PM</span>
                </div>
                <div>
                    <h3>$2400, Design changes</h3>
                    <span>22 DEC 7:20 PM</span>
                </div>
            </div>
        </div>
    );
};

export default OrderOverview;