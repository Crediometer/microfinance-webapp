import { useState } from "react";
import { Button, Col, Input, Row, Select, Upload, message } from "antd";
import { EditOutlined, UploadOutlined, DeleteOutlined } from "@ant-design/icons";

export const Management = () => {
    const [organizationData, setOrganizationData] = useState({
        bankName: "Credio Testing",
        address: "Lagos,Lekki",
        phoneNumber: "08167832653",
        emailAddress: "Credio@gmail.com",
        numberOfBranch: "10",
        streetAddress: "No 23 Akure Ondo State",
        city: "Ondo State",
        state: "Akure",
    });

    const [logoFile, setLogoFile] = useState(null);
    const [logoUrl, setLogoUrl] = useState("/path/to/university-logo.png"); // Default logo

    // Handle input changes
    const handleInputChange = (field: keyof typeof organizationData, value: string) => {
        setOrganizationData({
            ...organizationData,
            [field]: value,
        });
    };

    // Handle logo upload
    const handleLogoUpload = (info: any) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
            // In a real application, you'd use the response from the server
            setLogoFile(info.file);
            setLogoUrl(URL.createObjectURL(info.file.originFileObj));
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    // Handle delete logo
    const handleDeleteLogo = () => {
        setLogoFile(null);
        setLogoUrl("");
        message.success("Logo deleted successfully");
    };

    return (
        <div className="organization-info-container">
            <div className="header-section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ margin: 0 }}>Organization Information</h2>
                <Button type="primary" icon={<EditOutlined />}>
                    Edit Profile
                </Button>
            </div>

            <Row gutter={24}>
                <Col span={16}>
                    {/* Organization details form */}
                    <div className="form-section">
                        <div className="form-group" style={{ marginBottom: '16px' }}>
                            <label>Bank Name</label>
                            <Input 
                                value={organizationData.bankName}
                                onChange={(e) => handleInputChange('bankName', e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: '16px' }}>
                            <label>Address</label>
                            <Input 
                                value={organizationData.address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: '16px' }}>
                            <label>Phone Number</label>
                            <Input 
                                value={organizationData.phoneNumber}
                                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: '16px' }}>
                            <label>Email Address</label>
                            <Input 
                                value={organizationData.emailAddress}
                                onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: '16px' }}>
                            <label>Number of Branch</label>
                            <Input 
                                value={organizationData.numberOfBranch}
                                onChange={(e) => handleInputChange('numberOfBranch', e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: '16px' }}>
                            <label>Street Address</label>
                            <Input 
                                value={organizationData.streetAddress}
                                onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: '16px' }}>
                            <label>City</label>
                            <Input 
                                value={organizationData.city}
                                onChange={(e) => handleInputChange('city', e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: '16px' }}>
                            <label>State</label>
                            <Input 
                                value={organizationData.state}
                                onChange={(e) => handleInputChange('state', e.target.value)}
                                className="form-control"
                            />
                        </div>
                    </div>
                </Col>

                <Col span={8}>
                    {/* Logo Upload Section */}
                    <div className="logo-section" style={{ border: '1px solid #e8e8e8', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
                        <div className="logo-container" style={{ marginBottom: '16px', position: 'relative' }}>
                            {logoUrl && (
                                <div style={{ position: 'relative', display: 'inline-block' }}>
                                    <img 
                                        src={logoUrl} 
                                        alt="Organization Logo" 
                                        style={{ 
                                            width: '100%', 
                                            maxWidth: '180px', 
                                            borderRadius: '8px'
                                        }}
                                    />
                                    <Button 
                                        icon={<DeleteOutlined />} 
                                        danger
                                        size="small"
                                        onClick={handleDeleteLogo}
                                        style={{ 
                                            position: 'absolute',
                                            top: '5px',
                                            right: '5px',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            minWidth: 'auto',
                                            height: 'auto'
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="upload-info" style={{ marginBottom: '16px', fontSize: '12px', color: '#666' }}>
                            Logo Upload (Supports PNG, JPG, JPEG formats, Max size: 5MB)
                        </div>

                        <Upload
                            name="logo"
                            listType="text"
                            showUploadList={false}
                            action="/api/upload" // Replace with actual upload endpoint
                            onChange={handleLogoUpload}
                            maxCount={1}
                            accept=".png,.jpg,.jpeg"
                        >
                            <Button icon={<UploadOutlined />}>Upload Logo</Button>
                        </Upload>
                    </div>
                </Col>
            </Row>
        </div>
    );
};