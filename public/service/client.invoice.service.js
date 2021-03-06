'use strict';

angular.module('phytotronAccountingApp')
    .factory('InvoiceService', ['$http', function($http){
        return {
            // Get List of Projects for Invoicing
            getInvoiceProjectsList: function(invoicePeriodStartDate, invoicePeriodEndDate){
                return $http.get('/invoice/projects/'+invoicePeriodStartDate+'/'+invoicePeriodEndDate);
            },

            // Invoice Projects
            invoiceProjects: function(startDate,endDate,projectIds){
                var reqBody = {
                    invoicePeriodStartDate: startDate,
                    invoicePeriodEndDate: endDate,
                    projectIds: projectIds
                };
                return $http.post('/invoice/projects',reqBody);
            },

            // Get Invoice History/List
            getInvoiceList: function(invoiceHistoryStartDate, invoiceHistoryEndDate){
                return $http.get('/invoices/'+invoiceHistoryStartDate+'/'+invoiceHistoryEndDate);
            },

            // Generate Invoice PDFs
            generateInvoicePDFs: function(invoices){
                return $http.post('/invoices/generatePDFs', invoices);
            },

            getRevertLastInvoiceProjectList: function(){
                return $http.get('/invoice/revert/projects');
            },

            revertLastInvoice: function(projectIds){
                var reqBody = {
                    project_ids: projectIds
                };
                return $http.post('/invoice/revert',reqBody);
            },

            getUnpaidInvoiceList: function(projectId){
                return $http.get('/unpaidInvoices/'+projectId);
            },

            setInvoicesAsPaid: function(invoiceIds, payment_date){
                var reqBody = {
                    invoiceIds: invoiceIds,
                    paymentDate: payment_date
                };
                return $http.post('/unpaidInvoices/setPaid',reqBody);

            }
        };
    }]);