const validate = data => {
    const error = {};


    if(!data.name.trim()) {
        error.name = 'نام خود را وارد کنید'
    } else {
        delete error.name
    }

    if(!data.password){
        error.password = 'رمز خود را وارد کنید'
    } else if(data.password.length < 6) {
        error.password = 'رمز باید بیشتر از 6 کاراکتر باشد'
    } else {
        delete error.password
    }

    return error
}
export {validate}