import React, { useState } from 'react';

const businessTypes = [
	'Restaurant', 'Café', 'Street Food', 'Milk Tea', 'Bakery', 'Bar', 'Other'
];

const paymentMethods = [
	'Cash', 'Card', 'E-wallet', 'QR Code'
];

const StoreInformation = () => {
		const [store, setStore] = useState<{
			name: string;
			businessType: string;
			address: string;
			latitude: string;
			longitude: string;
			phone: string;
			email: string;
			openingHours: { open: string; close: string }[];
			logo: string;
			cover: string;
			description: string;
			payment: string[];
			taxId: string;
			license: string;
		}>({
			name: '',
			businessType: '',
			address: '',
			latitude: '',
			longitude: '',
			phone: '',
			email: '',
			openingHours: [{ open: '', close: '' }],
			logo: '',
			cover: '',
			description: '',
			payment: [],
			taxId: '',
			license: '',
		});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setStore((prev) => ({ ...prev, [name]: value }));
	};

	const handlePaymentChange = (method: string) => {
		setStore((prev) => {
			const payment = prev.payment.includes(method)
				? prev.payment.filter((m) => m !== method)
				: [...prev.payment, method];
			return { ...prev, payment };
		});
	};

	const handleTimeChange = (idx: number, field: 'open' | 'close', value: string) => {
		setStore((prev) => {
			const openingHours = prev.openingHours.map((slot, i) =>
				i === idx ? { ...slot, [field]: value } : slot
			);
			return { ...prev, openingHours };
		});
	};

	const addTimeSlot = () => {
		setStore((prev) => ({ ...prev, openingHours: [...prev.openingHours, { open: '', close: '' }] }));
	};

	return (
		<div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
			<h2 className="text-xl font-semibold mb-2 text-gray-900">Store Information</h2>
			<p className="text-sm text-gray-500 mb-6">Fill in your FnB profile details. This information will be displayed on your app/web profile and used for business, delivery, and legal purposes.</p>
			<form className="grid grid-cols-1 gap-5">
				{/* Store Name */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Store Name</span>
					<input
						type="text"
						name="name"
						value={store.name}
						onChange={handleChange}
						placeholder="Display name"
						className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
					/>
				</div>

				{/* Business Type */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Business Type</span>
					<select
						name="businessType"
						value={store.businessType}
						onChange={handleChange}
						className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
					>
						<option value="">Select type</option>
						{businessTypes.map((type) => (
							<option key={type} value={type}>{type}</option>
						))}
					</select>
				</div>

				{/* Address */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Full Address</span>
					<input
						type="text"
						name="address"
						value={store.address}
						onChange={handleChange}
						placeholder="House number, street, district, city/province"
						className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
					/>
				</div>

				{/* GPS Coordinates */}
				<div className="grid grid-cols-2 gap-3">
					<div className="flex flex-col gap-1">
						<span className="text-xs text-gray-500">Latitude</span>
						<input
							type="text"
							name="latitude"
							value={store.latitude}
							onChange={handleChange}
							placeholder="Lat"
							className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<span className="text-xs text-gray-500">Longitude</span>
						<input
							type="text"
							name="longitude"
							value={store.longitude}
							onChange={handleChange}
							placeholder="Long"
							className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
						/>
					</div>
				</div>

				{/* Contact Phone */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Contact Phone</span>
					<input
						type="text"
						name="phone"
						value={store.phone}
						onChange={handleChange}
						placeholder="Hotline"
						className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
					/>
				</div>

				{/* Contact Email */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Contact Email</span>
					<input
						type="email"
						name="email"
						value={store.email}
						onChange={handleChange}
						placeholder="Business email"
						className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
					/>
				</div>

				{/* Opening and Closing Hours (multiple slots) */}
				<div className="flex flex-col gap-2">
					<span className="text-xs text-gray-500">Opening & Closing Hours</span>
					{store.openingHours.map((slot, idx) => (
						<div key={idx} className="flex gap-2 items-center">
							<input
								type="time"
								value={slot.open}
								onChange={e => handleTimeChange(idx, 'open', e.target.value)}
								className="border border-gray-200 rounded px-2 py-1 text-sm"
							/>
							<span className="text-xs text-gray-400">to</span>
							<input
								type="time"
								value={slot.close}
								onChange={e => handleTimeChange(idx, 'close', e.target.value)}
								className="border border-gray-200 rounded px-2 py-1 text-sm"
							/>
						</div>
					))}
					<button type="button" onClick={addTimeSlot} className="text-xs text-blue-500 hover:underline w-fit mt-1">+ Add time slot</button>
				</div>

				{/* Store Logo/Avatar */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Store Logo/Avatar</span>
					<input
						type="file"
						name="logo"
						accept="image/*"
						className="text-sm"
					/>
				</div>

				{/* Cover Photo/Menu Image */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Cover Photo / Menu Image</span>
					<input
						type="file"
						name="cover"
						accept="image/*"
						className="text-sm"
					/>
				</div>

				{/* Short Description */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Short Description</span>
					<textarea
						name="description"
						value={store.description}
						onChange={handleChange}
						placeholder="Brief introduction of the store"
						rows={2}
						className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
					/>
				</div>

				{/* Supported Payment Methods */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Supported Payment Methods</span>
					<div className="flex gap-4 flex-wrap mt-1">
						{paymentMethods.map((method) => (
							<label key={method} className="inline-flex items-center cursor-pointer">
								<input
									type="checkbox"
									checked={store.payment.includes(method)}
									onChange={() => handlePaymentChange(method)}
									className="accent-blue-500"
								/>
								<span className="ml-2 text-sm text-gray-700">{method}</span>
							</label>
						))}
					</div>
				</div>

				{/* Legal Information */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Legal Information (optional)</span>
					<input
						type="text"
						name="taxId"
						value={store.taxId}
						onChange={handleChange}
						placeholder="Tax ID"
						className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm mb-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
					/>
					<input
						type="text"
						name="license"
						value={store.license}
						onChange={handleChange}
						placeholder="Business License"
						className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
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

export default StoreInformation;
