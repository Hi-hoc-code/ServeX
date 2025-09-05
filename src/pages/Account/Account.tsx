import React, { useState } from 'react';
import Switch from '../../components/form/switch/Switch';
import PageMeta from '../../components/common/PageMeta';
import PageBreadcrumb from '../../components/common/PageBreadCrumb';
import Label from '../../components/form/Label';
import Input from '../../components/form/input/InputField';
import { EyeCloseIcon, EyeIcon } from '../../icons';

const CreateAccount: React.FC = () => {
    // Live validation for status
    const [isStatusValid, setIsStatusValid] = useState(false);
    // Status switch state
    const [isActive, setIsActive] = useState(false);
    const handleSwitchChange = (checked: boolean) => {
        setIsActive(checked);
        setForm({ ...form, status: checked ? "active" : "inactive" });
        setIsStatusValid(true);
    };
    // Live validation state for all fields
    const [isValid, setIsValid] = useState({
        email: false,
        username: false,
        phone: false,
        password: false,
        confirmPassword: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    // Form state
    const [form, setForm] = useState({
        email: '',
        username: '',
        phone: '',
        password: '',
        confirmPassword: '',
        status: '',
    });
    // Validation state
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [success, setSuccess] = useState('');
    const [warning, setWarning] = useState('');
    // ...existing code...

    // Input change handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
        // Live validation for each field
        let valid = false;
        if (id === 'email') {
            valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
        } else if (id === 'username') {
            valid = value.trim().length > 0;
        } else if (id === 'phone') {
            valid = /^\d{10}$/.test(value);
        } else if (id === 'password') {
            valid =
                value.length >= 10 &&
                /[A-Z]/.test(value) &&
                /[a-z]/.test(value) &&
                /[0-9]/.test(value) &&
                /[!@#$%^&*(),.?":{}|<>]/.test(value);
        } else if (id === 'confirmPassword') {
            valid = value === form.password && value.length >= 10;
        }
        setIsValid((prev) => ({ ...prev, [id]: valid }));
    };

    // Form validation
    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!form.email) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
            newErrors.email = 'Invalid email format.';
        }
        if (!form.username) {
            newErrors.username = 'Username is required.';
        }
        if (!form.phone) {
            newErrors.phone = 'Phone is required.';
        } else if (!/^\d{10}$/.test(form.phone)) {
            newErrors.phone = 'Phone must be 10 digits.';
        }
        if (!form.password) {
            newErrors.password = 'Password is required.';
        } else if (form.password.length < 10) {
            newErrors.password = 'Password must be at least 10 characters.';
        } else {
            let validationMsg = '';
            if (!/[A-Z]/.test(form.password) || !/[a-z]/.test(form.password) || !/[0-9]/.test(form.password) || !/[!@#$%^&*(),.?":{}|<>]/.test(form.password)) {
                validationMsg = 'Example: Abc@1234567';
            }
            if (validationMsg) {
                newErrors.password = validationMsg;
            }
        }
        if (!form.confirmPassword) {
            newErrors.confirmPassword = 'Please re-enter your password.';
        } else if (form.confirmPassword.length < 10) {
            newErrors.confirmPassword = 'Password must be at least 10 characters.';
        } else if (form.confirmPassword !== form.password) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }
        if (!form.status) {
            newErrors.status = 'Status is required.';
        }
        return newErrors;
    };

    // Form submit handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess('');
        setWarning('');
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setSuccess('Account created successfully!');
        } else {
            setWarning('Please fix the errors below.');
        }
    };

    // Get current date and time formatted as dd/mm/yy HH:mm
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const formattedDateTime = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear().toString().slice(-2)} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
    return (
        <>
            <PageMeta
                title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
                description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Account" />
            <div >
                <div>
                    <div className="px-8 pt-8 pb-2 flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-wide">Create Account Owner</h2>
                    </div>
                    <form className="space-y-7 px-8 py-8" onSubmit={handleSubmit} noValidate>
                        <div className="flex flex-col gap-6">
                            <div>
                                <div className="flex flex-row items-center gap-4">
                                    <Label htmlFor="email" className="w-32 text-sm font-medium text-gray-700 dark:text-gray-200">Email</Label>
                                    <div className="flex-1 relative">
                                        <Input
                                            type="text"
                                            id="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            className={`w-full pr-10 rounded-lg border border-gray-300 dark:border-dark-700 bg-gray-50 dark:bg-dark-800 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all
                                                ${isValid.email ? 'border-green-500' : errors.email ? 'border-red-500' : ''}`}
                                            placeholder="info@gmail.com"
                                        />
                                        {isValid.email && (
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <polyline points="6 12 10 16 18 8" stroke="#18C964" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        )}
                                    </div>
                                    {(!isValid.email && errors.email) && <p className="w-48 text-sm text-red-600 whitespace-nowrap">{errors.email}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row items-center gap-4">
                                    <Label htmlFor="username" className="w-32 text-sm font-medium text-gray-700 dark:text-gray-200">Username</Label>
                                    <div className="flex-1 relative">
                                        <Input
                                            type="text"
                                            id="username"
                                            value={form.username}
                                            onChange={handleChange}
                                            className={`w-full pr-10 rounded-lg border border-gray-300 dark:border-dark-700 bg-gray-50 dark:bg-dark-800 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all
                                                ${isValid.username ? 'border-green-500' : errors.username ? 'border-red-500' : ''}`}
                                            placeholder="info_username"
                                        />
                                        {isValid.username && (
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <polyline points="6 12 10 16 18 8" stroke="#18C964" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        )}
                                    </div>
                                    {(!isValid.username && errors.username) && <p className="w-48 text-sm text-red-600 whitespace-nowrap">{errors.username}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row items-center gap-4">
                                    <Label htmlFor="phone" className="w-32 text-sm font-medium text-gray-700 dark:text-gray-200">Phone</Label>
                                    <div className="flex-1 relative">
                                        <Input
                                            type="text"
                                            id="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className={`w-full pr-10 rounded-lg border border-gray-300 dark:border-dark-700 bg-gray-50 dark:bg-dark-800 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all
                                                ${isValid.phone ? 'border-green-500' : errors.phone ? 'border-red-500' : ''}`}
                                            placeholder="0123456789"
                                        />
                                        {isValid.phone && (
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <polyline points="6 12 10 16 18 8" stroke="#18C964" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        )}
                                    </div>
                                    {(!isValid.phone && errors.phone) && <p className="w-48 text-sm text-red-600 whitespace-nowrap">{errors.phone}</p>}
                                </div>
                            </div>
                            <div>
                                <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">Password</Label>
                                <div className="relative mt-2">
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            value={form.password}
                                            onChange={handleChange}
                                            placeholder="Abc@1234567"
                                            className={`w-full pr-10 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all
                                                ${isValid.password ? 'border-green-500' : errors.password ? 'border-red-500' : ''}`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute z-30 -translate-y-1/2 cursor-pointer right-3 top-1/2"
                                        >
                                            {showPassword ? (
                                                <EyeIcon className="fill-brand-500 dark:fill-brand-400 size-5" />
                                            ) : (
                                                <EyeCloseIcon className="fill-brand-500 dark:fill-brand-400 size-5" />
                                            )}
                                        </button>
                                    </div>

                                </div>
                                {/* <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-dark-800 rounded px-3 py-2 border border-gray-200 dark:border-dark-700">
                                    <span className="font-semibold">Example:</span> Abc@1234567
                                    <br />
                                    <span>Password must be at least 10 characters and contain uppercase, lowercase, number, and special character.</span>
                                </div> */}
                                {(!isValid.password && errors.password) && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                            </div>
                            <div>
                                <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">Confirm Password</Label>
                                <div className="relative mt-2">
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            id="confirmPassword"
                                            value={form.confirmPassword}
                                            onChange={handleChange}
                                            placeholder="Abc@1234567"
                                            className={`w-full pr-10 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all
                                                ${isValid.confirmPassword ? 'border-green-500' : errors.confirmPassword ? 'border-red-500' : ''}`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute z-30 -translate-y-1/2 cursor-pointer right-3 top-1/2"
                                        >
                                            {showPassword ? (
                                                <EyeIcon className="fill-brand-500 dark:fill-brand-400 size-5" />
                                            ) : (
                                                <EyeCloseIcon className="fill-brand-500 dark:fill-brand-400 size-5" />
                                            )}
                                        </button>
                                    </div>

                                </div>
                                {(!isValid.confirmPassword && errors.confirmPassword) && <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>}
                            </div>
                            <div>
                                <Label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 block">Status</Label>
                                <div className="flex items-center gap-4 mt-2">
                                    <Switch
                                        label=''
                                        defaultChecked={false}
                                        onChange={handleSwitchChange}
                                    />
                                    <span className={`px-3 py-1 rounded text-sm font-semibold ${isActive ? ' text-green-600' : ' text-red-500'}`}>
                                        {isActive ? 'Active' : 'Inactive'}
                                    </span>
                                </div>
                                {errors.status && <p className="mt-2 text-sm text-red-600">{errors.status}</p>}
                            </div>
                        </div>
                        <div className="border-t border-brand-100 dark:border-dark-700 pt-7">
                            <div className="flex flex-col gap-2">
                                <Label className="font-semibold text-base text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-brand-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 7.5h18M4.5 7.5v11.25a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V7.5M9.75 10.5h.008v.008H9.75V10.5zm4.5 0h.008v.008h-.008V10.5zm-4.5 4.5h.008v.008H9.75v-.008zm4.5 0h.008v.008h-.008v-.008z" />
                                    </svg>
                                    Created Date & Time
                                </Label>
                                <div className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-brand-50 to-brand-100 dark:from-dark-700 dark:to-dark-800 shadow-sm border border-brand-100 dark:border-dark-600">
                                    <span className="text-lg font-mono font-bold text-brand-700 dark:text-brand-200 tracking-wide">
                                        {formattedDateTime}
                                    </span>
                                    <span className="px-2 py-1 text-xs rounded bg-brand-200 text-brand-900 dark:bg-brand-700 dark:text-brand-100">GMT+7</span>
                                </div>
                            </div>
                        </div>
                        {warning && (
                            <div className="mb-4 flex items-center gap-2 px-4 py-3 rounded bg-yellow-100 text-yellow-800 border border-yellow-300">
                                <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" /></svg>
                                <span>{warning}</span>
                            </div>
                        )}
                        {success && (
                            <div className="mb-4 flex items-center gap-2 px-4 py-3 rounded bg-green-100 text-green-800 border border-green-300">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>{success}</span>
                            </div>
                        )}
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-base font-semibold bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg hover:scale-[1.02] hover:shadow-xl active:scale-100 disabled:bg-brand-300 mt-8"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateAccount;