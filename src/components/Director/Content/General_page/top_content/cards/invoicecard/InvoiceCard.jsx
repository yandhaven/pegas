import React from 'react'
import modules from './InvoiceCard.module.css'

const InvoiceCard = () => {
    return (
        <div>
            <div class="card  mb-3 shadow rounded-lg bg-transparent" style={{ width: "370px" }}>
                <div className={modules.invoicecard}>
                    <div class="card-body text-light bg-transparent">
                        <h5 class="display-4">4 Invoices <i class="fas fa-file-invoice-dollar"></i> </h5>
                        <p class="card-text">You have 4 overdue invoices!</p>
                        <div class="card-footer bg-blue text-light shadow-lg rounded-lg"><span class="fa fa-refresh" /> Updated 15 min ago.</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default InvoiceCard;