const PhleboOrder = require("../models/PhleboOrder");
const phleboOrderDataServiceProvider = require("../services/PhleboOrderDataServiceProvider");

require("dotenv").config();
const AWS = require("aws-sdk");
const fs = require("fs");
// const path = require("path");

//configuring the AWS environment
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// initialize s3
const s3 = new AWS.S3();

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
const paginatedOrders = (req, res) => {
  try {
    const page = req.params.page;
    const size = req.params.limit;
    const getPagination = (page, size) => {
      const limit = size ? +size : 3;
      const offset = page ? page * limit : 0;

      return { limit, offset };
    };
    const { limit, offset } = getPagination(page, size);

    PhleboOrder.paginate({}, { offset, limit }, function (err, data) {
      res.send({
        totalItems: data.totalDocs,
        PhleboOrders: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

const upload = (req, res) => {
  try {
    // if there is no file
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      //Use the name of the input field (i.e. "file") to retrieve the uploaded file
      const file = req.files.file;
      console.log(file.name);

      //read file and upload data (stream)
      fs.readFile(file.tempFilePath, function (err, data) {
        if (err) throw err; // Something went wrong!

        //configuring parameters
        const params = {
          Bucket: process.env.AWS_S3_BUCKET,
          Body: data,
          Key: "folder/" + Date.now() + "_" + file.name,
        };
        // Upload the file to S3
        s3.upload(params, (err, data) => {
          //delete file from temp
          fs.unlink(file.tempFilePath, function (err) {
            if (err) {
              console.log(err);
            }
          });

          if (err) {
            console.error("Error uploading the file:", err);
            return res.status(500).json({ error: "Failed to upload the file" });
          } else {
            console.log("File uploaded successfully. Location:", data.Location);
            return res.json({ success: true, location: data.Location });
          }
        });
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

const download = (req, res) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: req.params.filename,
  };

  // Download the file from S3
  s3.getObject(params, (err, data) => {
    if (err) {
      console.error("Error downloading the file:", err);
      return res.status(500).json({ error: "Failed to download the file" });
    } else {
      // Set the appropriate content type for the response
      res.setHeader("Content-Type", data.ContentType);
      // res.setHeader("Content-Type", "application/pdf");

      // Send the file data in the response
      res.send(data.Body);
    }
  });
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
