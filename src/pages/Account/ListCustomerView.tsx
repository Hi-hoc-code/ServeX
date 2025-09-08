import React, { useState, useEffect } from 'react';
import PageBreadcrumb from '../../components/common/PageBreadCrumb';
const ListCustomerView: React.FC = () => {
    // Live validation for status
    // Load customer list from customers_100.json
    type Customer = {
        id: string;
        name: string;
        email: string;
        phone: string;
        username: string;
        status: string;
        created: string;
        licenseStatus: string;
        licenseExpire: string;
    };
    const [listCustomer, setListCustomer] = useState<Customer[]>([]);
    useEffect(() => {
        fetch('/customers_100.json')
            .then(res => res.json())
            .then(data => setListCustomer(data));
    }, []);

    // Dynamic pageSize based on table height
    const ROW_HEIGHT = 40; // px, adjust as needed
    // Tính toán chiều cao còn lại của màn hình cho bảng
    const [pageSize, setPageSize] = useState(10);
    useEffect(() => {
        // Lấy chiều cao của viewport
        const viewportHeight = window.innerHeight;
        // Ước lượng chiều cao các phần trên (breadcrumb, search, pagination, margin...)
        const headerHeight = 120; // px, có thể điều chỉnh cho phù hợp
        const paginationHeight = 80; // px
        const padding = 48; // px
        const availableHeight = viewportHeight - headerHeight - paginationHeight - padding;
        const calculatedPageSize = Math.max(1, Math.floor(availableHeight / ROW_HEIGHT));
        setPageSize(calculatedPageSize);
    }, []);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState<string>("");

    // Hàm sắp xếp
    // Lọc search trước
    const filteredCustomers = listCustomer.filter((c) => {
        const q = search.toLowerCase();
        return (
            c.name.toLowerCase().includes(q) ||
            c.email.toLowerCase().includes(q) ||
            c.phone.toLowerCase().includes(q) ||
            c.username.toLowerCase().includes(q)
        );
    });

    // Sắp xếp sau khi lọc
    const sortedCustomers = [...filteredCustomers].sort((a, b) => {
        function parseDate(str: string) {
            // dd/mm/yy hoặc dd/mm/yyyy
            const [dd, mm, yy] = str.split('/');
            let yyyy = yy;
            if (yy.length === 2) {
                yyyy = parseInt(yy) > 50 ? '19' + yy : '20' + yy;
            }
            return new Date(`${yyyy}-${mm}-${dd}`);
        }
        switch (sortBy) {
            case "name":
                return a.name.localeCompare(b.name);
            case "newest": {
                return parseDate(b.created).getTime() - parseDate(a.created).getTime();
            }
            case "oldest": {
                return parseDate(a.created).getTime() - parseDate(b.created).getTime();
            }
            case "status": {
                if (a.status === b.status) return 0;
                if (a.status === "Active") return -1;
                return 1;
            }
            case "license": {
                if (a.licenseStatus === b.licenseStatus) return 0;
                if (a.licenseStatus === "Valid") return -1;
                return 1;
            }
            default:
                return 0;
        }
    });
    // const totalPages = Math.ceil(filteredCustomers.length / pageSize);
    const totalPages = Math.ceil(sortedCustomers.length / pageSize);
    const pagedCustomers = sortedCustomers.slice((page - 1) * pageSize, page * pageSize);

    return (
        <>
            <div className="flex flex-col min-h-[80vh]">
                {/* Search */}
                <div className="flex justify-between items-center mb-4 w-full">
                    <div className="flex items-center gap-4 w-full">
                        <input
                            type="text"
                            value={search}
                            onChange={e => { setSearch(e.target.value); setPage(1); }}
                            placeholder="Search customers..."
                            className="border rounded px-3 py-2 w-64 text-sm bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
                        />
                        <div className="flex-1"></div>
                        <select
                            value={sortBy}
                            onChange={e => setSortBy(e.target.value)}
                            className="border rounded px-3 py-2 text-sm bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
                        >
                            <option value="">Sắp xếp</option>
                            <option value="name">Tên khách hàng</option>
                            <option value="newest">Thời gian mới nhất</option>
                            <option value="oldest">Thời gian cũ nhất</option>
                            <option value="status">Status</option>
                            <option value="license">Licenses</option>
                        </select>
                    </div>
                </div>

                {/* Table chiếm full chiều cao trừ search + pagination */}
                <div className="flex-1">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-700 rounded-lg">
                        <thead className="bg-gray-50 dark:bg-dark-800">
                            <tr>
                                <th className="px-4 py-2 text-left text-xs font-semibold">Customer ID</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold">Customer Name</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold">Email</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold">Phone</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold">Username</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold">Status</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold">Created</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold">License status</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold">License Expiration</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-dark-900 divide-y divide-gray-100 dark:divide-dark-700">
                            {pagedCustomers.map((c) => (
                                <tr key={c.id}>
                                    <td className="px-4 py-2 text-sm">{c.id}</td>
                                    <td className="px-4 py-2 text-sm">{c.name}</td>
                                    <td className="px-4 py-2 text-sm">{c.email}</td>
                                    <td className="px-4 py-2 text-sm">{c.phone}</td>
                                    <td className="px-4 py-2 text-sm">{c.username}</td>
                                    <td className="px-4 py-2 text-sm">
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${c.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>{c.status}</span>
                                    </td>
                                    <td className="px-4 py-2 text-sm">{c.created}</td>
                                    <td className="px-4 py-2 text-sm">
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${c.licenseStatus === 'Valid' ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'}`}>{c.licenseStatus}</span>
                                    </td>
                                    <td className="px-4 py-2 text-sm">{c.licenseExpire}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="w-full bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 py-4 px-6 flex items-center justify-end">
                    <div className="flex items-center gap-1">
                        <button disabled={page === 1} onClick={() => { setPage(page - 1); console.log(pageSize) }}
                            className="px-2 py-1 rounded text-sm border disabled:opacity-50">Previous</button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                            <button key={p} onClick={() => setPage(p)}
                                className={`px-2 py-1 rounded text-sm border ${page === p ? 'bg-brand-500 text-white' : ''}`}>
                                {p}
                            </button>
                        ))}

                        <button disabled={page === totalPages} onClick={() => { setPage(page + 1); console.log(pageSize) }}
                            className="px-2 py-1 rounded text-sm border disabled:opacity-50"
                        // disabled={page === totalPages || pagedCustomers.length < pageSize}
                        >Next</button>
                    </div>
                </div>
            </div>
        </>
    );

};

export default ListCustomerView;

