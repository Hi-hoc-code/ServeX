import React, { useState, useEffect } from 'react';
import PageBreadcrumb from '../../components/common/PageBreadCrumb';
import CreateAccount from './CreateAccount';
import ListCustomerView from './ListCustomerView';
import PageMeta from '../../components/common/PageMeta';

const Account: React.FC = () => {
    return (
        <>
            <PageMeta
                title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
                description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Account" />
            <div className="flex flex-row gap-6 w-full">
                {/* ListCustomer bên trái */}
                <div className="flex-1 border rounded p-4 shadow">
                    <ListCustomerView />
                </div>
                {/* CreateAccount bên phải */}
                <div className="w-[400px] min-w-[320px] border rounded p-4 shadow">
                    <CreateAccount />
                </div>
            </div>
        </>
    );

};

export default Account;

