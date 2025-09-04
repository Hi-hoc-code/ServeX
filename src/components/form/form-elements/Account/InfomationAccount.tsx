import React, { useState } from 'react';

const roles = [
    { value: 'owner', label: 'Owner' },
    { value: 'staff', label: 'Staff' },
    { value: 'admin', label: 'System Admin' },
];

const statuses = [
    { value: 'active', label: 'Active' },
    { value: 'locked', label: 'Locked' },
    { value: 'pending', label: 'Pending Approval' },
];

const InfomationAccount = () => {
    const [account, setAccount] = useState({
        account_id: 'ACC123456',
        email: '',
        username: '',
        password: '',
        role: 'staff',
        status: 'active',
        created_at: '2025-09-01 10:00',
        last_login: '2025-09-04 09:30',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setAccount((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-2 text-gray-900">Account Information</h2>
            <p className="text-xs text-gray-500 mb-4">Basic account details for login and user management.</p>
            <form className="grid grid-cols-1 gap-4">
                {/* Account ID */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400">Account ID</label>
                    <input
                        type="text"
                        name="account_id"
                        value={account.account_id}
                        readOnly
                        className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-gray-400 text-sm"
                    />
                </div>
                {/* Email or Phone */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500">Email or Phone</label>
                    <input
                        type="text"
                        name="email"
                        value={account.email}
                        onChange={handleChange}
                        placeholder="Email or phone"
                        className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>
                {/* Username */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={account.username}
                        onChange={handleChange}
                        placeholder="Username"
                        className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>
                {/* Password */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={account.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        autoComplete="new-password"
                    />
                </div>
                {/* Role */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500">Role</label>
                    <select
                        name="role"
                        value={account.role}
                        onChange={handleChange}
                        className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    >
                        {roles.map((role) => (
                            <option key={role.value} value={role.value}>{role.label}</option>
                        ))}
                    </select>
                </div>
                {/* Status as radio buttons */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500">Status</label>
                    <div className="flex gap-6 mt-1">
                        {statuses.map((status) => (
                            <label key={status.value} className="inline-flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="status"
                                    value={status.value}
                                    checked={account.status === status.value}
                                    onChange={handleChange}
                                    className="accent-blue-500"
                                />
                                <span className="ml-2 text-sm text-gray-700">{status.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
                {/* Account Creation Date */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400">Created</label>
                    <input
                        type="text"
                        name="created_at"
                        value={account.created_at}
                        readOnly
                        className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-gray-400 text-sm"
                    />
                </div>
                {/* Last Login */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400">Last Login</label>
                    <input
                        type="text"
                        name="last_login"
                        value={account.last_login}
                        readOnly
                        className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-gray-400 text-sm"
                    />
                </div>
                {/* Save Button */}
                <div className="pt-2">
                    <button
                        type="button"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition-all duration-150"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InfomationAccount;
