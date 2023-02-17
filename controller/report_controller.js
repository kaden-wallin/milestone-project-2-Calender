//DEPENDENCIES
const reports = require('express').Router()
const db = require('../src/models')
const { Report } = db

//FIND ALL REPORTS
reports.get('/', async (req, res) => {
    try {
        const foundReports = await Report.findAll()
        res.status(200).json(foundReports)
    }
    catch (error) {
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC REPORT
reports.get('/:title', async (req, res) => {
    try {
        const foundReport = await Report.findOne({
            where: { report_title: req.params.title }
        })
        res.status(200).json(foundReport)
    } 
    catch (error) {
        res.status(500).json(error)
    }
})

//CREATE A REPORT
reports.post('/', async (req, res) => {
    try {
        const newReport = await Report.create(req.body)
        res.status(200).json({
            message: `Successfully submitted a report. Thank you` ,
            data: newReport
        })
    } 
    catch(err) {
        res.status(500).json(err)
    }
})


//EXPORT
module.exports = reports