import React, { useState } from 'react';
import PageBreadcrumb from '../../components/common/PageBreadCrumb';
import CreateAccount from './CreateAccount';

const Account: React.FC = () => {
    // Live validation for status
    const listCustomer = [
        {
            id: 'C001',
            name: 'Nguyen Van A',
            email: 'a@gmail.com',
            phone: '0123456789',
            username: 'nguyena',
            status: 'Active',
            created: '06/09/25',
            licenseStatus: 'Valid',
            licenseExpire: '06/09/26',
        },
        {
            id: 'C002',
            name: 'Tran Thi B',
            email: 'b@gmail.com',
            phone: '0987654321',
            username: 'tranb',
            status: 'Inactive',
            created: '01/08/25',
            licenseStatus: 'Expired',
            licenseExpire: '01/08/25',
        },
        {
            id: 'C003',
            name: 'Le Van C',
            email: 'c@gmail.com',
            phone: '0912345678',
            username: 'levanc',
            status: 'Active',
            created: '15/07/25',
            licenseStatus: 'Valid',
            licenseExpire: '15/07/26',
        },
        {
            id: 'C004',
            name: 'Pham Thi D',
            email: 'd@gmail.com',
            phone: '0934567890',
            username: 'phamd',
            status: 'Inactive',
            created: '20/06/25',
            licenseStatus: 'Expired',
            licenseExpire: '20/06/25',
        },
        {
            id: 'C005',
            name: 'Hoang Van E',
            email: 'e@gmail.com',
            phone: '0945678901',
            username: 'hoange',
            status: 'Active',
            created: '10/05/25',
            licenseStatus: 'Valid',
            licenseExpire: '10/05/26',
        },
        {
            id: 'C006',
            name: 'Vu Thi F',
            email: 'f@gmail.com',
            phone: '0956789012',
            username: 'vuf',
            status: 'Inactive',
            created: '05/04/25',
            licenseStatus: 'Expired',
            licenseExpire: '05/04/25',
        },
        {
            id: 'C007',
            name: 'Dang Van G',
            email: 'g@gmail.com',
            phone: '0967890123',
            username: 'dangg',
            status: 'Active',
            created: '28/03/25',
            licenseStatus: 'Valid',
            licenseExpire: '28/03/26',
        },
        {
            id: 'C008',
            name: 'Bui Thi H',
            email: 'h@gmail.com',
            phone: '0978901234',
            username: 'buih',
            status: 'Inactive',
            created: '12/02/25',
            licenseStatus: 'Expired',
            licenseExpire: '12/02/25',
        },
        {
            id: 'C009',
            name: 'Ngo Van I',
            email: 'i@gmail.com',
            phone: '0989012345',
            username: 'ngoi',
            status: 'Active',
            created: '03/01/25',
            licenseStatus: 'Valid',
            licenseExpire: '03/01/26',
        },
        {
            id: 'C010',
            name: 'Do Thi J',
            email: 'j@gmail.com',
            phone: '0990123456',
            username: 'doj',
            status: 'Inactive',
            created: '25/12/24',
            licenseStatus: 'Expired',
            licenseExpire: '25/12/25',
        },
        {
            id: 'C011',
            name: 'Pham Van K',
            email: 'k@gmail.com',
            phone: '0901234567',
            username: 'phamk',
            status: 'Active',
            created: '11/11/24',
            licenseStatus: 'Valid',
            licenseExpire: '11/11/25',
        },
        {
            id: 'C012',
            name: 'Tran Thi L',
            email: 'l@gmail.com',
            phone: '0912345670',
            username: 'tranl',
            status: 'Inactive',
            created: '10/10/24',
            licenseStatus: 'Expired',
            licenseExpire: '10/10/25',
        },
        {
            id: 'C013',
            name: 'Le Van M',
            email: 'm@gmail.com',
            phone: '0923456701',
            username: 'lem',
            status: 'Active',
            created: '09/09/24',
            licenseStatus: 'Valid',
            licenseExpire: '09/09/25',
        },
        {
            id: 'C014',
            name: 'Hoang Thi N',
            email: 'n@gmail.com',
            phone: '0934567012',
            username: 'hoangn',
            status: 'Inactive',
            created: '08/08/24',
            licenseStatus: 'Expired',
            licenseExpire: '08/08/25',
        },
        {
            id: 'C015',
            name: 'Vu Van O',
            email: 'o@gmail.com',
            phone: '0945670123',
            username: 'vuo',
            status: 'Active',
            created: '07/07/24',
            licenseStatus: 'Valid',
            licenseExpire: '07/07/25',
        },
        {
            id: 'C016',
            name: 'Dang Thi P',
            email: 'p@gmail.com',
            phone: '0956701234',
            username: 'dangp',
            status: 'Inactive',
            created: '06/06/24',
            licenseStatus: 'Expired',
            licenseExpire: '06/06/25',
        },
           {
            id: 'C016',
            name: 'Dang Thi P',
            email: 'p@gmail.com',
            phone: '0956701234',
            username: 'dangp',
            status: 'Inactive',
            created: '06/06/24',
            licenseStatus: 'Expired',
            licenseExpire: '06/06/25',
        },
           {
            id: 'C016',
            name: 'Dang Thi P',
            email: 'p@gmail.com',
            phone: '0956701234',
            username: 'dangp',
            status: 'Inactive',
            created: '06/06/24',
            licenseStatus: 'Expired',
            licenseExpire: '06/06/25',
        },
           {
            id: 'C016',
            name: 'Dang Thi P',
            email: 'p@gmail.com',
            phone: '0956701234',
            username: 'dangp',
            status: 'Inactive',
            created: '06/06/24',
            licenseStatus: 'Expired',
            licenseExpire: '06/06/25',
        },
    ];

    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const filteredCustomers = listCustomer.filter(c => {
        const q = search.toLowerCase();
        return (
            c.name.toLowerCase().includes(q) ||
            c.email.toLowerCase().includes(q) ||
            c.phone.toLowerCase().includes(q) ||
            c.username.toLowerCase().includes(q)
        );
    });
    const totalPages = Math.ceil(filteredCustomers.length / pageSize);
    const pagedCustomers = filteredCustomers.slice((page - 1) * pageSize, page * pageSize);

    return (
        <>
            <PageBreadcrumb pageTitle="Account" />
            <div className="relative min-h-[80vh]">
                {/* <CreateAccount /> */}
                {/* Search input above table */}
                <div className="flex justify-between items-center mt-8 mb-4">
                    <input
                        type="text"
                        value={search}
                        onChange={e => { setSearch(e.target.value); setPage(1); }}
                        placeholder="Search customers..."
                        className="border rounded px-3 py-2 w-64 text-sm bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                    <div></div>
                </div>
                <div className="overflow-x-auto" style={{ maxHeight: '700px', minHeight: '400px', overflowY: 'auto' }}>
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-700 rounded-lg ">
                        <thead className="bg-gray-50 dark:bg-dark-800">
                            <tr>
                                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Customer ID</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Customer Name</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Email</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Phone</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Username</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Status</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Created</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">License status</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">License Expiration</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-dark-900 divide-y divide-gray-100 dark:divide-dark-700">
                            {pagedCustomers.map((c) => (
                                <tr key={c.id}>
                                    <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{c.id}</td>
                                    <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{c.name}</td>
                                    <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{c.email}</td>
                                    <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{c.phone}</td>
                                    <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{c.username}</td>
                                    <td className="px-4 py-2 text-sm">
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${c.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>{c.status}</span>
                                    </td>
                                    <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{c.created}</td>
                                    <td className="px-4 py-2 text-sm">
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${c.licenseStatus === 'Valid' ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'}`}>{c.licenseStatus}</span>
                                    </td>
                                    <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{c.licenseExpire}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Absolute pagination and page size controls at bottom */}
                <div className="w-full ab left-0 bottom-0 bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 py-4 px-6 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                        <select value={pageSize} onChange={e => { setPageSize(Number(e.target.value)); setPage(1); }} className="border rounded px-2 py-1 text-sm bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-200">
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={listCustomer.length}>Show all</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-1">
                        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-2 py-1 rounded text-sm border bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-200 disabled:opacity-50">Previous</button>
                        {/* Custom pagination: show first 2, ellipsis, last */}
                        {totalPages <= 4 ? (
                            Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                                <button key={p} onClick={() => setPage(p)} className={`px-2 py-1 rounded text-sm border ${page === p ? 'bg-brand-500 text-white' : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-200'}`}>{p}</button>
                            ))
                        ) : (
                            <>
                                <button onClick={() => setPage(1)} className={`px-2 py-1 rounded text-sm border ${page === 1 ? 'bg-brand-500 text-white' : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-200'}`}>1</button>
                                <button onClick={() => setPage(2)} className={`px-2 py-1 rounded text-sm border ${page === 2 ? 'bg-brand-500 text-white' : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-200'}`}>2</button>
                                {page > 3 && <span className="px-2 py-1 text-sm">...</span>}
                                {page > 2 && page < totalPages - 1 && (
                                    <button onClick={() => setPage(page)} className={`px-2 py-1 rounded text-sm border bg-brand-500 text-white`}>{page}</button>
                                )}
                                {page < totalPages - 2 && <span className="px-2 py-1 text-sm">...</span>}
                                <button onClick={() => setPage(totalPages)} className={`px-2 py-1 rounded text-sm border ${page === totalPages ? 'bg-brand-500 text-white' : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-200'}`}>{totalPages}</button>
                            </>
                        )}
                        <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="px-2 py-1 rounded text-sm border bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-200 disabled:opacity-50">Next</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Account;

