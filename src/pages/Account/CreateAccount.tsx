import React, { useState } from 'react';
import PageMeta from '../../components/common/PageMeta';
import PageBreadcrumb from '../../components/common/PageBreadCrumb';
import DefaultInputs from '../../components/form/form-elements/DefaultInputs';
import TextAreaInput from '../../components/form/form-elements/TextAreaInput';
import SelectInputs from '../../components/form/form-elements/SelectInputs';
import InputStates from '../../components/form/form-elements/InputStates';
import InputGroup from '../../components/form/form-elements/InputGroup';
import FileInputExample from '../../components/form/form-elements/FileInputExample';
import CheckboxComponents from '../../components/form/form-elements/CheckboxComponents';
import RadioButtons from '../../components/form/form-elements/RadioButtons';
import ToggleSwitch from '../../components/form/form-elements/ToggleSwitch';
import DropzoneComponent from '../../components/form/form-elements/DropZone';
import InfomationAccount from '../../components/form/form-elements/Account/InfomationAccount';
import StoreInformation from '../../components/form/form-elements/Account/StoreInformation';
import AdvancedInformation from '../../components/form/form-elements/Account/AdvancedInformation';

const CreateAccount: React.FC = () => {
    return (
        <>
            <PageMeta
                title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
                description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            {/* <PageBreadcrumb pageTitle="From Elements" /> */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                    {/* <DefaultInputs />
                    <SelectInputs />
                    <TextAreaInput />
                    <InputStates /> */}
                    <InfomationAccount />
                    <StoreInformation />
                    <AdvancedInformation />
                </div>
                <div className="space-y-6">
                    {/* <InputGroup />
                    <FileInputExample />
                    <CheckboxComponents />
                    <RadioButtons />
                    <ToggleSwitch />
                    <DropzoneComponent /> */}
                </div>
            </div>
        </>
    );
};
export default CreateAccount;

// Tailwind input style
// Add to your global CSS if needed:
// .input { @apply w-full px-3 py-2 border rounded focus:outline-none focus:ring; }
