const express = require("express");
const helmet = require("helmet");

const cohortRouter = require("./routes/cohort");
const studentRouter = require("./routes/students");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/students", studentRouter);
server.use("/api/cohorts", cohortRouter);

module.exports = server;
