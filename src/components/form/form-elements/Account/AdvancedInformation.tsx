import React, { useState } from 'react';

const servicePackages = [
	{ value: 'free', label: 'Free' },
	{ value: 'premium', label: 'Premium' },
	{ value: 'monthly', label: 'Monthly' },
	{ value: 'yearly', label: 'Yearly' },
];

const approvalStatuses = [
	{ value: 'pending', label: 'Pending Review' },
	{ value: 'approved', label: 'Approved' },
	{ value: 'rejected', label: 'Rejected' },
];

const AdvancedInformation = () => {
	const [info, setInfo] = useState<{
		package: string;
		branches: string[];
		owner_name: string;
		facebook: string;
		instagram: string;
		zalo: string;
		approval: string;
	}>({
		package: 'free',
		branches: [''],
		owner_name: '',
		facebook: '',
		instagram: '',
		zalo: '',
		approval: 'pending',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setInfo((prev) => ({ ...prev, [name]: value }));
	};

	const handleBranchChange = (idx: number, value: string) => {
		setInfo((prev) => {
			const branches = [...prev.branches];
			branches[idx] = value;
			return { ...prev, branches };
		});
	};

	const addBranch = () => {
		setInfo((prev) => ({ ...prev, branches: [...prev.branches, ''] }));
	};

	const removeBranch = (idx: number) => {
		setInfo((prev) => {
			const branches = prev.branches.filter((_, i) => i !== idx);
			return { ...prev, branches };
		});
	};

	return (
		<div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
			<h2 className="text-xl font-semibold mb-2 text-gray-900">Advanced Information</h2>
			<p className="text-sm text-gray-500 mb-6">Optional advanced account details for business management, marketing, and approval workflow.</p>
			<form className="grid grid-cols-1 gap-5">
				{/* Service Package / Account Tier */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Service Package / Account Tier</span>
					<div className="flex gap-4 mt-1">
						{servicePackages.map(pkg => (
							<label key={pkg.value} className="inline-flex items-center cursor-pointer">
								<input
									type="radio"
									name="package"
									value={pkg.value}
									checked={info.package === pkg.value}
									onChange={handleChange}
									className="accent-blue-500"
								/>
								<span className="ml-2 text-sm text-gray-700">{pkg.label}</span>
							</label>
						))}
					</div>
				</div>

				{/* Branch List */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Branch List</span>
					{info.branches.map((branch, idx) => (
						<div key={idx} className="flex gap-2 items-center mb-1">
							<input
								type="text"
								value={branch}
								onChange={e => handleBranchChange(idx, e.target.value)}
								placeholder={`Branch ${idx + 1}`}
								className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none flex-1"
							/>
							{info.branches.length > 1 && (
								<button type="button" onClick={() => removeBranch(idx)} className="text-xs text-red-500 hover:underline">Remove</button>
							)}
						</div>
					))}
					<button type="button" onClick={addBranch} className="text-xs text-blue-500 hover:underline w-fit mt-1">+ Add branch</button>
				</div>

				{/* Main Manager (Owner Name) */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Main Manager (Owner Name)</span>
					<input
						type="text"
						name="owner_name"
						value={info.owner_name}
						onChange={handleChange}
						placeholder="Contact person"
						className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
					/>
				</div>

				{/* Linked Marketing Channels */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Linked Marketing Channels</span>
					<input
						type="text"
						name="facebook"
						value={info.facebook}
						onChange={handleChange}
						placeholder="Facebook Page URL"
						className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm mb-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
					/>
					<input
						type="text"
						name="instagram"
						value={info.instagram}
						onChange={handleChange}
						placeholder="Instagram URL"
						className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm mb-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
					/>
					<input
						type="text"
						name="zalo"
						value={info.zalo}
						onChange={handleChange}
						placeholder="Zalo OA URL"
						className="bg-white border border-gray-200 rounded px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
					/>
				</div>

				{/* Approval Status */}
				<div className="flex flex-col gap-1">
					<span className="text-xs text-gray-500">Approval Status</span>
					<div className="flex gap-6 mt-1">
						{approvalStatuses.map(status => (
							<label key={status.value} className="inline-flex items-center cursor-pointer">
								<input
									type="radio"
									name="approval"
									value={status.value}
									checked={info.approval === status.value}
									onChange={handleChange}
									className="accent-blue-500"
								/>
								<span className="ml-2 text-sm text-gray-700">{status.label}</span>
							</label>
						))}
					</div>
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

export default AdvancedInformation;
