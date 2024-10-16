import { message } from 'antd';

const success = (mes = 'Success') => {
    message.success(mes);
}

const error = (mes = 'error') => {
    message.success(mes);
}

const warning = (mes = 'warning') => {
    message.warning(mes);
}

export { success, error, warning };