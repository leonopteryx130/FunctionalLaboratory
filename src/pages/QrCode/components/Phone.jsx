import React, { useState, useEffect, useRef } from 'react';
import style from './Phone.scss';

// 国旗图标组件
const FlagIcon = ({ countryCode, size = 18 }) => {
  const flagMap = {
    '+86': '🇨🇳', // 中国
    '+1': '🇺🇸',  // 美国/加拿大
    '+44': '🇬🇧', // 英国
    '+81': '🇯🇵', // 日本
    '+82': '🇰🇷', // 韩国
    '+33': '🇫🇷', // 法国
    '+49': '🇩🇪', // 德国
    '+39': '🇮🇹', // 意大利
    '+34': '🇪🇸', // 西班牙
    '+7': '🇷🇺',  // 俄罗斯
    '+91': '🇮🇳', // 印度
    '+61': '🇦🇺', // 澳大利亚
    '+55': '🇧🇷', // 巴西
    '+52': '🇲🇽', // 墨西哥
    '+27': '🇿🇦', // 南非
    '+31': '🇳🇱', // 荷兰
    '+46': '🇸🇪', // 瑞典
    '+47': '🇳🇴', // 挪威
    '+45': '🇩🇰', // 丹麦
    '+358': '🇫🇮', // 芬兰
  };

  return (
    <span 
      className={style.flagIcon} 
      style={{ fontSize: size }}
      role="img" 
      aria-label={`${countryCode} flag`}
    >
      {flagMap[countryCode] || '🏳️'}
    </span>
  );
};

const Phone = ({ handleInput }) => {
  const [countryCode, setCountryCode] = useState('+86');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const dropdownRef = useRef(null);

  // 常用国家区号 - 使用更专业的国旗图标
  const countryCodes = [
    { code: '+86', name: '中国', country: 'China' },
    { code: '+1', name: '美国/加拿大', country: 'USA/Canada' },
    { code: '+44', name: '英国', country: 'UK' },
    { code: '+81', name: '日本', country: 'Japan' },
    { code: '+82', name: '韩国', country: 'Korea' },
    { code: '+33', name: '法国', country: 'France' },
    { code: '+49', name: '德国', country: 'Germany' },
    { code: '+39', name: '意大利', country: 'Italy' },
    { code: '+34', name: '西班牙', country: 'Spain' },
    { code: '+7', name: '俄罗斯', country: 'Russia' },
    { code: '+91', name: '印度', country: 'India' },
    { code: '+61', name: '澳大利亚', country: 'Australia' },
    { code: '+55', name: '巴西', country: 'Brazil' },
    { code: '+52', name: '墨西哥', country: 'Mexico' },
    { code: '+27', name: '南非', country: 'South Africa' },
    { code: '+31', name: '荷兰', country: 'Netherlands' },
    { code: '+46', name: '瑞典', country: 'Sweden' },
    { code: '+47', name: '挪威', country: 'Norway' },
    { code: '+45', name: '丹麦', country: 'Denmark' },
    { code: '+358', name: '芬兰', country: 'Finland' },
  ];

  const selectedCountry = countryCodes.find(country => country.code === countryCode);

  // 点击外部区域关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleCountryChange = (code) => {
    setCountryCode(code);
    setIsDropdownOpen(false);
    updateFormData(code, phoneNumber);
  };

  const handlePhoneChange = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    updateFormData(countryCode, newPhoneNumber);
  };

  const updateFormData = (code, phone) => {
    handleInput({
      target: {
        value: `${code}${phone}`,
        type: 'phone'
      }
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={style.phoneContainer}>
      <div className={style.phoneRow}>
        <label>手机号:</label>
        <div className={style.inputGroup}>
          {/* 自定义下拉选框 */}
          <div className={style.countrySelectContainer} ref={dropdownRef}>
            <div 
              className={style.countrySelectInput}
              onClick={toggleDropdown}
            >
              <FlagIcon countryCode={selectedCountry?.code} size={18} />
              <span className={style.countryCode}>{selectedCountry?.code}</span>
              <span className={`${style.dropdownArrow} ${isDropdownOpen ? style.rotated : ''}`}>▼</span>
            </div>
            
            {isDropdownOpen && (
              <div className={style.dropdownMenu}>
                {countryCodes.map((country, index) => (
                  <div 
                    key={index} 
                    className={`${style.dropdownItem} ${country.code === countryCode ? style.selected : ''}`}
                    onClick={() => handleCountryChange(country.code)}
                  >
                    <FlagIcon countryCode={country.code} size={18} />
                    <span className={style.countryInfo}>
                      <span className={style.countryCode}>{country.code}</span>
                      <span className={style.countryName}>{country.country}</span>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <input
            type="tel"
            placeholder="请输入手机号"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className={style.phoneInputField}
          />
        </div>
      </div>
      <div className={style.preview}>
        <span>预览: </span>
        <span className={style.previewNumber}>{countryCode}{phoneNumber}</span>
      </div>
    </div>
  );
};

export default Phone; 