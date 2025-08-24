import React, { useState } from 'react';
import { User, Search, Github, Linkedin, Phone, Mail, Users, Filter, ArrowRight } from 'lucide-react';

const TeamMappingPlatform = () => {
  const [currentStep, setCurrentStep] = useState('profile-setup');
  const [profile, setProfile] = useState({
    name: '',
    department: '',
    email: '',
    contactNo: '',
    linkedin: '',
    github: ''
  });
  
  const [preferences, setPreferences] = useState({
    projectDomain: '',
    areaOfInterest: ''
  });

  const [searchResults, setSearchResults] = useState([]);

  // Sample users data
  const sampleUsers = [
    {
      id: 1,
      name: 'Alice Johnson',
      department: 'Computer Science',
      email: 'alice@university.edu',
      projectDomain: 'Hackathon',
      areaOfInterest: 'Web Development',
      currentProject: 'E-commerce Platform',
      skills: ['React', 'Node.js', 'MongoDB'],
      lookingForTeam: true
    },
    {
      id: 2,
      name: 'Bob Smith', 
      department: 'Engineering',
      email: 'bob@university.edu',
      projectDomain: 'Competition',
      areaOfInterest: 'Smart Agriculture',
      currentProject: 'IoT Farming Solution',
      skills: ['IoT', 'Python', 'Machine Learning'],
      lookingForTeam: true
    },
    {
      id: 3,
      name: 'Carol Davis',
      department: 'Design',
      email: 'carol@university.edu', 
      projectDomain: 'Normal',
      areaOfInterest: 'Fintech',
      currentProject: 'Digital Wallet App',
      skills: ['UI/UX', 'Flutter', 'Design Systems'],
      lookingForTeam: true
    },
    {
      id: 4,
      name: 'David Wilson',
      department: 'Information Technology',
      email: 'david@university.edu',
      projectDomain: 'Hackathon', 
      areaOfInterest: 'Education',
      currentProject: 'Online Learning Platform',
      skills: ['Django', 'PostgreSQL', 'Docker'],
      lookingForTeam: true
    },
    {
      id: 5,
      name: 'Emma Brown',
      department: 'Computer Science',
      email: 'emma@university.edu',
      projectDomain: 'Competition',
      areaOfInterest: 'Web Development',
      currentProject: 'Social Media Analytics',
      skills: ['Vue.js', 'Express.js', 'MySQL'],
      lookingForTeam: true
    }
  ];

  const projectDomains = ['Hackathon', 'Competition', 'Normal', 'Research', 'Startup'];
  const areasOfInterest = ['Web Development', 'Smart Agriculture', 'Fintech', 'Education', 'Healthcare', 'E-commerce', 'AI/ML', 'Mobile Apps', 'IoT', 'Blockchain'];

  const handleProfileSubmit = () => {
    if (!profile.name || !profile.department || !profile.email || !profile.contactNo) {
      alert('Please fill in all required fields');
      return;
    }
    setCurrentStep('preferences');
  };

  const handleSearch = () => {
    if (!preferences.projectDomain || !preferences.areaOfInterest) {
      alert('Please select both project domain and area of interest');
      return;
    }

    const filteredUsers = sampleUsers.filter(user => 
      user.projectDomain === preferences.projectDomain ||
      user.areaOfInterest === preferences.areaOfInterest
    );

    setSearchResults(filteredUsers);
    setCurrentStep('results');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 16px'
    },
    card: {
      maxWidth: '448px',
      width: '100%',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      padding: '32px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '8px'
    },
    subtitle: {
      color: '#6b7280'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      outline: 'none',
      fontSize: '16px',
      transition: 'all 0.2s',
      boxSizing: 'border-box'
    },
    select: {
      width: '100%',
      padding: '12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      outline: 'none',
      fontSize: '16px',
      backgroundColor: 'white',
      boxSizing: 'border-box'
    },
    button: {
      width: '100%',
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '12px 16px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'background-color 0.2s'
    },
    fullScreenContainer: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '48px 16px'
    },
    wideContainer: {
      maxWidth: '896px',
      margin: '0 auto'
    },
    profileCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      padding: '24px',
      marginBottom: '32px'
    },
    profileGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px'
    },
    profileItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    preferencesCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      padding: '32px'
    },
    preferencesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px'
    },
    searchButton: {
      backgroundColor: '#059669',
      color: 'white',
      padding: '12px 32px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      margin: '32px auto 0',
      transition: 'background-color 0.2s'
    },
    resultsContainer: {
      maxWidth: '1152px',
      margin: '0 auto'
    },
    resultsHeader: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      padding: '24px',
      marginBottom: '32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    backButton: {
      backgroundColor: '#4b5563',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer'
    },
    userGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '24px'
    },
    userCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      padding: '24px',
      transition: 'box-shadow 0.2s'
    },
    userHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '16px'
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    avatar: {
      width: '48px',
      height: '48px',
      backgroundColor: '#dbeafe',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    badge: {
      padding: '4px 8px',
      borderRadius: '9999px',
      fontSize: '12px',
      fontWeight: '500'
    },
    availableBadge: {
      backgroundColor: '#dcfce7',
      color: '#166534'
    },
    skillsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px'
    },
    skill: {
      padding: '4px 8px',
      backgroundColor: '#f3f4f6',
      color: '#374151',
      fontSize: '12px',
      borderRadius: '4px'
    },
    buttonGroup: {
      display: 'flex',
      gap: '8px',
      marginTop: '16px'
    },
    connectButton: {
      flex: 1,
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '8px 12px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px'
    },
    viewButton: {
      flex: 1,
      backgroundColor: 'transparent',
      color: '#374151',
      padding: '8px 12px',
      borderRadius: '4px',
      border: '1px solid #d1d5db',
      cursor: 'pointer',
      fontSize: '14px'
    }
  };

  if (currentStep === 'profile-setup') {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>
            <User size={48} color="#2563eb" style={{ margin: '0 auto 16px' }} />
            <h2 style={styles.title}>Setup Your Profile</h2>
            <p style={styles.subtitle}>Enter your basic details to get started</p>
          </div>

          <div style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name *</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
                style={styles.input}
                placeholder="Enter your full name"
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Department *</label>
              <select
                value={profile.department}
                onChange={(e) => setProfile({...profile, department: e.target.value})}
                style={styles.select}
              >
                <option value="">Select Department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Business">Business</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address *</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                style={styles.input}
                placeholder="your.email@domain.com"
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Contact Number *</label>
              <input
                type="tel"
                value={profile.contactNo}
                onChange={(e) => setProfile({...profile, contactNo: e.target.value})}
                style={styles.input}
                placeholder="+91 9876543210"
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <Linkedin size={16} style={{ display: 'inline', marginRight: '4px' }} />
                LinkedIn Profile (Optional)
              </label>
              <input
                type="url"
                value={profile.linkedin}
                onChange={(e) => setProfile({...profile, linkedin: e.target.value})}
                style={styles.input}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <Github size={16} style={{ display: 'inline', marginRight: '4px' }} />
                GitHub Profile (Optional)
              </label>
              <input
                type="url"
                value={profile.github}
                onChange={(e) => setProfile({...profile, github: e.target.value})}
                style={styles.input}
                placeholder="https://github.com/yourusername"
              />
            </div>

            <button
              onClick={handleProfileSubmit}
              style={styles.button}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
            >
              Continue to Preferences
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'preferences') {
    return (
      <div style={styles.fullScreenContainer}>
        <div style={styles.wideContainer}>
          <div style={styles.profileCard}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>Your Profile</h2>
            <div style={styles.profileGrid}>
              <div style={styles.profileItem}>
                <User size={20} color="#6b7280" />
                <span style={{ color: '#374151' }}>{profile.name}</span>
              </div>
              <div style={styles.profileItem}>
                <span style={{ fontSize: '20px' }}>🏢</span>
                <span style={{ color: '#374151' }}>{profile.department}</span>
              </div>
              <div style={styles.profileItem}>
                <Mail size={20} color="#6b7280" />
                <span style={{ color: '#374151' }}>{profile.email}</span>
              </div>
              <div style={styles.profileItem}>
                <Phone size={20} color="#6b7280" />
                <span style={{ color: '#374151' }}>{profile.contactNo}</span>
              </div>
              {profile.linkedin && (
                <div style={styles.profileItem}>
                  <Linkedin size={20} color="#2563eb" />
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                    LinkedIn Profile
                  </a>
                </div>
              )}
              {profile.github && (
                <div style={styles.profileItem}>
                  <Github size={20} color="#1f2937" />
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ color: '#1f2937', textDecoration: 'none' }}>
                    GitHub Profile
                  </a>
                </div>
              )}
            </div>
          </div>

          <div style={styles.preferencesCard}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '24px' }}>Find Your Team</h2>
            <p style={{ color: '#6b7280', marginBottom: '32px' }}>Select your project preferences to find matching team members</p>

            <div style={styles.preferencesGrid}>
              <div>
                <label style={{ display: 'block', fontSize: '18px', fontWeight: '500', color: '#374151', marginBottom: '16px' }}>
                  <Filter size={20} style={{ display: 'inline', marginRight: '8px' }} />
                  Project Domain *
                </label>
                <select
                  value={preferences.projectDomain}
                  onChange={(e) => setPreferences({...preferences, projectDomain: e.target.value})}
                  style={{ ...styles.select, padding: '16px', fontSize: '16px' }}
                >
                  <option value="">Select Project Domain</option>
                  {projectDomains.map(domain => (
                    <option key={domain} value={domain}>{domain}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '18px', fontWeight: '500', color: '#374151', marginBottom: '16px' }}>
                  <span style={{ display: 'inline-block', marginRight: '8px' }}>💡</span>
                  Area of Interest *
                </label>
                <select
                  value={preferences.areaOfInterest}
                  onChange={(e) => setPreferences({...preferences, areaOfInterest: e.target.value})}
                  style={{ ...styles.select, padding: '16px', fontSize: '16px' }}
                >
                  <option value="">Select Area of Interest</option>
                  {areasOfInterest.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleSearch}
              style={styles.searchButton}
              onMouseOver={(e) => e.target.style.backgroundColor = '#047857'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#059669'}
            >
              <Search size={20} />
              Search for Team Members
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'results') {
    return (
      <div style={styles.fullScreenContainer}>
        <div style={styles.resultsContainer}>
          <div style={styles.resultsHeader}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>Team Members Found</h2>
              <p style={{ color: '#6b7280', marginTop: '4px' }}>
                Showing users working on {preferences.projectDomain} projects in {preferences.areaOfInterest}
              </p>
            </div>
            <button
              onClick={() => setCurrentStep('preferences')}
              style={styles.backButton}
            >
              Back to Search
            </button>
          </div>

          {searchResults.length > 0 ? (
            <div style={styles.userGrid}>
              {searchResults.map(user => (
                <div key={user.id} style={styles.userCard}>
                  <div style={styles.userHeader}>
                    <div style={styles.userInfo}>
                      <div style={styles.avatar}>
                        <User size={24} color="#2563eb" />
                      </div>
                      <div>
                        <h3 style={{ fontWeight: '600', color: '#1f2937', margin: 0 }}>{user.name}</h3>
                        <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>{user.department}</p>
                      </div>
                    </div>
                    <span style={{ ...styles.badge, ...styles.availableBadge }}>
                      Available
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: '500', color: '#374151', margin: '0 0 4px 0' }}>Current Project:</p>
                      <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>{user.currentProject}</p>
                    </div>

                    <div>
                      <p style={{ fontSize: '14px', fontWeight: '500', color: '#374151', margin: '0 0 4px 0' }}>Project Type:</p>
                      <span style={{ padding: '4px 8px', backgroundColor: '#dbeafe', color: '#1e40af', fontSize: '12px', borderRadius: '4px' }}>
                        {user.projectDomain}
                      </span>
                    </div>

                    <div>
                      <p style={{ fontSize: '14px', fontWeight: '500', color: '#374151', margin: '0 0 4px 0' }}>Interest Area:</p>
                      <span style={{ padding: '4px 8px', backgroundColor: '#e9d5ff', color: '#7c3aed', fontSize: '12px', borderRadius: '4px' }}>
                        {user.areaOfInterest}
                      </span>
                    </div>

                    <div>
                      <p style={{ fontSize: '14px', fontWeight: '500', color: '#374151', margin: '0 0 4px 0' }}>Skills:</p>
                      <div style={styles.skillsContainer}>
                        {user.skills.map(skill => (
                          <span key={skill} style={styles.skill}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={styles.buttonGroup}>
                    <button style={styles.connectButton}>Connect</button>
                    <button style={styles.viewButton}>View Profile</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ ...styles.card, textAlign: 'center', padding: '48px' }}>
              <Users size={64} color="#9ca3af" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: '500', color: '#1f2937', marginBottom: '8px' }}>No team members found</h3>
              <p style={{ color: '#6b7280', marginBottom: '24px' }}>
                Try adjusting your search preferences to find more matches
              </p>
              <button
                onClick={() => setCurrentStep('preferences')}
                style={{ ...styles.button, width: 'auto', padding: '12px 24px' }}
              >
                Update Search Preferences
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default TeamMappingPlatform;