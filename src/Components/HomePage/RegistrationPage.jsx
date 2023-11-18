import React, { useState } from 'react';
import styles from './RegistrationPage.module.css';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    Name: '',
    UserName: '',
    email: '',
    mobile: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      termsAccepted: !prevData.termsAccepted,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!formData.Name.trim()) {
      newErrors.Name = 'Field is required';
    }

    if (!formData.UserName.trim()) {
      newErrors.UserName = 'Field is required';
    }

    if (!formData.email) {
      newErrors.email = 'Field is required';
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Field is required';
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'Check this box if you want to proceed';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      localStorage.setItem('registrationData', JSON.stringify(formData));
      navigate('/Genre');

      setFormData({
        Name: '',
        UserName: '',
        email: '',
        mobile: '',
        termsAccepted: false,
      });
      setErrors({});
    }
  };

  return (
    <div className={styles.Container}>
      <h2 className={styles.super}>Super app</h2>
      <p className={styles.account}>Create your new account</p>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="Name"
          value={formData.Name}
          onChange={handleInputChange}
        />
        {errors.Name && <div className={styles.error}>{errors.Name}</div>}

        <input
          type="text"
          placeholder="UserName"
          name="UserName"
          value={formData.UserName}
          onChange={handleInputChange}
        />
        {errors.UserName && <div className={styles.error}>{errors.UserName}</div>}

        <input
          type="email"
          placeholder="e-mail"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className={styles.error}>{errors.email}</div>}

        <input
          type="tel"
          placeholder="Mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
        />
        {errors.mobile && <div className={styles.error}>{errors.mobile}</div>}

        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleCheckboxChange}
          />
          Share my registration data with Superapp
        </label>
        {errors.termsAccepted && <div className={styles.error}>{errors.termsAccepted}</div>}

        <button type="submit" onClick={(e) => handleSubmit(e)} className={styles.submitButton}>
          SIGN UP
        </button>
      </form>
      <footer className={styles.footer}>
        <p>
          By clicking on Sign up, you agree to Superapp{' '}
          <span style={{ color: 'green' }}>Terms and Conditions of Use</span>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares, and protects your personal data, please read the{' '}
          <span style={{ color: 'green' }}>Privacy Policy</span>
        </p>
      </footer>
    </div>
  );
};

export default RegistrationPage;
