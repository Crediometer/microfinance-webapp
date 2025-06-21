import { Button, Card, Input, Modal, Select, Typography } from "antd";
import { useState } from "react";
import SuccessModal from "./SuccessModal";

interface CreateVaultModalProps {
  createModal: boolean;
  setCreateModal: (value: boolean) => void;
}

interface FormData {
  branch: string;
  currency: string;
  giAccount: string;
}

// Configuration constants
const FORM_OPTIONS = {
  branches: [
    { value: "lekki", label: "Lekki" },
    { value: "akure", label: "Akure" },
    { value: "ondo", label: "Ondo" },
    { value: "abuja", label: "Abuja" },
  ],
  currencies: [
    { value: "ngn", label: "NGN" },
    { value: "usd", label: "USD" },
    { value: "gbp", label: "GBP" },
    { value: "eur", label: "EUR" },
  ],
};

const CreateVaultModal: React.FC<CreateVaultModalProps> = ({
  createModal,
  setCreateModal,
}) => {
  const [formData, setFormData] = useState<FormData>({
    branch: "",
    currency: "",
    giAccount: "",
  });
  const [successModal, setSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setCreateModal(false);
    // Reset form data when closing
    setFormData({
      branch: "",
      currency: "",
      giAccount: "",
    });
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.branch || !formData.currency || !formData.giAccount) {
      // You can add proper error handling here
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Close current modal and show success
      setCreateModal(false);
      setSuccessModal(true);
    } catch (error) {
      console.error("Error creating vault:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const isFormValid = formData.branch && formData.currency && formData.giAccount;

  return (
    <>
      <Modal
        title={null}
        footer={null}
        centered
        open={createModal}
        onCancel={handleClose}
        width={480}
     
        className="create-vault-modal"
        styles={{
          content: {
            backgroundColor: "#F5F5FA",
            borderRadius: "12px",
            padding: "32px",
          },
        }}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <Typography.Title 
              level={3} 
              className="!text-xl !font-semibold !text-gray-900 !mb-0"
            >
              Create New Vault
            </Typography.Title>
            <Typography.Text className="text-gray-600 text-base">
              Provide vault details to get started
            </Typography.Text>
          </div>

          {/* Form */}
          <Card className="border-0 shadow-sm bg-white">
            <div className="space-y-6">
              {/* Branch Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Branch <span className="text-red-500">*</span>
                </label>
                <Select
                  placeholder="Select branch"
                  value={formData.branch || undefined}
                  onChange={(value) => handleFormChange("branch", value)}
                  options={FORM_OPTIONS.branches}
                  className="w-full"
                  size="large"
                  showSearch
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                />
              </div>

              {/* Currency Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Currency <span className="text-red-500">*</span>
                </label>
                <Select
                  placeholder="Select currency"
                  value={formData.currency || undefined}
                  onChange={(value) => handleFormChange("currency", value)}
                  options={FORM_OPTIONS.currencies}
                  className="w-full"
                  size="large"
                  showSearch
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                />
              </div>

              {/* GI Account Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  GI Account <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter GI account number"
                  value={formData.giAccount}
                  onChange={(e) => handleFormChange("giAccount", e.target.value)}
                  size="large"
                  className="w-full"
                />
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              size="large"
              className="flex-1 h-12 border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600 font-medium"
              onClick={handleClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              size="large"
              className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 font-medium"
              onClick={handleSubmit}
              loading={loading}
              disabled={!isFormValid}
            >
              {loading ? "Creating..." : "Create Vault"}
            </Button>
          </div>
        </div>
      </Modal>

      {/* Success Modal */}
      <SuccessModal
        successModal={successModal}
        setSuccessModal={setSuccessModal}
        setConfirmModal={() => {
          setSuccessModal(false);
          // Reset form data after success
          setFormData({
            branch: "",
            currency: "",
            giAccount: "",
          });
        }}
        title="Vault Created Successfully"
      />
    </>
  );
};

export default CreateVaultModal;