var express = require('express');
var router = express.Router();

var NoteController = require('../controller/note.controller');

var ProjectController = require('../controller/project.controller');
var ClientController = require('../controller/client.controller');

var InvoiceController = require('../controller/invoice.controller');

var ChamberController = require('../controller/chamber.controller');
var ChamberTypeController = require('../controller/chamber-type.controller');
var RateController = require('../controller/rate.controller');
var DepartmentController = require('../controller/department.controller');
var CropController = require('../controller/crop.controller');
var ResourceController = require('../controller/resource.controller');
var ChamberUsageReportController = require('../controller/chamber-usage-report.controller');

var ApplicationSettingsController = require('../controller/application-settings.controller');

// Home Route //-------------------------------------------------
// Get All the Notes
router.get('/notes', NoteController.getNoteList);

// Create a Note
router.post('/note/create', NoteController.addNote);

// Update an existing note
router.post('/note/update', NoteController.updateNote);

// Delete a note
router.post('/note/delete', NoteController.deleteNote);

// Project Routes //-------------------------------------------------

// Get Project List
router.get('/projects', ProjectController.getProjectList);

// Get Project By Id
router.get('/project/:id', ProjectController.getProjectById);

//Get Projects By Client
router.get('/projects/client/:id', ProjectController.getProjectsByClient);

// Create Project
router.post('/project/create', ProjectController.createProject);

// Update Project
router.post('/project/update', ProjectController.updateProject);

// Client Routes //-------------------------------------------------

// Get Client List
router.get('/clients', ClientController.getClientList);

// Get Client by Id
router.get('/client/:id', ClientController.getClientById);

// Create Client
router.post('/client/create', ClientController.createClient);

// Update Client
router.post('/client/update', ClientController.updateClient);

// Invoice Routes //-------------------------------------------------

// Get Invoice Project List
router.get('/invoice/projects/:invoicePeriodStartDate/:invoicePeriodEndDate', InvoiceController.getInvoiceProjectsList);

// Invoice Projects
router.post('/invoice/projects', InvoiceController.invoiceProjects);

// Get Invoice List
router.get('/invoices/:invoiceHistoryStartDate/:invoiceHistoryEndDate',InvoiceController.getInvoiceList);

// Generate Invoice PDFs
router.post('/invoices/generatePDFs', InvoiceController.generateInvoicePDFs);

// Get Revert Invoice Project List
router.get('/invoice/revert/projects',InvoiceController.getRevertLastInvoiceProjectList);

// Revert give invoice data
router.post('/invoice/revert',InvoiceController.revertLastInvoice);

// Get Unpaid Invoice List
router.get('/unpaidInvoices/:projectId',InvoiceController.getUnpaidInvoiceList);

// Mark Invoices as Paid
router.post('/unpaidInvoices/setPaid',InvoiceController.setInvoicesAsPaid);

// Chamber Routes //----------------------------------------------------

// Get chamber List
router.get('/chambers', ChamberController.getChamberList);

// Get A Single Chamber by Name
router.get('/chamber/:id', ChamberController.getChamberByName);

// Create a Chamber
router.post('/chamber/create', ChamberController.createChamber);

// Update a Chamber
router.post('/chamber/update', ChamberController.updateChamber);

// Chamber Type Routes //-------------------------------------------------

// Get chamber Type List
router.get('/chamberTypes', ChamberTypeController.getChamberTypeList);

// Get A Single Chamber Type by Name
router.get('/chamberType/:id', ChamberTypeController.getChamberTypeByName);

// Create a Chamber Type
router.post('/chamberType/create', ChamberTypeController.createChamberType);

// Update a Chamber Type
router.post('/chamberType/update', ChamberTypeController.updateChamberType);

// Rate Routes //----------------------------------------------------------

// Get Rate List
router.get('/rates', RateController.getRateList);

// Get a Single Rate by Name
router.get('/rate/:id', RateController.getRateByType);

// Create a Rate
router.post('/rate/create', RateController.createRate);

// Update a Rate
router.post('/rate/update', RateController.updateRate);

// Department Routes //----------------------------------------------------

// Get Department List
router.get('/departments', DepartmentController.getDepartmentList);

// Get Department by Id
router.get('/department/:id', DepartmentController.getDepartmentById);

// Create Department
router.post('/department/create', DepartmentController.createDepartment);

// Update Department
router.post('/department/update', DepartmentController.updateDepartment);

// Crop Routes //-------------------------------------------------

// Get Crop List
router.get('/crops', CropController.getCropList);

// Get Crop by name
router.get('/crop/:id', CropController.getCropByName);

// Create Crop
router.post('/crop/create', CropController.createCrop);

// Update Crop
router.post('/crop/update', CropController.updateCrop);

// Resource Routes //-------------------------------------------------

// Get Resource List
router.get('/resources', ResourceController.getResourceList);

// Get Resource by name
router.get('/resource/:id', ResourceController.getResourceByName);

// Create Resource
router.post('/resource/create', ResourceController.createResource);

// Update Resource
router.post('/resource/update', ResourceController.updateResource);

// Usage Report Routes //-------------------------------------------------

// Get Chamber Usage Report between Dates
router.post('/usageReport/chamber/byDate', ChamberUsageReportController.getChamberUsageReportByDate);

// Settings Routes //-------------------------------------------------

// Get Application Settings
router.get('/applicationSettings', ApplicationSettingsController.getApplicationSettings);

// Set Application Settings
router.post('/applicationSettings', ApplicationSettingsController.setApplicationSettings);

module.exports = router;
