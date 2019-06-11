const mongoose = require('mongoose'); //
const locationSchema = {
    title : {
        type : String,
        match : /^[A-Za-z0-9가-힣\/\-\_\$]{2,12}$/,
        required: [true, '특수문자를 제외한 2~12자가 필요합니다 ($,_,-,는 허용)'],
    },
    parent : {
        type :String,
        required: false,
        default:'korea',
    }
}
const Location = new mongoose.Schema(locationSchema,{
    timestamps: true
});

module.exports = {
    Location : mongoose.model('Location', Location),
    locationSchema
};