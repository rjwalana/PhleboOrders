const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

//PhleboOrders

const PhleboOrderSchema = new mongoose.Schema({
  Order_id: {
    type: String,
    required: true,
  },

  Service_date: {
    type: Date,
    default: Date.now,
  },

  Priority: {
    type: String,
    required: true,
  },

  Fasting: {
    type: String,
    required: true,
  },

  Timed_Draw: {
    type: String,
    required: true,
  },

  Requested_draw_time: {
    type: String,
    required: true,
  },

  Patient_ID: {
    type: String,
    required: true,
  },

  Patient_first_name: {
    type: String,
    required: true,
  },

  Patient_middle_name: {
    type: String,
  },

  Patient_last_name: {
    type: String,
    required: true,
  },

  Patient_dob: {
    type: Date,
    required: true,
  },

  Patient_gender: {
    type: String,
    required: true,
  },

  Patient_street_address: {
    type: String,
    required: true,
  },

  Patient_city: {
    type: String,
    required: true,
  },

  Patient_state: {
    type: String,
    required: true,
  },

  Patient_zip: {
    type: String,
    required: true,
  },

  Patient_phone_number: {
    type: String,
    required: true,
  },

  Primary_insurance: {
    type: String,
  },

  Primary_insurance_details: {
    type: String,
  },

  Secondary_insurance: {
    type: String,
  },

  Secondary_insurance_details: {
    type: String,
  },

  Client_ID: {
    type: String,
    required: true,
  },

  Client_name: {
    type: String,
    required: true,
  },

  Client_street: {
    type: String,
    required: true,
  },

  Client_city: {
    type: String,
    required: true,
  },

  Client_state: {
    type: String,
    required: true,
  },

  Client_zip: {
    type: String,
    required: true,
  },

  Client_phone: {
    type: String,
    required: true,
  },

  Provider_first_name: {
    type: String,
    required: true,
  },

  Provider_middle_name: {
    type: String,
  },

  Provider_last_name: {
    type: String,
    required: true,
  },

  Provider_NPI: {
    type: String,
    required: true,
  },

  Service_street_address: {
    type: String,
    required: true,
  },

  Service_city: {
    type: String,
    required: true,
  },

  Service_state: {
    type: String,
    required: true,
  },

  Service_zip: {
    type: String,
    required: true,
  },

  DX_Codes: {
    type: String,
    required: true,
  },

  Lab_tests_collected: {
    type: String,
    required: true,
  },

  Laboratory: {
    type: String,
    required: true,
  },

  Drop_Off_Date: {
    type: Date,
    required: true,
  },

  Drop_Off_Time: {
    type: String,
    required: true,
  },
});

PhleboOrderSchema.plugin(mongoosePaginate);

//PhleboOrderSchema
const PhleboOrder = mongoose.model("PhleboOrder", PhleboOrderSchema);
module.exports = PhleboOrder;
