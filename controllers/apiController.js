const PhleboOrder = require("../models/PhleboOrder");
const phleboOrderDataServiceProvider = require("../services/PhleboOrderDataServiceProvider");
const s3ServiceProvider = require("../services/s3ServiceProvider");

// const AWS = require("aws-sdk");
const axios = require("axios");

//GET METHOD for all orders
const getAllOrders = async (req, res) => {
  try {
    let allorders = await phleboOrderDataServiceProvider.readallorders();
    res.status(200).json({
      success: true,
      message: "All Orders reading successfull!",
      data: allorders,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "All Orders reading failed!",
    });
  }
};

// GET METHOD
const getOrder = async (req, res) => {
  try {
    const id = req.params.id;
    let order = await phleboOrderDataServiceProvider.readorder(id);
    res.status(200).json({
      success: true,
      message: "Order reading successfull!",
      data: order,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Order reading failed!",
    });
  }
};

//POST METHOD
const createOrder = async (req, res) => {
  try {
    let orderData = {
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
    };
    let createdOrder = await phleboOrderDataServiceProvider.create(orderData);
    res.status(200).json({
      success: true,
      message: "Order created successfull!",
      data: createdOrder,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Order creation failed!",
    });
  }
};

//PUT METHOD
const updateOrder = async (req, res) => {
  try {
    const id = req.params.id;
    let updatedorderData = {
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
    };
    let updatedOrder = await phleboOrderDataServiceProvider.update(
      id,
      updatedorderData
    );
    res.status(200).json({
      success: true,
      message: "Order update successfull!",
      data: updatedOrder,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Order update failed!",
    });
  }
};

//DELETE METHOD
const deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    let deletedOrder = await phleboOrderDataServiceProvider.delete(id);
    res.status(200).json({
      success: true,
      message: "Order deletion successfull!",
      data: deletedOrder,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Order deletion failed!",
    });
  }
};

//Paginate
const paginatedOrders = async (req, res) => {
  try {
    const page = req.params.page;
    const size = req.params.limit;

    const paginatedOrders = await phleboOrderDataServiceProvider.paginate(
      page,
      size
    );
    res.status(200).json({
      success: true,
      message: "Orders pagination successfull!",
      data: paginatedOrders,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Orders pagination failed!",
    });
  }
};

const upload = async (req, res) => {
  // Upload the file to S3
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const file = req.files.file;
    const folderName = "uploads";
    console.log("File size:", file.data.length);

    const Location = await s3ServiceProvider.uploadFile(
      file.data,
      folderName,
      file.name
    );
    console.log("File uploaded successfully at Location:", Location);

    // Send the S3 file path to the other API
    const apiUrl = "http://localhost:4000/api/orders/convert-to-base64";
    const payload = { s3Path: Location };
    const apiResponse = await axios.post(apiUrl, payload);
    console.log("API Response:", apiResponse.data);

    return res.json({
      success: true,
      message: "File uploaded and API notified successfully",
    });
  } catch (err) {
    console.log("Error uploading file to S3:", err);
    res.status(500).json({
      success: false,
      message: "Failed to upload the file or notify API",
    });
  }
};

const download = async (req, res) => {
  try {
    const s3Path = req.body.s3Path;
    console.log("Received s3Path:", s3Path);
    const fileData = await s3ServiceProvider.downloadFile(s3Path);
    // Convert the file data to base64
    const base64String = fileData.toString("base64");
    // Send the base64 string in the response
    return res.json({
      success: true,
      message: "file download successfull",
      data: base64String,
    });
  } catch (err) {
    console.log("Error downloading the file:", err);
    res.status(500).json({
      success: false,
      message: "Failed to download the file",
    });
  }
};

module.exports = {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  paginatedOrders,
  upload,
  download,
};
