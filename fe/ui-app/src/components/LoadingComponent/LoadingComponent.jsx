import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function LoadingComponent({children, isLoading, delay = 200}) {
    return (  
        <Spin indicator={<LoadingOutlined style={{ fontSize: 30 }} />} spinning={isLoading} delay={delay}>
            {children}
        </Spin>
    );
}

export default LoadingComponent;