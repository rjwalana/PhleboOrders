const PhleboOrder = require("../models/PhleboOrder");

// GET METHOD
const getOrder = async (req, res) => {
  const id = req.params.id;
  const order = await PhleboOrder.findById(id, {});
  try {
    res.status(200).json(order);
    console.log(order);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

//POST METHOD
const addOrder = async (req, res) => {
  const phleboOrder = new PhleboOrder({
    Order_id: req.body.Order_id,
    Service_date: req.body.Service_date,
    Priority: req.body.Priority,
    Fasting: req.body.Fasting,
    Timed_Draw: req.body.Timed_Draw,
    Requested_draw_time: req.body.Requested_draw_time,
    Patient_ID: req.body.Patient_ID,
    Patient_first_name: req.body.Patient_first_name,
    Patient_middle_name: req.body.Patient_middle_name,
    Patient_last_name: req.body.Patient_last_name,
    Patient_dob: req.body.Patient_dob,
    Patient_gender: req.body.Patient_gender,
    Patient_street_address: req.body.Patient_street_address,
    Patient_city: req.body.Patient_city,
    Patient_state: req.body.Patient_state,
    Patient_zip: req.body.Patient_zip,
    Patient_phone_number: req.body.Patient_phone_number,
    Primary_insurance: req.body.Primary_insurance,
    Primary_insurance_details: req.body.Primary_insurance_details,
    Secondary_insurance: req.body.Secondary_insurance,
    Secondary_insurance_details: req.body.Secondary_insurance_details,
    Client_ID: req.body.Client_ID,
    Client_name: req.body.Client_name,
    Client_street: req.body.Client_street,
    Client_city: req.body.Client_city,
    Client_state: req.body.Client_state,
    Client_zip: req.body.Client_zip,
    Client_phone: req.body.Client_phone,
    Provider_first_name: req.body.Provider_first_name,
    Provider_middle_name: req.body.Provider_middle_name,
    Provider_last_name: req.body.Provider_last_name,
    Provider_NPI: req.body.Provider_NPI,
    Service_street_address: req.body.Service_street_address,
    Service_city: req.body.Service_city,
    Service_state: req.body.Service_state,
    Service_zip: req.body.Service_zip,
    DX_Codes: req.body.DX_Codes,
    Lab_tests_collected: req.body.Lab_tests_collected,
    Laboratory: req.body.Laboratory,
    Drop_Off_Date: req.body.Drop_Off_Date,
    Drop_Off_Time: req.body.Drop_Off_Time,
  });
  try {
    const order = await phleboOrder.save();
    res.status(200).json(order);
    console.log(order);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

//UPDATE
const updateOrder = async (req, res) => {
  const id = req.params.id;
  const updatedorder = await PhleboOrder.findByIdAndUpdate(id, {
    Order_id: req.body.Order_id,
    Service_date: req.body.Service_date,
    Priority: req.body.Priority,
    Fasting: req.body.Fasting,
    Timed_Draw: req.body.Timed_Draw,
    Requested_draw_time: req.body.Requested_draw_time,
    Patient_ID: req.body.Patient_ID,
    Patient_first_name: req.body.Patient_first_name,
    Patient_middle_name: req.body.Patient_middle_name,
    Patient_last_name: req.body.Patient_last_name,
    Patient_dob: req.body.Patient_dob,
    Patient_gender: req.body.Patient_gender,
    Patient_street_address: req.body.Patient_street_address,
    Patient_city: req.body.Patient_city,
    Patient_state: req.body.Patient_state,
    Patient_zip: req.body.Patient_zip,
    Patient_phone_number: req.body.Patient_phone_number,
    Primary_insurance: req.body.Primary_insurance,
    Primary_insurance_details: req.body.Primary_insurance_details,
    Secondary_insurance: req.body.Secondary_insurance,
    Secondary_insurance_details: req.body.Secondary_insurance_details,
    Client_ID: req.body.Client_ID,
    Client_name: req.body.Client_name,
    Client_street: req.body.Client_street,
    Client_city: req.body.Client_city,
    Client_state: req.body.Client_state,
    Client_zip: req.body.Client_zip,
    Client_phone: req.body.Client_phone,
    Provider_first_name: req.body.Provider_first_name,
    Provider_middle_name: req.body.Provider_middle_name,
    Provider_last_name: req.body.Provider_last_name,
    Provider_NPI: req.body.Provider_NPI,
    Service_street_address: req.body.Service_street_address,
    Service_city: req.body.Service_city,
    Service_state: req.body.Service_state,
    Service_zip: req.body.Service_zip,
    DX_Codes: req.body.DX_Codes,
    Lab_tests_collected: req.body.Lab_tests_collected,
    Laboratory: req.body.Laboratory,
    Drop_Off_Date: req.body.Drop_Off_Date,
    Drop_Off_Time: req.body.Drop_Off_Time,
  });
  try {
    res.status(200).json(updatedorder);
    console.log(updatedorder);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

//DELETE
const deleteOrder = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const deletedorder = await PhleboOrder.findByIdAndDelete(id, {});
  try {
    res.status(200).json(deletedorder);
    console.log(deletedorder);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

module.exports = {
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
};
